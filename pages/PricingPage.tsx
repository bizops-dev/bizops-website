import React, { useState } from 'react';
import { Check, HelpCircle, Server, ShieldCheck, Lock, RefreshCw, Calculator, ArrowRight, Zap, Building, Globe } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { pricingFaqs } from '../data/content';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Badge from '../components/Badge';
import PricingFeatureTable from '../components/PricingFeatureTable';
import FAQAccordion from '../components/FAQAccordion';

const PricingPage: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  // Fallback if data is missing
  const faqs = pricingFaqs || [];

  // Prepare JSON-LD for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors">
      <SEO 
        title="Harga & Paket Langganan ERP" 
        description="Pilih paket Business atau Growth. Investasi terjangkau mulai Rp 2.5 Juta/bulan. Opsi Self-Hosted tersedia untuk Enterprise."
        structuredData={faqSchema}
      />

      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay filter" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 dark:bg-amber-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay filter" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" size="sm" className="mb-6">
            ✨ Investasi Cerdas untuk Bisnis
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Harga Transparan, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
              ROI Terukur.
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pilih model berlangganan (OPEX) untuk fleksibilitas, atau model lisensi (CAPEX) untuk kontrol jangka panjang. Tanpa biaya tersembunyi.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-12">
            <div className="relative flex items-center bg-slate-200 dark:bg-slate-800 p-1.5 rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-primary-500/20">
              <div 
                className={`absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white dark:bg-slate-700 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${annual ? 'translate-x-full' : 'translate-x-0'}`}
              />
              <button 
                onClick={() => setAnnual(false)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                Bulanan
              </button>
              <button 
                onClick={() => setAnnual(true)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                Tahunan
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                  Hemat 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section className="-mt-20 pt-0 relative z-20">
        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-24">
           
           {/* Plan 1: Business */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col h-full hover:shadow-2xl transition-all duration-300 relative group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-slate-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="mb-6">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                 <Building className="w-6 h-6 text-slate-400" />
                 Business
               </h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Untuk Startups & UMKM yang ingin efisiensi.</p>
             </div>
             
             <div className="mb-6">
               <div className="flex items-baseline gap-1">
                 <span className="text-sm font-semibold text-slate-500">IDR</span>
                 <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                   {annual ? '2.5' : '3'}
                 </span>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Jt</span>
                 <span className="text-slate-500 text-sm">/ bulan</span>
               </div>
               <p className="text-xs text-slate-400 mt-2">
                 {annual ? 'Ditagih Rp 30 Jt per tahun' : 'Ditagih bulanan'}
               </p>
             </div>

             <div className="mb-8">
               <Link to="/demo?plan=business">
                  <Button fullWidth variant="outline" className="border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                    Mulai Trial Gratis 14 Hari
                  </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow">
               <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Fitur Utama:</p>
               {['Core HR (Payroll/Attendance)', 'Finance (Expense/Invoice)', 'Basic CRM', 'Cloud Hosting (Shared)', 'Email Support'].map(f => (
                 <div key={f} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                   <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Plan 2: Growth (Popular) */}
           <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-primary-500 dark:border-primary-500 p-8 flex flex-col h-full transform scale-100 lg:scale-105 z-10 relative">
             <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
               <Zap className="w-4 h-4 fill-current" />
               MOST POPULAR
             </div>
             
             <div className="mb-6 mt-2">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                 <Rocket className="w-6 h-6 text-primary-500" />
                 Growth
               </h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">All-in-One Solution untuk scaling up.</p>
             </div>

             <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800/50">
               <div className="flex items-baseline gap-1">
                 <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">IDR</span>
                 <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                   {annual ? '7.5' : '9'}
                 </span>
                 <span className="text-xl font-bold text-slate-900 dark:text-white">Jt</span>
                 <span className="text-slate-500 text-sm">/ bulan</span>
               </div>
               <p className="text-xs text-primary-600 dark:text-primary-400 mt-2 font-medium">
                 {annual ? 'Hemat Rp 18 Jt per tahun' : 'Harga normal bulanan'}
               </p>
             </div>

             <div className="mb-8">
               <Link to="/demo?plan=growth">
                 <Button fullWidth variant="primary" size="lg" className="shadow-lg shadow-primary-500/25">
                   Konsultasi Paket Growth
                 </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow">
               <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Semua fitur Business, plus:</p>
               {['Project Management', 'Multi-Warehouse Inventory', 'Asset Management', 'Priority Chat Support', 'Bantuan Implementasi Awal', 'Unlimited Users'].map(f => (
                 <div key={f} className="flex gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                   <div className="bg-primary-100 dark:bg-primary-900/50 rounded-full p-0.5">
                     <Check className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                   </div>
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Plan 3: Enterprise */}
           <div className="bg-slate-900 dark:bg-black rounded-2xl shadow-xl border border-slate-700 dark:border-slate-800 p-8 flex flex-col h-full hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group text-white">
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
                <Globe className="w-64 h-64 text-white" />
             </div>

             <div className="mb-6 relative z-10">
               <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                 <Server className="w-6 h-6 text-amber-500" />
                 Enterprise
               </h3>
               <p className="text-slate-400 text-sm mt-2">Untuk Korporat & BUMN yang butuh kontrol penuh.</p>
             </div>

             <div className="mb-6 relative z-10">
               <div className="flex items-baseline gap-1">
                 <span className="text-4xl font-extrabold text-white tracking-tight">
                   Custom
                 </span>
               </div>
               <p className="text-xs text-slate-400 mt-2">
                 Penawaran khusus sesuai kebutuhan
               </p>
             </div>

             <div className="mb-8 relative z-10">
               <Link to="/demo?plan=enterprise">
                  <Button fullWidth variant="white" className="hover:bg-amber-50">
                    Hubungi Sales
                  </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow relative z-10">
               <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">Exclusive Enterprise Features:</p>
               {['On-Premise / Private Cloud', 'Full Database Access', 'Custom Apps & Logic', 'Whitelabel Mobile App', 'Dedicated Account Manager'].map(f => (
                 <div key={f} className="flex gap-3 text-sm text-slate-300">
                   <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Pricing Calculator Banner */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-gradient-to-r from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-200/50 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
                  <Calculator className="w-3 h-3" />
                  INTERACTIVE TOOL
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Butuh Hitungan Lebih Detail?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Gunakan kalkulator harga kami untuk mensimulasikan biaya berdasarkan jumlah user, modul spesifik, dan kebutuhan storage.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/pricing-calculator">
                  <Button variant="primary" size="lg" className="shadow-lg hover:shadow-primary-500/25">
                    Buka Kalkulator Harga
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="border-t border-b border-slate-100 dark:border-slate-800 py-12 mb-24 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:shadow-md transition-all group-hover:scale-110 duration-300">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Secure Payment</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:shadow-md transition-all group-hover:scale-110 duration-300">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">256-bit Encryption</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:shadow-md transition-all group-hover:scale-110 duration-300">
                  <RefreshCw className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">14-Day Money Back</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:shadow-md transition-all group-hover:scale-110 duration-300">
                  <Server className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">99.9% Uptime SLA</span>
             </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-24 scroll-mt-24" id="features">
          <PricingFeatureTable />
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="w-8 h-8 text-primary-500" />
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Jawaban untuk pertanyaan yang sering diajukan calon pelanggan kami.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>

        {/* Partner CTA */}
        <div className="bg-amber-50 dark:bg-amber-950/30 rounded-3xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-transparent to-transparent" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-3">
                Apakah Anda Konsultan Bisnis / IT?
              </h3>
              <p className="text-amber-800 dark:text-amber-200/80 text-lg leading-relaxed">
                Bergabunglah dengan Program Partner Whitelabel kami. Dapatkan harga reseller khusus dan jual BizOps sebagai brand Anda sendiri.
              </p>
            </div>
            <Link to="/partners">
              <Button variant="accent" size="lg" className="whitespace-nowrap shadow-lg shadow-amber-500/20">
                Pelajari Partner Program
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PricingPage;
