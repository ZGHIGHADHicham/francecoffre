import { Mail } from "lucide-react";

const GOOGLE_AVIS_URL =
  "https://www.google.com/search?q=france+coffre&sca_esv=51db692ab24d98dd&authuser=1&source=hp&ei=M1KCaa_xFfytqtsP1ZaI2AQ&iflsig=AFdpzrgAAAAAaYJgQ8IAH_EdtoiPgTS-wRUBdqEtw9Cy&gs_ssp=eJzj4tVP1zc0LMs2KjIzTi8wYLRSNagwMU81MzcyMEw1MDFMNDS1tDKoSLVMNk60TDQ0NjcyNzEyMPfiTStKzEtOVUjOT0srSgUAg_ATQw&oq=france+&gs_lp=Egdnd3Mtd2l6IgdmcmFuY2UgKgIIADIQEC4YgAQYQxjHARiKBRivATILEAAYgAQYsQMYgwEyDRAAGIAEGLEDGIMBGAoyEBAAGIAEGLEDGEMYgwEYigUyEBAuGIAEGNEDGEMYxwEYigUyChAAGIAEGEMYigUyCBAAGIAEGLEDMgsQABiABBixAxiDATIKEAAYgAQYQxiKBTILEAAYgAQYsQMYgwFI8xpQkgVY6gtwAXgAkAEAmAGEAaAB4gOqAQM2LjG4AQHIAQD4AQGYAgigAvkDqAIKwgIKEAAYAxjqAhiPAcICChAuGAMY6gIYjwHCAhEQLhiABBixAxjRAxiDARjHAcICChAuGIAEGEMYigXCAg0QLhiABBixAxhDGIoFwgIIEC4YgAQYsQOYAwjxBQ_M1oRz1V1pkgcDNy4xoAfDRbIHAzYuMbgH8QPCBwUwLjYuMsgHEYAIAA&sclient=gws-wiz";

const MobileBottomBar = () => {
  const handleGoogleAvisClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(GOOGLE_AVIS_URL, "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary border-t border-primary-foreground/10 safe-area-bottom">
      <div className="flex">
        {/* Google Avis Button */}
        <a
          href={GOOGLE_AVIS_URL}
          onClick={handleGoogleAvisClick}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-white text-foreground hover:bg-white/90 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-xs font-medium">AVIS</span>
        </a>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-primary hover:bg-primary/90 transition-colors"
        >
          <Mail className="w-6 h-6 text-white" />
          <span className="text-xs font-medium text-[#ff3b3b]">CONTACT</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
