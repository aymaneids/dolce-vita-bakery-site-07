
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-espresso text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div>
            <Link to="/">
              <h2 className="text-2xl font-serif font-bold mb-4">
                <span className="text-terracotta">Dolce V</span> Cafe
              </h2>
            </Link>
            <p className="text-white/70 mb-6">
              Experience the authentic taste of the sweet life with our artisanal pastries, gelato, and coffee.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-terracotta transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:hello@dolcev.com" 
                className="text-white/70 hover:text-terracotta transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-terracotta transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-terracotta transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-white/70 hover:text-terracotta transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-terracotta transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-terracotta transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-terracotta transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-medium mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8am - 8pm</span>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/70">
                <MapPin size={20} className="flex-shrink-0 text-terracotta" />
                <span>123 Bakery Street<br />Hayes Valley, San Francisco</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <Phone size={20} className="flex-shrink-0 text-terracotta" />
                <a href="tel:+14155551234" className="hover:text-terracotta transition-colors">(415) 555-1234</a>
              </li>
              <li className="flex gap-3 text-white/70">
                <Mail size={20} className="flex-shrink-0 text-terracotta" />
                <a href="mailto:hello@dolcev.com" className="hover:text-terracotta transition-colors">hello@dolcev.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="text-center text-white/60 text-sm">
            <p>&copy; {currentYear} New Paradise Dolce V Cafe Bakery & Gelato. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
