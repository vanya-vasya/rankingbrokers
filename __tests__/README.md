# Test Suite Documentation

## Overview
This directory contains comprehensive tests for the Forex Broker page and BrokerCard component.

## Test Coverage

### 1. BrokerCard Component Tests (`components/brokers/broker-card.test.tsx`)
- ✅ Renders broker name correctly
- ✅ Displays correct rating
- ✅ Renders all multipliers (Regulator, Execution, Spreads, Instruments, Min Deposit)
- ✅ Displays broker description
- ✅ Renders all tags
- ✅ Shows badge when provided
- ✅ Renders action buttons with correct links
- ✅ Displays correct number of stars based on rating
- ✅ Handles broker without badge

### 2. Forex Broker Page Tests (`app/brokers-review/forex-broker-page.test.tsx`)
#### Routing & Navigation
- ✅ Page renders without crashing
- ✅ Correct route structure verification

#### Breadcrumbs
- ✅ Renders breadcrumbs correctly (Home > Brokers Review > Forex Broker)
- ✅ Home link points to correct route
- ✅ Correct hierarchy display

#### Content Sections
- ✅ Overview header section
- ✅ Search and filter section
- ✅ Key features section
- ✅ Pros and cons section
- ✅ Fees and spreads section
- ✅ Trading platforms section
- ✅ Regulations section
- ✅ Comparison table section
- ✅ FAQ section
- ✅ CTA section

#### Broker Cards
- ✅ Renders broker cards grid
- ✅ Displays broker count

#### Responsive Layout
- ✅ Grid/list view toggle buttons
- ✅ Responsive container classes

### 3. SEO Metadata Tests (`app/brokers-review/forex-broker-seo.test.tsx`)
- ✅ Correct page title
- ✅ Meta description
- ✅ Relevant keywords
- ✅ Open Graph metadata
- ✅ Canonical URL
- ✅ Current year in title (2025)
- ✅ Proper SEO structure
- ✅ Optimal description length (50-160 characters)
- ✅ Optimal title length (< 60 characters)
- ✅ URL consistency between OG and canonical

## Running Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Specific Test File
```bash
npm test broker-card.test.tsx
npm test forex-broker-page.test.tsx
npm test forex-broker-seo.test.tsx
```

## Test Configuration

### jest.config.js
- Uses Next.js Jest configuration
- JSdom environment for React component testing
- Path aliasing (@/) configured
- Coverage collection from app/ and components/

### jest.setup.js
- Imports @testing-library/jest-dom for extended matchers

## Best Practices

1. **Component Testing**: Test user-visible behavior, not implementation details
2. **SEO Testing**: Verify metadata structure and optimal lengths
3. **Routing Testing**: Ensure correct navigation and breadcrumb hierarchy
4. **Responsive Testing**: Check for responsive classes and layout elements
5. **Accessibility**: Use semantic queries (getByRole, getByLabelText) when possible

## Coverage Goals
- Line Coverage: > 80%
- Branch Coverage: > 75%
- Function Coverage: > 80%
- Statement Coverage: > 80%

## Future Test Additions
- [ ] Integration tests for broker filtering
- [ ] E2E tests for full user flows
- [ ] Visual regression tests
- [ ] Performance tests
- [ ] Accessibility audit tests


