'use client';

import * as React from 'react';
import { GraduationCap, Eye, CheckCircle, Clock, X, UserCheck, Award, XCircle } from 'lucide-react';

const DEMO_TRACKS = [
  { name: 'Web Development', duration: '2-3 Months', type: 'Free', fee: '—', status: 'active' },
  { name: 'Graphic Designing', duration: '2-3 Months', type: 'Free', fee: '—', status: 'active' },
  { name: 'Video Editing', duration: '2 Months', type: 'Paid', fee: '₹2,999', status: 'active' },
  { name: 'Content Writing', duration: '2 Months', type: 'Free', fee: '—', status: 'active' },
  { name: 'SEO & Digital Marketing', duration: '2-3 Months', type: 'Paid', fee: '₹1,999', status: 'active' },
  { name: 'Social Media Management', duration: '2 Months', type: 'Free', fee: '—', status: 'paused' },
];

const DEMO_APPLICANTS = [
  { name: 'Aman Verma', email: 'aman@gmail.com', college: 'IIT Delhi', track: 'Web Development', portfolio: 'github.com/amanverma', status: 'new', date: '2026-07-28' },
  { name: 'Sneha Gupta', email: 'sneha@outlook.com', college: 'NIT Surat', track: 'Graphic Designing', portfolio: 'behance.net/snehag', status: 'shortlisted', date: '2026-07-25' },
  { name: 'Rohit Patel', email: 'rohit@yahoo.com', college: 'BITS Pilani', track: 'Video Editing', portfolio: 'youtube.com/rohitedits', status: 'hired', date: '2026-07-20' },
  { name: 'Kavya Singh', email: 'kavya@gmail.com', college: 'DTU', track: 'SEO & Digital Marketing', portfolio: '—', status: 'certificate_issued', date: '2026-07-10' },
];

export default function AdminInternships() {
  const [applicants, setApplicants] = React.useState(DEMO_APPLICANTS);
  const [viewingIdx, setViewingIdx] = React.useState<number | null>(null);

  const statusMap: Record<string, { label: string; color: string; Icon: React.ElementType }> = {
    new: { label: 'New', color: '#0052FF', Icon: Clock },
    shortlisted: { label: 'Shortlisted', color: '#F59E0B', Icon: UserCheck },
    hired: { label: 'Hired', color: '#10B981', Icon: CheckCircle },
    rejected: { label: 'Rejected', color: '#EF4444', Icon: XCircle },
    certificate_issued: { label: 'Certificate Issued', color: '#8B5CF6', Icon: Award },
  };

  function updateStatus(idx: number, newStatus: string) {
    setApplicants(applicants.map((a, i) => i === idx ? { ...a, status: newStatus } : a));
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white font-heading flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-[#FF2A85]" /> Internship Program Manager
        </h1>
        <p className="text-sm text-zinc-400 mt-1">Configure internship tracks and manage candidate applications.</p>
      </div>

      {/* Track Configuration */}
      <div>
        <h2 className="text-lg font-bold text-white font-heading mb-4">Internship Tracks</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                {['Track', 'Duration', 'Type', 'Fee/Stipend', 'Status'].map((h) => (
                  <th key={h} className="text-left text-[10px] font-mono text-zinc-500 uppercase p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEMO_TRACKS.map((t, i) => (
                <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                  <td className="p-4 text-sm text-white font-bold">{t.name}</td>
                  <td className="p-4 text-xs text-zinc-300">{t.duration}</td>
                  <td className="p-4"><span className={`px-2 py-0.5 text-[10px] font-bold rounded ${t.type === 'Paid' ? 'text-[#FF2A85] bg-pink-950/40 border border-pink-800/40' : 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40'}`}>{t.type}</span></td>
                  <td className="p-4 text-sm text-white">{t.fee}</td>
                  <td className="p-4"><span className={`px-2 py-0.5 text-[10px] font-bold rounded ${t.status === 'active' ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40' : 'text-zinc-400 bg-zinc-800 border border-zinc-700'}`}>{t.status === 'active' ? '🟢 Active' : '⏸️ Paused'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applicants */}
      <div>
        <h2 className="text-lg font-bold text-white font-heading mb-4">Applications ({applicants.length})</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                {['Applicant', 'College', 'Track', 'Portfolio', 'Status', 'Date', 'Actions'].map((h) => (
                  <th key={h} className="text-left text-[10px] font-mono text-zinc-500 uppercase p-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {applicants.map((app, i) => {
                const st = statusMap[app.status];
                const StIcon = st.Icon;
                return (
                  <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                    <td className="p-3"><span className="text-sm text-white font-bold">{app.name}</span><br /><span className="text-[10px] text-zinc-500">{app.email}</span></td>
                    <td className="p-3 text-xs text-zinc-300">{app.college}</td>
                    <td className="p-3 text-xs text-[#0052FF] font-bold">{app.track}</td>
                    <td className="p-3 text-xs text-zinc-400">{app.portfolio}</td>
                    <td className="p-3"><span className="inline-flex items-center gap-1 text-[10px] font-bold" style={{ color: st.color }}><StIcon className="w-3 h-3" />{st.label}</span></td>
                    <td className="p-3 text-xs text-zinc-400 font-mono">{app.date}</td>
                    <td className="p-3">
                      <select value={app.status} onChange={(e) => updateStatus(i, e.target.value)} className="bg-zinc-800 border border-zinc-700 text-white text-[10px] px-2 py-1 rounded cursor-pointer focus:outline-none">
                        <option value="new">New</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="hired">Hired</option>
                        <option value="rejected">Rejected</option>
                        <option value="certificate_issued">Certificate Issued</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
