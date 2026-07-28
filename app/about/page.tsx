import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About Solvark — Enterprise Digital Systems & Software Engineering',
  description: 'Learn how Solvark engineers resilient software systems, cloud architectures, and conversion platforms for scaling businesses.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-20 relative z-10 bg-white text-[#0B0B0D]">
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0B0B0D]">
          <span className="w-2 h-2 bg-[#B80357]" />
          ABOUT SOLVARK // OUR ENGINEERING PURPOSE
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          We build software systems designed for endurance, security, and measurable business growth.
        </h1>
        <p className="text-[#444444] text-lg font-normal leading-relaxed max-w-3xl">
          Solvark was founded on a simple premise: modern enterprises need software engineered with mathematical precision, not temporary design shortcuts. We partner with leaders to build platforms that outlast market shifts.
        </p>
      </div>

      {/* Engineering Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            num: '01',
            title: 'Precision Infrastructure',
            desc: 'Every system is built using strict-mode TypeScript, multi-region PostgreSQL databases, and zero-trust authentication protocols.',
          },
          {
            num: '02',
            title: 'Conversion Architecture',
            desc: 'We structure user journeys around clear business objectives, eliminating friction and maximizing engagement at every touchpoint.',
          },
          {
            num: '03',
            title: 'Continuous Quality SLA',
            desc: 'Our delivery pipeline enforces automated unit testing, security vulnerability scanning, and 99.99% uptime SLAs.',
          },
        ].map((item) => (
          <Card key={item.num} variant="blueprint" className="p-8 space-y-4">
            <div className="text-xs font-mono text-[#B80357] font-bold">{item.num} // PRINCIPLE</div>
            <h3 className="text-xl font-bold font-heading text-[#0B0B0D]">{item.title}</h3>
            <p className="text-xs text-[#444444] leading-relaxed font-sans">{item.desc}</p>
          </Card>
        ))}
      </div>

      {/* Leadership Message / Philosophy */}
      <div className="border border-[#E7E7E7] bg-[#F8F8FA] p-10 md:p-12 space-y-6 blueprint-border">
        <div className="text-xs font-mono text-[#B80357] uppercase tracking-widest">
          LEADERSHIP COMMITMENT
        </div>
        <blockquote className="text-xl sm:text-2xl font-bold font-heading text-[#0B0B0D] leading-snug">
          “When you work with Solvark, you work directly with principal engineers and architects who take full ownership of your technical outcomes.”
        </blockquote>
        <div className="text-xs font-mono text-[#444444]">
          SOLVARK ENGINEERING BOARD // GLOBAL OPERATIONS
        </div>
      </div>

      {/* CTA Box */}
      <Card variant="blueprint" className="p-12 text-center space-y-6 bg-[#0B0B0D] text-white">
        <h2 className="text-3xl font-bold font-heading text-white">Ready to Upgrade Your Software Infrastructure?</h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto font-sans">
          Schedule an architecture discovery session to review your technical requirements with our engineering team.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Schedule Architecture Session &rarr;
          </Button>
        </Link>
      </Card>
    </div>
  );
}
