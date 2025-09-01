import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Server } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-magenta/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Powered by Germany's Premium Infrastructure</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Next-Level Hosting for{" "}
            <span className="gradient-text">Gamers & Creators</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Deploy game servers and VPS instances in seconds. 
            <br className="hidden md:block" />
            Your server. Your rules. Powered by RyzeHosting.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              <Server className="mr-2 h-5 w-5" />
              View Products
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;