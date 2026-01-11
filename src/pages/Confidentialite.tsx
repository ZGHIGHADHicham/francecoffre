import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Collecte des données personnelles</h2>
              <p className="text-muted-foreground">
                Les données personnelles collectées sur ce site sont uniquement destinées à France Coffre. 
                Elles sont collectées lorsque vous nous contactez via le formulaire de contact ou par téléphone.
              </p>
              <p className="text-muted-foreground mt-2">
                Les données collectées peuvent inclure :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (pour les interventions)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Utilisation des données</h2>
              <p className="text-muted-foreground">
                Vos données personnelles sont utilisées uniquement pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Répondre à vos demandes de contact</li>
                <li>Planifier et réaliser nos interventions</li>
                <li>Assurer le suivi de nos prestations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Protection des données</h2>
              <p className="text-muted-foreground">
                France Coffre s'engage à protéger vos données personnelles et à respecter la réglementation 
                en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p className="text-muted-foreground mt-2">
                Vos données ne sont jamais vendues, échangées ou louées à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Durée de conservation</h2>
              <p className="text-muted-foreground">
                Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation 
                des finalités pour lesquelles elles ont été collectées, et conformément à la législation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Vos droits</h2>
              <p className="text-muted-foreground">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:francecoffre@gmail.com" className="text-primary hover:underline">francecoffre@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
                Ces cookies sont utilisés uniquement à des fins de fonctionnement et d'analyse anonyme du trafic.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité :<br />
                Email : <a href="mailto:francecoffre@gmail.com" className="text-primary hover:underline">francecoffre@gmail.com</a><br />
                Téléphone : <a href="tel:+33179736262" className="text-primary hover:underline">01 79 73 62 62</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Confidentialite;
