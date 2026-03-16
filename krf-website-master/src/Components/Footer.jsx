import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1B5538] text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-sm md:text-base">
          &copy; {new Date().getFullYear()} OKKR - All Rights Reserved
        </p>
        <p>
          Designed with ♥ by{" "}
          <a
            href="https://www.astralsolution.tech/"
            className="text-gray-300 hover:text-gray-100"
          >
            Astral Solutions --
          </a>
          {" "} | Hosted by {" "}
          <a
            href="https://app.businesshustle.co.za/"
            className="text-gray-300 hover:text-gray-100"
          >
            Business Hustle
          </a>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-[#397D5A]">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/calendar" className="hover:text-white">Calendar</Link>
          <Link to="/vision-plan" className="hover:text-white">Vision Plan 2035</Link>
          <Link to="/objectives" className="hover:text-white">Objectives</Link>
          <Link to="/successstories" className="hover:text-white">Success Stories</Link>
          <Link to="/divisions" className="hover:text-white">Divisions</Link>
          <Link to="/leadership" className="hover:text-white">Leadership</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
