import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Carousel from './Carousel';

function Leadership() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left corner circle */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#1B5538]/10" />
        
        {/* Diagonal lines pattern - top right */}
        <div className="absolute top-0 right-0 w-72 h-72">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 right-0 h-full w-1 bg-[#397D5A]/10"
              style={{
                transform: `rotate(${45 + i * 5}deg)`,
                transformOrigin: 'top right'
              }}
            />
          ))}
        </div>

        {/* Bottom-right corner circle */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#1B5538]/5" />
        
        {/* Diagonal lines pattern - bottom left */}
        <div className="absolute bottom-0 left-0 w-72 h-72">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-0 h-full w-1 bg-[#397D5A]/10"
              style={{
                transform: `rotate(${-45 - i * 5}deg)`,
                transformOrigin: 'bottom left'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative">
        {/* Header */}
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-[#1B5538]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Leadership
        </motion.h1>

        {/* Organisation organogram */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-[#397D5A] mb-6 text-center">
            Organizational Structure
          </h2>
          
          {/* Executives Structure */}
          <motion.img
            src="/images/LeadershipStructure1.jpg"
            alt="Office of Kgosana Dr Koketso Rakhudu Executive Structure"
            className="mx-auto mb-8 w-full max-w-4xl h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          
          {/* Strategy & Business Development */}
          <motion.img
            src="/images/StrategyBusinessDev.jpg"
            alt="Strategy & Business Development Structure"
            className="mx-auto mb-8 w-full max-w-4xl h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          {/* Operations & Systems */}
          <motion.img
            src="/images/OperationsSystems.jpg"
            alt="Operations & Systems Structure"
            className="mx-auto mb-8 w-full max-w-4xl h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          
          {/* Finance & Compliance */}
          <motion.img
            src="/images/FinanceCompliance.jpg"
            alt="Finance & Compliance Structure"
            className="mx-auto mb-8 w-full max-w-4xl h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          
          {/* Programmes & Delivery */}
          <motion.img
            src="/images/ProgrammesDelivery.jpg"
            alt="Programmes & Delivery Structure"
            className="mx-auto mb-8 w-full max-w-4xl h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </motion.div>

        {/* Intro Section */}
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Leadership is about inspiring and empowering others. Kgosana Koketso Rakhudu follows the footsteps of his father, Kgosana Rantatja Jacob Rakhudu.
        </motion.p>

        {/* Leadership and Legacy Section */}
        <motion.section 
          className="flex flex-col items-center mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#1B5538]/10 rotate-45" />
          <div className="absolute -right-4 top-1/4 w-6 h-6 bg-[#397D5A]/10 rounded-full" />
          
          <img 
            src="/images/KgosanaSmiling.jpeg" 
            alt="Dr Kgosana Koketso Rakhudu" 
            className="w-2/3 sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">
            Leadership and Legacy of the Office of Kgosana Dr Koketso Rakhudu
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl text-center">
            The Office of Kgosana Dr Koketso Rakhudu is rooted in a legacy of strong, visionary leadership established by Kgosana Rantatja Jacob Rakhudu, whose service was defined by integrity, humility, and a commitment to his people. Kgosana Koketso continues this legacy with a forward-thinking approach, ensuring the collective well-being of the community.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl text-center">
            Observing his father's dedication to Tsitsing, Kgosana Koketso has adopted a style that values engagement, collaboration, and community growth. His leadership is not about authority but about creating a thriving community through purpose-driven governance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl text-center">
            Integrating African traditional governance with modern principles, the Office of Kgosana Dr Koketso Rakhudu encourages each community member to reach their potential through various empowerment initiatives in education, healthcare, and economic development, all contributing to VisionPlan 2035.
          </p>
        </motion.section>

        {/* Leadership Carousel */}
        <section className="flex flex-col items-center justify-center bg-gray-100 py-12">
          <h2 className="text-3xl font-bold mb-8 text-[#1B5538] text-center">
            Executive Leaders
          </h2>

          <div className="w-full max-w-4xl h-[400px] sm:w-[350px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
            <Carousel
              slides={[
                {
                  image: "images/NeoS.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Neo Sikwane",
                  description:
                    "Personal Assistant to Dr. Koketso Rakhudu, Neo@drkoketsorakhudu.com +27 (64) 702-7504",
                },
                {
                  image: "images/CalvinM.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Calvin Molokwane",
                  description:
                    "Executive Head: Finance & Compliance. Calvin@drkoketsorakhudu.com +27 (60) 616-5450",
                },
                {
                  image: "images/SereroA.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Ikgetheleng Sereo",
                  description:
                    "Executive Head: Strategy & Business Development. Sereo@drkoketsorakhudu.com +27 (64) 296-3705",
                },
                {
                  image: "images/OntiretseM.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Ontiretse Motene",
                  description:
                    "Executive Head: Programmes & Delivery. Ontiretse@drkoketsorakhudu.com +27 (64) 685-7101",
                },
                {
                  image: "images/TsholoM.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Tsholo Nape",
                  description:
                    "Executive Head: Operations & Systems. tsholofelo.n@drkoketsorakhudu.com +27 (82) 972-5629",
                },
                {
                  image: "images/GalaletsangM.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Galaletsang Mahuma",
                  description:
                    "Finance Manager. Galaletsang.mahuma@drkoketsorakhudu.com +27 682086466",
                },
                {
                  image: "images/KeagileM.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Keagile Masike",
                  description:
                    "Special Projects Manager. Keagile@drkoketsorakhudu.com +27 670001940",
                },
                {
                  image: "images/KagoL.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Kago Lebethe",
                  description:
                    "Communications & Public Relations Manager. Kago.l@drkoketsorakhudu.com +27 (78) 544-1374",
                },
                {
                  image: "images/KoketsoM.jpg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Koketso Moilwe",
                  description:
                    "Designs & Digital Communication Manager. koketso.m@drkoketsorakhudu.com +27 (63) 840-3072",
                },
                {
                  image: "images/BakangM.jpeg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Bakang Maluleka",
                  description:
                    "Executive Head: Legal & Social Ethics. Bakang@drkoketsorakhudu.com +27 (72) 974-8644 ",
                },
                {
                  image: "images/PaiMbanje.jpeg",
                  alt: "Office of Kgosana Dr Koketso Rakhudu Executive",
                  loading: "lazy",
                  title: "Pai Mbanje-Kondile",
                  description:
                    "Executive Investments Portfolio Head. Office of Dr. Koketso Rakhudu, Royal Bafokeng Nation, Tsitsing, Kgotla ya Rakhudu",
                },
              ]}
            />
          </div>
        </section>

        {/* Principles of Leadership Section */}
        <h3 className="text-2xl font-semibold text-[#397D5A] mb-6 text-center mt-12">Principles of Leadership in the Office</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto relative">
          <div className="absolute -left-8 top-1/2 w-16 h-16 bg-[#1B5538]/5 rounded-full" />
          <div className="absolute -right-8 bottom-1/4 w-12 h-12 bg-[#397D5A]/5 rotate-45" />
          
          {/* Principle Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center backdrop-blur-sm bg-white/90">
            <FaHandHoldingHeart className="text-[#1B5538] text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Purpose-Driven Governance</h4>
            <p className="text-gray-700">
              Governance is about fostering opportunities for individuals to find their roles within the community, creating a shared sense of purpose.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center backdrop-blur-sm bg-white/90">
            <FaUsers className="text-[#1B5538] text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Engagement and Inclusivity</h4>
            <p className="text-gray-700">
              Through regular Kgotla sessions, the Office makes collective, transparent decisions that reflect the voices of all community members.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center backdrop-blur-sm bg-white/90">
            <FaChalkboardTeacher className="text-[#1B5538] text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Empowerment and Capacity Building</h4>
            <p className="text-gray-700">
              The Office is committed to education, training, and leadership development, preparing future generations to carry forward the legacy of progress.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center backdrop-blur-sm bg-white/90">
            <FaHandsHelping className="text-[#1B5538] text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-[#1B5538] mb-2">Community Commitment</h4>
            <p className="text-gray-700">
              Leadership is seen as service. The Office supports the community with health initiatives, social welfare programs, and comprehensive resources that address local needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;