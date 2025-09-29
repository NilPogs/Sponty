// src/components/MotorcycleModal.tsx
import React from 'react';
import { X, Heart, Phone } from 'lucide-react';

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
  specifications?: {
    engine?: string;
    horsepower?: string;
    weight?: string;
    fuelCapacity?: string;
  };
}

interface MotorcycleModalProps {
  motorcycle: Motorcycle | null;
  isOpen: boolean;
  onClose: () => void;
}

const MotorcycleModal: React.FC<MotorcycleModalProps> = ({ motorcycle, isOpen, onClose }) => {
  if (!isOpen || !motorcycle) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContactDealer = () => {
    onClose(); // close modal first
    const footerContact = document.getElementById("contact");
    if (footerContact) {
      footerContact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToWishlist = () => {
    console.log('Add to wishlist:', motorcycle.name);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {motorcycle.brand} {motorcycle.name}
            </h2>
            <p className="text-muted-foreground">{motorcycle.type} • {motorcycle.year}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6 space-y-6">
            {/* Image */}
            <div className="relative">
              <img
                src={motorcycle.imageUrl}
                alt={`${motorcycle.brand} ${motorcycle.name}`}
                className="w-full h-64 object-cover rounded-lg bg-muted"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  motorcycle.isNew 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {motorcycle.isNew ? 'New' : 'Used'}
                </span>
              </div>
            </div>
            
            {/* Price and Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-primary">
                  ${motorcycle.price.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Starting price</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-foreground">
                  {motorcycle.stock} in stock
                </p>
                {motorcycle.mileage && (
                  <p className="text-sm text-muted-foreground">
                    {motorcycle.mileage.toLocaleString()} miles
                  </p>
                )}
              </div>
            </div>
            
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {motorcycle.description}
              </p>
            </div>
            
            {/* Specifications */}
            {motorcycle.specifications && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {motorcycle.specifications.engine && (
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Engine</p>
                      <p className="font-medium text-foreground">{motorcycle.specifications.engine}</p>
                    </div>
                  )}
                  {motorcycle.specifications.horsepower && (
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Horsepower</p>
                      <p className="font-medium text-foreground">{motorcycle.specifications.horsepower}</p>
                    </div>
                  )}
                  {motorcycle.specifications.weight && (
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-medium text-foreground">{motorcycle.specifications.weight}</p>
                    </div>
                  )}
                  {motorcycle.specifications.fuelCapacity && (
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Fuel Capacity</p>
                      <p className="font-medium text-foreground">{motorcycle.specifications.fuelCapacity}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 p-6 border-t bg-muted/20">
            <button
              onClick={handleContactDealer}
              className="flex-1 bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Contact Dealer
            </button>
            <button
              onClick={handleAddToWishlist}
              className="px-4 py-3 border border-input rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              title="Add to wishlist"
            >
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleModal;
