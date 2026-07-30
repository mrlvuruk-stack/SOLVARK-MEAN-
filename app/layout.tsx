import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/ui/skip-link';
import { BackgroundMesh } from '@/components/marketing/BackgroundMesh';
import { SignInGateModal } from '@/components/ui/sign-in-gate-modal';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#FAFAFC] text-[#0B0B0D] antialiased selection:bg-[#B80357] selection:text-white relative font-sans min-h-screen overflow-x-hidden">
        <BackgroundMesh />
        <SkipLink />
        <Navbar />
        <main id="main-content" className="min-h-screen relative z-10">{children}</main>
        <Footer />
        <SignInGateModal />
      </body>
    </html>
  );
}
