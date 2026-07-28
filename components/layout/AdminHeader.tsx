'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Search, User } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="border-b border-white/10 bg-zinc-950 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Global search (Projects, Leads, Users)..."
            className="w-full h-10 pl-9 pr-4 rounded-xl glass-surface border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-4 h-4 text-zinc-400" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500" />
        </Button>

        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="w-8 h-8 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs border border-indigo-500/30">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">System Admin</div>
            <div className="text-[10px] text-zinc-500 font-mono">admin@solvark.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
