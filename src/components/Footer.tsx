import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 bg-white rounded-lg p-3 inline-block">
              <img 
                src="/images/france-coffre-logo.png" 
                alt="France Coffre - Ouverture, Réparation, Installation" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed mb-6">
              Spécialistes de l'ouverture, réparation et installation de coffres-forts. 
              Intervention rapide partout en France, 24h/24 et 7j/7.
            </p>
            <div className="flex gap-4">
              <a href="tel:+33179736262" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">01 79 73 62 62</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Ouverture de coffre-fort
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Réparation
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#urgence" className="text-primary-foreground/70 hover:text-secondary transition-colors">
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
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
