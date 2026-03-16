import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will be in touch soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact & Partnerships - KKR Group</title>
        <meta
          name="description"
          content="Partner with KKR Group. Get in touch to explore investment opportunities and strategic collaborations."
        />
      </Helmet>

      <section
        className="relative min-h-screen py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/contact-bg.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-royal-blue/85"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Let's Build Together
          </h1>
          <p className="text-xl text-neutral-gray text-center mb-12">
            Partner with us to drive economic transformation and sustainable growth
          </p>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-gray rounded-lg focus:border-royal-blue focus:outline-none transition-smooth"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-gray rounded-lg focus:border-royal-blue focus:outline-none transition-smooth"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-neutral-gray rounded-lg focus:border-royal-blue focus:outline-none transition-smooth"
                  placeholder="Your organization"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-neutral-gray rounded-lg focus:border-royal-blue focus:outline-none transition-smooth resize-none"
                  placeholder="Tell us about your partnership interests or inquiries..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold text-royal-blue py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-smooth shadow-lg"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t-2 border-neutral-gray text-center">
              <p className="text-charcoal">
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:info@kkrgroup.co.za"
                  className="text-royal-blue hover:text-gold transition-smooth"
                >
                  info@kkrgroup.co.za
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
