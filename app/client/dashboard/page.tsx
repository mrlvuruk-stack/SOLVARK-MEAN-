'use client';

import * as React from 'react';
import { LayoutDashboard, FileSignature, CreditCard, MessageSquare, Layers, ArrowRight, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const QUICK_ACTIONS = [
  { label: 'Project Discussions', href: '/client/discussions', icon: MessageSquare, color: '#0052FF' },
  { label: 'Sign Agreement', href: '/client/agreements', icon: FileSignature, color: '#FF2A85' },
  { label: 'Pay Invoice', href: '/client/billing', icon: CreditCard, color: '#10B981' },
  { label: 'Order Service', href: '/client/services', icon: Layers, color: '#F59E0B' },
];

const DEMO_ACTIVITY = [
  { text: 'Invoice #INV-001 issued for Website Development', time: '2 hours ago', type: 'invoice' },
  { text: 'Agreement sent for Graphic Design Project', time: '1 day ago', type: 'agreement' },
  { text: 'Monthly SEO Retainer renewed successfully', time: '3 days ago', type: 'renewal' },
  { text: 'New discussion started for Video Editing project', time: '5 days ago', type: 'discussion' },
];

export default function ClientDashboard() {
  const [clientName, setClientName] = React.useState('Client');

  React.useEffect(() => {
    const auth = localStorage.getItem('solvark_client_auth');
    if (auth) {
      const parsed = JSON.parse(auth);
      setClientName(parsed.fullName || 'Client');
    }
  }, []);

  const stats = [
    { label: 'Active Projects', value: '3', icon: LayoutDashboard, color: '#0052FF' },
    { label: 'Pending Invoices', value: '2', icon: CreditCard, color: '#FF2A85' },
    { label: 'Signed Agreements', value: '4', icon: FileSignature, color: '#10B981' },
    { label: 'Maintenance Active', value: '1', icon: Clock, color: '#F59E0B' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-white font-heading">Welcome back, {clientName} 👋</h1>
        <p className="text-sm text-zinc-400 mt-1 font-sans">Here&apos;s your project overview and quick actions.</p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-2 font-heading">{stat.value}</p>
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.color + '20' }}>
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Renewal Banner */}
      <div className="p-5 rounded-lg border-2 border-amber-600/40 bg-amber-950/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-400" />
          <div>
            <p className="text-sm font-bold text-white">Monthly SEO Retainer Renewal Due</p>
            <p className="text-xs text-zinc-400">Due Date: Aug 05, 2026 • Amount: ₹15,000</p>
          </div>
        </div>
        <Link href="/client/billing" className="px-4 py-2 text-xs font-bold text-black rounded-lg" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
          Renew Now →
        </Link>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-bold text-white font-heading mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.href} href={action.href} className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg hover:border-zinc-600 transition-all group">
                <Icon className="w-8 h-8 mb-3" style={{ color: action.color }} />
                <p className="text-sm font-bold text-white group-hover:text-zinc-200">{action.label}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>Open</span> <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-bold text-white font-heading mb-4">Recent Activity</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg divide-y divide-zinc-800">
          {DEMO_ACTIVITY.map((item, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <p className="text-sm text-zinc-300">{item.text}</p>
              </div>
              <span className="text-xs text-zinc-500 font-mono">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
