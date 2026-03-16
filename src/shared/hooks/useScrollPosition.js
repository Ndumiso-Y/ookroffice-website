import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * Used by headers to change styling on scroll
 * @param {number} threshold - Scroll threshold in pixels (default: 20)
 * @returns {boolean} Whether scroll position is past threshold
 */
export const useScrollPosition = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};
