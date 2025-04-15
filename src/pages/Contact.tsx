import { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, User, Send, FileText } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const serviceId = "service_skckdsq";
    // const templateId = "template_ktjtn5o";
    // const publicKey = "i0avD-goh2-aNfQ2u";

    const serviceId = import.meta.env.VITE_SERVICE_ID_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "vasugi tailor",
      from_message: formData.message,
      service: formData.service,
      from_phone: formData.phone,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Optional: clear form or show success message
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <Layout>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Vasugi Tailor</title>
        <meta
          name="description"
          content="Get in touch with Vasugi Tailor for appointments, custom tailoring, alterations, wedding and ethnic wear in Chennai."
        />
        <meta
          name="keywords"
          content="tailoring, vasugi tailor, chennai, custom tailoring, wedding outfits, ethnic wear, alterations, tailoring services"
        />
      </Helmet>

      {/* Contact Section */}
      <div className="py-16 bg-tailor-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-6">
                Send Us a Message
              </h2>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <form
                    // action="https://formspree.io/f/your_form_id"
                    // method="POST"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="font-poppins font-medium text-tailor-dark mb-1 block"
                      >
                        Your Name <span className="text-tailor-maroon">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="font-poppins font-medium text-tailor-dark mb-1 block"
                        >
                          Email <span className="text-tailor-maroon">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="font-poppins font-medium text-tailor-dark mb-1 block"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone size={18} className="text-gray-400" />
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="font-poppins font-medium text-tailor-dark mb-1 block"
                      >
                        Service Interested In
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FileText size={18} className="text-gray-400" />
                        </div>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tailor-maroon focus:border-transparent"
                        >
                          <option value="">Select a Service</option>
                          <option value="custom">Custom Tailoring</option>
                          <option value="alterations">Alterations</option>
                          <option value="wedding">Wedding Outfits</option>
                          <option value="ethnic">Ethnic Wear</option>
                          <option value="repair">Repair Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="font-poppins font-medium text-tailor-dark mb-1 block"
                      >
                        Your Message{" "}
                        <span className="text-tailor-maroon">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[150px]"
                        placeholder="Tell us more about your requirements..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-tailor-maroon hover:bg-tailor-dark text-white py-6"
                    >
                      <span className="flex items-center justify-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Google Map Embed */}
            <div className="md:h-[580px]">
              <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-6">
                Visit Us
              </h2>
              <Card className="bg-pink-900 h-full fade-in rounded-xl overflow-hidden">
                <CardContent className="p-0 h-full">
                  <iframe
                    title="Vasugi Tailor Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.1266330885894!2d80.15200906955485!3d12.939406499210818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ef83f64bd37%3A0x23a5b0973850c3a0!2s11-33%2C%207th%20St%2C%20Vinobaji%20Nagar%2C%20Hasthinapuram%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu%20600064!5e0!3m2!1sen!2sin!4v1741761008757!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
