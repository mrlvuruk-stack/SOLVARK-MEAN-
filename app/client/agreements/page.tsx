'use client';

import * as React from 'react';
import { FileSignature, CheckCircle, Clock, AlertTriangle, Download } from 'lucide-react';

const DEMO_AGREEMENTS = [
  { id: 'AGR-001', service: 'Website Redesigning', client: 'Acme Corp', fee: '₹1,20,000', status: 'pending', date: '2026-07-28', scope: 'Complete website redesign with modern UI/UX, responsive design, SEO optimization, and payment gateway integration. Includes 5 pages, admin panel, and 3 months free maintenance.' },
  { id: 'AGR-002', service: 'Monthly SEO Retainer', client: 'Acme Corp', fee: '₹15,000/mo', status: 'signed', date: '2026-07-15', scope: 'Monthly SEO optimization including keyword research, on-page optimization, technical SEO audits, monthly performance reports, and Google Search Console monitoring.' },
  { id: 'AGR-003', service: 'Video Editing', client: 'Acme Corp', fee: '₹25,000', status: 'signed', date: '2026-06-20', scope: '5 promotional videos for social media campaigns. Each video 30-60 seconds with motion graphics, background music, and brand overlay.' },
];

export default function ClientAgreements() {
  const [agreements, setAgreements] = React.useState(DEMO_AGREEMENTS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [signatureName, setSignatureName] = React.useState('');
  const [agreed, setAgreed] = React.useState(false);

  const selected = agreements.find((a) => a.id === selectedId);

  function handleSign() {
    if (!signatureName || !agreed) return;
    setAgreements(agreements.map((a) => a.id === selectedId ? { ...a, status: 'signed' } : a));
    setSelectedId(null);
    setSignatureName('');
    setAgreed(false);
  }

  const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
    pending: { label: 'Pending Signature', color: '#F59E0B', icon: Clock },
    signed: { label: 'Signed & Verified', color: '#10B981', icon: CheckCircle },
    expired: { label: 'Expired', color: '#EF4444', icon: AlertTriangle },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white font-heading">Agreements & Contracts</h1>
        <p className="text-sm text-zinc-400 mt-1">Review and digitally sign your service agreements.</p>
      </div>

      {/* Agreement Cards */}
      <div className="space-y-4">
        {agreements.map((agr) => {
          const cfg = statusConfig[agr.status];
          const StatusIcon = cfg.icon;
          return (
            <div key={agr.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FileSignature className="w-5 h-5 text-[#0052FF]" />
                    <h3 className="text-base font-bold text-white">{agr.service}</h3>
                    <span className="text-xs font-mono text-zinc-500">{agr.id}</span>
                  </div>
                  <p className="text-xs text-zinc-400">Fee: <span className="text-white font-bold">{agr.fee}</span> • Date: {agr.date}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <StatusIcon className="w-3.5 h-3.5" style={{ color: cfg.color }} />
                    <span className="text-xs font-bold" style={{ color: cfg.color }}>{cfg.label}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {agr.status === 'signed' && (
                    <button className="px-3 py-1.5 text-xs font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 cursor-pointer flex items-center gap-1">
                      <Download className="w-3 h-3" /> PDF
                    </button>
                  )}
                  {agr.status === 'pending' && (
                    <button onClick={() => setSelectedId(agr.id)} className="px-4 py-1.5 text-xs font-bold text-white rounded-lg cursor-pointer" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
                      Review & Sign →
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* E-Sign Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B0D] border-2 border-[#0052FF] max-w-2xl w-full p-8 rounded-lg space-y-6 max-h-[90vh] overflow-y-auto">
            <div>
              <h2 className="text-xl font-bold text-white font-heading">Service Agreement — {selected.service}</h2>
              <p className="text-xs text-zinc-400 mt-1">Agreement ID: {selected.id} • Date: {selected.date}</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-4">
              <h3 className="text-sm font-bold text-[#0052FF] font-mono uppercase">Project Scope & Deliverables</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{selected.scope}</p>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-sm text-zinc-400">Total Project Fee: <span className="text-white font-bold text-lg">{selected.fee}</span></p>
                <p className="text-xs text-zinc-500 mt-1">Payment Terms: 50% advance, 50% on delivery</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-4">
              <h3 className="text-sm font-bold text-[#FF2A85] font-mono uppercase">Digital Signature</h3>
              <div>
                <label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  value={signatureName}
                  onChange={(e) => setSignatureName(e.target.value)}
                  placeholder="Enter your full legal name"
                  className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Date</label>
                <input type="text" readOnly value={new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })} className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-zinc-400 text-sm rounded-lg" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 accent-[#0052FF]" />
                <span className="text-xs text-zinc-300">I have read and agree to the terms, scope, deliverables, and payment schedule outlined in this agreement. I understand this constitutes a legally binding digital signature.</span>
              </label>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setSelectedId(null)} className="flex-1 px-4 py-3 text-sm font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 cursor-pointer">Cancel</button>
              <button onClick={handleSign} disabled={!signatureName || !agreed} className="flex-1 px-4 py-3 text-sm font-bold text-white rounded-lg cursor-pointer disabled:opacity-40" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
                ✍️ Sign Agreement & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
