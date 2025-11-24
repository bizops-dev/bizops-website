
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Award, Lock } from 'lucide-react';
import Button from '../components/Button';
import { globalStats, homeSolutions, industriesData, rolesData, homeProblems, homeUVP, homeTechValidation, homeIntegrations, homeProcess } from '../data/content';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(homeSolutions[0].id);
  const activeSolution = homeSolutions.find(s => s.id === activeTab) || homeSolutions[0];

  // Helper to convert object to array for mapping
  const industries = Object.entries(industriesData).map(([key, val]) => ({ id: key, ...val }));
  const roles = Object.entries(rolesData).map(([key, val]) => ({ id: key, ...val }));

  // Schema.org WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BizOps",
    "url": "https://bizops.id/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bizops.id/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="The Adaptive Business Operating System for Modern Enterprises. Satukan HR, Finance, dan Operasional." 
        structuredData={websiteSchema}
      />
      
      {/* 1. Hero Section */}
      <Section className="relative overflow-hidden pt-20 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl animate-fade-in-up z-10 will-change-transform">
              <div className="mb-6">
                <Badge variant="primary" className="shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
                  New: AI-Powered Stock Forecasting
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
                The Adaptive Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Operating System.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                Satu platform terintegrasi untuk HR, Finance, dan Supply Chain. Skalakan bisnis Anda dengan infrastruktur yang aman, fleksibel, dan sesuai regulasi Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo">
                  <Button size="lg" className="shadow-lg shadow-primary-500/30">Mulai Demo Gratis</Button>
                </Link>
                <Link to="/platform">
                  <Button variant="outline" size="lg">Pelajari Platform <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                 <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                       <div key={i} className="w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                          {String.fromCharCode(64+i)}
                       </div>
                    ))}
                 </div>
                 <div>Digunakan oleh 500+ Tim Operasional</div>
              </div>
            </div>

            {/* Right Visual - Abstract Dashboard */}
            <div className="relative lg:ml-auto w-full">
               <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-300 will-change-transform">
                  {/* Fake UI Header */}
                  <div className="h-10 border-b border-slate-700 flex items-center px-4 gap-2 bg-slate-800/50">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  {/* Dashboard Grid */}
                  <div className="p-6 grid grid-cols-3 gap-4 h-full">
                     {/* Sidebar */}
                     <div className="col-span-1 flex flex-col gap-3">
                        <div className="h-8 bg-slate-800 rounded w-3/4"></div>
                        <div className="h-4 bg-slate-800/50 rounded w-full"></div>
                        <div className="h-4 bg-slate-800/50 rounded w-full"></div>
                        <div className="h-4 bg-slate-800/50 rounded w-2/3"></div>
                        
                        <div className="mt-auto bg-primary-900/30 p-3 rounded border border-primary-500/20">
                           <div className="h-2 bg-primary-500 rounded w-1/2 mb-2"></div>
                           <div className="h-10 bg-primary-600 rounded w-full"></div>
                        </div>
                     </div>
                     
                     {/* Main Chart Area */}
                     <div className="col-span-2 flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                              <div className="text-xs text-slate-400 mb-1">Revenue</div>
                              <div className="text-xl font-bold text-white">Rp 2.4B</div>
                              <div className="mt-2 h-1 w-full bg-slate-700 rounded overflow-hidden">
                                 <div className="h-full w-3/4 bg-green-500"></div>
                              </div>
                           </div>
                           <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                              <div className="text-xs text-slate-400 mb-1">Expenses</div>
                              <div className="text-xl font-bold text-white">Rp 850M</div>
                              <div className="mt-2 h-1 w-full bg-slate-700 rounded overflow-hidden">
                                 <div className="h-full w-1/2 bg-red-500"></div>
                              </div>
                           </div>
                        </div>
                        <div className="flex-grow bg-slate-800 rounded-lg border border-slate-700 p-4 flex items-end gap-2">
                           {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                              <div key={i} className="flex-1 bg-primary-600 opacity-80 rounded-t hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 animate-bounce duration-[2000ms]">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                     <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                     <div className="text-sm font-bold text-slate-900 dark:text-white">PO Approved</div>
                     <div className="text-xs text-slate-500 dark:text-slate-400">Just now via Mobile</div>
                  </div>
               </div>
            </div>
          </div>
      </Section>

      {/* 2. Trusted By (Social Proof) */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800" noPadding>
         <div className="py-10 text-center">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
               Dipercaya oleh Pemimpin Industri
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:opacity-100">
               <div className="text-xl font-black text-slate-800 dark:text-slate-200">HEXAGON</div>
               <div className="text-xl font-black text-slate-800 dark:text-slate-200">KARYA BETON</div>
               <div className="text-xl font-black text-slate-800 dark:text-slate-200">TRANS LOGISTIC</div>
               <div className="text-xl font-black text-slate-800 dark:text-slate-200">MEGA FINANCE</div>
               <div className="text-xl font-black text-slate-800 dark:text-slate-200">AGRO CORP</div>
            </div>
         </div>
      </Section>

      {/* 3. The Problems (The Cost of Chaos) */}
      <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Berhenti Mengelola Bisnis Kompleks dengan Sistem yang Terpisah (Silo)</h2>
               <p className="text-lg text-slate-600 dark:text-slate-400">
                  Tantangan terbesar perusahaan saat ini bukan pada kompetisi, melainkan inefisiensi internal akibat data yang tidak berbicara satu sama lain.
               </p>
            </div>
            
            <CardSlider desktopClassName="md:grid md:grid-cols-3 md:gap-8">
               {homeProblems.map((prob, idx) => (
                  <Card key={idx} className={`${prob.bg} dark:bg-slate-800 dark:border-slate-700 h-full`} hoverEffect>
                     <prob.icon className={`w-10 h-10 ${prob.color} mb-6`} />
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prob.title}</h3>
                     <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">{prob.subtitle}</p>
                     <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{prob.desc}</p>
                  </Card>
               ))}
            </CardSlider>
      </Section>

      {/* 4. Comprehensive Solutions (INTERACTIVE TABS) */}
      <Section dark className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">9 Pilar Operasional, Satu Aliran Data Tanpa Putus.</h2>
            <p className="text-slate-400 text-lg">
              BizOps bukan sekadar kumpulan modul; ini adalah organisme digital yang menghubungkan setiap denyut nadi perusahaan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tabs Navigation (Left) */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
               {homeSolutions.map((sol) => (
                 <button
                   key={sol.id}
                   onClick={() => setActiveTab(sol.id)}
                   className={`text-left px-6 py-5 rounded-xl transition-all duration-300 border-l-4 flex items-center gap-4 ${
                     activeTab === sol.id 
                       ? `bg-slate-800 border-primary-500 shadow-lg` 
                       : 'border-transparent hover:bg-slate-800/50 text-slate-400 hover:text-white'
                   }`}
                 >
                   <sol.icon className={`w-6 h-6 ${activeTab === sol.id ? sol.color : 'text-slate-500'}`} />
                   <div>
                     <div className={`font-bold text-lg ${activeTab === sol.id ? 'text-white' : 'text-slate-300'}`}>
                       {sol.label}
                     </div>
                     {activeTab === sol.id && (
                        <div className="text-xs text-slate-400 mt-1 animate-fade-in-up">
                           {sol.category}
                        </div>
                     )}
                   </div>
                 </button>
               ))}
            </div>

            {/* Tab Content (Right) */}
            <div className="lg:col-span-8">
               <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 h-full flex flex-col justify-center animate-fade-in-up key={activeTab}">
                  <div className="mb-8">
                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Impact on Business</h3>
                     <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed">
                        "{activeSolution.impact}"
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-4">
                        <h4 className={`text-lg font-bold ${activeSolution.color} flex items-center gap-2`}>
                           Core Modules
                        </h4>
                        <ul className="space-y-3">
                           {activeSolution.modules.map((mod, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-300">
                                 <CheckCircle className={`w-5 h-5 ${activeSolution.color} mt-0.5 flex-shrink-0`} />
                                 <span className="text-sm md:text-base">{mod}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     
                     {/* Visual/Icon Box */}
                     <div className={`hidden md:flex items-center justify-center rounded-2xl ${activeSolution.bg} border ${activeSolution.border}`}>
                        <activeSolution.icon className={`w-24 h-24 ${activeSolution.color} opacity-80`} />
                     </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-slate-700/50 flex items-center justify-between">
                     <div className="text-sm text-slate-500">
                        Tersedia di Web & Mobile App
                     </div>
                     <Link to={`/platform`}>
                        <Button size="sm" variant="outline-white" className="hover:bg-white hover:text-slate-900">
                           Lihat Detail Modul <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Unique Value Proposition (UVP) */}
      <Section className="border-b border-slate-100 dark:border-slate-800">
            <div className="text-center mb-16">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Mengapa BizOps Berbeda?</h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg">Kami tidak membangun software generik. Kami membangun solusi untuk konteks lokal Indonesia.</p>
            </div>
            
            <CardSlider desktopClassName="md:grid md:grid-cols-3 md:gap-12 text-left">
               {homeUVP.map((uvp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-4 border-primary-100 dark:border-primary-900 hover:border-primary-500 transition-colors h-full flex flex-col justify-start">
                     <div className="mb-4 text-primary-600 dark:text-primary-400">
                        <uvp.icon className="w-10 h-10" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{uvp.title}</h3>
                     <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">{uvp.subtitle}</p>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{uvp.desc}</p>
                  </div>
               ))}
            </CardSlider>
      </Section>

      {/* 6. Integration Ecosystem (Connected Business) */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
               <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Terhubung dengan Ekosistem Digital</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                     BizOps bukan pulau terisolasi. Arsitektur Open API kami siap bicara dengan Bank, Pajak, dan E-Commerce.
                  </p>
               </div>
               <Link to="/integrations">
                  <Button variant="outline">Lihat Semua Integrasi</Button>
               </Link>
            </div>
            
            <CardSlider desktopClassName="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4" mobileItemWidth="w-[35vw] sm:w-[25vw]">
               {homeIntegrations.map((int, idx) => (
                  <Card key={idx} className="flex flex-col items-center justify-center gap-2 text-center w-full h-32" hoverEffect>
                     <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xs group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 transition-colors">
                        {int.icon}
                     </div>
                     <div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm leading-tight">{int.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase mt-1">{int.cat}</div>
                     </div>
                  </Card>
               ))}
            </CardSlider>
      </Section>

      {/* 7. Industry Solutions Section */}
      <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Solusi Spesifik Industri</h2>
               <p className="text-lg text-slate-600 dark:text-slate-400">
                  Karena operasional Toko Retail berbeda jauh dengan Kontraktor Sipil. Kami memahami nuansa bisnis Anda.
               </p>
            </div>

            <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
               {industries.map((ind) => (
                  <Link key={ind.id} to={`/solutions/${ind.id}`} className="h-full block">
                     <Card className="h-full flex flex-col" hoverEffect>
                        <div className="w-12 h-12 bg-slate-5 dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                           <ind.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{ind.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
                           {ind.description}
                        </p>
                        <div className="text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center gap-1 mt-auto">
                           Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                     </Card>
                  </Link>
               ))}
            </CardSlider>
      </Section>

      {/* 8. Process Section (How to Start) */}
      <Section dark>
            <div className="flex flex-col md:flex-row gap-16 items-start">
               <div className="md:w-1/3 sticky top-24">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">Implementasi Tanpa Drama.</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     Kami tidak sekadar memberikan login dan pergi. Kami menggunakan metodologi "30-Day Sprint" untuk memastikan sistem benar-benar dipakai dan data valid.
                  </p>
                  <Link to="/services/implementation">
                     <Button variant="white">Pelajari Metodologi Kami</Button>
                  </Link>
               </div>
               <div className="md:w-2/3 grid grid-cols-1 gap-6">
                  {homeProcess.map((step, idx) => (
                     <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex gap-6 items-start hover:bg-slate-700 transition-colors">
                        <div className="text-4xl md:text-5xl font-black text-slate-600 opacity-50">{step.step}</div>
                        <div>
                           <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                           <p className="text-slate-300">{step.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
      </Section>

      {/* 9. Roles / Persona Section */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Didesain untuk Para Pemimpin</h2>
               <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Setiap role memiliki dashboard khusus. BizOps memberikan data yang relevan, bukan sekadar tabel membingungkan.
               </p>
            </div>

            <CardSlider desktopClassName="sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-4" mobileItemWidth="w-[45vw]">
               {roles.map((role) => (
                  <Link key={role.id} to={`/role/${role.id}`} className="h-full block">
                     <Card className="text-center h-full flex flex-col items-center justify-center" hoverEffect>
                        <div className="w-12 h-12 mx-auto bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900 group-hover:text-primary-600 transition-colors shadow-sm">
                           <role.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">{role.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{role.subtitle}</p>
                     </Card>
                  </Link>
               ))}
            </CardSlider>
      </Section>

      {/* 10. Technical Validation & Trust Badges */}
      <Section>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
               <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">Built on Open Standards, Ready for Scale.</h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                     Kami tidak membangun sistem tertutup (proprietary black box). BizOps dibangun di atas fondasi teknologi open-source kelas dunia yang menjamin keberlanjutan.
                  </p>
               </div>
               <Link to="/trust">
                  <Button variant="outline" className="mt-4 md:mt-0">Lihat Security Whitepaper</Button>
               </Link>
            </div>
            
            <CardSlider desktopClassName="md:grid md:grid-cols-4 md:gap-6" mobileItemWidth="w-[60vw]">
               {homeTechValidation.map((tech, idx) => (
                  <Card key={idx} className="bg-slate-5 dark:bg-slate-800/50 text-center h-full flex flex-col justify-center" variant="flat">
                     <tech.icon className="w-8 h-8 mx-auto text-slate-400 mb-4 group-hover:text-primary-600 transition-colors" />
                     <div className="text-2xl font-bold text-slate-900 dark:text-white">{tech.value}</div>
                     <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-1">{tech.label}</div>
                     <div className="text-xs text-slate-500 dark:text-slate-400">{tech.desc}</div>
                  </Card>
               ))}
            </CardSlider>

            {/* Compliance Badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2">
                  <Shield className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">ISO 27001 Ready</span>
               </div>
               <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2">
                  <Lock className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">GDPR Compliant</span>
               </div>
               <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2">
                  <Award className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">PSE Terdaftar</span>
               </div>
            </div>
      </Section>

      {/* 11. Stats Section */}
      <Section dark className="border-t border-slate-800" noPadding>
         <div className="py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
               {globalStats.map((stat, idx) => (
                  <div key={idx} className="p-4">
                     <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                     <div className="text-slate-400 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </Section>

      {/* 12. CTA Section */}
      <Section className="bg-primary-900 relative overflow-hidden" containerClassName="relative z-10 text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">Siap Mentransformasi Operasional Bisnis Anda?</h2>
          <p className="text-xl text-primary-100 mb-10">
             Bergabunglah dengan perusahaan-perusahaan yang telah beralih dari sistem yang kaku ke sistem yang adaptif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/demo">
                <Button variant="white" size="lg" className="w-full sm:w-auto text-primary-900 font-bold">Hubungi Sales</Button>
             </Link>
             <Link to="/download">
               <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
                 Download Brosur PDF
               </Button>
             </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
