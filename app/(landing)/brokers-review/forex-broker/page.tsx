import { Metadata } from "next";
import Link from "next/link";
import BrokerCard from "@/components/brokers/broker-card";
import { forexBrokers } from "@/components/brokers/broker-data";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Forex Broker Reviews 2025 | Compare Top FX Brokers | Ranking Brokers",
  description:
    "Curated list of trading brokers with live filters. Transparent ratings. Fast navigation to deep-dives. Compare forex brokers by spreads, regulation, platforms & more.",
  keywords: [
    "forex brokers",
    "fx trading",
    "forex reviews",
    "best forex brokers",
    "forex comparison",
    "trading platforms",
    "regulated brokers",
  ],
  openGraph: {
    title: "Forex Broker Reviews 2025 | Compare Top FX Brokers",
    description:
      "Curated list of trading brokers with live filters. Transparent ratings. Fast navigation to deep-dives.",
    type: "website",
    url: "https://rankingbrokers.com/brokers-review/forex-broker",
  },
  alternates: {
    canonical: "https://rankingbrokers.com/brokers-review/forex-broker",
  },
};

const ForexBrokerPage = () => {
  const faqs = [
    {
      question: "What is a forex broker?",
      answer:
        "A forex broker is a financial services company that provides traders and investors access to a platform for buying and selling foreign currencies. Forex brokers act as intermediaries between retail traders and the interbank forex market.",
    },
    {
      question: "How do I choose the best forex broker?",
      answer:
        "Consider factors like regulation (FCA, ASIC, CySEC), trading costs (spreads and commissions), available platforms (MT4, MT5, cTrader), execution speed, customer support, deposit/withdrawal methods, and educational resources. Always verify the broker is properly licensed.",
    },
    {
      question: "What are spreads and why do they matter?",
      answer:
        "The spread is the difference between the buy (ask) and sell (bid) price of a currency pair. It represents the broker's commission on each trade. Lower spreads mean lower trading costs, which is especially important for active traders and scalpers.",
    },
    {
      question: "What is the difference between ECN and Market Maker brokers?",
      answer:
        "ECN (Electronic Communication Network) brokers provide direct market access with raw spreads plus commission, offering faster execution and transparency. Market Makers create their own pricing and may have fixed spreads with no commission, which can be simpler for beginners but may have conflicts of interest.",
    },
    {
      question: "How much money do I need to start forex trading?",
      answer:
        "Minimum deposits vary by broker, ranging from $10 to $2,000+. However, we recommend starting with at least $500-$1,000 to allow proper risk management and avoid over-leveraging your account. Some brokers offer micro or nano accounts for smaller deposits.",
    },
    {
      question: "Are forex brokers safe?",
      answer:
        "Safety depends on regulation. Brokers regulated by tier-1 authorities (FCA, ASIC, CFTC) offer the highest protection, including segregated client funds, negative balance protection, and compensation schemes. Always verify a broker's regulatory status before depositing funds.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-400">Brokers Review</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Forex Broker</span>
        </nav>
      </div>

      {/* Hero/Overview Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Broker Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated list of trading brokers with live filters. Transparent
            ratings. Fast navigation to deep-dives.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search brokers, regulators, or features..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
                <svg
                  className="absolute right-3 top-3 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Rating
              </label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none">
                <option>Any</option>
                <option>4.5+</option>
                <option>4.0+</option>
                <option>3.5+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Regulator
              </label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none">
                <option>Any</option>
                <option>FCA (UK)</option>
                <option>ASIC (AU)</option>
                <option>CySEC (EU)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none">
                <option>Rating (high → low)</option>
                <option>Spreads (low → high)</option>
                <option>Min Deposit (low → high)</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                {forexBrokers.length} shown
              </span>
            </p>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-900 text-white rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 gap-6">
          {forexBrokers.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features to Consider
            </h2>
            <p className="text-lg text-gray-600">
              What makes a great forex broker? Here are the essential factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Regulation
              </h3>
              <p className="text-gray-600">
                Top-tier regulation (FCA, ASIC, CFTC) ensures client fund
                protection and transparency.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trading Costs
              </h3>
              <p className="text-gray-600">
                Competitive spreads and low commissions directly impact your
                profitability.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Execution Speed
              </h3>
              <p className="text-gray-600">
                Fast order execution and minimal slippage are crucial for active
                trading strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pros & Cons of Forex Trading
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the advantages and risks of forex trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Pros
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>24/5 Market Access:</strong> Trade around the clock
                    from Monday to Friday
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>High Liquidity:</strong> Largest financial market
                    with $7+ trillion daily volume
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Leverage Options:</strong> Control larger positions
                    with smaller capital
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Low Barriers to Entry:</strong> Start with as little
                    as $10-$100
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Tight Spreads:</strong> Competitive pricing on major
                    currency pairs
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Cons
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>High Risk:</strong> Leverage amplifies both gains
                    and losses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Complexity:</strong> Requires understanding of
                    economics and technical analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Emotional Pressure:</strong> Fast-paced environment
                    can lead to impulsive decisions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Broker Risk:</strong> Unregulated brokers may pose
                    fraud risks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Market Volatility:</strong> News events can cause
                    sudden price swings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Spreads Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding Fees & Spreads
            </h2>
            <p className="text-lg text-gray-600">
              Know what you&apos;re paying before you trade
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Spreads
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  The difference between buy and sell price. Lower is better.
                </p>
                <div className="text-2xl font-bold text-indigo-600">
                  0.0 - 1.0 pips
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Typical range for EUR/USD
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Commissions
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fixed fee per lot traded (mainly ECN brokers).
                </p>
                <div className="text-2xl font-bold text-indigo-600">
                  $0 - $7/lot
                </div>
                <p className="text-xs text-gray-500 mt-1">Per round turn</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Overnight Fees
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Swap rates applied to positions held overnight.
                </p>
                <div className="text-2xl font-bold text-indigo-600">Varies</div>
                <p className="text-xs text-gray-500 mt-1">
                  Depends on currency pair
                </p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">
              <strong>Important:</strong> Total trading costs = spreads +
              commissions + overnight fees. Compare the all-in cost across
              brokers. Some brokers advertise &quot;zero spreads&quot; but charge higher
              commissions. Always calculate the total round-trip cost per
              standard lot to make fair comparisons.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Platforms Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Trading Platforms
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right platform for your trading style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">MT4</div>
              <p className="text-sm text-gray-600">
                Industry standard with extensive indicators and expert advisors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">MT5</div>
              <p className="text-sm text-gray-600">
                Advanced version with more timeframes, order types, and asset
                classes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                cTrader
              </div>
              <p className="text-sm text-gray-600">
                Modern platform with Level II pricing and advanced charting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Proprietary
              </div>
              <p className="text-sm text-gray-600">
                Custom platforms built by brokers with unique features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Regulatory Bodies Explained
            </h2>
            <p className="text-lg text-gray-600">
              Understanding broker regulation and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="font-bold text-lg text-gray-900 mb-2">
                FCA (UK)
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Financial Conduct Authority
              </p>
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                Tier 1
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="font-bold text-lg text-gray-900 mb-2">
                ASIC (AU)
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Australian Securities and Investments Commission
              </p>
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                Tier 1
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="font-bold text-lg text-gray-900 mb-2">
                CySEC (EU)
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Cyprus Securities and Exchange Commission
              </p>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                Tier 2
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="font-bold text-lg text-gray-900 mb-2">
                CFTC (US)
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Commodity Futures Trading Commission
              </p>
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                Tier 1
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex gap-3">
              <svg
                className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Safety First
                </h3>
                <p className="text-gray-700 text-sm">
                  Always verify a broker&apos;s regulatory status before depositing
                  funds. Tier 1 regulators (FCA, ASIC, CFTC) offer the highest
                  level of client protection including segregated accounts,
                  negative balance protection, and compensation schemes up to
                  £85,000 (FCA) or $250,000 (CFTC).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Comparison Table
            </h2>
            <p className="text-lg text-gray-600">
              Compare top forex brokers at a glance
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Broker
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Rating
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Regulator
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Spreads
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Min Deposit
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {forexBrokers.map((broker, index) => (
                    <tr
                      key={broker.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-600">
                              {broker.logo}
                            </span>
                          </div>
                          <span className="font-semibold text-gray-900">
                            {broker.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1">
                          <svg
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <span className="font-semibold text-gray-900">
                            {broker.rating.toFixed(1)}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {broker.multipliers.regulator.value}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {broker.multipliers.spreadsFrom.value}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {broker.multipliers.minDeposit.value}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                          {broker.tags[0]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about forex brokers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="bg-gray-50 rounded-xl">
                <CollapsibleTrigger className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors rounded-xl">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Compare brokers, read in-depth reviews, and find the perfect match
            for your trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <Link href="#brokers">View All Brokers</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForexBrokerPage;

