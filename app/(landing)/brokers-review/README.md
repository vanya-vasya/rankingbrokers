# Brokers Review Section

This directory contains broker review pages for different trading categories.

## 📁 Structure

```
brokers-review/
└── forex-broker/
    └── page.tsx     # Forex brokers comparison page
```

## 🔗 Routes

| Page | Route | Description |
|------|-------|-------------|
| Forex Broker | `/brokers-review/forex-broker` | Forex brokers comparison and reviews |

## 📝 Future Pages (Planned)

Additional broker categories can be added following the same pattern:

- `/brokers-review/crypto-broker` - Cryptocurrency brokers
- `/brokers-review/stock-broker` - Stock brokers
- `/brokers-review/cfd-broker` - CFD brokers

## 🧩 Shared Components

Broker-related components are located in `/components/brokers/`:

- `broker-card.tsx` - Reusable broker card component
- `broker-data.ts` - Broker data structure and content

## 📊 Data Structure

Each broker page uses data from `components/brokers/broker-data.ts`:

```typescript
interface BrokerData {
  id: string;
  name: string;
  logo: string;
  rating: number;
  badge?: "Pro" | "Popular" | "Verified";
  multipliers: {
    regulator: { label, value };
    execution: { label, value };
    spreadsFrom: { label, value };
    instruments: { label, value };
    minDeposit: { label, value };
  };
  tags: string[];
  description: string;
  websiteUrl: string;
  reviewUrl: string;
}
```

## 🎨 Page Sections Template

Each broker review page should include:

1. **Breadcrumbs** - Navigation trail
2. **Hero/Header** - Title and description
3. **Search & Filters** - Filter bar for brokers
4. **Broker Cards** - Grid of broker cards
5. **Key Features** - Important considerations
6. **Pros & Cons** - Trading advantages/disadvantages
7. **Fees & Spreads** - Cost breakdown
8. **Platforms** - Trading platform information
9. **Regulations** - Regulatory body information
10. **Comparison Table** - Quick comparison view
11. **FAQs** - Frequently asked questions
12. **CTA** - Call-to-action section

## 🔍 SEO Metadata

Each page should export metadata:

```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  keywords: [...],
  openGraph: { ... },
  alternates: { canonical: "..." }
}
```

## 🧪 Testing

Tests for broker pages are located in `__tests__/app/brokers-review/`:

- Component rendering tests
- SEO metadata tests
- Navigation tests
- Breadcrumb tests

## 📱 Responsive Design

All pages should be fully responsive:
- **Mobile:** Single column layout
- **Tablet:** 2-3 column layout
- **Desktop:** Full multi-column layout

## 🚀 Adding a New Broker Category

To add a new broker category:

1. Create new directory: `app/(landing)/brokers-review/[category]-broker/`
2. Add `page.tsx` with page component
3. Create broker data in `components/brokers/broker-data.ts`
4. Update `components/landing/header.tsx` navigation
5. Add route to `app/sitemap.ts`
6. Create tests in `__tests__/app/brokers-review/`
7. Update this README

## 📚 Documentation

- **Implementation Guide:** `/FOREX_BROKER_IMPLEMENTATION.md`
- **Quick Start:** `/QUICKSTART_FOREX_BROKER.md`
- **Test Docs:** `/__tests__/README.md`

## 🎯 Best Practices

1. **Reuse Components** - Use existing `BrokerCard` component
2. **Follow Pattern** - Match the forex-broker page structure
3. **SEO First** - Always include complete metadata
4. **Test Coverage** - Write comprehensive tests
5. **Responsive** - Test on all device sizes
6. **Accessible** - Use semantic HTML and ARIA labels
7. **Type Safe** - Use TypeScript interfaces
8. **Document** - Add comments and documentation

## 🔗 Navigation

Broker review pages are accessible via:
- Header dropdown: "Brokers Review" → "[Category] Brokers"
- Direct URL: `/brokers-review/[category]-broker`
- Breadcrumbs from any page

## ✅ Completed

- [x] Forex Broker page
- [ ] Crypto Broker page (planned)
- [ ] Stock Broker page (planned)
- [ ] CFD Broker page (planned)

---

**Last Updated:** October 20, 2025


