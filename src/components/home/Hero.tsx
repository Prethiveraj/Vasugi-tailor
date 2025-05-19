import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    "/images/Img 1.jpeg",
    "/images/Img 2.jpeg",
    "/images/Img 3.jpeg",
    "/images/Img 4.jpeg",
    "/images/Img 5.jpeg",
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevslide) => (prevslide - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
  const nextIndex = (currentSlide + 1) % carouselImages.length;

  return (
    <div className="bg-[#EC7FA9] text-white w-full z-0 py-8 flex items-center overflow-hidden relative">
      <div className="flex flex-col relative container mx-auto px-4 py-20 md:py-12 md:flex-row w-full items-center">
        
        {/* Carousel Section */}
        <div className="order-1 md:order-2 mx-auto mb-8 md:mb-0 w-full max-w-lg relative">
          <div className="h-[300px] md:h-[450px] relative">
            {/* Carousel Track */}
            <div className="flex items-center justify-center h-full">
              
              {/* Previous Image (Partially Visible) */}
              <div className="absolute w-48 h-64 md:w-64 md:h-96 -left-10 opacity-50 scale-75 z-10 rounded-2xl overflow-hidden shadow-lg transition-all duration-500">
                <img
                  src={carouselImages[prevIndex]}
                  alt="Previous design"
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Current Image (Center, Fully Visible) */}
              <div className="relative w-64 h-80 md:w-80 md:h-[450px] z-20 rounded-[30px] overflow-hidden shadow-xl transition-all duration-500 transform scale-100">
                <img
                  src={carouselImages[currentSlide]}
                  alt="Current design"
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Next Image (Partially Visible) */}
              <div className="absolute w-48 h-64 md:w-64 md:h-96 -right-10 opacity-50 scale-75 z-10 rounded-2xl overflow-hidden shadow-lg transition-all duration-500">
                <img
                  src={carouselImages[nextIndex]}
                  alt="Next design"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="order-2 md:order-1 max-w-3xl text-center md:text-left md:mr-8 mt-12 md:mt-0">
          <h1 className="font-exo text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white-800 italic">
            Lovely<br />Women Style
          </h1>
          <p className="font-exo text-base sm:text-lg md:text-xl text-white-800 mb-8">
            Experience the perfect fit with Vasugi Tailor's expert craftsmanship.
            Custom designs that transform your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/services">
              <Button className="bg-[#BE5985] hover:bg-[#FFEDFA] hover:text-[#BE5985] text-white font-exo px-8 py-6 rounded-md text-lg transition-colors duration-300">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#BE5985] text-white font-exo px-8 py-6 rounded-md text-lg transition-colors duration-300">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;