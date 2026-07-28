'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const TECH_PLANETS = [
  { name: 'Next.js 15', desc: 'React Server Components & ISR', color: 'from-blue-600 to-indigo-600' },
  { name: 'React 19', desc: 'Concurrent Rendering UI Engine', color: 'from-cyan-500 to-blue-600' },
  { name: 'PostgreSQL', desc: 'ACID Relational Database & Supabase', color: 'from-indigo-600 to-purple-600' },
  { name: 'TypeScript', desc: 'End-to-End Type Safety', color: 'from-blue-500 to-cyan-400' },
  { name: 'Tailwind v4', desc: 'Design Tokens & Glassmorphism', color: 'from-purple-600 to-indigo-600' },
  { name: 'Three.js / WebGL', desc: 'Cinematic 3D Shaders & Canvas', color: 'from-indigo-500 to-cyan-500' },
];

export function TechPlanets() {
  return (
    <section className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs text-indigo-400 font-mono border border-indigo-500/30">
          Core Tech Ecosystem
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Enterprise Technology Stack
        </h2>
        <p className="text-zinc-400 text-base">
          Built on resilient open standards designed for speed, security, and infinite scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {TECH_PLANETS.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card variant="glass" glow className="p-6 space-y-4 border-zinc-800 flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${tech.color} flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-indigo-500/30 shrink-0`}
              >
                {tech.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{tech.name}</h3>
                <p className="text-xs text-zinc-400">{tech.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
