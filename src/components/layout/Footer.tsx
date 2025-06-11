import { Link } from "react-router-dom";
import { Github, Linkedin, Youtube, Instagram, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-playfair">
              Chitrankit
            </h3>
            <p className="text-gray-600 mb-4">
              Transforming your precious photos into timeless hand-drawn
              sketches with passion and precision.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/CodeCraft318"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/codecraft-developers-38807936b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCg4wx4e5JbbE1bgO7IhZ34A"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/code.craft318/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">
              Get In Touch
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-500" />
                <span className="text-gray-600">+91 8424955003</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-500" />
                <span className="text-gray-600">+91 9326579484</span>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Send us a message
                </Link>
              </li>
              <li>
                {/* <Link to="/order" className="btn-primary inline-block mt-2">
                  Order Now
                </Link> */}
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
