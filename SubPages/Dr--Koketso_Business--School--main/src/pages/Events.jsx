import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from '../components/Carousel';
import Icon from '../components/Icon';
import { getAssetPath } from '../utils/assetPath';

const Events = () => {
  const eventMedia = [
    {
      type: 'image',
      src: getAssetPath('assets/events-1.jpg'),
      alt: 'Leadership Summit 2024',
      caption: 'Annual Leadership Summit 2024'
    },
    {
      type: 'image',
      src: getAssetPath('assets/events-2.jpg'),
      alt: 'ESG Masterclass',
      caption: 'ESG Masterclass with Industry Leaders'
    },
    {
      type: 'image',
      src: getAssetPath('assets/events-3.jpg'),
      alt: 'Graduation Ceremony',
      caption: 'Class of 2024 Graduation Ceremony'
    },
    {
      type: 'image',
      src: getAssetPath('assets/events-4.jpg'),
      alt: 'Community Outreach',
      caption: 'Community Leadership Development Programme'
    },
    {
      type: 'image',
      src: getAssetPath('assets/events-5.jpg'),
      alt: 'Networking Event',
      caption: 'Alumni Networking Evening'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Events Gallery - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Explore photos and videos from BSLE's events, masterclasses, graduations, and community initiatives."
        />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-blue to-cyan-mist text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Events Gallery
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Celebrating moments of learning, growth, and community impact
          </p>
        </div>
      </section>

      {/* Main Gallery Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6 text-center">
              Recent Events
            </h2>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
              From inspiring masterclasses to impactful community projects, see the BSLE community in action.
            </p>
          </div>

          <Carousel items={eventMedia} autoplay={true} interval={5000} />
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Event Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-leadership-green to-forest-green flex items-center justify-center text-white">
                <Icon name="GraduationCap" className="w-24 h-24" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  Annual Graduation Ceremony
                </h3>
                <p className="text-gray-600 text-sm mb-3">TBA</p>
                <p className="text-gray-700">
                  Celebrating graduates who completed their leadership transformation journey with BSLE.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-sky-blue to-cyan-mist flex items-center justify-center text-white">
                <Icon name="Globe" className="w-24 h-24" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  ESG Leadership Summit
                </h3>
                <p className="text-gray-600 text-sm mb-3">TBA</p>
                <p className="text-gray-700">
                  Summit bringing together leaders to explore sustainable business practices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent-clay to-primary-brown flex items-center justify-center text-white">
                <Icon name="Handshake" className="w-24 h-24" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  Community Leadership Workshop
                </h3>
                <p className="text-gray-600 text-sm mb-3">TBA</p>
                <p className="text-gray-700">
                  Empowering emerging community leaders with essential leadership skills and networks.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-forest-green to-leadership-green flex items-center justify-center text-white">
                <Icon name="BookOpen" className="w-24 h-24" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  King IV Masterclass Series
                </h3>
                <p className="text-gray-600 text-sm mb-3">TBA</p>
                <p className="text-gray-700">
                  Intensive sessions on corporate governance with South Africa's leading governance experts.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-brown to-accent-clay flex items-center justify-center text-white">
                <Icon name="Mic2" className="w-24 h-24" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  Leadership Speaker Series
                </h3>
                <p className="text-gray-600 text-sm mb-3">TBA</p>
                <p className="text-gray-700">
                  Featuring Dr. Rakhudu and special guests discussing Ubuntu leadership in modern business.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-mist to-sky-blue flex items-center justify-center text-white">
                <Icon name="Sparkles" className="w-24 h-24" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  Alumni Networking Gala
                </h3>
                <p className="text-gray-600 text-sm mb-3">TBA</p>
                <p className="text-gray-700">
                  Annual celebration bringing together BSLE alumni from across Africa and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join us for upcoming masterclasses, workshops, and networking opportunities.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  Masterclass: Ethical Leadership
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Date:</span> TBA | <span className="font-semibold">Location:</span> TBA
                </p>
                <p className="text-gray-700">Masterclass exploring ethical challenges of AI, data privacy, and digital transformation.</p>
              </div>
              <button className="bg-leadership-green hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-ring whitespace-nowrap">
                Register Now
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                  Sustainability & Governance Forum
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Date:</span> TBA | <span className="font-semibold">Location:</span> TBA
                </p>
                <p className="text-gray-700">Practical session on preparing integrated reports and ESG disclosures.</p>
              </div>
              <button className="bg-leadership-green hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-ring whitespace-nowrap">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive updates about upcoming events, masterclasses, and leadership resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-leadership-green focus:outline-none"
            />
            <button className="bg-leadership-green hover:bg-forest-green text-white px-8 py-3 rounded-lg font-semibold transition-colors focus-ring whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
