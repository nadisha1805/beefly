import React from "react";
import {
  Globe,
  Server,
  Cloud,
  Trophy,
  Info,
} from "lucide-react";

function TopPickPage() {
  return (
    <div className="bg-[#f5f7f9] min-h-screen py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* DOMAIN SECTION */}
        <div className="flex items-start gap-5 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
            <Globe className="w-8 h-8 text-green-600" />
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-[#0f172a]">
              Top Domain Registrars
            </h2>

            <p className="text-2xl text-gray-500 mt-2">
              Best places to buy and manage your domain names
            </p>
          </div>
        </div>

        {[
          {
            name: "Namecheap",
            logo: "/logos/namecheap.png",
            price: "$9.98/yr",
            title: "Best Overall Domain Registrar",
            desc: "Namecheap is our top choice for domain registration with transparent pricing and free privacy protection.",
            features: [
              "Free Domain Privacy",
              "24/7 Chat Support",
              "Free DNS Security",
              "Easy Management",
            ],
            website: "https://www.namecheap.com",
          },

          {
            name: "Porkbun",
            logo: "/logos/porkbun.png",
            price: "$9.73/yr",
            title: "Best for Domain Investors",
            desc: "Porkbun offers excellent pricing and simple domain management for large portfolios.",
            features: [
              "Free WHOIS Privacy",
              "Free SSL",
              "URL Forwarding",
              "Email Forwarding",
            ],
            website: "https://porkbun.com",
          },

          {
            name: "GoDaddy",
            logo: "/logos/godaddy.png",
            price: "$11.99/yr",
            title: "Best for Large Marketplace",
            desc: "GoDaddy provides huge domain selection and strong support for beginners.",
            features: [
              "Huge Marketplace",
              "Bundle Deals",
              "24/7 Phone Support",
              "Website Builder",
            ],
            website: "https://www.godaddy.com",
          },

          {
            name: "Hover",
            logo: "/logos/hover.png",
            price: "$14.99/yr",
            title: "Best No-Nonsense Registrar",
            desc: "Hover focuses on clean and simple domain management with no upsells.",
            features: [
              "Free Privacy",
              "Great Support",
              "No Upsells",
              "Bulk Tools",
            ],
            website: "https://www.hover.com",
          },

        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 mb-12 border-l-4 border-l-green-500"
          >

            <div className="grid md:grid-cols-3 gap-10 items-center">

              {/* LEFT */}
              <div className="text-center">

                <div className="h-28 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-20 object-contain"
                  />
                </div>

                <div className="inline-block bg-green-50 text-green-700 px-4 py-1 rounded-full text-lg font-semibold mt-6">
                  4.8 / 5
                </div>

                <div className="text-4xl font-extrabold text-[#0f172a] mt-6">
                  {item.price}
                </div>

              </div>

              {/* RIGHT */}
              <div className="md:col-span-2">

                <h3 className="text-4xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6">
                  <Trophy className="text-yellow-500 w-8 h-8" />
                  {item.title}
                </h3>

                <p className="text-gray-600 text-2xl leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="grid grid-cols-2 gap-5 text-xl text-gray-600 mb-10">

                  {item.features.map((feature, i) => (
                    <div key={i}>✓ {feature}</div>
                  ))}

                </div>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition text-white text-xl font-semibold px-8 py-4 rounded-2xl"
                >
                  Know More Details
                  <Info className="w-5 h-5" />
                </a>

              </div>
            </div>
          </div>
        ))}

        {/* HOSTING SECTION */}
        <div className="flex items-start gap-5 mt-24 mb-10">

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
            <Server className="w-8 h-8 text-green-600" />
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-[#0f172a]">
              Top Web Hosting Providers
            </h2>

            <p className="text-2xl text-gray-500 mt-2">
              Best hosting solutions for websites of all sizes
            </p>
          </div>

        </div>

        {[
          {
            name: "Kinsta",
            logo: "/logos/kinsta.png",
            price: "$30/mo",
            title: "Best Premium WordPress Hosting",
            desc: "Kinsta delivers enterprise-grade performance powered by Google Cloud.",
            features: [
              "Google Cloud Platform",
              "Daily Backups",
              "Free CDN",
              "SSH Access",
            ],
            website: "https://kinsta.com",
          },

          {
            name: "Hostinger",
            logo: "/logos/hostinger.png",
            price: "$1.99/mo",
            title: "Best Budget Web Hosting",
            desc: "Hostinger provides excellent value with fast servers and beginner friendly tools.",
            features: [
              "Managed WordPress",
              "Weekly Backups",
              "Free Migration",
              "Unlimited SSL",
            ],
            website: "https://www.hostinger.com",
          },

          {
            name: "Bluehost",
            logo: "/logos/bluehost.png",
            price: "$2.95/mo",
            title: "Best for Beginners",
            desc: "Bluehost is ideal for first websites with simple setup and strong support.",
            features: [
              "Free Domain",
              "1-Click WordPress",
              "Free SSL",
              "24/7 Support",
            ],
            website: "https://www.bluehost.com",
          },

          {
            name: "SiteGround",
            logo: "/logos/siteground.png",
            price: "$3.99/mo",
            title: "Best Support Quality",
            desc: "SiteGround is known for premium customer support and strong security.",
            features: [
              "Daily Backups",
              "Cloudflare CDN",
              "Fast Support",
              "Security Tools",
            ],
            website: "https://www.siteground.com",
          },

        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 mb-12 border-l-4 border-l-green-500"
          >

            <div className="grid md:grid-cols-3 gap-10 items-center">

              <div className="text-center">

                <div className="h-28 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-20 object-contain"
                  />
                </div>

                <div className="inline-block bg-green-50 text-green-700 px-4 py-1 rounded-full text-lg font-semibold mt-6">
                  4.8 / 5
                </div>

                <div className="text-4xl font-extrabold text-[#0f172a] mt-6">
                  {item.price}
                </div>

              </div>

              <div className="md:col-span-2">

                <h3 className="text-4xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6">
                  <Trophy className="text-yellow-500 w-8 h-8" />
                  {item.title}
                </h3>

                <p className="text-gray-600 text-2xl leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="grid grid-cols-2 gap-5 text-xl text-gray-600 mb-10">

                  {item.features.map((feature, i) => (
                    <div key={i}>✓ {feature}</div>
                  ))}

                </div>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition text-white text-xl font-semibold px-8 py-4 rounded-2xl"
                >
                  Know More Details
                  <Info className="w-5 h-5" />
                </a>

              </div>
            </div>
          </div>
        ))}

        {/* VPS SECTION */}
        <div className="flex items-start gap-5 mt-24 mb-10">

          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
            <Cloud className="w-8 h-8 text-purple-600" />
          </div>

          <div>
            <h2 className="text-5xl font-extrabold text-[#0f172a]">
              Top VPS & Cloud Hosting
            </h2>

            <p className="text-2xl text-gray-500 mt-2">
              Scalable solutions for growing businesses and developers
            </p>
          </div>

        </div>

        {[
          {
            name: "Cloudways",
            logo: "/logos/cloudways.png",
            price: "$11/mo",
            title: "Best Managed Cloud Hosting",
            desc: "Cloudways simplifies cloud hosting with managed infrastructure.",
            features: [
              "Choice of Providers",
              "Free Migration",
              "Pay As You Go",
              "Dedicated Firewalls",
            ],
            website: "https://www.cloudways.com",
          },

          {
            name: "A2 Hosting",
            logo: "/logos/a2.png",
            price: "$2.99/mo",
            title: "Best for Speed",
            desc: "A2 Hosting offers turbo servers and optimized VPS performance.",
            features: [
              "Turbo Servers",
              "Free Migration",
              "Money Back Guarantee",
              "99.9% Uptime",
            ],
            website: "https://www.a2hosting.com",
          },

        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 mb-12 border-l-4 border-l-green-500"
          >

            <div className="grid md:grid-cols-3 gap-10 items-center">

              <div className="text-center">

                <div className="h-28 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-20 object-contain"
                  />
                </div>

                <div className="inline-block bg-green-50 text-green-700 px-4 py-1 rounded-full text-lg font-semibold mt-6">
                  4.9 / 5
                </div>

                <div className="text-4xl font-extrabold text-[#0f172a] mt-6">
                  {item.price}
                </div>

              </div>

              <div className="md:col-span-2">

                <h3 className="text-4xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6">
                  <Trophy className="text-yellow-500 w-8 h-8" />
                  {item.title}
                </h3>

                <p className="text-gray-600 text-2xl leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="grid grid-cols-2 gap-5 text-xl text-gray-600 mb-10">

                  {item.features.map((feature, i) => (
                    <div key={i}>✓ {feature}</div>
                  ))}

                </div>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition text-white text-xl font-semibold px-8 py-4 rounded-2xl"
                >
                  Know More Details
                  <Info className="w-5 h-5" />
                </a>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default TopPickPage;