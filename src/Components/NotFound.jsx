import React from 'react';
import { Link } from 'react-router-dom';

function NotFound({ type }) {
  if (type === 'privacy') {
    return (
      <div className="min-h-screen py-16 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1B5538] mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4 text-sm">Last updated: March 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1B5538] mb-3">1. Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            The Office of Kgosana Dr Koketso Rakhudu (OOKR) operates this website at drkoketsorakhudu.com.
            We are committed to protecting your personal information in accordance with the Protection of
            Personal Information Act (POPIA), Act 4 of 2013.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1B5538] mb-3">2. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect your name and email address when you contact us through our contact form.
            We do not collect sensitive personal information, payment details, or location data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1B5538] mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Information submitted through our contact form is used solely to respond to your inquiry.
            We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1B5538] mb-3">4. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            This website uses session storage (not cookies) to remember your preferences within a single
            browsing session, such as whether you have already seen the welcome video. No tracking cookies
            are set. No data is shared with advertising networks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1B5538] mb-3">5. Your Rights (POPIA)</h2>
          <p className="text-gray-700 leading-relaxed">
            Under POPIA you have the right to access, correct, or request deletion of your personal
            information. To exercise these rights, contact us at{' '}
            <a href="mailto:Dumela@drkoketsorakhudu.com" className="text-[#397D5A] hover:underline">
              Dumela@drkoketsorakhudu.com
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1B5538] mb-3">6. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            For privacy-related questions, contact the Information Officer at{' '}
            <a href="mailto:Dumela@drkoketsorakhudu.com" className="text-[#397D5A] hover:underline">
              Dumela@drkoketsorakhudu.com
            </a>.
          </p>
        </section>

        <Link to="/" className="text-[#397D5A] hover:text-[#1B5538] font-medium">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-[#1B5538] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-2">Page not found</p>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="bg-[#1B5538] text-white px-6 py-3 rounded-lg hover:bg-[#397D5A] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
