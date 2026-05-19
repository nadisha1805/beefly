import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Small delay to allow the slide-up animation to trigger after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <div className={`
        fixed bottom-0 right-0 left-0 z-50 p-4 md:p-6 
        transition-all duration-500 ease-in-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:flex md:items-center md:justify-between gap-6">
          
          <div className="flex items-start gap-4 mb-6 md:mb-0">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center flex-shrink-0 rounded-full bg-brand-50 text-brand-600">
              <Cookie className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">We value your privacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                We use cookies to improve site performance, analyze traffic, and support affiliate referrals. You can accept all cookies or decline non-essential ones.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button 
              onClick={() => setIsDismissed(true)}
              className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 border-2 border-brand-600 text-brand-600 hover:bg-brand-50 h-10 px-4 py-2 whitespace-nowrap"
            >
              Decline
            </button>
            <button 
              onClick={() => setIsDismissed(true)}
              className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 bg-brand-600 text-white hover:bg-brand-700 shadow-sm h-10 px-4 py-2 whitespace-nowrap"
            >
              Accept Cookies
            </button>
            <a className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center justify-center sm:justify-start px-2" href="/cookies-policy">
              Know More
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
