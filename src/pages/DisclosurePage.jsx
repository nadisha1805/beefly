export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>

      {/* Hero Title Section */}
      <section className="text-center py-16 px-6 border-b border-gray-200">
        <h1 className="text-5xl font-black text-gray-900 mb-4">
          Affiliate Disclosure
        </h1>
        <p className="text-gray-500 text-lg">
          Transparency is important to us. Here is how we fund our work.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-gray-800 leading-relaxed">

        {/* Short version callout */}
        <p className="text-xl leading-relaxed font-medium text-gray-900">
          The short version: Beefly participates in affiliate programs. If you purchase
          through our links, we may earn a commission. This comes at no extra cost to
          you.
        </p>

        <hr className="border-gray-200" />

        {/* Section 1 */}
        <div>
          <h2 className="font-bold text-gray-900 mb-2">Our Commitment to Honesty</h2>
          <p className="text-gray-700">
            Our goal is to provide helpful, unbiased content. The products and services we review are selected
            based on our research and testing. We do not accept payment to write positive reviews, and our
            editorial team operates independently of our potential commission earnings.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="font-bold text-gray-900 mb-2">How Affiliate Links Work</h2>
          <p className="text-gray-700">
            When you click a link on our website to a provider (such as Hostinger or Namecheap), a special
            tracking code is used. This allows the provider to know that you came from our site.
          </p>
          <p className="text-gray-700 mt-3">
            If you proceed to buy a domain or hosting plan, we may receive a referral fee. This helps cover the
            costs of running this website, including server costs, content creation, and tool subscriptions.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="font-bold text-gray-900 mb-2">No Cost to You</h2>
          <p className="text-gray-700">
            Using an affiliate link <strong>never</strong> increases the price you pay. In fact, in many cases, our links unlock
            special discounts or introductory rates that are cheaper than the public price.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="font-bold text-gray-900 mb-2">Limitation of Liability</h2>
          <p className="text-gray-700">
            While we strive to keep our information accurate and up-to-date, pricing and terms of service for
            the providers we list can change without notice. We cannot guarantee the performance or reliability
            of any third-party service provider. Your use of any service is subject to that provider's own terms
            and conditions.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="font-bold text-gray-900 mb-2">Questions?</h2>
          <p className="text-gray-700">
            If you have any questions about our affiliate relationships or how we fund this site, please contact
            us at{' '}
            <a href="mailto:support@beefly.online" className="text-green-600 hover:underline">
              support@beefly.online
            </a>.
          </p>
        </div>

        <hr className="border-gray-200" />

        <p className="text-gray-400 text-sm">Last updated: May 2025</p>
      </section>
    </div>
  );
}