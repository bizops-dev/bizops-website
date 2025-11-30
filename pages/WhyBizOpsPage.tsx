import React from 'react';
import { whyBizOpsContent } from '../data/content';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Zap, Layers, Smartphone, Code, Leaf, Cpu, Database, Link as LinkIcon, BarChart3, FileCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import CardSlider from '../components/CardSlider';
import Typography from '../components/Typography';

const WhyBizOpsPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
      <SEO title="Mengapa Memilih BizOps? | Keunggulan Kompetitif" description="Rangkuman nilai unik BizOps: Mobile Native, Data Sovereignty, dan Integrasi Seamless." />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0B1120] text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md text-primary-300 text-xs font-bold uppercase tracking-wider mb-8"
            >
               <Layers className="w-3 h-3" /> The Unified Layer
            </motion.div>

            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1, duration: 0.8 }}
               className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
            >
               Modernisasi Operasional <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Tanpa Merombak Segalanya.</span>
            </motion.h1>

            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
            >
               BizOps dirancang sebagai 'Unified Layer' yang menghubungkan sistem legacy Anda (SAP, Mesin Absensi, Excel) atau bisa berfungsi sebagai sistem ERP tunggal yang lengkap. Pilihan di tangan Anda.
            </motion.p>
         </div>
      </section>

      {/* --- THE SWEET SPOT (Visual Comparison) --- */}
      <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <Typography variant="h2" as="h2">The "Sweet Spot"</Typography>
               <Typography variant="body" className="text-slate-600 dark:text-slate-400">Mengapa bisnis Indonesia sering gagal implementasi ERP? Karena dipaksa memilih antara fleksibilitas atau kemudahan. Kami memberikan keduanya.</Typography>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               {/* Quadrant Chart */}
               <div className="w-full lg:w-1/2 aspect-square max-w-[500px] relative bg-slate-50 dark:bg-slate-800/50 rounded-3xl shadow-inner border border-slate-200 dark:border-slate-700 p-8 mx-auto">
                  {/* Axes */}
                  <div className="absolute top-8 bottom-8 left-1/2 w-px bg-slate-300 dark:bg-slate-600 transform -translate-x-1/2 border-l border-dashed border-slate-400 dark:border-slate-500"></div>
                  <div className="absolute left-8 right-8 top-1/2 h-px bg-slate-300 dark:bg-slate-600 transform -translate-y-1/2 border-t border-dashed border-slate-400 dark:border-slate-500"></div>
                  
                  {/* Labels */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-2">High Flexibility</div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-2">Low Flexibility</div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-2 origin-center">Hard to Use</div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-2 origin-center">Easy to Use</div>

                  {/* Competitors */}
                  <div className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 text-center opacity-70 group cursor-help">
                     <div className="w-4 h-4 bg-slate-400 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform"></div>
                     <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Legacy ERP<br/>(SAP/Oracle)</span>
                  </div>
                  
                  <div className="absolute bottom-[25%] right-[25%] transform -translate-x-1/2 -translate-y-1/2 text-center opacity-70 group cursor-help">
                     <div className="w-4 h-4 bg-slate-400 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform"></div>
                     <span className="text-xs font-bold text-slate-600 dark:text-slate-400">SaaS Lokal<br/>(Accounting App)</span>
                  </div>

                  {/* BizOps Winner */}
                  <div className="absolute top-[15%] right-[15%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                     <div className="relative">
                        <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20"></div>
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl shadow-primary-500/30 mx-auto mb-3 text-2xl border-4 border-white dark:border-slate-800">
                           B
                        </div>
                     </div>
                     <Typography variant="caption" className="text-primary-700 dark:text-primary-300">BizOps</Typography>
                  </div>
               </div>

               {/* Explanation */}
               <div className="w-full lg:w-1/2">
                  <div className="lg:hidden">
                     <CardSlider mobileItemWidth="w-[85vw] sm:w-[400px]">
                        <div className="group p-6 rounded-2xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700 transition-all h-full">
                           <div className="flex gap-4">
                              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-bold flex-shrink-0">1</div>
                              <div>
                                 <Typography variant="h3" as="h3">Legacy ERP (Kiri Atas)</Typography>
                                 <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Sangat powerful dan fleksibel, tapi UX sangat rumit ("kliky"). Butuh konsultan mahal dan training berbulan-bulan. Tidak ramah mobile.</Typography>
                              </div>
                           </div>
                        </div>
                        
                        <div className="group p-6 rounded-2xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700 transition-all h-full">
                           <div className="flex gap-4">
                              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-bold flex-shrink-0">2</div>
                              <div>
                                 <Typography variant="h3" as="h3">SaaS Lokal (Kanan Bawah)</Typography>
                                 <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Mudah dipakai dan murah, tapi fiturnya kaku (Take it or leave it). Sulit dikustomisasi untuk proses bisnis unik. Data terkunci di vendor.</Typography>
                              </div>
                           </div>
                        </div>

                        <div className="relative p-8 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-slate-900 rounded-3xl border border-primary-100 dark:border-primary-800 shadow-lg h-full">
                           <div className="flex gap-5">
                              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 font-bold text-xl shadow-lg shadow-primary-500/30">3</div>
                              <div>
                                 <Typography variant="h3" as="h3">The BizOps Way (Kanan Atas)</Typography>
                                 <Typography variant="caption" className="text-slate-700 dark:text-slate-300 leading-relaxed">Kami menggabungkan <strong>Open Source Flexibility</strong> (basis Frappe Framework) dengan <strong>Consumer-Grade UX</strong>. Anda mendapatkan sistem yang bisa dimodifikasi sesuka hati, namun tetap mudah digunakan oleh staff gudang sekalipun.</Typography>
                              </div>
                           </div>
                        </div>
                     </CardSlider>
                  </div>
                  
                  <div className="hidden lg:block space-y-6">
                     <div className="group p-6 rounded-2xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                        <div className="flex gap-4">
                           <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-bold flex-shrink-0">1</div>
                           <div>
                              <Typography variant="h3" as="h3">Legacy ERP (Kiri Atas)</Typography>
                              <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Sangat powerful dan fleksibel, tapi UX sangat rumit ("kliky"). Butuh konsultan mahal dan training berbulan-bulan. Tidak ramah mobile.</Typography>
                           </div>
                        </div>
                     </div>
                     
                     <div className="group p-6 rounded-2xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                        <div className="flex gap-4">
                           <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-bold flex-shrink-0">2</div>
                           <div>
                              <Typography variant="h3" as="h3">SaaS Lokal (Kanan Bawah)</Typography>
                              <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Mudah dipakai dan murah, tapi fiturnya kaku (Take it or leave it). Sulit dikustomisasi untuk proses bisnis unik. Data terkunci di vendor.</Typography>
                           </div>
                        </div>
                     </div>

                     <div className="relative p-8 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-slate-900 rounded-3xl border border-primary-100 dark:border-primary-800 shadow-lg">
                        <div className="flex gap-5">
                           <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 font-bold text-xl shadow-lg shadow-primary-500/30">3</div>
                           <div>
                              <Typography variant="h3" as="h3">The BizOps Way (Kanan Atas)</Typography>
                              <Typography variant="caption" className="text-slate-700 dark:text-slate-300 leading-relaxed">Kami menggabungkan <strong>Open Source Flexibility</strong> (basis Frappe Framework) dengan <strong>Consumer-Grade UX</strong>. Anda mendapatkan sistem yang bisa dimodifikasi sesuka hati, namun tetap mudah digunakan oleh staff gudang sekalipun.</Typography>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5 STRATEGIC REASONS --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Typography variant="h2" as="h2" className="font-extrabold text-slate-900 dark:text-white">5 Alasan Strategis Berinvestasi di BizOps</Typography>
            
            <div className="md:hidden">
               <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
                  {whyBizOpsContent.reasons.map((reason, idx) => (
                     <Card key={idx} hoverEffect className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex flex-col">
                        <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                           {idx === 0 && <Smartphone className="w-7 h-7 text-blue-500" />}
                           {idx === 1 && <Shield className="w-7 h-7 text-green-500" />}
                           {idx === 2 && <LinkIcon className="w-7 h-7 text-amber-500" />}
                           {idx === 3 && <Code className="w-7 h-7 text-purple-500" />}
                           {idx === 4 && <FileCheck className="w-7 h-7 text-teal-500" />}
                        </div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{reason.title}</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{reason.desc}</Typography>
                     </Card>
                  ))}
                  
                  {/* CTA Card */}
                  <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center h-full shadow-xl relative overflow-hidden group min-h-[300px]">
                     <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <Typography variant="h3" as="h3">Siap Bertransformasi?</Typography>
                     <Typography variant="caption" className="text-slate-300">Jadwalkan demo gratis 30 menit untuk melihat langsung perbedaannya.</Typography>
                     <Link to="/demo" className="relative z-10 w-full mt-auto">
                        <Button fullWidth className="bg-white text-slate-900 hover:bg-slate-100 border-none font-bold">Mulai Sekarang</Button>
                     </Link>
                  </div>
               </CardSlider>
            </div>

            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {whyBizOpsContent.reasons.map((reason, idx) => (
                  <Card key={idx} hoverEffect className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex flex-col">
                     <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                        {idx === 0 && <Smartphone className="w-7 h-7 text-blue-500" />}
                        {idx === 1 && <Shield className="w-7 h-7 text-green-500" />}
                        {idx === 2 && <LinkIcon className="w-7 h-7 text-amber-500" />}
                        {idx === 3 && <Code className="w-7 h-7 text-purple-500" />}
                        {idx === 4 && <FileCheck className="w-7 h-7 text-teal-500" />}
                     </div>
                     <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{reason.title}</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{reason.desc}</Typography>
                  </Card>
               ))}
               
               {/* CTA Card */}
               <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center h-full shadow-xl relative overflow-hidden group min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Typography variant="h3" as="h3">Siap Bertransformasi?</Typography>
                  <Typography variant="caption" className="text-slate-300">Jadwalkan demo gratis 30 menit untuk melihat langsung perbedaannya.</Typography>
                  <Link to="/demo" className="relative z-10 w-full mt-auto">
                     <Button fullWidth className="bg-white text-slate-900 hover:bg-slate-100 border-none font-bold">Mulai Sekarang</Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* --- SUSTAINABILITY & EFFICIENCY --- */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
         {/* Green accent bg */}
         <div className="absolute top-0 left-0 w-full h-full bg-green-50/50 dark:bg-green-900/5 pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                     <Leaf className="w-3 h-3" /> Sustainability & Efficiency
                  </div>
                  <Typography variant="h2" as="h2" className="font-extrabold text-slate-900 dark:text-white leading-tight">Clean Code, <br/>Lean Infrastructure.</Typography>
                  <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed">Efisiensi kode bukan hanya soal kecepatan, tapi juga biaya dan jejak karbon. BizOps dibangun dengan arsitektur modern (Python/JS) yang membutuhkan resource server jauh lebih sedikit dibandingkan legacy Java-based ERP.</Typography>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-green-600 shadow-sm border border-green-100 dark:border-green-900/30 shrink-0">
                           <Database className="w-5 h-5" />
                        </div>
                        <div>
                           <Typography variant="h4" as="h4">Lower TCO (Total Cost of Ownership)</Typography>
                           <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Jalankan di server 4GB RAM untuk 50 user. Hemat biaya cloud hosting hingga 40% per tahun.</Typography>
                        </div>
                     </div>
                     <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-green-600 shadow-sm border border-green-100 dark:border-green-900/30 shrink-0">
                           <Leaf className="w-5 h-5" />
                        </div>
                        <div>
                           <Typography variant="h4" as="h4">Green Computing</Typography>
                           <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Optimasi query database dan lazy-loading assets mengurangi konsumsi energi data center secara signifikan.</Typography>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Resource Usage Chart */}
               <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                  <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-6 mb-8">
                     <div>
                        <Typography variant="h4" as="h4">Server Resource Usage</Typography>
                        <Typography variant="body" className="text-slate-500">Benchmark: 50 Concurrent Users</Typography>
                     </div>
                     <Typography variant="caption" className="text-green-700">-75% Usage</Typography>
                  </div>
                  
                  <div className="space-y-8">
                     <div className="relative">
                        <div className="flex justify-between text-sm mb-2 font-semibold">
                           <span className="text-slate-900 dark:text-white flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> BizOps ERP</span>
                           <span className="text-slate-500">2GB RAM</span>
                        </div>
                        <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "25%" }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                           ></motion.div>
                        </div>
                     </div>
                     
                     <div className="relative opacity-60">
                        <div className="flex justify-between text-sm mb-2 font-semibold">
                           <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> Legacy Java ERP</span>
                           <span className="text-slate-500">8GB RAM</span>
                        </div>
                        <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                              className="h-full bg-slate-400 rounded-full"
                           ></motion.div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4 text-xs text-slate-500">
                     <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" /> Docker Ready
                     </div>
                     <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" /> Kubernetes Friendly
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-[#0B1120] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <Typography variant="h2" as="h2" className="font-extrabold leading-tight">Masa Depan Operasional Anda <br/>Dimulai Di Sini.</Typography>
            <Typography variant="body-xl" className="text-slate-300">Jangan biarkan inefisiensi menjadi budaya. Ambil langkah pertama menuju transformasi digital yang nyata, terukur, dan berdaulat.</Typography>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/demo">
                  <Button size="lg" className="h-14 px-8 bg-white text-slate-900 hover:bg-slate-100 border-none font-bold text-lg shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto">Mulai Transformasi Digital</Button>
               </Link>
               <Link to="/needs-analysis">
                  <Button size="lg" variant="outline" className="h-14 px-8 border-slate-700 text-white hover:bg-white/10 font-bold text-lg w-full sm:w-auto">Jadwalkan Audit Kebutuhan</Button>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default WhyBizOpsPage;
