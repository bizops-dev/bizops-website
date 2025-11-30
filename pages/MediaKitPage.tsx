import React from 'react';
import Button from '../components/Button';
import { Copy, Check, FileText, Download, Type, Palette, Image as ImageIcon, Mail, ExternalLink, ArrowRight, X, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import CardSlider from '../components/CardSlider';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const MediaKitPage: React.FC = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const boilerplate = {
    short: "BizOps adalah Business Operating System end-to-end yang membantu perusahaan Indonesia mendigitalisasi operasional dari hulu ke hilir. Menggabungkan kekuatan teknologi Enterprise berbasis Open Source dengan kepatuhan regulasi lokal, BizOps menawarkan solusi yang fleksibel, aman, dan berdaulat data di bawah naungan PT Divistant Teknologi Indonesia.",
    standard: "BizOps, dikembangkan oleh PT Divistant Teknologi Indonesia, adalah platform 'Business Operating System' yang dirancang untuk menjembatani kesenjangan antara software akuntansi lokal yang sederhana dan ERP global yang kompleks. Dengan filosofi 'Mobile-First' dan 'Data Sovereignty', BizOps menyediakan solusi terintegrasi untuk HR, Keuangan, Operasional Proyek, dan Rantai Pasok dalam satu ekosistem. BizOps memberdayakan perusahaan Indonesia untuk memiliki kendali penuh atas data mereka melalui opsi Self-Hosted, sambil tetap menikmati kemudahan penggunaan aplikasi mobile modern."
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans selection:bg-indigo-500/30">
      <SEO title="Brand Assets, Logo & Press Resources | BizOps Media Kit" description="Unduh aset resmi BizOps. Logo High-Res, Panduan Brand, dan Boilerplate perusahaan." />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0B1120] text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        
        <Container size="5xl" className="relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-wider mb-8"
          >
             <Download className="w-3 h-3" /> Official Press Resources
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Ceritakan Kisah Kami <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">Dengan Benar.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
          >
            Aset resmi, panduan merek, dan informasi perusahaan yang terkurasi untuk memudahkan rekan media, partner strategis, dan event organizer.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
             <Button size="lg" className="bg-white text-slate-900 dark:text-white hover:bg-slate-100 border-none font-bold shadow-xl">
               Download All Assets (ZIP) <Download className="w-4 h-4 ml-2" />
             </Button>
             <Button size="lg" variant="outline" className="border-slate-700 text-slate-900 dark:text-white hover:bg-white/10">
               Lihat Brand Guidelines <ExternalLink className="w-4 h-4 ml-2" />
             </Button>
          </motion.div>
        </Container>
      </section>

      <Container size="7xl" className="py-24 space-y-32">
        
        {/* --- LOGO PACK --- */}
        <section>
           <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 gap-4">
                 <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                 <Typography variant="h2" as="h2">Brand Assets (Logo)</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Gunakan logo sesuai konteks background.</Typography>
              </div>
           </div>

           <Grid cols={2} gap={8}>
              {/* Primary Logo */}
              <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-10 border border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 flex flex-col shadow-sm hover:shadow-xl transition-all gap-4"
              >
                 <div className="flex-grow flex items-center justify-center w-full mb-10 min-h-[160px] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-50 gap-4">
                    <div className="flex items-center gap-3 scale-150 transform">
                       <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 gap-4">
                          <div className="w-5 h-5 bg-white rounded-md transform rotate-45"></div>
                       </div>
                       <Typography variant="body" className="text-3xl text-slate-900 dark:text-white">BizOps</Typography>
                    </div>
                 </div>
                 <div className="w-full border-t border-slate-100 dark:border-slate-800 pt-6">
                    <div className="flex justify-between items-end mb-4 gap-4">
                       <div>
                          <Typography variant="h3" as="h3">Primary Logo</Typography>
                          <Typography variant="caption" className="text-slate-500">Gunakan pada background terang/putih.</Typography>
                       </div>
                       <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-xs h-8">SVG</Button>
                          <Button size="sm" variant="outline" className="text-xs h-8">PNG</Button>
                       </div>
                    </div>
                 </div>
              </motion.div>

              {/* Inverse/Dark Logo */}
              <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-10 border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-900 flex flex-col shadow-sm hover:shadow-xl transition-all relative overflow-hidden gap-4"
              >
                 <div className="absolute inset-0 bg-slate-800/50 mix-blend-overlay"></div>
                 <div className="relative z-10 flex-grow flex items-center justify-center w-full mb-10 min-h-[160px] gap-4">
                    <div className="flex items-center gap-3 scale-150 transform">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg gap-4">
                          <div className="w-5 h-5 bg-slate-900 rounded-md transform rotate-45"></div>
                       </div>
                       <Typography variant="body" className="text-3xl text-white">BizOps</Typography>
                    </div>
                 </div>
                 <div className="relative z-10 w-full border-t border-slate-700/50 pt-6">
                    <div className="flex justify-between items-end mb-4 gap-4">
                       <div>
                          <Typography variant="h3" as="h3">Monochrome (Inverse)</Typography>
                          <Typography variant="caption" className="text-slate-400">Gunakan pada background gelap/foto.</Typography>
                       </div>
                       <div className="flex gap-2">
                          <Button size="sm" variant="outline-white" className="text-xs h-8 border-slate-600 hover:bg-slate-800">SVG</Button>
                          <Button size="sm" variant="outline-white" className="text-xs h-8 border-slate-600 hover:bg-slate-800">PNG</Button>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </Grid>

           {/* Do's and Don'ts */}
           <Grid cols={4} gap={6} className="mt-8">
               <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/30 flex flex-col items-center text-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 flex items-center justify-center mb-4 gap-4">
                     <Check className="w-4 h-4" />
                  </div>
                  <Typography variant="body" className="dark:text-green-400">Gunakan Space yang Cukup</Typography>
               </div>
               <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 flex flex-col items-center text-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 text-red-600 flex items-center justify-center mb-4 gap-4">
                     <X className="w-4 h-4" />
                  </div>
                  <Typography variant="body" className="dark:text-red-400">Jangan Mengubah Proporsi</Typography>
               </div>
               <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 flex flex-col items-center text-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 text-red-600 flex items-center justify-center mb-4 gap-4">
                     <X className="w-4 h-4" />
                  </div>
                  <Typography variant="body" className="dark:text-red-400">Jangan Mengganti Warna</Typography>
               </div>
               <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 flex flex-col items-center text-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 text-red-600 flex items-center justify-center mb-4 gap-4">
                     <X className="w-4 h-4" />
                  </div>
                  <Typography variant="body" className="dark:text-red-400">Jangan Menambah Efek</Typography>
               </div>
           </Grid>
        </section>

        {/* --- COLOR PALETTE --- */}
        <section>
           <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 gap-4">
                 <Palette className="w-6 h-6" />
              </div>
              <div>
                 <Typography variant="h2" as="h2">Color System</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Klik HEX code untuk menyalin.</Typography>
              </div>
           </div>
           
           <div className="md:hidden">
              <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
                 <motion.div whileHover={{ y: -5 }} className="group h-full">
                    <div className="h-40 bg-primary-600 rounded-3xl shadow-lg mb-4 flex items-center justify-center group-hover:shadow-primary-500/30 transition-shadow gap-4">
                       <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Primary</span>
                    </div>
                    <div className="flex justify-between items-center px-2 gap-4">
                       <div>
                          <div className="font-bold text-slate-900 dark:text-white">Electric Blue</div>
                          <div className="text-xs text-slate-500">Brand Primary</div>
                       </div>
                       <button 
                         onClick={() => copyToClipboard('#2563EB', 'c1')} 
                         className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                       >
                          {copied === 'c1' ? <Check className="w-3 h-3 text-green-500" /> : '#2563EB'}
                          {copied !== 'c1' && <Copy className="w-3 h-3" />}
                       </button>
                    </div>
                 </motion.div>

                 <motion.div whileHover={{ y: -5 }} className="group h-full">
                    <div className="h-40 bg-slate-900 rounded-3xl shadow-lg mb-4 flex items-center justify-center border border-slate-800 gap-4">
                        <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Neutral</span>
                    </div>
                    <div className="flex justify-between items-center px-2 gap-4">
                       <div>
                          <div className="font-bold text-slate-900 dark:text-white">Deep Space</div>
                          <div className="text-xs text-slate-500">Backgrounds / Text</div>
                       </div>
                       <button 
                         onClick={() => copyToClipboard('#0F172A', 'c2')} 
                         className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                       >
                          {copied === 'c2' ? <Check className="w-3 h-3 text-green-500" /> : '#0F172A'}
                          {copied !== 'c2' && <Copy className="w-3 h-3" />}
                       </button>
                    </div>
                 </motion.div>

                 <motion.div whileHover={{ y: -5 }} className="group h-full">
                    <div className="h-40 bg-emerald-500 rounded-3xl shadow-lg mb-4 flex items-center justify-center group-hover:shadow-emerald-500/30 transition-shadow gap-4">
                        <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Success</span>
                    </div>
                    <div className="flex justify-between items-center px-2 gap-4">
                       <div>
                          <div className="font-bold text-slate-900 dark:text-white">Signal Green</div>
                          <div className="text-xs text-slate-500">Positive Actions</div>
                       </div>
                       <button 
                         onClick={() => copyToClipboard('#10B981', 'c3')} 
                         className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                       >
                          {copied === 'c3' ? <Check className="w-3 h-3 text-green-500" /> : '#10B981'}
                          {copied !== 'c3' && <Copy className="w-3 h-3" />}
                       </button>
                    </div>
                 </motion.div>

                 <motion.div whileHover={{ y: -5 }} className="group h-full">
                    <div className="h-40 bg-amber-500 rounded-3xl shadow-lg mb-4 flex items-center justify-center group-hover:shadow-amber-500/30 transition-shadow gap-4">
                        <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Warning</span>
                    </div>
                    <div className="flex justify-between items-center px-2 gap-4">
                       <div>
                          <div className="font-bold text-slate-900 dark:text-white">Safety Orange</div>
                          <div className="text-xs text-slate-500">Alerts / Attention</div>
                       </div>
                       <button 
                         onClick={() => copyToClipboard('#F59E0B', 'c4')} 
                         className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                       >
                          {copied === 'c4' ? <Check className="w-3 h-3 text-green-500" /> : '#F59E0B'}
                          {copied !== 'c4' && <Copy className="w-3 h-3" />}
                       </button>
                    </div>
                 </motion.div>
              </CardSlider>
           </div>
           
           <Grid cols={4} gap={8} className="hidden">
              <motion.div whileHover={{ y: -5 }} className="group h-full">
                 <div className="h-40 bg-primary-600 rounded-3xl shadow-lg mb-4 flex items-center justify-center group-hover:shadow-primary-500/30 transition-shadow gap-4">
                    <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Primary</span>
                 </div>
                 <div className="flex justify-between items-center px-2 gap-4">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white">Electric Blue</div>
                       <div className="text-xs text-slate-500">Brand Primary</div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('#2563EB', 'c1')} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                    >
                       {copied === 'c1' ? <Check className="w-3 h-3 text-green-500" /> : '#2563EB'}
                       {copied !== 'c1' && <Copy className="w-3 h-3" />}
                    </button>
                 </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="group h-full">
                 <div className="h-40 bg-slate-900 rounded-3xl shadow-lg mb-4 flex items-center justify-center border border-slate-800 gap-4">
                     <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Neutral</span>
                 </div>
                 <div className="flex justify-between items-center px-2 gap-4">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white">Deep Space</div>
                       <div className="text-xs text-slate-500">Backgrounds / Text</div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('#0F172A', 'c2')} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                    >
                       {copied === 'c2' ? <Check className="w-3 h-3 text-green-500" /> : '#0F172A'}
                       {copied !== 'c2' && <Copy className="w-3 h-3" />}
                    </button>
                 </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="group h-full">
                 <div className="h-40 bg-emerald-500 rounded-3xl shadow-lg mb-4 flex items-center justify-center group-hover:shadow-emerald-500/30 transition-shadow gap-4">
                     <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Success</span>
                 </div>
                 <div className="flex justify-between items-center px-2 gap-4">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white">Signal Green</div>
                       <div className="text-xs text-slate-500">Positive Actions</div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('#10B981', 'c3')} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                    >
                       {copied === 'c3' ? <Check className="w-3 h-3 text-green-500" /> : '#10B981'}
                       {copied !== 'c3' && <Copy className="w-3 h-3" />}
                    </button>
                 </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="group h-full">
                 <div className="h-40 bg-amber-500 rounded-3xl shadow-lg mb-4 flex items-center justify-center group-hover:shadow-amber-500/30 transition-shadow gap-4">
                     <span className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">Warning</span>
                 </div>
                 <div className="flex justify-between items-center px-2 gap-4">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white">Safety Orange</div>
                       <div className="text-xs text-slate-500">Alerts / Attention</div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('#F59E0B', 'c4')} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                    >
                       {copied === 'c4' ? <Check className="w-3 h-3 text-green-500" /> : '#F59E0B'}
                       {copied !== 'c4' && <Copy className="w-3 h-3" />}
                    </button>
                 </div>
              </motion.div>
           </Grid>
        </section>

        {/* --- TYPOGRAPHY --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 md:py-24">
           <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 gap-4">
                    <Type className="w-6 h-6" />
                 </div>
                 <div>
                 <Typography variant="h2" as="h2">Typography</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Plus Jakarta Sans (Google Fonts) untuk keterbacaan UI.</Typography>
              </div>
           </div>
           <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">BizOps menggunakan typeface <strong>Plus Jakarta Sans</strong> untuk seluruh materi komunikasi digital. Font ini dipilih karena karakteristiknya yang modern, netral, dan memiliki keterbacaan tinggi pada layar mobile maupun desktop.</Typography>
              <Stack direction="vertical" gap={6}>
                 <div>
                    <span className="text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">Aa</span>
                    <span className="text-6xl font-normal text-slate-900 dark:text-white ml-4">Aa</span>
                 </div>
                 <Grid cols={3} gap={4}>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
                       <div className="text-2xl font-bold mb-1">Bold</div>
                       <div className="text-xs text-slate-500">Headings</div>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
                       <div className="text-2xl font-medium mb-1">Medium</div>
                       <div className="text-xs text-slate-500">Buttons / UI</div>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
                       <div className="text-2xl font-normal mb-1">Regular</div>
                       <div className="text-xs text-slate-500">Body Text</div>
                    </div>
                 </Grid>
              </Stack>
           </div>
           
           <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-[2rem] blur-xl opacity-70"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
                 <Stack direction="vertical" gap={4}>
                    <Typography variant="h1" as="h1">The Quick Brown Fox</Typography>
                    <Typography variant="h2" as="h2">Jumps Over The Lazy Dog</Typography>
                    <Typography variant="h3" as="h3">1234567890</Typography>
                    <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">BizOps adalah platform Business Operating System yang membantu perusahaan Indonesia mendigitalisasi operasional dari hulu ke hilir. Satu sistem terintegrasi untuk HR, Finance, Operations, Sales, dan Supply Chain.</Typography>
                 </Stack>
              </div>
           </div>
        </section>

        {/* --- BOILERPLATE --- */}
        <section>
           <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 gap-4">
                 <FileText className="w-6 h-6" />
              </div>
              <div>
                 <Typography variant="h2" as="h2">Company Boilerplate</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Deskripsi perusahaan standar untuk press release.</Typography>
              </div>
           </div>

           <Grid cols={2} gap={8}>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                 <div className="flex items-center justify-between mb-6 gap-4">
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">Short Bio <Typography variant="caption" className="text-slate-500">~50 Words</Typography></Typography>
                    <button onClick={() => copyToClipboard(boilerplate.short, 'short')} className="text-primary-600 hover:text-primary-700 font-bold text-sm flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                       {copied === 'short' ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Text</>}
                    </button>
                 </div>
                 <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-slate-700 dark:text-slate-300 text-sm leading-relaxed border border-slate-100 dark:border-slate-700/50 italic">
                    "{boilerplate.short}"
                 </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                 <div className="flex items-center justify-between mb-6 gap-4">
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">Standard Bio <Typography variant="caption" className="text-slate-500">~100 Words</Typography></Typography>
                    <button onClick={() => copyToClipboard(boilerplate.standard, 'standard')} className="text-primary-600 hover:text-primary-700 font-bold text-sm flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                       {copied === 'standard' ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Text</>}
                    </button>
                 </div>
                 <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-slate-700 dark:text-slate-300 text-sm leading-relaxed border border-slate-100 dark:border-slate-700/50 italic">
                    "{boilerplate.standard}"
                 </div>
              </div>
           </Grid>
        </section>

        {/* --- PRESS CONTACT --- */}
        <section className="bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden text-center lg:text-left py-16 md:py-24">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
           
           <Stack direction="vertical" gap={12} className="relative z-10 items-center justify-between">
              <div className="max-w-xl">
                 <Typography variant="h2" as="h2">Media Inquiries</Typography>
                 <Typography variant="body-lg" className="text-slate-300 leading-relaxed">Untuk permintaan wawancara, kutipan ahli, atau undangan sebagai pembicara, silakan hubungi tim komunikasi kami. Kami merespon dalam waktu 24 jam kerja.</Typography>
                 <Stack direction="vertical" gap={4}>
                    <a href="mailto:pr@divistant.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-100 transition-colors">
                       <Mail className="w-4 h-4" /> Hubungi PR Team
                    </a>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
                       WhatsApp
                    </a>
                 </Stack>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 max-w-sm w-full">
                 <div className="flex items-center gap-4 mb-6">
                    <OptimizedImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="PR Contact" className="w-16 h-16 rounded-full border-2 border-indigo-400 object-cover" />
                    <div>
                       <div className="font-bold text-white text-lg">Sarah Jenkins</div>
                       <div className="text-indigo-300 text-sm">Head of Communications</div>
                    </div>
                 </div>
                 <Stack direction="vertical" gap={3} className="text-sm text-slate-300">
                    <div className="flex items-center gap-3">
                       <Mail className="w-4 h-4 text-slate-400" /> pr@divistant.com
                    </div>
                    <div className="flex items-center gap-3">
                       <Globe className="w-4 h-4 text-slate-400" /> Jakarta, Indonesia
                    </div>
                 </Stack>
              </div>
           </Stack>
        </section>

      </Container>
    </div>
  );
};

export default MediaKitPage;
