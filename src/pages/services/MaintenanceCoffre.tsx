import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MaintenanceCoffre = () => {
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
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Maintenance de coffre-fort
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Entretien préventif pour assurer le bon fonctionnement de votre équipement.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Préservez la fiabilité de votre coffre-fort
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Un entretien régulier prolonge la durée de vie de votre coffre-fort et prévient 
                les pannes. Nos contrats de maintenance vous assurent un fonctionnement optimal 
                de votre équipement de sécurité.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Notre programme de maintenance
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Vérification du mécanisme de verrouillage",
                  "Lubrification des pièces mobiles",
                  "Test du système électronique",
                  "Contrôle des joints d'étanchéité",
                  "Vérification de l'ancrage",
                  "Remplacement préventif des piles"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Avantages de la maintenance préventive
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La maintenance préventive évite les blocages inopinés et les réparations coûteuses. 
                Elle garantit également que votre coffre-fort conserve son niveau de certification 
                et reste conforme aux exigences de votre assurance.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Optez pour la tranquillité
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour établir un contrat de maintenance adapté à vos besoins.
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

export default MaintenanceCoffre;
