import { useEffect, useRef, useState } from "react";

const BRAND = {
  bg: "bg-black/70 backdrop-blur-sm",
  card: "bg-neutral-900/95 text-white",
  accent: "text-[#00a8be]",
  border: "border border-neutral-700",
  button: "bg-white/90 text-black hover:bg-white"
};

export default function KgotlaAnnouncementModal({ isOpen, onClose, posters }) {
  const [index, setIndex] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const next = () => setIndex((i) => (i + 1) % posters.length);
  const prev = () => setIndex((i) => (i - 1 + posters.length) % posters.length);

  return (
    <div
      className={`fixed inset-0 z-50 ${BRAND.bg} flex items-center justify-center p-4`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={modalRef}
        className={`relative max-w-3xl w-full rounded-2xl ${BRAND.card} ${BRAND.border} shadow-lg`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-neutral-800">
          <h2 className={`text-lg font-semibold ${BRAND.accent}`}>
            Tsitsing Kgotla Ya Rakhudu • Announcements
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-neutral-800 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Poster */}
        <div className="p-4 flex flex-col items-center">
          <img
            src={posters[index]}
            alt={`Kgotla poster ${index + 1}`}
            loading="lazy"
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow"
          />

          {/* Controls */}
          <div className="mt-3 flex items-center justify-between w-full">
            <button onClick={prev} className={`${BRAND.button} px-3 py-1 rounded`}>
              Prev
            </button>
            <span className="text-sm text-neutral-400">
              {index + 1} / {posters.length}
            </span>
            <button onClick={next} className={`${BRAND.button} px-3 py-1 rounded`}>
              Next
            </button>
          </div>

          <button
            onClick={onClose}
            className={`${BRAND.button} mt-4 px-4 py-2 rounded shadow`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
