import AdminDashboard from '../AdminDashboard';
import blackSportImg from '@assets/generated_images/black_sport_motorcycle_product_b0728ffb.png';
import blueCruiserImg from '@assets/generated_images/blue_cruiser_motorcycle_product_abd87b00.png';
import redTouringImg from '@assets/generated_images/red_touring_motorcycle_product_6f2e38ca.png';

export default function AdminDashboardExample() {
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
      isNew: true,
      description: "High-performance sport bike with advanced electronics",
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
      description: "Classic American cruiser with premium features",
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
      description: "Luxury touring motorcycle with advanced comfort features",
      stock: 1
    }
  ];

  return (
    <AdminDashboard 
      motorcycles={mockMotorcycles}
      onAddMotorcycle={(motorcycle) => console.log('Add motorcycle:', motorcycle)}
      onUpdateMotorcycle={(id, motorcycle) => console.log('Update motorcycle:', id, motorcycle)}
      onDeleteMotorcycle={(id) => console.log('Delete motorcycle:', id)}
    />
  );
}