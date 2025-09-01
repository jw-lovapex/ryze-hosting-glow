import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "MaxGamer",
      role: "Minecraft Server Owner",
      content: "Best hosting I've ever used! My server runs buttery smooth even with 100+ players and mods. The support team helped me migrate everything in minutes.",
      rating: 5,
      avatar: "MG",
    },
    {
      name: "TechDev",
      role: "Full-Stack Developer",
      content: "The VPS performance is incredible for the price. Full root access, NVMe storage, and the control panel is actually intuitive. Highly recommended!",
      rating: 5,
      avatar: "TD",
    },
    {
      name: "StreamQueen",
      role: "Content Creator",
      content: "Running my game servers for community events has never been easier. One-click setup is real, and the uptime is phenomenal. Love it!",
      rating: 5,
      avatar: "SQ",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our community says about RyzeHosting
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={`/api/placeholder/40/40`} />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;