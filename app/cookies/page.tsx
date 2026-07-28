import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Cookie Policy & Privacy Preferences — Solvark',
  description: 'Learn about Solvark technical cookie policies, analytics preferences, and local storage data usage.',
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 space-y-12 relative z-10 bg-white text-[#0B0B0D]">
      <div className="space-y-4">
        <div className="text-xs font-mono text-[#B80357] font-bold uppercase tracking-wider">
          LEGAL & COMPLIANCE // COOKIE POLICY
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Cookie & Data Preferences Specification
        </h1>
        <p className="text-xs font-mono text-[#444444]">Effective Date: July 2026 // Revision 2.2</p>
      </div>

      <Card variant="blueprint" className="p-8 sm:p-10 space-y-8 text-sm font-sans text-[#444444] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">1. Essential Operational Cookies</h2>
          <p>
            Solvark utilizes strictly necessary functional cookies and HTTP-only session tokens to maintain user authentication states across administrative sessions and secure form submissions. These cookies contain zero personal tracking information and cannot be disabled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">2. Performance & Aggregated Analytics</h2>
          <p>
            We use anonymized Google Analytics 4 (GA4) telemetry tokens to measure aggregate page performance, layout interaction heatmaps, and Core Web Vitals performance budgets. No personally identifiable information (PII) is recorded or shared.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">3. Cookie Consent Management</h2>
          <p>
            Users may modify or revoke performance tracking preferences at any time by updating their browser privacy settings or contacting our compliance officers at <span className="font-mono text-[#B80357]">privacy@solvark.com</span>.
          </p>
        </section>
      </Card>
    </div>
  );
}
