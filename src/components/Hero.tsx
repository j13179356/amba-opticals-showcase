
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                <span>Rated #1 Optical Store in the City</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Clear Vision,
                <span className="text-primary"> Perfect Style</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Transform your vision with premium eyewear that combines cutting-edge technology 
                with timeless elegance. Join 5000+ satisfied customers who trust us with their sight.
              </p>

              <div className="space-y-3">
                {[
                  "Free comprehensive eye examination",
                  "Same-day prescription service",
                  "Lifetime frame adjustment guarantee"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/book-appointment">
                  Book Free Eye Test
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/shop">Shop Collection</Link>
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
                alt="Premium Eyewear Collection at Amba Opticals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <Eye className="h-8 w-8 mb-2" />
              <div className="text-sm font-medium">Premium Quality</div>
              <div className="text-xs opacity-90">Guaranteed</div>
            </div>

            <div className="absolute -top-6 -left-6 bg-background border border-border p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">500+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
