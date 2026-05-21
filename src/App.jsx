import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

// Pages
import Home from './pages/Home';
import DomainsPage from './pages/DomainsPage';
import Hosting from './pages/Hosting';
import VpsPage from './pages/VpsPage';
import ReviewsPage from './pages/ReviewsPage';
import ResourcesPage from './pages/ResourcesPage';
import TopPickPage from './pages/TopPickPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import DisclosurePage from './pages/DisclosurePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/domains" element={<DomainsPage />} />

        <Route path="/hosting" element={<Hosting />} />

        <Route path="/vps" element={<VpsPage />} />

        <Route path="/reviews" element={<ReviewsPage />} />

        <Route path="/resources" element={<ResourcesPage />} />

        <Route path="/top-picks" element={<TopPickPage />} />

        <Route path="/blog" element={<BlogPage />} />

        <Route path="/blog/:id" element={<BlogDetailsPage />} />

        <Route path="/disclosure" element={<DisclosurePage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/cookies-policy" element={<CookiesPolicy />} />

        <Route path="/about" element={<AboutPage />} />
        
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/terms" element={<TermsPage />} />

      </Routes>

      <Footer />

      <CookieBanner />

    </div>
  );
}

export default App;