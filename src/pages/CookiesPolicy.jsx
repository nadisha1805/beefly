const CookiesPolicy = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-[#0f172a] mb-6">
            Cookies Policy
          </h1>

          <p className="text-2xl text-gray-500">
            Last updated: 2026
          </p>
        </div>

        <div className="space-y-16 text-gray-700">

          {/* 1 */}
          <section>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-8">
              1. What Are Cookies
            </h2>

            <p className="text-2xl leading-relaxed">
              Cookies are small text files stored on your device
              (computer, tablet, or mobile) when you visit certain websites.
              They identify your device for subsequent visits but do not
              typically identify you personally. We use cookies to improve
              website functionality, performance, and your overall user experience.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-8">
              2. How We Use Cookies
            </h2>

            <p className="text-2xl mb-6">
              At Axiomor, we use cookies to:
            </p>

            <ul className="list-disc pl-10 text-2xl space-y-4 leading-relaxed">
              <li>Ensure the basic functionality of our website works correctly.</li>
              <li>Understand how visitors interact with our site so we can improve it.</li>
              <li>Measure the performance of our content and pages.</li>
              <li>
                Support affiliate tracking when you click links to third-party
                domain and hosting providers.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-10">
              3. Types of Cookies We Use
            </h2>

            <div className="space-y-8">

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10">
                <h3 className="text-3xl font-bold mb-4">
                  Essential Cookies
                </h3>

                <p className="text-xl leading-relaxed">
                  These cookies are strictly necessary for the website
                  to function properly.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10">
                <h3 className="text-3xl font-bold mb-4">
                  Analytics Cookies
                </h3>

                <p className="text-xl leading-relaxed">
                  We use these to collect anonymous data on how visitors
                  use our site.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10">
                <h3 className="text-3xl font-bold mb-4">
                  Affiliate & Marketing Cookies
                </h3>

                <p className="text-xl leading-relaxed">
                  Affiliate tracking cookies help providers know when
                  referrals come from our website.
                </p>
              </div>

            </div>
          </section>

          {/* NOTE */}
          <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-2xl">
            <p className="text-2xl text-green-900 font-medium">
              Important Note: We never store sensitive personal information
              like passwords or credit card data in cookies.
            </p>
          </div>

          {/* 4 */}
          <section>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-8">
              4. Third-Party Cookies
            </h2>

            <p className="text-2xl leading-relaxed">
              In addition to our own cookies, we may also use
              various third-parties to report usage statistics
              of the Service and deliver advertisements.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-8">
              5. Managing Your Cookies
            </h2>

            <p className="text-2xl leading-relaxed">
              You have the right to accept or reject cookies.
              You can manage your cookie preferences at any time
              by changing your browser settings.
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-8">
              Contact Us
            </h2>

            <p className="text-2xl leading-relaxed">
              If you have any questions about our use of cookies,
              please contact us at privacy@axiomor.online
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;