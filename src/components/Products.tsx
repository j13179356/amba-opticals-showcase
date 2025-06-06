
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Products = () => {
  const categories = [
    {
      title: "Prescription Glasses",
      description: "Crystal clear vision with stylish frames",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop&crop=center",
      featured: true
    },
    {
      title: "Sunglasses",
      description: "UV protection meets fashion",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop&crop=center",
      featured: false
    },
    {
      title: "Contact Lenses",
      description: "Freedom and comfort in vision",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop&crop=center",
      featured: false
    },
    {
      title: "Reading Glasses",
      description: "Comfort for close-up tasks",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      featured: false
    }
  ];

  const featuredProducts = [
    {
      name: "Classic Aviator",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Modern Rectangle",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Vintage Round",
      price: "₹2,799",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From prescription glasses to designer sunglasses, find the perfect eyewear 
            for every occasion and style preference.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`group cursor-pointer hover:shadow-lg transition-all duration-300 ${
                category.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      category.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">Featured Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.name} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
