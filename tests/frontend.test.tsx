import { describe, it, expect } from 'vitest';
import { generateOrganizationSchema, generateServiceSchema, generateFaqSchema } from '../lib/seo';

describe('Sprint 5 Public Website & SEO Unit Tests', () => {
  it('generates valid Schema.org Organization JSON-LD structure', () => {
    const schema = generateOrganizationSchema();
    expect(schema['@type']).toBe('Organization');
    expect(schema.name).toBe('Solvark');
  });

  it('generates valid Schema.org Service JSON-LD payload', () => {
    const schema = generateServiceSchema('SaaS Development', 'Cloud SaaS building', 'saas-development');
    expect(schema['@type']).toBe('Service');
    expect(schema.url).toContain('/services/saas-development');
  });

  it('generates valid Schema.org FAQPage payload', () => {
    const faqs = [{ question: 'What is Solvark?', answer: 'Digital transformation company.' }];
    const schema = generateFaqSchema(faqs);
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity.length).toBe(1);
  });
});
