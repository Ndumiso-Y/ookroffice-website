import React from 'react';

/**
 * BSLEVideo - Standardized video component for BSLE website
 *
 * Features:
 * - Muted autoplay with loop
 * - Visible controls for accessibility
 * - Poster image fallback
 * - Dark overlay for text readability
 * - Mobile-optimized (playsInline)
 *
 * @param {string} src - Video file path from /assets (e.g., "/assets/hero.mp4")
 * @param {string} poster - Poster image path (e.g., "/assets/hero-cover.jpg")
 * @param {string} className - Additional Tailwind classes for container
 * @param {boolean} overlay - Show dark overlay (default: true)
 * @param {number} overlayOpacity - Overlay opacity 0-100 (default: 40)
 * @param {React.ReactNode} children - Optional content to overlay on video
 */
const BSLEVideo = ({
  src,
  poster,
  className = "",
  overlay = true,
  overlayOpacity = 40,
  children
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
        aria-label="Background storytelling video"
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      {overlay && (
        <div
          className={`pointer-events-none absolute inset-0 bg-black/${overlayOpacity}`}
          aria-hidden="true"
        />
      )}

      {/* Optional Content Overlay */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default BSLEVideo;
