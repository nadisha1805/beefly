const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            About Beefly
          </span>

          <h1 className="text-6xl font-extrabold text-[#0f172a] mt-8">
            Helping Users Choose Better Hosting & Domains
          </h1>

          <p className="text-2xl text-gray-600 mt-8 leading-relaxed max-w-4xl mx-auto">
            Beefly provides transparent comparisons, reviews,
            and educational resources for web hosting,
            domain registrars, VPS providers, and website tools.
          </p>

        </div>

        <div className="space-y-16 text-gray-700">

          <section>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              Our Mission
            </h2>

            <p className="text-xl leading-relaxed">
              Our goal is to simplify the process of choosing
              hosting and domain providers by offering clear,
              unbiased, and research-based comparisons.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              How We Review Providers
            </h2>

            <p className="text-xl leading-relaxed">
              We analyze pricing, uptime, support quality,
              performance, ease of use, scalability,
              security features, and real user feedback
              before recommending providers.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              Affiliate Disclosure
            </h2>

            <p className="text-xl leading-relaxed">
              Some links on our website are affiliate links.
              We may earn commissions at no extra cost to you.
              However, our rankings remain independent and
              based on research and performance.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;