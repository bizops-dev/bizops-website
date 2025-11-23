
import React from 'react';
import { customerStories } from '../data/content';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Quote, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';

const CustomerPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <SEO title="Studi Kasus & Kisah Sukses Transformasi Digital" description="Lihat bukti nyata bagaimana perusahaan konstruksi, distribusi, dan jasa meningkatkan profitabilitas dengan BizOps." />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Mereka yang Telah Bertransformasi.
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
           Di era disrupsi, hanya perusahaan yang adaptif yang bertahan. Telusuri perjalanan mitra kami—dari kekacauan administrasi menuju keunggulan operasional.
        </p>
      </div>

      {/* Stories Grid/Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <CardSlider desktopClassName="md:flex md:flex-col md:space-y-16 md:gap-0" mobileItemWidth="w-[90vw]">
            {customerStories.map((story, idx) => (
               <div key={idx} className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col lg:flex-row group hover:shadow-xl transition-shadow h-full md:h-auto mb-4 md:mb-0">
                  
                  {/* Left: Narrative */}
                  <div className="p-8 lg:p-12 flex-1 flex flex-col">
                     {/* Client Header */}
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                           {story.logo}
                        </div>
                        <div>
                           <h3 className="font-bold text-slate-900 text-lg">{story.client}</h3>
                           <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">{story.industry}</p>
                        </div>
                     </div>

                     <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
                        "{story.title}"
                     </h2>

                     {/* Problem / Solution Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                           <div className="flex items-center gap-2 mb-3 text-red-600 font-bold uppercase text-xs tracking-wider">
                              <AlertTriangle className="w-4 h-4" /> The Chaos
                           </div>
                           <p className="text-slate-700 text-sm leading-relaxed">
                              "{story.chaos}"
                           </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                           <div className="flex items-center gap-2 mb-3 text-green-600 font-bold uppercase text-xs tracking-wider">
                              <CheckCircle className="w-4 h-4" /> The Solution
                           </div>
                           <p className="text-slate-700 text-sm leading-relaxed">
                              {story.solution}
                           </p>
                        </div>
                     </div>
                     
                     {/* Quote / Impact */}
                     <div className="mt-auto pt-6 border-t border-slate-100">
                         <div className="flex gap-4">
                            <Quote className="w-8 h-8 text-primary-200 flex-shrink-0" />
                            <p className="text-slate-600 italic font-medium leading-relaxed">
                               {story.desc}
                            </p>
                         </div>
                     </div>
                  </div>

                  {/* Right: Metrics & Visual */}
                  <div className="bg-slate-900 p-8 lg:p-12 lg:w-[350px] flex flex-col justify-center text-white relative overflow-hidden flex-shrink-0">
                     <div className="relative z-10 space-y-10">
                        {story.metrics.map((m, i) => (
                           <div key={i} className="text-center lg:text-left">
                              <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">{m.value}</div>
                              <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold">{m.label}</div>
                           </div>
                        ))}
                     </div>
                     {/* Abstract Decor */}
                     <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
                     <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full mix-blend-overlay filter blur-2xl opacity-20"></div>
                  </div>
               </div>
            ))}
         </CardSlider>
      </div>
      
      {/* CTA */}
      <div className="mt-24 text-center max-w-3xl mx-auto px-4">
         <h2 className="text-2xl font-bold text-slate-900 mb-4">Apakah Bisnis Anda Menghadapi Tantangan Serupa?</h2>
         <p className="text-slate-600 mb-8">
            Setiap industri memiliki keunikan. Diskusikan masalah spesifik Anda dengan tim ahli kami yang berpengalaman di bidang Anda.
         </p>
         <Link to="/demo">
            <Button size="lg" className="shadow-xl">Jadwalkan Diskusi Solusi <ArrowRight className="ml-2 w-4 h-4" /></Button>
         </Link>
      </div>
    </div>
  );
};

export default CustomerPage;
