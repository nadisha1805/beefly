import React from "react";
import { Trophy } from "lucide-react";

function TopPickPage() {
  return (
    <section className="bg-gray-50 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-[#0f172a]">
            Top VPS & Hosting Picks
          </h1>

          <p className="text-gray-600 text-xl mt-4">
            Compare the best hosting providers for speed,
            security and performance.
          </p>
        </div>

        {[
          {
            name: "Cloudways",
            logo: "/logos/cloudways.png",
            price: "$11/mo",
          },

          {
            name: "A2 Hosting",
            logo: "/logos/a2.png",
            price: "$2.99/mo",
          },

        ].map((vps, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 mb-10 border-l-4 border-l-green-500"
          >
            <div className="grid md:grid-cols-3 gap-10 items-center">

              {/* LEFT */}
              <div className="text-center">

                {/* LOGO */}
                <div className="h-24 flex items-center justify-center">

                  <img
                    src={vps.logo}
                    alt={vps.name}
                    className="h-16 object-contain"
                  />

                </div>

                {/* RATING */}
                <div className="inline-block bg-green-50 text-green-700 px-4 py-1 rounded-full text-lg font-semibold mt-6">
                  4.8 / 5
                </div>

                {/* PRICE */}
                <div className="text-4xl font-extrabold text-[#0f172a] mt-6">
                  {vps.price}
                </div>

              </div>

              {/* RIGHT */}
              <div className="md:col-span-2">

                <h3 className="text-4xl font-extrabold text-[#0f172a] flex items-center gap-3 mb-6">

                  <Trophy className="text-yellow-500 w-8 h-8" />

                  {vps.name}

                </h3>

                <p className="text-gray-600 text-2xl leading-relaxed mb-8">
                  Powerful VPS infrastructure with scalability,
                  security, and developer-friendly features.
                </p>

                <div className="grid grid-cols-2 gap-4 text-xl text-gray-600 mb-8">

                  <div>✓ Dedicated Firewalls</div>
                  <div>✓ SSD Servers</div>
                  <div>✓ Root Access</div>
                  <div>✓ Pay As You Go</div>

                </div>

                <button className="bg-green-600 hover:bg-green-700 transition text-white text-xl font-semibold px-8 py-4 rounded-2xl">
                  Know More Details
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default TopPickPage;