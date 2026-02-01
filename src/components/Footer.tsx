import { Phone, Mail, MapPin } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 bg-white rounded-lg p-3 inline-block">
              <img 
                src="/images/france-coffre-logo.svg" 
                alt="France Coffre - Ouverture, Réparation, Installation" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed mb-6">
              Spécialistes de l'ouverture, réparation et installation de coffres-forts. 
              Intervention rapide partout en France, 24h/24 et 7j/7.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="tel:+33179736262" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">01 79 73 62 62</span>
              </a>
              
              {/* Google Avis Button */}
              <a 
                href="https://www.google.com/search?q=France+Coffre+&sca_esv=6632657489d50d73&rlz=1C1ONGR_frFR1180FR1180&biw=2560&bih=1271&aic=0&sxsrf=ANbL-n6COFArHGthgpNVYUZHkOsnawsp5A%3A1769975519430&ei=365_abqAGpKrkdUPnuGGgQY&ved=0ahUKEwj66-LQiLmSAxWSVaQEHZ6wIWAQ4dUDCBE&uact=5&oq=France+Coffre+&gs_lp=Egxnd3Mtd2l6LXNlcnAiDkZyYW5jZSBDb2ZmcmUgMgQQIxgnMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjBBlCyBFiyBHABeACQAQCYAUCgAW-qAQEyuAEDyAEA-AEBmAICoAJKwgIHEAAYHhiwA8ICCRAAGAgYHhiwA8ICCxAAGIAEGKIEGLADwgILEAAYiQUYogQYsAPCAggQABjvBRiwA5gDAIgGAZAGCJIHATKgB9MKsgcBMbgHR8IHBTAuMS4xyAcHgAgB&sclient=gws-wiz-serp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium text-sm">AVIS</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, "#services")}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer"
                >
                  Ouverture de coffre-fort
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, "#services")}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer"
                >
                  Réparation
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, "#services")}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer"
                >
                  Installation
                </a>
              </li>
              <li>
                <a 
                  href="#urgence" 
                  onClick={(e) => handleAnchorClick(e, "#urgence")}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors cursor-pointer"
                >
                  Urgence 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+33179736262" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    01 79 73 62 62
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:francecoffre@gmail.com" className="text-primary-foreground/70 hover:text-secondary transition-colors break-all">
                    francecoffre@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">France entière</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* French tricolor bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-secondary" />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} France Coffre. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/mentions-legales" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
