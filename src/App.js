import React, { lazy, Suspense } from 'react';
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
import HakemEnergiesFoundation from './Components/HakemEnergiesFoundation';
import ScrollToTop from './Components/ScrollToTop';
import NotFound from './Components/NotFound';

// Division Full Websites — lazy loaded so they don't bloat the main bundle
const KRFSite = lazy(() => import('./DivisionSites/KRF/KRFSite'));
const TVEISite = lazy(() => import('./DivisionSites/TVEI/TVEISite'));
const CoffeeSite = lazy(() => import('./DivisionSites/Coffee/CoffeeSite'));
const BusinessSchoolSite = lazy(() => import('./DivisionSites/BusinessSchool/BusinessSchoolSite'));
const GroupSite = lazy(() => import('./DivisionSites/Group/GroupSite'));
const KgotlaSite = lazy(() => import('./DivisionSites/Kgotla/KgotlaSite'));

const DivisionLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-10 h-10 border-4 border-[#1B5538] border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        {/* Division Full Websites — lazy loaded, no OOKR Layout */}
        <Route path="/krf-website/*" element={<Suspense fallback={<DivisionLoader />}><KRFSite /></Suspense>} />
        <Route path="/tvei-website/*" element={<Suspense fallback={<DivisionLoader />}><TVEISite /></Suspense>} />
        <Route path="/coffee-website/*" element={<Suspense fallback={<DivisionLoader />}><CoffeeSite /></Suspense>} />
        <Route path="/businessschool-website/*" element={<Suspense fallback={<DivisionLoader />}><BusinessSchoolSite /></Suspense>} />
        <Route path="/group-website/*" element={<Suspense fallback={<DivisionLoader />}><GroupSite /></Suspense>} />
        <Route path="/kgotla-website/*" element={<Suspense fallback={<DivisionLoader />}><KgotlaSite /></Suspense>} />

        {/* Main OOKR Website — with Layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/vision-plan" element={<VisionPlan />} />
              <Route path="/objectives" element={<Objectives />} />
              <Route path="/successstories" element={<SuccessStories />} />
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
              <Route path="/privacy" element={<NotFound type="privacy" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
