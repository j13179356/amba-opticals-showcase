
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Mail, Eye } from "lucide-react";

export const AppointmentBooking = () => {
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const services = [
    { name: "Comprehensive Eye Exam", duration: "45 mins", price: "₹500" },
    { name: "Contact Lens Fitting", duration: "30 mins", price: "₹300" },
    { name: "Frame Selection Consultation", duration: "20 mins", price: "Free" },
    { name: "Vision Therapy Session", duration: "60 mins", price: "₹800" },
    { name: "Kids Eye Exam", duration: "30 mins", price: "₹400" }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-foreground">Book Your Appointment</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit with our experienced optometrists for comprehensive 
            eye care and personalized service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Our Services</h3>
            {services.map((service, index) => (
              <Card key={service.name} className="cursor-pointer hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {service.name}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </span>
                        <span className="font-medium text-primary">
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <input type="radio" name="service" className="mt-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Appointment Details
                </h3>
                
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-foreground">Personal Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <User className="h-4 w-4 inline mr-1" />
                          Full Name
                        </label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Phone className="h-4 w-4 inline mr-1" />
                          Phone Number
                        </label>
                        <Input placeholder="Your phone number" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Mail className="h-4 w-4 inline mr-1" />
                        Email Address
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-foreground">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Select Date
                    </h4>
                    <Input type="date" />
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-foreground">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Select Time
                    </h4>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          size="sm"
                          className="text-sm"
                          type="button"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Notes (Optional)
                    </label>
                    <Textarea 
                      placeholder="Any specific concerns or requirements..."
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button size="lg" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 p-4 bg-secondary rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Call us directly at <strong>+91 98765 43210</strong> or email 
                    <strong> info@ambaopticals.com</strong>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We'll confirm your appointment within 24 hours via phone or email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
