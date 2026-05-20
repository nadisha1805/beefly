import React, { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem('cookieAccepted');

    if (!acceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl bg-white border border-gray-200 shadow-2xl rounded-3xl p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>

          <h3 className="text-xl font-bold text-[#0f172a] mb-2">
            We value your privacy
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            We use cookies to improve your browsing experience,
            analyze site traffic, and personalize content.
            By continuing to use our website, you agree to our use of cookies.
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() => setShowBanner(false)}
            className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium"
          >
            Decline
          </button>

          <button
            onClick={acceptCookies}
            className="px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition font-medium shadow-sm"
          >
            Accept
          </button>

        </div>

      </div>

    </div>
  );
};

export default CookieBanner;