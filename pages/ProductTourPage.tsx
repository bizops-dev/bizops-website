
import React, { useState } from 'react';
import { Smartphone, Briefcase, Package, UserCheck, MousePointer, Check, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProductTourPage: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState('sales');
  const [step, setStep] = useState(0);

  const scenarios = [
    { id: 'sales', label: 'Saya Sales', icon: Smartphone, title: 'Buat Penawaran di HP' },
    { id: 'manager', label: 'Saya Manajer', icon: Briefcase, title: 'Approve Purchase Order' },
    { id: 'warehouse', label: 'Saya Gudang', icon: Package, title: 'Cek Stok & Terima Barang' },
    { id: 'employee', label: 'Saya Karyawan', icon: UserCheck, title: 'Absensi Wajah' }
  ];

  // Simple Mock Step Logic
  const handleNext = () => {
    if(step < 3) setStep(step + 1);
  };

  const reset = (id: string) => {
     setActiveScenario(id);
     setStep(0);
  };

  return (
    <div className="pt-16 pb-24 bg-slate-900 text-white min-h-screen">
      <SEO title="Interactive Product Tour" description="Simulasi penggunaan BizOps tanpa login." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6 border border-primary-500/30">
              <MousePointer className="w-4 h-4" /> Interactive Demo
           </div>
           <h1 className="text-3xl md:text-5xl font-bold mb-6">Rasakan Kemudahannya Sebelum Membeli.</h1>
           <p className="text-xl text-slate-400">
              Pilih peran Anda dan lihat bagaimana BizOps bekerja dalam 30 detik. Tanpa login, tanpa sales call.
           </p>
        </div>

        {/* Scenario Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
           {scenarios.map((sc) => (
              <button
                key={sc.id}
                onClick={() => reset(sc.id)}
                className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${activeScenario === sc.id ? 'bg-primary-600 border-primary-500 shadow-lg shadow-primary-500/30' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'}`}
              >
                 <sc.icon className={`w-6 h-6 ${activeScenario === sc.id ? 'text-white' : 'text-slate-400'}`} />
                 <span className="font-bold text-sm">{sc.label}</span>
              </button>
           ))}
        </div>

        {/* Simulation Container */}
        <div className="max-w-5xl mx-auto bg-slate-800 rounded-3xl border-8 border-slate-700 shadow-2xl overflow-hidden aspect-video relative flex flex-col">
           {/* Mock App Header */}
           <div className="bg-white text-slate-900 p-4 border-b border-slate-200 flex justify-between items-center h-16 shrink-0">
              <div className="font-bold text-lg">{scenarios.find(s=>s.id === activeScenario)?.title}</div>
              <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
           </div>
           
           {/* Interactive Area */}
           <div className="flex-1 bg-slate-50 relative p-8 flex items-center justify-center">
              
              {/* Step 0: Start */}
              {step === 0 && (
                 <div className="text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 text-primary-600">
                       <Smartphone className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Skenario: {scenarios.find(s=>s.id === activeScenario)?.title}</h3>
                    <p className="text-slate-600 mb-8">Klik tombol di bawah untuk memulai simulasi tugas.</p>
                    <Button onClick={handleNext} className="shadow-xl animate-pulse">Mulai Simulasi</Button>
                 </div>
              )}

              {/* Step 1: Form Filling Simulation */}
              {step === 1 && (
                 <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-slate-200 animate-fade-in-up">
                    <div className="space-y-4 mb-6">
                       <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                       <div className="h-10 bg-slate-50 border border-slate-200 rounded w-full"></div>
                       <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                       <div className="h-10 bg-slate-50 border border-slate-200 rounded w-full"></div>
                    </div>
                    <div className="relative">
                       <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap">
                          Klik untuk isi otomatis
                          <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                       </div>
                       <Button fullWidth onClick={handleNext}>Isi Data Pelanggan</Button>
                    </div>
                 </div>
              )}

              {/* Step 2: Review */}
              {step === 2 && (
                 <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-slate-200 animate-fade-in-up">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-4">
                       <div>
                          <div className="text-xs text-slate-500">Total Quotation</div>
                          <div className="text-2xl font-bold text-slate-900">Rp 15.000.000</div>
                       </div>
                       <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Draft</div>
                    </div>
                    <div className="space-y-2 mb-6">
                       <div className="flex justify-between text-sm text-slate-600">
                          <span>Item A (10x)</span>
                          <span>Rp 10.000.000</span>
                       </div>
                       <div className="flex justify-between text-sm text-slate-600">
                          <span>Item B (5x)</span>
                          <span>Rp 5.000.000</span>
                       </div>
                    </div>
                    <Button fullWidth onClick={handleNext}>Kirim ke WhatsApp Klien</Button>
                 </div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                 <div className="text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                       <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Selesai!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                       Semudah itu. Bayangkan waktu yang dihemat tim Anda jika proses administrasi secepat ini.
                    </p>
                    <Link to="/demo">
                       <Button size="lg" className="shadow-xl">Mulai Trial Gratis Sekarang <ArrowRight className="ml-2 w-4 h-4" /></Button>
                    </Link>
                 </div>
              )}

           </div>

           {/* Progress Bar */}
           <div className="bg-slate-100 h-2 w-full">
              <div 
                 className="h-full bg-primary-600 transition-all duration-500"
                 style={{ width: `${(step / 3) * 100}%` }}
              ></div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductTourPage;
