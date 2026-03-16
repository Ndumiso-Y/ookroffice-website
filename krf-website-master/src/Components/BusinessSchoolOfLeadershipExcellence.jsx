import React from "react";
import { Helmet } from 'react-helmet';

const BusinessSchoolOfLeadershipExcellence = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Dr. Koketso Rakhudu Business School of Leadership Excellence</title>
        <meta name="description" content="Discover the Dr. Koketso Rakhudu Business School of Leadership Excellence, where ethical leadership, ESG principles, and sustainable development come together to shape responsible leaders." />
      </Helmet>

      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#397D5A]">Dr. Koketso Rakhudu Business School of Leadership Excellence</h1>
        <img 
          src="/images/BusinessSchoolOfLeadershipExcellenceLogo.png" 
          alt="Business School Of Leadership Excellence logo" 
          className="mx-auto mb-4 w-64 h-64 object-contain opacity-90" 
          loading="lazy"
        />

        {/* Introduction */}
        <p className="text-lg mb-4 text-gray-700">
          The Dr. Koketso Rakhudu Business School of Leadership Excellence is dedicated to cultivating exceptional leaders equipped to navigate and shape a rapidly evolving business landscape. Through an innovative curriculum rooted in ethical leadership, governance principles, and sustainable practices, the school empowers students to excel professionally while making meaningful contributions to society.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#397D5A]">Our Vision and Mission</h2>
        <p className="mb-4 text-gray-700">
          <strong>Vision:</strong> To build a new generation of visionary, ethical leaders who drive positive change and sustainable growth.<br/>
          <strong>Mission:</strong> To provide students with a holistic education that integrates leadership skills, social responsibility, and business acumen, preparing them to lead with purpose, integrity, and a commitment to sustainable development.
        </p>
      </section>

      {/* Key Principles Section */}
      <section className="mt-12 bg-[#F1F5F9] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#397D5A]">Core Values</h2>
        
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Inclusive Leadership:</strong> We believe in fostering an environment that values diverse perspectives, encouraging leaders to embrace inclusivity and empathy in their decision-making.</li>
          
          <li><strong>Ethics and Integrity:</strong> Guided by the four Ps of good governance—people, purpose, process, and performance—the school ensures that students are grounded in ethical practices essential to responsible leadership.</li>

          <li><strong>Sustainable Impact:</strong> Aligned with the United Nations Sustainable Development Goals (SDGs), our curriculum emphasizes the need for responsible growth, environmental stewardship, and social equity in all business decisions.</li>

          <li><strong>Community and Cultural Heritage:</strong> We honor the value of cultural heritage and community, emphasizing that strong leaders understand and respect the communities they serve.</li>

          <li><strong>Adaptability and Innovation:</strong> Our programs prepare students to embrace change, adapt to new challenges, and innovate solutions for complex, modern business environments.</li>
        </ul>
      </section>

      {/* Curriculum Highlights Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#397D5A]">Curriculum Highlights</h2>
        
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Environmental, Social, and Governance (ESG) Focus:</strong> Our curriculum integrates ESG principles, empowering students to create business strategies that benefit both society and the environment.</li>
          
          <li><strong>The Six Capitals of the King IV Report:</strong> Students are introduced to the Six Capitals framework, learning how to balance financial, human, social, intellectual, manufactured, and natural capital to make well-rounded, sustainable decisions.</li>
          
          <li><strong>Strategic Leadership Modules:</strong> We offer modules on strategic thinking, effective decision-making, and crisis management to ensure students can lead in diverse business contexts.</li>
          
          <li><strong>Ethical Leadership Labs:</strong> Practical, interactive sessions help students apply ethical principles to real-world scenarios, fostering a commitment to high standards and ethical business practices.</li>
          
          <li><strong>Cultural Competency and Community Engagement:</strong> Drawing on Dr. Rakhudu’s experience in traditional leadership, our curriculum incorporates lessons on cultural competency, teaching students the value of community-oriented leadership.</li>
        </ul>
      </section>

      {/* Core Initiatives Section */}
      <section className="mt-12 bg-[#F1F5F9] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#397D5A]">Core Initiatives</h2>

        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Leadership Masterclasses:</strong> Monthly masterclasses led by industry leaders and social entrepreneurs provide students with insights into current business trends, ethical practices, and governance challenges.</li>
          
          <li><strong>Mentorship Program:</strong> Our mentorship program pairs students with seasoned professionals, offering personalized guidance and support to help them achieve their career goals.</li>
          
          <li><strong>Community Engagement Projects:</strong> Students engage in projects that address community-specific needs, fostering a sense of responsibility and connection to the real-world impact of their work.</li>
          
          <li><strong>Research and Development Labs:</strong> Innovation labs allow students to collaborate on cutting-edge research, exploring new solutions to contemporary business challenges while adhering to sustainable and ethical standards.</li>
          
          <li><strong>Quarterly Networking Events:</strong> Networking events bring together students, alumni, business leaders, and sustainability advocates, creating opportunities to build valuable connections and exchange ideas.</li>
        </ul>
      </section>

      {/* Closing Statement */}
      <section className="mt-12">
        <p className="text-lg text-gray-700">
          At the Dr. Koketso Rakhudu Business School of Leadership Excellence, we strive to empower future leaders with the skills, insights, and ethical grounding necessary to navigate and excel in an interconnected world. Our commitment to sustainable development, community engagement, and responsible governance ensures that our graduates not only succeed but also contribute positively to society and the global economy.
        </p>
      </section>
    </div>
  );
};

export default BusinessSchoolOfLeadershipExcellence;
