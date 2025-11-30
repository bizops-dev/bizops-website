import React, { useState } from 'react';
import Button from '../components/Button';
import { Rocket, CheckCircle, Zap, ShieldCheck, TrendingUp, Code, Server, Users, ArrowRight, HelpCircle, Clock, Layout, FileText, ChevronRight, Play, Plus, Minus } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const StartupProgramPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors font-sans selection:bg-purple-500/30">
      <SEO title="Program BizOps for Startups | Diskon & Kredit Gratis" description="Program akselerasi eksklusif untuk startup. Dapatkan akses teknologi ERP kelas dunia dengan harga khusus agar Anda bisa fokus pada pertumbuhan." />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0F172A] pt-32 pb-32 lg:pt-48 lg:pb-40 text-white text-center overflow-hidden">
        {/* Modern Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 backdrop-blur-md text-purple-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
             <Rocket className="w-3 h-3" /> BizOps for Startups
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight"
          >
            Build Fast. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">Scale Safe.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Infrastruktur operasional <em>audit-ready</em> untuk startup ambisius. Hemat <em>burn rate</em> dengan kredit hingga $5,000 dan akses ke teknologi Enterprise sejak Day 1.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="flex flex-col sm:flex-row justify-center gap-4"
          >
             <Link to="/partners/apply">
                <Button size="lg" className="h-14 px-10 text-lg font-bold bg-white text-slate-900 hover:bg-slate-100 border-none shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1">
                   Apply for Credits <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
             </Link>
             <Button size="lg" variant="outline" className="h-14 px-10 border-slate-700 text-white hover:bg-white/10 font-medium">
                <Play className="w-4 h-4 mr-2 fill-current" /> Watch Founder Stories
             </Button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-slate-500 font-medium"
          >
            Trusted by 500+ High-Growth Startups in Indonesia
          </motion.p>
        </div>
      </section>

      {/* --- LOGO WALL (Social Proof) --- */}
      <section className="bg-[#0F172A] border-b border-slate-800 pb-16">
         <div className="max-w-7xl mx-auto px-4 overflow-hidden">
            <div className="flex justify-center gap-12 grayscale opacity-40 hover:opacity-70 transition-opacity duration-500">
               {/* Placeholder Logos */}
               <div className="text-xl font-bold text-white">ACME Corp</div>
               <div className="text-xl font-bold text-white">Nebula AI</div>
               <div className="text-xl font-bold text-white">Quantum Leap</div>
               <div className="text-xl font-bold text-white">HyperGrowth</div>
               <div className="text-xl font-bold text-white hidden md:block">Stark Industries</div>
            </div>
         </div>
      </section>

      {/* --- THE PERKS (Bento Grid Style) --- */}
      <section className="py-32 bg-slate-50 dark:bg-slate-950 relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">More Than Just Free Credits</h2>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Kami berinvestasi pada kesuksesan jangka panjang Anda dengan ekosistem pendukung yang lengkap.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                     <DollarSign className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Up to $5,000 Credits</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                     Kredit penggunaan BizOps Cloud selama 12 bulan pertama. Cukup untuk meng-cover biaya operasional tim hingga 50 orang tanpa membebani cashflow awal Anda.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group md:-mt-8">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                     <Code className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technical Mentorship</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                     Akses langsung ("Red Phone") ke Solution Architect kami. Konsultasi desain sistem, integrasi API, dan *security best practices* agar produk Anda *scalable* sejak hari pertama.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                     <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Founder Community</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                     Bergabung dengan jaringan eksklusif founder. Dapatkan kesempatan *co-marketing*, akses ke event networking privat, dan pengenalan ke partner investor kami.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* --- WHY IT MATTERS (Split Layout) --- */}
      <section className="py-32 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                     The Scaling Trap
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                     Jangan Biarkan "Admin Chaos" <br/>Membunuh Momentum.
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                     Startup sering gagal bukan karena produknya, tapi karena operasional yang berantakan saat scaling. Spreadsheet yang tidak sinkron dan HR manual adalah "utang teknis" operasional yang berbahaya.
                  </p>
                  
                  <div className="space-y-8">
                     <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-700 dark:text-slate-300">
                           <Layout className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Investor-Ready Reports</h4>
                           <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              Laporan keuangan, Burn Rate, dan MRR real-time untuk *due diligence* investor. Tidak perlu begadang menyusun laporan manual setiap akhir bulan.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-700 dark:text-slate-300">
                           <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Enterprise-Grade Compliance</h4>
                           <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              Siap untuk audit ISO 27001 dan GDPR tanpa perlu menyewa konsultan mahal. Amankan data pelanggan Anda dengan standar perbankan.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="order-1 lg:order-2 relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px]"></div>
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]"></div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-700 shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                     <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-[10px] font-mono text-slate-500 dark:text-slate-400">dashboard.bizops.id</div>
                     </div>
                     {/* Mockup Content */}
                     <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                              <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold">Runway</div>
                              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">18 Mo</div>
                              <div className="text-xs text-green-500 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Healthy</div>
                           </div>
                           <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                              <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold">Monthly Burn</div>
                              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">$12k</div>
                              <div className="text-xs text-green-500 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full w-fit">-5% vs Last Mo</div>
                           </div>
                        </div>
                        
                        <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                           <div className="flex justify-between items-end mb-4">
                              <div className="text-sm font-bold text-slate-700 dark:text-slate-300">Revenue Growth (MRR)</div>
                              <div className="text-xs text-slate-400">Last 6 Months</div>
                           </div>
                           <div className="h-32 flex items-end justify-between gap-3">
                              {[30, 45, 40, 60, 55, 85, 70, 95].map((h, i) => (
                                 <div key={i} className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative group overflow-hidden">
                                    <div 
                                       className="absolute bottom-0 w-full bg-indigo-500 rounded-t-lg transition-all duration-700 ease-out group-hover:bg-indigo-400" 
                                       style={{ height: `${h}%` }}
                                    ></div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- TRACKS (Comparison) --- */}
      <section className="py-32 bg-slate-50 dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  Eligibility Criteria
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Choose Your Growth Track</h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                  Program kami disesuaikan dengan fase pertumbuhan startup Anda. Dari ide di garasi hingga ekspansi regional.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
               {/* Bootstrap Track */}
               <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all group relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors"></div>
                  
                  <div className="flex items-center gap-5 mb-10">
                     <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
                        <Zap className="w-8 h-8" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Bootstrap</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Pre-Seed / Angel Round</p>
                     </div>
                  </div>
                  
                  <div className="mb-10 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50">
                     <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">90%</span>
                        <span className="text-xl font-bold text-slate-500 uppercase">OFF</span>
                     </div>
                     <p className="text-slate-600 dark:text-slate-300 font-medium">Selama 12 bulan pertama.</p>
                  </div>
                  
                  <div className="space-y-5 mb-12 flex-grow">
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                           <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Total Funding <span className="text-slate-900 dark:text-white font-bold">&lt; $1M</span></span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                           <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Usia &lt; 2 tahun</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                           <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Produk/Website Aktif</span>
                     </div>
                  </div>
                  
                  <Link to="/partners/apply?track=bootstrap">
                     <Button fullWidth variant="outline" className="border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 h-14 text-lg font-bold rounded-2xl group-hover:border-blue-500/50 group-hover:text-blue-600 transition-all">
                        Apply Bootstrap Track
                     </Button>
                  </Link>
               </div>

               {/* Scale-Up Track */}
               <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-700 shadow-2xl hover:border-purple-500 transition-all group relative overflow-hidden flex flex-col text-white transform md:-translate-y-4">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/30 transition-colors"></div>
                  <div className="absolute top-0 left-8 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-lg">MOST POPULAR</div>
                  
                  <div className="flex items-center gap-5 mb-10 mt-4">
                     <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-300 shadow-inner border border-purple-500/30">
                        <TrendingUp className="w-8 h-8" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold text-white">Scale-Up</h3>
                        <p className="text-purple-200 font-medium mt-1">Seed / Series A+</p>
                     </div>
                  </div>
                  
                  <div className="mb-10 p-8 bg-slate-800/50 rounded-3xl border border-slate-700">
                     <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-extrabold text-white tracking-tight">50%</span>
                        <span className="text-xl font-bold text-slate-400 uppercase">OFF</span>
                     </div>
                     <p className="text-slate-300 font-medium">Selama 24 bulan berturut-turut.</p>
                  </div>
                  
                  <div className="space-y-5 mb-12 flex-grow">
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                           <CheckCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-slate-200 font-medium">Total Funding <span className="text-white font-bold">&gt; $1M</span></span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                           <CheckCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-slate-200 font-medium">Priority Support (SLA 4 Jam)</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                           <CheckCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-slate-200 font-medium">Dedicated Success Manager</span>
                     </div>
                  </div>
                  
                  <Link to="/partners/apply?track=scaleup">
                     <Button fullWidth className="bg-purple-600 hover:bg-purple-500 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-purple-900/50 border-none transition-all hover:scale-[1.02]">
                        Apply Scale-Up Track
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* --- APPLICATION PROCESS --- */}
      <section className="py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-20">Proses Aplikasi Seamless</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>

               <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center mb-8 text-xl font-bold text-slate-400 group-hover:border-purple-500 group-hover:text-purple-500 transition-colors duration-500 z-10">1</div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Submit Form</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">Isi formulir aplikasi online. Hanya butuh 5 menit.</p>
               </div>
               <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center mb-8 text-xl font-bold text-slate-400 group-hover:border-purple-500 group-hover:text-purple-500 transition-colors duration-500 delay-100 z-10">2</div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Verification</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">Tim kami memverifikasi profil startup Anda (LinkedIn/Pitch Deck).</p>
               </div>
               <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center mb-8 text-xl font-bold text-slate-400 group-hover:border-purple-500 group-hover:text-purple-500 transition-colors duration-500 delay-200 z-10">3</div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Approval</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">Terima email konfirmasi & kode promo dalam 48 jam.</p>
               </div>
               <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/20 border-4 border-emerald-100 dark:border-emerald-900/50 rounded-full flex items-center justify-center mb-8 text-xl font-bold text-emerald-600 dark:text-emerald-400 shadow-lg shadow-emerald-500/20 z-10">
                     <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-emerald-600 dark:text-emerald-400">Onboarding</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">Setup akun Enterprise Anda dan mulai scaling.</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- FAQ (Accordion Style) --- */}
      <section className="py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 dark:text-white">Founder's FAQ</h2>
            <div className="space-y-4">
               {[
                  { q: "Apakah ada biaya tersembunyi?", a: "Tidak ada. Diskon diberikan dimuka pada tagihan bulanan/tahunan. Setelah periode program berakhir (12 atau 24 bulan), tagihan akan kembali ke harga normal. Kami akan mengirimkan notifikasi 30 hari sebelumnya." },
                  { q: "Bagaimana jika kami belum punya badan hukum?", a: "Anda bisa mendaftar dengan nama tim sementara atau 'Stealth Mode'. Namun, untuk aktivasi lisensi komersial dan faktur pajak, kami memerlukan dokumen legalitas (NIB/SK Kemenkumham) dalam waktu 3 bulan setelah onboarding." },
                  { q: "Bisakah kami pindah ke Self-Hosted nanti?", a: "Tentu saja. Salah satu keunggulan BizOps adalah Data Sovereignty. Jika startup Anda berkembang dan membutuhkan infrastruktur on-premise atau private cloud sendiri, kami menyediakan jalur migrasi data yang mulus." },
                  { q: "Apakah ini termasuk support?", a: "Ya. Paket startup mendapatkan akses Standard Support (Email & Chat) dengan SLA 24 jam. Untuk Scale-Up Track, Anda mendapatkan Prioritas Support dengan SLA 4 jam." }
               ].map((item, idx) => (
                  <FAQAccordion key={idx} question={item.q} answer={item.a} />
               ))}
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-40 bg-[#0B1120] text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         {/* Glow */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/30 rounded-full blur-[150px] pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">Siap Membangun <br/>Unicorn Berikutnya?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
               Fokus pada inovasi produk Anda, biarkan kami yang menangani infrastruktur operasional yang membosankan (tapi krusial).
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/partners/apply">
                  <Button size="lg" className="h-16 px-12 text-lg font-bold bg-white text-slate-900 hover:bg-slate-100 border-none shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-1 rounded-2xl">
                     Apply Now - It's Free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
               </Link>
               <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-slate-700 text-white hover:bg-white/10 rounded-2xl">
                  Talk to Founder Success
               </Button>
            </div>
         </div>
      </section>

    </div>
  );
};

const FAQAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all hover:border-purple-300 dark:hover:border-purple-700">
         <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-5 flex justify-between items-center text-left"
         >
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">{question}</h3>
            <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
               {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </div>
         </button>
         <AnimatePresence>
            {isOpen && (
               <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
               >
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4">
                     {answer}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

function DollarSign({ className }: { className?: string }) {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <line x1="12" y1="1" x2="12" y2="23"></line>
         <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
   );
}

export default StartupProgramPage;
