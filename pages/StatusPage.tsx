import React, { useState } from 'react';
import { statusData } from '../data/content';
import Button from '../components/Button';
import { 
  CheckCircle, AlertTriangle, Clock, Server, 
  Activity, Database, Cloud, Bell, RefreshCw, 
  BarChart3, Wifi
} from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Stack from '../components/Stack';

const StatusPage: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  // Mock Uptime Data (90 days)
  const uptimeDays = Array.from({ length: 90 }, (_, i) => ({
    status: Math.random() > 0.98 ? 'incident' : 'operational', // 2% chance of incident
    date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toLocaleDateString()
  }));

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      <SEO title="System Status | BizOps Service Health" description="Real-time status monitoring for BizOps API, Dashboard, and Cloud Services." />

      {/* --- HERO HEADER --- */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-32 pb-16">
         <Container size="7xl" className="text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8 relative"
            >
               <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping"></div>
               <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 relative z-10" />
            </motion.div>
            
            <Typography variant="h1" as="h1" className="font-bold text-slate-900 dark:text-white">{statusData.currentStatus}</Typography>
            <Typography variant="body-lg" className="text-slate-500 dark:text-slate-400">All systems are running smoothly. No incidents reported today.</Typography>

            <div className="inline-flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700">
               <span className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Updated: {statusData.lastUpdated}
               </span>
               <span className="w-px h-4 bg-slate-300 dark:bg-slate-600"></span>
               <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-500" /> API Latency: <span className="text-slate-900 dark:text-white">{statusData.apiResponseTime}</span>
               </span>
            </div>
         </Container>
      </div>

      <Container size="7xl" className="py-12 space-y-12">
        
        {/* --- UPTIME HISTORY --- */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
           <Stack direction="row" gap={4} align="end" justify="between" className="mb-6">
              <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white"><BarChart3 className="w-5 h-5 text-slate-400" /> Uptime History <Typography variant="caption" className="text-slate-500">90 Days</Typography></Typography>
              <span className="text-green-600 dark:text-green-400 font-bold text-lg">99.99%</span>
           </Stack>
           
           {/* Visualizer Bars */}
           <Stack direction="row" gap={4} align="end" justify="between" className="h-12 mb-2">
              {uptimeDays.map((day, i) => (
                 <div 
                    key={i}
                    title={day.date}
                    className={`flex-1 rounded-sm transition-all hover:scale-y-125 cursor-help ${
                       day.status === 'operational' 
                       ? 'bg-green-500 h-full opacity-80 hover:opacity-100' 
                       : 'bg-amber-500 h-[60%]'
                    }`}
                 ></div>
              ))}
           </Stack>
           <Stack direction="row" gap={4} justify="between" className="text-xs text-slate-400 font-medium">
              <span>90 days ago</span>
              <span>Today</span>
           </Stack>
        </div>

        {/* --- SYSTEM COMPONENTS --- */}
        <Stack direction="col" gap={6}>
           <Typography variant="h3" as="h3">System Metrics</Typography>
           
           {/* Core Services */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                 <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white"><Server className="w-4 h-4 text-slate-500" /> Platform Services</Typography>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                 {statusData.systems.map((sys, idx) => (
                    <div key={idx} className="p-5 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                       <Stack direction="row" gap={4} align="center">
                          <div className={`w-2 h-2 rounded-full ${sys.status === 'Operational' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-amber-500'}`}></div>
                          <div>
                             <Typography variant="h5" as="h5" className="font-semibold text-slate-900 dark:text-white">{sys.name}</Typography>
                             <Typography variant="body" className="text-slate-500 dark:text-slate-400">{sys.desc}</Typography>
                          </div>
                       </Stack>
                       <div className="text-right">
                          <Typography variant="caption" className="text-green-600 dark:text-green-400">{sys.status}</Typography>
                          <span className="text-[10px] text-slate-400">{sys.uptime} uptime</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Third Party */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                 <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white"><Cloud className="w-4 h-4 text-slate-500" /> Third-Party Dependencies</Typography>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                 {statusData.thirdParty.map((sys, idx) => (
                    <div key={idx} className="p-5 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                       <Stack direction="row" gap={4} align="center">
                          <div className={`w-2 h-2 rounded-full ${sys.status === 'Operational' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-amber-500'}`}></div>
                          <Typography variant="h5" as="h5" className="font-semibold text-slate-900 dark:text-white">{sys.name}</Typography>
                       </Stack>
                       <Typography variant="caption" className="text-green-600 dark:text-green-400">{sys.status}</Typography>
                    </div>
                 ))}
              </div>
           </div>
        </Stack>

        {/* --- INCIDENTS --- */}
        <div>
           <Typography variant="h3" as="h3">Past Incidents</Typography>
           <Stack direction="col" gap={4}>
              {statusData.incidents.map((inc, idx) => (
                 <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-900/50 transition-colors">
                    <Stack direction="col" gap={4} className="sm:items-center justify-between mb-3">
                       <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white"><AlertTriangle className="w-4 h-4 text-amber-500" /> {inc.title}</Typography>
                       <Typography variant="caption" className="text-slate-500">{inc.date}</Typography>
                    </Stack>
                    <Typography variant="caption" className="text-slate-600 dark:text-slate-400">{inc.desc}</Typography>
                    <Stack direction="row" gap={4} align="center" className="pl-6 ml-2">
                       <Typography variant="caption" className="text-green-600 dark:text-green-400">Resolved</Typography>
                       <Typography variant="caption" className="text-slate-500">Duration: {inc.duration}</Typography>
                    </Stack>
                 </div>
              ))}
           </Stack>
        </div>

        {/* --- SUBSCRIBE CTA --- */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
           <Container className="relative z-10">
              <Bell className="w-8 h-8 mx-auto mb-4 text-primary-400" />
              <Typography variant="h3" as="h3">Get Status Updates</Typography>
              <Typography variant="caption" className="text-slate-400">Subscribe to get email notifications whenever BizOps creates, updates or resolves an incident.</Typography>
              
              {!subscribed ? (
                 <Stack direction="row" gap={2}>
                    <input 
                       type="email" 
                       placeholder="user@company.com" 
                       className="flex-1 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary-500 outline-none text-sm"
                    />
                    <Button onClick={() => setSubscribed(true)} size="sm" className="whitespace-nowrap">Subscribe</Button>
                 </Stack>
              ) : (
                 <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg text-sm font-bold border border-green-500/30"
                 >
                    ✓ Subscribed successfully!
                 </motion.div>
              )}
           </Container>
        </div>

      </Container>
    </div>
  );
};

export default StatusPage;
