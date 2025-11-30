import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Lock, 
  PlayCircle, ArrowUpRight, ChevronRight, Calculator
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
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

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
              <Typography variant="h1" as="h1" className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"><StaggeredText text="Satu Sistem Kendali untuk" className="flex w-full justify-center mb-2" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400">
                  Seluruh Operasional Bisnis.
                </span></Typography>
            </div>

            {/* Subheadline */}
            <motion.p 
              variants={FADE_UP_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
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
              <Link to="/demo" className="w-full sm:w-auto">
                <BouncyButton className="h-14 px-8 text-lg w-full shadow-xl shadow-primary-500/20">
                  Mulai Demo Gratis
                </BouncyButton>
              </Link>
              <Link to="/pricing-calculator" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <Calculator className="mr-2 w-5 h-5 text-slate-500" /> Simulasi Harga
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
                  <div className="absolute top-4 left-4 z-30 px-3 py-1 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-md text-[10px] text-slate-300 flex items-center gap-2 shadow-lg">
                    <Lock className="w-3 h-3 text-green-400" /> bizops.id/dashboard
                  </div>
               </div>
            </motion.div>

            {/* Social Proof Logos - Updated to match Customer Stories */}
            <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
               <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Dipercaya oleh Pemimpin Industri</Typography>
               <InfiniteScrollLoop speed={30} className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:opacity-100">
                  {['Divistant', 'Dikstra', 'Arena Rasa Nusantara', 'Aero Travel Indonesia', 'TechCorp', 'BuildCo'].map(brand => (
                     <span key={brand} className="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-200 tracking-tighter whitespace-nowrap mx-4 cursor-default">{brand}</span>
                  ))}
               </InfiniteScrollLoop>
            </div>
          </div>
      </div>

      {/* 2. PROBLEMS SECTION (Pain Points) */}
      <section aria-labelledby="problems-heading" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
         {/* Subtle Pattern Background */}
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
         </div>

         <Container size="7xl" className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Mengapa Bisnis Anda <span className="text-red-500">Stuck?</span></Typography>
                <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Pertumbuhan bisnis seringkali terhambat bukan karena kurangnya penjualan, tapi karena kekacauan operasional internal.</Typography>
            </div>
             
             <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
                {homeProblems.map((prob, idx) => (
                   <Card key={idx} className="h-full border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900" padding="lg">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${prob.bg} ring-1 ring-inset ring-black/5 dark:ring-white/10`}>
                         <prob.icon className={`w-7 h-7 ${prob.color}`} aria-hidden="true" />
                      </div>
                     <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{prob.title}</Typography>
                     <Typography variant="caption" className="font-bold text-red-500 dark:text-red-400 uppercase tracking-wide">{prob.subtitle}</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{prob.desc}</Typography>
                   </Card>
                ))}
             </CardSlider>
         </Container>
      </section>

      {/* 3. SOLUTIONS SECTION (The Fix) */}
      <section aria-labelledby="solutions-heading" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
         {/* Abstract BG */}
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-900 to-slate-950 pointer-events-none"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Stack direction="col" gap={8} className="items-end justify-between mb-16">
               <div className="max-w-2xl">
                  <Badge variant="outline-white" className="mb-4">BizOps Platform</Badge>
                  <Typography variant="h2" as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Satu Solusi, <br />
                     <span className="text-primary-400">Tak Terbatas Kemungkinan.</span></Typography>
                  <Typography variant="body-lg" className="text-slate-400">Modul yang saling berbicara satu sama lain. Input di satu tempat, terupdate di mana-mana.</Typography>
               </div>
               <Link to="/platform">
                  <Button variant="white" className="group">
                     Lihat Semua Modul <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </Link>
            </Stack>

            <Grid cols={12} gap={8}>
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
                           <Typography variant="h3" as="h3"><activeSolution.icon className={`w-8 h-8 ${activeSolution.color}`} aria-hidden="true" />
                              {activeSolution.label}</Typography>
                           <Typography variant="body-xl" className="text-slate-300 leading-relaxed">"{activeSolution.impact}"</Typography>
                        </div>

                        <Grid cols={2} gap={8}>
                           <div>
                              <Typography variant="h4" as="h4">Fitur Utama</Typography>
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
                              <Typography variant="h5" as="h5">Lihat Demo Modul Ini</Typography>
                              <Typography variant="body" className="text-slate-400">Video singkat 2 menit penjelasan fitur.</Typography>
                              <Link to={`/platform`}>
                                 <Button size="sm" variant="outline-white">Tonton Video</Button>
                              </Link>
                           </div>
                        </Grid>
                     </div>
                  </div>
               </div>
            </Grid>
         </div>
      </section>

      {/* 4. VALUE PROPOSITION (UVP) */}
      <section aria-labelledby="uvp-heading" className="py-16 md:py-24 bg-white dark:bg-slate-950">
         <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Bukan Sekadar ERP Biasa</Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Kami membangun BizOps dengan filosofi "Indonesia-First". Sesuai regulasi lokal, fleksibel untuk budaya kerja lokal.</Typography>
         </div>

         <Container size="7xl">
            <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
               {homeUVP.map((uvp, idx) => (
                  <div key={idx} className="relative group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                     <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800 group-hover:text-primary-100 dark:group-hover:text-primary-900/20 transition-colors">
                        <uvp.icon className="w-24 h-24 opacity-20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" aria-hidden="true" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                           <uvp.icon className="w-7 h-7" aria-hidden="true" />
                        </div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{uvp.title}</Typography>
                        <Typography variant="body" className="text-primary-600 dark:text-primary-400 tracking-wide">{uvp.subtitle}</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{uvp.desc}</Typography>
                     </div>
                  </div>
               ))}
            </CardSlider>
         </Container>
      </section>

      {/* 5. PRICING COMPARISON: The New Paradigm (Enhanced) */}
      <section aria-labelledby="pricing-heading" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
         {/* Decorative Mesh Gradient */}
         <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-slate-950/0 dark:to-slate-950/0 pointer-events-none"></div>

         <Container size="7xl" className="relative z-10">
            <div className="text-center mb-20">
               <Typography variant="h2" as="h2" className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                     Bandingkan Nilai Investasi Anda
                  </span></Typography>
               <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed">BizOps bukan hanya soal "lebih murah". Ini soal <span className="font-semibold text-slate-900 dark:text-white">efisiensi total</span>. Bandingkan kompleksitas, waktu implementasi, dan hidden cost.</Typography>
            </div>

            {/* 5. PRICING COMPARISON - Bento Grid Layout */}
            <Grid cols={12} gap={6} className="items-stretch">
               
               {/* LEFT COLUMN: The Problems (Span 5) */}
               <CardSlider 
                  breakpoint="lg" 
                  className="lg:col-span-5 h-full"
                  desktopClassName="lg:grid lg:grid-cols-1 gap-6 h-full"
                  mobileItemWidth="w-full"
                  desktopItemWidth="lg:w-full"
               >
                  
                  {/* Card 1: Fragmented Stack */}
                  <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10 flex-1 h-full">
                     <div className="absolute top-0 right-0 p-4">
                         <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-500">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                         </div>
                     </div>
                     <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Problem #1</span>
                     </div>
                     <Typography variant="h3" as="h3">Fragmented Stack</Typography>
                     <Typography variant="body" className="text-slate-500 dark:text-slate-400 leading-relaxed">Menggabungkan 3-5 aplikasi SaaS berbeda. Akibatnya: <span className="text-red-500">Data Silo & Vendor Fatigue.</span></Typography>

                     {/* Detailed Cost Breakdown */}
                     <div className="space-y-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                           <span>CRM License</span>
                           <span className="font-bold text-slate-700 dark:text-slate-300">Rp 150rb<span className="font-normal text-[8px]">/user</span></span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                           <span>Accounting App</span>
                           <span className="font-bold text-slate-700 dark:text-slate-300">Rp 250rb<span className="font-normal text-[8px]">/user</span></span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                           <span>HRIS App</span>
                           <span className="font-bold text-slate-700 dark:text-slate-300">Rp 20rb<span className="font-normal text-[8px]">/user</span></span>
                        </div>
                     </div>
                     
                     <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between items-end mb-1">
                           <Typography variant="caption" className="text-slate-500">Total Cost (50 Users)</Typography>
                           <span className="text-lg font-bold text-slate-900 dark:text-white">~Rp 21 Jt<span className="text-xs font-normal text-slate-400">/bln</span></span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                           <div className="bg-red-400 h-full w-[90%]"></div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-400">
                            <span>Integration Time:</span>
                            <span className="text-red-500 font-bold">3-6 Bulan</span>
                        </div>
                     </div>
                  </div>

                  {/* Card 2: Legacy ERP */}
                  <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/10 flex-1 h-full">
                     <div className="absolute top-0 right-0 p-4">
                         <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-500">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                         </div>
                     </div>
                     <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Problem #2</span>
                     </div>
                     <Typography variant="h3" as="h3">Legacy / Global ERP</Typography>
                     <Typography variant="body" className="text-slate-500 dark:text-slate-400 leading-relaxed">Model lisensi per user yang kaku. Akibatnya: <span className="text-amber-500">Growth Penalty & Mahal.</span></Typography>

                     {/* Detailed Cost Breakdown */}
                     <div className="space-y-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                           <span>Standard License</span>
                           <span className="font-bold text-slate-700 dark:text-slate-300">~Rp 210rb<span className="font-normal text-[8px]">/user</span></span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                           <span>Implementation</span>
                           <span className="font-bold text-slate-700 dark:text-slate-300">$$$ (Extra)</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                           <span>Maintenance</span>
                           <span className="font-bold text-slate-700 dark:text-slate-300">~20% / year</span>
                        </div>
                     </div>
                     
                     <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between items-end mb-1">
                           <Typography variant="caption" className="text-slate-500">Total Cost (50 Users)</Typography>
                           <span className="text-lg font-bold text-slate-900 dark:text-white">~Rp 10.5 Jt<span className="text-xs font-normal text-slate-400">/bln</span></span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                           <div className="bg-amber-400 h-full w-[60%]"></div>
                        </div>
                         <div className="flex justify-between items-center text-[10px] text-slate-400">
                            <span>Implementation Time:</span>
                            <span className="text-amber-500 font-bold">6-12 Bulan</span>
                        </div>
                     </div>
                  </div>

               </CardSlider>

               {/* RIGHT COLUMN: The Solution (Span 7) */}
               <div className="lg:col-span-7">
                  <div className="group relative bg-[#0B1120] rounded-[2.5rem] p-1 shadow-2xl shadow-primary-900/40 ring-1 ring-white/10 h-full">
                     {/* Glowing Border Animation */}
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-primary-500 to-blue-600 rounded-[2.5rem] p-[2px] opacity-100 animate-border-pulse pointer-events-none"></div>
                     
                     <div className="bg-[#0f172a] rounded-[2.4rem] p-8 md:p-12 relative h-full flex flex-col justify-between overflow-hidden">
                        {/* Abstract Background */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                        <div className="relative z-10">
                           <Stack direction="col" gap={4} className="md:items-center justify-between mb-8">
                              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20 w-fit">
                                 <CheckCircle2 className="w-3.5 h-3.5" /> The BizOps Way
                              </div>
                              <div className="text-left md:text-right">
                                 <Typography variant="body" className="tracking-widest">Best Value Choice</Typography>
                              </div>
                           </Stack>

                           <Typography variant="h3" as="h3" className="font-black text-white tracking-tight leading-tight">Satu Platform.<br/>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Tanpa Batas User.</span></Typography>
                           <Typography variant="body" className="text-slate-300">Platform terintegrasi dengan harga flat yang adil. Infrastruktur managed service, siap mendukung pertumbuhan bisnis Anda tanpa penalti biaya.</Typography>

                           {/* Main Metric */}
                           <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 mb-8 relative group-hover:bg-white/10 transition-colors duration-500">
                               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-400 to-emerald-600 rounded-l-3xl"></div>
                               <div className="grid grid-cols-2 gap-8">
                                   <div>
                                       <Typography variant="body" className="text-slate-400 tracking-wider">Flat Monthly Cost</Typography>
                                       <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">Rp 3 Jt</p>
                                       <Typography variant="body" className="text-slate-500">Paket Business (50 User)</Typography>
                                   </div>
                                   <div className="flex flex-col justify-center items-end text-right">
                                       <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-sm font-bold mb-1 border border-green-500/30">
                                           HEMAT 85%
                                       </div>
                                       <Typography variant="body" className="text-slate-400">vs Fragmented Stack</Typography>
                                   </div>
                               </div>
                           </div>

                           {/* Features Grid */}
                           <Grid cols={2} gap={4}>
                               <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                                   <div className="mt-1 text-green-400"><CheckCircle2 className="w-5 h-5" /></div>
                                   <div>
                                       <Typography variant="h4" as="h4">Local Compliance</Typography>
                                       <Typography variant="body" className="text-slate-400">Pajak, BPJS, Kasbon Ready.</Typography>
                                   </div>
                               </div>
                               <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                                   <div className="mt-1 text-blue-400"><CheckCircle2 className="w-5 h-5" /></div>
                                   <div>
                                       <Typography variant="h4" as="h4">Managed Infrastructure</Typography>
                                       <Typography variant="body" className="text-slate-400">Server & Security Included.</Typography>
                                   </div>
                               </div>
                           </Grid>
                        </div>

                        <div className="mt-10 relative z-10">
                           <Link to="/pricing-calculator">
                              <Button fullWidth variant="primary" className="h-14 text-base font-bold shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 border-none bg-gradient-to-r from-blue-600 to-primary-600 hover:from-blue-500 hover:to-primary-500 transition-all transform hover:scale-[1.01]">
                                 Hitung Penghematan Anda
                              </Button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

            </Grid>
         </Container>
      </section>

      {/* 6. PROCESS SECTION (How it works) */}
      <section aria-labelledby="process-heading" className="py-16 md:py-24 bg-[#0B1120] overflow-hidden relative">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Stack direction="col" gap={6} className="justify-between items-end mb-16">
               <div className="max-w-2xl">
                  <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Go-Live dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">30 Hari.</span></Typography>
                  <Typography variant="body-lg" className="text-slate-300 leading-relaxed">Metodologi implementasi "Sprint" kami memangkas waktu setup hingga 70%. <strong className="text-white font-medium">Tanpa drama</strong>, tanpa biaya konsultan yang membengkak.</Typography>
               </div>
               <Link to="/services">
                  <Button variant="outline-white" className="border-white/20 hover:bg-white/10 text-white font-medium px-6">Pelajari Metodologi Kami</Button>
               </Link>
            </Stack>

            <CardSlider desktopClassName="md:grid md:grid-cols-4 gap-6" mobileItemWidth="w-[85vw] sm:w-[350px]">
               {homeProcess.map((step, idx) => (
                  <div key={idx} className="relative group h-full">
                     {/* Connector Line */}
                     {idx < homeProcess.length - 1 && (
                        <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-800/50 -ml-4 z-0">
                           <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                        </div>
                     )}
                     
                     <div className="relative z-10 bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 h-full hover:bg-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/20 group-hover:-translate-y-1">
                        <div className="text-5xl font-black text-slate-800 group-hover:text-primary-500/20 transition-colors duration-500 mb-6">{step.step}</div>
                        <Typography variant="h3" as="h3" className="font-bold text-white group-hover:text-primary-400">{step.title}</Typography>
                        <Typography variant="caption" className="text-slate-400 leading-relaxed group-hover:text-slate-300">{step.desc}</Typography>
                     </div>
                  </div>
               ))}
            </CardSlider>
         </div>
      </section>

      {/* 7. INDUSTRIES & ROLES */}
      <section aria-labelledby="industry-heading" className="py-16 md:py-24 bg-white dark:bg-slate-950">
         <Container size="7xl">
            <div className="text-center mb-16">
               <Typography variant="h2" as="h2" className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Solusi Spesifik Industri</Typography>
               <Typography variant="body" className="text-slate-600 dark:text-slate-400">Kami tidak percaya pada solusi "Satu Ukuran untuk Semua".</Typography>
            </div>
            
            <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-4 gap-6" mobileItemWidth="w-[85vw] sm:w-[350px]" className="mb-16">
               {industries.map((ind) => (
                  <Link key={ind.id} to={`/solutions/${ind.id}`} className="group h-full">
                     <Card className="h-full border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" padding="lg">
                        <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                           <ind.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{ind.title}</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{ind.description}</Typography>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                           Explore <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                        </div>
                     </Card>
                  </Link>
               ))}
            </CardSlider>

            <div className="text-center mb-16">
               <Typography variant="h2" as="h2">Didesain untuk Peran Anda</Typography>
               <Typography variant="body" className="text-slate-600 dark:text-slate-400">Dashboard yang relevan untuk setiap pemangku kepentingan.</Typography>
            </div>

            <CardSlider desktopClassName="md:grid md:grid-cols-3 lg:grid-cols-5 gap-4" mobileItemWidth="w-[85vw] sm:w-[250px]">
               {roles.map((role) => (
                  <Link key={role.id} to={`/role/${role.id}`} className="group h-full">
                     <Card className="h-full text-center border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-300" padding="md">
                        <div className="w-10 h-10 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                           <role.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{role.title}</Typography>
                        <Typography variant="body" className="text-slate-600 dark:text-slate-400">{role.subtitle}</Typography>
                     </Card>
                  </Link>
               ))}
            </CardSlider>
         </Container>
      </section>

      {/* 8. INFRASTRUCTURE & SECURITY (Replaced Tech Validation) */}
      <section aria-labelledby="security-heading" className="py-16 md:py-24 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
         {/* Subtle Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

         <Container size="7xl" className="relative z-10">
            <Grid cols={2} gap={16} className="items-center mb-16">
               <div>
                  <Badge variant="outline-white" className="mb-4">Reliability & Security</Badge>
                  <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-bold text-white tracking-tight">Tenang, Data Anda Aman.</Typography>
                  <Typography variant="body-lg" className="text-slate-300 leading-relaxed">Fokuslah mengembangkan bisnis, biarkan kami menjaga infrastruktur Anda. BizOps menjamin keamanan data setara standar perbankan.</Typography>
                  
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
                              <Typography variant="h3" as="h3" className="text-white font-bold">{item.title}</Typography>
                              <Typography variant="caption" className="text-slate-400 leading-relaxed">{item.desc}</Typography>
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
                              <span className="text-white font-bold">All Systems Operational</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Uptime (30 Hari)</div>
                           <div className="text-white font-bold">99.98%</div>
                        </div>
                     </div>
                     
                     {/* Mock Activity Graph */}
                     <div className="space-y-4">
                        <div className="flex justify-between text-xs text-slate-500">
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
            </Grid>
         </Container>
      </section>

      {/* 9. INTEGRATIONS */}
      <section aria-labelledby="integration-heading" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
         <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <Typography variant="h2" as="h2" className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Terhubung dengan Ekosistem</Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400">Open API kami memudahkan integrasi dengan bank, pajak, dan marketplace.</Typography>
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
            <Link to="/platform/technologies/integration" className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center transition-colors">
               Lihat 50+ Integrasi Lainnya <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
         </div>
      </section>

      {/* 10. CTA / FOOTER PREVIEW */}
      <section aria-labelledby="cta-heading" className="py-16 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-slate-900 z-0"></div>
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <Typography variant="h2" as="h2" className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Siap Mengubah Cara Anda Bekerja?</Typography>
            <Typography variant="body-xl" className="text-primary-100">Bergabunglah dengan 500+ perusahaan yang telah beralih ke BizOps. Tanpa komitmen jangka panjang, batalkan kapan saja.</Typography>
            <Stack direction="col" gap={4} className="justify-center">
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
            </Stack>
            <Typography variant="caption" className="text-primary-200/60">14-day free trial available. No credit card required.</Typography>
         </div>
      </section>

    </div>
  );
};

export default HomePage;
