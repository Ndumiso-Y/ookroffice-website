import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/optimized/logo.png"; // Adjust if your logo path differs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className="bg-[#0c3b2e] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/tvei-website" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">Village Economy Indaba</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/tvei-website" onClick={scrollToTop} className="hover:text-yellow-400">Home</Link>
            <Link to="/tvei-website/about" onClick={scrollToTop} className="hover:text-yellow-400">About</Link>
            <Link to="/tvei-website/foreword" onClick={scrollToTop} className="hover:text-yellow-400">Foreword</Link>
            <Link to="/tvei-website/sectors" onClick={scrollToTop} className="hover:text-yellow-400">Sectors</Link>
            <Link to="/tvei-website/framework" onClick={scrollToTop} className="hover:text-yellow-400">Framework</Link>
            <Link to="/tvei-website/associations" onClick={scrollToTop} className="hover:text-yellow-400">Associations</Link>
            <Link to="/tvei-website/gallery" onClick={scrollToTop} className="hover:text-yellow-400">Gallery</Link>
            <Link
              to="/"
              className="relative flex items-center gap-2 px-4 py-2 bg-yellow-400 text-[#0c3b2e] rounded-md font-semibold overflow-hidden group transition-all"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-300 to-white/40 group-hover:w-full transition-all duration-500 ease-out"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10">Back to Main Site</span>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c3b2e] px-4 pt-2 pb-4 space-y-2">
          <Link to="/tvei-website" onClick={scrollToTop} className="block hover:text-yellow-400">Home</Link>
          <Link to="/tvei-website/about" onClick={scrollToTop} className="block hover:text-yellow-400">About</Link>
          <Link to="/tvei-website/foreword" onClick={scrollToTop} className="block hover:text-yellow-400">Foreword</Link>
          <Link to="/tvei-website/sectors" onClick={scrollToTop} className="block hover:text-yellow-400">Sectors</Link>
          <Link to="/tvei-website/framework" onClick={scrollToTop} className="block hover:text-yellow-400">Framework</Link>
          <Link to="/tvei-website/associations" onClick={scrollToTop} className="block hover:text-yellow-400">Associations</Link>
          <Link to="/tvei-website/gallery" onClick={scrollToTop} className="block hover:text-yellow-400">Gallery</Link>
          <Link
            to="/"
            onClick={closeMenu}
            className="relative flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-[#0c3b2e] rounded-md font-semibold overflow-hidden group transition-all mt-4"
          >
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-300 to-white/40 group-hover:w-full transition-all duration-500 ease-out"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="relative z-10">Back to Main Site</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
