import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Engineering Resources & Whitepapers — Solvark',
  description: 'Access Solvark technical architecture blueprints, whitepapers, developer documentation, and enterprise software guides.',
};

export default function ResourcesPage() {
  const resources = [
    {
      type: 'WHITEPAPER',
      title: 'Architecting 99.99% Availability Systems on Serverless Infrastructure',
      desc: 'A comprehensive technical blueprint on multi-region database failover, zero-downtime deployments, and edge caching.',
      format: 'PDF (2.4 MB)',
    },
    {
      type: 'SECURITY SPEC',
      title: 'PostgreSQL Row Level Security (RLS) & Zero-Trust JWT Authentication',
      desc: 'Implementing cryptographic authorization policies and immutable audit trail logging for enterprise compliance.',
      format: 'PDF (1.8 MB)',
    },
    {
      type: 'PERFORMANCE GUIDE',
      title: 'Sub-Second Core Web Vitals Optimization in Next.js 15 App Router',
      desc: 'Practical strategies for stream rendering, dynamic ISR, bundle splitting, and zero layout shift.',
      format: 'PDF (3.1 MB)',
    },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0B0B0D]">
          <span className="w-2 h-2 bg-[#B80357]" />
          SOLVARK RESOURCES // KNOWLEDGE REPOSITORY
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          Enterprise Software Whitepapers & System Specifications
        </h1>
        <p className="text-[#444444] text-lg font-normal leading-relaxed">
          Deep-dive technical documentation, cloud architecture patterns, and security frameworks engineered for enterprise engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((item, idx) => (
          <Card key={idx} variant="blueprint" className="p-8 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#B80357] font-bold">{item.type}</span>
              <span className="text-[#444444]">{item.format}</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0B0B0D]">{item.title}</h3>
            <p className="text-xs text-[#444444] leading-relaxed font-sans">{item.desc}</p>
            <div className="pt-4">
              <Button variant="outline" size="sm" className="w-full">
                Download Architecture Specification &rarr;
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
