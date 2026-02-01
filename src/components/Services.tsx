import { KeyRound, Wrench, ShieldCheck, Lock, Settings, AlertTriangle, Hash, Key, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <KeyRound className="w-8 h-8" />,
    title: "Ouverture de coffre-fort",
    description: "Intervention rapide et sans dommage pour l'ouverture de tous types de coffres-forts.",
    link: "/services/ouverture-coffre",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Réparation",
    description: "Remise en état complète de votre coffre-fort après ouverture ou suite à une panne.",
    link: "/services/reparation-coffre",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Changement de serrure",
    description: "Remplacement et mise à niveau de votre système de verrouillage.",
    link: "/services/changement-serrure",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Installation",
    description: "Pose professionnelle de coffres-forts neufs avec ancrage sécurisé.",
    link: "/services/installation-coffre",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Maintenance",
    description: "Entretien préventif pour assurer le bon fonctionnement de votre équipement.",
    link: "/services/maintenance-coffre",
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Urgence 24/7",
    description: "Disponible jour et nuit pour toutes vos situations d'urgence.",
    link: "/services/urgence-coffre",
  },
  {
    icon: <Hash className="w-8 h-8" />,
    title: "Perte de code",
    description: "Code oublié ? Nous réinitialisons votre système de verrouillage électronique.",
    link: "/services/perte-code",
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: "Perte de clé",
    description: "Clé perdue ou cassée ? Ouverture et remplacement de serrure sans dommage.",
    link: "/services/perte-cle",
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Vente de coffre-fort",
    description: "Large gamme de coffres-forts certifiés pour particuliers et professionnels.",
    link: "/services/vente-coffre",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nos Prestations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services de <span className="text-secondary">coffres-forts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une expertise complète pour tous vos besoins en matière de coffres-forts, 
            avec un service professionnel et discret.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description,
  link,
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  link: string;
  index: number;
}) => (
  <Link 
    to={link}
    className="group relative bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/50 opacity-0 animate-fade-up block cursor-pointer"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    {/* Icon */}
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6">
      {icon}
    </div>

    {/* Content */}
    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      {description}
    </p>

    {/* Hover accent */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
  </Link>
);

export default Services;
