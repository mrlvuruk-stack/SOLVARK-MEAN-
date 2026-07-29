import { Button } from '@/components/ui/button';

export default function AdminUsersPage() {
  const users = [
    { name: 'System Super Admin', email: 'admin@solvark.com', role: 'Owner / SuperAdmin', status: 'Active' },
    { name: 'Sarah Vance', email: 'sarah@solvark.com', role: 'Lead Architect', status: 'Active' },
    { name: 'David Kim', email: 'david@solvark.com', role: 'DevOps Lead', status: 'Active' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800">
        <div>
          <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
            ACCESS CONTROL & RBAC
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
            Users & Roles Management
          </h1>
          <p className="text-sm text-zinc-400 font-sans mt-1">
            Invite internal administrators, assign role-based access control (RBAC), and manage security permissions.
          </p>
        </div>
        <Button variant="primary" size="sm">+ Invite Admin User</Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">USER NAME & EMAIL</th>
              <th className="p-4">ASSIGNED ROLE</th>
              <th className="p-4">STATUS</th>
              <th className="p-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {users.map((u, i) => (
              <tr key={i} className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 font-semibold text-white">
                  {u.name}
                  <div className="text-[10px] text-zinc-400 font-mono">{u.email}</div>
                </td>
                <td className="p-4 text-[#0052FF] font-mono font-bold">{u.role}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {u.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="darkOutline" size="sm">Edit Roles &rarr;</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
