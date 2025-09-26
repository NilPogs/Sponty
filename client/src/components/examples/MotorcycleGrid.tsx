import MotorcycleGrid from '../MotorcycleGrid';
import blackSportImg from '@assets/generated_images/black_sport_motorcycle_product_b0728ffb.png';
import blueCruiserImg from '@assets/generated_images/blue_cruiser_motorcycle_product_abd87b00.png';
import redTouringImg from '@assets/generated_images/red_touring_motorcycle_product_6f2e38ca.png';

export default function MotorcycleGridExample() {
  // todo: remove mock functionality
  const mockMotorcycles = [
    {
      id: "1",
      name: "Ninja ZX-10R",
      brand: "Kawasaki",
      price: 16999,
      imageUrl: blackSportImg,
      type: "Sport",
      year: 2024,
      isNew: true
    },
    {
      id: "2", 
      name: "Street Glide",
      brand: "Harley-Davidson",
      price: 21999,
      imageUrl: blueCruiserImg,
      type: "Cruiser",
      year: 2024,
      isNew: true
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
      isNew: false
    },
    {
      id: "4",
      name: "R1250GS",
      brand: "BMW",
      price: 18999,
      imageUrl: blackSportImg,
      type: "Adventure",
      year: 2024,
      isNew: true
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
      isNew: false
    },
    {
      id: "6",
      name: "Panigale V4",
      brand: "Ducati",
      price: 24999,
      imageUrl: redTouringImg,
      type: "Sport",
      year: 2024,
      isNew: true
    }
  ];

  return (
    <MotorcycleGrid 
      motorcycles={mockMotorcycles}
      onViewDetails={(id) => console.log('View details:', id)}
      onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
    />
  );
}