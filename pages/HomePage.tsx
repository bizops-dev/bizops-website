
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Lock, 
  PlayCircle, ArrowUpRight, ChevronRight
} from 'lucide-react';
import Button from '../components/Button';
import { 
  globalStats, homeSolutions, homeIndustriesData, homeRolesData, 
  homeProblems, homeUVP, homeTechValidation, homeIntegrations, homeProcess 
} from '../data/content';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';

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
        description="Satu platform untuk HR, Finance, dan Supply Chain. Skalakan bisnis dengan infrastruktur aman dan sesuai regulasi Indonesia." 
      />
      
      {/* 1. HERO SECTION (Redesigned) */}
      <div className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
             <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
             <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow delay-700"></div>
             <div className="absolute top-[40%] left-[60%] w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-pulse-slow delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
               </span>
               <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                 New: AI-Powered Inventory Forecasting
               </span>
               <ArrowRight className="w-3 h-3 text-slate-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8 max-w-5xl mx-auto animate-fade-in-up delay-100">
              Satu Sistem Kendali untuk <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400">
                Seluruh Operasional Bisnis.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
              Tinggalkan spreadsheet yang terpisah-pisah. BizOps menyatukan HR, Finance, dan Supply Chain dalam satu platform yang aman, cepat, dan siap scale-up.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300 mb-16">
              <Link to="/demo">
                <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 w-full sm:w-auto">
                  Mulai Demo Gratis
                </Button>
              </Link>
              <Link to="/pricing-calculator">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                  <CalculatorIcon className="mr-2 w-5 h-5" /> Simulasi Harga
                </Button>
              </Link>
            </div>

            {/* Hero Visual / Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto mt-8 animate-fade-in-up delay-500 group">
               <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>
               <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] transform transition-transform duration-700 group-hover:scale-[1.01] group-hover:shadow-primary-500/10">
                  {/* Mockup Header */}
                  <div className="h-10 border-b border-slate-800 bg-slate-900 flex items-center px-4 gap-2">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                     </div>
                     <div className="ml-4 px-3 py-1 bg-slate-800 rounded-md text-[10px] text-slate-500 font-mono flex items-center gap-2">
                        <Lock className="w-3 h-3" /> bizops.id/dashboard
                     </div>
                  </div>
                  
                  {/* Mockup Content (Abstract Dashboard) */}
                  <div className="p-6 grid grid-cols-4 gap-6 h-full bg-slate-900/50">
                     {/* Sidebar */}
                     <div className="col-span-1 hidden md:flex flex-col gap-3 border-r border-slate-800 pr-6">
                        <div className="h-8 w-3/4 bg-slate-800 rounded mb-4"></div>
                        {[1,2,3,4,5].map(i => <div key={i} className="h-6 w-full bg-slate-800/50 rounded"></div>)}
                     </div>
                     {/* Main Area */}
                     <div className="col-span-4 md:col-span-3 grid grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                           <div className="h-4 w-1/3 bg-slate-700 rounded mb-4"></div>
                           <div className="h-12 w-2/3 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded mb-2"></div>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                           <div className="h-4 w-1/3 bg-slate-700 rounded mb-4"></div>
                           <div className="flex items-end gap-2 h-12">
                              {[30, 50, 40, 70, 60, 80].map((h, i) => (
                                 <div key={i} className="flex-1 bg-primary-600 rounded-t opacity-60" style={{height: `${h}%`}}></div>
                              ))}
                           </div>
                        </div>
                        <div className="col-span-2 bg-slate-800/30 p-4 rounded-xl border border-slate-800 h-32">
                           <div className="h-4 w-1/4 bg-slate-700 rounded mb-4"></div>
                           <div className="space-y-2">
                              <div className="h-2 w-full bg-slate-800 rounded"></div>
                              <div className="h-2 w-5/6 bg-slate-800 rounded"></div>
                              <div className="h-2 w-4/6 bg-slate-800 rounded"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Social Proof Logos */}
            <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
               <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
                  Dipercaya oleh 500+ Perusahaan Modern
               </p>
               <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:opacity-100">
                  {['HEXAGON', 'KARYA BETON', 'TRANS LOGISTIC', 'MEGA FINANCE', 'AGRO CORP'].map(brand => (
                     <span key={brand} className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-200 tracking-tighter">{brand}</span>
                  ))}
               </div>
            </div>
          </div>
      </div>

      {/* 2. PROBLEMS SECTION (Pain Points) */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
         <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
               Mengapa Bisnis Anda <span className="text-red-500">Stuck?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
               Pertumbuhan bisnis seringkali terhambat bukan karena kurangnya penjualan, tapi karena kekacauan operasional internal.
            </p>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {homeProblems.map((prob, idx) => (
               <Card key={idx} className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-800" padding="lg">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${prob.bg}`}>
                     <prob.icon className={`w-7 h-7 ${prob.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prob.title}</h3>
                  <p className="text-sm font-bold text-red-500 dark:text-red-400 mb-4 uppercase tracking-wide text-xs">{prob.subtitle}</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                     {prob.desc}
                  </p>
               </Card>
            ))}
         </div>
      </Section>

      {/* 3. SOLUTIONS SECTION (The Fix) */}
      <Section dark className="relative overflow-hidden">
         {/* Abstract BG */}
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-900 to-slate-950 pointer-events-none"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
               <div className="max-w-2xl">
                  <Badge variant="outline-white" className="mb-4">BizOps Platform</Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
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
               <div className="lg:col-span-4 space-y-3">
                  {homeSolutions.map((sol) => (
                     <button
                        key={sol.id}
                        onClick={() => setActiveTab(sol.id)}
                        className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                           activeTab === sol.id 
                           ? 'bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 shadow-lg translate-x-2' 
                           : 'hover:bg-slate-800/30 border border-transparent text-slate-400'
                        }`}
                     >
                        <div className="flex items-center gap-4">
                           <div className={`p-2 rounded-lg transition-colors ${activeTab === sol.id ? sol.bg : 'bg-slate-800 group-hover:bg-slate-700'}`}>
                              <sol.icon className={`w-5 h-5 ${activeTab === sol.id ? sol.color : 'text-slate-500'}`} />
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
                        {activeTab === sol.id && <ChevronRight className={`w-5 h-5 ${sol.color}`} />}
                     </button>
                  ))}
               </div>

               {/* Content Panel */}
               <div className="lg:col-span-8">
                  <div key={activeTab} className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden transition-all duration-500 animate-fade-in">
                     {/* Glow Effect */}
                     <div className={`absolute top-0 right-0 w-64 h-64 ${activeSolution.bg} blur-[80px] rounded-full opacity-20 pointer-events-none`}></div>
                     
                     <div className="relative z-10">
                        <div className="mb-10">
                           <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3`}>
                              <activeSolution.icon className={`w-8 h-8 ${activeSolution.color}`} />
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
                                       <CheckCircle2 className={`w-5 h-5 ${activeSolution.color} mt-0.5 flex-shrink-0`} />
                                       <span className="text-slate-300 text-sm md:text-base">{mod}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col justify-center items-center text-center">
                              <div className="mb-4 p-4 rounded-full bg-slate-800 ring-1 ring-slate-700">
                                 <PlayCircle className={`w-8 h-8 ${activeSolution.color}`} />
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
      </Section>

      {/* 4. VALUE PROPOSITION (UVP) */}
      <Section>
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
               Bukan Sekadar ERP Biasa
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
               Kami membangun BizOps dengan filosofi "Indonesia-First". Sesuai regulasi lokal, fleksibel untuk budaya kerja lokal.
            </p>
         </div>

         <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8">
            {homeUVP.map((uvp, idx) => (
               <div key={idx} className="relative group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300">
                  <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800 group-hover:text-primary-100 dark:group-hover:text-primary-900/30 transition-colors">
                     <uvp.icon className="w-24 h-24 opacity-20 transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <uvp.icon className="w-6 h-6" />
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
      </Section>

      {/* 5. PROCESS SECTION (How it works) */}
      <Section className="bg-slate-900 text-white overflow-hidden relative">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Go-Live dalam 30 Hari.</h2>
                  <p className="text-slate-400 text-lg max-w-2xl">
                     Metodologi implementasi "Sprint" kami memangkas waktu setup hingga 70%. Tanpa drama, tanpa biaya konsultan yang membengkak.
                  </p>
               </div>
               <Link to="/services">
                  <Button variant="outline-white">Pelajari Metodologi Kami</Button>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {homeProcess.map((step, idx) => (
                  <div key={idx} className="relative group">
                     {/* Connector Line */}
                     {idx < homeProcess.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-800 -ml-4 z-0"></div>
                     )}
                     
                     <div className="relative z-10 bg-slate-800 p-6 rounded-2xl border border-slate-700 h-full hover:bg-slate-700 transition-colors">
                        <div className="text-4xl font-black text-slate-700 mb-4 opacity-50 group-hover:text-slate-600 transition-colors">{step.step}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Section>

      {/* 6. INDUSTRIES & ROLES */}
      <Section>
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Solusi Spesifik Industri</h2>
            <p className="text-slate-600 dark:text-slate-400">Kami tidak percaya pada solusi "Satu Ukuran untuk Semua".</p>
         </div>
         
         <CardSlider desktopClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" className="mb-16">
            {industries.map((ind) => (
               <Link key={ind.id} to={`/solutions/${ind.id}`} className="group h-full">
                  <Card className="h-full hover:border-primary-500 transition-all hover:-translate-y-1">
                     <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <ind.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{ind.title}</h3>
                     <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                        {ind.description}
                     </p>
                     <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                        Explore <ArrowRight className="w-4 h-4 ml-1" />
                     </div>
                  </Card>
               </Link>
            ))}
         </CardSlider>

         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Didesain untuk Peran Anda</h2>
            <p className="text-slate-600 dark:text-slate-400">Dashboard yang relevan untuk setiap pemangku kepentingan.</p>
         </div>

         <CardSlider desktopClassName="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {roles.map((role) => (
               <Link key={role.id} to={`/role/${role.id}`} className="group h-full">
                  <Card className="h-full text-center hover:border-blue-500 transition-all" padding="sm">
                     <div className="w-10 h-10 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                        <role.icon className="w-5 h-5" />
                     </div>
                     <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{role.title}</h3>
                     <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {role.subtitle}
                     </p>
                  </Card>
               </Link>
            ))}
         </CardSlider>
      </Section>

      {/* 7. TECH VALIDATION & STATS */}
      <Section dark className="border-t border-slate-800">
         <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
               <Badge variant="outline-white" className="mb-4">Enterprise Grade</Badge>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Dibangun untuk Skala Besar.
               </h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Jangan biarkan teknologi membatasi pertumbuhan Anda. BizOps dibangun di atas stack modern yang digunakan oleh perusahaan Fortune 500.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  {homeTechValidation.map((tech, idx) => (
                     <div key={idx} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                           <tech.icon className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                           <div className="text-white font-bold">{tech.value}</div>
                           <div className="text-xs text-slate-500 uppercase">{tech.label}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {globalStats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
                     <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                     <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </Section>

      {/* 7. INTEGRATIONS */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
         <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Terhubung dengan Ekosistem</h2>
            <p className="text-slate-600 dark:text-slate-400">
               Open API kami memudahkan integrasi dengan bank, pajak, dan marketplace.
            </p>
         </div>
         
         <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {homeIntegrations.map((int, idx) => (
               <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <div className="font-bold text-xs text-slate-400 uppercase tracking-wider">{int.icon}</div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">{int.name}</div>
               </div>
            ))}
         </div>
         
         <div className="text-center mt-10">
            <Link to="/integrations" className="text-primary-600 font-bold hover:underline inline-flex items-center">
               Lihat 50+ Integrasi Lainnya <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
         </div>
      </Section>

      {/* 8. CTA / FOOTER PREVIEW */}
      <Section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-slate-900 z-0"></div>
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
               Siap Mengubah Cara Anda Bekerja?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
               Bergabunglah dengan 500+ perusahaan yang telah beralih ke BizOps. Tanpa komitmen jangka panjang, batalkan kapan saja.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/contact">
                  <Button variant="white" size="lg" className="h-16 px-10 text-xl font-bold w-full sm:w-auto shadow-2xl shadow-white/10 hover:scale-105 transition-transform">
                     Hubungi Sales
                  </Button>
               </Link>
               <Link to="/pricing-calculator">
                  <Button variant="outline-white" size="lg" className="h-16 px-10 text-xl w-full sm:w-auto">
                     Lihat Harga
                  </Button>
               </Link>
            </div>
            <p className="mt-8 text-sm text-primary-200/60">
               14-day free trial available. No credit card required.
            </p>
         </div>
      </Section>

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
