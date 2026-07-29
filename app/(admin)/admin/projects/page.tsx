import { Button } from '@/components/ui/button';

export default function AdminProjectsPage() {
  const projects = [
    { id: '1', name: 'Global Retail Modernization', category: 'E-Commerce', status: 'Published', date: 'Jul 20, 2026' },
    { id: '2', name: 'Telemedicine SaaS Portal', category: 'Healthcare', status: 'Published', date: 'Jul 15, 2026' },
    { id: '3', name: 'Real-Time Financial Dashboard', category: 'FinTech', status: 'Draft', date: 'Jul 10, 2026' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800">
        <div>
          <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
            PORTFOLIO MANAGEMENT
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
            Portfolio & Case Studies Manager
          </h1>
          <p className="text-sm text-zinc-400 font-sans mt-1">
            Create, edit, publish, soft delete, and reorder portfolio case studies.
          </p>
        </div>
        <Button variant="primary" size="sm">
          + Create New Case Study
        </Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">PROJECT NAME</th>
              <th className="p-4">CATEGORY</th>
              <th className="p-4">STATUS</th>
              <th className="p-4">LAST UPDATED</th>
              <th className="p-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {projects.map((proj) => (
              <tr key={proj.id} className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 font-bold text-white text-sm">{proj.name}</td>
                <td className="p-4 text-[#0052FF] font-mono font-bold">{proj.category}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase ${
                    proj.status === 'Published'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  }`}>
                    {proj.status}
                  </span>
                </td>
                <td className="p-4 text-zinc-400 font-mono">{proj.date}</td>
                <td className="p-4 text-right space-x-2">
                  <Button variant="darkOutline" size="sm">Edit</Button>
                  <Button variant="darkOutline" size="sm" className="hover:border-red-500 hover:text-red-400">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
