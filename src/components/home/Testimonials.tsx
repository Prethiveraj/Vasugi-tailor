
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Vasugi Tailor has been my go-to for all clothing alterations for years. Their attention to detail and quality of work is exceptional. I always leave satisfied with their service.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Wedding Client",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "I had my wedding outfit tailored by Vasugi Tailor and couldn't be happier with the results. The fit was perfect and the craftsmanship was impressive. Highly recommend!",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Business Professional",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "As someone who needs professional attire regularly, I appreciate the consistent quality and timely service that Vasugi Tailor provides. My suits always fit perfectly.",
    rating: 4
  },
  {
    name: "Arjun Reddy",
    role: "Fashion Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "The custom shirts I ordered were exactly what I wanted. The team took time to understand my preferences and delivered exceptional results. The best tailoring service in the area!",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };
  
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 bg-tailor-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-tailor-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
            We take pride in our work and the satisfaction of our customers. Here's what some of them have to say about Vasugi Tailor.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white border border-gray-200 shadow-md hover:bg-tailor-maroon hover:text-white transition-colors duration-300"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white border border-gray-200 shadow-md hover:bg-tailor-maroon hover:text-white transition-colors duration-300"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
          
          {/* Testimonials */}
          <div className="overflow-hidden">
            <div className="flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="w-full flex-none border-none shadow-lg bg-white rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <CardContent className="p-0">
                    <div className="p-8 md:p-12 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full border-4 border-tailor-cream transform transition-transform duration-300 hover:scale-110">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="font-poppins text-gray-700 text-lg mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-playfair text-xl font-bold text-tailor-dark">
                          {testimonial.name}
                        </h4>
                        <p className="font-poppins text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === idx
                    ? "bg-tailor-maroon w-6"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(idx * itemsPerPage)}
                aria-label={`Go to testimonial page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
