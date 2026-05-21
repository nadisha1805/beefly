import React from "react";

const TermsPage = () => {
  return (
    <div className="bg-[#f5f7f9] min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-[#f3f5f7] border-b border-gray-200 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-extrabold text-[#0f172a] mb-8">
            Terms of Service
          </h1>

          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our website.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-sm">

          <div className="space-y-12 text-[22px] leading-[2.2rem] text-gray-700">

            {/* SECTION 1 */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-5">
                1. Acceptance of Terms
              </h2>

              <p>
                By accessing and using Beefly, you accept and agree to be bound
                by the terms and provision of this agreement. In addition,
                when using this website’s particular services, you shall be
                subject to any posted guidelines or rules applicable to such services.
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-5">
                2. Educational & Informational Purpose
              </h2>

              <p>
                This website is for informational and educational purposes only.
                The information provided does not constitute professional advice.
                We make no representations or warranties of any kind,
                express or implied, about the completeness, accuracy,
                reliability, suitability or availability with respect to the website
                or the information, products, services, or related graphics
                contained on the website for any purpose.
              </p>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-5">
                3. External Links
              </h2>

              <p>
                This website contains links to other websites which are not under
                our control. We have no control over the nature, content,
                and availability of those sites. The inclusion of any links
                does not necessarily imply a recommendation or endorse
                the views expressed within them.
              </p>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-5">
                4. Limitation of Liability
              </h2>

              <p>
                In no event will we be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage,
                or any loss or damage whatsoever arising from loss of data
                or profits arising out of, or in connection with,
                the use of this website.
              </p>
            </div>

            {/* SECTION 5 */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-5">
                5. Intellectual Property
              </h2>

              <p>
                The content, layout, design, data, databases and graphics on this website
                are protected by intellectual property laws.
                You may not reproduce, download, transmit or retransmit content
                from this website, in whole or in part,
                without prior written permission.
              </p>
            </div>

            {/* SECTION 6 */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-5">
                6. Governing Law
              </h2>

              <p>
                These terms and conditions are governed by and construed
                in accordance with applicable laws and you irrevocably submit
                to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

          </div>

          {/* FOOT NOTE */}

          <div className="border-t border-gray-200 mt-16 pt-10">

            <p className="text-lg text-gray-500">
              Last updated: January 2026
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default TermsPage;