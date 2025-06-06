
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const About = () => {
  const achievements = [
    "15+ years of trusted eye care service",
    "Certified optometrists and technicians",
    "Latest technology and equipment",
    "5000+ satisfied customers",
    "Wide range of premium brands",
    "Personalized vision solutions"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                About Amba Opticals
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded with a vision to provide exceptional eye care and premium eyewear, 
                Amba Opticals has been serving the community for over 15 years with 
                dedication and expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of certified optometrists and experienced technicians use the 
                latest technology to ensure accurate diagnoses and perfect prescriptions. 
                We believe that everyone deserves clear vision and stylish eyewear that 
                reflects their personality.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Why Choose Us?</h3>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={achievement} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="mt-8">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=300&h=400&fit=crop&crop=center"
                  alt="Eye examination"
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=300&fit=crop&crop=center"
                  alt="Eyewear collection"
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center"
                  alt="Sunglasses display"
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=400&fit=crop&crop=center"
                  alt="Contact lenses"
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
