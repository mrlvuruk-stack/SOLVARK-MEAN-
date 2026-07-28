import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="pt-40 pb-20 max-w-xl mx-auto px-6 text-center space-y-8 relative z-10 bg-white text-[#0B0B0D]">
      <Card variant="blueprint" className="p-10 space-y-6">
        <div className="text-xs font-mono text-[#B80357] font-bold tracking-widest uppercase">
          ERROR STATUS // 404 PAGE NOT FOUND
        </div>
        <h1 className="text-5xl font-bold font-heading text-[#0B0B0D]">404</h1>
        <h2 className="text-xl font-bold font-heading text-[#0B0B0D]">System Route Unmapped</h2>
        <p className="text-xs text-[#444444] font-sans leading-relaxed">
          The requested URL path does not exist on this server instance or has been relocated within our architecture.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="md">
              &larr; Return to Homepage
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="md">
              Explore Services
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
