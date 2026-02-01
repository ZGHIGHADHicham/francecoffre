import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Galerie from "./pages/Galerie";
import Marques from "./pages/Marques";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import NotFound from "./pages/NotFound";
import OuvertureCoffre from "./pages/services/OuvertureCoffre";
import ReparationCoffre from "./pages/services/ReparationCoffre";
import ChangementSerrure from "./pages/services/ChangementSerrure";
import InstallationCoffre from "./pages/services/InstallationCoffre";
import MaintenanceCoffre from "./pages/services/MaintenanceCoffre";
import UrgenceCoffre from "./pages/services/UrgenceCoffre";
import PerteCode from "./pages/services/PerteCode";
import PerteCle from "./pages/services/PerteCle";
import VenteCoffre from "./pages/services/VenteCoffre";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/marques" element={<Marques />} />
          <Route path="/services/ouverture-coffre" element={<OuvertureCoffre />} />
          <Route path="/services/reparation-coffre" element={<ReparationCoffre />} />
          <Route path="/services/changement-serrure" element={<ChangementSerrure />} />
          <Route path="/services/installation-coffre" element={<InstallationCoffre />} />
          <Route path="/services/maintenance-coffre" element={<MaintenanceCoffre />} />
          <Route path="/services/urgence-coffre" element={<UrgenceCoffre />} />
          <Route path="/services/perte-code" element={<PerteCode />} />
          <Route path="/services/perte-cle" element={<PerteCle />} />
          <Route path="/services/vente-coffre" element={<VenteCoffre />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
