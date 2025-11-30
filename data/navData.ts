import { 
  Users, DollarSign, Briefcase, TrendingUp, Package, BarChart, 
  Zap, Globe, Layout, PieChart, Smartphone, MessageSquare,
  Plug, Server, Layers, Code, Wrench, GraduationCap, Headphones,
  HardHat, ShoppingCart, UserCheck, Factory, Building,
  BookOpen, Smile, Video, Map, Calculator, FileSpreadsheet, Activity, Download, HelpCircle, Signal, Newspaper, LifeBuoy,
  ShieldCheck, Handshake, Rocket, Star, Phone, Mail, Compass, Settings, Crosshair, LayoutGrid, Calendar, GanttChartSquare,
  Search,
  LucideIcon
} from 'lucide-react';

type MenuItem = {
  to: string;
  label: string;
  desc: string;
  icon: LucideIcon;
  color?: string;
  bg?: string;
};

type MenuTab = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type MenuContent = {
  title: string;
  description: string;
  items: Array<MenuItem>;
};

export const platformTabs: Array<MenuTab> = [
  { id: 'modules', label: 'Core Modules', icon: Layers },
  { id: 'capabilities', label: 'Capabilities', icon: Zap },
  { id: 'technology', label: 'Technology', icon: Code },
];

export const platformContent: Record<string, MenuContent> = {
  modules: {
    title: 'Core Business Modules',
    description: 'Integrated applications to run your entire enterprise.',
    items: [
      { to: '/platform/modules/hr', label: 'Human Capital', desc: 'Payroll, Attendance, LMS', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
      { to: '/platform/modules/finance', label: 'Finance & Control', desc: 'Accounting, Expense, Asset', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
      { to: '/platform/modules/operations', label: 'Operations', desc: 'Timesheet, Project, S-Curve', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
      { to: '/platform/modules/sales', label: 'Sales & CRM', desc: 'CRM, Quotation, POS', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
      { to: '/platform/modules/supply-chain', label: 'Supply Chain', desc: 'Inventory, Warehouse, BOM', icon: Package, color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20' },
      { to: '/platform/modules/governance', label: 'Governance', desc: 'BI Dashboard, Audit Trail', icon: BarChart, color: 'text-slate-600', bg: 'bg-slate-100 dark:bg-slate-800' },
    ]
  },
  capabilities: {
    title: 'Platform Capabilities',
    description: 'Powerful features shared across all modules.',
    items: [
      { to: '/platform/capabilities/automation-ai', label: 'Automation & AI', desc: 'Workflow builder & predictive AI', icon: Zap },
      { to: '/platform/capabilities/multi-company', label: 'Multi-Company', desc: 'Manage holding structures', icon: Globe },
      { to: '/platform/capabilities/portals', label: 'Self-Service Portals', desc: 'Customer & Vendor access', icon: Layout },
      { to: '/platform/capabilities/analytics', label: 'Analytics Builder', desc: 'Custom reports & dashboards', icon: PieChart },
      { to: '/platform/capabilities/mobile', label: 'Native Mobile App', desc: 'iOS & Android for field work', icon: Smartphone },
      { to: '/platform/capabilities/low-code', label: 'Low-Code Platform', desc: 'Build apps without coding', icon: Code },
      { to: '/platform/capabilities/collaboration', label: 'Contextual Chat', desc: 'Discuss on documents', icon: MessageSquare },
    ]
  },
  technology: {
    title: 'Underlying Technology',
    description: 'Enterprise-grade architecture built for scale.',
    items: [
      { to: '/platform/technologies/integration', label: 'Integrations Library', desc: 'Connect with banks, e-commerce, & IoT', icon: Plug },
      { to: '/platform/technologies/self-hosted', label: 'Self-Hosted Deploy', desc: 'On-premise & private cloud options', icon: Server },
      { to: '/platform/technologies/architecture', label: 'System Architecture', desc: 'Full stack overview & specifications', icon: Layers },
    ]
  }
};

export const solutionsTabs: Array<MenuTab> = [
  { id: 'industry', label: 'By Industry', icon: Factory },
  { id: 'role', label: 'By Role', icon: UserCheck },
];

export const solutionsContent: Record<string, MenuContent> = {
  industry: {
    title: 'Industry Solutions',
    description: 'Tailored workflows for specific business sectors.',
    items: [
      { to: '/solutions/construction', label: 'Construction', desc: 'Project-based ERP', icon: HardHat },
      { to: '/solutions/retail', label: 'Retail & Distribution', desc: 'Omnichannel & POS', icon: ShoppingCart },
      { to: '/solutions/outsourcing', label: 'Outsourcing', desc: 'Manpower management', icon: UserCheck },
      { to: '/solutions/manufacturing', label: 'Manufacturing', desc: 'MRP & Production', icon: Factory },
      { to: '/solutions/consulting', label: 'Professional Services', desc: 'Billable hours & projects', icon: Briefcase },
      { to: '/solutions/enterprise', label: 'Enterprise & Holding', desc: 'Consolidation & control', icon: Building },
    ]
  },
  role: {
    title: 'Solutions by Role',
    description: 'Tools designed for specific stakeholders.',
    items: [
      { to: '/role/ceo', label: 'CEO & Founders', desc: 'Executive dashboards', icon: BarChart },
      { to: '/role/finance', label: 'Finance Leaders', desc: 'Cashflow control', icon: DollarSign },
      { to: '/role/hr', label: 'HR Managers', desc: 'Talent acquisition', icon: Users },
      { to: '/role/it', label: 'IT Managers', desc: 'Security & compliance', icon: Server },
      { to: '/role/ops', label: 'Ops Managers', desc: 'Efficiency tracking', icon: Activity },
    ]
  }
};

export const resourcesTabs: Array<MenuTab> = [
  { id: 'insights', label: 'Insights & News', icon: BookOpen },
  { id: 'tools', label: 'Tools & Utilities', icon: Calculator },
  { id: 'support', label: 'Support Center', icon: LifeBuoy },
];

export const resourcesContent: Record<string, MenuContent> = {
  insights: {
    title: 'Latest Insights',
    description: 'Stay updated with industry trends and success stories.',
    items: [
      { to: '/blog', label: 'Blog & News', desc: 'Latest industry news and tips', icon: Newspaper },
      { to: '/use-cases', label: 'Use Cases', desc: 'Real-world implementation stories', icon: Layers },
      { to: '/customers', label: 'Customer Stories', desc: 'Success stories from our clients', icon: Smile },
      { to: '/events', label: 'Events & Webinars', desc: 'Join our upcoming sessions', icon: Video },
    ]
  },
  tools: {
    title: 'Business Tools',
    description: 'Interactive tools to help you make better decisions.',
    items: [
      { to: '/tools/assessment', label: 'Maturity Assessment', desc: 'Check your digital readiness', icon: BarChart },
      { to: '/tools/needs-analysis', label: 'Solution Finder', desc: 'Map your operational needs', icon: Crosshair },
      { to: '/tools/roi-calculator', label: 'ROI Calculator', desc: 'Calculate your potential savings', icon: Calculator },
      { to: '/tools/pricing-calculator', label: 'Pricing Calculator', desc: 'Estimate software costs', icon: DollarSign },
      { to: '/tools/project-planner', label: 'Project Planner', desc: 'Estimate implementation timeline', icon: GanttChartSquare },
      { to: '/tools/migration-center', label: 'Migration Center', desc: 'Guides for moving to BizOps', icon: FileSpreadsheet },
      { to: '/tools/comparison', label: 'System Comparison', desc: 'Compare vs Odoo, SAP & Excel', icon: LayoutGrid },
      { to: '/roadmap', label: 'Product Roadmap', desc: 'See what is coming next', icon: Map },
    ]
  },
  support: {
    title: 'Help & Support',
    description: 'Get the assistance you need to succeed.',
    items: [
      { to: '/docs', label: 'Help & API Docs', desc: 'Technical documentation', icon: HelpCircle },
      { to: '/status', label: 'System Status', desc: 'Real-time performance', icon: Signal },
    ]
  }
};

export const companyTabs: Array<MenuTab> = [
  { id: 'story', label: 'Our Story', icon: Building },
  { id: 'ecosystem', label: 'Ecosystem', icon: Globe },
];

export const companyContent: Record<string, MenuContent> = {
  story: {
    title: 'About BizOps',
    description: 'Building the future of enterprise efficiency.',
    items: [
      { to: '/about', label: 'About Us', desc: 'Our mission & vision', icon: Building },
      { to: '/why-bizops', label: 'Why BizOps', desc: 'Our unique value proposition', icon: Star },
      { to: '/trust', label: 'Trust & Security', desc: 'Enterprise-grade security', icon: ShieldCheck },
      { to: '/media-kit', label: 'Media Kit', desc: 'Logos & brand assets', icon: Newspaper },
    ]
  },
  ecosystem: {
    title: 'Join the Ecosystem',
    description: 'Grow your career or business with us.',
    items: [
      { to: '/partners', label: 'Partner Program', desc: 'Become a solution partner', icon: Handshake },
      { to: '/partners/directory', label: 'Partner Directory', desc: 'Find certified implementors', icon: Search },
      { to: '/partners/startup', label: 'Startup Program', desc: 'Credits for early-stage startups', icon: Rocket },
      { to: '/careers', label: 'Careers', desc: 'We are hiring!', icon: Briefcase },
    ]
  }
};

export const servicesItems: Array<MenuItem> = [
  { to: '/services/consulting', label: 'Strategic Consulting', desc: '', icon: Compass },
  { to: '/services/managed-business-services', label: 'Enterprise Managed Services', desc: 'Virtual Head Office', icon: Building },
  { to: '/services/implementation', label: 'Implementation', desc: '', icon: Wrench },
  { to: '/services/custom-dev', label: 'Custom Development', desc: '', icon: Code },
  { to: '/services/training', label: 'Training & Academy', desc: '', icon: GraduationCap },
  { to: '/services/support', label: 'Support & Maintenance', desc: '', icon: Headphones },
];

