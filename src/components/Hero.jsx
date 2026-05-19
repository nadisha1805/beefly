import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-600 bg-brand-50 mb-6 border border-brand-100">
          Updated for 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Best Domain & Hosting <br className="hidden md:block" />
          <span className="text-brand-600">Providers Compared</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10">
          Beefly tests and reviews the top domain registrars and web hosting companies so you can build your online presence with confidence.
        </p>
        <div className="flex justify-center gap-4">
          <button className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 bg-brand-600 text-white hover:bg-brand-700 shadow-sm h-12 px-6 text-lg">
            <a href="#compare-providers">Compare Now</a>
          </button>
          <button className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm h-12 px-6 text-lg">
            <a href="/about">How We Review</a>
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
};

export default Hero;
