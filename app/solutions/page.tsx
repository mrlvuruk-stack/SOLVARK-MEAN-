import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Enterprise Technical Solutions',
  description: 'Specialized enterprise solutions spanning cloud modernization, AI workflow automation, and custom platform architecture.',
};

const SOLUTIONS = [
  {
    slug: 'cloud-modernization',
    title: 'Cloud Architecture & Modernization',
    description: 'Migrate legacy monoliths to high-availability serverless cloud infrastructure on AWS and Vercel.',
    icon: '⚡',
    badge: 'Cloud Engineering',
  },
  {
    slug: 'ai-workflow-automation',
    title: 'AI Workflow Automation & Microservices',
    description: 'Embed LLMs and automated decision-making engines directly into internal business workflows.',
    icon: '🤖',
    badge: 'AI & Automation',
  },
  {
    slug: 'saas-product-engineering',
    title: 'Custom SaaS Product Engineering',
    description: 'Build scalable multi-tenant SaaS products with built-in subscription billing, RBAC, and analytics.',
    icon: '🚀',
    badge: 'SaaS Platforms',
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          TAILORED ENTERPRISE SOLUTIONS
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Engineered for <span className="text-gradient-blue-pink">Business Transformation</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          Custom software architectures designed to solve complex operational challenges and accelerate enterprise revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SOLUTIONS.map((sol) => (
          <Card key={sol.slug} variant="blueprint" className="p-8 space-y-6 flex flex-col justify-between hover:border-[#0052FF] transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#E7E7E7] pb-3">
                <span className="text-3xl">{sol.icon}</span>
                <span className="text-[10px] font-mono text-[#0052FF] font-bold uppercase px-2 py-0.5 bg-blue-50 border border-blue-200">
                  {sol.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-[#0B0B0D] leading-tight">{sol.title}</h2>
              <p className="text-sm text-[#333333] leading-relaxed font-sans font-normal">{sol.description}</p>
            </div>
            <div className="pt-6 border-t border-[#E7E7E7]">
              <Link href={`/solutions/${sol.slug}`}>
                <Button variant="primary" size="sm" className="w-full">
                  Explore Solution &rarr;
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
