import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleBookClick = () => {
    navigate('/contact');
  }
  
  return (
    <header className={`bg-white border-b border-gray-200 fixed shadow-md left-0 top-0 z-50 w-full transform transition-transform duration-300 delay-100`}>
      <div className="container mx-auto px-2 sm:px-4 py-2">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 z-50 sticky">
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
            <Button onClick={handleBookClick} className="bg-tailor-maroon hover:bg-tailor-dark text-white">
              <Phone size={18} className="mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-tailor-dark p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in w-full">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="font-poppins font-medium text-tailor-dark hover:text-tailor-maroon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button onClick={handleBookClick} className="bg-tailor-maroon hover:bg-tailor-dark text-white w-full">
                <Phone size={18} className="mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;