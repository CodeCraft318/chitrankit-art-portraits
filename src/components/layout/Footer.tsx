
import { Link } from "react-router-dom";
import { Instagram, MessageSquare, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">Chitrankit</h3>
            <p className="text-gray-600 mb-4">
              Transforming your precious photos into timeless hand-drawn sketches with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkGray hover:text-black"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkGray hover:text-black"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="tel:+1234567890"
                className="text-darkGray hover:text-black"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-black transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-black transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-500" />
                <span className="text-gray-600">+1 234 567 890</span>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Send us a message
                </Link>
              </li>
              <li>
                <Link to="/order" className="btn-primary inline-block mt-2">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Chitrankit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
