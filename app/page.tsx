'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  SERVICE_PILLARS,
  TICKER_BADGES,
  SOLVARK_DNA_PILLARS,
  ENGINEERING_PHILOSOPHIES,
} from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// TCS-Style Enterprise Transformation Capabilities Tabs Data
const TRANSFORMATION_TABS = [
  {
    id: 'ai-intelligence',
    label: 'AI & Machine Intelligence',
    icon: '🧠',
    headline: 'Infrastructure to Intelligence: Scaling Enterprise AI safely.',
    description: 'Embed self-learning predictive models, automated LLM orchestration, and intelligent decision engines directly into your daily operational workflows.',
    metrics: [
      { label: 'WORKFLOW AUTOMATION', value: '85% Efficiency Boost' },
      { label: 'MODEL LATENCY', value: '< 45ms Edge Inference' },
      { label: 'DATA COMPLIANCE', value: '100% Encrypted Isolation' },
    ],
    features: [
      'Predictive Analytics & Forecasting Models',
      'LLM Fine-Tuning & Custom RAG Pipelines',
      'Automated Document Processing & Vision AI',
      'Real-Time Anomaly Detection Engines',
    ],
    stack: ['PyTorch', 'TensorFlow', 'LangChain', 'Python', 'Next.js 15 Edge'],
  },
  {
    id: 'cloud-edge',
    label: 'Cloud & Resilient Microservices',
    icon: '☁️',
    headline: 'Cloud-native elasticity engineered for zero downtime.',
    description: 'Migrate legacy monoliths into distributed microservices architectures designed to scale effortlessly under peak global traffic.',
    metrics: [
      { label: 'TARGET UPTIME', value: '99.99% Guaranteed SLA' },
      { label: 'AUTO-SCALING', value: 'Elastic Concurrency' },
      { label: 'DEPLOYMENT FREQUENCY', value: 'Continuous Edge CI/CD' },
    ],
    features: [
      'Zero-Downtime Microservices Architecture',
      'Multi-Region Edge Caching & CDN Routing',
      'Automated Infrastructure as Code (Terraform)',
      'Real-Time Telemetry & Monitoring (Datadog)',
    ],
    stack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'zero-trust',
    label: 'Zero-Trust Cyber Security',
    icon: '🛡️',
    headline: 'Security woven directly into system architecture.',
    description: 'Ironclad RBAC authorization, end-to-end data encryption, and automated vulnerability scanning at every stage of the build lifecycle.',
    metrics: [
      { label: 'SECURITY POLICY', value: 'Zero-Trust Isolation' },
      { label: 'ENCRYPTION STANDARD', value: 'AES-256 / TLS 1.3' },
      { label: 'COMPLIANCE SLA', value: 'SOC 2 & HIPAA Ready' },
    ],
    features: [
      'Row Level Security (RLS) & Multi-Tenant Isolation',
      'Automated Static & Dynamic Security Auditing',
      'Encrypted Telemetry & Audit Trail Logging',
      'Identity & Access Management (IAM) Integration',
    ],
    stack: ['Supabase RLS', 'OAuth 2.0', 'Vault', 'TypeScript', 'NextAuth'],
  },
  {
    id: 'digital-saas',
    label: 'Enterprise SaaS & Web Apps',
    icon: '🚀',
    headline: 'High-performance web applications built for speed.',
    description: 'Delivering ultra-fast, accessible, and intuitive digital platforms using modern React 19 Edge and architectural blueprint design systems.',
    metrics: [
      { label: 'LIGHTHOUSE SCORE', value: '98+ Performance Index' },
      { label: 'USER SATISFACTION', value: '99.4% CSAT Index' },
      { label: 'CODE COVERAGE', value: '100% Automated Testing' },
    ],
    features: [
      'React 19 & Next.js 15 App Router Hardening',
      'Tailwind CSS & Custom Design Tokens System',
      'Accessible WCAG AAA UI/UX Primitives',
      'Headless CMS & API Integration Engine',
    ],
    stack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vitest'],
  },
];

// Interactive TCS-Style Industry Showcase Data
const INDUSTRY_MATRIX = [
  {
    id: 'fintech',
    sector: 'FinTech & Banking',
    icon: '🏦',
    impact: '$1.2B+ Daily Transactions Managed',
    highlight: 'Real-Time High Frequency Trading & KYC Verification Portal',
    solution: 'Engineered a zero-trust compliance portal and micro-latency transaction auditing engine that processed over 40M financial operations per month.',
    tags: ['Automated KYC', 'Zero-Trust RLS', 'Real-Time Telemetry'],
  },
  {
    id: 'healthcare',
    sector: 'Healthcare Tech',
    icon: '🏥',
    impact: '1M+ Patient Sessions Secured',
    highlight: 'HIPAA-Compliant SaaS Ecosystem & Telemedicine Portal',
    solution: 'Architected end-to-end encrypted medical record pipeline with AI-driven diagnostic triage capabilities and 99.99% availability.',
    tags: ['HIPAA Compliance', 'Encrypted Telemetry', 'AI Triage'],
  },
  {
    id: 'ecommerce',
    sector: 'E-Commerce & Retail',
    icon: '🛍️',
    impact: '+300% Conversion Rate Surge',
    highlight: 'Headless Global Storefront & Recommendation Engine',
    solution: 'Re-built legacy monolith into sub-second edge-rendered storefront with real-time inventory synchronization across 12 countries.',
    tags: ['Headless Next.js', 'Edge Caching', 'AI Recommendations'],
  },
  {
    id: 'logistics',
    sector: 'Logistics & Supply Chain',
    icon: '📦',
    impact: '40% Route Efficiency Optimization',
    highlight: 'Fleet Tracking & Dynamic Route Dispatch System',
    solution: 'Developed live IoT telemetry platform tracking 15,000+ freight trucks with automated route adjustments and predictive maintenance alerts.',
    tags: ['IoT Telemetry', 'Route Optimization', 'Real-Time Maps'],
  },
];

export default function HomePage() {
  const [activeTabId, setActiveTabId] = useState('ai-intelligence');
  const [activeIndustryId, setActiveIndustryId] = useState('fintech');
  
  // Interactive Project Inquiry SLA Estimator State
  const [projectScope, setProjectScope] = useState('saas');
  const [projectTimeline, setProjectTimeline] = useState('8weeks');

  const activeTab = TRANSFORMATION_TABS.find((t) => t.id === activeTabId) || TRANSFORMATION_TABS[0];
  const activeIndustry = INDUSTRY_MATRIX.find((i) => i.id === activeIndustryId) || INDUSTRY_MATRIX[0];

  // Helper for SLA Estimator output
  const getEstimatedSla = () => {
    if (projectTimeline === '4weeks') {
      return { sprint: 'Rapid Architecture MVP', team: '3 Senior Engineers + 1 Lead Architect', delivery: '28 Calendar Days', sla: '99.9% Uptime SLA' };
    }
    if (projectTimeline === '8weeks') {
      return { sprint: 'Enterprise Production Build', team: '5 Senior Engineers + 1 AI Lead + 1 QA', delivery: '56 Calendar Days', sla: '99.99% Uptime SLA' };
    }
    return { sprint: 'Global Scale & Transformation', team: 'Dedicated Enterprise Pod (8+ Specialists)', delivery: 'Quarterly Sprints', sla: '99.99% Dedicated SLA' };
  };

  const slaEstimate = getEstimatedSla();

  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-20 relative z-10 bg-white text-[#0B0B0D]">
      {/* 00 // TICKER MARQUEE BANNER WITH BLUE & PINK ACCENTS */}
      <div className="w-full bg-[#0B0B0D] text-white border-y border-[#E7E7E7] overflow-hidden py-3">
        <div className="flex w-max animate-marquee space-x-8 text-xs font-mono tracking-wider uppercase">
          {[...TICKER_BADGES, ...TICKER_BADGES].map((badge, idx) => (
            <div key={idx} className="flex items-center space-x-3 px-4">
              <span className="text-[#FF2A85] font-bold">{badge.icon}</span>
              <span className="text-zinc-300 font-semibold">{badge.label}</span>
              <span className="text-[#0052FF] font-bold ml-4">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO SECTION — SPLIT BLUEPRINT LAYOUT WITH BLUE & PINK LEADER MESSAGING */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0B0B0D]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A85] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2A85]"></span>
            </span>
            SYSTEM ARCHITECTURE & GLOBAL DIGITAL TRANSFORMATION
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-heading leading-[1.05] text-[#0B0B0D]">
            From Infrastructure to Intelligence: We help enterprises{' '}
            <span className="text-gradient-blue-pink bg-blue-50/50 px-2 py-0.5 border-b-2 border-[#FF2A85]">
              scale with precision
            </span>.
          </h1>

          <p className="text-base sm:text-lg text-[#444444] font-normal leading-relaxed max-w-2xl font-sans">
            Solvark combines global enterprise consulting, resilient cloud microservices, and AI-infused software engineering to simplify digital complexity and guarantee measurable business outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Initiate Consultation &rarr;
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                Explore Enterprise Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* Blueprint Visual Frame Right — Live Status Spec */}
        <div className="lg:col-span-5 border border-[#E7E7E7] bg-[#F8F8FA] p-8 space-y-6 relative blueprint-border shadow-sm">
          <div className="text-xs font-mono text-[#0052FF] uppercase tracking-widest flex items-center justify-between border-b border-[#E7E7E7] pb-3 font-bold">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF2A85]" />
              ENTERPRISE METRICS // v2.2
            </span>
            <span className="text-[#0B0B0D] bg-blue-500/10 text-[#0052FF] px-2 py-0.5 border border-blue-500/20 text-[10px] font-bold">
              SYSTEM ONLINE
            </span>
          </div>

          <div className="space-y-4">
            {[
              { label: 'ARCHITECTURE SLA', val: '99.99% Availability Guaranteed' },
              { label: 'SECURITY ENGINE', val: 'Zero-Trust RLS & Encrypted Isolation' },
              { label: 'STACK HARDENING', val: 'React 19 & Next.js 15 Edge Engine' },
              { label: 'RESPONSE TIME', val: '< 24h Engineering Commitment' },
            ].map((spec, i) => (
              <div key={i} className="p-4 bg-white border border-[#E7E7E7] space-y-1 hover:border-[#0052FF]/50 transition-colors">
                <div className="text-[10px] font-mono text-[#444444] uppercase tracking-wider">{spec.label}</div>
                <div className="text-sm font-bold text-[#0B0B0D] font-heading">{spec.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION SECTION 1: INTERACTIVE TRANSFORMATION BLUEPRINT EXPLORER */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="border-b border-[#E7E7E7] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#0052FF] uppercase tracking-widest font-bold">
              01 // CAPABILITY ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] pt-1">
              Enterprise Transformation Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#444444] pt-2">
              Select a capability area to inspect its architectural spec, live metrics, and technology stack.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            INTERACTIVE SYSTEM EXPLORER
          </div>
        </div>

        {/* Tab Selection Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {TRANSFORMATION_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`p-4 border text-left transition-all flex items-center space-x-3 cursor-pointer ${
                  isActive
                    ? 'border-[#FF2A85] bg-pink-50/40 shadow-sm'
                    : 'border-[#E7E7E7] bg-white hover:border-[#0052FF]/50'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <div>
                  <div className={`text-xs font-bold font-heading ${isActive ? 'text-[#FF2A85]' : 'text-[#0B0B0D]'}`}>
                    {tab.label}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    {isActive ? '● SELECTED' : 'SELECT SPEC'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Detail View */}
        <div className="p-8 sm:p-10 border border-[#E7E7E7] bg-[#F8F8FA] blueprint-border space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#E7E7E7] text-[11px] font-mono text-[#0052FF] font-bold">
                {activeTab.icon} CAPABILITY SPEC // {activeTab.id.toUpperCase()}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B0B0D]">
                {activeTab.headline}
              </h3>
              <p className="text-sm text-[#444444] font-sans leading-relaxed">
                {activeTab.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-[#0B0B0D] font-bold uppercase tracking-wider">
                  CORE ARCHITECTURAL FEATURES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {activeTab.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-sans text-[#0B0B0D] bg-white p-2.5 border border-[#E7E7E7]">
                      <span className="text-[#FF2A85] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 border border-[#E7E7E7] space-y-4">
                <div className="text-xs font-mono text-[#0052FF] font-bold uppercase border-b border-[#E7E7E7] pb-2">
                  BENCHMARK METRICS
                </div>
                <div className="space-y-3">
                  {activeTab.metrics.map((m, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="font-mono text-[#444444]">{m.label}</span>
                      <span className="font-bold text-[#0B0B0D] font-heading">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 border border-[#E7E7E7] space-y-3">
                <div className="text-xs font-mono text-[#444444] uppercase font-bold">
                  VERIFIED TECH STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeTab.stack.map((st, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#F8F8FA] border border-[#E7E7E7] text-[10px] font-mono text-[#0B0B0D]">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE MISSION & OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="border border-[#E7E7E7] bg-[#F8F8FA] p-8 sm:p-12 blueprint-border space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono text-[#FF2A85] uppercase tracking-widest font-bold">
                MISSION STATEMENT // GLOBAL ECOSYSTEM
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] leading-tight">
                Building digital trust and empowering global enterprises to transform with certainty.
              </h2>
              <p className="text-sm sm:text-base text-[#444444] font-sans leading-relaxed">
                At Solvark, we go beyond delivering code. We build enduring technological partnerships that navigate modern tech cycles—from cloud microservices to generative AI—delivering resilient systems, uncompromised security, and measurable ROI.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-5 bg-white border border-[#E7E7E7] space-y-1">
                <div className="text-2xl font-bold font-heading text-[#0052FF]">99.99%</div>
                <div className="text-xs font-mono text-[#444444]">Target Infrastructure SLA</div>
              </div>
              <div className="p-5 bg-white border border-[#E7E7E7] space-y-1">
                <div className="text-2xl font-bold font-heading text-[#FF2A85]">&lt; 24h</div>
                <div className="text-xs font-mono text-[#444444]">Direct Architecture SLA</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E7E7E7] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#0052FF] font-bold text-lg">✓</span>
              <p className="text-xs font-sans text-[#0B0B0D]">Engineered core software foundations for global operations.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF2A85] font-bold text-lg">✓</span>
              <p className="text-xs font-sans text-[#0B0B0D]">Integrated predictive AI automation & decision engines.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#0052FF] font-bold text-lg">✓</span>
              <p className="text-xs font-sans text-[#0B0B0D]">Guaranteed zero-trust data protection & edge scalability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTION SECTION 2: INTERACTIVE INDUSTRY MATRIX & IMPACT EXPLORER */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E7E7E7] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#0052FF] uppercase tracking-widest font-bold">
              02 // INDUSTRY VERTICALS & IMPACT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] pt-1">
              Domain Transformation Matrix
            </h2>
          </div>
          <Link href="/industries" className="text-xs font-mono text-[#FF2A85] hover:underline font-bold">
            VIEW ALL SECTORS &rarr;
          </Link>
        </div>

        {/* Industry Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRY_MATRIX.map((ind) => {
            const isSelected = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`p-5 border text-left transition-all space-y-2 cursor-pointer ${
                  isSelected
                    ? 'border-[#0052FF] bg-[#0052FF] text-white shadow-md'
                    : 'border-[#E7E7E7] bg-white text-[#0B0B0D] hover:border-[#FF2A85]'
                }`}
              >
                <div className="text-2xl">{ind.icon}</div>
                <div className="text-sm font-bold font-heading">{ind.sector}</div>
                <div className={`text-[10px] font-mono ${isSelected ? 'text-white/80' : 'text-zinc-400'}`}>
                  {ind.impact}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep Dive Card */}
        <Card variant="blueprint" className="p-8 sm:p-10 space-y-6">
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#E7E7E7] pb-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{activeIndustry.icon}</span>
              <div>
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">
                  TRANSFORMATION CASE // {activeIndustry.sector}
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#0B0B0D]">
                  {activeIndustry.highlight}
                </h3>
              </div>
            </div>
            <div className="px-4 py-2 bg-pink-50 border border-pink-200 text-[#FF2A85] font-mono text-xs font-bold">
              OUTCOME: {activeIndustry.impact}
            </div>
          </div>

          <p className="text-sm text-[#444444] font-sans leading-relaxed">
            {activeIndustry.solution}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E7E7E7]">
            <div className="flex flex-wrap gap-2">
              {activeIndustry.tags.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0B0B0D]">
                  #{t}
                </span>
              ))}
            </div>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Discuss Sector Solution &rarr;
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* SOLVARK DNA — FOUNDATIONAL PILLARS GRID */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E7E7E7] pb-6">
          <div className="text-xs font-mono text-[#FF2A85] uppercase tracking-widest font-bold">
            FOUNDATIONAL ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] pt-1">
            The DNA That Drives Solvark
          </h2>
          <p className="text-xs sm:text-sm text-[#444444] pt-2 max-w-xl">
            Four core principles engineered into every piece of software, design system, and deployment pipeline we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLVARK_DNA_PILLARS.map((pillar) => (
            <Card key={pillar.number} variant="blueprint" className="p-6 space-y-4 flex flex-col justify-between hover:border-[#0052FF] transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[#E7E7E7] pb-3">
                  <span className="text-2xl">{pillar.icon}</span>
                  <span className="text-xs font-mono text-[#0052FF] font-bold">{pillar.number}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0B0B0D]">{pillar.title}</h3>
                <p className="text-xs text-[#444444] leading-relaxed font-sans">{pillar.description}</p>
              </div>
              <div className="pt-3 border-t border-[#E7E7E7] text-[10px] font-mono text-[#444444] uppercase tracking-wider">
                CORE PRINCIPLE // VERIFIED
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION — ASYMMETRICAL BLUEPRINT GRID */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E7E7E7] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#0052FF] uppercase tracking-widest font-bold">03 // CORE OFFERINGS</div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] pt-1">
              Engineered Capabilities
            </h2>
          </div>
          <Link href="/services" className="text-xs font-mono text-[#FF2A85] hover:underline font-bold">
            VIEW ALL SERVICES &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const isWide = idx % 3 === 0;
            return (
              <div
                key={pillar.id}
                className={isWide ? 'md:col-span-8' : 'md:col-span-4'}
              >
                <Card variant="blueprint" className="h-full p-8 space-y-4 flex flex-col justify-between hover:border-[#FF2A85] transition-all">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                      <span>PILLAR 0{idx + 1}</span>
                      <span className="w-2 h-2 bg-[#FF2A85]" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-[#0B0B0D]">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-sans">{pillar.description}</p>
                  </div>
                  <div className="pt-6 border-t border-[#E7E7E7] flex justify-between items-center">
                    <span className="text-[10px] font-mono text-zinc-400">STATUS: ENTERPRISE READY</span>
                    <Link href={`/services`} className="text-xs font-bold text-[#FF2A85] hover:underline">
                      SPECIFICATION &rarr;
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* ENGINEERING PHILOSOPHY SECTION */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E7E7E7] pb-6">
          <div className="text-xs font-mono text-[#FF2A85] uppercase tracking-widest font-bold">
            ENGINEERING DISCIPLINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] pt-1">
            Our Architectural Directives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_PHILOSOPHIES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F8F8FA] border border-[#E7E7E7] space-y-4 blueprint-border hover:border-[#0052FF] transition-colors"
            >
              <div className="text-3xl text-[#0052FF] font-serif leading-none">“</div>
              <h3 className="text-xl font-bold font-heading text-[#0B0B0D] -mt-2">
                {item.quote}
              </h3>
              <p className="text-xs text-[#444444] font-sans leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTION SECTION 3: INTERACTIVE SLA & PROJECT ESTIMATOR CALCULATOR WIDGET */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="border border-[#E7E7E7] bg-[#F8F8FA] p-8 sm:p-12 blueprint-border space-y-8">
          <div className="border-b border-[#E7E7E7] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-[#0052FF] uppercase tracking-widest font-bold">
                04 // INTERACTIVE DISCOVERY
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B0B0D] pt-1">
                Project SLA & Scope Estimator
              </h2>
            </div>
            <div className="text-xs font-mono text-[#FF2A85] font-bold">
              ESTIMATE YOUR DISCOVERY SLA
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              {/* Scope Selector */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-[#0B0B0D] font-bold uppercase">
                  1. SELECT PRIMARY DISCOVERY SCOPE:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'saas', label: 'Full-Stack SaaS Platform' },
                    { id: 'ai', label: 'AI & Automation Engine' },
                    { id: 'cloud', label: 'Cloud Migration & Microservices' },
                    { id: 'design', label: 'Design System & UI/UX' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setProjectScope(s.id)}
                      className={`p-3 border text-xs font-sans text-left transition-all cursor-pointer ${
                        projectScope === s.id
                          ? 'border-[#0052FF] bg-blue-50/50 font-bold text-[#0052FF]'
                          : 'border-[#E7E7E7] bg-white text-[#0B0B0D] hover:border-[#FF2A85]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selector */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-[#0B0B0D] font-bold uppercase">
                  2. TARGET SPRINT TIMELINE:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '4weeks', label: '4 Weeks (Rapid MVP)' },
                    { id: '8weeks', label: '8 Weeks (Production Build)' },
                    { id: '12weeks', label: '12+ Weeks (Global Scale)' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setProjectTimeline(t.id)}
                      className={`p-3 border text-xs font-sans text-center transition-all cursor-pointer ${
                        projectTimeline === t.id
                          ? 'border-[#FF2A85] bg-[#FF2A85] font-bold text-white'
                          : 'border-[#E7E7E7] bg-white text-[#0B0B0D] hover:border-[#0052FF]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Output Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-[#E7E7E7] space-y-6">
              <div className="text-xs font-mono text-[#0052FF] uppercase font-bold border-b border-[#E7E7E7] pb-3 flex justify-between items-center">
                <span>ESTIMATED ARCHITECTURE PLAN</span>
                <span className="w-2 h-2 bg-[#FF2A85]" />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">SPRINT MODEL</div>
                  <div className="text-base font-bold font-heading text-[#0B0B0D]">{slaEstimate.sprint}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">TEAM ALLOCATION</div>
                  <div className="text-sm font-sans text-[#0B0B0D]">{slaEstimate.team}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#E7E7E7]">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">TARGET DELIVERY</div>
                    <div className="text-sm font-bold text-[#FF2A85] font-heading">{slaEstimate.delivery}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">AVAILABILITY SLA</div>
                    <div className="text-sm font-bold text-[#0052FF] font-heading">{slaEstimate.sla}</div>
                  </div>
                </div>
              </div>

              <Link href={`/contact?scope=${projectScope}&timeline=${projectTimeline}`}>
                <Button variant="primary" size="lg" className="w-full shadow-md mt-2">
                  Lock In SLA Consultation &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION — MAGAZINE EDITORIAL LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E7E7E7] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#0052FF] uppercase tracking-widest font-bold">05 // CASE STUDIES</div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] pt-1">
              Featured Deliveries
            </h2>
          </div>
          <Link href="/portfolio" className="text-xs font-mono text-[#FF2A85] hover:underline font-bold">
            FULL PORTFOLIO &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              slug: 'global-retail-ecommerce',
              title: 'Global Retail Platform Modernization',
              category: 'E-Commerce Engineering',
              metric: '+300% Conversion Surge',
              description: 'Re-architected monolithic legacy storefront to a high-speed headless infrastructure.',
            },
            {
              slug: 'healthcare-telemedicine-portal',
              title: 'HIPAA-Compliant SaaS Ecosystem',
              category: 'Healthcare Cloud',
              metric: '99.99% SLA Uptime',
              description: 'Zero-trust telemedicine portal handling over 1M encrypted patient sessions.',
            },
          ].map((item) => (
            <Card key={item.slug} variant="blueprint" className="p-8 space-y-6 hover:border-[#0052FF] transition-all">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-[#0052FF] uppercase font-bold">{item.category}</span>
                <span className="text-[10px] font-mono text-zinc-400">VERIFIED</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0B0B0D]">{item.title}</h3>
              <p className="text-xs text-[#444444] font-sans">{item.description}</p>
              <div className="p-4 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0B0B0D] font-bold">
                KEY RESULT: <span className="text-[#FF2A85]">{item.metric}</span>
              </div>
              <Link href={`/portfolio/${item.slug}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Read Full Case Study &rarr;
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA SECTION — MINIMAL CENTER COMPOSITION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0B0B0D] text-white p-12 sm:p-16 text-center space-y-8 relative blueprint-border border border-[#0B0B0D]">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF2A85] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 bg-[#0052FF]" />
            GLOBAL ENGINEERING PARTNERSHIP
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-3xl mx-auto">
            Ready to Build Digital Systems with Lasting Precision?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm font-sans leading-relaxed">
            Move beyond legacy constraints. Partner with our senior tech architects to build a clear roadmap for your digital transformation.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Initiate Project Inquiry &rarr;
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="darkOutline" size="lg">
                Browse Architecture Specs
              </Button>
            </Link>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
            PREMIUM ENGINEERING • INTELLIGENT ARCHITECTURE • SCALABLE TECH
          </div>
        </div>
      </section>
    </div>
  );
}
