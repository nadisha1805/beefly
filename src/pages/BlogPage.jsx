import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Best Domain Registrars in 2026',
    desc: 'Compare the best domain registrars with pricing, privacy, DNS performance, and renewal costs explained.',
    category: 'Domains',
    read: '8 min read',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 2,
    title: 'How To Choose Web Hosting For Beginners',
    desc: 'Everything beginners need to know before buying web hosting including uptime, support, SSL, and speed.',
    category: 'Hosting',
    read: '10 min read',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 3,
    title: 'Best Cheap VPS Providers Compared',
    desc: 'Find the best VPS providers for developers, startups, and scalable projects at affordable pricing.',
    category: 'VPS',
    read: '7 min read',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 4,
    title: 'Cloudflare vs GoDaddy Domains',
    desc: 'Detailed comparison between Cloudflare and GoDaddy domains including pricing and DNS performance.',
    category: 'Domains',
    read: '9 min read',
    image:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 5,
    title: 'Best Hosting For WordPress Websites',
    desc: 'Discover which hosting providers are best optimized for WordPress performance and security.',
    category: 'WordPress',
    read: '6 min read',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 6,
    title: 'Shared Hosting vs VPS Hosting',
    desc: 'Understand the major differences between shared hosting and VPS hosting before making your decision.',
    category: 'Hosting',
    read: '11 min read',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-20">

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold text-sm">
            Latest Articles
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] mt-8 leading-tight">
            Hosting & Domain Guides
          </h1>

          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Learn everything about domains, web hosting, VPS servers,
            WordPress hosting, and online business growth.
          </p>

        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {posts.map((post, index) => (
            <Link
              to={`/blog/${post.id}`}
              key={index}
              className="block"
            >

              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

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

            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BlogPage;