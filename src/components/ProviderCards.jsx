import React from 'react';
import { Star, Check, Info } from 'lucide-react';

import namecheapLogo from "/logos/namecheap.png";
import bluehostLogo from "/logos/bluehost.png";
import sitegroundLogo from "/logos/siteground.png";

const ProviderCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900">
            Detailed Provider Reviews
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            In-depth look at features, pricing, and performance.
          </p>

        </div>

        <div className="space-y-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col md:flex-row p-6 gap-6 relative border-green-200 ring-4 ring-green-50">

            {/* BEST CHOICE */}
            <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Best Choice
            </div>

            {/* LEFT */}
            <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">

              {/* LOGO */}
              <div className="h-16 w-32 flex items-center justify-center mb-4">

                <img
                  src={namecheapLogo}
                  alt="Namecheap"
                  className="h-14 object-contain"
                />

              </div>

              {/* RATING */}
              <div className="flex items-center space-x-1 mb-2">

                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= 4
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}

                <span className="text-sm font-semibold text-gray-700 ml-2">
                  4.8
                </span>

              </div>

              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700">
                Domains
              </span>

            </div>

            {/* CENTER */}
            <div className="flex-1 flex flex-col justify-center">

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Namecheap
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                The best place to buy cheap domain names with free privacy protection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Free Domain Privacy
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Free DNS Security
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  24/7 Chat Support
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Easy Management
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">

              <div className="text-center mb-4">

                <span className="text-gray-500 text-sm">
                  Starting at
                </span>

                <div className="flex items-baseline justify-center">

                  <span className="text-lg text-gray-900 font-bold">
                    $
                  </span>

                  <span className="text-3xl text-gray-900 font-bold tracking-tight">
                    9.98
                  </span>

                  <span className="text-gray-500 text-sm">
                    /yr
                  </span>

                </div>

              </div>

              <a
                href="https://www.namecheap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700 shadow-sm h-10 px-4 py-2 w-full mb-2"
              >

                Know More Details

                <Info className="ml-2 w-4 h-4" />

              </a>

              <span className="text-xs text-gray-400 text-center block">
                30-day money-back guarantee
              </span>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col md:flex-row p-6 gap-6 relative">

            {/* LEFT */}
            <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">

              <div className="h-16 w-32 flex items-center justify-center mb-4">

                <img
                  src={bluehostLogo}
                  alt="Bluehost"
                  className="h-14 object-contain"
                />

              </div>

              <div className="flex items-center space-x-1 mb-2">

                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= 4
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}

                <span className="text-sm font-semibold text-gray-700 ml-2">
                  4.7
                </span>

              </div>

              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700">
                Hosting
              </span>

            </div>

            {/* CENTER */}
            <div className="flex-1 flex flex-col justify-center">

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bluehost
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Best overall hosting for beginners. Recommended by WordPress.org.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Free Domain for 1st Year
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Free SSL
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  1-Click WordPress
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  24/7 Support
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">

              <div className="text-center mb-4">

                <span className="text-gray-500 text-sm">
                  Starting at
                </span>

                <div className="flex items-baseline justify-center">

                  <span className="text-lg text-gray-900 font-bold">
                    $
                  </span>

                  <span className="text-3xl text-gray-900 font-bold tracking-tight">
                    2.95
                  </span>

                  <span className="text-gray-500 text-sm">
                    /mo
                  </span>

                </div>

              </div>

              <a
                href="https://www.bluehost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700 shadow-sm h-10 px-4 py-2 w-full mb-2"
              >

                Know More Details

                <Info className="ml-2 w-4 h-4" />

              </a>

              <span className="text-xs text-gray-400 text-center block">
                30-day money-back guarantee
              </span>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col md:flex-row p-6 gap-6 relative">

            {/* LEFT */}
            <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">

              <div className="h-16 w-32 flex items-center justify-center mb-4">

                <img
                  src={sitegroundLogo}
                  alt="SiteGround"
                  className="h-14 object-contain"
                />

              </div>

              <div className="flex items-center space-x-1 mb-2">

                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= 5
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}

                <span className="text-sm font-semibold text-gray-700 ml-2">
                  4.9
                </span>

              </div>

              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700">
                Hosting
              </span>

            </div>

            {/* CENTER */}
            <div className="flex-1 flex flex-col justify-center">

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                SiteGround
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Premium managed WordPress hosting with Google Cloud infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Google Cloud
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Daily Backups
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  SuperCacher
                </div>

                <div className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Top-tier Support
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">

              <div className="text-center mb-4">

                <span className="text-gray-500 text-sm">
                  Starting at
                </span>

                <div className="flex items-baseline justify-center">

                  <span className="text-lg text-gray-900 font-bold">
                    $
                  </span>

                  <span className="text-3xl text-gray-900 font-bold tracking-tight">
                    3.99
                  </span>

                  <span className="text-gray-500 text-sm">
                    /mo
                  </span>

                </div>

              </div>

              <a
                href="https://www.siteground.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700 shadow-sm h-10 px-4 py-2 w-full mb-2"
              >

                Know More Details

                <Info className="ml-2 w-4 h-4" />

              </a>

              <span className="text-xs text-gray-400 text-center block">
                30-day money-back guarantee
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProviderCards;