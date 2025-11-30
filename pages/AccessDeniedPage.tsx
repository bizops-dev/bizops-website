import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Lock } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Container from '../components/Container';

const AccessDeniedPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans transition-colors gap-4">
      <SEO title="403 Access Denied | Forbidden" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/20 dark:bg-slate-800/20 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Container size="2xl" className="relative z-10 w-full">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 mx-auto mb-8"
        >
           <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-[2rem] transform rotate-6"></div>
           <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[2rem] flex items-center justify-center shadow-xl border border-slate-200 dark:border-slate-800 gap-4">
              <Lock className="w-10 h-10 text-slate-400 dark:text-slate-500" />
           </div>
           <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white border-2 border-white dark:border-slate-950 shadow-lg gap-4">
              <span className="font-bold text-xs">403</span>
           </div>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Access Denied
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-10 leading-relaxed"
        >
          Anda tidak memiliki izin untuk mengakses halaman ini. Ini mungkin area terbatas untuk Administrator atau Partner level tertentu.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/login">
            <Button size="lg" className="h-14 px-8 rounded-2xl shadow-lg">
               Login with Different Account
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">
              <ArrowLeft className="w-4 h-4 mr-2" /> Go Back Home
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default AccessDeniedPage;

