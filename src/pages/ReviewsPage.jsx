import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Delhi, India",
    avatar: "RS",
    rating: 5,
    provider: "Hostinger",
    title: "Best hosting I've tried in 4 years",
    text: "Switched from a local Indian host and the speed difference is incredible. Support team is responsive and uptime has been excellent.",
    date: "March 2025",
  },

  {
    name: "Priya Nair",
    location: "Mumbai, India",
    avatar: "PN",
    rating: 5,
    provider: "Namecheap",
    title: "Perfect for domains and small projects",
    text: "Bought multiple domains and the dashboard is super easy to use. Pricing is transparent and renewals are affordable.",
    date: "February 2025",
  },

  {
    name: "Arjun Mehta",
    location: "Bangalore, India",
    avatar: "AM",
    rating: 4,
    provider: "Cloudflare",
    title: "Amazing performance and security",
    text: "Cloudflare improved my website speed significantly. DNS setup was smooth and DDoS protection works really well.",
    date: "January 2025",
  },

  {
    name: "Rohan Das",
    location: "Mumbai, India",
    avatar: "RD",
    rating: 5,
    provider: "Hostinger",
    title: "Unbeatable value for WordPress",
    text: "Switched my blog to Hostinger and the LiteSpeed caching made a massive difference in loading times. The dashboard is clean and automated backups give me complete peace of mind.",
    date: "March 2026",
},

{
    name: "Priya Sharma",
    location: "Delhi, India",
    avatar: "PS",
    rating: 4,
    provider: "Spaceship",
    title: "Incredibly cheap domain renewals",
    text: "I was tired of hidden fees at renewal. Spaceship offers transparent pricing and free WHOIS privacy. The interface takes a little getting used to, but the savings are worth it.",
    date: "February 2026",
},

{
    name: "Vikram Malhotra",
    location: "Hyderabad, India",
    avatar: "VM",
    rating: 5,
    provider: "DigitalOcean",
    title: "Perfect VPS infrastructure for developers",
    text: "Deploying a budget Droplet was incredibly seamless. The performance is highly predictable, the API is robust, and the documentation made configuring my production node effortless.",
    date: "April 2026",
}
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
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={16}
          className={
            s <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900">
            Latest Reviews
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real user experiences and expert ratings for top hosting and domain providers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
            >
              
              <div className="flex items-center justify-between mb-6">
                
                <div className="flex items-center gap-4">
                  
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {review.avatar}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {review.location}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {review.provider}
                </span>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {review.title}
              </h4>

              <StarRating rating={review.rating} />

              <p className="mt-5 text-gray-600 leading-relaxed">
                {review.text}
              </p>

              <p className="mt-6 text-sm text-gray-400">
                {review.date}
              </p>
            </div>
          ))}
        </div>

        {/* Provider Ratings */}
        <div className="mt-24">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Provider Ratings
            </h2>

            <p className="mt-4 text-gray-600">
              Trusted ratings based on performance, support, and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providerRatings.map((provider, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                
                <div className="flex items-center justify-between mb-6">
                  
                  <img
                    src={provider.icon}
                    alt={provider.name}
                    className="h-10 object-contain"
                  />

                  <span className="text-2xl font-bold text-gray-900">
                    {provider.score}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Star className="fill-yellow-400 text-yellow-400" size={18} />
                  
                  <p className="font-medium text-gray-700">
                    Excellent Rating
                  </p>
                </div>

                <p className="text-gray-500 mb-6">
                  Based on {provider.reviews}+ verified customer reviews.
                </p>

                <a
                  href={`https://${provider.name.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  Visit {provider.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}