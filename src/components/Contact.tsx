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
// Importujemy useEffect i useRef
import React, { useEffect, useRef } from "react";

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
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
      recaptchaToken: "",
    },
  });

  // reCAPTCHA explicit render
  useEffect(() => {
    const loadRecaptcha = () => {
      if (recaptchaRef.current && (window as any).grecaptcha && (window as any).grecaptcha.render) {
        try {
          if (recaptchaWidgetId.current === null) {
            recaptchaWidgetId.current = (window as any).grecaptcha.render(recaptchaRef.current, {
              sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
              callback: (token: string) => {
                form.setValue('recaptchaToken', token, { shouldValidate: true });
              },
              'expired-callback': () => {
                form.setValue('recaptchaToken', '', { shouldValidate: true });
              }
            });
          }
        } catch (error) {
          console.error('reCAPTCHA render error:', error);
        }
      }
    };

    // Wait for grecaptcha to be ready
    if ((window as any).grecaptcha?.ready) {
      (window as any).grecaptcha.ready(loadRecaptcha);
    } else {
      // Fallback: try loading after a delay
      const timer = setTimeout(loadRecaptcha, 1000);
      return () => clearTimeout(timer);
    }
  }, [form]);

  const scrollToForm = () => {
    const formElement = document.querySelector('#contact form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const nameInput = document.getElementById('name') as HTMLInputElement;
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 500);
      }
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values 
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękuję za kontakt. Odpowiem w ciągu 24 godzin.",
      });
      
      form.reset();
      if (recaptchaWidgetId.current !== null) {
        (window as any).grecaptcha?.reset(recaptchaWidgetId.current);
      }
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
    {
      icon: Mail,
      title: "Email",
      value: "info@olgafilaszkiewicz.pl",
      link: "mailto:info@olgafilaszkiewicz.pl"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "459 115 349",
      link: "tel:+48459115349"
    },
    {
      icon: MapPin,
      title: "Lokalizacja",
      value: "ul. Świętojańska 66/2, 81-393 Gdynia",
      link: "#"
    },
    {
      icon: Clock,
      title: "Godziny przyjęć",
      value: "Pn-Pt: 10:00-20:00, Sob: do uzgodnienia, Nd: nieczynne",
      link: "#"
    }
  ];

  const services = [
    "Psychoterapia indywidualna",
    "Konsultacje psychologiczne",
    "Konsultacje rodzicielskie",
    "Grupy terapeutyczno-rozwojowe",
    "Trening asertywności",
    "Inne"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth mb-6">
              Skontaktuj się ze mną
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gotowa/gotowy na pierwszą rozmowę? Napisz lub zadzwoń - razem znajdziemy 
              najlepszy sposób wsparcia dla Ciebie.
            </p>
          </div>

          {/* Photo Banner */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-hero max-w-2xl mx-auto">
            <img
              src="/lovable-uploads/olga-contact.jpg"
              alt="Olga Filaszkiewicz z książkami o psychoterapii - profesjonalne podejście oparte na wiedzy"
              className="w-full h-64 object-cover object-top"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-primary/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-earth flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Formularz kontaktowy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Imię i nazwisko *</FormLabel>
                          <FormControl>
                            <Input
                              id="name"
                              placeholder="Jan Kowalski"
                              className="bg-white border-2 border-border/50 focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jan@example.com"
                              className="bg-white border-2 border-border/50 focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+48 123 456 789"
                              className="bg-white border-2 border-border/50 focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interesująca usługa</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-2 border-border/50 focus:border-primary transition-colors">
                                <SelectValue placeholder="Wybierz usługę" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wiadomość *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="W czym mogę Ci pomóc?"
                              className="bg-white border-2 border-border/50 focus:border-primary transition-colors min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* reCAPTCHA */}
                    <FormField
                      control={form.control}
                      name="recaptchaToken"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-center">
                          <FormControl>
                            <div ref={recaptchaRef}></div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 transition-all hover:scale-[1.02]"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim. Wysyłając formularz kontaktowy potwierdzam, że zapoznałem/am się z Polityką Prywatności i wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zgłoszenie.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-2 border-primary/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-earth flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Dane kontaktowe
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/50 transition-all group"
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-earth mb-1">{info.title}</h4>
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-2 border-primary/10 shadow-lg bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-earth flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Szybkie działania
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-2 hover:bg-primary/10"
                    onClick={scrollToForm}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Wypełnij formularz
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-2 hover:bg-primary/10"
                    asChild
                  >
                    <a href="tel:+48459115349">
                      <Phone className="w-4 h-4 mr-2" />
                      Zadzwoń teraz
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-2 hover:bg-primary/10"
                    asChild
                  >
                    <a href="mailto:info@olgafilaszkiewicz.pl">
                      <Mail className="w-4 h-4 mr-2" />
                      Wyślij email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-2 border-primary/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-earth">
                    Media społecznościowe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=100063570006823"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <Facebook className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/olga-filaszkiewicz-a34bb4114/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
