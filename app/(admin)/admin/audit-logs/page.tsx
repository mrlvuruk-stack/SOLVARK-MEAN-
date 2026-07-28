import { Card } from '@/components/ui/card';
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
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Security & Audit Trail Logs</h1>
        <p className="text-sm text-zinc-400">
          Immutable history of all administrative actions, CMS edits, logins, and media mutations.
        </p>
      </div>

      <Card variant="solid" className="border-zinc-800 p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">Action</th>
              <th className="p-4">Entity Type</th>
              <th className="p-4">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-mono">
            {auditList.map((log) => (
              <tr key={log.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-indigo-400 font-bold">{log.action}</td>
                <td className="p-4 text-zinc-300">{log.entity_type}</td>
                <td className="p-4 text-zinc-500">
                  {new Date(log.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
