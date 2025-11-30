
import React from 'react';
import { glossaryData } from '../data/content';
import Button from '../components/Button';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';

const GlossaryPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="Kamus Istilah Bisnis, ERP & HR Indonesia | BizOps Wiki" description="Ensiklopedia lengkap istilah bisnis modern. Pelajari PPh 21 TER, Kurva-S, Safety Stock, dan lainnya." />

      <Container size="7xl">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-xl mb-6 text-primary-600">
              <BookOpen className="w-8 h-8" />
           </div>
           <Typography variant="h1" as="h1">Pahami Bahasa Bisnis & Teknologi.</Typography>
           <Typography variant="body-xl" className="text-slate-600">Dunia manajemen perusahaan penuh dengan akronim yang membingungkan. Kami menyusun pusat pengetahuan ini untuk Anda.</Typography>
           
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
        <Grid cols={2} gap={8} className="mb-16">
           {glossaryData.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-primary-100 transition-all group">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-2xl text-primary-600 border border-slate-200 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                       {item.char}
                    </div>
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900">{item.term}</Typography>
                 </div>
                 <div className="space-y-4">
                    <div>
                       <Typography variant="caption" className="text-slate-400">Definisi</Typography>
                       <Typography variant="caption" className="text-slate-700 leading-relaxed">{item.def}</Typography>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                       <Typography variant="caption" className="text-slate-400">Why It Matters</Typography>
                       <Typography variant="caption" className="text-slate-600 leading-relaxed">"{item.context}"</Typography>
                    </div>
                 </div>
              </div>
           ))}
        </Grid>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10 max-w-2xl mx-auto">
              <Typography variant="h2" as="h2">Ingin Menerapkan Konsep Ini Secara Otomatis?</Typography>
              <Typography variant="body" className="text-slate-300">BizOps menerjemahkan teori manajemen ini menjadi fitur software yang praktis. Tidak perlu menghitung manual.</Typography>
              <Link to="/demo">
                 <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none">
                    Coba Gratis BizOps <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </Link>
           </div>
        </div>

      </Container>
    </div>
  );
};

export default GlossaryPage;
