import { Button } from '@/components/ui/button';

export default function AdminHomepageBuilderPage() {
  const sections = [
    { name: 'Split Blueprint Hero Section', status: 'Enabled', order: 1 },
    { name: 'Core Service Pillars', status: 'Enabled', order: 2 },
    { name: 'Featured Case Studies Grid', status: 'Enabled', order: 3 },
    { name: 'Minimal CTA Banner', status: 'Enabled', order: 4 },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800">
        <div>
          <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
            HOMEPAGE CMS BUILDER
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
            Homepage Section Builder
          </h1>
          <p className="text-sm text-zinc-400 font-sans mt-1">
            Reorder, toggle visibility, and edit marketing homepage sections without writing code.
          </p>
        </div>
        <Button variant="primary" size="sm">Publish Homepage Changes</Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">ORDER</th>
              <th className="p-4">SECTION NAME</th>
              <th className="p-4">STATUS</th>
              <th className="p-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {sections.map((sec) => (
              <tr key={sec.order} className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 font-mono text-[#0052FF] font-bold">#{sec.order}</td>
                <td className="p-4 font-bold text-white text-sm">{sec.name}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {sec.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="darkOutline" size="sm">Edit Content &rarr;</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
