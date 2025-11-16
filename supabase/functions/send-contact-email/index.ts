import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Input validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
  service: z.string().trim().max(100, "Service must be less than 100 characters").optional().or(z.literal("")),
  recaptchaToken: z.string().min(1, "reCAPTCHA verification required")
})

// HTML escape function to prevent injection
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const requestData = await req.json()

    // Validate and sanitize input
    let validated
    try {
      validated = contactSchema.parse(requestData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
        console.error('Validation error:', errorMessages)
        return new Response(
          JSON.stringify({ error: `Nieprawidłowe dane: ${errorMessages}` }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
      throw error
    }

    const { name, email, phone, message, service, recaptchaToken } = validated

    // Verify reCAPTCHA token
    const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY')
    if (!recaptchaSecret) {
      console.error('Missing RECAPTCHA_SECRET_KEY environment variable')
      throw new Error('Brak konfiguracji reCAPTCHA')
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    })

    const recaptchaResult = await recaptchaResponse.json()
    console.log('reCAPTCHA verification:', recaptchaResult)

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.error('reCAPTCHA verification failed:', recaptchaResult)
      return new Response(
        JSON.stringify({ error: 'Weryfikacja reCAPTCHA nie powiodła się. Spróbuj ponownie.' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get Resend API key
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    console.log('RESEND_API_KEY exists:', !!resendApiKey)
    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY environment variable')
      throw new Error('Brak klucza API Resend')
    }

    // Prepare email content with escaped HTML
    const emailHtml = `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ''}
      ${service ? `<p><strong>Interesująca usługa:</strong> ${escapeHtml(service)}</p>` : ''}
      <p><strong>Wiadomość:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>Wiadomość wysłana z formularza kontaktowego na stronie Pracowni "Lepsze relacje"</small></p>
    `

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Formularz kontaktowy <noreply@olgafilaszkiewicz.pl>',
        to: ['info@olgafilaszkiewicz.pl'],
        reply_to: email,
        subject: `Nowa wiadomość od ${name}`,
        html: emailHtml,
      }),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.error('Błąd Resend Response Status:', emailResponse.status)
      console.error('Błąd Resend Response:', error)
      throw new Error(`Resend API Error: ${emailResponse.status} - ${error}`)
    }

    const result = await emailResponse.json()
    console.log('Email wysłany:', result)

    return new Response(
      JSON.stringify({ success: true, message: 'Wiadomość została wysłana pomyślnie' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Błąd funkcji wysyłania emaila:', error)
    console.error('Error details:', error.message)
    return new Response(
      JSON.stringify({ 
        error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})