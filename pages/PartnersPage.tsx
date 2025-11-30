import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Shield, Code, DollarSign, Users, ArrowRight, Zap, RefreshCw, Layers, Monitor, Phone, Gift, Sliders } from 'lucide-react';
import Button from '../components/Button';
import { partnerContent } from '../data/content';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const PartnersPage: React.FC = () => {
  // Calculator State
  const [sellingPrice, setSellingPrice] = useState(2500000); // Harga Jual ke Klien (Monthly)
  const [partnerCost, setPartnerCost] = useState(2000000); // Biaya Dasar Partner (Monthly) - margin reseller lebih tipis dari whitelabel biasanya
  const [setupFee, setSetupFee] = useState(15000000); // Biaya Implementasi Awal (One-time)
  const [activeClients, setActiveClients] = useState(5); // Jumlah Klien Saat Ini
  const [growthRate, setGrowthRate] = useState(1); // Penambahan Klien per Bulan
  
  // Derived Metrics
  // Asumsi Reseller Margin: Harga Jual - Harga Partner (Net Price)
  const monthlyMarginPerClient = sellingPrice - partnerCost;
  const currentMonthlyProfit = monthlyMarginPerClient * activeClients;
  
  // Projections
  const [year1Profit, setYear1Profit] = useState(0);
  const [year2Profit, setYear2Profit] = useState(0);

  useEffect(() => {
    // Calculate Year 1
    let totalY1 = 0;
    let clients = activeClients;
    for (let i = 0; i < 12; i++) {
       clients += growthRate;
       const monthlyRec = clients * monthlyMarginPerClient;
       const monthlySetup = growthRate * setupFee;
       totalY1 += monthlyRec + monthlySetup;
    }
    setYear1Profit(totalY1);

    // Calculate Year 2 (continuing from end of Year 1)
    let totalY2 = 0;
    for (let i = 0; i < 12; i++) {
       clients += growthRate;
       const monthlyRec = clients * monthlyMarginPerClient;
       const monthlySetup = growthRate * setupFee;
       totalY2 += monthlyRec + monthlySetup;
    }
    setYear2Profit(totalY2);

  }, [sellingPrice, partnerCost, setupFee, activeClients, growthRate]);

  const formatCurrency = (val: number) => {
     return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
      <SEO 
        title="Program Partner Implementasi & Reseller ERP Indonesia" 
        description="Peluang bisnis bagi Konsultan & Software House. Dapatkan recurring revenue dan fee implementasi dengan menjadi partner resmi BizOps."
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0B1120] pt-32 pb-24 lg:pt-48 lg:pb-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary-900/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400 mb-8 uppercase tracking-wider"
                >
                   <Users className="w-3 h-3 mr-2" /> Partner Ecosystem
                </motion.div>
                <motion.h1 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                >
                   Scale Your Consulting Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">With BizOps.</span>
                </motion.h1>
                <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl font-light"
                >
                   Fokus pada keahlian konsultasi dan implementasi Anda. Biarkan kami menyediakan teknologi ERP kelas dunia yang stabil, aman, dan mudah dikustomisasi.
                </motion.p>
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className="flex flex-col sm:flex-row gap-4"
                >
                   <Link to="/partners/apply">
                      <Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white border-none font-bold shadow-lg shadow-blue-600/20">
                         Gabung Partner Network
                      </Button>
                   </Link>
                   <a href="#calculator" onClick={(e) => { e.preventDefault(); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }}>
                      <Button size="lg" variant="outline" className="h-14 px-8 border-slate-700 text-white hover:bg-white/10">
                         Simulasi Profit
                      </Button>
                   </a>
                </motion.div>
             </div>
             
             {/* Visual: Partner Success */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative hidden lg:block"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-[60px]"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-2xl">
                   <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-6">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                         <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                         <div className="text-sm text-slate-400">Partner Dashboard</div>
                         <div className="font-bold text-white text-xl">Revenue Overview</div>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                         <div className="flex items-center gap-3">
                            <Code className="w-5 h-5 text-emerald-400" />
                            <div>
                               <div className="text-slate-300 font-bold">Implementation Fee</div>
                               <div className="text-xs text-slate-500">Project: PT Maju Jaya</div>
                            </div>
                         </div>
                         <span className="text-emerald-400 text-sm">+ Rp 150.000.000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                         <div className="flex items-center gap-3">
                            <RefreshCw className="w-5 h-5 text-blue-400" />
                            <div>
                               <div className="text-slate-300 font-bold">Recurring Commission</div>
                               <div className="text-xs text-slate-500">Q3 2024 Payout</div>
                            </div>
                         </div>
                         <span className="text-blue-400 text-sm">+ Rp 45.000.000</span>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
                         <span className="text-slate-400 font-medium">Total Partner Earnings</span>
                         <span className="text-2xl font-bold text-white">Rp 195.000.000</span>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- PARTNER TYPES (Modified: Removed Whitelabel) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Pilih Model Kemitraan Anda</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Kami menawarkan fleksibilitas sesuai dengan model bisnis Anda.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Referral Partner */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group">
               <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Gift className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Referral Partner</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">Cukup referensikan leads potensial, kami yang mengurus penjualan, demo, & implementasi.</p>
               <ul className="space-y-3 mb-8">
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 shrink-0" /> Komisi hingga 20% dari nilai kontrak tahun pertama</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 shrink-0" /> Tidak perlu tim teknis atau sertifikasi</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 shrink-0" /> Cocok untuk Freelancer & Influencer B2B</li>
               </ul>
               <Link to="/partners/apply?program=referral">
                  <Button fullWidth variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">Daftar Referral</Button>
               </Link>
            </div>

            {/* Implementation Partner */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-primary-500 shadow-xl relative z-10">
               <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
               <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Implementation Partner</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">Anda memegang kendali penuh atas hubungan klien, implementasi, training, dan support.</p>
               <ul className="space-y-3 mb-8">
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> Reseller Margin untuk Lisensi (Recurring)</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> 100% Revenue dari Jasa Implementasi & Support</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> Dedicated Partner Manager & Tech Support</li>
               </ul>
               <Link to="/partners/apply?program=implementation">
                  <Button fullWidth variant="primary">Apply Partner</Button>
               </Link>
            </div>
         </div>
      </section>

      {/* --- PROFIT CALCULATOR (Adjusted Context) --- */}
      <section id="calculator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Simulasi Potensi Bisnis</h2>
             <p className="text-slate-300 max-w-2xl mx-auto">
                Hitung potensi pendapatan Anda sebagai Implementation Partner. Gabungkan margin penjualan lisensi dan pendapatan jasa implementasi.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls */}
            <div className="lg:col-span-5 space-y-8 bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
               
               <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold uppercase tracking-wider text-xs">
                  <Sliders className="w-4 h-4" /> Konfigurasi Bisnis
               </div>

               {/* Selling Price */}
               <div>
                  <div className="flex justify-between mb-2">
                     <label className="text-sm font-medium text-slate-300">Harga Lisensi ke Klien (Per Bulan)</label>
                     <span className="text-sm font-bold text-white">{formatCurrency(sellingPrice)}</span>
                  </div>
                  <input 
                     type="range" min="1000000" max="10000000" step="500000"
                     value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))}
                     className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-400"
                  />
                  <p className="text-xs text-slate-500 mt-2">Harga langganan SaaS BizOps standar.</p>
               </div>

               {/* Setup Fee */}
               <div>
                  <div className="flex justify-between mb-2">
                     <label className="text-sm font-medium text-slate-300">Biaya Implementasi Anda (One-time)</label>
                     <span className="text-sm font-bold text-white">{formatCurrency(setupFee)}</span>
                  </div>
                  <input 
                     type="range" min="5000000" max="100000000" step="1000000"
                     value={setupFee} onChange={(e) => setSetupFee(Number(e.target.value))}
                     className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-400"
                  />
                  <p className="text-xs text-slate-500 mt-2">Nilai jasa setup, training, dan migrasi data yang Anda charge ke klien.</p>
               </div>

               <hr className="border-slate-700" />

               {/* Partner Cost */}
               <div>
                  <div className="flex justify-between mb-2">
                     <label className="text-sm font-medium text-slate-300">Harga Dasar Partner (Net Price)</label>
                     <span className="text-sm font-bold text-slate-400">{formatCurrency(partnerCost)}</span>
                  </div>
                  <input 
                     type="range" min="200000" max="9000000" step="100000"
                     value={partnerCost} onChange={(e) => setPartnerCost(Number(e.target.value))}
                     className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-500"
                  />
                  <p className="text-xs text-slate-500 mt-2">Harga spesial partner yang Anda bayarkan ke BizOps. (Selisih adalah margin Anda)</p>
               </div>

               <hr className="border-slate-700" />

               {/* Clients */}
               <div className="grid grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-medium text-slate-300 mb-2">Klien Awal</label>
                     <div className="relative">
                        <input 
                           type="number" 
                           value={activeClients} onChange={(e) => setActiveClients(Number(e.target.value))}
                           className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        />
                     </div>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-300 mb-2">New Clients / Mo</label>
                     <div className="relative">
                        <input 
                           type="number" 
                           value={growthRate} onChange={(e) => setGrowthRate(Number(e.target.value))}
                           className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        />
                        <span className="absolute right-3 top-2.5 text-xs text-slate-500">+ klien</span>
                     </div>
                  </div>
               </div>

            </div>

            {/* Results */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-2xl text-slate-900 dark:text-white">
               
               <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-500 mb-4 uppercase tracking-widest text-xs">Snapshot Profitabilitas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-sm text-slate-500 mb-1">Margin Lisensi (Recurring)</div>
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                           {formatCurrency(monthlyMarginPerClient)} <span className="text-xs text-slate-400 font-normal">/client/bln</span>
                        </div>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-sm text-slate-500 mb-1">Total Recurring Profit (MRR)</div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                           {formatCurrency(currentMonthlyProfit)} <span className="text-xs text-slate-400 font-normal">/bln</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <h3 className="text-lg font-bold text-slate-500 mb-6 uppercase tracking-widest text-xs">Total Earnings Projection</h3>
                  
                  {/* Year 1 Bar */}
                  <div className="mb-6">
                     <div className="flex justify-between items-end mb-2">
                        <div>
                           <span className="font-bold text-lg">Tahun Pertama</span>
                           <p className="text-xs text-slate-500">Total Profit Bersih (License Margin + Implementation Fees)</p>
                        </div>
                        <div className="text-right">
                           <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{formatCurrency(year1Profit)}</span>
                        </div>
                     </div>
                     <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "40%" }}
                           transition={{ duration: 1 }}
                           className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full"
                        ></motion.div>
                     </div>
                  </div>

                  {/* Year 2 Bar */}
                  <div className="mb-8">
                     <div className="flex justify-between items-end mb-2">
                        <div>
                           <span className="font-bold text-lg">Tahun Kedua</span>
                           <p className="text-xs text-slate-500">Dengan akumulasi klien tahun sebelumnya</p>
                        </div>
                        <div className="text-right">
                           <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">{formatCurrency(year2Profit)}</span>
                        </div>
                     </div>
                     <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-6 overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "85%" }}
                           transition={{ duration: 1, delay: 0.2 }}
                           className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full relative"
                        >
                           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        </motion.div>
                     </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-sm text-blue-900 dark:text-blue-300 leading-relaxed flex items-start gap-3">
                     <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                     <div>
                        <strong className="font-bold">Strategi Reseller:</strong> Fokus pada volume dan retensi klien. Semakin lama klien berlangganan, semakin besar akumulasi profit pasif Anda tanpa perlu effort penjualan ulang.
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS ICONS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerContent.benefits.map((benefit, idx) => (
               <div key={idx} className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-900 dark:text-white mb-4">
                     <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{benefit.desc}</p>
               </div>
            ))}
         </div>
      </section>

    </div>
  );
};

export default PartnersPage;
