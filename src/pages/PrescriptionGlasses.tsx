
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const PrescriptionGlasses = () => {
  const products = [
    {
      id: 1,
      name: "Modern Rectangle Frame",
      price: "₹3,499",
      originalPrice: "₹4,299",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop&crop=center",
      rating: 4.9,
      reviews: 87,
      description: "Sleek and professional rectangular frames perfect for everyday wear"
    },
    {
      id: 2,
      name: "Classic Round Frames",
      price: "₹2,999",
      originalPrice: "₹3,799",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      rating: 4.7,
      reviews: 156,
      description: "Timeless round frames that suit most face shapes"
    },
    {
      id: 3,
      name: "Designer Cat Eye",
      price: "₹4,199",
      originalPrice: "₹5,299",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop&crop=center",
      rating: 4.8,
      reviews: 203,
      description: "Elegant cat-eye frames for a sophisticated look"
    },
    {
      id: 4,
      name: "Lightweight Titanium",
      price: "₹5,499",
      originalPrice: "₹6,999",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      rating: 4.9,
      reviews: 124,
      description: "Ultra-lightweight titanium frames for all-day comfort"
    },
    {
      id: 5,
      name: "Vintage Square",
      price: "₹3,299",
      originalPrice: "₹4,199",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop&crop=center",
      rating: 4.6,
      reviews: 95,
      description: "Classic square frames with a vintage aesthetic"
    },
    {
      id: 6,
      name: "Flexible Sport Frame",
      price: "₹3,799",
      originalPrice: "₹4,699",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      rating: 4.8,
      reviews: 178,
      description: "Durable and flexible frames perfect for active lifestyles"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl font-bold text-foreground">Prescription Glasses</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Crystal clear vision with stylish frames. Our prescription glasses combine 
                cutting-edge lens technology with fashionable designs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                          {Math.round(((parseFloat(product.originalPrice.replace('₹', '').replace(',', '')) - parseFloat(product.price.replace('₹', '').replace(',', ''))) / parseFloat(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-muted-foreground ml-1">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/products/prescription-glasses/${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrescriptionGlasses;
