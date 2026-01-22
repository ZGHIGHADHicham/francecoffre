import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ChangementSerrure = () => {
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
                <Lock className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Changement de serrure
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Remplacement et mise à niveau de votre système de verrouillage.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Modernisez la sécurité de votre coffre-fort
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Que ce soit pour renforcer la sécurité, suite à une perte de clé ou pour passer 
                à un système plus moderne, nous assurons le changement de serrure de votre coffre-fort 
                avec des équipements haute sécurité.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Options de mise à niveau
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Serrure à clé haute sécurité",
                  "Serrure à combinaison mécanique",
                  "Serrure électronique à code",
                  "Serrure biométrique (empreinte digitale)",
                  "Système de double verrouillage",
                  "Serrure connectée avec application mobile"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Pourquoi changer votre serrure ?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Un changement de serrure peut être nécessaire après un cambriolage, une perte de clé, 
                ou simplement pour bénéficier des dernières technologies de sécurité. Nous vous 
                conseillons sur la solution la plus adaptée à vos besoins et à votre niveau de sécurité requis.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Envie de renforcer votre sécurité ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour un conseil personnalisé sur le choix de votre nouvelle serrure.
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

export default ChangementSerrure;
