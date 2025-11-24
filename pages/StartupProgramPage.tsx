
import React from 'react';
import Button from '../components/Button';
import { Rocket, CheckCircle, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const StartupProgramPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO title="Program BizOps for Startups | Diskon & Kredit Gratis" description="Program akselerasi eksklusif untuk startup. Dapatkan akses teknologi ERP kelas dunia dengan harga khusus agar Anda bisa fokus pada pertumbuhan." />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex p-3 bg-slate-800 rounded-2xl mb-6">
             <Rocket className="w-8 h-8 text-primary-400" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Skalakan Startup Anda,<br/>Bukan Biaya Admin Anda.
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Di fase awal, setiap rupiah sangat berharga. Jangan biarkan spreadsheet yang berantakan atau software mahal menghambat <em>runway</em> dan proses <em>fundraising</em> Anda. Dapatkan infrastruktur operasional yang <em>audit-ready</em> dari hari pertama.
          </p>
          <Link to="/partners/apply">
             <Button size="lg" variant="accent">Ajukan Aplikasi Program Startup</Button>
          </Link>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">Pilih Track Anda</h2>
               <p className="text-slate-600 dark:text-slate-400 mt-2">Kami mendukung startup dari tahap ide hingga growth stage.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Bootstrap Track */}
               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                        <Zap className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Bootstrap Track</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Untuk Early Stage / Pre-Seed</p>
                     </div>
                  </div>
                  <div className="mb-8">
                     <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">50% OFF</div>
                     <p className="text-slate-600 dark:text-slate-300">Diskon Paket Growth selama 12 bulan pertama.</p>
                  </div>
                  <div className="space-y-4 mb-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                     <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">Akses penuh ke modul inti (HR, Finance, Ops).</span>
                     </div>
                     <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">Tanpa batasan fitur atau user.</span>
                     </div>
                     <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">Syarat: Usia &lt; 2 tahun, Revenue &lt; 1M/thn.</span>
                     </div>
                  </div>
                  <Button fullWidth variant="outline">Apply Bootstrap Track</Button>
               </div>

               {/* VC-Backed Track */}
               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-primary-500 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">RECOMMENDED</div>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
                        <TrendingUp className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">VC-Backed Track</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Portfolio East Ventures / Alpha JWC / etc</p>
                     </div>
                  </div>
                  <div className="mb-8">
                     <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Free Credit</div>
                     <p className="text-slate-600 dark:text-slate-300">Senilai <strong>Rp 50 Juta</strong> untuk tahun pertama.</p>
                  </div>
                  <div className="space-y-4 mb-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                     <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">Gratis sesi konsultasi arsitektur sistem.</span>
                     </div>
                     <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">Priority Support Line.</span>
                     </div>
                     <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">Syarat: Surat referensi dari VC partner.</span>
                     </div>
                  </div>
                  <Button fullWidth variant="primary">Claim VC Credits</Button>
               </div>
            </div>
         </div>
      </section>

      {/* Why Startups Need ERP */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white text-center mb-16 leading-tight">Why Startups Need BizOps Early?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-6">
                  <ShieldCheck className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Data Room Ready for Due Diligence</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     "Investor akan meminta data keuangan historis yang rapi saat proses <em>Due Diligence</em>. Dengan BizOps, laporan keuangan, aset, dan data karyawan Anda tersaji rapi dan <em>real-time</em>, mempercepat proses investasi."
                  </p>
               </div>
               <div className="p-6">
                  <TrendingUp className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Scalable Foundation</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     "Jangan menunggu migrasi sistem saat user Anda meledak dan operasional <em>chaos</em>. Siapkan fondasi yang kuat dari hari pertama yang bisa menangani ribuan transaksi tanpa <em>hiccup</em>."
                  </p>
               </div>
               <div className="p-6">
                  <CheckCircle className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Compliance from Day One</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     "Pastikan kepatuhan pajak dan ketenagakerjaan sejak awal untuk menghindari denda atau masalah hukum yang bisa mematikan startup di kemudian hari."
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default StartupProgramPage;
