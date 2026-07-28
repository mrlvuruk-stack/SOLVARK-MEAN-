import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminSeoPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">SEO Center & Open Graph Manager</h1>
        <p className="text-sm text-zinc-400">
          Configure default meta titles, descriptions, open graph social cards, sitemap priorities, and robots directives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card variant="solid" className="p-6 space-y-4 border-zinc-800">
          <h2 className="text-xl font-bold text-white">Default Metadata Settings</h2>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-zinc-400 mb-1 font-mono">Site Title Template</label>
              <input type="text" defaultValue="%s | Solvark Digital" className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white rounded" />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1 font-mono">Default Meta Description</label>
              <textarea rows={3} defaultValue="Solvark helps companies scale through modern software engineering, cloud infrastructure, AI automation, and growth marketing." className="w-full p-3 bg-zinc-950 border border-zinc-800 text-white rounded" />
            </div>
          </div>
          <Button variant="primary" size="sm">Save SEO Settings</Button>
        </Card>

        <Card variant="solid" className="p-6 space-y-4 border-zinc-800">
          <h2 className="text-xl font-bold text-white">Crawler Status</h2>
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            <div>XML Sitemap: <span className="text-emerald-400">Active (/sitemap.xml)</span></div>
            <div>Robots Policy: <span className="text-emerald-400">Active (/robots.txt)</span></div>
            <div>Disallow Routes: <span className="text-indigo-400">/admin/, /api/private/</span></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
