import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hash, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PerteCode = () => {
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
                <Hash className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Perte de code
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Vous avez oublié ou perdu le code de votre coffre-fort ? Nous intervenons rapidement.
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
                  src="/images/galerie/coffre-7.jpeg" 
                  alt="Clavier électronique de coffre-fort" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Code oublié ? Pas de panique !
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La perte ou l'oubli du code d'un coffre-fort électronique est une situation courante. 
                Nos experts sont formés pour réinitialiser ou reprogrammer votre système de verrouillage 
                en toute sécurité, sans endommager votre équipement.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Notre intervention comprend
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Diagnostic du type de serrure électronique",
                  "Ouverture sécurisée du coffre",
                  "Réinitialisation du code maître",
                  "Programmation d'un nouveau code utilisateur",
                  "Test complet du système",
                  "Conseils pour la gestion de vos codes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Types de coffres pris en charge
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous intervenons sur tous les types de coffres à code : serrures à combinaison mécanique, 
                claviers électroniques à code PIN, systèmes biométriques, et coffres connectés. 
                Quelle que soit la marque de votre coffre-fort, nous avons la solution.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Code perdu ou oublié ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Appelez-nous maintenant pour une intervention rapide et discrète.
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

export default PerteCode;
