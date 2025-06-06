
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Clear Vision,
                <span className="text-primary"> Perfect Style</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover premium eyewear collections that combine cutting-edge technology 
                with timeless elegance. Your perfect vision starts here.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/book-appointment">Book Eye Test</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Frame Styles</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=600&fit=crop&crop=center"
                alt="Premium Eyewear Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <Eye className="h-8 w-8 mb-2" />
              <div className="text-sm font-medium">Premium Quality</div>
              <div className="text-xs opacity-90">Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
