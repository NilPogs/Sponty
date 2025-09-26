import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">SR</span>
              </div>
              <span className="text-xl font-bold">Sponty Rides</span>
            </div>
            <p className="text-gray-300" data-testid="text-company-description">
              Your premier destination for premium motorcycles. We offer the best selection, 
              expert service, and unmatched customer experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary" data-testid="button-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary" data-testid="button-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary" data-testid="button-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-quicklinks-title">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Inventory", href: "#inventory" },
                { label: "Financing", href: "#financing" },
                { label: "Service", href: "#service" },
                { label: "Parts & Accessories", href: "#parts" },
                { label: "Trade-In", href: "#trade" },
                { label: "About Us", href: "#about" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-contact-title">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3" data-testid="contact-address">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">
                  123 Motorcycle Ave<br />
                  Bike City, BC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-phone">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">(555) 123-BIKE</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-email">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@spontyrides.com</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-hours">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 9AM-7PM</div>
                  <div>Sat: 9AM-6PM</div>
                  <div>Sun: 11AM-5PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-newsletter-title">Stay Updated</h3>
            <p className="text-gray-300" data-testid="text-newsletter-description">
              Subscribe to our newsletter for the latest deals and motorcycle news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-gray-600 text-background placeholder:text-gray-400"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p data-testid="text-copyright">
            © 2024 Sponty Rides Dealership. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-primary transition-colors" data-testid="link-cookies">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}