import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gold">Koketso Rakhudu Foundation</h3>
            <p className="mt-3 text-sm text-white/80">
              Empowering Lives with Excellence — building sustainable
              foundations for generations to thrive.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/programs" className="hover:text-gold">Programmes</Link></li>
              <li><Link to="/milestones" className="hover:text-gold">Milestones</Link></li>
              <li><Link to="/impact" className="hover:text-gold">Impact</Link></li>
              <li><Link to="/approach" className="hover:text-gold">Our Approach</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gold">Contact</h4>
            <p className="mt-3 text-sm">
              Maile, Kopman Center<br />
              +27 63 644 5723<br />
              <a href="mailto:Dumela@drkoketsorakhudu.com" className="hover:text-gold">
                Dumela@drkoketsorakhudu.com
              </a>
            </p>
            <div className="mt-4 flex gap-6 text-sm">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gold">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gold">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/70 space-y-2">
          <p>
            Primary SETA: ETDP SETA · Accreditation Number: ETDP011394 · SAQA Provider Code: ETDP2368 · Reg No: 177-109 NPO
          </p>
          <p>
            © {new Date().getFullYear()} Koketso Rakhudu Foundation · Designed by{' '}
            <a
              href="https://www.embarkdigitals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-yellow-400 transition-colors duration-200 font-semibold"
            >
              Embark Digitals
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
