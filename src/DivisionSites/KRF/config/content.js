/**
 * KRF Content Configuration
 * Static content and data for KRF website pages
 */

import { AcademicCapIcon, BriefcaseIcon, ScaleIcon } from '../components/Icons';

export const visionMission = {
  badge: 'Our Purpose',
  heading: 'Vision & Mission',
  text: "We envision a society where education and enterprise coexist as the cornerstone of equity, empowerment, and sustainable development. Our mission is to empower individuals through access to learning, mentorship, and entrepreneurial resources that strengthen communities, reduce inequality, and expand opportunities for self-sufficiency."
};

export const focusAreas = {
  badge: 'Three Pillars',
  heading: 'Our Focus Areas',
  subtitle: 'Building sustainable futures through three interconnected pillars of community development',
  pillars: [
    {
      Icon: AcademicCapIcon,
      title: 'Education',
      desc: 'Accredited training and community education programs that open pathways for lifelong learning and employability.',
      color: 'from-blue-500 to-blue-600',
      delay: '0'
    },
    {
      Icon: BriefcaseIcon,
      title: 'Enterprise',
      desc: 'Equipping small business owners and entrepreneurs with mentorship and financial literacy to create sustainable ventures.',
      color: 'from-gold to-yellow-600',
      delay: '200'
    },
    {
      Icon: ScaleIcon,
      title: 'Equity',
      desc: 'Building inclusive opportunities that bridge social and economic divides across South Africa.',
      color: 'from-green-500 to-emerald-600',
      delay: '400'
    }
  ]
};

export const ctaSection = {
  heading: {
    main: "Together, we're shaping communities",
    highlight: "that learn, lead, and thrive."
  },
  subtitle: "Join us in shaping a brighter, more inclusive future through education and skills development.",
  primaryCTA: {
    text: "Explore Our Programmes",
    link: "/programs"
  },
  secondaryCTA: {
    text: "Get In Touch",
    link: "/contact"
  }
};
