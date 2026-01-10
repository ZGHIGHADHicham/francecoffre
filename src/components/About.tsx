import { Award, Users, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "15+", label: "Années d'expérience" },
  { icon: <Users className="w-6 h-6" />, value: "5000+", label: "Clients satisfaits" },
  { icon: <MapPin className="w-6 h-6" />, value: "100%", label: "Couverture France" },
  { icon: <Clock className="w-6 h-6" />, value: "30min", label: "Temps d'intervention" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                À propos
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Experts en sécurité depuis <span className="text-secondary">plus de 15 ans</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                France Coffre est le spécialiste national de l'ouverture, la réparation et 
                l'installation de coffres-forts. Notre équipe de techniciens qualifiés 
                intervient partout en France, 24 heures sur 24.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous travaillons avec tous les types de coffres-forts : coffres à clé, 
                à combinaison mécanique, électronique, biométrique. Notre expertise nous 
                permet d'intervenir sans endommager votre équipement, préservant ainsi 
                votre investissement.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <TrustBadge text="Certifié" />
              <TrustBadge text="Assuré" />
              <TrustBadge text="Discret" />
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon, 
  value, 
  label, 
  index 
}: { 
  icon: React.ReactNode; 
  value: string; 
  label: string;
  index: number;
}) => (
  <div 
    className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-all duration-300 border border-border opacity-0 animate-fade-up"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mb-4">
      {icon}
    </div>
    <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{value}</p>
    <p className="text-muted-foreground text-sm">{label}</p>
  </div>
);

const TrustBadge = ({ text }: { text: string }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border shadow-sm">
    <span className="w-2 h-2 rounded-full bg-secondary" />
    {text}
  </span>
);

export default About;
