import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaArrowDown, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
     import { getFirestore, collection, addDoc } from 'firebase/firestore';

function Contact() {
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Send the form data to EmailJS (replace with your own EmailJS service ID and template ID)
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'your_service_id',
          template_id: 'your_template_id',
          user_id: 'your_user_id',
          template_params: form,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
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
              src="/images/KgosanaSmiling.jpeg" 
              alt="Kgosana Koketso Rakhudu" 
              loading= "lazy"
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
            {/* Existing Contact Information */}
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
              <a href="tel:+27636445723" 
                 className="text-[#397D5A] hover:text-[#1B5538] transition-colors">
                +27 63 644 5723
              </a>
            </div>  

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaPhoneAlt className="text-[#397D5A] text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dr. Koketso Rakhudu</h3>
              <a href="tel:+27829481438" 
                 className="text-[#397D5A] hover:text-[#1B5538] transition-colors">
                +27 82 948 1438
              </a>
            </div>
          </div>
        </section> 
           
        {/* Contact Form */}
        {/* <section className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16 relative overflow-hidden">
          {submitted && (
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
              <div className="text-center text-[#1B5538]">
                <FaCheck className="text-4xl mb-2 mx-auto" />
                <p className="font-semibold">Message Sent Successfully!</p>
              </div>
            </div>
          )}
          
          <h2 className="text-2xl font-semibold text-[#1B5538] mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inquiry Category */}
            {/* <div className="group">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-colors"
                required
              >
                <option value="">Select an option</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Community Partnership</option>
                <option value="event">Event Participation</option>
              </select>
            </div> */}

            {/* Name Input */}
            {/* <div className="group">
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
            </div> */}

            {/* Email Input */}
            {/* <div className="group">
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
            </div> */}

            {/* Message Textarea */}
            {/* <div className="group">
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
              ></textarea>
            </div> */}

            {/* Submit Button */}
            {/* <button
              type="submit"
              className="w-full py-3 px-4 bg-[#397D5A] hover:bg-[#1B5538] text-white font-bold rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 hover:shadow-lg"
            >
              <span>Send Message</span>
              <FaEnvelope className="text-sm" />
            </button>
          </form>
        </section> */} 
      </div>
    </div>
  );
}

export default Contact;
