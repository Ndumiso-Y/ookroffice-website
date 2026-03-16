import React from "react";
import drKoketsoImg from "../assets/optimized/dr-koketso.jpg"; // <-- Replace with actual filename

const Foreword = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="page-container">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-left">
          Foreword by Dr. Koketso Rakhudu
        </h2>

        {/* Flex container for image + text */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          {/* Image */}
          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/3">
            <img
              src={drKoketsoImg}
              alt="Dr. Koketso Rakhudu"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="prose max-w-none lg:w-2/3 text-lg leading-8 lg:text-xl lg:leading-9">
            <p>
              As founder of The Village Economy Indaba, I am honoured to introduce this transformative
              initiative aimed at fostering sustainable economic growth within tribal communities. Our journey
              began with a clear vision: to create a platform that not only uplifts local economies but also
              empowers individuals and families to thrive in a rapidly changing world.
            </p>
            <p>
              This comprehensive programme was designed to tackle the unique challenges faced by rural
              communities — communities rich in culture and potential, yet too often excluded from opportunity.
              Our mission is simple yet powerful: to enhance livelihoods, support local enterprise, and align with
              the United Nations Sustainable Development Goals (SDGs).
            </p>
            <p>
              Central to this is our commitment to transparent governance, community-led development, and
              inclusive innovation. By equipping community leaders with tools to make informed decisions and
              encouraging collaboration among stakeholders, we will cultivate economies that are resilient,
              self-sustaining, and future-focused.
            </p>
            <p>
              Together, we can build a brighter future — one rooted in economic vitality, cultural dignity, and
              lasting empowerment.
            </p>
            <p className="mt-8 font-semibold">
              With hope and determination,<br />Dr. Koketso Rakhudu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foreword;
