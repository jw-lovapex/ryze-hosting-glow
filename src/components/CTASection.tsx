import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-pink/10 to-deep-purple/10 dark:from-primary/5 dark:via-purple-pink/5 dark:to-deep-purple/5" />
      
      {/* Animated circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-20 dark:opacity-10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Ready to Launch?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Server in{" "}
            <span className="gradient-text">Seconds</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of gamers and developers who trust RyzeHosting
            <br className="hidden md:block" />
            for their mission-critical infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Contact Sales
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Instant setup • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;