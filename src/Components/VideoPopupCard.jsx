import React, { useEffect, useRef, useState, useCallback } from 'react';

const POPUP_VIDEOS = [
  {
    id: "office-profile",
    title: "Kgotla Ya Rakhudu — Office Profile",
    shortTitle: "Office Profile",
    src: "/videos/KgotlaYaRakhuduOfficeProfile.mp4"
  }
];

function VideoPopupCard({ onClose }) {
  const currentIndex = 0;
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef([]);

  const currentVideo = POPUP_VIDEOS[currentIndex];

  // Pause all videos helper
  const pauseAllVideos = useCallback(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  }, []);

  const handleClose = useCallback(() => {
    pauseAllVideos();
    onClose();
  }, [pauseAllVideos, onClose]);

  // Lock body scroll while pop-up is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Autoplay current video & Keyboard navigation
  useEffect(() => {
    const currentVideoEl = videoRefs.current[currentIndex];
    if (currentVideoEl) {
      currentVideoEl.play().catch(() => {});
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleClose]);

  const handleUnmute = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = false;
      }
    });
    setMuted(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-gray-950 border border-gray-800/80 flex flex-col">
        
        {/* Sleek Glassmorphism Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-gray-800/60">
          <div className="flex items-center gap-2.5 min-w-0 pr-3">
            <div className="w-2 h-2 rounded-full bg-[#397D5A] animate-pulse" />
            <span className="text-white text-sm font-extrabold tracking-wide truncate">
              {currentVideo.title}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors flex items-center justify-center text-sm font-semibold flex-shrink-0"
            aria-label="Close video"
          >
            ✕
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black flex items-center justify-center min-h-[240px] sm:min-h-[380px]">
          {/* Video Container */}
          <div className="w-full h-full flex items-center justify-center">
            {POPUP_VIDEOS.map((video, idx) => (
              <div
                key={video.id}
                className={`w-full flex items-center justify-center ${
                  idx === currentIndex ? "block" : "hidden"
                }`}
              >
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={video.src}
                  className="w-full max-h-[60vh] object-contain"
                  muted={muted}
                  playsInline
                  controls
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-950 border-t border-gray-800/80 gap-3">
          {/* Mute toggle */}
          <div>
            {muted ? (
              <button
                onClick={handleUnmute}
                className="text-[#D4AF37] hover:text-yellow-300 text-xs font-semibold transition-colors flex items-center gap-1.5 bg-yellow-400/10 px-3 py-1.5 rounded-lg border border-[#D4AF37]/20"
              >
                <span>🔇</span>
                <span>Tap for Sound</span>
              </button>
            ) : (
              <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <span>🔊</span>
                <span>Audio Enabled</span>
              </span>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white text-xs font-bold transition-colors uppercase tracking-wider px-3 py-1 rounded hover:bg-white/5"
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPopupCard;
