'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = '/admin/dashboard';
    }, 600);
  }

  return (
    <div className="pt-32 pb-20 max-w-md mx-auto px-6 relative z-10 bg-white text-[#0B0B0D]">
      <Card variant="blueprint" className="p-8 space-y-6">
        <div className="space-y-2 text-center">
          <div className="w-10 h-10 bg-[#B80357] text-white font-bold text-lg font-heading flex items-center justify-center mx-auto">
            S
          </div>
          <h1 className="text-2xl font-bold font-heading text-[#0B0B0D]">Solvark Admin Login</h1>
          <p className="text-xs text-[#444444] font-mono">Internal Platform Operations</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 font-sans text-xs">
          <div>
            <label className="block text-[#444444] font-mono uppercase mb-1">Email Address</label>
            <input
              required
              type="email"
              placeholder="admin@solvark.com"
              className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
            />
          </div>

          <div>
            <label className="block text-[#444444] font-mono uppercase mb-1">Password</label>
            <input
              required
              type="password"
              placeholder="••••••••••••"
              className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
            />
          </div>

          <Button variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
            Authenticate & Open Dashboard &rarr;
          </Button>
        </form>

        <div className="text-center pt-2">
          <Link href="/" className="text-xs font-mono text-[#B80357] hover:underline">
            &larr; Return to Public Website
          </Link>
        </div>
      </Card>
    </div>
  );
}
