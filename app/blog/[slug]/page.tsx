import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ARTICLE_DATA: Record<
  string,
  {
    title: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
    authorRole: string;
    excerpt: string;
    content: string[];
    keyTakeaways: string[];
  }
> = {
  'building-nextjs-15-enterprise-apps': {
    title: 'Building High-Performance Enterprise Apps with Next.js 15 App Router',
    category: 'Engineering Architecture',
    readTime: '6 min read',
    date: 'Jul 20, 2026',
    author: 'Alex Vance',
    authorRole: 'Principal Cloud Architect',
    excerpt: 'Deep dive into React 19 Server Components, ISR path revalidation, and zero-bundle size state management.',
    keyTakeaways: [
      'React 19 Server Components eliminate client JavaScript overhead for static layout rendering.',
      'Dynamic Incremental Static Revalidation (ISR) allows real-time data updates without full site rebuilds.',
      'Strict TypeScript interfaces prevent runtime null pointer exceptions across API boundaries.',
    ],
    content: [
      'Next.js 15 App Router represents a paradigm shift in full-stack enterprise web development. By decoupling server rendering from client-side execution, applications can achieve sub-100ms Time to First Byte (TTFB) while maintaining dynamic capabilities.',
      'At Solvark, we enforce a strict separation between server-rendered view layout trees and interactive client component leaves. This guarantees that heavy libraries remain server-side, drastically reducing JavaScript bundle sizes delivered over CDN edge nodes.',
      'Furthermore, combining PostgreSQL Row Level Security (RLS) with Next.js 15 server actions eliminates traditional API route boilerplate while enforcing zero-trust data protection at the database level.',
    ],
  },
  'ai-agentic-workflow-automation': {
    title: 'Designing Resilient AI Microservices for Business Automation',
    category: 'AI & Automation',
    readTime: '8 min read',
    date: 'Jul 15, 2026',
    author: 'Elena Rostova',
    authorRole: 'Head of AI Engineering',
    excerpt: 'How to structure agentic LLM pipelines with PostgreSQL vector stores and strict fallback handlers.',
    keyTakeaways: [
      'Deterministic agent orchestration prevents hallucination loops in production workflows.',
      'pgvector integration enables sub-50ms similarity search over millions of enterprise documents.',
      'Fallback retry queues guarantee 99.99% completion for asynchronous AI task pipelines.',
    ],
    content: [
      'Autonomous AI microservices are revolutionizing business process automation. However, deploying probabilistic language models into enterprise production requires strict architectural constraints.',
      'We utilize pgvector alongside Supabase Edge Functions to create scalable vector search pipelines. By isolating context extraction from execution logic, our agentic workflows execute multi-step business logic with zero human intervention.',
    ],
  },
  'zero-trust-cloud-security': {
    title: 'Zero Trust Security Standards for Multi-Tenant Cloud SaaS',
    category: 'Cybersecurity',
    readTime: '5 min read',
    date: 'Jul 10, 2026',
    author: 'Marcus Chen',
    authorRole: 'Lead Security Engineer',
    excerpt: 'Implementing row-level security (RLS), custom JWT auth claims, and immutable audit trails in Supabase.',
    keyTakeaways: [
      'Row Level Security (RLS) guarantees complete tenant isolation at the database layer.',
      'Custom JWT claims validate permissions before requests reach backend application servers.',
      'Immutable audit logging provides full compliance visibility for SOC2 and HIPAA requirements.',
    ],
    content: [
      'In multi-tenant SaaS platforms, traditional middleware checks are insufficient. If an application handler contains a bug, tenant data can easily cross boundaries.',
      'PostgreSQL Row Level Security solves this by embedding access policies directly inside the database engine. Every query automatically inherits tenant isolation context derived from verified cryptographic JWT claims.',
    ],
  },
  'sub-second-core-web-vitals': {
    title: 'Achieving 100/100 Core Web Vitals Across Global CDN Networks',
    category: 'Performance',
    readTime: '7 min read',
    date: 'Jul 02, 2026',
    author: 'David Kim',
    authorRole: 'Performance Architect',
    excerpt: 'Optimizing font rendering, SVG asset budgets, and dynamic ISR revalidation for enterprise scale.',
    keyTakeaways: [
      'Self-hosted Google Fonts eliminate external DNS lookup latency on initial render.',
      'Vector SVG blueprint graphics replace heavy raster images for zero resolution loss.',
      'Edge CDN edge caching reduces server roundtrips to under 20ms worldwide.',
    ],
    content: [
      'Web performance is a direct revenue driver. Every 100ms decrease in page load speed directly boosts user conversion metrics.',
      'Our optimization methodology relies on strict budget limits: maximum 120 KB gzipped JavaScript and 25 KB CSS per page view. Combined with Next.js 15 edge caching, Solvark websites consistently score 100/100 across Lighthouse performance benchmarks.',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICLE_DATA).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = ARTICLE_DATA[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 space-y-12 relative z-10 bg-white text-[#0B0B0D]">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#444444]">
        <Link href="/blog" className="hover:text-[#B80357] transition-colors">
          &larr; BACK TO JOURNAL
        </Link>
        <span>//</span>
        <span className="text-[#B80357] uppercase font-bold">{article.category}</span>
      </div>

      {/* Article Header */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono">
          <div>
            <div className="font-bold text-[#0B0B0D]">{article.author}</div>
            <div className="text-[#444444]">{article.authorRole}</div>
          </div>
          <div className="text-right text-[#444444]">
            <div>{article.date}</div>
            <div className="text-[#B80357] font-bold">{article.readTime}</div>
          </div>
        </div>
      </div>

      {/* Key Takeaways Box */}
      <Card variant="blueprint" className="p-8 space-y-4">
        <div className="text-xs font-mono text-[#B80357] font-bold uppercase tracking-wider">
          EXECUTIVE SUMMARY // KEY TAKEAWAYS
        </div>
        <ul className="space-y-2 text-xs font-sans text-[#0B0B0D] list-disc list-inside leading-relaxed">
          {article.keyTakeaways.map((takeaway, idx) => (
            <li key={idx}>{takeaway}</li>
          ))}
        </ul>
      </Card>

      {/* Article Body */}
      <div className="space-y-6 font-sans text-base text-[#444444] leading-relaxed border-t border-[#E7E7E7] pt-8">
        {article.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Footer CTA */}
      <Card variant="blueprint" className="p-10 text-center space-y-6 bg-[#0B0B0D] text-white">
        <h3 className="text-2xl font-bold font-heading text-white">Need Custom Software Engineering?</h3>
        <p className="text-zinc-400 text-xs max-w-md mx-auto font-sans">
          Schedule an architecture discovery session with our senior software engineering team.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="md">
            Initiate Project Inquiry &rarr;
          </Button>
        </Link>
      </Card>
    </div>
  );
}
