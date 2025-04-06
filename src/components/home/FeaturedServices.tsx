
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Shirt, UserCheck } from "lucide-react";

const services = [
  {
    icon: <Scissors size={40} className="text-tailor-maroon" />,
    title: "Alterations",
    description: "Perfect-fitting garments with our expert alteration services. We tailor clothes to your unique measurements.",
    link: "/services"
  },
  {
    icon: <Shirt size={40} className="text-tailor-maroon" />,
    title: "Custom Clothing",
    description: "Bespoke garments crafted to your specifications. From formal wear to ethnic clothing, designed just for you.",
    link: "/services"
  },
  {
    icon: <UserCheck size={40} className="text-tailor-maroon" />,
    title: "Wedding Outfits",
    description: "Make your special day perfect with custom wedding attire. Traditional and contemporary designs available.",
    link: "/services"
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-tailor-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-tailor-dark mb-4">Our Premium Services</h2>
          <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
            At Vasugi Tailor, we offer a range of bespoke tailoring services to ensure your garments fit perfectly and reflect your style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="font-playfair text-2xl text-tailor-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-poppins text-gray-600 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center pt-2">
                <Link to={service.link}>
                  <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white transition-colors duration-300">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Link to="/services">
            <Button variant="outline" className="border-tailor-maroon text-tailor-maroon hover:bg-tailor-maroon hover:text-white transition-colors duration-300">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
