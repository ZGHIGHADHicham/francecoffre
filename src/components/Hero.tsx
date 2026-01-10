import { Phone, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--hero-gradient)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Vault door silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-10">
        <div className="w-full h-full rounded-full border-[20px] border-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Disponible 24h/24 et 7j/7</span>
          </div>

          {/* Main heading */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            France Coffre
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Spécialistes de l'ouverture
          </p>
          
          <p 
            className="text-2xl md:text-3xl lg:text-4xl text-secondary font-display font-semibold mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            de coffres-forts partout en France
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 shadow-gold">
                Contactez-nous
              </Button>
            </a>
            <a href="tel:+33179736262">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-secondary/50 text-primary-foreground bg-transparent hover:bg-secondary/20">
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
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="flex flex-col items-center gap-2 text-primary-foreground/90">
    <div className="text-secondary">{icon}</div>
    <div className="text-center">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-primary-foreground/70">{subtitle}</p>
    </div>
  </div>
);

const CheckBadge = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default Hero;
