import { MetadataRoute } from 'next';
import { SITE_CONFIG, NAVIGATION_LINKS } from '@/lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes = NAVIGATION_LINKS.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: link.href === '/' ? 1.0 : 0.8,
  }));

  const serviceSlugs = [
    'website-design-development',
    'website-redesigning',
    'cloud-services',
    'saas-product-development',
    'business-process-automation',
    'seo',
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
