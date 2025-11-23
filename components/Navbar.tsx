
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Users, DollarSign, Briefcase, TrendingUp, Package, BarChart, BookOpen, Calculator, Smile, Server, Activity, Handshake, Smartphone, Shield, Share2, Layers, Plug, MessageSquare, Video, FileCode, Star, Cloud, FileSpreadsheet, Search, Wrench, Code, GraduationCap, Headphones, HelpCircle, FileText, Building, ShieldCheck, Newspaper, Mail, Zap, Globe, BarChart2, Monitor, Heart, Download, Signal, Map, Factory, UserCheck, ShoppingCart, HardHat, Rocket, FileInput, Calendar, MousePointer } from 'lucide-react';
import Button from './Button';
import NotificationCenter from './NotificationCenter';
import DemoModal from './DemoModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  // Mobile accordion states
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800' 
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              
              {/* MENU 1: PLATFORM */}
              <div className="group relative h-full flex items-center">
                <Link to="/platform" className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm flex items-center gap-1 transition-colors py-2 px-1">
                  Platform <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
                <div className="absolute top-full left-0 mt-0 w-[750px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left p-0 z-50 translate-y-2 group-hover:translate-y-0 grid grid-cols-2 overflow-hidden">
                  {/* Left Column: Modules */}
                  <div className="p-6 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800">
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Core Modules
                     </div>
                     <div className="grid grid-cols-1 gap-2">
                        <Link to="/platform/hr" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="mt-1 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/50 flex-shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Human Capital</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Payroll, Attendance, LMS</div>
                          </div>
                        </Link>
                        <Link to="/platform/finance" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="mt-1 w-8 h-8 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded flex items-center justify-center group-hover/item:bg-green-100 dark:group-hover/item:bg-green-900/50 flex-shrink-0">
                            <DollarSign className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Finance & Control</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Accounting, Expense, Asset</div>
                          </div>
                        </Link>
                        <Link to="/platform/operations" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="mt-1 w-8 h-8 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center group-hover/item:bg-purple-100 dark:group-hover/item:bg-purple-900/50 flex-shrink-0">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Operations & Project</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Timesheet, S-Curve, Task</div>
                          </div>
                        </Link>
                        <Link to="/platform/sales" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="mt-1 w-8 h-8 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded flex items-center justify-center group-hover/item:bg-amber-100 dark:group-hover/item:bg-amber-900/50 flex-shrink-0">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Commercial & Sales</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">CRM, Quotation, POS</div>
                          </div>
                        </Link>
                        <Link to="/platform/supply-chain" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="mt-1 w-8 h-8 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded flex items-center justify-center group-hover/item:bg-red-100 dark:group-hover/item:bg-red-900/50 flex-shrink-0">
                            <Package className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Supply Chain</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Inventory, Warehouse, BOM</div>
                          </div>
                        </Link>
                        <Link to="/platform/governance" className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                          <div className="mt-1 w-8 h-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded flex items-center justify-center group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 flex-shrink-0">
                            <BarChart className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">Governance & Insight</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">BI Dashboard, Audit Trail</div>
                          </div>
                        </Link>
                     </div>
                  </div>

                  {/* Right Column: Capabilities */}
                  <div className="p-6 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col">
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4" /> Capabilities
                     </div>
                     <div className="space-y-1">
                        <Link to="/platform/automation-ai" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Automation & AI
                        </Link>
                        <Link to="/platform/multi-company" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Multi-Company Structure
                        </Link>
                        <Link to="/platform/portals" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Self-Service Portals
                        </Link>
                        <Link to="/platform/analytics" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Analytics & Report Builder
                        </Link>
                        <Link to="/capabilities/mobile" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Native Mobile App
                        </Link>
                        <Link to="/capabilities/collaboration" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Contextual Chat (Raven)
                        </Link>
                        <Link to="/integrations" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Integrations Library
                        </Link>
                        <Link to="/capabilities/self-hosted" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">
                           Self-Hosted Deployment
                        </Link>
                     </div>
                     
                     <div className="mt-auto pt-4">
                        <Link to="/tour" className="group/tour block p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center group-hover/tour:scale-110 transition-transform">
                                    <MousePointer className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/tour:text-primary-600 transition-colors">Interactive Product Tour</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Simulasi produk tanpa login</div>
                                </div>
                            </div>
                        </Link>
                        <div className="mt-3 text-right">
                            <Link to="/platform" className="text-xs font-bold text-slate-500 hover:text-primary-600 hover:underline inline-flex items-center gap-1">
                               View All Features <Share2 className="w-3 h-3" />
                            </Link>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* MENU 2: SOLUTIONS */}
              <div className="group relative h-full flex items-center">
                 <Link to="/solutions" className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm flex items-center gap-1 transition-colors py-2 px-1">
                  Solutions <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
                <div className="absolute top-full left-0 mt-0 w-[550px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left p-0 z-50 translate-y-2 group-hover:translate-y-0 grid grid-cols-2 overflow-hidden">
                   <div className="p-4 bg-white dark:bg-slate-900">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-2 mb-2">By Industry</div>
                      <div className="space-y-1">
                          <Link to="/solutions/construction" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <HardHat className="w-4 h-4 text-slate-400" /> Construction
                          </Link>
                          <Link to="/solutions/retail" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <ShoppingCart className="w-4 h-4 text-slate-400" /> Retail & Distribution
                          </Link>
                          <Link to="/solutions/outsourcing" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <UserCheck className="w-4 h-4 text-slate-400" /> Outsourcing
                          </Link>
                          <Link to="/solutions/manufacturing" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Factory className="w-4 h-4 text-slate-400" /> Manufacturing
                          </Link>
                          <Link to="/solutions/consulting" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Briefcase className="w-4 h-4 text-slate-400" /> Professional Services
                          </Link>
                          <Link to="/solutions/enterprise" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Building className="w-4 h-4 text-slate-400" /> Enterprise & Holding
                          </Link>
                      </div>
                   </div>
                   <div className="p-4 bg-slate-50/50 dark:bg-slate-800/50">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-2 mb-2">By Role</div>
                      <div className="space-y-1">
                          <Link to="/role/ceo" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">CEO & Founders</Link>
                          <Link to="/role/finance" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">Finance Leaders</Link>
                          <Link to="/role/hr" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">HR Managers</Link>
                          <Link to="/role/it" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">IT Managers</Link>
                          <Link to="/role/ops" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-sm rounded-lg transition-all">Ops Managers</Link>
                      </div>
                   </div>
                </div>
              </div>

              {/* MENU 3: SERVICES */}
              <div className="group relative h-full flex items-center">
                <Link to="/services" className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm flex items-center gap-1 transition-colors py-2 px-1">
                  Services <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
                <div className="absolute top-full left-0 mt-0 w-[280px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left p-2 z-50 translate-y-2 group-hover:translate-y-0">
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

              {/* MENU 4: RESOURCES (MEGA MENU) */}
              <div className="group relative h-full flex items-center">
                 <button className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm flex items-center gap-1 focus:outline-none transition-colors py-2 px-1">
                  Resources <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute top-full right-0 mt-0 w-[600px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right p-0 z-50 translate-y-2 group-hover:translate-y-0 grid grid-cols-2 overflow-hidden">
                   
                   {/* Column 1: Knowledge & Insights */}
                   <div className="p-5 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Insights</div>
                      <div className="space-y-1">
                          <Link to="/blog" className="flex items-start gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <div className="mt-0.5 text-slate-400"><BookOpen className="w-4 h-4" /></div>
                             <div>
                                <span className="font-semibold block">Blog & News</span>
                                <span className="text-xs text-slate-500">Latest industry news and tips</span>
                             </div>
                          </Link>
                          <Link to="/customers" className="flex items-start gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <div className="mt-0.5 text-slate-400"><Smile className="w-4 h-4" /></div>
                             <div>
                                <span className="font-semibold block">Customer Stories</span>
                                <span className="text-xs text-slate-500">Success stories from our clients</span>
                             </div>
                          </Link>
                          <Link to="/events" className="flex items-start gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <div className="mt-0.5 text-slate-400"><Video className="w-4 h-4" /></div>
                             <div>
                                <span className="font-semibold block">Events & Webinars</span>
                                <span className="text-xs text-slate-500">Join our upcoming sessions</span>
                             </div>
                          </Link>
                          <Link to="/glossary" className="flex items-start gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <div className="mt-0.5 text-slate-400"><BookOpen className="w-4 h-4" /></div>
                             <div>
                                <span className="font-semibold block">Business Glossary</span>
                                <span className="text-xs text-slate-500">ERP & Business Terms</span>
                             </div>
                          </Link>
                      </div>
                   </div>

                   {/* Column 2: Tools & Help */}
                   <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Tools & Help</div>
                      <div className="space-y-1">
                          <Link to="/roadmap" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Map className="w-4 h-4 text-slate-400" /> Product Roadmap
                          </Link>
                          <Link to="/resources/roi" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Calculator className="w-4 h-4 text-slate-400" /> ROI Calculator
                          </Link>
                          <Link to="/resources/migration" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <FileSpreadsheet className="w-4 h-4 text-slate-400" /> Migration Center
                          </Link>
                          <Link to="/resources/compare" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Activity className="w-4 h-4 text-slate-400" /> Comparison Guides
                          </Link>
                          <div className="h-px bg-slate-200 dark:bg-slate-700 my-1 mx-2"></div>
                          <Link to="/download" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Download className="w-4 h-4 text-slate-400" /> Download App
                          </Link>
                          <Link to="/docs" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <HelpCircle className="w-4 h-4 text-slate-400" /> Help & API Docs
                          </Link>
                          <Link to="/status" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">
                             <Signal className="w-4 h-4 text-slate-400" /> System Status
                          </Link>
                      </div>
                   </div>
                </div>
              </div>

              {/* MENU 5: COMPANY */}
              <div className="group relative h-full flex items-center">
                <button className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm flex items-center gap-1 focus:outline-none transition-colors py-2 px-1">
                  Company <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute top-full right-0 mt-0 w-[240px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right p-2 z-50 translate-y-2 group-hover:translate-y-0">
                   <Link to="/about" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">About Us</Link>
                   <Link to="/why-bizops" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">Why BizOps?</Link>
                   <Link to="/careers" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">Careers</Link>
                   <Link to="/trust" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">Trust & Security</Link>
                   <Link to="/media-kit" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">Media Kit</Link>
                   <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                   <Link to="/partners" className="block px-3 py-2 text-sm font-semibold text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all">Partner Program</Link>
                   <Link to="/partners/startup" className="block px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all">Startup Program</Link>
                   <Link to="/contact" className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all">Contact Us</Link>
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
                    <Link to="/platform/hr" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Human Capital</Link>
                    <Link to="/platform/finance" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Finance & Control</Link>
                    <Link to="/platform/operations" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Operations</Link>
                    <Link to="/platform/sales" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Sales & CRM</Link>
                    <Link to="/platform/supply-chain" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Supply Chain</Link>
                    <Link to="/platform/governance" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Governance & Insight</Link>
                    
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Capabilities</div>
                    
                    <Link to="/platform/automation-ai" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Automation & AI</Link>
                    <Link to="/platform/multi-company" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Multi-Company</Link>
                    <Link to="/platform/portals" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Portals</Link>
                    <Link to="/platform/analytics" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Analytics</Link>
                    <Link to="/capabilities/mobile" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Mobile App</Link>
                    <Link to="/capabilities/collaboration" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Contextual Chat</Link>
                    <Link to="/integrations" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Integrations Library</Link>
                    <Link to="/capabilities/self-hosted" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Self-Hosted</Link>
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
                    <Link to="/customers" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Customer Stories</Link>
                    <Link to="/events" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Events & Webinars</Link>
                    <Link to="/glossary" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Business Glossary</Link>
                    <Link to="/roadmap" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Product Roadmap</Link>
                    <Link to="/resources/roi" className="block py-2 text-sm text-slate-600 dark:text-slate-300">ROI Calculator</Link>
                    <Link to="/resources/migration" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Migration Center</Link>
                    <Link to="/resources/compare" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Comparison Guides</Link>
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
                    <Link to="/partners/startup" className="block py-2 text-sm text-slate-600 dark:text-slate-300">Startup Program</Link>
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
      </header>
    </>
  );
};

export default Navbar;
