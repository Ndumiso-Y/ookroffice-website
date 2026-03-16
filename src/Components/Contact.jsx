import { useState } from 'react';
import { getPublicImage } from '../shared/utils/assetPaths';
import { FaEnvelope, FaPhoneAlt, FaArrowDown, FaCheck } from 'react-icons/fa';
import { emailConfig } from '../shared/config/environment';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  // Honeypot field — bots fill this, humans don't
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reject silently if honeypot is filled (bot submission)
    if (honeypot) return;

    setStatus('sending');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailConfig.serviceId,
          template_id: emailConfig.templateId,
          user_id: emailConfig.publicKey,
          template_params: formData,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute inset-0 bg-[#1B5538] opacity-5 pattern-grid-lg"></div>
        <div className="relative z-10">
          <div className="relative">
            <img
              src={getPublicImage("KgosanaSmiling.jpeg")}
              alt="Kgosana Koketso Rakhudu"
              loading="lazy"
              className="mx-auto w-60 h-60 mb-4 shadow-lg border-4 border-white"
            />
            <div className="absolute bottom-0 right-1/2 transform translate-x-16 translate-y-2">
              <div className="bg-[#397D5A] w-4 h-4 rounded-full animate-ping"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-[#1B5538]">Contact the Office of Kgosana Dr Koketso Rakhudu</h1>
          <p className="text-lg text-gray-700 mb-4">"We're here to listen and support our community."</p>
          <FaArrowDown className="animate-bounce text-[#397D5A] text-2xl mx-auto mt-4 cursor-pointer" />
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Contact Information */}
        <section className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-8 text-[#1B5538]">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaEnvelope className="text-[#397D5A] text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:Dumela@drkoketsorakhudu.com"
                className="text-[#397D5A] hover:text-[#1B5538] transition-colors">
                Dumela@drkoketsorakhudu.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaPhoneAlt className="text-[#397D5A] text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dr. Koketso Rakhudu</h3>
              <a href="tel:+27636445723" className="text-[#397D5A] hover:text-[#1B5538] transition-colors">
                +27 63 644 5723
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaPhoneAlt className="text-[#397D5A] text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dr. Koketso Rakhudu</h3>
              <a href="tel:+27829481438" className="text-[#397D5A] hover:text-[#1B5538] transition-colors">
                +27 82 948 1438
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16 relative overflow-hidden">
          {status === 'success' && (
            <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-10">
              <FaCheck className="text-4xl text-[#1B5538] mb-3" />
              <p className="font-semibold text-[#1B5538]">Message Sent Successfully!</p>
              <p className="text-gray-500 text-sm mt-1">We'll be in touch soon.</p>
            </div>
          )}
          <h2 className="text-2xl font-semibold text-[#1B5538] mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot — hidden from humans, traps bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-colors"
                required
              />
            </div>
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 px-4 bg-[#397D5A] hover:bg-[#1B5538] disabled:opacity-60 text-white font-bold rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Sending…' : <><span>Send Message</span><FaEnvelope className="text-sm" /></>}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
