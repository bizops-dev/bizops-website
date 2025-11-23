
import React from 'react';
import { glossaryData } from '../data/content';
import Button from '../components/Button';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const GlossaryPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="Kamus Istilah Bisnis, ERP & HR Indonesia | BizOps Wiki" description="Ensiklopedia lengkap istilah bisnis modern. Pelajari PPh 21 TER, Kurva-S, Safety Stock, dan lainnya." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-xl mb-6 text-primary-600">
              <BookOpen className="w-8 h-8" />
           </div>
           <h1 className="text-4xl font-bold text-slate-900 mb-6">Pahami Bahasa Bisnis & Teknologi.</h1>
           <p className="text-xl text-slate-600">
              Dunia manajemen perusahaan penuh dengan akronim yang membingungkan. Kami menyusun pusat pengetahuan ini untuk Anda.
           </p>
           
           {/* Search Bar */}
           <div className="mt-8 relative max-w-lg mx-auto">
              <input 
                 type="text" 
                 placeholder="Cari istilah (e.g. 'TER', 'Lead Time')..." 
                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
           </div>
        </div>

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           {glossaryData.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-primary-100 transition-all group">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-2xl text-primary-600 border border-slate-200 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                       {item.char}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.term}</h3>
                 </div>
                 <div className="space-y-4">
                    <div>
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Definisi</span>
                       <p className="text-slate-700 text-sm leading-relaxed">{item.def}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Why It Matters</span>
                       <p className="text-slate-600 text-sm leading-relaxed italic">"{item.context}"</p>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ingin Menerapkan Konsep Ini Secara Otomatis?</h2>
              <p className="text-slate-300 mb-8">
                 BizOps menerjemahkan teori manajemen ini menjadi fitur software yang praktis. Tidak perlu menghitung manual.
              </p>
              <Link to="/demo">
                 <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none">
                    Coba Gratis BizOps <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default GlossaryPage;
