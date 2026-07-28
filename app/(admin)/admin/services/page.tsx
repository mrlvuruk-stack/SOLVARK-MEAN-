import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminServicesPage() {
  const services = [
    { id: '1', title: 'Experience & Brand Design', pillar: 'Design', features: 5, status: 'Active' },
    { id: '2', title: 'Software Engineering & SaaS', pillar: 'Engineering', features: 6, status: 'Active' },
    { id: '3', title: 'Cloud & Automation', pillar: 'Cloud', features: 4, status: 'Active' },
    { id: '4', title: 'Growth & Digital Marketing', pillar: 'Growth', features: 4, status: 'Active' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Service Offerings Manager</h1>
          <p className="text-sm text-zinc-400">
            Configure service deliverables, pricing tiers, tech stack tags, and FAQ entries.
          </p>
        </div>
        <Button variant="primary" size="sm">
          + Add New Service Offering
        </Button>
      </div>

      <Card variant="solid" className="border-zinc-800 p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">Service Title</th>
              <th className="p-4">Category Pillar</th>
              <th className="p-4">Deliverables</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {services.map((srv) => (
              <tr key={srv.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">{srv.title}</td>
                <td className="p-4 text-indigo-400 font-mono">{srv.pillar}</td>
                <td className="p-4 text-zinc-400 font-mono">{srv.features} items</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {srv.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <Button variant="ghost" size="sm">Configure</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
