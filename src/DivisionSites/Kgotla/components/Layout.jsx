// src/components/Layout.jsx
import React from 'react';
import ScrollToTop from './ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-mustard text-black font-sans overflow-x-hidden">
      <ScrollToTop />

      {/* Decorative background blobs */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-kgotla-gold rounded-full opacity-10 blur-3xl z-[-1]" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-kgotla-gold rounded-full opacity-10 blur-3xl z-[-1]" />

      {/* Optional dotted pattern */}
      <svg
        className="fixed top-20 left-10 w-40 h-40 opacity-10 z-[-1]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>

      {/* Animate route transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 pt-16" // <-- Added padding to offset sticky header
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
