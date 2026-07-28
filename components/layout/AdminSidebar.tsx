'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  Inbox,
  Image,
  Globe,
  Users,
  ShieldAlert,
  Settings,
  Activity,
} from 'lucide-react';

const ADMIN_NAV = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Portfolio', href: '/admin/projects', icon: FolderKanban },
  { label: 'Services', href: '/admin/services', icon: Wrench },
  { label: 'Contact Leads', href: '/admin/leads', icon: Inbox },
  { label: 'Media Library', href: '/admin/media', icon: Image },
  { label: 'SEO Manager', href: '/admin/seo', icon: Globe },
  { label: 'Users & Roles', href: '/admin/users', icon: Users },
  { label: 'Audit Logs', href: '/admin/audit-logs', icon: ShieldAlert },
  { label: 'System Health', href: '/admin/health', icon: Activity },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/10 bg-zinc-950 p-6 flex flex-col justify-between hidden md:flex min-h-screen">
      <div className="space-y-8">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
            S
          </div>
          <div>
            <div className="font-bold text-sm text-white">Solvark Admin</div>
            <div className="text-[10px] text-zinc-500 font-mono">v1.0-PRODUCTION</div>
          </div>
        </Link>

        <nav className="space-y-1">
          {ADMIN_NAV.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all',
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-white/10 text-xs text-zinc-500 font-mono">
        Status: <span className="text-emerald-400 font-semibold">● Live Systems</span>
      </div>
    </aside>
  );
}
