'use client';

import * as React from 'react';
import { SolvarkLogo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { X, Lock, CheckCircle, ShieldCheck, Mail, KeyRound, ArrowRight } from 'lucide-react';
import { sendGmailOtpAction } from '@/actions/auth-email.actions';

export function SignInGateModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({ fullName: '', email: '', password: '', phone: '' });

  // Resend Email OTP states
  const [otpStep, setOtpStep] = React.useState(false);
  const [generatedOtp, setGeneratedOtp] = React.useState('');
  const [enteredOtp, setEnteredOtp] = React.useState('');
  const [isSendingOtp, setIsSendingOtp] = React.useState(false);
  const [statusMsg, setStatusMsg] = React.useState('');
  const [otpError, setOtpError] = React.useState('');

  React.useEffect(() => {
    // Check if user is already signed in
    const authSession = localStorage.getItem('solvark_client_auth');
    if (authSession) return;

    // Trigger gate popup after 60 seconds (1 minute)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  async function handleSendEmailOtp(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) return;

    setIsSendingOtp(true);
    setOtpError('');

    // Generate random 6-digit OTP
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);

    // Call Resend Email Server Action
    const res = await sendGmailOtpAction({
      email: formData.email,
      fullName: formData.fullName,
      otp: code,
    });

    setIsSendingOtp(false);

    if (res.success) {
      setStatusMsg(res.message || 'Security OTP code dispatched to your Gmail!');
      setOtpStep(true);
    } else {
      setOtpError(res.error || 'Failed to send email. Please check your address.');
    }
  }

  function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    if (enteredOtp !== generatedOtp) {
      setOtpError('Invalid OTP code. Please enter the 6-digit code sent to your Gmail.');
      return;
    }

    // Store auth session
    localStorage.setItem(
      'solvark_client_auth',
      JSON.stringify({ ...formData, verifiedAt: new Date().toISOString(), verifiedVia: 'Resend Gmail OTP' })
    );

    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      // Refresh window state to show logged-in profile in Navbar
      window.location.reload();
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
            Sign up or Sign in with your Gmail to access client portals, agreements, invoices, and service tools.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-6 bg-emerald-950/40 border border-emerald-800 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <div className="text-base font-bold text-white font-heading">Sign-In & OTP Verified!</div>
            <p className="text-xs text-zinc-300 font-mono">Full Website Access Unlocked. Enjoy exploring Solvark!</p>
          </div>
        ) : !otpStep ? (
          /* Step 1: Account Registration Form */
          <form onSubmit={handleSendEmailOtp} className="space-y-4 font-sans text-xs">
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
              <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Email Address (Gmail) *</label>
              <input
                required
                type="email"
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#0052FF]"
              />
            </div>

            <div>
              <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Password *</label>
              <input
                required
                type="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#0052FF]"
              />
            </div>

            {otpError && <p className="text-xs text-red-400 font-mono">{otpError}</p>}

            <Button variant="primary" size="lg" className="w-full font-bold flex items-center justify-center gap-2 cursor-pointer" disabled={isSendingOtp}>
              {isSendingOtp ? 'Sending Resend Gmail OTP...' : 'Send Gmail Security OTP &rarr;'}
            </Button>

            <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-mono text-zinc-500">
              <Mail className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>Real-Time Resend API Email Verification</span>
            </div>
          </form>
        ) : (
          /* Step 2: Resend Email OTP Input */
          <form onSubmit={handleVerifyOtp} className="space-y-4 font-sans text-xs">
            <div className="p-4 bg-blue-950/40 border border-blue-800 rounded text-center space-y-2">
              <div className="text-xs font-bold text-white flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-[#0052FF]" /> OTP Code Sent To Gmail Inbox:
              </div>
              <p className="text-sm font-bold font-mono text-emerald-400">{formData.email}</p>
              <p className="text-[10px] text-zinc-400">Please check your inbox (or spam) for the 6-digit code.</p>
              <div className="pt-2 border-t border-blue-900/60 text-[10px] font-mono text-zinc-400">
                Fallback Test Code: <span className="font-bold text-white underline">{generatedOtp}</span>
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Enter 6-Digit Email OTP *</label>
              <input
                required
                type="text"
                maxLength={6}
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                placeholder="Enter 6-digit code"
                className="w-full h-12 px-4 bg-zinc-950 border border-zinc-700 text-center font-mono text-xl tracking-widest text-white focus:outline-none focus:border-[#0052FF]"
              />
              {otpError && <p className="text-xs text-red-400 mt-1 font-mono">{otpError}</p>}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setOtpStep(false)}
                className="px-4 py-3 text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 cursor-pointer"
              >
                &larr; Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 text-xs font-bold text-white rounded-lg cursor-pointer flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #10B981 0%, #0052FF 100%)' }}
              >
                <CheckCircle className="w-4 h-4" /> Verify Gmail OTP & Access
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
