
import { Header } from "@/components/Header";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { Footer } from "@/components/Footer";

const BookAppointmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <AppointmentBooking />
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointmentPage;
