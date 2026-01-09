import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Award, Users } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  const qualifications = [
    "Psychoterapeutka humanistyczno-doświadczeniowa (Szkoła Psychoterapii \"INTRA\" w Warszawie)",
    "Magister psychologii (spec. psychologia kliniczna z psychoterapią)",
    "Magister pedagogiki (spec. Psychopedagogika)",
    "Wykładowca akademicki",
    "Doktor nauk społecznych",
    "Trenerka komunikacji opartej na empatii (NVC)",
    "Trenerka Family-lab Polska"
  ];

  const personalInfo = [
    "Mama, żona, córka, przyjaciółka",
    "Pańcia dwóch mopsów",
    "Uwielbiam podróżować",
    "Na przemian być w ruchu, a później zwalniać",
    "Być z ludźmi, a potem leżeć samej pod kocem z książką",
    "A przede wszystkim jestem sobą :)"
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
                <div className="relative w-80 h-96 mx-auto lg:w-full lg:h-[500px]">
                   <img
                     src="/lovable-uploads/olga-filaszkiewicz-profile.jpg"
                     alt="Olga Filaszkiewicz - psychoterapeutka, psycholog i psychopedagog z Gdyni. Specjalistka psychoterapii humanistyczno-doświadczeniowej, certyfikowana trenerka Family-lab Polska"
                     className="w-full h-full object-contain rounded-3xl shadow-hero"
                   />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sage/20 to-transparent"></div>
                </div>
              </div>

              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                 <CardContent className="p-6">
                   <p className="text-lg leading-relaxed text-foreground">
                     Nazywam się <strong>Olga Filaszkiewicz</strong> i od wielu lat wspieram ludzi w ich rozwoju, 
                     powrocie do równowagi i wyjściu z kryzysów. Jestem magistrem psychologii ze specjalnością 
                     psychologia kliniczna z psychoterapią a także magistrem pedagogiki ze specjalnością psychopedagogika. 
                     Posiadam również wieloletnie doświadczenie akademickie, jestem doktorem nauk społecznych.
                   </p>
                   <p className="text-lg leading-relaxed text-foreground mt-4">
                     W zakresie psychoterapii kształcę się w rekomendowanej przez <strong>Polskie Towarzystwo Psychologiczne 
                     Szkole Psychoterapii „INTRA" w Warszawie</strong>.
                   </p>
                   <p className="text-lg leading-relaxed text-foreground mt-4">
                     W mojej pracy psychoterapeutycznej korzystam z <strong>nurtu integratywnego</strong> ze szczególnym 
                     skupieniem na <strong>psychoterapii humanistyczno-doświadczeniowej i egzystencjalnej</strong>.
                   </p>
                   <p className="text-lg leading-relaxed text-foreground mt-4">
                     Ważna jest dla mnie <strong>relacja terapeutyczna, wzajemne zaufanie, empatia i akceptacja</strong>.
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
                       Moją wiedzę pogłębiałam poprzez udział w specjalistycznych programach kształcenia podyplomowego,
                       superwizjach z doświadczonymi psychoterapeutami oraz międzynarodowych konferencjach naukowych. 
                       Jestem członkinią Polskiego Stowarzyszenia Humanistyczno-Doświadczeniowego i przestrzegam 
                       kodeksu etyki zawodowej psychologa.
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;