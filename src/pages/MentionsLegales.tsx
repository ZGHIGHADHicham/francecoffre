import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Éditeur du site</h2>
              <p className="text-muted-foreground">
                <strong>France Coffre</strong><br />
                Spécialistes de l'ouverture, réparation et installation de coffres-forts<br />
                Email : <a href="mailto:francecoffre@gmail.com" className="text-primary hover:underline">francecoffre@gmail.com</a><br />
                Téléphone : <a href="tel:+33179736262" className="text-primary hover:underline">01 79 73 62 62</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Hébergement</h2>
              <p className="text-muted-foreground">
                Ce site est hébergé par Lovable.<br />
                Pour toute question concernant l'hébergement, veuillez nous contacter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes) est protégé par le droit d'auteur. 
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Responsabilité</h2>
              <p className="text-muted-foreground">
                France Coffre s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
                Toutefois, France Coffre ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
                mises à disposition sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question ou demande d'information concernant le site, vous pouvez nous contacter :<br />
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

export default MentionsLegales;
