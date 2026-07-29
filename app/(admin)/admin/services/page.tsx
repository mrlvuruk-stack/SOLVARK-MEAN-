import { Button } from '@/components/ui/button';

export default function AdminServicesPage() {
  const services = [
    { id: '1', title: 'Experience & Brand Design', pillar: 'Design', features: 5, status: 'Active' },
    { id: '2', title: 'Software Engineering & SaaS', pillar: 'Engineering', features: 6, status: 'Active' },
    { id: '3', title: 'Cloud & Automation', pillar: 'Cloud', features: 4, status: 'Active' },
    { id: '4', title: 'Growth & Digital Marketing', pillar: 'Growth', features: 4, status: 'Active' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800">
        <div>
          <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
            SERVICE ARCHITECTURE
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
            Service Offerings Manager
          </h1>
          <p className="text-sm text-zinc-400 font-sans mt-1">
            Configure service deliverables, pricing tiers, tech stack tags, and FAQ entries.
          </p>
        </div>
        <Button variant="primary" size="sm">
          + Add New Service Offering
        </Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">SERVICE TITLE</th>
              <th className="p-4">CATEGORY PILLAR</th>
              <th className="p-4">DELIVERABLES</th>
              <th className="p-4">STATUS</th>
              <th className="p-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {services.map((srv) => (
              <tr key={srv.id} className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 font-bold text-white text-sm">{srv.title}</td>
                <td className="p-4 text-[#0052FF] font-mono font-bold">{srv.pillar}</td>
                <td className="p-4 text-zinc-300 font-mono">{srv.features} items</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {srv.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="darkOutline" size="sm">Configure &rarr;</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
