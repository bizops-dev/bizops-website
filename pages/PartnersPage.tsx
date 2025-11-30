import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Shield, Code, DollarSign, Users, ArrowRight, Zap, RefreshCw, Layers, Monitor, Phone, Gift, Sliders, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import { partnerContent } from '../data/content';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import CardSlider from '../components/CardSlider';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

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
    <div className="flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors gap-4">
      <SEO 
        title="Program Partner Implementasi & Reseller ERP Indonesia" 
        description="Peluang bisnis bagi Konsultan & Software House. Dapatkan recurring revenue dan fee implementasi dengan menjadi partner resmi BizOps."
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0B1120] pt-32 pb-24 lg:pt-48 lg:pb-32 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary-900/30 rounded-full blur-[100px] pointer-events-none"></div>

        <Container size="7xl" className="relative z-10">
          <Grid cols={2} gap={16} className="items-center">
             <div>
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400 dark:text-blue-300 mb-8 uppercase tracking-wider gap-4"
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
                      <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 text-white border-none font-bold shadow-lg shadow-blue-600/20 w-full sm:w-auto">
                         Gabung Partner Network
                      </Button>
                   </Link>
                   <a href="#calculator" onClick={(e) => { e.preventDefault(); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto">
                      <Button size="lg" variant="outline" className="px-8 border-slate-700 text-slate-900 dark:text-white hover:bg-white/10 w-full">
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
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg gap-4">
                         <TrendingUp className="w-6 h-6 text-blue-600 dark:text-slate-300" />
                      </div>
                      <div>
                         <div className="text-sm text-slate-400 dark:text-slate-300">Partner Dashboard</div>
                         <div className="font-bold text-white text-xl">Revenue Overview</div>
                      </div>
                   </div>
                   <Stack direction="vertical" gap={4}>
                      <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 gap-4">
                         <div className="flex items-center gap-3">
                            <Code className="w-5 h-5 text-emerald-400 dark:text-emerald-300" />
                            <div>
                               <div className="text-slate-300 font-bold">Implementation Fee</div>
                               <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300">Project: PT Maju Jaya</div>
                            </div>
                         </div>
                         <span className="text-emerald-400 dark:text-emerald-300 text-sm">+ Rp 150.000.000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 gap-4">
                         <div className="flex items-center gap-3">
                            <RefreshCw className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                            <div>
                               <div className="text-slate-300 font-bold">Recurring Commission</div>
                               <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300">Q3 2024 Payout</div>
                            </div>
                         </div>
                         <span className="text-blue-400 dark:text-blue-300 text-sm">+ Rp 45.000.000</span>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center gap-4">
                         <span className="text-slate-400 dark:text-slate-300 font-medium">Total Partner Earnings</span>
                         <Typography variant="body" className="text-2xl text-white">Rp 195.000.000</Typography>
                      </div>
                   </Stack>
                </div>
             </motion.div>
          </Grid>
        </Container>
      </section>

      {/* --- PARTNER TYPES (Modified: Removed Whitelabel) --- */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <Typography variant="h2" as="h2">Pilih Model Kemitraan Anda</Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Kami menawarkan fleksibilitas sesuai dengan model bisnis Anda.</Typography>
         </div>

         <div className="md:hidden">
            <CardSlider mobileItemWidth="w-[85vw] sm:w-[400px]">
               {/* Referral Partner */}
               <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group flex flex-col gap-4">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-slate-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform gap-4">
                     <Gift className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Referral Partner</Typography>
                  <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Cukup referensikan leads potensial, kami yang mengurus penjualan, demo, & implementasi.</Typography>
                  <ul className="space-y-3 mb-8 flex-grow gap-4">
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 dark:text-blue-300 shrink-0" /> Komisi hingga 20% dari nilai kontrak tahun pertama</li>
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 dark:text-blue-300 shrink-0" /> Tidak perlu tim teknis atau sertifikasi</li>
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 dark:text-blue-300 shrink-0" /> Cocok untuk Freelancer & Influencer B2B</li>
                  </ul>
                  <Link to="/partners/apply?program=referral" className="mt-auto">
                     <Button size="md" fullWidth variant="outline" className="border-blue-200 text-blue-600 dark:text-slate-300 hover:bg-blue-50">Daftar Referral</Button>
                  </Link>
               </div>

               {/* Implementation Partner */}
               <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-primary-500 shadow-xl relative z-10 flex flex-col gap-4">
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center mb-6 gap-4">
                     <Code className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Implementation Partner</Typography>
                  <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Anda memegang kendali penuh atas hubungan klien, implementasi, training, dan support.</Typography>
                  <ul className="space-y-3 mb-8 flex-grow gap-4">
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> Reseller Margin untuk Lisensi (Recurring)</li>
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> 100% Revenue dari Jasa Implementasi & Support</li>
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> Dedicated Partner Manager & Tech Support</li>
                  </ul>
                  <Link to="/partners/apply?program=implementation" className="mt-auto">
                     <Button size="md" fullWidth variant="primary">Apply Partner</Button>
                  </Link>
               </div>

               {/* Managed Services Partner */}
               <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-all group flex flex-col gap-4">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-slate-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform gap-4">
                     <Briefcase className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Managed Services Partner</Typography>
                  <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Untuk konsultan profesional (HR, Finance, Legal) yang ingin membundling jasa dengan sistem ERP.</Typography>
                  <ul className="space-y-3 mb-8 flex-grow gap-4">
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 dark:text-purple-300 shrink-0" /> Bundling Jasa + Software (High Value)</li>
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 dark:text-purple-300 shrink-0" /> Recurring Revenue dari Retainer Fee</li>
                     <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 dark:text-purple-300 shrink-0" /> Akses ke Tools & Dashboard Khusus Partner</li>
                  </ul>
                  <Link to="/partners/apply?program=managed-services" className="mt-auto">
                     <Button size="md" fullWidth variant="outline" className="border-purple-200 text-purple-600 dark:text-slate-300 hover:bg-purple-50">Daftar Managed Services</Button>
                  </Link>
               </div>
            </CardSlider>
         </div>

         <Container size="6xl" className="hidden md:grid md:grid-cols-3 gap-8">
            {/* Referral Partner */}
            <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group flex flex-col gap-4">
               <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-slate-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform gap-4">
                  <Gift className="w-7 h-7" />
               </div>
               <Typography variant="h3" as="h3">Referral Partner</Typography>
               <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Cukup referensikan leads potensial, kami yang mengurus penjualan, demo, & implementasi.</Typography>
               <ul className="space-y-3 mb-8 flex-grow gap-4">
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 dark:text-blue-300 shrink-0" /> Komisi hingga 20% dari nilai kontrak tahun pertama</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 dark:text-blue-300 shrink-0" /> Tidak perlu tim teknis atau sertifikasi</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 dark:text-blue-300 shrink-0" /> Cocok untuk Freelancer & Influencer B2B</li>
               </ul>
               <Link to="/partners/apply?program=referral" className="mt-auto">
                  <Button size="md" fullWidth variant="outline" className="border-blue-200 text-blue-600 dark:text-slate-300 hover:bg-blue-50">Daftar Referral</Button>
               </Link>
            </div>

            {/* Implementation Partner */}
            <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-primary-500 shadow-xl relative z-10 flex flex-col gap-4">
               <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
               <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center mb-6 gap-4">
                  <Code className="w-7 h-7" />
               </div>
               <Typography variant="h3" as="h3">Implementation Partner</Typography>
               <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Anda memegang kendali penuh atas hubungan klien, implementasi, training, dan support.</Typography>
               <ul className="space-y-3 mb-8 flex-grow gap-4">
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> Reseller Margin untuk Lisensi (Recurring)</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> 100% Revenue dari Jasa Implementasi & Support</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-primary-500 shrink-0" /> Dedicated Partner Manager & Tech Support</li>
               </ul>
               <Link to="/partners/apply?program=implementation" className="mt-auto">
                  <Button size="md" fullWidth variant="primary">Apply Partner</Button>
               </Link>
            </div>

            {/* Managed Services Partner */}
            <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-all group flex flex-col gap-4">
               <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-slate-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform gap-4">
                  <Briefcase className="w-7 h-7" />
               </div>
               <Typography variant="h3" as="h3">Managed Services Partner</Typography>
               <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Untuk konsultan profesional (HR, Finance, Legal) yang ingin membundling jasa dengan sistem ERP.</Typography>
               <ul className="space-y-3 mb-8 flex-grow gap-4">
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 dark:text-purple-300 shrink-0" /> Bundling Jasa + Software (High Value)</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 dark:text-purple-300 shrink-0" /> Recurring Revenue dari Retainer Fee</li>
                  <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 dark:text-purple-300 shrink-0" /> Akses ke Tools & Dashboard Khusus Partner</li>
               </ul>
               <Link to="/partners/apply?program=managed-services" className="mt-auto">
                  <Button size="md" fullWidth variant="outline" className="border-purple-200 text-purple-600 dark:text-slate-300 hover:bg-purple-50">Daftar Managed Services</Button>
               </Link>
            </div>
         </Container>
      </section>

      {/* --- PROFIT CALCULATOR (Adjusted Context) --- */}
      <section id="calculator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <Container size="7xl" className="relative z-10">
          
          <div className="text-center mb-16">
             <Typography variant="h2" as="h2">Simulasi Potensi Bisnis</Typography>
             <Typography variant="body" className="text-slate-300">Hitung potensi pendapatan Anda sebagai Implementation Partner. Gabungkan margin penjualan lisensi dan pendapatan jasa implementasi.</Typography>
          </div>

          <Grid cols={12} gap={8} className="items-start">
            
            {/* Controls */}
            <Stack direction="vertical" gap={8} className="lg:col-span-5 bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-slate-700">
               
               <div className="flex items-center gap-2 mb-2 text-blue-400 dark:text-blue-300 font-bold uppercase tracking-wider text-xs">
                  <Sliders className="w-4 h-4" /> Konfigurasi Bisnis
               </div>

               {/* Selling Price */}
               <div>
                  <div className="flex justify-between mb-2 gap-4">
                     <Typography variant="caption" className="text-sm font-medium text-slate-300">Harga Lisensi (Bulan)</Typography>
                     <Typography variant="caption" className="text-white">{formatCurrency(sellingPrice)}</Typography>
                  </div>
                  <input 
                     type="range" min="1000000" max="10000000" step="500000"
                     value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))}
                     className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-400"
                  />
                  <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Harga langganan SaaS BizOps standar.</Typography>
               </div>

               {/* Setup Fee */}
               <div>
                  <div className="flex justify-between mb-2 gap-4">
                     <Typography variant="caption" className="text-sm font-medium text-slate-300">Biaya Setup (One-time)</Typography>
                     <Typography variant="caption" className="text-white">{formatCurrency(setupFee)}</Typography>
                  </div>
                  <input 
                     type="range" min="5000000" max="100000000" step="1000000"
                     value={setupFee} onChange={(e) => setSetupFee(Number(e.target.value))}
                     className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-400"
                  />
                  <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Nilai jasa setup, training, dan migrasi data.</Typography>
               </div>

               <hr className="border-slate-700" />

               {/* Partner Cost */}
               <div>
                  <div className="flex justify-between mb-2 gap-4">
                     <Typography variant="caption" className="text-sm font-medium text-slate-300">Harga Dasar Partner</Typography>
                     <Typography variant="caption" className="text-slate-400 dark:text-slate-300">{formatCurrency(partnerCost)}</Typography>
                  </div>
                  <input 
                     type="range" min="200000" max="9000000" step="100000"
                     value={partnerCost} onChange={(e) => setPartnerCost(Number(e.target.value))}
                     className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-slate-500"
                  />
                  <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Harga spesial partner ke BizOps (Cost of Goods Sold).</Typography>
               </div>

               <hr className="border-slate-700" />

               {/* Clients */}
               <Grid cols={2} gap={6}>
                  <div>
                     <Typography variant="caption" className="block text-sm font-medium text-slate-300 mb-2">Klien Awal</Typography>
                     <div className="relative">
                        <input 
                           type="number" 
                           value={activeClients} onChange={(e) => setActiveClients(Number(e.target.value))}
                           className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        />
                     </div>
                  </div>
                  <div>
                     <Typography variant="caption" className="block text-sm font-medium text-slate-300 mb-2">New Clients / Mo</Typography>
                     <div className="relative">
                        <input 
                           type="number" 
                           value={growthRate} onChange={(e) => setGrowthRate(Number(e.target.value))}
                           className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        />
                     </div>
                  </div>
               </Grid>

            </Stack>

            {/* Results */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-2xl text-slate-900 dark: dark:text-white">
               
               <div className="mb-8">
                  <Typography variant="h3" as="h3">Snapshot Profitabilitas</Typography>
                  <Grid cols={2} gap={6}>
                     <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-300 mb-1">Margin Lisensi (Recurring)</div>
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 dark:text-emerald-300">
                           {formatCurrency(monthlyMarginPerClient)} <Typography variant="caption" className="text-slate-400 dark:text-slate-300">/client/bln</Typography>
                        </div>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-300 mb-1">Total Recurring Profit (MRR)</div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 dark:text-blue-300">
                           {formatCurrency(currentMonthlyProfit)} <span className="text-xs text-slate-400 dark:text-slate-300 font-normal">/bln</span>
                        </div>
                     </div>
                  </Grid>
               </div>

               <div>
                  <Typography variant="h3" as="h3">Total Earnings Projection</Typography>
                  
                  {/* Year 1 Bar */}
                  <div className="mb-6">
                     <div className="flex justify-between items-end mb-2 gap-4">
                        <div>
                           <span className="font-bold text-lg">Tahun Pertama</span>
                           <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Total Profit Bersih (License Margin + Implementation Fees)</Typography>
                        </div>
                        <div className="text-right">
                           <Typography variant="body" className="text-2xl text-slate-900 dark:text-white">{formatCurrency(year1Profit)}</Typography>
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
                     <div className="flex justify-between items-end mb-2 gap-4">
                        <div>
                           <span className="font-bold text-lg">Tahun Kedua</span>
                           <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Dengan akumulasi klien tahun sebelumnya</Typography>
                        </div>
                        <div className="text-right">
                           <Typography variant="body" className="text-3xl text-transparent">{formatCurrency(year2Profit)}</Typography>
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
                     <Users className="w-5 h-5 text-blue-600 dark:text-slate-300 shrink-0 mt-0.5" />
                     <div>
                        <strong className="font-bold">Strategi Reseller:</strong> Fokus pada volume dan retensi klien. Semakin lama klien berlangganan, semakin besar akumulasi profit pasif Anda tanpa perlu effort penjualan ulang.
                     </div>
                  </div>
               </div>
            </div>
          </Grid>
        </Container>
      </section>

      {/* --- BENEFITS ICONS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="md:hidden">
            <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
               {partnerContent.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col items-start h-full p-4 md:p-0 bg-white dark:bg-slate-900/50 md:bg-transparent md:dark:bg-transparent rounded-2xl md:rounded-none border border-slate-100 dark:border-slate-800 md:border-none gap-4">
                     <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-900 dark:text-white mb-4 gap-4">
                        <benefit.icon className="w-6 h-6" />
                     </div>
                     <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{benefit.title}</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">{benefit.desc}</Typography>
                  </div>
               ))}
            </CardSlider>
         </div>

         <Grid cols={4} gap={8} className="hidden">
            {partnerContent.benefits.map((benefit, idx) => (
               <div key={idx} className="flex flex-col items-start h-full p-4 md:p-0 bg-white dark:bg-slate-900/50 md:bg-transparent md:dark:bg-transparent rounded-2xl md:rounded-none border border-slate-100 dark:border-slate-800 md:border-none gap-4">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-900 dark:text-white mb-4 gap-4">
                     <benefit.icon className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{benefit.title}</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">{benefit.desc}</Typography>
               </div>
            ))}
         </Grid>
      </section>

    </div>
  );
};

export default PartnersPage;
