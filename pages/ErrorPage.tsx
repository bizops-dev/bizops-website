import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw, ArrowLeft, Mail } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Container from '../components/Container';

interface ErrorPageProps {
  error?: Error;
  resetErrorBoundary?: () => void;
  isDemo?: boolean; // For route display purposes
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, resetErrorBoundary, isDemo = false }) => {
  const handleReload = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans transition-colors gap-4">
      <SEO title="Error | Something Went Wrong" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Container size="2xl" className="relative z-10 w-full">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-xl border border-red-200 dark:border-red-900/50 gap-4"
        >
          <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400 dark:text-red-300" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Something Went Wrong
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-600 dark:text-slate-400 dark:text-slate-300 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Kami mendeteksi kesalahan teknis yang tidak terduga. Sistem kami telah mencatat kejadian ini untuk segera diperbaiki.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button onClick={handleReload} size="lg" className="shadow-lg shadow-red-500/20 bg-red-600 hover:bg-red-700 border-none text-white h-14 px-8 rounded-2xl">
             <RefreshCw className="w-4 h-4 mr-2" /> Try Again
          </Button>
          
          <Link to="/">
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">
              <Home className="w-4 h-4 mr-2" /> Return Home
            </Button>
          </Link>
        </motion.div>

        {/* Technical Details (Collapsible) */}
        {(isDemo || (error && process.env.NODE_ENV === 'development')) && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="max-w-xl mx-auto"
           >
              <details className="text-left bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer group">
                 <summary className="text-xs font-bold text-slate-500 dark:text-slate-400 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2 group-hover:text-red-500 dark:text-red-400 dark:text-red-300 transition-colors">
                    Technical Error Details
                 </summary>
                 <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-lg font-mono text-xs text-red-600 dark:text-red-400 dark:text-red-300 overflow-x-auto whitespace-pre-wrap">
                    {error?.toString() || "Error: Simulated crash for UI testing purposes."}
                    {error?.stack && `\n\n${error.stack}`}
                 </div>
              </details>
           </motion.div>
        )}
      </Container>
    </div>
  );
};

export default ErrorPage;

