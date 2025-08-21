import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, message, service } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Brakuje wymaganych pól' }),
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

    // Prepare email content
    const emailHtml = `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
      ${service ? `<p><strong>Interesująca usługa:</strong> ${service}</p>` : ''}
      <p><strong>Wiadomość:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
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
        error: 'Wystąpił błąd podczas wysyłania wiadomości',
        details: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})