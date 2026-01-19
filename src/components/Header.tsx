import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(anchor);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(anchor);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
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
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation + Contact */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#services" 
              onClick={(e) => handleAnchorClick(e, "#services")}
              className="text-foreground/70 hover:text-primary font-medium transition-colors cursor-pointer text-sm"
            >
              Prestations
            </a>
            <a 
              href="#urgence" 
              onClick={(e) => handleAnchorClick(e, "#urgence")}
              className="text-foreground/70 hover:text-primary font-medium transition-colors cursor-pointer text-sm"
            >
              Urgences
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleAnchorClick(e, "#about")}
              className="text-foreground/70 hover:text-primary font-medium transition-colors cursor-pointer text-sm"
            >
              À propos
            </a>
            
            <div className="h-5 w-px bg-border" />
            
            <a 
              href="tel:+33179736262" 
              className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>01 79 73 62 62</span>
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, "#contact")}
            >
              <Button variant="default" size="sm">
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
          <div className="md:hidden border-t border-border py-4 animate-fade-up">
            <div className="flex flex-col gap-3">
              <a 
                href="#services" 
                onClick={(e) => handleAnchorClick(e, "#services")}
                className="text-foreground/80 hover:text-primary font-medium py-2 cursor-pointer"
              >
                Prestations
              </a>
              <a 
                href="#urgence" 
                onClick={(e) => handleAnchorClick(e, "#urgence")}
                className="text-foreground/80 hover:text-primary font-medium py-2 cursor-pointer"
              >
                Urgences
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleAnchorClick(e, "#about")}
                className="text-foreground/80 hover:text-primary font-medium py-2 cursor-pointer"
              >
                À propos
              </a>
              <a 
                href="tel:+33179736262" 
                className="flex items-center gap-2 text-primary font-semibold py-2"
              >
                <Phone className="w-4 h-4" />
                <span>01 79 73 62 62</span>
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
      </div>
    </header>
  );
};

export default Header;