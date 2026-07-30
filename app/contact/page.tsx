'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Phone, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 space-y-12 relative z-10 bg-white text-[#0B0B0D]">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F8F8FA] border border-[#E7E7E7] text-xs font-mono text-[#0052FF] font-bold">
          <span className="w-2 h-2 bg-[#FF2A85]" />
          CONTACT SOLVARK HEADQUARTERS
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading leading-tight text-[#0B0B0D]">
          Get in Touch With <span className="text-gradient-blue-pink">Solvark Team</span>
        </h1>
        <p className="text-[#444444] text-base sm:text-lg font-sans leading-relaxed">
          Visit our Indore headquarters or reach out directly via email. We are here to assist with your software, school ERP, or digital service needs.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address Card */}
        <Card variant="blueprint" className="p-8 space-y-4 hover:border-[#0052FF] transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF]">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">OUR ADDRESS</span>
            <h3 className="text-lg font-bold font-heading text-[#0B0B0D]">Indore Headquarters</h3>
          </div>
          <p className="text-sm text-[#333333] font-sans leading-relaxed">
            {CONTACT_INFO.address}
          </p>
        </Card>

        {/* Email Card */}
        <Card variant="blueprint" className="p-8 space-y-4 hover:border-[#FF2A85] transition-all">
          <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#FF2A85]">
            <Mail className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#FF2A85] font-bold uppercase tracking-wider">EMAIL US</span>
            <h3 className="text-lg font-bold font-heading text-[#0B0B0D]">Official Mail IDs</h3>
          </div>
          <div className="space-y-1 text-sm font-mono text-[#333333]">
            <div>📧 {CONTACT_INFO.email}</div>
            <div>📧 {CONTACT_INFO.supportEmail}</div>
          </div>
        </Card>

        {/* Phone & Support Hours Card */}
        <Card variant="blueprint" className="p-8 space-y-4 hover:border-emerald-500 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <Phone className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider">CALL & HOURS</span>
            <h3 className="text-lg font-bold font-heading text-[#0B0B0D]">Direct Support</h3>
          </div>
          <div className="space-y-1 text-sm font-sans text-[#333333]">
            <div className="font-mono font-bold text-[#0B0B0D]">{CONTACT_INFO.phone}</div>
            <div className="text-xs text-[#555555]">Mon - Sat: 9:00 AM - 7:00 PM IST</div>
          </div>
        </Card>
      </div>

      {/* GOOGLE MAPS EMBEDDED LOCATION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-heading text-[#0B0B0D]">Location Map</h2>
          <span className="text-xs font-mono text-[#0052FF] font-bold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Indore, Madhya Pradesh
          </span>
        </div>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden border-2 border-[#E7E7E7] shadow-lg relative bg-zinc-100">
          <iframe
            title="Solvark Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.387224855078!2d75.8890254!3d22.7525381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a901844ad5%3A0x6b4f738096f9a0c1!2sDewas%20Naka%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
