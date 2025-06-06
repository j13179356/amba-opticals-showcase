
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to See the World Clearly?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Don't wait any longer. Book your comprehensive eye examination today 
              and discover the perfect eyewear solution for your lifestyle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="group min-w-[200px]" asChild>
              <Link to="/book-appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Eye Test
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/call-now">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 98765 43210
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Same Day Service</div>
              <div className="text-primary-foreground/80">Get your glasses ready within hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Free Consultation</div>
              <div className="text-primary-foreground/80">Expert advice at no extra cost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Lifetime Support</div>
              <div className="text-primary-foreground/80">Ongoing care and adjustments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
