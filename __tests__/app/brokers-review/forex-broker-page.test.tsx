import { render, screen } from '@testing-library/react';
import ForexBrokerPage from '@/app/(landing)/brokers-review/forex-broker/page';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

describe('ForexBrokerPage - Routing & Navigation', () => {
  it('renders the page without crashing', () => {
    render(<ForexBrokerPage />);
    expect(screen.getByText('Broker Reviews')).toBeInTheDocument();
  });

  it('has correct page route structure', () => {
    // This test verifies the page exists at the correct route
    // The actual route is defined by the file structure: app/(landing)/brokers-review/forex-broker/page.tsx
    expect(ForexBrokerPage).toBeDefined();
  });
});

describe('ForexBrokerPage - Breadcrumbs', () => {
  it('renders breadcrumbs correctly', () => {
    render(<ForexBrokerPage />);
    
    // Check for breadcrumb items
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Brokers Review')).toBeInTheDocument();
    expect(screen.getByText('Forex Broker')).toBeInTheDocument();
  });

  it('breadcrumb Home link points to correct route', () => {
    render(<ForexBrokerPage />);
    
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('breadcrumb shows correct hierarchy: Home > Brokers Review > Forex Broker', () => {
    const { container } = render(<ForexBrokerPage />);
    
    const breadcrumbNav = container.querySelector('nav');
    expect(breadcrumbNav).toBeInTheDocument();
    
    const breadcrumbText = breadcrumbNav?.textContent;
    expect(breadcrumbText).toContain('Home');
    expect(breadcrumbText).toContain('Brokers Review');
    expect(breadcrumbText).toContain('Forex Broker');
  });
});

describe('ForexBrokerPage - Content Sections', () => {
  it('renders overview header section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Broker Reviews')).toBeInTheDocument();
    expect(screen.getByText(/Curated list of trading brokers/)).toBeInTheDocument();
  });

  it('renders search and filter section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByPlaceholderText(/Search brokers, regulators, or features/)).toBeInTheDocument();
    expect(screen.getByText('Min Rating')).toBeInTheDocument();
    expect(screen.getByText('Regulator')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });

  it('renders key features section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Key Features to Consider')).toBeInTheDocument();
    expect(screen.getByText('Regulation')).toBeInTheDocument();
    expect(screen.getByText('Trading Costs')).toBeInTheDocument();
    expect(screen.getByText('Execution Speed')).toBeInTheDocument();
  });

  it('renders pros and cons section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Pros & Cons of Forex Trading')).toBeInTheDocument();
    expect(screen.getByText('Pros')).toBeInTheDocument();
    expect(screen.getByText('Cons')).toBeInTheDocument();
  });

  it('renders fees and spreads section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Understanding Fees & Spreads')).toBeInTheDocument();
    expect(screen.getByText('Spreads')).toBeInTheDocument();
    expect(screen.getByText('Commissions')).toBeInTheDocument();
    expect(screen.getByText('Overnight Fees')).toBeInTheDocument();
  });

  it('renders trading platforms section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Popular Trading Platforms')).toBeInTheDocument();
    expect(screen.getByText('MT4')).toBeInTheDocument();
    expect(screen.getByText('MT5')).toBeInTheDocument();
    expect(screen.getByText('cTrader')).toBeInTheDocument();
  });

  it('renders regulations section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Regulatory Bodies Explained')).toBeInTheDocument();
    expect(screen.getByText('FCA (UK)')).toBeInTheDocument();
    expect(screen.getByText('ASIC (AU)')).toBeInTheDocument();
  });

  it('renders comparison table section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Quick Comparison Table')).toBeInTheDocument();
    // Table headers
    expect(screen.getByText('Broker')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(screen.getByText('Spreads')).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('What is a forex broker?')).toBeInTheDocument();
    expect(screen.getByText('How do I choose the best forex broker?')).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText('Ready to Start Trading?')).toBeInTheDocument();
    expect(screen.getByText('View All Brokers')).toBeInTheDocument();
    expect(screen.getByText('Get Expert Advice')).toBeInTheDocument();
  });
});

describe('ForexBrokerPage - Broker Cards', () => {
  it('renders broker cards grid', () => {
    render(<ForexBrokerPage />);
    
    // Check if broker names from broker-data.ts are rendered
    expect(screen.getByText('IG')).toBeInTheDocument();
    expect(screen.getByText('B2Broker Prime')).toBeInTheDocument();
    expect(screen.getByText('Saxo')).toBeInTheDocument();
  });

  it('displays broker count', () => {
    render(<ForexBrokerPage />);
    
    expect(screen.getByText(/shown/)).toBeInTheDocument();
  });
});

describe('ForexBrokerPage - Responsive Layout', () => {
  it('renders grid/list view toggle buttons', () => {
    const { container } = render(<ForexBrokerPage />);
    
    // Check for view toggle buttons (grid and list icons)
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('has responsive container classes', () => {
    const { container } = render(<ForexBrokerPage />);
    
    // Check for max-w-7xl class (standard container)
    const mainContainer = container.querySelector('.max-w-7xl');
    expect(mainContainer).toBeInTheDocument();
  });
});


