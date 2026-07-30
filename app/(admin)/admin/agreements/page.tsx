'use client';

import * as React from 'react';
import { ALL_AGENCY_SERVICES } from '@/lib/constants';
import { FileSignature, Plus, Send, CheckCircle, Clock, AlertTriangle, X } from 'lucide-react';

const DEMO_AGREEMENTS = [
  { id: 'AGR-001', client: 'Rajesh Sharma', email: 'rajesh@acme.in', service: 'Website Redesigning', fee: '₹1,20,000', scope: 'Complete website redesign with 5 pages', status: 'sent', date: '2026-07-28' },
  { id: 'AGR-002', client: 'Priya Enterprises', email: 'priya@enterprise.co', service: 'Monthly SEO Retainer', fee: '₹15,000/mo', scope: 'Monthly SEO audit and optimization', status: 'signed', date: '2026-07-15' },
  { id: 'AGR-003', client: 'TechStart LLC', email: 'hello@techstart.com', service: 'SaaS Product Development', fee: '$5,000', scope: 'MVP SaaS dashboard with Stripe billing', status: 'draft', date: '2026-07-25' },
];

export default function AdminAgreements() {
  const [agreements, setAgreements] = React.useState(DEMO_AGREEMENTS);
  const [showCreate, setShowCreate] = React.useState(false);
  const [form, setForm] = React.useState({ client: '', email: '', service: '', scope: '', fee: '', timeline: '' });

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const svc = ALL_AGENCY_SERVICES.find((s) => s.id === form.service);
    setAgreements([{ id: `AGR-00${agreements.length + 1}`, client: form.client, email: form.email, service: svc?.name || form.service, fee: form.fee, scope: form.scope, status: 'sent', date: new Date().toISOString().split('T')[0] }, ...agreements]);
    setForm({ client: '', email: '', service: '', scope: '', fee: '', timeline: '' });
    setShowCreate(false);
  }

  const statusMap: Record<string, { label: string; color: string; Icon: React.ElementType }> = {
    draft: { label: 'Draft', color: '#6B7280', Icon: Clock },
    sent: { label: 'Sent for E-Sign', color: '#F59E0B', Icon: Send },
    signed: { label: 'Signed ✅', color: '#10B981', Icon: CheckCircle },
    expired: { label: 'Expired', color: '#EF4444', Icon: AlertTriangle },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">Agreements & Contracts</h1>
          <p className="text-sm text-zinc-400 mt-1">Create, send, and track client agreements.</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="px-4 py-2 text-sm font-bold text-white rounded-lg cursor-pointer flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
          <Plus className="w-4 h-4" /> Create Agreement
        </button>
      </div>

      {/* Agreements Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              {['ID', 'Client', 'Service', 'Fee', 'Status', 'Date', 'Actions'].map((h) => (
                <th key={h} className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {agreements.map((agr) => {
              const st = statusMap[agr.status];
              const StIcon = st.Icon;
              return (
                <tr key={agr.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                  <td className="p-4 text-sm font-mono text-[#0052FF] font-bold">{agr.id}</td>
                  <td className="p-4"><span className="text-sm text-white font-bold">{agr.client}</span><br /><span className="text-xs text-zinc-500">{agr.email}</span></td>
                  <td className="p-4 text-sm text-zinc-300">{agr.service}</td>
                  <td className="p-4 text-sm text-white font-bold">{agr.fee}</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1 text-[10px] font-bold" style={{ color: st.color }}><StIcon className="w-3 h-3" />{st.label}</span></td>
                  <td className="p-4 text-xs text-zinc-400 font-mono">{agr.date}</td>
                  <td className="p-4">
                    {agr.status === 'draft' && (
                      <button onClick={() => setAgreements(agreements.map((a) => a.id === agr.id ? { ...a, status: 'sent' } : a))} className="px-3 py-1.5 text-xs font-bold text-white bg-[#0052FF] rounded-lg cursor-pointer">Send →</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Create Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B0D] border-2 border-[#0052FF] max-w-lg w-full p-8 rounded-lg space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white font-heading">Create New Agreement</h2>
              <button onClick={() => setShowCreate(false)} className="text-zinc-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Client Name *</label><input required value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Client Email *</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
              </div>
              <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Service *</label><select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]"><option value="">Select...</option>{ALL_AGENCY_SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
              <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Project Scope *</label><textarea required value={form.scope} onChange={(e) => setForm({ ...form, scope: e.target.value })} rows={3} className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg resize-none focus:outline-none focus:border-[#0052FF]" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Total Fee *</label><input required value={form.fee} onChange={(e) => setForm({ ...form, fee: e.target.value })} placeholder="₹50,000" className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Timeline</label><input value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} placeholder="4 weeks" className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
              </div>
              <button type="submit" className="w-full py-3 text-sm font-bold text-white rounded-lg cursor-pointer flex items-center justify-center gap-2" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
                <Send className="w-4 h-4" /> Send for E-Signature
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
