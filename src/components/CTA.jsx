import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-brand-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to start your website?</h2>
        <p className="text-xl text-brand-100 mb-10">Choose a provider that fits your needs and budget. We've done the research so you don't have to.</p>
        <button className="inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 bg-white border border-gray-200 hover:bg-gray-50 shadow-sm h-12 px-6 text-lg text-brand-700 font-bold">
          See All Recommendations
        </button>
      </div>
    </section>
  );
};

export default CTA;
