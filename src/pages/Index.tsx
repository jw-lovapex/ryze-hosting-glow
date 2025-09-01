import { ThemeProvider } from "@/components/ThemeProvider";
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
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
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
    </ThemeProvider>
  );
};

export default Index;
