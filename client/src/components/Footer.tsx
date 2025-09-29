import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  SR
                </span>
              </div>
              <span className="text-xl font-bold">Sponty Rides</span>
            </div>
            <p className="text-gray-300">
              Your premier destination for premium motorcycles. We offer the
              best selection, expert service, and unmatched customer experience.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/financing">
                  <a className="cursor-pointer text-gray-300 hover:text-primary transition-colors">
                    Financing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="cursor-pointer text-gray-300 hover:text-primary transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/parts-accessories">
                  <a className="cursor-pointer text-gray-300 hover:text-primary transition-colors">
                    Parts & Accessories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/trade-in">
                  <a className="cursor-pointer text-gray-300 hover:text-primary transition-colors">
                    Trade-In
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="cursor-pointer text-gray-300 hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="cursor-pointer text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4" id="contact">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">
                  Cabaguio Avenue <br /> Davao City, PH 8000
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">(+63) 915 347 3722</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">
                  admin@spontyrides.onmicrosoft.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
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
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest deals and motorcycle
              news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-gray-600 text-background placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Sponty Rides Dealership. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy">
              <a className="cursor-pointer hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms">
              <a className="cursor-pointer hover:text-primary transition-colors">
                Terms of Service
              </a>
            </Link>
            <Link href="/cookie">
              <a className="cursor-pointer hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
