import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Industry Expertise & Domain Solutions',
  description: 'Solvark specialized digital engineering solutions across Healthcare, FinTech, E-Commerce, SaaS, and Enterprise sectors.',
};

const INDUSTRIES = [
  { slug: 'healthcare', title: 'Healthcare & Life Sciences', desc: 'HIPAA-compliant platforms, EHR integration & telemedicine.', badge: 'HealthTech' },
  { slug: 'fintech', title: 'FinTech & Banking', desc: 'PCI-DSS secure financial analytics, micro-payments & fraud detection.', badge: 'BFSI Cloud' },
  { slug: 'ecommerce', title: 'Global E-Commerce', desc: 'High-conversion storefronts, headless Shopify & real-time inventory.', badge: 'Retail Scale' },
  { slug: 'saas', title: 'SaaS Platforms', desc: 'Multi-tenant cloud architectures, automated billing & analytics.', badge: 'SaaS Architecture' },
  { slug: 'education', title: 'EdTech & Learning', desc: 'Interactive learning portals, LMS integration & video streaming.', badge: 'Learning Systems' },
  { slug: 'enterprise', title: 'Global Enterprise', desc: 'Legacy modernization, ERP integration & microservices scaling.', badge: 'Enterprise Legacy' },
];

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          DOMAIN EXPERTISE
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Industry-Tailored <span className="text-gradient-blue-pink">Engineering</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          Domain-specific compliance, high-performance architectures, and tailored user experiences for leading global sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INDUSTRIES.map((ind) => (
          <Card key={ind.slug} variant="blueprint" className="p-8 space-y-6 flex flex-col justify-between hover:border-[#0052FF] transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#E7E7E7] pb-3">
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest">INDUSTRY</span>
                <span className="text-[10px] font-mono text-[#FF2A85] font-bold uppercase px-2 py-0.5 bg-pink-50 border border-pink-200">
                  {ind.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-[#0B0B0D] leading-tight">{ind.title}</h2>
              <p className="text-sm text-[#333333] leading-relaxed font-sans font-normal">{ind.desc}</p>
            </div>
            <div className="pt-6 border-t border-[#E7E7E7]">
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
