'use client';

import * as React from 'react';
import { ALL_AGENCY_SERVICES } from '@/lib/constants';
import { CreditCard, Plus, CheckCircle, Clock, AlertTriangle, X, Bell } from 'lucide-react';

const DEMO_INVOICES = [
  { id: 'INV-001', client: 'Rajesh Sharma', email: 'rajesh@acme.in', service: 'Website Redesigning', amount: '₹60,000', type: 'Advance (50%)', dueDate: '2026-08-05', status: 'unpaid', method: '' },
  { id: 'INV-002', client: 'Priya Enterprises', email: 'priya@enterprise.co', service: 'Graphic Designing', amount: '₹15,000', type: 'Full Payment', dueDate: '2026-07-20', status: 'paid', method: 'PayU Online' },
  { id: 'INV-003', client: 'TechStart LLC', email: 'hello@techstart.com', service: 'Monthly SEO Retainer', amount: '₹15,000', type: 'Monthly Retainer', dueDate: '2026-08-01', status: 'unpaid', method: '' },
];

export default function AdminBilling() {
  const [invoices, setInvoices] = React.useState(DEMO_INVOICES);
  const [showCreate, setShowCreate] = React.useState(false);
  const [showMarkPaid, setShowMarkPaid] = React.useState<string | null>(null);
  const [utr, setUtr] = React.useState('');
  const [form, setForm] = React.useState({ client: '', email: '', service: '', amount: '', type: 'Full Payment', dueDate: '' });

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const svc = ALL_AGENCY_SERVICES.find((s) => s.id === form.service);
    setInvoices([{ id: `INV-00${invoices.length + 1}`, client: form.client, email: form.email, service: svc?.name || form.service, amount: form.amount, type: form.type, dueDate: form.dueDate, status: 'unpaid', method: '' }, ...invoices]);
    setForm({ client: '', email: '', service: '', amount: '', type: 'Full Payment', dueDate: '' });
    setShowCreate(false);
  }

  function handleMarkPaid() {
    if (!showMarkPaid || !utr) return;
    setInvoices(invoices.map((inv) => inv.id === showMarkPaid ? { ...inv, status: 'paid', method: `Manual (UTR: ${utr})` } : inv));
    setShowMarkPaid(null);
    setUtr('');
  }

  const statusMap: Record<string, { label: string; color: string }> = {
    paid: { label: 'PAID ✅', color: '#10B981' },
    unpaid: { label: 'UNPAID', color: '#F59E0B' },
    overdue: { label: 'OVERDUE', color: '#EF4444' },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">Invoices & Payment Manager</h1>
          <p className="text-sm text-zinc-400 mt-1">Generate invoices, track payments, and manage retainer renewals.</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="px-4 py-2 text-sm font-bold text-white rounded-lg cursor-pointer flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
          <Plus className="w-4 h-4" /> Generate Invoice
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg"><p className="text-xs font-mono text-zinc-500 uppercase">Total Revenue</p><p className="text-2xl font-bold text-emerald-400 mt-1 font-heading">₹90,000</p></div>
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg"><p className="text-xs font-mono text-zinc-500 uppercase">Outstanding</p><p className="text-2xl font-bold text-[#FF2A85] mt-1 font-heading">₹75,000</p></div>
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg"><p className="text-xs font-mono text-zinc-500 uppercase">Invoices Issued</p><p className="text-2xl font-bold text-[#0052FF] mt-1 font-heading">{invoices.length}</p></div>
      </div>

      {/* Invoice Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              {['Invoice', 'Client', 'Service', 'Type', 'Amount', 'Due', 'Status', 'Method', 'Actions'].map((h) => (
                <th key={h} className="text-left text-[10px] font-mono text-zinc-500 uppercase p-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => {
              const st = statusMap[inv.status];
              return (
                <tr key={inv.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                  <td className="p-3 text-sm font-mono text-[#0052FF] font-bold">{inv.id}</td>
                  <td className="p-3 text-sm text-white">{inv.client}</td>
                  <td className="p-3 text-xs text-zinc-300">{inv.service}</td>
                  <td className="p-3 text-xs text-zinc-400">{inv.type}</td>
                  <td className="p-3 text-sm text-white font-bold">{inv.amount}</td>
                  <td className="p-3 text-xs text-zinc-400 font-mono">{inv.dueDate}</td>
                  <td className="p-3"><span className="text-[10px] font-bold" style={{ color: st.color }}>{st.label}</span></td>
                  <td className="p-3 text-xs text-zinc-400">{inv.method || '—'}</td>
                  <td className="p-3">
                    {inv.status === 'unpaid' && (
                      <div className="flex gap-2">
                        <button onClick={() => setShowMarkPaid(inv.id)} className="px-3 py-1 text-[10px] font-bold text-white bg-emerald-700 rounded cursor-pointer">Mark Paid</button>
                        <button className="px-3 py-1 text-[10px] font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded cursor-pointer flex items-center gap-1"><Bell className="w-3 h-3" />Remind</button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Create Invoice Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B0D] border-2 border-[#0052FF] max-w-lg w-full p-8 rounded-lg space-y-5">
            <div className="flex items-center justify-between"><h2 className="text-xl font-bold text-white font-heading">Generate New Invoice</h2><button onClick={() => setShowCreate(false)} className="text-zinc-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button></div>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Client Name *</label><input required value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Client Email *</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
              </div>
              <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Service *</label><select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]"><option value="">Select...</option>{ALL_AGENCY_SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
              <div className="grid grid-cols-3 gap-3">
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Amount *</label><input required value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="₹50,000" className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Type</label><select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]"><option>Full Payment</option><option>Advance (50%)</option><option>Milestone</option><option>Monthly Retainer</option></select></div>
                <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Due Date *</label><input required type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]" /></div>
              </div>
              <button type="submit" className="w-full py-3 text-sm font-bold text-white rounded-lg cursor-pointer" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>📄 Publish Invoice to Client</button>
            </form>
          </div>
        </div>
      )}

      {/* Mark Paid Modal */}
      {showMarkPaid && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B0D] border-2 border-emerald-600 max-w-sm w-full p-8 rounded-lg space-y-5">
            <h2 className="text-lg font-bold text-white font-heading">Mark as Paid Manually</h2>
            <div><label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Bank UTR / Transaction ID *</label><input value={utr} onChange={(e) => setUtr(e.target.value)} placeholder="Enter UTR or Txn ID" className="w-full h-10 px-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-emerald-500" /></div>
            <div className="flex gap-3">
              <button onClick={() => setShowMarkPaid(null)} className="flex-1 py-2 text-sm font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg cursor-pointer">Cancel</button>
              <button onClick={handleMarkPaid} className="flex-1 py-2 text-sm font-bold text-white bg-emerald-700 rounded-lg cursor-pointer">✅ Confirm Paid</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
