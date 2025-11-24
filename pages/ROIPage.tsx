
import React, { useState } from 'react';
import Button from '../components/Button';
import { Calculator, ArrowRight, TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ROIPage: React.FC = () => {
  // Inputs defined in spec
  const [adminCount, setAdminCount] = useState(3);
  const [salary, setSalary] = useState(6000000);
  const [overtime, setOvertime] = useState(20);
  const [losses, setLosses] = useState(50000000);

  // Constants
  const subscriptionCost = 7500000; // Monthly cost (Growth Plan)
  
  // Calculations
  // 1. Efficiency: Automating manual recap saves time equivalent to salary efficiency
  const efficiencySavings = (adminCount * salary * 0.40); // 40% efficiency gain estimate
  
  // 2. Overtime Savings: Direct reduction in overtime costs
  // Formula: Hourly rate = Salary / 173. Overtime rate approx 1.5x
  const hourlyRate = salary / 173;
  const overtimeCostPerMonth = adminCount * overtime * hourlyRate * 1.5;
  const overtimeSavings = overtimeCostPerMonth * 0.8; // Assume 80% reduction in overtime needs

  // 3. Fraud/Loss Prevention
  const monthlyLossSavings = losses / 12;

  const totalMonthlySavings = efficiencySavings + overtimeSavings + monthlyLossSavings;
  const netMonthlyBenefit = totalMonthlySavings - subscriptionCost;
  const roiPercentage = (netMonthlyBenefit / subscriptionCost) * 100;
  const paybackMonths = subscriptionCost / totalMonthlySavings;

  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <SEO title="Kalkulator ROI & Penghematan Biaya ERP" description="Hitung potensi penghematan biaya operasional, lembur, dan pencegahan fraud dengan BizOps." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">Kalkulator ROI Investasi Teknologi</h1>
           <p className="text-lg text-slate-600">
              Jangan menebak, hitung dengan data. Gunakan kalkulator interaktif ini untuk mengestimasi potensi penghematan biaya operasional tahunan.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           
           {/* Left: Inputs */}
           <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                 <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Calculator className="w-5 h-5" /></div>
                 Input Variabel Operasional
              </h2>
              
              <div className="space-y-8">
                 <div>
                    <div className="flex justify-between mb-2">
                       <label className="text-sm font-medium text-slate-700">Jumlah Staf Admin</label>
                       <span className="text-sm font-bold text-primary-600">{adminCount} Orang</span>
                    </div>
                    <input 
                      type="range" min="1" max="50" value={adminCount} 
                      onChange={(e) => setAdminCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <p className="text-xs text-slate-400 mt-1">HR / Finance / Admin Gudang</p>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Rata-rata Gaji per Bulan (IDR)</label>
                    <div className="relative">
                       <span className="absolute left-3 top-2.5 text-slate-400 text-sm">Rp</span>
                       <input 
                         type="number" value={salary} 
                         onChange={(e) => setSalary(parseInt(e.target.value))}
                         className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                       />
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between mb-2">
                       <label className="text-sm font-medium text-slate-700">Jam Lembur / Orang / Bulan</label>
                       <span className="text-sm font-bold text-primary-600">{overtime} Jam</span>
                    </div>
                    <input 
                      type="range" min="0" max="100" value={overtime} 
                      onChange={(e) => setOvertime(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <p className="text-xs text-slate-400 mt-1">Lembur rekap data manual akhir bulan</p>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Estimasi Kerugian/Fraud per Tahun (IDR)</label>
                    <div className="relative">
                       <span className="absolute left-3 top-2.5 text-slate-400 text-sm">Rp</span>
                       <input 
                         type="number" value={losses} 
                         onChange={(e) => setLosses(parseInt(e.target.value))}
                         className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                       />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Stok hilang, pembelian liar, aset rusak</p>
                 </div>
              </div>
           </div>

           {/* Right: Dynamic Results */}
           <div className="lg:col-span-7 space-y-6">
              
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                       <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Peningkatan Produktivitas</h3>
                    <div className="text-xl font-bold text-slate-900">Rp {(efficiencySavings / 1000000).toFixed(1)} Jt<span className="text-xs text-slate-400 font-normal">/bln</span></div>
                    <p className="text-xs text-slate-500 mt-2">Otomatisasi setara menambah {(adminCount * 0.4).toFixed(1)} staf baru.</p>
                 </div>
                 
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4">
                       <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Penghematan Lembur</h3>
                    <div className="text-xl font-bold text-slate-900">Rp {(overtimeSavings / 1000000).toFixed(1)} Jt<span className="text-xs text-slate-400 font-normal">/bln</span></div>
                    <p className="text-xs text-slate-500 mt-2">Mengurangi 80% lembur administratif.</p>
                 </div>

                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                       <AlertTriangle className="w-5 h-5" />
                    </div>
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-1">Pencegahan Fraud</h3>
                    <div className="text-xl font-bold text-slate-900">Rp {(monthlyLossSavings / 1000000).toFixed(1)} Jt<span className="text-xs text-slate-400 font-normal">/bln</span></div>
                    <p className="text-xs text-slate-500 mt-2">Kontrol stok dan budget ketat.</p>
                 </div>
              </div>

              {/* Main Result */}
              <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                 <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                       <h2 className="text-lg font-medium text-slate-300 mb-2">Total Penghematan Tahun Pertama</h2>
                       <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                          Rp {((totalMonthlySavings * 12) / 1000000).toFixed(0)} Juta
                       </div>
                       <div className="flex gap-6 text-sm">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             ROI: <span className="font-bold text-green-400">{roiPercentage.toFixed(0)}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                             Break Even: <span className="font-bold text-blue-400">{paybackMonths < 1 ? "< 1 Bulan" : `${paybackMonths.toFixed(1)} Bulan`}</span>
                          </div>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs text-slate-400 mb-4 max-w-xs ml-auto">
                          Dibandingkan biaya langganan BizOps Growth Plan (Rp 7.5jt/bln).
                       </p>
                       <Link to="/demo">
                          <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none font-bold">
                             Validasi Angka Ini <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                       </Link>
                    </div>
                 </div>
                 {/* Decor */}
                 <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-600 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
              </div>

              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100 flex gap-4 items-start">
                  <div className="mt-1">
                     <AlertTriangle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                     <h4 className="font-bold text-primary-900 text-sm">Catatan Analis</h4>
                     <p className="text-sm text-primary-800 mt-1 leading-relaxed">
                        Perhitungan ini adalah estimasi konservatif. Banyak klien kami melaporkan penghematan tak terduga (Intangible Benefits) seperti keputusan strategis yang lebih cepat dan peningkatan kepuasan karyawan yang mengurangi biaya rekrutmen.
                     </p>
                  </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default ROIPage;
