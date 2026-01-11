import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="/" className="flex items-center">
            <img 
              src="/images/france-coffre-logo.png" 
              alt="France Coffre - Ouverture, Réparation, Installation" 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary font-medium transition-colors">
              Prestations
            </a>
            <a href="#urgence" className="text-foreground hover:text-primary font-medium transition-colors">
              Urgences
            </a>
            <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">
              À propos
            </a>
            <a href="#contact">
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
              <a href="#services" className="text-foreground hover:text-primary font-medium py-2">
                Prestations
              </a>
              <a href="#urgence" className="text-foreground hover:text-primary font-medium py-2">
                Urgences
              </a>
              <a href="#about" className="text-foreground hover:text-primary font-medium py-2">
                À propos
              </a>
              <a href="#contact">
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
