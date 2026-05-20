import { useState } from "react";

const providers = [
  {
    name: "Namecheap",
    logo: "/logos/namecheap.png",
    rating: 4.8,
    badge: "Best Overall",
    price: "₹89/yr",
    pros: [
      "Free WhoisGuard privacy",
      "Cheap .com renewals",
      "Easy DNS management",
      "Free email included",
    ],
    cons: [
      "Support can be slow",
      "Upsells at checkout",
    ],
    link: "#",
    color: "from-green-500 to-emerald-600",
  },

  {
    name: "Cloudflare",
    logo: "/logos/cloudflare.png",
    rating: 4.7,
    badge: "Best for Developers",
    price: "₹750/yr",
    pros: [
      "At-cost pricing",
      "Free WHOIS privacy",
      "Built-in DDoS protection",
      "Fast DNS globally",
    ],
    cons: [
      "Limited TLD selection",
      "No ICANN reseller",
    ],
    link: "#",
    color: "from-emerald-500 to-green-600",
  },

  {
    name: "GoDaddy",
    logo: "/logos/godaddy.png",
    rating: 4.2,
    badge: "Most Popular",
    price: "₹99/yr",
    pros: [
      "Huge TLD selection",
      "Easy dashboard",
      "24/7 support",
      "Bundle deals",
    ],
    cons: [
      "Expensive renewals",
      "Too many upsells",
      "Privacy costs extra",
    ],
    link: "#",
    color: "from-green-600 to-emerald-700",
  },
];

const tlds = [
  {
    ext: ".com",
    namecheap: "₹750",
    cloudflare: "₹830",
    godaddy: "₹99*",
  },

  {
    ext: ".in",
    namecheap: "₹380",
    cloudflare: "N/A",
    godaddy: "₹99*",
  },

  {
    ext: ".net",
    namecheap: "₹1,050",
    cloudflare: "₹1,100",
    godaddy: "₹599*",
  },

  {
    ext: ".org",
    namecheap: "₹1,100",
    cloudflare: "₹980",
    godaddy: "₹699*",
  },

  {
    ext: ".io",
    namecheap: "₹3,800",
    cloudflare: "₹4,000",
    godaddy: "₹2,999",
  },

  {
    ext: ".co",
    namecheap: "₹1,800",
    cloudflare: "₹1,950",
    godaddy: "₹999*",
  },
];

const faqs = [
  {
    q: "What is domain privacy (WHOIS protection)?",
    a: "Domain privacy hides your personal information from public WHOIS lookups. Without it, spammers can find your details. Namecheap and Cloudflare include this free.",
  },

  {
    q: "Should I buy a .com or .in domain?",
    a: "For global businesses use .com. For India-focused brands and local businesses, .in works great.",
  },

  {
    q: "Can I transfer my domain?",
    a: "Yes. Domains can be transferred between registrars after 60 days of registration.",
  },

  {
    q: "What’s the difference between a domain and hosting?",
    a: "A domain is your website address. Hosting is the server where your website files live.",
  },
];

export default function DomainsPage() {

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}

      <section className="relative overflow-hidden pt-24 pb-16 px-4 bg-white border-b border-gray-100">

        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-gray-50 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <span className="inline-block bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🐝 Domain Registrars Compared
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
            Find the{" "}
            <span className="text-brand-600">
              Best Domain
            </span>{" "}
            Registrar for India
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We compared pricing, privacy, DNS speed, and support across every major registrar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">

            {[
              "✅ Free WHOIS privacy compared",
              "✅ Renewal pricing included",
              "✅ No sponsored rankings",
            ].map((t) => (

              <span key={t}>
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* PROVIDERS */}

      <section className="max-w-5xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Top Domain Registrars in 2025
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {providers.map((p) => (

            <div
              key={p.name}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >

              <div className={`bg-gradient-to-r ${p.color} p-5 flex items-center justify-between`}>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                    {p.badge}
                  </p>

                  <p className="text-2xl font-black text-white">
                    {p.name}
                  </p>

                </div>

                <img
                    src={p.logo}
                    alt={p.name}
                    className="h-12 object-contain"
                 />

              </div>

              <div className="p-5 flex flex-col flex-1">

                {/* RATING */}

                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-1">

                    {"★★★★★"
                      .split("")
                      .slice(0, Math.round(p.rating))
                      .map((s, i) => (

                        <span
                          key={i}
                          className="text-yellow-400 text-sm"
                        >
                          ★
                        </span>
                      ))}

                    <span className="text-gray-500 text-sm ml-1">
                      {p.rating}/5
                    </span>

                  </div>

                  <span className="text-brand-600 font-bold">
                    from {p.price}
                  </span>

                </div>

                {/* PROS */}

                <div className="space-y-2 mb-4">

                  {p.pros.map((pro) => (

                    <div
                      key={pro}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >

                      <span className="text-green-500 mt-0.5 shrink-0">
                        ✓
                      </span>

                      {pro}

                    </div>
                  ))}

                  {/* CONS */}

                  {p.cons.map((con) => (

                    <div
                      key={con}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >

                      <span className="text-red-400 mt-0.5 shrink-0">
                        ✗
                      </span>

                      {con}

                    </div>
                  ))}

                </div>

                {/* BUTTON */}

                <a
                  href={p.link}
                  className="mt-auto block text-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
                >
                  Visit {p.name} →
                </a>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* TABLE */}

      <section className="max-w-5xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
          Domain Price Comparison
        </h2>

        <p className="text-gray-500 text-center mb-8 text-sm">
          First-year registration prices.
        </p>

        <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-sm">

          <table className="w-full text-sm">

            <thead>

              <tr className="bg-gray-50 border-b border-gray-100">

                <th className="text-left px-6 py-4 font-bold text-gray-600">
                  Extension
                </th>

                <th className="text-center px-6 py-4 font-bold text-brand-600">
                  Namecheap
                </th>

                <th className="text-center px-6 py-4 font-bold text-brand-600">
                  Cloudflare
                </th>

                <th className="text-center px-6 py-4 font-bold text-brand-600">
                  GoDaddy
                </th>

              </tr>

            </thead>

            <tbody>

              {tlds.map((row, i) => (

                <tr
                  key={row.ext}
                  className={`border-b border-gray-100 ${
                    i % 2 === 0 ? "bg-gray-50/50" : ""
                  }`}
                >

                  <td className="px-6 py-4 font-mono font-bold text-brand-600">
                    {row.ext}
                  </td>

                  <td className="px-6 py-4 text-center text-gray-700">
                    {row.namecheap}
                  </td>

                  <td className="px-6 py-4 text-center text-gray-700">
                    {row.cloudflare}
                  </td>

                  <td className="px-6 py-4 text-center text-gray-700">
                    {row.godaddy}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </section>

      {/* FAQ */}

      <section className="max-w-3xl mx-auto px-4 py-12 pb-24">

        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Domain FAQs
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, i) => (

            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm"
            >

              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setOpenFaq(openFaq === i ? null : i)
                }
              >

                <span className="font-semibold text-gray-900 pr-4">
                  {faq.q}
                </span>

                <span
                  className={`text-brand-600 text-2xl shrink-0 transition-transform ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>

              </button>

              {openFaq === i && (

                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}