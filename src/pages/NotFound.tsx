import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="bg-background/80 backdrop-blur-md rounded-2xl shadow-hero p-12 border border-sage/10">
            <div className="mb-8">
              <h1 className="text-8xl font-serif font-bold text-sage mb-4 animate-scale-in">
                404
              </h1>
              <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
            </div>
            
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Strona nie została znaleziona
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                className="bg-gradient-accent text-white font-medium px-8 py-6 rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Strona główna
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                asChild
                className="border-sage text-sage hover:bg-sage/5 font-medium px-8 py-6 rounded-full transition-all duration-300"
              >
                <Link to="/#contact">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Skontaktuj się
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
