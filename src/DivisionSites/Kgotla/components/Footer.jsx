import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Base path for Kgotla division
  const basePath = "/kgotla-website";

  return (
    <footer className="bg-[#1B5538] text-white py-8 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <h4 className="text-lg font-semibold">Tsitsing Kgotla Ya Rakhudu</h4>
        <p className="text-sm max-w-2xl">
          Preserving tradition, building community, and honoring the wisdom of our ancestors for future generations.
        </p>

        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium">
            <li><Link to={`${basePath}/`} className="hover:text-[#c27700]">Home</Link></li>
            <li><Link to={`${basePath}/about`} className="hover:text-[#c27700]">About</Link></li>
            <li><Link to={`${basePath}/heritage`} className="hover:text-[#c27700]">Heritage</Link></li>
            <li><Link to={`${basePath}/events`} className="hover:text-[#c27700]">Events</Link></li>
            <li><Link to={`${basePath}/contact`} className="hover:text-[#c27700]">Contact</Link></li>
          </ul>
        </nav>

        <div className="text-xs text-gray-300 space-y-1">
          <p>
            &copy; {new Date().getFullYear()} Tsitsing Kgotla Ya Rakhudu. All rights reserved.
          </p>
          <p>Built with respect for tradition and community.</p>
          <p>
            Designed with <span className="text-red-500">♥</span> by{" "}
            <a
              href="https://www.astralsolution.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 font-medium transition-colors"
            >
              Astral Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
