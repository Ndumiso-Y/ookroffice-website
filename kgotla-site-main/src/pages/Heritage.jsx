import React from "react";

export default function Heritage() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12 fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest">
          Heritage Stories
        </h2>

        {/* Overview */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gold">
            Our Heritage Content Overview
          </h3>
          <p>
            The heritage of Tsitsing is the root of our community identity.
            At the Kgotla, wisdom and tradition are passed down, ensuring that
            the sacrifices and resilience of our ancestors are never forgotten.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Oral Traditions:</strong> Stories, proverbs, and teachings from elders.</li>
            <li><strong>Historical Chronicles:</strong> Milestones in Tsitsing’s journey.</li>
            <li><strong>Cultural Practices:</strong> Ceremonies and customs defining our identity.</li>
            <li><strong>Leadership Legacy:</strong> Honoring leaders who safeguarded justice and dignity.</li>
            <li><strong>Community Heroes:</strong> Celebrating those who uplifted Tsitsing.</li>
            <li><strong>Sacred Sites:</strong> Places of deep cultural and historical meaning.</li>
          </ul>
        </div>

        {/* Quotes */}
        {/* <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "The tree that would grow high must send its roots deep. Our traditions are the roots that nourish us.",
              author: "— Elder Maipelo Rakhudu",
            },
            {
              quote:
                "The Kgotla reminds us that wisdom is shared when we listen with respect and speak with purpose.",
              author: "— Kgosi Tebogo Moeng",
            },
            {
              quote:
                "We are guardians of the dreams of our ancestors — their sacrifices built the Tsitsing we inherit today.",
              author: "— Traditional Healer Nomsa Setlhare",
            },
          ].map((story, i) => (
            <div key={i} className="bg-forest text-white rounded-lg p-6 shadow fade-in">
              <p className="italic">“{story.quote}”</p>
              <p className="mt-4 font-semibold">{story.author}</p>
            </div>
          ))}
        </div> */}

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 fade-in">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src="/images/Communityengagement.jpeg"
              alt="Elder of Oral Traditions"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gold">Oral Traditions</h3>
              <p>Passing down wisdom and stories from one generation to the next.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src="/images/DancingKgotla.jpeg"
              alt="Kgotla Grounds"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gold">Cultural Ceremonies</h3>
              <p>Honoring ancestors through rituals that strengthen community bonds.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src="/images/KgosanaYouthStakeholders.jpeg"
              alt="Kgosana Koketso"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gold">Traditional Justice</h3>
              <p>Ensuring fairness and healing through restorative systems of justice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
