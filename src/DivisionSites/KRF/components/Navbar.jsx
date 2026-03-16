import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/brand/KRF-Logo1.png' // Using white/transparent logo for better visibility on dark navbar
import { navItems } from '../config/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])


  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-charcoal/95 shadow-md backdrop-blur' : 'bg-charcoal'
      } text-white`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between py-3" aria-label="Primary">
          {/* Brand */}
          <Link to="/krf-website" className="flex items-center gap-3">
            <img src={logo} alt="Koketso Rakhudu Foundation logo" className="h-10 w-auto" />
            <span className="sr-only">Koketso Rakhudu Foundation</span>
            <span className="hidden sm:inline-block font-semibold tracking-wide text-gold">
              Koketso Rakhudu Foundation
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:text-gold ${isActive ? 'text-gold' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/"
                className="relative flex items-center gap-2 px-4 py-2 bg-gold text-charcoal rounded-md font-semibold overflow-hidden group transition-all"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold/80 to-white/30 group-hover:w-full transition-all duration-500 ease-out"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span className="relative z-10">Back to Main Site</span>
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        <ul className="space-y-1 border-t border-white/10 bg-charcoal px-4 pb-4 pt-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-gold ${
                    isActive ? 'text-gold' : 'text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 border-t border-white/10">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="relative flex items-center justify-center gap-2 px-3 py-2 bg-gold text-charcoal rounded-lg font-semibold overflow-hidden group transition-all"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold/80 to-white/30 group-hover:w-full transition-all duration-500 ease-out"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10">Back to Main Site</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
