'use client';

import * as React from 'react';
import { CreditCard, CheckCircle, Clock, AlertTriangle, Receipt, RefreshCw } from 'lucide-react';

const DEMO_INVOICES = [
  { id: 'INV-001', service: 'Website Redesigning', amount: '₹60,000', dueDate: '2026-08-05', status: 'unpaid', type: 'Advance (50%)' },
  { id: 'INV-002', service: 'Graphic Designing', amount: '₹15,000', dueDate: '2026-07-20', status: 'paid', type: 'Full Payment', paidDate: '2026-07-19', method: 'PayU Online' },
  { id: 'INV-003', service: 'Monthly SEO Retainer', amount: '₹15,000', dueDate: '2026-08-01', status: 'unpaid', type: 'Monthly Retainer' },
  { id: 'INV-004', service: 'Video Editing', amount: '₹25,000', dueDate: '2026-07-10', status: 'paid', type: 'Full Payment', paidDate: '2026-07-09', method: 'Bank Transfer' },
];

const RETAINERS = [
  { service: 'SEO Optimization', amount: '₹15,000/mo', nextDue: '2026-08-01', status: 'due_soon' },
  { service: 'Social Media Management', amount: '₹12,000/mo', nextDue: '2026-08-15', status: 'active' },
];

export default function ClientBilling() {
  const [invoices, setInvoices] = React.useState(DEMO_INVOICES);
  const [payingId, setPayingId] = React.useState<string | null>(null);

  function handlePay(id: string) {
    setPayingId(id);
    // Simulate PayU payment
    setTimeout(() => {
      setInvoices(invoices.map((inv) => inv.id === id ? { ...inv, status: 'paid', paidDate: new Date().toISOString().split('T')[0], method: 'PayU Online' } : inv));
      setPayingId(null);
    }, 2000);
  }

  const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
    paid: { label: 'PAID', color: '#10B981', bg: 'bg-emerald-950/40 border-emerald-800' },
    unpaid: { label: 'UNPAID', color: '#F59E0B', bg: 'bg-amber-950/40 border-amber-800' },
    overdue: { label: 'OVERDUE', color: '#EF4444', bg: 'bg-red-950/40 border-red-800' },
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white font-heading">Billing & Invoices</h1>
        <p className="text-sm text-zinc-400 mt-1">View invoices, pay online, and manage monthly retainer renewals.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg">
          <p className="text-xs font-mono text-zinc-500 uppercase">Total Outstanding</p>
          <p className="text-2xl font-bold text-[#FF2A85] mt-1 font-heading">₹75,000</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg">
          <p className="text-xs font-mono text-zinc-500 uppercase">Total Paid</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1 font-heading">₹40,000</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg">
          <p className="text-xs font-mono text-zinc-500 uppercase">Active Retainers</p>
          <p className="text-2xl font-bold text-[#0052FF] mt-1 font-heading">2</p>
        </div>
      </div>

      {/* Invoice List */}
      <div>
        <h2 className="text-lg font-bold text-white font-heading mb-4">Invoices</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">Invoice #</th>
                <th className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">Service</th>
                <th className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">Type</th>
                <th className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">Amount</th>
                <th className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">Due Date</th>
                <th className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">Status</th>
                <th className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => {
                const cfg = statusConfig[inv.status];
                return (
                  <tr key={inv.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                    <td className="p-4 text-sm font-mono text-[#0052FF] font-bold">{inv.id}</td>
                    <td className="p-4 text-sm text-white">{inv.service}</td>
                    <td className="p-4 text-xs text-zinc-400">{inv.type}</td>
                    <td className="p-4 text-sm text-white font-bold">{inv.amount}</td>
                    <td className="p-4 text-xs text-zinc-400 font-mono">{inv.dueDate}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold border rounded ${cfg.bg}`} style={{ color: cfg.color }}>
                        {inv.status === 'paid' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {cfg.label}
                      </span>
                    </td>
                    <td className="p-4">
                      {inv.status === 'unpaid' ? (
                        <button onClick={() => handlePay(inv.id)} disabled={payingId === inv.id} className="px-4 py-1.5 text-xs font-bold text-white rounded-lg cursor-pointer disabled:opacity-50" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
                          {payingId === inv.id ? 'Processing...' : '💳 Pay Now'}
                        </button>
                      ) : (
                        <button className="px-3 py-1.5 text-xs font-bold text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-lg cursor-pointer flex items-center gap-1">
                          <Receipt className="w-3 h-3" /> Receipt
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly Retainer Renewals */}
      <div>
        <h2 className="text-lg font-bold text-white font-heading mb-4">Monthly Retainer Subscriptions</h2>
        <div className="space-y-3">
          {RETAINERS.map((ret, i) => (
            <div key={i} className={`p-5 rounded-lg border flex items-center justify-between ${
              ret.status === 'due_soon' ? 'border-amber-600/40 bg-amber-950/20' : 'border-zinc-800 bg-zinc-900'
            }`}>
              <div className="flex items-center gap-4">
                {ret.status === 'due_soon' ? (
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                ) : (
                  <RefreshCw className="w-5 h-5 text-emerald-400" />
                )}
                <div>
                  <p className="text-sm font-bold text-white">{ret.service}</p>
                  <p className="text-xs text-zinc-400">Amount: <span className="text-white">{ret.amount}</span> • Next Due: <span className="text-white">{ret.nextDue}</span></p>
                </div>
              </div>
              <button className="px-4 py-2 text-xs font-bold text-white rounded-lg cursor-pointer" style={{ background: ret.status === 'due_soon' ? 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)' : 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
                {ret.status === 'due_soon' ? '⚠️ Renew Now' : '🔄 Renew'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
