'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ClientSidebar } from '@/components/layout/ClientSidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('solvark_client_auth');
    if (!auth) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <ClientSidebar />
      <main className="ml-64 min-h-screen p-8">{children}</main>
    </div>
  );
}
