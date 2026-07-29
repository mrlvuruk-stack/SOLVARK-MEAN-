import { Button } from '@/components/ui/button';

export default function AdminMediaPage() {
  const mediaFiles = [
    { name: 'hero_3d_core.webp', type: 'IMAGE/WEBP', size: '240 KB', bucket: 'public-assets' },
    { name: 'solvark_logo_brand.png', type: 'IMAGE/PNG', size: '45 KB', bucket: 'branding' },
    { name: 'architecture_blueprint.pdf', type: 'APPLICATION/PDF', size: '1.2 MB', bucket: 'whitepapers' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800">
        <div>
          <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
            STORAGE & ASSETS
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
            Media Library & Asset Storage
          </h1>
          <p className="text-sm text-zinc-400 font-sans mt-1">
            Upload, search, organize, and manage Supabase Storage media assets.
          </p>
        </div>
        <Button variant="primary" size="sm">
          + Upload Asset
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mediaFiles.map((file, idx) => (
          <div key={idx} className="p-6 bg-zinc-900 border border-zinc-800 space-y-4 hover:border-[#0052FF] transition-all">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-[10px] font-mono text-[#0052FF] font-bold uppercase bg-blue-950/40 px-2 py-0.5 border border-blue-800/50">{file.type}</span>
              <span className="text-[10px] font-mono text-zinc-400">{file.size}</span>
            </div>
            <div className="text-base font-bold text-white truncate font-heading">{file.name}</div>
            <div className="text-xs text-zinc-400 font-mono">BUCKET: {file.bucket}</div>
            <div className="pt-2 flex justify-end">
              <Button variant="darkOutline" size="sm" className="hover:border-red-500 hover:text-red-400">
                Delete Asset
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
