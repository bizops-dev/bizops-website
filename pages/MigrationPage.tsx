
import React, { useState } from 'react';
import { migrationData } from '../data/content';
import { migrationFaqs } from '../data/supportContent';
import Button from '../components/Button';
import { Download, ArrowRight, HelpCircle, FileText, Upload, CheckCircle, AlertCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const MigrationPage: React.FC = () => {
  // State for the mock migration tool
  const [checkStatus, setCheckStatus] = useState<'idle' | 'checking' | 'ready' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFileSimulate = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.csv';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        setFileName(file.name);
        setCheckStatus('checking');
        // Simulate analysis
        setTimeout(() => {
           setCheckStatus('ready');
        }, 2000);
      }
    };
    input.click();
  };

  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="Panduan Migrasi ke BizOps | Pindah dari Excel/Accurate" description="Panduan langkah demi langkah memindahkan data bisnis Anda ke BizOps dengan aman. Template impor siap pakai." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl font-bold text-slate-900 mb-6">Pindahan "Rumah Digital" Tanpa Stress.</h1>
           <p className="text-xl text-slate-600">
              Kami tahu memindahkan data operasional bertahun-tahun adalah proses yang menakutkan. Kami menyiapkan panduan terstruktur dan alat bantu otomatis.
           </p>
        </div>

        {/* Migration Readiness Check (Tool) */}
        <div className="mb-20 max-w-4xl mx-auto">
           <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary-600 rounded-lg">
                       <Upload className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Migration Readiness Check</h2>
                 </div>
                 
                 <p className="text-slate-300 mb-8 max-w-2xl">
                    Tidak yakin apakah format data Excel Anda sudah kompatibel? Upload sampel file master data Anda (Produk/Pelanggan) di sini untuk analisis struktur otomatis. Data Anda diproses lokal di browser dan tidak diunggah ke server.
                 </p>

                 <div className="bg-slate-800 rounded-xl p-6 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-colors">
                    {checkStatus === 'idle' && (
                       <>
                          <FileText className="w-12 h-12 text-slate-500 mb-4" />
                          <h3 className="font-bold text-lg mb-2">Upload File (.xlsx / .csv)</h3>
                          <p className="text-sm text-slate-400 mb-6">Maksimal 5MB untuk pengecekan cepat.</p>
                          <Button onClick={handleFileSimulate} variant="white">Pilih File</Button>
                       </>
                    )}

                    {checkStatus === 'checking' && (
                       <div className="py-8">
                          <Loader2 className="w-10 h-10 text-primary-400 animate-spin mx-auto mb-4" />
                          <p className="font-medium">Menganalisis struktur kolom "{fileName}"...</p>
                       </div>
                    )}

                    {checkStatus === 'ready' && (
                       <div className="w-full text-left">
                          <div className="flex items-center gap-2 text-green-400 mb-4 bg-green-400/10 p-3 rounded-lg">
                             <CheckCircle className="w-5 h-5" />
                             <span className="font-bold">Struktur File Kompatibel!</span>
                          </div>
                          <div className="space-y-3 text-sm text-slate-300 mb-6">
                             <div className="flex justify-between border-b border-slate-700 pb-2">
                                <span>Header Row Detected</span>
                                <span className="text-white">Yes (Row 1)</span>
                             </div>
                             <div className="flex justify-between border-b border-slate-700 pb-2">
                                <span>Required Columns</span>
                                <span className="text-white">8/10 Found</span>
                             </div>
                             <div className="flex justify-between border-b border-slate-700 pb-2">
                                <span>Data Type Check</span>
                                <span className="text-white">Pass</span>
                             </div>
                          </div>
                          <div className="flex gap-3">
                             <Button onClick={() => window.location.href = '/demo'} variant="primary">Lanjut Migrasi di Demo</Button>
                             <button onClick={() => {setCheckStatus('idle'); setFileName(null)}} className="text-slate-400 hover:text-white text-sm px-4">Reset</button>
                          </div>
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {migrationData.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col h-full hover:shadow-lg transition-shadow">
                 <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-6">
                    <item.icon className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-6">{item.desc}</p>
                 
                 <div className="space-y-6 mb-8 flex-grow">
                    <div>
                       <span className="text-xs font-bold text-red-500 uppercase block mb-1">Tantangan</span>
                       <p className="text-sm text-slate-600">{item.challenge}</p>
                    </div>
                    <div>
                       <span className="text-xs font-bold text-green-600 uppercase block mb-1">Solusi Guide</span>
                       <p className="text-sm text-slate-600">{item.solution}</p>
                    </div>
                 </div>

                 <div className="mt-auto pt-6 border-t border-slate-200">
                    <Button variant="outline" fullWidth size="sm" className="bg-white hover:bg-slate-50 text-slate-700 border-slate-300">
                       <Download className="w-4 h-4 mr-2" /> {item.asset}
                    </Button>
                 </div>
              </div>
           ))}
        </div>

        {/* FAQ Section (New) */}
        <div className="mb-20 max-w-3xl mx-auto">
           <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary-500" /> Common Questions
           </h2>
           <div className="space-y-4">
              {migrationFaqs.map((faq, idx) => (
                 <Card key={idx} className="p-0" variant="outline">
                    <button 
                       onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                       className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                       <h3 className="font-bold text-slate-900">{faq.q}</h3>
                       {openFaq === idx ? <ChevronUp className="w-5 h-5 text-primary-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>
                    {openFaq === idx && (
                       <div className="px-6 pb-6 animate-fade-in-up">
                          <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                       </div>
                    )}
                 </Card>
              ))}
           </div>
        </div>

        {/* Service Options */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-12 text-center md:text-left">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <FileText className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Option A: Self-Service (Gratis)</h3>
                 <p className="text-slate-600 mb-8 leading-relaxed">
                    Gunakan panduan lengkap, video tutorial, dan template impor kami. Cocok untuk perusahaan kecil dengan data sederhana ({'<'} 10.000 transaksi).
                 </p>
                 <Link to="/docs">
                    <Button variant="outline">Lihat Dokumentasi Migrasi</Button>
                 </Link>
              </div>

              <div className="p-12 text-center md:text-left bg-slate-50">
                 <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <HelpCircle className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Option B: Assisted Migration</h3>
                 <p className="text-slate-600 mb-8 leading-relaxed">
                    Tim Data Specialist kami akan membantu membersihkan, memetakan, dan memvalidasi impor data Anda. Jaminan integritas data 100% sebelum Go-Live.
                 </p>
                 <Link to="/contact">
                    <Button>Hubungi Tim Spesialis</Button>
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default MigrationPage;
