
import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Scissors, Shirt, Star, ThumbsUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const servicesList = [
  {
    id: 1,
    title: "Custom Tailoring",
    icon: <Shirt size={40} className="text-tailor-maroon" />,
    description:
      "Get perfectly fitted custom garments tailored specifically for your body measurements and style preferences.",
    details: [
      "Professional measurements and consultation",
      "Selection of premium fabrics",
      "Multiple fittings for perfect results",
      "Custom design and styling options",
      "Delivery within agreed timeframe",
    ],
    price: "Starting from ₹3000",
  },
  {
    id: 2,
    title: "Alterations",
    icon: <Scissors size={40} className="text-tailor-maroon" />,
    description:
      "Expert alteration services to adjust existing garments for a better fit or updated style.",
    details: [
      "Hem adjustment for pants, skirts, and dresses",
      "Waist adjustment for better fit",
      "Sleeve shortening or lengthening",
      "Taking in or letting out seams",
      "Quick turnaround options available",
    ],
    price: "Starting from ₹500",
  },
  {
    id: 3,
    title: "Wedding Outfits",
    icon: <Calendar size={40} className="text-tailor-maroon" />,
    description:
      "Create the perfect wedding outfit with our specialized bridal and groom tailoring services.",
    details: [
      "Traditional and contemporary wedding attire",
      "Bridal lehengas and sarees",
      "Groom's sherwanis and suits",
      "Family wedding ensembles",
      "Pre-wedding consultation and multiple fittings",
    ],
    price: "Starting from ₹10,000",
  },
  {
    id: 4,
    title: "Ethnic Wear",
    icon: <Star size={40} className="text-tailor-maroon" />,
    description:
      "Exquisite ethnic wear tailored to perfection for festivals, celebrations, and cultural events.",
    details: [
      "Traditional sarees and blouses",
      "Salwar kameez and kurtis",
      "Lehengas and ghaghras",
      "Men's kurta pajamas and dhotis",
      "Festival and celebration special outfits",
    ],
    price: "Starting from ₹2,500",
  },
  {
    id: 5,
    title: "Repair Services",
    icon: <ThumbsUp size={40} className="text-tailor-maroon" />,
    description:
      "Extend the life of your favorite garments with our professional repair services.",
    details: [
      "Tear and rip repairs",
      "Zipper replacement",
      "Button replacement and securing",
      "Lining replacement",
      "Patch work and reinforcement",
    ],
    price: "Starting from ₹300",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* SEO Head */}
      <Helmet>
        <title>Tailoring Services in Chennai | Vasugi Tailor</title>
        <meta
          name="description"
          content="Explore premium tailoring services in Chennai with Vasugi Tailor. From bridal wear and ethnic wear to alterations and garment repair, we deliver perfect fits and style."
        />
        <meta
          name="keywords"
          content="Vasugi Tailor, tailoring services in Chennai, bridal tailoring Chennai, custom tailoring Chennai, ethnic wear stitching, alterations, tailor shop Chennai, blouse stitching, wedding outfits, garment repair"
        />
      </Helmet>

      {/* Header */}
      <div className="bg-[#EC7FA9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-[#FFEDFA] italic text-4xl md:text-5xl font-bold mb-4">
            Our Tailoring Services in Chennai
          </h1>
          <p className="font-exo text-lg text-white max-w-3xl mx-auto">
            Discover our comprehensive range of tailoring services crafted by
            the experts at Vasugi Tailor – from bridal wear stitching to blouse
            alterations and custom suits.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 bg-tailor-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => (
              <Card
                key={service.id}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-tailor-cream rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="font-playfair text-2xl text-tailor-dark">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="font-poppins text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check
                          size={18}
                          className="text-tailor-maroon mt-1 mr-2 flex-shrink-0"
                        />
                        <span className="font-poppins text-gray-700">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-poppins font-medium text-tailor-maroon mt-4">
                    {service.price}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-tailor-maroon hover:bg-tailor-dark text-white">
                      Book This Tailoring Service
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[#FFEDFA] italic text-3xl font-bold text-tailor-dark mb-4">
              Our Tailoring Process
            </h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              At Vasugi Tailor, we follow a detailed and precise approach to
              ensure each garment is stitched to perfection with expert
              craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "Discuss your requirements and preferences",
              },
              {
                number: "02",
                title: "Measurements",
                description: "Precise measurements for a perfect fit",
              },
              {
                number: "03",
                title: "Tailoring",
                description: "Expert craftsmanship by skilled tailors",
              },
              {
                number: "04",
                title: "Delivery",
                description: "Final fitting and delivery of your garment",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tailor-cream mb-4">
                  <span className="font-playfair text-2xl font-bold text-tailor-maroon">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">
                  {step.title}
                </h3>
                <p className="font-poppins text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-tailor-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">
            Ready for a Perfect Fit?
          </h2>
          <p className="font-poppins text-gray-700 max-w-2xl mx-auto mb-8">
            Schedule your stitching consultation today with Vasugi Tailor –
            Chennai's trusted name for bridal tailoring, ethnic wear, and
            alterations.
          </p>
          <Link to="/contact">
            <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white px-8 py-6 text-lg">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
