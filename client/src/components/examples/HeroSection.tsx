import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onBrowseInventory={() => console.log('Browse inventory')}
      onWatchVideo={() => console.log('Watch video')}
    />
  );
}