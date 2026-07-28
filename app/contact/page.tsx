'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { submitContactLeadAction } from '@/actions/contact.actions';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [feedback, setFeedback] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      companyName: formData.get('companyName') as string,
      serviceInterest: formData.get('serviceInterest') as string,
      message: formData.get('message') as string,
    };

    const res = await submitContactLeadAction(payload);
    setIsSubmitting(false);

    if (res.success && 'message' in res) {
      setFeedback({ type: 'success', message: res.message });
      (event.target as HTMLFormElement).reset();
    } else if (!res.success && 'error' in res) {
      setFeedback({ type: 'error', message: res.error.message });
    } else {
      setFeedback({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    }
  }

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 bg-white text-[#0B0B0D]">
      {/* Contact Left Column */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0B0B0D]">
            <span className="w-2 h-2 bg-[#B80357]" />
            DIRECT ENGINEERING CONSULTATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
            Let’s Build Something Exceptional Together
          </h1>
          <p className="text-[#444444] text-sm leading-relaxed font-sans">
            Schedule an architecture discovery session or submit your project specification. You will speak directly with principal software engineers—not sales representatives.
          </p>
        </div>

        {/* Guarantees & Response Time Box */}
        <div className="space-y-4 pt-4 border-t border-[#E7E7E7]">
          <div className="p-4 bg-[#F8F8FA] border border-[#E7E7E7] space-y-2 blueprint-border">
            <div className="text-xs font-mono text-[#B80357] font-bold">RESPONSE TIME SLA</div>
            <div className="text-sm font-bold font-heading text-[#0B0B0D]">Guaranteed Under 24 Business Hours</div>
            <div className="text-xs text-[#444444]">Every inquiry is assigned to a dedicated solution architect.</div>
          </div>

          <div className="space-y-2 text-xs text-[#444444] font-mono pt-2">
            <div>📍 Global Operations: San Francisco // London // Singapore</div>
            <div>📧 Direct Email: contact@solvark.com</div>
            <div>🔒 Confidentiality: Strict NDA provided upon request</div>
          </div>
        </div>
      </div>

      {/* Contact Form Right Column */}
      <div className="lg:col-span-7">
        <Card variant="blueprint" className="p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl font-bold font-heading text-[#0B0B0D]">Initiate Project Inquiry</h2>

          {feedback && (
            <div
              className={`p-4 text-xs font-mono ${
                feedback.type === 'success'
                  ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/30'
                  : 'bg-red-500/10 text-red-700 border border-red-500/30'
              }`}
            >
              {feedback.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#444444] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  required
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#444444] uppercase mb-1">
                  Work Email *
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#444444] uppercase mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#444444] uppercase mb-1">
                  Company Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Acme Enterprise"
                  className="w-full h-11 px-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#444444] uppercase mb-1">
                Project Scope / Technical Requirements *
              </label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Describe your current infrastructure, goals, and target timeline..."
                className="w-full p-4 border border-[#E7E7E7] text-sm text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
              />
            </div>

            <Button variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
              Submit Technical Inquiry &rarr;
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
