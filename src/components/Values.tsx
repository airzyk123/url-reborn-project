import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Lightbulb, Compass, Star } from "lucide-react";
import connectionsIllustration from "@/assets/connections-illustration.jpg";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia i zrozumienie",
      description: "Każda osoba zasługuje na bycie wysłuchaną i zrozumianą bez oceniania. Tworzę przestrzeń pełną ciepła i akceptacji."
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo i zaufanie",
      description: "Gabinet to miejsce, gdzie możesz być sobą. Gwarantuję pełną poufność i profesjonalne podejście do każdej sytuacji."
    },
    {
      icon: Users,
      title: "Autentyczne relacje",
      description: "Wierzę w siłę prawdziwych połączeń między ludźmi. Uczę, jak budować relacje oparte na wzajemnym szacunku i zrozumieniu."
    },
    {
      icon: Lightbulb,
      title: "Rozwój i świadomość",
      description: "Każdy człowiek ma w sobie potencjał do wzrostu. Pomagam odkryć własne zasoby i rozwijać umiejętności życiowe."
    },
    {
      icon: Compass,
      title: "Holistyczne podejście",
      description: "Patrzę na człowieka całościowo - uwzględniam emocje, myśli, ciało i relacje w procesie terapeutycznym."
    },
    {
      icon: Star,
      title: "Jakość i profesjonalizm",
      description: "Stale podnoszę swoje kwalifikacje i uczestniczę w superwizjach, aby zapewnić najwyższą jakość pomocy."
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth mb-6">
              Moje wartości
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fundamenty, na których buduję swoją pracę i relacje z klientami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Illustration */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={connectionsIllustration}
                  alt="Ilustracja przedstawiająca połączenia między ludźmi"
                  className="w-full h-auto rounded-3xl shadow-hero"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sage/10 to-transparent"></div>
              </div>
            </div>

            {/* Values */}
            <div className="order-1 lg:order-2 space-y-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index}
                    className="shadow-card border-0 bg-white/90 hover:bg-white transition-all duration-300 group hover:shadow-hero"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-sage" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-earth mb-2">
                            {value.title}
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-20">
            <Card className="shadow-hero border-0 bg-gradient-to-br from-sage/5 to-beige/10">
              <CardContent className="p-12 text-center">
                <blockquote className="text-xl lg:text-2xl font-serif text-earth leading-relaxed mb-6">
                  "Gramy w jednej drużynie - to nie tylko słowa, ale filozofia mojej pracy. 
                  Każda relacja to spotkanie dwóch równych sobie osób, które razem szukają 
                  drogi do lepszego zrozumienia siebie i świata."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-0.5 bg-sage mr-4"></div>
                  <cite className="text-sage font-medium">dr Olga Filaszkiewicz</cite>
                  <div className="w-16 h-0.5 bg-sage ml-4"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;