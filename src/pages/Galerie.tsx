import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { Camera } from "lucide-react";

const galleryImages = [
  {
    src: "/images/galerie/coffre-1.jpeg",
    alt: "Coffres-forts NUGUE avec serrures électroniques"
  },
  {
    src: "/images/galerie/coffre-2.jpeg",
    alt: "Serrures Fichet-Bauche haute sécurité"
  },
  {
    src: "/images/galerie/coffre-3.jpeg",
    alt: "Intervention sur coffre Fichet-Bauche"
  },
  {
    src: "/images/galerie/coffre-4.jpeg",
    alt: "Mécanisme de serrure ancienne avec clé"
  },
  {
    src: "/images/galerie/coffre-5.jpeg",
    alt: "Crochetage professionnel de serrure"
  },
  {
    src: "/images/galerie/coffre-6.jpeg",
    alt: "Mécanisme interne de coffre-fort"
  },
  {
    src: "/images/galerie/coffre-7.jpeg",
    alt: "Système de verrouillage complexe"
  },
  {
    src: "/images/galerie/coffre-8.jpeg",
    alt: "Coffre-fort avec serrure électronique programmable"
  },
];

const Galerie = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos Réalisations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre savoir-faire à travers nos interventions sur coffres-forts. 
              Chaque photo témoigne de notre expertise et de notre professionnalisme.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />

      <Footer />
    </div>
  );
};

export default Galerie;
