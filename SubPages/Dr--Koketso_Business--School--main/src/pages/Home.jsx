import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SegmentVideo from '../components/SegmentVideo';
import Icon from '../components/Icon';
import { getAssetPath } from '../utils/assetPath';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Transform your leadership journey with BSLE - Where ethical leadership meets African heritage, innovation, and sustainability."
        />
      </Helmet>

      {/* Hero Section with Logo */}
      <section className="relative h-screen bg-gradient-to-br from-[#345623] to-[#00a8be] flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <img
            src={getAssetPath('assets/logo-bsle.png')}
            alt="BSLE Logo"
            className="w-48 md:w-64 mx-auto mb-8 drop-shadow-xl"
          />
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-lg">
            Business School of Leadership Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Transforming leaders through ethical, sustainable, and innovative education rooted in African heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-leadership-green hover:bg-forest-green text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl inline-flex items-center justify-center gap-2"
            >
              Apply Now
              <Icon name="ArrowRight" className="w-5 h-5" />
            </Link>
            <Link
              to="/initiatives"
              className="bg-white hover:bg-gray-100 text-primary-brown px-8 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl inline-flex items-center justify-center gap-2"
            >
              Explore Masterclasses
              <Icon name="ArrowRight" className="w-5 h-5" />
            </Link>
            <Link
              to="/admissions#partner"
              className="bg-accent-clay hover:bg-primary-brown text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl inline-flex items-center justify-center gap-2"
            >
              Become a Partner
              <Icon name="ArrowRight" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-brown mb-6">
              Welcome to BSLE
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              At the Business School of Leadership Excellence, we cultivate leaders who drive positive change through ethical practices, sustainable solutions, and innovative thinking - all deeply rooted in our rich African heritage.
            </p>
            <SegmentVideo
              src={getAssetPath('assets/home-hero-african-leadership-inspiration.mp4')}
              poster={getAssetPath('assets/hero-cover.jpg')}
              className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Theme Cards */}
            <div className="bg-gradient-to-br from-forest-green to-leadership-green text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="mb-4">
                <Icon name="ShieldCheck" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Ethical Leadership</h3>
              <p className="leading-relaxed">
                Building leaders who prioritize integrity, accountability, and responsible governance in all decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-blue to-cyan-mist text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="mb-4">
                <Icon name="Leaf" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Sustainability</h3>
              <p className="leading-relaxed">
                Championing environmental stewardship and sustainable practices aligned with ESG principles and King IV.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-clay to-primary-brown text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="mb-4">
                <Icon name="Sparkles" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Heritage & Innovation</h3>
              <p className="leading-relaxed">
                Honoring African wisdom while embracing cutting-edge solutions for modern leadership challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                Making a Difference in Communities
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commitment extends beyond the classroom. Through strategic partnerships, mentorship programs, and community initiatives, we empower leaders to create lasting positive impact in their organizations and communities.
              </p>
              <Link
                to="/initiatives"
                className="inline-flex items-center gap-2 bg-leadership-green hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-ring"
              >
                Explore Our Initiatives
                <Icon name="ArrowRight" className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <SegmentVideo
                src={getAssetPath('assets/business-school-video-2.mp4')}
                poster={getAssetPath('assets/community-impact-cover.jpg')}
                start={181}
                end={209}
                className="aspect-video w-full rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Transform Your Leadership Journey?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join a community of visionary leaders committed to excellence, ethics, and positive change.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 bg-leadership-green hover:bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
          >
            Get Started Today
            <Icon name="ArrowRight" className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
