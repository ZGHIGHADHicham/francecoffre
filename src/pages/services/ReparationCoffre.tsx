import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ReparationCoffre = () => {
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
                <Wrench className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Réparation de coffre-fort
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Remise en état complète de votre coffre-fort après ouverture ou suite à une panne.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Réparation professionnelle de coffres-forts
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Un coffre-fort endommagé ou défaillant peut compromettre la sécurité de vos biens. 
                Nos techniciens experts interviennent pour diagnostiquer et réparer tous types de pannes, 
                qu'elles soient mécaniques ou électroniques.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Pannes courantes que nous réparons
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Serrure bloquée ou endommagée",
                  "Mécanisme de verrouillage défaillant",
                  "Pênes cassés ou grippés",
                  "Clavier électronique en panne",
                  "Batterie déchargée ou défectueuse",
                  "Charnières usées"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Notre processus de réparation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Après un diagnostic complet, nous vous proposons un devis détaillé. Nous utilisons 
                exclusivement des pièces de rechange d'origine ou de qualité équivalente pour 
                garantir la durabilité de la réparation et maintenir le niveau de sécurité de votre coffre.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Votre coffre-fort est en panne ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour un diagnostic rapide. Intervention partout en France.
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

export default ReparationCoffre;
