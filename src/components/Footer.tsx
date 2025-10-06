import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">Gabinet Psychoterapeutyczny</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Profesjonalne wsparcie psychologiczne i psychoterapeutyczne oparte na metodach 
                humanistycznych i systemowych. Wieloletnie doświadczenie w pracy z osobami, 
                parami i rodzinami.
              </p>
              <div className="flex items-center text-white/60">
                <Heart className="w-5 h-5 mr-2 text-sage-light" />
                <span>dr Olga Filaszkiewicz • Psycholog • Psychoterapeuta</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Usługi</h4>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#services" className="hover:text-sage-light transition-colors">
                    Psychoterapia
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sage-light transition-colors">
                    Konsultacje rodzicielskie
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sage-light transition-colors">
                    Grupy wsparcia
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sage-light transition-colors">
                    Warsztaty i wykłady
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sage-light transition-colors">
                    Seminaria Family-lab
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-sage-light flex-shrink-0" />
                  <a 
                    href="mailto:info@lepszerelacje.pl"
                    className="hover:text-sage-light transition-colors"
                  >
                    info@lepszerelacje.pl
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-sage-light flex-shrink-0" />
                  <a 
                    href="tel:+48459115349"
                    className="hover:text-sage-light transition-colors"
                  >
                    459 115 349
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-sage-light flex-shrink-0" />
                  <span>ul. Władysława IV 40/17, Plac Unii, II piętro, Gdynia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <nav className="flex flex-wrap gap-6 mb-4 md:mb-0">
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-sage-light transition-colors"
                >
                  O mnie
                </a>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-sage-light transition-colors"
                >
                  Oferta
                </a>
                <a 
                  href="#values" 
                  className="text-white/80 hover:text-sage-light transition-colors"
                >
                  Wartości
                </a>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-sage-light transition-colors"
                >
                  Kontakt
                </a>
              </nav>
              
              <div className="text-white/60 text-sm">
                © {currentYear} Gabinet Psychoterapeutyczny - dr Olga Filaszkiewicz. Wszystkie prawa zastrzeżone.
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm mb-4">
              Doktor nauk społecznych • Certyfikowana psychoterapeuta • 
              Członek Polskiego Towarzystwa Psychologicznego • Superwizor w szkole "intra"
            </p>
            <p className="text-white/50 text-xs">
              Wszelkie informacje podane na stronie są objęte tajemnicą zawodową 
              zgodnie z kodeksem etyki psychologa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;