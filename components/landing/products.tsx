"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const brokerGuides = [
  {
    id: "fx",
    icon: "FX",
    title: "Best Forex Broker",
    guides: [
      "Best Forex Brokers 2025 (Overall)",
      "Best Low-Spread Forex Brokers", 
      "Best ECN/STP Forex Brokers",
      "Best Forex Brokers for Beginners"
    ]
  },
  {
    id: "crypto",
    icon: "Ξ",
    title: "Best Crypto Broker",
    guides: [
      "Best Crypto Brokers 2025 (Overall)",
      "Best Crypto Derivatives Brokers",
      "Best Copy-Trading Crypto Platforms", 
      "Crypto Brokers with Lowest Fees"
    ]
  },
  {
    id: "region",
    icon: "EU",
    title: "Best Broker by Region",
    guides: [
      "Best Brokers in EU (MiFID II)",
      "Best Brokers in UK (FCA)",
      "Best Brokers in UAE (DFSA/ADGM)",
      "Best Brokers in South Africa (FSCA)"
    ]
  }
];

const Products = () => {
  return (
    <section id="products" className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-white">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Broker Selection Guides
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Twelve curated, high-intent articles to help users choose a trusted broker by market, method, and region.
          </p>
        </div>

        {/* Guide Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brokerGuides.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    {category.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Guide Links */}
              <div className="space-y-3">
                {category.guides.map((guide, guideIndex) => (
                  <Link
                    key={guideIndex}
                    href={`/guides/${category.id}/${guide.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-200">
                        {guide}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/guides"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Guides
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
