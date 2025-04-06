
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-[#EC7FA9] text-white w-full">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/lovable-uploads/d7718749-90be-4a4a-8cab-d62699b795ed.png')" }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32 w-full">
        <div className="max-w-3xl animate-fade-in text-center md:text-left">
          <h1 className="font-exo text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#FFEDFA] italic">
            Lovely<br />Women Style
          </h1>
          <p className="font-exo text-base sm:text-lg md:text-xl text-white mb-8">
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