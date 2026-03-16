// src/components/About.jsx
import React from "react";

// Import images directly (bundled with webpack like Coffee division)
import SOKA25StakeholderImg from '../assets/SOKA25Stakeholder.png';

export default function About() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto fade-in text-center">
        {/* Header Image */}
        <img
          src={SOKA25StakeholderImg}
          alt="SOKA 2025 Stakeholder"
          className="w-full max-h-[400px] object-contain -xl shadow mb-8"
        />

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-6">
          About Our Kgotla
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700 font-body leading-relaxed text-left">
          <p>
            The Tsitsing Kgotla ya Rakhudu is more than a meeting space,
            it is the living heart of our community within the Royal Bafokeng Nation.
            For generations, it has stood as a place of justice, consensus, and unity.
          </p>
          <p>
            Here, we preserve ancestral traditions while addressing today’s challenges.
            The Kgotla embodies the Spirit of Ubuntu: every voice matters, and leadership
            is rooted in wisdom, fairness, and service.
          </p>
          <p>
            Guided by traditional leaders, we ensure the values of our forefathers are
            carried forward while empowering youth to inherit their role as custodians
            of culture, justice, and development.
          </p>
        </div>
      </div>
    </section>
  );
}
