import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Industry Expertise & Domain Solutions',
  description: 'Solvark specialized digital engineering solutions across Healthcare, FinTech, E-Commerce, SaaS, and Enterprise sectors.',
};

const INDUSTRIES = [
  { slug: 'healthcare', title: 'Healthcare & Life Sciences', desc: 'HIPAA-compliant platforms, EHR integration & telemedicine.' },
  { slug: 'fintech', title: 'FinTech & Banking', desc: 'PCI-DSS secure financial analytics, micro-payments & fraud detection.' },
  { slug: 'ecommerce', title: 'Global E-Commerce', desc: 'High-conversion storefronts, headless Shopify & real-time inventory.' },
  { slug: 'saas', title: 'SaaS Platforms', desc: 'Multi-tenant cloud architectures, automated billing & analytics.' },
  { slug: 'education', title: 'EdTech & Learning', desc: 'Interactive learning portals, LMS integration & video streaming.' },
  { slug: 'enterprise', title: 'Global Enterprise', desc: 'Legacy modernization, ERP integration & microservices scaling.' },
];

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs font-mono text-indigo-400 border border-indigo-500/30">
          Domain Expertise
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Industry-Tailored Engineering
        </h1>
        <p className="text-zinc-400 text-lg">
          Domain-specific compliance, high-performance architectures, and tailored user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INDUSTRIES.map((ind) => (
          <Card key={ind.slug} variant="glass" glow className="p-8 space-y-6 flex flex-col justify-between border-zinc-800">
            <div className="space-y-4">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Industry</span>
              <h2 className="text-2xl font-bold text-white">{ind.title}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">{ind.desc}</p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <Link href={`/industries/${ind.slug}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Explore Case Studies &rarr;
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
