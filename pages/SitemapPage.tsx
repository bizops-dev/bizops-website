
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Layers, Users, DollarSign, Briefcase, TrendingUp, Package, BarChart, 
  Zap, Building, Globe, Smartphone, MessageSquare, Plug, Server, 
  HardHat, ShoppingCart, UserCheck, Factory, Star,
  Wrench, Code, GraduationCap, Headphones,
  BookOpen, Smile, Video, Calculator, FileSpreadsheet, Activity, HelpCircle, FileCode, Signal, Download,
  Heart, ShieldCheck, Newspaper, Mail, Handshake, Search, Map, Rocket, Lock, MousePointer, BrainCircuit, Calendar
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const siteStructure = [
    {
      category: "Platform",
      links: [
        { label: "Overview", path: "/platform" },
        { label: "Human Capital (HR)", path: "/platform/hr", icon: Users },
        { label: "Finance & Control", path: "/platform/finance", icon: DollarSign },
        { label: "Operations & Project", path: "/platform/operations", icon: Briefcase },
        { label: "Sales & Growth", path: "/platform/sales", icon: TrendingUp },
        { label: "Supply Chain", path: "/platform/supply-chain", icon: Package },
        { label: "Governance & Insight", path: "/platform/governance", icon: BarChart },
      ]
    },
    {
      category: "Capabilities",
      links: [
        { label: "Automation & AI", path: "/platform/automation-ai", icon: Zap },
        { label: "Multi-Company", path: "/platform/multi-company", icon: Building },
        { label: "Self-Service Portals", path: "/platform/portals", icon: Globe },
        { label: "Analytics & Reports", path: "/platform/analytics", icon: BarChart },
        { label: "Native Mobile App", path: "/capabilities/mobile", icon: Smartphone },
        { label: "Contextual Chat", path: "/capabilities/collaboration", icon: MessageSquare },
        { label: "Integrations Library", path: "/integrations", icon: Plug },
        { label: "Self-Hosted Deployment", path: "/capabilities/self-hosted", icon: Server },
        { label: "Interactive Product Tour", path: "/tour", icon: MousePointer },
      ]
    },
    {
      category: "Solutions",
      links: [
        { label: "Overview", path: "/solutions" },
        { label: "Construction & Engineering", path: "/solutions/construction", icon: HardHat },
        { label: "Distribution & Retail", path: "/solutions/retail", icon: ShoppingCart },
        { label: "Services & Outsourcing", path: "/solutions/outsourcing", icon: UserCheck },
        { label: "Professional Consulting", path: "/solutions/consulting", icon: Briefcase },
        { label: "Manufacturing", path: "/solutions/manufacturing", icon: Factory },
        { label: "Enterprise & Public Sector", path: "/solutions/enterprise", icon: Building },
        { label: "For CEO & Founders", path: "/role/ceo", icon: Star },
        { label: "For HR Leaders", path: "/role/hr", icon: Users },
        { label: "For Finance Leaders", path: "/role/finance", icon: DollarSign },
        { label: "For IT Managers", path: "/role/it", icon: Server },
        { label: "For Ops Managers", path: "/role/ops", icon: Activity },
      ]
    },
    {
      category: "Services",
      links: [
        { label: "Overview", path: "/services" },
        { label: "Implementation", path: "/services/implementation", icon: Wrench },
        { label: "Custom Development", path: "/services/custom-dev", icon: Code },
        { label: "Training & Adoption", path: "/services/training", icon: GraduationCap },
        { label: "Support & Maintenance", path: "/services/support", icon: Headphones },
      ]
    },
    {
      category: "Resources",
      links: [
        { label: "Blog & Insights", path: "/blog", icon: BookOpen },
        { label: "Customer Stories", path: "/customers", icon: Smile },
        { label: "Events & Webinars", path: "/events", icon: Video },
        { label: "Product Roadmap", path: "/roadmap", icon: Map },
        { label: "Interactive Product Tour", path: "/tour", icon: MousePointer },
        { label: "ROI Calculator", path: "/resources/roi", icon: Calculator },
        { label: "Migration Center", path: "/resources/migration", icon: FileSpreadsheet },
        { label: "Comparison Guides", path: "/resources/compare", icon: Activity },
        { label: "Help Center", path: "/docs", icon: HelpCircle },
        { label: "API Reference", path: "/docs", icon: FileCode },
        { label: "System Requirements", path: "/docs/sysreq", icon: Server },
        { label: "Download App", path: "/download", icon: Download },
        { label: "System Status", path: "/status", icon: Signal },
        { label: "Business Glossary", path: "/glossary", icon: BookOpen },
      ]
    },
    {
      category: "Company",
      links: [
        { label: "About Us", path: "/about", icon: Building },
        { label: "Why BizOps?", path: "/why-bizops", icon: Heart },
        { label: "Careers", path: "/careers", icon: Users },
        { label: "Trust & Security", path: "/trust", icon: ShieldCheck },
        { label: "Media Kit", path: "/media-kit", icon: Newspaper },
        { label: "Contact", path: "/contact", icon: Mail },
        { label: "Partners Program", path: "/partners", icon: Handshake },
        { label: "Apply Partner", path: "/partners/apply" },
        { label: "Startup Program", path: "/partners/startup", icon: Rocket },
        { label: "Book a Demo", path: "/demo", icon: Calendar },
        { label: "Login Portal", path: "/login", icon: Lock },
      ]
    },
    {
      category: "Legal & Compliance",
      links: [
        { label: "Privacy Policy", path: "/legal/privacy" },
        { label: "Privacy Center (Data Rights)", path: "/legal/data-rights" },
        { label: "Data Processing Agreement", path: "/legal/dpa" },
        { label: "AI Ethics Policy", path: "/legal/ai-ethics", icon: BrainCircuit },
        { label: "Terms of Service", path: "/legal/terms" },
        { label: "SLA", path: "/legal/sla" },
        { label: "Cookie Preferences", path: "/legal/cookies" },
        { label: "Accessibility", path: "/accessibility" },
        { label: "Report Vulnerability", path: "/security/report" },
      ]
    }
  ];

  const filteredStructure = useMemo(() => {
    if (!searchQuery) return siteStructure;
    
    return siteStructure.map(section => ({
      ...section,
      links: section.links.filter(link => 
        link.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
        section.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(section => section.links.length > 0);
  }, [searchQuery, siteStructure]);

  return (
    <div className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <SEO title="Sitemap | BizOps Directory" description="Daftar lengkap halaman website BizOps. Navigasi mudah untuk Platform, Solutions, dan Resources." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Directory & Sitemap</h1>
           <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Jelajahi seluruh ekosistem BizOps. Temukan halaman produk, panduan teknis, dan informasi perusahaan dalam satu tampilan terstruktur.
           </p>
           
           <div className="mt-8 relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                 <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                 type="text"
                 placeholder="Filter pages..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="block w-full pl-11 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm"
              />
           </div>
        </div>

        {filteredStructure.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-y-12">
             {filteredStructure.map((section, idx) => (
                <div key={idx} className="break-inside-avoid">
                   <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-100 dark:border-slate-800 uppercase tracking-wider text-xs flex items-center justify-between">
                      {section.category}
                      <span className="text-slate-400 text-[10px] font-normal bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                        {section.links.length}
                      </span>
                   </h2>
                   <ul className="space-y-3">
                      {section.links.map((link, i) => (
                         <li key={i}>
                            <Link to={link.path} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group py-1">
                               {link.icon ? (
                                  <link.icon className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 transition-colors shrink-0" />
                               ) : (
                                  <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full group-hover:bg-primary-50 transition-colors shrink-0 ml-1.5"></div>
                               )}
                               <span className="text-sm font-medium group-hover:underline decoration-slate-200 dark:decoration-slate-700 underline-offset-4 decoration-1">{link.label}</span>
                            </Link>
                         </li>
                      ))}
                   </ul>
                </div>
             ))}
          </div>
        ) : (
          <div className="text-center py-20">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <Search className="w-8 h-8 text-slate-400" />
             </div>
             <h3 className="text-lg font-medium text-slate-900 dark:text-white">No pages found</h3>
             <p className="text-slate-500 dark:text-slate-400">Try adjusting your search query.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SitemapPage;
