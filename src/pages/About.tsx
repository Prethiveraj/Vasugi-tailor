import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <Layout>
      {/* SEO Metadata */}
      <Helmet>
        <title>About Vasugi Tailor | Custom Tailoring in Chennai</title>
        <meta
          name="description"
          content="Learn about Vasugi Tailor, a trusted name in custom tailoring in Chennai. Discover our values, experience, and why customers love our craftsmanship."
        />
        <meta
          name="keywords"
          content="Vasugi Tailor, Chennai tailoring, custom tailor, bespoke tailoring, tailoring services, stitched garments, tailoring shop"
        />
        <meta name="author" content="Vasugi Tailor" />
      </Helmet>

      {/* About Header */}
      <div className="bg-[#EC7FA9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-[#FFEDFA] italic text-4xl md:text-5xl font-bold mb-4">
            About Vasugi Tailor
          </h1>
          <p className="font-exo text-white text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our legacy of precision tailoring, personalized service,
            and a passion for fashion that brings your vision to life.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div
                className="rounded-lg shadow-xl h-[500px] bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80')",
                }}
              ></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">
                Our Journey
              </h2>
              <div className="w-20 h-1 bg-tailor-maroon mb-6"></div>
              <p className="font-poppins text-gray-700 mb-6">
                Vasugi Tailor was founded to bring premium tailoring services to
                the heart of Chennai. With a passion for fashion and a
                dedication to detail, we transform fabric into perfectly fitted
                pieces that reflect individual style.
              </p>
              <p className="font-poppins text-gray-700 mb-6">
                From traditional wear to modern silhouettes, our team delivers
                quality tailoring for every occasion. We prioritize customer
                satisfaction, ensuring each garment fits flawlessly and
                showcases your unique look.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-tailor-maroon mb-2">
                    10+
                  </div>
                  <div className="font-poppins text-gray-600">
                    Years of Expertise
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-tailor-maroon mb-2">
                    3000+
                  </div>
                  <div className="font-poppins text-gray-600">
                    Satisfied Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-tailor-maroon mb-2">
                    15
                  </div>
                  <div className="font-poppins text-gray-600">
                    Skilled Tailors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-tailor-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">
              Our Values
            </h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              Every stitch tells a story of commitment, craftsmanship, and
              customer-first service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star size={40} className="text-tailor-maroon" />,
                title: "Quality",
                description:
                  "Top-grade fabrics and precision tailoring ensure every outfit is made to impress.",
              },
              {
                icon: <Check size={40} className="text-tailor-maroon" />,
                title: "Precision",
                description:
                  "We obsess over measurements and fit to guarantee your perfect look.",
              },
              {
                icon: <Users size={40} className="text-tailor-maroon" />,
                title: "Customer Focus",
                description:
                  "Tailoring that listens to you – because your vision matters.",
              },
            ].map((value, idx) => (
              <Card key={idx} className="border border-gray-200 shadow-sm">
                <CardContent className="pt-8 text-center">
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <h3 className="font-playfair text-2xl font-bold text-tailor-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="font-poppins text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">
              Awards & Recognition
            </h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              A testament to our dedication, our awards reflect years of hard
              work and customer love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2022",
                title: "Top Tailor in Chennai",
                organization: "Chennai Fashion Circle",
              },
              {
                year: "2021",
                title: "Best Boutique Tailoring",
                organization: "South India Business Awards",
              },
              {
                year: "2019",
                title: "Craftsmanship Excellence",
                organization: "Textile Designers Guild",
              },
            ].map((award, idx) => (
              <Card key={idx} className="border border-gray-200 shadow-sm">
                <CardContent className="pt-8 text-center">
                  <Award size={40} className="text-tailor-gold mx-auto mb-4" />
                  <div className="font-poppins text-tailor-maroon mb-2">
                    {award.year}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">
                    {award.title}
                  </h3>
                  <p className="font-poppins text-gray-600">
                    {award.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-tailor-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Let Us Tailor Your Next Look
          </h2>
          <p className="font-poppins text-lg mb-8 max-w-2xl mx-auto">
            Step into style with a custom piece made just for you. Visit us or
            get in touch today.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-tailor-maroon hover:bg-tailor-cream hover:text-tailor-dark px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
