import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-sage hover:text-sage-dark mb-8">
          ← Powrót do strony głównej
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-foreground">Polityka Prywatności</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez użytkowników w związku z korzystaniem ze strony internetowej www.olgafilaszkiewicz.pl, prowadzonej przez Gabinet Psychoterapii i Rozwoju Olga Filaszkiewicz.
            </p>
            <p>
              Dokładamy wszelkich starań, aby zapewnić poszanowanie Państwa prywatności i ochronę udzielonych informacji osobowych podczas korzystania z Witryny i dokonywania w niej wszelkich działań, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Administrator danych</h2>
            <p>Administratorem danych osobowych jest:</p>
            <p className="font-medium">
              Gabinet Psychoterapii i Rozwoju Olga Filaszkiewicz<br />
              ul. Świętojańska 66/2<br />
              81-393 Gdynia<br />
              E-mail: info@olgafilaszkiewicz.pl<br />
              Telefon: 459 115 349
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Rodzaj przetwarzanych danych</h2>
            <p>W ramach świadczonych usług oraz funkcjonowania strony przetwarzamy następujące kategorie danych:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dane zwykłe:</strong> Imię i nazwisko, adres e-mail, numer telefonu.
              </li>
              <li>
                <strong>Dane przekazane dobrowolnie:</strong> Informacje wpisane w treści wiadomości formularza kontaktowego.
              </li>
              <li>
                <strong>Dane techniczne:</strong> Adres IP, informacje o przeglądarce (zbierane automatycznie ze względów bezpieczeństwa i statystycznych).
              </li>
              <li>
                <strong>Dane szczególnej kategorii (dane o zdrowiu):</strong> W przypadku nawiązania współpracy terapeutycznej, przetwarzane mogą być również dane dotyczące zdrowia, niezbędne do prowadzenia procesu diagnostycznego, terapeutycznego i dokumentacji medycznej.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cel i podstawa przetwarzania danych</h2>
            <p>Państwa dane osobowe są przetwarzane w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Udzielenie odpowiedzi na zapytania (np. przez formularz kontaktowy)</strong> – podstawa prawna: zgoda użytkownika wynikająca z inicjatywy kontaktu (art. 6 ust. 1 lit. a RODO).
              </li>
              <li>
                <strong>Rezerwacja terminu i świadczenie usług psychoterapeutycznych</strong> – podstawa prawna: wykonanie umowy lub podjęcie działań na żądanie osoby, której dane dotyczą (art. 6 ust. 1 lit. b RODO).
              </li>
              <li>
                <strong>Prowadzenie procesu terapeutycznego i diagnozy (dane o zdrowiu)</strong> – podstawa prawna: art. 9 ust. 2 lit. h RODO (przetwarzanie niezbędne do celów profilaktyki zdrowotnej lub diagnozy medycznej, zapewnienia opieki zdrowotnej).
              </li>
              <li>
                <strong>Prowadzenie i przechowywanie dokumentacji medycznej</strong> – podstawa prawna: obowiązek prawny ciążący na administratorze (art. 6 ust. 1 lit. c RODO w zw. z ustawą o prawach pacjenta i Rzeczniku Praw Pacjenta).
              </li>
              <li>
                <strong>Marketing usług własnych</strong> – podstawa prawna: prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Okres przechowywania danych</h2>
            <p>Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dane kontaktowe:</strong> do momentu zakończenia korespondencji lub wycofania zgody.
              </li>
              <li>
                <strong>Dokumentacja medyczna:</strong> przez okres co najmniej 20 lat od końca roku kalendarzowego, w którym dokonano ostatniego wpisu, zgodnie z art. 29 ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta.
              </li>
              <li>
                <strong>Dane marketingowe:</strong> do momentu wniesienia sprzeciwu.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Odbiorcy danych</h2>
            <p>
              Dane osobowe mogą być powierzane lub udostępniane następującym podmiotom współpracującym z Administratorem, wyłącznie w zakresie niezbędnym do realizacji celu przetwarzania:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dostawcom usług IT i hostingu (strona jest hostowana na platformie Netlify, która zapewnia infrastrukturę techniczną).</li>
              <li>Dostawcom usług księgowych.</li>
              <li>Dostawcy usługi Google (w zakresie ochrony strony przed spamem – Google reCAPTCHA).</li>
              <li>Uprawnionym organom państwowym, jeśli wymaga tego obowiązujące prawo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Prawa osób, których dane dotyczą</h2>
            <p>Każda osoba, której dane są przetwarzane, ma prawo do:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dostępu do treści swoich danych.</li>
              <li>Sprostowania danych (poprawiania).</li>
              <li>Usunięcia danych (prawo do bycia zapomnianym) – o ile nie stoi to w sprzeczności z obowiązkiem prowadzenia dokumentacji medycznej.</li>
              <li>Ograniczenia przetwarzania.</li>
              <li>Przenoszenia danych.</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
              <li>Cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem).</li>
              <li>Wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych), gdy uzna, że przetwarzanie narusza przepisy RODO.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Pliki cookies i zabezpieczenia (Google reCAPTCHA)</h2>
            <p>
              Strona internetowa wykorzystuje pliki cookies (ciasteczka), które są niewielkimi plikami tekstowymi zapisywanymi na urządzeniu użytkownika.
            </p>
            <p>
              <strong>Bezpieczeństwo (reCAPTCHA):</strong> Na tej stronie używamy funkcji reCAPTCHA dostarczanej przez Google Ireland Limited („Google"). Funkcja ta służy do sprawdzania, czy dane wprowadzane na stronie (np. w formularzu kontaktowym) pochodzą od człowieka, czy od zautomatyzowanego programu. Usługa analizuje zachowanie użytkownika (np. adres IP, czas spędzony na stronie, ruchy myszką). Korzystanie z Google reCAPTCHA podlega Polityce Prywatności Google oraz Warunkom Korzystania z Usług Google.
            </p>
            <p>
              <strong>Cookies funkcjonalne:</strong> Niezbędne do prawidłowego wyświetlania strony.
            </p>
            <p>
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej. Ograniczenie stosowania plików cookies może jednak wpłynąć na niektóre funkcjonalności dostępne na stronie internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Bezpieczeństwo danych</h2>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną. W szczególności zabezpiecza dane przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem obowiązujących przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem. Komunikacja ze stroną jest szyfrowana przy użyciu protokołu SSL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Tajemnica zawodowa</h2>
            <p>
              Psychoterapeuta podlega obowiązkowi zachowania tajemnicy zawodowej zgodnie z Kodeksem Etyki Zawodowej Psychoterapeuty. Wszelkie informacje uzyskane w trakcie procesu diagnostycznego i psychoterapii są ściśle poufne i nie będą ujawniane osobom trzecim bez wyraźnej zgody pacjenta, z wyjątkiem sytuacji przewidzianych prawem (np. zagrożenie życia lub zdrowia).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Zmiany w Polityce Prywatności</h2>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich zmianach użytkownicy będą informowani poprzez aktualizację treści na stronie internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Kontakt</h2>
            <p>
              W sprawach dotyczących przetwarzania danych osobowych oraz realizacji przysługujących praw prosimy o kontakt:
            </p>
            <p className="font-medium">
              E-mail: info@olgafilaszkiewicz.pl<br />
              Telefon: 459 115 349
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
