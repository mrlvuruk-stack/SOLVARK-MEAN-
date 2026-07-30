export const SITE_CONFIG = {
  name: 'Solvark',
  tagline: 'Technology Partner for Small Businesses, NGOs & Growing Enterprises',
  description:
    'Solvark empowers local businesses, NGOs, schools, shops, and entrepreneurs with custom websites, e-commerce stores, school management systems, AI automation, and digital growth marketing.',
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
  { id: 'web-dev', name: 'Website Design and Development', category: 'Development', icon: '💻', desc: 'Custom high-performance websites for small businesses, shops, and NGOs built with modern responsive UI.' },
  { id: 'web-redesign', name: 'Website Redesigning', category: 'Development', icon: '🎨', desc: 'Transform outdated websites into fast, modern, high-converting digital platforms.' },
  { id: 'graphic-design', name: 'Graphic Designing', category: 'Creative Design', icon: '🖌️', desc: 'Brand identity, logos, UI/UX designs, social media banners, and marketing visuals.' },
  { id: 'video-editing', name: 'Video Editing', category: 'Creative Media', icon: '🎬', desc: 'High-impact promo videos, social media reels, motion graphics, and product showcases.' },
  { id: 'cloud-services', name: 'Cloud & Hosting Services', category: 'Infrastructure', icon: '☁️', desc: 'Secure cloud hosting, domain setup, fast CDN deployment, and 99.9% uptime.' },
  { id: 'saas-dev', name: 'SaaS & Custom App Development', category: 'Development', icon: '🚀', desc: 'Custom web platforms, desktop executables, and specialized business applications.' },
  { id: 'automation', name: 'Business Process Automation', category: 'Engineering', icon: '⚡', desc: 'AI workflow automation, WhatsApp messaging, and custom internal management tools.' },
  { id: 'content-writing', name: 'Website Content Writing', category: 'Content & Copy', icon: '📝', desc: 'SEO-optimized landing page copy, product descriptions, and brand messaging.' },
  { id: 'seo', name: 'Search Engine Optimization (SEO)', category: 'Growth Marketing', icon: '🔍', desc: 'Local Google Maps SEO, keyword rankings, and organic customer acquisition.' },
  { id: 'smm', name: 'Social Media Management', category: 'Growth Marketing', icon: '📱', desc: 'Social media content publishing, local business branding, and follower growth.' },
  { id: 'digital-marketing', name: 'Digital Marketing', category: 'Growth Marketing', icon: '📈', desc: 'Targeted ad campaigns, lead generation, and customer conversion strategies.' },
];

export const SERVICE_PILLARS = [
  {
    id: 'design',
    title: 'Experience & Brand Design',
    description: 'UI/UX Design, Website Redesign, Graphic Design, Video Editing, Content Writing',
  },
  {
    id: 'engineering',
    title: 'Software Engineering & School ERP',
    description: 'Custom Web Apps, School Management Systems, E-Commerce, Local Shop Portals',
  },
  {
    id: 'cloud',
    title: 'Cloud & Automation',
    description: 'Hosting Infrastructure, WhatsApp Automation, Process Automation',
  },
  {
    id: 'growth',
    title: 'Growth & Digital Marketing',
    description: 'Local SEO, Social Media Management, Digital Ad Campaigns',
  },
];

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
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
  { label: 'Small Business Growth', icon: '🏪' },
  { label: 'E-Commerce & Online Stores', icon: '🛒' },
  { label: 'NGO & Community Tech', icon: '🤝' },
  { label: 'School ERP Systems', icon: '🏫' },
  { label: 'AI & Business Automation', icon: '⚡' },
  { label: 'Ultra-Fast Performance', icon: '🚀' },
];

export const SOLVARK_DNA_PILLARS = [
  {
    number: '01',
    title: 'Tailored for Small Businesses & NGOs',
    description: 'We specialize in building high-performing digital solutions for local shops, NGOs, schools, and growing startups at affordable budgets.',
    icon: '🤝',
  },
  {
    number: '02',
    title: 'Radical Transparency & Support',
    description: 'Direct communication, honest timelines, zero hidden fees, and dedicated technical support every step of the way.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Custom Systems & Mobile Solutions',
    description: 'From complete School Management Systems to E-Commerce and specialized desktop executables like Shroom & No Pehal.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Growth-Driven Digital Presence',
    description: 'Local Google SEO, social media branding, and lead generation engineered to get real customers for your business.',
    icon: '📈',
  },
];

export const ENGINEERING_PHILOSOPHIES = [
  {
    quote: 'Simple solutions for complex real-world needs.',
    detail: 'We build intuitive, robust software that solves daily operational headaches for schools, local businesses, and organizations.',
  },
  {
    quote: 'Bespoke quality at accessible prices.',
    detail: 'Every shop, NGO, and institution deserves world-class digital tools tailored specifically to their workflow.',
  },
  {
    quote: 'Design that engages and converts.',
    detail: 'Clean visual design, fast loading speeds, and practical features that make users love using your platform.',
  },
];
