import React from 'react';

const VideoPlayer = ({
  src,
  poster,
  className = '',
  overlayGradient = true,
  children
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        poster={poster}
        className="w-full h-full object-cover"
        aria-label="Background storytelling video"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/30 via-transparent to-leadership-green/40 pointer-events-none" />
      )}

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

export default VideoPlayer;
