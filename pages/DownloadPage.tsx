import React from 'react';
import Button from '../components/Button';
import { 
  Smartphone, WifiOff, Bell, Fingerprint, Download, 
  FileCode, Star, ShieldCheck, Zap, Layers 
} from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import CardSlider from '../components/CardSlider';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const DownloadPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      <SEO title="Download BizOps Mobile App (iOS/Android)" description="Aplikasi ERP Mobile Native untuk Android dan iOS. Fitur offline mode, GPS attendance, dan stock opname." />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 overflow-hidden py-16 md:py-24">
        <Container className="px-4 md:px-6 lg:px-8" size="7xl">
          <Grid cols={2} gap={16} className="items-center">
            
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                 <Smartphone className="w-3 h-3" /> BizOps Mobile v4.2
              </div>
              
              <Typography variant="h1" as="h1" className="font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">Your entire business, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">in your pocket.</span></Typography>
              
              <Typography variant="body-xl" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Jangan biarkan meja kerja membatasi produktivitas. Approve PO, cek stok gudang, dan pantau sales—kapan saja, di mana saja.</Typography>
              
              {/* Store Buttons */}
              <Stack direction="vertical" gap={4} className="mb-10">
                 <a href="#" className="flex items-center gap-3 bg-slate-900 dark: bg-white text-slate-900 dark:text-white text-white px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-xl">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.12-1.02.05-2.27.69-3.02 1.55-.67.78-1.26 2.03-1.11 3.17 1.14.09 2.3-.63 3.06-1.6z"/></svg>
                    <div className="text-left leading-none">
                       <div className="text-[10px] font-medium opacity-80 mb-1">Download on the</div>
                       <div className="text-lg font-bold">App Store</div>
                    </div>
                 </a>
                 <a href="#" className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,25.88L5.03,24.86L16.81,13.08L16.81,15.12M21.83,12.79L18.12,16.42L14.7,13L21.83,12.79M16.81,8.88L5.03,1.96L6.05,0.94L16.81,11.7V8.88Z" transform="rotate(45 12 12)"/></svg>
                    <div className="text-left leading-none">
                       <div className="text-[10px] font-medium opacity-80 mb-1">GET IT ON</div>
                       <div className="text-lg font-bold">Google Play</div>
                    </div>
                 </a>
              </Stack>

              {/* QR Code & Enterprise */}
              <div className="flex items-center gap-6">
                 <div className="hidden sm:block p-2 bg-white rounded-xl shadow-md border border-slate-100">
                    {/* Mock QR Code */}
                    <div className="w-20 h-20 bg-slate-900 flex items-center justify-center text-white text-[8px] p-1 text-center leading-tight gap-4">
                       SCAN TO<br/>DOWNLOAD
                    </div>
                 </div>
                 <div className="h-12 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                 <div>
                    <div className="flex items-center gap-1 mb-1">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 dark:text-amber-300 fill-amber-400" />)}
                       <span className="text-sm font-bold text-slate-900 dark:text-white ml-2">4.8</span>
                    </div>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Based on 1,200+ reviews from verified users.</Typography>
                 </div>
              </div>
            </div>

            {/* Right Visual (Phone) */}
            <div className="relative">
               {/* Background Blobs */}
               <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] animate-pulse-slow"></div>
               <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] animate-pulse-slow delay-1000"></div>
               
               {/* Phone Frame */}
               <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 mx-auto max-w-[300px]"
               >
                  <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10">
                     {/* Screen */}
                     <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden h-[600px] relative">
                        {/* Status Bar */}
                        <div className="h-8 bg-slate-900 flex justify-between items-center px-6 gap-4">
                           <span className="text-[10px] text-white font-bold">9:41</span>
                           <div className="flex gap-1">
                              <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                           </div>
                        </div>
                        
                        {/* App Header */}
                        <div className="bg-slate-900 p-6 pb-8 text-white rounded-b-[2rem] shadow-lg relative z-10">
                           <div className="flex justify-between items-center mb-6 gap-4">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                              <Bell className="w-5 h-5 text-slate-300" />
                           </div>
                           <Typography variant="h2" as="h2">Good Morning,</Typography>
                           <Typography variant="body" className="text-slate-400 dark:text-slate-300">Site Manager - Jakarta</Typography>
                        </div>

                        {/* App Body */}
                        <Stack direction="vertical" gap={4} className="p-4 -mt-6 relative z-20">
                           {/* Stats Card */}
                           <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                              <div className="flex justify-between items-center mb-4 gap-4">
                                 <Typography variant="h3" as="h3">Today's Approval</Typography>
                                 <span className="bg-red-100 text-red-600 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded-full">3 Pending</span>
                              </div>
                              <div className="flex gap-3 overflow-x-auto pb-2">
                                 {[1,2,3].map(i => (
                                    <div key={i} className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-700 gap-4"></div>
                                 ))}
                              </div>
                           </div>

                           {/* Menu Grid */}
                           <Grid cols={2} gap={4}>
                              {[
                                 { icon: Layers, label: "Stock", color: "bg-blue-100 text-blue-600 dark:text-slate-300" },
                                 { icon: Zap, label: "Sales", color: "bg-amber-100 text-amber-600 dark:text-slate-300" },
                                 { icon: FileCode, label: "Report", color: "bg-purple-100 text-purple-600 dark:text-slate-300" },
                                 { icon: ShieldCheck, label: "Audit", color: "bg-green-100 text-green-600 dark:text-slate-300" }
                              ].map((item, i) => (
                                 <div key={i} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 aspect-square hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                                       <item.icon className="w-5 h-5" />
                                    </div>
                                    <Typography variant="caption" className="text-slate-700 dark:text-slate-300">{item.label}</Typography>
                                 </div>
                              ))}
                           </Grid>
                        </Stack>

                        {/* Floating Action */}
                        <div className="absolute bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center text-white hover:scale-110 transition-transform gap-4">
                           <Download className="w-6 h-6" />
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
          </Grid>
        </Container>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
         <Container className="px-4 md:px-6 lg:px-8" size="7xl">
            <Container size="3xl" className="text-center mb-16">
               <Typography variant="h2" as="h2">Built for the Field Workforce</Typography>
               <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Didesain khusus untuk Salesman, Kurir, Teknisi, dan Warehouse Staff yang bekerja di lapangan.</Typography>
            </Container>

            <div className="md:hidden">
               <CardSlider
                  mobileItemWidth="w-[85vw] sm:w-[350px]"
               >
                  <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow h-full">
                     <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-slate-300 mb-6 gap-4">
                        <WifiOff className="w-7 h-7" />
                     </div>
                     <Typography variant="h3" as="h3">Offline-First Mode</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Input order atau stock opname di gudang bawah tanah tanpa sinyal. Data tersimpan lokal dan auto-sync begitu kembali online.</Typography>
                  </div>
                  <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow h-full">
                     <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-slate-300 mb-6 gap-4">
                        <Fingerprint className="w-7 h-7" />
                     </div>
                     <Typography variant="h3" as="h3">Biometric Security</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Login cepat dalam 0.5 detik menggunakan FaceID atau Fingerprint. Keamanan enterprise-grade tanpa ribet password.</Typography>
                  </div>
                  <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow h-full">
                     <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-slate-300 mb-6 gap-4">
                        <Bell className="w-7 h-7" />
                     </div>
                     <Typography variant="h3" as="h3">Instant Push Notif</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Jangan jadi bottleneck. Terima notifikasi Purchase Approval atau Low Stock Alert secara real-time dan action langsung.</Typography>
                  </div>
               </CardSlider>
            </div>

            <Grid cols={3} gap={8} className="hidden">
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-slate-300 mb-6 gap-4">
                     <WifiOff className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Offline-First Mode</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Input order atau stock opname di gudang bawah tanah tanpa sinyal. Data tersimpan lokal dan auto-sync begitu kembali online.</Typography>
               </div>
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-slate-300 mb-6 gap-4">
                     <Fingerprint className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Biometric Security</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Login cepat dalam 0.5 detik menggunakan FaceID atau Fingerprint. Keamanan enterprise-grade tanpa ribet password.</Typography>
               </div>
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-slate-300 mb-6 gap-4">
                     <Bell className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Instant Push Notif</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Jangan jadi bottleneck. Terima notifikasi Purchase Approval atau Low Stock Alert secara real-time dan action langsung.</Typography>
               </div>
            </Grid>
         </Container>
      </section>

      {/* --- ENTERPRISE SIDELOAD --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         <Container size="7xl" className="text-center relative z-10">
            <Typography variant="h2" as="h2">Enterprise Deployment?</Typography>
            <Typography variant="body" className="text-slate-400 dark:text-slate-300">Untuk penggunaan di perangkat industri (Zebra, Honeywell) tanpa Google Mobile Services (GMS), atau deployment via MDM (Mobile Device Management) internal.</Typography>
            <Stack direction="vertical" gap={4} className="justify-center">
               <Button size="md" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 gap-2">
                  <FileCode className="w-4 h-4" /> Download APK (v4.2.1)
               </Button>
               <Button size="md" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 gap-2">
                  <ShieldCheck className="w-4 h-4" /> MDM Config Guide
               </Button>
            </Stack>
         </Container>
      </section>

    </div>
  );
};

export default DownloadPage;
