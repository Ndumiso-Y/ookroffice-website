import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Admissions = () => {
  const [formData, setFormData] = useState({
    type: 'application',
    name: '',
    email: '',
    phone: '',
    programme: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your submission! We will contact you shortly.');
    setFormData({
      type: formData.type,
      name: '',
      email: '',
      phone: '',
      programme: '',
      organization: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Admissions & Partnerships - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Apply to BSLE programmes or explore partnership opportunities. Join our community of ethical, innovative leaders."
        />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-accent-clay to-primary-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Admissions & Partnerships
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Begin your transformational leadership journey or partner with us to drive impact
          </p>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We seek leaders committed to excellence, ethics, and positive impact. Our admissions process is designed to identify individuals ready to transform themselves and their communities.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-leadership-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                Submit Application
              </h3>
              <p className="text-gray-700 text-sm">
                Complete the online application form with your details and motivation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                Document Review
              </h3>
              <p className="text-gray-700 text-sm">
                Our admissions team reviews your credentials and leadership experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                Interview
              </h3>
              <p className="text-gray-700 text-sm">
                Conversation with faculty to assess fit and discuss your goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-brown mb-2">
                Acceptance
              </h3>
              <p className="text-gray-700 text-sm">
                Receive decision and begin your leadership transformation journey
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">
              Admission Requirements
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-leadership-green text-xl mr-3">✓</span>
                <span className="text-gray-700">Minimum 3 years professional experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-leadership-green text-xl mr-3">✓</span>
                <span className="text-gray-700">Bachelor's degree or equivalent qualification</span>
              </li>
              <li className="flex items-start">
                <span className="text-leadership-green text-xl mr-3">✓</span>
                <span className="text-gray-700">Demonstrated commitment to ethical leadership</span>
              </li>
              <li className="flex items-start">
                <span className="text-leadership-green text-xl mr-3">✓</span>
                <span className="text-gray-700">Two professional references</span>
              </li>
              <li className="flex items-start">
                <span className="text-leadership-green text-xl mr-3">✓</span>
                <span className="text-gray-700">Statement of purpose (500 words)</span>
              </li>
              <li className="flex items-start">
                <span className="text-leadership-green text-xl mr-3">✓</span>
                <span className="text-gray-700">Current CV/Resume</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50" id="apply">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-4">
              {formData.type === 'application' ? 'Apply Now' : 'Partnership Enquiry'}
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setFormData({ ...formData, type: 'application' })}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors focus-ring ${
                  formData.type === 'application'
                    ? 'bg-leadership-green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Programme Application
              </button>
              <button
                onClick={() => setFormData({ ...formData, type: 'partnership' })}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors focus-ring ${
                  formData.type === 'partnership'
                    ? 'bg-leadership-green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Partnership Enquiry
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leadership-green focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leadership-green focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leadership-green focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor={formData.type === 'application' ? 'programme' : 'organization'} className="block text-sm font-semibold text-gray-700 mb-2">
                  {formData.type === 'application' ? 'Programme of Interest *' : 'Organization *'}
                </label>
                {formData.type === 'application' ? (
                  <select
                    id="programme"
                    name="programme"
                    required
                    value={formData.programme}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leadership-green focus:border-transparent"
                  >
                    <option value="">Select Programme</option>
                    <option value="esg">ESG Leadership Programme</option>
                    <option value="king-iv">King IV & Six Capitals</option>
                    <option value="strategic">Strategic Leadership</option>
                    <option value="ethical">Ethical Leadership Labs</option>
                    <option value="cultural">Cultural Competency</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leadership-green focus:border-transparent"
                  />
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                {formData.type === 'application' ? 'Why BSLE? (Brief Statement)' : 'Partnership Details'} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leadership-green focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-leadership-green hover:bg-forest-green text-white py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-lg"
            >
              Submit {formData.type === 'application' ? 'Application' : 'Enquiry'}
            </button>
          </form>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white" id="partner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We collaborate with organizations committed to developing ethical leaders and creating positive social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-leadership-green to-forest-green text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Corporate Partners</h3>
              <p className="mb-6">
                Customized leadership development programmes for your organization's executives and high-potential leaders.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Executive education</li>
                <li>• Team development</li>
                <li>• Culture transformation</li>
                <li>• Succession planning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-blue to-cyan-mist text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Academic Partners</h3>
              <p className="mb-6">
                Collaborate on research, faculty exchanges, and joint programmes advancing leadership education.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Joint research projects</li>
                <li>• Faculty exchanges</li>
                <li>• Curriculum development</li>
                <li>• Student exchanges</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent-clay to-primary-brown text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Community Partners</h3>
              <p className="mb-6">
                Work together on initiatives that develop leaders and create sustainable community impact.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Community projects</li>
                <li>• Youth programmes</li>
                <li>• NGO capacity building</li>
                <li>• Social enterprises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Questions About Admissions or Partnerships?
          </h2>
          <p className="text-xl mb-8">
            Our team is here to help you navigate the application process or explore partnership opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-leadership-green hover:bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
          >
            Contact Admissions Team
          </a>
        </div>
      </section>
    </>
  );
};

export default Admissions;
