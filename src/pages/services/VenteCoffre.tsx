import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VenteCoffre = () => {
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
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Vente de coffre-fort
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Découvrez notre sélection de coffres-forts certifiés pour particuliers et professionnels.
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
                  alt="Coffre-fort de haute sécurité" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Des coffres-forts pour tous vos besoins
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous proposons une large gamme de coffres-forts adaptés à vos besoins de sécurité : 
                particuliers, entreprises, hôtels, bijouteries. Tous nos coffres sont certifiés 
                et répondent aux normes européennes de sécurité.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-10">
                Notre gamme de produits
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Coffres-forts à emmurer",
                  "Coffres-forts à poser",
                  "Coffres ignifuges",
                  "Armoires fortes",
                  "Coffres pour armes",
                  "Coffres d'hôtel et de bureau"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Nos marques partenaires
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous travaillons avec les plus grandes marques du secteur pour vous garantir 
                des produits de qualité : Fichet-Bauche, Hartmann Tresore, Burg Wächter, 
                Chubb, et bien d'autres. Nos experts vous conseillent pour choisir le coffre 
                adapté à votre niveau de protection requis et à votre budget.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Service complet
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                L'achat d'un coffre-fort chez nous inclut le conseil personnalisé, la livraison, 
                l'installation professionnelle avec ancrage sécurisé, et la mise en service. 
                Nous assurons également le SAV et la maintenance de votre équipement.
              </p>

              {/* CTA */}
              <div className="bg-primary/5 rounded-xl p-8 mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Besoin d'un coffre-fort ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous pour un devis personnalisé et des conseils d'expert.
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

export default VenteCoffre;
