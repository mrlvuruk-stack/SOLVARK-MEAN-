import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Engineering Portfolio & Case Studies',
  description: 'Explore featured client projects, case studies, technical solutions, and business outcomes achieved by Solvark.',
};

export default function PortfolioPage() {
  const projects = [
    {
      slug: 'global-retail-ecommerce',
      title: 'Global Retail E-Commerce Modernization',
      industry: 'Retail & E-Commerce',
      results: '+300% Conversion Rate Increase',
      tech: ['Next.js 15', 'PostgreSQL', 'Tailwind CSS', 'Stripe API'],
    },
    {
      slug: 'healthcare-telemedicine-portal',
      title: 'HIPAA-Compliant Telemedicine SaaS Platform',
      industry: 'Healthcare Cloud',
      results: '99.99% Uptime & 100k+ Consultations',
      tech: ['React 19', 'Supabase RLS', 'WebRTC', 'AWS Edge'],
    },
    {
      slug: 'fintech-analytics-dashboard',
      title: 'Real-Time Financial Intelligence Dashboard',
      industry: 'FinTech Systems',
      results: '<50ms Latency Data Visualization',
      tech: ['Next.js Edge', 'Recharts', 'TypeScript', 'Tailwind'],
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          VERIFIED CASE STUDIES
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Portfolio & <span className="text-gradient-blue-pink">Case Studies</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          Proven client outcomes delivered through technical precision, scalable architecture, and design excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <Card key={proj.slug} variant="blueprint" className="p-8 space-y-6 flex flex-col justify-between hover:border-[#0052FF] transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#E7E7E7] pb-3">
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-widest">{proj.industry}</span>
                <span className="text-[10px] font-mono text-[#0B0B0D] font-bold bg-[#F8F8FA] px-2 py-0.5 border border-[#E7E7E7]">VERIFIED</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0B0B0D] leading-tight">{proj.title}</h3>
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                KEY OUTCOME: {proj.results}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-[#F8F8FA] border border-[#E7E7E7] text-[10px] font-mono text-[#0B0B0D] font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-[#E7E7E7]">
              <Link href={`/portfolio/${proj.slug}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Read Full Case Study &rarr;
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
