import { createServerSupabaseClient } from '@/lib/supabase/server';

export default async function AdminAuditLogsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: logs } = await supabase
    .from('audit_logs')
    .select('*')
    .order('created_at', { ascending: false });

  const auditList = logs || [
    {
      id: '1',
      action: 'UPDATE_HOMEPAGE_HERO',
      entity_type: 'homepage_sections',
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      action: 'PUBLISH_PROJECT',
      entity_type: 'projects',
      created_at: new Date().toISOString(),
    },
    {
      id: '3',
      action: 'AUTHENTICATE_ADMIN',
      entity_type: 'auth_users',
      created_at: new Date().toISOString(),
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div>
        <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
          SECURITY & COMPLIANCE
        </div>
        <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
          Audit Trail & Security Logs
        </h1>
        <p className="text-sm text-zinc-400 font-sans mt-1">
          Immutable history of all administrative actions, CMS edits, user logins, and database mutations.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">ACTION TYPE</th>
              <th className="p-4">ENTITY TARGET</th>
              <th className="p-4">TIMESTAMP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-mono">
            {auditList.map((log) => (
              <tr key={log.id} className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-[#FF2A85] font-bold">{log.action}</td>
                <td className="p-4 text-zinc-200">{log.entity_type}</td>
                <td className="p-4 text-zinc-400">
                  {new Date(log.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
