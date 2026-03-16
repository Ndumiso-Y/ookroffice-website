import React, { useState } from "react";

const GalleryCarousel = ({ title, images }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="py-16 px-4 bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-700">
        {title}
      </h1>

      <div className="relative w-full max-w-4xl">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-[520px] object-cover rounded-lg shadow-lg"
        />

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-green-700/90 px-4 py-2 rounded-r hover:bg-green-800"
          aria-label="Previous image"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-green-700/90 px-4 py-2 rounded-l hover:bg-green-800"
          aria-label="Next image"
        >
          ❯
        </button>
      </div>

      <div className="mt-4 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2.5 h-2.5 rounded-full ${
              i === current ? "bg-green-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
