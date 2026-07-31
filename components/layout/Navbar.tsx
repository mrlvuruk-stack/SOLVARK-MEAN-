'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { SolvarkLogo } from '@/components/ui/logo';
import { User, LogIn } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [clientUser, setClientUser] = React.useState<{ fullName: string; email: string } | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Check signed in client user
    const auth = localStorage.getItem('solvark_client_auth');
    if (auth) {
      try {
        setClientUser(JSON.parse(auth));
      } catch (e) {
        console.error(e);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Do NOT render public navbar on admin panel, login, or client portal pages
  if (pathname.startsWith('/admin') || pathname.startsWith('/login') || pathname.startsWith('/client')) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E7E7] py-4 shadow-sm'
          : 'bg-white py-6 border-b border-[#E7E7E7]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <SolvarkLogo size="md" variant="light" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-[#444444] hover:text-[#FF2A85] transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Contact Us &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
