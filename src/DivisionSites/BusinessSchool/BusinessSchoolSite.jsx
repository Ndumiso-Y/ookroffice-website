import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import KgotlaAnnouncementEntry from './components/KgotlaAnnouncementEntry';
import Home from './pages/Home';
import About from './pages/About';
import Programmes from './pages/Programmes';
import Initiatives from './pages/Initiatives';
import Leadership from './pages/Leadership';
import Research from './pages/Research';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function BusinessSchoolSite() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <KgotlaAnnouncementEntry />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programmes" element={<Programmes />} />
              <Route path="/initiatives" element={<Initiatives />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/research" element={<Research />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
