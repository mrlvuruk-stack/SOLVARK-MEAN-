import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Industry Expertise & Target Sectors — Solvark',
  description: 'Solvark specialized digital engineering solutions across Schools & Education, Local Retail Shops, NGOs, Small Businesses, and Custom Executable Tools.',
};

const INDUSTRIES = [
  {
    slug: 'education',
    title: 'Schools & Educational Institutions',
    desc: 'Complete School ERP Systems with Principal, Teacher, Student, Parent & Bus Driver portals. Features online fee payment, attendance, notes upload, admit card/ID card generator, and live GPS bus tracking.',
    badge: 'School ERP',
    icon: '🏫',
  },
  {
    slug: 'local-retail',
    title: 'Small Businesses & Local Shops',
    desc: 'Modern responsive websites and digital product catalogs for local retail shops and service providers to attract local customers and increase sales.',
    badge: 'Local Business',
    icon: '🏪',
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce & Online Stores',
    desc: 'Custom online shopping storefronts with instant 1-click checkout, inventory tracking, mobile payment gateways (UPI, PayU, Cards), and automated WhatsApp order notifications.',
    badge: 'Online Store',
    icon: '🛒',
  },
  {
    slug: 'ngos',
    title: 'NGOs & Community Foundations',
    desc: 'Dedicated non-profit platforms (like No Pehal) for social work showcases, donation collection with zero platform fee setup, and volunteer campaign management.',
    badge: 'NGO Tech',
    icon: '🤝',
  },
  {
    slug: 'custom-tools',
    title: 'Custom Executables & Internal Tools',
    desc: 'Tailored desktop applications (like Shroom) and business process automation engines that replace manual paperwork and simplify daily operations.',
    badge: 'Desktop Tools',
    icon: '⚡',
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          OUR TARGET SECTORS
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Solutions Built for <span className="text-gradient-blue-pink">Real-World Needs</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          We focus on what matters: accessible, high-quality digital systems for schools, local businesses, NGOs, and entrepreneurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES.map((ind) => (
          <Card key={ind.slug} variant="blueprint" className="p-8 space-y-6 flex flex-col justify-between hover:border-[#0052FF] transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#E7E7E7] pb-3">
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-[10px] font-mono text-[#FF2A85] font-bold uppercase px-2.5 py-0.5 bg-pink-50 border border-pink-200">
                  {ind.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-[#0B0B0D] leading-tight">{ind.title}</h2>
              <p className="text-sm text-[#333333] leading-relaxed font-sans font-normal">{ind.desc}</p>
            </div>
            <div className="pt-6 border-t border-[#E7E7E7]">
              <Link href="/contact">
                <Button variant="outline" size="sm" className="w-full">
                  Inquire For Your Sector &rarr;
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
