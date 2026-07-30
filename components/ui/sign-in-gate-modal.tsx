'use client';

import * as React from 'react';
import { SolvarkLogo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { X, Lock, CheckCircle, ShieldCheck } from 'lucide-react';

export function SignInGateModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({ fullName: '', email: '', phone: '' });

  React.useEffect(() => {
    // Check if user is already signed in or dismissed gate
    const authSession = localStorage.getItem('solvark_client_auth');
    if (authSession) return;

    // Trigger gate popup after 60 seconds (1 minute)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Store auth session
    localStorage.setItem(
      'solvark_client_auth',
      JSON.stringify({ ...formData, signedInAt: new Date().toISOString() })
    );

    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      // Stay on current page so user can explore the entire website freely!
    }, 1500);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#0B0B0D] border-2 border-[#0052FF] text-white max-w-lg w-full p-8 relative blueprint-border shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 transition-colors cursor-pointer"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 text-center">
          <div className="flex justify-center">
            <SolvarkLogo size="md" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-800/60 text-[10px] font-mono text-[#0052FF] font-bold uppercase tracking-widest">
            <Lock className="w-3 h-3 text-[#FF2A85]" />
            MANDATORY VISITOR SIGN-IN GATE
          </div>
          <h2 className="text-2xl font-bold font-heading text-white">
            Unlock Full Access to <span className="text-gradient-blue-pink">Solvark Ecosystem</span>
          </h2>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            Sign in or register to unlock full client portals, agency portfolio case studies, 11 service specs, and digital agreement tools.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-6 bg-emerald-950/40 border border-emerald-800 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <div className="text-base font-bold text-white font-heading">Sign-In Successful!</div>
            <p className="text-xs text-zinc-300 font-mono">Full Website Access Unlocked. Enjoy exploring Solvark!</p>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4 font-sans text-xs">
            <div>
              <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Full Name *</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#0052FF]"
              />
            </div>

            <div>
              <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Email Address *</label>
              <input
                required
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#0052FF]"
              />
            </div>

            <div>
              <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Phone Number (Optional)</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#0052FF]"
              />
            </div>

            <Button variant="primary" size="lg" className="w-full font-bold">
              Sign In & Unlock Platform &rarr;
            </Button>

            <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-mono text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Spam Guarantee • SSL Encrypted Session</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
