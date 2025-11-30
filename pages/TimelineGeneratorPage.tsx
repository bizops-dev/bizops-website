import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { 
  Calendar, 
  Users, 
  Database, 
  CheckSquare, 
  Rocket, 
  ArrowRight,
  AlertTriangle,
  FileText,
  BarChart3,
  Download,
  RefreshCw,
  ClipboardList,
  Box,
  ShieldAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { calculateTimeline, TimelineInput } from '../data/timelineData';
import Typography from '../components/Typography';

const TimelineGeneratorPage: React.FC = () => {
  const [step, setStep] = useState<'input' | 'result'>('input');
  const [input, setInput] = useState<TimelineInput>({
    employeeCount: 50,
    modules: ['finance', 'inventory'],
    dataReadiness: 'ready',
    teamAvailability: 'full',
    customizationLevel: 'none'
  });
  
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const result = useMemo(() => calculateTimeline(input), [input]);

  const handleGenerate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep('result');
  };

  const togglePhase = (id: string) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  // Helper to format weeks
  const formatWeeks = (days: number) => {
    const weeks = Math.ceil(days / 5);
    return `${weeks} Minggu`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pt-24 pb-24 relative overflow-hidden">
      <SEO 
        title="Implementation Timeline Generator" 
        description="Buat rencana proyek implementasi ERP yang realistis dalam hitungan detik." 
      />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-200 dark:border-blue-800">
              <Calendar className="w-4 h-4" /> Project Planner
           </div>
           <Typography variant="h1" as="h1" className="font-bold text-slate-900 dark:text-white leading-tight">Estimasi Waktu Implementasi <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Secara Realistis</span></Typography>
           <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Setiap perusahaan berbeda. Masukkan parameter proyek Anda untuk mendapatkan Timeline & Resource Plan yang akurat.</Typography>
        </div>

        <AnimatePresence mode="wait">
          {step === 'input' ? (
            <motion.div 
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
            >
               <div className="grid md:grid-cols-2 gap-10">
                  {/* Col 1 */}
                  <div className="space-y-8">
                      <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                             <Users className="w-4 h-4 text-primary-500" /> Skala Perusahaan (Karyawan)
                          </label>
                          <input 
                            type="range" min="10" max="1000" step="10"
                            value={input.employeeCount}
                            onChange={(e) => setInput({...input, employeeCount: parseInt(e.target.value)})}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                          />
                          <div className="flex justify-between mt-2 text-xs font-medium text-slate-500">
                             <span>Small (10)</span>
                             <span className="text-primary-600 font-bold text-sm">{input.employeeCount} Users</span>
                             <span>Enterprise (1000+)</span>
                          </div>
                      </div>

                      <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                             <Database className="w-4 h-4 text-amber-500" /> Kesiapan Data Master
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                             {[
                               { id: 'ready', label: 'Rapi (Excel)', desc: 'Siap import' },
                               { id: 'partial', label: 'Parsial', desc: 'Butuh cleansing' },
                               { id: 'messy', label: 'Berantakan', desc: 'Butuh overhaul' },
                               { id: 'hardcopy', label: 'Hardcopy', desc: 'Input manual' },
                             ].map((opt) => (
                                <button
                                   key={opt.id}
                                   onClick={() => setInput({...input, dataReadiness: opt.id as any})}
                                   className={`p-3 rounded-xl border text-left transition-all ${
                                      input.dataReadiness === opt.id 
                                      ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 ring-1 ring-amber-500' 
                                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                                   }`}
                                >
                                   <div className="font-bold text-sm">{opt.label}</div>
                                   <div className="text-[10px] opacity-80">{opt.desc}</div>
                                </button>
                             ))}
                          </div>
                      </div>
                  </div>

                  {/* Col 2 */}
                  <div className="space-y-8">
                      <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                             <CheckSquare className="w-4 h-4 text-green-500" /> Ketersediaan Tim Internal
                          </label>
                          <div className="space-y-3">
                             {[
                               { id: 'full', label: 'Dedicated PIC', desc: 'Ada 1 orang fokus penuh mengawal proyek.' },
                               { id: 'partial', label: 'Part-Time', desc: 'Tim sibuk, hanya bisa luangkan waktu 2-3 jam/hari.' },
                               { id: 'none', label: 'Sangat Sibuk', desc: 'Tidak ada waktu khusus, sambil kerja operasional.' },
                             ].map((opt) => (
                                <button
                                   key={opt.id}
                                   onClick={() => setInput({...input, teamAvailability: opt.id as any})}
                                   className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                                      input.teamAvailability === opt.id 
                                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 ring-1 ring-green-500' 
                                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                                   }`}
                                >
                                   <div>
                                      <div className="font-bold text-sm">{opt.label}</div>
                                      <div className="text-[10px] opacity-80">{opt.desc}</div>
                                   </div>
                                   {input.teamAvailability === opt.id && <CheckSquare className="w-4 h-4" />}
                                </button>
                             ))}
                          </div>
                      </div>

                      <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                             <FileText className="w-4 h-4 text-purple-500" /> Kebutuhan Kustomisasi
                          </label>
                          <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                             {['none', 'minor', 'major'].map((level) => (
                                <button
                                   key={level}
                                   onClick={() => setInput({...input, customizationLevel: level as any})}
                                   className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                                      input.customizationLevel === level 
                                      ? 'bg-white dark:bg-slate-700 shadow text-primary-600 dark:text-white' 
                                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                                   }`}
                                >
                                   {level}
                                </button>
                             ))}
                          </div>
                      </div>
                  </div>
               </div>

               <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <Button onClick={handleGenerate} size="lg" className="gap-2 shadow-lg shadow-primary-500/20">
                     Generate Timeline Project <ArrowRight className="w-4 h-4" />
                  </Button>
               </div>
            </motion.div>
          ) : (
            /* --- RESULT VIEW --- */
            <motion.div 
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
               {/* Summary Cards */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                     <div className="text-xs font-bold text-slate-400 uppercase mb-2">Total Durasi</div>
                     <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        {formatWeeks(result.totalDays)}
                     </div>
                     <Typography variant="body" className="text-slate-500">Estimasi Go-Live realistis.</Typography>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                     <div className="text-xs font-bold text-slate-400 uppercase mb-2">Tingkat Kompleksitas</div>
                     <div className="text-3xl font-extrabold capitalize text-primary-600 dark:text-primary-400">
                        {result.complexity}
                     </div>
                     <Typography variant="body" className="text-slate-500">Berdasarkan skala & kustomisasi.</Typography>
                  </div>
                  <div className={`p-6 rounded-2xl border shadow-sm ${
                     result.riskFactor === 'high' 
                     ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30' 
                     : 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-900/30'
                  }`}>
                     <div className={`text-xs font-bold uppercase mb-2 ${result.riskFactor === 'high' ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`}>Faktor Risiko</div>
                     <div className={`text-3xl font-extrabold capitalize ${result.riskFactor === 'high' ? 'text-red-700 dark:text-red-300' : 'text-emerald-700 dark:text-emerald-300'}`}>
                        {result.riskFactor === 'high' ? 'Tinggi' : 'Rendah'}
                     </div>
                     <Typography variant="body">{result.riskFactor === 'high' ? 'Perbaiki data/tim untuk mengurangi risiko.' : 'Kondisi proyek optimal.'}</Typography>
                  </div>
               </div>

               {/* INTERACTIVE GANTT CHART */}
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-8 overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                     <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white"><BarChart3 className="w-5 h-5 text-primary-500" /> Project Schedule</Typography>
                     <div className="text-sm text-slate-500 flex gap-4">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> Planning</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded-full"></div> Data</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div> Launch</div>
                     </div>
                  </div>

                  <div className="relative overflow-x-auto pb-4">
                     <div className="min-w-[800px]">
                        {/* Weeks Header */}
                        <div className="flex border-b border-slate-100 dark:border-slate-800 pb-2 mb-4">
                           <div className="w-1/4 font-bold text-xs text-slate-400 uppercase">Phase & Detail</div>
                           <div className="w-3/4 flex relative">
                              {Array.from({ length: result.totalWeeks + 2 }).map((_, i) => (
                                 <div key={i} className="flex-1 text-center text-[10px] text-slate-400 border-l border-dashed border-slate-100 dark:border-slate-800">
                                    W{i+1}
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Phases Bars */}
                        <div className="space-y-6">
                           {result.phases.map((phase) => (
                              <div key={phase.id} className="group">
                                 <div 
                                    className="flex items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg p-2 -mx-2 transition-colors"
                                    onClick={() => togglePhase(phase.id)}
                                 >
                                    <div className="w-1/4 pr-4">
                                       <div className="flex items-center justify-between">
                                          <div className="font-bold text-sm text-slate-800 dark:text-white">{phase.title}</div>
                                          {expandedPhase === phase.id ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                                       </div>
                                       <div className="text-[10px] text-slate-500">{phase.duration} Hari Kerja</div>
                                    </div>
                                    <div className="w-3/4 relative h-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                       <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: `${(phase.duration / (result.totalDays + 10)) * 100}%` }}
                                          transition={{ duration: 1, delay: 0.2 }}
                                          className={`absolute top-1 bottom-1 rounded-md ${phase.color} opacity-90 hover:opacity-100 transition-opacity shadow-sm flex items-center px-2`}
                                          style={{ 
                                             left: `${(phase.startDay / (result.totalDays + 10)) * 100}%` 
                                          }}
                                       >
                                          {phase.duration > 3 && <span className="text-[10px] font-bold text-white truncate">{phase.duration}d</span>}
                                       </motion.div>
                                    </div>
                                 </div>

                                 {/* EXPANDED DETAIL PANEL */}
                                 <AnimatePresence>
                                    {expandedPhase === phase.id && (
                                       <motion.div 
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden"
                                       >
                                          <div className="mt-2 ml-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 grid md:grid-cols-4 gap-6">
                                             
                                             {/* Preparation */}
                                             <div>
                                                <Typography variant="h4" as="h4" className="font-bold text-slate-500 tracking-wider"><ClipboardList className="w-3 h-3" /> Preparation</Typography>
                                                <ul className="space-y-1">
                                                   {phase.preparation.map((item, i) => (
                                                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                                         <span className="mt-1 w-1 h-1 rounded-full bg-slate-400"></span> {item}
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>

                                             {/* Roles */}
                                             <div>
                                                <Typography variant="h4" as="h4" className="font-bold text-slate-500 tracking-wider"><Users className="w-3 h-3" /> Key Roles</Typography>
                                                <ul className="space-y-1">
                                                   {phase.roles.map((item, i) => (
                                                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                                         <span className="mt-1 w-1 h-1 rounded-full bg-blue-400"></span> {item}
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>

                                             {/* Deliverables */}
                                             <div>
                                                <Typography variant="h4" as="h4" className="font-bold text-slate-500 tracking-wider"><Box className="w-3 h-3" /> Deliverables</Typography>
                                                <ul className="space-y-1">
                                                   {phase.deliverables.map((item, i) => (
                                                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                                         <CheckSquare className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" /> {item}
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>

                                             {/* Risks */}
                                             <div>
                                                <Typography variant="h4" as="h4" className="font-bold text-slate-500 tracking-wider"><ShieldAlert className="w-3 h-3 text-amber-500" /> Risk Watch</Typography>
                                                <ul className="space-y-1">
                                                   {phase.risks.map((item, i) => (
                                                      <li key={i} className="text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2">
                                                         <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" /> {item}
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>

                                          </div>
                                       </motion.div>
                                    )}
                                 </AnimatePresence>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button 
                     variant="outline"
                     onClick={() => setStep('input')}
                     className="gap-2"
                  >
                     <RefreshCw className="w-4 h-4" /> Ubah Parameter
                  </Button>
                  <Button 
                     onClick={() => window.print()} 
                     className="gap-2 shadow-lg shadow-primary-500/20"
                  >
                     <Download className="w-4 h-4" /> Download Proposal PDF
                  </Button>
               </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default TimelineGeneratorPage;
