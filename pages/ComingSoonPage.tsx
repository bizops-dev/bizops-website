import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Construction, ArrowLeft, Mail, Bell, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Input } from '../components/Form';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Typography from '../components/Typography';

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans transition-colors">
      <SEO title="Coming Soon | Fitur Dalam Pengembangan" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-gradient-to-br from-primary-100 to-indigo-100 dark:from-primary-900/30 dark:to-indigo-900/30 rounded-[2rem] flex items-center justify-center mb-10 mx-auto shadow-xl border border-white/50 dark:border-white/10"
        >
          <Construction className="w-10 h-10 text-primary-600 dark:text-primary-400" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Fitur Ini Sedang <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">"Under Construction"</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Tim engineering kami sedang bekerja keras merakit fitur ini. Kami ingin memastikan semuanya sempurna sebelum diluncurkan untuk Anda.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 mb-12 max-w-md mx-auto relative overflow-hidden"
        >
           {subscribed ? (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600 dark:text-green-400">
                   <Bell className="w-6 h-6" />
                </div>
                <Typography variant="h3" as="h3">Terima Kasih!</Typography>
                <p className="text-sm text-slate-500 dark:text-slate-400">Kami akan memberi tahu Anda segera setelah fitur ini siap.</p>
             </motion.div>
           ) : (
             <>
               <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary-500" /> Beritahu saya saat siap
               </h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Dapatkan notifikasi prioritas saat fitur ini live.</p>
               <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <Input 
                    placeholder="email@perusahaan.com" 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-center"
                  />
                  <Button fullWidth type="submit" className="shadow-lg shadow-primary-500/20">
                     Notify Me
                  </Button>
               </form>
             </>
           )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button variant="outline" className="h-12 px-6 rounded-xl border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="h-12 px-6 rounded-xl text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/10 w-full sm:w-auto">
              Hubungi Sales <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoonPage;

