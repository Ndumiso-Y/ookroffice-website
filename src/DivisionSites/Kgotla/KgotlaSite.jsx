import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Heritage from './pages/Heritage';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import PreviousEvents from './pages/PreviousEvents';

export default function KgotlaSite() {
  return (
    <Layout>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/previous-events" element={<PreviousEvents />} />
        </Routes>
      </main>
      <Footer />
    </Layout>
  );
}
