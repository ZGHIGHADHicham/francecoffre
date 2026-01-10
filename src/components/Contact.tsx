import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent("Demande de contact - France Coffre");
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:francecoffre@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
                Contact
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Besoin d'un <span className="text-primary">expert</span> ?
              </h2>
              <p className="text-muted-foreground text-lg">
                Contactez-nous pour un devis gratuit ou une intervention urgente. 
                Notre équipe est à votre écoute 24h/24.
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem 
                icon={<Phone className="w-5 h-5" />}
                label="Téléphone"
                value="01 79 73 62 62"
                href="tel:+33179736262"
              />
              <ContactItem 
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="francecoffre@gmail.com"
                href="mailto:francecoffre@gmail.com"
              />
              <ContactItem 
                icon={<MapPin className="w-5 h-5" />}
                label="Zone d'intervention"
                value="France entière"
              />
              <ContactItem 
                icon={<Clock className="w-5 h-5" />}
                label="Disponibilité"
                value="24h/24 - 7j/7"
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Demande de devis
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="06 00 00 00 00"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                  placeholder="Décrivez votre situation..."
                  required
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full py-6">
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
  href?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      {href ? (
        <a href={href} className="font-semibold text-foreground hover:text-primary transition-colors">
          {value}
        </a>
      ) : (
        <p className="font-semibold text-foreground">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;
