import './App.css';
import './theme.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Navbar from './navbar';
import Footer from './footer';
import BusinessCard from './pages/BusinessCard';
import { ModeProvider, useMode } from './context/ModeContext';
import { useEffect, useState } from 'react';

function AppContent() {
  const { mode } = useMode();
  const [pulseClass, setPulseClass] = useState('');

  useEffect(() => {
    // Trigger color flow effect when mode changes
    if (mode === 'personal') {
      setPulseClass('pulse-blue');
    } else {
      setPulseClass('pulse-green');
    }

    // Remove pulse class after animation completes
    const timer = setTimeout(() => {
      setPulseClass('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [mode]);

  const themeClass = mode === 'business' ? 'business-theme' : 'personal-theme';

  return (
    <div className={`app-container ${pulseClass} ${themeClass}`}>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Personal Mode Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hello" element={<BusinessCard />} />
            {/* Business Mode Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ModeProvider>
      <AppContent />
    </ModeProvider>
  );
}

export default App;
