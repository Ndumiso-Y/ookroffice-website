import React from "react";
import { Link } from "react-router-dom";

import event1 from "../assets/optimized/61.jpg";
import event2 from "../assets/optimized/Limpopo.jpg";
import event3 from "../assets/optimized/capetown.png";
import event4 from "../assets/optimized/Bhaphalane.jpg";
import event5 from "../assets/optimized/pic2.jpg";

const events = [
  { title: "Inauguration — 1 Nov 2024", image: event1, link: "event1" },
  { title: "Limpopo Launch — Ha Kutama", image: event2, link: "event2" },
  { title: "Cape Town Launch — Dec 2024", image: event3, link: "event3" },
  { title: "Baphalane Launch — 31 Jan 2025", image: event4, link: "event4" },
  { title: "World LPG Day — Jun 2025", image: event5, link: "event5" },
];

const Gallery = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <Link to={e.link} key={i} className="group block">
              <img src={e.image} alt={e.title} className="rounded-lg shadow-md w-full h-64 object-cover group-hover:opacity-90" />
              <p className="mt-2 text-sm font-medium text-gray-700">{e.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
