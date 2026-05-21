const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-gray-900 mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-gray-700 leading-8 text-lg">

          {/* INTRO */}
          <section>
            <p>
              We respect your privacy and are committed to protecting your personal data.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>

            <p>
              This Privacy Policy explains how Beefly collects, uses,
              and protects your information when you visit our website.
              By using our site, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>

            <div className="space-y-5">

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Log Data
                </h3>

                <p>
                  Like most websites, we collect information that your browser
                  sends whenever you visit our site. This may include your
                  computer's Internet Protocol ("IP") address, browser type,
                  browser version, and the pages of our site that you visit.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Cookies
                </h3>

                <p>
                  We use cookies to improve your experience. Cookies are files
                  with small amount of data which may include an anonymous
                  unique identifier. You can instruct your browser to refuse
                  all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>

            <p className="mb-4">
              We use the collected data for various purposes:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              4. Third-Party Services & Affiliate Links
            </h2>

            <p className="mb-4">
              We may employ third-party companies and services
              (such as Google Analytics) to facilitate our service.
              These third parties have access to your Personal Data only
              to perform these tasks on our behalf and are obligated not
              to disclose or use it for any other purpose.
            </p>

            <p>
              <span className="font-semibold">
                Affiliate Tracking:
              </span>{" "}
              When you click on an affiliate link to a third-party website,
              that third party may place a cookie on your browser to track
              the referral. We do not control these third-party cookies.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>

            <p>
              The security of your data is important to us, but remember that
              no method of transmission over the Internet, or method of
              electronic storage is 100% secure. While we strive to use
              commercially acceptable means to protect your Personal Data,
              we cannot guarantee its absolute security.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6. Changes to This Policy
            </h2>

            <p>
              We may update our Privacy Policy from time to time.
              We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>

            <p>
              If you have any questions about this Privacy Policy,
              please contact us.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;