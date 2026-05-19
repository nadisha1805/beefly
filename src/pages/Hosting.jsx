import React from 'react';
import { Star, Check, Info } from 'lucide-react';

const providers = [
  {
    name: 'IONOS',
    logo: '/logos/ionos.png',
    price: '$1/yr',
    rating: '4.2',
    category: 'Domains',
    description: 'Very cheap first-year offers for domains and hosting.',
    features: [
      'Personal Consultant',
      '2 GB Email',
      '1 Wildcard SSL',
      '24/7 Support',
    ],
    best: true,
  },

  {
    name: 'Bluehost',
    logo: '/logos/bluehost.png',
    price: '$2.95/mo',
    rating: '4.7',
    category: 'Hosting',
    description:
      'Best overall hosting for beginners. Recommended by WordPress.org.',
    features: [
      'Free Domain for 1st Year',
      '1-Click WordPress',
      'Free SSL',
      '24/7 Support',
    ],
  },

  {
    name: 'Hostinger',
    logo: '/logos/hostinger.png',
    price: '$1.99/mo',
    rating: '4.8',
    category: 'Hosting',
    description:
      'Unbeatable price to performance ratio with custom hPanel.',
    features: [
      'Managed WordPress',
      'Weekly Backups',
      'Free Migration',
      'Unlimited SSL',
    ],
  },

  {
    name: 'SiteGround',
    logo: '/logos/siteground.png',
    price: '$3.99/mo',
    rating: '4.9',
    category: 'Hosting',
    description:
      'Premium managed WordPress hosting with Google Cloud infrastructure.',
    features: [
      'Google Cloud',
      'SuperCacher',
      'Daily Backups',
      'Top-tier Support',
    ],
  },

  {
    name: 'A2 Hosting',
    logo: '/logos/a2.png',
    price: '$2.99/mo',
    rating: '4.5',
    category: 'Hosting',
    description:
      'Known for their high-speed Turbo Servers and developer-friendly features.',
    features: [
      'Turbo Servers (20x faster)',
      'Free Migration',
      'Anytime Money Back',
      '99.9% Uptime',
    ],
  },

  {
    name: 'DreamHost',
    logo: '/logos/dreamhost.png',
    price: '$2.59/mo',
    rating: '4.6',
    category: 'Hosting',
    description:
      'Reliable, independent hosting with a 97-day money-back guarantee.',
    features: [
      'Address Monthly Billing',
      'Unlimited Traffic',
      'Free Domain',
      'Automated Backups',
    ],
  },

  {
    name: 'InMotion',
    logo: '/logos/inmotion.png',
    price: '$2.29/mo',
    rating: '4.4',
    category: 'Hosting',
    description:
      'US-based support and great VPS options for growing businesses.',
    features: [
      'NVMe SSDs',
      'Free SSL',
      'Unlimited Bandwidth',
      'Security Suite',
    ],
  },

  {
    name: 'GreenGeeks',
    logo: '/logos/GreenGeeks.png',
    price: '$2.95/mo',
    rating: '4.7',
    category: 'Hosting',
    description:
      'Eco-friendly hosting that matches 300% of energy use with renewables.',
    features: [
      '300% Green Energy',
      'Free CDN',
      'Free Nightly Backup',
      'LSCache',
    ],
  },

  {
    name: 'Cloudways',
    logo: '/logos/cloudways.png',
    price: '$11/mo',
    rating: '4.9',
    category: 'VPS/Cloud',
    description:
      'Managed cloud hosting platform using DigitalOcean, AWS, and Google Cloud.',
    features: [
      'Choice of 3 Providers',
      'Free Migration',
      'Pay As You Go',
      'Dedicated Firewalls',
    ],
  },

  {
    name: 'Kinsta',
    logo: '/logos/kinsta.png',
    price: '$30/mo',
    rating: '4.9',
    category: 'Hosting',
    description:
      'Premium managed WordPress hosting powered by Google Cloud Platform with enterprise-grade performance.',
    features: [
      'Google Cloud Platform C3D',
      'Automatic Daily Backups',
      'Free Cloudflare CDN',
      'Free SSL & SSH Access',
    ],
  },
];

const HostingPage = () => {
  return (
    <div className="bg-[#f5f7f9] min-h-screen">

      {/* HERO */}
      <section className="py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold text-[#0f172a] mb-6">
            All Web Hosting Providers
          </h1>

          <p className="text-2xl text-gray-500">
            Complete list of reliable web hosting companies.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-5xl font-bold text-[#0f172a] mb-10">
          Quick Comparison
        </h2>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm">

          <table className="w-full">

            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left p-8 text-gray-500">FEATURE</th>

                {providers.slice(0, 3).map((provider) => (
                  <th key={provider.name} className="p-8 text-center">

                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className="h-14 mx-auto mb-4 object-contain"
                    />

                    <div className="font-bold text-gray-700 uppercase tracking-wide">
                      {provider.name}
                    </div>

                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-gray-100">
                <td className="p-8 font-semibold">Starting Price</td>

                {providers.slice(0, 3).map((provider) => (
                  <td className="p-8 text-center font-bold text-2xl">
                    {provider.price}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="p-8 font-semibold">Rating</td>

                {providers.slice(0, 3).map((provider) => (
                  <td className="p-8 text-center">
                    <span className="font-bold text-2xl">
                      {provider.rating}
                    </span>
                    <span className="text-gray-400"> / 5</span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="p-8 font-semibold">Best For</td>

                {providers.slice(0, 3).map((provider) => (
                  <td className="p-8 text-center text-gray-600">
                    {provider.category}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="p-8 font-semibold">Money Back Guarantee</td>

                <td className="p-8 text-center text-gray-600">30 Days</td>
                <td className="p-8 text-center text-gray-600">30 Days</td>
                <td className="p-8 text-center text-gray-600">30 Days</td>
              </tr>

              <tr>
                <td className="p-8 font-semibold">Link</td>

                {providers.slice(0, 3).map((provider) => (
                  <td className="p-8 text-center">
                    <button className="border-2 border-green-600 text-green-600 font-bold px-6 py-3 rounded-2xl hover:bg-green-600 hover:text-white transition">
                      Details
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>

        </div>
      </section>

      {/* DETAILED REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-5xl font-bold text-[#0f172a] mb-12">
          Detailed Reviews
        </h2>

        <div className="space-y-10">

          {providers.map((provider, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl border shadow-sm overflow-hidden relative ${
                provider.best
                  ? 'border-green-300'
                  : 'border-gray-200'
              }`}
            >

              {provider.best && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-2 rounded-bl-2xl font-bold">
                  Best Choice
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px]">

                {/* LEFT */}
                <div className="p-10 border-r border-gray-100 flex flex-col items-center justify-center">

                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="h-16 object-contain mb-10"
                  />

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}

                    <Star className="w-6 h-6 text-gray-300" />
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="bg-green-50 text-green-700 px-4 py-1 rounded-full font-semibold">
                      {provider.category}
                    </span>

                    <span className="text-3xl font-bold">
                      {provider.rating}
                    </span>
                  </div>

                </div>

                {/* CENTER */}
                <div className="p-10 border-r border-gray-100">

                  <h3 className="text-5xl font-extrabold text-[#0f172a] mb-5">
                    {provider.name}
                  </h3>

                  <p className="text-gray-600 text-2xl mb-8 leading-relaxed">
                    {provider.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-y-5">

                    {provider.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-xl text-gray-700"
                      >
                        <Check className="w-6 h-6 text-green-500" />

                        {feature}
                      </div>
                    ))}

                  </div>

                </div>

                {/* RIGHT */}
                <div className="p-10 flex flex-col justify-center items-center">

                  <div className="text-gray-500 text-2xl mb-2">
                    Starting at
                  </div>

                  <div className="mb-8">
                    <span className="text-6xl font-extrabold text-[#0f172a]">
                      {provider.price.split('/')[0]}
                    </span>

                    <span className="text-3xl text-gray-500">
                      /{provider.price.split('/')[1]}
                    </span>
                  </div>

                  <button className="bg-green-600 hover:bg-green-700 transition text-white font-bold text-2xl px-10 py-5 rounded-2xl w-full flex items-center justify-center gap-3">
                    Know More Details
                    <Info className="w-5 h-5" />
                  </button>

                  <p className="text-gray-400 mt-5 text-lg">
                    30-day money-back guarantee
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
};

export default HostingPage;