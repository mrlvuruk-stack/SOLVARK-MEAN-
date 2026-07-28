import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminProjectsPage() {
  const projects = [
    { id: '1', name: 'Global Retail Modernization', category: 'E-Commerce', status: 'Published', date: 'Jul 20, 2026' },
    { id: '2', name: 'Telemedicine SaaS Portal', category: 'Healthcare', status: 'Published', date: 'Jul 15, 2026' },
    { id: '3', name: 'Real-Time Financial Dashboard', category: 'FinTech', status: 'Draft', date: 'Jul 10, 2026' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portfolio & Case Studies Manager</h1>
          <p className="text-sm text-zinc-400">
            Create, edit, publish, soft delete, and reorder portfolio case studies.
          </p>
        </div>
        <Button variant="primary" size="sm">
          + Create New Case Study
        </Button>
      </div>

      <Card variant="solid" className="border-zinc-800 p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">Project Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4">Last Updated</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {projects.map((proj) => (
              <tr key={proj.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">{proj.name}</td>
                <td className="p-4 text-indigo-400 font-mono">{proj.category}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                    proj.status === 'Published'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {proj.status}
                  </span>
                </td>
                <td className="p-4 text-zinc-500 font-mono">{proj.date}</td>
                <td className="p-4 text-right space-x-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
