
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white py-4 px-4 md:px-8 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-playfair tracking-tight">
            Chitrankit
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-darkGray hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/order" 
            className="btn-primary"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-darkGray" />
          ) : (
            <Menu className="h-6 w-6 text-darkGray" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg py-2 border-b border-gray-100 text-darkGray"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/order" 
              className="btn-primary text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
