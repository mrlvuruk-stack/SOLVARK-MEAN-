'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, MessageSquare, FileSignature, CreditCard, Layers, LogOut } from 'lucide-react';

const CLIENT_NAV = [
  { label: 'Dashboard', href: '/client/dashboard', icon: LayoutDashboard },
  { label: 'Discussions', href: '/client/discussions', icon: MessageSquare },
  { label: 'Agreements', href: '/client/agreements', icon: FileSignature },
  { label: 'Billing', href: '/client/billing', icon: CreditCard },
  { label: 'Services', href: '/client/services', icon: Layers },
];

export function ClientSidebar() {
  const pathname = usePathname();

  function handleLogout() {
    localStorage.removeItem('solvark_client_auth');
    window.location.href = '/';
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#0B0B0D] border-r border-zinc-800 flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>S</div>
          <div>
            <div className="text-white font-bold text-base font-heading">Solvark</div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Client Portal</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {CLIENT_NAV.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-white rounded-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg'
              }`}
              style={isActive ? { background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' } : {}}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800">
        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-400 hover:text-red-400 hover:bg-zinc-900 rounded-lg w-full transition-colors cursor-pointer">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
