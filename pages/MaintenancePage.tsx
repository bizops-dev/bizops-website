import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Clock, Twitter, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Stack from '../components/Stack';

const MaintenancePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0B1120] text-white relative overflow-hidden font-sans">
      <SEO title="Maintenance | System Update" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse-slow"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Container size="2xl" className="relative z-10 w-full">
        <motion.div 
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center mb-10 mx-auto shadow-2xl border border-white/10"
        >
          <Hammer className="w-12 h-12 text-blue-400" />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-8"
        >
           <Clock className="w-3 h-3" /> Scheduled Maintenance
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          We'll be back soon.
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          Sistem sedang melakukan pembaruan infrastruktur terjadwal untuk meningkatkan performa dan keamanan. Estimasi waktu selesai: <strong>2 Jam</strong>.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 max-w-md mx-auto"
        >
           <Typography variant="h3" as="h3">Need urgent help?</Typography>
           <Stack direction="row" gap={4} justify="center">
              <a href="mailto:support@bizops.id" className="flex flex-col items-center gap-2 group">
                 <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                    <Mail className="w-5 h-5" />
                 </div>
                 <Typography variant="caption" className="text-slate-400">Email</Typography>
              </a>
              <a href="#" className="flex flex-col items-center gap-2 group">
                 <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#1DA1F2] group-hover:text-white transition-all">
                    <Twitter className="w-5 h-5" />
                 </div>
                 <Typography variant="caption" className="text-slate-400">Twitter</Typography>
              </a>
              <a href="#" className="flex flex-col items-center gap-2 group">
                 <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                 </div>
                 <Typography variant="caption" className="text-slate-400">LinkedIn</Typography>
              </a>
           </Stack>
        </motion.div>
      </Container>
    </div>
  );
};

export default MaintenancePage;

