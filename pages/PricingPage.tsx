import React, { useState } from 'react';
import { 
  Check, 
  Server, 
  Shield, 
  Lock, 
  RefreshCw, 
  Calculator, 
  ArrowRight, 
  Zap, 
  Building, 
  Globe,
  HelpCircle,
  Phone,
  MessageSquare
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { pricingFaqs } from '../data/content';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Badge from '../components/Badge';
import PricingFeatureTable from '../components/PricingFeatureTable';
import FAQAccordion from '../components/FAQAccordion';

// Motion Imports
import { StaggeredText } from '../components/ui/motion-text';
import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS } from '../utils/animation';

const PricingPage: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  const faqs = pricingFaqs || [];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors">
      <SEO 
        title="Harga & Paket Langganan ERP | BizOps" 
        description="Pilih paket Business, Growth, atau Enterprise. Investasi cerdas mulai Rp 2.5 Juta/bulan. Hitung kebutuhan spesifik Anda dengan kalkulator kami."
        structuredData={faqSchema}
      />

      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
        {/* Modern Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
           <div className="absolute top-[-10%] left-[20%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
           <div className="absolute top-[10%] right-[20%] w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Special Offer: Save 20% on Annual Plans</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            <StaggeredText text="Investasi Cerdas untuk" className="flex w-full justify-center mb-2" />
            <motion.span 
              variants={FADE_UP_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400"
            >
              Pertumbuhan Bisnis.
            </motion.span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Transparansi penuh. Tanpa biaya tersembunyi. Pilih paket yang sesuai dengan fase bisnis Anda hari ini.
          </p>
          
          {/* Enhanced Toggle */}
          <div className="flex items-center justify-center animate-in fade-in zoom-in duration-700 delay-300">
            <div className="relative inline-grid grid-cols-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full border border-slate-200 dark:border-slate-700">
              <div 
                className={`absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white dark:bg-slate-950 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 ease-spring ${annual ? 'translate-x-full' : 'translate-x-0'}`}
              />
              <button 
                onClick={() => setAnnual(false)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex justify-center ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}
              >
                Bulanan
              </button>
              <button 
                onClick={() => setAnnual(true)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}
              >
                Tahunan
                <span className="bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold border border-green-200 dark:border-green-500/30">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section className="-mt-12 pt-0 relative z-20">
        {/* --- PRICING CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-24">
           
           {/* Plan 1: Business */}
           <div className="bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col h-full border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
             <div className="mb-6">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Business</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm h-10">Pondasi digital yang kuat untuk startup & bisnis berkembang.</p>
             </div>
             
             <div className="mb-8">
               <div className="flex items-baseline gap-1">
                 <span className="text-sm font-semibold text-slate-500 mb-auto mt-2">IDR</span>
                 <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                   {annual ? '2.5' : '3'}
                 </span>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Jt</span>
               </div>
               <div className="flex items-center justify-between mt-3 text-sm">
                 <span className="text-slate-500">/ bulan</span>
                 {annual && <span className="text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded">Hemat 6 Jt/thn</span>}
               </div>
               <p className="text-xs text-slate-400 mt-2">
                 {annual ? 'Ditagih Rp 30 Jt per tahun' : 'Ditagih bulanan, bisa cancel kapan saja'}
               </p>
             </div>

             <div className="mb-8">
               <Link to="/demo?plan=business">
                  <Button fullWidth variant="outline" className="h-12 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white font-bold transition-all hover:shadow-md">
                    Mulai Trial Gratis
                  </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow border-t border-slate-100 dark:border-slate-800 pt-8">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Fitur Utama:</p>
               {['50 Recommended Users', 'Core ERP (HR, Finance, Sales)', 'Mobile App (Basic)', 'Shared Cloud Hosting', 'Email Support (48h SLA)'].map((f, i) => (
                 <div key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                   <div className="mt-0.5 min-w-[18px]">
                     <Check className="w-4.5 h-4.5 text-slate-400 group-hover:text-primary-600 transition-colors" />
                   </div>
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Plan 2: Growth (Popular) */}
           <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 flex flex-col h-full border-2 border-primary-600 dark:border-primary-500 relative transform lg:-translate-y-4 shadow-2xl shadow-primary-900/10 dark:shadow-primary-900/20 z-10">
             <div className="absolute -top-5 left-0 right-0 flex justify-center">
               <div className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 tracking-wide uppercase">
                 <Zap className="w-3.5 h-3.5 fill-current" />
                 Most Popular
               </div>
             </div>
             
             <div className="mb-6 mt-2">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Growth</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm h-10">Solusi All-in-One untuk scaling tanpa batasan fitur.</p>
             </div>

             <div className="mb-8 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
               <div className="flex items-baseline gap-1">
                 <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-auto mt-2">IDR</span>
                 <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                   {annual ? '7.5' : '9'}
                 </span>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Jt</span>
               </div>
               <div className="flex items-center justify-between mt-3 text-sm">
                 <span className="text-slate-500 dark:text-slate-400">/ bulan</span>
                 {annual && <span className="text-primary-700 dark:text-primary-300 font-medium bg-primary-100 dark:bg-primary-900/50 px-2 py-0.5 rounded border border-primary-200 dark:border-primary-500/30">Hemat 18 Jt/thn</span>}
               </div>
             </div>

             <div className="mb-8">
               <Link to="/demo?plan=growth">
                 <Button fullWidth variant="primary" size="lg" className="h-14 text-lg shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40">
                   Pilih Paket Growth
                 </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow border-t border-slate-100 dark:border-slate-700/50 pt-8">
               <p className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">Semua di Business, plus:</p>
               {['200 Recommended Users', 'Manufacturing, Asset & Project', 'Advanced Mobile App (GPS)', 'Dedicated VPS Performance', 'Priority Chat Support (12h SLA)', 'Assisted Implementation'].map((f, i) => (
                 <div key={i} className="flex gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                   <div className="mt-0.5 min-w-[18px]">
                     <div className="bg-primary-100 dark:bg-primary-500/20 rounded-full p-0.5">
                       <Check className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                     </div>
                   </div>
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Plan 3: Enterprise */}
           <div className="bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col h-full border border-slate-200 dark:border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
             {/* Subtle Texture */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none" />

             <div className="mb-6 relative z-10">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                 Enterprise
                 <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">Custom</span>
               </h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm h-10">Infrastruktur dedicated & kontrol penuh untuk korporasi.</p>
             </div>
             
             <div className="mb-8 relative z-10">
               <div className="flex items-baseline gap-1">
                 <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                   Custom
                 </span>
               </div>
               <div className="flex items-center justify-between mt-3 text-sm">
                  <span className="text-slate-500">Sesuai Kebutuhan</span>
               </div>
               <p className="text-xs text-slate-400 mt-2">
                 Negosiasi kontrak tahunan & SLA
               </p>
             </div>

             <div className="mb-8 relative z-10">
               <Link to="/contact">
                  <Button fullWidth variant="outline" className="h-12 border-slate-300 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-slate-700 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 font-bold transition-all">
                    Hubungi Sales Team
                  </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow border-t border-slate-100 dark:border-slate-800 pt-8 relative z-10">
               <p className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-4">Enterprise Exclusive:</p>
               {['Unlimited Users Capacity', 'Private / On-Premise Server', 'Custom Module Development', 'Full Database Access', 'Whitelabel Mobile App', 'Dedicated Account Manager'].map((f, i) => (
                 <div key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                   <div className="mt-0.5 min-w-[18px]">
                     <Check className="w-4.5 h-4.5 text-amber-500" />
                   </div>
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* --- CALCULATOR BANNER --- */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 dark:bg-slate-800 shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center p-10 lg:p-16 gap-12">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-6 border border-white/20 backdrop-blur-md">
                  <Calculator className="w-3.5 h-3.5" />
                  SIMULASI BIAYA CUSTOM
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Butuh Spesifikasi Khusus? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Hitung Sendiri di Sini.</span>
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Gunakan kalkulator interaktif kami untuk menyesuaikan jumlah user, lokasi server, dan modul spesifik yang Anda butuhkan. Dapatkan estimasi penawaran instan.
                </p>
                <Link to="/pricing-calculator">
                  <Button variant="white" size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-blue-900/50 hover:shadow-blue-900/70 hover:scale-105 transition-all duration-300">
                    Buka Pricing Calculator <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              {/* Illustration Placeholder / Abstract Graphic */}
              <div className="flex-shrink-0 w-full lg:w-1/3">
                 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="space-y-4 opacity-80">
                       <div className="h-4 bg-white/20 rounded w-3/4"></div>
                       <div className="h-4 bg-white/10 rounded w-full"></div>
                       <div className="h-4 bg-white/10 rounded w-5/6"></div>
                       <div className="h-12 bg-blue-500/80 rounded-lg mt-4 w-full flex items-center justify-center text-white font-bold">Total: Rp 15.000.000</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TRUST SIGNALS GRID --- */}
        <div className="mb-32">
           <div className="text-center mb-12">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Standar Keamanan Enterprise</h2>
           </div>
           <div className="max-w-7xl mx-auto px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { icon: Shield, title: "Secure Payment", desc: "Midtrans & Xendit Gateway", color: "text-green-500" },
                 { icon: Lock, title: "Data Encryption", desc: "AES-256 & TLS 1.3 Standards", color: "text-blue-500" },
                 { icon: Server, title: "99.9% Uptime SLA", desc: "Redundant Cloud Infrastructure", color: "text-purple-500" },
                 { icon: RefreshCw, title: "14-Day Guarantee", desc: "Money Back Policy", color: "text-amber-500" },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                   <div className={`p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm mb-4 ${item.color}`}>
                     <item.icon className="w-8 h-8" />
                   </div>
                   <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="mb-32 scroll-mt-24" id="features">
          <PricingFeatureTable />
        </div>

        {/* --- FAQ & CONTACT --- */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto mb-24">
          <div className="lg:col-span-5">
             <div className="sticky top-24">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                 Frequently Asked Questions
               </h2>
               <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                 Jawaban untuk pertanyaan umum seputar lisensi, pembayaran, dan teknis implementasi.
               </p>
               
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2">Masih ada pertanyaan?</h4>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Tim konsultan kami siap membantu Anda.</p>
                 <div className="space-y-3">
                   <a href="mailto:sales@bizops.id" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                     <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm"><MessageSquare className="w-5 h-5" /></div>
                     <span className="font-medium">sales@bizops.id</span>
                   </a>
                  <a href="tel:+622139702834" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm"><Phone className="w-5 h-5" /></div>
                    <span className="font-medium">+62 21 39702834</span>
                  </a>
                 </div>
               </div>
             </div>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>

      </Section>
    </div>
  );
};

export default PricingPage;
