'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle, X, Send, Award, Clock } from 'lucide-react';

const JOBS = [
  { id: 'job-1', title: 'Staff Frontend Engineer (React 19 / WebGL / Next.js)', location: 'Remote / Global', type: 'Full-Time Position', department: 'Engineering' },
  { id: 'job-2', title: 'Senior Backend Architect (PostgreSQL / Supabase / Node)', location: 'Remote / Global', type: 'Full-Time Position', department: 'Cloud Infrastructure' },
  { id: 'job-3', title: 'Principal Cloud & DevOps Engineer (AWS / Terraform)', location: 'Remote / Global', type: 'Full-Time Position', department: 'DevOps & Reliability' },
  { id: 'job-4', title: 'UI/UX Design System Specialist (Figma / Motion)', location: 'Remote / Global', type: 'Full-Time Position', department: 'Experience Design' },
  { id: 'job-5', title: 'SEO & Growth Marketing Lead', location: 'Remote / Global', type: 'Full-Time Position', department: 'Growth' },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);
  const [form, setForm] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    experienceYears: '',
    portfolio: '',
    coverNote: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const activeJob = JOBS.find((j) => j.id === selectedJob);

  function handleOpenForm(jobId: string) {
    const job = JOBS.find((j) => j.id === jobId);
    setSelectedJob(jobId);
    setForm((prev) => ({ ...prev, role: job?.title || '' }));
    setSubmitted(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.role) return;

    // Save job application lead to localStorage
    const existing = JSON.parse(localStorage.getItem('solvark_job_apps') || '[]');
    localStorage.setItem(
      'solvark_job_apps',
      JSON.stringify([{ ...form, date: new Date().toISOString(), status: 'new' }, ...existing])
    );

    setSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setForm({ fullName: '', email: '', phone: '', role: '', experienceYears: '', portfolio: '', coverNote: '' });
      setSubmitted(false);
    }, 2000);
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          JOIN THE SOLVARK TEAM
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Build <span className="text-gradient-blue-pink">World-Class Software</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          We are looking for elite engineers, architects, and designers to build next-generation enterprise digital platforms.
        </p>
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {JOBS.map((job) => (
          <Card key={job.id} variant="blueprint" className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#0052FF] transition-all">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">
                <span>{job.department}</span>
                <span>•</span>
                <span className="text-[#FF2A85]">{job.type}</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-[#0B0B0D]">{job.title}</h2>
              <p className="text-xs font-mono text-[#555555]">
                LOCATION: {job.location} | SLA: IMMEDIATE ONBOARDING
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              className="whitespace-nowrap cursor-pointer"
              onClick={() => handleOpenForm(job.id)}
            >
              Apply For Role &rarr;
            </Button>
          </Card>
        ))}
      </div>

      {/* Job Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B0D] border-2 border-[#0052FF] text-white max-w-xl w-full p-8 rounded-xl space-y-6 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-800 text-[10px] font-mono text-[#0052FF] font-bold uppercase mb-2">
                <Briefcase className="w-3 h-3 text-[#FF2A85]" />
                Job Application Form
              </div>
              <h2 className="text-xl font-bold text-white font-heading">{activeJob?.title}</h2>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Department: {activeJob?.department} • {activeJob?.location}</p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-950/40 border border-emerald-800 rounded-xl text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-white">Application Submitted!</h3>
                <p className="text-xs text-zinc-300">Thank you for applying. Our talent team will review your application and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Years of Experience</label>
                    <select
                      value={form.experienceYears}
                      onChange={(e) => setForm({ ...form, experienceYears: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    >
                      <option value="">Select experience...</option>
                      <option value="0-1">0 - 1 Year (Fresher)</option>
                      <option value="1-3">1 - 3 Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="5+">5+ Years (Senior/Staff)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Portfolio / GitHub / LinkedIn Link *</label>
                  <input
                    required
                    type="url"
                    placeholder="https://github.com/yourusername"
                    value={form.portfolio}
                    onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                    className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Cover Note / Why join Solvark?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your technical background and key achievements..."
                    value={form.coverNote}
                    onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg resize-none focus:outline-none focus:border-[#0052FF]"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 py-3 text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 text-xs font-bold text-white rounded-lg cursor-pointer flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}
                  >
                    <Send className="w-4 h-4" /> Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
