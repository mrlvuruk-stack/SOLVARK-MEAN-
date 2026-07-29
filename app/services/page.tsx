'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_PILLARS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThreeDCanvasModel } from '@/components/ui/3d-canvas-model';

// Service Pillar 3D Image & Detail Mapping
const SERVICE_DETAILS: Record<string, { image: string; icon: string; specs: string[]; deliverableCount: string; sla: string }> = {
  design: {
    image: '/images/3d-design.jpg',
    icon: '🎨',
    deliverableCount: '12+ Core Design Specs',
    sla: '48h Prototype Turnaround',
    specs: [
      'UI/UX Component Systems & Design Tokens',
      'High-Fidelity Wireframes & Interactive Prototypes',
      'Motion Design & Micro-Interaction Specifications',
      'Brand Identity & Enterprise Visual Language',
      'WCAG 2.1 AAA Accessibility Audits',
    ],
  },
  engineering: {
    image: '/images/3d-engineering.jpg',
    icon: '⚡',
    deliverableCount: '100% Test Coverage',
    sla: '99.99% Availability SLA',
    specs: [
      'Custom React 19 & Next.js 15 App Architectures',
      'Resilient Microservices & GraphQL/REST APIs',
      'Cross-Platform Mobile Applications (React Native)',
      'Zero-Trust Row Level Security (RLS) Isolation',
      'Automated CI/CD Deployment Pipelines',
    ],
  },
  cloud: {
    image: '/images/3d-cloud.jpg',
    icon: '☁️',
    deliverableCount: 'Multi-Region Edge CDN',
    sla: 'Zero-Downtime Migration',
    specs: [
      'Cloud-Native Infrastructure as Code (Terraform)',
      'Kubernetes & Docker Container Orchestration',
      'Real-Time Telemetry & APM Monitoring',
      'Automated Disaster Recovery & Failover SLAs',
      'FinOps Cloud Cost & Resource Optimization',
    ],
  },
  growth: {
    image: '/images/3d-growth.jpg',
    icon: '📈',
    deliverableCount: '+300% Avg ROI Surge',
    sla: 'Weekly Growth Sprints',
    specs: [
      'Core Web Vitals & Technical SEO Optimization',
      'Conversion Rate Optimization (CRO) A/B Frameworks',
      'Data Analytics & Event Telemetry Pipelines',
      'Scalable Content Marketing & Brand Campaigns',
      'Omnichannel Lead Generation Architectures',
    ],
  },
};

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPillars = selectedCategory === 'all'
    ? SERVICE_PILLARS
    : SERVICE_PILLARS.filter((p) => p.id === selectedCategory);

  return (
    <div className="pt-28 pb-20 relative z-10 bg-white text-[#0B0B0D] space-y-20">
      {/* HEADER HERO WITH INTERACTIVE 3D MODEL CANVAS */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
            <span className="w-2 h-2 bg-[#FF2A85]" />
            ENTERPRISE CAPABILITIES // v2.5 SPECIFICATION
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
            Engineered Services & <span className="text-gradient-blue-pink">Digital Offerings</span>
          </h1>

          <p className="text-base sm:text-lg text-[#222222] font-normal leading-relaxed max-w-2xl font-sans">
            End-to-end technological capabilities designed to modernize legacy systems, automate complex business workflows, and scale enterprise digital platforms with absolute precision.
          </p>

          {/* Interactive Category Filters */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { id: 'all', label: 'All Pillars' },
              { id: 'design', label: '01 Design' },
              { id: 'engineering', label: '02 Engineering' },
              { id: 'cloud', label: '03 Cloud & Security' },
              { id: 'growth', label: '04 Growth & SEO' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 border text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0052FF] text-white border-[#0052FF] font-bold shadow-sm'
                    : 'bg-white text-[#0B0B0D] border-[#E7E7E7] hover:border-[#FF2A85] font-semibold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Canvas Blueprint Frame */}
        <div className="lg:col-span-5 h-[340px] border border-[#E7E7E7] bg-[#F8F8FA] blueprint-border relative overflow-hidden shadow-sm">
          <div className="absolute top-3 left-4 text-[10px] font-mono text-[#0052FF] uppercase tracking-widest z-10 font-bold">
            3D ARCHITECTURE MATRIX // LIVE MODEL
          </div>
          <ThreeDCanvasModel />
        </div>
      </section>

      {/* SERVICE PILLARS GRID WITH GENERATED 3D ISOMETRIC GRAPHICS */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E7E7E7] pb-4 flex justify-between items-center">
          <div className="text-xs font-mono text-[#FF2A85] uppercase font-bold tracking-widest">
            DETAILED TECHNICAL SPECIFICATIONS
          </div>
          <div className="text-xs font-mono text-[#0B0B0D] font-bold">
            SHOWING {filteredPillars.length} PILLAR(S)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPillars.map((pillar) => {
            const detail = SERVICE_DETAILS[pillar.id] || SERVICE_DETAILS['engineering'];
            return (
              <Card key={pillar.id} variant="blueprint" className="p-8 space-y-6 hover:border-[#0052FF] transition-all flex flex-col justify-between">
                <div className="space-y-6">
                  {/* 3D Isometric Image Header */}
                  <div className="relative w-full h-48 border border-[#E7E7E7] overflow-hidden bg-zinc-100 group">
                    <Image
                      src={detail.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-[#0B0B0D]/90 text-white font-mono text-[10px] uppercase font-bold border border-white/20">
                      {detail.sla}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#0052FF] uppercase font-bold tracking-widest">
                      <span>PILLAR // {pillar.id.toUpperCase()}</span>
                      <span>{detail.icon}</span>
                    </div>

                    <h2 className="text-2xl font-bold font-heading text-[#0B0B0D] leading-tight">{pillar.title}</h2>
                    <p className="text-sm text-[#222222] leading-relaxed font-sans font-normal">{pillar.description}</p>
                  </div>

                  {/* Architectural Specs List */}
                  <div className="space-y-2 pt-2 border-t border-[#E7E7E7]">
                    <div className="text-[10px] font-mono text-[#0B0B0D] uppercase font-bold">
                      INCLUDED CAPABILITIES & DELIVERABLES:
                    </div>
                    <ul className="space-y-2">
                      {detail.specs.map((spec, i) => (
                        <li key={i} className="text-xs text-[#222222] font-sans font-medium flex items-center gap-2">
                          <span className="text-[#FF2A85] font-bold">✓</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E7E7E7] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-[#0052FF] font-bold uppercase bg-blue-50 px-2 py-1 border border-blue-200">{detail.deliverableCount}</span>
                  <Link href={`/contact?service=${pillar.id}`}>
                    <Button variant="primary" size="sm" className="w-full sm:w-auto">
                      Initiate Service Discovery &rarr;
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0B0B0D] text-white p-12 text-center space-y-6 blueprint-border border border-[#0B0B0D]">
          <div className="text-xs font-mono text-[#FF2A85] uppercase font-bold tracking-widest">
            ENTERPRISE DISCOVERY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Need a Custom Architecture or Scaled Tech Team?
          </h2>
          <p className="text-zinc-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Schedule a technical discovery session with Solvark's lead software architects to review your requirements.
          </p>
          <Link href="/contact" className="inline-block pt-2">
            <Button variant="primary" size="lg">
              Schedule Architecture Consultation &rarr;
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
