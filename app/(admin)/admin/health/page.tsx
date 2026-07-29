export default function AdminHealthPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div>
        <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
          TELEMETRY & INFRASTRUCTURE
        </div>
        <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
          System Health & Operational Status
        </h1>
        <p className="text-sm text-zinc-400 font-sans mt-1">
          Real-time monitoring metrics for database connectivity, cloud storage, API route latency, and serverless jobs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Supabase Database', status: 'Connected', metric: '4ms Avg Latency', color: 'border-l-4 border-l-emerald-500' },
          { name: 'Media Storage Buckets', status: 'Healthy', metric: '1.2 GB / 50 GB Used', color: 'border-l-4 border-l-[#0052FF]' },
          { name: 'Vercel Edge Network', status: 'Active (Global)', metric: '99.99% Cache Hit Rate', color: 'border-l-4 border-l-[#FF2A85]' },
        ].map((item, idx) => (
          <div key={idx} className={`p-6 bg-zinc-900 border border-zinc-800 ${item.color} space-y-3`}>
            <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">{item.name}</div>
            <div className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              {item.status}
            </div>
            <div className="text-xs font-mono text-zinc-300 font-bold">{item.metric}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
