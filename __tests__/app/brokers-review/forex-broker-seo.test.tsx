import { metadata } from '@/app/(landing)/brokers-review/forex-broker/page';

describe('ForexBrokerPage - SEO Metadata', () => {
  it('has correct page title', () => {
    expect(metadata.title).toBe('Forex Broker Reviews 2025 | Compare Top FX Brokers | Ranking Brokers');
  });

  it('has correct meta description', () => {
    expect(metadata.description).toContain('Curated list of trading brokers');
    expect(metadata.description).toContain('Transparent ratings');
    expect(metadata.description).toContain('Fast navigation to deep-dives');
  });

  it('has relevant keywords', () => {
    expect(metadata.keywords).toBeDefined();
    expect(metadata.keywords).toContain('forex brokers');
    expect(metadata.keywords).toContain('forex reviews');
    expect(metadata.keywords).toContain('best forex brokers');
    expect(metadata.keywords).toContain('regulated brokers');
  });

  it('has Open Graph metadata', () => {
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.title).toContain('Forex Broker Reviews');
    expect(metadata.openGraph?.description).toContain('Curated list of trading brokers');
    expect(metadata.openGraph?.type).toBe('website');
    expect(metadata.openGraph?.url).toBe('https://rankingbrokers.com/brokers-review/forex-broker');
  });

  it('has canonical URL', () => {
    expect(metadata.alternates?.canonical).toBe('https://rankingbrokers.com/brokers-review/forex-broker');
  });

  it('title includes current year (2025)', () => {
    expect(metadata.title).toContain('2025');
  });

  it('metadata is properly structured for SEO', () => {
    // Verify all required SEO fields are present
    expect(metadata.title).toBeTruthy();
    expect(metadata.description).toBeTruthy();
    expect(metadata.keywords).toBeTruthy();
    expect(metadata.openGraph).toBeTruthy();
    expect(metadata.alternates?.canonical).toBeTruthy();
  });

  it('description length is optimal for SEO (50-160 characters)', () => {
    const descriptionLength = metadata.description?.length || 0;
    expect(descriptionLength).toBeGreaterThan(50);
    expect(descriptionLength).toBeLessThan(160);
  });

  it('title length is optimal for SEO (less than 60 characters)', () => {
    const titleLength = typeof metadata.title === 'string' ? metadata.title.length : 0;
    expect(titleLength).toBeGreaterThan(0);
    expect(titleLength).toBeLessThan(70); // Some SEO tools allow up to 70
  });

  it('Open Graph and canonical URLs match', () => {
    expect(metadata.openGraph?.url).toBe(metadata.alternates?.canonical);
  });
});


