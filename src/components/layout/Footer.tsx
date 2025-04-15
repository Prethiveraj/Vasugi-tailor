
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tailor-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-tailor-gold">Vasugi Tailor</h3>
            <p className="font-poppins text-gray-300 mb-4 flex items-center gap-2 sm:text-left">
             Wear what you love
             <br className="block sm:hidden" />
             <img
             src="./src/assest/icons/scissors-6-50.png" alt="Woman Blouse" width={20} height={24}/>
             Find it here.
             </p>


            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-tailor-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/vasugi_trailor?igsh=cGp1eTlzNGt6cTl2" aria-label="Instagram" className="text-gray-300 hover:text-tailor-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/+918825831383" aria-label="Whatsapp" className="text-gray-300 hover:text-tailor-gold transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-tailor-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-tailor-gold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Custom Clothing</Link>
              </li>
              <li>
                <Link to="/services" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Alterations</Link>
              </li>
              <li>
                <Link to="/services" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Wedding Outfits</Link>
              </li>
              <li>
                <Link to="/services" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Ethnic Wear</Link>
              </li>
              <li>
                <Link to="/services" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors">Repair Services</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-tailor-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-tailor-gold mt-1 mr-3 flex-shrink-0" />
                <span className="font-poppins text-gray-300">No.1 Vinobaji Nagar, 10th Street Hasthinapuram, Chrompet, Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-tailor-gold mr-3 flex-shrink-0" />
                <span className="font-poppins text-gray-300">+91 9094293543</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-tailor-gold mr-3 flex-shrink-0" />
                <span className="font-poppins text-gray-300">info@vasugitailor.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-tailor-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-poppins text-gray-300 block">Mon-Sat: 9:00 AM - 8:00 PM</span>
                  <span className="font-poppins text-gray-300 block">Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="font-poppins text-gray-400">
            &copy; {currentYear} Vasugi Tailor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
