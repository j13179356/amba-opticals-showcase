
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
