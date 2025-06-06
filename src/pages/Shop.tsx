
import { Header } from "@/components/Header";
import { ShopCollection } from "@/components/ShopCollection";
import { Footer } from "@/components/Footer";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <ShopCollection />
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
