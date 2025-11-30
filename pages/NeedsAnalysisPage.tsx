import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Settings,
  Crosshair,
  ChevronRight,
  RefreshCw,
  Download,
  Briefcase,
  Layers,
  Lightbulb,
  ArrowLeft,
  Building,
  Users,
  Server,
  Factory,
  ShoppingCart,
  HardHat,
  Coffee,
  Activity,
  GraduationCap,
  Globe,
  Search,
  Clock,
  Wallet,
  Puzzle,
  Network,
  GitMerge,
  FileWarning,
  BarChart,
  Calendar,
  Calculator,
  PieChart,
  TrendingUp,
  Mail,
  Phone
} from 'lucide-react';
import Button from '../components/Button';
import { 
  painPoints, 
  goals, 
  modules, 
  techStackOptions, 
  industries, 
  holisticIssues,
  timelines,
  budgets,
  serviceSolutions
} from '../data/needsAnalysisData';
import { useNavigate } from 'react-router-dom';
import { logger } from '../utils/logger';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Stack from '../components/Stack';
import Container from '../components/Container';

type StepType = 'intro' | 'context' | 'tech-stack' | 'operational-context' | 'pain-points' | 'goals' | 'expectations' | 'analyzing' | 'result';

const STEPS_ORDER: StepType[] = ['intro', 'context', 'tech-stack', 'operational-context', 'pain-points', 'goals', 'expectations', 'result'];

// --- ISOLATED COMPONENTS (Prevents Re-render Issues) ---

const ProgressBar = ({ step, displayStep, totalSteps }: { step: StepType, displayStep: number, totalSteps: number }) => {
  if (step === 'intro' || step === 'analyzing' || step === 'result') return null;
  const progress = (displayStep / totalSteps) * 100;
  
  return (
    <div className="fixed top-20 left-0 w-full h-1 bg-slate-900 z-50">
      <motion.div 
        className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

const StepLayout = ({ 
  title, 
  desc, 
  children, 
  prevStep, 
  nextStep, 
  disableNext, 
  setStep, 
  displayStep, 
  totalSteps,
  handleFinish
}: any) => (
  <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12 px-4">
    <ProgressBar step="context" displayStep={displayStep} totalSteps={totalSteps} />
    <Container size="4xl">
      <div className="mb-8">
         <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Step {displayStep} of {totalSteps}</div>
         <Typography variant="h2" as="h2" className="font-bold">{title}</Typography>
         <Typography variant="body" className="text-slate-400">{desc}</Typography>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 min-h-[400px]"
      >
        {children}
      </motion.div>

      <Stack direction="row" gap={4} justify="between" className="border-t border-white/10 pt-6">
         <button onClick={() => setStep(prevStep)} className="text-slate-500 hover:text-white flex items-center gap-2">
           <ArrowLeft className="w-4 h-4" /> Kembali
         </button>
         <Button 
           onClick={typeof nextStep === 'string' ? () => setStep(nextStep) : nextStep} 
           disabled={disableNext}
           className={disableNext ? 'opacity-50' : (nextStep === handleFinish ? 'bg-emerald-600 hover:bg-emerald-500' : '')}
         >
           {nextStep === handleFinish ? 'Lihat Hasil Analisis' : 'Lanjut'} 
           {nextStep !== handleFinish && <ChevronRight className="w-4 h-4 ml-2" />}
           {nextStep === handleFinish && <Search className="w-4 h-4 ml-2" />}
         </Button>
      </Stack>
    </Container>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const NeedsAnalysisPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<StepType>('intro');
  
  // Selections
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedHolisticIssues, setSelectedHolisticIssues] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');

  const [contextData, setContextData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    teamSize: '',
    industry: '',
    techStack: ''
  });

  // --- LOGIC ---
  const toggleSelection = (list: string[], item: string, setList: (l: string[]) => void, max: number = 10) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      if (list.length < max) {
        setList([...list, item]);
      }
    }
  };

  const currentStepIndex = STEPS_ORDER.indexOf(step);
  const totalSteps = STEPS_ORDER.length - 2; 
  const displayStep = currentStepIndex; 

  const getRecommendedModules = () => {
    const allTags = [
      ...selectedPainPoints, 
      ...selectedGoals, 
      ...selectedHolisticIssues, 
      contextData.techStack, 
      contextData.industry
    ];
    
    return modules.map(mod => {
      const matchCount = mod.relevance.filter(tag => allTags.includes(tag)).length;
      const industryBonus = mod.relevance.includes(contextData.industry) ? 3 : 0;
      const holisticBonus = mod.relevance.some(r => selectedHolisticIssues.includes(r)) ? 2 : 0;
      return { ...mod, matchScore: matchCount + industryBonus + holisticBonus };
    })
    .filter(mod => mod.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
  };

  const getRecommendedServices = () => {
    const allTags = [
      ...selectedPainPoints,
      ...selectedHolisticIssues,
      contextData.techStack
    ];

    return serviceSolutions.map(svc => {
       const matchCount = svc.relevance.filter(tag => allTags.includes(tag)).length;
       return { ...svc, matchScore: matchCount };
    })
    .filter(svc => svc.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 2); 
  };

  const handleFinish = () => {
    // Here you would typically send data to backend/CRM
    logger.log("Lead Data:", contextData); 
    setStep('analyzing');
    setTimeout(() => {
      setStep('result');
    }, 2500);
  };

  const handleReset = () => {
    setStep('intro');
    setSelectedPainPoints([]);
    setSelectedGoals([]);
    setSelectedHolisticIssues([]);
    setSelectedTimeline('');
    setSelectedBudget('');
    setContextData({
      name: '',
      company: '',
      email: '',
      phone: '',
      role: '',
      teamSize: '',
      industry: '',
      techStack: ''
    });
  };

  // --- RENDERERS ---

  if (step === 'intro') {
    return (
      <Stack direction="row" gap={4} align="center" className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px]" />
        
        <Container size="7xl" className="w-full relative z-10 pt-20 pb-12">
          <Grid cols={2} gap={12} className="items-center">
            
            {/* Left Column: Headline & CTA */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <Stack direction="row" gap={2} align="center" className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <Crosshair className="w-4 h-4" /> Solution Finder 2.0
              </div>
              
              <Typography variant="h1" as="h1" className="font-bold leading-tight tracking-tight">Temukan Solusi BizOps <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Yang Paling Tepat.</span></Typography>
              
              <Typography variant="body-lg" className="text-slate-400 leading-relaxed">Bingung mulai dari mana? Dapatkan <strong>Strategic Blueprint</strong> yang dipersonalisasi—mencakup rekomendasi software dan strategi implementasi (PPT) hanya dalam 2 menit.</Typography>
              
              <Stack direction="col" gap={4}>
                <Button onClick={() => setStep('context')} size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20 rounded-xl">
                  Mulai Diagnosa Gratis <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Stack>

              <Stack direction="row" gap={6} align="center" className="mt-8 text-sm text-slate-500">
                <Stack direction="row" gap={2} align="center">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Free Analysis
                </Stack>
                <Stack direction="row" gap={2} align="center">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> No Sign-up Required
                </Stack>
              </div>
            </motion.div>

            {/* Right Column: Feature Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Floating Cards */}
              <Grid cols={3} gap={5} className="relative z-10">
                {/* Card 1: Holistic */}
                <Stack direction="row" gap={4} align="start" className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <Typography variant="h3" as="h3">Holistic Diagnosis</Typography>
                    <Typography variant="caption" className="text-slate-400 leading-relaxed">Kami tidak hanya melihat software, tapi juga kesiapan tim (People) dan alur kerja (Process).</Typography>
                  </div>
                </div>

                {/* Card 2: Roadmap */}
                <Stack direction="row" gap={4} align="start" className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform translate-x-8 hover:translate-x-8 hover:-translate-y-1 transition-transform duration-300">
                   <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <Typography variant="h3" as="h3">Actionable Roadmap</Typography>
                    <Typography variant="caption" className="text-slate-400 leading-relaxed">Dapatkan timeline implementasi langkah demi langkah, dari Quick Win hingga Optimization.</Typography>
                  </div>
                </div>

                {/* Card 3: Difference */}
                <Stack direction="row" gap={4} align="start" className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform hover:-translate-y-1 transition-transform duration-300">
                   <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <Typography variant="h3" as="h3">Practical Solution</Typography>
                    <Typography variant="caption" className="text-slate-400 leading-relaxed">Berbeda dengan Maturity Assessment yang hanya memberi skor, kami memberi resep solusi.</Typography>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-500/20 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-emerald-500/20 rounded-full -z-10 animate-[spin_40s_linear_infinite_reverse]" />
            </motion.div>
          </Grid>
        </Container>
      </div>
    );
  }

  if (step === 'context') {
    return (
      <StepLayout
        title="Profil & Kontak"
        desc="Data ini digunakan untuk personalisasi laporan Anda."
        prevStep="intro"
        nextStep="tech-stack"
        disableNext={!contextData.company || !contextData.email}
        setStep={setStep}
        displayStep={displayStep}
        totalSteps={totalSteps}
        handleFinish={handleFinish}
      >
          <Stack direction="col" gap={5} className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <Grid cols={2} gap={5}>
              <div>
                <Typography variant="caption" className="block text-sm font-medium text-slate-400 mb-1.5">Nama Perusahaan</Typography>
                <input 
                  type="text" 
                  value={contextData.company}
                  onChange={(e) => setContextData({...contextData, company: e.target.value})}
                  autoFocus
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                  placeholder="cth. PT Maju Bersama"
                />
              </div>
              <div>
                <Typography variant="caption" className="block text-sm font-medium text-slate-400 mb-1.5">Nama Anda</Typography>
                <input 
                  type="text" 
                  value={contextData.name}
                  onChange={(e) => setContextData({...contextData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                  placeholder="cth. Budi Santoso"
                />
              </div>
            </Grid>

            <Grid cols={2} gap={5}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Bisnis
                </label>
                <input 
                  type="email" 
                  value={contextData.email}
                  onChange={(e) => setContextData({...contextData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                  placeholder="budi@perusahaan.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> WhatsApp (Opsional)
                </label>
                <input 
                  type="tel" 
                  value={contextData.phone}
                  onChange={(e) => setContextData({...contextData, phone: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                  placeholder="0812..."
                />
              </div>
            </Grid>

            <div>
              <Typography variant="caption" className="block text-sm font-medium text-slate-400 mb-3">Industri</Typography>
              <Grid cols={4} gap={3}>
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setContextData({...contextData, industry: ind.id})}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all h-24 text-center ${
                      contextData.industry === ind.id 
                        ? 'bg-blue-600/20 border-blue-500 text-blue-100' 
                        : 'bg-slate-800 border-transparent hover:bg-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <ind.icon className="w-6 h-6" />
                    <Typography variant="caption">{ind.label}</Typography>
                  </button>
                ))}
              </Grid>
            </div>
            <div>
              <Typography variant="caption" className="block text-sm font-medium text-slate-400 mb-2">Ukuran Tim</Typography>
              <Grid cols={4} gap={2}>
                {['< 50', '50-200', '200-1k', '> 1k'].map(size => (
                  <button
                    key={size}
                    onClick={() => setContextData({...contextData, teamSize: size})}
                    className={`px-2 py-2 rounded-lg text-sm font-medium transition-all ${
                      contextData.teamSize === size 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </Grid>
            </div>
          </Stack>
      </StepLayout>
    );
  }

  if (step === 'tech-stack') {
    return (
      <StepLayout
        title="Platform Teknologi"
        desc="Pilih opsi yang paling menggambarkan situasi sistem saat ini."
        prevStep="context"
        nextStep="operational-context"
        disableNext={!contextData.techStack}
        setStep={setStep}
        displayStep={displayStep}
        totalSteps={totalSteps}
        handleFinish={handleFinish}
      >
          <Grid cols={1} gap={3}>
            {techStackOptions.map((item) => {
              const isSelected = contextData.techStack === item.id;
              return (
                <div 
                  key={item.id}
                  onClick={() => setContextData({...contextData, techStack: item.id})}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 group relative overflow-hidden flex items-start gap-4 ${
                    isSelected 
                    ? 'bg-blue-900/20 border-blue-500 ring-1 ring-blue-500' 
                    : 'bg-slate-900/50 border-white/10 hover:border-blue-500/50 hover:bg-slate-900'
                  }`}
                >
                  <div className={`mt-1 p-2 rounded-lg shrink-0 ${isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-blue-400'}`}>
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography variant="h3" as="h3">{item.label}</Typography>
                    <Typography variant="caption" className="text-slate-500 leading-snug">{item.desc}</Typography>
                  </div>
                  {isSelected && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </Grid>
      </StepLayout>
    );
  }

  if (step === 'operational-context') {
    const techQuestions = holisticIssues.technology[contextData.techStack as keyof typeof holisticIssues.technology] || [];
    return (
      <StepLayout
        title="Konteks Operasional (PPT)"
        desc="Pilih isu-isu yang relevan di 3 pilar utama (People, Process, Technology)."
        prevStep="tech-stack"
        nextStep="pain-points"
        disableNext={false}
        setStep={setStep}
        displayStep={displayStep}
        totalSteps={totalSteps}
        handleFinish={handleFinish}
      >
          <Grid cols={3} gap={6}>
            {/* COLUMN 1: PEOPLE */}
            <div className="bg-slate-900/30 rounded-2xl p-6 border border-white/5">
                <Typography variant="h3" as="h3" className="font-bold text-slate-200"><Users className="w-5 h-5 text-blue-400" /> People & Culture</Typography>
                <Stack direction="col" gap={3}>
                    {holisticIssues.people.map((item) => {
                        const isSelected = selectedHolisticIssues.includes(item.id);
                        return (
                            <div key={item.id} onClick={() => toggleSelection(selectedHolisticIssues, item.id, setSelectedHolisticIssues)}
                                className={`p-3 rounded-xl border cursor-pointer transition-all text-sm ${isSelected ? 'bg-blue-900/30 border-blue-500/50 text-blue-100' : 'bg-slate-800/50 border-white/5 hover:bg-slate-800 text-slate-400'}`}>
                                <div className="font-medium mb-1">{item.label.split(':')[0]}</div>
                                <div className="text-xs opacity-70 leading-relaxed">{item.label.split(':')[1]}</div>
                            </div>
                        );
                    })}
                </Stack>
            </div>

            {/* COLUMN 2: PROCESS */}
            <div className="bg-slate-900/30 rounded-2xl p-6 border border-white/5">
                <Typography variant="h3" as="h3" className="font-bold text-slate-200"><GitMerge className="w-5 h-5 text-emerald-400" /> Process & SOP</Typography>
                <Stack direction="col" gap={3}>
                    {holisticIssues.process.map((item) => {
                        const isSelected = selectedHolisticIssues.includes(item.id);
                        return (
                            <div key={item.id} onClick={() => toggleSelection(selectedHolisticIssues, item.id, setSelectedHolisticIssues)}
                                className={`p-3 rounded-xl border cursor-pointer transition-all text-sm ${isSelected ? 'bg-emerald-900/30 border-emerald-500/50 text-emerald-100' : 'bg-slate-800/50 border-white/5 hover:bg-slate-800 text-slate-400'}`}>
                                <div className="font-medium mb-1">{item.label.split(':')[0]}</div>
                                <div className="text-xs opacity-70 leading-relaxed">{item.label.split(':')[1]}</div>
                            </div>
                        );
                    })}
                </Stack>
            </div>

            {/* COLUMN 3: TECHNOLOGY */}
            <div className="bg-slate-900/30 rounded-2xl p-6 border border-white/5">
                <Typography variant="h3" as="h3" className="font-bold text-slate-200"><Settings className="w-5 h-5 text-amber-400" /> Technology</Typography>
                <Stack direction="col" gap={3}>
                    {techQuestions.map((item) => {
                        const isSelected = selectedHolisticIssues.includes(item.id);
                        return (
                            <div key={item.id} onClick={() => toggleSelection(selectedHolisticIssues, item.id, setSelectedHolisticIssues)}
                                className={`p-3 rounded-xl border cursor-pointer transition-all text-sm ${isSelected ? 'bg-amber-900/30 border-amber-500/50 text-amber-100' : 'bg-slate-800/50 border-white/5 hover:bg-slate-800 text-slate-400'}`}>
                                <div className="font-medium mb-1">{item.label}</div>
                            </div>
                        );
                    })}
                </Stack>
            </div>
          </Grid>
      </StepLayout>
    );
  }

  if (step === 'pain-points') {
    return (
      <StepLayout
        title="Tantangan Operasional"
        desc="Masalah bisnis apa yang berdampak langsung pada bottom-line?"
        prevStep="operational-context"
        nextStep="goals"
        disableNext={false}
        setStep={setStep}
        displayStep={displayStep}
        totalSteps={totalSteps}
        handleFinish={handleFinish}
      >
          <Grid cols={2} gap={4}>
            {painPoints.map((item) => {
              const isSelected = selectedPainPoints.includes(item.id);
              return (
                <div 
                  key={item.id}
                  onClick={() => toggleSelection(selectedPainPoints, item.id, setSelectedPainPoints)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 group relative overflow-hidden ${
                    isSelected 
                    ? 'bg-red-900/20 border-red-500 ring-1 ring-red-500' 
                    : 'bg-slate-900/50 border-white/10 hover:border-red-500/50 hover:bg-slate-900'
                  }`}
                >
                  <Stack direction="row" gap={4} align="start" className="relative z-10">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-red-400'}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <Typography variant="h3" as="h3">{item.label}</Typography>
                      <Typography variant="caption" className="text-slate-500 leading-snug">{item.desc}</Typography>
                    </div>
                  </Stack>
                </div>
              );
            })}
          </Grid>
      </StepLayout>
    );
  }

  if (step === 'goals') {
    return (
      <StepLayout
        title="Target Strategis"
        desc="Pilih objektif utama untuk 6-12 bulan ke depan."
        prevStep="pain-points"
        nextStep="expectations"
        disableNext={selectedGoals.length === 0}
        setStep={setStep}
        displayStep={displayStep}
        totalSteps={totalSteps}
        handleFinish={handleFinish}
      >
          <Grid cols={2} gap={4}>
            {goals.map((item) => {
              const isSelected = selectedGoals.includes(item.id);
              return (
                <div 
                  key={item.id}
                  onClick={() => toggleSelection(selectedGoals, item.id, setSelectedGoals)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 group relative overflow-hidden ${
                    isSelected 
                    ? 'bg-emerald-900/20 border-emerald-500 ring-1 ring-emerald-500' 
                    : 'bg-slate-900/50 border-white/10 hover:border-emerald-500/50 hover:bg-slate-900'
                  }`}
                >
                  <Stack direction="row" gap={4} align="start" className="relative z-10">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-emerald-400'}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <Typography variant="h3" as="h3">{item.label}</Typography>
                      <Typography variant="caption" className="text-slate-500 leading-snug">{item.desc}</Typography>
                    </div>
                  </Stack>
                </div>
              );
            })}
          </Grid>
      </StepLayout>
    );
  }

  if (step === 'expectations') {
    return (
      <StepLayout
        title="Ekspektasi Proyek"
        desc="Bantu kami memahami timeline dan sumber daya yang Anda siapkan."
        prevStep="goals"
        nextStep={handleFinish}
        disableNext={!selectedTimeline || !selectedBudget}
        setStep={setStep}
        displayStep={displayStep}
        totalSteps={totalSteps}
        handleFinish={handleFinish}
      >
          <Stack direction="col" gap={8}>
            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Target Go-Live
              </label>
              <Grid cols={3} gap={3}>
                {timelines.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTimeline(item.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedTimeline === item.id 
                        ? 'bg-blue-600/20 border-blue-500 text-blue-100' 
                        : 'bg-slate-900/50 border-white/10 hover:bg-slate-900 hover:border-white/30 text-slate-400'
                    }`}
                  >
                    <div className="font-bold mb-1">{item.label}</div>
                    <div className="text-xs opacity-70">{item.desc}</div>
                  </button>
                ))}
              </Grid>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
                <Wallet className="w-4 h-4" /> Estimasi Budget Tahunan
              </label>
              <Grid cols={3} gap={3}>
                {budgets.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedBudget(item.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedBudget === item.id 
                        ? 'bg-blue-600/20 border-blue-500 text-blue-100' 
                        : 'bg-slate-900/50 border-white/10 hover:bg-slate-900 hover:border-white/30 text-slate-400'
                    }`}
                  >
                    <div className="font-bold mb-1">{item.label}</div>
                    <div className="text-xs opacity-70">{item.desc}</div>
                  </button>
                ))}
              </Grid>
            </div>
          </Stack>
      </StepLayout>
    );
  }

  if (step === 'analyzing') {
    return (
      <Stack direction="col" gap={4} align="center" justify="center" className="min-h-screen bg-slate-950 text-center relative overflow-hidden">
         <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-blue-500" />
          </motion.div>
          <Typography variant="h2" as="h2">Mengkurasi Solusi...</Typography>
          <Typography variant="body" className="text-slate-400">Menghubungkan {selectedPainPoints.length} tantangan bisnis dengan solusi PPT kami.</Typography>
      </div>
    );
  }

  if (step === 'result') {
    const recommended = getRecommendedModules();
    const recommendedServices = getRecommendedServices();
    const selectedTech = techStackOptions.find(t => t.id === contextData.techStack);
    const selectedIndustry = industries.find(i => i.id === contextData.industry);
    const timelineLabel = timelines.find(t => t.id === selectedTimeline)?.label;

    return (
      <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12 px-4 print:bg-white print:pt-0 print:text-black">
        <Container size="6xl">
          {/* Header */}
          <Stack direction="col" gap={4} align="start" justify="between" className="mb-10 border-b border-white/10 pb-8 print:border-gray-300">
             <div>
                <div className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2">Confidential Report</div>
                <Typography variant="h1" as="h1">Holistic Solution Blueprint</Typography>
                <Typography variant="body" className="text-slate-400">Rekomendasi strategis untuk {contextData.company}.</Typography>
             </div>
             <Stack direction="row" gap={3} className="mt-4 md:mt-0 print:hidden">
                <Button variant="outline-white" onClick={() => window.print()} className="gap-2">
                  <Download className="w-4 h-4" /> Save PDF
                </Button>
                <Button onClick={() => navigate('/contact')} className="gap-2">
                   Diskusi Proposal <ArrowRight className="w-4 h-4" />
                </Button>
             </div>
          </Stack>

          <Grid cols={12} gap={8}>
            
            {/* Left: Quick Context Summary */}
            <Stack direction="col" gap={6} className="lg:col-span-4">
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
                <Typography variant="h3" as="h3" className="font-bold text-slate-500 tracking-widest"><Activity className="w-4 h-4" /> Snapshot Diagnosa</Typography>
                
                {/* Visual Radar Logic (Simplified) */}
                <Stack direction="col" gap={4} className="mb-6">
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                        <Stack direction="row" gap={4} justify="between" className="text-xs text-slate-400 mb-1">
                            <span>People Maturity Gap</span>
                            <span className="text-white font-medium">{selectedHolisticIssues.filter(i => holisticIssues.people.find(p => p.id === i)).length > 0 ? 'High' : 'Low'}</span>
                        </Stack>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                             <div className={`h-full ${selectedHolisticIssues.some(i => holisticIssues.people.find(p => p.id === i)) ? 'w-[80%] bg-red-500' : 'w-[20%] bg-emerald-500'}`}></div>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                        <Stack direction="row" gap={4} justify="between" className="text-xs text-slate-400 mb-1">
                            <span>Process Complexity</span>
                            <span className="text-white font-medium">{selectedHolisticIssues.filter(i => holisticIssues.process.find(p => p.id === i)).length > 0 ? 'Complex' : 'Standard'}</span>
                        </Stack>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                             <div className={`h-full ${selectedHolisticIssues.some(i => holisticIssues.process.find(p => p.id === i)) ? 'w-[75%] bg-amber-500' : 'w-[30%] bg-emerald-500'}`}></div>
                        </div>
                    </div>
                </Stack>

                <Stack direction="col" gap={2} className="text-sm text-slate-300">
                    <Stack direction="row" gap={4} justify="between" className="border-b border-white/5 pb-2">
                        <span className="text-slate-500">Contact</span>
                        <span>{contextData.name}</span>
                    </Stack>
                    <Stack direction="row" gap={4} justify="between" className="border-b border-white/5 pb-2">
                        <span className="text-slate-500">Industry</span>
                        <span>{selectedIndustry?.label}</span>
                    </Stack>
                    <Stack direction="row" gap={4} justify="between" className="border-b border-white/5 pb-2">
                        <span className="text-slate-500">Tech Stack</span>
                        <span>{selectedTech?.label}</span>
                    </Stack>
                    <Stack direction="row" gap={4} justify="between" className="border-b border-white/5 pb-2">
                        <span className="text-slate-500">Timeline</span>
                        <span>{timelineLabel}</span>
                    </Stack>
                </Stack>
              </div>
            </Stack>

            {/* Right: Recommendations */}
            <Stack direction="col" gap={8} className="lg:col-span-8">
               
               {/* 1. VISUAL ROADMAP */}
               <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
                  <Typography variant="h2" as="h2" className="font-bold"><Calendar className="w-5 h-5 text-blue-500" /> Rencana Implementasi (Roadmap)</Typography>
                  <div className="relative pt-6 pb-2 px-2">
                      <div className="absolute top-8 left-0 w-full h-1 bg-slate-800 rounded-full"></div>
                      <Grid cols={3} gap={4} className="relative z-10">
                          {/* Phase 1 */}
                          <div className="text-center">
                              <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto border-4 border-slate-900 mb-3 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                              <div className="text-xs font-bold text-blue-400 uppercase mb-1">Bulan 1</div>
                              <div className="bg-slate-800 p-3 rounded-lg border border-white/5 text-sm">
                                  <div className="font-medium text-white mb-1">Quick Win</div>
                                  <div className="text-slate-400 text-xs">Setup {recommended[0]?.title} & Data Migration</div>
                              </div>
                          </div>
                           {/* Phase 2 */}
                           <div className="text-center">
                              <div className="w-4 h-4 bg-slate-700 rounded-full mx-auto border-4 border-slate-900 mb-3"></div>
                              <div className="text-xs font-bold text-slate-500 uppercase mb-1">Bulan 2-3</div>
                              <div className="bg-slate-800 p-3 rounded-lg border border-white/5 text-sm">
                                  <div className="font-medium text-white mb-1">Expansion</div>
                                  <div className="text-slate-400 text-xs">Integrasi {recommended[1]?.title} & User Training</div>
                              </div>
                          </div>
                           {/* Phase 3 */}
                           <div className="text-center">
                              <div className="w-4 h-4 bg-slate-700 rounded-full mx-auto border-4 border-slate-900 mb-3"></div>
                              <div className="text-xs font-bold text-slate-500 uppercase mb-1">Bulan 4+</div>
                              <div className="bg-slate-800 p-3 rounded-lg border border-white/5 text-sm">
                                  <div className="font-medium text-white mb-1">Optimization</div>
                                  <div className="text-slate-400 text-xs">Full Automation & Dashboarding</div>
                              </div>
                          </div>
                      </Grid>
                  </div>
               </div>

               <Grid cols={2} gap={6}>
                   {/* 2. TECHNOLOGY SOLUTIONS */}
                   <div>
                       <Typography variant="h3" as="h3" className="font-bold text-slate-400 tracking-widest"><Server className="w-4 h-4" /> Solusi Teknologi</Typography>
                       <Stack direction="col" gap={3}>
                           {recommended.map((mod, idx) => (
                               <div key={mod.id} className="bg-slate-900 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                                   <div className="mt-1 p-1.5 bg-blue-500/10 text-blue-400 rounded-lg">
                                       <Layers className="w-4 h-4" />
                                   </div>
                                   <div>
                                       <Typography variant="h4" as="h4" className="font-bold text-white">{mod.title}</Typography>
                                       <Typography variant="body" className="text-slate-400">{mod.desc}</Typography>
                                   </div>
                               </div>
                           ))}
                       </Stack>
                   </div>

                   {/* 3. SERVICE SOLUTIONS (NEW) */}
                   <div>
                       <Typography variant="h3" as="h3" className="font-bold text-slate-400 tracking-widest"><Users className="w-4 h-4" /> Pendampingan (Services)</Typography>
                       <Stack direction="col" gap={3}>
                           {recommendedServices.length > 0 ? recommendedServices.map((svc) => (
                               <div key={svc.id} className="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-3">
                                   <div className="mt-1 p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                       <svc.icon className="w-4 h-4" />
                                   </div>
                                   <div>
                                       <Typography variant="h4" as="h4" className="font-bold text-white">{svc.title}</Typography>
                                       <Typography variant="body" className="text-slate-400">{svc.desc}</Typography>
                                   </div>
                               </div>
                           )) : (
                               <div className="p-4 rounded-xl border border-white/5 border-dashed text-slate-500 text-sm text-center">
                                   Tidak ada rekomendasi service khusus diperlukan.
                               </div>
                           )}
                       </Stack>
                   </div>
               </Grid>
            </Stack>
          </Grid>
          
           {/* NEXT STEPS / CROSS-SELL SECTION */}
           <div className="mt-16 border-t border-white/10 pt-10 print:hidden break-before-page">
              <Typography variant="h3" as="h3" className="font-bold"><Lightbulb className="w-5 h-5 text-amber-400" /> Langkah Selanjutnya</Typography>
              
              <Grid cols={3} gap={5}>
                {/* ROI Calculator */}
                <div 
                  onClick={() => navigate('/tools/roi-calculator')}
                  className="bg-slate-900/40 border border-white/5 p-5 rounded-xl hover:bg-slate-800 hover:border-blue-500/30 transition-all cursor-pointer group"
                >
                   <Stack direction="row" gap={4} align="center" justify="center" className="bg-blue-500/10 w-10 h-10 rounded-lg text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                     <Calculator className="w-5 h-5" />
                   </div>
                   <Typography variant="h4" as="h4">Hitung Potensi ROI</Typography>
                   <Typography variant="caption" className="text-slate-400">Hitung potensi penghematan operasional dan keuntungan investasi (ROI) dari solusi ini.</Typography>
                   <Stack direction="row" gap={4} align="center" className="mt-4 text-xs font-bold text-blue-500">
                     Buka Kalkulator ROI <ChevronRight className="w-3 h-3 ml-1" />
                   </div>
                </div>

                {/* Maturity Assessment */}
                <div 
                  onClick={() => navigate('/tools/assessment')}
                  className="bg-slate-900/40 border border-white/5 p-5 rounded-xl hover:bg-slate-800 hover:border-emerald-500/30 transition-all cursor-pointer group"
                >
                   <Stack direction="row" gap={4} align="center" justify="center" className="bg-emerald-500/10 w-10 h-10 rounded-lg text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                     <PieChart className="w-5 h-5" />
                   </div>
                   <Typography variant="h4" as="h4">Maturity Assessment</Typography>
                   <Typography variant="caption" className="text-slate-400">Belum yakin dengan skor kematangan Anda? Lakukan audit komprehensif (0-5 Level).</Typography>
                    <Stack direction="row" gap={4} align="center" className="mt-4 text-xs font-bold text-emerald-500">
                     Mulai Audit <ChevronRight className="w-3 h-3 ml-1" />
                   </div>
                </div>

                {/* Expert Consultation */}
                <div 
                  onClick={() => navigate('/contact')}
                  className="bg-slate-900/40 border border-white/5 p-5 rounded-xl hover:bg-slate-800 hover:border-amber-500/30 transition-all cursor-pointer group"
                >
                   <Stack direction="row" gap={4} align="center" justify="center" className="bg-amber-500/10 w-10 h-10 rounded-lg text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                     <Briefcase className="w-5 h-5" />
                   </div>
                   <Typography variant="h4" as="h4">Konsultasi Ahli</Typography>
                   <Typography variant="caption" className="text-slate-400">Diskusi mendalam tentang temuan ini dengan konsultan BizOps senior kami.</Typography>
                    <Stack direction="row" gap={4} align="center" className="mt-4 text-xs font-bold text-amber-500">
                     Hubungi Kami <ChevronRight className="w-3 h-3 ml-1" />
                   </div>
                </div>
              </Grid>
           </div>

           <div className="mt-12 text-center print:hidden">
              <button 
                onClick={handleReset}
                className="text-slate-500 hover:text-white text-sm flex items-center justify-center mx-auto transition-colors gap-2"
              >
                <RefreshCw className="w-3 h-3" /> Ulangi Diagnosa
              </button>
           </div>
        </Container>
      </div>
    );
  }

  return null;
};

export default NeedsAnalysisPage;
