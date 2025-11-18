import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do strony głównej
            </Link>

            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Polityka Prywatności
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Informacje ogólne</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych 
                  osobowych przekazanych przez użytkowników w związku z korzystaniem ze strony 
                  internetowej www.olgafilaszkiewicz.pl prowadzonej przez Gabinet Psychoterapii 
                  i Rozwoju Olga Filaszkiewicz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Administrator danych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Administratorem danych osobowych jest:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4">
                  <p className="font-semibold">Gabinet Psychoterapii i Rozwoju Olga Filaszkiewicz</p>
                  <p className="text-muted-foreground mt-2">ul. Świętojańska 66/2</p>
                  <p className="text-muted-foreground">81-393 Gdynia</p>
                  <p className="text-muted-foreground mt-2">E-mail: info@lepszerelacje.pl</p>
                  <p className="text-muted-foreground">Telefon: 459 115 349</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Rodzaj przetwarzanych danych</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  W ramach świadczonych usług przetwarzamy następujące dane osobowe:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Imię i nazwisko</li>
                  <li>Adres e-mail</li>
                  <li>Numer telefonu</li>
                  <li>Dane podane w formularzu kontaktowym</li>
                  <li>Adres IP (dane techniczne)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cel i podstawa przetwarzania danych</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dane osobowe są przetwarzane w następujących celach:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Udzielenie odpowiedzi na zapytania</strong> - podstawa prawna: 
                    zgoda użytkownika (art. 6 ust. 1 lit. a RODO)
                  </li>
                  <li>
                    <strong>Umówienie konsultacji lub spotkania</strong> - podstawa prawna: 
                    podjęcie działań na żądanie osoby, której dane dotyczą (art. 6 ust. 1 lit. b RODO)
                  </li>
                  <li>
                    <strong>Świadczenie usług terapeutycznych i konsultacyjnych</strong> - podstawa prawna: 
                    wykonanie umowy (art. 6 ust. 1 lit. b RODO)
                  </li>
                  <li>
                    <strong>Prowadzenie dokumentacji medycznej</strong> - podstawa prawna: 
                    obowiązek prawny (art. 6 ust. 1 lit. c RODO oraz ustawa o prawach pacjenta)
                  </li>
                  <li>
                    <strong>Marketing</strong> - podstawa prawna: prawnie uzasadniony interes 
                    administratora (art. 6 ust. 1 lit. f RODO) lub zgoda (art. 6 ust. 1 lit. a RODO)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Okres przechowywania danych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, 
                  dla których zostały zebrane, w tym:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Dane kontaktowe: do momentu wycofania zgody lub spełnienia celu</li>
                  <li>Dokumentacja medyczna: 20 lat od ostatniego wpisu zgodnie z przepisami prawa</li>
                  <li>Dane do celów marketingowych: do momentu wycofania zgody</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Udostępnianie danych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dane osobowe mogą być udostępniane następującym kategoriom odbiorców:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Dostawcom usług IT i hostingu</li>
                  <li>Dostawcom usług księgowych i prawnych</li>
                  <li>Organom państwowym, jeśli wymaga tego prawo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Prawa osób, których dane dotyczą</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Każda osoba, której dane są przetwarzane, ma prawo do:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Dostępu do swoich danych osobowych</li>
                  <li>Sprostowania danych</li>
                  <li>Usunięcia danych</li>
                  <li>Ograniczenia przetwarzania</li>
                  <li>Przenoszenia danych</li>
                  <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                  <li>Cofnięcia zgody w dowolnym momencie</li>
                  <li>Wniesienia skargi do organu nadzorczego (Prezes UODO)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Pliki cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Strona internetowa wykorzystuje pliki cookies (ciasteczka), które są niewielkimi 
                  plikami tekstowymi zapisywanymi na urządzeniu użytkownika. Cookies służą do 
                  zapewnienia prawidłowego funkcjonowania strony oraz zbierania anonimowych 
                  statystyk odwiedzin. Użytkownik może w każdej chwili zmienić ustawienia cookies 
                  w swojej przeglądarce internetowej.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Bezpieczeństwo danych</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
                  ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii 
                  danych objętych ochroną, w szczególności zabezpiecza dane przed ich udostępnieniem 
                  osobom nieupoważnionym, utratą, uszkodzeniem lub zniszczeniem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Tajemnica zawodowa</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Psychoterapeuta podlega obowiązkowi zachowania tajemnicy zawodowej zgodnie z 
                  Kodeksem Etyki Zawodowej Psychoterapeuty. Informacje uzyskane w trakcie 
                  psychoterapii są poufne i nie będą ujawniane osobom trzecim bez zgody pacjenta, 
                  z wyjątkiem sytuacji przewidzianych prawem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Zmiany w Polityce Prywatności</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce 
                  Prywatności. O wszelkich zmianach użytkownicy będą informowani poprzez 
                  umieszczenie odpowiedniego komunikatu na stronie internetowej.
                </p>
              </section>

              <section className="bg-sage/5 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">12. Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed">
                  W sprawach dotyczących przetwarzania danych osobowych oraz realizacji 
                  przysługujących praw prosimy o kontakt:
                </p>
                <div className="mt-4">
                  <p className="text-muted-foreground">E-mail: info@lepszerelacje.pl</p>
                  <p className="text-muted-foreground">Telefon: 459 115 349</p>
                </div>
              </section>

              <div className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
                <p>Data ostatniej aktualizacji: {new Date().toLocaleDateString('pl-PL')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
