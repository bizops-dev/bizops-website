import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  BarChart, 
  Crosshair, 
  ArrowRight,
  Loader2,
  RefreshCw,
  Lightbulb,
  Heart,
  Settings,
  Cpu,
  Users,
  CheckCircle,
  Play,
  LayoutDashboard,
  Clock,
  Download,
  FileText,
  ShieldCheck,
  AlertCircle,
  Info,
  Building2,
  Mail,
  Calendar,
  Briefcase,
  Phone,
  Calculator,
  Search,
  ChevronRight
} from 'lucide-react';
import Button from '../components/Button';
import { assessmentQuestions, maturityLevels, recommendations } from '../data/assessmentQuestions';
import { MethodologyReference } from '../components/MethodologyReference';
import { useNavigate } from 'react-router-dom';
import { logger } from '../utils/logger';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

// --- TYPES ---
type ViewState = 'intro' | 'lead-form' | 'assessment' | 'analyzing' | 'results';
type CategoryKey = 'strategy' | 'customer' | 'operations' | 'technology' | 'people';

interface LeadForm {
  name: string;
  company: string;
  email: string;
  phone: string; // Added phone
  role: string;
}

const STORAGE_KEY = 'bizops_assessment_state';

const AssessmentPage = () => {
  const navigate = useNavigate();
  
  // --- STATE ---
  const [viewState, setViewState] = useState<ViewState>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: ''
  });
  const [emailError, setEmailError] = useState('');
  const [showMethodology, setShowMethodology] = useState(false);
  const [assessmentDate, setAssessmentDate] = useState<string>('');

  // --- CONSTANTS ---
  const currentQuestion = assessmentQuestions[currentStep] || assessmentQuestions[0]; // Fallback to avoid crash
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = assessmentQuestions.length;
  const progress = (answeredCount / totalQuestions) * 100;

  // Ensure currentQuestion exists before accessing properties
  const currentCategory = currentQuestion?.category as CategoryKey || 'strategy';

  const categoryIcons: Record<CategoryKey, React.ReactElement> = {
    strategy: <Lightbulb className="w-5 h-5" />,
    customer: <Heart className="w-5 h-5" />,
    operations: <Settings className="w-5 h-5" />,
    technology: <Cpu className="w-5 h-5" />,
    people: <Users className="w-5 h-5" />,
  };

  const categoryLabels: Record<CategoryKey, string> = {
    strategy: 'Strategy & Leadership',
    customer: 'Customer Experience',
    operations: 'Operations & Process',
    technology: 'Technology & Data',
    people: 'People & Culture',
  };

  // Group questions
  const questionsByCategory = assessmentQuestions.reduce((acc, q, idx) => {
    const cat = q.category as CategoryKey;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({ ...q, index: idx });
    return acc;
  }, {} as Record<CategoryKey, (typeof assessmentQuestions[0] & { index: number })[]>);

  // --- EFFECTS (PERSISTENCE) ---
  
  // Load state on mount
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        // Only restore if valid and not completed/intro
        if (parsed.viewState === 'assessment' || parsed.viewState === 'lead-form') {
          setViewState(parsed.viewState);
          setAnswers(parsed.answers || {});
          setLeadForm(parsed.leadForm || { name: '', company: '', email: '', phone: '', role: '' });
          
          // Find first unanswered question or last answered + 1
          const answeredIds = Object.keys(parsed.answers || {});
          const lastAnsweredIndex = assessmentQuestions.findIndex(q => !answeredIds.includes(q.id));
          setCurrentStep(lastAnsweredIndex !== -1 ? lastAnsweredIndex : 0);
        }
      } catch (e) {
        // Failed to restore assessment state - silent fail for better UX
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save state on change
  useEffect(() => {
    if (viewState === 'assessment' || viewState === 'lead-form') {
      const stateToSave = {
        viewState,
        answers,
        leadForm,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }
  }, [viewState, answers, leadForm]);

  // --- HANDLERS ---

  const handleStartIntro = () => {
    setViewState('lead-form');
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!leadForm.name || !leadForm.company) {
      alert("Mohon lengkapi nama dan perusahaan.");
      return;
    }

    if (!validateEmail(leadForm.email)) {
      setEmailError('Format email tidak valid.');
      return;
    }

    logger.log("Lead Captured:", leadForm); // Simulate Lead Gen Capture
    setViewState('assessment');
  };

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(newAnswers);
    
    if (currentStep < assessmentQuestions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 250);
    } else {
      if (Object.keys(newAnswers).length >= assessmentQuestions.length) {
        finishAssessment();
      }
    }
  };

  const finishAssessment = () => {
    setAssessmentDate(new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
    setViewState('analyzing');
    // Clear storage on finish
    localStorage.removeItem(STORAGE_KEY);
    
    setTimeout(() => {
      setViewState('results');
    }, 2500);
  };

  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin mengulang dari awal? Semua progres akan dihapus.')) {
      localStorage.removeItem(STORAGE_KEY);
      setViewState('intro');
      setCurrentStep(0);
      setAnswers({});
      setLeadForm({ name: '', company: '', email: '', phone: '', role: '' });
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    const categoryScores: Record<CategoryKey, { total: number; count: number }> = {
      strategy: { total: 0, count: 0 },
      customer: { total: 0, count: 0 },
      operations: { total: 0, count: 0 },
      technology: { total: 0, count: 0 },
      people: { total: 0, count: 0 },
    };

    Object.entries(answers).forEach(([qId, score]) => {
      totalScore += score;
      const question = assessmentQuestions.find(q => q.id === qId);
      if (question) {
        const cat = question.category as CategoryKey;
        if (categoryScores[cat]) {
          categoryScores[cat].total += score;
          categoryScores[cat].count += 1;
        }
      }
    });

    const avgScore = totalScore / assessmentQuestions.length;
    
    const maturityLevel = maturityLevels.find(
      m => avgScore >= m.minScore && avgScore <= m.maxScore
    ) || maturityLevels[0];

    return { avgScore, categoryScores, maturityLevel };
  };

  const results = viewState === 'results' ? calculateResults() : null;

  const getRecommendationLevel = (avgCategoryScore: number) => {
    if (avgCategoryScore <= 2.5) return 'low';
    if (avgCategoryScore <= 4) return 'medium';
    return 'high';
  };

  const handlePrint = () => {
    window.print();
  };

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  // --- RENDER STATES ---

  // 1. INTRO SCREEN
  if (viewState === 'intro') {
    return (
      <Stack direction="horizontal" gap={4} align="center" className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
        {/* Ambient Background - Optimized for Mobile */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-primary-900/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <Container size="7xl" className="w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack direction="horizontal" gap={2} align="center" className="px-4 py-1.5 rounded-full bg-slate-900/50 border border-white/10 text-primary-400 text-sm font-medium mb-8 backdrop-blur-md">
              <LayoutDashboard className="w-4 h-4" /> 
              <span>Executive Assessment Tool</span>
            </Stack>
            
            <Typography variant="h1" as="h1" className="font-bold text-white leading-tight tracking-tight">Unlock Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Digital Potential</span></Typography>
            
            <Typography variant="body-lg" className="text-slate-400 dark:text-slate-300 leading-relaxed">Evaluasi tingkat kematangan digital perusahaan Anda secara komprehensif. Dapatkan roadmap strategis yang dipersonalisasi dalam hitungan menit.</Typography>
            
            <Grid cols={1} gap={4} className="mb-10">
              {[
                { icon: Clock, text: "5-7 Menit", desc: "Waktu pengerjaan" },
                { icon: Crosshair, text: "5 Dimensi", desc: "Analisis Holistik" },
                { icon: FileText, text: "Laporan PDF", desc: "Langsung diunduh" },
                { icon: ShieldCheck, text: "Data Aman", desc: "Enkripsi Enterprise" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 rounded-lg bg-slate-900 text-primary-400 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </Stack>
                  <div>
                    <div className="font-semibold text-white">{item.text}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300">{item.desc}</div>
                  </div>
                </div>
              ))}
            </Grid>

            <Button onClick={handleStartIntro} size="lg" className="px-8 text-lg bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 shadow-lg shadow-primary-900/20">
              Mulai Assessment Sekarang <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <button 
              onClick={() => setShowMethodology(!showMethodology)}
              className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 dark:text-slate-300 hover:text-primary-400 transition-colors mx-auto lg:mx-0"
            >
              <Info className="w-4 h-4" /> Pelajari Metodologi & Leveling
            </button>
          </motion.div>

          {/* Visual Element Right Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {showMethodology ? (
              <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl h-full overflow-y-auto max-h-[600px] custom-scrollbar">
                <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-6">
                  <Typography variant="h3" as="h3">Framework Reference</Typography>
                  <button onClick={() => setShowMethodology(false)} className="text-slate-500 dark:text-slate-400 dark:text-slate-300 hover:text-white">
                    Tutup
                  </button>
                </Stack>
                <MethodologyReference />
              </div>
            ) : (
              <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-8 pb-6 border-b border-white/5">
                  <Typography variant="h3" as="h3">Assessment Preview</Typography>
                  <Stack direction="horizontal" gap={2}>
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </Stack>
                </Stack>
                <Stack direction="vertical" gap={4}>
                  {Object.entries(categoryLabels).map(([key, label], idx) => (
                    <div key={key} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all">
                      <div className={`p-3 rounded-lg bg-slate-950 shadow-inner ${
                        idx === 0 ? 'text-amber-400 dark:text-amber-300' :
                        idx === 1 ? 'text-red-400 dark:text-red-300' :
                        idx === 2 ? 'text-blue-400 dark:text-blue-300' :
                        idx === 3 ? 'text-purple-400 dark:text-purple-300' :
                        'text-green-400 dark:text-green-300'
                      }`}>
                        {categoryIcons[key as CategoryKey]}
                      </div>
                      <Stack direction="horizontal" gap={4}>
                        <div className="font-medium text-slate-200">{label}</div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-slate-600 h-full w-2/3 opacity-30 group-hover:bg-primary-500 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                      </Stack>
                    </div>
                  ))}
                </Stack>
              </div>
            )}
            
            {/* Decorative elements behind card - Optimized Blur */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/30 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-[60px]" />
          </motion.div>
        </Container>
        
        {/* Mobile Methodology Modal (if needed) */}
        {showMethodology && (
          <Stack direction="horizontal" gap={4} align="center" justify="center" className="lg:hidden fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-lg relative">
              <button 
                onClick={() => setShowMethodology(false)}
                className="absolute top-4 right-4 text-slate-400 dark:text-slate-300 hover:text-white"
              >
                Tutup
              </button>
              <MethodologyReference />
            </div>
          </Stack>
        )}
      </Stack>
    );
  }

  // 2. LEAD FORM
  if (viewState === 'lead-form') {
    return (
      <Stack direction="horizontal" gap={4} align="center" justify="center" className="min-h-screen bg-slate-950 text-white p-4 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary-900/10 rounded-full blur-[100px]" />

        <Container size="2xl" className="w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl"
          >
            <div className="text-center mb-8">
              <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mx-auto mb-6 shadow-inner border border-white/5">
                <Users className="w-8 h-8 text-primary-400" />
              </Stack>
              <Typography variant="h2" as="h2">Profil Penilai</Typography>
              <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Laporan detail dan benchmark industri akan dikirimkan ke kontak yang Anda daftarkan.</Typography>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-6">
              <Grid cols={2} gap={5}>
                <div>
                  <Typography variant="caption" className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase tracking-wider mb-2 ml-1">Nama Lengkap</Typography>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                    value={leadForm.name}
                    onChange={e => setLeadForm({...leadForm, name: e.target.value})}
                    placeholder="Nama Anda"
                    autoFocus
                  />
                </div>
                <div>
                  <Typography variant="caption" className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase tracking-wider mb-2 ml-1">Perusahaan</Typography>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                    value={leadForm.company}
                    onChange={e => setLeadForm({...leadForm, company: e.target.value})}
                    placeholder="Nama PT"
                  />
                </div>
              </Grid>

              <Grid cols={2} gap={5}>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase tracking-wider mb-2 ml-1 flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Email Bisnis
                  </label>
                  <input 
                    type="email" 
                    required
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-all [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white ${
                      emailError ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary-500 focus:ring-primary-500'
                    }`}
                    value={leadForm.email}
                    onChange={e => {
                      setLeadForm({...leadForm, email: e.target.value});
                      if (emailError) setEmailError('');
                    }}
                    placeholder="name@company.com"
                  />
                  {emailError && (
                    <Typography variant="body"><AlertCircle className="w-3 h-3 mr-1" /> {emailError}</Typography>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase tracking-wider mb-2 ml-1 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> WhatsApp (Opsional)
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                    value={leadForm.phone}
                    onChange={e => setLeadForm({...leadForm, phone: e.target.value})}
                    placeholder="0812..."
                  />
                </div>
              </Grid>

              <div>
                <Typography variant="caption" className="block text-xs font-semibold text-slate-400 dark:text-slate-300 uppercase tracking-wider mb-2 ml-1">Posisi / Jabatan</Typography>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                  value={leadForm.role}
                  onChange={e => setLeadForm({...leadForm, role: e.target.value})}
                  placeholder="Manager IT / Ops"
                />
              </div>

              <div className="pt-6">
                <Button type="submit" fullWidth size="lg" className="bg-primary-600 hover:bg-primary-500 shadow-lg shadow-primary-900/20">
                  Lanjut ke Pertanyaan <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <button 
                  type="button" 
                  onClick={() => setViewState('intro')}
                  className="mt-4 w-full text-center text-sm text-slate-500 dark:text-slate-400 dark:text-slate-300 hover:text-white transition-colors"
                >
                  Kembali ke Intro
                </button>
              </div>
            </form>
          </motion.div>
        </Container>
      </Stack>
    );
  }

  // 3. ANALYZING / LOADING
  if (viewState === 'analyzing') {
    return (
      <Stack direction="vertical" gap={4} align="center" justify="center" className="min-h-screen bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[100px] animate-pulse" />
        </div>
        
        <div className="relative z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-8 relative"
          >
            <div className="w-24 h-24 rounded-full border-4 border-slate-800 border-t-primary-500" />
            <Stack direction="horizontal" gap={4} align="center" justify="center" className="absolute inset-0">
              <Cpu className="w-8 h-8 text-primary-500" />
            </Stack>
          </motion.div>
          <Typography variant="h2" as="h2">Memproses Hasil Assessment...</Typography>
          <Typography variant="body" className="text-slate-400 dark:text-slate-300">Sistem sedang mengkalkulasi skor dan menyusun rekomendasi strategis Anda.</Typography>
        </div>
      </Stack>
    );
  }

  // 4. RESULTS SCREEN
  if (viewState === 'results' && results) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-900 dark:text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 print:bg-white print:pt-0 print:pb-0 print:text-black">
        <Container className="px-4 md:px-6 lg:px-8" size="6xl">
          {/* --- REPORT HEADER (Formal) --- */}
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 mb-8 print:bg-transparent print:border-b-2 print:border-gray-200 print:rounded-none print:shadow-none print:mb-8 print:pb-8 relative">
            <Stack direction="vertical" gap={6} className="justify-between items-start md:items-center">
              <div>
                <Stack direction="horizontal" gap={3} align="center" className="mb-3">
                  <Stack direction="horizontal" gap={2} align="center" className="px-3 py-1 rounded-full bg-green-900/30 border border-green-800 text-green-400 dark:text-green-300 text-xs font-bold uppercase tracking-wider print:hidden">
                    <CheckCircle className="w-3 h-3" /> Assessment Completed
                  </Stack>
                  {/* Reset Button Moved Here */}
                  <button 
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 hover:text-red-400 dark:text-red-300 transition-colors print:hidden group"
                    title="Hapus data dan mulai dari awal"
                  >
                    <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" /> 
                    <span>Reset</span>
                  </button>
                </Stack>

                <Typography variant="h1" as="h1" className="font-bold text-white">Laporan Digital Maturity</Typography>
                <Typography variant="caption" className="text-slate-400 dark:text-slate-300">ID Dokumen: {`RPT-${new Date().getFullYear()}${Math.floor(Math.random() * 1000)}`}</Typography>
              </div>
              
              {/* User Details Grid */}
              <Grid cols={2} gap={6} className="text-sm text-slate-300 print:text-gray-800 dark:text-slate-100 bg-slate-950/50 p-4 rounded-xl border border-white/5 print:bg-gray-50 print:border-gray-200">
                <Stack direction="horizontal" gap={2} align="center">
                  <Building2 className="w-4 h-4 text-primary-400 print:text-gray-600 dark:text-slate-300" />
                  <span className="font-semibold">{leadForm.company}</span>
                </Stack>
                <Stack direction="horizontal" gap={2} align="center">
                  <Users className="w-4 h-4 text-primary-400 print:text-gray-600 dark:text-slate-300" />
                  <span>{leadForm.name}</span>
                </Stack>
                <Stack direction="horizontal" gap={2} align="center">
                  <Briefcase className="w-4 h-4 text-primary-400 print:text-gray-600 dark:text-slate-300" />
                  <span>{leadForm.role || 'N/A'}</span>
                </Stack>
                 <Stack direction="horizontal" gap={2} align="center">
                  <Calendar className="w-4 h-4 text-primary-400 print:text-gray-600 dark:text-slate-300" />
                  <span>{assessmentDate}</span>
                </Stack>
              </Grid>
            </Stack>
          </div>

          <Grid cols={12} gap={8} className="mb-12 print:mb-6">
            
            {/* LEFT: Executive Summary & Score */}
            <Stack direction="vertical" gap={6} className="lg:col-span-4">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-1 border border-white/10 shadow-2xl print:bg-white print:border-gray-300 print:text-black h-fit">
                <Stack direction="vertical" gap={4} align="center" className="bg-slate-900/80 rounded-[22px] p-8 text-center relative overflow-hidden print:bg-white print:shadow-none print:p-0 print:pt-4">
                   <Stack direction="horizontal" gap={4} align="center" justify="center" className="relative w-40 h-40 mb-6">
                     <svg className="w-full h-full transform -rotate-90">
                       <circle cx="80" cy="80" r="72" fill="none" stroke="currentColor" strokeWidth="10" className="text-slate-800 dark:text-slate-100 print:text-gray-200" />
                       <circle 
                          cx="80" cy="80" r="72" fill="none" stroke="currentColor" strokeWidth="10" 
                          strokeDasharray={452} 
                          strokeDashoffset={452 - (452 * (results.avgScore / 5))} 
                          className={`${results.maturityLevel.color.replace('bg-', 'text-')} transition-all duration-1000 ease-out`}
                          strokeLinecap="round"
                       />
                     </svg>
                     <Stack direction="vertical" gap={4} align="center" justify="center" className="absolute inset-0">
                        <span className={`text-5xl leading-tight font-bold ${results.maturityLevel.color.replace('bg-', 'text-')}`}>
                          {results.avgScore.toFixed(1)}
                        </span>
                        <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">/ 5.0</Typography>
                     </Stack>
                  </Stack>
                  
                  <Typography variant="h2" as="h2" className="font-bold text-white">{results.maturityLevel.title}</Typography>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold text-white mb-4 ${results.maturityLevel.color} print:bg-gray-200 print:text-black`}>
                    Level {results.maturityLevel.level}
                  </div>
                </Stack>
              </div>

              {/* Executive Summary Text */}
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 print:bg-white print:border-gray-300">
                <Typography variant="h3" as="h3">Executive Summary</Typography>
                <Typography variant="caption" className="text-slate-300 leading-relaxed">Perusahaan Anda berada pada tahap <strong>{results.maturityLevel.title}</strong>. {results.maturityLevel.description}
                  <br/><br/>
                  Untuk mencapai level berikutnya, fokus utama Anda harus pada integrasi lintas fungsi dan pemanfaatan data yang lebih strategis.</Typography>
                {/* Methodology Button Moved Here */}
                <button 
                  onClick={() => setShowMethodology(!showMethodology)}
                  className="flex items-center gap-2 text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors print:hidden"
                >
                  <Info className="w-3 h-3" /> Bagaimana skor ini dihitung?
                </button>
              </div>
            </Stack>

            {/* RIGHT: Detailed Analysis */}
            <Stack direction="vertical" gap={8} className="lg:col-span-8">
              {/* Chart */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 print:bg-white print:border-gray-300 print:text-black print:break-inside-avoid">
                <Typography variant="h3" as="h3" className="font-bold text-white"><BarChart className="w-6 h-6 mr-3 text-primary-500 print:text-black" />
                  Analisis per Dimensi</Typography>
                
                <Stack direction="vertical" gap={6}>
                  {Object.entries(results.categoryScores).map(([cat, data]) => {
                    const score = data.count > 0 ? data.total / data.count : 0;
                    const percentage = (score / 5) * 100;
                    const catKey = cat as CategoryKey;
                    
                    return (
                      <div key={cat} className="print:break-inside-avoid">
                        <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-2">
                          <span className="text-slate-300 font-medium flex items-center gap-3 print:text-black">
                            <span className="p-1.5 rounded-lg bg-slate-800 text-slate-400 dark:text-slate-300 print:hidden">{categoryIcons[catKey]}</span> 
                            {categoryLabels[catKey]}
                          </span>
                          <span className="text-slate-900 dark:text-white font-bold bg-slate-800 px-3 py-1 rounded-lg border border-white/5 print:text-black print:bg-white print:border-gray-300">{score.toFixed(1)}</span>
                        </Stack>
                        <div className="w-full bg-slate-800 rounded-full h-4 p-1 border border-white/5 print:bg-gray-200">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full rounded-full shadow-lg ${
                              score < 2.5 ? 'bg-gradient-to-r from-red-600 to-red-500' : 
                              score < 4 ? 'bg-gradient-to-r from-amber-500 to-yellow-400' : 
                              'bg-gradient-to-r from-emerald-500 to-green-400'
                            } print:print-color-adjust-exact`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Stack>
              </div>

              {/* Recommendations Grid */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 print:bg-white print:border-gray-300 print:text-black">
                <Typography variant="h3" as="h3" className="font-bold text-white"><Crosshair className="w-6 h-6 mr-3 text-secondary-500 print:text-black" />
                  Rekomendasi Strategis</Typography>
                
                <Grid cols={2} gap={6}>
                  {Object.entries(results.categoryScores).map(([cat, data]) => {
                    const score = data.count > 0 ? data.total / data.count : 0;
                    const level = getRecommendationLevel(score);
                    const catKey = cat as CategoryKey;
                    
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const rec = (recommendations as any)[cat]?.[level];

                    if (!rec) return null;

                    return (
                      <div key={cat} className="group bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:bg-slate-800 hover:border-primary-500/30 transition-all print:bg-gray-50 print:border-gray-200 print:break-inside-avoid">
                        <Stack direction="horizontal" gap={4} align="start" justify="between" className="mb-4">
                          <Typography variant="h4" as="h4" className="text-white font-semibold tracking-wider text-slate-400 dark:text-slate-300 group-hover:text-primary-400">{categoryLabels[catKey]}</Typography>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded border uppercase ${
                            score < 3 
                              ? 'bg-red-500/10 text-red-400 border-red-500/20 print:text-red-600 dark:text-slate-300 print:border-red-600' 
                              : 'bg-green-500/10 text-green-400 border-green-500/20 print:text-green-600 dark:text-slate-300 print:border-green-600'
                          }`}>
                            {score < 3 ? 'Priority' : 'On Track'}
                          </span>
                        </Stack>
                        <Typography variant="body-lg">{rec.title}</Typography>
                        <Typography variant="caption" className="text-slate-400 dark:text-slate-300 leading-relaxed">{rec.advice}</Typography>
                        <Stack direction="horizontal" gap={2}>
                          {rec.modules.map((m: string) => (
                            <span key={m} className="text-[10px] font-medium bg-slate-950 text-slate-300 px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-white/20 print:bg-white print:text-black print:border-gray-400">
                              {m}
                            </span>
                          ))}
                        </Stack>
                      </div>
                    );
                  })}
                </Grid>
              </div>
            </Stack>
          </Grid>
          
          {/* NEXT STEPS / CROSS-SELL SECTION (New) */}
          <div className="mt-16 border-t border-white/10 pt-10 print:hidden break-before-page pb-24">
              <Typography variant="h3" as="h3" className="font-bold"><Lightbulb className="w-5 h-5 text-amber-400 dark:text-amber-300" /> Rekomendasi Tindak Lanjut</Typography>
              
              <Grid cols={3} gap={5}>
                {/* Solution Finder */}
                <div 
                  onClick={() => navigate('/tools/needs-analysis')}
                  className="bg-slate-900/40 border border-white/5 p-5 rounded-xl hover:bg-slate-800 hover:border-blue-500/30 transition-all cursor-pointer group"
                >
                   <Stack direction="horizontal" gap={4} align="center" justify="center" className="bg-blue-500/10 w-10 h-10 rounded-lg text-blue-400 dark:text-blue-300 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                     <Search className="w-5 h-5" />
                   </Stack>
                   <Typography variant="h4" as="h4">Solution Finder</Typography>
                   <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Diagnosis spesifik untuk menemukan modul software yang tepat mengatasi gap skor Anda.</Typography>
                   <Stack direction="horizontal" gap={4} align="center" className="mt-4 text-xs font-bold text-blue-500 dark:text-blue-400 dark:text-blue-300">
                     Cari Solusi <ChevronRight className="w-3 h-3 ml-1" />
                   </Stack>
                </div>

                {/* ROI Calculator */}
                <div 
                  onClick={() => navigate('/tools/pricing-calculator')}
                  className="bg-slate-900/40 border border-white/5 p-5 rounded-xl hover:bg-slate-800 hover:border-emerald-500/30 transition-all cursor-pointer group"
                >
                   <Stack direction="horizontal" gap={4} align="center" justify="center" className="bg-emerald-500/10 w-10 h-10 rounded-lg text-emerald-400 dark:text-emerald-300 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                     <Calculator className="w-5 h-5" />
                   </Stack>
                   <Typography variant="h4" as="h4">Estimasi Investasi</Typography>
                   <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Hitung biaya implementasi digital transformation untuk menaikkan level maturity Anda.</Typography>
                    <Stack direction="horizontal" gap={4} align="center" className="mt-4 text-xs font-bold text-emerald-500 dark:text-emerald-400 dark:text-emerald-300">
                     Hitung Biaya <ChevronRight className="w-3 h-3 ml-1" />
                   </Stack>
                </div>

                {/* Expert Consultation */}
                <div 
                  onClick={() => navigate('/contact')}
                  className="bg-slate-900/40 border border-white/5 p-5 rounded-xl hover:bg-slate-800 hover:border-amber-500/30 transition-all cursor-pointer group"
                >
                   <Stack direction="horizontal" gap={4} align="center" justify="center" className="bg-amber-500/10 w-10 h-10 rounded-lg text-amber-400 dark:text-amber-300 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                     <Briefcase className="w-5 h-5" />
                   </Stack>
                   <Typography variant="h4" as="h4">Konsultasi Ahli</Typography>
                   <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Diskusi mendalam tentang temuan skor ini dengan konsultan senior kami.</Typography>
                    <Stack direction="horizontal" gap={4} align="center" className="mt-4 text-xs font-bold text-amber-500 dark:text-amber-400 dark:text-amber-300">
                     Hubungi Kami <ChevronRight className="w-3 h-3 ml-1" />
                   </Stack>
                </div>
              </Grid>
           </div>

          {/* FLOATING ACTION BAR (Fixed Bottom) - Hidden when printing */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-lg border-t border-white/10 print:hidden z-40">
            <Container size="6xl" className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-slate-400 dark:text-slate-300 hidden sm:block">
                Langkah selanjutnya: Simpan laporan ini atau konsultasikan dengan ahli kami.
              </div>
              <Stack direction="horizontal" gap={3} className="w-full sm:w-auto">
                <Button size="md" onClick={handlePrint} variant="outline-white" className="flex-1 sm:flex-none items-center gap-2 h-10">
                  <Download className="w-4 h-4" /> Save PDF
                </Button>
                <Button size="md" onClick={handleConsultationClick} variant="primary" className="flex-1 sm:flex-none items-center gap-2 h-10 bg-gradient-to-r from-primary-600 to-indigo-600 border-0 shadow-lg shadow-primary-900/20">
                   Consultation <ArrowRight className="w-4 h-4" />
                </Button>
              </Stack>
            </Container>
          </div>
          
          <div className="mb-8"></div>

          {/* Methodology Modal for Results Page */}
          {showMethodology && (
            <Stack direction="horizontal" gap={4} align="center" justify="center" className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm p-4 overflow-y-auto print:hidden">
              <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-2xl relative shadow-2xl">
                <button 
                  onClick={() => setShowMethodology(false)}
                  className="absolute top-4 right-4 text-slate-400 dark:text-slate-300 hover:text-white"
                >
                  Tutup
                </button>
                <div className="mb-6">
                  <Typography variant="h3" as="h3">Referensi Metodologi</Typography>
                  <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Dasar penilaian skor maturity Anda.</Typography>
                </div>
                <MethodologyReference />
              </div>
            </Stack>
          )}
        </Container>
      </div>
    );
  }

  // 5. ACTIVE ASSESSMENT (SPLIT LAYOUT)
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-white">
      <Container className="px-4 md:px-6 lg:px-8" size="7xl">
        
        {/* Mobile Nav Toggle / Progress */}
        <div className="lg:hidden mb-8 sticky top-20 z-30 bg-slate-950/90 backdrop-blur-md p-4 -mx-4 border-b border-white/10">
           <Stack direction="horizontal" gap={4} align="center" justify="between" className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest mb-3">
             <span>Progress</span>
             <span>{Math.round(progress)}%</span>
           </Stack>
           <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
             <div className="bg-gradient-to-r from-primary-500 to-indigo-500 h-full rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
           </div>
        </div>

        <Grid cols={12} gap={8}>
          
          {/* LEFT: NAVIGATION SIDEBAR */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
             <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-6 sticky top-24">
                <Typography variant="h3" as="h3" className="text-white font-bold"><LayoutDashboard className="w-5 h-5 mr-3 text-primary-500" />
                  Navigation</Typography>
                
                <Stack direction="vertical" gap={8} className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[11px] top-4 bottom-4 w-px bg-white/10 z-0" />

                  {Object.entries(questionsByCategory).map(([cat, questions]) => (
                    <div key={cat} className="relative z-10">
                      <Stack direction="horizontal" gap={3} align="center" className="mb-3 text-sm font-bold text-slate-300">
                        <div className={`p-1 rounded-full bg-slate-950 border border-white/10 z-10`}>
                           <div className="w-4 h-4 text-primary-400">{categoryIcons[cat as CategoryKey]}</div>
                        </div>
                        {categoryLabels[cat as CategoryKey]}
                      </Stack>
                      <Grid cols={5} gap={2} className="pl-8">
                        {/* @ts-ignore */}
                        {questions.map((q) => {
                          const isAnswered = answers[q.id] !== undefined;
                          const isCurrent = currentStep === q.index;
                          
                          return (
                            <button
                              key={q.id}
                              onClick={() => setCurrentStep(q.index)}
                              className={`
                                h-8 rounded-lg text-xs font-bold transition-all relative overflow-hidden
                                ${isCurrent 
                                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/50 scale-110 z-20 ring-2 ring-primary-400 ring-offset-2 ring-offset-slate-900' 
                                  : isAnswered 
                                    ? 'bg-primary-900/20 text-primary-400 border border-primary-500/30' 
                                    : 'bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-800'
                                }
                              `}
                              title={`Question ${q.index + 1}`}
                            >
                              {q.index + 1}
                            </button>
                          );
                        })}
                      </Grid>
                    </div>
                  ))}
                </Stack>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Stack direction="horizontal" gap={4} justify="between" className="text-xs font-bold text-slate-500 dark:text-slate-400 dark:text-slate-300 mb-2 uppercase tracking-widest">
                    <span>Completion</span>
                    <span>{Math.round(progress)}%</span>
                  </Stack>
                  <div className="w-full bg-slate-950 rounded-full h-2 border border-white/5 p-0.5">
                    <div className="bg-gradient-to-r from-primary-500 to-green-400 h-full rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
             </div>
          </div>

          {/* RIGHT: QUESTION CARD */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl min-h-[500px] flex flex-col relative overflow-hidden gap-4"
              >
                {/* Background glow for card */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="mb-8 relative z-10">
                  <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-6">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-800 text-primary-400 uppercase tracking-wider border border-white/5`}>
                      {categoryIcons[currentCategory]}
                      {categoryLabels[currentCategory]}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 dark:text-slate-300 text-sm">
                      {currentStep + 1} / {totalQuestions}
                    </span>
                  </Stack>
                  
                  <Typography variant="h2" as="h2" className="font-bold text-white leading-tight">{currentQuestion?.question}</Typography>
                </div>

                <Stack direction="vertical" gap={4} className="flex-grow relative z-10 gap-4">
                  {currentQuestion?.options.map((option, index) => {
                    const isSelected = answers[currentQuestion.id] === option.score;
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.score)}
                        className={`group w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start relative overflow-hidden ${
                          isSelected 
                            ? 'bg-primary-600/10 border-primary-500 ring-1 ring-primary-500 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]' 
                            : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className={`flex-shrink-0 mt-0.5 mr-5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected ? 'border-primary-500' : 'border-slate-600 group-hover:border-primary-400'
                        }`}>
                          {isSelected && <div className="w-3 h-3 rounded-full bg-primary-500" />}
                        </div>
                        <span className={`text-lg transition-colors ${isSelected ? 'text-white font-medium' : 'text-slate-300 group-hover:text-white'}`}>
                          {option.label}
                        </span>
                        
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                      </button>
                    );
                  })}
                </Stack>

                <Stack direction="horizontal" gap={4} align="center" justify="between" className="mt-10 pt-8 border-t border-white/10 relative z-10">
                  <Button size="md" 
                    variant="ghost"
                    onClick={() => currentStep > 0 && setCurrentStep(prev => prev - 1)}
                    disabled={currentStep === 0}
                    className="text-slate-400 hover:text-slate-900 dark:text-white hover:bg-white/5"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                  </Button>
                  
                  {currentStep < totalQuestions - 1 ? (
                    <Button size="md" 
                      variant="primary"
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="ml-auto bg-white text-slate-900 dark:text-white hover:bg-slate-200 border-0"
                    >
                      Next Question <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  ) : (
                    <Button size="md" 
                      variant="primary"
                      onClick={finishAssessment}
                      disabled={Object.keys(answers).length < totalQuestions}
                      className="ml-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border-0 shadow-lg shadow-green-900/20"
                    >
                      See Results <CheckCircle className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </Stack>
              </motion.div>
            </AnimatePresence>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default AssessmentPage;
