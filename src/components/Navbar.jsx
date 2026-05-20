import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
            <Link className="flex items-center" to="/">
              
              <img
                src="/beefly-logo.png"
                alt="Beefly Logo"
                 className="h-16 w-auto -mr-6"
              />

              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                Beefly
              </span>

            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">

            <Link
              className="text-sm font-medium transition-colors hover:text-brand-600 text-gray-600"
              to="/domains"
            >
              Domains
            </Link>

            <Link
              className="text-sm font-medium transition-colors hover:text-brand-600 text-gray-600"
              to="/hosting"
            >
              Web Hosting
            </Link>

            <Link
              className="text-sm font-medium transition-colors hover:text-brand-600 text-gray-600"
              to="/vps"
            >
              VPS
            </Link>

            <Link
              className="text-sm font-medium transition-colors hover:text-brand-600 text-gray-600"
              to="/reviews"
            >
              Reviews
            </Link>

            <Link
              className="text-sm font-medium transition-colors hover:text-brand-600 text-gray-600"
              to="/resources"
            >
              Resources
            </Link>

            <Link
              className="text-sm font-medium transition-colors hover:text-brand-600 text-gray-600"
              to="/top-picks"
            >
              Top Picks
            </Link>

            <Link
              className="text-sm font-medium transition-colors hover:text-brand-600 text-gray-600"
              to="/blog"
            >
              Blog
            </Link>

            {/* AFFILIATE DISCLOSURE */}
            <div className="relative group inline-block">

              <button
                type="button"
                className="text-sm font-medium text-gray-500 cursor-default hover:text-gray-900 flex items-center gap-1 transition-colors outline-none focus:text-gray-900"
                aria-label="Affiliate Disclosure Information"
              >
                Affiliate Disclosure
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 p-4 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 transform origin-top">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 border-8 border-transparent border-b-white drop-shadow-sm"></div>

                <div className="relative z-10">
                  <p className="text-xs text-gray-600 leading-relaxed text-center">
                    Some links on this site are affiliate links. We may earn a
                    commission at no extra cost to you. Our content remains
                    independent and research-based.
                  </p>
                </div>

              </div>
            </div>

            {/* BUTTON */}
            <a
              href="/#comparison"
             className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 bg-brand-600 text-white hover:bg-brand-700 shadow-sm h-10 px-4 text-sm ml-4"
            >
             Compare Providers
            </a>
             </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>

              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-4">

            <Link
              className="block text-sm font-medium text-gray-700 hover:text-brand-600"
              to="/domains"
            >
              Domains
            </Link>

            <Link
              className="block text-sm font-medium text-gray-700 hover:text-brand-600"
              to="/hosting"
            >
              Web Hosting
            </Link>

            <Link
              className="block text-sm font-medium text-gray-700 hover:text-brand-600"
              to="/vps"
            >
              VPS
            </Link>

            <Link
              className="block text-sm font-medium text-gray-700 hover:text-brand-600"
              to="/reviews"
            >
              Reviews
            </Link>

            <Link
              className="block text-sm font-medium text-gray-700 hover:text-brand-600"
              to="/resources"
            >
              Resources
            </Link>

            <Link
              className="block text-sm font-medium text-gray-700 hover:text-brand-600"
              to="/top-picks"
            >
              Top Picks
            </Link>

            <Link
              className="block text-sm font-medium text-gray-700 hover:text-brand-600"
              to="/blog"
            >
              Blog
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;