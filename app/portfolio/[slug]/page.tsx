import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CaseStudyDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyDetailProps) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${formattedTitle} Case Study`,
    description: `Detailed case study on ${formattedTitle} delivered by Solvark engineering.`,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10">
      <div className="space-y-6">
        <Link href="/portfolio" className="text-xs font-mono text-indigo-400 hover:underline">
          &larr; Back to Portfolio
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs font-mono text-indigo-400 border border-indigo-500/30">
          Case Study / {slug}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          {formattedTitle}
        </h1>
        <p className="text-zinc-400 text-lg max-w-3xl">
          Comprehensive architecture modernization and performance transformation case study.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'The Challenge', desc: 'Legacy monolithic bottleneck causing elevated latencies during peak traffic spikes.' },
          { title: 'The Solution', desc: 'Migrated to Next.js 15 App Router, Supabase PostgreSQL, and edge caching.' },
          { title: 'The Result', desc: '+300% conversion rate surge and 99.99% system availability.' },
        ].map((item, idx) => (
          <Card key={idx} variant="glass" className="p-6 space-y-3 border-zinc-800">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>

      <Card variant="glass" glow className="p-8 text-center space-y-4 border-indigo-500/40">
        <h2 className="text-2xl font-bold text-white">Want Similar Outcomes for Your Enterprise?</h2>
        <p className="text-xs text-zinc-400 max-w-md mx-auto">
          Contact our software engineering team to discuss your platform transformation.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="md">
            Request Architecture Discovery &rarr;
          </Button>
        </Link>
      </Card>
    </div>
  );
}
