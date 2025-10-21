import { BrokerData } from "./broker-card";

export const forexBrokers: BrokerData[] = [
  {
    id: "ig",
    name: "IG",
    logo: "IG",
    rating: 4.8,
    badge: "Pro",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FCA (UK)",
      },
      execution: {
        label: "Execution",
        value: "DMA / Market",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.6 pips",
      },
      instruments: {
        label: "Instruments",
        value: "17,000+ (CFDs)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$0",
      },
    },
    tags: ["DMA", "Pro Tools", "Research"],
    description:
      "Best-in-class platform depth and markets coverage.",
    websiteUrl: "https://www.ig.com",
    reviewUrl: "/brokers-review/forex-broker/ig",
  },
  {
    id: "b2broker-prime",
    name: "B2Broker Prime",
    logo: "B2",
    rating: 4.7,
    badge: "Pro",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FCA (UK)",
      },
      execution: {
        label: "Execution",
        value: "ECN",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.2 pips",
      },
      instruments: {
        label: "Instruments",
        value: "500+ (FX, Metals, Indices, Crypto)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$1,000",
      },
    },
    tags: ["ECN", "Ultra-low Spreads", "Prime Liquidity"],
    description:
      "Institutional-grade liquidity with razor spreads. Best fit for advanced strategies and higher volume.",
    websiteUrl: "https://www.b2broker.com",
    reviewUrl: "/brokers-review/forex-broker/b2broker-prime",
  },
  {
    id: "saxo",
    name: "Saxo",
    logo: "SX",
    rating: 4.7,
    badge: "Pro",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FCA (UK) / MAS",
      },
      execution: {
        label: "Execution",
        value: "DMA",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.6 pips",
      },
      instruments: {
        label: "Instruments",
        value: "40,000+ (Multi-asset)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$2,000",
      },
    },
    tags: ["DMA", "Pro Pricing", "Multi-Asset"],
    description: "Flagship multi-asset stack for professionals.",
    websiteUrl: "https://www.home.saxo",
    reviewUrl: "/brokers-review/forex-broker/saxo",
  },
  {
    id: "ic-markets",
    name: "IC Markets",
    logo: "IC",
    rating: 4.6,
    badge: "Pro",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "ASIC (AU)",
      },
      execution: {
        label: "Execution",
        value: "ECN",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.0 pips",
      },
      instruments: {
        label: "Instruments",
        value: "250+ (FX, Indices, Indices, Crypto)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$200",
      },
    },
    tags: ["ECN", "cTrader", "Scalping"],
    description: "Ultra-low spreads ideal for scalpers and algos.",
    websiteUrl: "https://www.icmarkets.com",
    reviewUrl: "/brokers-review/forex-broker/ic-markets",
  },
  {
    id: "pepperstone",
    name: "Pepperstone",
    logo: "PS",
    rating: 4.5,
    badge: "Popular",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "ASIC / FCA",
      },
      execution: {
        label: "Execution",
        value: "ECN / STP",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.0 pips",
      },
      instruments: {
        label: "Instruments",
        value: "1200+ (FX, CFDs)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$200",
      },
    },
    tags: ["MT4/MT5", "cTrader", "Fast Execution"],
    description:
      "Top-tier execution with broad platform support. Good for multi-asset retail flow and copy-trading enthusiasts.",
    websiteUrl: "https://www.pepperstone.com",
    reviewUrl: "/brokers-review/forex-broker/pepperstone",
  },
  {
    id: "tradequo",
    name: "TradeQuo",
    logo: "TQ",
    rating: 4.4,
    badge: "Verified",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FSA (Dominica)",
      },
      execution: {
        label: "Execution",
        value: "STP / ECN",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.8 pips",
      },
      instruments: {
        label: "Instruments",
        value: "250+ (FX, Indices, Metals, Crypto)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$10",
      },
    },
    tags: ["MetaTrader", "Copy Trading", "Low Min Deposit"],
    description:
      "Balanced pricing with fast onboarding. Good for multi-asset retail flow and copy-trading enthusiasts.",
    websiteUrl: "https://www.tradequo.com",
    reviewUrl: "/brokers-review/forex-broker/tradequo",
  },
  {
    id: "exness",
    name: "Exness",
    logo: "EX",
    rating: 4.3,
    badge: "Popular",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FCA / CySEC",
      },
      execution: {
        label: "Execution",
        value: "Market / ECN",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.1 pips",
      },
      instruments: {
        label: "Instruments",
        value: "200+ (FX, Metals, Crypto)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$10",
      },
    },
    tags: ["Auto-Trading", "Tight Spreads", "Multi-Regulated"],
    description:
      "High-volume favorite with flexible conditions. Strong for automated strategies.",
    websiteUrl: "https://www.exness.com",
    reviewUrl: "/brokers-review/forex-broker/exness",
  },
  {
    id: "quomarkets",
    name: "QuoMarkets",
    logo: "QM",
    rating: 4.2,
    badge: "Popular",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FSCA (SA)",
      },
      execution: {
        label: "Execution",
        value: "STP",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.7 pips",
      },
      instruments: {
        label: "Instruments",
        value: "300+ (FX, Equities, Crypto)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$50",
      },
    },
    tags: ["MT4/MT5", "Islamic Accounts", "Fast KYC"],
    description:
      "Solid choice for active traders in MENA/EMEA. Competitive spreads and responsive support.",
    websiteUrl: "https://www.quomarkets.com",
    reviewUrl: "/brokers-review/forex-broker/quomarkets",
  },
  {
    id: "oanda",
    name: "OANDA",
    logo: "OA",
    rating: 4.2,
    badge: "Popular",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "NFA (US)",
      },
      execution: {
        label: "Execution",
        value: "Market",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.8 pips",
      },
      instruments: {
        label: "Instruments",
        value: "120+ (FX, Indices)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$0",
      },
    },
    tags: ["US Regulated", "API", "Education"],
    description:
      "Trusted US option with transparent pricing.",
    websiteUrl: "https://www.oanda.com",
    reviewUrl: "/brokers-review/forex-broker/oanda",
  },
  {
    id: "xm",
    name: "XM",
    logo: "XM",
    rating: 4.1,
    badge: "Popular",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "CySEC (EU)",
      },
      execution: {
        label: "Execution",
        value: "STP",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.6 pips",
      },
      instruments: {
        label: "Instruments",
        value: "1000+ (FX, CFDs)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$5",
      },
    },
    tags: ["Low Entry", "Education", "Bonuses*"],
    description:
      "Accessible entry with strong education and promos.",
    websiteUrl: "https://www.xm.com",
    reviewUrl: "/brokers-review/forex-broker/xm",
  },
  {
    id: "avatrade",
    name: "AvaTrade",
    logo: "AV",
    rating: 4.1,
    badge: "Popular",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FCA (UK)",
      },
      execution: {
        label: "Execution",
        value: "Market",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.7 pips",
      },
      instruments: {
        label: "Instruments",
        value: "300+ (FX, Crypto, Stocks)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$100",
      },
    },
    tags: ["Mobile App", "Options", "Education"],
    description:
      "Wide asset coverage with user-friendly apps.",
    websiteUrl: "https://www.avatrade.com",
    reviewUrl: "/brokers-review/forex-broker/avatrade",
  },
  {
    id: "fxtm",
    name: "FXTM",
    logo: "FT",
    rating: 4.0,
    badge: "Popular",
    multipliers: {
      regulator: {
        label: "Regulator",
        value: "FCA / CySEC",
      },
      execution: {
        label: "Execution",
        value: "STP / ECN",
      },
      spreadsFrom: {
        label: "Spreads from",
        value: "0.6 pips",
      },
      instruments: {
        label: "Instruments",
        value: "250+ (FX, Metals)",
      },
      minDeposit: {
        label: "Min Deposit",
        value: "$10",
      },
    },
    tags: ["Copy Trading", "MT4/MT5", "Education"],
    description:
      "Balanced offering with social/copy options.",
    websiteUrl: "https://www.fxtm.com",
    reviewUrl: "/brokers-review/forex-broker/fxtm",
  },
];


