import { describe, it, expect } from 'vitest';
import { envSchema } from '../lib/validation/env';
import { handleApiError, ValidationError, UnauthorizedError } from '../lib/errors';
import { hasPermission } from '../lib/auth/rbac';

describe('Sprint 3 Backend Unit Tests', () => {
  it('validates environment schema correctly', () => {
    const validEnv = {
      NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'test-anon-key',
    };
    const result = envSchema.safeParse(validEnv);
    expect(result.success).toBe(true);
  });

  it('handles API validation errors with proper 400 status contract', () => {
    const err = new ValidationError('Invalid email format', { email: 'bad-email' });
    const response = handleApiError(err);
    expect(response.statusCode).toBe(400);
    expect(response.error.code).toBe('VALIDATION_ERROR');
  });

  it('enforces RBAC permissions hierarchy', () => {
    expect(hasPermission('owner', 'users.manage')).toBe(true);
    expect(hasPermission('editor', 'users.manage')).toBe(false);
    expect(hasPermission('editor', 'cms.publish')).toBe(true);
    expect(hasPermission('viewer', 'cms.publish')).toBe(false);
  });
});
