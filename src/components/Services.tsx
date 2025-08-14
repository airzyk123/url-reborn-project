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
  Target
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
      description: "Profesjonalne wsparcie psychoterapeutyczne w nurcie humanistyczno-doświadczeniowym. Pomoc w radzeniu sobie z trudnościami emocjonalnymi, kryzysami życiowymi i problemami relacyjnymi.",
      features: [
        "Sesje indywidualne 50 min",
        "Podejście humanistyczne",
        "Bezpieczna przestrzeń",
        "Profesjonalne wsparcie"
      ],
      price: "150 zł",
      gradient: "from-sage-light/20 to-sage/10"
    },
    {
      icon: Users,
      title: "Konsultacje rodzicielskie",
      subtitle: "Wsparcie dla rodziców i opiekunów",
      description: "Pomoc w budowaniu lepszych relacji z dziećmi, rozwiązywaniu konfliktów rodzinnych i rozwoju umiejętności komunikacyjnych w oparciu o metodę Family-lab.",
      features: [
        "Wsparcie w rodzicielstwie",
        "Metody Family-lab",
        "Komunikacja z dziećmi",
        "Rozwiązywanie konfliktów"
      ],
      price: "120 zł",
      gradient: "from-beige/30 to-sage-light/20"
    },
    {
      icon: MessageCircle,
      title: "Grupy mocy, grupy wsparcia",
      subtitle: "Spotkania w grupach rozwojowo-wsparciowych",
      description: "Regularne spotkania grupowe dla rodziców i osób chcących rozwijać swoje umiejętności komunikacyjne oraz otrzymać wsparcie w trudnych sytuacjach życiowych.",
      features: [
        "Spotkania grupowe",
        "Wzajemne wsparcie",
        "Wymiana doświadczeń",
        "Rozwój osobisty"
      ],
      price: "80 zł",
      gradient: "from-accent/20 to-beige/20"
    },
    {
      icon: BookOpen,
      title: "Warsztaty i wykłady",
      subtitle: "O komunikacji i budowaniu relacji",
      description: "Warsztaty i wykłady dla firm, szkół i organizacji na temat komunikacji bez przemocy, budowania zespołu i efektywnej współpracy w życiu zawodowym.",
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
      description: "Profesjonalny coaching osobisty i zawodowy pomagający w określeniu celów, przezwyciężaniu barier i rozwijaniu potencjału. Wsparcie w budowaniu pewności siebie i realizacji marzeń.",
      features: [
        "Określanie celów życiowych",
        "Przezwyciężanie barier",
        "Rozwój pewności siebie",
        "Planowanie działań"
      ],
      price: "130 zł",
      gradient: "from-accent/25 to-sage-light/15"
    },
    {
      icon: Heart,
      title: "Seminaria Family-lab",
      subtitle: "Na licencji organizacji założonej przez Jespera Juula",
      description: "Autorskie seminaria Family-lab Polska oparte na filozofii Jespera Juula, skupiające się na budowaniu autentycznych relacji i wzajemnego szacunku w rodzinie.",
      features: [
        "Metoda Jesper Juul",
        "Certyfikowane seminaria",
        "Filozofia Family-lab",
        "Autentyczne relacje"
      ],
      price: "200 zł",
      gradient: "from-sage-dark/15 to-beige-cream/25"
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