import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Gift, ArrowRight } from "lucide-react";

const AffiliateSection = () => {
  return (
    <section id="affiliate" className="py-20 relative">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-primary p-8 md:p-12">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Affiliate Program</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Earn with RyzeHosting
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join our affiliate program and earn up to 20% commission on every sale.
              <br className="hidden md:block" />
              Get paid monthly with no minimum payout threshold.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <TrendingUp className="h-8 w-8 mb-2 mx-auto" />
                <div className="text-2xl font-bold mb-1">20%</div>
                <div className="text-sm text-white/80">Commission Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Users className="h-8 w-8 mb-2 mx-auto" />
                <div className="text-2xl font-bold mb-1">90 Days</div>
                <div className="text-sm text-white/80">Cookie Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Gift className="h-8 w-8 mb-2 mx-auto" />
                <div className="text-2xl font-bold mb-1">€0</div>
                <div className="text-sm text-white/80">Minimum Payout</div>
              </div>
            </div>

            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 font-semibold group"
            >
              Join Affiliate Program
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AffiliateSection;