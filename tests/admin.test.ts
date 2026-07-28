import { describe, it, expect } from 'vitest';
import { ROLE_PERMISSIONS, hasPermission } from '../lib/auth/rbac';

describe('Sprint 6 Enterprise Admin Panel Unit Tests', () => {
  it('verifies owner role has complete administrative permission list', () => {
    const ownerPerms = ROLE_PERMISSIONS['owner'];
    expect(ownerPerms).toContain('users.manage');
    expect(ownerPerms).toContain('settings.edit');
    expect(ownerPerms).toContain('cms.publish');
  });

  it('verifies viewer role is restricted to view-only operations', () => {
    expect(hasPermission('viewer', 'cms.delete')).toBe(false);
    expect(hasPermission('viewer', 'users.manage')).toBe(false);
    expect(hasPermission('viewer', 'analytics.view')).toBe(true);
  });
});
