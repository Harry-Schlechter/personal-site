import './App.css';
import './theme.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';
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
import NotFound from './pages/NotFound';
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
            <Route path="/" element={mode === 'personal' ? <SinglePage /> : <Home />} />
            {/* Personal Mode Routes (legacy, redirect to single page) */}
            <Route path="/about" element={mode === 'personal' ? <SinglePage /> : <About />} />
            <Route path="/experience" element={mode === 'personal' ? <SinglePage /> : <Experience />} />
            <Route path="/projects" element={mode === 'personal' ? <SinglePage /> : <Projects />} />
            <Route path="/hello" element={<BusinessCard />} />
            {/* Business Mode Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
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
