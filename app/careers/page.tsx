import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Careers at Solvark — Join Our Engineering Team',
  description: 'Explore career opportunities for Staff Software Engineers, Cloud Architects, and UI/UX Designers at Solvark.',
};

const JOBS = [
  { title: 'Staff Frontend Engineer (React 19 / WebGL / Next.js)', location: 'Remote / Global', type: 'Full-Time Position', department: 'Engineering' },
  { title: 'Senior Backend Architect (PostgreSQL / Supabase / Node)', location: 'Remote / Global', type: 'Full-Time Position', department: 'Cloud Infrastructure' },
  { title: 'Principal Cloud & DevOps Engineer (AWS / Terraform)', location: 'Remote / Global', type: 'Full-Time Position', department: 'DevOps & Reliability' },
];

export default function CareersPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          JOIN THE SOLVARK TEAM
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Build <span className="text-gradient-blue-pink">World-Class Software</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          We are looking for elite engineers, architects, and designers to build next-generation enterprise digital platforms.
        </p>
      </div>

      <div className="space-y-6">
        {JOBS.map((job, idx) => (
          <Card key={idx} variant="blueprint" className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#0052FF] transition-all">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">
                <span>{job.department}</span>
                <span>•</span>
                <span className="text-[#FF2A85]">{job.type}</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-[#0B0B0D]">{job.title}</h2>
              <p className="text-xs font-mono text-[#555555]">
                LOCATION: {job.location} | SLA: IMMEDIATE ONBOARDING
              </p>
            </div>
            <Link href="/contact?apply=true">
              <Button variant="primary" size="md" className="whitespace-nowrap">
                Apply For Role &rarr;
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
