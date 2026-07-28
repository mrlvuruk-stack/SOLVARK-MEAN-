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
  },
  {
    slug: 'ai-workflow-automation',
    title: 'AI Workflow Automation & Microservices',
    description: 'Embed LLMs and automated decision-making engines directly into internal business workflows.',
    icon: '🤖',
  },
  {
    slug: 'saas-product-engineering',
    title: 'Custom SaaS Product Engineering',
    description: 'Build scalable multi-tenant SaaS products with built-in subscription billing, RBAC, and analytics.',
    icon: '🚀',
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs font-mono text-indigo-400 border border-indigo-500/30">
          Tailored Enterprise Solutions
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Engineered for Business Transformation
        </h1>
        <p className="text-zinc-400 text-lg">
          Custom software architectures designed to solve complex operational challenges and accelerate revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SOLUTIONS.map((sol) => (
          <Card key={sol.slug} variant="glass" glow className="p-8 space-y-6 flex flex-col justify-between border-zinc-800">
            <div className="space-y-4">
              <div className="text-3xl">{sol.icon}</div>
              <h2 className="text-2xl font-bold text-white">{sol.title}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">{sol.description}</p>
            </div>
            <div className="pt-4 border-t border-white/10">
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
