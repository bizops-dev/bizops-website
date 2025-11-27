
import React, { useState } from 'react';
import { Check, HelpCircle, Server, ShieldCheck, Lock, RefreshCw, Calculator } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { pricingFaqs } from '../data/content';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import PricingFeatureTable from '../components/PricingFeatureTable';

const PricingPage: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  // Prepare JSON-LD for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
      <SEO 
        title="Harga & Paket Langganan ERP" 
        description="Pilih paket Business atau Growth. Investasi terjangkau mulai Rp 2.5 Juta/bulan. Opsi Self-Hosted tersedia untuk Enterprise."
        structuredData={faqSchema}
      />

      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Harga Transparan, ROI Terukur.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Pilih model berlangganan (OPEX) untuk kemudahan, atau model lisensi & implementasi (CAPEX) untuk kontrol jangka panjang.
          </p>
          
          <div className="flex items-center justify-center gap-4 bg-white dark:bg-slate-900 p-1 rounded-full shadow-sm border border-slate-200 dark:border-slate-800 inline-flex">
            <button 
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-slate-900 text-white dark:bg-slate-700' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Bulanan
            </button>
            <button 
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'bg-primary-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Tahunan (Hemat 20%)
            </button>
          </div>

          {/* Pricing Calculator CTA */}
          <div className="mt-8">
            <Link to="/pricing-calculator">
              <Button variant="accent" size="lg">
                <Calculator className="w-5 h-5 mr-2" />
                Custom Pricing Calculator
              </Button>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Need more flexibility? Use our interactive calculator to customize your solution.
            </p>
          </div>
        </div>

        <CardSlider desktopClassName="lg:grid lg:grid-cols-3 gap-8 items-start mb-12" mobileItemWidth="w-[85vw]">
           
           {/* Plan 1 */}
           <Card className="h-full flex flex-col" hoverEffect>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white">Business (SaaS)</h3>
             <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Untuk Startups / SME</p>
             <div className="my-6 text-slate-900 dark:text-white">
               <span className="text-3xl font-bold tracking-tight">IDR {annual ? '2.5 Jt' : '3 Jt'}</span>
               <span className="text-slate-500 text-sm"> / bulan</span>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Biaya setara setengah gaji admin magang, automasi HR & Finance.</p>
             <Link to="/demo?plan=business">
                <Button fullWidth variant="outline">Mulai Trial Gratis 14 Hari</Button>
             </Link>
             <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400 flex-grow">
               {['Core HR (Payroll/Attendance)', 'Finance (Expense/Invoice)', 'Basic CRM', 'Cloud Hosting (Shared)', 'Email Support'].map(f => (
                 <li key={f} className="flex gap-3">
                   <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                   {f}
                 </li>
               ))}
             </ul>
             <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
                *Best Value for Small Teams
             </div>
           </Card>

           {/* Plan 2 - Featured */}
           <Card className="relative scale-100 lg:scale-105 z-10 h-full flex flex-col border-primary-500 dark:border-primary-500 ring-4 ring-primary-500/10 shadow-xl" padding="lg">
             <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
               POPULAR
             </div>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white">Growth (SaaS)</h3>
             <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Untuk perusahaan berkembang</p>
             <div className="my-6 text-primary-600 dark:text-primary-400">
               <span className="text-4xl font-bold tracking-tight">IDR {annual ? '7.5 Jt' : '9 Jt'}</span>
               <span className="text-slate-500 text-sm"> / bulan</span>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Solusi All-in-One lengkap tanpa biaya tambahan per user.</p>
             <Link to="/demo?plan=growth">
               <Button fullWidth>Konsultasi Paket Growth</Button>
             </Link>
             <ul className="mt-8 space-y-4 text-sm text-slate-700 dark:text-slate-300 flex-grow">
               <li className="font-semibold">Semua fitur Business, plus:</li>
               {['Project Management', 'Multi-Warehouse Inventory', 'Asset Management', 'Priority Chat Support', 'Bantuan Implementasi Awal'].map(f => (
                 <li key={f} className="flex gap-3">
                   <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                   {f}
                 </li>
               ))}
             </ul>
           </Card>

           {/* Plan 3 - Enterprise */}
           <Card variant="dark" className="h-full flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <Server className="w-24 h-24 text-white" />
             </div>
             <h3 className="text-xl font-bold text-white relative z-10">Enterprise</h3>
             <p className="text-slate-400 text-sm mt-2 relative z-10">Untuk Korporat & BUMN</p>
             <div className="my-6 relative z-10">
               <span className="text-3xl font-bold tracking-tight text-white">Custom</span>
             </div>
             <p className="text-sm text-slate-400 mb-6 relative z-10">Deployment Self-Hosted dengan kontrol penuh data dan custom module.</p>
             <Link to="/demo?plan=enterprise" className="relative z-10">
                <Button fullWidth variant="white">Ajukan Penawaran Kustom</Button>
             </Link>
             <ul className="mt-8 space-y-4 text-sm text-slate-300 relative z-10 flex-grow">
               {['On-Premise / Private Cloud', 'Full Database Access', 'Custom Apps & Logic', 'Whitelabel Mobile App', 'Dedicated Account Manager'].map(f => (
                 <li key={f} className="flex gap-3">
                   <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                   {f}
                 </li>
               ))}
             </ul>
           </Card>
        </CardSlider>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
           <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold">Secure Payment</span>
           </div>
           <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Lock className="w-5 h-5" />
              <span className="text-sm font-bold">256-bit Encryption</span>
           </div>
           <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <RefreshCw className="w-5 h-5" />
              <span className="text-sm font-bold">14-Day Money Back</span>
           </div>
           <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Server className="w-5 h-5" />
              <span className="text-sm font-bold">99.9% Uptime SLA</span>
           </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-24">
          <PricingFeatureTable />
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary-500" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
             {pricingFaqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                   <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </Card>
             ))}
          </div>
        </div>

        {/* Partner CTA */}
        <div className="mt-20 bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-amber-100 dark:border-amber-800/50">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-2">Apakah Anda Konsultan Bisnis?</h3>
            <p className="text-amber-800 dark:text-amber-200/80">
              Bergabunglah dengan Program Partner Whitelabel kami untuk mendapatkan harga reseller khusus dan kemampuan menjual BizOps sebagai produk Anda sendiri.
            </p>
          </div>
          <Link to="/partners">
            <Button variant="accent" className="whitespace-nowrap">Pelajari Partner Program</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default PricingPage;
