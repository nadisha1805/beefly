import React from "react";

const providers = [
  {
    name: "Namecheap",
    logo: "/logos/namecheap.png",
    price: "$9.98/yr",
    rating: "4.8 / 5",
    bestFor: "Domains",
    guarantee: "30 Days",
  },
  {
    name: "GoDaddy",
    logo: "/logos/godaddy.png",
    price: "$11.99/yr",
    rating: "4.5 / 5",
    bestFor: "Domains",
    guarantee: "30 Days",
  },
  {
    name: "Dynadot",
    logo: "/logos/dynadot.png",
    price: "$8.99/yr",
    rating: "4.7 / 5",
    bestFor: "Domains",
    guarantee: "30 Days",
  },
];

const ComparisonTable = () => {
  return (
    <section
      id="comparison"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Top Domain Registrars in 2025
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Quick side-by-side comparison of our top rated choices.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-white">
              <tr className="border-b border-gray-200">

                <th className="text-left px-8 py-8 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/4">
                  Feature
                </th>

                {providers.map((provider) => (
                  <th
                    key={provider.name}
                    className="px-8 py-8 text-center"
                  >
                    <div className="flex flex-col items-center justify-center">

                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="h-12 object-contain mb-4"
                      />

                      <span className="text-2xl font-bold text-gray-900">
                        {provider.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-gray-200">
                <td className="px-8 py-8 text-lg font-medium text-gray-900">
                  Starting Price
                </td>

                {providers.map((provider) => (
                  <td
                    key={provider.name}
                    className="px-8 py-8 text-center text-2xl font-bold text-gray-900"
                  >
                    {provider.price}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-200">
                <td className="px-8 py-8 text-lg font-medium text-gray-900">
                  Rating
                </td>

                {providers.map((provider) => (
                  <td
                    key={provider.name}
                    className="px-8 py-8 text-center text-2xl font-bold text-gray-900"
                  >
                    {provider.rating}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-200">
                <td className="px-8 py-8 text-lg font-medium text-gray-900">
                  Best For
                </td>

                {providers.map((provider) => (
                  <td
                    key={provider.name}
                    className="px-8 py-8 text-center text-lg text-gray-600"
                  >
                    {provider.bestFor}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-200">
                <td className="px-8 py-8 text-lg font-medium text-gray-900">
                  Money Back Guarantee
                </td>

                {providers.map((provider) => (
                  <td
                    key={provider.name}
                    className="px-8 py-8 text-center text-lg text-gray-600"
                  >
                    {provider.guarantee}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="px-8 py-8 text-lg font-medium text-gray-900">
                  Link
                </td>

                {providers.map((provider) => (
                  <td
                    key={provider.name}
                    className="px-8 py-8 text-center"
                  >
                    <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 px-6 py-2 rounded-xl font-semibold">
                      Details
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;