import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => scrollToSection('contact');
  const scrollToServices = () => scrollToSection('services');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Spokojne wnętrze gabinetu terapeutycznego"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-black/20 backdrop-blur-sm text-white font-medium rounded-full shadow-soft border border-white/30">
              <Heart className="w-4 h-4 mr-2" />
              Psychoterapia
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-black/20 backdrop-blur-sm text-white font-medium rounded-full shadow-soft border border-white/30">
              <Users className="w-4 h-4 mr-2" />
              Konsultacje rodzicielskie
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-black/20 backdrop-blur-sm text-white font-medium rounded-full shadow-soft border border-white/30">
              <Star className="w-4 h-4 mr-2" />
              Warsztaty
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-8 animate-fade-in text-center" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Olga Filaszkiewicz
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mb-4 drop-shadow-lg">
              Psychoterapeutka • Psycholog • Psychopedagog • Trenerka • Wykładowca Akademicki • Doktor nauk społecznych
            </div>
            <p className="text-lg sm:text-xl text-white/95 font-medium drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
              Wieloletnie doświadczenie w psychoterapii humanistycznej i terapii systemowej. 
              Profesjonalne wsparcie w bezpiecznej, empatycznej przestrzeni.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-gradient-accent text-white font-semibold px-8 py-4 rounded-full shadow-hero hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={scrollToContact}
            >
              Umów pierwszą rozmowę
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/50 bg-black/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-black/30 transition-all duration-300"
              onClick={scrollToServices}
            >
              Poznaj moją ofertę
            </Button>
          </div>

          {/* Location Info */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <p className="text-white/95 font-medium text-lg mb-2">
                Gabinet Psychoterapeutyczny
              </p>
              <p className="text-white/80 text-base">
                ul. Władysława IV 40/17, Plac Unii, II piętro<br/>
                81-395 Gdynia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-earth/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-earth/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;