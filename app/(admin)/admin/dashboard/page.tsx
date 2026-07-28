import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Operations Center</h1>
          <p className="text-sm text-zinc-400">
            Manage website content, leads, media, services, and security.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/admin/projects">
            <Button variant="primary" size="sm">
              + New Project
            </Button>
          </Link>
          <Link href="/admin/media">
            <Button variant="secondary" size="sm">
              Upload Media
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Projects', value: '24', change: '+3 this month' },
          { label: 'Primary Services', value: '11', change: 'All active' },
          { label: 'Total Leads', value: '142', change: '+18 this week' },
          { label: 'Media Assets', value: '512', change: '1.2 GB stored' },
        ].map((kpi, idx) => (
          <Card key={idx} variant="solid" className="space-y-2 border-zinc-800">
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              {kpi.label}
            </div>
            <div className="text-3xl font-extrabold text-white">{kpi.value}</div>
            <div className="text-xs text-indigo-400">{kpi.change}</div>
          </Card>
        ))}
      </div>

      {/* Quick Navigation Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Homepage Builder',
            desc: 'Drag & drop homepage sections, toggle visibility, and edit content.',
            href: '/admin/homepage-builder',
          },
          {
            title: 'Portfolio Manager',
            desc: 'Manage projects, case studies, galleries, and tech stack tags.',
            href: '/admin/projects',
          },
          {
            title: 'Service Manager',
            desc: 'Update Solvark service offerings, features, deliverables, and FAQs.',
            href: '/admin/services',
          },
        ].map((module, idx) => (
          <Card key={idx} variant="glass" className="space-y-4 hover:border-indigo-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white">{module.title}</h3>
            <p className="text-sm text-zinc-400">{module.desc}</p>
            <Link href={module.href} className="inline-block">
              <Button variant="outline" size="sm">
                Open Module &rarr;
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
