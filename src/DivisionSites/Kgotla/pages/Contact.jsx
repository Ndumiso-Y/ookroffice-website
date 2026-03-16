import React from "react";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-8">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-kgotla-gold">Get in Touch</h3>
            <div>
              <strong>Address:</strong>
              <p>Tsitsing Village, Kgotla Grounds, North West Province, South Africa</p>
            </div>
            <div>
              <strong>Email:</strong>
              <p>admin@kgotlayarakhudu.com</p>
            </div>
            <div>
              <strong>Office Hours:</strong>
              <p>Mon - Fri: 08:00 - 16:00 | Sat: 08:00 - 12:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-kgotla-gold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-4 py-2"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded px-4 py-2"
                required
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded px-4 py-2"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-forest text-white px-6 py-2 rounded hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
