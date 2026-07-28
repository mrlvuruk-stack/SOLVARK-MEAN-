import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Terms of Service — Solvark',
  description: 'Solvark enterprise service terms, engineering SLAs, intellectual property rights, and commercial agreements.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 space-y-12 relative z-10 bg-white text-[#0B0B0D]">
      <div className="space-y-4">
        <div className="text-xs font-mono text-[#B80357] font-bold uppercase tracking-wider">
          LEGAL & COMPLIANCE // SERVICE SPECIFICATION
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Terms of Service & Engineering SLAs
        </h1>
        <p className="text-xs font-mono text-[#444444]">Effective Date: July 2026 // Revision 2.2</p>
      </div>

      <Card variant="blueprint" className="p-8 sm:p-10 space-y-8 text-sm font-sans text-[#444444] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">1. Master Engineering Services Agreement</h2>
          <p>
            By accessing or engaging Solvark Technology Inc. ("Solvark") for software development, cloud infrastructure design, digital transformation, or technical consulting, client agrees to these Master Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">2. Intellectual Property (IP) Ownership</h2>
          <p>
            Upon full payment of project milestone fees, all custom software code, UI/UX design assets, database schema migrations, and technical documentation created specifically for the client become 100% sole intellectual property of the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">3. Service Level Commitments & Uptime</h2>
          <p>
            Managed cloud infrastructure deployments are backed by Solvark's 99.99% system availability SLA. In the event of unscheduled downtime exceeding SLA thresholds, client receives service fee credits in accordance with individual Master Services Agreements (MSA).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">4. Governing Law & Dispute Resolution</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles.
          </p>
        </section>
      </Card>
    </div>
  );
}
