import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SegmentVideo from '../components/SegmentVideo';
import Icon from '../components/Icon';
import { getAssetPath } from '../utils/assetPath';

const Initiatives = () => {
  return (
    <>
      <Helmet>
        <title>Initiatives - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Discover BSLE's initiatives: Masterclasses, Mentorship Programmes, Community Projects, R&D Labs, and Networking Events."
        />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-blue to-cyan-mist text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our Initiatives
            </h1>
            <p className="text-xl leading-relaxed">
              Beyond formal education, we create opportunities for continuous learning, collaboration, and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Masterclasses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                Leadership Masterclasses
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Intensive, focused sessions with industry leaders, academics, and thought leaders covering cutting-edge topics in leadership, governance, sustainability, and innovation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">Monthly sessions with global experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">Case studies and practical applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">Interactive Q&A and networking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">Certificate of attendance</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-leadership-green hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-ring"
              >
                Register for Masterclass
              </Link>
            </div>
            <div className="relative">
              <SegmentVideo
                src={getAssetPath('assets/masterclasses-speaker-conference.mp4')}
                poster={getAssetPath('assets/initiatives-masterclass-cover.jpg')}
                start={618}
                end={648}
                className="aspect-video w-full rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-brown mb-6">
              Mentorship Programme
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Connect with experienced leaders who provide guidance, support, and wisdom for your leadership journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-4">
                <Icon name="Users" className="w-12 h-12 text-leadership-green" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">One-on-One Mentoring</h3>
              <p className="text-gray-700 leading-relaxed">
                Personalized guidance from senior leaders matched to your career goals and development needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-4">
                <Icon name="Target" className="w-12 h-12 text-leadership-green" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Group Mentoring Circles</h3>
              <p className="text-gray-700 leading-relaxed">
                Peer learning groups facilitated by experienced mentors focusing on specific leadership challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-4">
                <Icon name="Rocket" className="w-12 h-12 text-leadership-green" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Reverse Mentoring</h3>
              <p className="text-gray-700 leading-relaxed">
                Innovative approach where younger leaders share fresh perspectives with senior executives.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <SegmentVideo
              src={getAssetPath('assets/initiatives-mentorship.mp4')}
              poster={getAssetPath('assets/initiatives-mentorship-cover.jpg')}
              className="aspect-video w-full rounded-2xl overflow-hidden"
            />
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-leadership-green to-forest-green text-white p-12 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-heading font-bold mb-6">Current Projects</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Icon name="Sprout" className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Youth Leadership Initiative</h4>
                      <p className="text-sm opacity-90">Developing next-generation leaders in underserved communities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Icon name="Briefcase" className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">SME Development Programme</h4>
                      <p className="text-sm opacity-90">Supporting small businesses with leadership training and resources</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Icon name="Globe" className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Sustainability Champions</h4>
                      <p className="text-sm opacity-90">Training community leaders in environmental conservation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                Community Impact Projects
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe leadership education must extend beyond the classroom into communities. Our impact projects create opportunities for leaders to apply their skills while serving society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Through partnerships with NGOs, government, and private sector, we tackle real challenges while developing practical leadership capabilities.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-brown hover:bg-accent-clay text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-ring"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Labs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-brown mb-6">
              Research & Development Labs
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Innovation hubs where leaders, academics, and practitioners collaborate on cutting-edge research in leadership, governance, and organizational development.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-3">ESG Innovation Lab</h3>
                <p className="text-gray-700">Developing practical tools and frameworks for ESG implementation in African contexts.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-3">Leadership Analytics Lab</h3>
                <p className="text-gray-700">Leveraging data science to understand leadership effectiveness and organizational culture.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-3">Cultural Intelligence Lab</h3>
                <p className="text-gray-700">Researching cross-cultural leadership and Ubuntu philosophy in modern organizations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                <h3 className="text-xl font-heading font-bold text-primary-brown mb-3">Governance Innovation Lab</h3>
                <p className="text-gray-700">Advancing board effectiveness and corporate governance practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Networking & Alumni Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Build lasting connections with a diverse community of leaders, changemakers, and innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-leadership-green to-forest-green text-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <Icon name="Mic2" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Speaker Series</h3>
              <p className="text-sm">Quarterly events featuring prominent African leaders</p>
            </div>

            <div className="bg-gradient-to-br from-sky-blue to-cyan-mist text-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <Icon name="Coffee" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Leadership Breakfasts</h3>
              <p className="text-sm">Monthly informal gatherings for peer exchange</p>
            </div>

            <div className="bg-gradient-to-br from-accent-clay to-primary-brown text-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <Icon name="GraduationCap" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Alumni Reunions</h3>
              <p className="text-sm">Annual celebrations of our graduate community</p>
            </div>

            <div className="bg-gradient-to-br from-forest-green to-leadership-green text-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <Icon name="Globe" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Virtual Meetups</h3>
              <p className="text-sm">Online forums connecting our global network</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Join Our Community of Impact-Driven Leaders
          </h2>
          <p className="text-xl mb-8">
            Participate in our initiatives and be part of a movement transforming leadership across Africa.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-leadership-green hover:bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Initiatives;
