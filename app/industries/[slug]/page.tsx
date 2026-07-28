import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface IndustryDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IndustryDetailProps) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${formattedTitle} Industry Solutions`,
    description: `Enterprise digital transformation for ${formattedTitle} sector by Solvark.`,
  };
}

export default async function IndustryDetailPage({ params }: IndustryDetailProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs font-mono text-indigo-400 border border-indigo-500/30">
          Industry Domain / {slug}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          {formattedTitle} Engineering Solutions
        </h1>
        <p className="text-zinc-400 text-lg max-w-3xl">
          Compliant, high-throughput software architectures designed specifically for {formattedTitle} requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Regulatory Compliance', desc: 'Strict data privacy, encryption at rest/transit, and SOC2/HIPAA alignment.' },
          { title: 'High Availability SLA', desc: 'Multi-region failover and 99.99% uptime guarantees.' },
          { title: 'Custom Integration', desc: 'Seamless API connectors to legacy ERP, CRM, and financial gateways.' },
        ].map((item, idx) => (
          <Card key={idx} variant="glass" className="p-6 space-y-3 border-zinc-800">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>

      <Card variant="glass" glow className="p-8 text-center space-y-4 border-indigo-500/40">
        <h2 className="text-2xl font-bold text-white">Transform Your {formattedTitle} Platform</h2>
        <p className="text-xs text-zinc-400 max-w-md mx-auto">
          Schedule a discovery session with our industry engineering specialists.
        </p>
        <Link href={`/contact?industry=${slug}`}>
          <Button variant="primary" size="md">
            Schedule Discovery Call &rarr;
          </Button>
        </Link>
      </Card>
    </div>
  );
}
