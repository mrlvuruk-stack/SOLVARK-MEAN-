'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GALLERY_ITEMS = [
  {
    id: '1',
    title: 'Multi-Region PostgreSQL Database Topology',
    category: 'Architecture Diagrams',
    type: 'BLUEPRINT SPEC',
    tech: 'PostgreSQL // Supabase RLS // Edge CDN',
    desc: 'Low-latency multi-region replication model with automated failover and zero data loss guarantee.',
    aspect: 'aspect-video',
  },
  {
    id: '2',
    title: 'Enterprise Fintech Real-Time Trading Terminal',
    category: 'Web Applications',
    type: 'DASHBOARD UI',
    tech: 'React 19 // WebSockets // Recharts',
    desc: 'Sub-50ms market feed streaming interface designed for high-frequency algorithmic traders.',
    aspect: 'aspect-video',
  },
  {
    id: '3',
    title: 'HIPAA-Compliant Healthcare SaaS Dashboard',
    category: 'SaaS Platforms',
    type: 'SYSTEM WORKFLOW',
    tech: 'Next.js 15 // Tailwind CSS // Zero-Trust Auth',
    desc: 'Encrypted patient portal with automated audit trail logging and telemedicine video SDK integration.',
    aspect: 'aspect-video',
  },
  {
    id: '4',
    title: 'AI Agentic Workflow Execution Monitor',
    category: 'AI & Automation',
    type: 'VECTOR SPEC',
    tech: 'pgvector // LangChain // Python Edge',
    desc: 'Visual DAG execution inspector tracking autonomous LLM decision trees and tool invocations.',
    aspect: 'aspect-video',
  },
  {
    id: '5',
    title: 'Global Retail E-Commerce Design System',
    category: 'Design Systems',
    type: 'UI KIT // BRAND',
    tech: 'Figma // Space Grotesk // CSS Variables',
    desc: 'Modular design system featuring dark charcoal typography and Brand Magenta accent guidelines.',
    aspect: 'aspect-video',
  },
  {
    id: '6',
    title: 'Zero-Trust Cloud Microservices Topology',
    category: 'Architecture Diagrams',
    type: 'INFRASTRUCTURE',
    tech: 'AWS ECS // Docker // Cloudflare Edge',
    desc: 'Containerized Kubernetes microservice mesh enforcing strict mutual TLS (mTLS) verification.',
    aspect: 'aspect-video',
  },
];

const CATEGORIES = ['All Assets', 'Architecture Diagrams', 'Web Applications', 'SaaS Platforms', 'AI & Automation', 'Design Systems'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Assets');
  const [selectedItem, setSelectedItem] = React.useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All Assets' || item.category === selectedCategory
  );

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      {/* Page Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          SOLVARK ARCHITECTURE GALLERY // VISUAL ASSETS
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          Engineering Diagrams, UI Mockups & <span className="text-gradient-blue-pink">System Blueprints</span>
        </h1>
        <p className="text-[#444444] text-lg font-normal leading-relaxed max-w-2xl font-sans">
          A high-fidelity gallery showcasing our system architecture diagrams, SaaS user interfaces, and brand engineering design tokens.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E7E7E7]">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-mono transition-colors border cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#0052FF] text-white border-[#0052FF] font-bold'
                : 'bg-[#F8F8FA] text-[#0B0B0D] border-[#E7E7E7] hover:border-[#FF2A85]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            variant="blueprint"
            className="p-6 space-y-6 flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            {/* Visual Frame Simulation */}
            <div className="w-full aspect-video bg-[#F8F8FA] border border-[#E7E7E7] p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-[#B80357] transition-colors blueprint-border">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#444444]">
                <span className="text-[#B80357] font-bold">{item.type}</span>
                <span>ID: #{item.id}</span>
              </div>
              <div className="my-auto text-center space-y-2">
                <div className="w-10 h-10 border border-[#E7E7E7] bg-white text-[#B80357] font-heading font-bold text-lg flex items-center justify-center mx-auto shadow-sm">
                  S
                </div>
                <div className="text-xs font-mono text-[#0B0B0D] font-bold">{item.category}</div>
              </div>
              <div className="text-[9px] font-mono text-[#444444] truncate">{item.tech}</div>
            </div>

            {/* Description Details */}
            <div className="space-y-3">
              <div className="text-[10px] font-mono text-[#B80357] font-bold uppercase">{item.category}</div>
              <h3 className="text-xl font-bold font-heading text-[#0B0B0D] group-hover:text-[#B80357] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#444444] leading-relaxed font-sans">{item.desc}</p>
            </div>

            <div className="pt-4 border-t border-[#E7E7E7] flex justify-between items-center text-xs font-mono">
              <span className="text-[#444444]">CLICK TO EXPAND SPEC</span>
              <span className="text-[#B80357] font-bold">VIEW &rarr;</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Expanded Modal Specification View */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0B0B0D]/70 backdrop-blur-sm">
          <div className="bg-white border border-[#E7E7E7] max-w-2xl w-full p-8 space-y-6 relative blueprint-border shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E7E7E7] pb-4">
              <div className="text-xs font-mono text-[#B80357] font-bold">
                SYSTEM SPECIFICATION // #{selectedItem.id}
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-xs font-mono text-[#0B0B0D] font-bold px-2 py-1 bg-[#F8F8FA] border border-[#E7E7E7] hover:bg-[#B80357] hover:text-white transition-colors"
              >
                CLOSE [X]
              </button>
            </div>

            <div className="w-full aspect-video bg-[#F8F8FA] border border-[#E7E7E7] p-8 flex flex-col justify-between blueprint-border">
              <div className="text-xs font-mono text-[#B80357] font-bold">{selectedItem.type}</div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold font-heading text-[#0B0B0D]">{selectedItem.title}</h3>
                <p className="text-xs font-mono text-[#444444]">{selectedItem.tech}</p>
              </div>
              <div className="text-[10px] font-mono text-zinc-400 text-right">STATUS: VERIFIED PRODUCTION</div>
            </div>

            <p className="text-xs text-[#444444] leading-relaxed font-sans">{selectedItem.desc}</p>

            <div className="flex items-center justify-between pt-4 border-t border-[#E7E7E7]">
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  Request Custom System Blueprint &rarr;
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => setSelectedItem(null)}>
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
