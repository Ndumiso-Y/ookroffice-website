import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import VisionPlan from './Components/VisionPlan';
import Objectives from './Components/Objectives';
import Divisions from './Components/Divisions';
import Leadership from './Components/Leadership';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Calendar from './Components/Calendar';
import SuccessStories from './Components/SuccessStories';
import VillageEconomyIndaba from './Components/VillageEconomyIndaba';
import CoffeeWithDrRakhudu from './Components/CoffeeWithDrRakhudu';
import InvestmentSustainabilityTrust from './Components/InvestmentSustainabilityTrust';
import BusinessSchoolOfLeadershipExcellence from './Components/BusinessSchoolOfLeadershipExcellence';
import KoketsoRakhuduFoundation from './Components/KoketsoRakhuduFoundation';
import KgosanaKoketsoRakhuduGroup from './Components/KgosanaKoketsoRakhuduGroup';
import KgosanaKoketsoRakhuduProfile from './Components/KgosanaKoketsoRakhuduProfile'
import HakemEnergiesFoundation from './Components/HakemEnergiesFoundation'
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/vision-plan" element={<VisionPlan />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path='/successstories' element={<SuccessStories />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/koketso-rakhudu-foundation" element={<KoketsoRakhuduFoundation />} />
          <Route path="/the-village-economy-indaba" element={<VillageEconomyIndaba />} />
          <Route path="/coffee-with-dr-rakhudu" element={<CoffeeWithDrRakhudu />} />
          <Route path="/investment-sustainability-trust" element={<InvestmentSustainabilityTrust />} />
          <Route path="/business-school-of-leadership-excellence" element={<BusinessSchoolOfLeadershipExcellence />} />
          <Route path="/kgosana-koketso-rakhudu-group" element={<KgosanaKoketsoRakhuduGroup />} />
          <Route path="/hakem-energies-foundation" element={<HakemEnergiesFoundation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
