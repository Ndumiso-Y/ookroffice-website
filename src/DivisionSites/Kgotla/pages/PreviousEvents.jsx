// src/components/PreviousEvents.jsx
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PreviousEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const modalRef = useRef(null);

  const openModal = (media) => {
    setCurrentMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMedia(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const pastEvents = [
    {
      date: "27 Nov 2025",
      title: "Medicare Basic Life Support Training",
      details:
        "The Kgotla Ya Rakhudu Executive team attended Medicare Basic Life Support Training hosted by Medicare Private Hospital Rustenburg. Representing the Office of Kgosana Koketso Rakhudu & KYR were Mr. Ikgetheleng Allicious Sereo, Mrs Tsholo Nape (Executive Head), Ms. Bareng Maila (Kgotla Secretary), Mr. Glen Nakedi (Monnakgotla), Ms. Mphodi Bogopa and Ms. Oratile Diatshwana. This essential training equips executives with lifesaving skills to respond quickly and effectively during medical emergencies, strengthening community safety and leadership preparedness.",
      location: "Medicare Private Hospital Rustenburg",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/medicare-basic-life-support-training.jpg" },
      ],
    },
    {
      date: "25 Nov 2025",
      title: "Ethical Investment Breakfast",
      details:
        "Kgosana Koketso Rakhudu hosted an Ethical Investment Breakfast with the Senior Management Team and invited investors to finalize investment for the Tsitsing Excellence Corporate Centre. This strategic partnership aims to tackle unemployment and create sustainable economic opportunities through ethical, impact-driven investment.",
      location: "Tsitsing Excellence Corporate Office",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/ethical-investment-breakfast.jpg" },
      ],
    },
    {
      date: "25 Nov 2025",
      title: "Rorisang Special School Exit Ceremony",
      details:
        "Ms Neo Sikwane delivered a keynote on behalf of Kgosana Koketso Rakhudu at the Rorisang Special School exit ceremony. This engagement is part of Kgosana's Personal Professional Development Plan to mentor emerging leaders and cultivate the next generation of industry changemakers, demonstrating commitment to leadership development and inclusive education partnerships.",
      location: "N4 Guest Lodge, Rustenburg",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/rorisang-exit-ceremony.jpg" },
      ],
    },
    {
      date: "22 Nov 2025",
      title: "2025 Township Economy Awards",
      details:
        "The Office of Kgosana Koketso Rakhudu, represented by Ms Neo Sikwane (Executive Support) and Ms Galaletsang Mahuma (Financial Manager), attended the 2025 Township Economy Awards. This ceremony celebrates young trailblazers from across the country and honours township economy champions who have paved the way through policy, business practice, support, and impact.",
      location: "Hospital View Park, Tembisa, Gauteng",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/township-economy-awards.jpg" },
      ],
    },
    {
      date: "17 Nov 2025",
      title: "Modern CEO Global Entrepreneurship Breakfast",
      details:
        "Dr. Koketso Rakhudu and Mrs. Refilwe Sebothoma represented Tsitsing & Hakem Energies at this prestigious breakfast event. Dr. Rakhudu spoke on the cultural significance of entrepreneurship, while Mrs. Sebothoma addressed the future of energy, positioning Tsitsing as a global hub of leadership excellence.",
      location: "BMW Rustenburg",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/ModernCEOBreakfast.jpg" },
      ],
    },
    {
      date: "13 Nov 2025",
      title: "Kgotla Christmas Grocery Giveaway",
      details:
        "Dr. Koketso Rakhudu led the Kgotla Christmas Grocery Giveaway, distributing grocery packs to 500 households in the Tsitsing community. The initiative reflected the Kgotla's commitment to social responsibility and community upliftment during the festive season.",
      location: "Tsitsing Excellence Corporate Centre (Old Post Office)",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/ChristmasGiveaway.jpg" },
      ],
    },
    {
      date: "12 Nov 2025",
      title: "7th Annual International Public Health Conference",
      details:
        "Dr. Koketso Rakhudu spoke at the African Institute of Public Health Professionals (AIPHP) Conference 2025 at Sefako Makgatho Health Sciences University. As Deputy Chairperson of BAMMISHO, he highlighted the vital role the organization plays in strengthening health surveillance and improving community health outcomes across the Royal Bafokeng Nation.",
      location: "Midrand, Gallagher Convention Centre",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/PublicHealthConference.jpg" },
      ],
    },
    {
      date: "15 Jan 2025",
      title: "Academic Lekgotla",
      details:
        "Tsitsing Kgotla ya Rakhudu hosted an Academic Lekgotla celebrating progress towards Vision 2035.",
      location: "Kgotla Hall, Tsitsing",
      media: [
        {
          type: "video",
          src: "https://www.youtube.com/embed/4J5WWCqEQl0",
          thumbnail: "/division-assets/kgotla/images/KgotlhaLogo.png",
        },
      ],
    },
    {
      date: "20 Jan 2025",
      title: "Kgosana Koketso Rakhudu Excellence Awards",
      details:
        "Celebrating excellence in education, the Kgosana Koketso Rakhudu Awards honored learners achieving 80% and above.",
      location: "Mmanape Secondary School, Tsitsing",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
        { type: "image", src: "/division-assets/kgotla/images/KgosanaExcellenceAwards.jpg" },
        { type: "image", src: "/division-assets/kgotla/images/ExcellenceAwardsGraduates.jpg" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/LZpuvGZ_KjU",
          thumbnail: "/division-assets/kgotla/images/ExcellenceAward.jpeg",
        },
      ],
    },
    {
      date: "23 Feb 2025",
      title: "State Of The Kgotla Address (SOKA 2025)",
      details:
        "The annual SOKA address delivered by Dr. Koketso Rakhudu, outlining key community achievements and upcoming goals.",
      location: "Tsitsing Community Grounds",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/SOKA2025Event.png" },
        { type: "image", src: "/division-assets/kgotla/images/SOKA25Kgosana.jpg" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/ZcN4GMlxl6k?si=yFq0jKUl2iAqISYu",
          thumbnail: "/division-assets/kgotla/images/SOKA2025Event.png",
        },
      ],
    },
    {
      date: "05 Mar 2025",
      title: "10th Year Leadership Vision Impact — Chronicles Night 2025",
      details:
        "A decade of visionary leadership by Dr. Koketso Rakhudu celebrated through storytelling, awards, and cultural performance.",
      location: "Kgotla Ya Rakhudu Hall, Tsitsing",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/DrKoketsoRakhuduChroniclesNight.jpeg" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/UMM4nSrZGPI?si=Jkwkm5YCRaY12K2J",
          thumbnail: "/division-assets/kgotla/images/DrKoketsoRakhuduChroniclesNight.jpeg",
        },
      ],
    },
    {
      date: "08 Apr 2025",
      title: "Kgosana Koketso Rakhudu — Kwena Tlase High School Visit",
      details:
        "Kgosana Koketso Rakhudu visited Kwena Tlase High School to inspire learners about leadership and education.",
      location: "Kwena Tlase High School",
      media: [
        {
          type: "video",
          src: "https://www.youtube.com/embed/hGkljwmGd7A?si=3ACP6EpZ4zK5M3vv",
          thumbnail: "/division-assets/kgotla/images/KgotlhaLogo.png",
        },
      ],
    },
    {
      date: "17 Nov 2024",
      title: "Final Kgotla of 2024",
      details:
        "A momentous occasion celebrating nine years of leadership excellence, appreciation, and closing of the 2024 year.",
      location: "Tsitsing Kgotla Grounds",
      media: [
        { type: "image", src: "/division-assets/kgotla/images/DancingKgotla.jpeg" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/djSne4Ktam0?si=tXzmwNovwqy7ZMwC",
          thumbnail: "/division-assets/kgotla/images/KgotlhaLogo.png",
        },
      ],
    },
  ];

  // Sort events by date (most recent first)
  const sortedEvents = [...pastEvents].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="previous-events">
      {/* HERO */}
      <section className="bg-gradient-to-r from-forest to-kgotla-gold text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Previous Events
        </h1>
        <p className="max-w-3xl mx-auto">
          Relive the moments that shaped Tsitsing Kgotla Ya Rakhudu — where
          tradition, leadership, and progress converge.
        </p>
      </section>

      {/* EVENTS GRID */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEvents.map((event, i) => (
            <div
              key={i}
              className="bg-gray-50 shadow rounded-lg p-5 flex flex-col justify-between"
            >
              {/* MEDIA SWIPER */}
              {event.media && (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="w-full h-64 rounded-lg overflow-hidden"
                >
                  {event.media.map((item, index) => (
                    <SwiperSlide key={index}>
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={event.title}
                          className="w-full h-64 object-contain cursor-pointer"
                          onClick={() => openModal(item)}
                        />
                      ) : (
                        <div
                          className="relative w-full h-64 cursor-pointer"
                          onClick={() => openModal(item)}
                        >
                          <img
                            src={item.thumbnail}
                            alt="Video thumbnail"
                            className="w-full h-64 object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-3xl rounded-lg">
                            ▶
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {/* INFO */}
              <div className="mt-4 space-y-2">
                <div className="bg-forest text-white px-4 py-1 inline-block rounded whitespace-nowrap text-sm font-medium">
                  {event.date}
                </div>
                <h2 className="text-xl font-semibold text-kgotla-gold">{event.title}</h2>
                <p className="text-gray-700 text-sm">{event.details}</p>
                <p className="text-sm text-gray-600">📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full p-4 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
            >
              ✕
            </button>

            {currentMedia?.type === "video" ? (
              <iframe
                src={currentMedia.src}
                allow="autoplay"
                title="Video"
                className="w-full h-[70vh] rounded-md"
              ></iframe>
            ) : (
              <img
                src={currentMedia?.src}
                alt="Media"
                className="w-full h-[70vh] object-contain rounded-md"
              />
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-forest to-kgotla-gold text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Be Part of the Next Chapter
        </h2>
        <p className="mb-6">
          Join us for upcoming events as we continue the journey of leadership,
          unity, and progress for Tsitsing.
        </p>
        <a
          href="/events"
          className="bg-white text-forest px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
        >
          View Upcoming Events
        </a>
      </section>
    </div>
  );
}