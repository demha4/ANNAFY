import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import CaseStudy from './pages/CaseStudy';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-bg text-text font-sans pb-28 md:pb-0">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
          <BottomNav />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
