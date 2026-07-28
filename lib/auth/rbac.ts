export type Role = 'owner' | 'admin' | 'editor' | 'designer' | 'developer' | 'viewer';

export type Permission =
  | 'cms.create'
  | 'cms.update'
  | 'cms.delete'
  | 'cms.publish'
  | 'media.upload'
  | 'media.delete'
  | 'users.manage'
  | 'settings.edit'
  | 'analytics.view';

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  owner: [
    'cms.create',
    'cms.update',
    'cms.delete',
    'cms.publish',
    'media.upload',
    'media.delete',
    'users.manage',
    'settings.edit',
    'analytics.view',
  ],
  admin: [
    'cms.create',
    'cms.update',
    'cms.delete',
    'cms.publish',
    'media.upload',
    'media.delete',
    'settings.edit',
    'analytics.view',
  ],
  editor: ['cms.create', 'cms.update', 'cms.publish', 'media.upload', 'analytics.view'],
  designer: ['media.upload', 'media.delete', 'cms.update'],
  developer: ['settings.edit', 'analytics.view'],
  viewer: ['analytics.view'],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  const permissions = ROLE_PERMISSIONS[role] || [];
  return permissions.includes(permission);
}
