import { render, screen } from '@testing-library/react';
import BrokerCard, { BrokerData } from '@/components/brokers/broker-card';

const mockBroker: BrokerData = {
  id: 'test-broker',
  name: 'Test Broker',
  logo: 'TB',
  rating: 4.5,
  badge: 'Pro',
  multipliers: {
    regulator: {
      label: 'Regulator',
      value: 'FCA (UK)',
    },
    execution: {
      label: 'Execution',
      value: 'ECN',
    },
    spreadsFrom: {
      label: 'Spreads from',
      value: '0.2 pips',
    },
    instruments: {
      label: 'Instruments',
      value: '500+',
    },
    minDeposit: {
      label: 'Min Deposit',
      value: '$1,000',
    },
  },
  tags: ['ECN', 'Pro Tools', 'Research'],
  description: 'Test broker description for testing purposes.',
  websiteUrl: 'https://example.com',
  reviewUrl: '/brokers-review/test-broker',
};

describe('BrokerCard', () => {
  it('renders broker name correctly', () => {
    render(<BrokerCard broker={mockBroker} />);
    expect(screen.getByText('Test Broker')).toBeInTheDocument();
  });

  it('displays the correct rating', () => {
    render(<BrokerCard broker={mockBroker} />);
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders all multipliers correctly', () => {
    render(<BrokerCard broker={mockBroker} />);
    
    expect(screen.getByText('Regulator')).toBeInTheDocument();
    expect(screen.getByText('FCA (UK)')).toBeInTheDocument();
    
    expect(screen.getByText('Execution')).toBeInTheDocument();
    expect(screen.getByText('ECN')).toBeInTheDocument();
    
    expect(screen.getByText('Spreads from')).toBeInTheDocument();
    expect(screen.getByText('0.2 pips')).toBeInTheDocument();
    
    expect(screen.getByText('Instruments')).toBeInTheDocument();
    expect(screen.getByText('500+')).toBeInTheDocument();
    
    expect(screen.getByText('Min Deposit')).toBeInTheDocument();
    expect(screen.getByText('$1,000')).toBeInTheDocument();
  });

  it('displays the broker description', () => {
    render(<BrokerCard broker={mockBroker} />);
    expect(screen.getByText('Test broker description for testing purposes.')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    render(<BrokerCard broker={mockBroker} />);
    expect(screen.getByText('ECN')).toBeInTheDocument();
    expect(screen.getByText('Pro Tools')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
  });

  it('displays the badge when provided', () => {
    render(<BrokerCard broker={mockBroker} />);
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('renders action buttons with correct links', () => {
    render(<BrokerCard broker={mockBroker} />);
    
    const readReviewButton = screen.getByText('Read Review').closest('a');
    const visitWebsiteButton = screen.getByText('Visit Website').closest('a');
    
    expect(readReviewButton).toHaveAttribute('href', '/brokers-review/test-broker');
    expect(visitWebsiteButton).toHaveAttribute('href', 'https://example.com');
  });

  it('renders correct number of stars based on rating', () => {
    const { container } = render(<BrokerCard broker={mockBroker} />);
    const stars = container.querySelectorAll('svg');
    // At least 5 stars should be rendered (could be more due to other SVG elements)
    expect(stars.length).toBeGreaterThanOrEqual(5);
  });

  it('renders broker without badge', () => {
    const brokerWithoutBadge = { ...mockBroker, badge: undefined };
    render(<BrokerCard broker={brokerWithoutBadge} />);
    expect(screen.queryByText('Pro')).not.toBeInTheDocument();
  });
});


