import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export default async function AdminLeadsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: leads } = await supabase
    .from('contact_leads')
    .select('*')
    .order('created_at', { ascending: false });

  const leadList = leads || [
    {
      id: '1',
      full_name: 'Alex Rivera',
      email: 'alex@fintech-inc.com',
      company_name: 'Fintech Inc',
      service_interest: 'SaaS Product Development',
      status: 'new',
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      full_name: 'Sarah Connor',
      email: 'sarah@cyberdyne.org',
      company_name: 'Cyberdyne AI',
      service_interest: 'Business Process Automation',
      status: 'contacted',
      created_at: new Date().toISOString(),
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact Leads & CRM</h1>
          <p className="text-sm text-zinc-400">
            Review incoming project inquiries, assign leads, and update lead statuses.
          </p>
        </div>
        <Button variant="secondary" size="sm">
          Export Leads CSV
        </Button>
      </div>

      <Card variant="solid" className="border-zinc-800 p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">Lead Name</th>
              <th className="p-4">Company</th>
              <th className="p-4">Service Interest</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs">
            {leadList.map((lead) => (
              <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">
                  {lead.full_name}
                  <div className="text-[10px] text-zinc-500 font-normal">{lead.email}</div>
                </td>
                <td className="p-4 text-zinc-300">{lead.company_name || 'N/A'}</td>
                <td className="p-4 text-indigo-400 font-mono">{lead.service_interest || 'General'}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {lead.status}
                  </span>
                </td>
                <td className="p-4 text-zinc-500 font-mono">
                  {new Date(lead.created_at).toLocaleDateString()}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
