
import React from 'react';
import { Building, Users, Heart, Search, Code, ShieldCheck, MapPin, FileCheck, User, Download } from 'lucide-react';
import SEO from '../components/SEO';
import { aboutContent } from '../data/content';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24">
      <SEO title="Tentang Kami - PT Divistant Teknologi Indonesia" description="Profil perusahaan, visi kedaulatan digital, dan tim di balik BizOps." />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 text-center mb-24">
        <div className="inline-flex items-center justify-center p-2 px-4 bg-slate-100 rounded-full text-slate-600 text-sm font-semibold mb-6">
           Engineering Sovereignty & Vision
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Bermitra dengan Tim Praktisi yang Mengerti Masalah Nyata di Lapangan.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          {aboutContent.hero.subheadline}
        </p>
      </section>

      {/* Origin Story Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Origin Story</h2>
         <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 space-y-16">
            
            {aboutContent.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                 <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white ${idx === 1 ? 'bg-primary-500' : 'bg-slate-300'}`}></div>
                 <div className="md:grid md:grid-cols-5 md:gap-8">
                    <div className="md:col-span-1 mb-2 md:mb-0">
                       <span className={`text-sm font-bold uppercase tracking-wider ${idx === 1 ? 'text-primary-600' : 'text-slate-500'}`}>{item.year}</span>
                    </div>
                    <div className={`md:col-span-4 p-6 rounded-2xl border ${idx === 1 ? 'bg-primary-50 border-primary-100' : 'bg-white border-slate-100 shadow-sm'}`}>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                       <p className={`leading-relaxed ${idx === 1 ? 'text-slate-700' : 'text-slate-600'}`}>
                          {item.desc}
                       </p>
                    </div>
                 </div>
              </div>
            ))}

         </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-900 py-24 text-white mb-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-16 text-center">Core Values: The Operating System of Our Culture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {aboutContent.values.map((val, idx) => (
                 <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition-colors">
                    <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                       {idx === 0 && <Wrench className="w-6 h-6 text-blue-400" />}
                       {idx === 1 && <Search className="w-6 h-6 text-green-400" />}
                       {idx === 2 && <ShieldCheck className="w-6 h-6 text-amber-400" />}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                    <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                       {val.manifesto}
                    </p>
                    <div className={`bg-slate-900/50 p-4 rounded-lg border-l-4 ${idx === 0 ? 'border-blue-500' : idx === 1 ? 'border-green-500' : 'border-amber-500'}`}>
                       <span className={`text-xs font-bold uppercase block mb-1 ${idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-green-400' : 'text-amber-400'}`}>Bukti Nyata</span>
                       <span className="text-xs text-slate-400">{val.proof}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-slate-600">Para ahli di balik visi BizOps.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
               <div key={item} className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center relative">
                     <User className="w-20 h-20 text-slate-300" />
                     <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="white" className="text-xs h-8 px-2 shadow-sm"><Download className="w-4 h-4 mr-1" /> Bio</Button>
                     </div>
                  </div>
                  <div className="p-4">
                     <div className="font-bold text-slate-900">Nama Pimpinan {item}</div>
                     <div className="text-xs text-slate-500 mb-2">C-Level Position</div>
                     <a href="#" className="text-xs text-primary-600 hover:underline">LinkedIn Profile &rarr;</a>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Company Info & Legal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Office & Legal Entity</h2>
               <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-start gap-4">
                     <Building className="w-6 h-6 text-slate-400 mt-1" />
                     <div>
                        <div className="text-sm font-semibold text-slate-500">Legal Name</div>
                        <div className="font-bold text-slate-900 text-lg">{aboutContent.entity.name}</div>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <FileCheck className="w-6 h-6 text-slate-400 mt-1" />
                     <div>
                        <div className="text-sm font-semibold text-slate-500">Legal & Compliance</div>
                        <div className="text-slate-900">{aboutContent.entity.legal}</div>
                        <div className="text-slate-900 mt-1 text-sm">{aboutContent.entity.compliance}</div>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <MapPin className="w-6 h-6 text-slate-400 mt-1" />
                     <div>
                        <div className="text-sm font-semibold text-slate-500">Headquarters</div>
                        <div className="text-slate-900">{aboutContent.entity.hq}</div>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <Code className="w-6 h-6 text-slate-400 mt-1" />
                     <div>
                        <div className="text-sm font-semibold text-slate-500">R&D Center</div>
                        <div className="text-slate-900">{aboutContent.entity.rnd}</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Engineering First DNA</h3>
               <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Kami bukan sekadar perusahaan penjualan. 70% dari total tim kami adalah <strong>Product, Engineering, & QA</strong>. Ini memastikan fokus utama perusahaan adalah inovasi produk dan stabilitas sistem, bukan sekadar operasi marketing yang agresif. Kami berinvestasi pada kode, bukan hanya pada iklan.
               </p>
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"></div>
                     ))}
                  </div>
                  <span className="text-sm text-slate-500 font-medium">Join our growing team</span>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

// Simple Icon Component needed locally
const Wrench = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);

export default AboutPage;
