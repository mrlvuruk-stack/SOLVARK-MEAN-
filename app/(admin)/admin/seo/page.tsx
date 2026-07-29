import { Button } from '@/components/ui/button';

export default function AdminSeoPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div>
        <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
          SEARCH ENGINE OPTIMIZATION
        </div>
        <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
          SEO & Open Graph Manager
        </h1>
        <p className="text-sm text-zinc-400 font-sans mt-1">
          Configure default meta titles, descriptions, OpenGraph social card previews, sitemap priorities, and robots directives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-4">
          <h2 className="text-xl font-bold font-heading text-white border-b border-zinc-800 pb-2">
            Default Metadata Configuration
          </h2>
          <div className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-zinc-400 mb-1 font-mono uppercase font-semibold">Site Title Template</label>
              <input
                type="text"
                defaultValue="%s | Solvark Enterprise Digital Partner"
                className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-[#0052FF]"
              />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1 font-mono uppercase font-semibold">Default Meta Description</label>
              <textarea
                rows={3}
                defaultValue="Solvark helps companies scale through modern software engineering, cloud infrastructure, AI workflow automation, and digital transformation."
                className="w-full p-3 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-[#0052FF]"
              />
            </div>
          </div>
          <Button variant="primary" size="sm">Save SEO Configuration &rarr;</Button>
        </div>

        <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-4">
          <h2 className="text-xl font-bold font-heading text-white border-b border-zinc-800 pb-2">
            Search Crawler Diagnostics
          </h2>
          <div className="space-y-3 text-xs font-mono text-zinc-300">
            <div className="p-3 bg-zinc-950 border border-zinc-800 flex justify-between items-center">
              <span>XML Sitemap Route:</span>
              <span className="text-emerald-400 font-bold">/sitemap.xml (Active)</span>
            </div>
            <div className="p-3 bg-zinc-950 border border-zinc-800 flex justify-between items-center">
              <span>Robots Directives:</span>
              <span className="text-emerald-400 font-bold">/robots.txt (Active)</span>
            </div>
            <div className="p-3 bg-zinc-950 border border-zinc-800 flex justify-between items-center">
              <span>Disallowed Paths:</span>
              <span className="text-[#FF2A85] font-bold">/admin/*, /api/private/*</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
