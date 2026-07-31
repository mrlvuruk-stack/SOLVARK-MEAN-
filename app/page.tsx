'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  SERVICE_PILLARS,
  TICKER_BADGES,
  SOLVARK_DNA_PILLARS,
  ENGINEERING_PHILOSOPHIES,
  ALL_AGENCY_SERVICES,
} from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Sparkles,
  Crown,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  School,
  ShoppingCart,
  Heart,
  Laptop,
  Star,
  Award,
  Layers,
  Flame,
} from 'lucide-react';

// Transformation Capabilities Data
const TRANSFORMATION_TABS = [
  {
    id: 'ecommerce-retail',
    label: 'E-Commerce & Local Shops',
    icon: '🛒',
    headline: 'High-Converting Online Storefronts for Local Shops & Brands.',
    description: 'Transform your retail shop into a modern, high-converting online store with instant 1-click checkout, mobile payment gateways (UPI/PayU), and instant WhatsApp order alerts.',
    metrics: [
      { label: 'CONVERSION SPEED', value: 'Instant 1-Click Checkout' },
      { label: 'MOBILE SPEED', value: '100/100 Google Lighthouse' },
      { label: 'PAYMENT INTEGRATION', value: 'UPI / Cards / PayU' },
    ],
    features: [
      'High-Converting Responsive Shopping Storefronts',
      'Inventory & Stock Management System',
      'Direct WhatsApp Order Notification Alerts',
      'Secure Online Payments (UPI, Credit/Debit Cards)',
    ],
    stack: ['Next.js 15', 'React 19', 'PayU / Stripe', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 'school-erp',
    label: 'School & Institution ERP',
    icon: '🏫',
    headline: 'Complete All-in-One Management System for Schools & Colleges.',
    description: 'Empower principals, teachers, students, parents, and bus drivers with role-based access, online fee payment, digital ID cards, study notes, and live GPS bus tracking.',
    metrics: [
      { label: 'ROLE PORTALS', value: '5 Dedicated Portals' },
      { label: 'FEE AUTOMATION', value: 'Online Digital Receipts' },
      { label: 'BUS TRACKING', value: 'Live Driver GPS Location' },
    ],
    features: [
      'Student Admission to Marksheet & TC Workflow',
      'Online Attendance & Digital Study Notes Upload',
      'Live GPS School Bus Tracking for Parents',
      'Digital Admit Cards & Student ID Card Generator',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Live GPS Tracking', 'Supabase'],
  },
  {
    id: 'small-business',
    label: 'Small Business & Landing Pages',
    icon: '🏪',
    headline: 'Bespoke, high-end websites for local businesses & service providers.',
    description: 'Get a modern, fast, ultra-luxurious digital presence designed to turn local visitors into paying clients for your business.',
    metrics: [
      { label: 'LOAD TIME', value: 'Under 1.2 Seconds' },
      { label: 'LOCAL SEO', value: 'Google Maps Optimization' },
      { label: 'LEAD CAPTURE', value: 'Instant WhatsApp & Email' },
    ],
    features: [
      'High-Converting Landing Pages & Lead Forms',
      'Local SEO & Google Business Optimization',
      'Mobile-First Responsive UI & Micro-Animations',
      'Zero Monthly Maintenance Hassle',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'ngo-community',
    label: 'NGO & Community Platforms',
    icon: '🤝',
    headline: 'Digital tech for non-profits, foundations, and community causes.',
    description: 'Specialized websites and management platforms built for NGOs (like No Pehal) to showcase social work, collect donations, and manage volunteer initiatives.',
    metrics: [
      { label: 'DONATION GATEWAY', value: '0% Platform Fee Setup' },
      { label: 'VOLUNTEER PORTAL', value: 'Member Management' },
      { label: 'SOCIAL IMPACT', value: 'Verified Impact Tracking' },
    ],
    features: [
      'Donation Campaign & Cause Landing Pages',
      'Volunteer Registration & Activity Log',
      'Social Impact Showcase & Media Gallery',
      'Custom Executables & Community Tools',
    ],
    stack: ['React', 'Supabase', 'Custom Desktop Executables', 'PayU'],
  },
  {
    id: 'automation-tools',
    label: 'Business Process & AI Automation',
    icon: '⚡',
    headline: 'Automate repetitive daily tasks and streamline operations.',
    description: 'Eliminate manual paperwork with AI workflow tools, custom desktop applications (like Shroom), and WhatsApp integration.',
    metrics: [
      { label: 'TASK AUTOMATION', value: '90% Manual Time Saved' },
      { label: 'APPLICATION TYPE', value: 'Web & Desktop Executables' },
      { label: 'SUPPORT', value: '24/7 Dedicated Care' },
    ],
    features: [
      'WhatsApp Customer Query & Order Bots',
      'Custom Desktop & Mobile Executable Apps',
      'Automated Invoice & Bill Generation',
      'Internal Team Workflow & Task Manager',
    ],
    stack: ['Python', 'Node.js', 'React', 'Desktop Executable Engines'],
  },
];

// Target Industry Matrix Data
const INDUSTRY_MATRIX = [
  {
    id: 'school-erp',
    sector: 'Schools & Educational Institutions',
    icon: '🏫',
    impact: 'Complete School Management & Live GPS Bus Tracking',
    highlight: 'Role-Based Portals for Principal, Teachers, Students, Parents & Bus Drivers',
    solution: 'Engineered a complete institution ERP handling student admissions (KG1 to 12th), online fee payments, attendance, notes upload, digital admit/ID card generator, and driver live GPS bus location tracking.',
    tags: ['Role Portals', 'Live GPS Bus Tracking', 'Fee Payments', 'ID Card Generator'],
  },
  {
    id: 'local-retail',
    sector: 'Local Shops & Small Businesses',
    icon: '🏪',
    impact: '100% Increase in Local Customer Inquiries',
    highlight: 'Digital Presence, Local Google SEO & WhatsApp Ordering',
    solution: 'Designed and launched modern responsive websites and digital product catalogs for local retail shops and service providers to attract local clients.',
    tags: ['Google Maps SEO', 'WhatsApp Alerts', 'Mobile Friendly'],
  },
  {
    id: 'ecommerce',
    sector: 'E-Commerce & Online Stores',
    icon: '🛒',
    impact: '1-Click Instant Checkout & UPI Integration',
    highlight: 'Mobile Shopping Storefronts & Order Alerts',
    solution: 'Built high-converting online shopping platforms with UPI, PayU, and Credit/Debit card checkout, real-time inventory management, and automated order notifications.',
    tags: ['Instant UPI', 'PayU Gateway', 'WhatsApp Notifications'],
  },
  {
    id: 'ngo-community',
    sector: 'NGOs & Community Causes',
    icon: '🤝',
    highlight: 'No Pehal NGO Platform & Social Work Showcase',
    solution: 'Created dedicated non-profit platforms for NGOs to showcase community initiatives, register volunteers, and collect online donations with 0% platform fee.',
    tags: ['Donation Gateway', 'Volunteer Portal', 'Impact Showcase'],
  },
];

export default function HomePage() {
  const [activeTabId, setActiveTabId] = useState('ecommerce-retail');
  const [activeIndustryId, setActiveIndustryId] = useState('school-erp');

  const activeTab = TRANSFORMATION_TABS.find((t) => t.id === activeTabId) || TRANSFORMATION_TABS[0];
  const activeIndustry = INDUSTRY_MATRIX.find((i) => i.id === activeIndustryId) || INDUSTRY_MATRIX[0];

  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-20 relative z-10 bg-white text-[#0B0B0D]">
      {/* HERO SECTION — ULTRA-LUXURY ZARA-LEVEL PRO MAX REDESIGN */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hero Copy Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#0B0B0D] text-white border border-[#0052FF]/40 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-[#FF2A85] animate-pulse" />
            <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-widest">
              PREMIUM DIGITAL ENGINEERING • BUDGET RATES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-heading leading-[1.08] text-[#0B0B0D]">
            Enterprise-Grade Digital Systems at{' '}
            <span className="bg-gradient-to-r from-[#0052FF] via-[#FF2A85] to-[#8B5CF6] bg-clip-text text-transparent underline decoration-[#FF2A85]/30">
              Accessible Local Rates
            </span>.
          </h1>

          <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-2xl font-sans">
            We build high-performance web platforms, School ERPs with Live GPS, E-Commerce stores, and custom executable software—engineered with 100/100 speed and precision for small businesses, schools, and NGOs.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/services">
              <Button variant="primary" size="lg" className="shadow-xl shadow-[#0052FF]/25 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" /> Explore All 11 Services &rarr;
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="font-bold border-2">
                View Custom Projects & Case Studies
              </Button>
            </Link>
          </div>

          {/* Metric Stats Counter Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E7E7E7]">
            <div className="p-4 bg-[#F8F8FA] border border-[#E7E7E7] rounded-xl space-y-1 blueprint-border">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-[#0052FF]">50+</div>
              <div className="text-[11px] font-mono text-[#555555] font-semibold">Custom Systems Built</div>
            </div>
            <div className="p-4 bg-[#F8F8FA] border border-[#E7E7E7] rounded-xl space-y-1 blueprint-border">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-[#FF2A85]">5 Portals</div>
              <div className="text-[11px] font-mono text-[#555555] font-semibold">School ERP & GPS</div>
            </div>
            <div className="p-4 bg-[#F8F8FA] border border-[#E7E7E7] rounded-xl space-y-1 blueprint-border">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-emerald-600">100/100</div>
              <div className="text-[11px] font-mono text-[#555555] font-semibold">Speed Score Guaranteed</div>
            </div>
            <div className="p-4 bg-[#F8F8FA] border border-[#E7E7E7] rounded-xl space-y-1 blueprint-border">
              <div className="text-2xl sm:text-3xl font-bold font-heading text-amber-500">100%</div>
              <div className="text-[11px] font-mono text-[#555555] font-semibold">Value Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Column: Ultra-Luxurious Holographic Visual Card Deck */}
        <div className="lg:col-span-5 bg-[#050507] border-2 border-[#0052FF]/40 p-8 rounded-3xl text-white shadow-2xl relative space-y-6 overflow-hidden">
          {/* Ambient Lighting Spotlights */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0052FF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF2A85]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Top Luxury Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 relative z-10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF2A85] animate-bounce" />
              <span className="text-xs font-mono text-zinc-200 font-bold uppercase tracking-wider">SOLVARK PLATFORM SUITE</span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 bg-blue-950/60 border border-blue-700/60 text-[#0052FF] font-bold rounded-full">
              ★ PRO ENGINE
            </span>
          </div>

          {/* Luxury Feature Cards */}
          <div className="space-y-3 relative z-10">
            {[
              { icon: '🏫', title: 'School ERP & Live GPS Bus Tracking', badge: 'Flagship ERP', color: '#0052FF' },
              { icon: '🛒', title: '1-Click E-Commerce & PayU Gateway', badge: 'Online Store', color: '#FF2A85' },
              { icon: '🤝', title: 'NGO Platforms (No Pehal NGO)', badge: 'Social Impact', color: '#10B981' },
              { icon: '⚡', title: 'Custom Desktop Apps (Shroom)', badge: 'Executable App', color: '#8B5CF6' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-zinc-900/90 border border-zinc-800/90 rounded-2xl flex items-center justify-between hover:border-amber-400/80 hover:bg-zinc-900 transition-all cursor-pointer group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </span>
                </div>
                <span
                  className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full border"
                  style={{ color: item.color, borderColor: item.color + '40', backgroundColor: item.color + '15' }}
                >
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-10">
            <span>📍 Indore, MP, India</span>
            <span className="text-amber-300 font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Premium Quality Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* TICKER BADGES */}
      <section className="bg-[#0B0B0D] py-4 text-white overflow-hidden border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-around gap-6">
          {TICKER_BADGES.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-300">
              <span className="text-sm">{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ACTION SECTION 1: INTERACTIVE TRANSFORMATION BLUEPRINT EXPLORER */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="border-b border-[#E7E7E7] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#0052FF] uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" /> 01 // CAPABILITY SUITE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B0B0D] pt-1">
              Luxury Digital Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#444444] pt-2">
              Select a solution area to inspect features, metrics, and technology stack.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500 font-bold">
            PRO MAX SYSTEM EXPLORER
          </div>
        </div>

        {/* Tab Selection Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {TRANSFORMATION_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`p-4 text-left transition-all border rounded-xl cursor-pointer ${
                  isActive
                    ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-lg scale-[1.02]'
                    : 'bg-[#F8F8FA] text-[#0B0B0D] border-[#E7E7E7] hover:border-[#0052FF]'
                }`}
              >
                <div className="text-xl mb-1">{tab.icon}</div>
                <div className="text-xs font-bold font-heading">{tab.label}</div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Detail Display */}
        <Card variant="blueprint" className="p-8 sm:p-10 space-y-8 border-2 border-[#0052FF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#FF2A85] font-bold uppercase tracking-wider">
                  FEATURE SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B0B0D]">
                  {activeTab.headline}
                </h3>
              </div>
              <p className="text-sm text-[#333333] font-sans leading-relaxed">
                {activeTab.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">
                  KEY FEATURES & CAPABILITIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeTab.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-[#F8F8FA] p-2.5 border border-[#E7E7E7] rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs text-[#0B0B0D] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics & Technology Stack Column */}
            <div className="lg:col-span-5 space-y-6 bg-[#F8F8FA] p-6 border border-[#E7E7E7] rounded-xl blueprint-border">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">
                  BENCHMARK METRICS:
                </span>
                <div className="space-y-2">
                  {activeTab.metrics.map((m, i) => (
                    <div key={i} className="bg-white p-3 border border-[#E7E7E7] flex justify-between items-center rounded-lg">
                      <span className="text-[10px] font-mono text-[#555555] font-bold uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-[#0B0B0D] font-mono text-[#0052FF]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E7E7E7]">
                <span className="text-xs font-mono text-[#FF2A85] font-bold uppercase tracking-wider">
                  TECHNOLOGY STACK:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeTab.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 bg-white border border-[#E7E7E7] text-[10px] font-mono text-[#0B0B0D] font-bold rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* SOLVARK DNA PILLARS */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase text-[#FF2A85] font-bold tracking-widest">SOLVARK GUARANTEE</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-[#0B0B0D]">Why Choose Solvark?</h2>
          <p className="text-sm text-[#444444]">High-end luxury standards at prices that fit local business budgets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLVARK_DNA_PILLARS.map((pillar) => (
            <Card key={pillar.number} variant="blueprint" className="p-6 space-y-4 hover:border-[#0052FF] transition-all">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{pillar.icon}</span>
                <span className="text-xs font-mono text-[#0052FF] font-bold">{pillar.number}</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0B0B0D]">{pillar.title}</h3>
              <p className="text-xs text-[#444444] font-sans leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
