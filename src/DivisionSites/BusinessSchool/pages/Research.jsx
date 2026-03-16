import React from 'react';
import { Helmet } from 'react-helmet-async';
import Icon from '../components/Icon';

const Research = () => {
  return (
    <>
      <Helmet>
        <title>Research & Publications - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Access BSLE's research papers, whitepapers, case studies, and leadership resources."
        />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-forest-green to-leadership-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Research & Publications
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Advancing knowledge in ethical leadership, sustainability, and African management practices
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Featured Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our research contributes to global conversations on leadership while addressing uniquely African contexts and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="mb-4">
                <Icon name="FileText" className="w-12 h-12 text-sky-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-3">
                Ubuntu Leadership in the 21st Century
              </h3>
              <p className="text-gray-600 text-sm mb-4">Dr. K. Rakhudu | 2024</p>
              <p className="text-gray-700 mb-6">
                Exploring how traditional African philosophy informs contemporary ethical leadership practices and organizational culture development.
              </p>
              <button className="inline-flex items-center gap-2 text-leadership-green font-semibold hover:underline focus-ring rounded">
                Download PDF
                <Icon name="Download" className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="mb-4">
                <Icon name="FileText" className="w-12 h-12 text-sky-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-3">
                ESG Implementation in African Markets
              </h3>
              <p className="text-gray-600 text-sm mb-4">BSLE Research Team | 2024</p>
              <p className="text-gray-700 mb-6">
                Practical frameworks for integrating Environmental, Social, and Governance principles in emerging African economies.
              </p>
              <button className="inline-flex items-center gap-2 text-leadership-green font-semibold hover:underline focus-ring rounded">
                Download PDF
                <Icon name="Download" className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="mb-4">
                <Icon name="FileText" className="w-12 h-12 text-sky-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-3">
                King IV Compliance: A Practical Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">BSLE Governance Lab | 2023</p>
              <p className="text-gray-700 mb-6">
                Comprehensive resource for boards and executives navigating South Africa's corporate governance framework.
              </p>
              <button className="inline-flex items-center gap-2 text-leadership-green font-semibold hover:underline focus-ring rounded">
                Download PDF
                <Icon name="Download" className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="mb-4">
                <Icon name="FileText" className="w-12 h-12 text-sky-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-3">
                Cultural Intelligence for Global Leaders
              </h3>
              <p className="text-gray-600 text-sm mb-4">BSLE Faculty | 2023</p>
              <p className="text-gray-700 mb-6">
                Research-backed strategies for developing cultural competency and leading diverse, multicultural teams effectively.
              </p>
              <button className="inline-flex items-center gap-2 text-leadership-green font-semibold hover:underline focus-ring rounded">
                Download PDF
                <Icon name="Download" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real-world examples of leadership excellence, ethical challenges, and transformational change in African organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-primary-brown mb-3">
                Transforming Mining Operations Through ESG
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                How a South African mining company rebuilt community trust and improved sustainability metrics through comprehensive ESG strategy.
              </p>
              <button className="text-leadership-green text-sm font-semibold hover:underline">
                Read Case Study →
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-primary-brown mb-3">
                Board Renewal at a Family Business
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Navigating generational transition and modernizing governance in a 50-year-old family enterprise.
              </p>
              <button className="text-leadership-green text-sm font-semibold hover:underline">
                Read Case Study →
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-primary-brown mb-3">
                Culture Change in Financial Services
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Implementing Ubuntu principles to transform organizational culture and customer service in banking.
              </p>
              <button className="text-leadership-green text-sm font-semibold hover:underline">
                Read Case Study →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Leadership Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-leadership-green to-forest-green text-white p-6 rounded-xl text-center">
              <div className="flex justify-center mb-3">
                <Icon name="BookOpen" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold mb-2">Reading Lists</h3>
              <p className="text-sm mb-4">Curated resources for leadership development</p>
              <button className="text-xs underline hover:no-underline">View Lists</button>
            </div>

            <div className="bg-gradient-to-br from-sky-blue to-cyan-mist text-white p-6 rounded-xl text-center">
              <div className="flex justify-center mb-3">
                <Icon name="Video" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold mb-2">Video Library</h3>
              <p className="text-sm mb-4">Recorded lectures and masterclasses</p>
              <button className="text-xs underline hover:no-underline">Browse Videos</button>
            </div>

            <div className="bg-gradient-to-br from-accent-clay to-primary-brown text-white p-6 rounded-xl text-center">
              <div className="flex justify-center mb-3">
                <Icon name="Wrench" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold mb-2">Toolkits</h3>
              <p className="text-sm mb-4">Practical frameworks and templates</p>
              <button className="text-xs underline hover:no-underline">Access Tools</button>
            </div>

            <div className="bg-gradient-to-br from-forest-green to-leadership-green text-white p-6 rounded-xl text-center">
              <div className="flex justify-center mb-3">
                <Icon name="BarChart3" className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold mb-2">Data & Insights</h3>
              <p className="text-sm mb-4">Leadership trends and analytics</p>
              <button className="text-xs underline hover:no-underline">View Reports</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Contribute to Our Research
          </h2>
          <p className="text-xl mb-8">
            We welcome collaboration with researchers, practitioners, and organizations committed to advancing leadership knowledge.
          </p>
          <a
            href="/contact"
            className="inline-block bg-leadership-green hover:bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Research;
