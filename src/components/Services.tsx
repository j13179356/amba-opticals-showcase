
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Stethoscope, Settings, Award, Clock, Shield } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description: "Advanced digital eye testing with the latest equipment for accurate prescriptions."
    },
    {
      icon: Stethoscope,
      title: "Vision Therapy",
      description: "Specialized programs to improve visual skills and eye coordination."
    },
    {
      icon: Settings,
      title: "Frame Fitting & Adjustment",
      description: "Perfect fitting service ensuring maximum comfort and optimal vision."
    },
    {
      icon: Award,
      title: "Designer Collections",
      description: "Exclusive range from top international and domestic eyewear brands."
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Quick prescription fulfillment and frame repairs for your convenience."
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      description: "Comprehensive warranty coverage and ongoing customer support."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete eye care solutions with professional expertise and 
            personalized service for all your vision needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
