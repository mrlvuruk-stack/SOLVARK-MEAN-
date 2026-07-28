import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Privacy Policy — Solvark',
  description: 'Solvark enterprise data privacy policy, security standards, and GDPR/CCPA compliance commitments.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 space-y-12 relative z-10 bg-white text-[#0B0B0D]">
      <div className="space-y-4">
        <div className="text-xs font-mono text-[#B80357] font-bold uppercase tracking-wider">
          LEGAL & COMPLIANCE // PRIVACY SPECIFICATION
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Privacy Policy & Data Security
        </h1>
        <p className="text-xs font-mono text-[#444444]">Effective Date: July 2026 // Revision 2.2</p>
      </div>

      <Card variant="blueprint" className="p-8 sm:p-10 space-y-8 text-sm font-sans text-[#444444] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">1. Data Collection & Processing Principles</h2>
          <p>
            Solvark Technology Inc. ("Solvark") collects strictly minimal operational data required to deliver enterprise software engineering, technical support, and project consultation services. We process work emails, contact phone numbers, company information, and technical project inquiries submitted through our secure platform forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">2. Zero Third-Party Monetization</h2>
          <p>
            We do not sell, rent, lease, or monetize client data under any circumstances. All client specifications, proprietary source code, database architectures, and communication records are strictly confidential and protected by bilateral Non-Disclosure Agreements (NDAs).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">3. Cryptographic Storage & Encryption</h2>
          <p>
            All data at rest is encrypted using AES-256 standards within multi-region PostgreSQL databases. All data in transit is encrypted using TLS 1.3 encryption protocols. Access is controlled via PostgreSQL Row Level Security (RLS) policies and multi-factor zero-trust authorization headers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">4. Compliance & Data Rights</h2>
          <p>
            Clients possess full rights to request data deletion, exported audit records, or security access logs at any time by contacting our Privacy Operations Team at <span className="font-mono text-[#B80357]">privacy@solvark.com</span>.
          </p>
        </section>
      </Card>
    </div>
  );
}
