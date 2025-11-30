import React, { useState, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { rolesData } from '../data/content';
import Button from '../components/Button';
import { Activity, ArrowRight, TrendingUp, AlertTriangle, CheckCircle, BarChart2, Lock, PieChart, Users, DollarSign, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import CardSlider from '../components/CardSlider'; // Imported CardSlider

// Motion Components
import { StaggeredText } from '../components/ui/motion-text';
import { BouncyButton } from '../components/ui/motion-button';
import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER } from '../utils/animation';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const RolePage: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const data = roleId ? rolesData[roleId] : null;
  const [activeFeature, setActiveFeature] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [roleId]);

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-slate-950">
        <SEO title="Role Not Found" />
        <Typography variant="h1" as="h1">Role Not Found</Typography>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500">
      <SEO title={data.metaTitle} description={data.metaDesc} />

      {/* 1. HERO (Dark Enterprise Style - Premium Upgrade) */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-[#020617] text-white overflow-hidden">
        {/* Dynamic Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <Container size="7xl" className="relative z-10 text-center">
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.1 }}
             className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full mb-10 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-white/5 group hover:bg-white/10 transition-colors"
          >
              <Icon className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              <Typography variant="caption" className="text-slate-200">Role-Based Experience</Typography>
          </motion.div>
          
          <Typography variant="h1" as="h1" className="font-bold leading-[1.1] tracking-tight font-sans"><span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
               {data.heroHeadline}
             </span></Typography>
          
          <motion.p 
             variants={FADE_UP_VARIANTS}
             initial="hidden"
             animate="visible"
             transition={{ delay: 0.4 }}
             className="text-lg md:text-3xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
          >
             "{data.heroSub}"
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link to="/demo" className="w-full sm:w-auto">
               <div className="group relative">
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                 <button className="relative h-16 px-10 bg-slate-950 ring-1 ring-white/10 rounded-xl leading-none flex items-center justify-center w-full">
                   <span className="text-white font-bold text-lg">Jadwalkan Demo Personal</span>
                   <ArrowRight className="ml-3 w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* 2. DASHBOARD PREVIEW */}
      <section className="py-12 lg:py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
         <Container size="7xl">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 lg:p-10 shadow-2xl overflow-hidden relative">
               <div className="text-center mb-10 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium mb-4 shadow-sm">
                     <BarChart2 className="w-4 h-4" />
                     Live Dashboard Preview
                  </div>
                  <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white leading-tight">{data.dashboardInsight}</Typography>
                  
                  {/* Dashboard Metrics Grid - Interactive */}
                  <Grid cols={4} gap={3} className="max-w-5xl mx-auto">
                      {data.dashboardFeatures.map((feat: string, idx: number) => {
                        const isActive = activeFeature === idx;
                        return (
                           <motion.button 
                              key={idx} 
                              onClick={() => setActiveFeature(idx)}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center h-28 text-center cursor-pointer relative overflow-hidden group ${
                                 isActive 
                                    ? 'bg-white dark:bg-slate-800 border-primary-500 shadow-lg shadow-primary-500/10 scale-105 z-10 ring-1 ring-primary-500' 
                                    : 'bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800'
                              }`}
                           >
                               {isActive && <div className="absolute inset-0 bg-primary-500/5 animate-pulse"></div>}
                               <Activity className={`w-6 h-6 mb-2 transition-colors ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} />
                               <span className={`font-semibold text-xs leading-tight transition-colors ${isActive ? 'text-primary-700 dark:text-primary-300' : 'text-slate-600 dark:text-slate-400'}`}>{feat}</span>
                           </motion.button>
                        );
                      })}
                  </Grid>
               </div>
               
               {/* Abstract UI Representation - Premium Upgrade */}
               <motion.div 
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  className="mt-8 bg-[#0F172A] rounded-t-2xl border-t border-x border-slate-700/50 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] max-w-5xl mx-auto h-[450px] relative overflow-hidden group perspective-1000 transform-gpu"
               >
                  {/* Overhead Lamp Effect - Dynamic Color based on Active Feature */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-[80px] pointer-events-none rounded-full transition-colors duration-700 ${
                     ['bg-blue-500/20', 'bg-green-500/20', 'bg-purple-500/20', 'bg-amber-500/20'][activeFeature % 4]
                  }`}></div>

                  {/* Browser Header */}
                  <div className="absolute top-0 w-full h-12 bg-[#1E293B]/90 backdrop-blur-md border-b border-slate-700 flex items-center px-4 gap-3 z-20 select-none">
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] shadow-sm"></div>
                     </div>
                     <div className="ml-4 flex-1 max-w-md px-3 py-1.5 bg-[#0F172A]/50 border border-slate-700/50 rounded-lg text-[10px] text-slate-400 flex items-center gap-2 overflow-hidden shadow-inner transition-all duration-300">
                        <Lock className="w-2.5 h-2.5 flex-shrink-0 text-emerald-500" /> 
                        <span className="opacity-50">https://</span>app.bizops.id/dashboard/<span className="text-white truncate">{data.title.toLowerCase().split(' ')[0]}/{data.dashboardFeatures[activeFeature].toLowerCase().replace(/\s+/g, '-')}</span>
                     </div>
                  </div>

                  {/* Dashboard Content Mockup */}
                  <Grid cols={12} gap={4} className="p-6 pt-16 h-full bg-[#0F172A] relative">
                     {/* Grid Background */}
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>
                     
                     {/* Left Sidebar */}
                     <Stack direction="col" gap={2} className="col-span-2 hidden border-r border-slate-800 pr-4 relative z-10">
                        <div className={`h-8 bg-gradient-to-r rounded-md w-full mb-4 shadow-lg transition-all duration-500 ${
                           ['from-blue-600 to-blue-700', 'from-green-600 to-green-700', 'from-purple-600 to-purple-700', 'from-amber-600 to-amber-700'][activeFeature % 4]
                        }`}></div>
                        {[1,2,3,4,5].map(i => <div key={i} className="h-8 bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-md w-full border border-transparent hover:border-slate-700"></div>)}
                     </Stack>

                     {/* Main Content */}
                     <Grid cols={3} gap={4} className="col-span-12 lg:col-span-10 relative z-10">
                        {/* Top Cards - Dynamic Numbers */}
                        <Grid cols={3} gap={4} className="col-span-3">
                           {[1,2,3].map((i) => (
                              <div key={i} className="h-28 bg-[#1E293B] rounded-xl border border-slate-700/50 p-4 flex flex-col justify-between hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg group/card relative overflow-hidden">
                                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                 <div className="flex justify-between items-start">
                                    <div className="h-8 w-8 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
                                       <div className={`w-4 h-4 rounded transition-colors duration-500 ${
                                          activeFeature === i-1 ? 'bg-white animate-pulse' : 'bg-slate-600'
                                       }`}></div>
                                    </div>
                                    <div className={`text-xs font-bold ${i===1 ? 'text-emerald-400' : 'text-slate-500'}`}>
                                       {i===1 ? '+12.5%' : ''}
                                    </div>
                                 </div>
                                 <Stack direction="col" gap={2}>
                                    <div className="h-6 w-2/3 bg-slate-700 rounded animate-pulse transition-all duration-500" style={{ width: `${60 + (activeFeature * 10) + (i * 5)}%` }}></div>
                                    <div className="h-3 w-1/3 bg-slate-800 rounded"></div>
                                 </Stack>
                              </div>
                           ))}
                        </Grid>

                        {/* Chart Area - Dynamic Bars */}
                        <div className="col-span-2 h-64 bg-[#1E293B] rounded-xl border border-slate-700/50 relative overflow-hidden p-5 hover:border-slate-600 transition-colors">
                           <div className="flex justify-between mb-6 items-center">
                              <div className="h-5 w-1/3 bg-slate-700 rounded"></div>
                              <div className="h-7 w-20 bg-slate-800 rounded border border-slate-700"></div>
                           </div>
                           <div className="flex items-end justify-between h-36 gap-2 px-1">
                              {/* Dynamic Chart Data Generation based on ActiveFeature */}
                              {(() => {
                                 const seeds = [
                                    [40, 70, 50, 90, 60, 80, 50, 70, 60, 90, 55, 85], 
                                    [20, 30, 40, 50, 60, 70, 80, 90, 85, 95, 100, 90], 
                                    [90, 80, 70, 60, 50, 60, 70, 50, 40, 30, 20, 10], 
                                    [50, 50, 50, 50, 60, 60, 70, 70, 80, 80, 90, 90]
                                 ];
                                 const colors = [
                                    'from-blue-600 to-blue-400', 
                                    'from-green-600 to-green-400', 
                                    'from-purple-600 to-purple-400', 
                                    'from-amber-600 to-amber-400'
                                 ];
                                 return seeds[activeFeature % 4].map((h, i) => (
                                    <motion.div 
                                       key={`${activeFeature}-${i}`}
                                       initial={{ height: 0 }}
                                       animate={{ height: `${h}%` }}
                                       transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.05 }}
                                       className={`flex-1 bg-gradient-to-t ${colors[activeFeature % 4]} rounded-t-sm opacity-90 hover:opacity-100 hover:scale-y-110 origin-bottom shadow-[0_0_10px_rgba(0,0,0,0.3)]`} 
                                    />
                                 ));
                              })()}
                           </div>
                        </div>

                        {/* Side Panel */}
                        <Stack direction="col" gap={3} className="col-span-1 h-64 bg-[#1E293B] rounded-xl border border-slate-700/50 p-5 hover:border-slate-600 transition-colors">
                           <div className="h-5 w-1/2 bg-slate-700 rounded mb-4"></div>
                           {[1,2,3,4].map(i => (
                              <div key={i} className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-slate-800/50 transition-colors">
                                 <div className={`h-7 w-7 rounded-full border border-slate-700 transition-colors duration-500 ${
                                    activeFeature === i-1 ? 'bg-white/10' : 'bg-slate-800'
                                 }`}></div>
                                 <Stack direction="col" gap={1} className="flex-1">
                                    <div className="h-2.5 w-3/4 bg-slate-700 rounded"></div>
                                    <div className="h-1.5 w-1/2 bg-slate-800 rounded"></div>
                                 </Stack>
                              </div>
                           ))}
                        </Stack>
                     </Grid>
                  </Grid>
               </motion.div>
            </div>
         </Container>
      </section>

      {/* 3. PAIN VS GAIN (Evolution - Premium Upgrade) */}
      <Section className="relative border-t border-white/5 py-16 md:py-24 overflow-hidden">
         {/* Cinematic Background */}
         <div className="absolute inset-0 bg-[#020617]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-[#020617] to-[#020617] pointer-events-none"></div>
         {/* Dual Tone Ambient Glow */}
         <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>
         
         <Container size="7xl" className="relative z-10">
            <div className="text-center mb-12 md:mb-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                  <RefreshCw className="w-3 h-3" /> Transformation
               </div>
               <Typography variant="h2" as="h2" className="text-3xl md:text-5xl font-bold text-white leading-tight">From <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-600">Chaos</span> to <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Clarity</span></Typography>
               <Typography variant="body-lg" className="text-slate-400">Lihat bagaimana BizOps mengubah frustrasi operasional harian menjadi keunggulan strategis yang nyata.</Typography>
            </div>
            
            <CardSlider desktopClassName="md:block md:space-y-6" mobileItemWidth="w-[85vw] sm:w-[400px]">
               {data.challenges?.map((item: any, idx: number) => (
                  <motion.div 
                     key={idx}
                     variants={FADE_UP_VARIANTS}
                     className="relative grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden group transition-all duration-500 h-full shadow-2xl shadow-black/50 ring-1 ring-white/10 hover:ring-white/20"
                  >
                     {/* Connector Arrow (Desktop) */}
                     <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[#0F172A] border-4 border-[#020617] rounded-full items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                     </div>

                     {/* Pain Side (Left) - Darker, Red-tinted Chaos */}
                     <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-[#1a0505] via-[#0f0303] to-[#050101] relative overflow-hidden group-hover:from-[#2b0a0a] transition-colors duration-500 h-full flex flex-col">
                        {/* Chaos Noise/Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
                        
                        <div className="relative z-10 flex-grow">
                           <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                                 <AlertTriangle className="w-5 h-5 text-red-500" />
                              </div>
                              <span className="text-red-500/80 font-bold uppercase tracking-wider text-xs drop-shadow-md">Before BizOps</span>
                           </div>
                           <Typography variant="h3" as="h3" className="font-extrabold leading-snug group-hover:text-white">"{item.pain}"</Typography>
                           <Typography variant="caption" className="leading-relaxed">{item.context}</Typography>
                        </div>
                     </div>

                     {/* Gain Side (Right) - Bright, Emerald-tinted Clarity */}
                     <div className="p-8 md:p-12 bg-gradient-to-bl from-[#022c22] via-[#011c16] to-[#050101] relative overflow-hidden group-hover:from-[#033d2e] transition-colors duration-500 h-full flex flex-col">
                        {/* Clarity Texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] -ml-20 -mb-20 pointer-events-none"></div>

                        <div className="relative z-10 flex-grow">
                           <div className="flex items-center gap-3 mb-6 justify-end md:justify-start">
                              <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs order-2 md:order-1 drop-shadow-md">After BizOps</span>
                              <div className="p-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg order-1 md:order-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                 <CheckCircle className="w-5 h-5 text-emerald-400" />
                              </div>
                           </div>
                           <Typography variant="h3" as="h3" className="font-extrabold text-white">{item.gain}</Typography>
                           <Typography variant="caption" className="leading-relaxed">{item.gainDesc}</Typography>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </CardSlider>
         </Container>
      </Section>

      {/* 4. CTA (Final Push - Premium Style) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-[#020617]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <Container size="5xl" className="relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium mb-8 backdrop-blur-sm"
           >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
             </span>
             Ready to deploy?
           </motion.div>

           <Typography variant="h2" as="h2" className="font-bold text-white leading-tight tracking-tight font-sans">{data.cta?.head || "Siap Transformasi Bisnis Anda?"}</Typography>
           
           <Typography variant="body-xl" className="text-slate-400">Bergabung dengan para pemimpin industri yang telah beralih ke BizOps. Setup cepat, hasil instan.</Typography>

           <Stack direction="col" gap={5} className="justify-center items-center">
              <Link to="/demo" className="w-full sm:w-auto">
                 <BouncyButton className="h-16 px-12 text-lg bg-white text-slate-900 border-none shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-slate-200 hover:scale-105 transition-all duration-300 font-bold flex items-center justify-center gap-2 w-full sm:w-auto">
                    Mulai Sekarang <ArrowRight className="w-5 h-5" />
                 </BouncyButton>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                 <Button variant="outline-white" size="lg" className="h-16 px-10 text-lg border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md w-full sm:w-auto">
                    Hubungi Sales
                 </Button>
              </Link>
           </Stack>
           
           <Typography variant="caption" className="text-slate-500">*Free trial 14 hari. Tidak butuh kartu kredit.</Typography>
        </Container>
      </section>
    </div>
  );
};

export default RolePage;
