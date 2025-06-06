
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, Users, Award, Clock, HeartHandshake } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium quality frames and lenses with comprehensive warranty coverage for peace of mind."
    },
    {
      icon: Users,
      title: "Expert Optometrists",
      description: "Certified eye care professionals with 15+ years of experience in vision correction."
    },
    {
      icon: Truck,
      title: "Free Home Delivery",
      description: "Complimentary delivery service within the city for orders above ₹2,000."
    },
    {
      icon: Award,
      title: "Designer Brands",
      description: "Exclusive collection from top international and domestic eyewear brands."
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Quick turnaround for prescription glasses and frame adjustments."
    },
    {
      icon: HeartHandshake,
      title: "Lifetime Support",
      description: "Ongoing customer support, adjustments, and maintenance services."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Why Choose Amba Opticals?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of experience and 5000+ satisfied customers, we're your trusted partner 
            for comprehensive eye care and premium eyewear solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="group text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">15+</div>
            <div className="text-lg font-medium text-foreground">Years Experience</div>
            <div className="text-muted-foreground">Serving the community</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">5000+</div>
            <div className="text-lg font-medium text-foreground">Happy Customers</div>
            <div className="text-muted-foreground">Satisfied with our service</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">200+</div>
            <div className="text-lg font-medium text-foreground">Frame Styles</div>
            <div className="text-muted-foreground">Designer collections</div>
          </div>
        </div>
      </div>
    </section>
  );
};
