
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Filter } from "lucide-react";

export const ShopCollection = () => {
  const products = [
    {
      id: 1,
      name: "Classic Aviator",
      price: "₹2,999",
      originalPrice: "₹3,999",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop&crop=center",
      category: "Sunglasses",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Modern Rectangle",
      price: "₹3,499",
      originalPrice: "₹4,299",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop&crop=center",
      category: "Prescription",
      rating: 4.9,
      reviews: 87
    },
    {
      id: 3,
      name: "Vintage Round",
      price: "₹2,799",
      originalPrice: "₹3,499",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      category: "Reading",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Designer Cat Eye",
      price: "₹4,199",
      originalPrice: "₹5,299",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop&crop=center",
      category: "Fashion",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 5,
      name: "Sports Wrap",
      price: "₹3,299",
      originalPrice: "₹4,199",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop&crop=center",
      category: "Sports",
      rating: 4.6,
      reviews: 95
    },
    {
      id: 6,
      name: "Blue Light Blocker",
      price: "₹2,199",
      originalPrice: "₹2,999",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      category: "Computer",
      rating: 4.8,
      reviews: 178
    }
  ];

  const categories = ["All", "Sunglasses", "Prescription", "Reading", "Fashion", "Sports", "Computer"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-foreground">Shop Our Collection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium eyewear collection featuring the latest styles, 
            cutting-edge technology, and unmatched quality.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select className="p-2 border border-input rounded-md bg-background text-sm">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  
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
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};
