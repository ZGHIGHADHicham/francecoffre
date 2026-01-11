import { Phone, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Urgence = () => {
  return (
    <section id="urgence" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--hero-gradient)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-destructive/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Problem */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-destructive">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Urgence Coffre-fort ?</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Verrouillage inattendu ?<br />
              <span className="text-secondary">Nous intervenons rapidement.</span>
            </h2>

            <div className="space-y-6">
              <ProblemItem 
                icon={<AlertCircle className="w-5 h-5" />}
                title="Perte du code ou de la clé"
                description="Face à un coffre-fort soudainement inaccessible, la frustration et l'inquiétude s'emparent de vous."
              />
              <ProblemItem 
                icon={<Clock className="w-5 h-5" />}
                title="Besoin urgent d'accès"
                description="Documents essentiels, objets de valeur... chaque minute compte quand vous devez accéder à vos biens."
              />
            </div>
          </div>

          {/* Right side - Solution */}
          <div className="bg-card/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-primary-foreground/10">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">
              Notre solution
            </h3>

            <div className="space-y-4 mb-8">
              <SolutionItem text="Intervention dans les 30 minutes" />
              <SolutionItem text="Ouverture sans dommage garantie" />
              <SolutionItem text="Techniciens certifiés et expérimentés" />
              <SolutionItem text="Devis gratuit et transparent" />
              <SolutionItem text="Disponible 24h/24, 7j/7" />
            </div>

            <div className="space-y-4">
              <a href="tel:+33179736262" className="block">
                <Button variant="secondary" size="lg" className="w-full text-lg py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </a>
              <p className="text-center text-primary-foreground/70 text-sm">
                01 79 73 62 62 — Réponse immédiate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-primary-foreground mb-1">{title}</h4>
      <p className="text-primary-foreground/70 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const SolutionItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-primary-foreground">
    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
    <span>{text}</span>
  </div>
);

export default Urgence;
