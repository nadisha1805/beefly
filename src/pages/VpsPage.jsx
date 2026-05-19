import React from 'react';
import { Star, Check, Info } from 'lucide-react';

const providers = [
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
    best: true,
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
    name: 'DigitalOcean',
    logo: '/logos/digitalocean.png',
    price: '$4/mo',
    rating: '4.8',
    category: 'Cloud VPS',
    description:
      'Developer-focused cloud infrastructure with scalable droplets.',
    features: [
      'SSD Droplets',
      '99.99% Uptime',
      'Flexible Scaling',
      'API Access',
    ],
  },

  {
    name: 'Vultr',
    logo: '/logos/vultr.png',
    price: '$5/mo',
    rating: '4.7',
    category: 'Cloud VPS',
    description:
      'Affordable high-performance cloud compute with global locations.',
    features: [
      'Worldwide Servers',
      'One Click Apps',
      'Dedicated IP',
      'Fast NVMe',
    ],
  },

  {
    name: 'Linode',
    logo: '/logos/linode.png',
    price: '$5/mo',
    rating: '4.8',
    category: 'Cloud VPS',
    description:
      'Reliable Linux cloud hosting popular among developers.',
    features: [
      'Advanced Networking',
      'Kubernetes',
      'DDoS Protection',
      'Cloud Firewall',
    ],
  },

  {
    name: 'Kamatera',
    logo: '/logos/Kamatera.png',
    price: '$4/mo',
    rating: '4.6',
    category: 'Cloud Hosting',
    description:
      'Enterprise-grade cloud VPS with instant scalability.',
    features: [
      'Instant Scaling',
      '30-Day Trial',
      'Global Datacenters',
      'Custom Servers',
    ],
  },

  {
    name: 'ScalaHosting',
    logo: '/logos/scalahosting.png',
    price: '$9.95/mo',
    rating: '4.7',
    category: 'Managed VPS',
    description:
      'Managed VPS hosting with SPanel and excellent security.',
    features: [
      'Free Migration',
      'SShield Security',
      'Daily Backups',
      'Managed Support',
    ],
  },

  {
    name: 'A2 Hosting',
    logo: '/logos/a2.png',
    price: '$2.99/mo',
    rating: '4.5',
    category: 'VPS Hosting',
    description:
      'Turbo-powered VPS hosting optimized for speed.',
    features: [
      'Turbo Servers',
      'Root Access',
      'Anytime Refund',
      'Free SSL',
    ],
  },
];

const VpsPage = () => {
  return (
    <div className="bg-[#f5f7f9] min-h-screen">

      {/* HERO */}
      <section className="py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-extrabold text-[#0f172a] mb-6">
            VPS & Cloud Hosting
          </h1>

          <p className="text-2xl text-gray-500">
            High-performance servers for growing applications.
          </p>

        </div>
      </section>

      {/* QUICK COMPARISON */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-5xl font-bold text-[#0f172a] mb-10">
          Quick Comparison
        </h2>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm">

          <table className="w-full">

            <thead className="border-b border-gray-200">
              <tr>

                <th className="text-left p-8 text-gray-500">
                  FEATURE
                </th>

                {providers.slice(0, 2).map((provider) => (
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

                {providers.slice(0, 2).map((provider) => (
                  <td className="p-8 text-center font-bold text-2xl">
                    {provider.price}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="p-8 font-semibold">Rating</td>

                {providers.slice(0, 2).map((provider) => (
                  <td className="p-8 text-center">
                    <span className="font-bold text-2xl">
                      {provider.rating}
                    </span>

                    <span className="text-gray-400">
                      {' '} / 5
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="p-8 font-semibold">Best For</td>

                {providers.slice(0, 2).map((provider) => (
                  <td className="p-8 text-center text-gray-600">
                    {provider.category}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="p-8 font-semibold">
                  Money Back Guarantee
                </td>

                <td className="p-8 text-center text-gray-600">
                  30 Days
                </td>

                <td className="p-8 text-center text-gray-600">
                  30 Days
                </td>
              </tr>

              <tr>
                <td className="p-8 font-semibold">Link</td>

                {providers.slice(0, 2).map((provider) => (
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

export default VpsPage;