import { KeyRound, Wrench, ShieldCheck, Lock, Settings, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <KeyRound className="w-8 h-8" />,
    title: "Ouverture de coffre-fort",
    description: "Intervention rapide et sans dommage pour l'ouverture de tous types de coffres-forts.",
    link: "/services/ouverture-coffre",
    image: "/images/galerie/coffre-3.jpeg",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Réparation",
    description: "Remise en état complète de votre coffre-fort après ouverture ou suite à une panne.",
    link: "/services/reparation-coffre",
    image: "/images/galerie/coffre-22.jpeg",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Changement de serrure",
    description: "Remplacement et mise à niveau de votre système de verrouillage.",
    link: "/services/changement-serrure",
    image: "/images/galerie/coffre-4.jpeg",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Installation",
    description: "Pose professionnelle de coffres-forts neufs avec ancrage sécurisé.",
    link: "/services/installation-coffre",
    image: "/images/galerie/coffre-1.jpeg",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Maintenance",
    description: "Entretien préventif pour assurer le bon fonctionnement de votre équipement.",
    link: "/services/maintenance-coffre",
    image: "/images/galerie/coffre-6.jpeg",
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Urgence 24/7",
    description: "Disponible jour et nuit pour toutes vos situations d'urgence.",
    link: "/services/urgence-coffre",
    image: "/images/galerie/coffre-21.jpeg",
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
  image,
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  link: string;
  image: string;
  index: number;
}) => (
  <Link 
    to={link}
    className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/50 opacity-0 animate-fade-up block cursor-pointer"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    {/* Image */}
    <div className="relative h-40 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      
      {/* Icon overlay */}
      <div className="absolute bottom-4 left-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground shadow-lg">
        {icon}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 pt-4">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>

    {/* Hover accent */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </Link>
);

export default Services;
