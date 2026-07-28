import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminMediaPage() {
  const mediaFiles = [
    { name: 'hero_3d_core.webp', type: 'IMAGE/WEBP', size: '240 KB', bucket: 'public-assets' },
    { name: 'solvark_logo_brand.png', type: 'IMAGE/PNG', size: '45 KB', bucket: 'branding' },
    { name: 'architecture_blueprint.pdf', type: 'APPLICATION/PDF', size: '1.2 MB', bucket: 'whitepapers' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Media Library & Asset Storage</h1>
          <p className="text-sm text-zinc-400">
            Upload, search, organize, and delete Supabase Storage media assets.
          </p>
        </div>
        <Button variant="primary" size="sm">
          + Upload File
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mediaFiles.map((file, idx) => (
          <Card key={idx} variant="solid" className="p-6 space-y-3 border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-indigo-400 uppercase">{file.type}</span>
              <span className="text-[10px] font-mono text-zinc-500">{file.size}</span>
            </div>
            <div className="text-sm font-bold text-white truncate">{file.name}</div>
            <div className="text-xs text-zinc-500 font-mono">Bucket: {file.bucket}</div>
            <div className="pt-2 flex justify-end">
              <Button variant="outline" size="sm">Delete Asset</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
