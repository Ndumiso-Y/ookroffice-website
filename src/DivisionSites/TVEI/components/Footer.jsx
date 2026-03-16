// ============================
// src/components/Footer.jsx
// Footer with Facebook, LinkedIn, credit link (slightly more emphasis), and back-to-top button.
// ============================
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c3b2e] text-white py-6 mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Nav links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <Link to="/tvei-website" onClick={scrollToTop} className="hover:text-yellow-400">Home</Link>
          <Link to="/tvei-website/about" onClick={scrollToTop} className="hover:text-yellow-400">About</Link>
          <Link to="/tvei-website/sectors" onClick={scrollToTop} className="hover:text-yellow-400">Sectors</Link>
          <Link to="/tvei-website/gallery" onClick={scrollToTop} className="hover:text-yellow-400">Gallery</Link>
        </div>

        {/* Middle: Social icons */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/villageeconomyindaba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-400 text-lg transform hover:scale-125 transition-transform duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/thevillageeconomyindaba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-400 text-lg transform hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Right: Credit */}
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Village Economy Indaba</p>
          <a
            href="https://www.embarkdigitals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 font-semibold tracking-wide"
          >
            Designed by <span className="underline decoration-yellow-400 decoration-2 underline-offset-4">Embark Digitals</span>
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 bg-yellow-400 text-[#0c3b2e] p-2 rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
