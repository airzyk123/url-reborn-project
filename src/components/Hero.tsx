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
            <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-sage font-medium rounded-full shadow-soft">
              <Heart className="w-4 h-4 mr-2" />
              Psychoterapia
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-sage font-medium rounded-full shadow-soft">
              <Users className="w-4 h-4 mr-2" />
              Konsultacje rodzicielskie
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-sage font-medium rounded-full shadow-soft">
              <Star className="w-4 h-4 mr-2" />
              Warsztaty
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-hero">
              <p className="text-lg sm:text-xl text-earth font-medium mb-4">
                Bo co jest w życiu ważniejszego, niż dbanie o
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-earth mb-4">
                LEPSZE RELACJE
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-earth mb-6">
                z sobą samym i ze światem
              </h2>
              <p className="text-lg sm:text-xl text-earth font-medium">
                które dają poczucie, że gramy w jednej drużynie?
              </p>
            </div>
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
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-earth font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              onClick={scrollToServices}
            >
              Poznaj moją ofertę
            </Button>
          </div>

          {/* Subtitle */}
          <p className="mt-12 text-base sm:text-lg text-white max-w-2xl mx-auto animate-fade-in bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/20" style={{ animationDelay: "0.6s" }}>
            <strong className="text-white drop-shadow-lg">dr Olga Filaszkiewicz</strong> - psychoterapeuta, trener komunikacji<br/>
            <span className="text-sage-light font-medium drop-shadow-lg">Pracownia "Lepsze relacje"</span> • Gdynia, Plac Unii
          </p>
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