import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Search, MousePointer,
  Users, DollarSign, Briefcase, TrendingUp, Package, BarChart, 
  Zap, Globe, Layout, PieChart, Smartphone, MessageSquare,
  Plug, Server, Layers, Code, Wrench, GraduationCap, Headphones,
  HardHat, ShoppingCart, UserCheck, Factory, Building,
  BookOpen, Smile, Video, Map, Calculator, FileSpreadsheet, Activity, Download, HelpCircle, Signal, Newspaper, LifeBuoy,
  ShieldCheck, Handshake, Rocket, Star, Phone, Mail, Compass, Settings, Crosshair, LayoutGrid, Calendar, GanttChartSquare
} from 'lucide-react';
import Button from './Button';
import NotificationCenter from './NotificationCenter';
import DemoModal from './DemoModal';

// --- DATA DEFINITIONS FOR MEGA MENUS ---

const platformTabs = [
  { id: 'modules', label: 'Core Modules', icon: Layers },
  { id: 'capabilities', label: 'Capabilities', icon: Zap },
  { id: 'technology', label: 'Technology', icon: Code },
];

const platformContent = {
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

const solutionsTabs = [
  { id: 'industry', label: 'By Industry', icon: Factory },
  { id: 'role', label: 'By Role', icon: UserCheck },
];

const solutionsContent = {
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

const resourcesTabs = [
  { id: 'insights', label: 'Insights & News', icon: BookOpen },
  { id: 'tools', label: 'Tools & Utilities', icon: Calculator },
  { id: 'support', label: 'Support Center', icon: LifeBuoy },
];

const resourcesContent = {
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

const companyTabs = [
  { id: 'story', label: 'Our Story', icon: Building },
  { id: 'ecosystem', label: 'Ecosystem', icon: Globe },
];

const companyContent = {
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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY;
    // Hide header on scroll down, show on scroll up OR if at top
    if (Math.abs(diff) > 20) {
      setIsVisible(diff < 0 || latest < 50);
      setLastY(latest);
    }
    // Styling logic
    setIsScrolled(latest > 20);
  });
  
  // Mega Menu States
  const [activePlatformTab, setActivePlatformTab] = useState('modules');
  const [activeSolutionsTab, setActiveSolutionsTab] = useState('industry');
  const [activeResourcesTab, setActiveResourcesTab] = useState('insights');
  const [activeCompanyTab, setActiveCompanyTab] = useState('story');

  // Mobile accordion states
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMobilePlatformOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
    setMobileCompanyOpen(false);
  }, [location]);

  const openDemo = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDemoModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800' 
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2" aria-label="BizOps Homepage">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  BizOps
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 items-center" aria-label="Main Navigation">
              
              {/* MENU 1: PLATFORM (Full Width Mega Menu) */}
              <div className="group h-full flex items-center">
                <Link to="/platform" className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 transition-colors py-2 px-1">
                  Platform <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                {/* Full Width Dropdown Container */}
                <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-xl">
                  
                  {/* Centered Content Wrapper */}
                  <div className="max-w-7xl mx-auto flex">
                    
                    {/* Sidebar (Tabs) */}
                    <div className="w-64 bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 py-6 flex-shrink-0 rounded-bl-xl">
                       <div className="px-4 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Platform Overview</div>
                       {platformTabs.map((tab) => (
                          <button
                             key={tab.id}
                             onMouseEnter={() => setActivePlatformTab(tab.id)}
                             className={`w-full text-left px-4 py-3 flex items-center justify-between text-sm font-medium transition-all ${
                                activePlatformTab === tab.id 
                                   ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400 shadow-sm' 
                                   : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 border-l-4 border-transparent'
                             }`}
                          >
                             <div className="flex items-center gap-3">
                                <tab.icon className={`w-4 h-4 ${activePlatformTab === tab.id ? 'text-primary-600' : 'text-slate-400'}`} />
                                {tab.label}
                             </div>
                             {activePlatformTab === tab.id && <ChevronRight className="w-3 h-3 text-primary-600" />}
                          </button>
                       ))}
                       <div className="mt-6 px-4">
                          <Link to="/tour" className="flex items-center gap-2 p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-bold hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors mb-2">
                             <MousePointer className="w-4 h-4" /> Interactive Tour
                          </Link>
                          <Link to="/download" className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                             <Download className="w-4 h-4" /> Download Apps
                          </Link>
                       </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 min-h-[400px]">
                       <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                             {platformContent[activePlatformTab as keyof typeof platformContent].title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                             {platformContent[activePlatformTab as keyof typeof platformContent].description}
                          </p>
                       </div>

                       <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                          {platformContent[activePlatformTab as keyof typeof platformContent].items.map((item, idx) => {
                             // @ts-ignore - Dynamic properties
                             const bgColor = item.bg || 'bg-slate-100 dark:bg-slate-800 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 shadow-sm';
                             // @ts-ignore - Dynamic properties
                             const iconColor = item.color || 'text-slate-600 dark:text-slate-300';
                             
                             return (
                             <Link key={idx} to={item.to} className="group/item flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className={`mt-1 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${bgColor}`}>
                                   <item.icon className={`w-5 h-5 ${iconColor}`} />
                                </div>
                                <div>
                                   <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-primary-600 transition-colors">
                                      {item.label}
                                   </div>
                                   <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                      {item.desc}
                                   </div>
                                </div>
                             </Link>
                          );
                          })}
                       </div>
                       
                       <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                          <Link to="/platform" className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                             View all platform features <ChevronRight className="w-4 h-4" />
                          </Link>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MENU 2: SOLUTIONS (Full Width Mega Menu) */}
              <div className="group h-full flex items-center">
                 <Link to="/solutions" className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 transition-colors py-2 px-1">
                  Solutions <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                {/* Full Width Dropdown Container */}
                <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-xl">
                   
                   {/* Centered Content Wrapper */}
                   <div className="max-w-7xl mx-auto flex">
                     {/* Sidebar (Tabs) */}
                     <div className="w-60 bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 py-6 flex-shrink-0 rounded-bl-xl">
                        <div className="px-4 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Find Solutions</div>
                        {solutionsTabs.map((tab) => (
                           <button
                              key={tab.id}
                              onMouseEnter={() => setActiveSolutionsTab(tab.id)}
                              className={`w-full text-left px-4 py-3 flex items-center justify-between text-sm font-medium transition-all ${
                                 activeSolutionsTab === tab.id 
                                    ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400 shadow-sm' 
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 border-l-4 border-transparent'
                              }`}
                           >
                              <div className="flex items-center gap-3">
                                 <tab.icon className={`w-4 h-4 ${activeSolutionsTab === tab.id ? 'text-primary-600' : 'text-slate-400'}`} />
                                 {tab.label}
                              </div>
                              {activeSolutionsTab === tab.id && <ChevronRight className="w-3 h-3 text-primary-600" />}
                           </button>
                        ))}
                     </div>

                     {/* Content Area */}
                     <div className="flex-1 p-8 min-h-[350px]">
                        <div className="mb-6">
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                              {solutionsContent[activeSolutionsTab as keyof typeof solutionsContent].title}
                           </h3>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">
                              {solutionsContent[activeSolutionsTab as keyof typeof solutionsContent].description}
                           </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                           {solutionsContent[activeSolutionsTab as keyof typeof solutionsContent].items.map((item, idx) => (
                              <Link key={idx} to={item.to} className="group/item flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                 <div className="mt-1 w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 shadow-sm transition-all">
                                    <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                                 </div>
                                 <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-primary-600 transition-colors">
                                       {item.label}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                       {item.desc}
                                    </div>
                                 </div>
                              </Link>
                           ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                          <Link to="/solutions" className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                             View all solutions <ChevronRight className="w-4 h-4" />
                          </Link>
                       </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* MENU 3: SERVICES (Simple Dropdown) */}
              <div className="group relative h-full flex items-center">
                <Link to="/services" className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm flex items-center gap-1 transition-colors py-2 px-1">
                  Services <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
                <div className="absolute top-full left-0 mt-0 w-64 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left p-2 z-50 translate-y-2 group-hover:translate-y-0">
                   <Link to="/services/consulting" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                      <Compass className="w-4 h-4 text-slate-400" /> Strategic Consulting
                   </Link>
                   <Link to="/services/implementation" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                      <Wrench className="w-4 h-4 text-slate-400" /> Implementation
                   </Link>
                   <Link to="/services/custom-dev" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                      <Code className="w-4 h-4 text-slate-400" /> Custom Development
                   </Link>
                   <Link to="/services/training" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                      <GraduationCap className="w-4 h-4 text-slate-400" /> Training & Academy
                   </Link>
                   <Link to="/services/support" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                      <Headphones className="w-4 h-4 text-slate-400" /> Support & Maintenance
                   </Link>
                </div>
              </div>

              <Link to="/pricing" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-colors py-2 px-1">
                Pricing
              </Link>

              {/* MENU 4: RESOURCES (Full Width Mega Menu) */}
              <div className="group h-full flex items-center">
                 <button className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 focus:outline-none transition-colors py-2 px-1">
                  Resources <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                
                {/* Full Width Dropdown Container */}
                <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-xl">
                   
                   {/* Centered Content Wrapper */}
                   <div className="max-w-7xl mx-auto flex">
                     {/* Sidebar (Tabs) */}
                     <div className="w-60 bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 py-6 flex-shrink-0 rounded-bl-xl">
                        <div className="px-4 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Resource Hub</div>
                        {resourcesTabs.map((tab) => (
                           <button
                              key={tab.id}
                              onMouseEnter={() => setActiveResourcesTab(tab.id)}
                              className={`w-full text-left px-4 py-3 flex items-center justify-between text-sm font-medium transition-all ${
                                 activeResourcesTab === tab.id 
                                    ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400 shadow-sm' 
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 border-l-4 border-transparent'
                              }`}
                           >
                              <div className="flex items-center gap-3">
                                 <tab.icon className={`w-4 h-4 ${activeResourcesTab === tab.id ? 'text-primary-600' : 'text-slate-400'}`} />
                                 {tab.label}
                              </div>
                              {activeResourcesTab === tab.id && <ChevronRight className="w-3 h-3 text-primary-600" />}
                           </button>
                        ))}
                     </div>

                     {/* Content Area */}
                     <div className="flex-1 p-8 min-h-[350px]">
                        <div className="mb-6">
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                              {resourcesContent[activeResourcesTab as keyof typeof resourcesContent].title}
                           </h3>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">
                              {resourcesContent[activeResourcesTab as keyof typeof resourcesContent].description}
                           </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                           {resourcesContent[activeResourcesTab as keyof typeof resourcesContent].items.map((item, idx) => (
                              <Link key={idx} to={item.to} className="group/item flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                 <div className="mt-1 w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 shadow-sm transition-all">
                                    <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                                 </div>
                                 <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-primary-600 transition-colors">
                                       {item.label}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                       {item.desc}
                                    </div>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* MENU 5: COMPANY (Full Width Mega Menu) */}
              <div className="group h-full flex items-center">
                <button className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 focus:outline-none transition-colors py-2 px-1">
                  Company <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                
                {/* Full Width Dropdown Container */}
                <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-xl">
                   
                   {/* Centered Content Wrapper */}
                   <div className="max-w-7xl mx-auto flex">
                     {/* Sidebar (Tabs) */}
                     <div className="w-60 bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 py-6 flex-shrink-0 rounded-bl-xl">
                        <div className="px-4 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Who We Are</div>
                        {companyTabs.map((tab) => (
                           <button
                              key={tab.id}
                              onMouseEnter={() => setActiveCompanyTab(tab.id)}
                              className={`w-full text-left px-4 py-3 flex items-center justify-between text-sm font-medium transition-all ${
                                 activeCompanyTab === tab.id 
                                    ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400 shadow-sm' 
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 border-l-4 border-transparent'
                              }`}
                           >
                              <div className="flex items-center gap-3">
                                 <tab.icon className={`w-4 h-4 ${activeCompanyTab === tab.id ? 'text-primary-600' : 'text-slate-400'}`} />
                                 {tab.label}
                              </div>
                              {activeCompanyTab === tab.id && <ChevronRight className="w-3 h-3 text-primary-600" />}
                           </button>
                        ))}
                        
                        <div className="mt-6 px-4">
                           <Link to="/contact" className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary-200 transition-all shadow-sm group/btn">
                              <div className="w-6 h-6 rounded-md bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover/btn:bg-primary-100 transition-colors">
                                 <Phone className="w-3.5 h-3.5" />
                              </div>
                              Contact Us
                           </Link>
                        </div>
                     </div>

                     {/* Content Area */}
                     <div className="flex-1 p-8 min-h-[350px]">
                        <div className="mb-6">
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                              {companyContent[activeCompanyTab as keyof typeof companyContent].title}
                           </h3>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">
                              {companyContent[activeCompanyTab as keyof typeof companyContent].description}
                           </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                           {companyContent[activeCompanyTab as keyof typeof companyContent].items.map((item, idx) => (
                              <Link key={idx} to={item.to} className="group/item flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                 <div className="mt-1 w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 shadow-sm transition-all">
                                    <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                                 </div>
                                 <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-primary-600 transition-colors">
                                       {item.label}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                       {item.desc}
                                    </div>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </div>
                   </div>
                </div>
              </div>

            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4 ml-4">
              <NotificationCenter />
              <Link to="/search" className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2" aria-label="Search">
                <Search className="w-5 h-5" />
              </Link>
              <Link to="/login" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors">
                Login
              </Link>
              <Button size="sm" className="shadow-md shadow-primary-100 dark:shadow-none" onClick={openDemo}>Book a Demo</Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
               <NotificationCenter />
               <Link to="/search" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-2" aria-label="Search">
                 <Search className="w-6 h-6" />
               </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 focus:outline-none p-2"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 absolute w-full px-4 pt-2 pb-6 shadow-xl animate-fade-in-up h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              
              {/* Mobile Platform Accordion */}
              <div>
                <button 
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
                  aria-expanded={mobilePlatformOpen}
                >
                  Platform
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobilePlatformOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobilePlatformOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Modules</div>
                    <Link to="/platform/modules/hr" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Human Capital</Link>
                    <Link to="/platform/modules/finance" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Finance & Control</Link>
                    <Link to="/platform/modules/operations" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Operations</Link>
                    <Link to="/platform/modules/sales" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Sales & CRM</Link>
                    <Link to="/platform/modules/supply-chain" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Supply Chain</Link>
                    <Link to="/platform/modules/governance" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Governance & Insight</Link>
                    
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Capabilities</div>
                    <Link to="/platform/capabilities/automation-ai" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Automation & AI</Link>
                    <Link to="/platform/capabilities/multi-company" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Multi-Company</Link>
                    <Link to="/platform/capabilities/portals" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Portals</Link>
                    <Link to="/platform/capabilities/analytics" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Analytics</Link>
                    <Link to="/platform/capabilities/mobile" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Mobile App</Link>
                    <Link to="/platform/capabilities/collaboration" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Contextual Chat</Link>
                    
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Technology</div>
                    <Link to="/platform/technologies/integration" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Integrations Library</Link>
                    <Link to="/platform/technologies/self-hosted" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Self-Hosted</Link>
                    <Link to="/platform/technologies/architecture" className="block py-2 text-sm text-slate-600 dark:text-slate-300 font-semibold">Architecture</Link>

                    <div className="my-2 border-t border-slate-200 dark:border-slate-700"></div>
                    <Link to="/tour" className="block py-2 text-sm font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-2">
                        <MousePointer className="w-4 h-4" /> Interactive Product Tour
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Solutions Accordion */}
              <div>
                <button 
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
                  aria-expanded={mobileSolutionsOpen}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">By Industry</div>
                    <Link to="/solutions/construction" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Construction</Link>
                    <Link to="/solutions/retail" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Retail & Distribution</Link>
                    <Link to="/solutions/outsourcing" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Outsourcing</Link>
                    <Link to="/solutions/manufacturing" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Manufacturing</Link>
                    <Link to="/solutions/consulting" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Professional Services</Link>
                    <Link to="/solutions/enterprise" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Enterprise & Holding</Link>
                    
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">By Role</div>
                    
                    <Link to="/role/ceo" className="block py-2 text-sm text-slate-600 dark:text-slate-300">CEO & Founders</Link>
                    <Link to="/role/finance" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Finance Leaders</Link>
                    <Link to="/role/hr" className="block py-2 text-sm text-slate-600 dark:text-slate-300">HR Managers</Link>
                    <Link to="/role/it" className="block py-2 text-sm text-slate-600 dark:text-slate-300">IT Managers</Link>
                    <Link to="/role/ops" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Ops Managers</Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
                    <Link to="/services/consulting" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Strategic Consulting</Link>
                    <Link to="/services/implementation" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Implementation</Link>
                    <Link to="/services/custom-dev" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Custom Development</Link>
                    <Link to="/services/training" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Training & Academy</Link>
                    <Link to="/services/support" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Support & Maintenance</Link>
                  </div>
                )}
              </div>

              <Link to="/pricing" className="block py-3 text-base font-medium text-slate-700 dark:text-slate-200 border-b border-slate-50 dark:border-slate-800">
                 Pricing
              </Link>

              {/* Mobile Resources Accordion */}
              <div>
                <button 
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
                  aria-expanded={mobileResourcesOpen}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
                    <Link to="/blog" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Blog & Insights</Link>
                    <Link to="/use-cases" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Use Cases</Link>
                    <Link to="/customers" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Customer Stories</Link>
                    <Link to="/events" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Events & Webinars</Link>
                    <Link to="/glossary" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Business Glossary</Link>
                    <Link to="/tools/assessment" className="block py-2 text-sm text-slate-600 dark:text-slate-300 font-medium text-primary-600 dark:text-primary-400">Maturity Assessment</Link>
                    <Link to="/tools/needs-analysis" className="block py-2 text-sm text-slate-600 dark:text-slate-300 font-medium text-primary-600 dark:text-primary-400">Solution Finder</Link>
                    <Link to="/roadmap" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Product Roadmap</Link>
                    <Link to="/tools/roi-calculator" className="block py-2 text-sm text-slate-600 dark:text-slate-300">ROI Calculator</Link>
                    <Link to="/tools/pricing-calculator" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Pricing Calculator</Link>
                    <Link to="/tools/migration-center" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Migration Center</Link>
                    <Link to="/tools/comparison" className="block py-2 text-sm text-slate-600 dark:text-slate-300">System Comparison</Link>
                    <Link to="/download" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Download App</Link>
                    <Link to="/docs" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Help & API Docs</Link>
                    <Link to="/status" className="block py-2 text-sm text-slate-600 dark:text-slate-300">System Status</Link>
                  </div>
                )}
              </div>

              {/* Mobile Company Accordion */}
              <div>
                <button 
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
                  aria-expanded={mobileCompanyOpen}
                >
                  Company
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileCompanyOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
                    <Link to="/about" className="block py-2 text-sm text-slate-600 dark:text-slate-300">About Us</Link>
                    <Link to="/why-bizops" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Why BizOps?</Link>
                    <Link to="/careers" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Careers</Link>
                    <Link to="/trust" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Trust & Security</Link>
                    <Link to="/media-kit" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Media Kit</Link>
                    <Link to="/partners" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Partners</Link>
                    <Link to="/partners/directory" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Partner Directory</Link>
                    <Link to="/partners/apply" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Become a Partner</Link>
                    <Link to="/partners/startup" className="block py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all">Startup Program</Link>
                    <Link to="/contact" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Contact</Link>
                  </div>
                )}
              </div>

              <Link to="/login" className="text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-t border-slate-100 dark:border-slate-800 mt-2 block">Login</Link>
              <div className="pt-2 block">
                <Button fullWidth onClick={openDemo}>Book a Demo</Button>
              </div>
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
};

export default Navbar;
