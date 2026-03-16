import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/heritage", label: "Heritage" },
    { to: "/events", label: "Events" },
    // { to: "/notices", label: "Notices" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow transition-all duration-300 ${
    scrolled ? "py-2" : "py-4"
  }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300">
        {/* Logo + Title */}
        <Link
          to="/"
          className="flex items-center space-x-3 transition-all duration-300"
        >
          <img
            src="/images/KgotlhaLogo.png"
            alt="Tsitsing Kgotla Ya Rakhudu Logo"
            loading="lazy"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "w-16 h-16" : "w-14 h-14"
            }`}
          />
          <span
            className={`font-bold text-[#1B5538] transition-all duration-300 ${
              scrolled ? "text-2xl" : "text-xl"
            }`}
          >
            Tsitsing Kgotla Ya Rakhudu
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium text-[#1B5538] text-sm">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-[#c27700] font-semibold" : "hover:text-[#c27700]"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1B5538] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-3 font-medium text-[#1B5538] shadow-sm border-t border-gray-200">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
