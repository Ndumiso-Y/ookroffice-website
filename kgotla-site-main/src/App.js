// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import Heritage from './pages/Heritage.jsx';
import Notices from './pages/Notices.jsx';
import Contact from './pages/Contact.jsx';
import PreviousEvents from './pages/PreviousEvents.jsx';
import Layout from './components/Layout.jsx';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
