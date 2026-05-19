import React from 'react';
import { ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

const TrustFeatures = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-900 mb-6">
              <ShieldCheck className="h-8 w-8 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Unbiased Reviews</h3>
            <p className="text-gray-400">We purchase and test every hosting plan anonymously to ensure our data is accurate and impartial.</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-900 mb-6">
              <Zap className="h-8 w-8 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Performance Testing</h3>
            <p className="text-gray-400">We monitor uptime and speed 24/7 using industry-standard tools to give you real-world performance metrics.</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-900 mb-6">
              <CheckCircle2 className="h-8 w-8 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Expert Analysis</h3>
            <p className="text-gray-400">Our team of web experts evaluates support quality, feature sets, and ease of use for every provider.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
