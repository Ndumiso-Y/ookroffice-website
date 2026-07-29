import React, { useEffect, useRef, useState, useCallback } from 'react';

const POPUP_VIDEOS = [
  {
    id: "leadership-breakfast",
    title: "Kgosana Koketso Rakhudu Leadership Breakfast",
    shortTitle: "Leadership Breakfast",
    src: "/Impact/Whatsapp/TheKgosanaKoketsoRakhuduLeadershipBreakfast.mp4",
    highlightUntil: "2026-08-01T23:59:59+02:00"
  },
  {
    id: "office-profile",
    title: "Kgotla Ya Rakhudu — Office Profile",
    shortTitle: "Office Profile",
    src: "/videos/KgotlaYaRakhuduOfficeProfile.mp4"
  }
];

function VideoPopupCard({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef([]);
  const touchStartX = useRef(null);

  const currentVideo = POPUP_VIDEOS[currentIndex];
  const isHighlightActive = (video) => video.highlightUntil && new Date() <= new Date(video.highlightUntil);

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

  // Handle slide change
  const goToSlide = useCallback((index) => {
    pauseAllVideos();
    setCurrentIndex(index);
  }, [pauseAllVideos]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + POPUP_VIDEOS.length) % POPUP_VIDEOS.length;
    goToSlide(prevIdx);
  }, [currentIndex, goToSlide]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % POPUP_VIDEOS.length;
    goToSlide(nextIdx);
  }, [currentIndex, goToSlide]);

  // Autoplay current slide & Keyboard navigation
  useEffect(() => {
    const currentVideoEl = videoRefs.current[currentIndex];
    if (currentVideoEl) {
      currentVideoEl.play().catch(() => {});
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleClose, handleNext, handlePrev]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

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

        {/* Modern Segmented Pill Switcher */}
        <div className="p-2 sm:p-2.5 bg-gray-950/90 border-b border-gray-800/60 flex items-center justify-center gap-2 overflow-x-auto">
          {POPUP_VIDEOS.map((video, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={video.id}
                onClick={() => goToSlide(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 whitespace-nowrap border ${
                  isActive
                    ? "bg-[#1B5538] text-white border-[#D4AF37]/80 shadow-lg ring-1 ring-[#D4AF37]/40"
                    : "bg-white/5 text-gray-300 border-gray-800 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{idx + 1}. {video.shortTitle}</span>
                {isHighlightActive(video) && (
                  <span className="bg-[#D4AF37] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                    NEW
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Video Player Area with Mobile Touch Swipe */}
        <div 
          className="relative bg-black flex items-center justify-center min-h-[240px] sm:min-h-[380px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Translucent Side Chevrons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center text-xl hover:bg-black/90 hover:scale-110 transition-all shadow-xl"
            aria-label="Previous video"
          >
            ‹
          </button>

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

          {/* Next Slide Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center text-xl hover:bg-black/90 hover:scale-110 transition-all shadow-xl"
            aria-label="Next video"
          >
            ›
          </button>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3 bg-gray-950 border-t border-gray-800/80 gap-3">
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

          {/* Slide Indicator Bar */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-gray-400 tracking-wider mr-1 uppercase">
              Video {currentIndex + 1} of {POPUP_VIDEOS.length}
            </span>
            {POPUP_VIDEOS.map((video, idx) => (
              <button
                key={video.id}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-[#D4AF37] w-6" 
                    : "bg-gray-700 hover:bg-gray-500 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
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
