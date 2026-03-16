import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Foreword from "./pages/Foreword";
import SectorsPage from "./pages/SectorsPage";
import Framework from "./pages/Framework";
import Associations from "./pages/Associations";
import Gallery from "./pages/Gallery";

// Event galleries
import Event1 from "./pages/gallery/Event1";
import Event2 from "./pages/gallery/Event2";
import Event3 from "./pages/gallery/Event3";
import Event4 from "./pages/gallery/Event4";
import Event5 from "./pages/gallery/Event5";

function App() {
  return (
    <ErrorBoundary>
      <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/foreword" element={<Foreword />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/associations" element={<Associations />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Event Carousel Routes */}
            <Route path="/gallery/event1" element={<Event1 />} />
            <Route path="/gallery/event2" element={<Event2 />} />
            <Route path="/gallery/event3" element={<Event3 />} />
            <Route path="/gallery/event4" element={<Event4 />} />
            <Route path="/gallery/event5" element={<Event5 />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
