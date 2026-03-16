import React from "react";

export default function Notices() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-8">
          Community Notices
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Water Conservation Guidelines",
              details:
                "As Tsitsing faces dry months, all households are asked to conserve water and follow community restrictions.",
              link: "#",
            },
            {
              title: "Livestock Registration Reminder",
              details:
                "All livestock owners must register animals at the Kgotla by month end. Forms are available at the office.",
              link: "#",
            },
            {
              title: "Traditional Medicine Workshop",
              details:
                "Local healers will share indigenous knowledge. Space is limited — register early.",
              link: "#",
            },
            {
              title: "Community Development Projects",
              details:
                "Learn about upcoming projects shaping Tsitsing’s future. Input from all residents is welcome.",
              link: "#",
            },
          ].map((notice, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gold mb-2">{notice.title}</h3>
              <p className="text-gray-700 mb-2">{notice.details}</p>
              <a
                href={notice.link}
                className="text-forest underline hover:text-green-800"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
