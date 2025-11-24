
import React from 'react';
import { whyBizOpsContent } from '../data/content';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Zap, Layers, Smartphone, Code, Leaf, Cpu } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Card from '../components/Card';

const WhyBizOpsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO title="Mengapa Memilih BizOps? | Keunggulan Kompetitif" description="Rangkuman nilai unik BizOps: Mobile Native, Data Sovereignty, dan Integrasi Seamless." />

      {/* Hero */}
      <Section className="text-center">
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Modernisasi Operasional Tanpa Merombak Segalanya.
         </h1>
         <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            BizOps dirancang sebagai 'Unified Layer' yang menghubungkan sistem legacy Anda (SAP, Mesin Absensi, Excel) atau bisa berfungsi sebagai sistem ERP tunggal yang lengkap. Pilihan di tangan Anda.
         </p>
      </Section>

      {/* The Sweet Spot (Quadrant Chart) */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16 leading-tight">The BizOps "Sweet Spot"</h2>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               
               {/* Visual Chart */}
               <div className="w-full lg:w-1/2 aspect-square max-w-[500px] relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
                  {/* Axes */}
                  <div className="absolute top-8 bottom-8 left-1/2 w-px bg-slate-300 dark:bg-slate-700 transform -translate-x-1/2"></div>
                  <div className="absolute left-8 right-8 top-1/2 h-px bg-slate-300 dark:bg-slate-700 transform -translate-y-1/2"></div>
                  
                  {/* Labels */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 uppercase">High Flexibility</div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 uppercase">Low Flexibility</div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-900 text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 uppercase origin-left">Difficult UX</div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 rotate-900 text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 uppercase origin-right">Easy UX</div>

                  {/* Competitors */}
                  <div className="absolute top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                     <div className="w-3 h-3 bg-slate-400 rounded-full mx-auto mb-1"></div>
                     <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Legacy ERP<br/>(SAP/Odoo)</span>
                  </div>

                  <div className="absolute bottom-[20%] right-[20%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                     <div className="w-3 h-3 bg-slate-400 rounded-full mx-auto mb-1"></div>
                     <span className="text-xs font-bold text-slate-500 dark:text-slate-400">SaaS Lokal<br/>(Jurnal)</span>
                  </div>

                  {/* BizOps Winner */}
                  <div className="absolute top-[15%] right-[15%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10 animate-bounce duration-[3000ms]">
                     <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/50 mx-auto mb-2 text-xl">
                        B
                     </div>
                     <span className="text-sm font-bold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/50 px-2 py-1 rounded">BizOps</span>
                  </div>
               </div>

               {/* Explanation */}
               <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex gap-4">
                     <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 flex-shrink-0 font-bold">1</div>
                     <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">Legacy ERP (Kiri Atas)</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Sangat fleksibel bisa dicustom, tapi UX sangat rumit. Butuh training berbulan-bulan. Mahal.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 flex-shrink-0 font-bold">2</div>
                     <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">SaaS Lokal (Kanan Bawah)</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Mudah dipakai, tapi fitur kaku (Take it or leave it). Data terkunci di vendor.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
                     <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 font-bold">3</div>
                     <div>
                        <h3 className="font-bold text-primary-900 dark:text-white text-lg">BizOps (Kanan Atas)</h3>
                        <p className="text-primary-800 dark:text-slate-300 text-sm">
                           Kombinasi <strong>Fleksibilitas Open Source</strong> dengan <strong>Kemudahan Mobile Native</strong>. Titik temu terbaik untuk bisnis modern Indonesia.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
      </Section>

      {/* Top 5 Reasons */}
      <Section>
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16 leading-tight">5 Alasan Strategis Berinvestasi di BizOps</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBizOpsContent.reasons.map((reason, idx) => (
               <Card key={idx} hoverEffect className="h-full">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-900 dark:text-white mb-6 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 transition-colors">
                     {idx === 0 && <Smartphone className="w-6 h-6" />}
                     {idx === 1 && <Shield className="w-6 h-6" />}
                     {idx === 2 && <Layers className="w-6 h-6" />}
                     {idx === 3 && <Code className="w-6 h-6" />}
                     {idx === 4 && <Zap className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{reason.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{reason.desc}</p>
               </Card>
            ))}
            
            {/* Last Box CTA */}
            <Card variant="dark" className="flex flex-col justify-center items-center text-center h-full">
               <h3 className="text-xl font-bold mb-4">Siap Bertransformasi?</h3>
               <Link to="/demo">
                  <Button fullWidth variant="white">Mulai Sekarang</Button>
               </Link>
            </Card>
         </div>
      </Section>

      {/* Sustainability Section (New) */}
      <Section className="bg-green-50 dark:bg-green-900/10 border-t border-green-100 dark:border-green-900">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-bold mb-4">
                  <Leaf className="w-4 h-4" /> Sustainability & Efficiency
               </div>
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  Clean Code, Lean Infrastructure.
               </h2>
               <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  Efisiensi kode bukan hanya soal kecepatan, tapi juga biaya dan jejak karbon. BizOps dibangun dengan arsitektur modern (Python/JS) yang membutuhkan 50% lebih sedikit resource server dibandingkan legacy Java-based ERP.
               </p>
               <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex gap-3 items-start">
                     <Cpu className="w-5 h-5 text-green-600 mt-1" />
                     <div>
                        <strong>Lower TCO (Total Cost of Ownership)</strong>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Jalankan di server 4GB RAM untuk 50 user. Hemat biaya cloud hosting hingga 40% per tahun.</p>
                     </div>
                  </li>
                  <li className="flex gap-3 items-start">
                     <Leaf className="w-5 h-5 text-green-600 mt-1" />
                     <div>
                        <strong>Green Computing</strong>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Optimasi query database dan lazy-loading assets mengurangi konsumsi energi data center.</p>
                     </div>
                  </li>
               </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
               <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
                  <span className="text-sm font-medium text-slate-500">Server Resource Usage (50 Users)</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">-50%</span>
               </div>
               <div className="space-y-6">
                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">BizOps ERP</span>
                        <span className="text-slate-500">2GB RAM</span>
                     </div>
                     <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-1/4"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold text-slate-500">Legacy Java ERP</span>
                        <span className="text-slate-500">8GB RAM</span>
                     </div>
                     <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 w-full"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">Masa Depan Operasional Anda Dimulai Di Sini.</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
               Jangan biarkan inefisiensi menjadi budaya. Ambil langkah pertama menuju transformasi digital yang nyata, terukur, dan berdaulat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/demo">
                  <Button size="lg" variant="white" className="font-bold">Mulai Transformasi Digital</Button>
               </Link>
               <Link to="/demo">
                  <Button size="lg" variant="outline-white">Jadwalkan Audit Kebutuhan</Button>
               </Link>
            </div>
         </div>
      </Section>

    </div>
  );
};

export default WhyBizOpsPage;
