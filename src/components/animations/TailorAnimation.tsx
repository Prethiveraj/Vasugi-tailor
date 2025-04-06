
import { useState, useEffect } from "react";
import { Scissors, ArrowRight } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const TailorAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate which section we're in based on scroll position
      const windowHeight = window.innerHeight;
      const sectionNumber = Math.floor(currentScrollY / (windowHeight * 0.7));
      setActiveSection(sectionNumber);
      
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate position based on scroll
  const scissorPosition = Math.min(scrollY * 0.1, 70);
  
  // Don't show on mobile devices - this is already handled

  const renderThreadCurves = () => {
    const sections = 6; // Number of sections to show curves
    const curveElements = [];
    
    for (let i = 0; i < sections; i++) {
      const isActive = i <= activeSection;
      curveElements.push(
        <div 
          key={i}
          className={`absolute right-12 transition-all duration-500 w-16 h-8 border-t-2 rounded-tl-full ${
            isActive ? "border-tailor-pink opacity-100" : "border-gray-300 opacity-40"
          }`}
          style={{ 
            top: `${(i + 1) * 20}vh`,
            transform: isActive ? "translateX(0)" : "translateX(10px)"
          }}
        />
      );
    }
    
    return curveElements;
  };

  if (isMobile) return null;

  return (
    <div className="fixed right-0 top-0 h-full z-40 pointer-events-none overflow-hidden">
      {/* Thread path - dashed line effect */}
      <div 
        className={`absolute right-12 top-0 w-1 h-full transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent 0%, #EC7FA9 10%, #EC7FA9 90%, transparent 100%)",
          backgroundSize: "1px 15px",
          backgroundRepeat: "repeat-y",
          animation: "thread-wave 3s infinite ease-in-out"
        }}
      ></div>
      
      {/* Decorative thread curves at sections */}
      {renderThreadCurves()}
      
      {/* Thread pointer that follows the scissor */}
      <div 
        className={`absolute right-12 transition-all duration-300 transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{ top: `${scissorPosition + 18}vh` }}
      >
        <div className="w-3 h-3 bg-tailor-pink rounded-full animate-pulse"></div>
      </div>
      
      {/* Scissors that move with scroll */}
      <div 
        className={`absolute right-8 transition-all duration-300 transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{ top: `${scissorPosition + 20}vh` }}
      >
        <Scissors 
          size={32} 
          className="text-tailor-maroon scissor-snip" 
          style={{ 
            transform: `rotate(${(Math.sin(scrollY * 0.01) * 20)}deg)`,
            transformOrigin: "center"
          }}
        />
      </div>
      
      {/* Show cut cloth pieces occasionally */}
      {[1, 3, 5].map(index => (
        <div 
          key={index}
          className={`absolute right-16 transition-all duration-500 w-4 h-4 bg-tailor-cream rounded-sm ${
            activeSection >= index ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            top: `${index * 20 + 5}vh`,
            transform: `rotate(${index * 45}deg)`,
            animation: activeSection >= index ? "falling 3s infinite ease-in-out" : "none"
          }}
        ></div>
      ))}
    </div>
  );
};

export default TailorAnimation;
