import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">HealthCare<span className="text-black">App</span></h2>
          <p className="text-sm mt-2">
            Your trusted partner for all healthcare needs. Book appointments, consult doctors, and manage your health effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "Appointments", "Contact"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-black transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} HealthCareApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
