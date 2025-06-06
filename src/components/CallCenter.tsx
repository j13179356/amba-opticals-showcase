
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, MessageCircle, Mail, Headphones } from "lucide-react";

export const CallCenter = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Primary Number",
      subtitle: "Main Store & Appointments",
      contact: "+91 98765 43210",
      action: "Call Now",
      available: "Available 24/7"
    },
    {
      icon: Phone,
      title: "Secondary Number",
      subtitle: "Customer Support",
      contact: "+91 87654 32109",
      action: "Call Now",
      available: "Mon-Sat: 9AM-8PM"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      subtitle: "Quick Messages & Queries",
      contact: "+91 98765 43210",
      action: "Send Message",
      available: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "Detailed Inquiries",
      contact: "info@ambaopticals.com",
      action: "Send Email",
      available: "Response within 4 hours"
    }
  ];

  const services = [
    "Emergency Eye Care Consultation",
    "Prescription Verification",
    "Frame Selection Guidance",
    "Appointment Scheduling",
    "Insurance & Payment Queries",
    "Product Information",
    "Complaint Resolution",
    "Store Directions & Hours"
  ];

  const quickActions = [
    { title: "Book Eye Test", subtitle: "Schedule comprehensive examination" },
    { title: "Check Prescription Status", subtitle: "Track your order progress" },
    { title: "Frame Repair Service", subtitle: "Quick repair appointments" },
    { title: "Contact Lens Consultation", subtitle: "Expert fitting service" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-foreground">Call Us Now</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant support from our experienced team. We're here to help with 
            all your vision needs and answer any questions you may have.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={method.title} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <method.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.subtitle}
                </p>
                
                <div className="text-lg font-medium text-primary mb-2">
                  {method.contact}
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">
                  {method.available}
                </p>
                
                <Button size="sm" className="w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services We Help With */}
          <div>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Headphones className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    What We Can Help You With
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={service} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-secondary rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Business Hours
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Monday - Saturday: 9:00 AM - 8:00 PM</div>
                    <div>Sunday: 10:00 AM - 6:00 PM</div>
                    <div className="text-primary font-medium">Emergency services available 24/7</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Quick Actions
                </h3>
                
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Card key={action.title} className="cursor-pointer hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {action.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {action.subtitle}
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Call
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6 text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Visit Our Store</h4>
                      <p className="text-sm opacity-90 mb-4">
                        123 Vision Street, Downtown Area<br />
                        City - 400001
                      </p>
                      <Button variant="secondary" size="sm">
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
