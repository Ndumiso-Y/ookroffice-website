import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function SegmentVideo({
  src,
  poster,
  start = 0,
  end = null, // seconds; if null, loop full video
  className = ""
}) {
  const vref = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = vref.current;
    if (!v) return;

    const onLoaded = () => {
      v.currentTime = start || 0;
      if (playing) v.play().catch(() => {});
    };

    const onTime = () => {
      if (end && v.currentTime >= end) {
        v.currentTime = start || 0;
        v.play().catch(() => {});
      }
    };

    // Immediately try to play if metadata is already loaded
    if (v.readyState >= 1) {
      v.currentTime = start || 0;
      if (playing) v.play().catch(() => {});
    }

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
    };
  }, [start, end, playing]);

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={vref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {/* readability overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      {/* Modern Play/Pause button */}
      <button
        type="button"
        aria-label={playing ? "Pause video" : "Play video"}
        onClick={() => {
          const v = vref.current;
          if (!v) return;
          if (playing) { v.pause(); } else { v.play().catch(() => {}); }
          setPlaying(!playing);
        }}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-brown to-accent-clay hover:from-accent-clay hover:to-primary-brown text-white px-4 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
      >
        {playing ? (
          <>
            <Pause className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Pause</span>
          </>
        ) : (
          <>
            <Play className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Play</span>
          </>
        )}
      </button>
    </div>
  );
}
