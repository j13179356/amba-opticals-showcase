
import { Header } from "@/components/Header";
import { CallCenter } from "@/components/CallCenter";
import { Footer } from "@/components/Footer";

const CallNowPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <CallCenter />
      </div>
      <Footer />
    </div>
  );
};

export default CallNowPage;
