import { useState } from "react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękuję za kontakt. Odpowiem w ciągu 24 godzin.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: ""
      });
    } catch (error) {
      console.error('Błąd wysyłania:', error);
      toast({
        title: "Błąd wysyłania",
        description: "Przepraszam, wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    "Konsultacje rodzicielskie",
    "Grupy wsparcia",
    "Warsztaty i wykłady",
    "Seminaria Family-lab",
    "Inne"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card border-0 bg-white/90">
              <CardHeader>
                <CardTitle className="flex items-center text-earth">
                  <MessageSquare className="w-6 h-6 text-sage mr-3" />
                  Napisz do mnie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Imię i nazwisko *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="border-sage/20 focus:border-sage focus:ring-sage"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-sage/20 focus:border-sage focus:ring-sage"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="border-sage/20 focus:border-sage focus:ring-sage"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Interesująca usługa
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        className="w-full border border-sage/20 rounded-md px-3 py-2 focus:border-sage focus:ring-sage focus:outline-none"
                      >
                        <option value="">Wybierz usługę</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Wiadomość *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={6}
                      className="border-sage/20 focus:border-sage focus:ring-sage"
                      placeholder="Opowiedz o tym, w czym mogę Ci pomóc..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent text-white font-medium py-3 rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 group"
                  >
                    {isSubmitting ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        Wyślij wiadomość
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-card border-0 bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center text-earth">
                    <Phone className="w-6 h-6 text-sage mr-3" />
                    Dane kontaktowe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-sage" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-earth">{info.title}</p>
                            {info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? (
                              <a 
                                href={info.link}
                                className="text-foreground hover:text-sage transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="shadow-card border-0 bg-gradient-to-br from-sage/5 to-beige/10">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="text-xl font-semibold text-earth mb-4">
                    Umów pierwszą rozmowę
                  </h3>
                   <p className="text-foreground/80 mb-6">
                    Pierwszy kontakt to ważny krok. W pracowni "Lepsze relacje" nie musisz się na nic zobowiązywać - 
                    porozmawiajmy o tym, jak mogę Ci pomóc.
                  </p>
                  <Button 
                    className="bg-gradient-accent text-white font-medium px-8 py-3 rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
                    onClick={scrollToForm}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Rozpocznij rozmowę
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card border-0 bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center text-earth">
                    <Heart className="w-6 h-6 text-sage mr-3" />
                    Znajdź mnie także
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2 border-sage/20 hover:border-sage hover:bg-sage/5 text-sage hover:text-sage"
                      onClick={() => window.open('https://www.facebook.com/lepszerelacje', '_blank')}
                    >
                      <Facebook className="w-5 h-5" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2 border-sage/20 hover:border-sage hover:bg-sage/5 text-sage hover:text-sage"
                      onClick={() => window.open('https://pl.linkedin.com/in/olgafilaszkiewicz', '_blank')}
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Note */}
              <Card className="shadow-card border-0 bg-sage/5">
                <CardContent className="p-6">
                  <p className="text-sm text-foreground/70 text-center">
                    <strong>Poufność gwarantowana.</strong> Wszystkie informacje podane 
                    w formularzu są traktowane zgodnie z zasadami tajemnicy zawodowej 
                    i nie będą udostępniane osobom trzecim.
                  </p>
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