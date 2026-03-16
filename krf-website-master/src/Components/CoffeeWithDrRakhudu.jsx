import React from "react";
import { Helmet } from 'react-helmet';

const CoffeeWithDrRakhudu = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Coffee with Dr. Koketso Rakhudu | Mentorship Program</title>
        <meta name="description" content="Join the transformative Coffee with Dr. Koketso Rakhudu program, designed to empower social entrepreneurs and changemakers." />
      </Helmet>

      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#397D5A]">Coffee with Dr. Koketso Rakhudu</h1>
        <img 
          src="/images/CoffeeDesign1.jpg" 
          alt="Coffee with Dr. Koketso Rakhudu" 
          className="mx-auto mb-4 w-64 h-64 object-contain opacity-90" 
          loading="lazy"
        />
        
        {/* Introduction */}
        <p className="text-lg mb-4 text-gray-700">
          "Coffee with Dr. Koketso Rakhudu" is a dynamic consulting and mentorship program tailored for social changemakers and entrepreneurs seeking personal and professional growth. This transformative initiative goes beyond regular meetings, fostering individual healing and empowerment through the profound act of sharing conversations over coffee, creating a safe space for open dialogue.
        </p>
        <p className="text-lg mb-4 text-gray-700">
          Participants embark on a year-long journey that equips them with essential skills, inspires innovative thinking, and cultivates powerful networks. Through this program, participants address real-world social and economic challenges within their communities while building valuable connections. The experience is punctuated by quarterly networking events, inviting participants to "sip, share, and strategize" with Dr. Koketso Rakhudu, creating an environment for creative idea generation and impactful change.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Vision and Mission</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Vision:</strong> Empowered Innovation</li>
          <li><strong>Mission:</strong> To equip participants with skills, creative perspectives, and connections to address social challenges effectively, fostering a culture of excellence, opportunity, and action.</li>
        </ul>
      </section>

      {/* Program Structure and Framework Section */}
      <section className="mt-12 bg-[#F1F5F9] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Program Structure and Framework</h2>
        <p className="mb-4 text-gray-700">
          This year-long initiative combines monthly workshops, one-on-one mentorship, and group networking sessions. Activities are conducted both in-person and virtually to ensure inclusivity and accessibility.
        </p>

        {/* Core Values */}
        <h3 className="text-xl font-semibold text-[#397D5A] mb-2">Core Values</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Creativity:</strong> Developing out-of-the-box solutions through creative problem-solving workshops, brainstorming sessions, and innovation labs.</li>
          <li><strong>Opportunity:</strong> Identifying and capitalizing on opportunities within the social sector through market analysis and value proposition sessions.</li>
          <li><strong>Far-sightedness:</strong> Strategic planning focused on sustainability and long-term impact, guiding participants to anticipate future challenges and opportunities.</li>
          <li><strong>Fruitfulness:</strong> A focus on generating impactful results, with workshops on measuring social impact and designing financially sustainable programs.</li>
          <li><strong>Excellence:</strong> Emphasizing high standards and ethical considerations, ensuring quality in service delivery.</li>
          <li><strong>Execution:</strong> Practical training on project management and implementation strategies to turn ideas into actionable plans.</li>
        </ul>

        {/* Program Components */}
        <h3 className="text-xl font-semibold text-[#397D5A] mt-6 mb-2">Program Components</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Workshops:</strong> Monthly sessions focusing on each core value, featuring insights from guest speakers, industry experts, and social entrepreneurs.</li>
          <li><strong>Mentorship:</strong> Personalized guidance through one-on-one sessions with Dr. Koketso Rakhudu, tailored to individual goals and aspirations.</li>
        </ul>
      </section>

      {/* Closing Statement */}
      <section className="mt-12">
        <p className="text-lg text-gray-700">
          Through "Coffee with Dr. Koketso Rakhudu," participants are empowered not only to envision change but to actively create it, transforming their ideas into actionable plans that benefit their communities and beyond.
        </p>
      </section>
    </div>
  );
};

export default CoffeeWithDrRakhudu;
