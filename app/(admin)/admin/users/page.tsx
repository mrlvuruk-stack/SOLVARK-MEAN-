import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminUsersPage() {
  const users = [
    { name: 'System Admin', email: 'admin@solvark.com', role: 'Owner', status: 'Active' },
    { name: 'Sarah Lead Architect', email: 'sarah@solvark.com', role: 'Admin', status: 'Active' },
    { name: 'David Editor', email: 'david@solvark.com', role: 'Editor', status: 'Active' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management & Role Permissions</h1>
          <p className="text-sm text-zinc-400">
            Invite internal administrators, assign RBAC roles (Owner, Admin, Editor, Developer, Viewer), and manage security credentials.
          </p>
        </div>
        <Button variant="primary" size="sm">+ Invite Admin User</Button>
      </div>

      <Card variant="solid" className="border-zinc-800 p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">User Name</th>
              <th className="p-4">Assigned Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {users.map((u, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">
                  {u.name}
                  <div className="text-[10px] text-zinc-500 font-mono">{u.email}</div>
                </td>
                <td className="p-4 text-indigo-400 font-mono">{u.role}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {u.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">Edit Permissions</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
