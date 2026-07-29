'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Search, User, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function AdminHeader() {
  return (
    <header className="border-b border-zinc-800 bg-[#0B0B0D] px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Admin (Projects, Leads, Users)..."
            className="w-full h-10 pl-9 pr-4 bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#0052FF]"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/" target="_blank">
          <Button variant="darkOutline" size="sm" className="flex items-center gap-2 text-xs">
            <ExternalLink className="w-3.5 h-3.5 text-[#FF2A85]" />
            View Live Site
          </Button>
        </Link>

        <Button variant="ghost" size="sm" className="relative text-zinc-400 hover:text-white">
          <Bell className="w-4 h-4 text-zinc-300" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF2A85]" />
        </Button>

        <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
          <div className="w-8 h-8 rounded-none bg-gradient-to-br from-[#0052FF] to-[#FF2A85] text-white flex items-center justify-center font-bold text-xs">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white font-heading">Super Admin</div>
            <div className="text-[10px] text-zinc-400 font-mono">admin@solvark.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
