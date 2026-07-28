'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const PROCESS_STEPS = [
  { step: '01', title: 'Architecture Discovery', desc: 'Requirements analysis, scope definition & security blueprinting.' },
  { step: '02', title: 'UX & Visual Design', desc: 'High-fidelity glassmorphism design systems & interactive prototypes.' },
  { step: '03', title: 'Precision Engineering', desc: 'Type-safe full stack Next.js 15, PostgreSQL & microservices.' },
  { step: '04', title: 'Automated Testing SLA', desc: 'Vitest, E2E validation, security hardening & performance audits.' },
  { step: '05', title: 'Global Edge Deployment', desc: 'Vercel Edge ISR deployment with 99.99% uptime guarantees.' },
];

export function InteractiveProcess() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs text-indigo-400 font-mono border border-indigo-500/30">
          Energy Pipeline Architecture
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          How We Deliver Enterprise Excellence
        </h2>
        <p className="text-zinc-400 text-base">
          From initial blueprinting to production release, our delivery pipeline guarantees precision.
        </p>
      </div>

      {/* Energy Nodes Pipeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {PROCESS_STEPS.map((item, index) => {
          const isActive = activeStep === index;
          return (
            <motion.div
              key={item.step}
              onClick={() => setActiveStep(index)}
              className="cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card
                variant="glass"
                glow={isActive}
                className={`p-6 space-y-4 border-zinc-800 transition-all ${
                  isActive ? 'border-indigo-500/80 bg-indigo-950/20' : 'hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 font-bold">{item.step}</span>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isActive ? 'bg-indigo-400 shadow-lg shadow-indigo-500 animate-pulse' : 'bg-zinc-700'
                    }`}
                  />
                </div>
                <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
