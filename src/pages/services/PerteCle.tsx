import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Key, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PerteCle = () => {
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
                <Key className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Perte de clé
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Clé perdue ou cassée ? Nous ouvrons votre coffre-fort et remplaçons votre serrure.
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
                  src="/images/galerie/coffre-4.jpeg" 
                  alt="Clé de coffre-fort ancienne" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Clé perdue ? Nous avons la solution
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Perdre la clé de son coffre-fort peut être stressant, surtout si des documents ou 
                objets importants sont enfermés à l'intérieur. Nos serruriers spécialisés interviennent 
                rapidement pour ouvrir votre coffre sans le détériorer.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Nos solutions
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Ouverture non destructive du coffre-fort",
                  "Reproduction de clé si possible",
                  "Remplacement de la serrure à clé",
                  "Mise à niveau vers un système électronique",
                  "Fourniture de clés de secours",
                  "Conseil sur la conservation des doubles"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Éviter les problèmes futurs
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Après l'intervention, nous vous recommandons de conserver un double de clé dans un 
                endroit sûr, ou de passer à un système électronique qui permet une réinitialisation 
                plus simple en cas d'oubli. Nous pouvons vous conseiller sur la meilleure option.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Clé perdue ou cassée ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour une intervention rapide partout en France.
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

export default PerteCle;
