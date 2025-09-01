import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Server, Globe, ArrowRight, Badge } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Gamepad2,
      title: "Game Servers",
      description: "High-performance game hosting for Minecraft, CS2, Rust, and more. DDoS protected with instant setup.",
      features: ["One-click installs", "Mod support", "Auto backups", "Custom control panel"],
      gradient: "from-magenta to-purple-pink",
    },
    {
      icon: Server,
      title: "VPS & Root Servers",
      description: "Full root access Linux servers with KVM virtualization. Perfect for developers and businesses.",
      features: ["Full root access", "99.9% uptime SLA", "NVMe SSD storage", "Unlimited traffic"],
      gradient: "from-purple-pink to-deep-purple",
    },
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Perfect Server</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional hosting solutions tailored for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`} />
              
              <CardHeader className="relative">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${product.gradient} mb-4`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="gradient" className="w-full group">
                  Configure Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border">
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              Domain Registration <Badge className="ml-2 text-xs">Coming Soon</Badge>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;