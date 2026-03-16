import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaInfoCircle, 
  FaBullseye, 
  FaUsers, 
  FaUserTie, 
  FaEnvelope, 
  FaSeedling,
  FaCalendar, 
  FaTrophy,
} from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import ResponsiveLogo from './ResponsiveLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { icon: <FaHome className="w-5 h-5" />, text: "Home", path: "/" },
    { icon: <FaInfoCircle className="w-5 h-5" />, text: "About", path: "/about" },
    { icon: <FaCalendar className="w-5 h-5" />, text: "Calendar", path: "/calendar" },
    { icon: <FaSeedling className="w-5 h-5" />, text: "VisionPlan 2035", path: "/vision-plan" },
    { icon: <FaBullseye className="w-5 h-5" />, text: "Objectives", path: "/objectives" },
    { icon: <FaTrophy className="w-5 h-5" />, text: "Success Stories", path: "/successstories" },
    { icon: <FaUsers className="w-5 h-5" />, text: "Divisions", path: "/divisions" },
    { icon: <FaUserTie className="w-5 h-5" />, text: "Leadership", path: "/leadership" },
    { icon: <FaEnvelope className="w-5 h-5" />, text: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Top Nav with Logo and Hamburger Button */}
      <nav className={`flex items-center justify-between px-6 py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/50 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <ResponsiveLogo scrolled={scrolled} className="transform hover:scale-105" />
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 rounded-md bg-gray-100 text-green-700 hover:bg-gray-200 z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Drawer Navigation (Always Active) */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-green-700 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Logo */}
        <Link 
          to="/" 
          className="block p-4 text-center border-b border-gray-300"
          onClick={() => setIsOpen(false)}
        >
          <ResponsiveLogo scrolled={false} className="mx-auto" />
        </Link>

        {/* Nav Links */}
        <div className="py-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 hover:text-green-800 hover:bg-gray-200 transform transition-transform duration-200 hover:scale-105"
            >
              <span className="w-6">{link.icon}</span>
              <span className="ml-3">{link.text}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
