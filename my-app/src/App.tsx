
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './navbar';
import Footer from './footer';


function App() {
  return (
    <div className="app-container">
    <Router>
            <Navbar />
            <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            </main>
            <Footer/>
        </Router>
      </div>
  );
}

export default App;
