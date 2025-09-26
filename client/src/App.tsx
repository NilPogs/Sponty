import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./hooks/use-theme";
import NotFound from "@/pages/not-found";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MotorcycleGrid from "./components/MotorcycleGrid";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import AdminDashboard from "./components/AdminDashboard";
import ThemeToggle from "./components/ThemeToggle";

// Assets
import blackSportImg from '@assets/generated_images/black_sport_motorcycle_product_b0728ffb.png';
import blueCruiserImg from '@assets/generated_images/blue_cruiser_motorcycle_product_abd87b00.png';
import redTouringImg from '@assets/generated_images/red_touring_motorcycle_product_6f2e38ca.png';

// Types
interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
}

interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  type: string;
  year: number;
  mileage?: number;
  isNew: boolean;
  description: string;
  stock: number;
}

function HomePage({ 
  user, 
  motorcycles, 
  onLoginClick, 
  onSignupClick, 
  onViewMotorcycleDetails, 
  onAddToWishlist 
}: {
  user: User | null;
  motorcycles: Motorcycle[];
  onLoginClick: () => void;
  onSignupClick: () => void;
  onViewMotorcycleDetails: (id: string) => void;
  onAddToWishlist: (id: string) => void;
}) {
  const scrollToInventory = () => {
    const inventorySection = document.getElementById('inventory');
    inventorySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchVideo = () => {
    console.log('Watch video clicked');
    // todo: remove mock functionality - implement video modal
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
        isLoggedIn={!!user}
        userRole={user?.role}
      />
      
      <main className="flex-1">
        <HeroSection 
          onBrowseInventory={scrollToInventory}
          onWatchVideo={handleWatchVideo}
        />
        
        <MotorcycleGrid 
          motorcycles={motorcycles}
          onViewDetails={onViewMotorcycleDetails}
          onAddToWishlist={onAddToWishlist}
        />
      </main>
      
      <Footer />
    </div>
  );
}

function AdminPage({ 
  user, 
  motorcycles, 
  onAddMotorcycle, 
  onUpdateMotorcycle, 
  onDeleteMotorcycle,
  onLogout 
}: {
  user: User | null;
  motorcycles: Motorcycle[];
  onAddMotorcycle: (motorcycle: Omit<Motorcycle, 'id'>) => void;
  onUpdateMotorcycle: (id: string, motorcycle: Partial<Motorcycle>) => void;
  onDeleteMotorcycle: (id: string) => void;
  onLogout: () => void;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">SR</span>
            </div>
            <span className="text-xl font-bold text-primary">Sponty Rides Admin</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, {user?.email}</span>
            <ThemeToggle />
            <button
              onClick={onLogout}
              className="text-sm text-primary hover:underline"
              data-testid="button-logout"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      <AdminDashboard 
        motorcycles={motorcycles}
        onAddMotorcycle={onAddMotorcycle}
        onUpdateMotorcycle={onUpdateMotorcycle}
        onDeleteMotorcycle={onDeleteMotorcycle}
      />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/admin" component={AdminRoute} />
      <Route path="/" component={HomeRoute} />
      <Route component={NotFound} />
    </Switch>
  );
}

function HomeRoute() {
  return <MainApp />;
}

function AdminRoute() {
  return <MainApp isAdminRoute />;
}

function MainApp({ isAdminRoute = false }: { isAdminRoute?: boolean }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  
  // todo: remove mock functionality - replace with actual data fetching
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([
    {
      id: "1",
      name: "Ninja ZX-10R",
      brand: "Kawasaki",
      price: 16999,
      imageUrl: blackSportImg,
      type: "Sport",
      year: 2024,
      isNew: true,
      description: "High-performance sport bike with advanced electronics and track-ready performance",
      stock: 3
    },
    {
      id: "2", 
      name: "Street Glide",
      brand: "Harley-Davidson",
      price: 21999,
      imageUrl: blueCruiserImg,
      type: "Cruiser",
      year: 2024,
      isNew: true,
      description: "Classic American cruiser with premium touring features and iconic styling",
      stock: 2
    },
    {
      id: "3",
      name: "Gold Wing",
      brand: "Honda",
      price: 23999,
      imageUrl: redTouringImg,
      type: "Touring",
      year: 2023,
      mileage: 5000,
      isNew: false,
      description: "Luxury touring motorcycle with advanced comfort and navigation features",
      stock: 1
    },
    {
      id: "4",
      name: "R1250GS",
      brand: "BMW",
      price: 18999,
      imageUrl: blackSportImg,
      type: "Adventure",
      year: 2024,
      isNew: true,
      description: "Versatile adventure bike perfect for on-road and off-road exploration",
      stock: 4
    },
    {
      id: "5",
      name: "MT-09",
      brand: "Yamaha", 
      price: 9999,
      imageUrl: blueCruiserImg,
      type: "Naked",
      year: 2023,
      mileage: 8000,
      isNew: false,
      description: "Agile naked bike with a punchy triple-cylinder engine and modern styling",
      stock: 2
    },
    {
      id: "6",
      name: "Panigale V4",
      brand: "Ducati",
      price: 24999,
      imageUrl: redTouringImg,
      type: "Sport",
      year: 2024,
      isNew: true,
      description: "Italian superbike with MotoGP-derived technology and stunning performance",
      stock: 1
    }
  ]);

  const handleLoginClick = () => {
    setAuthModalTab('login');
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthModalTab('signup');
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (userData: User) => {
    console.log('Authentication successful:', userData);
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setUser(null);
  };

  const handleViewMotorcycleDetails = (id: string) => {
    console.log('View motorcycle details:', id);
    // todo: remove mock functionality - navigate to motorcycle detail page
  };

  const handleAddToWishlist = (id: string) => {
    console.log('Add to wishlist:', id);
    // todo: remove mock functionality - implement wishlist functionality
  };

  const handleAddMotorcycle = (motorcycle: Omit<Motorcycle, 'id'>) => {
    const newMotorcycle = {
      ...motorcycle,
      id: Math.random().toString(36).substr(2, 9),
      imageUrl: blackSportImg // todo: remove mock functionality - handle actual image upload
    };
    setMotorcycles(prev => [...prev, newMotorcycle]);
    console.log('Added motorcycle:', newMotorcycle);
  };

  const handleUpdateMotorcycle = (id: string, updates: Partial<Motorcycle>) => {
    setMotorcycles(prev => prev.map(bike => 
      bike.id === id ? { ...bike, ...updates } : bike
    ));
    console.log('Updated motorcycle:', id, updates);
  };

  const handleDeleteMotorcycle = (id: string) => {
    setMotorcycles(prev => prev.filter(bike => bike.id !== id));
    console.log('Deleted motorcycle:', id);
  };

  // Redirect to login if trying to access admin without admin role
  if (isAdminRoute && (!user || user.role !== 'admin')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Admin Access Required</h1>
          <p className="text-muted-foreground">Please log in with an admin account to access this page.</p>
          <p className="text-sm text-muted-foreground">Hint: Use an email containing "admin" to get admin access</p>
          <button
            onClick={handleLoginClick}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            data-testid="button-admin-login"
          >
            Log In as Admin
          </button>
        </div>
        
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          defaultTab={authModalTab}
          onAuthSuccess={handleAuthSuccess}
        />
      </div>
    );
  }

  // Render admin dashboard if admin route and user is admin
  if (isAdminRoute && user?.role === 'admin') {
    return (
      <AdminPage
        user={user}
        motorcycles={motorcycles}
        onAddMotorcycle={handleAddMotorcycle}
        onUpdateMotorcycle={handleUpdateMotorcycle}
        onDeleteMotorcycle={handleDeleteMotorcycle}
        onLogout={handleLogout}
      />
    );
  }

  // Render homepage
  return (
    <>
      <HomePage
        user={user}
        motorcycles={motorcycles}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onViewMotorcycleDetails={handleViewMotorcycleDetails}
        onAddToWishlist={handleAddToWishlist}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Router />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
