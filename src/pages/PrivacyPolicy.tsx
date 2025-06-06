
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 lg:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="leading-relaxed">
                  At Amba Opticals, we collect information you provide directly to us, such as when you book an appointment, 
                  make a purchase, or contact us for support. This may include your name, email address, phone number, 
                  prescription details, and payment information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>To provide and maintain our services</li>
                  <li>To process appointments and orders</li>
                  <li>To send you important updates about your orders or appointments</li>
                  <li>To improve our services and customer experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this privacy policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at info@ambaopticals.com 
                  or call us at +91 98765 43210.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
