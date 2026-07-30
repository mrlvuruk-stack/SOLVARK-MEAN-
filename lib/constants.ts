export const SITE_CONFIG = {
  name: 'Solvark',
  tagline: 'Digital Transformation & Technology Partner',
  description:
    'Solvark helps companies scale through modern software engineering, cloud infrastructure, AI automation, creative design, and growth marketing.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://solvark.com',
  ogImage: 'https://solvark.com/og.png',
  links: {
    twitter: 'https://twitter.com/solvarktech',
    github: 'https://github.com/solvark',
    linkedin: 'https://linkedin.com/company/solvark',
  },
};

// 11 Core Agency Services Offered by Solvark
export const ALL_AGENCY_SERVICES = [
  { id: 'web-dev', name: 'Website Design and Development', category: 'Development', icon: '💻', desc: 'Custom high-performance websites built with React 19, Next.js 15, and modern responsive UI.' },
  { id: 'web-redesign', name: 'Website Redesigning', category: 'Development', icon: '🎨', desc: 'Transform outdated websites into modern, high-converting digital platforms with 100/100 speed.' },
  { id: 'graphic-design', name: 'Graphic Designing', category: 'Creative Design', icon: '🖌️', desc: 'Enterprise brand identity, UI/UX design systems, pitch decks, and marketing visuals.' },
  { id: 'video-editing', name: 'Video Editing', category: 'Creative Media', icon: '🎬', desc: 'High-impact promo videos, motion graphics, social media reels, and product demos.' },
  { id: 'cloud-services', name: 'Cloud Services', category: 'Infrastructure', icon: '☁️', desc: 'AWS/Vercel cloud migration, serverless infrastructure, Kubernetes, and 99.99% uptime SLAs.' },
  { id: 'saas-dev', name: 'SaaS Product Development', category: 'Development', icon: '🚀', desc: 'Full-stack multi-tenant SaaS engineering with built-in subscription billing and analytics.' },
  { id: 'automation', name: 'Business Process Automation', category: 'Engineering', icon: '⚡', desc: 'AI workflow automation, custom API integrations, and internal tool development.' },
  { id: 'content-writing', name: 'Website Content Writing', category: 'Content & Copy', icon: '📝', desc: 'SEO-optimized landing page copy, technical whitepapers, and brand messaging.' },
  { id: 'seo', name: 'Search Engine Optimization (SEO)', category: 'Growth Marketing', icon: '🔍', desc: 'Technical SEO audits, keyword ranking strategies, and organic growth architecture.' },
  { id: 'smm', name: 'Social Media Management', category: 'Growth Marketing', icon: '📱', desc: 'Omnichannel content publishing, community growth, and monthly visual campaigns.' },
  { id: 'digital-marketing', name: 'Digital Marketing', category: 'Growth Marketing', icon: '📈', desc: 'Conversion rate optimization (CRO), paid ad campaign management, and funnel analytics.' },
];

export const SERVICE_PILLARS = [
  {
    id: 'design',
    title: 'Experience & Brand Design',
    description: 'UI/UX Design, Website Redesign, Graphic Design, Video Editing, Content Writing',
  },
  {
    id: 'engineering',
    title: 'Software Engineering & SaaS',
    description: 'Custom Web Apps, SaaS Platforms, Mobile Apps, API Systems',
  },
  {
    id: 'cloud',
    title: 'Cloud & Automation',
    description: 'Cloud Infrastructure, DevOps, Business Process Automation',
  },
  {
    id: 'growth',
    title: 'Growth & Digital Marketing',
    description: 'SEO Optimization, Social Media Management, Digital Marketing Campaigns',
  },
];

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Internship', href: '/internship' },
  { label: 'Contact', href: '/contact' },
];

export const CONTACT_INFO = {
  address: 'Phoenix Township, Dewas Naka, Indore, Madhya Pradesh, India',
  email: 'solvark.in@gmail.com',
  supportEmail: 'solvark.in@outlook.com',
  phone: '+91 98765 43210',
};

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'System Status', href: '/api/health' },
  { label: 'Admin Portal', href: '/admin/dashboard' },
];

export const TICKER_BADGES = [
  { label: 'Strategic Architecture', icon: '🎯' },
  { label: 'Smart Engineering', icon: '⚡' },
  { label: 'AI & Machine Intelligence', icon: '🧠' },
  { label: 'Zero-Trust Security', icon: '🛡️' },
  { label: 'Cloud Scalability', icon: '🚀' },
  { label: 'Enterprise SLA 99.99%', icon: '📊' },
];

export const SOLVARK_DNA_PILLARS = [
  {
    number: '01',
    title: 'Enterprise Security',
    description: 'Ironclad zero-trust security architecture, strict RLS database isolation, and encrypted telemetry built-in from day one.',
    icon: '🛡️',
  },
  {
    number: '02',
    title: 'Radical Transparency',
    description: 'No black boxes. Direct access to architectural schematics, test coverage reports, and live CI/CD build status.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Intelligent Innovation',
    description: 'Fusing cutting-edge React 19 Edge frameworks with embedded AI automation engines to eliminate manual friction.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Growth-Driven Focus',
    description: 'Targeted ROI, ultra-fast load benchmarks, and resilient infrastructure engineered to handle exponential user growth.',
    icon: '📈',
  },
];

export const ENGINEERING_PHILOSOPHIES = [
  {
    quote: 'Ship fast, but never break things.',
    detail: 'We combine rapid agile sprints with 100% automated test suites to deliver speed without sacrificing system stability.',
  },
  {
    quote: 'Architecture dictates longevity.',
    detail: 'We build modular systems designed to scale gracefully from initial MVP to millions of concurrent users.',
  },
  {
    quote: 'Design is how it works, not just how it looks.',
    detail: 'Every pixel, transition, and API endpoint is built to optimize user engagement and business conversion.',
  },
];
