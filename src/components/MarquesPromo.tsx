import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MarquesPromo = () => {
  const navigate = useNavigate();

  const featuredBrands = [
    "FICHET", "BAUCHE", "CHUBB", "GUNNEBO", "BURG WACHTER", 
    "HARTMANN", "LIPS", "DIERRE", "TECHNOMAX", "PHOENIX SAFE"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-6">
            <Search className="w-4 h-4" />
            <span className="text-sm font-medium">Plus de 200 marques répertoriées</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nous intervenons sur <span className="text-secondary">toutes les marques</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            De Fichet à Chubb, en passant par les modèles anciens ou modernes, 
            nos experts maîtrisent l'ouverture et la réparation de tous les coffres-forts.
          </p>

          {/* Featured brands preview */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {featuredBrands.map((brand) => (
              <span 
                key={brand}
                className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20"
              >
                {brand}
              </span>
            ))}
            <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-white">
              + 190 autres...
            </span>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={() => navigate("/marques")}
            className="group bg-white text-primary hover:bg-white/90"
          >
            Rechercher votre marque
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarquesPromo;
