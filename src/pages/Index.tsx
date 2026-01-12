import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import GridOverlay from "@/components/GridOverlay";

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Continuous grid overlay across entire page */}
      <GridOverlay />
      
      {/* Page content */}
      <HeroSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
};

export default Index;
