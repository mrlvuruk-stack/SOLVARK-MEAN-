'use client';

import * as React from 'react';
import { GraduationCap, Code, Palette, Video, PenTool, Search, Share2, CheckCircle, Award, Users, Briefcase, Star } from 'lucide-react';

const INTERNSHIP_TRACKS = [
  { id: 'web-dev', name: 'Web Development', icon: Code, color: '#0052FF', duration: '2-3 Months', type: 'Remote', learn: ['React 19 & Next.js 15', 'TypeScript & REST APIs', 'Database Design & Supabase', 'Git & CI/CD Deployment'] },
  { id: 'graphic', name: 'Graphic Designing', icon: Palette, color: '#FF2A85', duration: '2-3 Months', type: 'Remote', learn: ['Brand Identity Design', 'UI/UX Design Systems', 'Figma & Adobe Creative Suite', 'Social Media Creatives'] },
  { id: 'video', name: 'Video Editing', icon: Video, color: '#F59E0B', duration: '2 Months', type: 'Remote', learn: ['Premiere Pro & After Effects', 'Motion Graphics & Animations', 'Social Media Reels & Promos', 'Color Grading & Sound Design'] },
  { id: 'content', name: 'Content Writing', icon: PenTool, color: '#10B981', duration: '2 Months', type: 'Remote', learn: ['SEO-Optimized Blog Writing', 'Landing Page Copywriting', 'Technical Documentation', 'Brand Voice & Messaging'] },
  { id: 'seo', name: 'SEO & Digital Marketing', icon: Search, color: '#8B5CF6', duration: '2-3 Months', type: 'Remote', learn: ['Technical SEO Audits', 'Google Analytics & Search Console', 'Keyword Research & Strategy', 'Paid Ads & Funnel Optimization'] },
  { id: 'smm', name: 'Social Media Management', icon: Share2, color: '#EC4899', duration: '2 Months', type: 'Remote', learn: ['Content Calendar Planning', 'Instagram & LinkedIn Strategy', 'Community Engagement', 'Analytics & Growth Tracking'] },
];

const PERKS = [
  { icon: Award, text: 'Official Completion Certificate' },
  { icon: Briefcase, text: 'Live Client Project Exposure' },
  { icon: Users, text: 'Mentorship by Senior Architects' },
  { icon: Star, text: 'Letter of Recommendation' },
];

export default function InternshipPage() {
  const [form, setForm] = React.useState({ fullName: '', email: '', phone: '', college: '', track: '', portfolio: '', motivation: '' });
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.track) return;
    const existing = JSON.parse(localStorage.getItem('solvark_internship_apps') || '[]');
    localStorage.setItem('solvark_internship_apps', JSON.stringify([{ ...form, date: new Date().toISOString(), status: 'new' }, ...existing]));
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6">
          <GraduationCap className="w-4 h-4 text-[#0052FF]" />
          <span className="text-xs font-bold text-[#0052FF] uppercase tracking-wider">Internship Program 2026</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B0D] font-heading leading-tight">
          Internship with <span style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solvark</span>
        </h1>
        <p className="text-lg text-[#222222] mt-4 max-w-2xl mx-auto leading-relaxed">
          Gain real-world experience working on live client projects. Learn from senior architects, build your portfolio, and earn an official certificate.
        </p>
      </section>

      {/* Perks */}
      <section className="pb-12 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERKS.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center p-5 bg-[#FAFAFC] border border-gray-200 rounded-xl">
                <Icon className="w-8 h-8 text-[#0052FF] mb-2" />
                <span className="text-xs font-bold text-[#0B0B0D]">{perk.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tracks */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0B0B0D] font-heading text-center mb-8">Available Internship Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNSHIP_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <div key={track.id} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#0052FF]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: track.color + '15' }}>
                  <Icon className="w-6 h-6" style={{ color: track.color }} />
                </div>
                <h3 className="text-base font-bold text-[#0B0B0D]">{track.name}</h3>
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0052FF]">{track.duration}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-pink-50 text-[#FF2A85]">{track.type}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-[10px] font-mono text-gray-500 uppercase font-bold">What You&apos;ll Learn:</p>
                  {track.learn.map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="text-xs text-[#222222]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0B0B0D] font-heading text-center mb-8">Apply Now</h2>

        {submitted ? (
          <div className="p-8 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-center space-y-4">
            <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-bold text-[#0B0B0D]">Application Submitted!</h3>
            <p className="text-sm text-[#222222]">Thank you for applying to the Solvark Internship Program. Our team will review your application and get back to you within 3-5 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-[#FAFAFC] border border-gray-200 rounded-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B0B0D] mb-1">Full Name *</label>
                <input required type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Your full name" className="w-full h-11 px-4 bg-white border border-gray-300 text-sm text-[#0B0B0D] rounded-lg focus:outline-none focus:border-[#0052FF]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0B0B0D] mb-1">Email Address *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="w-full h-11 px-4 bg-white border border-gray-300 text-sm text-[#0B0B0D] rounded-lg focus:outline-none focus:border-[#0052FF]" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B0B0D] mb-1">Phone Number</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 00000 00000" className="w-full h-11 px-4 bg-white border border-gray-300 text-sm text-[#0B0B0D] rounded-lg focus:outline-none focus:border-[#0052FF]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0B0B0D] mb-1">College / University</label>
                <input type="text" value={form.college} onChange={(e) => setForm({ ...form, college: e.target.value })} placeholder="Your college name" className="w-full h-11 px-4 bg-white border border-gray-300 text-sm text-[#0B0B0D] rounded-lg focus:outline-none focus:border-[#0052FF]" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0B0B0D] mb-1">Select Internship Track *</label>
              <select required value={form.track} onChange={(e) => setForm({ ...form, track: e.target.value })} className="w-full h-11 px-4 bg-white border border-gray-300 text-sm text-[#0B0B0D] rounded-lg focus:outline-none focus:border-[#0052FF]">
                <option value="">Choose a track...</option>
                {INTERNSHIP_TRACKS.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0B0B0D] mb-1">Portfolio / GitHub Link</label>
              <input type="url" value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} placeholder="https://github.com/yourname" className="w-full h-11 px-4 bg-white border border-gray-300 text-sm text-[#0B0B0D] rounded-lg focus:outline-none focus:border-[#0052FF]" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0B0B0D] mb-1">Why do you want to intern at Solvark?</label>
              <textarea value={form.motivation} onChange={(e) => setForm({ ...form, motivation: e.target.value })} rows={3} placeholder="Tell us about your goals..." className="w-full px-4 py-3 bg-white border border-gray-300 text-sm text-[#0B0B0D] rounded-lg resize-none focus:outline-none focus:border-[#0052FF]" />
            </div>
            <button type="submit" className="w-full py-3 text-sm font-bold text-white rounded-lg cursor-pointer" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
              🎓 Submit Application
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
