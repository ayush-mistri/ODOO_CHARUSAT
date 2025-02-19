import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 w-full bg-white shadow-lg z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Lock className="w-8 h-8 text-indigo-600" />
            <span className="font-poppins font-bold text-xl text-gray-800">
              Healthcare
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-indigo-600" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-600" />
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row md:items-center 
            space-y-4 md:space-y-0 md:space-x-7 p-4 md:p-0 transition-all duration-300 ease-in-out ${
              isOpen ? 'flex' : 'hidden md:flex'
            }`}
          >
            <Link to="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 font-medium hover:text-indigo-600 transition">
              Contact
            </Link>

            <div className="flex space-x-3">
              <Link
                to="/auth?type=login"
                className="py-2 px-4 bg-blue-500 text-white rounded-lg text-lg text-center hover:bg-blue-600 transition"
              >
                Login
              </Link>
              <Link
                to="/auth?type=signup"
                className="py-2 px-4 bg-green-500 text-white rounded-lg text-lg text-center hover:bg-green-600 transition"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
