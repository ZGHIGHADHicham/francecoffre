import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Settings, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const InstallationCoffre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <Link to="/#services" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-primary-foreground">
                <Settings className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Installation de coffre-fort
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Pose professionnelle de coffres-forts neufs avec ancrage sécurisé.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {/* Image */}
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/galerie/coffre-1.jpeg" 
                  alt="Coffres-forts NUGUE installés avec serrures électroniques" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Installation professionnelle de coffres-forts
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                L'installation d'un coffre-fort requiert une expertise particulière pour garantir 
                sa sécurité optimale. Nos techniciens assurent une pose conforme aux normes, 
                avec un ancrage solide qui résiste aux tentatives d'arrachement.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Nos services d'installation
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Conseil sur le choix du coffre adapté",
                  "Étude de l'emplacement optimal",
                  "Ancrage au sol ou au mur",
                  "Installation de coffres encastrables",
                  "Pose de coffres ignifuges",
                  "Configuration et mise en service"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                L'importance d'une installation professionnelle
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Un coffre-fort mal installé perd une grande partie de son efficacité. L'ancrage 
                doit être réalisé dans les règles de l'art pour empêcher tout arrachement. 
                Nous intervenons sur tous types de supports (béton, parpaing, brique) et adaptons 
                notre méthode à chaque situation.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Projet d'installation ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour un conseil gratuit sur le choix et l'installation de votre coffre-fort.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <a href="tel:0974774914">
                    <Phone className="w-5 h-5" />
                    09 74 77 49 14
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InstallationCoffre;
