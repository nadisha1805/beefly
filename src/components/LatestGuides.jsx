import React from 'react';

const LatestGuides = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Guides & Resources</h2>
          <p className="mt-4 text-lg text-gray-600">Expert advice to help you build, grow, and manage your online presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-brand-50 text-brand-700">Hosting</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">How to Choose the Best Hosting Plan for Your First Website</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">Professional guide on evaluating storage, bandwidth, and support requirements for beginners looking to launch their first website.</p>
              <div className="mt-auto pt-4 flex items-center">
                <a className="text-brand-600 font-semibold hover:text-brand-700 hover:underline text-sm inline-flex items-center" href="/blog/1">Read More →</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-brand-50 text-brand-700">Domains</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">10 Tips for Finding the Perfect Domain Name</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">Struggling to find an available name? Here are our top 10 actionable strategies to secure a memorable, brandable domain name.</p>
              <div className="mt-auto pt-4 flex items-center">
                <a className="text-brand-600 font-semibold hover:text-brand-700 hover:underline text-sm inline-flex items-center" href="/blog/2">Read More →</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-brand-50 text-brand-700">Security</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Why SSL Certificates are Non-Negotiable in 2026</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">Learn why browsers flag non-HTTPS sites and how getting a free SSL certificate can boost your SEO and customer trust.</p>
              <div className="mt-auto pt-4 flex items-center">
                <a className="text-brand-600 font-semibold hover:text-brand-700 hover:underline text-sm inline-flex items-center" href="/blog/3">Read More →</a>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center">
          <button className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 border-2 border-brand-600 text-brand-600 hover:bg-brand-50 h-12 px-6 text-lg">
            <a href="/blog">View All Guides</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestGuides;
