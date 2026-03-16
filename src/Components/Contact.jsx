import React from 'react';
import { getPublicImage } from '../shared/utils/assetPaths';
import { FaEnvelope, FaPhoneAlt, FaArrowDown } from 'react-icons/fa';

// TODO (Phase 2): Re-enable contact form using EmailJS.
// EmailJS handler and form fields are ready — import emailConfig from
// '../shared/config/environment' and restore the form UI below.

function Contact() {

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
           
      </div>
    </div>
  );
}

export default Contact;
