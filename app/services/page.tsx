'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_AGENCY_SERVICES } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lightbulb, Compass, Code2, ShieldCheck, HeartHandshake, X, Send, FileText, Clock, DollarSign } from 'lucide-react';

const SOLVARK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Client Consultation',
    icon: Lightbulb,
    desc: 'We sit down with you to deeply understand your business goals, target users, and specific requirements—ensuring 100% clarity before writing code.',
  },
  {
    step: '02',
    title: 'Architecture & UI/UX Design Approval',
    icon: Compass,
    desc: 'We create clean, modern visual prototypes and system blueprints. You review every screen and approve the design to match your exact vision.',
  },
  {
    step: '03',
    title: 'Bespoke Development & Execution',
    icon: Code2,
    desc: 'Our engineers build high-performance web apps, mobile solutions, school ERP systems, or desktop executables using clean, reliable code.',
  },
  {
    step: '04',
    title: 'Quality Testing & Speed Optimization',
    icon: ShieldCheck,
    desc: 'We rigorously test across devices, optimize load speeds to 100/100, verify database security, and perform end-to-end quality assurance.',
  },
  {
    step: '05',
    title: 'Launch, Training & Ongoing Care',
    icon: HeartHandshake,
    desc: 'We deploy your platform, provide hands-on training for your team, and offer ongoing monthly maintenance and instant support.',
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | null>(null);

  // Form State
  const [form, setForm] = useState({
    serviceName: '',
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    budget: '₹25,000 - ₹50,000',
    timeline: '2 - 4 Weeks',
    requirements: '',
    callbackTime: 'Morning (9 AM - 12 PM)',
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = ['all', 'Development', 'Creative Design', 'Creative Media', 'Infrastructure', 'Engineering', 'Growth Marketing'];

  const filteredServices = selectedCategory === 'all'
    ? ALL_AGENCY_SERVICES
    : ALL_AGENCY_SERVICES.filter((s) => s.category === selectedCategory);

  function handleOpenModal(serviceName: string) {
    setSelectedServiceForModal(serviceName);
    setForm((prev) => ({ ...prev, serviceName }));
    setSubmitted(false);
  }

  function handleSubmitRequirement(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.requirements) return;

    // Save lead to localStorage
    const existing = JSON.parse(localStorage.getItem('solvark_service_requests') || '[]');
    localStorage.setItem(
      'solvark_service_requests',
      JSON.stringify([{ ...form, date: new Date().toISOString(), status: 'new' }, ...existing])
    );

    setSubmitted(true);
    setTimeout(() => {
      setSelectedServiceForModal(null);
      setForm({
        serviceName: '',
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        budget: '₹25,000 - ₹50,000',
        timeline: '2 - 4 Weeks',
        requirements: '',
        callbackTime: 'Morning (9 AM - 12 PM)',
      });
      setSubmitted(false);
    }, 2000);
  }

  return (
    <div className="pt-28 pb-20 relative z-10 bg-white text-[#0B0B0D] space-y-20">
      {/* HEADER HERO */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          ALL 11 AGENCY SERVICES & CAPABILITIES
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          Bespoke Services for <span className="text-gradient-blue-pink">Growing Businesses & Institutions</span>
        </h1>

        <p className="text-base sm:text-lg text-[#222222] font-normal leading-relaxed max-w-3xl mx-auto font-sans">
          From custom web development and school management systems to video editing, graphic design, local SEO, and AI automation—we deliver premium digital solutions tailored to your budget.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-md'
                  : 'bg-[#F8F8FA] text-[#444444] border-[#E7E7E7] hover:border-[#0052FF] hover:text-[#0052FF]'
              }`}
            >
              {cat === 'all' ? 'All Services' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* HOW SOLVARK WORKS — 5 STEP PROCESS */}
      <section className="bg-[#F8F8FA] border-y border-[#E7E7E7] py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase text-[#FF2A85] font-bold tracking-widest">TRANSPARENT METHODOLOGY</span>
            <h2 className="text-3xl font-bold font-heading text-[#0B0B0D]">How Solvark Works With You</h2>
            <p className="text-sm text-[#444444] max-w-xl mx-auto">Our step-by-step process ensures clear communication, zero stress, and complete satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SOLVARK_PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="bg-white border border-[#E7E7E7] p-6 rounded-xl space-y-3 relative hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#0052FF] font-bold">{step.step}</span>
                    <Icon className="w-5 h-5 text-[#FF2A85]" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#0B0B0D]">{step.title}</h3>
                  <p className="text-xs text-[#444444] leading-relaxed font-sans">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALL 11 SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex items-center justify-between border-b border-[#E7E7E7] pb-4">
          <div>
            <h2 className="text-2xl font-bold font-heading text-[#0B0B0D]">Our Core 11 Service Offerings</h2>
            <p className="text-xs text-[#555555]">Select any service to fill requirement form and request custom quotes.</p>
          </div>
          <span className="text-xs font-mono text-[#0052FF] font-bold">{filteredServices.length} Services Available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((svc) => (
            <Card key={svc.id} variant="blueprint" className="p-6 flex flex-col justify-between space-y-4 hover:border-[#0052FF] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{svc.icon}</span>
                  <span className="px-2.5 py-1 bg-[#F8F8FA] border border-[#E7E7E7] text-[10px] font-mono font-bold text-[#FF2A85] uppercase">
                    {svc.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B0B0D]">{svc.name}</h3>
                <p className="text-xs text-[#444444] font-sans leading-relaxed">{svc.desc}</p>
              </div>

              <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Full SLA Support
                </span>
                <Button variant="primary" size="sm" onClick={() => handleOpenModal(svc.name)}>
                  Fill Requirement &rarr;
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICE REQUIREMENT FORM MODAL */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B0B0D] border-2 border-[#0052FF] text-white max-w-2xl w-full p-8 rounded-xl space-y-6 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/60 border border-blue-800 text-[10px] font-mono text-[#0052FF] font-bold uppercase mb-2">
                <FileText className="w-3.5 h-3.5 text-[#FF2A85]" />
                SERVICE REQUIREMENT FORM
              </div>
              <h2 className="text-xl font-bold text-white font-heading">{selectedServiceForModal}</h2>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Fill out your specific requirements to receive a custom proposal and quote.</p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-950/40 border border-emerald-800 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-white">Requirement Submitted!</h3>
                <p className="text-xs text-zinc-300">Thank you. Our technical architect will review your scope and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitRequirement} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Your Full Name *</label>
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
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Email Address (Gmail/Work) *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Phone / WhatsApp Number *</label>
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
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Business / School / Shop Name</label>
                    <input
                      type="text"
                      placeholder="e.g. St. Xavier School / Agrawal Shop"
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Expected Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    >
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+ Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Timeline Expectation</label>
                    <select
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className="w-full h-11 px-4 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg focus:outline-none focus:border-[#0052FF]"
                    >
                      <option value="Urgent (< 1 Week)">Urgent (&lt; 1 Week)</option>
                      <option value="2 - 4 Weeks">2 - 4 Weeks</option>
                      <option value="Flexible Timeline">Flexible Timeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 font-mono uppercase mb-1 font-semibold">Describe Your Specific Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what features, pages, or tools you need in detail..."
                    value={form.requirements}
                    onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-sm text-white rounded-lg resize-none focus:outline-none focus:border-[#0052FF]"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedServiceForModal(null)}
                    className="flex-1 py-3 text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 text-xs font-bold text-white rounded-lg cursor-pointer flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}
                  >
                    <Send className="w-4 h-4" /> Submit Requirement Form
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0B0B0D] text-white p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-heading">Need a Custom Combination of Services?</h3>
            <p className="text-xs text-zinc-400 max-w-xl">We build integrated packages (e.g. Website + Graphic Design + SEO + Video Editing) tailored to your exact budget.</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="whitespace-nowrap cursor-pointer"
            onClick={() => handleOpenModal('Custom Integrated Package')}
          >
            Fill Custom Package Form &rarr;
          </Button>
        </div>
      </section>
    </div>
  );
}
