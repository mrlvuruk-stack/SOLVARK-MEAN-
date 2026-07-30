'use client';

import * as React from 'react';
import { ALL_AGENCY_SERVICES } from '@/lib/constants';
import { CheckCircle, Send, Clock } from 'lucide-react';

const DEMO_REQUESTS = [
  { id: 'REQ-001', service: 'Website Redesigning', desc: 'Need to add 3 new product pages and update the homepage hero section.', status: 'under_review', date: '2026-07-25' },
  { id: 'REQ-002', service: 'Video Editing', desc: 'Need 2 additional Instagram reels for upcoming product launch.', status: 'approved', date: '2026-07-20', estimate: '₹8,000' },
];

export default function ClientServices() {
  const [requests, setRequests] = React.useState(DEMO_REQUESTS);
  const [showForm, setShowForm] = React.useState(false);
  const [form, setForm] = React.useState({ service: '', description: '' });
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.service || !form.description) return;
    const svc = ALL_AGENCY_SERVICES.find((s) => s.id === form.service);
    setRequests([{ id: `REQ-00${requests.length + 1}`, service: svc?.name || form.service, desc: form.description, status: 'under_review', date: new Date().toISOString().split('T')[0] }, ...requests]);
    setForm({ service: '', description: '' });
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setShowForm(false); }, 1500);
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">Services & Requests</h1>
          <p className="text-sm text-zinc-400 mt-1">Browse all 11 agency services and submit upgrade or redesign requests.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 text-sm font-bold text-white rounded-lg cursor-pointer" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
          + New Request
        </button>
      </div>

      {/* Service Catalog */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ALL_AGENCY_SERVICES.map((svc) => (
          <div key={svc.id} className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg hover:border-zinc-600 transition-colors group">
            <div className="text-2xl mb-3">{svc.icon}</div>
            <h3 className="text-sm font-bold text-white group-hover:text-[#0052FF] transition-colors">{svc.name}</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{svc.desc}</p>
            <div className="mt-3">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold text-[#FF2A85] bg-pink-950/40 border border-pink-800/40 rounded">{svc.category}</span>
            </div>
            <button onClick={() => { setShowForm(true); setForm({ ...form, service: svc.id }); }} className="mt-4 w-full px-3 py-2 text-xs font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 hover:text-white cursor-pointer transition-colors">
              Request This Service →
            </button>
          </div>
        ))}
      </div>

      {/* Request Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B0D] border-2 border-[#0052FF] max-w-lg w-full p-8 rounded-lg space-y-6">
            <h2 className="text-xl font-bold text-white font-heading">New Service / Redesign Request</h2>

            {submitted ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-800 rounded-lg text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <p className="text-sm font-bold text-white">Request Submitted Successfully!</p>
                <p className="text-xs text-zinc-400">Our team will review and respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Select Service *</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:outline-none focus:border-[#0052FF]">
                    <option value="">Choose a service...</option>
                    {ALL_AGENCY_SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 font-mono uppercase mb-1">Describe Your Requirements *</label>
                  <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} placeholder="Describe what you need..." className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg resize-none focus:outline-none focus:border-[#0052FF]" />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-4 py-3 text-sm font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg cursor-pointer">Cancel</button>
                  <button type="submit" className="flex-1 px-4 py-3 text-sm font-bold text-white rounded-lg cursor-pointer flex items-center justify-center gap-2" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
                    <Send className="w-4 h-4" /> Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Submitted Requests */}
      <div>
        <h2 className="text-lg font-bold text-white font-heading mb-4">Your Requests</h2>
        <div className="space-y-3">
          {requests.map((req) => (
            <div key={req.id} className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#0052FF] font-bold">{req.id}</span>
                    <span className="text-sm font-bold text-white">{req.service}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{req.desc}</p>
                  {'estimate' in req && <p className="text-xs text-emerald-400 mt-1">Estimate: <span className="font-bold">{req.estimate}</span></p>}
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold rounded border ${
                  req.status === 'approved' ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800' : 'text-amber-400 bg-amber-950/40 border-amber-800'
                }`}>
                  {req.status === 'approved' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                  {req.status === 'approved' ? 'Approved' : 'Under Review'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
