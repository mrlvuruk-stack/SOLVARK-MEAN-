'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SolvarkLogo } from '@/components/ui/logo';

export default function LoginPage() {
  const [email, setEmail] = React.useState('admin@solvark.com');
  const [password, setPassword] = React.useState('admin123');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = '/admin/dashboard';
    }, 600);
  }

  return (
    <div className="pt-28 pb-20 max-w-md mx-auto px-6 relative z-10 bg-white text-[#0B0B0D]">
      <Card variant="blueprint" className="p-8 space-y-6">
        <div className="space-y-3 text-center">
          <div className="flex justify-center">
            <SolvarkLogo size="lg" />
          </div>
          <h1 className="text-2xl font-bold font-heading text-[#0B0B0D]">Admin Portal Login</h1>
          <p className="text-xs text-[#444444] font-mono">Internal Platform Operations & Content Management</p>
        </div>

        {/* Demo Credentials Box */}
        <div className="p-3 bg-blue-50 border border-blue-200 text-xs font-mono text-[#0052FF] space-y-1">
          <div className="font-bold">DEFAULT DEMO CREDENTIALS:</div>
          <div>Email: <span className="font-bold text-[#0B0B0D]">admin@solvark.com</span></div>
          <div>Password: <span className="font-bold text-[#0B0B0D]">admin123</span></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 font-sans text-xs">
          <div>
            <label className="block text-[#444444] font-mono uppercase mb-1 font-semibold">Email Address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@solvark.com"
              className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#0052FF]"
            />
          </div>

          <div>
            <label className="block text-[#444444] font-mono uppercase mb-1 font-semibold">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#0052FF]"
            />
          </div>

          <Button variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
            Authenticate & Open Dashboard &rarr;
          </Button>
        </form>

        <div className="text-center pt-2">
          <Link href="/" className="text-xs font-mono text-[#FF2A85] hover:underline font-semibold">
            &larr; Return to Public Website
          </Link>
        </div>
      </Card>
    </div>
  );
}
