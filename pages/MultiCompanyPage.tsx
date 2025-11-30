
import React from 'react';
import Button from '../components/Button';
import { Building, Network, Key, FileText, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';

const MultiCompanyPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO title="Multi-Company ERP & Financial Consolidation | BizOps" description="Kelola banyak anak perusahaan (PT/CV) dalam satu sistem terpusat. Konsolidasi laporan keuangan otomatis dan transaksi antar-perusahaan yang mulus." />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex p-3 bg-slate-800 rounded-2xl mb-6">
             <Network className="w-8 h-8 text-primary-400" />
          </div>
          <Typography variant="h1" as="h1" className="font-bold leading-tight">Satu Platform untuk<br/>Seluruh Grup Bisnis Anda.</Typography>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Punya banyak PT, CV, atau unit bisnis berbeda? Jangan kelola mereka di pulau-pulau terpisah. Satukan manajemen grup perusahaan Anda dengan struktur <em>Multi-Company</em> yang <em>native</em>.
          </p>
          <Link to="/demo?plan=enterprise">
             <Button size="lg" variant="white">Demo Struktur Holding</Button>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               
               <div className="text-center md:text-left">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 mx-auto md:mx-0">
                     <Key className="w-8 h-8" />
                  </div>
                  <Typography variant="h3" as="h3">Unified Login & Access</Typography>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                     Cukup satu <em>username</em> untuk mengakses data PT A, PT B, dan CV C. Pindah antar perusahaan semudah ganti saluran TV, namun hak akses data tetap terpisah secara ketat demi keamanan dan kerahasiaan antar unit.
                  </p>
               </div>

               <div className="text-center md:text-left">
                  <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 mx-auto md:mx-0">
                     <FileText className="w-8 h-8" />
                  </div>
                  <Typography variant="h3" as="h3">Financial Consolidation</Typography>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                     Lupakan proses 'VLOOKUP' Excel yang memusingkan di akhir bulan. BizOps menarik data Neraca dan Laba Rugi dari seluruh anak perusahaan dan menyajikannya dalam satu Laporan Konsolidasi Grup secara <em>real-time</em>.
                  </p>
               </div>

               <div className="text-center md:text-left">
                  <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 mx-auto md:mx-0">
                     <RefreshCw className="w-8 h-8" />
                  </div>
                  <Typography variant="h3" as="h3">Inter-Company Transactions</Typography>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                     Otomatisasi transaksi internal. Saat PT A menjual barang ke PT B, sistem otomatis membuat <em>Sales Invoice</em> di pembukuan PT A dan <em>Purchase Invoice</em> di pembukuan PT B secara bersamaan. Hemat waktu input dan eliminasi selisih pencatatan.
                  </p>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default MultiCompanyPage;
