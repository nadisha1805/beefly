import React from 'react';
import { Clock } from 'lucide-react';

const posts = [
  {
    title: 'Best Domain Registrars in 2026',
    category: 'Domains',
    read: '8 min read',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    desc:
      'Compare the best domain registrars based on pricing, privacy protection, DNS tools, and customer support.',
  },

  {
    title: 'How To Choose Web Hosting For Beginners',
    category: 'Hosting',
    read: '10 min read',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    desc:
      'Everything beginners need to know before buying hosting including uptime, speed, SSL, and backups.',
  },

  {
    title: 'Shared vs VPS vs Cloud Hosting',
    category: 'VPS Hosting',
    read: '7 min read',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    desc:
      'Understand the differences between shared hosting, VPS servers, and scalable cloud infrastructure.',
  },

  {
    title: 'How To Improve Website Speed',
    category: 'Performance',
    read: '12 min read',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    desc:
      'Learn practical methods to improve page speed, caching, CDN usage, and overall website performance.',
  },

  {
    title: 'Best WordPress Hosting Providers',
    category: 'WordPress',
    read: '9 min read',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    desc:
      'Top WordPress hosting platforms ranked by speed, security, support quality, and scalability.',
  },

  {
    title: 'Top Security Tips For Website Owners',
    category: 'Security',
    read: '11 min read',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    desc:
      'Protect your website from malware, attacks, downtime, and data breaches with these essential practices.',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#f5f7f9] min-h-screen">

      {/* HERO */}
      <section className="bg-[#f5f7f9] border-b border-gray-200 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-[#0f172a] mb-6">
            Guides & Resources
          </h1>

          <p className="text-2xl text-gray-500 max-w-4xl mx-auto">
            Tips, tutorials, and insights to help you build and grow your website.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-4 mb-5">
                  <span className="bg-green-50 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {post.read}
                  </div>
                </div>

                <h2 className="text-3xl font-extrabold text-[#0f172a] mb-5 leading-tight">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {post.desc}
                </p>

                <button className="text-green-600 font-bold text-lg hover:text-green-700 transition">
                  Read More →
                </button>

                <div className="border-t border-gray-100 mt-8 pt-6 text-gray-400 text-sm">
                  February 12, 2026
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default BlogPage;