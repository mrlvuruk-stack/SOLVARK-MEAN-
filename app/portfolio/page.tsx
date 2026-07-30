'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShieldCheck, Bus, GraduationCap, Library, Heart, Laptop, ShoppingCart } from 'lucide-react';

const PROJECTS = [
  {
    slug: 'school-management-system',
    title: 'School Management System (Full Institution ERP)',
    category: 'Education ERP',
    icon: GraduationCap,
    badge: 'Flagship ERP',
    outcomes: 'Complete student lifecycle from Admission to TC/Marksheet',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Live GPS Tracking', 'Supabase'],
    description: 'An all-in-one ERP built for schools & colleges with 5 dedicated role-based portals (Principal, Teachers, Students, Parents, Bus Drivers). Handles admission (KG1, Nursery, 1st to 12th), fee payments with digital receipts, online attendance, study notes upload, exam management, and digital ID card/Admit Card generation (download online if lost!). Includes Live GPS Bus Tracking where the driver turns on GPS location and parents view real-time bus location.',
    features: [
      '5 Role Portals: Principal, Teacher, Student, Parent, Bus Driver',
      'Live GPS School Bus Location Tracking for Parents',
      'Teacher Online Student Attendance & Note Upload System',
      'Online Fee Payment & Instant Digital Fee Receipts',
      'Online ID Card & Admit Card Generator (Print anytime)',
      'Admission to Marksheet, TC & Migration Certificate Workflow',
    ],
  },
  {
    slug: 'library-management-system',
    title: 'Library & E-Library Management System',
    category: 'Library Tech',
    icon: Library,
    badge: 'Institution System',
    outcomes: 'Automated book issue/return & digital study repository',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Barcode Scanner API'],
    description: 'Comprehensive digital library system for schools, colleges, and research centers. Manages physical book cataloging, issue/return dates, student attendance, member fines, and an integrated E-Library repository for digital study materials and research paper uploads.',
    features: [
      'Book Cataloging & Barcode Issue/Return Tracking',
      'Digital E-Library Study Material & Research Paper Uploads',
      'Student Library Attendance & Member Card Portal',
      'Automated Overdue Reminders & Fine Calculation',
    ],
  },
  {
    slug: 'no-pehal-ngo-project',
    title: 'No Pehal (Live Custom NGO Project)',
    category: 'NGO & Community',
    icon: Heart,
    badge: 'Live Social Project',
    outcomes: 'Empowered community welfare & volunteer coordination',
    tech: ['React', 'Tailwind CSS', 'PayU Gateway', 'Supabase'],
    description: 'A custom digital platform built specifically for No Pehal (NGO initiative) to showcase social work, organize volunteer campaigns, track community welfare projects, and accept online donations with zero platform fees.',
    features: [
      'Social Work Campaign & Impact Showcase',
      'Volunteer Registration & Activity Tracking',
      'Secure Online Donation Integration',
      'Community Initiative Updates & Gallery',
    ],
  },
  {
    slug: 'shroom-executable-app',
    title: 'Shroom (Live Custom Executable Application)',
    category: 'Custom Software',
    icon: Laptop,
    badge: 'Live Executable App',
    outcomes: 'High-speed offline & local workflow execution',
    tech: ['Python / C++', 'Desktop Executable Engine', 'Local SQLite'],
    description: 'A specialized custom standalone desktop/mobile executable application engineered for custom client operations, enabling ultra-fast local processing, offline data management, and automated workflow execution.',
    features: [
      'Standalone Desktop/Mobile Executable Application',
      'High-Speed Offline Local Data Processing',
      'Bespoke Business Logic & File Automation',
      'Zero Cloud Latency Operating Mode',
    ],
  },
  {
    slug: 'local-ecommerce-shop-systems',
    title: 'E-Commerce Stores for Local Shops',
    category: 'E-Commerce',
    icon: ShoppingCart,
    badge: 'Retail Tech',
    outcomes: 'Digital storefronts with 1-click checkout & WhatsApp alerts',
    tech: ['Next.js 15', 'Tailwind CSS', 'PayU / UPI', 'WhatsApp API'],
    description: 'Custom e-commerce platforms for local retail shops, clothing stores, and small businesses to sell online. Features instant UPI/Card payments, mobile responsive catalogs, and automated WhatsApp order notifications sent directly to shop owners.',
    features: [
      'Mobile-Optimized Product Catalogs',
      'Instant UPI, PayU, and Credit/Debit Card Checkout',
      'Direct WhatsApp Order Notification Alerts',
      'Simple Shop Owner Product & Inventory Manager',
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-16 relative z-10 bg-white text-[#0B0B0D]">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          FEATURED SOLVARK PROJECTS
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading text-[#0B0B0D]">
          Our Custom <span className="text-gradient-blue-pink">Projects & Systems</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          From School ERP Systems and Library Tech to custom executables (Shroom), NGO platforms (No Pehal), and E-Commerce storefronts.
        </p>
      </div>

      <div className="space-y-8">
        {PROJECTS.map((proj) => {
          const Icon = proj.icon;
          return (
            <Card key={proj.slug} variant="blueprint" className="p-8 space-y-6 hover:border-[#0052FF] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E7E7E7] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0052FF]/10 flex items-center justify-center text-[#0052FF]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">{proj.category}</span>
                    <h2 className="text-2xl font-bold font-heading text-[#0B0B0D]">{proj.title}</h2>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#FF2A85] font-bold bg-pink-50 px-3 py-1 border border-pink-200 self-start md:self-auto">
                  {proj.badge}
                </span>
              </div>

              <p className="text-sm text-[#333333] font-sans leading-relaxed">{proj.description}</p>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">Key Modules & Features:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {proj.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs text-[#222222] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E7E7] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-[#F8F8FA] border border-[#E7E7E7] text-[10px] font-mono text-[#0B0B0D] font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={`/contact?project=${encodeURIComponent(proj.title)}`}>
                  <Button variant="primary" size="sm">
                    Inquire About Similar Project &rarr;
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
