import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <a className="flex items-center space-x-2 mb-4" href="/">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Beefly</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              We compare the best domain registrars and hosting providers to help you make informed decisions for your online presence.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Comparisons</h3>
            <ul className="mt-4 space-y-3">
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/domains">Best Domain Registrars</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/hosting">Best Web Hosting</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/vps">Cheap VPS Hosting</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/hosting">WordPress Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/contact">Contact Us</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/about">About Us</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/blog">Guides & Tutorials</a></li>
              <li><a href="mailto:support@beefly.online" className="text-base text-gray-400 hover:text-brand-400">support@beefly.online</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/privacy">Privacy Policy</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/cookies-policy">Cookies Policy</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/terms">Terms of Service</a></li>
              <li><a className="text-base text-gray-400 hover:text-brand-400" href="/disclosure">Affiliate Disclosure</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">© {new Date().getFullYear()} Beefly. All rights reserved.</p>
          <p className="mt-4 text-xs text-gray-600 text-center max-w-2xl mx-auto">
            Disclosure: We may earn a commission when you purchase through links on our site. This comes at no extra cost to you and helps us maintain our high-quality content.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
