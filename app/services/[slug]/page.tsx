import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateServiceSchema } from '@/lib/seo';

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${formattedTitle} Service Offering`,
    description: `Enterprise ${formattedTitle} services by Solvark. Engineered for performance, scale, and business growth.`,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const formattedTitle = slug.replace(/-/g, ' ').toUpperCase();
  const serviceSchema = generateServiceSchema(
    formattedTitle,
    `Enterprise ${formattedTitle} services by Solvark`,
    slug
  );

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs text-indigo-400 font-mono border border-indigo-500/30">
          Service Category / {slug}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          {formattedTitle}
        </h1>
        <p className="text-zinc-400 text-lg max-w-3xl">
          High-performance enterprise solution engineered using modern architecture, resilient cloud infrastructure, and human-centered design.
        </p>
      </div>

      {/* Deliverables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Architecture Blueprint', desc: 'System design and performance budgeting.' },
          { title: 'Full Stack Engineering', desc: 'Type-safe React, Next.js, and PostgreSQL integration.' },
          { title: 'Continuous Quality SLA', desc: 'Automated testing, security scanning, and 24/7 monitoring.' },
        ].map((item, idx) => (
          <Card key={idx} variant="glass" className="space-y-3">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-zinc-400">{item.desc}</p>
          </Card>
        ))}
      </div>

      {/* CTA Box */}
      <Card variant="glass" glow className="p-8 text-center space-y-4 border-indigo-500/40">
        <h2 className="text-2xl font-bold text-white">Need a Custom {formattedTitle} Solution?</h2>
        <p className="text-xs text-zinc-400 max-w-md mx-auto">
          Our engineering team is ready to analyze your requirements and deliver a proposal.
        </p>
        <Link href={`/contact?service=${slug}`}>
          <Button variant="primary" size="md">
            Request {formattedTitle} Quote &rarr;
          </Button>
        </Link>
      </Card>
    </div>
  );
}
