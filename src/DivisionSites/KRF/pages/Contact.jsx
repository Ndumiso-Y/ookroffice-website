// src/pages/Contact.jsx
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { PhoneIcon, MailIcon, GlobeIcon, MapIcon } from '../components/Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!")
          setFormData({ name: "", email: "", message: "" })
        },
        () => setStatus("❌ Something went wrong. Please try again.")
      )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-16 space-y-20">
      {/* ==== HERO ==== */}
      <section className="relative text-center overflow-hidden py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Get in Touch</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Contact Us</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
          Get in touch with the Koketso Rakhudu Foundation for collaborations, training enrolments or community projects.
        </p>
      </section>

      {/* ==== CONTACT DETAILS ==== */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold gradient-text mb-8">Get in Touch</h2>
          </div>

          <div className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                <MapIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Address</h3>
                <p className="text-gray-700">Community Education & Training Centre — Maile, Kopman</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                <a href="tel:+27636445723" className="text-gold hover:underline font-medium">
                  +27 63 644 5723
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                <MailIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Email</h3>
                <a href="mailto:Dumela@drkoketsorakhudu.com" className="text-gold hover:underline font-medium break-all">
                  Dumela@drkoketsorakhudu.com
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                <GlobeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Website</h3>
                <a href="https://www.drkoketsorakhudufoundation.com" className="text-gold hover:underline font-medium">
                  www.drkoketsorakhudufoundation.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ==== CONTACT FORM ==== */}
        <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-gold/30 rounded-3xl p-10 shadow-2xl shadow-black/20 space-y-6">
          {/* Decorative element */}
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-2xl opacity-20 blur-xl" />

          <h2 className="text-3xl font-bold gradient-text mb-6">Send Us a Message</h2>

          <div>
            <label className="block text-charcoal font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all duration-300 bg-white hover:border-gold/50"
            />
          </div>

          <div>
            <label className="block text-charcoal font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all duration-300 bg-white hover:border-gold/50"
            />
          </div>

          <div>
            <label className="block text-charcoal font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us how we can help you..."
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all duration-300 bg-white hover:border-gold/50 resize-none"
            />
          </div>

          <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-gold to-yellow-600 text-white font-bold py-4 px-8 rounded-xl overflow-hidden shadow-2xl shadow-gold/40 hover:shadow-gold/60 transition-all duration-300 hover:scale-[1.02] transform"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {status && (
            <div className={`text-center p-4 rounded-xl font-medium ${
              status.includes('✅')
                ? 'bg-green-50 text-green-700 border-2 border-green-200'
                : status.includes('❌')
                  ? 'bg-red-50 text-red-700 border-2 border-red-200'
                  : 'bg-blue-50 text-blue-700 border-2 border-blue-200'
            }`}>
              {status}
            </div>
          )}
        </form>
      </section>

      {/* ==== GOOGLE MAP ==== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Find Us Here</h2>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border-4 border-gold/20">
          <iframe
            title="Koketso Rakhudu Foundation Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.2088019379894!2d27.212!3d-25.596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMaile%20Kopman%20Center!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ==== FOOTER ==== */}
      <footer className="text-center text-sm text-gray-600 border-t pt-8">
        <p>
          Primary SETA: ETDP SETA · Accreditation Number: ETDP011394 · SAQA Provider Code: ETDP2368 · Reg No: 177-109 NPO
        </p>
        <p>
          <span className="font-semibold text-charcoal">
            Community Education & Training Centre · Maile Kopman · +27 63 644 5723 · Dumela@drkoketsorakhudu.com
          </span>{" "}
          · www.drkoketsorakhudufoundation.com
        </p>
      </footer>
    </main>
  )
}
