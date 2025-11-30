import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Briefcase, Package, UserCheck, 
  MousePointer, Check, ArrowRight, LayoutDashboard, 
  Bell, Search, Menu, X, MoreVertical, 
  FileText, Users, ShoppingCart, Settings, LogOut,
  Plus, Calendar, MapPin, Scan, DollarSign, Send,
  RefreshCw, ChevronRight, Loader2, Signal,
  BarChart3, FileCheck, KanbanSquare, TrendingUp, 
  PieChart, Wallet, Zap, ShieldCheck, Globe,
  ArrowLeft
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Badge from '../components/Badge';
import OptimizedImage from '../components/OptimizedImage';
import CardSlider from '../components/CardSlider';
import Typography from '../components/Typography';

// --- TYPES ---
type ScenarioType = 'sales' | 'manager' | 'warehouse' | 'employee' | 'finance' | 'ceo';

interface ScenarioDef {
  id: ScenarioType;
  label: string;
  role: string;
  icon: any;
  device: 'mobile' | 'desktop';
  title: string;
  desc: string;
  color: string;
}

// --- CONFIG ---
const scenarios: ScenarioDef[] = [
  { 
    id: 'sales', 
    label: 'Salesman', 
    role: 'Field Sales',
    icon: Smartphone, 
    device: 'mobile',
    title: 'Closing Deal di Lapangan',
    desc: 'Buat penawaran harga (Quotation) saat meeting dengan klien hanya dalam 3 ketukan.',
    color: 'text-blue-400'
  },
  { 
    id: 'manager', 
    label: 'Manager', 
    role: 'General Manager',
    icon: Briefcase, 
    device: 'desktop',
    title: 'Approval Jarak Jauh',
    desc: 'Review dan setujui permintaan pembelian (PO) yang masuk dari tim procurement.',
    color: 'text-purple-400'
  },
  { 
    id: 'warehouse', 
    label: 'Staff Gudang', 
    role: 'Warehouse Keeper',
    icon: Package, 
    device: 'mobile',
    title: 'Terima Barang Masuk',
    desc: 'Scan barcode barang yang datang dari supplier untuk update stok otomatis.',
    color: 'text-amber-400'
  },
  { 
    id: 'employee', 
    label: 'Karyawan', 
    role: 'Staff',
    icon: UserCheck, 
    device: 'mobile',
    title: 'Absensi & Cuti',
    desc: 'Clock-in kehadiran dengan Face ID dan ajukan cuti sakit mendadak.',
    color: 'text-pink-400'
  },
  { 
    id: 'finance', 
    label: 'Finance', 
    role: 'Accountant',
    icon: DollarSign, 
    device: 'desktop',
    title: 'Auto-Reconciliation',
    desc: 'Cocokkan mutasi bank dengan invoice penjualan secara otomatis tanpa input manual.',
    color: 'text-emerald-400'
  },
  { 
    id: 'ceo', 
    label: 'CEO / Owner', 
    role: 'Chief Executive',
    icon: BarChart3, 
    device: 'mobile',
    title: 'Executive Dashboard',
    desc: 'Pantau profitabilitas, cashflow, dan performa tim sales real-time dari genggaman.',
    color: 'text-indigo-400'
  }
];

const ProductTourPage: React.FC = () => {
  const [activeId, setActiveId] = useState<ScenarioType>('sales');
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentScenario = scenarios.find(s => s.id === activeId) || scenarios[0];

  const switchScenario = (id: ScenarioType) => {
    if (id === activeId) return;
    setIsLoading(true);
    setActiveId(id);
    setStep(0);
    setTimeout(() => setIsLoading(false), 600);
  };

  const nextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="pt-20 bg-[#0B1120] text-white min-h-screen relative overflow-x-hidden font-sans selection:bg-primary-500 selection:text-white">
      <SEO title="Interactive Product Tour | BizOps" description="Simulasi penggunaan BizOps ERP secara interaktif." />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* MAIN INTERFACE CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-8 lg:py-0">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT PANEL: CONTROLS (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Header Title */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-primary-300 text-[10px] font-bold uppercase tracking-wider mb-4 ring-1 ring-white/5">
                <MousePointer className="w-3 h-3 animate-bounce" /> Interactive Demo
              </div>
              <Typography variant="h1" as="h1" className="font-extrabold leading-tight tracking-tight font-sans">Pilih Peran,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Rasakan Bedanya.</span></Typography>
              <Typography variant="caption" className="text-slate-400 leading-relaxed">Simulasi hands-on bagaimana BizOps mempermudah pekerjaan setiap departemen.</Typography>
            </div>

            {/* Mobile Scenario Selector (Horizontal Scroll) */}
            <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-3 min-w-max">
                {scenarios.map((sc) => (
                   <button
                   key={sc.id}
                   onClick={() => switchScenario(sc.id)}
                   className={`group relative px-4 py-3 rounded-xl border flex items-center gap-3 transition-all duration-300 text-left min-w-[200px] ${
                     activeId === sc.id 
                       ? 'bg-white/10 border-primary-500/50 shadow-lg shadow-primary-900/20 ring-1 ring-primary-500/50' 
                       : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10 text-slate-400 hover:text-white'
                   }`}
                 >
                   <div className={`p-2 rounded-lg transition-colors shrink-0 ${activeId === sc.id ? 'bg-primary-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 group-hover:text-white'}`}>
                     <sc.icon className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <div className={`text-sm font-bold truncate ${activeId === sc.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{sc.label}</div>
                     <div className="text-[10px] text-slate-500 group-hover:text-slate-400 truncate">{sc.role}</div>
                   </div>
                 </button>
                ))}
              </div>
            </div>

            {/* Desktop Vertical Scenario Menu */}
            <div className="hidden lg:flex flex-col gap-2 animate-fade-in-up delay-100">
              <Typography variant="caption" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 px-2">Select Scenario</Typography>
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => switchScenario(sc.id)}
                  className={`group relative px-4 py-3 rounded-xl border flex items-center gap-4 transition-all duration-300 text-left ${
                    activeId === sc.id 
                      ? 'bg-white/10 border-primary-500/50 shadow-lg shadow-primary-900/20 ring-1 ring-primary-500/50 translate-x-2' 
                      : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10 text-slate-400 hover:text-white hover:translate-x-1'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${activeId === sc.id ? 'bg-primary-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 group-hover:text-white'}`}>
                    <sc.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm font-bold ${activeId === sc.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{sc.label}</div>
                    <div className="text-[10px] text-slate-500 group-hover:text-slate-400">{sc.role}</div>
                  </div>
                  {activeId === sc.id && <ChevronRight className="w-4 h-4 text-primary-400 animate-pulse" />}
                </button>
              ))}
            </div>

            {/* Active Scenario Info Card */}
            <div className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm animate-fade-in delay-200 hidden lg:block">
               <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${currentScenario.color} flex items-center gap-2`}>
                 <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                 Current Mission
               </div>
               <Typography variant="h3" as="h3" className="font-bold text-white">{currentScenario.title}</Typography>
               <Typography variant="caption" className="text-slate-400 leading-relaxed">{currentScenario.desc}</Typography>
            </div>

          </div>

          {/* RIGHT PANEL: MAIN STAGE (Span 8) */}
          <div className="lg:col-span-8 relative min-h-[600px] flex flex-col items-center lg:block lg:pt-8 w-full">
             
             {/* Mobile Info (Visible only on small screens) */}
             <div className="block lg:hidden mb-4 text-center w-full px-4 relative z-20">
                <Typography variant="h2" as="h2" className="font-bold text-white leading-tight">{currentScenario.title}</Typography>
                <Typography variant="caption" className="text-slate-400 leading-snug">{currentScenario.desc}</Typography>
             </div>

             {/* Loading Overlay */}
             {isLoading && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120]/90 backdrop-blur-sm rounded-3xl transition-opacity duration-300">
                   <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                   <span className="text-primary-200 font-medium tracking-wider text-sm animate-pulse">LOADING {currentScenario.label.toUpperCase()}...</span>
                </div>
             )}

             {/* Device Frame */}
             <div className="w-full flex justify-center transform transition-all duration-500">
                {currentScenario.device === 'mobile' ? (
                  <div className="transform scale-[0.85] sm:scale-95 md:scale-100 lg:scale-90 xl:scale-100 origin-top md:origin-center">
                    <MobileFrame>
                       <ScenarioContent id={activeId} step={step} onNext={nextStep} onReset={() => switchScenario(activeId)} />
                    </MobileFrame>
                  </div>
                ) : (
                  <div className="w-full transform scale-[0.55] sm:scale-[0.75] md:scale-90 lg:scale-90 xl:scale-100 origin-top md:origin-center -mt-4 md:-mt-0">
                    <DesktopFrame role={currentScenario.role}>
                       <ScenarioContent id={activeId} step={step} onNext={nextStep} onReset={() => switchScenario(activeId)} />
                    </DesktopFrame>
                  </div>
                )}
             </div>

          </div>

        </div>
      </div>

      {/* SUPPORTING SECTIONS */}
      
      {/* 1. Benefits */}
      <section className="py-16 md:py-24 bg-slate-950/50 border-t border-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Typography variant="h2" as="h2">Mengapa Kami Buat Simulasi Ini?</Typography>
            <Typography variant="body" className="text-slate-400">Kami percaya pada transparansi. Anda berhak tahu persis apa yang Anda beli sebelum mengeluarkan biaya sepeser pun.</Typography>
          </div>
          
          <CardSlider desktopClassName="md:grid md:grid-cols-3 md:gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-primary-500/30 transition-colors h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 ring-1 ring-blue-500/30">
                 <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <Typography variant="h3" as="h3">Zero-Setup Experience</Typography>
              <Typography variant="caption" className="text-slate-400">Tidak perlu menunggu tim IT melakukan instalasi server. Cukup klik dan rasakan pengalamannya langsung di browser.</Typography>
            </div>
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-colors h-full">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 ring-1 ring-purple-500/30">
                 <ShieldCheck className="w-6 h-6 text-purple-400" />
              </div>
              <Typography variant="h3" as="h3">Realistic Workflows</Typography>
              <Typography variant="caption" className="text-slate-400">Skenario yang Anda jalankan adalah 100% alur kerja asli yang digunakan oleh klien-klien enterprise kami setiap hari.</Typography>
            </div>
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors h-full">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 ring-1 ring-emerald-500/30">
                 <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <Typography variant="h3" as="h3">Unified Ecosystem</Typography>
              <Typography variant="caption" className="text-slate-400">Lihat bagaimana data dari Sales (Mobile) langsung terhubung ke Finance (Web) dan Gudang tanpa jeda.</Typography>
            </div>
          </CardSlider>
        </div>
      </section>

      {/* 2. CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="outline" className="mb-6 border-primary-500/30 text-primary-300 bg-primary-500/10">Ready for the real thing?</Badge>
          <Typography variant="h2" as="h2" className="font-extrabold text-white tracking-tight font-sans">Bawa Efisiensi Ini ke <span className="text-primary-400">Bisnis Anda.</span></Typography>
          <Typography variant="body-xl" className="text-slate-400">Coba full version dengan data perusahaan Anda sendiri. Gratis 14 hari, tanpa komitmen.</Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary-600 hover:bg-primary-500 border-none shadow-[0_0_40px_rgba(14,165,233,0.3)] w-full sm:w-auto group">
                Mulai Trial Gratis <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/pricing-calculator">
               <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-slate-700 hover:bg-slate-800 text-white w-full sm:w-auto">
                  Cek Estimasi Harga
               </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

// --- FRAMES (UNCHANGED - Reused from previous step for consistency) ---
const MobileFrame: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="relative mx-auto border-slate-800 bg-slate-950 border-[12px] md:border-[14px] rounded-[2.5rem] md:rounded-[3rem] h-[650px] md:h-[720px] w-[320px] md:w-[360px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-slate-700/50 transform transition-transform duration-500 hover:scale-[1.02]">
     <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-30"></div>
     <div className="h-[32px] w-[3px] bg-slate-700 absolute -left-[15px] md:-left-[17px] top-[80px] rounded-l-lg"></div>
     <div className="h-[46px] w-[3px] bg-slate-700 absolute -left-[15px] md:-left-[17px] top-[140px] rounded-l-lg"></div>
     <div className="h-[64px] w-[3px] bg-slate-700 absolute -right-[15px] md:-right-[17px] top-[160px] rounded-r-lg"></div>
     <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 dark:bg-slate-950 relative flex flex-col">
        <div className="h-10 bg-slate-950 flex justify-between items-center px-6 text-[10px] text-white select-none z-20 shrink-0">
           <span>9:41</span>
           <div className="w-20 h-5 bg-black rounded-b-2xl absolute left-1/2 -translate-x-1/2 top-0"></div>
           <div className="flex gap-1.5">
              <Signal className="w-3 h-3" />
              <div className="w-5 h-2.5 bg-white rounded-[3px]"></div>
           </div>
        </div>
        {children}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-400/50 rounded-full z-20 backdrop-blur-sm"></div>
     </div>
  </div>
);

const DesktopFrame: React.FC<{children: React.ReactNode, role: string}> = ({ children, role }) => (
  <div className="w-full max-w-6xl aspect-[16/10] bg-slate-900 rounded-xl md:rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col ring-4 ring-slate-900/50 relative transform transition-transform duration-500 hover:scale-[1.01] mx-auto">
     <div className="h-8 md:h-10 bg-[#1e293b] border-b border-slate-700 flex items-center px-4 gap-2 select-none">
        <div className="flex gap-1.5 md:gap-2">
           <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
           <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
           <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="ml-4 flex-1 bg-slate-900/80 rounded-md h-5 md:h-6 flex items-center px-3 text-[10px] md:text-xs text-slate-400 border border-slate-800/50 shadow-inner overflow-hidden whitespace-nowrap">
           <span className="text-slate-500 mr-1">https://</span>app.bizops.id/desk
        </div>
     </div>
     <div className="flex-1 flex overflow-hidden bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="w-48 md:w-64 bg-[#0f172a] border-r border-slate-800 flex flex-col p-3 md:p-4 hidden sm:flex shrink-0">
           <div className="flex items-center gap-3 mb-6 md:mb-8 text-white font-bold text-base md:text-lg px-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-xs md:text-sm shadow-lg shadow-primary-900/50">B</div>
              <span className="tracking-tight">BizOps</span>
           </div>
           <div className="space-y-1">
              <div className="px-3 py-2 md:py-2.5 bg-primary-600/10 text-primary-400 rounded-lg text-xs md:text-sm font-medium flex items-center gap-3 border border-primary-500/10">
                 <LayoutDashboard className="w-3.5 h-3.5 md:w-4 md:h-4" /> Dashboard
              </div>
              <div className="px-3 py-2 md:py-2.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200 rounded-lg text-xs md:text-sm font-medium flex items-center gap-3 transition-colors cursor-pointer">
                 <Bell className="w-3.5 h-3.5 md:w-4 md:h-4" /> Inbox <span className="ml-auto bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold shadow-md shadow-red-500/20">3</span>
              </div>
              <div className="px-3 py-2 md:py-2.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200 rounded-lg text-xs md:text-sm font-medium flex items-center gap-3 transition-colors cursor-pointer">
                 <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" /> Reports
              </div>
              <div className="px-3 py-2 md:py-2.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200 rounded-lg text-xs md:text-sm font-medium flex items-center gap-3 transition-colors cursor-pointer">
                 <Settings className="w-3.5 h-3.5 md:w-4 md:h-4" /> Settings
              </div>
           </div>
           <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-800/50">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs text-white font-bold shadow-md border border-white/10">
                 {role.charAt(0)}
              </div>
              <div className="flex-1 overflow-hidden">
                 <div className="text-xs font-bold text-white truncate">{role}</div>
                 <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div> Online
                 </div>
              </div>
           </div>
        </div>
        <div className="flex-1 flex flex-col relative overflow-hidden bg-[#0f172a]">
           <div className="h-12 md:h-16 border-b border-slate-800 flex items-center justify-between px-4 md:px-6 bg-[#0f172a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0f172a]/60 z-10">
              <div className="text-xs md:text-sm font-medium text-slate-400 flex items-center gap-2">
                 <span className="text-slate-500">Workspace</span> <ChevronRight className="w-3 h-3"/> <span className="text-white">Desk</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                 <div className="relative hidden sm:block">
                    <Search className="w-3.5 h-3.5 md:w-4 md:h-4 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder="Search..." className="bg-slate-800 border-none rounded-full h-8 md:h-9 pl-9 pr-4 text-xs w-48 md:w-64 focus:ring-1 focus:ring-primary-500 transition-all" />
                 </div>
              </div>
           </div>
           <div className="flex-1 relative p-4 md:p-8 overflow-y-auto bg-[#0B1120] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
              {children}
           </div>
        </div>
     </div>
  </div>
);

const ScenarioContent: React.FC<{id: string, step: number, onNext: () => void, onReset: () => void}> = ({ id, step, onNext, onReset }) => {
   // --- SUCCESS SCREEN (Shared) ---
   if (step === 3) {
      return (
         <div className="h-full w-full flex flex-col items-center justify-center text-center p-6 animate-fade-in-up">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full flex items-center justify-center mb-6 ring-1 ring-green-500/30 animate-bounce-slow">
               <Check className="w-10 h-10 md:w-12 md:h-12 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
            </div>
            <Typography variant="h3" as="h3">Task Completed!</Typography>
            <Typography variant="caption" className="text-slate-400 leading-relaxed">Bayangkan efisiensi ini dikalikan dengan ribuan transaksi.</Typography>
            <div className="flex flex-col gap-3 w-full max-w-xs">
               <Link to="/demo" className="w-full">
                  <Button fullWidth className="shadow-xl shadow-primary-500/20 bg-primary-600 hover:bg-primary-500 border-none h-12 text-base">Mulai Trial Gratis</Button>
               </Link>
               <button onClick={onReset} className="text-sm text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 py-2 group">
                  <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" /> Ulangi Simulasi
               </button>
            </div>
         </div>
      );
   }

   // --- SCENARIO: SALES ---
   if (id === 'sales') {
      return (
         <div className="h-full flex flex-col bg-slate-950">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900 sticky top-0 z-10">
               <div className="font-bold text-lg text-white">Quotations</div>
               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center active:scale-90 transition-transform"><Plus className="w-5 h-5 text-primary-500"/></div>
            </div>

            {step === 0 && (
               <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-5 rounded-2xl shadow-lg mb-4 text-white relative overflow-hidden">
                     <div className="relative z-10">
                        <div className="text-xs text-blue-200 font-bold uppercase tracking-wider mb-1">Sales Target (Oct)</div>
                        <div className="flex justify-between items-end">
                           <div className="text-3xl font-bold">85%</div>
                           <div className="text-sm text-blue-100">IDR 850jt</div>
                        </div>
                        <div className="h-1.5 w-full bg-black/20 mt-3 rounded-full overflow-hidden backdrop-blur-sm">
                           <div className="h-full w-[85%] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                        </div>
                     </div>
                     <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mb-8 blur-xl"></div>
                  </div>

                  <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider px-1">Recent Drafts</div>
                  {[1, 2].map((i) => (
                     <div key={i} className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50 flex justify-between items-center hover:bg-slate-800 transition-colors cursor-default">
                        <div>
                           <div className="font-bold text-slate-200">PT Sumber Makmur</div>
                           <div className="text-xs text-slate-500 mt-1">QT-2023-00{i} • IDR 25.000.000</div>
                        </div>
                        <Badge variant="outline" size="sm" className="border-slate-700 text-slate-400">Draft</Badge>
                     </div>
                  ))}
                  
                  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-[300px] px-4">
                     <Button onClick={onNext} className="w-full rounded-xl h-12 shadow-xl shadow-primary-500/30 animate-pulse bg-primary-600 hover:bg-primary-500 text-white font-bold border-none">
                        + Buat Penawaran Baru
                     </Button>
                  </div>
               </div>
            )}

            {step === 1 && (
               <div className="flex-1 p-4 space-y-5">
                  <div className="space-y-2">
                     <Typography variant="caption" className="text-xs font-bold text-slate-500 uppercase">Customer</Typography>
                     <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-white flex justify-between items-center shadow-sm">
                        PT Mitra Abadi Teknik
                        <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center"><Check className="w-3 h-3 text-green-500" /></div>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <Typography variant="caption" className="text-xs font-bold text-slate-500 uppercase">Items</Typography>
                     <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
                        <div className="flex justify-between text-sm mb-1 text-white font-medium">
                           <span>MacBook Pro M3</span>
                           <span>x 5</span>
                        </div>
                        <div className="text-xs text-slate-500">Rp 25.000.000 / unit</div>
                     </div>
                  </div>
                  
                  <div className="mt-auto">
                     <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-800 mb-4">
                        <div className="flex justify-between text-sm text-slate-400 mb-2">
                           <span>Subtotal</span>
                           <span>Rp 125.000.000</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-400 mb-4">
                           <span>Tax (11%)</span>
                           <span>Rp 13.750.000</span>
                        </div>
                        <div className="h-px bg-slate-700 my-3"></div>
                        <div className="flex justify-between text-lg font-bold text-white">
                           <span>Total</span>
                           <span className="text-emerald-400">Rp 138.750.000</span>
                        </div>
                     </div>
                     <Button fullWidth onClick={onNext} className="h-12 text-base font-bold bg-primary-600 hover:bg-primary-500 border-none shadow-lg shadow-primary-900/50">Simpan & Kirim</Button>
                  </div>
               </div>
            )}

            {step === 2 && (
               <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6 text-center bg-slate-950">
                  <div className="w-20 h-20 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                     <div className="absolute inset-0 bg-primary-500/10 blur-xl"></div>
                     <FileText className="w-10 h-10 text-primary-500 relative z-10" />
                  </div>
                  <div>
                     <Typography variant="h3" as="h3">Quotation Created!</Typography>
                     <Typography variant="caption" className="text-slate-500">QT-2023-088 siap dikirim.</Typography>
                  </div>
                  
                  <div className="w-full space-y-3">
                     <button onClick={onNext} className="w-full p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-green-900/20">
                        <Send className="w-5 h-5" /> Kirim via WhatsApp
                     </button>
                     <button onClick={onNext} className="w-full p-4 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors">
                        <Users className="w-5 h-5" /> Kirim Email
                     </button>
                  </div>
               </div>
            )}
         </div>
      );
   }

   // --- SCENARIO: MANAGER ---
   if (id === 'manager') {
      return (
         <div className="h-full flex flex-col">
            {step === 0 && (
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 h-full">
                  <div className="sm:col-span-2 space-y-4 md:space-y-6">
                     <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {['Revenue', 'Expenses', 'Net Profit'].map((l, i) => (
                           <div key={i} className="bg-slate-800/50 p-3 md:p-5 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-colors group">
                              <div className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mb-1 md:mb-2">{l}</div>
                              <div className="text-lg md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                 {i===0 ? '2.4M' : i===1 ? '1.1M' : '1.3M'}
                              </div>
                              <div className="flex items-center gap-1 mt-1 md:mt-2 text-[10px] md:text-xs text-emerald-400">
                                 <TrendingUp className="w-3 h-3" /> +{12-i*2}%
                              </div>
                           </div>
                        ))}
                     </div>
                     
                     <div className="bg-slate-800/30 p-4 md:p-6 rounded-2xl border border-slate-700/50 h-48 md:h-64 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-center mb-4 md:mb-6">
                           <Typography variant="h4" as="h4">Monthly Performance</Typography>
                           <div className="flex gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                           </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between gap-2 px-2">
                           {[40, 60, 45, 70, 55, 80, 65, 85, 75, 90, 60, 95].map((h, i) => (
                              <div key={i} className="w-full bg-slate-700/50 rounded-t-sm relative group hover:bg-primary-500/20 transition-colors" style={{height: `${h}%`}}>
                                 <div className="absolute bottom-0 w-full bg-primary-500 rounded-t-sm transition-all duration-1000" style={{height: `${h*0.6}%`}}></div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-span-1 bg-slate-800/50 rounded-2xl border border-slate-700/50 flex flex-col h-full min-h-[200px]">
                     <div className="p-4 md:p-5 border-b border-slate-700/50 font-bold text-white flex justify-between items-center text-sm md:text-base">
                        Pending <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg shadow-red-900/50">1</span>
                     </div>
                     <div className="p-3 md:p-4 flex-1">
                        <div className="p-3 md:p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl cursor-pointer hover:bg-amber-500/20 transition-all shadow-sm group relative overflow-hidden" onClick={onNext}>
                           <div className="absolute left-0 top-0 w-1 h-full bg-amber-500"></div>
                           <div className="flex justify-between items-start mb-3">
                              <Badge variant="warning" size="sm" className="bg-amber-500/20 text-amber-400 border-none text-[10px]">PO Request</Badge>
                              <span className="text-[10px] text-slate-400">Just now</span>
                           </div>
                           <div className="font-bold text-white text-xs md:text-sm mb-1 group-hover:text-amber-200 transition-colors">MacBook Pro Procurement</div>
                           <div className="text-[10px] md:text-xs text-slate-400">Request by: IT Dept</div>
                           <div className="mt-4 flex justify-between items-center">
                              <div className="font-bold text-white text-xs md:text-sm">Rp 125jt</div>
                              <div className="text-[10px] md:text-xs text-amber-400 font-bold underline decoration-dashed">Review →</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {step === 1 && (
               <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 z-20 animate-fade-in">
                  <div className="bg-[#1e293b] w-full max-w-lg rounded-2xl shadow-2xl border border-slate-700 overflow-hidden animate-scale-in">
                     <div className="p-4 md:p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500"><FileText className="w-4 h-4"/></div>
                           <Typography variant="h3" as="h3">PO-2023-01</Typography>
                        </div>
                        <X className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" onClick={onReset} />
                     </div>
                     <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                           <div className="space-y-1">
                              <div className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Supplier</div>
                              <div className="font-medium text-white text-base md:text-lg">iBox Official Store</div>
                           </div>
                           <div className="space-y-1">
                              <div className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Total Amount</div>
                              <div className="font-bold text-emerald-400 text-base md:text-lg">Rp 125.000.000</div>
                           </div>
                        </div>
                        
                        <div className="space-y-2">
                           <div className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Items</div>
                           <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
                              <div className="p-3 border-b border-slate-700 flex justify-between text-xs md:text-sm text-slate-300">
                                 <span>MacBook Pro M3 14"</span>
                                 <span>x 5</span>
                              </div>
                              <div className="p-3 bg-slate-800/50 text-[10px] md:text-xs text-slate-400">
                                 Notes: Pengadaan untuk tim design baru. Budget ID: IT-HW-Q4.
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 md:p-6 bg-slate-900 border-t border-slate-700 flex gap-3 md:gap-4">
                        <Button variant="outline" fullWidth onClick={onReset} className="border-slate-600 text-slate-300 hover:bg-slate-800">Reject</Button>
                        <Button fullWidth onClick={onNext} className="bg-green-600 hover:bg-green-500 border-none text-white font-bold shadow-lg shadow-green-900/50">Approve Request</Button>
                     </div>
                  </div>
               </div>
            )}
            
            {step === 2 && (
               <div className="flex items-center justify-center h-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-slate-800 text-white px-6 md:px-8 py-4 rounded-2xl shadow-2xl border border-green-500/30 flex items-center gap-4 animate-fade-in-up z-30">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                           <Check className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                           <div className="font-bold text-white text-sm md:text-base">Approved Successfully</div>
                           <div className="text-[10px] md:text-xs text-slate-400">Notification sent to Procurement team.</div>
                        </div>
                     </div>
                  </div>
                  <div className="hidden" ref={(el) => { if (el) setTimeout(onNext, 2000); }}></div>
               </div>
            )}
         </div>
      );
   }

   // --- SCENARIO: FINANCE ---
   if (id === 'finance') {
      return (
         <div className="h-full flex flex-col">
            {step === 0 && (
               <div className="p-4 md:p-6 space-y-4 md:space-y-6 h-full flex flex-col">
                  <div className="flex justify-between items-end">
                     <div>
                        <Typography variant="h2" as="h2">Bank Reconciliation</Typography>
                        <Typography variant="caption" className="text-slate-400">Match bank statements with system vouchers.</Typography>
                     </div>
                     <div className="text-right">
                        <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase">Unreconciled</div>
                        <div className="text-lg md:text-xl font-bold text-amber-400">Rp 45.500.000</div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 flex-1 overflow-hidden">
                     <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden flex flex-col">
                        <div className="bg-slate-800 p-3 border-b border-slate-700 font-bold text-xs md:text-sm text-slate-300 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-blue-500"></div> BCA Statement
                        </div>
                        <div className="p-3 md:p-4 space-y-3 overflow-y-auto">
                           <div className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg opacity-50">
                              <div className="flex justify-between mb-1">
                                 <span className="text-[10px] md:text-xs text-slate-500">TRF 12/10</span>
                                 <span className="text-[10px] md:text-xs text-emerald-500">+ 15.000.000</span>
                              </div>
                              <div className="text-xs md:text-sm text-slate-400">PT MAJU JAYA</div>
                           </div>
                           <div className="p-3 md:p-4 bg-blue-900/20 border border-blue-500/50 rounded-lg ring-2 ring-blue-500/20 cursor-pointer group" onClick={onNext}>
                              <div className="flex justify-between mb-1">
                                 <span className="text-[10px] md:text-xs text-blue-300 font-bold">PENDING MATCH</span>
                                 <Typography variant="caption" className="text-white">+ 45.500.000</Typography>
                              </div>
                              <div className="text-xs md:text-sm text-white font-medium group-hover:text-blue-300 transition-colors">TRF FRM CV SUMBER REJEKI</div>
                              <div className="mt-2 text-[10px] md:text-xs text-blue-400 flex items-center gap-1">
                                 <MousePointer className="w-3 h-3 animate-bounce-x" /> Click to match
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden flex flex-col">
                        <div className="bg-slate-800 p-3 border-b border-slate-700 font-bold text-xs md:text-sm text-slate-300 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-purple-500"></div> System Invoices
                        </div>
                        <div className="p-3 md:p-4 space-y-3 overflow-y-auto">
                           <div className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg opacity-50">
                              <div className="flex justify-between mb-1">
                                 <span className="text-[10px] md:text-xs text-slate-500">INV-2023-001</span>
                                 <span className="text-[10px] md:text-xs text-slate-300">15.000.000</span>
                              </div>
                              <div className="text-xs md:text-sm text-slate-400">PT Maju Jaya</div>
                           </div>
                           <div className="p-3 bg-purple-900/10 border border-purple-500/30 rounded-lg border-dashed">
                              <div className="flex justify-between mb-1">
                                 <span className="text-[10px] md:text-xs text-purple-300 font-bold">INV-2023-005</span>
                                 <Typography variant="caption" className="text-white">45.500.000</Typography>
                              </div>
                              <div className="text-xs md:text-sm text-slate-300">CV Sumber Rejeki</div>
                              <div className="mt-2 text-[10px] md:text-xs text-slate-500">Waiting for bank match...</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {step === 1 && (
               <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                     <div className="p-4 md:p-6 bg-blue-900/20 border border-blue-500/50 rounded-2xl text-center w-full sm:w-48">
                        <div className="text-[10px] md:text-xs text-blue-400 mb-2 font-bold">BANK TRF</div>
                        <div className="text-lg md:text-xl font-bold text-white">45.500.000</div>
                     </div>
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 flex items-center justify-center rotate-90 sm:rotate-0">
                        <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-slate-400 animate-spin" />
                     </div>
                     <div className="p-4 md:p-6 bg-purple-900/20 border border-purple-500/50 rounded-2xl text-center w-full sm:w-48">
                        <div className="text-[10px] md:text-xs text-purple-400 mb-2 font-bold">INVOICE #005</div>
                        <div className="text-lg md:text-xl font-bold text-white">45.500.000</div>
                     </div>
                  </div>
                  
                  <div className="max-w-md text-center">
                     <Typography variant="h3" as="h3">AI Suggestion Found</Typography>
                     <Typography variant="caption" className="text-slate-400">Sistem mendeteksi nominal dan nama pengirim yang cocok dengan Invoice tertunggak.</Typography>
                     <Button onClick={onNext} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 h-12 shadow-lg shadow-emerald-900/50 border-none">Confirm Match</Button>
                  </div>
               </div>
            )}

            {step === 2 && (
               <div className="flex items-center justify-center h-full relative">
                  <div className="bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex flex-col items-center gap-2 animate-fade-in-up z-30">
                     <Check className="w-8 h-8" />
                     <div className="font-bold text-lg">Reconciled!</div>
                     <div className="text-sm opacity-90">Payment status updated to "Paid"</div>
                  </div>
                  <div className="hidden" ref={(el) => { if (el) setTimeout(onNext, 2000); }}></div>
               </div>
            )}
         </div>
      );
   }

   // --- SCENARIO: CEO ---
   if (id === 'ceo') {
      return (
         <div className="h-full flex flex-col bg-slate-950">
            <div className="p-4 md:p-5 border-b border-slate-800 bg-slate-900 sticky top-0 z-10 flex justify-between items-center">
               <div>
                  <div className="text-[10px] md:text-xs text-slate-400 uppercase">Executive Summary</div>
                  <div className="font-bold text-base md:text-lg text-white">Dashboard</div>
               </div>
               <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-600">
                  <OptimizedImage src="https://ui-avatars.com/api/?name=CEO&background=random" alt="CEO" />
               </div>
            </div>

            {step === 0 && (
               <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {/* Hero Metric */}
                  <div className="p-5 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg text-white">
                     <div className="text-indigo-200 text-xs font-bold uppercase mb-1">Net Profit (YTD)</div>
                     <div className="text-3xl font-bold mb-4">Rp 4.2 Miliar</div>
                     <div className="flex gap-2">
                        <div className="px-2 py-1 bg-white/20 rounded-lg text-xs font-medium flex items-center gap-1">
                           <TrendingUp className="w-3 h-3" /> +12% vs LY
                        </div>
                     </div>
                  </div>

                  {/* Drill Down Cards */}
                  <div className="grid grid-cols-2 gap-3">
                     <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl" onClick={onNext}>
                        <Wallet className="w-6 h-6 text-emerald-500 mb-3" />
                        <div className="text-slate-400 text-xs mb-1">Cash on Hand</div>
                        <div className="text-lg font-bold text-white">1.8 M</div>
                     </div>
                     <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                        <ShoppingCart className="w-6 h-6 text-blue-500 mb-3" />
                        <div className="text-slate-400 text-xs mb-1">Sales Oct</div>
                        <div className="text-lg font-bold text-white">850 Jt</div>
                     </div>
                  </div>

                  {/* Chart Mockup */}
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                     <div className="text-sm font-bold text-white mb-4">Revenue Trend</div>
                     <div className="h-32 flex items-end justify-between gap-2 px-2">
                        {[30, 45, 35, 60, 50, 75, 65].map((h, i) => (
                           <div key={i} className="w-full bg-indigo-500/20 rounded-t-sm relative">
                              <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm" style={{height: `${h}%`}}></div>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6">
                     <button onClick={onNext} className="w-12 h-12 bg-primary-500 rounded-full shadow-lg shadow-primary-500/40 flex items-center justify-center animate-bounce text-white">
                        <ArrowRight className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            )}

            {step === 1 && (
               <div className="flex-1 p-4 space-y-4">
                  <div className="text-xs font-bold text-slate-500 uppercase mb-2">Drill Down: Cash Flow</div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                     <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-white font-bold">Bank Accounts</div>
                        <div className="text-xs text-emerald-400 font-medium">Updated 5m ago</div>
                     </div>
                     <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">BCA</div>
                              <div className="text-sm text-slate-300">Main Corp</div>
                           </div>
                           <div className="font-bold text-white">1.2 M</div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">MN</div>
                              <div className="text-sm text-slate-300">Payroll</div>
                           </div>
                           <div className="font-bold text-white">600 Jt</div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 h-48 flex items-center justify-center text-center">
                     <div>
                        <PieChart className="w-12 h-12 text-slate-700 mx-auto mb-2" />
                        <div className="text-slate-500 text-sm">More detailed analysis available on Desktop.</div>
                     </div>
                  </div>
                  <Button fullWidth onClick={onNext}>Download PDF Report</Button>
               </div>
            )}

            {step === 2 && (
               <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                     <FileCheck className="w-8 h-8 text-blue-400" />
                  </div>
                  <Typography variant="h3" as="h3">Report Downloaded</Typography>
                  <Typography variant="caption" className="text-slate-500">Financial_Report_Oct.pdf saved to device.</Typography>
                  <div className="hidden" ref={(el) => { if (el) setTimeout(onNext, 1500); }}></div>
               </div>
            )}
         </div>
      );
   }

   // --- SCENARIO: WAREHOUSE ---
   if (id === 'warehouse') {
      return (
         <div className="h-full flex flex-col bg-slate-900 text-white">
            {/* Industrial Scanner UI */}
            <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center sticky top-0 z-10">
               <div className="text-sm text-primary-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div> SCANNER_V2
               </div>
               <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-bold border border-green-500/30">ONLINE</div>
            </div>

            {step === 0 && (
               <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
                  <div className="w-64 h-64 border-2 border-dashed border-slate-600 rounded-3xl flex items-center justify-center bg-slate-800/30 relative overflow-hidden group cursor-pointer hover:border-primary-500 transition-colors" onClick={onNext}>
                     <Scan className="w-20 h-20 text-slate-600 group-hover:text-primary-500 transition-colors" />
                     <div className="absolute top-0 left-0 w-full h-1 bg-red-500/80 shadow-[0_0_20px_rgba(239,68,68,1)] animate-[scan_2s_ease-in-out_infinite]"></div>
                     <div className="absolute bottom-4 text-xs text-slate-500">Tap to Scan</div>
                  </div>
                  <div>
                     <Typography variant="h3" as="h3">Ready to Receive</Typography>
                     <Typography variant="caption" className="text-slate-400">Arahkan kamera ke barcode barang masuk.</Typography>
                  </div>
               </div>
            )}

            {step === 1 && (
               <div className="flex-1 p-4 space-y-6">
                  <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl flex items-center gap-4 animate-slide-up">
                     <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-green-400" />
                     </div>
                     <div className="overflow-hidden">
                        <div className="text-[10px] text-green-400 font-bold uppercase">Code Detected</div>
                        <div className="font-bold text-lg truncate">899-202-331-001</div>
                     </div>
                  </div>

                  <div className="space-y-3 animate-slide-up delay-100">
                     <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <div className="text-xs text-slate-500 mb-1 uppercase font-bold">Product Name</div>
                        <div className="text-lg font-bold">Kursi Ergonomis Type-X</div>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <div className="text-xs text-slate-500 mb-1 uppercase font-bold">PO Reference</div>
                        <div className="text-lg font-bold text-blue-400">PO-2023-088</div>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-xl border-2 border-primary-500 relative">
                        <div className="absolute -top-2.5 left-4 bg-slate-800 px-2 text-xs text-primary-400 font-bold">QTY RECEIVED</div>
                        <div className="flex justify-between items-center mt-1">
                           <div className="text-4xl font-bold text-white">50</div>
                           <div className="text-sm text-slate-500 font-bold">PCS</div>
                        </div>
                     </div>
                  </div>

                  <Button fullWidth size="lg" onClick={onNext} className="h-14 text-lg font-bold bg-white text-slate-900 hover:bg-slate-200 mt-auto">Confirm Receipt</Button>
               </div>
            )}

             {step === 2 && (
               <div className="flex-1 flex flex-col items-center justify-center text-center">
                   <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(34,197,94,0.5)] animate-scale-in">
                      <Check className="w-12 h-12 text-white" />
                   </div>
                   <Typography variant="h3" as="h3">Stock Updated</Typography>
                   <Typography variant="body" className="text-slate-400">Inventory Level: 150 PCS</Typography>
                   <div className="hidden" ref={(el) => { if (el) setTimeout(onNext, 1500); }}></div>
               </div>
            )}
         </div>
      );
   }

   // --- SCENARIO: EMPLOYEE (HR) ---
   if (id === 'employee') {
       return (
         <div className="h-full flex flex-col bg-slate-950">
            {/* Header */}
            <div className="h-48 bg-gradient-to-br from-pink-600 to-purple-700 rounded-b-[2.5rem] p-6 relative shrink-0 shadow-lg shadow-purple-900/50">
               <div className="flex justify-between items-start text-white pt-2">
                  <div>
                     <div className="text-pink-100 text-sm font-medium mb-1">Good Morning,</div>
                     <div className="text-3xl font-bold">Andi P.</div>
                     <div className="text-xs bg-white/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full mt-2 font-medium border border-white/10">UI/UX Designer</div>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/30 transition-colors">
                     <Bell className="w-5 h-5" />
                  </div>
               </div>
            </div>

            {step === 0 && (
               <div className="px-6 -mt-12 flex-1 overflow-y-auto relative z-10 pb-6">
                  {/* Attendance Card */}
                  <div className="bg-[#1e293b] rounded-3xl shadow-xl p-6 mb-6 border border-slate-800">
                     <div className="flex justify-between items-center mb-6">
                        <div>
                           <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Today's Shift</div>
                           <div className="font-bold text-white text-lg">09:00 - 18:00</div>
                        </div>
                        <div className="text-right">
                           <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">{new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}</div>
                           <div className="font-bold text-pink-500 text-lg">08:45 AM</div>
                        </div>
                     </div>
                     
                     <button onClick={onNext} className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-3 hover:bg-slate-100 group">
                        <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                           <Scan className="w-4 h-4" />
                        </div>
                        Clock In Present
                     </button>
                  </div>

                  {/* Menu Grid */}
                  <div className="grid grid-cols-2 gap-4">
                     {[
                        {n: 'Leave', i: Calendar, c: 'text-orange-400'}, 
                        {n: 'Payslip', i: DollarSign, c: 'text-green-400'}, 
                        {n: 'Claims', i: FileText, c: 'text-blue-400'}, 
                        {n: 'Team', i: Users, c: 'text-purple-400'}
                     ].map((m, i) => (
                        <div key={i} className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 hover:bg-slate-800 transition-colors cursor-pointer">
                           <div className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center ${m.c}`}>
                              <m.i className="w-5 h-5" />
                           </div>
                           <Typography variant="caption" className="text-slate-300">{m.n}</Typography>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {step === 1 && (
               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-950 relative overflow-hidden">
                  <div className="w-40 h-40 rounded-full border-4 border-pink-500 p-1 mb-6 relative z-10">
                     <OptimizedImage src="https://ui-avatars.com/api/?name=Andi+Pratama&background=random" alt="Face" className="w-full h-full rounded-full object-cover opacity-80" />
                     <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-0.5 bg-pink-500 shadow-[0_0_10px_#ec4899] animate-[scan_1.5s_ease-in-out_infinite]"></div>
                     </div>
                  </div>
                  <Typography variant="h3" as="h3">Verifying Face ID...</Typography>
                  <Typography variant="caption" className="text-slate-500">Please look at the camera</Typography>
                  <div className="hidden" ref={(el) => { if (el) setTimeout(onNext, 2000); }}></div>
               </div>
            )}

             {step === 2 && (
               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-950">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(236,72,153,0.4)] animate-scale-in">
                     <Check className="w-12 h-12 text-white" />
                  </div>
                  <Typography variant="h3" as="h3">Clock In Success!</Typography>
                  <Typography variant="body" className="text-slate-400">Recorded: 08:46:12 AM</Typography>
                  <div className="bg-slate-900 px-4 py-2 rounded-full text-xs font-bold text-slate-300 flex items-center gap-2 border border-slate-800">
                     <MapPin className="w-3 h-3 text-pink-500" /> Head Office, Jakarta
                  </div>
                  <div className="hidden" ref={(el) => { if (el) setTimeout(onNext, 1500); }}></div>
               </div>
            )}

         </div>
       )
   }

   return <div className="text-white text-center p-10">Scenario Logic Not Implemented Yet</div>
};

export default ProductTourPage;