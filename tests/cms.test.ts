import { describe, it, expect } from 'vitest';
import { projectCmsSchema, serviceCmsSchema, seoSchema } from '../lib/validation/cms';

describe('Sprint 4 Enterprise CMS Unit Tests', () => {
  it('validates project CMS schema correctly', () => {
    const validProject = {
      title: 'E-Commerce Platform Redesign',
      slug: 'ecommerce-redesign',
      clientName: 'Global Retail Inc',
      featured: true,
      status: 'published' as const,
      seo: {
        seoTitle: 'E-Commerce Case Study | Solvark',
        metaDescription: 'How Solvark increased conversions by 300%.',
      },
    };

    const result = projectCmsSchema.safeParse(validProject);
    expect(result.success).toBe(true);
  });

  it('rejects invalid meta title lengths exceeding 70 characters', () => {
    const invalidSeo = {
      seoTitle: 'A'.repeat(80),
    };

    const result = seoSchema.safeParse(invalidSeo);
    expect(result.success).toBe(false);
  });

  it('validates service CMS schema payload', () => {
    const validService = {
      title: 'SaaS Product Development',
      slug: 'saas-development',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
      features: ['Full Stack Architecture', 'Multi-tenant DB', 'Stripe Integration'],
    };

    const result = serviceCmsSchema.safeParse(validService);
    expect(result.success).toBe(true);
  });
});
