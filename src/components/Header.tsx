import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(anchor);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.querySelector(anchor);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <a 
            href="tel:+33179736262" 
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">01 79 73 62 62</span>
          </a>
          <a 
            href="mailto:francecoffre@gmail.com?subject=Demande%20de%20devis"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Demander un devis</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/");
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/images/france-coffre-logo.svg" 
              alt="France Coffre - Ouverture, Réparation, Installation" 
              className="h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              onClick={(e) => handleAnchorClick(e, "#services")}
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Prestations
            </a>
            <a 
              href="#urgence" 
              onClick={(e) => handleAnchorClick(e, "#urgence")}
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Urgences
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleAnchorClick(e, "#about")}
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              À propos
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, "#contact")}
            >
              <Button variant="default" size="lg" className="shadow-gold">
                Contactez-nous
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-up">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#services" 
                onClick={(e) => handleAnchorClick(e, "#services")}
                className="text-foreground hover:text-primary font-medium py-2 cursor-pointer"
              >
                Prestations
              </a>
              <a 
                href="#urgence" 
                onClick={(e) => handleAnchorClick(e, "#urgence")}
                className="text-foreground hover:text-primary font-medium py-2 cursor-pointer"
              >
                Urgences
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleAnchorClick(e, "#about")}
                className="text-foreground hover:text-primary font-medium py-2 cursor-pointer"
              >
                À propos
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleAnchorClick(e, "#contact")}
              >
                <Button variant="default" className="w-full">
                  Contactez-nous
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
