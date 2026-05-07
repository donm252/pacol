import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-slate-300 py-20 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-white text-xl font-serif font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              CUOMO LUXURY
            </h3>
            <p className="mb-6 leading-relaxed">
              Premium 2-bedroom apartments with luxury finishes and world-class amenities in the heart of Lekki, Lagos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary text-white transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary text-white transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary text-white transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-serif font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Gallery', 'Progress', 'Virtual Tour', 'About Us', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary hover:translate-x-2 transition-all duration-300 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-serif font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              Features
            </h3>
            <ul className="space-y-3">
              <li>Luxury Finishes</li>
              <li>24/7 Power Supply</li>
              <li>Secure Estate</li>
              <li>Fitness Gym</li>
              <li>Ample Parking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-serif font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-secondary shrink-0 mt-1" />
                <span>9b Emma Abimbola Cole, Lekki Phase 1, Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-secondary shrink-0" />
                <span>0908 012 3123</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-secondary shrink-0" />
                <span>0802 501 7193</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-secondary shrink-0" />
                <span>info@pacolproperties.com</span>
              </li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/login" className="hover:text-secondary transition-colors">Admin Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-sm">
          &copy; {new Date().getFullYear()} PACOL PROPERTIES LIMITED. All rights reserved. | CUOMO LUXURY APARTMENTS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
