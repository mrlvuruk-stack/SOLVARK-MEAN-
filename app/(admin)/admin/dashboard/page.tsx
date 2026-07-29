import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  FolderKanban, 
  Wrench, 
  Inbox, 
  Image as ImageIcon, 
  Globe, 
  Users, 
  ShieldAlert, 
  Activity,
  ArrowRight
} from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800">
        <div>
          <div className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest mb-1">
            SOLVARK OPERATIONS CENTER
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight text-white">
            Admin Control Dashboard
          </h1>
          <p className="text-sm text-zinc-400 font-sans mt-1">
            Manage website content, enterprise leads, media assets, service offerings, and platform security.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/admin/projects">
            <Button variant="primary" size="sm">
              + Add New Project
            </Button>
          </Link>
          <Link href="/admin/media">
            <Button variant="darkOutline" size="sm">
              Upload Media
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Projects', value: '24', change: '+3 this month', color: 'border-l-4 border-l-[#0052FF]' },
          { label: 'Primary Services', value: '11', change: '100% operational', color: 'border-l-4 border-l-[#FF2A85]' },
          { label: 'Total Inquiries', value: '142', change: '+18 this week', color: 'border-l-4 border-l-emerald-500' },
          { label: 'Media Library', value: '512', change: '1.2 GB stored', color: 'border-l-4 border-l-cyan-500' },
        ].map((kpi, idx) => (
          <div key={idx} className={`p-6 bg-zinc-900 border border-zinc-800 ${kpi.color} space-y-2`}>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider font-semibold">
              {kpi.label}
            </div>
            <div className="text-4xl font-bold font-heading text-white">{kpi.value}</div>
            <div className="text-xs font-mono text-zinc-300">{kpi.change}</div>
          </div>
        ))}
      </div>

      {/* Main Admin Navigation Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-heading text-white border-b border-zinc-800 pb-2">
          Management Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Portfolio & Case Studies',
              desc: 'Create and edit client case studies, tech stack badges, metrics, and project galleries.',
              href: '/admin/projects',
              icon: FolderKanban,
              badge: '24 Projects',
            },
            {
              title: 'Service Architecture',
              desc: 'Update Solvark service offerings, features, deliverables, tech specs, and FAQs.',
              href: '/admin/services',
              icon: Wrench,
              badge: '11 Services',
            },
            {
              title: 'Contact Leads & Inquiries',
              desc: 'Review incoming project inquiries, client budgets, timelines, and message history.',
              href: '/admin/leads',
              icon: Inbox,
              badge: '142 Submissions',
            },
            {
              title: 'Media Asset Library',
              desc: 'Upload 3D isometric images, architectural diagrams, screenshots, and PDFs.',
              href: '/admin/media',
              icon: ImageIcon,
              badge: '512 Files',
            },
            {
              title: 'SEO & Metadata Manager',
              desc: 'Configure site-wide meta tags, OpenGraph images, canonical URLs, and sitemap settings.',
              href: '/admin/seo',
              icon: Globe,
              badge: 'SEO Active',
            },
            {
              title: 'Users & Access Control',
              desc: 'Manage admin accounts, RBAC permissions, audit trail logs, and security tokens.',
              href: '/admin/users',
              icon: Users,
              badge: 'RBAC Enforced',
            },
          ].map((module, idx) => {
            const Icon = module.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900 border border-zinc-800 hover:border-[#0052FF] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <div className="p-2 bg-zinc-800 text-[#0052FF] group-hover:text-[#FF2A85] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#FF2A85] bg-pink-950/40 border border-pink-800/50 px-2 py-0.5 font-bold">
                      {module.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#0052FF] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{module.desc}</p>
                </div>
                <div className="pt-2">
                  <Link href={module.href}>
                    <Button variant="darkOutline" size="sm" className="w-full flex items-center justify-center gap-2 group-hover:border-[#0052FF]">
                      Open Module <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
