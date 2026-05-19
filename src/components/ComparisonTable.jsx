import React from 'react';

const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Top 3 Hosting Providers
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Quick side-by-side comparison of our top rated choices.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">

          <table className="min-w-full divide-y divide-gray-200">

            <thead className="bg-gray-50">

              <tr>

                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>

                {/* IONOS */}
                <th className="px-6 py-4 text-center">

                  <div className="flex flex-col items-center gap-2">

                    <img
                      src="/logos/ionos'.png"
                      alt="IONOS"
                      className="h-10 object-contain"
                    />

                    <span className="text-lg font-bold text-gray-900">
                      IONOS
                    </span>

                  </div>

                </th>

                {/* GODADDY */}
                <th className="px-6 py-4 text-center">

                  <div className="flex flex-col items-center gap-2">

                    <img
                      src="/logos/godaddy.png"
                      alt="GoDaddy"
                      className="h-10 object-contain"
                    />

                    <span className="text-lg font-bold text-gray-900">
                      GoDaddy
                    </span>

                  </div>

                </th>

                {/* HOSTINGER */}
                <th className="px-6 py-4 text-center">

                  <div className="flex flex-col items-center gap-2">

                    <img
                      src="/logos/hostinger.png"
                      alt="Hostinger"
                      className="h-10 object-contain"
                    />

                    <span className="text-lg font-bold text-gray-900">
                      Hostinger
                    </span>

                  </div>

                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-200">

              <tr>
                <td className="px-6 py-4 font-medium">
                  Starting Price
                </td>

                <td className="px-6 py-4 text-center font-bold">
                  $1/yr
                </td>

                <td className="px-6 py-4 text-center font-bold">
                  $11.99/yr
                </td>

                <td className="px-6 py-4 text-center font-bold">
                  $2.99/mo
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">
                  Rating
                </td>

                <td className="px-6 py-4 text-center">
                  4.6 / 5
                </td>

                <td className="px-6 py-4 text-center">
                  4.5 / 5
                </td>

                <td className="px-6 py-4 text-center">
                  4.8 / 5
                </td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;