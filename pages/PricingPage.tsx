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
  HelpCircle
} from 'lucide-react';
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
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 pt-16 pb-20 lg:pt-24 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay filter" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/40 dark:bg-amber-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay filter" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" size="sm" className="mb-6 shadow-sm">
            ✨ Best Value ERP Solution
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Harga Transparan, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
              Tanpa Biaya Tersembunyi.
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pilih paket yang sesuai dengan fase pertumbuhan bisnis Anda. Upgrade kapan saja seiring skala bisnis meningkat.
          </p>
          
          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center">
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
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section className="-mt-20 pt-0 relative z-20">
        {/* --- PRICING CARDS --- */}
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-20">
           
           {/* Plan 1: Business */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col h-full hover:shadow-2xl transition-all duration-300 relative group">
             <div className="mb-6">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                   <Building className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Business</h3>
               </div>
               <p className="text-slate-500 dark:text-slate-400 text-sm">Pondasi kuat untuk startup & UMKM.</p>
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
                    Mulai Trial Gratis
                  </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow border-t border-slate-100 dark:border-slate-800 pt-6">
               <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Fitur Utama:</p>
               {['Recommended for 50 Users', 'Core ERP (HR, Finance, Sales)', 'Mobile App Karyawan (Basic)', 'Shared Cloud Hosting', 'Standard Email Support'].map(f => (
                 <div key={f} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                   <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Plan 2: Growth (Popular) */}
           <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-primary-500 dark:border-primary-500 p-8 flex flex-col h-full transform scale-100 lg:scale-105 z-10 relative transition-transform duration-300">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
               <Zap className="w-4 h-4 fill-current" />
               MOST POPULAR
             </div>
             
             <div className="mb-6 mt-2">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
                   <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Growth</h3>
               </div>
               <p className="text-slate-500 dark:text-slate-400 text-sm">All-in-One Solution untuk scaling.</p>
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
                   Pilih Paket Growth
                 </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow border-t border-slate-100 dark:border-slate-800 pt-6">
               <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Semua di Business, plus:</p>
               {['Recommended for 200 Users', 'Manufacturing & Assets', 'Mobile App (Advanced)', 'Dedicated Performance', 'Priority Chat Support', 'Assisted Setup'].map(f => (
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
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                   <Server className="w-6 h-6 text-amber-500" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">Enterprise</h3>
               </div>
               <p className="text-slate-400 text-sm">Kontrol penuh untuk korporasi.</p>
             </div>

             <div className="mb-6 relative z-10">
               <div className="flex items-baseline gap-1">
                 <span className="text-4xl font-extrabold text-white tracking-tight">
                   Custom
                 </span>
               </div>
               <p className="text-xs text-slate-400 mt-2">
                 Sesuai kebutuhan & SLA
               </p>
             </div>

             <div className="mb-8 relative z-10">
               <Link to="/demo?plan=enterprise">
                  <Button fullWidth variant="white" className="hover:bg-amber-50">
                    Hubungi Sales
                  </Button>
               </Link>
             </div>

             <div className="space-y-4 flex-grow relative z-10 border-t border-slate-800 pt-6">
               <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Enterprise Exclusive:</p>
               {['Unlimited Users Capacity', 'Private / On-Premise', 'Custom Module Install', 'Full Database Access', 'Whitelabel Mobile App'].map(f => (
                 <div key={f} className="flex gap-3 text-sm text-slate-300">
                   <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                   <span>{f}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* --- CALCULATOR BANNER (FEATURED) --- */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-1 shadow-lg">
            <div className="bg-transparent rounded-[20px] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4 border border-blue-100 dark:border-blue-800">
                    <Calculator className="w-3 h-3" />
                    SIMULASI BIAYA
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    Butuh Paket Custom? Hitung Sendiri!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Gunakan kalkulator interaktif kami untuk menyesuaikan jumlah user, storage, dan modul yang Anda butuhkan.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link to="/pricing-calculator">
                    <Button variant="primary" size="lg" className="shadow-xl hover:shadow-primary-600/30 group">
                      Buka Pricing Calculator
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TRUST SIGNALS --- */}
        <div className="border-y border-slate-100 dark:border-slate-800 py-12 mb-24 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Secure Payment</h4>
                    <p className="text-xs text-slate-500">Midtrans & Xendit Gateway</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Data Encryption</h4>
                    <p className="text-xs text-slate-500">AES-256 & TLS 1.3</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                    <RefreshCw className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Money Back</h4>
                    <p className="text-xs text-slate-500">14-Day Guarantee</p>
                  </div>
               </div>
               <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                    <Server className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">99.9% Uptime</h4>
                    <p className="text-xs text-slate-500">SLA Guaranteed</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="mb-24 scroll-mt-24" id="features">
          <PricingFeatureTable />
        </div>

        {/* --- FAQ --- */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="w-8 h-8 text-primary-500" />
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Jawaban untuk pertanyaan umum seputar lisensi dan pembayaran.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>

        {/* --- PARTNER CTA --- */}
        <div className="bg-amber-50 dark:bg-amber-950/20 rounded-3xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/30 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <Badge variant="warning" className="mb-3">Untuk Konsultan & Agency</Badge>
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-3">
                Ingin Menjual BizOps dengan Brand Anda?
              </h3>
              <p className="text-amber-800 dark:text-amber-200/80 text-lg leading-relaxed">
                Gabung Program Partner Whitelabel. Dapatkan diskon reseller hingga 40% dan dukungan teknis prioritas.
              </p>
            </div>
            <Link to="/partners">
              <Button variant="accent" size="lg" className="whitespace-nowrap shadow-lg shadow-amber-500/20">
                Jadi Partner
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PricingPage;
