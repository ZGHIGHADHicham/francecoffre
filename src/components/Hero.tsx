import { Phone, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* French flag background - Blue | White | Red */}
      <div className="absolute inset-0 flex">
        <div className="w-1/6 bg-primary" />
        <div className="flex-1 bg-white" />
        <div className="w-1/6 bg-secondary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div 
            className="mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <img 
              src="/images/france-coffre-logo.svg" 
              alt="France Coffre" 
              className="h-48 md:h-64 lg:h-80 w-auto mx-auto"
            />
          </div>

          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Disponible 24h/24 et 7j/7</span>
          </div>

          {/* Main heading */}
          <p 
            className="text-lg md:text-2xl lg:text-3xl text-foreground/80 font-light mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Spécialistes de l'ouverture de coffres-forts <span className="text-secondary font-display font-semibold">partout en France</span>
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#contact">
              <Button variant="default" size="lg" className="text-lg px-8 py-6 shadow-gold">
                Contactez-nous
              </Button>
            </a>
            <a href="tel:+33179736262">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                01 79 73 62 62
              </Button>
            </a>
          </div>

          {/* Features strip */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <FeatureItem icon={<MapPin className="w-6 h-6" />} title="France" subtitle="entière" />
            <FeatureItem icon={<Shield className="w-6 h-6" />} title="Expert" subtitle="à l'écoute" />
            <FeatureItem icon={<Clock className="w-6 h-6" />} title="Urgence" subtitle="24h/24 - 7j/7" />
            <FeatureItem icon={<CheckBadge />} title="Savoir-faire" subtitle="de qualité" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="flex flex-col items-center gap-2 text-foreground/90">
    <div className="text-secondary">{icon}</div>
    <div className="text-center">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-foreground/70">{subtitle}</p>
    </div>
  </div>
);

const CheckBadge = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default Hero;
