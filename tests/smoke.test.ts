import { describe, it, expect } from 'vitest';
import { GET as healthHandler } from '../app/api/health/route';
import sitemapHandler from '../app/sitemap';
import robotsHandler from '../app/robots';

describe('Sprint 8 Release Engineering — Automated Smoke Tests', () => {
  it('verifies /api/health endpoint returns 200 OK with healthy status', async () => {
    const response = await healthHandler();
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.status).toBe('healthy');
    expect(json.version).toBe('1.0.0-production');
  });

  it('verifies dynamic sitemap contains core marketing URLs', async () => {
    const sitemap = await sitemapHandler();
    expect(sitemap.length).toBeGreaterThan(0);
    const urls = sitemap.map((item) => item.url);
    expect(urls.some((u) => u.endsWith('/'))).toBe(true);
    expect(urls.some((u) => u.includes('/services/'))).toBe(true);
  });

  it('verifies robots.txt disallows sensitive admin pathways', () => {
    const config = robotsHandler();
    const rules = Array.isArray(config.rules) ? config.rules[0] : config.rules;
    expect(rules.disallow).toContain('/admin/');
    expect(rules.disallow).toContain('/api/private/');
  });
});
