import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/brand/KRF-Logo1.png' // Using white/transparent logo for better visibility on dark navbar

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

  const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services & Programmes', to: '/programs' },
  { label: 'Milestones', to: '/milestones' },
  { label: 'Impact', to: '/impact' },
  { label: 'Approach', to: '/approach' },
  { label: 'Contact', to: '/contact' },
]


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
          <Link to="/" className="flex items-center gap-3">
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
        </ul>
      </div>
    </header>
  )
}
