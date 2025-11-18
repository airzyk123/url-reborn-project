import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-hero animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Pliki cookies</h3>
              <p className="text-sm text-muted-foreground">
                Ta strona używa plików cookies w celu zapewnienia prawidłowego działania oraz 
                zapewnienia najlepszej jakości usług. Korzystając ze strony, zgadzasz się na 
                wykorzystywanie plików cookies zgodnie z naszą{" "}
                <Link 
                  to="/polityka-prywatnosci" 
                  className="text-primary hover:underline"
                >
                  polityką prywatności
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={rejectCookies}
                className="whitespace-nowrap"
              >
                Odrzuć
              </Button>
              <Button
                onClick={acceptCookies}
                className="whitespace-nowrap"
              >
                Akceptuję
              </Button>
              <button
                onClick={rejectCookies}
                className="p-2 hover:bg-muted rounded-md transition-colors"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
