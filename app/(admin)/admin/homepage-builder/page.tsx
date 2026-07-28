import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminHomepageBuilderPage() {
  const sections = [
    { name: 'Split Blueprint Hero Section', status: 'Enabled', order: 1 },
    { name: 'Core Service Pillars', status: 'Enabled', order: 2 },
    { name: 'Featured Case Studies Grid', status: 'Enabled', order: 3 },
    { name: 'Minimal CTA Banner', status: 'Enabled', order: 4 },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Homepage Section Builder</h1>
          <p className="text-sm text-zinc-400">
            Reorder, toggle, and edit marketing homepage sections without writing code.
          </p>
        </div>
        <Button variant="primary" size="sm">Publish Homepage Changes</Button>
      </div>

      <Card variant="solid" className="border-zinc-800 p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">Order</th>
              <th className="p-4">Section Name</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {sections.map((sec) => (
              <tr key={sec.order} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-mono text-indigo-400">#{sec.order}</td>
                <td className="p-4 font-semibold text-white">{sec.name}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {sec.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">Edit Content</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
