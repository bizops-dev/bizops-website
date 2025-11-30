
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Home, FileText, HelpCircle, LogIn, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Stack from '../components/Stack';
import Container from '../components/Container';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans transition-colors gap-4">
      <SEO title="404 Not Found" description="Halaman tidak ditemukan." />
      
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Container size="3xl" className="relative z-10">
         <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[10rem] md:text-[14rem] font-black text-slate-200 dark:text-slate-800 dark:text-slate-100 leading-none select-none tracking-tighter"
         >
            404
         </motion.div>
         
         <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative -mt-16 md:-mt-24"
         >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border-4 border-slate-50 dark:border-slate-800 mb-8 relative z-10 gap-4">
                <span className="text-5xl animate-bounce leading-tight">🤔</span>
            </div>
            
            <Typography variant="h1" as="h1" className="font-extrabold text-slate-900 dark:text-white leading-tight">Halaman Ini Sedang <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">"Cuti Di Luar Tanggungan"</span></Typography>
            <Typography variant="body-xl" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Seperti karyawan yang butuh istirahat sejenak, halaman yang Anda cari sepertinya sedang tidak ada di tempat, telah dipindahkan, atau tautannya sudah kadaluarsa.</Typography>

            <Stack direction="vertical" gap={4} className="justify-center mb-16">
               <Link to="/">
                  <Button size="lg" className="px-8 rounded-2xl shadow-lg hover:shadow-primary-500/20 shadow-primary-500/10 text-lg">
                     Kembali ke Dashboard
                  </Button>
               </Link>
               <Button size="lg" variant="outline" onClick={() => window.history.back()} className="px-8 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  Kembali Sebelumnya
               </Button>
            </Stack>

            <Grid cols={4} gap={4} className="text-left max-w-4xl mx-auto">
               <Link to="/platform" className="p-6 bg-white dark:bg-slate-900 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/10 border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all group shadow-sm hover:shadow-md">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 dark:text-blue-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform gap-4">
                     <Home className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Produk</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 flex items-center gap-2">
                     Lihat solusi <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </Link>
               <Link to="/blog" className="p-6 bg-white dark:bg-slate-900 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/10 border border-slate-200 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-800 transition-all group shadow-sm hover:shadow-md">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 dark:text-purple-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform gap-4">
                     <FileText className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Blog</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 flex items-center gap-2">
                     Baca wawasan <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </Link>
               <Link to="/contact" className="p-6 bg-white dark:bg-slate-900 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/10 border border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group shadow-sm hover:shadow-md">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 dark:text-emerald-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform gap-4">
                     <HelpCircle className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Support</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 flex items-center gap-2">
                     Hubungi kami <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </Link>
               <Link to="/login" className="p-6 bg-white dark:bg-slate-900 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-900/10 border border-slate-200 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-800 transition-all group shadow-sm hover:shadow-md">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 dark:text-orange-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform gap-4">
                     <LogIn className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Login</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 flex items-center gap-2">
                     Masuk akun <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </Link>
            </Grid>
         </motion.div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
