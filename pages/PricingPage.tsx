import React, { useState } from 'react';
// Minimal safe icons only
import { Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
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
        title="Harga & Paket Langganan ERP" 
        description="Pilih paket Business atau Growth."
        structuredData={faqSchema}
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Badge variant="primary" size="sm" className="mb-6">✨ Investasi Cerdas</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Harga Transparan, ROI Terukur.
          </h1>
          
          {/* Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-full">
              <button 
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? 'bg-white shadow' : ''}`}
              >
                Bulanan
              </button>
              <button 
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${annual ? 'bg-white shadow' : ''}`}
              >
                Tahunan
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section className="-mt-20 pt-0 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-24">
           {/* Plan 1 */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-800">
             <h3 className="text-2xl font-bold mb-2">Business</h3>
             <div className="text-3xl font-bold mb-6">IDR {annual ? '2.5' : '3'} Jt <span className="text-sm font-normal">/bln</span></div>
             <Link to="/demo?plan=business"><Button fullWidth variant="outline">Trial Gratis</Button></Link>
             <ul className="mt-6 space-y-3">
               {['Core HR', 'Finance', 'Basic CRM'].map(f => (
                 <li key={f} className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> {f}</li>
               ))}
             </ul>
           </div>

           {/* Plan 2 */}
           <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border-2 border-primary-500 relative transform lg:-translate-y-4">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">POPULAR</div>
             <h3 className="text-2xl font-bold mb-2">Growth</h3>
             <div className="text-3xl font-bold mb-6 text-primary-600">IDR {annual ? '7.5' : '9'} Jt <span className="text-sm font-normal">/bln</span></div>
             <Link to="/demo?plan=growth"><Button fullWidth variant="primary">Pilih Growth</Button></Link>
             <ul className="mt-6 space-y-3">
               {['All Business Features', 'Project Mgmt', 'Multi-Warehouse', 'Priority Support'].map(f => (
                 <li key={f} className="flex gap-2"><Check className="w-5 h-5 text-primary-500" /> {f}</li>
               ))}
             </ul>
           </div>

           {/* Plan 3 */}
           <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-8 border border-slate-800">
             <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
             <div className="text-3xl font-bold mb-6">Custom</div>
             <Link to="/demo?plan=enterprise"><Button fullWidth variant="white">Contact Sales</Button></Link>
             <ul className="mt-6 space-y-3 text-slate-300">
               {['On-Premise', 'Full Access', 'Custom Apps', 'Dedicated Support'].map(f => (
                 <li key={f} className="flex gap-2"><Check className="w-5 h-5" /> {f}</li>
               ))}
             </ul>
           </div>
        </div>

        {/* Feature Table */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
          <PricingFeatureTable />
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>
    </div>
  );
};

export default PricingPage;
