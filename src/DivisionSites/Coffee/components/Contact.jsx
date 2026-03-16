import React, { useState } from 'react'
import { Phone, Mail, Send, User, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="reveal py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-cream-50 to-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-coffeeOrange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-deepCoffee/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-coffee-gradient bg-clip-text text-transparent mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-coffeeOrange to-warmCoffee rounded-3xl blur opacity-20"></div>

              {/* Contact Card */}
              <div className="relative rounded-3xl p-8 sm:p-10 bg-white/90 backdrop-blur-sm shadow-strong border border-white/50">
                <h3 className="text-2xl sm:text-3xl font-bold bg-coffee-gradient bg-clip-text text-transparent mb-6 sm:mb-8">
                  Contact Details
                </h3>

                <div className="space-y-6">
                  {/* Name */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-coffeeOrange to-warmCoffee rounded-2xl flex items-center justify-center flex-shrink-0 shadow-medium">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-coffeeOrange mb-1">Name</p>
                      <p className="text-lg font-semibold text-charcoal">Dr. Koketso Rakhudu</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-warmCoffee to-deepCoffee rounded-2xl flex items-center justify-center flex-shrink-0 shadow-medium">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-coffeeOrange mb-1">Phone</p>
                      <a href="tel:+27636445723" className="text-lg font-semibold text-charcoal hover:text-coffeeOrange transition-colors duration-200">
                        +27 63 644 5723
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-deepCoffee to-charcoal rounded-2xl flex items-center justify-center flex-shrink-0 shadow-medium">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-coffeeOrange mb-1">Email</p>
                      <a href="mailto:dumela@drkoketsorakhudu.com" className="text-lg font-semibold text-charcoal hover:text-coffeeOrange transition-colors duration-200 break-all">
                        dumela@drkoketsorakhudu.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-400/40"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-deepCoffee/30"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-deepCoffee to-coffeeOrange rounded-3xl blur opacity-20"></div>

            {/* Form Card */}
            <div className="relative rounded-3xl p-8 sm:p-10 bg-white/90 backdrop-blur-sm shadow-strong border border-white/50">
              <h3 className="text-2xl sm:text-3xl font-bold bg-coffee-gradient bg-clip-text text-transparent mb-6 sm:mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-deepCoffee mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-coffeeOrange focus:outline-none transition-all duration-300 bg-white/80 text-charcoal placeholder-charcoal/40"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-bold text-deepCoffee mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-coffeeOrange focus:outline-none transition-all duration-300 bg-white/80 text-charcoal placeholder-charcoal/40"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-bold text-deepCoffee mb-2">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-coffeeOrange focus:outline-none transition-all duration-300 bg-white/80 text-charcoal placeholder-charcoal/40"
                      placeholder="+27 00 000 0000"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-bold text-deepCoffee mb-2">
                    What Can We Help You With?
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-coffeeOrange focus:outline-none transition-all duration-300 bg-white/80 text-charcoal placeholder-charcoal/40 resize-none"
                      placeholder="Tell us about your goals and how we can support you..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-coffeeOrange to-warmCoffee px-8 py-4 text-white font-bold shadow-strong hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-warmCoffee to-deepCoffee opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-coffeeOrange/40"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
