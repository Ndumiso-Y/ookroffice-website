import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

function KoketsoRakhuduFoundation() {
  return (
    <div className="container mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#397D5A] mb-2">Koketso Rakhudu Foundation</h1>
        </div>
        <img 
          src="/images/KRFDesign.jpg" 
          alt="Logo" 
          className="mx-auto mb-4 w-64 h-64 object-contain opacity-90"
        />
        
        {/* About Us Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-[#1B5538]">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Founded on May 1, 2016, the Koketso Rakhudu Foundation (KRF) operates as an accredited Community Education & Training Center recognized by ETDP SETA. Nestled in Maile Kopman within the Royal Bafokeng Nation (RBN), a historically rich community of 150,000 people, KRF is committed to bridging traditional heritage with modern educational practices. The Foundation serves the North East Region, encompassing nine villages and a population deeply rooted in culture and resilience. Its primary focus is to uplift the community through sustainable and inclusive education.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Mission and Vision</h2>
          <p className="text-lg text-gray-700"><strong>Mission:</strong> To provide transformative, community-focused education and training that inspires lifelong learning and personal development.</p>
          <p className="text-lg text-gray-700"><strong>Vision:</strong> "Empowering Lives with Excellence" by equipping the community with skills and opportunities that align with both local heritage and future challenges.</p>
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Love:</strong> Promoting unity and understanding.</li>
            <li><strong>Integrity:</strong> Upholding transparency and trustworthiness.</li>
            <li><strong>Faith:</strong> With the faith of a mustard seed you can move mountains.</li>
            <li><strong>Excellence:</strong> Ensuring top-tier delivery in education and training programs.</li>
          </ul>
        </section>

        {/* Key Programmes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Key Programmes</h2>
          <p className="text-lg text-gray-700 mb-4">Our primary programs focus on practical, impactful training and community empowerment:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Accredited Skills Development Workshops:</strong> Courses tailored to practical, job-aligned skills in office and project management, business practices, and more.</li>
            <li><strong>Youth Empowerment Initiatives:</strong> Programs centered around sports, arts, and culture, encouraging leadership and teamwork.</li>
            <li><strong>Small Business and Entrepreneurial Support:</strong> Training and resources to promote job creation and economic growth, backed by partnerships with ABSA and other institutions.</li>
          </ul>
        </section>

        {/* Success Stories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Success Stories and Impact</h2>
          <p className="text-lg text-gray-700 mb-4">KRF has positively impacted over 1,100 individuals through various programs:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Social, Women & Disability Development Program (2016):</strong> Benefited 30 participants.</li>
            <li><strong>Grade 12 Re-write Program (2017):</strong> Assisted 105 students to improve their education.</li>
            <li><strong>Microsoft Software Development Program (2023):</strong> Equipped 25 participants with vital IT skills.</li>
            <li><strong>Entrepreneurial Skills Program (2021):</strong> Helped 40 local entrepreneurs start and manage small businesses.</li>
            <li><strong>Youth Leadership Training (2018):</strong> Empowered 50 young people to take leadership roles within their communities.</li>
            <li><strong>Women’s Empowerment (2020):</strong> Empowered 20 women through training in business and leadership skills.</li>
          </ul>
        </section>

        {/* Community Engagement Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Community Engagement</h2>
          <p className="text-lg text-gray-700 mb-4">Our engagement initiatives include open forums such as <strong>“Coffee with Dr. Koketso”</strong>, fostering community dialogue and collaboration. Cultural and educational events are held to promote unity and shared growth.</p>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-16">
  <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Upcoming Events</h2>
  <p className="text-lg text-gray-700 mb-4">
    Check our <Link to="/calendar" className="text-[#397D5A] hover:text-[#1B5538] font-semibold">calendar</Link> for future workshops, educational programs, and cultural events that help connect and grow our community.
  </p>
</section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Testimonials</h2>
          <blockquote className="italic text-gray-700 mb-4">“Education is not only about learning facts but nurturing the potential within each individual to lead and inspire.” — Dr. Koketso Rakhudu</blockquote>
          <p className="text-lg text-gray-700">Hear from community members about how KRF programs have impacted their lives and career trajectories.</p>
        </section>

        {/* Accreditations and Partnerships Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Accreditations and Partnerships</h2>
          <p className="text-lg text-gray-700 mb-8">
            KRF holds accreditation from seven SETAs, offering 44 full qualifications. 
            Partnerships with companies such as Anglo American, BMW, and Metropolitan have 
            expanded our reach and integrated modern technologies like augmented reality 
            into our e-learning systems.
          </p>

          {/* Enhanced Download Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/KRFAccreditation.pdf"
              download="KRFAccreditation.pdf"
              className="group flex items-center gap-3 bg-[#397D5A] hover:bg-[#1B5538] text-white px-6 py-3 rounded-lg 
                        transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl
                        animate-pulse hover:animate-none"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span className="text-lg font-semibold">Download Accreditation PDF</span>
            </a>
          </div>
        </section>

        {/* Donation Section */}
        <section className="mb-16 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-[#1B5538]">Support Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you believe in the Koketso Rakhudu Foundation's mission to empower and uplift the community through sustainable and inclusive education, we invite you to support us. Every donation makes a difference and helps us continue our work.
          </p>

          <h3 className="text-2xl font-semibold mb-3 text-[#397D5A]">Donation Banking Details</h3>
          <ul className="text-lg text-gray-700 mb-4 space-y-1">
            <li><strong>Account Holder:</strong> KOKETSO RAKHUDU FOUNDATION</li>
            <li><strong>ID/Reg Number:</strong> 177/109/NPO</li>
            <li><strong>Account Type:</strong> Current</li>
            <li><strong>Bank Name:</strong> Standard Bank</li>
            <li><strong>Branch Name:</strong> Waterfall Mall</li>
            <li><strong>Branch Code:</strong> 007045</li>
            <li><strong>Account Number:</strong> 10 12 997 812 2</li>
          </ul>
          <p className="text-lg text-gray-700">
            Your generosity will help us extend our outreach and build a brighter future for the Koketso Rakhudu Foundation.
          </p>
        </section>
    </div>
  );
}

export default KoketsoRakhuduFoundation;
