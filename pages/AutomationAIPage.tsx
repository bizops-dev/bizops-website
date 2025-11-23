
import React from 'react';
import Button from '../components/Button';
import { Zap, GitMerge, BrainCircuit, ScanLine, ShieldAlert, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const AutomationAIPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO title="Business Process Automation & AI Features | BizOps Engine" description="Otomatisasi alur kerja bisnis Anda. Fitur Low-Code Workflow Builder, OCR Scanner cerdas, dan AI Forecasting untuk operasional autopilot." />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex p-3 bg-slate-800 rounded-2xl mb-6">
             <Zap className="w-8 h-8 text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Biarkan Sistem yang Bekerja,<br/>Bukan Anda.
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Kurangi pekerjaan manual yang repetitif dan membosankan hingga 80%. BizOps dilengkapi dengan mesin Otomatisasi (<em>Workflow Builder</em>) dan Kecerdasan Buatan (<em>Applied AI</em>) yang praktis untuk membuat bisnis Anda berjalan secara autopilot.
          </p>
          <Link to="/demo">
             <Button size="lg" variant="white">Lihat Demo Otomatisasi</Button>
          </Link>
        </div>
      </section>

      {/* Workflow Automation */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Workflow Automation (No-Code Logic)</h2>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg h-fit">
                           <GitMerge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Visual Builder</h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm">Antarmuka <em>drag-and-drop</em> intuitif untuk membuat aturan logika "Jika X maka Y" tanpa perlu menulis satu baris kode pun.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg h-fit">
                           <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Scenario Example</h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm">"Jika Stok Barang &lt; 10 unit, otomatis buat <em>Purchase Request</em> ke Vendor A, kirim email PO PDF ke vendor, dan kirim notifikasi WhatsApp ke Manajer Gudang."</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-green-50 dark:bg-green-900/30 rounded-lg h-fit">
                           <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Auto-Assignment</h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm">Distribusi tugas otomatis berdasarkan aturan. Misal: "Setiap Lead baru yang berasal dari wilayah Jakarta Selatan otomatis di-<em>assign</em> ke Salesman Budi."</p>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Visual Placeholder */}
               <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 aspect-square flex items-center justify-center relative shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg max-w-xs w-full relative z-10">
                     <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase">Logic Flow</span>
                        <div className="flex gap-1"><div className="w-2 h-2 bg-red-400 rounded-full"></div><div className="w-2 h-2 bg-yellow-400 rounded-full"></div><div className="w-2 h-2 bg-green-400 rounded-full"></div></div>
                     </div>
                     <div className="space-y-3 text-xs">
                        <div className="p-2 bg-slate-50 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-mono">IF Stock &lt; 10</div>
                        <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-slate-400 rotate-90" /></div>
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-mono">THEN Create PR</div>
                        <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-slate-400 rotate-90" /></div>
                        <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-700 dark:text-green-300 font-mono">THEN Email Vendor</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Applied AI */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-16">Applied AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <BrainCircuit className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Smart Forecasting</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     Algoritma prediktif yang menganalisis data penjualan historis 2 tahun terakhir dan tren musiman untuk merekomendasikan jumlah <em>restock</em> yang optimal bulan depan. Mencegah <em>Overstock</em> (uang mati) dan <em>Stockout</em> (hilang omzet).
                  </p>
               </div>
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <ScanLine className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">OCR Expense Scanner</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     Karyawan cukup memfoto struk makan siang atau bensin. AI kami secara otomatis membaca dan mengekstrak nominal, tanggal, dan nama merchant untuk mengisi form Reimbursement. Akurasi pembacaan di atas 95%.
                  </p>
               </div>
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <ShieldAlert className="w-12 h-12 text-amber-600 dark:text-amber-400 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Anomaly Detection</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     Sistem "satpam digital" yang mendeteksi pola transaksi mencurigakan secara dini, misal: pemberian diskon manual di luar kewajaran atau transaksi pembelian di jam yang tidak wajar.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AutomationAIPage;
