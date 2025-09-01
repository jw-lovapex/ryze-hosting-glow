import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Cpu, HardDrive, Zap, DollarSign } from "lucide-react";
import { useState } from "react";

const ConfiguratorPreview = () => {
  const [cpu, setCpu] = useState([4]);
  const [ram, setRam] = useState([8]);
  const [storage, setStorage] = useState([100]);

  const calculatePrice = () => {
    return (cpu[0] * 5 + ram[0] * 2 + storage[0] * 0.1).toFixed(2);
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Configure Your <span className="gradient-text">Perfect Server</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Customize resources to match your exact needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            {/* Gradient header */}
            <div className="h-2 bg-gradient-primary" />
            
            <CardHeader>
              <CardTitle className="text-2xl">VPS Configurator</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* CPU Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <span className="font-medium">CPU Cores</span>
                  </div>
                  <span className="text-2xl font-bold">{cpu[0]} vCores</span>
                </div>
                <Slider
                  value={cpu}
                  onValueChange={setCpu}
                  min={1}
                  max={16}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* RAM Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-medium">RAM</span>
                  </div>
                  <span className="text-2xl font-bold">{ram[0]} GB</span>
                </div>
                <Slider
                  value={ram}
                  onValueChange={setRam}
                  min={2}
                  max={64}
                  step={2}
                  className="w-full"
                />
              </div>

              {/* Storage Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-5 w-5 text-primary" />
                    <span className="font-medium">NVMe Storage</span>
                  </div>
                  <span className="text-2xl font-bold">{storage[0]} GB</span>
                </div>
                <Slider
                  value={storage}
                  onValueChange={setStorage}
                  min={20}
                  max={1000}
                  step={20}
                  className="w-full"
                />
              </div>

              {/* Price Display */}
              <div className="pt-6 border-t">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="text-lg">Monthly Price</span>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold gradient-text">
                      €{calculatePrice()}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Order This Configuration
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-sm text-muted-foreground">
                <div className="text-center">
                  <div className="font-medium text-foreground">Unlimited</div>
                  <div>Traffic</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-foreground">1 Gbit/s</div>
                  <div>Port Speed</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-foreground">KVM</div>
                  <div>Virtualization</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-foreground">Full Root</div>
                  <div>Access</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorPreview;