
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useDebugValue } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carouselImages = [
  "../src/assest/images/img 1.jpeg",
  "../src/assest/images/img 2.jpeg",
  "../src/assest/images/img 3.jpeg",
  "../src/assest/images/img 4.jpeg",
  "../src/assest/images/img 5.jpeg",
  ]
  
  const nextSlide = () => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length )
  }

  const prevSlide = () => {
  setCurrentSlide((prevslide) => (prevslide - 1 + carouselImages.length) % carouselImages.length)
  }

  useEffect(() => {
    const intervel = setInterval(() => {
      nextSlide() 
    }, 5000);

    return () => clearInterval(intervel)
  })

  const prevIndex = (currentSlide - 1 + carouselImages.length) % carouselImages.length
  const nextIndex = (currentSlide + 1) % carouselImages.length




  return (
    <div className="relative bg-[#EC7FA9] text-white w-full overflow-x-hidden">
      <div className="flex flex-col relative container mx-auto px-4 py-20 md:py-12 md:flex-row w-full items-center rouded -[30px]">
        
        {/* Carousel Section */}
        <div className="order-1 md:order-2 mx-auto mb-8 md:mb-0 w-full max-w-lg relative">
          <div className="overflow-visible h-[300px] md:h-[450px] relative">
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

            {/* Navigation Buttons */}
            {/* <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm z-30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm z-30"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button> */}
          </div>

          {/* Carousel Indicators */}
          {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
        
        {/* Content Section */}
        <div className="order-2 md:order-1 max-w-3xl text-center align-item: center md:text-left md:mr-8 mt-12 md:mt-0">
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


//   return (
//     <div className="relative bg-[#EC7FA9] text-white w-full">
//       {/* Hero Background */}
//       {/* <div 
//         className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-70"
//         style={{ backgroundImage: "url('./src/assest/images/img 4.jpeg')" }}
//       ></div> */}
//       <div className="flex flex-col relative container mx-auto px-4 py-20 md:py-12 md:flex-row w-full animate-fade-in">
//       <div className="order-1 md:order-2 mx-auto mb-8 md:mb-0 h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-[30px] overflow-hidden shadow-xl transition-transform duration-700 hover:scale-105">
//           <img src="./src/assest/images/img 1.jpeg" alt="blouse design" className="h-full w-full object-cover"/>
//         </div>
//         <div className="order-2 md:order-1 max-w-3xl text-center md:text-left">
//           <h1 className="font-exo text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white-800 italic">
//             Lovely<br />Women Style
//           </h1>
//           <p className="font-exo text-base sm:text-lg md:text-xl text-white-800 mb-8">
//             Experience the perfect fit with Vasugi Tailor's expert craftsmanship.
//             Custom designs that transform your style.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <Link to="/services">
//               <Button className="bg-[#BE5985] hover:bg-[#FFEDFA] hover:text-[#BE5985] text-white font-exo px-8 py-6 rounded-md text-lg transition-colors duration-300">
//                 Our Services
//               </Button>
//             </Link>
//             <Link to="/contact">
//               <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#BE5985] text-white font-exo px-8 py-6 rounded-md text-lg transition-colors duration-300">
//                 Book Appointment
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Hero;
