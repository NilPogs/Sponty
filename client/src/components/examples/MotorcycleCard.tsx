import MotorcycleCard from '../MotorcycleCard';
import motorcycleImg from '@assets/generated_images/black_sport_motorcycle_product_b0728ffb.png';

export default function MotorcycleCardExample() {
  return (
    <div className="max-w-sm">
      <MotorcycleCard
        id="1"
        name="Ninja ZX-10R"
        brand="Kawasaki"
        price={16999}
        imageUrl={motorcycleImg}
        type="Sport"
        year={2024}
        isNew={true}
        onViewDetails={(id) => console.log('View details:', id)}
        onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
      />
    </div>
  );
}