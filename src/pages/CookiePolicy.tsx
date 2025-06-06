
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 lg:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
            
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
                <p className="leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and improving site functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Essential Cookies</h3>
                    <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Analytics Cookies</h3>
                    <p>These help us understand how visitors interact with our website by collecting anonymous information.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Functional Cookies</h3>
                    <p>These cookies remember your preferences and provide enhanced, personalized features.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                <p className="leading-relaxed">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                  may impact your user experience and parts of our website may no longer be fully accessible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
                <p className="leading-relaxed">
                  We may use third-party services that place cookies on your device. These services have their own 
                  privacy policies and we have no control over their cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                  with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at info@ambaopticals.com.
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

export default CookiePolicyPage;
