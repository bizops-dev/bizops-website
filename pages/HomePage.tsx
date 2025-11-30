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
import SpotlightCard from '../components/SpotlightCard';
import Badge from '../components/Badge';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Section from '../components/Section'; // Added Section
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
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
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
      <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
             <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
             <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow delay-700"></div>
             <div className="absolute top-[40%] left-[60%] w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] animate-pulse-slow delay-1000"></div>
          </div>

          <Container size="7xl" className="relative z-10 text-center">
            
            {/* Announcement Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8 hover:scale-105 hover:border-primary-200 dark:hover:border-primary-900 transition-all cursor-default backdrop-blur-md"
            >
               <span className="relative flex h-2 w-2 gap-4">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75 gap-4"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500 gap-4"></span>
               </span>
               <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                 New: AI-Powered Inventory Forecasting
               </span>
               <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-300" />
            </motion.div>
            
            {/* Main Headline with Staggered Animation */}
            <div className="max-w-5xl mx-auto mb-8">
              <Typography variant="h1" as="h1" className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"><StaggeredText text="Satu Sistem Kendali untuk" className="flex w-full justify-center mb-2 gap-4" />
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
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
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
                <Button variant="outline" size="lg" className="px-8 text-lg w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <Calculator className="mr-2 w-5 h-5 text-slate-500 dark:text-slate-400 dark:text-slate-300" /> Simulasi Harga
                </Button>
              </Link>
            </motion.div>

            {/* Hero Visual / Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.4 }}
              style={{ perspective: "1000px" }}
              className="relative max-w-6xl mx-auto mt-8 group"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>
               <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden aspect-[16/9] md:aspect-[21/9] transform transition-transform duration-700 group-hover:scale-[1.01] group-hover:shadow-[0_20px_60px_-12px_rgba(37,99,235,0.2)]">
                  <OptimizedImage 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                    alt="Preview dashboard BizOps ERP"
                    width={1920}
                    height={1080}
                    priority={true}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Overlay UI Badge */}
                  <Stack direction="horizontal" gap={2} align="center" className="absolute top-4 left-4 z-30 px-3 py-1.5 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full text-[10px] text-slate-300 shadow-lg">
                    <Lock className="w-3 h-3 text-green-400" /> <span className="font-mono">secure://bizops.id/dashboard</span>
                  </Stack>
               </div>
            </motion.div>

            {/* Social Proof Logos */}
            <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800/50 overflow-hidden">
               <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300 mb-6">Dipercaya oleh Pemimpin Industri</Typography>
               <InfiniteScrollLoop speed={30} className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:opacity-100">
                  {['Divistant', 'Dikstra', 'Arena Rasa Nusantara', 'Aero Travel Indonesia', 'TechCorp', 'BuildCo'].map(brand => (
                     <span key={brand} className="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-200 tracking-tighter whitespace-nowrap mx-8 cursor-default">{brand}</span>
                  ))}
               </InfiniteScrollLoop>
            </div>
          </Container>
      </div>

      {/* 2. PROBLEMS SECTION (Pain Points) */}
      <Section id="problems" className="!bg-slate-50 dark:!bg-slate-950 relative overflow-hidden" noPadding containerClassName="py-24 md:py-32">
         {/* Subtle Pattern Background */}
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
         </div>

         <div className="max-w-3xl mx-auto text-center mb-16">
            <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">Mengapa Bisnis Anda <span className="text-red-500 dark:text-red-400 dark:text-red-300 relative inline-block">Stuck? <span className="absolute bottom-2 left-0 w-full h-3 opacity-30 bg-red-200 dark:bg-red-900/50 -z-10 transform -rotate-2"></span></span></Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 mt-4">Pertumbuhan bisnis seringkali terhambat bukan karena kurangnya penjualan, tapi karena kekacauan operasional internal.</Typography>
         </div>
             
         <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
            {homeProblems.map((prob, idx) => (
               <SpotlightCard key={idx} className="h-full rounded-3xl" spotlightColor="rgba(239, 68, 68, 0.1)">
                  <div className="p-8 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${prob.bg} ring-1 ring-inset ring-black/5 dark:ring-white/10`}>
                       <prob.icon className={`w-7 h-7 ${prob.color}`} aria-hidden="true" />
                    </div>
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white mb-2">{prob.title}</Typography>
                    <Typography variant="caption" className="font-bold text-red-500 dark:text-red-400 dark:text-red-300 uppercase tracking-wide mb-3">{prob.subtitle}</Typography>
                    <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed flex-grow">{prob.desc}</Typography>
                  </div>
               </SpotlightCard>
            ))}
         </CardSlider>
      </Section>

      {/* 3. SOLUTIONS SECTION (The Fix) */}
      <Section id="solutions" className="!bg-slate-900 relative overflow-hidden" noPadding containerClassName="py-24 md:py-32">
         {/* Abstract BG */}
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-900 to-slate-950 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
         
         <Stack direction="vertical" gap={8} className="items-end justify-between mb-16 md:flex-row relative z-10">
            <div className="max-w-2xl">
               <Badge variant="outline-white" className="mb-4">BizOps Platform</Badge>
               <Typography variant="h2" as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">Satu Solusi, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Tak Terbatas Kemungkinan.</span></Typography>
               <Typography variant="body-lg" className="text-slate-400 dark:text-slate-300 mt-4">Modul yang saling berbicara satu sama lain. Input di satu tempat, terupdate di mana-mana.</Typography>
            </div>
            <Link to="/platform">
               <Button size="md" variant="white" className="group">
                  Lihat Semua Modul <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Button>
            </Link>
         </Stack>

         <Grid cols={12} gap={8} className="relative z-10">
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
                     className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                        activeTab === sol.id 
                        ? 'bg-gradient-to-r from-slate-800 to-slate-800/50 border-slate-700 shadow-lg translate-x-2' 
                        : 'hover:bg-slate-800/30 border-transparent text-slate-400 dark:text-slate-300'
                     }`}
                  >
                     <Stack direction="horizontal" gap={4} align="center">
                        <div className={`p-2.5 rounded-xl transition-colors ${activeTab === sol.id ? sol.bg : 'bg-slate-800 group-hover:bg-slate-700'}`}>
                           <sol.icon className={`w-5 h-5 ${activeTab === sol.id ? sol.color : 'text-slate-500 dark:text-slate-400 dark:text-slate-300'}`} aria-hidden="true" />
                        </div>
                        <div>
                           <div className={`font-bold text-base ${activeTab === sol.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                              {sol.label}
                           </div>
                           <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 uppercase tracking-wider font-medium mt-0.5">
                              {sol.category}
                           </div>
                        </div>
                     </Stack>
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
                  className="h-full bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden transition-all duration-500 animate-fade-in gap-4"
               >
                  {/* Glow Effect */}
                  <div className={`absolute top-0 right-0 w-96 h-96 ${activeSolution.bg} blur-[120px] rounded-full opacity-20 pointer-events-none`}></div>
                  
                  <div className="relative z-10">
                     <div className="mb-10">
                        <Stack direction="horizontal" gap={3} align="center" className="mb-4">
                           <div className={`p-2 rounded-lg ${activeSolution.bg} bg-opacity-20`}>
                              <activeSolution.icon className={`w-6 h-6 ${activeSolution.color}`} aria-hidden="true" />
                           </div>
                           <Typography variant="h3" as="h3" className="text-white">{activeSolution.label}</Typography>
                        </Stack>
                        <Typography variant="body-xl" className="text-slate-300 leading-relaxed italic border-l-4 border-slate-700 pl-4">"{activeSolution.impact}"</Typography>
                     </div>

                     <Grid cols={1} mdCols={2} gap={8}>
                        <div>
                           <Typography variant="h4" as="h4" className="text-white mb-4">Fitur Utama</Typography>
                           <ul className="space-y-4">
                              {activeSolution.modules.map((mod, idx) => (
                                 <li key={idx} className="flex items-start gap-3 group">
                                    <CheckCircle2 className={`w-5 h-5 ${activeSolution.color} mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`} aria-hidden="true" />
                                    <span className="text-slate-300 text-sm md:text-base group-hover:text-white transition-colors">{mod}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <Stack direction="vertical" gap={4} align="center" justify="center" className="bg-slate-900/60 rounded-2xl p-8 border border-slate-700/50 text-center hover:border-slate-600 transition-colors">
                           <div className="mb-2 p-4 rounded-full bg-slate-800 ring-1 ring-slate-700 group hover:ring-slate-600 transition-all cursor-pointer">
                              <PlayCircle className={`w-10 h-10 ${activeSolution.color} group-hover:scale-110 transition-transform`} aria-hidden="true" />
                           </div>
                           <Typography variant="h5" as="h5" className="text-white">Lihat Demo Modul Ini</Typography>
                           <Typography variant="body" className="text-slate-400 dark:text-slate-300 text-sm">Video singkat 2 menit penjelasan fitur.</Typography>
                           <Link to={`/platform`}>
                              <Button size="sm" variant="outline-white" className="mt-2">Tonton Video</Button>
                           </Link>
                        </Stack>
                     </Grid>
                  </div>
               </div>
            </div>
         </Grid>
      </Section>

      {/* 4. VALUE PROPOSITION (UVP) */}
      <Section id="uvp" className="!bg-white dark:!bg-slate-950" noPadding containerClassName="py-24 md:py-32">
         <Container size="3xl" className="text-center mb-16">
            <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">Bukan Sekadar ERP Biasa</Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 mt-4">Kami membangun BizOps dengan filosofi "Indonesia-First". Sesuai regulasi lokal, fleksibel untuk budaya kerja lokal.</Typography>
         </Container>

         <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
            {homeUVP.map((uvp, idx) => (
               <SpotlightCard key={idx} className="h-full rounded-3xl bg-slate-50 dark:bg-slate-900/50" spotlightColor="rgba(37, 99, 235, 0.1)">
                  <div className="p-8 relative h-full flex flex-col">
                     <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800 group-hover:text-primary-100 dark:group-hover:text-primary-900/20 transition-colors pointer-events-none">
                        <uvp.icon className="w-24 h-24 opacity-20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" aria-hidden="true" />
                     </div>
                     <div className="relative z-10 flex-grow">
                        <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                           <uvp.icon className="w-7 h-7" aria-hidden="true" />
                        </Stack>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white mb-2">{uvp.title}</Typography>
                        <Typography variant="body" className="text-primary-600 dark:text-primary-400 tracking-wide mb-3 font-medium">{uvp.subtitle}</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">{uvp.desc}</Typography>
                     </div>
                  </div>
               </SpotlightCard>
            ))}
         </CardSlider>
      </Section>

      {/* 5. PRICING COMPARISON: The New Paradigm (Enhanced) */}
      <Section id="pricing-comparison" className="!bg-slate-50 dark:!bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800" noPadding containerClassName="py-24 md:py-32">
         {/* Decorative Mesh Gradient */}
         <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-slate-950/0 dark:to-slate-950/0 pointer-events-none"></div>

         <div className="text-center mb-20 relative z-10">
            <Typography variant="h2" as="h2" className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                  Bandingkan Nilai Investasi Anda
               </span></Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">BizOps bukan hanya soal "lebih murah". Ini soal <span className="font-semibold text-slate-900 dark:text-white">efisiensi total</span>. Bandingkan kompleksitas, waktu implementasi, dan hidden cost.</Typography>
         </div>

         {/* 5. PRICING COMPARISON - Bento Grid Layout */}
         <Grid cols={12} gap={6} className="items-stretch relative z-10">
            
            {/* LEFT COLUMN: The Problems (Span 5) */}
            <CardSlider 
               breakpoint="lg" 
               className="lg:col-span-5 h-full"
               desktopClassName="lg:grid lg:grid-cols-1 lg:grid-rows-2 gap-6 h-full"
               mobileItemWidth="w-full"
               desktopItemWidth="lg:w-full"
            >
               
               {/* Card 1: Fragmented Stack */}
               <SpotlightCard className="h-full rounded-3xl border-red-200 dark:border-red-900/30" spotlightColor="rgba(239, 68, 68, 0.1)">
                  <div className="p-8 flex flex-col h-full">
                     <Stack direction="horizontal" justify="between" className="mb-6">
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Problem #1</span>
                         <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-500 dark:text-red-400">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                         </div>
                     </Stack>
                     
                     <Typography variant="h3" as="h3" className="mb-2">Fragmented Stack</Typography>
                     <Typography variant="body" className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Menggabungkan 3-5 aplikasi SaaS berbeda. Akibatnya: <span className="text-red-500 dark:text-red-400 font-semibold">Data Silo & Vendor Fatigue.</span></Typography>

                     {/* Detailed Cost Breakdown */}
                     <div className="mt-auto">
                         <Stack direction="vertical" gap={3} className="mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                            {[{label: "CRM License", price: "Rp 150rb"}, {label: "Accounting App", price: "Rp 250rb"}, {label: "HRIS App", price: "Rp 20rb"}].map((item, i) => (
                                <Stack key={i} direction="horizontal" justify="between" className="text-xs text-slate-500 dark:text-slate-400">
                                   <span>{item.label}</span>
                                   <span className="font-bold text-slate-700 dark:text-slate-300">{item.price}<span className="font-normal opacity-70">/user</span></span>
                                </Stack>
                            ))}
                         </Stack>
                         
                         <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                            <Stack direction="horizontal" align="end" justify="between" className="mb-2">
                               <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Total Cost (50 Users)</Typography>
                               <span className="text-lg font-bold text-slate-900 dark:text-white">~Rp 21 Jt<span className="text-xs font-normal text-slate-400">/bln</span></span>
                            </Stack>
                            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                               <div className="bg-red-400 h-full w-[90%]"></div>
                            </div>
                            <Stack direction="horizontal" justify="between" className="text-[10px] text-slate-400">
                                <span>Integration Time:</span>
                                <span className="text-red-500 dark:text-red-400 font-bold">3-6 Bulan</span>
                            </Stack>
                         </div>
                     </div>
                  </div>
               </SpotlightCard>

               {/* Card 2: Legacy ERP */}
               <SpotlightCard className="h-full rounded-3xl border-amber-200 dark:border-amber-900/30" spotlightColor="rgba(245, 158, 11, 0.1)">
                  <div className="p-8 flex flex-col h-full">
                     <Stack direction="horizontal" justify="between" className="mb-6">
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Problem #2</span>
                         <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-500 dark:text-amber-400">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                         </div>
                     </Stack>
                     <Typography variant="h3" as="h3" className="mb-2">Legacy / Global ERP</Typography>
                     <Typography variant="body" className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Model lisensi per user yang kaku. Akibatnya: <span className="text-amber-500 dark:text-amber-400 font-semibold">Growth Penalty & Mahal.</span></Typography>

                     {/* Detailed Cost Breakdown */}
                     <div className="mt-auto">
                         <Stack direction="vertical" gap={3} className="mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                            {[{label: "Standard License", price: "~Rp 210rb"}, {label: "Implementation", price: "$$$ (Extra)"}, {label: "Maintenance", price: "~20% / year"}].map((item, i) => (
                                Stack({
                                   key: i,
                                   direction: "horizontal",
                                   justify: "between",
                                   className: "text-xs text-slate-500 dark:text-slate-400",
                                   children: [
                                      <span key="label">{item.label}</span>,
                                      <span key="price" className="font-bold text-slate-700 dark:text-slate-300">{item.price}{item.label.includes("License") && <span className="font-normal opacity-70">/user</span>}</span>
                                   ]
                                })
                            ))}
                         </Stack>
                         
                         <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                            <Stack direction="horizontal" align="end" justify="between" className="mb-2">
                               <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Total Cost (50 Users)</Typography>
                               <span className="text-lg font-bold text-slate-900 dark:text-white">~Rp 10.5 Jt<span className="text-xs font-normal text-slate-400">/bln</span></span>
                            </Stack>
                            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                               <div className="bg-amber-400 h-full w-[60%]"></div>
                            </div>
                            <Stack direction="horizontal" justify="between" className="text-[10px] text-slate-400">
                                <span>Implementation Time:</span>
                                <span className="text-amber-500 dark:text-amber-400 font-bold">6-12 Bulan</span>
                            </Stack>
                         </div>
                     </div>
                  </div>
               </SpotlightCard>

            </CardSlider>

            {/* RIGHT COLUMN: The Solution (Span 7) */}
            <div className="lg:col-span-7">
               <div className="group relative bg-slate-950 rounded-[2.5rem] p-1 shadow-2xl shadow-primary-900/40 ring-1 ring-white/10 h-full">
                  {/* Glowing Border Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-primary-500 to-blue-600 rounded-[2.5rem] p-[2px] opacity-100 animate-border-pulse pointer-events-none"></div>
                  
                  <Stack direction="vertical" gap={4} justify="between" className="bg-slate-900 rounded-[2.4rem] p-8 md:p-12 relative h-full overflow-hidden">
                     {/* Abstract Background */}
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                     <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                     <div className="relative z-10 flex flex-col h-full">
                        <Stack direction="vertical" gap={4} className="md:items-center justify-between mb-8">
                           <Stack direction="horizontal" gap={2} align="center" className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20 w-fit">
                              <CheckCircle2 className="w-3.5 h-3.5" /> The BizOps Way
                           </Stack>
                           <div className="text-left md:text-right">
                              <Typography variant="body" className="tracking-widest uppercase text-xs font-semibold text-slate-400">Best Value Choice</Typography>
                           </div>
                        </Stack>

                        <Typography variant="h3" as="h3" className="font-black text-white tracking-tight leading-tight mb-4">Satu Platform.<br/>
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Tanpa Batas User.</span></Typography>
                        <Typography variant="body" className="text-slate-300 mb-8">Platform terintegrasi dengan harga flat yang adil. Infrastruktur managed service, siap mendukung pertumbuhan bisnis Anda tanpa penalti biaya.</Typography>

                        {/* Main Metric */}
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 mb-8 relative group-hover:bg-white/10 transition-colors duration-500 flex-grow">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-400 to-emerald-600 rounded-l-3xl"></div>
                            <Grid cols={1} mdCols={2} gap={8} className="items-center h-full">
                                <div>
                                    <Typography variant="body" className="text-slate-400 dark:text-slate-300 tracking-wider text-sm font-medium">Flat Monthly Cost</Typography>
                                    <p className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight my-2">Rp 3 Jt</p>
                                    <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300 text-sm">Paket Business (50 User)</Typography>
                                </div>
                                <Stack direction="vertical" gap={2} align="end" justify="center" className="text-right md:border-l border-white/10 md:pl-6">
                                    <div className="bg-green-500/20 text-green-400 dark:text-green-300 px-3 py-1.5 rounded-lg text-sm font-bold mb-1 border border-green-500/30 w-fit ml-auto">
                                        HEMAT 85%
                                    </div>
                                    <Typography variant="body" className="text-slate-400 dark:text-slate-300 text-xs">vs Fragmented Stack</Typography>
                                    <Typography variant="body" className="text-slate-400 dark:text-slate-300 text-xs mt-2">Go-Live: <span className="text-white font-bold">14 Hari</span></Typography>
                                </Stack>
                            </Grid>
                        </div>

                        {/* Features Grid */}
                        <Grid cols={1} smCols={2} gap={4} className="mb-8">
                            <Stack direction="horizontal" gap={3} align="start" className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="mt-1 text-green-400 dark:text-green-300"><CheckCircle2 className="w-5 h-5" /></div>
                                <div>
                                    <Typography variant="h4" as="h4" className="text-white text-sm font-bold">Local Compliance</Typography>
                                    <Typography variant="body" className="text-slate-400 dark:text-slate-300 text-xs">Pajak, BPJS, Kasbon Ready.</Typography>
                                </div>
                            </Stack>
                            <Stack direction="horizontal" gap={3} align="start" className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="mt-1 text-blue-400 dark:text-blue-300"><CheckCircle2 className="w-5 h-5" /></div>
                                <div>
                                    <Typography variant="h4" as="h4" className="text-white text-sm font-bold">Managed Infrastructure</Typography>
                                    <Typography variant="body" className="text-slate-400 dark:text-slate-300 text-xs">Server & Security Included.</Typography>
                                </div>
                            </Stack>
                        </Grid>
                     </div>

                     <div className="relative z-10 mt-auto">
                        <Link to="/pricing-calculator">
                           <Button size="md" fullWidth variant="primary" className="h-14 text-base font-bold shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 border-none bg-gradient-to-r from-blue-600 to-primary-600 hover:from-blue-500 hover:to-primary-500 transition-all transform hover:scale-[1.01]">
                              Hitung Penghematan Anda
                           </Button>
                        </Link>
                     </div>
                  </Stack>
               </div>
            </div>

         </Grid>
      </Section>

      {/* 6. PROCESS SECTION (How it works) */}
      <Section id="process" className="!bg-slate-950 overflow-hidden relative" noPadding containerClassName="py-24 md:py-32">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
         
         <Stack direction="vertical" gap={6} className="justify-between items-end mb-16 md:flex-row relative z-10">
            <div className="max-w-2xl">
               <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">Go-Live dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">30 Hari.</span></Typography>
               <Typography variant="body-lg" className="text-slate-300 leading-relaxed mt-4">Metodologi implementasi "Sprint" kami memangkas waktu setup hingga 70%. <strong className="text-white font-medium">Tanpa drama</strong>, tanpa biaya konsultan yang membengkak.</Typography>
            </div>
            <Link to="/services">
               <Button size="md" variant="outline-white" className="border-white/20 hover:bg-white/10 text-slate-900 dark:text-white font-medium px-6">Pelajari Metodologi Kami</Button>
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
                  
                  <div className="relative z-10 bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 h-full hover:bg-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/20 group-hover:-translate-y-1 flex flex-col">
                     <div className="text-5xl font-black text-slate-800 dark:text-slate-100 group-hover:text-primary-500/20 transition-colors duration-500 mb-6 leading-tight">{step.step}</div>
                     <Typography variant="h3" as="h3" className="font-bold text-white group-hover:text-primary-400 mb-3">{step.title}</Typography>
                     <Typography variant="caption" className="text-slate-400 dark:text-slate-300 leading-relaxed group-hover:text-slate-300">{step.desc}</Typography>
                  </div>
               </div>
            ))}
         </CardSlider>
      </Section>

      {/* 7. INDUSTRIES & ROLES */}
      <Section id="industries" className="!bg-white dark:!bg-slate-950" noPadding containerClassName="py-24 md:py-32">
         <div className="text-center mb-16">
            <Typography variant="h2" as="h2" className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Solusi Spesifik Industri</Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 mt-2">Kami tidak percaya pada solusi "Satu Ukuran untuk Semua".</Typography>
         </div>
         
         <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-4 gap-6" mobileItemWidth="w-[85vw] sm:w-[350px]" className="mb-24">
            {industries.map((ind) => (
               <Link key={ind.id} to={`/solutions/${ind.id}`} className="group h-full block">
                  <SpotlightCard className="h-full rounded-3xl" spotlightColor="rgba(37, 99, 235, 0.1)">
                     <div className="p-8 h-full flex flex-col">
                       <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 dark:text-slate-300 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                          <ind.icon className="w-6 h-6" aria-hidden="true" />
                       </Stack>
                       <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3">{ind.title}</Typography>
                       <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed mb-4 flex-grow">{ind.description}</Typography>
                       <Stack direction="horizontal" gap={4} align="center" className="text-primary-600 dark:text-primary-400 text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          Explore <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                       </Stack>
                     </div>
                  </SpotlightCard>
               </Link>
            ))}
         </CardSlider>

         <div className="text-center mb-16">
            <Typography variant="h2" as="h2">Didesain untuk Peran Anda</Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 mt-2">Dashboard yang relevan untuk setiap pemangku kepentingan.</Typography>
         </div>

         <CardSlider desktopClassName="md:grid md:grid-cols-3 lg:grid-cols-5 gap-4" mobileItemWidth="w-[85vw] sm:w-[250px]">
            {roles.map((role) => (
               <Link key={role.id} to={`/role/${role.id}`} className="group h-full block">
                  <SpotlightCard className="h-full text-center rounded-2xl" spotlightColor="rgba(59, 130, 246, 0.1)">
                     <div className="p-6 h-full flex flex-col items-center">
                       <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 dark:text-blue-300 mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <role.icon className="w-5 h-5" aria-hidden="true" />
                       </Stack>
                       <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white mb-1">{role.title}</Typography>
                       <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 text-sm">{role.subtitle}</Typography>
                     </div>
                  </SpotlightCard>
               </Link>
            ))}
         </CardSlider>
      </Section>

      {/* 8. INFRASTRUCTURE & SECURITY (Replaced Tech Validation) */}
      <Section id="security" className="!bg-slate-900 border-t border-slate-800/50 relative overflow-hidden" noPadding containerClassName="py-24 md:py-32">
         {/* Subtle Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

         <Grid cols={1} mdCols={2} gap={16} className="items-center mb-16 relative z-10">
            <div>
               <Badge variant="outline-white" className="mb-4">Reliability & Security</Badge>
               <Typography variant="h2" as="h2" className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">Tenang, Data Anda Aman.</Typography>
               <Typography variant="body-lg" className="text-slate-300 leading-relaxed mt-4 mb-8">Fokuslah mengembangkan bisnis, biarkan kami menjaga infrastruktur Anda. BizOps menjamin keamanan data setara standar perbankan.</Typography>
               
               <Stack direction="vertical" gap={6}>
                  {[
                     { title: "Enkripsi End-to-End", desc: "Data sensitif (gaji, profit) terenkripsi saat dikirim dan disimpan (AES-256).", icon: Lock },
                     { title: "99.9% Uptime SLA", desc: "Server kami selalu aktif. Redundansi otomatis mencegah downtime saat jam sibuk.", icon: CheckCircle2 },
                     { title: "Backup Otomatis Harian", desc: "Data di-backup setiap hari ke lokasi terpisah. Restore data kapan saja dalam hitungan menit.", icon: PlayCircle } 
                  ].map((item, idx) => (
                     <div key={idx} className="flex gap-4 group">
                        <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-12 h-12 rounded-xl bg-slate-800/50 ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all flex-shrink-0">
                           <item.icon className="w-6 h-6 text-blue-400 dark:text-blue-300" aria-hidden="true" />
                        </Stack>
                        <div>
                           <Typography variant="h3" as="h3" className="text-white font-bold mb-1">{item.title}</Typography>
                           <Typography variant="caption" className="text-slate-400 dark:text-slate-300 leading-relaxed">{item.desc}</Typography>
                        </div>
                     </div>
                  ))}
               </Stack>
            </div>

            {/* Visual Representation of Security/Scale instead of Stats */}
            <div className="relative mt-8 md:mt-0">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
               <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                  <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-8 border-b border-white/10 pb-6">
                     <div>
                        <div className="text-sm text-slate-400 dark:text-slate-300 uppercase tracking-wider font-bold mb-1">System Status</div>
                        <Stack direction="horizontal" gap={2} align="center">
                           <span className="relative flex h-3 w-3 gap-4">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 gap-4"></span>
                             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 gap-4"></span>
                           </span>
                           <span className="text-white font-bold">All Systems Operational</span>
                        </Stack>
                     </div>
                     <div className="text-right">
                        <div className="text-sm text-slate-400 dark:text-slate-300 uppercase tracking-wider font-bold mb-1">Uptime (30 Hari)</div>
                        <div className="text-white font-bold">99.98%</div>
                     </div>
                  </Stack>
                  
                  {/* Mock Activity Graph */}
                  <Stack direction="vertical" gap={4}>
                     <Stack direction="horizontal" gap={4} justify="between" className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>24:00</span>
                     </Stack>
                     <Stack direction="horizontal" gap={1} align="end" className="h-32">
                        {Array.from({ length: 40 }).map((_, i) => {
                           const height = 30 + Math.random() * 50;
                           return (
                              <motion.div 
                                 key={i} 
                                 initial={{ scaleY: 0 }}
                                 whileInView={{ scaleY: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ delay: i * 0.02 }}
                                 className="flex-1 bg-blue-500/30 hover:bg-blue-500/80 transition-colors rounded-t-sm origin-bottom gap-4"
                                 style={{ height: `${height}%` }}
                              ></motion.div>
                           )
                        })}
                     </Stack>
                     <Stack direction="horizontal" gap={2} align="center" className="text-xs text-slate-400 dark:text-slate-300 mt-4 bg-slate-800/50 p-3 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 dark:text-green-300" aria-hidden="true" />
                        <span>Backup terakhir berhasil: Hari ini, 03:00 WIB</span>
                     </Stack>
                  </Stack>
               </div>
            </div>
         </Grid>
      </Section>

      {/* 9. INTEGRATIONS */}
      <Section id="integrations" className="!bg-slate-50 dark:!bg-slate-950 border-y border-slate-200 dark:border-slate-800" noPadding containerClassName="py-24 md:py-32">
         <Container size="4xl" className="text-center mb-12">
            <Typography variant="h2" as="h2" className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Terhubung dengan Ekosistem</Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 mt-2">Open API kami memudahkan integrasi dengan bank, pajak, dan marketplace.</Typography>
         </Container>
         
         <div className="max-w-full overflow-hidden">
            <InfiniteScrollLoop speed={40} direction="right">
               {homeIntegrations.map((int, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 cursor-default whitespace-nowrap mx-2">
                     <div className="font-bold text-xs text-slate-400 dark:text-slate-300 uppercase tracking-wider" aria-hidden="true">{int.icon}</div>
                     <div className="font-semibold text-slate-900 dark:text-white text-sm">{int.name}</div>
                  </div>
               ))}
            </InfiniteScrollLoop>
         </div>
         
         <div className="text-center mt-12">
            <Link to="/platform/technologies/integration" className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center transition-colors gap-2">
               Lihat 50+ Integrasi Lainnya <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
         </div>
      </Section>

      {/* 10. CTA / FOOTER PREVIEW */}
      <Section id="cta" className="relative overflow-hidden" noPadding containerClassName="py-24 md:py-32">
         <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-slate-900 z-0"></div>
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

         <Container size="4xl" className="relative z-10 text-center">
            <Typography variant="h2" as="h2" className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">Siap Mengubah Cara Anda Bekerja?</Typography>
            <Typography variant="body-xl" className="text-primary-100 mb-10">Bergabunglah dengan 500+ perusahaan yang telah beralih ke BizOps. Tanpa komitmen jangka panjang, batalkan kapan saja.</Typography>
            <Stack direction="vertical" gap={4} className="justify-center sm:flex-row">
               <Link to="/contact">
                  <BouncyButton className="h-16 px-10 text-xl font-bold w-full sm:w-auto shadow-2xl shadow-blue-900/20 bg-white text-blue-700 dark:text-slate-200 hover:bg-blue-50">
                     Hubungi Sales
                  </BouncyButton>
               </Link>
               <Link to="/pricing-calculator">
                  <Button variant="outline-white" size="lg" className="px-10 text-xl w-full sm:w-auto hover:bg-white/10 transition-colors h-16">
                     Lihat Harga
                  </Button>
               </Link>
            </Stack>
            <Typography variant="caption" className="text-primary-200/60 mt-6 block">14-day free trial available. No credit card required.</Typography>
         </Container>
      </Section>

    </div>
  );
};

export default HomePage;
