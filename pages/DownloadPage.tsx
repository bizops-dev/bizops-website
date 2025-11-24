
import React from 'react';
import Button from '../components/Button';
import { Smartphone, WifiOff, Bell, Fingerprint, Download, FileCode } from 'lucide-react';
import SEO from '../components/SEO';

const DownloadPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24">
      <SEO title="Download BizOps Mobile App (iOS/Android)" description="Aplikasi ERP Mobile Native untuk Android dan iOS. Fitur offline mode, GPS attendance, dan stock opname." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Kontrol Bisnis dari Genggaman.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Jangan biarkan meja kerja membatasi produktivitas Anda. Akses seluruh fitur operasional—dari persetujuan PO, cek stok gudang, hingga laporan lapangan—langsung dari genggaman.
            </p>
            
            <div className="flex flex-col gap-4 mb-12">
               <div className="flex flex-wrap gap-4">
                 <button className="bg-slate-900 text-white rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-slate-800 transition-colors shadow-lg">
                    <div className="text-2xl"></div>
                    <div className="text-left">
                       <div className="text-xs text-slate-400">Download on the</div>
                       <div className="text-sm font-bold">App Store</div>
                    </div>
                 </button>
                 <button className="bg-slate-900 text-white rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-slate-800 transition-colors shadow-lg">
                    <div className="text-2xl">▶</div>
                    <div className="text-left">
                       <div className="text-xs text-slate-400">GET IT ON</div>
                       <div className="text-sm font-bold">Google Play</div>
                    </div>
                 </button>
               </div>
               
               <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex gap-4 items-center max-w-md">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                     <FileCode className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-sm font-bold text-slate-900">Enterprise Sideload (APK)</h4>
                     <p className="text-xs text-slate-500">Untuk perangkat industri non-GMS (Zebra/Honeywell).</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs h-8">Unduh APK</Button>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                     <WifiOff className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900">Offline-First Mode</h3>
                     <p className="text-sm text-slate-600">Tetap bisa input data penjualan atau stock opname tanpa sinyal. Sinkronisasi otomatis saat online.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                     <Fingerprint className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900">Biometric Security</h3>
                     <p className="text-sm text-slate-600">Masuk aman menggunakan FaceID atau Fingerprint. Lebih cepat dan aman daripada password.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                     <Bell className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900">Real-time Push Notifications</h3>
                     <p className="text-sm text-slate-600">Terima notifikasi approval atau alert stok kritis seketika. Jangan pernah jadi bottleneck tim.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-[3rem] h-[600px] flex items-center justify-center p-8 relative overflow-hidden shadow-inner">
             {/* Abstract Phone Shape */}
             <div className="w-[300px] h-[580px] bg-slate-900 rounded-[40px] p-3 shadow-2xl relative z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-slate-800 rounded-[32px] overflow-hidden relative border border-slate-700">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                   {/* Screen Content Mockup */}
                   <div className="w-full h-full bg-slate-50 relative">
                      <div className="h-40 bg-primary-600 rounded-b-[2rem] p-6 pt-12 text-white">
                         <div className="flex justify-between items-center mb-6">
                            <div className="w-8 h-8 bg-primary-500 rounded-full opacity-50"></div>
                            <div className="w-8 h-8 bg-primary-500 rounded-full opacity-50"></div>
                         </div>
                         <div className="text-2xl font-bold">Hello, Budi</div>
                         <div className="text-primary-200 text-sm">Site Manager - Jakarta</div>
                      </div>
                      <div className="p-4 -mt-8">
                         <div className="bg-white rounded-xl p-4 shadow-lg mb-4 flex justify-between items-center">
                            <div>
                               <div className="text-xs text-slate-400 uppercase">Today's Tasks</div>
                               <div className="text-xl font-bold text-slate-900">12 Pending</div>
                            </div>
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                               <Bell className="w-5 h-5" />
                            </div>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm h-32"></div>
                            <div className="bg-white p-4 rounded-xl shadow-sm h-32"></div>
                            <div className="bg-white p-4 rounded-xl shadow-sm h-32"></div>
                            <div className="bg-white p-4 rounded-xl shadow-sm h-32"></div>
                         </div>
                      </div>
                      {/* Floating Action Button */}
                      <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl font-bold">+</div>
                   </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
             <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
