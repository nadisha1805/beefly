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
import DisclosurePage from './pages/DisclosurePage';

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

        <Route path="/disclosure" element={<DisclosurePage />} />

      </Routes>

      <Footer />

      <CookieBanner />

    </div>
  );
}

export default App;