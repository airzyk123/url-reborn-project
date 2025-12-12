import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Lightbulb, Compass, Star } from "lucide-react";
import empathyIllustration from "@/assets/empathy-illustration.jpg";
import safetyIllustration from "@/assets/safety-illustration.jpg";
import authenticRelationsIllustration from "@/assets/authentic-relations-illustration.jpg";
import growthIllustration from "@/assets/growth-illustration.jpg";
import holisticIllustration from "@/assets/holistic-illustration.jpg";
import qualityIllustration from "@/assets/quality-illustration.jpg";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia i zrozumienie",
      description: "Stosując podejście humanistyczne, tworzę atmosferę pełną akceptacji, gdzie każdy klient może doświadczyć empatycznego traktowania zgodnie z najwyższymi standardami etycznymi.",
      image: empathyIllustration,
      imageAlt: "Empatia w psychoterapii - dłonie w geście wsparcia symbolizujące empatyczne podejście terapeutyczne"
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo i zaufanie",
      description: "W swojej pracy zapewniam bezpieczną przestrzeń terapeutyczną opartą na zasadach poufności i profesjonalnej etyki zawodowej.",
      image: safetyIllustration,
      imageAlt: "Bezpieczeństwo w terapii - spokojne otoczenie symbolizujące bezpieczną przestrzeń gabinetu psychoterapeutycznego w Gdyni"
    },
    {
      icon: Users,
      title: "Autentyczne relacje terapeutyczne",
      description: "W kontakcie z klientem stawiam na zbudowanie bezpiecznej relacji terapeutycznej, która jest fundamentem skutecznej zmiany i osobistego wzrostu.",
      image: authenticRelationsIllustration,
      imageAlt: "Relacja terapeutyczna - ilustracja autentycznego kontaktu między terapeutą a klientem"
    },
    {
      icon: Lightbulb,
      title: "Rozwój i samoświadomość",
      description: "Wykorzystując różne metody terapii i rozwoju wspieram odkrywanie własnych zasobów i rozwijanie kompetencji emocjonalnych oraz społecznych.",
      image: growthIllustration,
      imageAlt: "Rozwój osobisty - roślina symbolizująca wzrost i samoświadomość w procesie psychoterapii"
    },
    {
      icon: Compass,
      title: "Podejście integracyjne",
      description: "Łącząc wiedzę z różnych podejść terapeutycznych oferuję kompleksowe wsparcie uwzględniające wszystkie aspekty funkcjonowania człowieka.",
      image: holisticIllustration,
      imageAlt: "Podejście holistyczne - ilustracja integracyjnego podejścia w psychoterapii humanistyczno-doświadczeniowej"
    },
    {
      icon: Star,
      title: "Najwyższe standardy jakości",
      description: "Regularnie uczestniczę w superwizjach, szkoleniach i konferencjach naukowych, aby zapewnić najwyższą jakość świadczonych przeze mnie usług.",
      image: qualityIllustration,
      imageAlt: "Wysokie standardy - symbol profesjonalizmu i ciągłego rozwoju zawodowego psychoterapeuty"
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
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index}
                    className="shadow-card border-0 bg-white/90 hover:bg-white transition-all duration-300 group hover:shadow-hero overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                          <img
                            src={value.image}
                            alt={value.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 flex-1">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                              <IconComponent className="w-5 h-5 text-sage" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-earth mb-2">
                                {value.title}
                              </h3>
                              <p className="text-foreground/80 leading-relaxed text-sm">
                                {value.description}
                              </p>
                            </div>
                          </div>
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
                  Moja praca opiera się na szacunku, akceptacji i autentyczności. 
                  Relacja terapeutyczna to przestrzeń współpracy, gdzie razem z klientem 
                  odkrywamy źródła życiowych problemów oraz ścieżki prowadzące do zdrowia psychicznego i lepszego funkcjonowania.
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-0.5 bg-sage mr-4"></div>
                  <cite className="text-sage font-medium">Olga Filaszkiewicz</cite>
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