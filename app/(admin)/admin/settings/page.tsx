import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminSettingsPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Global Platform Settings</h1>
        <p className="text-sm text-zinc-400">
          Configure site brand parameters, analytics IDs, notification emails, and feature flags.
        </p>
      </div>

      <Card variant="solid" className="p-6 space-y-4 border-zinc-800 max-w-2xl">
        <h2 className="text-xl font-bold text-white">General Configuration</h2>
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-zinc-400 mb-1 font-mono">Company Legal Name</label>
            <input type="text" defaultValue="Solvark Technology Inc." className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white rounded" />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1 font-mono">Primary Contact Email</label>
            <input type="email" defaultValue="contact@solvark.com" className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white rounded" />
          </div>
        </div>
        <Button variant="primary" size="sm">Save Platform Settings</Button>
      </Card>
    </div>
  );
}
