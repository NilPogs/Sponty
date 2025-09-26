import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from '@assets/generated_images/motorcycle_dealership_showroom_interior_5beaec5a.png';

interface HeroSectionProps {
  onBrowseInventory?: () => void;
  onWatchVideo?: () => void;
}

export default function HeroSection({ onBrowseInventory, onWatchVideo }: HeroSectionProps) {
  const handleBrowseInventory = () => {
    console.log('Browse inventory clicked');
    onBrowseInventory?.();
  };

  const handleWatchVideo = () => {
    console.log('Watch video clicked');
    onWatchVideo?.();
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sponty Rides Dealership Showroom"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="text-hero-title">
          <span className="block">Welcome to</span>
          <span className="block text-primary">Sponty Rides</span>
          <span className="block">Dealership</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          Discover premium motorcycles, expert service, and unmatched customer experience. 
          Your journey to the perfect ride starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            onClick={handleBrowseInventory}
            data-testid="button-browse-inventory"
          >
            Browse Our Inventory
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg"
            onClick={handleWatchVideo}
            data-testid="button-watch-video"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Our Story
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center" data-testid="stat-bikes">
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-gray-300">Bikes in Stock</div>
          </div>
          <div className="text-center" data-testid="stat-customers">
            <div className="text-3xl md:text-4xl font-bold text-primary">5,000+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center" data-testid="stat-experience">
            <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}