import React, { useState } from 'react';
import PricingCalculator from '../components/PricingCalculator';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Lock, Award, Users } from 'lucide-react';
import Container from '../components/Container';

const PricingCalculatorPage: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-primary-500/30 overflow-hidden flex flex-col font-sans gap-4">
      <SEO
        title="Enterprise Pricing Estimator | BizOps"
        description="Kalkulasi investasi sistem ERP BizOps secara presisi. Sesuaikan modul, user, dan infrastruktur dengan kebutuhan enterprise Anda."
        canonical="https://bizops.id/tools/pricing-calculator"
      />

      <AnimatePresence mode="wait">
        {!isStarted ? (
          /* --- INTRO SECTION --- */
          <motion.section 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeInOut" } }}
            className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6 gap-4"
          >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] mix-blend-screen opacity-60" />
              <div className="absolute bottom-[-10%] right-0 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen opacity-40" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <Container size="5xl" className="relative z-10 text-center flex flex-col items-center justify-center h-full pb-20 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary-300 text-[11px] font-bold uppercase tracking-widest mb-8 hover:bg-white/10 transition-colors cursor-default shadow-lg"
              >
                 <Calculator className="w-3 h-3" /> Enterprise Cost Estimator
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white"
              >
                Transparansi Biaya <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">
                  Transformasi Digital
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
              >
                Dapatkan estimasi investasi akurat untuk implementasi BizOps ERP. Sesuaikan skala pengguna, modul, dan infrastruktur tanpa biaya tersembunyi.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-8"
              >
                <button 
                  onClick={() => setIsStarted(true)}
                  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-[#0B0F19] rounded-full text-base font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]"
                >
                  <span>Mulai Simulasi Harga</span>
                  <div className="bg-[#0B0F19]/10 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Lock className="w-4 h-4 text-blue-500" />
                    <span>Data Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Industry Leader</span>
                  </div>
                </div>
              </motion.div>
            </Container>
          </motion.section>
        ) : (
          /* --- CALCULATOR SECTION --- */
          <motion.div
            key="calculator"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col h-screen overflow-hidden bg-[#0B0F19] gap-4"
          >
            {/* Minimal Header */}
            <div className="flex-shrink-0 px-6 h-16 border-b border-white/5 flex items-center justify-between bg-[#0B0F19]/80 backdrop-blur-md z-20 gap-4">
               <button 
                 onClick={() => setIsStarted(false)} 
                 className="flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:text-white transition-colors group text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/5"
               >
                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                 <span className="hidden sm:inline">Back to Intro</span>
               </button>
               
               <div className="flex items-center gap-4">
                 <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    Live Estimation
                 </div>
               </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow overflow-hidden relative gap-4">
              <PricingCalculator />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PricingCalculatorPage;
