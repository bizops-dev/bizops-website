
import React from 'react';
import Button from '../components/Button';
import { Code, Layers, Zap, Settings, Briefcase, Link as LinkIcon } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const CustomDevPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO title="Custom ERP Development Services | BizOps" description="Layanan pengembangan modul kustom di atas BizOps. Buat fitur unik sesuai 'Secret Sauce' bisnis Anda tanpa merusak inti sistem." />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex p-3 bg-slate-800 rounded-2xl mb-6">
             <Code className="w-8 h-8 text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fitur Standar Tidak Cukup?<br/>Kami Bangunkan Untuk Anda.
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Setiap bisnis memiliki "Saus Rahasia" operasionalnya sendiri yang menjadi keunggulan kompetitif. Jangan korbankan keunikan bisnis Anda demi menyesuaikan diri dengan software kaku. Kami mengembangkan modul kustom yang presisi di atas framework BizOps yang kokoh.
          </p>
          <Link to="/contact">
             <Button size="lg" variant="white">Konsultasi Kebutuhan Custom</Button>
          </Link>
        </div>
      </section>

      {/* Why Custom */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why Build Custom with Us?</h2>
               <p className="text-slate-600 dark:text-slate-400 mt-2">Pendekatan "Low Code" kami memastikan development cepat dan aman.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                     <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Upgrade-Safe Architecture</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     Kode kustom Anda dibuat sebagai <em>Custom App</em> terpisah di dalam ekosistem Frappe Framework. Artinya, saat BizOps melakukan update inti sistem untuk keamanan atau fitur baru, modul kustom Anda tidak akan tertimpa atau rusak. Investasi jangka panjang yang aman.
                  </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                     <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Rapid Development (Low Code)</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     Kami tidak mulai dari nol. Kami memanfaatkan pondasi kuat BizOps seperti <em>user management</em>, <em>workflow engine</em>, <em>PDF generator</em>, dan <em>email alert</em> bawaan. Pengembangan menjadi 5x lebih cepat dan hemat biaya dibandingkan membangun software dari awal (<em>scratch</em>).
                  </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                     <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Seamless Integration</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     Modul kustom akan terasa seperti bagian asli dari aplikasi. UI/UX yang konsisten membuat user tidak perlu belajar cara penggunaan baru. Data dari modul kustom dapat langsung berinteraksi dengan modul standar (misal: Payroll, Akuntansi).
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-16">Real World Use Cases</h2>
            <div className="space-y-8">
               <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex-shrink-0 p-4 bg-green-100 dark:bg-green-900/20 rounded-2xl">
                     <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Complex Incentive Scheme</h3>
                     <p className="text-slate-600 dark:text-slate-400">
                        "Perhitungan komisi sales bertingkat yang sangat spesifik berdasarkan kombinasi margin produk, tenor pembayaran, dan pencapaian target tim, yang dihitung otomatis setiap malam."
                     </p>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex-shrink-0 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-2xl">
                     <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Specialized Manufacturing</h3>
                     <p className="text-slate-600 dark:text-slate-400">
                        "Modul perhitungan <em>waste</em> produksi garmen secara otomatis berdasarkan pola potong kain dan jenis bahan, terintegrasi langsung dengan stok gudang kain."
                     </p>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex-shrink-0 p-4 bg-amber-100 dark:bg-amber-900/20 rounded-2xl">
                     <LinkIcon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Vendor Portal</h3>
                     <p className="text-slate-600 dark:text-slate-400">
                        "Portal lelang tertutup khusus supplier di mana mereka bisa login, melihat kebutuhan pengadaan, dan mengajukan penawaran harga secara digital."
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const ShieldCheckIcon = ({ className }: { className?: string }) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
);

export default CustomDevPage;
