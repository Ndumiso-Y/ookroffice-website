import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const KgosanaKoketsoRakhuduProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <img
          src="/images/KgosanaChancellor.jpg"
          alt="Kgosana Dr. Koketso Rakhudu"
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl relative z-20">
            <motion.h1
              className="text-5xl font-bold text-white mb-6 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Kgosana Dr. Koketso Rakhudu
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-8 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The Journey of Leadership Excellence
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Personal Profile Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-[#1B5538] mb-8">
          Personal Profile
        </h2>
        <div className="flex justify-center">
          <img
            src="/images/TVEIGalaDinnerKgosana.jpeg"
            alt="Kgosana Dr. Koketso Rakhudu"
            className="w-60 h-60 rounded-contain shadow-lg"
          />
        </div>
        <div className="grid gap-8">
          {/* Primary Focus and Vision */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-[#1B5538] mb-4">Primary Focus and Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To actively contribute to and support initiatives that promote education, facilitate cultural exchange, and drive community development.
            </p>
          </motion.div>

          {/* Paragraph 1 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Kgosana Dr. Koketso Rakhudu is a distinguished leader of the Royal Bafokeng Nation, serving as the Kgosana of the Tsitsing community, Kgotla ya Rakhudu. With a steadfast commitment to the betterment of his community, Dr. Rakhudu holds several prominent positions, including Deputy Chairperson of the Provincial Council on AIDS in the North West Provincial Government and Founder of The Village Economy Indaba Programme.
            </p>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              An accomplished academic, Dr. Rakhudu is a Guest Lecturer and Strategic Implementation Partner at the University of South Africa School of Business Leadership, Tswane University of Technology's Faculty of Management Sciences and Entrepreneurship, and North West University School of Business & Governance, University of Kwazulu Natal, Graduate School of Business and Leadership. He is also the Patron of the South African Royal Development Foundation.
            </p>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              In addition to his role in global fund programmes and governance (NACOSA & AIDS Foundation South Africa), Dr. Koketso Rakhudu is actively involved in the South African Population Research Infrastructure Network, specifically focusing on the Bafokeng Health and Demographic Surveillance Node. This vital research is collaboratively implemented by esteemed institutions such as The Aurum Institute, Wits School of Public Health, Sefako Makgatho Health Sciences University, and Johns Hopkins University, where Dr. Rakhudu plays a crucial role as a member of the steering committee.
            </p>
          </motion.div>

          {/* Paragraph 4 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Rakhudu's dedication to social welfare is exemplified through his leadership of various organizations. He serves as the Chairperson of the Board for the Royal Bafokeng Nation Godisanang OVC Programme, which addresses the needs of orphaned and vulnerable children in the Royal Bafokeng area and beyond.
            </p>
          </motion.div>

          {/* Paragraph 5 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Recognized among the top 30 fast-rising professionals in Public Administration, Corporate Governance, and Community Leadership across the continent through the prestigious Pan African Leadership Institute's programme, Dr. Koketso Rakhudu also serves as the Chancellor of the Community Education & Training Centre.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Contact Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-[#1B5538] mb-8">
          Contact Information
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaPhoneAlt className="text-[#1B5538] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-[#1B5538] mb-2">
              Phone
            </h3>
            <p className="text-center text-gray-600">
              <a href="tel:+27636445723" className="hover:underline">
                +27 (63) 644-5723
              </a>
            </p>
            <p className="text-center text-gray-600">
              <a href="tel:+27829481438" className="hover:underline">
                +27 (82) 948-1438
              </a>
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaEnvelope className="text-[#1B5538] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-[#1B5538] mb-2">
              Email
            </h3>
            <p className="text-center text-gray-600">
              <a href="mailto:Dumela@drkoketsorakhudu.com" className="hover:underline">
                Dumela@drkoketsorakhudu.com
              </a>
            </p>
            <p className="text-center text-gray-600">
              <a href="mailto:Koketso.rakhudu@bafokeng.com" className="hover:underline">
                Koketso.rakhudu@bafokeng.com
              </a>
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaLinkedin className="text-[#1B5538] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-[#1B5538] mb-2">
              LinkedIn
            </h3>
            <div className="text-center mt-6">
              <a
                href="https://www.linkedin.com/in/kgosana-koketso-rakhudu-7b94ab254"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-lg hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
              >
                View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default KgosanaKoketsoRakhuduProfile;
