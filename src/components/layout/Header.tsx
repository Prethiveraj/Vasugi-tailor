import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const halfScreen = window.innerHeight * 0.5;
   
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setVisible(isScrollingUp || currentScrollPos < halfScreen);
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleBookClick = () => {
    navigate('/contact');
  }
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ height: '64px' }}
    >
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={handleBookClick} 
              className="bg-tailor-maroon hover:bg-tailor-dark text-white transition-colors"
            >
              <Phone size={18} className="mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-tailor-dark p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`absolute left-0 right-0 bg-white border-b border-gray-200 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="block font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              onClick={() => {
                handleBookClick();
                setIsMenuOpen(false);
              }} 
              className="w-full bg-tailor-maroon hover:bg-tailor-dark text-white"
            >
              <Phone size={18} className="mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;