import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import MotorcycleCard from "./MotorcycleCard";

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
}

interface MotorcycleGridProps {
  motorcycles: Motorcycle[];
  onViewDetails?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

export default function MotorcycleGrid({ motorcycles, onViewDetails, onAddToWishlist }: MotorcycleGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Get unique brands and types for filters
  const brands = Array.from(new Set(motorcycles.map(m => m.brand))).sort();
  const types = Array.from(new Set(motorcycles.map(m => m.type))).sort();

  // Filter motorcycles based on search and filters
  const filteredMotorcycles = motorcycles.filter(motorcycle => {
    const matchesSearch = motorcycle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         motorcycle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedBrand || motorcycle.brand === selectedBrand;
    const matchesType = !selectedType || motorcycle.type === selectedType;
    
    let matchesPrice = true;
    if (priceRange) {
      switch (priceRange) {
        case "under-10k":
          matchesPrice = motorcycle.price < 10000;
          break;
        case "10k-20k":
          matchesPrice = motorcycle.price >= 10000 && motorcycle.price < 20000;
          break;
        case "20k-30k":
          matchesPrice = motorcycle.price >= 20000 && motorcycle.price < 30000;
          break;
        case "over-30k":
          matchesPrice = motorcycle.price >= 30000;
          break;
      }
    }

    return matchesSearch && matchesBrand && matchesType && matchesPrice;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("");
    setSelectedType("");
    setPriceRange("");
  };

  return (
    <section className="py-16" id="inventory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-inventory-title">
            Our Motorcycle Inventory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-inventory-subtitle">
            Browse our extensive collection of premium motorcycles from top brands
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search motorcycles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
            
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger data-testid="select-brand">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map(brand => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger data-testid="select-type">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger data-testid="select-price">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under $10k</SelectItem>
                <SelectItem value="10k-20k">$10k - $20k</SelectItem>
                <SelectItem value="20k-30k">$20k - $30k</SelectItem>
                <SelectItem value="over-30k">Over $30k</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-muted-foreground" data-testid="text-results-count">
              Showing {filteredMotorcycles.length} of {motorcycles.length} motorcycles
            </p>
            <Button variant="outline" size="sm" onClick={clearFilters} data-testid="button-clear-filters">
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Motorcycle Grid */}
        {filteredMotorcycles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-motorcycles">
            {filteredMotorcycles.map(motorcycle => (
              <MotorcycleCard
                key={motorcycle.id}
                {...motorcycle}
                onViewDetails={onViewDetails}
                onAddToWishlist={onAddToWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12" data-testid="empty-state">
            <p className="text-xl text-muted-foreground">No motorcycles found matching your criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}