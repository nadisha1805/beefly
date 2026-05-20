import React from 'react';
import Hero from '../components/Hero';
import ComparisonTable from '../components/ComparisonTable';
import ProviderCards from '../components/ProviderCards';
import LatestGuides from '../components/LatestGuides';
import TrustFeatures from '../components/TrustFeatures';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>

      <Hero />

      {/* COMPARISON SECTION */}
      <section id="comparison">
        <ComparisonTable />
      </section>

      <ProviderCards />

      <LatestGuides />

      <TrustFeatures />

      <CTA />

    </>
  );
};

export default Home;