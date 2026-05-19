import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="py-24 bg-white min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-600 bg-brand-50 mb-6 border border-brand-100">
        Coming Soon
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
        {title}
      </h1>
      <p className="max-w-2xl text-xl text-gray-500 mb-10">
        We are currently working on this page. Check back soon for detailed reviews, comparisons, and expert guides!
      </p>
    </div>
  );
};

export default PlaceholderPage;
