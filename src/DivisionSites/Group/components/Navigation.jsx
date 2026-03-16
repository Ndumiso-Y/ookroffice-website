import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import KKRGLogo from '../assets/KKRGLogo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/group-website' },
    { name: 'About', path: '/group-website/about' },
    { name: 'Focus Areas', path: '/group-website/focus-areas' },
    { name: 'Leadership', path: '/group-website/leadership' },
    { name: 'Projects', path: '/group-website/projects' },
    { name: 'Contact', path: '/group-website/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-royal-blue text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/group-website" className="flex items-center gap-3 group">
            <div className="bg-white/95 rounded-lg px-3 py-2 shadow-md group-hover:shadow-lg group-hover:bg-white transition-smooth">
              <img
                src={KKRGLogo}
                alt="KKR Group Logo"
                className="h-8 w-auto"
              />
            </div>
            <span className="text-lg font-heading font-bold text-white group-hover:text-gold transition-smooth hidden lg:block">
              KKR Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'bg-gold text-royal-blue'
                    : 'hover:bg-royal-blue/80 hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              className="relative flex items-center gap-2 ml-4 px-4 py-2 bg-gold text-royal-blue rounded-md font-semibold overflow-hidden group transition-all shadow-md"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold/80 to-white/30 group-hover:w-full transition-all duration-500 ease-out"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10">Back to Main Site</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-royal-blue/80 transition-smooth"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'bg-gold text-royal-blue'
                    : 'hover:bg-royal-blue/80 hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="relative flex items-center justify-center gap-2 mx-4 mt-4 px-4 py-2 bg-gold text-royal-blue rounded-md font-semibold overflow-hidden group transition-all shadow-md"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold/80 to-white/30 group-hover:w-full transition-all duration-500 ease-out"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10">Back to Main Site</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
