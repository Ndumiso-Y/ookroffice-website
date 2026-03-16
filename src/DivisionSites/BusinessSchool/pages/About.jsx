import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAssetPath } from '../utils/assetPath';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About BSLE - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Learn about BSLE's vision, mission, and core values. Discover how we're transforming leadership through ethical practices and African heritage."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-brown to-accent-clay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              About BSLE
            </h1>
            <p className="text-xl leading-relaxed">
              Pioneering excellence in leadership education through the integration of ethical practices, sustainability principles, and authentic African values.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be Africa's leading institution for developing ethical, innovative, and culturally grounded leaders who drive sustainable transformation across sectors and communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a future where leadership is synonymous with integrity, where business practices honor both people and planet, and where African wisdom guides global innovation.
              </p>
            </div>
            <div className="relative">
              <img
                src={getAssetPath('assets/about-vision.jpg')}
                alt="BSLE Vision"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={getAssetPath('assets/about-mission.jpg')}
                alt="BSLE Mission"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide transformative leadership education that:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-leadership-green text-2xl mr-3">✓</span>
                  <span className="text-lg text-gray-700">Integrates ESG principles and King IV governance frameworks into every programme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-2xl mr-3">✓</span>
                  <span className="text-lg text-gray-700">Honors African heritage while embracing global best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-2xl mr-3">✓</span>
                  <span className="text-lg text-gray-700">Develops ethical leaders equipped to address complex societal challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-2xl mr-3">✓</span>
                  <span className="text-lg text-gray-700">Fosters innovation, cultural competency, and sustainable business practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-brown mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do and shape the leaders we develop
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-leadership-green to-forest-green text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Integrity</h3>
              <p className="leading-relaxed">
                Upholding the highest ethical standards in all our actions, decisions, and relationships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-blue to-cyan-mist text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Ubuntu</h3>
              <p className="leading-relaxed">
                Embracing our shared humanity and fostering community, compassion, and interconnectedness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-clay to-primary-brown text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Excellence</h3>
              <p className="leading-relaxed">
                Pursuing continuous improvement and outstanding results in education, research, and impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-forest-green to-leadership-green text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Sustainability</h3>
              <p className="leading-relaxed">
                Committing to practices that ensure long-term environmental, social, and economic wellbeing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-brown to-accent-clay text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Innovation</h3>
              <p className="leading-relaxed">
                Encouraging creative thinking and adaptive solutions to contemporary leadership challenges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-mist to-sky-blue text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Cultural Wisdom</h3>
              <p className="leading-relaxed">
                Valuing and integrating indigenous knowledge systems with modern leadership theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OOKKR Link Section */}
      <section className="py-20 bg-gradient-to-r from-forest-green to-leadership-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Connected to OOKKR
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            The Business School of Leadership Excellence operates in partnership with the Office of Kgosi Koketso Rakhudu (OOKKR), bringing together traditional leadership wisdom with contemporary business education.
          </p>
          <a
            href="https://ookkr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-forest-green px-8 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
          >
            Learn More About OOKKR
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
            Join Our Community of Leaders
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Explore our programmes and discover how BSLE can transform your leadership journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programmes"
              className="bg-leadership-green hover:bg-forest-green text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring"
            >
              View Programmes
            </Link>
            <Link
              to="/contact"
              className="bg-primary-brown hover:bg-accent-clay text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
