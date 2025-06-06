
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 lg:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Amba Opticals services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Services</h2>
                <p className="leading-relaxed">
                  Amba Opticals provides comprehensive eye care services, eyewear products, and related optical services. 
                  We reserve the right to modify or discontinue any service at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Appointments and Cancellations</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Appointments must be cancelled at least 24 hours in advance</li>
                  <li>Late cancellations may be subject to a cancellation fee</li>
                  <li>We reserve the right to reschedule appointments due to unforeseen circumstances</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
                <p className="leading-relaxed">
                  Payment is due at the time of service or product delivery. We accept cash, credit cards, 
                  and other approved payment methods. Refunds are subject to our return policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Warranty and Returns</h2>
                <p className="leading-relaxed">
                  All eyewear products come with a manufacturer's warranty. Custom prescriptions may have 
                  different return policies. Please consult with our staff for specific warranty information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Amba Opticals shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages related to your use of our services.
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

export default TermsOfServicePage;
