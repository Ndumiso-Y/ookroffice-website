import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-16">
      <div className="page-container">
        {/* Mission Section */}
        <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">
          About the Village Economy Indaba
        </h2>
        <p className="text-lg leading-7 mb-4">
          The Village Economy Indaba is a comprehensive 12-month programme designed to promote sustainable
          economic growth within tribal communities. Our mission is to enhance local economies, improve
          livelihoods, and align our efforts with the Sustainable Development Goals (SDGs).
        </p>
        <p className="text-lg leading-7 mb-4">
          Through this initiative, we aim to establish strong corporate governance and development frameworks
          that empower tribal communities. The programme also strategically positions these communities to
          access international funding opportunities, ensuring they have the resources needed to thrive.
        </p>
        <p className="text-lg leading-7 mb-10">
          We believe in a future where every village is a hub of innovation, productivity, and prosperity —
          driven by its people, culture, and resilience.
        </p>

        {/* Objectives Section */}
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Objectives</h3>
        <ul className="list-disc list-inside text-lg space-y-2 mb-10">
          <li>Accelerate sustainable economic development within tribal communities.</li>
          <li>Strengthen local governance and development planning frameworks.</li>
          <li>Unlock access to local and international funding opportunities.</li>
          <li>Promote inclusive participation across sectors and generations.</li>
          <li>Align rural economies with national and global development goals.</li>
        </ul>

        {/* Values Section */}
        <h3 className="text-2xl font-semibold text-green-700 mb-6">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold mb-2 text-green-800">Empowerment</h4>
            <p className="text-gray-700">
              Building capacity within communities to lead and sustain their own development.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold mb-2 text-green-800">Collaboration</h4>
            <p className="text-gray-700">
              Partnering with stakeholders across sectors for inclusive growth.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold mb-2 text-green-800">Sustainability</h4>
            <p className="text-gray-700">
              Ensuring long-term impact through environmentally and economically sound practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
