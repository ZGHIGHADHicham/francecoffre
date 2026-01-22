import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { KeyRound, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OuvertureCoffre = () => {
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
                <KeyRound className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Ouverture de coffre-fort
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Intervention rapide et sans dommage pour l'ouverture de tous types de coffres-forts.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Notre expertise en ouverture de coffres-forts
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Que vous ayez perdu votre clé, oublié votre combinaison ou que le mécanisme soit défaillant, 
                nos experts interviennent rapidement pour ouvrir votre coffre-fort sans l'endommager. 
                Nous utilisons des techniques professionnelles et un équipement de pointe pour garantir 
                une ouverture propre et sécurisée.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Types de coffres-forts pris en charge
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Coffres-forts à clé",
                  "Coffres-forts à combinaison mécanique",
                  "Coffres-forts électroniques",
                  "Coffres-forts biométriques",
                  "Coffres-forts encastrables",
                  "Armoires fortes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Notre méthode d'intervention
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous privilégions toujours les méthodes non destructives. Nos techniciens sont formés 
                aux dernières techniques d'ouverture fine et disposent d'outils spécialisés pour 
                chaque type de serrure. Dans la majorité des cas, votre coffre-fort reste parfaitement 
                fonctionnel après notre intervention.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Besoin d'une intervention ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour une intervention rapide. Nous intervenons partout en France.
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

export default OuvertureCoffre;
