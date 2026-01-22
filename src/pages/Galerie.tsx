import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { Camera } from "lucide-react";

// Images placeholder - à remplacer par vos vraies photos
const galleryImages = [
  {
    src: "/placeholder.svg",
    alt: "Ouverture de coffre-fort",
    category: "Ouverture"
  },
  {
    src: "/placeholder.svg",
    alt: "Réparation de mécanisme",
    category: "Réparation"
  },
  {
    src: "/placeholder.svg",
    alt: "Installation coffre-fort mural",
    category: "Installation"
  },
  {
    src: "/placeholder.svg",
    alt: "Changement de serrure électronique",
    category: "Changement serrure"
  },
  {
    src: "/placeholder.svg",
    alt: "Maintenance préventive",
    category: "Maintenance"
  },
  {
    src: "/placeholder.svg",
    alt: "Intervention d'urgence",
    category: "Urgence"
  },
];

const categories = ["Tous", "Ouverture", "Réparation", "Installation", "Changement serrure", "Maintenance", "Urgence"];

const Galerie = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
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

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
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
                      <p className="text-xs text-white/70">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune image dans cette catégorie.</p>
            </div>
          )}

          {/* Info message */}
          <div className="mt-12 text-center p-6 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground">
              📸 Des photos de vos interventions seront bientôt ajoutées ici.
            </p>
          </div>
        </div>
      </main>

      <Lightbox
        images={filteredImages}
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
