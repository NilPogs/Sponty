import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, ShoppingCart } from "lucide-react";

interface HeaderProps {
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  isLoggedIn?: boolean;
  userRole?: 'user' | 'admin';
}

export default function Header({ onLoginClick, onSignupClick, isLoggedIn = false, userRole }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Inventory", href: "#inventory" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  if (userRole === 'admin') {
    navItems.push({ label: "Admin Dashboard", href: "#admin" });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-lg font-bold text-primary-foreground">SR</span>
          </div>
          <span className="text-xl font-bold text-primary">Sponty Rides</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" data-testid="button-cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-profile">
                <User className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={onLoginClick} data-testid="button-login">
                Log In
              </Button>
              <Button onClick={onSignupClick} data-testid="button-signup">
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {isLoggedIn ? (
                  <>
                    <Button variant="ghost" className="justify-start" data-testid="mobile-button-profile">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="justify-start" data-testid="mobile-button-cart">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Cart
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={onLoginClick} className="justify-start" data-testid="mobile-button-login">
                      Log In
                    </Button>
                    <Button onClick={onSignupClick} className="justify-start" data-testid="mobile-button-signup">
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}