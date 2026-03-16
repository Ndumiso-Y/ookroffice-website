import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);

    // End transition after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Sweep overlay */}
      <div
        className={`fixed inset-0 z-[100] pointer-events-none transition-transform duration-600 ease-in-out ${
          isTransitioning ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(90deg, #D4AF37 0%, #174E81 100%)',
        }}
      />

      {/* Page content */}
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}
