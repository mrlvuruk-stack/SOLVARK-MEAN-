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
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

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
    quote: 'Security is not a feature, it is the foundation.',
    detail: 'Zero-trust RBAC policies, input sanitization, and end-to-end encryption govern every layer of our application stack.',
  },
  {
    quote: 'Design for millions from day one.',
    detail: 'Modular microservices, optimized database indexes, and edge caching ensure frictionless scaling under extreme concurrency.',
  },
  {
    quote: 'Complex systems require simple code.',
    detail: 'We enforce strict code reviews, modular components, and minimal-dependency discipline for long-term maintainability.',
  },
];

export const INDUSTRIES_WE_EMPOWER = [
  {
    id: 'fintech',
    title: 'FinTech & Banking',
    description: 'High-frequency trading engines, automated compliance pipelines, and predictive risk analytics.',
    badge: 'FinTech Systems',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Tech',
    description: 'HIPAA-compliant patient portals, encrypted electronic health records, and AI diagnostic data tools.',
    badge: 'HealthTech Cloud',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    description: 'High-conversion headless storefronts, real-time recommendation algorithms, and automated fulfillment.',
    badge: 'Retail Scale',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply',
    description: 'Real-time telemetry tracking, automated route optimization engines, and enterprise ERP sync.',
    badge: 'Supply Chain',
  },
];

