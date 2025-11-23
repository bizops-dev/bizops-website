
import React from 'react';
import { Link } from 'react-router-dom';
import { comparisonsData } from '../data/content';
import Button from '../components/Button';
import { ArrowRight, Activity, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ComparisonsPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO title="Comparison Guides" description="Compare BizOps ERP with Odoo, SAP, Local SaaS, and Custom Build solutions." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
           <div className="inline-flex items-center justify-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl mb-6 text-primary-600 dark:text-primary-400">
              <Activity className="w-8 h-8" />
           </div>
           <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Bandingkan Transparan: Data vs Klaim Marketing.</h1>
           <p className="text-xl text-slate-600 dark:text-slate-400">
              Kami percaya pada transparansi radikal. Lihat bagaimana fitur dan arsitektur BizOps disandingkan dengan solusi populer lainnya di pasar agar Anda bisa mengambil keputusan terbaik.
           </p>
        </div>

        {/* Comparisons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {Object.entries(comparisonsData).map(([id, data]: [string, any]) => (
              <div key={id} className="flex flex-col bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all p-8 h-full">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{data.title}</h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">{data.subtitle}</p>
                 
                 <div className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Key Difference</span>
                    <p className="text-sm text-slate-700 dark:text-slate-300 italic">"{data.verdict}"</p>
                 </div>

                 <Link to={`/compare/${id}`} className="mt-auto">
                    <Button variant="outline" fullWidth className="group">
                       Read Comparison <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </Link>
              </div>
           ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Masih Ragu soal Investasi?</h2>
              <p className="text-slate-300 mb-10 text-lg">
                 Berhenti menebak. Gunakan Kalkulator ROI interaktif kami untuk mengestimasi berapa banyak biaya operasional (lembur, fraud, inefisiensi) yang bisa Anda hemat.
              </p>
              <Link to="/resources/roi">
                 <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none font-bold px-8">
                    Hitung Penghematan ROI
                 </Button>
              </Link>
           </div>
           {/* Abstract Decor */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        </div>

      </div>
    </div>
  );
};

export default ComparisonsPage;
