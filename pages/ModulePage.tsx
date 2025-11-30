import React, { useLayoutEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; 
import { modulesData, capabilitiesData, integrationsData } from '../data/content';
import type { ModuleData } from '../types';
import Button from '../components/Button';
import Badge from '../components/Badge';
import CardSlider from '../components/CardSlider';
import Card from '../components/Card';
import { 
  Check, Smartphone, ArrowRight, ChevronRight,
  Users, TrendingUp, Package, Briefcase, MessageSquare, AlertTriangle, Handshake, Sparkles, Code, Server, Cloud,
  Phone, FileCheck, RefreshCw, Lock, ShieldCheck, Layers, Zap,
  HelpCircle, Share2, Globe, Layout, PieChart,
  UserCheck, Calculator, GraduationCap, Heart, // Explicitly importing HR icons for safety
  Receipt, Tag, Landmark, Truck, ClipboardCheck, MessageCircle, Database, // Ops & Finance icons
  BarChart2, Search, AlertOctagon, Target, MapPin, CalendarRange, FileText, // Sales & Ops icons
  GitMerge, History, EyeOff, Hourglass, Mail, WifiOff, Building, UserPlus, Headphones, Radio, Terminal, Key, User, Plus, Link as LinkIcon, Quote // Governance & Tech icons
} from 'lucide-react';
import SEO from '../components/SEO';

// Motion Components
import { CounterUp } from '../components/ui/motion-scroll';
import { BouncyButton } from '../components/ui/motion-button';
import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS } from '../utils/animation';

// Generic Fallback Components
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
           <ChevronRight className="w-5 h-5" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const fallbackTestimonial = {
  quote: "Sistem ini mengubah cara kami bekerja. Sangat intuitif dan powerful.",
  author: "Budi Santoso",
  role: "CEO at Teknologi Maju",
  avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff"
};

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const location = useLocation();

  // Scroll to top on mount/change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [moduleId]);

  // Determine the base path for breadcrumbs and related links
  let basePath = '/platform';
  let categoryLabel = 'Platform';
  let categoryPath = '/platform';

  if (location.pathname.includes('/platform/modules/')) {
    basePath = '/platform/modules';
    categoryLabel = 'Modules';
    categoryPath = '/platform'; 
  } else if (location.pathname.includes('/platform/capabilities/')) {
    basePath = '/platform/capabilities';
    categoryLabel = 'Capabilities';
    categoryPath = '/platform';
  } else if (location.pathname.includes('/platform/technologies/')) {
    basePath = '/platform/technologies';
    categoryLabel = 'Technologies';
    categoryPath = '/platform/technologies/architecture';
  } else if (location.pathname.includes('/technology/architecture')) {
     basePath = '/platform/technologies';
  }

  // Combine lookup: Search in modulesData first, then capabilitiesData
  const data: ModuleData | null = moduleId ? (modulesData[moduleId] || capabilitiesData[moduleId]) as ModuleData : null;

  // Use dynamic testimonial from data or fallback
  const testimonial = data?.testimonial || fallbackTestimonial;

  // Smart Related Modules Logic
  const getRelatedModules = (currentId: string) => {
    const allModulesAndCapabilities = [
      ...Object.entries(modulesData).map(([key, val]) => ({ id: key, ...val, type: 'module' })),
      ...Object.entries(capabilitiesData).map(([key, val]) => ({ id: key, ...val, type: 'capability' })),
    ];

    const filtered = allModulesAndCapabilities.filter(item => item.id !== currentId);

    if (currentId === 'hr') return filtered.filter(m => ['finance', 'operations', 'sales'].includes(m.id)).slice(0, 3);
    if (currentId === 'finance') return filtered.filter(m => ['sales', 'supply-chain', 'hr'].includes(m.id)).slice(0, 3);
    if (currentId === 'sales') return filtered.filter(m => ['finance', 'supply-chain', 'operations'].includes(m.id)).slice(0, 3);
    if (currentId === 'supply-chain') return filtered.filter(m => ['sales', 'finance', 'operations'].includes(m.id)).slice(0, 3);
    if (currentId === 'operations') return filtered.filter(m => ['hr', 'finance', 'supply-chain'].includes(m.id)).slice(0, 3);
    if (currentId === 'integration') return filtered.filter(m => ['self-hosted', 'automation-ai', 'analytics'].includes(m.id)).slice(0, 3);
    if (currentId === 'self-hosted') return filtered.filter(m => ['integration', 'automation-ai', 'multi-company'].includes(m.id)).slice(0, 3);

    return filtered.slice(0, 3);
  };

  const relatedModules = moduleId ? getRelatedModules(moduleId) : [];

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-slate-950">
        <SEO title="Content Not Found" />
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Content Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-4">The requested page could not be found.</p>
        <Link to="/platform"><Button>Back to Platform</Button></Link>
      </div>
    );
  }

  const Icon = data.icon || HelpCircle;

  // JSON-LD Structured Data
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `BizOps ${data.title}`,
    "headline": data.subtitle,
    "description": data.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Android, iOS",
    "offering": {
      "@type": "Offer",
      "price": "2500000",
      "priceCurrency": "IDR",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "124"
    },
    "featureList": data.features.map((f) => f.title).join(", "),
    "publisher": {
      "@type": "Organization",
      "name": "PT Divistant Teknologi Indonesia"
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950">
      <SEO 
        title={data.metaTitle || data.title} 
        description={data.metaDesc || data.description} 
        structuredData={softwareSchema}
      />

      {/* 1. Hero Section (Centered Tech Style) */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 border-b border-slate-800">
         {/* Abstract Tech Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumbs */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide uppercase mb-10 text-slate-400"
            >
               <Link to="/" className="hover:text-white transition-colors">Home</Link>
               <ChevronRight className="w-3 h-3 text-slate-600" />
               <Link to="/platform" className="hover:text-white transition-colors">Platform</Link>
               {categoryLabel !== 'Platform' && (
                  <>
                     <ChevronRight className="w-3 h-3 text-slate-600" />
                     <Link to={categoryPath} className="hover:text-white transition-colors">{categoryLabel}</Link>
                  </>
               )}
               <ChevronRight className="w-3 h-3 text-slate-600" />
               <span className="text-primary-400">{data.title}</span>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center p-5 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl mb-10 shadow-2xl ring-1 ring-white/10 group hover:scale-105 transition-transform duration-500"
            >
               <Icon className="w-16 h-16 text-primary-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]" />
            </motion.div>
            
            <motion.h1 
              variants={FADE_UP_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-sm font-display"
            >
               {data.subtitle}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
               {data.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
               <Link to="/demo">
                  <BouncyButton className="h-16 px-10 text-lg font-bold shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:shadow-[0_0_50px_rgba(14,165,233,0.4)] transition-all bg-primary-600 hover:bg-primary-500 border-none">
                     {data.cta?.buttonLabel || "Jadwalkan Demo Live"}
                  </BouncyButton>
               </Link>
               <Link to="/pricing-calculator">
                  <Button variant="outline-white" size="lg" className="h-16 px-10 text-lg font-medium border-slate-700 hover:bg-slate-800 hover:border-slate-600 text-slate-300 hover:text-white">
                     Hitung Estimasi
                  </Button>
               </Link>
            </motion.div>
         </div>
      </section>

      {/* 2. Impact Metrics (New) */}
      {data.metrics && (
         <section className="relative -mt-16 z-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.metrics.map((metric, idx) => {
                     // Parse value for CounterUp (remove %, +, etc)
                     const numericValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''));
                     const prefix = metric.value.match(/^[^0-9]*/) ? metric.value.match(/^[^0-9]*/)![0] : '';
                     const suffix = metric.value.match(/[^0-9]*$/) ? metric.value.match(/[^0-9]*$/)![0] : '';
                     const isNumber = !isNaN(numericValue);

                     return (
                       <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300"
                       >
                          {isNumber ? (
                            <CounterUp to={numericValue} label={metric.label} prefix={prefix} suffix={suffix} />
                          ) : (
                            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 mb-2">
                               {metric.value}
                            </div>
                          )}
                          {!isNumber && <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{metric.label}</div>}
                       </motion.div>
                     );
                  })}
               </div>
            </div>
         </section>
      )}

      {/* 3. Problem & Solution (New) */}
      {data.problems && (
         <section className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                     <Badge variant="outline" className="mb-6">The Challenge</Badge>
                     <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        Tantangan {data.title} Tradisional
                     </h3>
                     <div className="space-y-8">
                        {data.problems.map((prob, idx) => {
                           const ProbIcon = prob.icon || AlertTriangle;
                           return (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-4"
                              >
                                 <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                                    <ProbIcon className="w-6 h-6 text-red-500" />
                                 </div>
                                 <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{prob.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{prob.desc}</p>
                                 </div>
                              </motion.div>
                           );
                        })}
                     </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative"
                  >
                     <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 dark:bg-primary-900/50 rounded-full blur-2xl"></div>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Solusi BizOps</h3>
                     <ul className="space-y-4 relative z-10">
                        {data.features.slice(0, 4).map((feat, i) => (
                           <li key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="font-medium text-slate-700 dark:text-slate-300">{feat.title}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               </div>
            </div>
         </section>
      )}

      {/* 4. Features Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Fitur Unggulan</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Dirancang untuk menyelesaikan masalah nyata, bukan sekadar fitur kosmetik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, index) => {
               const FeatureIcon = feature.icon || Check;
               return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 group"
                  >
                     <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors text-primary-600 group-hover:text-white">
                        <FeatureIcon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {feature.desc}
                     </p>
                  </motion.div>
               );
            })}
          </div>
        </div>
      </section>

      {/* 5. Mobile Advantage (Conditional) */}
      {data.mobileAdvantage && (
         <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary-900/40 to-transparent pointer-events-none"></div>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 relative z-10">
                     <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-bold mb-6 uppercase tracking-wider">
                           <Smartphone className="w-4 h-4" /> Mobile Native
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                           {data.mobileAdvantage.title}
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                           {data.mobileAdvantage.desc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <Button variant="white" className="gap-2">
                              Download App <ArrowRight className="w-4 h-4" />
                           </Button>
                        </div>
                     </div>
                     {/* Phone Mockup (CSS only) */}
                     <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                     >
                        <div className="relative w-72 h-[500px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                           {/* Notch */}
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                           {/* Screen Content */}
                           <div className="w-full h-full bg-slate-900 flex flex-col">
                              {/* Header */}
                              <div className="bg-slate-800 h-20 p-6 flex items-end">
                                 <div className="text-white font-bold text-lg">{data.mobileAdvantage.title}</div>
                              </div>
                              {/* Body */}
                              <div className="p-4 space-y-4">
                                 <div className="h-32 bg-slate-800 rounded-xl animate-pulse"></div>
                                 <div className="h-16 bg-slate-800 rounded-xl animate-pulse delay-75"></div>
                                 <div className="h-16 bg-slate-800 rounded-xl animate-pulse delay-100"></div>
                                 <div className="h-16 bg-slate-800 rounded-xl animate-pulse delay-150"></div>
                              </div>
                              {/* FAB */}
                              <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary-600 rounded-full shadow-lg flex items-center justify-center">
                                 <Plus className="w-6 h-6 text-white" />
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>
      )}

      {/* 6. Integration / Connections */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <Badge variant="outline" className="mb-4">Ecosystem</Badge>
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {moduleId === 'integration' ? 'Direktori Integrasi' : 'Integrasi Tanpa Batas'}
               </h2>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  {moduleId === 'integration' 
                     ? 'Jelajahi berbagai aplikasi dan layanan yang sudah terhubung dengan ekosistem BizOps.'
                     : 'Data mengalir otomatis antar modul. Hilangkan duplikasi input dan rekonsiliasi manual.'}
               </p>
            </div>

            {moduleId === 'integration' ? (
               // MARKETPLACE GRID VIEW
               <div className="space-y-12">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-2xl flex items-start gap-4 mb-12">
                     <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg text-blue-600 dark:text-blue-300">
                        <Handshake className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Assisted Integration Required</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                           Integrasi di bawah ini memerlukan konfigurasi teknis oleh tim expert kami (Managed Integration). Kami akan membantu mapping data dan setup konektor untuk memastikan alur bisnis Anda berjalan lancar.
                        </p>
                     </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {integrationsData.map((cat, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                              <Layers className="w-5 h-5 text-primary-500" />
                              {cat.category}
                           </h3>
                           <ul className="space-y-4">
                              {cat.apps.map((app, i) => (
                                 <li key={i} className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <div className="flex items-center justify-between">
                                       <span className="font-bold text-slate-700 dark:text-slate-300">{app.name}</span>
                                       <Badge size="sm" variant="outline" className="text-[10px] py-0 h-5">Managed</Badge>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{app.desc}</p>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            ) : (
               // CIRCUIT VIEW (Standard)
               <div className="relative">
                  {/* Connectors Visual */}
                  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-10"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {data.connections?.map((conn, idx) => (
                        <motion.div 
                           key={idx}
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: idx * 0.1 }}
                           className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 relative group hover:-translate-y-1 transition-transform"
                        >
                           <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-slate-50 dark:border-slate-900 group-hover:border-primary-50 dark:group-hover:border-primary-900 group-hover:bg-primary-600 group-hover:text-white transition-colors text-slate-400">
                              <LinkIcon className="w-4 h-4" />
                           </div>
                           <div className="mt-6 text-center">
                              <div className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-2">Connects to</div>
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{conn.target}</h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                 {conn.desc}
                              </p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </section>

      {/* 7. Testimonial (Re-ordered above FAQ) */}
      <section className="py-24 bg-white dark:bg-slate-950">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-primary-200 dark:text-primary-900 mx-auto mb-8" />
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
               "{testimonial.quote}"
            </h2>
            <div className="flex items-center justify-center gap-4">
               <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border-2 border-primary-500"
               />
               <div className="text-left">
                  <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. FAQ */}
      {data.faqs && (
         <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
               </div>
               <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-2 sm:p-6">
                  {data.faqs.map((faq, i) => (
                     <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* 9. Related Modules (Carousel Style) */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Eksplorasi Modul Lainnya</h2>
               <p className="text-slate-500 dark:text-slate-400">Bangun ekosistem bisnis yang lengkap bertahap.</p>
            </div>
            
            <CardSlider desktopClassName="grid grid-cols-1 md:grid-cols-3 gap-6">
               {relatedModules.map((mod, idx) => {
                  // NEW LOGIC FOR RELATED LINKS
                  let linkPath = '';
                  if (mod.type === 'module') {
                     linkPath = `/platform/modules/${mod.id}`;
                  } else if (mod.id === 'integration' || mod.id === 'self-hosted') {
                     linkPath = `/platform/technologies/${mod.id}`;
                  } else {
                     linkPath = `/platform/capabilities/${mod.id}`;
                  }

                  const ModIcon = mod.icon || Package;

                  return (
                  <Link key={idx} to={linkPath} className="group h-full">
                     <Card className="h-full border border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all" padding="lg">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
                           <ModIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{mod.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                           {mod.description}
                        </p>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                           Lihat Detail <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                     </Card>
                  </Link>
                  );
               })}
            </CardSlider>
         </div>
      </section>

      {/* 10. CTA Final */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               {data.cta?.text || "Siap untuk transformasi digital?"}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/demo">
                  <BouncyButton className="h-16 px-10 text-xl shadow-xl shadow-primary-500/20 bg-primary-600 hover:bg-primary-500 border-none text-white">
                     {data.cta?.buttonLabel || "Mulai Sekarang"}
                  </BouncyButton>
               </Link>
               <Link to="/contact">
                  <Button variant="outline-white" size="lg" className="h-16 px-10 text-xl">Hubungi Sales</Button>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ModulePage;
