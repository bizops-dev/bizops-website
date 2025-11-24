
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Shield, Code, DollarSign, Users, ArrowRight, Zap, RefreshCw, Layers } from 'lucide-react';
import Button from '../components/Button';
import { partnerContent } from '../data/content';
import SEO from '../components/SEO';

const PartnersPage: React.FC = () => {
  // Calculator State
  const [scenario, setScenario] = useState<'consultant' | 'softwareHouse'>('consultant');
  const [clients, setClients] = useState(5);

  // Profit Calc Logic
  const calcData = {
    consultant: {
      retailPrice: 1500000, // Matched to markdown: "Kenaikan Harga Jasa Retainer: +Rp 1.500.000"
      cost: 500000,
      setupFee: 0,
      label: "Tambahan Jasa Retainer",
      desc: "Model Konsultan Pajak: Menawarkan paket 'Jasa Lapor Pajak + Software Akuntansi' untuk memenangkan persaingan harga."
    },
    softwareHouse: {
      retailPrice: 7500000,
      cost: 3500000,
      setupFee: 50000000,
      label: "Harga Lisensi ERP",
      desc: "Model Software House: Menjual lisensi ERP ke klien manufaktur/distributor dengan branding sendiri + Jasa Implementasi."
    }
  };

  const currentScenario = calcData[scenario];
  const monthlyProfitPerClient = currentScenario.retailPrice - currentScenario.cost;
  const totalMonthlyProfit = monthlyProfitPerClient * clients;
  const totalSetupFee = currentScenario.setupFee * clients;

  return (
    <div className="flex flex-col">
      <SEO 
        title="Program Partner Whitelabel ERP & Reseller Indonesia" 
        description="Peluang bisnis bagi Konsultan & Software House. Luncurkan produk ERP brand Anda sendiri (Whitelabel) tanpa coding."
      />

      {/* 1. Hero Section (The Opportunity) */}
      <section className="relative bg-slate-900 py-24 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-500 mb-6">
              <Zap className="w-4 h-4 mr-2" /> Whitelabel Program Available
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Miliki Produk Software ERP Sendiri <span className="text-primary-400">Tanpa Menulis Satu Baris Kode Pun.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Sebuah undangan eksklusif bagi Konsultan Bisnis, Kantor Jasa Akuntan (KJA), dan Agensi Digital yang ingin naik kelas. Berhenti hanya menjadi reseller yang mendapat komisi kecil satu kali. Transformasikan bisnis jasa Anda menjadi perusahaan teknologi berbasis aset dengan BizOps Whitelabel Program. Jual solusi lengkap, tetapkan harga Anda sendiri, dan bangun aset digital (Intellectual Property) atas nama brand Anda yang meningkatkan valuasi perusahaan di mata investor maupun klien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partners/apply">
                 <Button size="lg" variant="accent" className="shadow-lg shadow-amber-500/20">Ajukan Kemitraan Strategis</Button>
              </Link>
              <a href="#calculator">
                 <Button variant="outline-white" size="lg">Simulasi Profit</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Shift (Old vs New) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">Why Now? The Tech-Enabled Shift</h2>
            <p className="text-slate-600">Industri jasa sedang berubah. Jangan sampai tertinggal.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* The Old Way */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 opacity-80">
              <h3 className="text-xl font-bold text-slate-500 mb-2 uppercase tracking-wide">{partnerContent.shift.old.title}</h3>
              <h4 className="text-lg font-bold text-slate-900 mb-4">{partnerContent.shift.old.subtitle}</h4>
              <p className="text-slate-600 leading-relaxed">
                 {partnerContent.shift.old.desc}
              </p>
            </div>

            {/* The New Way */}
            <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100 relative shadow-lg">
               <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  FUTURE
               </div>
              <h3 className="text-xl font-bold text-primary-600 mb-2 uppercase tracking-wide">{partnerContent.shift.new.title}</h3>
              <h4 className="text-lg font-bold text-slate-900 mb-4">{partnerContent.shift.new.subtitle}</h4>
              <p className="text-slate-700 leading-relaxed">
                 {partnerContent.shift.new.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Whitelabel Works */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
               <h2 className="text-3xl font-bold mb-4">How Whitelabel Works</h2>
               <p className="text-slate-400">Mekanisme "Silent Partner" yang memberdayakan brand Anda.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-800 -z-10"></div>

               {partnerContent.process.map((step, idx) => (
                  <div key={idx} className="relative bg-slate-900">
                     <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-xl">
                        <step.icon className="w-10 h-10 text-primary-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                     <h4 className="text-sm font-bold text-primary-400 uppercase tracking-wider mb-4">{step.subtitle}</h4>
                     <p className="text-slate-400 leading-relaxed">
                        {step.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Partner Benefits (Bento Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Value Stack</h2>
            <p className="text-lg text-slate-600">
              Keuntungan strategis yang langsung Anda rasakan saat bergabung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerContent.benefits.map((benefit, idx) => (
               <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary-200 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <benefit.icon className="w-6 h-6 text-slate-900 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                     {benefit.desc}
                  </p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Profit Calculator (Interactive) */}
      <section id="calculator" className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Profit Simulator</h2>
               <p className="text-slate-600">Hitung potensi pendapatan pasif Anda.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
               {/* Control Panel */}
               <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                     <DollarSign className="w-5 h-5 text-primary-600" /> Konfigurasi Bisnis
                  </h3>
                  
                  <div className="space-y-8">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">Pilih Model Bisnis</label>
                        <div className="grid grid-cols-2 gap-4">
                           <button 
                             onClick={() => setScenario('consultant')}
                             className={`p-4 rounded-xl border text-left transition-all ${scenario === 'consultant' ? 'bg-primary-50 border-primary-500 ring-1 ring-primary-500' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                           >
                              <div className="font-bold text-slate-900 mb-1">Tax Consultant</div>
                              <div className="text-xs text-slate-500">Value Bundle Strategy</div>
                           </button>
                           <button 
                             onClick={() => setScenario('softwareHouse')}
                             className={`p-4 rounded-xl border text-left transition-all ${scenario === 'softwareHouse' ? 'bg-primary-50 border-primary-500 ring-1 ring-primary-500' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                           >
                              <div className="font-bold text-slate-900 mb-1">Software House</div>
                              <div className="text-xs text-slate-500">Direct License Strategy</div>
                           </button>
                        </div>
                        <p className="mt-3 text-xs text-slate-500 italic">
                           "{currentScenario.desc}"
                        </p>
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">Jumlah Klien Aktif (Target)</label>
                        <input 
                          type="range" min="1" max="50" value={clients} 
                          onChange={(e) => setClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="text-right font-bold text-primary-600 mt-2 text-lg">{clients} Klien</div>
                     </div>
                  </div>
               </div>

               {/* Results Panel */}
               <div className="p-8 lg:p-12 bg-slate-900 text-white flex flex-col justify-center">
                  <div className="mb-8">
                     <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Potensi Net Profit Bulanan</h4>
                     <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-1">
                        Rp {(totalMonthlyProfit / 1000000).toLocaleString()} Juta<span className="text-xl text-slate-500 font-normal">/bln</span>
                     </div>
                     <div className="text-sm text-slate-500">
                        *Keuntungan bersih (Recurring) setelah dikurangi biaya partner.
                     </div>
                  </div>

                  {currentScenario.setupFee > 0 && (
                     <div className="mb-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
                        <div className="text-slate-400 text-xs font-medium uppercase mb-1">Bonus: Cash di Depan (Setup Fee)</div>
                        <div className="text-2xl font-bold text-white">
                           Rp {(totalSetupFee / 1000000).toLocaleString()} Juta
                        </div>
                     </div>
                  )}

                  <div className="space-y-3 text-sm text-slate-400 border-t border-slate-800 pt-6">
                     <div className="flex justify-between">
                        <span>Harga Jual ke Klien ({currentScenario.label})</span>
                        <span className="text-white">Rp {(currentScenario.retailPrice / 1000000).toFixed(1)} Jt</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Biaya Partner BizOps (Wholesale)</span>
                        <span className="text-white">Rp {(currentScenario.cost / 1000000).toFixed(1)} Jt</span>
                     </div>
                     <div className="flex justify-between font-bold text-green-400 pt-2 border-t border-slate-800/50">
                        <span>Margin Anda</span>
                        <span>Rp {((currentScenario.retailPrice - currentScenario.cost) / 1000000).toFixed(1)} Jt / klien</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Who is this for? (Personas) */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Ideal Partner Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {partnerContent.personas.map((persona, idx) => (
                  <div key={idx} className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all group">
                     <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 font-bold mb-6 group-hover:bg-primary-50 group-hover:text-primary-600">
                        {idx + 1}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-4">{persona.title}</h3>
                     <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-xl text-sm text-slate-700 border border-red-100">
                           <span className="font-bold text-red-600 block mb-1">Pain:</span>
                           {persona.pain}
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl text-sm text-slate-700 border border-green-100">
                           <span className="font-bold text-green-600 block mb-1">Solution:</span>
                           {persona.solution}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. CTA (Lead Capture) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Siap Meluncurkan Produk ERP Anda Sendiri Bulan Ini?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
               Program Partner kami bersifat selektif dan terbatas per wilayah untuk menjaga kualitas ekosistem dan menghindari kanibalisasi pasar. Kami mencari mitra yang serius ingin tumbuh, bukan sekadar coba-coba. Diskusikan potensi pasar di wilayah Anda dengan Channel Manager kami.
            </p>
            <Link to="/partners/apply">
               <Button size="lg" variant="secondary" className="shadow-xl">
                  Ajukan Kemitraan Strategis <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </Link>
            <p className="text-sm text-slate-500 mt-6">
               Verifikasi bisnis 1-2 hari kerja. Tidak ada biaya pendaftaran.
            </p>
         </div>
      </section>
    </div>
  );
};

export default PartnersPage;
