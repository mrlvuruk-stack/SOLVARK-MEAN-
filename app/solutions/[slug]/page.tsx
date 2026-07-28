import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SolutionDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SolutionDetailProps) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${formattedTitle} Solution Architecture`,
    description: `Enterprise solution for ${formattedTitle}. Designed and implemented by Solvark engineering team.`,
  };
}

export default async function SolutionDetailPage({ params }: SolutionDetailProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs font-mono text-indigo-400 border border-indigo-500/30">
          Solution / {slug}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          {formattedTitle}
        </h1>
        <p className="text-zinc-400 text-lg max-w-3xl">
          Complete architecture blueprint, security specifications, and microservices implementation tailored for high-scale enterprise operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Scalable Infrastructure', desc: 'Auto-scaling serverless edge functions and PostgreSQL replicas.' },
          { title: 'Zero Trust Security', desc: 'End-to-end encryption, OAuth2/OIDC, and automated audit trails.' },
          { title: 'High FPS UX Interface', desc: 'React 19 concurrent state rendering and dynamic glassmorphism UI.' },
        ].map((item, idx) => (
          <Card key={idx} variant="glass" className="p-6 space-y-3 border-zinc-800">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>

      <Card variant="glass" glow className="p-8 text-center space-y-4 border-indigo-500/40">
        <h2 className="text-2xl font-bold text-white">Ready to Deploy {formattedTitle}?</h2>
        <p className="text-xs text-zinc-400 max-w-md mx-auto">
          Contact our lead solution architects to review your technical requirements.
        </p>
        <Link href={`/contact?solution=${slug}`}>
          <Button variant="primary" size="md">
            Request Architecture Discovery &rarr;
          </Button>
        </Link>
      </Card>
    </div>
  );
}
