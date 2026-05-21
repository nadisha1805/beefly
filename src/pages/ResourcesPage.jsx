import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Globe,
  ShieldCheck,
  Server,
  Cpu,
  FileText,
} from "lucide-react";

const resources = [
  {
    icon: Globe,
    title: "Domain Guides",
    desc: "Learn how to choose, register, and manage the perfect domain name for your website.",
    links: [
      { title: "Best Domain Registrars", path: "/blog/1" },
      { title: "How to Buy a Domain", path: "/blog/2" },
      { title: "Domain Transfer Guide", path: "/blog/3" },
    ],
  },

  {
    icon: Server,
    title: "Web Hosting",
    desc: "Understand hosting types, performance, uptime, and which hosting is best for beginners.",
    links: [
      { title: "Shared vs VPS Hosting", path: "/blog/4" },
      { title: "Best Web Hosting Providers", path: "/blog/5" },
      { title: "Beginner Hosting Guide", path: "/blog/6" },
    ],
  },

  {
    icon: Cpu,
    title: "VPS & Cloud",
    desc: "Explore scalable VPS and cloud hosting solutions for developers and businesses.",
    links: [
      { title: "Cheap VPS Hosting", path: "/blog/4" },
      { title: "Cloud Hosting Explained", path: "/blog/5" },
      { title: "Managed VPS Guide", path: "/blog/6" },
    ],
  },

  {
    icon: ShieldCheck,
    title: "Security & SSL",
    desc: "Protect your website with SSL certificates, backups, and security best practices.",
    links: [
      { title: "Free SSL Guide", path: "/blog/2" },
      { title: "Website Security Tips", path: "/blog/3" },
      { title: "Backup Solutions", path: "/blog/1" },
    ],
  },

  {
    icon: FileText,
    title: "Website Building",
    desc: "Step-by-step tutorials for creating and growing your website online.",
    links: [
      { title: "How to Start a Blog", path: "/blog/4" },
      { title: "WordPress Setup Guide", path: "/blog/5" },
      { title: "SEO Basics for Beginners", path: "/blog/6" },
    ],
  },

  {
    icon: BookOpen,
    title: "Expert Tutorials",
    desc: "In-depth tutorials and comparisons to help you make better hosting decisions.",
    links: [
      { title: "Best Hosting for WordPress", path: "/blog/1" },
      { title: "How to Migrate Hosting", path: "/blog/2" },
      { title: "Hosting Comparison Guide", path: "/blog/3" },
    ],
  },
];

const ResourcesPage = () => {
  return (
    <div className="bg-[#f5f7f9] min-h-screen">

      {/* HERO */}
      <section className="bg-[#f3f5f7] border-b border-gray-200 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-extrabold text-[#0f172a] mb-6">
            Resources & Guides
          </h1>

          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Educational content to help you build a better web presence.
            No sales pitches, just learning.
          </p>

        </div>
      </section>

      {/* RESOURCE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10">

          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-md transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>

                <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="space-y-5">

                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      className="block text-green-600 text-2xl font-semibold hover:text-green-700 transition"
                    >
                      {link.title}
                    </Link>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </section>
    </div>
  );
};

export default ResourcesPage;