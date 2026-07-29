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
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800">
        <div>
          <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
            CRM & INQUIRIES
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
            Contact Leads & CRM
          </h1>
          <p className="text-sm text-zinc-400 font-sans mt-1">
            Review incoming project inquiries, assign leads, and update lead statuses.
          </p>
        </div>
        <Button variant="primary" size="sm">
          Export Leads CSV
        </Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <th className="p-4">LEAD NAME & EMAIL</th>
              <th className="p-4">COMPANY</th>
              <th className="p-4">SERVICE INTEREST</th>
              <th className="p-4">STATUS</th>
              <th className="p-4">DATE</th>
              <th className="p-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-xs font-sans">
            {leadList.map((lead) => (
              <tr key={lead.id} className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 font-bold text-white text-sm">
                  {lead.full_name}
                  <div className="text-[10px] text-zinc-400 font-mono font-normal">{lead.email}</div>
                </td>
                <td className="p-4 text-zinc-300 font-medium">{lead.company_name || 'N/A'}</td>
                <td className="p-4 text-[#0052FF] font-mono font-bold">{lead.service_interest || 'General Inquiry'}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase ${
                    lead.status === 'new'
                      ? 'bg-pink-500/10 text-[#FF2A85] border border-pink-500/30'
                      : 'bg-blue-500/10 text-[#0052FF] border border-blue-500/30'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="p-4 text-zinc-400 font-mono">
                  {new Date(lead.created_at).toLocaleDateString()}
                </td>
                <td className="p-4 text-right">
                  <Button variant="darkOutline" size="sm">
                    View Details &rarr;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
