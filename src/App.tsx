import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Training from './pages/Training';
import Locations from './pages/Locations';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/training" element={<Training />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917906678752?text=Hi%20Sarthak!%20I%20am%20interested%20in%20wedding%20dance%20choreography."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </Router>
  );
}
