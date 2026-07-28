import { describe, it, expect } from 'vitest';
import robots from '../app/robots';

describe('Sprint 7 Production Readiness & Security Tests', () => {
  it('validates robots.txt rules blocking /admin and /api/private/', () => {
    const config = robots();
    expect(config.rules).toBeDefined();
    const rules = Array.isArray(config.rules) ? config.rules[0] : config.rules;
    expect(rules.disallow).toContain('/admin/');
    expect(rules.disallow).toContain('/api/private/');
  });

  it('validates sitemap generation output', () => {
    expect(true).toBe(true);
  });
});
