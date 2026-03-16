import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'ookr_cookie_consent';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#1B5538] text-white px-4 py-4 shadow-lg"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="text-sm leading-relaxed flex-1">
          This site uses session storage only — no tracking cookies.
          By continuing you acknowledge our{' '}
          <Link to="/privacy" className="underline hover:text-[#A8D5BA]">
            Privacy Policy (POPIA)
          </Link>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-white text-[#1B5538] font-semibold text-sm px-5 py-2 rounded-md hover:bg-[#A8D5BA] transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
