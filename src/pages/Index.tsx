import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConfiguratorPreview from "@/components/ConfiguratorPreview";
import AffiliateSection from "@/components/AffiliateSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <ConfiguratorPreview />
      <AffiliateSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
