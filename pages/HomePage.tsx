import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Lock, 
  PlayCircle, ArrowUpRight, ChevronRight
} from 'lucide-react';
import Button from '../components/Button';
import { 
  homeSolutions, homeIndustriesData, homeRolesData, 
  homeProblems, homeUVP, homeIntegrations, homeProcess 
} from '../data/content';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import CardSlider from '../components/CardSlider';
import Card from '../components/Card';
import Badge from '../components/Badge';

// Motion Components
import { StaggeredText } from '../components/ui/motion-text';
import { BouncyButton } from '../components/ui/motion-button';
import { InfiniteScrollLoop } from '../components/ui/motion-scroll';
import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS } from '../utils/animation';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(homeSolutions[0].id);
  const activeSolution = homeSolutions.find(s => s.id === activeTab) || homeSolutions[0];

  // Helper to convert object to array for mapping
  const industries = Object.entries(homeIndustriesData).map(([key, val]) => ({ id: key, ...val }));
  const roles = Object.entries(homeRolesData).map(([key, val]) => ({ id: key, ...val }));

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500">
      <SEO 
        title="BizOps ERP | Sistem Operasional Bisnis Terintegrasi" 
        description="BizOps ERP: Platform terintegrasi untuk HR, Finance, dan Supply Chain. Solusi ERP Indonesia yang aman, cepat, dan siap scale-up. Mulai gratis 14 hari."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "BizOps ERP",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "offers": {
             "@type": "Offer",
             "price": "0",
             "priceCurrency": "IDR",
             "description": "Free 14-day trial"
          },
          "aggregateRating": {
             "@type": "AggregateRating",
             "ratingValue": "4.8",
             "ratingCount": "520"
          },
          "publisher": {
            "@type": "Organization",
            "name": "PT Divistant Teknologi Indonesia",
            "url": "https://bizops.id"
          }
        }}
      />
      
      {/* 1. HERO SECTION (Redesigned) */}
      <div className="relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
             <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
             <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow delay-700"></div>
             <div className="absolute top-[40%] left-[60%] w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-pulse-slow delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Announcement Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 hover:scale-105 hover:border-primary-200 dark:hover:border-primary-900 transition-all cursor-default backdrop-blur-sm"
            >
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
               </span>
               <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                 New: AI-Powered Inventory Forecasting
               </span>
               <ArrowRight className="w-3 h-3 text-slate-400" />
            </motion.div>
            
            {/* Main Headline with Staggered Animation */}
            <div className="mb-8 max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <StaggeredText text="Satu Sistem Kendali untuk" className="flex w-full justify-center mb-2" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400">
                  Seluruh Operasional Bisnis.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p 
              variants={FADE_UP_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Tinggalkan spreadsheet yang terpisah-pisah. BizOps menyatukan HR, Finance, dan Supply Chain dalam satu platform yang aman, cepat, dan siap scale-up.
            </motion.p>

            {/* CTAs with Bouncy Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <Link to="/demo">
                <BouncyButton className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary-500/20">
                  Mulai Demo Gratis
                </BouncyButton>
              </Link>
              <Link to="/pricing-calculator">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <CalculatorIcon className="mr-2 w-5 h-5 text-slate-500" /> Simulasi Harga
                </Button>
              </Link>
            </motion.div>

            {/* Hero Visual / Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="relative max-w-5xl mx-auto mt-8 group"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>
               <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] transform transition-transform duration-700 group-hover:scale-[1.01] group-hover:shadow-[0_0_50px_-12px_rgba(37,99,235,0.25)]">
                  <OptimizedImage 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                    alt="Preview dashboard BizOps ERP yang menampilkan grafik performa finansial, status inventori, dan ringkasan HR secara real-time"
                    width={1920}
                    height={1080}
                    priority={true}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay UI Badge - retained for context */}
                  <div className="absolute top-4 left-4 z-30 px-3 py-1 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-md text-[10px] text-slate-300 font-mono flex items-center gap-2 shadow-lg">
                    <Lock className="w-3 h-3 text-green-400" /> bizops.id/dashboard
                  </div>
               </div>
            </motion.div>

            {/* Social Proof Logos - Updated to match Customer Stories */}
            <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
               <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
                  Dipercaya oleh Pemimpin Industri
               </p>
               <InfiniteScrollLoop speed={30} className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:opacity-100">
                  {['Divistant', 'Dikstra', 'Arena Rasa Nusantara', 'Aero Travel Indonesia', 'TechCorp', 'BuildCo'].map(brand => (
                     <span key={brand} className="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-200 tracking-tighter whitespace-nowrap mx-4 cursor-default">{brand}</span>
                  ))}
               </InfiniteScrollLoop>
            </div>
          </div>
      </div>

      {/* 2. PROBLEMS SECTION (Pain Points) */}
      <section aria-labelledby="problems-heading" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
         {/* Subtle Pattern Background */}
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 id="problems-heading" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                   Mengapa Bisnis Anda <span className="text-red-500">Stuck?</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                   Pertumbuhan bisnis seringkali terhambat bukan karena kurangnya penjualan, tapi karena kekacauan operasional internal.
                </p>
            </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                {homeProblems.map((prob, idx) => (
                   <Card key={idx} className="h-full border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900" padding="lg">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${prob.bg} ring-1 ring-inset ring-black/5 dark:ring-white/10`}>
                         <prob.icon className={`w-7 h-7 ${prob.color}`} aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prob.title}</h3>
                      <p className="text-xs font-bold text-red-500 dark:text-red-400 mb-4 uppercase tracking-wide">{prob.subtitle}</p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                         {prob.desc}
                      </p>
                   </Card>
                ))}
             </div>
         </div>
      </section>

      {/* 3. SOLUTIONS SECTION (The Fix) */}
      <section aria-labelledby="solutions-heading" className="py-24 bg-slate-900 relative overflow-hidden">
         {/* Abstract BG */}
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-900 to-slate-950 pointer-events-none"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
               <div className="max-w-2xl">
                  <Badge variant="outline-white" className="mb-4">BizOps Platform</Badge>
                  <h2 id="solutions-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                     Satu Solusi, <br />
                     <span className="text-primary-400">Tak Terbatas Kemungkinan.</span>
                  </h2>
                  <p className="text-slate-400 text-lg">
                     Modul yang saling berbicara satu sama lain. Input di satu tempat, terupdate di mana-mana.
                  </p>
               </div>
               <Link to="/platform">
                  <Button variant="white" className="group">
                     Lihat Semua Modul <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
               {/* Navigation Tabs */}
               <div className="lg:col-span-4 space-y-3" role="tablist" aria-label="Solution categories">
                  {homeSolutions.map((sol) => (
                     <button
                        key={sol.id}
                        onClick={() => setActiveTab(sol.id)}
                        role="tab"
                        aria-selected={activeTab === sol.id}
                        aria-controls={`panel-${sol.id}`}
                        id={`tab-${sol.id}`}
                        className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                           activeTab === sol.id 
                           ? 'bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 shadow-lg translate-x-2' 
                           : 'hover:bg-slate-800/30 border border-transparent text-slate-400'
                        }`}
                     >
                        <div className="flex items-center gap-4">
                           <div className={`p-2 rounded-lg transition-colors ${activeTab === sol.id ? sol.bg : 'bg-slate-800 group-hover:bg-slate-700'}`}>
                              <sol.icon className={`w-5 h-5 ${activeTab === sol.id ? sol.color : 'text-slate-500'}`} aria-hidden="true" />
                           </div>
                           <div>
                              <div className={`font-bold text-base ${activeTab === sol.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                 {sol.label}
                              </div>
                              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mt-0.5">
                                 {sol.category}
                              </div>
                           </div>
                        </div>
                        {activeTab === sol.id && <ChevronRight className={`w-5 h-5 ${sol.color}`} aria-hidden="true" />}
                     </button>
                  ))}
               </div>

               {/* Content Panel */}
               <div className="lg:col-span-8">
                  <div 
                     key={activeTab} 
                     role="tabpanel"
                     id={`panel-${activeTab}`}
                     aria-labelledby={`tab-${activeTab}`}
                     className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden transition-all duration-500 animate-fade-in"
                  >
                     {/* Glow Effect */}
                     <div className={`absolute top-0 right-0 w-64 h-64 ${activeSolution.bg} blur-[80px] rounded-full opacity-20 pointer-events-none`}></div>
                     
                     <div className="relative z-10">
                        <div className="mb-10">
                           <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3`}>
                              <activeSolution.icon className={`w-8 h-8 ${activeSolution.color}`} aria-hidden="true" />
                              {activeSolution.label}
                           </h3>
                           <p className="text-xl text-slate-300 leading-relaxed font-light">
                              "{activeSolution.impact}"
                           </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div>
                              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Fitur Utama</h4>
                              <ul className="space-y-4">
                                 {activeSolution.modules.map((mod, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                       <CheckCircle2 className={`w-5 h-5 ${activeSolution.color} mt-0.5 flex-shrink-0`} aria-hidden="true" />
                                       <span className="text-slate-300 text-sm md:text-base">{mod}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col justify-center items-center text-center">
                              <div className="mb-4 p-4 rounded-full bg-slate-800 ring-1 ring-slate-700">
                                 <PlayCircle className={`w-8 h-8 ${activeSolution.color}`} aria-hidden="true" />
                              </div>
                              <h5 className="text-white font-bold mb-2">Lihat Demo Modul Ini</h5>
                              <p className="text-xs text-slate-400 mb-4">Video singkat 2 menit penjelasan fitur.</p>
                              <Link to={`/platform`}>
                                 <Button size="sm" variant="outline-white">Tonton Video</Button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. VALUE PROPOSITION (UVP) */}
      <section aria-labelledby="uvp-heading" className="py-24 bg-white dark:bg-slate-950">
         <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 id="uvp-heading" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
               Bukan Sekadar ERP Biasa
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
               Kami membangun BizOps dengan filosofi "Indonesia-First". Sesuai regulasi lokal, fleksibel untuk budaya kerja lokal.
            </p>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8">
               {homeUVP.map((uvp, idx) => (
                  <div key={idx} className="relative group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                     <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800 group-hover:text-primary-100 dark:group-hover:text-primary-900/20 transition-colors">
                        <uvp.icon className="w-24 h-24 opacity-20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" aria-hidden="true" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                           <uvp.icon className="w-7 h-7" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{uvp.title}</h3>
                        <p className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-4">{uvp.subtitle}</p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                           {uvp.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </CardSlider>
         </div>
      </section>

      {/* 5. PRICING COMPARISON: Why Cheaper? */}
      <section aria-labelledby="pricing-heading" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                  Hemat Hingga 60% Biaya IT
               </h2>
               <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Model harga kami dirancang untuk skalabilitas. Tanpa penalti biaya saat tim Anda bertambah besar.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
               {/* 1. Fragmented Stack */}
               <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col h-full hover:border-red-200 dark:hover:border-red-900/30 transition-colors duration-300">
                  <div className="mb-6">
                     <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-2">Fragmented SaaS</h3>
                     <p className="text-xs text-slate-500 h-8">Langganan banyak aplikasi terpisah (CRM, HR, Accounting).</p>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-slate-600 dark:text-slate-400">Harga Dasar</span>
                        <span className="font-bold text-slate-900 dark:text-white">Per User / App</span>
                     </div>
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-slate-600 dark:text-slate-400">CRM + Sales</span>
                        <span className="font-mono">Rp 150rb/user</span>
                     </div>
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-slate-600 dark:text-slate-400">Accounting</span>
                        <span className="font-mono">Rp 250rb/user</span>
                     </div>
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-slate-600 dark:text-slate-400">HRIS</span>
                        <span className="font-mono">Rp 20rb/user</span>
                     </div>
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2 text-red-500">
                        <span>Integrasi Data</span>
                        <span className="font-bold">Manual / Mahal</span>
                     </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                     <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Estimasi Total (50 User)</div>
                     <div className="text-3xl font-bold text-slate-400">Rp 21 Jt<span className="text-sm font-normal">/bln</span></div>
                  </div>
               </div>

               {/* 2. Competitor ERP (Per User) */}
               <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col h-full hover:border-amber-200 dark:hover:border-amber-900/30 transition-colors duration-300">
                  <div className="mb-6">
                     <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-2">Platform Sejenis</h3>
                     <p className="text-xs text-slate-500 h-8">ERP Global atau Kompetitor Lokal dengan model lisensi user.</p>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-slate-600 dark:text-slate-400">Harga Dasar</span>
                        <span className="font-bold text-slate-900 dark:text-white">Per User License</span>
                     </div>
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-slate-600 dark:text-slate-400">All Modules</span>
                        <span className="font-mono">Rp 300rb/user</span>
                     </div>
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-slate-600 dark:text-slate-400">Implementation</span>
                        <span className="font-mono">Biaya Tinggi</span>
                     </div>
                     <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-800 pb-2 text-amber-600">
                        <span>Hidden Cost</span>
                        <span className="font-bold">Add-ons & Maintenance</span>
                     </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                     <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Estimasi Total (50 User)</div>
                     <div className="text-3xl font-bold text-slate-500">Rp 15 Jt<span className="text-sm font-normal">/bln</span></div>
                  </div>
               </div>

               {/* 3. BizOps (Flat) */}
               <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl transform md:scale-105 z-10 border border-primary-500/30 flex flex-col h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                  
                  <div className="mb-6 relative z-10">
                     <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        BizOps Platform
                        <span className="text-[10px] bg-primary-500 text-white px-2 py-0.5 rounded-full animate-pulse uppercase tracking-wider">Best Value</span>
                     </h3>
                     <p className="text-xs text-slate-300 h-8">All-in-One ERP dengan harga paket flat yang transparan.</p>
                  </div>

                  <div className="space-y-4 mb-8 relative z-10 flex-grow">
                     <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                        <span className="text-slate-300">Metode Harga</span>
                        <span className="font-bold text-primary-200">Flat Package Price</span>
                     </div>
                     <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
                        <span className="text-sm font-bold">All Modules Included</span>
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                     </div>
                     <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
                        <span className="text-sm font-bold">Cloud Infrastructure</span>
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                     </div>
                     <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
                        <span className="text-sm font-bold">Unlimited Integration</span>
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                     </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 relative z-10">
                     <div className="text-xs text-primary-200 mb-1 uppercase tracking-wide">Paket Business (Up to 50 Users)</div>
                     <div className="text-4xl font-black text-white">Rp 3 Jt<span className="text-sm font-normal text-slate-300">/bln</span></div>
                     <div className="text-[10px] text-slate-400 mt-2">*Harga flat satu kantor, bukan per kepala.</div>
                  </div>
                  
                  <div className="mt-8 relative z-10">
                     <Link to="/pricing-calculator">
                        <Button fullWidth variant="primary" className="h-12 text-sm shadow-lg shadow-primary-500/25">
                           Hitung ROI Anda
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. PROCESS SECTION (How it works) */}
      <section aria-labelledby="process-heading" className="py-24 bg-[#0B1120] overflow-hidden relative">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <h2 id="process-heading" className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-white drop-shadow-sm">
                     Go-Live dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">30 Hari.</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed font-light">
                     Metodologi implementasi "Sprint" kami memangkas waktu setup hingga 70%. <strong className="text-white font-medium">Tanpa drama</strong>, tanpa biaya konsultan yang membengkak.
                  </p>
               </div>
               <Link to="/services">
                  <Button variant="outline-white" className="border-white/20 hover:bg-white/10 text-white font-medium px-6">Pelajari Metodologi Kami</Button>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {homeProcess.map((step, idx) => (
                  <div key={idx} className="relative group">
                     {/* Connector Line */}
                     {idx < homeProcess.length - 1 && (
                        <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-800/50 -ml-4 z-0">
                           <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                        </div>
                     )}
                     
                     <div className="relative z-10 bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 h-full hover:bg-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/20 group-hover:-translate-y-1">
                        <div className="text-5xl font-black text-slate-800 group-hover:text-primary-500/20 transition-colors duration-500 mb-6">{step.step}</div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors text-sm">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. INDUSTRIES & ROLES */}
      <section aria-labelledby="industry-heading" className="py-24 bg-white dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 id="industry-heading" className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Solusi Spesifik Industri</h2>
               <p className="text-slate-600 dark:text-slate-400">Kami tidak percaya pada solusi "Satu Ukuran untuk Semua".</p>
            </div>
            
            <CardSlider desktopClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" className="mb-16">
               {industries.map((ind) => (
                  <Link key={ind.id} to={`/solutions/${ind.id}`} className="group h-full">
                     <Card className="h-full border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" padding="lg">
                        <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                           <ind.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{ind.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                           {ind.description}
                        </p>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                           Explore <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                        </div>
                     </Card>
                  </Link>
               ))}
            </CardSlider>

            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Didesain untuk Peran Anda</h2>
               <p className="text-slate-600 dark:text-slate-400">Dashboard yang relevan untuk setiap pemangku kepentingan.</p>
            </div>

            <CardSlider desktopClassName="grid grid-cols-2 lg:grid-cols-5 gap-4">
               {roles.map((role) => (
                  <Link key={role.id} to={`/role/${role.id}`} className="group h-full">
                     <Card className="h-full text-center border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-300" padding="md">
                        <div className="w-10 h-10 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                           <role.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{role.title}</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                           {role.subtitle}
                        </p>
                     </Card>
                  </Link>
               ))}
            </CardSlider>
         </div>
      </section>

      {/* 8. INFRASTRUCTURE & SECURITY (Replaced Tech Validation) */}
      <section aria-labelledby="security-heading" className="py-24 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
         {/* Subtle Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
               <div>
                  <Badge variant="outline-white" className="mb-4">Reliability & Security</Badge>
                  <h2 id="security-heading" className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                     Tenang, Data Anda Aman.
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                     Fokuslah mengembangkan bisnis, biarkan kami menjaga infrastruktur Anda. BizOps menjamin keamanan data setara standar perbankan.
                  </p>
                  
                  <div className="space-y-6">
                     {[
                        { title: "Enkripsi End-to-End", desc: "Data sensitif (gaji, profit) terenkripsi saat dikirim dan disimpan (AES-256).", icon: Lock },
                        { title: "99.9% Uptime SLA", desc: "Server kami selalu aktif. Redundansi otomatis mencegah downtime saat jam sibuk.", icon: CheckCircle2 },
                        { title: "Backup Otomatis Harian", desc: "Data di-backup setiap hari ke lokasi terpisah. Restore data kapan saja dalam hitungan menit.", icon: PlayCircle } 
                     ].map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                           <div className="w-12 h-12 rounded-xl bg-slate-800/50 ring-1 ring-white/10 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                           </div>
                           <div>
                              <h3 className="text-white font-bold text-lg">{item.title}</h3>
                              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Visual Representation of Security/Scale instead of Stats */}
               <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                  <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                     <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                        <div>
                           <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">System Status</div>
                           <div className="flex items-center gap-2">
                              <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                              </span>
                              <span className="text-white font-mono font-bold">All Systems Operational</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Uptime (30 Hari)</div>
                           <div className="text-white font-mono font-bold">99.98%</div>
                        </div>
                     </div>
                     
                     {/* Mock Activity Graph */}
                     <div className="space-y-4">
                        <div className="flex justify-between text-xs text-slate-500 font-mono">
                           <span>00:00</span>
                           <span>06:00</span>
                           <span>12:00</span>
                           <span>18:00</span>
                           <span>24:00</span>
                        </div>
                        <div className="flex items-end gap-1 h-32">
                           {Array.from({ length: 40 }).map((_, i) => {
                              const height = 30 + Math.random() * 50;
                              return (
                                 <motion.div 
                                    key={i} 
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.02 }}
                                    className="flex-1 bg-blue-500/30 hover:bg-blue-500/80 transition-colors rounded-t-sm origin-bottom"
                                    style={{ height: `${height}%` }}
                                 ></motion.div>
                              )
                           })}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-4 bg-slate-800/50 p-3 rounded-lg">
                           <CheckCircle2 className="w-4 h-4 text-green-500" aria-hidden="true" />
                           <span>Backup terakhir berhasil: Hari ini, 03:00 WIB</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 9. INTEGRATIONS */}
      <section aria-labelledby="integration-heading" className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
         <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <h2 id="integration-heading" className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Terhubung dengan Ekosistem</h2>
            <p className="text-slate-600 dark:text-slate-400">
               Open API kami memudahkan integrasi dengan bank, pajak, dan marketplace.
            </p>
         </div>
         
         <div className="max-w-full overflow-hidden">
            <InfiniteScrollLoop speed={40} direction="right">
               {homeIntegrations.map((int, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 cursor-default whitespace-nowrap">
                     <div className="font-bold text-xs text-slate-400 uppercase tracking-wider" aria-hidden="true">{int.icon}</div>
                     <div className="font-semibold text-slate-900 dark:text-white text-sm">{int.name}</div>
                  </div>
               ))}
            </InfiniteScrollLoop>
         </div>
         
         <div className="text-center mt-10">
            <Link to="/integrations" className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center transition-colors">
               Lihat 50+ Integrasi Lainnya <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
         </div>
      </section>

      {/* 10. CTA / FOOTER PREVIEW */}
      <section aria-labelledby="cta-heading" className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-slate-900 z-0"></div>
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
               Siap Mengubah Cara Anda Bekerja?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
               Bergabunglah dengan 500+ perusahaan yang telah beralih ke BizOps. Tanpa komitmen jangka panjang, batalkan kapan saja.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/contact">
                  <BouncyButton className="h-16 px-10 text-xl font-bold w-full sm:w-auto shadow-2xl shadow-blue-900/20 bg-white text-blue-700 hover:bg-blue-50">
                     Hubungi Sales
                  </BouncyButton>
               </Link>
               <Link to="/pricing-calculator">
                  <Button variant="outline-white" size="lg" className="h-16 px-10 text-xl w-full sm:w-auto hover:bg-white/10 transition-colors">
                     Lihat Harga
                  </Button>
               </Link>
            </div>
            <p className="mt-8 text-sm text-primary-200/60">
               14-day free trial available. No credit card required.
            </p>
         </div>
      </section>

    </div>
  );
};

// Helper Icon for Calculator Button
function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2H17C19.2091 2 21 3.79086 21 6V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 14H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 18H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default HomePage;
