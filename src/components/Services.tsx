import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Users, 
  MessageCircle, 
  BookOpen, 
  Heart,
  ArrowRight,
  Clock,
  MapPin,
  Target,
  Users2,
  UserCheck,
  MessageSquare
} from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: User,
      title: "Psychoterapia",
      subtitle: "Spotkania indywidualne, psychoterapeutyczne",
      description: "Przeznaczona dla osób dorosłych zmagających się z trudnymi emocjami, lękami, stresem lub przechodzących trudny okres w życiu. W bezpiecznej przestrzeni pomogę Ci lepiej zrozumieć siebie i odnaleźć własne zasoby. To inwestycja w Twoje dobre samopoczucie i rozwój osobisty.",
      features: [
        "Sesje indywidualne 50 min",
        "Podejście humanistyczne",
        "Bezpieczna przestrzeń",
        "Profesjonalne wsparcie"
      ],
      price: "200 zł",
      gradient: "from-sage-light/20 to-sage/10"
    },
    {
      icon: Users,
      title: "Konsultacje rodzicielskie",
      subtitle: "Wsparcie dla rodziców i opiekunów",
      description: "Dedykowane rodzicom, którzy chcą budować lepsze relacje z dziećmi i skuteczniej radzić sobie z wyzwaniami wychowawczymi. Pomogę Ci rozwiązywać konflikty rodzinne i rozwijać umiejętności komunikacyjne w oparciu o metodę Family-lab. Wspólnie znajdziemy sposób na harmonijne życie rodzinne.",
      features: [
        "Wsparcie w rodzicielstwie",
        "Metody Family-lab",
        "Komunikacja z dziećmi",
        "Rozwiązywanie konfliktów"
      ],
      price: "200 zł",
      gradient: "from-beige/30 to-sage-light/20"
    },
    {
      icon: MessageCircle,
      title: "Grupy mocy, grupy wsparcia",
      subtitle: "Spotkania w grupach rozwojowo-wsparciowych",
      description: "Stworzone dla osób szukających wsparcia społecznego i chcących rozwijać się w towarzystwie innych. W grupie znajdziesz zrozumienie, wymienisz doświadczenia i otrzymasz cenne perspektywy. To przestrzeń wzajemnego wsparcia, gdzie nikt nie jest sam ze swoimi wyzwaniami.",
      features: [
        "Spotkania grupowe",
        "Wzajemne wsparcie",
        "Wymiana doświadczeń",
        "Rozwój osobisty"
      ],
      price: "200 zł",
      gradient: "from-accent/20 to-beige/20"
    },
    {
      icon: BookOpen,
      title: "Warsztaty i wykłady",
      subtitle: "O komunikacji i budowaniu relacji",
      description: "Przeznaczone dla firm, szkół i organizacji, które chcą poprawić komunikację i współpracę w zespole. Uczę skutecznej komunikacji bez przemocy i budowania relacji opartych na wzajemnym szacunku. Każdy warsztat dostosowuję do specyficznych potrzeb Twojej organizacji.",
      features: [
        "Dla firm i organizacji",
        "Komunikacja NVC",
        "Budowanie zespołu",
        "Indywidualne podejście"
      ],
      price: "Na zapytanie",
      gradient: "from-sage/20 to-accent/15"
    },
    {
      icon: Target,
      title: "Coaching",
      subtitle: "Osiąganie celów i rozwój osobisty",
      description: "Skierowany do osób, które chcą osiągnąć swoje cele i rozwinąć swój potencjał. Pomogę Ci określić priorytety, przezwyciężyć bariery i wypracować plan działania. W procesie coachingu odkryjesz swoje mocne strony i nauczysz się skutecznie realizować swoje marzenia.",
      features: [
        "Określanie celów życiowych",
        "Przezwyciężanie barier",
        "Rozwój pewności siebie",
        "Planowanie działań"
      ],
      price: "200 zł",
      gradient: "from-accent/25 to-sage-light/15"
    },
    {
      icon: Heart,
      title: "Seminaria Family-lab",
      subtitle: "Na licencji organizacji założonej przez Jespera Juula",
      description: "Przeznaczone dla rodziców i opiekunów pragnących budować autentyczne, pełne szacunku relacje z dziećmi. Oparte na filozofii Jespera Juula, seminaria uczą jak być prawdziwym liderem w rodzinie. Znajdziesz tu narzędzia do tworzenia harmonijnych relacji rodzinnych opartych na wzajemnym zrozumieniu.",
      features: [
        "Metoda Jesper Juul",
        "Certyfikowane seminaria",
        "Filozofia Family-lab",
        "Autentyczne relacje"
      ],
      price: "200 zł",
      gradient: "from-sage-dark/15 to-beige-cream/25"
    },
    {
      icon: Users2,
      title: "Terapia par i małżeństw",
      subtitle: "Wsparcie dla związków i relacji partnerskich",
      description: "Przeznaczona dla par, które chcą poprawić jakość swojego związku i lepiej się rozumieć. Pomagam w rozwiązywaniu konfliktów, odbudowywaniu bliskości oraz uczeniu się skutecznej komunikacji. Wspólnie znajdziemy drogę do harmonijnej relacji opartej na wzajemnym szacunku i zrozumieniu.",
      features: [
        "Sesje dla par",
        "Rozwiązywanie konfliktów",
        "Odbudowa bliskości",
        "Poprawa komunikacji"
      ],
      price: "250 zł",
      gradient: "from-sage-light/25 to-accent/20"
    },
    {
      icon: UserCheck,
      title: "Terapia indywidualna osób dorosłych",
      subtitle: "Profesjonalne wsparcie psychoterapeutyczne",
      description: "Dedykowana osobom dorosłym, które zmagają się z trudnymi emocjami, stresem, lękami lub przechodzą trudny okres w życiu. W bezpiecznej przestrzeni pomogę Ci lepiej zrozumieć siebie, odnaleźć własne zasoby i wypracować strategie radzenia sobie z wyzwaniami. To inwestycja w Twoje dobre samopoczucie i rozwój osobisty.",
      features: [
        "Wsparcie indywidualne",
        "Radzenie ze stresem",
        "Praca z emocjami",
        "Rozwój osobisty"
      ],
      price: "200 zł",
      gradient: "from-beige/25 to-sage/15"
    },
    {
      icon: MessageSquare,
      title: "Konsultacje psychologiczne",
      subtitle: "Profesjonalna pomoc w trudnych sytuacjach",
      description: "Skierowane do osób potrzebujących profesjonalnego wsparcia w konkretnej sytuacji życiowej lub poszukujących porady w trudnych decyzjach. Oferuję przestrzeń do przemyśleń, nowe perspektywy patrzenia na problem oraz praktyczne narzędzia do działania. To forma wsparcia dla tych, którzy chcą lepiej zrozumieć swoją sytuację i znaleźć optymalne rozwiązania.",
      features: [
        "Wsparcie doraźne",
        "Nowe perspektywy",
        "Praktyczne narzędzia",
        "Pomoc w decyzjach"
      ],
      price: "180 zł",
      gradient: "from-accent/20 to-beige-cream/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth mb-6">
              Co proponuję
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Szeroka oferta wsparcia psychoterapeutycznego i rozwojowego dostosowana 
              do indywidualnych potrzeb
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className={`group shadow-card border-0 bg-gradient-to-br ${service.gradient} hover:shadow-hero transition-all duration-500 hover:scale-105 overflow-hidden relative`}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center group-hover:bg-sage/30 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-sage" />
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-sage">{service.price}</span>
                        {service.price !== "Na zapytanie" && (
                          <p className="text-xs text-muted-foreground">za sesję</p>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-earth mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-sage font-medium">
                      {service.subtitle}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-foreground/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-sage rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outline" 
                      className="w-full group/btn border-sage/30 text-sage hover:bg-sage hover:text-white transition-all duration-300"
                      onClick={scrollToContact}
                    >
                      Dowiedz się więcej
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="shadow-card border-0 bg-white/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-sage mr-3" />
                  <h3 className="text-lg font-semibold text-earth">Godziny przyjęć</h3>
                </div>
                <div className="space-y-2 text-foreground">
                  <p><strong>Poniedziałek - Piątek:</strong> 9:00 - 18:00</p>
                  <p><strong>Sobota:</strong> 10:00 - 14:00</p>
                  <p><strong>Niedziela:</strong> Zamknięte</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-white/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-sage mr-3" />
                  <h3 className="text-lg font-semibold text-earth">Sposób pracy</h3>
                </div>
                <div className="space-y-2 text-foreground">
                  <p>✓ Spotkania stacjonarne w gabinecie</p>
                  <p>✓ Konsultacje online</p>
                  <p>✓ Wyjazdy na warsztaty</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;