import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Award, Users } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  const qualifications = [
    "Psychopedagog",
    "Psychoterapeuta humanistyczno-doświadczeniowa",
    "Trenerka Family-lab Polska",
    "Trenerka komunikacji opartej na empatii (NVC)",
    "Doktor nauk społecznych"
  ];

  const personalInfo = [
    "Mama, żona, córka",
    "Pańcia dwóch mopsów",
    "Nauczyciel akademicki",
    "A przede wszystkim sobą :)"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth mb-6">
              O mnie
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo and Introduction */}
            <div className="space-y-8">
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                  <img
                    src={profilePlaceholder}
                    alt="dr Olga Filaszkiewicz"
                    className="w-full h-full object-cover rounded-3xl shadow-hero"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sage/20 to-transparent"></div>
                </div>
              </div>

              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    Nazywam się <strong>Olga Filaszkiewicz</strong>, pomagam nawiązywać 
                    prawdziwy <strong>kontakt z samym sobą i z drugim człowiekiem</strong>. 
                    Uczę jak gadać, by się dogadać: w rodzinie, w pracy, po prostu w życiu.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mt-4">
                    Wspieram też rodziców i nauczycieli w budowaniu 
                    <strong> autentycznej, świadomej, pełnej wzajemnego szacunku, 
                    a także przywództwa w relacji</strong> z dziećmi.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Professional and Personal Info */}
            <div className="space-y-8">
              {/* Professional Qualifications */}
              <Card className="shadow-card border-0 bg-white/90">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="w-6 h-6 text-sage mr-3" />
                    <h3 className="text-xl font-semibold text-earth">Zawodowo</h3>
                  </div>
                  <div className="space-y-4">
                    {qualifications.map((qual, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="w-4 h-4 text-sage mt-1 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{qual}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Ukończyłam m.in. dwuletnią Szkołę Trenerów Empatii w Warszawie, 
                      szkolenia z prowadzenia grup wsparcia oraz coaching oparty na potrzebach.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Info */}
              <Card className="shadow-card border-0 bg-white/90">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Heart className="w-6 h-6 text-sage mr-3" />
                    <h3 className="text-xl font-semibold text-earth">Prywatnie</h3>
                  </div>
                  <div className="space-y-3">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex items-center">
                        <Users className="w-4 h-4 text-sage mr-3 flex-shrink-0" />
                        <span className="text-foreground">{info}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Brałam udział w licznych szkoleniach z Rodzicielstwa Bliskości, 
                      Porozumienia bez Przemocy, przywództwa oraz empatycznego wspierania nauczycieli.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                  Family-lab Polska
                </Badge>
                <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                  NVC
                </Badge>
                <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                  Psychoterapia Humanistyczna
                </Badge>
                <Badge variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                  Coaching
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;