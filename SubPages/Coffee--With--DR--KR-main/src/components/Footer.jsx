import React from 'react'
import slowAlphaVideo from '../assets/slow-alpha.webm'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-charcoal text-cream py-8 sm:py-10 mt-10 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src={slowAlphaVideo}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
        <div className="text-xs sm:text-sm text-cream/80 text-center md:text-left">
          © {year} Coffee with Dr. Koketso Rakhudu — Designed by Embark Digitals
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base text-cream/90">
          <a href="#top" className="hover:text-coffeeOrange transition-colors">Home</a>
          <a href="#about" className="hover:text-coffeeOrange transition-colors">About</a>
          <a href="#framework" className="hover:text-coffeeOrange transition-colors">Framework</a>
          <a href="#apply" className="hover:text-coffeeOrange transition-colors">Apply</a>
        </nav>
      </div>
    </footer>
  )
}
