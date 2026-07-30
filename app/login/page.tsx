'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SolvarkLogo } from '@/components/ui/logo';

export default function LoginPage() {
  const [email, setEmail] = React.useState('solvark.in@gmail.com');
  const [password, setPassword] = React.useState('admin123');
  const [error, setError] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'solvark.in@gmail.com' && password === 'admin123') {
      document.cookie = 'solvark_admin_session=authenticated; path=/; max-age=86400';
      window.location.href = '/admin/dashboard';
    } else {
      setError('Invalid credentials. Use demo email solvark.in@gmail.com and password admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0D] p-6 relative">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <SolvarkLogo size="lg" />
          </div>
          <h1 className="text-xl font-bold font-heading text-white">Admin Control Center</h1>
          <p className="text-xs text-zinc-400">Enter your administrator credentials to access system controls.</p>
        </div>

        <div className="p-3 bg-blue-950/40 border border-blue-800 rounded-lg text-xs text-zinc-300 font-mono space-y-1">
          <div className="text-[#0052FF] font-bold">🔐 Demo Administrator Credentials:</div>
          <div>Email: <span className="font-bold text-white">solvark.in@gmail.com</span></div>
          <div>Password: <span className="font-bold text-white">admin123</span></div>
        </div>

        {error && (
          <div className="p-3 bg-red-950/40 border border-red-800 rounded text-xs font-mono text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-zinc-400 font-mono uppercase mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="solvark.in@gmail.com"
              className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
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
