import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION_LINKS, FOOTER_LEGAL_LINKS } from '@/lib/constants';
import { SolvarkLogo } from '@/components/ui/logo';

export function Footer() {
  return (
    <footer className="bg-[#0B0B0D] text-white border-t border-zinc-800 pt-20 pb-12 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-zinc-800">
        <div className="space-y-4 md:col-span-2">
          <Link href="/" className="inline-block">
            <SolvarkLogo size="md" variant="dark" />
          </Link>
          <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
            We engineer digital systems that help businesses launch faster, operate smarter, and scale with confidence.
          </p>
        </div>


        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF2A85] font-bold">Navigation</div>
          <ul className="space-y-2 text-xs text-zinc-400">
            {NAVIGATION_LINKS.slice(0, 5).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold">Legal & Compliance</div>
          <ul className="space-y-2 text-xs text-zinc-400">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
        <div>&copy; {new Date().getFullYear()} Solvark Digital Inc. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={SITE_CONFIG.links.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
