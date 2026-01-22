import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const UrgenceCoffre = () => {
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
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Urgence 24/7
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Disponible jour et nuit pour toutes vos situations d'urgence.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Service d'urgence disponible 24h/24
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Une urgence avec votre coffre-fort peut survenir à tout moment. C'est pourquoi 
                notre équipe est disponible 24 heures sur 24, 7 jours sur 7, pour intervenir 
                rapidement partout en France.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Situations d'urgence prises en charge
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Coffre-fort bloqué avec documents urgents",
                  "Perte de clé ou oubli de code",
                  "Tentative d'effraction",
                  "Panne électronique soudaine",
                  "Blocage après plusieurs tentatives erronées",
                  "Accès impossible suite à un sinistre"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Notre engagement
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                En cas d'urgence, nous nous engageons à vous répondre immédiatement et à 
                dépêcher un technicien dans les plus brefs délais. Nos équipes sont réparties 
                sur tout le territoire pour garantir une intervention rapide, même en pleine nuit 
                ou le week-end.
              </p>

              {/* CTA */}
              <div className="bg-secondary/10 rounded-xl p-8 mt-12 border-2 border-secondary">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Urgence coffre-fort ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Appelez-nous immédiatement. Nous intervenons 24h/24 et 7j/7 partout en France.
                </p>
                <Button asChild size="lg" className="gap-2 bg-secondary hover:bg-secondary/90">
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

export default UrgenceCoffre;
