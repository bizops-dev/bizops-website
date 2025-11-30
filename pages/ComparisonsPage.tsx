import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { comparisonsData } from '../data/comparisonData';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Calculator, 
  ChevronRight,
  Clock,
  Wrench,
  Lock,
  DollarSign,
  Settings,
  LayoutGrid,
  TrendingUp,
  Info
} from 'lucide-react';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const ComparisonsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string>('manual'); 

  const selectedData = comparisonsData[selectedId];
  const isBizOps = selectedId === 'bizops';

  // Helper for dynamic colors
  const getScoreColor = (score: number) => {
    if (score <= 20) return 'text-emerald-500'; // Optimal
    if (score > 70) return 'text-red-500';
    if (score > 50) return 'text-amber-500';
    return 'text-blue-500';
  };
  
  const getScoreBg = (score: number) => {
    if (score <= 20) return 'bg-emerald-500';
    if (score > 70) return 'bg-red-500';
    if (score > 50) return 'bg-amber-500';
    return 'bg-blue-500';
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pt-24 pb-32 relative overflow-hidden font-sans">
      <SEO 
        title="Architecture Comparison" 
        description="Analisis teknis arsitektur BizOps dibandingkan dengan Excel, Odoo, Bitrix, dan Legacy ERP." 
      />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <Container size="7xl" className="relative z-10">
        
        {/* HEADER */}
        <Container size="3xl" className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-300/50 dark:border-slate-700/50 backdrop-blur-sm"
            >
                <LayoutGrid className="w-4 h-4" /> System Architecture Comparison
            </motion.div>
            <Typography variant="h1" as="h1" className="font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">Upgrade Your <br/> Business Engine.</Typography>
            <Typography variant="body-xl" className="text-slate-600 dark:text-slate-400 leading-relaxed">Bandingkan arsitektur sistem Anda saat ini dengan <span className="text-slate-900 dark:text-white font-semibold">BizOps Evolution</span>. Lihat perbedaannya secara radikal.</Typography>
        </Container>

        <Grid cols={12} gap={8} className="items-start">
            
            {/* SIDEBAR SELECTION */}
            <Stack direction="vertical" gap={6} className="lg:col-span-3 lg:sticky lg:top-28">
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200/60 dark:border-slate-800/60 p-3 shadow-xl shadow-slate-200/20 dark:shadow-black/20">
                    <div className="px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Select System
                    </div>
                    <Stack direction="vertical" gap={2} className="overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                        {Object.values(comparisonsData).map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedId(item.id)}
                                className={`group flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 text-left min-w-[240px] lg:min-w-0 relative overflow-hidden ${
                                    selectedId === item.id 
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-[1.02]' 
                                    : 'hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                                    selectedId === item.id ? 'bg-white/20 text-white dark:bg-slate-900/10 dark:text-slate-900' : 'bg-slate-200/50 dark:bg-slate-800 text-slate-500'
                                }`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className={`text-sm font-bold ${
                                        selectedId === item.id ? 'text-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-300'
                                    }`}>
                                        {item.name}
                                    </div>
                                    {selectedId === item.id && (
                                      <div className="text-[10px] opacity-70 font-medium mt-0.5">Viewing Details</div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </Stack>
                </div>
                
                {/* CTA Mini */}
                <div className="hidden lg:block bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white text-center shadow-lg shadow-blue-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/20 transition-all"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                          <Calculator className="w-6 h-6 text-white" />
                      </div>
                      <Typography variant="h3" as="h3">Hitung Kerugian</Typography>
                      <Typography variant="body" className="leading-relaxed">Lihat berapa banyak biaya yang terbuang karena inefisiensi sistem lama.</Typography>
                      <Button 
                          size="sm" 
                          fullWidth 
                          onClick={() => navigate('/tools/roi-calculator')}
                          className="bg-white text-blue-700 hover:bg-blue-50 border-none font-bold"
                      >
                          Buka Kalkulator ROI
                      </Button>
                    </div>
                </div>
            </Stack>

            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-9">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* 1. HERO ANALYSIS CARD */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                             {/* Dynamic Gradient based on score */}
                             <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none opacity-20 ${getScoreBg(selectedData.bottleneckScore)}`}></div>

                            <div className="relative z-10">
                                <Stack direction="vertical" gap={10} className="items-start mb-12">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm ${
                                                selectedData.bottleneckScore <= 20
                                                ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400'
                                                : selectedData.bottleneckScore > 70 
                                                ? 'bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400' 
                                                : 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400'
                                            }`}>
                                                {selectedData.bottleneckLabel}
                                            </span>
                                        </div>
                                        <Typography variant="h2" as="h2" className="font-extrabold text-slate-900 dark:text-white leading-tight">"{selectedData.verdict}"</Typography>
                                        <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed">{selectedData.description}</Typography>
                                    </div>

                                    {/* Score Meter */}
                                    <div className="flex-shrink-0 mx-auto md:mx-0 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 backdrop-blur-sm">
                                        <div className="relative w-40 h-40 flex items-center justify-center">
                                            <svg className="w-full h-full transform -rotate-90 drop-shadow-lg">
                                                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-200 dark:text-slate-700/50" />
                                                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" 
                                                    className={`${getScoreColor(selectedData.bottleneckScore)} transition-all duration-1000 ease-out`}
                                                    strokeDasharray={440}
                                                    strokeDashoffset={440 - (440 * selectedData.bottleneckScore) / 100}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="text-4xl font-extrabold text-slate-900 dark:text-white">{selectedData.bottleneckScore}</div>
                                                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">Bottleneck</div>
                                            </div>
                                        </div>
                                    </div>
                                </Stack>
                                
                                {/* 2. STRATEGIC METRICS GRID */}
                                <Grid cols={5} gap={4} className="pt-10 border-t border-slate-100 dark:border-slate-800">
                                    {[
                                      { icon: Clock, label: "Time to Value", value: selectedData.ttv },
                                      { icon: DollarSign, label: "3-Year TCO", value: selectedData.avgTCO },
                                      { icon: Wrench, label: "Maintenance", value: selectedData.maintenance },
                                      { icon: Settings, label: "Flexibility", value: selectedData.customizability },
                                      { icon: Lock, label: "Security", value: selectedData.securityLevel },
                                    ].map((metric, idx) => (
                                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
                                          <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2 group-hover:text-primary-500 transition-colors">
                                            <metric.icon className="w-3.5 h-3.5" /> {metric.label}
                                          </div>
                                          <div className="font-bold text-slate-900 dark:text-white text-sm">{metric.value}</div>
                                      </div>
                                    ))}
                                </Grid>
                            </div>
                        </div>

                        {/* 3. COMPARISON LIST (WIDE STACKED) */}
                        <Stack direction="vertical" gap={6}>
                            <div className="flex items-center justify-between px-2">
                                <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white"><LayoutGrid className="w-5 h-5 text-primary-500" /> Detail Perbandingan</Typography>
                            </div>

                            {selectedData.points.map((point, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 md:p-8 hover:shadow-xl hover:border-primary-500/20 transition-all duration-300 group relative overflow-hidden">
                                    <Grid cols={12} gap={8} className="items-center relative z-10">
                                        
                                        {/* Col 1: Feature & Limit */}
                                        <Stack direction="vertical" gap={4} className="md:col-span-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-sm">
                                                   {idx + 1}
                                                </div>
                                                <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white">{point.feature}</Typography>
                                            </div>
                                            
                                            <div className={`p-4 rounded-xl border ${isBizOps ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/20' : 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20'}`}>
                                                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 ${isBizOps ? 'text-blue-500' : 'text-red-500'}`}>
                                                    {isBizOps ? <Info className="w-3 h-3" /> : <XCircle className="w-3 h-3" />} 
                                                    {isBizOps ? 'Standard Capability' : 'Current Limit'}
                                                </div>
                                                <Typography variant="caption" className="text-slate-700 dark:text-slate-300 leading-relaxed">{point.them}</Typography>
                                            </div>
                                        </Stack>

                                        {/* Arrow */}
                                        <div className="hidden md:flex md:col-span-1 justify-center">
                                            <ArrowRight className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                                        </div>

                                        {/* Col 2: BizOps Solution */}
                                        <Grid cols={2} gap={6} className="md:col-span-7">
                                            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-900/20 relative">
                                                <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                    <CheckCircle2 className="w-3 h-3" /> {isBizOps ? 'BizOps Advantage' : 'BizOps Solution'}
                                                </div>
                                                <Typography variant="body" className="text-slate-900 dark:text-white leading-relaxed">{point.us}</Typography>
                                            </div>
                                            
                                            <div className="flex flex-col justify-center pl-4 border-l border-slate-100 dark:border-slate-800">
                                                <div className="flex gap-2 items-start">
                                                   <div className="mt-0.5">
                                                     <TrendingUp className="w-4 h-4 text-blue-500" />
                                                   </div>
                                                   <div>
                                                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Business Impact</div>
                                                       <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">"{point.impact}"</Typography>
                                                   </div>
                                                </div>
                                            </div>
                                        </Grid>

                                    </Grid>
                                </div>
                            ))}
                        </Stack>

                        {/* 4. WHY UPGRADE CARD (Hide for BizOps) */}
                        {!isBizOps && (
                         <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mt-12">
                             <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                             
                             <Grid cols={2} gap={12} className="relative z-10 items-center">
                                <div>
                                   <Typography variant="h3" as="h3" className="font-bold"><AlertTriangle className="w-6 h-6 text-amber-500" /> Why Upgrade Now?</Typography>
                                   <Typography variant="body" className="text-slate-400 leading-relaxed">Sistem lama Anda memiliki keterbatasan yang menahan laju pertumbuhan. Lihat daftar di samping untuk mengetahui apa yang menghambat Anda saat ini.</Typography>
                                   <Button 
                                      onClick={() => navigate('/tools/roi-calculator')}
                                      className="bg-white text-slate-900 dark:text-white hover:bg-slate-200 border-none font-bold shadow-lg shadow-white/10"
                                      size="lg"
                                   >
                                      <Calculator className="w-4 h-4 mr-2" /> Hitung Nominal Kerugian
                                   </Button>
                                </div>
                                
                                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                                   <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Identified Bottlenecks</div>
                                   <ul className="space-y-4">
                                      {selectedData.limitations.map((lim, idx) => (
                                          <li key={idx} className="flex gap-4 text-sm text-slate-200 items-start">
                                              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <XCircle className="w-4 h-4 text-red-400" />
                                              </div>
                                              <span className="leading-relaxed font-medium">{lim}</span>
                                          </li>
                                      ))}
                                  </ul>
                                </div>
                             </Grid>
                         </div>
                        )}

                        {/* MOBILE CTA */}
                        <div className="lg:hidden mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center shadow-xl">
                            <Typography variant="h3" as="h3">Hitung ROI Upgrade</Typography>
                            <Typography variant="caption">Lihat berapa banyak biaya yang bisa dihemat.</Typography>
                            <Button fullWidth onClick={() => navigate('/tools/roi-calculator')} className="bg-white text-blue-700 hover:bg-blue-50 border-none font-bold">
                                Buka Kalkulator ROI
                            </Button>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>

        </Grid>

      </Container>
    </div>
  );
};

export default ComparisonsPage;
