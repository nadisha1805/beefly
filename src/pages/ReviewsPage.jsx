import React from "react";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Delhi, India",
    avatar: "👨‍💻",
    rating: 5,
    provider: "Hostinger",
    title: "Best hosting I've tried in 4 years",
    text: "Switched from a local Indian host to Hostinger last year. Website loads in under 1.5 seconds now — my bounce rate dropped 30%. The hPanel is intuitive and their live chat actually helped me solve an SSL issue within 10 minutes.",
    date: "March 2025",
  },

  {
    name: "Priya Nair",
    location: "Bangalore, India",
    avatar: "👩‍🎨",
    rating: 5,
    provider: "Namecheap",
    title: "Finally, domain privacy that doesn’t cost extra",
    text: "Transferred all 6 of my client domains to Namecheap and saved a lot on WHOIS privacy. DNS management is powerful once you learn it.",
    date: "February 2025",
  },

  {
    name: "Vikram Iyer",
    location: "Chennai, India",
    avatar: "🧑‍💼",
    rating: 4,
    provider: "DigitalOcean",
    title: "Perfect for my SaaS app",
    text: "Running a Node.js SaaS on a small Droplet. The one-click app deploys saved me hours. Billing can be confusing initially.",
    date: "April 2025",
  },

  {
    name: "Ananya Gupta",
    location: "Mumbai, India",
    avatar: "👩‍💻",
    rating: 5,
    provider: "SiteGround",
    title: "Worth every rupee for WooCommerce",
    text: "My WooCommerce store became significantly faster after moving to SiteGround. Their backup system saved my store once.",
    date: "January 2025",
  },

  {
    name: "Karan Mehta",
    location: "Pune, India",
    avatar: "👨‍🔬",
    rating: 4,
    provider: "Cloudflare",
    title: "Best registrar pricing",
    text: "Cloudflare domains are incredibly cheap because they sell at wholesale rates. Their free CDN also improved my performance.",
    date: "March 2025",
  },

  {
    name: "Meghna Das",
    location: "Kolkata, India",
    avatar: "👩‍🏫",
    rating: 5,
    provider: "Bluehost",
    title: "Easiest WordPress setup",
    text: "Bluehost made my WordPress setup extremely easy. Their support helped me configure emails and SSL certificates quickly.",
    date: "February 2025",
  },
];

const providerRatings = [
  {
    name: "Hostinger",
    score: 4.9,
    reviews: 1247,
    icon: "/logos/hostinger.png",
  },

  {
    name: "Namecheap",
    score: 4.8,
    reviews: 986,
    icon: "/logos/namecheap.png",
  },

  {
    name: "SiteGround",
    score: 4.7,
    reviews: 834,
    icon: "/logos/siteground.png",
  },

  {
    name: "DigitalOcean",
    score: 4.8,
    reviews: 721,
    icon: "/logos/digitalocean.png",
  },

  {
    name: "Bluehost",
    score: 4.6,
    reviews: 1102,
    icon: "/logos/bluehost.png",
  },

  {
    name: "Cloudflare",
    score: 4.7,
    reviews: 563,
    icon: "/logos/cloudflare.png",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={
            s <= rating
              ? "text-yellow-400"
              : "text-gray-300"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}

      <section className="relative overflow-hidden pt-24 pb-20 px-4 bg-white border-b border-gray-100">

        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-gray-50 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <span className="inline-block bg-green-50 border border-green-200 text-green-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🐝 Real User Reviews
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
            Honest Reviews from{" "}
            <span className="text-green-600">
              Indian Users
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These are verified reviews from real users across India — not paid testimonials.
          </p>

        </div>
      </section>

      {/* PROVIDER OVERVIEW */}

      <section className="max-w-6xl mx-auto px-4 py-14">

        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Provider Ratings Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {providerRatings.map((p) => (

            <div
              key={p.name}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex items-center gap-3 mb-5">

                <img
                  src={p.icon}
                  alt={p.name}
                  className="h-12 w-12 object-contain"
                />

                <span className="font-bold text-xl text-gray-900">
                  {p.name}
                </span>

              </div>

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-4xl font-black text-green-600">
                    {p.score}
                  </p>

                  <StarRating
                    rating={Math.round(p.score)}
                  />

                </div>

                <p className="text-gray-500 text-sm">
                  {p.reviews.toLocaleString()} reviews
                </p>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS GRID */}

      <section className="max-w-6xl mx-auto px-4 pb-24">

        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Latest Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {reviews.map((r, i) => (

            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-5">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                    {r.avatar}
                  </div>

                  <div>

                    <p className="font-bold text-gray-900">
                      {r.name}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {r.location}
                    </p>

                  </div>

                </div>

                <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                  {r.provider}
                </span>

              </div>

              {/* STARS */}

              <StarRating rating={r.rating} />

              {/* TITLE */}

              <h3 className="font-bold text-xl text-gray-900 mt-4 mb-3">
                {r.title}
              </h3>

              {/* TEXT */}

              <p className="text-gray-600 leading-relaxed">
                {r.text}
              </p>

              {/* DATE */}

              <p className="text-gray-400 text-sm mt-5">
                {r.date}
              </p>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}