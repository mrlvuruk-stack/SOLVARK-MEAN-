import { z } from 'zod';

export const seoSchema = z.object({
  seoTitle: z.string().max(70, 'Meta title should be 70 chars or less').optional(),
  metaDescription: z.string().max(160, 'Meta description should be 160 chars or less').optional(),
  ogImage: z.string().url('OG Image must be a valid URL').optional().or(z.literal('')),
  canonicalUrl: z.string().url('Canonical URL must be a valid URL').optional().or(z.literal('')),
});

export const projectCmsSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2, 'Title is required'),
  slug: z.string().min(2, 'Slug is required'),
  clientName: z.string().optional(),
  industry: z.string().optional(),
  shortDescription: z.string().optional(),
  fullDescription: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  results: z.string().optional(),
  liveUrl: z.string().url().optional().or(z.literal('')),
  githubUrl: z.string().url().optional().or(z.literal('')),
  featured: z.boolean().default(false),
  status: z.enum(['draft', 'scheduled', 'published', 'archived']).default('draft'),
  seo: seoSchema.optional(),
});

export const serviceCmsSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2, 'Title is required'),
  slug: z.string().min(2, 'Slug is required'),
  iconName: z.string().optional(),
  bannerUrl: z.string().optional(),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  features: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  seo: seoSchema.optional(),
});

export const siteSettingsSchema = z.object({
  siteName: z.string().min(1, 'Site name required'),
  tagline: z.string().optional(),
  description: z.string().optional(),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
  officeAddress: z.string().optional(),
  twitterUrl: z.string().url().optional().or(z.literal('')),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  githubUrl: z.string().url().optional().or(z.literal('')),
  ga4Id: z.string().optional(),
  clarityId: z.string().optional(),
});
