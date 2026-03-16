import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-charcoal/90 to-black pointer-events-none"></div>

      <nav className="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <a href="#top" className="group relative py-2">
          <div className="absolute -inset-4 bg-gradient-to-r from-coffeeOrange/30 via-orange-500/30 to-coffeeOrange/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
          <img
            src={logo}
            alt="Coffee with Dr. Koketso Rakhudu Logo"
            className="h-12 sm:h-16 lg:h-20 w-auto relative z-10 brightness-110 contrast-125 saturate-110 drop-shadow-[0_0_20px_rgba(255,140,0,0.5)] group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(255,140,0,0.8)] transition-all duration-300"
          />
        </a>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-2">
          {[
            { href: "#about", label: "About" },
            { href: "#framework", label: "C.O.F.F.E.E." },
            { href: "#structure", label: "Structure" },
            { href: "#join", label: "Who & Why" },
            { href: "#impact", label: "Impact" }
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative px-5 py-3 text-white/90 hover:text-white font-bold text-base transition-all duration-300 group rounded-2xl hover:bg-white/10"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-coffeeOrange to-orange-500 group-hover:w-4/5 transition-all duration-300 rounded-full shadow-[0_0_10px_rgba(255,140,0,0.8)]"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-coffeeOrange text-white rounded-md font-semibold hover:bg-orange-600 transition-all shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Main Site
            </a>
          </li>
        </ul>

        {/* Apply Button */}
        <a
          href="#apply"
          className="relative group overflow-hidden shrink-0"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-coffeeOrange via-orange-500 to-red-500 rounded-2xl opacity-60 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-300 animate-pulse"></div>
          <div className="relative px-4 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-coffeeOrange via-orange-600 to-orange-700 rounded-2xl font-black text-sm sm:text-base lg:text-lg text-white shadow-2xl group-hover:shadow-[0_0_40px_rgba(255,140,0,0.8)] transform group-hover:scale-110 transition-all duration-300 border-2 border-orange-400/50">
            APPLY NOW
          </div>
        </a>
      </nav>

      {/* Bottom gradient accent */}
      <div className="h-1.5 bg-gradient-to-r from-transparent via-coffeeOrange to-transparent shadow-[0_0_15px_rgba(255,140,0,0.6)]"></div>
    </header>
  )
}
