import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye } from "lucide-react";

interface MotorcycleCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  type: string;
  year: number;
  mileage?: number;
  isNew: boolean;
  onViewDetails?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

export default function MotorcycleCard({
  id,
  name,
  brand,
  price,
  imageUrl,
  type,
  year,
  mileage,
  isNew,
  onViewDetails,
  onAddToWishlist
}: MotorcycleCardProps) {
  const handleViewDetails = () => {
    console.log(`View details for motorcycle ${id}`);
    onViewDetails?.(id);
  };

  const handleAddToWishlist = () => {
    console.log(`Add motorcycle ${id} to wishlist`);
    onAddToWishlist?.(id);
  };

  return (
    <Card className="group hover-elevate overflow-hidden" data-testid={`card-motorcycle-${id}`}>
      <CardHeader className="p-0 relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={`${brand} ${name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-motorcycle-${id}`}
          />
        </div>
        <div className="absolute top-2 left-2 flex gap-2">
          {isNew && (
            <Badge variant="default" data-testid={`badge-new-${id}`}>
              New
            </Badge>
          )}
          <Badge variant="secondary" data-testid={`badge-type-${id}`}>
            {type}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
          onClick={handleAddToWishlist}
          data-testid={`button-wishlist-${id}`}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold text-lg" data-testid={`text-name-${id}`}>
              {brand} {name}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid={`text-year-${id}`}>
              {year} • {mileage ? `${mileage.toLocaleString()} mi` : 'Brand New'}
            </p>
          </div>
          <div className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
            ${price.toLocaleString()}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={handleViewDetails}
          data-testid={`button-view-details-${id}`}
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}