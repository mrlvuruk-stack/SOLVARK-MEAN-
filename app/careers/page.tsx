import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Careers at Solvark — Join Our Engineering Team',
  description: 'Explore career opportunities for Staff Software Engineers, Cloud Architects, and UI/UX Designers at Solvark.',
};

const JOBS = [
  { title: 'Staff Frontend Engineer (React 19 / WebGL)', location: 'Remote / Global', type: 'Full-time' },
  { title: 'Senior Backend Architect (PostgreSQL / Next.js)', location: 'Remote / Global', type: 'Full-time' },
  { title: 'Principal Cloud & DevOps Engineer (AWS / Vercel)', location: 'Remote / Global', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-xs font-mono text-indigo-400 border border-indigo-500/30">
          Join Solvark Team
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Build World-Class Software
        </h1>
        <p className="text-zinc-400 text-lg">
          We are looking for elite engineers, architects, and designers to build next-generation enterprise digital platforms.
        </p>
      </div>

      <div className="space-y-4">
        {JOBS.map((job, idx) => (
          <Card key={idx} variant="glass" glow className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-zinc-800">
            <div>
              <h2 className="text-lg font-bold text-white">{job.title}</h2>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                <span>{job.location}</span>
                <span>•</span>
                <span className="text-indigo-400">{job.type}</span>
              </div>
            </div>
            <Link href="/contact?apply=true">
              <Button variant="primary" size="sm">
                Apply Now &rarr;
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
