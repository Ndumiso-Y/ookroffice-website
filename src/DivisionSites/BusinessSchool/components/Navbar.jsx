import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/businessschool-website', label: 'Home' },
    { path: '/businessschool-website/about', label: 'About' },
    { path: '/businessschool-website/programmes', label: 'Programmes' },
    { path: '/businessschool-website/initiatives', label: 'Initiatives' },
    { path: '/businessschool-website/leadership', label: 'Leadership' },
    { path: '/businessschool-website/research', label: 'Research' },
    { path: '/businessschool-website/admissions', label: 'Admissions' },
    { path: '/businessschool-website/events', label: 'Events' },
    { path: '/businessschool-website/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/businessschool-website" className="flex items-center space-x-3 focus-ring rounded-md">
            <img
              src={getAssetPath('assets/logo-bsle.png')}
              alt="BSLE Logo"
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-2xl font-heading font-bold text-primary-brown">
              BSLE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                  location.pathname === link.path
                    ? 'text-leadership-green bg-cyan-mist/20'
                    : 'text-gray-700 hover:text-leadership-green hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              className="relative flex items-center gap-2 ml-4 px-4 py-2 bg-leadership-green text-white rounded-md font-semibold overflow-hidden group transition-all shadow-md"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-leadership-green/80 to-white/20 group-hover:w-full transition-all duration-500 ease-out"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10">Back to Main Site</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-leadership-green hover:bg-gray-100 focus-ring"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors focus-ring ${
                  location.pathname === link.path
                    ? 'text-leadership-green bg-cyan-mist/20'
                    : 'text-gray-700 hover:text-leadership-green hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              className="relative flex items-center justify-center gap-2 px-3 py-2 mt-2 bg-leadership-green text-white rounded-md font-semibold overflow-hidden group transition-all shadow-md"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-leadership-green/80 to-white/20 group-hover:w-full transition-all duration-500 ease-out"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10">Back to Main Site</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
