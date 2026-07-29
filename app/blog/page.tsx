'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BLOG_POSTS = [
  {
    slug: 'building-nextjs-15-enterprise-apps',
    title: 'Building High-Performance Enterprise Apps with Next.js 15 App Router',
    category: 'Engineering Architecture',
    readTime: '6 min read',
    date: 'Jul 20, 2026',
    author: 'Alex Vance, Principal Architect',
    excerpt: 'Deep dive into React 19 Server Components, ISR path revalidation, and zero-bundle size state management.',
  },
  {
    slug: 'ai-agentic-workflow-automation',
    title: 'Designing Resilient AI Microservices for Business Automation',
    category: 'AI & Automation',
    readTime: '8 min read',
    date: 'Jul 15, 2026',
    author: 'Elena Rostova, AI Lead',
    excerpt: 'How to structure agentic LLM pipelines with PostgreSQL vector stores and strict fallback handlers.',
  },
  {
    slug: 'zero-trust-cloud-security',
    title: 'Zero Trust Security Standards for Multi-Tenant Cloud SaaS',
    category: 'Cybersecurity',
    readTime: '5 min read',
    date: 'Jul 10, 2026',
    author: 'Marcus Chen, Security Lead',
    excerpt: 'Implementing row-level security (RLS), custom JWT auth claims, and immutable audit trails in Supabase.',
  },
  {
    slug: 'sub-second-core-web-vitals',
    title: 'Achieving 100/100 Core Web Vitals Across Global CDN Networks',
    category: 'Performance',
    readTime: '7 min read',
    date: 'Jul 02, 2026',
    author: 'David Kim, Performance Engineer',
    excerpt: 'Optimizing font rendering, SVG asset budgets, and dynamic ISR revalidation for enterprise scale.',
  },
];

const CATEGORIES = ['All Articles', 'Engineering Architecture', 'AI & Automation', 'Cybersecurity', 'Performance'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Articles');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All Articles' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          SOLVARK JOURNAL // TECHNICAL INSIGHTS
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          Software Engineering, Architecture & <span className="text-gradient-blue-pink">AI Insights</span>
        </h1>
        <p className="text-[#444444] text-lg font-normal leading-relaxed max-w-2xl font-sans">
          Deep-dive technical articles, cloud infrastructure guides, and engineering patterns published by our principal software architects.
        </p>
      </div>

      {/* Filter Bar & Search */}
      <div className="space-y-6 pt-4 border-t border-[#E7E7E7]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono transition-colors border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0052FF] text-white border-[#0052FF] font-bold'
                    : 'bg-[#F8F8FA] text-[#0B0B0D] border-[#E7E7E7] hover:border-[#FF2A85]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 px-4 border border-[#E7E7E7] text-xs text-[#0B0B0D] focus:outline-none focus:border-[#B80357]"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.slug} variant="blueprint" className="p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B80357] font-bold">{post.category}</span>
                <span className="text-[#444444]">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-[#0B0B0D] leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#B80357] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-xs text-[#444444] leading-relaxed font-sans">{post.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
              <div className="text-[10px] font-mono text-[#444444]">
                <div>{post.author}</div>
                <div>{post.date}</div>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <Button variant="outline" size="sm">
                  Read Article &rarr;
                </Button>
              </Link>
            </div>
          </Card>
        ))}

        {filteredPosts.length === 0 && (
          <div className="col-span-full p-12 text-center border border-[#E7E7E7] bg-[#F8F8FA] space-y-3">
            <div className="text-xs font-mono text-[#B80357] font-bold">NO MATCHING ARTICLES</div>
            <p className="text-xs text-[#444444]">Try searching for different keywords or select a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
