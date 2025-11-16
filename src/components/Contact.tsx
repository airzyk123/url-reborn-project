// Proszę skopiować i wkleić cały ten kod jako plik Contact
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  MessageSquare,
  Heart,
  Facebook,
  Linkedin
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// NOWOŚĆ: Importujemy useEffect
import React, { useEffect } from "react";

// Validation schema
const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Imię i nazwisko jest wymagane").max(100, "Imię i nazwisko musi mieć mniej niż 100 znaków"),
  email: z.string().trim().email("Nieprawidłowy adres email").max(255, "Email musi mieć mniej niż 255 znaków"),
  phone: z.string().trim().max(20, "Telefon musi mieć mniej niż 20 znaków").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Wiadomość jest wymagana").max(2000, "Wiadomość musi mieć mniej niż 2000 znaków"),
  service: z.string().trim().max(100, "Usługa musi mieć mniej niż 100 znaków").optional().or(z.literal("")),
  recaptchaToken: z.string().min(1, "Weryfikacja reCAPTCHA jest wymagana")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
      recaptchaToken: "", // Poprawne default value
    },
  });

  // --- NOWY BLOK KODU ---
  // Upubliczniamy funkcje callback dla reCAPTCHA
  useEffect(() => {
    const callbackName = "onRecaptchaSuccess";
    const expiredCallbackName = "onRecaptchaExpired";

    // Ta funkcja będzie wywołana przez Google po zaznaczeniu checkboxa
    (window as any)[callbackName] = (token: string) => {
      // Ustawiamy token w react-hook-form i odpalamy walidację
      form.setValue('recaptchaToken', token, { shouldValidate: true });
    };

    // Ta funkcja będzie wywołana, gdy token wygaśnie
    (window as any)[expiredCallbackName] = () => {
      // Czyścimy token w react-hook-form i odpalamy walidację
      form.setValue('recaptchaToken', '', { shouldValidate: true });
    };

    // Sprzątamy po sobie, gdy komponent jest odmontowywany
    return () => {
      delete (window as any)[callbackName];
      delete (window as any)[expiredCallbackName];
    };
  }, [form]); // Zależność od 'form', aby mieć dostęp do 'setValue'
  // --- KONIEC NOWEGO BLOKU ---


  const scrollToForm = () => {
    // ... (bez zmian)
  };

  // ZMIANA: Funkcja onSubmit jest teraz czystsza
  const onSubmit = async (values: ContactFormValues) => {
    // 'values' zawiera już 'recaptchaToken' dzięki callbackowi
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values // Przekazujemy 'values' bezpośrednio
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękuję za kontakt. Odpowiem w ciągu 24 godzin.",
      });
      
      form.reset();
      // Resetujemy też reCAPTCHA
      (window as any).grecaptcha?.reset();
    } catch (error) {
      console.error('Błąd wysyłania:', error);
      toast({
        title: "Błąd wysyłania",
        description: "Przepraszam, wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    // ... (bez zmian)
  ];

  const services = [
    // ... (bez zmian)
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ... (Section Header bez zmian) ... */}

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-primary/10 shadow-lg">
              <CardHeader>
                {/* ... (CardTitle bez zmian) ... */}
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* ... (Wszystkie FormFields dla name, email, phone, service, message bez zmian) ... */}
                    
                    {/* --- ZMIENIONY BLOK reCAPTCHA --- */}
                    <FormField
                      control={form.control}
                      name="recaptchaToken"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-center">
                          <FormControl>
                            <div
                              className="g-recaptcha"
                              data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                              // Teraz przekazujemy NAZWY funkcji jako stringi
                              data-callback="onRecaptchaSuccess"
                              data-expired-callback="onRecaptchaExpired"
                            ></div>
                          </FormControl>
                          {/* To pokaże błąd, jeśli walidacja zawiedzie */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* --- KONIEC ZMIENIONEGO BLOKU --- */}

                    <Button
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 transition-all hover:scale-[1.02]"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* ... (Reszta sekcji: Contact Information, Quick Actions, Social Media bez zmian) ... */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
