import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Import images directly (bundled with webpack like Coffee division)
import KgosanaHomeImg from '../assets/KgosanaHome.jpg';
import KgotlaLeadershipImg from '../assets/KgotlaLeadership.jpg';
import CulturalDanceImg from '../assets/CulturalDance.jpeg';
import LekgotlaWithKgosanaKoketsoImg from '../assets/LekgotlaWithKgosanaKoketso.jpeg';
import SOKA2025EventImg from '../assets/SOKA2025Event.png';
import LeadershipLekgotlaImg from '../assets/LeadershipLekgotla.png';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updates = [
    {
      day: "16",
      month: "Jan",
      title: "Lekgotla Meetings",
      text: "Join us for our Q1 Lekgotla gathering to discuss key developments in Tsitsing.",
      link: "/notices",
      image: LekgotlaWithKgosanaKoketsoImg,
    },
    {
      day: "23",
      month: "Feb",
      title: "State Of The Kgotla Address",
      text: "The Annual State of the Kgotla address by Dr. Kgosana Koketso Rakhudu.",
      link: "/events",
      image: SOKA2025EventImg,
    },
    {
      day: "08",
      month: "Mar",
      title: "Executive Lekgotla Meeting",
      text: "Join us for our Q1 Executive Lekgotla gathering to discuss key developments in Tsitsing.",
      link: "/heritage",
      image: LeadershipLekgotlaImg,
    },
  ];

  return (
    <div className="home">
      <Helmet>
        <title>Kgotla Ya Rakhudu — Cultural Governance & Community Heritage</title>
        <meta name="description" content="Kgotla Ya Rakhudu is the traditional governance structure led by Kgosana Dr Koketso Rakhudu, preserving Tswana heritage and driving community development in Limpopo." />
      </Helmet>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-forest to-kgotla-gold text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto fade-in relative z-10 flex flex-col items-center">
          <img
            src={KgosanaHomeImg}
            alt="Dr Kgosana Koketso Rakhudu"
            loading="lazy"
            className="w-48 md:w-64 h-48 md:h-64 object-contain rounded-full border-4 border-white shadow-lg mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Tsitsing Kgotla Ya Rakhudu
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Preserving our Heritage • Honoring our Ancestors • Strengthening our Community
          </p>
          <p className="max-w-3xl mx-auto mb-8">
            Rooted in the Royal Bafokeng Nation, the Kgotla is a sacred space
            of dialogue, wisdom, and justice. Here, ancestral traditions guide
            modern decisions, empowering youth and uniting Tsitsing for the future.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/kgotla-website/about"
              className="bg-white text-forest px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
            >
              Learn About Us
            </Link>
            <Link
              to="/kgotla-website/events"
              className="bg-forest text-white px-6 py-2 rounded font-semibold hover:bg-green-800 transition"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 fade-in">
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-bold text-forest mb-4">
              The Spirit of Ubuntu
            </h2>
            <p className="mb-4 text-gray-700">
              The Kgotla has long been the cornerstone of Tsitsing community life —
              a place where voices are heard, wisdom is shared, and consensus drives leadership.
              It is where tradition and unity meet.
            </p>
            <p className="mb-6 text-gray-700">
              At Tsitsing Kgotla Ya Rakhudu, we honor this proud legacy by
              balancing ancestral governance with the needs of a new generation.
              We uplift youth, preserve cultural identity, and build resilience for the future.
            </p>
            <Link
              to="/kgotla-website/about"
              className="bg-kgotla-gold text-white px-6 py-2 rounded hover:bg-[#a25e00] transition"
            >
              Discover Our Story
            </Link>
          </div>
          <div className="flex-1">
            <img
              src={KgotlaLeadershipImg}
              alt="Traditional Meeting Place"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <h2 className="text-3xl font-heading font-bold text-forest mb-10">
            Our Community Functions
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "⚖️",
                title: "Traditional Leadership",
                text: "Guided by ancestral wisdom, we uphold justice, fairness, and unity in decision-making.",
              },
              {
                icon: "🤝",
                title: "Community Mediation",
                text: "We resolve conflicts through dialogue and mutual understanding rooted in respect.",
              },
              {
                icon: "🎭",
                title: "Cultural Preservation",
                text: "Celebrating heritage through storytelling, ceremonies, and intergenerational education.",
              },
              {
                icon: "📅",
                title: "Community Events",
                text: "Gatherings that strengthen relationships and build solidarity across generations.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-kgotla-gold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE PREVIEW SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 fade-in">
          <div className="flex-1">
            <img
              src={CulturalDanceImg}
              alt="Cultural Heritage"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-bold text-forest mb-4">
              Our Rich Heritage
            </h2>
            <p className="mb-4 text-gray-700">
              For generations, the Kgotla has been the heartbeat of our community — 
              where stories are told, wisdom is shared, and culture is renewed.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Traditional Governance:</strong> Democratic consensus rooted in ancestral law.
              </li>
              <li>
                <strong>Oral Traditions:</strong> Proverbs, stories, and teachings that pass down wisdom.
              </li>
              <li>
                <strong>Cultural Ceremonies:</strong> Moments that unite generations through heritage.
              </li>
            </ul>
            <Link
              to="/kgotla-website/heritage"
              className="mt-6 inline-block bg-kgotla-gold text-white px-6 py-2 rounded hover:bg-[#a25e00] transition"
            >
              Explore Our Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* UPDATES SECTION (WITH MODAL) */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto fade-in">
          <h2 className="text-3xl font-heading font-bold text-forest mb-10 text-center">
            Recent Updates
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {updates.map((update, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
              >
                <img
                  src={update.image}
                  alt={update.title}
                  loading="lazy"
                  onClick={() => setSelectedImage(update.image)}
                  className="w-full h-40 object-contain cursor-pointer hover:opacity-90 transition"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-forest text-white flex flex-col items-center justify-center rounded-lg font-bold">
                      <span className="text-xl">{update.day}</span>
                      <span className="text-sm uppercase">{update.month}</span>
                    </div>
                    <h3 className="font-semibold text-kgotla-gold">{update.title}</h3>
                  </div>
                  <p className="text-gray-700 flex-grow">{update.text}</p>
                  {/* <Link
                    to={update.link}
                    className="mt-4 text-forest underline hover:text-green-800"
                  >
                    Read More →
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Expanded"
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-forest to-kgotla-gold text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Be Part of Our Community
          </h2>
          <p className="mb-8">
            Whether you're seeking guidance, contributing to our community, or connecting to your roots — 
            you are welcome at Tsitsing Kgotla Ya Rakhudu.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/kgotla-website/contact"
              className="bg-white text-forest px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
            >
              Get In Touch
            </Link>
            <Link
              to="/kgotla-website/events"
              className="bg-forest text-white px-6 py-2 rounded font-semibold hover:bg-green-800 transition"
            >
              Join Our Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
