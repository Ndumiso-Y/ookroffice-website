import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Milestones from './pages/Milestones'
import Impact from './pages/Impact'
import Approach from './pages/Approach'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
