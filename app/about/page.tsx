import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Solvark — Fresh, Unique & Premium Technology Partner',
  description: 'Learn about Solvark, a fresh digital technology partner delivering unique, ultra-premium web systems, school ERPs, and automation for small businesses, NGOs, and growing brands.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-20 relative z-10 bg-white text-[#0B0B0D]">
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
          FRESH, UNIQUE & PREMIUM DIGITAL PARTNER
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          We build <span className="text-gradient-blue-pink">bespoke, high-end digital systems</span> for businesses, schools & NGOs.
        </h1>
        <p className="text-[#444444] text-lg font-normal leading-relaxed max-w-3xl font-sans">
          Solvark is a dynamic, new-age technology studio engineered to break away from generic templates. We craft unique, ultra-premium digital solutions—from School Management ERPs and Library Systems to custom desktop tools (Shroom), NGO platforms (No Pehal), and E-Commerce storefronts.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            num: '01',
            title: 'Bespoke & Unique Execution',
            icon: Sparkles,
            desc: 'No cookie-cutter templates. Every project is crafted from scratch to meet your exact operational requirements and brand identity.',
          },
          {
            num: '02',
            title: 'Ultra-Premium Quality',
            icon: Zap,
            desc: 'We combine 100/100 Google speed benchmarks, modern glassmorphism aesthetics, and ironclad security protocols for maximum impact.',
          },
          {
            num: '03',
            title: 'Direct Architect Partnership',
            icon: HeartHandshake,
            desc: 'You work directly with lead developers and designers who take full personal ownership of your project from start to finish.',
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.num} variant="blueprint" className="p-8 space-y-4 hover:border-[#0052FF] transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#0052FF] font-bold">{item.num} // VALUE</span>
                <Icon className="w-5 h-5 text-[#FF2A85]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B0B0D]">{item.title}</h3>
              <p className="text-xs text-[#444444] leading-relaxed font-sans">{item.desc}</p>
            </Card>
          );
        })}
      </div>

      {/* Mission Box */}
      <div className="border border-[#E7E7E7] bg-[#F8F8FA] p-10 md:p-12 space-y-6 blueprint-border rounded-xl">
        <div className="text-xs font-mono text-[#FF2A85] uppercase tracking-widest font-bold">
          OUR MISSION & PURPOSE
        </div>
        <blockquote className="text-xl sm:text-2xl font-bold font-heading text-[#0B0B0D] leading-snug">
          “At Solvark, our goal is to empower small businesses, local retail shops, NGOs, and educational institutions with enterprise-grade tech capabilities at prices that make sense.”
        </blockquote>
        <div className="text-xs font-mono text-[#444444]">
          SOLVARK FOUNDING TEAM // INDORE, MADHYA PRADESH, INDIA
        </div>
      </div>

      {/* CTA Box */}
      <Card variant="blueprint" className="p-12 text-center space-y-6 bg-[#0B0B0D] text-white rounded-xl">
        <h2 className="text-3xl font-bold font-heading text-white">Ready to Build Something Unique Together?</h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto font-sans">
          Tell us about your project requirements and let’s create an exceptional digital experience.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Start Your Project Consultation &rarr;
          </Button>
        </Link>
      </Card>
    </div>
  );
}
