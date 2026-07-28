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
      tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Stripe'],
    },
    {
      slug: 'healthcare-telemedicine-portal',
      title: 'HIPAA-Compliant Telemedicine SaaS Platform',
      industry: 'Healthcare',
      results: '99.99% Uptime & 100k+ Consultations',
      tech: ['React', 'Supabase', 'WebRTC', 'AWS'],
    },
    {
      slug: 'fintech-analytics-dashboard',
      title: 'Real-Time Financial Intelligence Dashboard',
      industry: 'FinTech',
      results: '<50ms Latency Data Visualization',
      tech: ['Next.js', 'Recharts', 'TypeScript', 'Tailwind'],
    },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Portfolio & Case Studies
        </h1>
        <p className="text-zinc-400 text-lg">
          Proven client outcomes delivered through technical precision, scalable architecture, and design excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <Card key={proj.slug} variant="glass" glow className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono text-indigo-400 uppercase">{proj.industry}</div>
              <h3 className="text-xl font-bold text-white">{proj.title}</h3>
              <p className="text-xs text-emerald-400 font-semibold">{proj.results}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-white/5 rounded text-[10px] text-zinc-400 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <Link href={`/portfolio/${proj.slug}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Read Case Study &rarr;
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
