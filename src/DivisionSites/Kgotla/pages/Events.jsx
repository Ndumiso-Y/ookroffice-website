// src/components/Events.jsx
import React, { useState } from "react";

export default function Events() {
  const [modalEvent, setModalEvent] = useState(null);

  const events = [
    {
      day: "27-28",
      month: "Nov",
      title: "2030 Agenda for Sustainable Development — Global Governance Summit 2025",
      details:
        "Kgosana Koketso Rakhudu delivers the keynote address at the 2030 Agenda for Sustainable Development — Global Governance 2025 conference. His address will highlight how inclusive governance, strategic partnerships and sustainable economic planning can accelerate progress toward the SDGs. This work aligns directly with the Tsitsing (Kgotla Ya Rakhudu) Strategic Plan for Governance & Economic Development.",
      time: "TBA",
      location: "Durban, KwaZulu-Natal",
      dressCode: "Formal/Traditional attire",
      image: "/division-assets/kgotla/images/GlobalGovernanceSummit2025.jpg",
    },
    {
      day: "19",
      month: "Oct",
      title: "10th Year Vision Impact Lekgotla",
      details:
        "Tsitsing, Kgotla Ya Rakhudu 10th Year Vision Impact Lekgotla with Dr. Koketso Rakhudu. Keynote Speaker: Professor Bonang Mohale, University of the Free State Chancellor. Professor of Practice in the Johannesburg Business School (JBS), Chairman of The Bidvest Group Limited & ArcelorMittal.",
      time: "09:00",
      location: "Manape Secondary School",
      dressCode: "Traditional attire",
      image: "/division-assets/kgotla/images/10YearVisionImpactLekgotla.jpeg",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12 fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest">
          Upcoming Events
        </h2>

        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex items-center bg-gray-50 rounded-lg shadow p-6"
            >
              {/* Date Box */}
              <div className="flex-shrink-0 w-16 h-16 bg-forest text-white rounded-lg flex flex-col justify-center items-center font-bold">
                <span className="text-xl">{event.day}</span>
                <span className="text-sm uppercase">{event.month}</span>
              </div>

              {/* Event Image */}
              <div
                className="flex-shrink-0 w-24 h-24 ml-6 cursor-pointer hover:opacity-90 transition"
                onClick={() => setModalEvent(event)}
                role="button"
                aria-label={`View details for ${event.title}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalEvent(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Event Details */}
              <div className="ml-6 flex-1 space-y-1">
                <h4 className="text-lg font-semibold text-kgotla-gold">{event.title}</h4>
                <p className="text-gray-700">{event.details}</p>
                <p className="text-gray-500">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-gray-500">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-500">
                  <strong>Dress Code:</strong> {event.dressCode}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Previous Events */}
        <div className="bg-forest text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Previous Events</h3>
          <p className="mt-2">
            Explore our history of community gatherings, cultural celebrations,
            and ceremonies.
          </p>
          <a
            href="/previous-events"
            className="inline-block mt-4 bg-kgotla-gold text-white px-4 py-2 rounded hover:bg-[#a25e00]"
          >
            View Previous Events
          </a>
        </div>
      </div>

      {/* Image Modal with Caption */}
      {modalEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalEvent(null)}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden max-w-[90vw] max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
              onClick={() => setModalEvent(null)}
              aria-label="Close event details"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={modalEvent.image}
              alt={modalEvent.title}
              className="object-contain max-h-[65vh] mx-auto"
            />

            {/* Caption */}
            <div className="bg-white/90 text-gray-900 text-center py-3 px-4 border-t">
              <h4 className="font-semibold text-lg">{modalEvent.title}</h4>
              <p className="text-sm">
                {modalEvent.location} — {modalEvent.time}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}