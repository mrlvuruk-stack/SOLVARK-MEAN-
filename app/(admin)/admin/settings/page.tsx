import { Button } from '@/components/ui/button';

export default function AdminSettingsPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div>
        <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
          SYSTEM CONFIGURATION
        </div>
        <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
          Global Platform Settings
        </h1>
        <p className="text-sm text-zinc-400 font-sans mt-1">
          Configure site brand parameters, analytics tokens, notification emails, and feature flags.
        </p>
      </div>

      <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-6 max-w-2xl">
        <h2 className="text-xl font-bold font-heading text-white border-b border-zinc-800 pb-2">
          General Configuration
        </h2>
        <div className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-zinc-300 mb-1 font-mono uppercase font-bold">Company Legal Name</label>
            <input
              type="text"
              defaultValue="Solvark Technology Inc."
              className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-white font-medium focus:outline-none focus:border-[#0052FF]"
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1 font-mono uppercase font-bold">Primary Contact Email</label>
            <input
              type="email"
              defaultValue="solvark.in@gmail.com"
              className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-white font-medium focus:outline-none focus:border-[#0052FF]"
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1 font-mono uppercase font-bold">Supabase Operations Endpoint</label>
            <input
              type="text"
              disabled
              defaultValue="https://sgafwmuekfesjychnliv.supabase.co"
              className="w-full h-11 px-4 bg-zinc-950/60 border border-zinc-800/80 text-zinc-400 font-mono"
            />
          </div>
        </div>
        <Button variant="primary" size="md">
          Save Platform Settings &rarr;
        </Button>
      </div>
    </div>
  );
}
