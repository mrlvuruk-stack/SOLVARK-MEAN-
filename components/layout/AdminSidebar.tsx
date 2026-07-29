'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SolvarkLogo } from '@/components/ui/logo';
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
  { label: 'Portfolio Manager', href: '/admin/projects', icon: FolderKanban },
  { label: 'Services Manager', href: '/admin/services', icon: Wrench },
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
    <aside className="w-64 border-r border-zinc-800 bg-[#0B0B0D] p-6 flex flex-col justify-between hidden md:flex min-h-screen">
      <div className="space-y-8">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <SolvarkLogo size="sm" isDarkBg={true} />
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
                  'flex items-center gap-3 px-3 py-2.5 rounded-none text-xs font-mono transition-all',
                  isActive
                    ? 'bg-gradient-to-r from-[#0052FF] to-[#FF2A85] text-white font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800'
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-zinc-800 text-[11px] text-zinc-400 font-mono space-y-1">
        <div>SYSTEM STATUS: <span className="text-emerald-400 font-bold">● ONLINE</span></div>
        <div className="text-[10px] text-zinc-500">SOLVARK CORE v2.5</div>
      </div>
    </aside>
  );
}
