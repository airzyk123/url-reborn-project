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
      id: "psychoterapia-indywidualna",
      icon: User,
      title: "Psychoterapia indywidualna",
      subtitle: "Terapia humanistyczno-doświadczeniowa",
      description: "Profesjonalna psychoterapia dla osób dorosłych zmagających się z trudnymi emocjami, lękami, stresem czy kryzysami życiowymi. Oferuję bezpieczną przestrzeń dla głębokiej pracy nad sobą. Zapraszam zarówno osoby w kryzysie psychicznym, jak i chcące lepiej siebie zrozumieć, rozwinąć swoją samoświadomość, budować bardziej satysfakcjonujące relacje.",
      features: [
        "Sesje indywidualne 50 min",
        "Stacjonarne (gabinet w centrum Gdyni) lub online"
      ],
      price: "200 zł",
      gradient: "from-sage-light/20 to-sage/10"
    },
    {
      id: "konsultacje-psychologiczne",
      icon: Heart,
      title: "Konsultacje psychologiczne",
      subtitle: "Profesjonalne wsparcie w trudnych sytuacjach",
      description: "Oferuję konsultacje psychologiczne dla osób potrzebujących profesjonalnej oceny sytuacji, wsparcia w podejmowaniu trudnych decyzji lub pomocy w zrozumieniu swoich problemów. Konsultacje mogą być pierwszym krokiem przed terapią lub samodzielną formą pomocy w konkretnych sytuacjach życiowych.",
      features: [
        "Wsparcie w trudnych decyzjach",
        "Pomoc w rozumieniu problemów",
        "Krótkoterminowe interwencje"
      ],
      price: "200 zł",
      gradient: "from-sage-light/20 to-sage/10"
    },
    {
      id: "konsultacje-rodzicielskie",
      icon: Users,
      title: "Konsultacje rodzicielskie",
      subtitle: "Profesjonalne wsparcie w rodzicielstwie",
      description: "Zapraszam na profesjonalne konsultacje rodzicielskie, podczas których pomogę Ci w budowaniu autentycznych relacji z dziećmi, rozwiązywaniu konfliktów rodzinnych i rozwijaniu umiejętności komunikacyjnych opartych na wzajemnym szacunku.",
      features: [
        "Sesja do 75 minut",
        "Certyfikat Family-lab Polska (Jesper Juul)",
        "Certyfikat Rodzicielstwa Bliskości (A. Stein, M. Stańczyk)",
        "Komunikacja bez przemocy (NVC)",
        "Rodzicielstwo oparte na wzajemnych szacunku"
      ],
      price: "300 zł",
      gradient: "from-sage/15 to-beige/20"
    },
    {
      id: "grupy-terapeutyczne",
      icon: MessageCircle,
      title: "Grupy terapeutyczno-rozwojowe",
      subtitle: "Wsparcie w grupie pod kierunkiem terapeuty",
      description: "Prowadzę grupy terapeutyczne i wsparcia dla osób chcących pracować nad sobą w towarzystwie innych. Zapewniam bezpieczną przestrzeń grupową, gdzie można dzielić się doświadczeniami, otrzymywać wsparcie i rozwijać umiejętności interpersonalne.",
      features: [
        "Grupy pod kierunkiem psychoterapeuty",
        "Bezpieczna przestrzeń grupowa",
        "Rozwój umiejętności społecznych",
        "Wzajemne wsparcie uczestników"
      ],
      price: "150 zł",
      gradient: "from-beige/20 to-sage-light/15"
    },
    {
      id: "trening-asertywnosci",
      icon: Target,
      title: "Trening asertywności",
      subtitle: "Rozwijanie umiejętności asertywnej komunikacji",
      description: "Trening asertywności to praktyczne warsztaty rozwijające umiejętności wyrażania swoich potrzeb, granic i opinii w sposób szanujący siebie i innych. Uczę, jak komunikować się pewnie i skutecznie w różnych sytuacjach życiowych, zarówno osobistych, jak i zawodowych.",
      features: [
        "Praktyczne ćwiczenia i scenki",
        "Techniki asertywnej komunikacji",
        "Praca z granicami osobistymi",
        "Rozwój pewności siebie"
      ],
      price: "Na zapytanie",
      gradient: "from-sage-light/15 to-beige/20"
    },
    {
      id: "warsztaty-wyklady",
      icon: BookOpen,
      title: "Warsztaty i wykłady",
      subtitle: "Edukacja psychologiczna dla organizacji",
      description: "Opierając się na bogatym doświadczeniu akademickim i terapeutyczno-rozwojowym prowadzę warsztaty dla firm, szkół i organizacji. Specjalizuję się w komunikacji bez przemocy (NVC), budowaniu zespołów i rozwoju kompetencji emocjonalnych. Każde szkolenie dostosowuję do potrzeb organizacji.",
      features: [
        "Doświadczenie akademickie",
        "Komunikacja bez przemocy (NVC)",
        "Szkolenia dla organizacji",
        "Indywidualnie dostosowane programy"
      ],
      price: "Na zapytanie",
      gradient: "from-beige/15 to-sage-light/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth mb-6">
              Oferta
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  id={service.id}
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
                      Skontaktuj się ze mną
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
                  <p><strong>Poniedziałek - Piątek:</strong> 10:00 - 20:00</p>
                  <p><strong>Sobota:</strong> do uzgodnienia</p>
                  <p><strong>Niedziela:</strong> nieczynne</p>
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
                  <p>✓ W siedzibie klienta</p>
                  <p>✓ Warsztaty wyjazdowe</p>
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