import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-[#0f172a] border-t border-gray-800"
      aria-labelledby="footer-heading"
    >

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LOGO + DESCRIPTION */}

          <div>

            <a
              className="flex items-center mb-6"
              href="/"
            >

              <img
                src="/beefly-logo.png"
                alt="Beefly Logo"
                className="h-16 w-auto"
              />

            </a>

            <p className="text-gray-400 leading-relaxed text-sm">
              Beefly helps users compare the best domain registrars,
              web hosting providers, VPS servers, and website tools
              through transparent comparisons and research-based reviews.
            </p>

          </div>

          {/* COMPARISONS */}

          <div>

            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Comparisons
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/domains"
                >
                  Best Domain Registrars
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/hosting"
                >
                  Best Web Hosting
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/vps"
                >
                  Cheap VPS Hosting
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/top-picks"
                >
                  Top Picks
                </a>
              </li>

            </ul>

          </div>

          {/* SUPPORT */}

          <div>

            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Support
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/about"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/about"
                >
                  How We Review
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/blog"
                >
                  Guides & Tutorials
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@beefly.online"
                  className="text-gray-400 hover:text-white transition"
                >
                  support@beefly.online
                </a>
              </li>

            </ul>

          </div>

          {/* LEGAL */}

          <div>

            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Legal
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/cookies-policy"
                >
                  Cookies Policy
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 hover:text-white transition"
                  href="/disclosure"
                >
                  Affiliate Disclosure
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="mt-16 border-t border-gray-800 pt-8">

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Beefly. All rights reserved.
          </p>

          <p className="mt-5 text-center text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Disclosure: Some links on this website are affiliate links.
            We may earn a commission when you purchase through them at no extra cost to you.
            Our reviews and comparisons remain independent and research-based.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;