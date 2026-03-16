import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import heroImage from "../assets/optimized/1.jpg";
import introVideo from "../assets/Logo Reveal.mp4";

import {
  HiUserGroup, HiAcademicCap, HiCash, HiDesktopComputer,
  HiColorSwatch, HiTruck, HiGlobeAlt, HiHeart, HiLightningBolt
} from "react-icons/hi";
import { FaSeedling } from "react-icons/fa";

// Event thumbs
import event1 from "../assets/optimized/61.jpg";
import event2 from "../assets/optimized/Limpopo.jpg";
import event3 from "../assets/optimized/capetown.png";
import event4 from "../assets/optimized/Bhaphalane.jpg";
import event5 from "../assets/optimized/pic2.jpg";

// Associations logos
import DrLogo from "../assets/optimized/Dr.png";
import HakemLogo from "../assets/optimized/HakemLogo.png";
import HfoundationLogo from "../assets/optimized/Hfoundation.png";

const sectors = [
  { title: "Local Governance", desc: "Empower local leadership", icon: <HiUserGroup className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Education & Skills", desc: "Build human capital", icon: <HiAcademicCap className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Microfinance", desc: "Boost small business", icon: <HiCash className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Digital Economy", desc: "Bridge tech gaps", icon: <HiDesktopComputer className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Creative Arts", desc: "Preserve and perform", icon: <HiColorSwatch className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Mining & Logistics", desc: "Drive infrastructure", icon: <HiTruck className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Agriculture", desc: "Ensure food security", icon: <FaSeedling className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Travel & Tourism", desc: "Showcase rural gems", icon: <HiGlobeAlt className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Health & Sanitation", desc: "Improve wellbeing", icon: <HiHeart className="text-green-700 text-4xl mb-2 mx-auto" /> },
  { title: "Green Economy", desc: "Power sustainably", icon: <HiLightningBolt className="text-green-700 text-4xl mb-2 mx-auto" /> },
];

const events = [
  { img: event1, caption: "Inauguration — 1 Nov 2024", link: "gallery/event1" },
  { img: event2, caption: "Limpopo Launch — Ha Kutama", link: "gallery/event2" },
  { img: event3, caption: "Cape Town Launch — Dec 2024", link: "gallery/event3" },
  { img: event4, caption: "Baphalane Launch — 31 Jan 2025", link: "gallery/event4" },
  { img: event5, caption: "World LPG Day — Jun 2025", link: "gallery/event5" },
];

const Home = () => {
  const [showVideo, setShowVideo] = useState(() => {
    try {
      // Check if sessionStorage is available (some mobile browsers block it)
      if (typeof Storage !== "undefined" && sessionStorage) {
        const seen = sessionStorage.getItem("hasSeenIntro");
        return !seen;
      }
    } catch (error) {
    }
    // Default to not showing video if sessionStorage fails
    return false;
  });

  useEffect(() => {
    if (showVideo) {
      const timer = setTimeout(() => {
        setShowVideo(false);
        try {
          if (typeof Storage !== "undefined" && sessionStorage) {
            sessionStorage.setItem("hasSeenIntro", "true");
          }
        } catch (error) {
        }
      }, 6000); // 6 seconds
      return () => clearTimeout(timer);
    }
  }, [showVideo]);

  if (showVideo) {
    return (
      <div className="relative w-full h-screen bg-black flex items-center justify-center">
        <video
          src={introVideo}
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Lowered Progress Bar */}
        <div className="absolute bottom-[18%] left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gray-300 rounded overflow-hidden z-10">
          <div className="h-full bg-black animate-loading-bar" />
        </div>
        <style>{`
          @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-loading-bar {
            animation: loading-bar 1.2s linear infinite;
            transform: translateX(-100%);
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-white text-center px-4">
        <img src={heroImage} alt="Village Landscape" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-green-700 bg-opacity-80 z-10" />
        <div className="relative z-20 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">The Village Economy Indaba</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A 12-month programme accelerating sustainable economic growth within tribal communities.
          </p>
          <div className="space-x-4">
            <Link to="/about" className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100">Learn More</Link>
            <Link to="/sectors" className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-green-700">Explore Sectors</Link>
          </div>
        </div>
      </section>

      {/* 10 Key Sectors */}
      <section className="bg-gray-100 text-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">10 Key Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
                {s.icon}
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="mb-4">{s.desc}</p>
                <Link to="/sectors" className="inline-block text-green-700 font-medium hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Event Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {events.map((e, i) => (
              <Link to={e.link} key={i} className="group block">
                <LazyImage
                  src={e.img}
                  alt={e.caption}
                  eager={i < 3} // Load first 3 images immediately
                  className="rounded-lg shadow-md w-full h-64 object-cover group-hover:opacity-90"
                  placeholder={<div className="rounded-lg shadow-md w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center"><span className="text-gray-400">Loading...</span></div>}
                />
                <p className="mt-2 text-sm font-medium text-gray-700">{e.caption}</p>
              </Link>
            ))}
          </div>
          <Link to="gallery" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Donate */}
      <section className="bg-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support the Movement</h2>
          <p className="text-lg mb-8">Your contribution helps empower rural communities and grow sustainable village economies across South Africa.</p>
          <Link to="/donate" className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-100">
            Donate Now
          </Link>
        </div>
      </section>

      {/* Associations — place this just above the global Footer */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Associations</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="w-40 h-24 flex items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1">
              <LazyImage src={DrLogo} alt="Dr. Koketso Rakhudu Foundation" className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition" />
            </div>
            <div className="w-40 h-24 flex items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1">
              <LazyImage src={HakemLogo} alt="Hakem Logo" className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition" />
            </div>
            <div className="w-40 h-24 flex items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1 overflow-hidden">
              <img src={HfoundationLogo} alt="Hakem Foundation" className="max-h-16 max-w-32 object-contain filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
