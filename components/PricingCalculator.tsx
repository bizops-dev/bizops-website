import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Users, Package, CheckCircle2, ArrowRight, ArrowLeft, 
  Building2, Server, Database, Briefcase, Clock, Zap, HelpCircle,
  Settings, LayoutGrid, Check, Factory, Store, UserCheck, 
  HardHat, GraduationCap, Stethoscope, MoreHorizontal, Cloud, HardDrive,
  ShoppingCart, Headphones, Wallet, BarChart3, Globe,
  Info, FileText, AppWindow, CreditCard, AlertCircle, Sparkles,
  Plug, Printer, Rocket, User, Minus, Plus, Cpu, Wrench,
  Calendar, ShieldCheck, Activity, Truck, FileCheck, PieChart, Globe2, MapPin
} from 'lucide-react';
import Button from './Button';
import { pricingPlans, addOns, ServiceAddon } from '../data/pricingData';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'assessment' | 'recommendation' | 'customize' | 'checkout' | 'thankyou';

interface AssessmentData {
  userCount: number;
  industry: string;
  companySize: string;
  branchCount: number;
  hasMultiCompany: boolean;
  deployment: string;
  serverLocation: string;
  hasLegacySystem: boolean;
  dataVolume: 'low' | 'medium' | 'high';
  // Core Modules
  needsCRM: boolean;
  needsAccounting: boolean;
  needsInventory: boolean;
  needsProcurement: boolean;
  needsHRM: boolean;
  // Specialized Modules
  needsManufacturing: boolean;
  needsProjectMgmt: boolean;
  needsAssetMgmt: boolean;
  needsHelpdesk: boolean;
  needsPOS: boolean;
  needsEcommerce: boolean;
  // Advanced Modules
  needsQualityControl: boolean;
  needsFleet: boolean;
  needsDMS: boolean;
  needsBI: boolean;
  
  apiIntegrations: number;
  customReports: number;
  needsCustomModule: boolean;
  supportLevel: string;
  goLiveTimeline: string;
  trainingPreference: 'online' | 'hybrid' | 'onsite';
}

// --- Internal Components ---

const Tooltip = ({ text }: { text: string }) => (
  <div className="group relative inline-flex items-center ml-1 z-50">
    <HelpCircle className="w-3 h-3 text-slate-500 cursor-help hover:text-primary-400" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-slate-800 border border-slate-700 text-slate-200 text-[10px] rounded-lg shadow-xl pointer-events-none">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
    </div>
  </div>
);

const SelectableCard = ({ selected, onClick, title, description, icon: Icon, badge, tooltip }: any) => (
  <motion.div 
    whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.08)" }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick} 
    className={`relative p-4 rounded-xl border cursor-pointer transition-all duration-200 h-full flex flex-col items-center text-center justify-center gap-2 group
      ${selected ? 'border-primary-500 bg-primary-500/10 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]' : 'border-white/5 bg-white/5 hover:border-white/10'}`}
  >
    {selected && <div className="absolute top-2 right-2 text-primary-500"><CheckCircle2 className="w-4 h-4" /></div>}
    {badge && <div className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">{badge}</div>}
    {tooltip && <div className="absolute top-2 right-2"><Tooltip text={tooltip} /></div>}
    {Icon && <Icon className={`w-6 h-6 transition-colors ${selected ? 'text-primary-400' : 'text-slate-500 group-hover:text-slate-300'}`} />}
    <div>
      <h4 className={`font-bold text-sm mb-0.5 ${selected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{title}</h4>
      {description && <p className="text-[10px] text-slate-500 leading-tight group-hover:text-slate-400 max-w-[120px] mx-auto">{description}</p>}
    </div>
  </motion.div>
);

interface AddonItemProps {
  addon: ServiceAddon;
  quantity: number;
  onToggle: (addonId: string, isSelected: boolean) => void;
  onQuantityChange: (addonId: string, delta: number) => void;
  formatIDR: (amount: number) => string;
  isExclusive?: boolean;
}

const AddonItem: React.FC<AddonItemProps> = ({ addon, quantity, onToggle, onQuantityChange, formatIDR, isExclusive }) => {
  const isSelected = quantity > 0;
  const isConfigurable = !isExclusive && (addon.unit.includes('per') || addon.unit.includes('sistem') || addon.unit.includes('sesi'));

  return (
    <div 
      onClick={() => !isConfigurable && onToggle(addon.id, isSelected)}
      className={`flex items-center justify-between p-4 rounded-xl border transition-all group
        ${isSelected ? 'bg-primary-900/10 border-primary-500/40 shadow-md' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/10'}
        ${!isConfigurable ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-center gap-4 flex-grow">
          <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-primary-500 border-primary-500 text-white' : 'border-slate-600 bg-transparent'}`}>
             {isSelected && <Check className="w-3.5 h-3.5" />}
          </div>
          <div>
              <div className="flex items-center gap-2">
                <h4 className={`text-sm font-bold ${isSelected ? 'text-primary-300' : 'text-white'}`}>{addon.name}</h4>
                {addon.tooltip && <Tooltip text={addon.tooltip} />}
              </div>
              <p className="text-[10px] text-slate-400 max-w-md">{addon.description}</p>
          </div>
      </div>
      
      <div className="flex items-center gap-6 flex-shrink-0">
          <div className="text-right">
              <span className={`block text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>{formatIDR(addon.price)}</span>
              <span className="text-[9px] text-slate-500">{addon.unit}</span>
          </div>

          {isConfigurable ? (
             <div className="flex items-center bg-black/40 rounded-lg border border-white/10 p-0.5" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={() => onQuantityChange(addon.id, -1)}
                  className="p-1.5 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors"
                  disabled={quantity === 0}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className={`text-xs font-bold w-8 text-center ${quantity > 0 ? 'text-white' : 'text-slate-500'}`}>{quantity}</span>
                <button 
                  onClick={() => onQuantityChange(addon.id, 1)}
                  className="p-1.5 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
             </div>
          ) : (
             <div className="w-8"></div>
          )}
      </div>
    </div>
  );
};

// --- Main Component ---

const PricingCalculator: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState<Step>('assessment');
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const [assessment, setAssessment] = useState<AssessmentData>({
    userCount: 20,
    industry: '',
    companySize: '',
    branchCount: 1,
    hasMultiCompany: false,
    deployment: '',
    serverLocation: 'jakarta',
    hasLegacySystem: false,
    dataVolume: 'low',
    // Modules
    needsCRM: true,
    needsAccounting: true,
    needsInventory: true,
    needsProcurement: false,
    needsHRM: true,
    needsManufacturing: false,
    needsProjectMgmt: false,
    needsAssetMgmt: false,
    needsHelpdesk: false,
    needsPOS: false,
    needsEcommerce: false,
    needsQualityControl: false,
    needsFleet: false,
    needsDMS: false,
    needsBI: false,
    
    apiIntegrations: 0,
    customReports: 0,
    needsCustomModule: false,
    supportLevel: 'standard',
    goLiveTimeline: '3months',
    trainingPreference: 'online'
  });

  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>({});
  
  const [contactInfo, setContactInfo] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', role: '' });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [quotationId, setQuotationId] = useState('');
  
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{code: string, percent: number} | null>(null);
  const [discountError, setDiscountError] = useState('');

  // --- LOGIC ---
  const changeStep = (direction: 'next' | 'prev' | 'jump', target?: any) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === 'next') setAssessmentStep(prev => prev + 1);
      else if (direction === 'prev') setAssessmentStep(prev => prev - 1);
      else if (direction === 'jump' && target) {
        if (typeof target === 'number') setAssessmentStep(target);
        else setCurrentStep(target);
      }
      setIsTransitioning(false);
    }, 200);
  };

  const complexityScore = useMemo(() => {
    let score = 0;
    score += assessment.userCount * 0.5;
    score += assessment.branchCount * 5;
    if (assessment.hasMultiCompany) score += 30;
    
    if (assessment.needsManufacturing) score += 20;
    if (assessment.needsEcommerce) score += 15;
    if (assessment.needsAccounting) score += 5;
    if (assessment.needsHRM) score += 5;
    if (assessment.needsPOS) score += 10;
    if (assessment.needsBI) score += 15;
    
    if (assessment.hasLegacySystem) score += 15;
    if (assessment.dataVolume === 'high') score += 10;
    
    if (assessment.apiIntegrations > 0) score += (assessment.apiIntegrations * 5);
    if (assessment.deployment === 'onprem') score += 25;
    return score;
  }, [assessment]);

  const recommendedPlanId = useMemo(() => {
    let score = 0;
    if (assessment.userCount > 300) score += 40; else if (assessment.userCount > 50) score += 15;
    if (assessment.hasMultiCompany) score += 40;
    if (assessment.branchCount > 5) score += 20;
    
    if (assessment.industry === 'manufacturing') score += 25;
    if (assessment.industry === 'healthcare') score += 15;
    
    if (assessment.deployment === 'onprem') score += 50; else if (assessment.deployment === 'dedicated') score += 25;
    if (complexityScore > 80) score += 30; else if (complexityScore > 40) score += 15;
    if (assessment.needsCustomModule) score += 35;
    
    if (score >= 60) return 'enterprise';
    if (score >= 25) return 'growth';
    return 'business';
  }, [assessment, complexityScore]);

  useEffect(() => {
    if (currentStep === 'customize' && Object.keys(selectedAddOns).length === 0) {
      const recommended: { [key: string]: number } = {};
      if (assessment.goLiveTimeline === 'urgent') recommended['impl-express'] = 1;
      else if (complexityScore > 60 || assessment.hasMultiCompany) recommended['impl-pro'] = 1;
      else recommended['impl-standard'] = 1;
      
      if (assessment.userCount > 100 || assessment.dataVolume === 'high') {
         recommended['dedicated-ip'] = 1;
         recommended['extra-storage'] = Math.ceil(assessment.userCount / 50);
      }
      if (assessment.hasLegacySystem) recommended['data-migration'] = 1;
      if (assessment.apiIntegrations > 0) recommended['api-integration'] = assessment.apiIntegrations;
      if (assessment.customReports > 0) recommended['custom-report'] = assessment.customReports;
      
      // Training logic
      if (assessment.trainingPreference === 'onsite') recommended['onsite-visit'] = 3;
      else if (assessment.trainingPreference === 'hybrid') recommended['onsite-visit'] = 1;
      
      if (assessment.trainingPreference === 'onsite' || assessment.userCount > 50) recommended['training-extra'] = Math.ceil(assessment.userCount / 20);
      
      setSelectedAddOns(recommended);
    }
  }, [currentStep, assessment, complexityScore]);

  useEffect(() => {
    if (currentStep === 'recommendation' && !selectedPlanId) setSelectedPlanId(recommendedPlanId);
  }, [currentStep, recommendedPlanId, selectedPlanId]);

  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlanId);

  const calculations = useMemo(() => {
    if (!selectedPlanData) return { basePrice: 0, monthlyRecurring: 0, oneTimeFees: 0, subtotal: 0, discountAmount: 0, totalFirstPayment: 0 };
    const basePrice = billingCycle === 'yearly' ? selectedPlanData.priceYearly : selectedPlanData.priceMonthly;
    const recurringAddOnsTotal = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (!addOn || addOn.unit.includes('one-time') || addOn.unit.includes('per')) return sum;
      return sum + (addOn.price * quantity);
    }, 0);
    const oneTimeFees = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn && (addOn.unit.includes('one-time') || addOn.unit.includes('per'))) return sum + (addOn.price * quantity);
      return sum;
    }, 0);
    const monthlyRecurring = basePrice + recurringAddOnsTotal;
    const subtotal = billingCycle === 'yearly' ? (monthlyRecurring * 12) + oneTimeFees : monthlyRecurring + oneTimeFees;
    const discountAmount = appliedDiscount ? (subtotal * appliedDiscount.percent / 100) : 0;
    const totalFirstPayment = subtotal - discountAmount;
    return { basePrice, monthlyRecurring, oneTimeFees, subtotal, discountAmount, totalFirstPayment };
  }, [selectedPlanId, billingCycle, selectedAddOns, selectedPlanData, appliedDiscount]);

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === 'BIZOPS10') { setAppliedDiscount({ code: 'BIZOPS10', percent: 10 }); setDiscountError(''); }
    else if (discountCode.toUpperCase() === 'PARTNER20') { setAppliedDiscount({ code: 'PARTNER20', percent: 20 }); setDiscountError(''); }
    else { setDiscountError('Invalid code'); setAppliedDiscount(null); }
  };

  const validateCheckout = () => {
    const errors: {[key: string]: string} = {};
    if (!contactInfo.firstName) errors.firstName = 'Required';
    if (!contactInfo.email) errors.email = 'Required';
    if (!contactInfo.company) errors.company = 'Required';
    if (!contactInfo.phone) errors.phone = 'Required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRequestQuotation = () => {
    if (validateCheckout()) {
      setQuotationId(`QT-${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`);
      changeStep('jump', 'thankyou');
    }
  };

  const handlePrint = () => window.print();
  const formatIDR = (amount: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
  
  const handleAddOnChange = (addOnId: string, quantity: number) => {
    setSelectedAddOns(prev => {
      if (quantity === 0) { const newAddOns = { ...prev }; delete newAddOns[addOnId]; return newAddOns; }
      return { ...prev, [addOnId]: quantity };
    });
  };

  // Helper for addon selection logic (Mutually Exclusive Toggles)
  const handleToggleAddon = (addonId: string, isSelected: boolean) => {
    if (addonId.includes('impl')) {
      const newAddOns = { ...selectedAddOns };
      Object.keys(newAddOns).forEach(k => {
        if (k.includes('impl')) delete newAddOns[k];
      });
      if (!isSelected) {
        newAddOns[addonId] = 1;
      }
      setSelectedAddOns(newAddOns);
    } else {
      handleAddOnChange(addonId, isSelected ? 0 : 1);
    }
  };

  const handleQuantityChange = (addonId: string, delta: number) => {
     setSelectedAddOns(prev => {
        const current = prev[addonId] || 0;
        const next = Math.max(0, current + delta);
        if (next === 0) {
            const { [addonId]: _, ...rest } = prev;
            return rest;
        }
        return { ...prev, [addonId]: next };
     });
  };
  
  const updateAssessment = (field: keyof AssessmentData, value: any) => setAssessment(prev => ({ ...prev, [field]: value }));

  const StepIndicator = () => (
    <div className="w-full max-w-2xl mx-auto mb-4 px-4">
       <div className="flex justify-between items-center relative z-10">
         {['Profile', 'Tech', 'Modules', 'Integ', 'Time', 'Review'].map((label, idx) => {
           const stepNum = idx + 1;
           const isActive = assessmentStep === stepNum;
           const isPast = assessmentStep > stepNum;
           return (
             <div key={label} className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'}`}>
               <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-1 border text-[9px] font-bold
                 ${isActive ? 'bg-primary-600 border-primary-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 
                   isPast ? 'bg-primary-500/20 border-primary-500/50 text-primary-300' : 
                   'bg-slate-800 border-slate-700 text-slate-500'}`}>
                 {isPast ? <Check className="w-3 h-3" /> : stepNum}
               </div>
               <span className="hidden sm:block text-[9px] font-bold uppercase tracking-wider">{label}</span>
             </div>
           );
         })}
       </div>
       <div className="absolute top-[0.6rem] left-0 w-full h-[1px] bg-white/5 -z-0 hidden sm:block max-w-2xl mx-auto right-0" />
       <motion.div 
         className="absolute top-[0.6rem] left-0 h-[1px] bg-primary-500 -z-0 hidden sm:block mx-auto right-0 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
         initial={{ width: '0%' }}
         animate={{ width: `${((assessmentStep - 1) / 5) * 100}%` }}
         style={{ maxWidth: '42rem' }}
       />
    </div>
  );

  const SummaryPanel = () => (
    <div className="h-full bg-white/5 border-l border-white/5 p-6 flex flex-col backdrop-blur-sm">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Sparkles className="w-3 h-3 text-amber-400" /> Live Summary
      </h3>
      <div className="space-y-5">
        <div>
          <div className="text-xs text-slate-500 mb-1 flex items-center justify-between">
             <span>Estimated Users</span>
             <Tooltip text="Jumlah pengguna yang memiliki akses login ke sistem." />
          </div>
          <div className="text-xl font-bold text-white">{assessment.userCount} <span className="text-sm font-normal text-slate-500">accounts</span></div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">Industry</div>
          <div className="text-sm font-medium text-white capitalize flex items-center gap-2">
            {assessment.industry ? assessment.industry : <span className="text-slate-600 italic">Not selected</span>}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">Modules</div>
          <div className="flex flex-wrap gap-1">
            {Object.keys(assessment).filter(k => k.startsWith('needs') && assessment[k as keyof AssessmentData] === true).length > 0 ? 
              <span className="text-sm font-medium text-white">{Object.keys(assessment).filter(k => k.startsWith('needs') && assessment[k as keyof AssessmentData] === true).length} Selected</span> : 
              <span className="text-slate-600 text-xs italic">None</span>
            }
          </div>
        </div>
      </div>
      
      <div className="flex-grow"></div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="p-4 rounded-xl bg-gradient-to-br from-primary-900/20 to-blue-900/20 border border-primary-500/20 mb-4">
          <div className="text-xs text-primary-300 font-bold uppercase mb-1">Current Status</div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${assessmentStep === 6 ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
            <span className="text-sm text-white font-medium">{assessmentStep === 6 ? 'Ready to Calculate' : 'Gathering Requirements...'}</span>
          </div>
        </div>

        {/* Desktop Navigation Actions */}
        <div className="hidden lg:grid gap-3">
            {assessmentStep < 6 ? (
                <Button variant="primary" onClick={() => changeStep('next')} className="w-full h-12 rounded-xl text-sm font-bold shadow-lg shadow-primary-500/20 bg-white text-slate-900 hover:bg-slate-200">Next Step <ArrowRight className="w-4 h-4 ml-2" /></Button>
            ) : (
                <Button variant="primary" onClick={() => changeStep('jump', 'recommendation')} className="w-full h-12 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20">Calculate Price <Rocket className="w-4 h-4 ml-2" /></Button>
            )}
            <Button variant="ghost" onClick={() => changeStep('prev')} disabled={assessmentStep === 1 || isTransitioning} className="w-full h-10 text-slate-400 hover:text-white text-xs font-medium">Back to Previous</Button>
        </div>
      </div>
    </div>
  );

  // --- RENDER STEPS ---

  const renderAssessment = () => (
    <div className="h-full flex flex-col overflow-hidden pb-20 lg:pb-0">
      <div className="flex-shrink-0 pt-4 pb-2">
        <StepIndicator />
      </div>
      
      <div className="flex-grow overflow-hidden flex">
        {/* Left Panel: Interaction */}
        <motion.div 
          key={assessmentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          {/* ... Content skipped for brevity since it's same logic ... */}
          {/* Re-implementing Step 1-6 fully below to ensure no missing parts */}
          <div className="max-w-3xl mx-auto">
            {assessmentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Company Profile</h2>
                  <p className="text-sm text-slate-400">Tentukan skala bisnis Anda untuk estimasi kapasitas server.</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-bold text-white text-base flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-400" /> User Capacity
                      <Tooltip text="Jumlah total karyawan yang akan memiliki akses login ke sistem ERP." />
                    </label>
                    <span className="text-2xl font-black text-primary-400">{assessment.userCount}</span>
                  </div>
                  <input type="range" min="5" max="500" step="5" value={assessment.userCount} onChange={(e) => updateAssessment('userCount', parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-primary-500 hover:accent-primary-400 transition-all" />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-medium uppercase tracking-wider">
                    <span>Small Team (5-20)</span>
                    <span>Growing (50-100)</span>
                    <span>Enterprise (200+)</span>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-bold text-white text-base flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400" /> Branch / Warehouse
                      <Tooltip text="Jumlah lokasi fisik (kantor cabang, gudang, pabrik) yang akan terhubung." />
                    </label>
                    <span className="text-2xl font-black text-amber-400">{assessment.branchCount}</span>
                  </div>
                  <input type="range" min="1" max="50" step="1" value={assessment.branchCount} onChange={(e) => updateAssessment('branchCount', parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {[ 
                      { id: 'startup', title: 'Small Business', desc: 'Fokus pada efisiensi & growth.', icon: Rocket }, 
                      { id: 'sme', title: 'Medium (SME)', desc: 'Butuh kontrol operasional ketat.', icon: Building2 }, 
                      { id: 'enterprise', title: 'Large Enterprise', desc: 'Keamanan & kustomisasi tinggi.', icon: Globe } 
                    ].map(opt => <SelectableCard key={opt.id} selected={assessment.companySize === opt.id} onClick={() => updateAssessment('companySize', opt.id)} {...opt} />)}
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 mb-3 block uppercase tracking-wider flex items-center gap-2">
                    Industry Sector
                    <Tooltip text="Kami akan merekomendasikan modul spesifik berdasarkan industri Anda." />
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[ 
                        { id: 'retail', name: 'Retail', icon: Store }, 
                        { id: 'manufacturing', name: 'Factory', icon: Factory }, 
                        { id: 'services', name: 'Service', icon: UserCheck }, 
                        { id: 'construction', name: 'Construction', icon: HardHat }, 
                        { id: 'education', name: 'Education', icon: GraduationCap }, 
                        { id: 'healthcare', name: 'Healthcare', icon: Stethoscope }, 
                        { id: 'fnb', name: 'Food & Beverage', icon: Info }, 
                        { id: 'other', name: 'Other', icon: MoreHorizontal } 
                      ].map(ind => <div key={ind.id} onClick={() => updateAssessment('industry', ind.id)} className={`p-2.5 rounded-lg border cursor-pointer flex flex-col items-center gap-2 transition-all ${assessment.industry === ind.id ? 'bg-primary-500/20 border-primary-500' : 'hover:bg-white/5 border-transparent bg-white/5'}`}><ind.icon className={`w-4 h-4 ${assessment.industry === ind.id ? 'text-primary-400' : 'text-slate-500'}`} /><span className={`text-xs font-medium ${assessment.industry === ind.id ? 'text-white' : 'text-slate-400'} text-center leading-tight`}>{ind.name}</span></div>)}
                  </div>
                </div>
              </div>
            )}

            {assessmentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Infrastructure</h2>
                  <p className="text-sm text-slate-400">Pilih opsi hosting yang sesuai dengan kebijakan IT Anda.</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {[ 
                      { id: 'cloud', title: 'Shared Cloud', desc: 'Hemat Biaya, Fully Managed.', icon: Cloud, tooltip: 'Resource server dibagi dengan tenant lain. Paling ekonomis.' }, 
                      { id: 'dedicated', title: 'Private VPS', desc: 'High Performance & Security.', icon: Server, tooltip: 'Resource server khusus untuk Anda. Performa stabil & isolasi data.' }, 
                      { id: 'onprem', title: 'On-Premise', desc: 'Self Hosted di kantor Anda.', icon: HardDrive, tooltip: 'Install di server fisik milik Anda. Kontrol penuh, butuh tim IT internal.' } 
                    ].map(opt => <SelectableCard key={opt.id} selected={assessment.deployment === opt.id} onClick={() => updateAssessment('deployment', opt.id)} {...opt} />)}
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <h4 className="font-bold text-white mb-3 text-sm flex items-center gap-2">
                      Server Region
                      <Tooltip text="Lokasi penyimpanan data fisik." />
                    </h4>
                    <div className="flex gap-2">
                        {[ 
                          { id: 'jakarta', label: 'Jakarta (ID)', sub: 'Sesuai Regulasi UU PDP' }, 
                          { id: 'singapore', label: 'Singapore (SG)', sub: 'Tier 3 Data Center' }, 
                          { id: 'usa', label: 'Global (US)', sub: 'Hemat Biaya' } 
                        ].map(loc => (
                          <button key={loc.id} onClick={() => updateAssessment('serverLocation', loc.id)} className={`flex-1 py-3 rounded-lg text-xs font-bold border transition-all flex flex-col items-center gap-1 ${assessment.serverLocation === loc.id ? 'bg-white text-slate-900 border-white' : 'border-white/10 text-slate-400 hover:border-white/30'}`}>
                            <span>{loc.label}</span>
                            <span className={`text-[9px] font-normal ${assessment.serverLocation === loc.id ? 'text-slate-600' : 'text-slate-500'}`}>{loc.sub}</span>
                          </button>
                        ))}
                    </div>
                </div>
                
                <div onClick={() => updateAssessment('hasMultiCompany', !assessment.hasMultiCompany)} className={`px-5 py-4 rounded-xl border cursor-pointer flex items-center justify-between transition-colors ${assessment.hasMultiCompany ? 'bg-indigo-500/10 border-indigo-500' : 'border-white/10 hover:bg-white/5 bg-white/5'}`}>
                    <div className="flex items-center gap-3">
                      <Globe2 className={`w-5 h-5 ${assessment.hasMultiCompany ? 'text-indigo-500' : 'text-slate-500'}`} />
                      <div>
                        <div className={`text-sm font-bold ${assessment.hasMultiCompany ? 'text-white' : 'text-slate-300'}`}>Multi-Entity Setup</div>
                        <div className="text-[10px] text-slate-500">Untuk perusahaan holding dengan banyak anak perusahaan (PT) dalam satu sistem.</div>
                      </div>
                    </div>
                    <div className={`w-9 h-5 rounded-full p-0.5 ${assessment.hasMultiCompany ? 'bg-indigo-500' : 'bg-slate-700'}`}><div className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${assessment.hasMultiCompany ? 'translate-x-4' : ''}`} /></div>
                </div>
              </div>
            )}

            {assessmentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Business Modules</h2>
                  <p className="text-sm text-slate-400">Pilih fungsionalitas yang dibutuhkan operasional Anda.</p>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-3 flex items-center gap-2"><LayoutGrid className="w-3 h-3" /> Core Operations</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[ 
                          { key: 'needsCRM', label: 'CRM & Sales', desc: 'Leads, Pipeline, Quotation', icon: UserCheck }, 
                          { key: 'needsAccounting', label: 'Finance', desc: 'Jurnal, Neraca, Laba Rugi', icon: Wallet }, 
                          { key: 'needsInventory', label: 'Inventory', desc: 'Stock, Warehouse, Transfer', icon: Package }, 
                          { key: 'needsProcurement', label: 'Procurement', desc: 'PO, PR, Supplier Portal', icon: ShoppingCart }, 
                          { key: 'needsHRM', label: 'HRM & Payroll', desc: 'Absensi, Cuti, Gaji, PPh21', icon: Users } 
                        ].map(m => (
                          <div key={m.key} onClick={() => updateAssessment(m.key as keyof AssessmentData, !assessment[m.key as keyof AssessmentData])} className={`p-3 rounded-xl border cursor-pointer flex flex-col gap-1 transition-all min-h-[80px] justify-center ${assessment[m.key as keyof AssessmentData] ? 'bg-primary-500/20 border-primary-500' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                            <div className="flex items-center gap-2">
                              <m.icon className={`w-4 h-4 ${assessment[m.key as keyof AssessmentData] ? 'text-primary-400' : 'text-slate-500'}`} />
                              <span className={`text-sm font-medium ${assessment[m.key as keyof AssessmentData] ? 'text-white' : 'text-slate-400'}`}>{m.label}</span>
                            </div>
                            <span className="text-[10px] text-slate-500 pl-6 leading-tight">{m.desc}</span>
                          </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2"><Settings className="w-3 h-3" /> Specialized</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[ 
                          { key: 'needsManufacturing', label: 'Manufacturing', desc: 'BOM, Work Order, Planning', icon: Factory }, 
                          { key: 'needsProjectMgmt', label: 'Project Management', desc: 'Task, Timesheet, Costing', icon: Briefcase }, 
                          { key: 'needsAssetMgmt', label: 'Asset Management', desc: 'Maintenance, Depreciation', icon: BarChart3 }, 
                          { key: 'needsHelpdesk', label: 'Helpdesk', desc: 'Ticket, SLA, Customer Portal', icon: Headphones }, 
                          { key: 'needsPOS', label: 'Point of Sales', desc: 'Kasir Retail / F&B', icon: Store }, 
                          { key: 'needsEcommerce', label: 'E-Commerce', desc: 'Webstore & Payment Gateway', icon: Globe } 
                        ].map(m => (
                          <div key={m.key} onClick={() => updateAssessment(m.key as keyof AssessmentData, !assessment[m.key as keyof AssessmentData])} className={`p-3 rounded-xl border cursor-pointer flex flex-col gap-1 transition-all min-h-[80px] justify-center ${assessment[m.key as keyof AssessmentData] ? 'bg-blue-500/20 border-blue-500' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                             <div className="flex items-center gap-2">
                               <m.icon className={`w-4 h-4 ${assessment[m.key as keyof AssessmentData] ? 'text-blue-400' : 'text-slate-500'}`} />
                               <span className={`text-sm font-medium ${assessment[m.key as keyof AssessmentData] ? 'text-white' : 'text-slate-400'}`}>{m.label}</span>
                             </div>
                             <span className="text-[10px] text-slate-500 pl-6 leading-tight">{m.desc}</span>
                          </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2"><Activity className="w-3 h-3" /> Advanced</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                        {[ 
                          { key: 'needsQualityControl', label: 'Quality Control', desc: 'Inspections & Goals', icon: Activity }, 
                          { key: 'needsFleet', label: 'Fleet Management', desc: 'Vehicle Tracking & Fuel', icon: Truck }, 
                          { key: 'needsDMS', label: 'Document Management', desc: 'Digital Archive & Versioning', icon: FileCheck }, 
                          { key: 'needsBI', label: 'Business Intelligence', desc: 'Advanced Dashboard', icon: PieChart }, 
                        ].map(m => (
                          <div key={m.key} onClick={() => updateAssessment(m.key as keyof AssessmentData, !assessment[m.key as keyof AssessmentData])} className={`p-3 rounded-xl border cursor-pointer flex flex-col gap-1 transition-all min-h-[80px] justify-center ${assessment[m.key as keyof AssessmentData] ? 'bg-purple-500/20 border-purple-500' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                             <div className="flex items-center gap-2">
                               <m.icon className={`w-4 h-4 ${assessment[m.key as keyof AssessmentData] ? 'text-purple-400' : 'text-slate-500'}`} />
                               <span className={`text-sm font-medium ${assessment[m.key as keyof AssessmentData] ? 'text-white' : 'text-slate-400'}`}>{m.label}</span>
                             </div>
                             <span className="text-[10px] text-slate-500 pl-6 leading-tight">{m.desc}</span>
                          </div>
                        ))}
                    </div>
                </div>
              </div>
            )}

            {assessmentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Integration & Customization</h2>
                  <p className="text-sm text-slate-400">Kompleksitas ekosistem IT yang dibutuhkan.</p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-white mb-3 text-sm flex items-center gap-2">
                      Data Migration Scope
                      <Tooltip text="Volume data yang akan dipindahkan dari sistem lama." />
                    </h4>
                    <div className="flex gap-2">
                        {[ 
                          { id: 'low', label: 'Master Data Only', sub: 'Customer, Vendor, Item' }, 
                          { id: 'medium', label: 'Active Transactions', sub: 'Open PO/SO/Invoice' }, 
                          { id: 'high', label: 'Full History', sub: 'All Historical Data' } 
                        ].map(vol => (
                          <button key={vol.id} onClick={() => updateAssessment('dataVolume', vol.id)} className={`flex-1 py-3 rounded-lg text-xs font-bold border transition-all flex flex-col items-center gap-1 ${assessment.dataVolume === vol.id ? 'bg-white text-slate-900 border-white' : 'border-white/10 text-slate-400 hover:border-white/30'}`}>
                            <span>{vol.label}</span>
                            <span className={`text-[9px] font-normal ${assessment.dataVolume === vol.id ? 'text-slate-600' : 'text-slate-500'}`}>{vol.sub}</span>
                          </button>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5" onClick={() => updateAssessment('hasLegacySystem', !assessment.hasLegacySystem)}>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className={`w-4 h-4 rounded border flex items-center justify-center ${assessment.hasLegacySystem ? 'bg-amber-500 border-amber-500' : 'border-slate-500'}`}>
                                {assessment.hasLegacySystem && <Check className="w-3 h-3 text-black" />}
                            </div>
                            <span className="text-xs text-slate-300">Need Legacy System Cleansing Service?</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="flex justify-between mb-4">
                      <label className="font-bold text-white text-sm flex items-center gap-2">
                        <Plug className="w-4 h-4 text-purple-400" /> API Integrations
                        <Tooltip text="Koneksi ke sistem lain seperti Marketplace (Tokopedia/Shopee), Bank, Payment Gateway, atau Logistics." />
                      </label>
                      <span className="font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded text-xs">{assessment.apiIntegrations} connections</span>
                    </div>
                    <input type="range" max="10" value={assessment.apiIntegrations} onChange={(e) => updateAssessment('apiIntegrations', parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-purple-500" />
                    <p className="text-[10px] text-slate-500 mt-2">Geser untuk estimasi jumlah sistem pihak ketiga yang akan dihubungkan.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="flex justify-between mb-4">
                      <label className="font-bold text-white text-sm flex items-center gap-2">
                        <FileText className="w-4 h-4 text-purple-400" /> Custom Reports Dev
                        <Tooltip text="Pembuatan laporan format khusus yang tidak tersedia di standar (misal: Laporan Pajak format spesifik)." />
                      </label>
                      <span className="font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded text-xs">{assessment.customReports} reports</span>
                    </div>
                    <input type="range" max="20" value={assessment.customReports} onChange={(e) => updateAssessment('customReports', parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-purple-500" />
                </div>
                <div onClick={() => updateAssessment('needsCustomModule', !assessment.needsCustomModule)} className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${assessment.needsCustomModule ? 'bg-purple-500/20 border-purple-500' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                    <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${assessment.needsCustomModule ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}><AppWindow className="w-5 h-5" /></div>
                        <div>
                          <div className={`font-bold text-sm ${assessment.needsCustomModule ? 'text-white' : 'text-slate-300'}`}>Develop Custom Module</div>
                          <div className="text-[10px] text-slate-500">Centang jika Anda memiliki alur bisnis unik yang tidak umum.</div>
                        </div>
                    </div>
                    <div className={`w-9 h-5 rounded-full p-0.5 ${assessment.needsCustomModule ? 'bg-purple-500' : 'bg-slate-700'}`}><div className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${assessment.needsCustomModule ? 'translate-x-4' : ''}`} /></div>
                </div>
              </div>
            )}

            {assessmentStep === 5 && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Timeline & SLA</h2>
                  <p className="text-sm text-slate-400">Rencana Go-Live dan Tingkat Dukungan yang diharapkan.</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {[ 
                      { id: 'urgent', title: 'Urgent', desc: '< 1 Month', icon: Zap, tooltip: 'Membutuhkan tim Fast-Track Deployment.' }, 
                      { id: '1month', title: 'Standard', desc: '1-2 Months', icon: Clock, tooltip: 'Timeline implementasi standar.' }, 
                      { id: '3months', title: 'Planned', desc: '3+ Months', icon: CreditCard, tooltip: 'Implementasi bertahap (Phased).' } 
                    ].map(t => <SelectableCard key={t.id} selected={assessment.goLiveTimeline === t.id} onClick={() => updateAssessment('goLiveTimeline', t.id)} {...t} />)}
                </div>
                
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-white mb-3 text-sm flex items-center gap-2">
                      Training Preference
                      <Tooltip text="Metode pelatihan user yang diinginkan." />
                    </h4>
                    <div className="flex gap-2">
                        {[ 
                          { id: 'online', label: 'Online (Zoom)', sub: 'Flexible & Recorded' }, 
                          { id: 'hybrid', label: 'Hybrid Mix', sub: 'Online + 1 Day Onsite' }, 
                          { id: 'onsite', label: 'Full Onsite', sub: 'Intensive Face-to-Face' } 
                        ].map(tp => (
                          <button key={tp.id} onClick={() => updateAssessment('trainingPreference', tp.id)} className={`flex-1 py-3 rounded-lg text-xs font-bold border transition-all flex flex-col items-center gap-1 ${assessment.trainingPreference === tp.id ? 'bg-white text-slate-900 border-white' : 'border-white/10 text-slate-400 hover:border-white/30'}`}>
                            <span>{tp.label}</span>
                            <span className={`text-[9px] font-normal ${assessment.trainingPreference === tp.id ? 'text-slate-600' : 'text-slate-500'}`}>{tp.sub}</span>
                          </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-bold text-white mb-4 text-sm text-center">Support SLA Level</h4>
                    <div className="grid grid-cols-3 gap-2">
                        {['standard', 'priority', 'premium'].map(lvl => <button key={lvl} onClick={() => updateAssessment('supportLevel', lvl)} className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${assessment.supportLevel === lvl ? 'bg-primary-600 text-white border-primary-500 shadow-lg shadow-primary-500/20' : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'}`}>{lvl}</button>)}
                    </div>
                    <div className="bg-black/20 mt-4 p-4 rounded-xl border border-white/5 text-center">
                      {assessment.supportLevel === 'standard' && (
                        <div className="text-xs text-slate-400">
                          <span className="font-bold text-white">Email Support Only</span>. Response time max 2x24 jam kerja. Cocok untuk tim IT mandiri.
                        </div>
                      )}
                      {assessment.supportLevel === 'priority' && (
                        <div className="text-xs text-slate-400">
                          <span className="font-bold text-white">Chat & Email Support</span>. Response time max 12 jam kerja. Bantuan kendala teknis operasional.
                        </div>
                      )}
                      {assessment.supportLevel === 'premium' && (
                        <div className="text-xs text-slate-400">
                          <span className="font-bold text-white">Dedicated Account Manager & 24/7 Hotline</span>. Response time &lt; 2 jam. Prioritas penanganan isu kritis.
                        </div>
                      )}
                    </div>
                </div>
              </div>
            )}

            {assessmentStep === 6 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Review Data</h2>
                  <p className="text-sm text-slate-400">Pastikan spesifikasi kebutuhan Anda sudah lengkap & akurat.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Profile Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                       <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                          <Building2 className="w-4 h-4 text-primary-400" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Business Profile</h4>
                       </div>
                       <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                             <span className="text-slate-400">Industry</span>
                             <span className="text-white font-medium capitalize">{assessment.industry || 'Not Set'}</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Size</span>
                             <span className="text-white font-medium capitalize">{assessment.companySize}</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Estimated Users</span>
                             <span className="text-white font-bold">{assessment.userCount} Accounts</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Branches</span>
                             <span className="text-white font-bold">{assessment.branchCount} Locations</span>
                          </div>
                       </div>
                    </div>

                    {/* Infrastructure Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                       <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                          <Server className="w-4 h-4 text-blue-400" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Infrastructure</h4>
                       </div>
                       <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                             <span className="text-slate-400">Deployment</span>
                             <span className="text-white font-medium capitalize">{assessment.deployment === 'onprem' ? 'On-Premise' : assessment.deployment === 'dedicated' ? 'Private Cloud' : 'Shared Cloud'}</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Region</span>
                             <span className="text-white font-medium capitalize">{assessment.serverLocation}</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Multi-Entity</span>
                             <span className={`font-medium ${assessment.hasMultiCompany ? 'text-indigo-400' : 'text-white'}`}>{assessment.hasMultiCompany ? 'Yes' : 'No'}</span>
                          </div>
                       </div>
                    </div>

                    {/* Modules Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors md:col-span-2">
                       <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                          <LayoutGrid className="w-4 h-4 text-emerald-400" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Selected Modules</h4>
                       </div>
                       <div className="flex flex-wrap gap-2">
                          {Object.keys(assessment).filter(k => k.startsWith('needs') && assessment[k as keyof AssessmentData] === true).map(k => (
                             <span key={k} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-medium capitalize">
                               {k.replace('needs', '').replace(/([A-Z])/g, ' $1').trim()}
                             </span>
                          ))}
                          {Object.keys(assessment).filter(k => k.startsWith('needs') && assessment[k as keyof AssessmentData] === true).length === 0 && (
                             <span className="text-slate-500 text-sm italic">No modules selected</span>
                          )}
                       </div>
                    </div>

                    {/* Integration & Tech Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                       <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                          <Cpu className="w-4 h-4 text-purple-400" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Technical Specifications</h4>
                       </div>
                       <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                             <span className="text-slate-400">Data Migration</span>
                             <span className="text-white font-medium capitalize">{assessment.dataVolume} Volume</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">API Integrations</span>
                             <span className="text-white font-bold">{assessment.apiIntegrations} Endpoints</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Custom Module</span>
                             <span className={`font-medium ${assessment.needsCustomModule ? 'text-purple-400' : 'text-white'}`}>{assessment.needsCustomModule ? 'Yes' : 'No'}</span>
                          </div>
                       </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                       <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                          <Calendar className="w-4 h-4 text-amber-400" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Plan & Service</h4>
                       </div>
                       <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                             <span className="text-slate-400">Go-Live Target</span>
                             <span className="text-white font-medium capitalize">{assessment.goLiveTimeline === 'urgent' ? '< 1 Month' : assessment.goLiveTimeline === '1month' ? '1-2 Months' : '3+ Months'}</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Training</span>
                             <span className="text-white font-medium capitalize">{assessment.trainingPreference}</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-slate-400">Support Level</span>
                             <span className="text-white font-medium capitalize">{assessment.supportLevel} SLA</span>
                          </div>
                       </div>
                    </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Panel: Summary */}
        <div className="hidden lg:block w-[320px] flex-shrink-0">
          <SummaryPanel />
        </div>
      </div>

      {/* Footer Nav (Mobile Only) */}
      <div className="lg:hidden p-4 border-t border-white/10 bg-[#0B0F19]/80 backdrop-blur-md flex justify-between items-center z-20 fixed bottom-0 left-0 right-0">
        <Button variant="ghost" onClick={() => changeStep('prev')} disabled={assessmentStep === 1 || isTransitioning} className="h-10 text-slate-400 hover:text-white px-4 text-sm font-medium"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
        {assessmentStep < 6 ? (
            <Button variant="primary" onClick={() => changeStep('next')} className="h-10 px-6 rounded-full text-sm font-bold shadow-lg shadow-primary-500/20 bg-white text-slate-900 hover:bg-slate-200">Next Step <ArrowRight className="w-4 h-4 ml-2" /></Button>
        ) : (
            <Button variant="primary" onClick={() => changeStep('jump', 'recommendation')} className="h-10 px-8 rounded-full text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20">Calculate Price <Rocket className="w-4 h-4 ml-2" /></Button>
        )}
      </div>
    </div>
  );

  const renderRecommendation = () => {
    return (
      <div className="h-full flex flex-col overflow-hidden bg-[#0B0F19]">
        <div className="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10 pt-4">
                    <h2 className="text-3xl font-bold text-white mb-2">Rekomendasi Paket</h2>
                    <p className="text-sm text-slate-400">Solusi terbaik berdasarkan profil bisnis & kebutuhan teknis Anda.</p>
                </div>
                
                {/* Billing Cycle Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="bg-white/5 border border-white/10 p-1 rounded-xl flex relative">
                    <button 
                      onClick={() => setBillingCycle('monthly')} 
                      className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Bulanan
                    </button>
                    <button 
                      onClick={() => setBillingCycle('yearly')} 
                      className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Tahunan <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded ml-1">-20%</span>
                    </button>
                    <motion.div 
                      className="absolute top-1 bottom-1 bg-primary-600 rounded-lg shadow-lg"
                      initial={false}
                      animate={{ 
                        left: billingCycle === 'monthly' ? '4px' : '50%', 
                        width: billingCycle === 'monthly' ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                        x: billingCycle === 'monthly' ? 0 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 items-center">
                    {pricingPlans.map(plan => {
                        const isSelected = plan.id === selectedPlanId;
                        const isRec = plan.id === recommendedPlanId;
                        const priceValue = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
                        
                        return (
                            <motion.div 
                                key={plan.id} 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                onClick={() => setSelectedPlanId(plan.id)} 
                                className={`relative p-6 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col h-full
                                ${isSelected ? 'bg-slate-800/80 border-primary-500 ring-1 ring-primary-500 shadow-2xl scale-105 z-10' : 'bg-slate-900/50 border-white/5 hover:bg-slate-800/50 hover:border-white/10 scale-100 opacity-80 hover:opacity-100'}`}
                            >
                                {isRec && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-500/20">Best Match</div>}
                                <div className="text-center mb-6 mt-2">
                                    <h3 className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>{plan.name}</h3>
                                    <div className="flex justify-center items-baseline gap-1 mt-2">
                                        {priceValue > 0 ? (
                                            <>
                                                <span className={`text-3xl font-black ${isSelected ? 'text-white' : 'text-slate-400'}`}>{priceValue / 1000000}</span>
                                                <span className="text-xs font-bold text-slate-500 uppercase">Juta / bln</span>
                                            </>
                                        ) : (
                                            <span className={`text-3xl font-black ${isSelected ? 'text-white' : 'text-slate-400'}`}>Custom</span>
                                        )}
                                    </div>
                                    <div className="text-[10px] text-slate-500 mt-1">
                                      {plan.id === 'enterprise' ? 'Custom SLA & Integrations' : billingCycle === 'yearly' ? 'Dibayar per tahun' : 'Dibayar per bulan'}
                                    </div>
                                </div>
                                <div className="space-y-3 mb-8 flex-grow">
                                    {plan.features.slice(0, 5).map((f, i) => <div key={i} className="flex gap-3 text-xs text-slate-400"><CheckCircle2 className={`w-3 h-3 flex-shrink-0 ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`} /> {f}</div>)}
                                </div>
                                <Button fullWidth variant={isSelected ? 'primary' : 'outline'} className={`h-10 text-xs font-bold rounded-xl ${isSelected ? 'bg-white text-slate-900 hover:bg-slate-200 shadow-lg' : 'border-slate-700 text-slate-400 hover:text-white'}`}>{isSelected ? 'Paket Terpilih' : 'Pilih Paket Ini'}</Button>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="p-4 border-t border-white/10 bg-[#0B0F19]/90 backdrop-blur flex justify-center z-20">
            <Button variant="primary" onClick={() => changeStep('jump', 'customize')} className="h-12 px-12 rounded-full text-sm font-bold shadow-xl shadow-primary-500/20 bg-primary-600 hover:bg-primary-500 text-white">Lanjut Konfigurasi Add-ons <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>
      </div>
    );
  };

  const renderCustomize = () => {
    // Separate addons into 4 distinct groups
    const infrastructureAddons = addOns.filter(a => a.category === 'infrastructure');
    const implementationAddons = addOns.filter(a => a.category === 'implementation');
    const supportAddons = addOns.filter(a => a.category === 'support');
    const integrationAddons = addOns.filter(a => a.category === 'integration');

    const sections = [
        { title: 'Infrastructure & Hardware', icon: Server, color: 'text-blue-400', items: infrastructureAddons },
        { title: 'Implementation Services', icon: Rocket, color: 'text-emerald-400', items: implementationAddons },
        { title: 'Support & Maintenance', icon: Headphones, color: 'text-amber-400', items: supportAddons },
        { title: 'Integrations & Customization', icon: Plug, color: 'text-purple-400', items: integrationAddons },
    ];

    return (
        <div className="h-full flex flex-col overflow-hidden bg-[#0B0F19]">
            <div className="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 h-full">
                    <div className="lg:col-span-8 space-y-8 pb-12">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><CreditCard className="w-5 h-5" /></div>
                                <div><h3 className="font-bold text-white text-sm">Siklus Pembayaran</h3><p className="text-xs text-slate-400">Hemat 20% dengan pembayaran tahunan.</p></div>
                            </div>
                            <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                                <button onClick={() => setBillingCycle('monthly')} className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${billingCycle === 'monthly' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-white'}`}>Bulanan</button>
                                <button onClick={() => setBillingCycle('yearly')} className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${billingCycle === 'yearly' ? 'bg-primary-600 text-white shadow' : 'text-slate-500 hover:text-white'}`}>Tahunan (-20%)</button>
                            </div>
                        </div>
                        
                        {sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                                    <section.icon className={`w-4 h-4 ${section.color}`} />
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">{section.title}</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {section.items.map(addon => {
                                        if (addon.availableFor.includes(selectedPlanId) || selectedPlanId === 'enterprise') {
                                            return (
                                                <AddonItem 
                                                  key={addon.id}
                                                  addon={addon}
                                                  quantity={selectedAddOns[addon.id] || 0}
                                                  onToggle={handleToggleAddon}
                                                  onQuantityChange={handleQuantityChange}
                                                  formatIDR={formatIDR}
                                                  isExclusive={addon.id.includes('impl')}
                                                />
                                            );
                                        } 
                                        return null;
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Sticky Summary */}
                    <div className="lg:col-span-4 h-full flex flex-col">
                        <div className="bg-[#0F1623] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex-grow flex flex-col sticky top-6">
                            <div className="p-6 border-b border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900">
                                <h3 className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Wallet className="w-3 h-3" /> Estimated Investment</h3>
                                <div className="text-3xl font-black text-white tracking-tight">{calculations.totalFirstPayment > 0 ? formatIDR(calculations.totalFirstPayment) : 'Custom'}</div>
                                <p className="text-[10px] text-slate-500 mt-1">Total pembayaran awal (termasuk pajak)</p>
                            </div>
                            <div className="p-6 space-y-4 flex-grow overflow-y-auto">
                                <div className="flex justify-between text-xs text-slate-400 border-b border-white/5 pb-3">
                                    <span>Paket ({billingCycle === 'yearly' ? 'Tahunan' : 'Bulanan'})</span> 
                                    <span className="text-white font-medium">
                                        {calculations.basePrice > 0 ? formatIDR(billingCycle === 'yearly' ? calculations.basePrice * 12 : calculations.basePrice) : 'Custom'}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    {Object.entries(selectedAddOns).map(([id, qty]) => {
                                        const item = addOns.find(a => a.id === id); if(!item || qty === 0) return null;
                                        const price = (item.unit.includes('one-time') || item.unit.includes('per')) ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                                        return <div key={id} className="flex justify-between text-[10px] text-slate-500"><span>{item.name} {qty > 1 && `(${qty}x)`}</span> <span className="text-slate-300">{formatIDR(price)}</span></div>
                                    })}
                                </div>
                                <div className="pt-3 border-t border-white/10 flex justify-between text-sm font-bold text-white"><span>Subtotal</span> <span>{calculations.subtotal > 0 ? formatIDR(calculations.subtotal) : 'Custom'}</span></div>
                            </div>
                            <div className="p-6 bg-black/20 border-t border-white/5 mt-auto">
                                <Button fullWidth variant="primary" onClick={() => changeStep('jump', 'checkout')} className="h-12 text-sm font-bold rounded-xl shadow-lg bg-white text-slate-900 hover:bg-slate-200">Checkout</Button>
                                <button onClick={() => changeStep('jump', 'recommendation')} className="w-full text-center text-[10px] text-slate-500 hover:text-white mt-3 transition-colors">Ubah Paket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  const renderCheckout = () => (
    <div className="h-full flex items-center justify-center p-6 overflow-y-auto bg-[#0B0F19]">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
            <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400"><User className="w-4 h-4" /></div>
                    <h3 className="font-bold text-white text-lg">Informasi Kontak</h3>
                </div>
                <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block ml-1">Nama Depan</label>
                            <input type="text" className="bg-black/20 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-primary-500 outline-none w-full transition-colors focus:bg-black/40" value={contactInfo.firstName} onChange={e => setContactInfo({...contactInfo, firstName: e.target.value})} />
                        </div>
                        <div>
                            <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block ml-1">Nama Belakang</label>
                            <input type="text" className="bg-black/20 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-primary-500 outline-none w-full transition-colors focus:bg-black/40" value={contactInfo.lastName} onChange={e => setContactInfo({...contactInfo, lastName: e.target.value})} />
                        </div>
                    </div>
                    <div>
                        <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block ml-1">Email Bisnis</label>
                        <input type="email" className="bg-black/20 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-primary-500 outline-none w-full transition-colors focus:bg-black/40" value={contactInfo.email} onChange={e => setContactInfo({...contactInfo, email: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block ml-1">Nama Perusahaan</label>
                        <input type="text" className="bg-black/20 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-primary-500 outline-none w-full transition-colors focus:bg-black/40" value={contactInfo.company} onChange={e => setContactInfo({...contactInfo, company: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block ml-1">No. Telepon / WhatsApp</label>
                        <input type="tel" className="bg-black/20 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-primary-500 outline-none w-full transition-colors focus:bg-black/40" value={contactInfo.phone} onChange={e => setContactInfo({...contactInfo, phone: e.target.value})} />
                    </div>
                    
                    <div className="pt-4 border-t border-white/5">
                        <label className="text-[10px] uppercase font-bold text-slate-500 mb-1 block ml-1">Kode Voucher</label>
                        <div className="flex gap-2">
                            <input type="text" className="flex-1 bg-black/20 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white uppercase focus:border-primary-500 outline-none" value={discountCode} onChange={e => setDiscountCode(e.target.value)} />
                            <Button variant="outline" onClick={handleApplyDiscount} className="border-slate-700 text-xs px-6 rounded-xl hover:bg-white/5 hover:text-white">Gunakan</Button>
                        </div>
                        {appliedDiscount && <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Voucher berhasil digunakan!</p>}
                        {Object.keys(formErrors).length > 0 && <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Mohon lengkapi semua field wajib.</p>}
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-between space-y-6 h-full">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-8 rounded-3xl shadow-2xl relative overflow-hidden flex-grow">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <h3 className="font-bold text-white mb-6 text-xl">Ringkasan Pesanan</h3>
                    <div className="space-y-4 text-sm relative z-10">
                        <div className="flex justify-between text-slate-400 border-b border-white/5 pb-3"><span>Paket Terpilih</span> <span className="text-white font-bold">{selectedPlanData?.name}</span></div>
                        <div className="flex justify-between text-slate-400 border-b border-white/5 pb-3"><span>Siklus</span> <span className="text-white font-bold capitalize">{billingCycle === 'yearly' ? 'Tahunan' : 'Bulanan'}</span></div>
                        <div className="flex justify-between text-slate-400 border-b border-white/5 pb-3"><span>Total User</span> <span className="text-white font-bold">{assessment.userCount} Akun</span></div>
                        <div className="flex justify-between text-slate-400 border-b border-white/5 pb-3"><span>Add-ons</span> <span className="text-white font-bold">{Object.keys(selectedAddOns).length} Item</span></div>
                        <div className="pt-4 flex justify-between items-end">
                            <span className="text-lg font-bold text-white">Grand Total</span> 
                            <div className="text-right">
                                <span className="block text-3xl font-black text-white">{calculations.totalFirstPayment > 0 ? formatIDR(calculations.totalFirstPayment) : 'Custom'}</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Estimasi Awal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <Button fullWidth variant="primary" onClick={handleRequestQuotation} className="h-14 rounded-2xl text-base font-bold shadow-xl bg-white text-slate-900 hover:bg-slate-200">Dapatkan Penawaran Resmi</Button>
                    <button onClick={() => changeStep('jump', 'customize')} className="w-full text-center text-xs text-slate-500 hover:text-white transition-colors py-2">Kembali ke Konfigurasi</button>
                </div>
            </div>
        </div>
    </div>
  );

  const renderThankYou = () => (
    <div className="w-full h-full bg-[#0B0F19] overflow-y-auto">
        <div className="min-h-full flex flex-col items-center justify-start p-8 text-center pb-24">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.3)] mt-8">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Penawaran Siap!</h2>
            <p className="text-slate-400 mb-8 text-base">Dokumen resmi telah dikirim ke <span className="text-white font-bold">{contactInfo.email}</span></p>
            
            {/* Visible Quotation Preview */}
            <div className="bg-white text-slate-900 p-12 rounded-lg shadow-2xl max-w-4xl w-full mx-auto mb-8 text-left relative overflow-hidden">
                <div className="flex justify-between items-start mb-12 border-b-2 border-slate-900 pb-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">QUOTATION</h1>
                        <p className="text-sm text-slate-500 uppercase tracking-widest font-sans">Reference: #{quotationId}</p>
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl font-bold text-primary-900 tracking-tight mb-1">BizOps</h2>
                        <p className="text-sm text-slate-600 font-sans">PT Divistant Teknologi Indonesia</p>
                        <p className="text-xs text-slate-500 font-sans mt-1 max-w-[200px] ml-auto">
                            Eco-S Sahid Sudirman Residence <br/>
                            Jl. Jenderal Sudirman No.86, Jakarta 10250
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 font-sans">Quotation For</h3>
                        <div className="text-slate-900">
                            <p className="font-bold text-lg">{contactInfo.company}</p>
                            <p className="text-sm mt-1">Attn: {contactInfo.firstName} {contactInfo.lastName}</p>
                            <p className="text-sm text-slate-600">{contactInfo.email}</p>
                            <p className="text-sm text-slate-600">{contactInfo.phone}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="mb-4">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 font-sans">Issue Date</h3>
                            <p className="font-medium text-slate-900">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 font-sans">Valid Until</h3>
                            <p className="font-medium text-slate-900">{new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                    </div>
                </div>

                <table className="w-full text-left mb-12">
                    <thead>
                        <tr className="border-b-2 border-slate-900 text-slate-900">
                            <th className="pb-4 font-bold uppercase text-xs tracking-wider w-1/2 font-sans">Description</th>
                            <th className="pb-4 font-bold uppercase text-xs tracking-wider text-right font-sans">Amount (IDR)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                            <td className="py-4">
                                <span className="font-bold text-slate-900 block text-lg mb-1">{selectedPlanData?.name} Package</span>
                                <span className="text-slate-500 text-sm font-sans">Billing Cycle: {billingCycle === 'yearly' ? 'Yearly (-20%)' : 'Monthly'}</span>
                            </td>
                            <td className="py-4 text-right font-bold text-slate-900 text-lg">
                                {calculations.basePrice > 0 
                                    ? formatIDR(billingCycle === 'yearly' ? calculations.basePrice * 12 : calculations.basePrice)
                                    : 'Custom Price'
                                }
                            </td>
                        </tr>
                        {Object.entries(selectedAddOns).map(([id, qty]) => {
                            const item = addOns.find(a => a.id === id); if(!item) return null;
                            const price = (item.unit.includes('one-time') || item.unit.includes('per')) ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                            return (
                                <tr key={id}>
                                    <td className="py-4">
                                        <span className="text-slate-800 block font-medium">{item.name}</span>
                                        <span className="text-slate-500 text-xs font-sans">Qty: {qty} x {item.unit}</span>
                                    </td>
                                    <td className="py-4 text-right font-medium text-slate-700">{formatIDR(price)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="border-t-2 border-slate-900">
                            <td className="pt-6 font-bold text-xl text-slate-900 uppercase tracking-tight">Total Investment</td>
                            <td className="pt-6 text-right font-black text-2xl text-primary-900">{calculations.totalFirstPayment > 0 ? formatIDR(calculations.totalFirstPayment) : 'Custom'}</td>
                        </tr>
                        {appliedDiscount && (
                            <tr>
                                <td className="pt-2 text-emerald-600 text-sm italic font-sans">Includes discount {appliedDiscount.percent}% ({appliedDiscount.code})</td>
                                <td></td>
                            </tr>
                        )}
                        <tr>
                            <td colSpan={2} className="pt-2 text-right text-xs text-slate-400 font-sans italic">* Prices include applicable taxes</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="grid grid-cols-2 gap-12 pt-8 border-t border-slate-100 break-inside-avoid">
                    <div>
                        <h4 className="font-bold text-sm text-slate-900 mb-2 font-sans">Payment Terms</h4>
                        <ul className="text-xs text-slate-600 space-y-1 font-sans list-disc pl-4">
                            <li>Payment is due within 14 days of invoice date.</li>
                            <li>Bank transfer to BCA 1234567890 a/n PT Divistant Teknologi Indonesia.</li>
                            <li>Please include invoice number in transfer description.</li>
                        </ul>
                    </div>
                    <div className="text-center mt-8">
                        <div className="h-20 flex items-end justify-center">
                            <p className="text-slate-300 font-handwriting text-2xl rotate-[-5deg] opacity-50">Authorized</p>
                        </div>
                        <div className="border-t border-slate-300 pt-2 w-48 mx-auto">
                            <p className="text-xs font-bold text-slate-900 uppercase">Authorized Signature</p>
                        </div>
                    </div>
                </div>

                <div className="text-center text-[10px] text-slate-400 mt-12 pt-6 border-t border-slate-100 font-sans">
                    &copy; {new Date().getFullYear()} PT Divistant Teknologi Indonesia. All rights reserved. <br/>
                    This is a computer-generated document. No signature is required.
                </div>
            </div>

            <div className="flex gap-4 mb-12">
                <Button variant="primary" onClick={handlePrint} className="px-8 h-12 rounded-full font-bold shadow-lg bg-white text-slate-900 hover:bg-slate-200"><Printer className="w-4 h-4 mr-2" /> Download / Print PDF</Button>
                <Button variant="outline" onClick={() => window.location.reload()} className="px-8 h-12 rounded-full border-slate-700 text-slate-300 hover:text-white hover:bg-white/5">Buat Baru</Button>
            </div>
        </div>
        
        {/* Hidden Print Area (Preserved for print layout consistency) */}
        <div className="hidden print:block fixed inset-0 bg-white text-black p-16 z-[9999]" ref={quoteRef}>
            <div className="flex justify-between items-start mb-16 border-b-2 border-black pb-8">
                <div>
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">QUOTATION</h1>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Reference: #{quotationId}</p>
                </div>
                <div className="text-right">
                    <h2 className="text-3xl font-bold mb-2">BizOps</h2>
                    <p className="text-base font-bold">PT Divistant Teknologi Indonesia</p>
                    <p className="text-sm text-gray-600 mt-1 max-w-[250px] ml-auto">
                        Eco-S Sahid Sudirman Residence <br/>
                        Jl. Jenderal Sudirman No.86, Jakarta 10250
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-16 mb-16">
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Quotation For</h3>
                    <div className="text-black space-y-1">
                        <p className="font-bold text-xl">{contactInfo.company}</p>
                        <p className="text-base">Attn: {contactInfo.firstName} {contactInfo.lastName}</p>
                        <p className="text-base text-gray-600">{contactInfo.email}</p>
                        <p className="text-base text-gray-600">{contactInfo.phone}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="mb-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Issue Date</h3>
                        <p className="font-medium text-lg">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Valid Until</h3>
                        <p className="font-medium text-lg">{new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                </div>
            </div>

            <table className="w-full text-left mb-16">
                <thead>
                    <tr className="border-b-2 border-black">
                        <th className="pb-4 font-bold uppercase text-xs tracking-wider w-1/2">Description</th>
                        <th className="pb-4 font-bold uppercase text-xs tracking-wider text-right">Amount (IDR)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="py-4">
                            <span className="font-bold block text-lg mb-1">{selectedPlanData?.name} Package</span>
                            <span className="text-gray-600 text-sm">Billing Cycle: {billingCycle === 'yearly' ? 'Yearly (-20%)' : 'Monthly'}</span>
                        </td>
                        <td className="py-4 text-right font-bold text-lg">
                            {calculations.basePrice > 0 
                                ? formatIDR(billingCycle === 'yearly' ? calculations.basePrice * 12 : calculations.basePrice)
                                : 'Custom Price'
                            }
                        </td>
                    </tr>
                    {Object.entries(selectedAddOns).map(([id, qty]) => {
                        const item = addOns.find(a => a.id === id); if(!item) return null;
                        const price = (item.unit.includes('one-time') || item.unit.includes('per')) ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                        return (
                            <tr key={id}>
                                <td className="py-4">
                                    <span className="block font-medium">{item.name}</span>
                                    <span className="text-gray-600 text-xs">Qty: {qty} x {item.unit}</span>
                                </td>
                                <td className="py-4 text-right font-medium text-gray-800">{formatIDR(price)}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr className="border-t-2 border-black">
                        <td className="pt-6 font-bold text-xl uppercase tracking-tight">Total Investment</td>
                        <td className="pt-6 text-right font-black text-2xl">{calculations.totalFirstPayment > 0 ? formatIDR(calculations.totalFirstPayment) : 'Custom'}</td>
                    </tr>
                    {appliedDiscount && (
                        <tr>
                            <td className="pt-2 text-gray-600 text-sm italic">Includes discount {appliedDiscount.percent}% ({appliedDiscount.code})</td>
                            <td></td>
                        </tr>
                    )}
                     <tr>
                        <td colSpan={2} className="pt-2 text-right text-xs text-gray-500 italic">* Prices include applicable taxes</td>
                    </tr>
                </tfoot>
            </table>

            <div className="grid grid-cols-2 gap-16 pt-8 border-t border-gray-200">
                <div>
                    <h4 className="font-bold text-sm mb-2">Payment Terms</h4>
                    <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                        <li>Payment is due within 14 days of invoice date.</li>
                        <li>Bank transfer to BCA 1234567890 a/n PT Divistant Teknologi Indonesia.</li>
                        <li>Please include invoice number in transfer description.</li>
                    </ul>
                </div>
                <div className="text-center mt-8">
                     <div className="h-20 flex items-end justify-center">
                        {/* Empty space for signature */}
                    </div>
                    <div className="border-t border-gray-400 pt-2 w-48 mx-auto">
                        <p className="text-xs font-bold uppercase">Authorized Signature</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center text-[10px] text-gray-500 mt-16 pt-6 border-t border-gray-200">
                 &copy; {new Date().getFullYear()} PT Divistant Teknologi Indonesia. All rights reserved. <br/>
                This is a computer-generated document. No signature is required.
            </div>
        </div>
    </div>
  );

  return (
    <div className="h-full text-slate-200 font-sans selection:bg-primary-500/30">
      {currentStep === 'assessment' && renderAssessment()}
      {currentStep === 'recommendation' && renderRecommendation()}
      {currentStep === 'customize' && renderCustomize()}
      {currentStep === 'checkout' && renderCheckout()}
      {currentStep === 'thankyou' && renderThankYou()}
    </div>
  );
};

export default PricingCalculator;
