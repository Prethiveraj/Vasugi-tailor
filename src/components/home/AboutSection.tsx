
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "12+ years serving Chromepet & Hasthinapuram",
    "Trusted by over 500 happy customers",
    "Experienced and skilled master tailors",
    "Custom fits for every occasion",
    "Premium materials and fine craftsmanship",
    "Reliable service with timely delivery",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column with curved edge design */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            {/* Main image with curved edges */}
            <div className="relative overflow-hidden rounded-[30px] shadow-xl">
              <div
                className="h-[500px] bg-center bg-cover transform transition-transform duration-700 hover:scale-[1.02]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80')",
                }}
              ></div>
            </div>
            
            {/* Small overlay image with curved edges */}
            <div
              className="absolute -bottom-6 -right-6 rounded-[20px] shadow-xl h-[200px] w-[200px] bg-center bg-cover border-4 border-white transform transition-transform duration-700 hover:scale-110 overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80')",
              }}
            ></div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-tailor-dark mb-4">
              About Vasugi Tailor
            </h2>
            <div className="w-20 h-1 bg-tailor-maroon mb-6 rounded-full"></div>
            <p className="font-poppins text-gray-700 mb-6">
              Since 1985, Vasugi Tailor has been providing premium tailoring
              services in Chennai. Our master tailors combine traditional
              techniques with modern styles to create perfect-fitting garments
              for every occasion.
            </p>
            <p className="font-poppins text-gray-700 mb-6">
              For the past 12 years, we've proudly served customers in and
              around Chromepet and Hasthinapuram. With over 500 happy customers,
              many of whom have become like family, we're grateful for the trust
              and support our community continues to show us.
            </p>
            <p className="font-poppins text-gray-700 mb-8">
              We take pride in our craftsmanship and attention to detail,
              ensuring that every stitch meets our high standards of quality.
              Whether you need alterations, custom clothing, or wedding outfits,
              we are committed to exceeding your expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center transform transition hover:translate-x-1 duration-300"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <Check size={18} className="text-tailor-maroon mr-2" />
                  <span className="font-poppins text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white transition-colors duration-300 rounded-lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
