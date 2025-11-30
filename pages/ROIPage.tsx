import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { 
  Calculator, 
  ArrowRight, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  Download, 
  Mail, 
  Building2, 
  User, 
  Phone,
  DollarSign,
  PieChart,
  ChevronDown,
  Settings,
  FileText,
  Database
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { logger } from '../utils/logger';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

// Pricing Tiers for Comparison
const PRICING_TIERS = [
  { id: 'starter', name: 'Starter Plan', cost: 2500000, label: 'Rp 2.5 Juta/bln' },
  { id: 'growth', name: 'Growth Plan', cost: 7500000, label: 'Rp 7.5 Juta/bln' },
  { id: 'scale', name: 'Scale Plan', cost: 15000000, label: 'Rp 15 Juta/bln' },
];

const ROIPage: React.FC = () => {
  const navigate = useNavigate();
  
  // --- STATE ---
  const [adminCount, setAdminCount] = useState(3);
  const [salary, setSalary] = useState(6000000);
  const [overtime, setOvertime] = useState(20);
  const [losses, setLosses] = useState(50000000);
  const [existingTechCost, setExistingTechCost] = useState(2000000); // New Variable: Biaya sistem lama
  const [efficiencyRate, setEfficiencyRate] = useState(30); // New Variable: % Efisiensi
  
  const [selectedPlanId, setSelectedPlanId] = useState('growth');
  
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', company: '', email: '', phone: '' });

  // --- CALCULATIONS ---
  const selectedPlan = PRICING_TIERS.find(p => p.id === selectedPlanId) || PRICING_TIERS[1];
  const subscriptionCost = selectedPlan.cost;

  // 1. Efficiency / Productivity Gain
  // Formula: Gaji x Jumlah Orang x % Efisiensi
  // Ini merepresentasikan "Nilai Produktivitas" yang didapat (bisa mengerjakan lebih banyak hal)
  const efficiencySavings = (adminCount * salary * (efficiencyRate / 100)); 
  
  // 2. Overtime Savings
  // Hourly Rate (Depnaker) = Gaji / 173
  // Cost = Jam x Orang x Rate x 1.5 (Multiplier rata-rata lembur biasa)
  // Savings = Mengurangi 90% lembur manual (karena otomatisasi)
  const hourlyRate = salary / 173;
  const overtimeCostPerMonth = adminCount * overtime * hourlyRate * 1.5;
  const overtimeSavings = overtimeCostPerMonth * 0.9; 

  // 3. Fraud/Loss Prevention
  // Asumsi sistem mengurangi risiko sebesar 80% (bukan 100% karena faktor human error tetap ada)
  const monthlyLossSavings = (losses / 12) * 0.8;

  // 4. IT Cost Reduction (Hard Savings)
  // Penghematan langsung dari stop langganan aplikasi lain / server lama
  const techSavings = existingTechCost;

  const totalMonthlySavings = efficiencySavings + overtimeSavings + monthlyLossSavings + techSavings;
  const netMonthlyBenefit = totalMonthlySavings - subscriptionCost;
  const roiPercentage = subscriptionCost > 0 ? (netMonthlyBenefit / subscriptionCost) * 100 : 0;
  const paybackMonths = totalMonthlySavings > 0 ? subscriptionCost / totalMonthlySavings : 0;
  const annualSavings = totalMonthlySavings * 12;

  // --- FORMATTERS ---
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(val);
  };

  const formatCompactCurrency = (val: number) => {
    if (val >= 1000000000) return `Rp ${(val / 1000000000).toFixed(1)} M`;
    if (val >= 1000000) return `Rp ${(val / 1000000).toFixed(1)} Jt`;
    return formatCurrency(val);
  };

  // --- HANDLERS ---
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    logger.log("ROI Lead Captured:", { ...leadData, roiPercentage, annualSavings });
    setShowLeadForm(false);
    window.print(); // Trigger print dialog as "Download" action
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-24 relative overflow-hidden">
      <SEO title="Kalkulator ROI Software ERP" description="Hitung potensi penghematan biaya operasional dan efisiensi dengan implementasi BizOps." canonical="https://bizops.id/tools/roi-calculator" />

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <Container size="7xl" className="relative z-10">
        
        {/* Header */}
        <Container size="3xl" className="text-center mb-16">
           <Stack direction="horizontal" gap={2} align="center" className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 dark:text-blue-300 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" /> ROI Calculator
           </Stack>
           <Typography variant="h1" as="h1" className="font-bold text-white leading-tight">Hitung Nilai Investasi <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Transformasi Digital</span></Typography>
           <Typography variant="body-lg" className="text-slate-400 dark:text-slate-300">Jangan hanya menebak. Gunakan data operasional Anda untuk mengestimasi penghematan biaya nyata dan waktu balik modal (BEP).</Typography>
        </Container>

        <Grid cols={12} gap={8} className="items-start">
           
           {/* LEFT: INPUTS */}
           <div className="lg:col-span-5 bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-8">
                <Typography variant="h2" as="h2" className="font-bold text-white"><Settings className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                   Parameter Operasional</Typography>
                {/* Reset Button */}
                <button 
                  onClick={() => {
                    setAdminCount(3); setSalary(6000000); setOvertime(20); setLosses(50000000);
                  }}
                  className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                >
                  Reset Default
                </button>
              </Stack>
              
              <Stack direction="vertical" gap={8}>
                 {/* 1. Admin Count */}
                 <div>
                    <Stack direction="horizontal" gap={4} justify="between" className="mb-2">
                       <Typography variant="caption" className="text-sm font-medium text-slate-300">Jumlah Staf Admin</Typography>
                       <Typography variant="caption" className="text-blue-400 dark:text-blue-300">{adminCount} Orang</Typography>
                    </Stack>
                    <input 
                      type="range" min="1" max="50" value={adminCount} 
                      onChange={(e) => setAdminCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400"
                    />
                 </div>

                 {/* 2. Salary & Efficiency */}
                 <Grid cols={2} gap={4}>
                    <div>
                        <Typography variant="caption" className="block text-sm font-medium text-slate-300 mb-2">Gaji Rata-rata</Typography>
                        <div className="relative group">
                          <span className="absolute left-3 top-3 text-slate-500 dark:text-slate-400 dark:text-slate-300 text-xs">Rp</span>
                          <input 
                            type="number" value={salary} 
                            onChange={(e) => setSalary(parseInt(e.target.value))}
                            className="w-full pl-8 pr-2 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                          />
                        </div>
                    </div>
                    <div>
                        <Typography variant="caption" className="block text-sm font-medium text-slate-300 mb-2">Estimasi Efisiensi</Typography>
                        <Stack direction="horizontal" gap={2} align="center">
                          <input 
                            type="range" min="10" max="90" step="5" value={efficiencyRate}
                            onChange={(e) => setEfficiencyRate(parseInt(e.target.value))}
                            className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 gap-4"
                          />
                          <Typography variant="caption" className="text-emerald-400 dark:text-emerald-300">{efficiencyRate}%</Typography>
                        </Stack>
                        <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Persentase waktu yang dihemat staf admin setelah tugas rutin diotomatisasi (Contoh: Input data, rekap laporan).</Typography>
                    </div>
                 </Grid>

                 {/* 3. Overtime */}
                 <div>
                    <Stack direction="horizontal" gap={4} justify="between" className="mb-2">
                       <Typography variant="caption" className="text-sm font-medium text-slate-300">Lembur (Jam/Orang/Bulan)</Typography>
                       <Typography variant="caption" className="text-amber-400 dark:text-amber-300">{overtime} Jam</Typography>
                    </Stack>
                    <input 
                      type="range" min="0" max="100" value={overtime} 
                      onChange={(e) => setOvertime(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400"
                    />
                 </div>

                 {/* 4. Losses & Existing Cost */}
                 <Stack direction="vertical" gap={4}>
                    <div>
                        <Typography variant="caption" className="block text-sm font-medium text-slate-300 mb-2">Estimasi Kebocoran (IDR/Tahun)</Typography>
                        <div className="relative">
                          <span className="absolute left-4 top-3.5 text-slate-500 dark:text-slate-400 dark:text-slate-300 text-sm">Rp</span>
                          <input 
                            type="number" value={losses} 
                            onChange={(e) => setLosses(parseInt(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                          />
                        </div>
                    </div>
                    
                    <div>
                        <Typography variant="caption" className="block text-sm font-medium text-slate-300 mb-2">Biaya Aplikasi/Server Lama (IDR/Bulan)</Typography>
                        <div className="relative">
                          <span className="absolute left-4 top-3.5 text-slate-500 dark:text-slate-400 dark:text-slate-300 text-sm">Rp</span>
                          <input 
                            type="number" value={existingTechCost} 
                            onChange={(e) => setExistingTechCost(parseInt(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                          />
                        </div>
                        <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Biaya maintenance, hosting, atau langganan aplikasi yang bisa dihentikan.</Typography>
                    </div>
                 </Stack>

                 <hr className="border-white/5" />

                 {/* Plan Selection */}
                 <div>
                    <Typography variant="caption" className="block text-sm font-medium text-slate-300 mb-3">Pilih Paket BizOps</Typography>
                    <Grid cols={3} gap={2}>
                      {PRICING_TIERS.map(plan => (
                        <button
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                            selectedPlanId === plan.id
                              ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20'
                              : 'bg-slate-950 border-white/10 text-slate-400 dark:text-slate-300 hover:bg-slate-900'
                          }`}
                        >
                          {plan.name}
                        </button>
                      ))}
                    </Grid>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Biaya: {formatCurrency(subscriptionCost)}/bulan</Typography>
                 </div>
              </Stack>
           </div>

           {/* RIGHT: RESULTS */}
           <Stack direction="vertical" gap={6} className="lg:col-span-7">
              
              {/* Savings Breakdown Cards - 2x2 Grid */}
              <Grid cols={2} gap={4}>
                 {/* Efficiency */}
                 <div className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-white/5 hover:bg-slate-900 transition-all group">
                    <Stack direction="horizontal" gap={4} align="start" justify="between" className="mb-2">
                      <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 bg-blue-500/10 text-blue-400 dark:text-blue-300 rounded-lg group-hover:scale-110 transition-transform">
                         <TrendingUp className="w-5 h-5" />
                      </Stack>
                      <Typography variant="caption" className="text-blue-400 dark:text-blue-300">Soft Savings</Typography>
                    </Stack>
                    <Typography variant="h3" as="h3">Nilai Produktivitas</Typography>
                    <div className="text-xl font-bold text-white">{formatCompactCurrency(efficiencySavings)}<span className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 font-normal">/bln</span></div>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Efisiensi {efficiencyRate}% dari {adminCount} staf.</Typography>
                 </div>
                 
                 {/* Overtime */}
                 <div className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-white/5 hover:bg-slate-900 transition-all group">
                    <Stack direction="horizontal" gap={4} align="start" justify="between" className="mb-2">
                      <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 bg-amber-500/10 text-amber-400 dark:text-amber-300 rounded-lg group-hover:scale-110 transition-transform">
                         <Clock className="w-5 h-5" />
                      </Stack>
                      <Typography variant="caption" className="text-amber-400 dark:text-amber-300">Hard Savings</Typography>
                    </Stack>
                    <Typography variant="h3" as="h3">Penghematan Lembur</Typography>
                    <div className="text-xl font-bold text-white">{formatCompactCurrency(overtimeSavings)}<span className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 font-normal">/bln</span></div>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Mengurangi 90% lembur manual.</Typography>
                 </div>

                 {/* Fraud */}
                 <div className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-white/5 hover:bg-slate-900 transition-all group">
                    <Stack direction="horizontal" gap={4} align="start" justify="between" className="mb-2">
                      <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 bg-red-500/10 text-red-400 dark:text-red-300 rounded-lg group-hover:scale-110 transition-transform">
                         <AlertTriangle className="w-5 h-5" />
                      </Stack>
                      <Typography variant="caption" className="text-red-400 dark:text-red-300">Risk Avoidance</Typography>
                    </Stack>
                    <Typography variant="h3" as="h3">Loss Prevention</Typography>
                    <div className="text-xl font-bold text-white">{formatCompactCurrency(monthlyLossSavings)}<span className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 font-normal">/bln</span></div>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Mengurangi 80% risiko kebocoran.</Typography>
                 </div>

                 {/* Tech Cost Savings (New) */}
                 <div className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-white/5 hover:bg-slate-900 transition-all group">
                    <Stack direction="horizontal" gap={4} align="start" justify="between" className="mb-2">
                      <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 bg-purple-500/10 text-purple-400 dark:text-purple-300 rounded-lg group-hover:scale-110 transition-transform">
                         <Database className="w-5 h-5" />
                      </Stack>
                      <Typography variant="caption" className="text-purple-400 dark:text-purple-300">Hard Savings</Typography>
                    </Stack>
                    <Typography variant="h3" as="h3">Tech Cost Reduction</Typography>
                    <div className="text-xl font-bold text-white">{formatCompactCurrency(techSavings)}<span className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 font-normal">/bln</span></div>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Biaya sistem lama yang dihapus.</Typography>
                 </div>
              </Grid>

              {/* MAIN HERO RESULT */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden text-center md:text-left">
                 <Stack direction="vertical" gap={8} className="relative z-10 justify-between items-center">
                    <Stack direction="horizontal" gap={4}>
                       <Typography variant="h2" as="h2">Total Penghematan Tahunan</Typography>
                       <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                          {formatCompactCurrency(annualSavings)}
                       </div>
                       
                       <Stack direction="horizontal" gap={4} justify="center">
                          <Stack direction="horizontal" gap={3} align="center" className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                             <div className="p-1 bg-emerald-500 rounded-full text-black"><TrendingUp className="w-3 h-3" /></div>
                             <div className="text-left">
                               <div className="text-xs text-emerald-300 font-medium">ROI Year 1</div>
                               <div className="text-lg font-bold text-emerald-400 dark:text-emerald-300">{roiPercentage.toFixed(0)}%</div>
                             </div>
                          </Stack>
                          <Stack direction="horizontal" gap={3} align="center" className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl">
                             <div className="p-1 bg-blue-500 rounded-full text-white"><Clock className="w-3 h-3" /></div>
                             <div className="text-left">
                               <div className="text-xs text-blue-300 font-medium">Break Even</div>
                               <div className="text-lg font-bold text-blue-400 dark:text-blue-300">{paybackMonths < 1 ? "< 1 Bulan" : `${paybackMonths.toFixed(1)} Bulan`}</div>
                             </div>
                          </Stack>
                       </Stack>
                    </Stack>

                    <Stack direction="vertical" gap={3} className="w-full md:w-auto min-w-[200px]">
                       <Button size="md" 
                         onClick={() => setShowLeadForm(true)} 
                         size="lg"
                         className="w-full bg-white text-slate-950 hover:bg-slate-200 border-none font-bold shadow-xl shadow-white/10"
                       >
                          <Download className="w-4 h-4 mr-2" /> Unduh Proposal
                       </Button>
                       <Button size="md" 
                         variant="outline-white"
                         onClick={() => navigate('/contact')}
                         className="w-full border-white/20 text-slate-300 hover:text-slate-900 dark:text-white hover:bg-white/5"
                       >
                          Validasi Angka Ini
                       </Button>
                    </Stack>
                 </Stack>
                 
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
              </div>

              {/* Disclaimer */}
              <Stack direction="horizontal" gap={4} align="start" className="bg-slate-900/30 p-6 rounded-2xl border border-white/5">
                  <div className="mt-1 p-2 bg-slate-800 rounded-lg text-slate-400 dark:text-slate-300">
                     <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                     <Typography variant="h4" as="h4">Catatan Analis</Typography>
                     <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300 leading-relaxed">Perhitungan ini adalah estimasi konservatif (asumsi efisiensi 30%). Banyak klien kami melaporkan <strong>Intangible Benefits</strong> yang lebih besar seperti kepuasan karyawan, akurasi data real-time, dan kecepatan pengambilan keputusan strategis.</Typography>
                  </div>
              </Stack>

           </Stack>
        </Grid>

        {/* --- LEAD FORM MODAL --- */}
        <AnimatePresence>
          {showLeadForm && (
            <Stack direction="horizontal" gap={4} align="center" justify="center" className="fixed inset-0 z-50 p-4 bg-slate-950/80 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl relative"
              >
                <button 
                  onClick={() => setShowLeadForm(false)}
                  className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 dark:text-slate-300 hover:text-white"
                >
                  ✕
                </button>
                
                <div className="text-center mb-6">
                  <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-12 h-12 bg-emerald-500/10 text-emerald-400 dark:text-emerald-300 rounded-xl mx-auto mb-4">
                    <FileText className="w-6 h-6" />
                  </Stack>
                  <Typography variant="h3" as="h3">Simpan Kalkulasi ROI</Typography>
                  <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Masukkan detail Anda untuk mengunduh laporan PDF lengkap.</Typography>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <Typography variant="caption" className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase mb-1">Nama Lengkap</Typography>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-500 dark:text-slate-400 dark:text-slate-300" />
                      <input 
                        required
                        type="text" 
                        value={leadData.name}
                        onChange={e => setLeadData({...leadData, name: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:border-emerald-500 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        placeholder="Nama Anda"
                      />
                    </div>
                  </div>
                  <div>
                    <Typography variant="caption" className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase mb-1">Perusahaan</Typography>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-500 dark:text-slate-400 dark:text-slate-300" />
                      <input 
                        required
                        type="text" 
                        value={leadData.company}
                        onChange={e => setLeadData({...leadData, company: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:border-emerald-500 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        placeholder="Nama PT"
                      />
                    </div>
                  </div>
                  <div>
                    <Typography variant="caption" className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase mb-1">Email Bisnis</Typography>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500 dark:text-slate-400 dark:text-slate-300" />
                      <input 
                        required
                        type="email" 
                        value={leadData.email}
                        onChange={e => setLeadData({...leadData, email: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:border-emerald-500 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        placeholder="email@kantor.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Typography variant="caption" className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase mb-1">WhatsApp</Typography>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-500 dark:text-slate-400 dark:text-slate-300" />
                      <input 
                        type="tel" 
                        value={leadData.phone}
                        onChange={e => setLeadData({...leadData, phone: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:border-emerald-500 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        placeholder="0812..."
                      />
                    </div>
                  </div>

                  <Button size="md" type="submit" fullWidth className="bg-emerald-600 hover:bg-emerald-500 mt-2">
                    Unduh PDF Sekarang
                  </Button>
                </form>
              </motion.div>
            </Stack>
          )}
        </AnimatePresence>

      </Container>
    </div>
  );
};

export default ROIPage;
