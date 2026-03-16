import React, { useEffect, useRef, useState } from 'react';

function VideoPopupCard({ onClose }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setMuted(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-2xl mx-4 rounded-xl overflow-hidden shadow-2xl bg-black">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800">
          <span className="text-white text-sm font-semibold tracking-wide">
            Kgotla Ya Rakhudu — Office Profile
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
            aria-label="Close video"
          >
            ✕
          </button>
        </div>

        {/* Video */}
        <div className="relative bg-black">
          <video
            ref={videoRef}
            src="/videos/KgotlaYaRakhuduOfficeProfile.mp4"
            className="w-full max-h-[65vh] object-contain"
            muted={muted}
            playsInline
            controls
          />
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
          {muted ? (
            <button
              onClick={handleUnmute}
              className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
            >
              🔇 Tap to unmute
            </button>
          ) : (
            <span className="text-green-400 text-sm">🔊 Sound on</span>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Skip →
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPopupCard;
