import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import XashPOS from './pages/XashPOS';
import Developers from './pages/Developers';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AMLPolicy from './pages/AMLPolicy';
import DataProtection from './pages/DataProtection';
import CookiePolicy from './pages/CookiePolicy';
import Agents from './pages/Agents';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-50/30">
        <Header />
        <Routes>
          <Route path="/" element={<><ScrollToTop /><Home /></>} />
          <Route path="/pos" element={<><ScrollToTop /><XashPOS /></>} />
          <Route path="/developers" element={<><ScrollToTop /><Developers /></>} />
          <Route path="/agents" element={<><ScrollToTop /><Agents /></>} />
          <Route path="/about" element={<><ScrollToTop /><About /></>} />
          <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
          <Route path="/privacy-policy" element={<><ScrollToTop /><PrivacyPolicy /></>} />
          <Route path="/terms-of-service" element={<><ScrollToTop /><TermsOfService /></>} />
          <Route path="/aml-policy" element={<><ScrollToTop /><AMLPolicy /></>} />
          <Route path="/data-protection" element={<><ScrollToTop /><DataProtection /></>} />
          <Route path="/cookie-policy" element={<><ScrollToTop /><CookiePolicy /></>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;