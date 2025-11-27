import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Users, Package, Shield, Rocket, CheckCircle2, ArrowRight, ArrowLeft, 
  Building2, Server, Database, Briefcase, Clock, Zap, HelpCircle,
  Settings, LayoutGrid, Check, Factory, Store, UserCheck, 
  HardHat, GraduationCap, Stethoscope, MoreHorizontal, Cloud, HardDrive,
  Tag, UserPlus, FileSignature, Mail, Phone, User, Lock, Download, Printer, Share2,
  ShoppingCart, Headphones, Wallet, BarChart3, Globe, MapPin, BadgePercent,
  Info, FileText, AppWindow
} from 'lucide-react';
import Button from './Button';
import Card from './Card';
import { pricingPlans, addOns } from '../data/pricingData';

type Step = 'assessment' | 'recommendation' | 'customize' | 'checkout' | 'thankyou';

interface AssessmentData {
  // 1. Profile
  userCount: number;
  industry: string;
  companySize: string;
  locations: number;
  
  // 2. Technical
  deployment: string;
  serverLocation: string;
  hasLegacySystem: boolean;
  dataVolume: string;
  
  // 3. Modules
  needsCRM: boolean;
  needsAccounting: boolean;
  needsInventory: boolean;
  needsProcurement: boolean;
  needsHRM: boolean;
  
  // Specialized
  needsManufacturing: boolean;
  needsProjectMgmt: boolean;
  needsAssetMgmt: boolean;
  needsHelpdesk: boolean;
  needsPOS: boolean;
  needsEcommerce: boolean;
  
  // 4. Integration
  apiIntegrations: number;
  customReports: number;
  needsCustomModule: boolean;
  
  // 5. Support
  supportLevel: string;
  goLiveTimeline: string;
  trainingNeeds: string;
}

const PricingCalculator: React.FC = () => {
  const CalendarIcon = Clock;
  const quoteRef = useRef<HTMLDivElement>(null);

  const [currentStep, setCurrentStep] = useState<Step>('assessment');
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const [assessment, setAssessment] = useState<AssessmentData>({
    userCount: 20,
    industry: '',
    companySize: '',
    locations: 1,
    deployment: '',
    serverLocation: 'jakarta',
    hasLegacySystem: false,
    dataVolume: 'low',
    
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

    apiIntegrations: 0,
    customReports: 0,
    needsCustomModule: false,
    supportLevel: 'standard',
    goLiveTimeline: '3months',
    trainingNeeds: 'basic'
  });

  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>({});
  
  // Checkout States
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    role: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [quotationId, setQuotationId] = useState('');
  
  const [referralCode, setReferralCode] = useState('');
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  // Smart Complexity Score Calculation
  const complexityScore = useMemo(() => {
    let score = 0;
    // Base Complexity
    score += assessment.userCount * 0.5;
    score += assessment.locations * 5;
    
    // Module Complexity
    if (assessment.needsManufacturing) score += 20;
    if (assessment.needsEcommerce) score += 15;
    if (assessment.needsAccounting) score += 5;
    if (assessment.needsHRM) score += 5;
    if (assessment.needsPOS) score += 10;
    
    // Technical Complexity
    if (assessment.hasLegacySystem) score += 15;
    if (assessment.apiIntegrations > 0) score += (assessment.apiIntegrations * 5);
    if (assessment.deployment === 'onprem') score += 25;

    return score;
  }, [assessment]);

  const recommendedPlanId = useMemo(() => {
    let score = 0;
    
    if (assessment.userCount > 300) score += 40; 
    else if (assessment.userCount > 50) score += 15;
    
    if (assessment.industry === 'manufacturing') score += 25;
    if (assessment.industry === 'healthcare') score += 15;
    
    if (assessment.deployment === 'onprem') score += 50;
    else if (assessment.deployment === 'dedicated') score += 25;
    
    if (complexityScore > 80) score += 30;
    else if (complexityScore > 40) score += 15;
    
    if (assessment.needsCustomModule) score += 35;
    
    if (score >= 60) return 'enterprise';
    if (score >= 25) return 'growth';
    return 'business';
  }, [assessment, complexityScore]);

  const estimatedEfficiency = useMemo(() => {
    let base = 20;
    if (assessment.needsInventory && assessment.needsProcurement) base += 10;
    if (assessment.needsAccounting && assessment.needsCRM) base += 5;
    if (assessment.needsManufacturing) base += 15;
    if (assessment.needsHRM) base += 5;
    return Math.min(base, 65);
  }, [assessment]);

  useEffect(() => {
    if (currentStep === 'customize' && Object.keys(selectedAddOns).length === 0) {
      const recommended: { [key: string]: number } = {};
      
      if (assessment.goLiveTimeline === 'urgent') {
        recommended['impl-express'] = 1;
      } else {
        if (complexityScore > 60) recommended['impl-pro'] = 1;
        else recommended['impl-standard'] = 1;
      }
      
      if (assessment.userCount > 100 || assessment.dataVolume === 'high') {
         recommended['dedicated-ip'] = 1;
         recommended['extra-storage'] = Math.ceil(assessment.userCount / 50);
      }
      
      if (assessment.hasLegacySystem) recommended['data-migration'] = 1;
      if (assessment.apiIntegrations > 0) recommended['api-integration'] = assessment.apiIntegrations;
      if (assessment.customReports > 0) recommended['custom-report'] = assessment.customReports;
      
      if (assessment.trainingNeeds === 'extensive' || assessment.userCount > 50) {
        recommended['training-extra'] = Math.ceil(assessment.userCount / 20);
      }

      setSelectedAddOns(recommended);
    }
  }, [currentStep, assessment, complexityScore]);

  useEffect(() => {
    if (currentStep === 'recommendation' && !selectedPlanId) setSelectedPlanId(recommendedPlanId);
  }, [currentStep, recommendedPlanId, selectedPlanId]);

  // --- CALCULATIONS ---
  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlanId);

  const calculations = useMemo(() => {
    if (!selectedPlanData) return { basePrice: 0, monthlyRecurring: 0, oneTimeFees: 0, subtotal: 0, discountAmount: 0, totalFirstPayment: 0 };

    const basePrice = billingCycle === 'yearly' ? selectedPlanData.priceYearly : selectedPlanData.priceMonthly;

    const recurringAddOnsTotal = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (!addOn || addOn.unit.includes('one-time') || addOn.unit.includes('per sesi') || addOn.unit.includes('per hari') || addOn.unit.includes('per integrasi') || addOn.unit.includes('per report') || addOn.unit.includes('per sistem')) return sum;
      return sum + (addOn.price * quantity);
    }, 0);

    const oneTimeFees = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn && (addOn.unit.includes('one-time') || addOn.unit.includes('per sesi') || addOn.unit.includes('per hari') || addOn.unit.includes('per integrasi') || addOn.unit.includes('per report') || addOn.unit.includes('per sistem'))) {
        return sum + (addOn.price * quantity);
      }
      return sum;
    }, 0);

    const monthlyRecurring = basePrice + recurringAddOnsTotal;
    const subtotal = billingCycle === 'yearly' ? (monthlyRecurring * 12) + oneTimeFees : monthlyRecurring + oneTimeFees;
    
    const discountAmount = appliedDiscount ? (subtotal * appliedDiscount.percent / 100) : 0;
    const totalFirstPayment = subtotal - discountAmount;

    return { basePrice, monthlyRecurring, oneTimeFees, subtotal, discountAmount, totalFirstPayment };
  }, [selectedPlanId, billingCycle, selectedAddOns, selectedPlanData, appliedDiscount]);

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === 'BIZOPS10') {
      setAppliedDiscount({ code: 'BIZOPS10', percent: 10 });
      setDiscountError('');
    } else if (discountCode.toUpperCase() === 'PARTNER20') {
      setAppliedDiscount({ code: 'PARTNER20', percent: 20 });
      setDiscountError('');
    } else {
      setDiscountError('Kode voucher tidak valid');
      setAppliedDiscount(null);
    }
  };

  const validateCheckout = () => {
    const errors: {[key: string]: string} = {};
    if (!contactInfo.firstName) errors.firstName = 'Wajib diisi';
    if (!contactInfo.email) errors.email = 'Wajib diisi';
    else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) errors.email = 'Email tidak valid';
    if (!contactInfo.company) errors.company = 'Wajib diisi';
    if (!contactInfo.phone) errors.phone = 'Wajib diisi';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRequestQuotation = () => {
    if (validateCheckout()) {
      setQuotationId(`QT-${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`);
      changeStep('jump', 'thankyou');
    } else {
      const formElement = document.getElementById('checkout-form');
      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const formatIDR = (amount: number) => {
    if (amount === 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
  };

  const handleAddOnChange = (addOnId: string, quantity: number) => {
    setSelectedAddOns(prev => {
      if (quantity === 0) { const newAddOns = { ...prev }; delete newAddOns[addOnId]; return newAddOns; }
      return { ...prev, [addOnId]: quantity };
    });
  };

  const updateAssessment = (field: keyof AssessmentData, value: any) => setAssessment(prev => ({ ...prev, [field]: value }));

  const Tooltip = ({ text }: { text: string }) => (
    <div className="group relative inline-block ml-1 align-middle">
      <HelpCircle className="w-4 h-4 text-slate-400 cursor-help hover:text-primary-500 transition-colors" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-slate-800 text-white text-xs rounded-xl shadow-xl z-50 animate-in fade-in zoom-in duration-200 pointer-events-none">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800" />
      </div>
    </div>
  );

  const SelectableCard = ({ selected, onClick, title, description, icon: Icon, badge }: any) => (
    <div 
      onClick={onClick} 
      className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group h-full flex flex-col items-center text-center justify-center
        ${selected 
          ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/10 shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-primary-500/20' 
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:-translate-y-1'
        }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 text-primary-500 animate-in fade-in zoom-in duration-300">
          <div className="bg-primary-100 dark:bg-primary-900/50 rounded-full p-1">
            <CheckCircle2 className="w-5 h-5 fill-primary-500 text-white" />
          </div>
        </div>
      )}
      {badge && <div className="absolute top-3 left-3 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">{badge}</div>}
      
      {Icon && (
        <div className={`mb-4 p-4 rounded-2xl transition-all duration-300 ${selected ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 scale-110' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500'}`}>
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h4 className={`font-bold text-lg mb-2 transition-colors ${selected ? 'text-primary-900 dark:text-primary-100' : 'text-slate-900 dark:text-white'}`}>{title}</h4>
      {description && <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>}
    </div>
  );

  const StepIndicator = () => (
    <div className="max-w-3xl mx-auto mb-16 print:hidden">
       <div className="flex justify-between mb-4 px-4 relative z-10">
         {['Profile', 'Technical', 'Modules', 'Integration', 'Support', 'Review'].map((label, idx) => {
           const isActive = assessmentStep === idx + 1;
           const isPast = assessmentStep > idx + 1;
           return (
             <div key={label} className={`flex flex-col items-center transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100 opacity-70'}`}>
               <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors duration-500 border-2 
                 ${isActive ? 'bg-primary-600 border-primary-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 
                   isPast ? 'bg-primary-100 border-primary-600 text-primary-600 dark:bg-primary-900/30' : 
                   'bg-slate-100 border-slate-300 text-slate-400 dark:bg-slate-800 dark:border-slate-700'}`}>
                 {isPast ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">{idx + 1}</span>}
               </div>
               <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400'}`}>
                 {label}
               </span>
             </div>
           );
         })}
       </div>
       {/* Connecting Line */}
       <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-0 hidden md:block"></div> 
       <div className="relative h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner max-w-3xl mx-auto">
          <div className="h-full bg-gradient-to-r from-primary-500 via-blue-500 to-primary-600 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: `${(assessmentStep / 6) * 100}%` }} />
       </div>
    </div>
  );

  const renderAssessmentSubStep = () => {
    const fadeClass = `transition-all duration-500 ease-out transform ${isTransitioning ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`;
    switch(assessmentStep) {
        case 1: 
          return (
            <div className={fadeClass}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Profil Perusahaan</h3>
                <p className="text-lg text-slate-500 dark:text-slate-400">Ceritakan sedikit tentang skala bisnis Anda</p>
              </div>
              <div className="max-w-4xl mx-auto space-y-10">
                <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm">
                  <label className="block mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary-500" /> Estimasi Jumlah System User
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-extrabold text-3xl bg-primary-50 dark:bg-primary-900/30 px-6 py-2 rounded-xl border border-primary-100 dark:border-primary-800/50">
                        {assessment.userCount}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="500" 
                      step="5" 
                      value={assessment.userCount} 
                      onChange={(e) => updateAssessment('userCount', parseInt(e.target.value))} 
                      className="w-full h-4 bg-slate-200 rounded-full appearance-none cursor-pointer dark:bg-slate-700 accent-primary-600 hover:accent-primary-500 transition-all" 
                    />
                    <div className="flex justify-between text-xs font-bold text-slate-400 mt-3 uppercase tracking-wider">
                      <span>5 Users</span>
                      <span>500 Users</span>
                    </div>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectableCard selected={assessment.companySize === 'startup'} onClick={() => updateAssessment('companySize', 'startup')} title="Startup / Small" description="< 20 Karyawan" icon={Rocket} />
                  <SelectableCard selected={assessment.companySize === 'sme'} onClick={() => updateAssessment('companySize', 'sme')} title="Mid-Market / SME" description="20 - 100 Karyawan" icon={Building2} />
                  <SelectableCard selected={assessment.companySize === 'enterprise'} onClick={() => updateAssessment('companySize', 'enterprise')} title="Enterprise" description="> 100 Karyawan" icon={Globe} />
                </div>

                <div className="space-y-4">
                   <label className="text-lg font-bold text-slate-900 dark:text-white ml-1 flex items-center gap-2">
                     <Factory className="w-5 h-5 text-primary-500" /> Industri Bisnis
                   </label>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { id: 'retail', name: 'Retail / Grosir', icon: Store }, { id: 'manufacturing', name: 'Manufaktur', icon: Factory },
                        { id: 'services', name: 'Jasa / Agency', icon: UserCheck }, { id: 'construction', name: 'Konstruksi', icon: HardHat },
                        { id: 'education', name: 'Pendidikan', icon: GraduationCap }, { id: 'healthcare', name: 'Kesehatan', icon: Stethoscope },
                        { id: 'fnb', name: 'F&B', icon: Info }, { id: 'other', name: 'Lainnya', icon: MoreHorizontal },
                      ].map(ind => <SelectableCard key={ind.id} selected={assessment.industry === ind.id} onClick={() => updateAssessment('industry', ind.id)} title={ind.name} icon={ind.icon} />)}
                   </div>
                </div>
              </div>
            </div>
          );
        case 2: return (
            <div className={fadeClass}>
              <div className="text-center mb-12"><h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Preferensi Teknis</h3><p className="text-lg text-slate-500 dark:text-slate-400">Bagaimana Anda ingin sistem ini berjalan?</p></div>
              <div className="max-w-4xl mx-auto space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto min-h-[16rem]"><SelectableCard selected={assessment.deployment === 'cloud'} onClick={() => updateAssessment('deployment', 'cloud')} title="Shared Cloud" description="Hemat biaya, managed by BizOps." icon={Cloud} /><SelectableCard selected={assessment.deployment === 'dedicated'} onClick={() => updateAssessment('deployment', 'dedicated')} title="Dedicated Cloud" description="Performa tinggi, isolated VPS." icon={Server} /><SelectableCard selected={assessment.deployment === 'onprem'} onClick={() => updateAssessment('deployment', 'onprem')} title="On-Premise" description="Server kantor sendiri. Kontrol penuh." icon={HardDrive} /></div>
                
                <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 text-lg"><MapPin className="w-5 h-5 text-primary-500" /> Lokasi Data Center</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: 'jakarta', label: 'Jakarta (ID)', sub: 'Sesuai Regulasi UU PDP' },
                      { id: 'singapore', label: 'Singapore (SG)', sub: 'Regional Latency Low' },
                      { id: 'usa', label: 'Global (US)', sub: 'Lowest Cost' }
                    ].map(loc => (
                      <div key={loc.id} onClick={() => updateAssessment('serverLocation', loc.id)} className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${assessment.serverLocation === loc.id ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-md ring-1 ring-primary-500/20' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'}`}>
                        <div className="font-bold text-slate-900 dark:text-white text-lg">{loc.label}</div>
                        <div className="text-sm text-slate-500 mt-1">{loc.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 transition-colors">
                    <label className="flex items-center justify-between cursor-pointer group h-full">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl transition-colors ${assessment.hasLegacySystem ? 'bg-amber-100 text-amber-600' : 'bg-white dark:bg-slate-800 text-slate-400 shadow-sm'}`}>
                          <Database className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white text-lg">Migrasi Data Lama?</div>
                          <div className="text-sm text-slate-500">Pindahkan data historis.</div>
                        </div>
                      </div>
                      <div className={`w-14 h-8 flex items-center bg-slate-300 dark:bg-slate-700 rounded-full p-1 duration-300 ease-spring ${assessment.hasLegacySystem ? 'bg-amber-500' : ''}`}>
                        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-spring ${assessment.hasLegacySystem ? 'translate-x-6' : ''}`} />
                      </div>
                      <input type="checkbox" className="hidden" checked={assessment.hasLegacySystem} onChange={(e) => updateAssessment('hasLegacySystem', e.target.checked)} />
                    </label>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <label className="block text-sm font-bold mb-4 text-slate-700 dark:text-slate-300 text-center uppercase tracking-wider">Volume Transaksi Bulanan</label>
                    <div className="flex justify-center gap-2">
                      {['low', 'medium', 'high'].map(vol => (
                        <button key={vol} onClick={() => updateAssessment('dataVolume', vol)} className={`flex-1 py-3 rounded-xl border-2 text-sm font-bold transition-all ${assessment.dataVolume === vol ? 'border-primary-600 bg-primary-600 text-white shadow-lg' : 'border-slate-200 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'}`}>
                          {vol === 'low' ? '< 1K' : vol === 'medium' ? '1K - 10K' : '> 10K'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
        case 3: 
          return (
            <div className={fadeClass}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Kebutuhan Modul</h3>
                <p className="text-lg text-slate-500 dark:text-slate-400">Pilih komponen operasional yang Anda butuhkan</p>
              </div>
              <div className="max-w-5xl mx-auto space-y-12">
                {/* Core Modules */}
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2"><LayoutGrid className="w-4 h-4" /> Core Modules</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {[
                      { key: 'needsCRM', label: 'CRM & Sales', desc: 'Leads, Pipeline, Quotation', icon: UserCheck },
                      { key: 'needsAccounting', label: 'Accounting', desc: 'Finance, Budgeting, Tax', icon: Wallet },
                      { key: 'needsInventory', label: 'Inventory (WMS)', desc: 'Stock, Warehouse, Serial', icon: Package },
                      { key: 'needsProcurement', label: 'Procurement', desc: 'Purchase, Supplier Portal', icon: ShoppingCart },
                      { key: 'needsHRM', label: 'HRM & Payroll', desc: 'Employee, Attendance, Gaji', icon: Users, badge: 'ESS' },
                    ].map(item => (
                      <div key={item.key} onClick={() => updateAssessment(item.key as keyof AssessmentData, !assessment[item.key as keyof AssessmentData])} className={`relative flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group hover:-translate-y-1 hover:shadow-lg ${assessment[item.key as keyof AssessmentData] ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
                        {item.badge && <div className="absolute top-3 right-3 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">{item.badge}</div>}
                        <div className={`p-3 rounded-xl mr-4 transition-colors ${assessment[item.key as keyof AssessmentData] ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 group-hover:bg-slate-200'}`}><item.icon className="w-6 h-6" /></div>
                        <div><div className="font-bold text-slate-900 dark:text-white text-base mb-1">{item.label}</div><div className="text-sm text-slate-500 leading-tight">{item.desc}</div></div>
                        <div className={`absolute bottom-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${assessment[item.key as keyof AssessmentData] ? 'border-primary-500 bg-primary-500' : 'border-slate-300 dark:border-slate-700'}`}>{assessment[item.key as keyof AssessmentData] && <Check className="w-4 h-4 text-white" />}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Specialized Modules */}
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2"><Settings className="w-4 h-4" /> Specialized Operations</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {[
                      { key: 'needsManufacturing', label: 'Manufacturing', desc: 'Production, BOM, Scheduling', icon: Factory },
                      { key: 'needsProjectMgmt', label: 'Project Mgmt', desc: 'Task, Timesheet, Costing', icon: Briefcase },
                      { key: 'needsAssetMgmt', label: 'Asset Mgmt', desc: 'Tracking Aset, Depresiasi', icon: BarChart3 },
                      { key: 'needsHelpdesk', label: 'Helpdesk', desc: 'Ticketing, SLA, Support', icon: Headphones },
                      { key: 'needsPOS', label: 'Point of Sale', desc: 'Kasir Retail / F&B', icon: Store },
                      { key: 'needsEcommerce', label: 'E-Commerce', desc: 'Website & Online Store', icon: Globe },
                    ].map(item => (
                       <div key={item.key} onClick={() => updateAssessment(item.key as keyof AssessmentData, !assessment[item.key as keyof AssessmentData])} className={`flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group hover:-translate-y-1 hover:shadow-lg ${assessment[item.key as keyof AssessmentData] ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
                        <div className={`p-3 rounded-xl mr-4 transition-colors ${assessment[item.key as keyof AssessmentData] ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 group-hover:bg-slate-200'}`}><item.icon className="w-6 h-6" /></div>
                        <div><div className="font-bold text-slate-900 dark:text-white text-base mb-1">{item.label}</div><div className="text-sm text-slate-500 leading-tight">{item.desc}</div></div>
                        <div className={`ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${assessment[item.key as keyof AssessmentData] ? 'border-blue-500 bg-blue-500' : 'border-slate-300 dark:border-slate-700'}`}>{assessment[item.key as keyof AssessmentData] && <Check className="w-4 h-4 text-white" />}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );

        case 4: return (
            <div className={fadeClass}>
              <div className="text-center mb-12"><h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Integrasi & Kustomisasi</h3><p className="text-lg text-slate-500 dark:text-slate-400">Seberapa kompleks ekosistem sistem Anda?</p></div>
              <div className="max-w-3xl mx-auto space-y-8 bg-white dark:bg-slate-900/50 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm">
                <div>
                  <label className="text-base font-bold text-slate-900 dark:text-white mb-6 block flex justify-between items-center">
                    <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-purple-500" /> Integrasi API (Pihak ke-3)</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-1 rounded-lg font-extrabold text-lg">{assessment.apiIntegrations}</span>
                  </label>
                  <input type="range" min="0" max="10" step="1" value={assessment.apiIntegrations} onChange={(e) => updateAssessment('apiIntegrations', parseInt(e.target.value))} className="w-full h-4 bg-slate-200 rounded-full appearance-none cursor-pointer accent-purple-600 hover:accent-purple-500 transition-all" />
                  <p className="text-sm text-slate-500 mt-2">Koneksi ke Marketplace, Payment Gateway, atau Software lain.</p>
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
                <div>
                  <label className="text-base font-bold text-slate-900 dark:text-white mb-6 block flex justify-between items-center">
                    <span className="flex items-center gap-2"><FileText className="w-5 h-5 text-purple-500" /> Custom Report Development</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-1 rounded-lg font-extrabold text-lg">{assessment.customReports}</span>
                  </label>
                  <input type="range" min="0" max="20" step="1" value={assessment.customReports} onChange={(e) => updateAssessment('customReports', parseInt(e.target.value))} className="w-full h-4 bg-slate-200 rounded-full appearance-none cursor-pointer accent-purple-600 hover:accent-purple-500 transition-all" />
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
                <label className="flex items-center justify-between cursor-pointer group p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl"><AppWindow className="w-6 h-6" /></div>
                     <div>
                       <div className="font-bold text-slate-900 dark:text-white text-lg">Butuh Custom Module?</div>
                       <div className="text-sm text-slate-500">Untuk logika bisnis yang unik.</div>
                     </div>
                  </div>
                  <div className={`w-14 h-8 flex items-center bg-slate-300 dark:bg-slate-700 rounded-full p-1 duration-300 ease-spring ${assessment.needsCustomModule ? 'bg-purple-600' : ''}`}>
                    <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-spring ${assessment.needsCustomModule ? 'translate-x-6' : ''}`} />
                  </div>
                  <input type="checkbox" className="hidden" checked={assessment.needsCustomModule} onChange={(e) => updateAssessment('needsCustomModule', e.target.checked)} />
                </label>
              </div>
            </div>
        );
        case 5: return (
             <div className={fadeClass}>
              <div className="text-center mb-12"><h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Timeline & Support</h3><p className="text-lg text-slate-500 dark:text-slate-400">Kapan Anda berencana Go-Live?</p></div>
              <div className="max-w-4xl mx-auto space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{[{ id: 'urgent', label: 'ASAP / Urgent', desc: '< 1 Bulan', icon: Zap }, { id: '1month', label: 'Standard', desc: '1 - 2 Bulan', icon: Clock }, { id: '3months', label: 'Planned', desc: '3+ Bulan', icon: CalendarIcon }].map(time => <SelectableCard key={time.id} selected={assessment.goLiveTimeline === time.id} onClick={() => updateAssessment('goLiveTimeline', time.id)} title={time.label} description={time.desc} icon={time.icon} />)}</div>
                 <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-lg">
                   <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-xl">Level Support yang Diharapkan</h4>
                   <div className="flex flex-wrap justify-center gap-4">
                     {['standard', 'priority', 'premium'].map(lvl => (
                       <button key={lvl} onClick={() => updateAssessment('supportLevel', lvl)} className={`px-8 py-4 rounded-2xl border-2 text-base font-bold capitalize transition-all duration-200 ${assessment.supportLevel === lvl ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 shadow-lg scale-105' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-red-300'}`}>
                         {lvl} Support
                       </button>
                     ))}
                   </div>
                   <p className="text-center text-sm font-medium text-slate-500 mt-6 bg-slate-100 dark:bg-slate-800 inline-block px-4 py-2 rounded-full">
                     {assessment.supportLevel === 'standard' && '📧 Email Only, respon dalam 48 jam.'}
                     {assessment.supportLevel === 'priority' && '💬 Chat & Email, respon dalam 12 jam.'}
                     {assessment.supportLevel === 'premium' && '🔥 Dedicated Hotline 24/7, respon < 2 jam.'}
                   </p>
                 </div>
              </div>
             </div>
        );
        case 6: return (
            <div className={fadeClass}>
               <div className="text-center mb-12">
                 <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-6 animate-bounce-slow">
                   <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                 </div>
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Review Assessment</h3>
                 <p className="text-lg text-slate-500 dark:text-slate-400">Analisa selesai! Silakan periksa kembali data Anda.</p>
               </div>
               <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                     <h5 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 text-lg pb-4 border-b border-slate-200 dark:border-slate-800">
                       <Building2 className="w-5 h-5 text-primary-500" /> Profil Bisnis
                     </h5>
                     <ul className="space-y-4 text-base text-slate-600 dark:text-slate-300">
                       <li className="flex justify-between"><span>User System</span> <span className="font-bold text-slate-900 dark:text-white">{assessment.userCount}</span></li>
                       <li className="flex justify-between"><span>Industri</span> <span className="font-bold text-slate-900 dark:text-white capitalize">{assessment.industry}</span></li>
                       <li className="flex justify-between"><span>Lokasi</span> <span className="font-bold text-slate-900 dark:text-white">{assessment.locations} Cabang</span></li>
                     </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                     <h5 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 text-lg pb-4 border-b border-slate-200 dark:border-slate-800">
                       <Settings className="w-5 h-5 text-primary-500" /> Teknis & Ops
                     </h5>
                     <ul className="space-y-4 text-base text-slate-600 dark:text-slate-300">
                       <li className="flex justify-between"><span>Deployment</span> <span className="font-bold text-slate-900 dark:text-white capitalize">{assessment.deployment}</span></li>
                       <li className="flex justify-between"><span>Modules</span> <span className="font-bold text-slate-900 dark:text-white bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-sm">
                         {Object.keys(assessment).filter(k => k.startsWith('needs') && assessment[k as keyof AssessmentData] === true).length} Selected
                       </span></li>
                       <li className="flex justify-between"><span>Data Center</span> <span className="font-bold text-slate-900 dark:text-white uppercase">{assessment.serverLocation}</span></li>
                     </ul>
                  </div>
               </div>
            </div>
        );
        default: return null;
    }
  };

  const renderAssessmentStep = () => {
    const canProceed = () => {
      switch(assessmentStep) {
        case 1: return assessment.industry && assessment.companySize;
        case 2: return assessment.deployment && assessment.serverLocation; 
        case 3: return true;
        case 4: return true;
        case 5: return true;
        case 6: return true;
        default: return false;
      }
    };
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <StepIndicator />
          <div className="min-h-[500px]">
            {renderAssessmentSubStep()}
          </div>
          <div className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] backdrop-blur-md z-50 animate-slide-up">
             <div className="max-w-3xl mx-auto flex justify-between items-center">
                <Button variant="ghost" onClick={() => changeStep('prev')} disabled={assessmentStep === 1 || isTransitioning} className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium"><ArrowLeft className="w-4 h-4 mr-2" /> Kembali</Button>
                {assessmentStep < 6 ? (
                  <Button variant="primary" onClick={() => changeStep('next')} disabled={!canProceed() || isTransitioning} className="px-8 h-12 rounded-full shadow-lg shadow-primary-500/30 hover:scale-105 transition-transform font-bold">Selanjutnya <ArrowRight className="w-4 h-4 ml-2" /></Button>
                ) : (
                  <Button variant="primary" onClick={() => changeStep('jump', 'recommendation')} className="px-10 h-12 rounded-full shadow-lg shadow-green-500/30 bg-gradient-to-r from-green-500 to-emerald-600 hover:to-emerald-500 font-bold tracking-wide">Lihat Hasil Analisa <Rocket className="w-4 h-4 ml-2" /></Button>
                )}
             </div>
          </div>
          <div className="h-24" />
        </div>
      </div>
    );
  };

  const renderRecommendationStep = () => {
     const recPlan = pricingPlans.find(p => p.id === recommendedPlanId);
     const isSelected = (planId: string) => planId === selectedPlanId;
     return (
       <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-50/50 dark:bg-slate-950 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
               <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce-slow border border-green-200 dark:border-green-800">
                 <CheckCircle2 className="w-4 h-4" /> Analisa Selesai
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">Solusi Terbaik: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">{recPlan?.name} Plan</span></h2>
               <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Berdasarkan profil bisnis dan kebutuhan teknis Anda, paket ini memberikan value terbaik.</p>
               
               {/* ROI Indicator */}
               <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl shadow-2xl shadow-blue-900/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-5 text-left">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm"><BadgePercent className="w-10 h-10 text-white" /></div>
                    <div>
                      <div className="text-blue-100 font-medium mb-1">Estimasi Peningkatan Efisiensi</div>
                      <div className="text-4xl font-bold tracking-tight">~{estimatedEfficiency}% <span className="text-xl font-normal text-blue-200">Productivity</span></div>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block border-l border-white/20 pl-6">
                    <div className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Impact Area</div>
                    <div className="text-base font-semibold leading-tight">{assessment.needsManufacturing ? 'Production Line, ' : ''}{assessment.needsAccounting ? 'Financial Control, ' : ''}{assessment.needsCRM ? 'Sales Pipeline' : 'Operational Ops'}</div>
                  </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map(plan => (
                  <div key={plan.id} onClick={() => setSelectedPlanId(plan.id)} className={`relative group rounded-[2rem] p-8 border-2 cursor-pointer transition-all duration-300 flex flex-col 
                    ${isSelected(plan.id) 
                      ? 'border-primary-500 bg-white dark:bg-slate-900 shadow-2xl shadow-primary-900/10 scale-105 z-10' 
                      : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-primary-200 opacity-70 hover:opacity-100 hover:scale-[1.02]'}`}>
                    
                    {plan.id === recommendedPlanId && (
                      <div className="absolute -top-5 left-0 right-0 flex justify-center">
                        <div className="bg-green-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4" /> Best Match
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8 mt-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                      <div className="flex justify-center items-baseline gap-1 text-slate-900 dark:text-white">
                         <span className="text-sm font-semibold text-slate-500">IDR</span>
                         <span className="text-4xl font-extrabold">{plan.priceMonthly === 0 ? 'Custom' : (plan.priceMonthly / 1000000)}</span>
                         {plan.priceMonthly !== 0 && <span className="text-xl font-bold">Jt</span>}
                         <span className="text-xs text-slate-400 font-normal ml-1">/mo</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.slice(0, 6).map((f, i) => (
                        <div key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isSelected(plan.id) ? 'text-green-500' : 'text-slate-300'}`} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant={isSelected(plan.id) ? 'primary' : 'outline'} fullWidth className="h-12 font-bold rounded-xl">
                      {isSelected(plan.id) ? 'Paket Terpilih' : 'Pilih Paket Ini'}
                    </Button>
                  </div>
              ))}
            </div>

            <div className="flex justify-center pb-20">
               <Button variant="primary" size="lg" onClick={() => changeStep('jump', 'customize')} className="px-12 h-16 text-xl rounded-full shadow-2xl shadow-primary-600/30 hover:scale-105 transition-transform font-bold">
                 Lanjut ke Konfigurasi <ArrowRight className="ml-3 w-6 h-6" />
               </Button>
            </div>
          </div>
       </div>
     );
  };

  const renderCustomizeStep = () => {
     return (
        <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-50/50 dark:bg-slate-950 animate-in fade-in slide-in-from-bottom-8 duration-500">
           <div className="max-w-7xl mx-auto">
             <div className="flex items-center justify-between mb-10">
                <button onClick={() => changeStep('jump', 'recommendation')} className="flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium transition-colors group">
                   <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-slate-300 transition-colors"><ArrowLeft className="w-4 h-4" /></div> 
                   Kembali ke Paket
                </button>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white hidden md:block">Konfigurasi Akhir</h2>
                <div className="w-32" />
             </div>

             <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-8">
                   <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />
                      <div className="flex items-center gap-5 relative z-10">
                         <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                            <Shield className="w-8 h-8 text-green-400" />
                         </div>
                         <div>
                            <div className="font-bold text-xl mb-1">Siklus Pembayaran</div>
                            <div className="text-blue-200 text-sm">Hemat hingga 20% dengan tahunan</div>
                         </div>
                      </div>
                      <div className="flex bg-slate-800 p-1.5 rounded-xl relative z-10 border border-slate-700">
                         <button onClick={() => setBillingCycle('monthly')} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400 hover:text-white'}`}>Bulanan</button>
                         <button onClick={() => setBillingCycle('yearly')} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-green-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Tahunan <span className="text-[10px] bg-white/20 px-1.5 rounded border border-white/20">SAVE 20%</span></button>
                      </div>
                   </div>

                   {['implementation', 'infrastructure', 'support'].map(category => {
                      const categoryAddons = addOns.filter(a => a.category === category && (selectedPlanId === 'enterprise' || a.availableFor.includes(selectedPlanId)));
                      if (categoryAddons.length === 0) return null;
                      const config: any = { implementation: { title: 'Implementasi & Setup', icon: Rocket, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/20' }, infrastructure: { title: 'Infrastruktur', icon: Server, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/20' }, support: { title: 'Dukungan Teknis', icon: Users, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/20' } };
                      const CategoryIcon = config[category].icon;
                      
                      return (
                         <Card key={category} className="overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg rounded-3xl">
                            <div className="bg-slate-50/80 dark:bg-slate-900/50 p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4 backdrop-blur-sm">
                               <div className={`p-3 rounded-2xl ${config[category].bg}`}>
                                  <CategoryIcon className={`w-6 h-6 ${config[category].color}`} />
                               </div>
                               <h3 className="font-bold text-xl text-slate-900 dark:text-white">{config[category].title}</h3>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                               {categoryAddons.map(addOn => {
                                  const isSelected = (selectedAddOns[addOn.id] || 0) > 0;
                                  return (
                                     <div key={addOn.id} className={`p-6 transition-all duration-300 flex items-center justify-between ${isSelected ? 'bg-primary-50/40 dark:bg-primary-900/10' : 'hover:bg-slate-50 dark:hover:bg-slate-900/30'}`}>
                                        <div className="flex-1 pr-6">
                                           <div className="flex items-center gap-3 mb-1">
                                              <span className="font-bold text-slate-900 dark:text-white text-lg">{addOn.name}</span>
                                              {addOn.recommended && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-green-200">Recommended</span>}
                                           </div>
                                           <p className="text-sm text-slate-500 mb-2">{addOn.description}</p>
                                           <div className="text-primary-600 dark:text-primary-400 font-bold text-base">
                                              {formatIDR(addOn.price)} <span className="text-slate-400 font-normal text-xs">{addOn.unit}</span>
                                           </div>
                                        </div>
                                        
                                        <div>
                                           {(addOn.unit.includes('one-time') || addOn.unit.includes('per bulan')) ? (
                                              <button 
                                                onClick={() => { if(addOn.id.includes('impl')) { const newState = { ...selectedAddOns }; Object.keys(newState).forEach(k => { if(k.includes('impl')) delete newState[k] }); if(!isSelected) newState[addOn.id] = 1; setSelectedAddOns(newState); } else { handleAddOnChange(addOn.id, isSelected ? 0 : 1); } }} 
                                                className={`w-14 h-8 rounded-full transition-all duration-300 relative ${isSelected ? 'bg-primary-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                                              >
                                                 <div className={`w-6 h-6 bg-white rounded-full shadow-md absolute top-1 transition-all duration-300 ${isSelected ? 'left-7' : 'left-1'}`} />
                                              </button>
                                           ) : (
                                              <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl h-10 shadow-sm">
                                                 <button onClick={() => handleAddOnChange(addOn.id, Math.max(0, (selectedAddOns[addOn.id] || 0) - 1))} className="w-10 h-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 rounded-l-xl transition-colors">-</button>
                                                 <input className="w-12 text-center text-sm font-bold bg-transparent border-x border-slate-200 dark:border-slate-700 h-full" value={selectedAddOns[addOn.id] || 0} readOnly />
                                                 <button onClick={() => handleAddOnChange(addOn.id, (selectedAddOns[addOn.id] || 0) + 1)} className="w-10 h-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 rounded-r-xl transition-colors">+</button>
                                              </div>
                                           )}
                                        </div>
                                     </div>
                                  );
                               })}
                            </div>
                         </Card>
                      );
                   })}
                   <div className="flex justify-end mt-10 pb-20">
                      <Button variant="primary" size="lg" onClick={() => changeStep('jump', 'checkout')} className="px-12 h-14 text-lg rounded-full shadow-xl shadow-primary-600/20 hover:scale-105 transition-transform font-bold">Lanjut Request Quote <ArrowRight className="ml-2 w-5 h-5" /></Button>
                   </div>
                </div>

                <div className="lg:col-span-4 hidden lg:block">
                   <div className="sticky top-24 space-y-6">
                      <Card className="bg-white dark:bg-slate-900 shadow-2xl border-0 ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden rounded-3xl">
                         <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none" />
                            <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Estimasi Total</div>
                            <div className="text-4xl font-extrabold mb-2 tracking-tight">{formatIDR(calculations.totalFirstPayment)}</div>
                            <p className="text-xs text-slate-400">Total pembayaran awal (termasuk pajak)</p>
                         </div>
                         <div className="p-8 space-y-5">
                            <div className="flex justify-between items-center text-sm font-bold pb-5 border-b border-slate-100 dark:border-slate-800">
                               <span className="text-slate-700 dark:text-slate-300">Paket {selectedPlanData?.name}</span>
                               <span className="text-slate-900 dark:text-white">{formatIDR(billingCycle === 'yearly' ? calculations.monthlyRecurring * 12 : calculations.monthlyRecurring)}</span>
                            </div>
                            <div className="space-y-3">
                               {Object.entries(selectedAddOns).map(([id, qty]) => { 
                                  const item = addOns.find(a => a.id === id); 
                                  if(!item || qty === 0) return null; 
                                  const isOneTime = item.unit.includes('one-time') || item.unit.includes('per'); 
                                  const price = isOneTime ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1); 
                                  return (
                                     <div key={id} className="flex justify-between text-xs text-slate-500">
                                        <span>{item.name} {qty > 1 ? `(${qty}x)` : ''}</span>
                                        <span>{formatIDR(price)}</span>
                                     </div>
                                  ); 
                               })}
                            </div>
                         </div>
                         <div className="p-4 bg-slate-50 dark:bg-slate-800/50 text-center text-[10px] text-slate-400">
                            Harga dapat berubah sewaktu-waktu tanpa pemberitahuan.
                         </div>
                      </Card>
                   </div>
                </div>
             </div>
           </div>
        </div>
     );
  };

  const renderCheckoutStep = () => {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-50/50 dark:bg-slate-950 animate-in fade-in slide-in-from-bottom-8 duration-500" id="checkout-form">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
             <button onClick={() => changeStep('jump', 'customize')} className="flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-slate-300 transition-colors"><ArrowLeft className="w-4 h-4" /></div> 
                Kembali ke Kustomisasi
             </button>
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white hidden md:block">Finalisasi Request</h2>
             <div className="w-32" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-8">
              <Card className="p-8 border-l-4 border-l-primary-500 shadow-lg rounded-2xl">
                <h3 className="font-bold text-xl mb-8 flex items-center gap-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600"><User className="w-5 h-5" /></div>
                  Informasi Kontak
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Nama Depan *</label>
                    <input type="text" className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all ${formErrors.firstName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`} 
                      value={contactInfo.firstName} onChange={e => setContactInfo({...contactInfo, firstName: e.target.value})}
                    />
                    {formErrors.firstName && <p className="text-xs text-red-500 mt-1">{formErrors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Nama Belakang</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" 
                      value={contactInfo.lastName} onChange={e => setContactInfo({...contactInfo, lastName: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Email Bisnis *</label>
                    <div className="relative">
                      <input type="email" className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all ${formErrors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`} 
                        value={contactInfo.email} onChange={e => setContactInfo({...contactInfo, email: e.target.value})}
                      />
                      <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                    </div>
                    {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Nomor Telepon / WA *</label>
                    <div className="relative">
                      <input type="tel" className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all ${formErrors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`} 
                        value={contactInfo.phone} onChange={e => setContactInfo({...contactInfo, phone: e.target.value})}
                      />
                      <Phone className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                    </div>
                    {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Nama Perusahaan *</label>
                  <div className="relative">
                    <input type="text" className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all ${formErrors.company ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`} 
                      value={contactInfo.company} onChange={e => setContactInfo({...contactInfo, company: e.target.value})}
                    />
                    <Building2 className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                  {formErrors.company && <p className="text-xs text-red-500 mt-1">{formErrors.company}</p>}
                </div>
              </Card>

              <Card className="p-8 shadow-lg rounded-2xl">
                <h3 className="font-bold text-xl mb-8 flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600"><Tag className="w-5 h-5" /></div>
                  Diskon & Referral
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Sales / Partner Referral</label>
                    <div className="relative">
                      <input type="text" placeholder="Kode sales (opsional)" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                      <UserPlus className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Kode Voucher</label>
                    <div className="flex gap-2">
                      <div className="relative flex-grow">
                        <input type="text" placeholder="Contoh: BIZOPS10" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all uppercase" />
                        <Tag className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                      </div>
                      <Button variant="outline" onClick={handleApplyDiscount} className="h-[50px] px-6">Apply</Button>
                    </div>
                    {discountError && <p className="text-xs text-red-500 mt-2">{discountError}</p>}
                    {appliedDiscount && <p className="text-xs text-green-600 mt-2 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Diskon {appliedDiscount.percent}% diterapkan!</p>}
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <Card className="bg-slate-900 text-white overflow-hidden shadow-2xl border-0 rounded-3xl">
                  <div className="p-8 border-b border-slate-800">
                    <h3 className="font-bold text-xl flex items-center gap-3"><FileSignature className="w-6 h-6 text-primary-400" /> Ringkasan Estimasi</h3>
                  </div>
                  <div className="p-8 space-y-5 text-sm">
                    <div className="flex justify-between text-slate-300"><span className="text-slate-400">Paket Dasar ({selectedPlanData?.name})</span><span>{formatIDR(billingCycle === 'yearly' ? calculations.basePrice * 12 : calculations.basePrice)}</span></div>
                    <div className="flex justify-between text-slate-300"><span className="text-slate-400">Add-ons & Services</span><span>{formatIDR(calculations.oneTimeFees + (billingCycle === 'yearly' ? (calculations.monthlyRecurring - calculations.basePrice) * 12 : (calculations.monthlyRecurring - calculations.basePrice)))}</span></div>
                    <div className="border-t border-slate-800 pt-5 flex justify-between font-bold text-lg"><span>Subtotal</span><span>{formatIDR(calculations.subtotal)}</span></div>
                    {appliedDiscount && <div className="flex justify-between text-green-400 font-medium"><span>Diskon ({appliedDiscount.code})</span><span>- {formatIDR(calculations.discountAmount)}</span></div>}
                    <div className="bg-slate-800/80 rounded-xl p-5 mt-4 border border-slate-700">
                      <div className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-bold">Total Estimasi Awal</div>
                      <div className="text-4xl font-extrabold text-white tracking-tight">{formatIDR(calculations.totalFirstPayment)}</div>
                      <div className="text-xs text-slate-500 mt-2">*Penawaran resmi akan dikirim via email</div>
                    </div>
                  </div>
                  <div className="p-8 bg-slate-800/50">
                    <Button variant="primary" fullWidth size="lg" onClick={handleRequestQuotation} className="h-14 text-lg font-bold shadow-lg shadow-primary-600/30 hover:scale-[1.02] transition-transform">
                      Generate Quotation <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1"><Lock className="w-3 h-3" /> Data Anda aman & terenkripsi</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderThankYouStep = () => {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-50/50 dark:bg-slate-950 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full mb-8 shadow-lg shadow-green-500/20">
              <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Penawaran Siap!</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Dokumen penawaran resmi telah dikirim ke <strong className="text-slate-900 dark:text-white">{contactInfo.email}</strong></p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              {/* Quotation Preview Card */}
              <div ref={quoteRef} className="bg-white text-slate-900 p-10 rounded-none shadow-2xl border border-slate-200 relative overflow-hidden print:shadow-none print:border-0">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary-600 to-blue-600" />
                <div className="flex justify-between items-start mb-12 mt-4">
                  <div>
                    <h1 className="text-3xl font-bold text-primary-800 tracking-tight">BIZOPS Quotation</h1>
                    <div className="mt-2 text-sm text-slate-500 font-medium">
                      <p>No: <span className="font-mono text-slate-700">{quotationId}</span></p>
                      <p>Date: {new Date().toLocaleDateString()}</p>
                      <p className="mt-1">Server: <span className="font-bold uppercase text-slate-700">{assessment.serverLocation}</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl mb-1 text-slate-900">BizOps ERP</div>
                    <div className="text-sm text-slate-500 leading-relaxed">PT Divistant Teknologi Indonesia<br/>Eco-S Sahid Sudirman Residence, Jakarta</div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl mb-10 border border-slate-100">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Prepared For:</div>
                  <div className="font-bold text-lg text-slate-900">{contactInfo.firstName} {contactInfo.lastName}</div>
                  <div className="text-base text-slate-700 mb-1">{contactInfo.company}</div>
                  <div className="text-sm text-slate-500">{contactInfo.email}</div>
                </div>

                <table className="w-full text-sm mb-12">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-3 font-bold text-slate-700 uppercase tracking-wider text-xs">Description</th>
                      <th className="text-right py-3 font-bold text-slate-700 uppercase tracking-wider text-xs">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-4">
                        <div className="font-bold text-base text-slate-900">Paket {selectedPlanData?.name} ({billingCycle})</div>
                        <div className="text-sm text-slate-500 mt-1">{selectedPlanData?.description}</div>
                        {/* Show selected modules in quote */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {[
                            assessment.needsCRM && 'CRM',
                            assessment.needsAccounting && 'Accounting',
                            assessment.needsInventory && 'Inventory',
                            assessment.needsHRM && 'HRM',
                            assessment.needsProcurement && 'Procurement',
                            assessment.needsManufacturing && 'Manufacturing',
                            assessment.needsProjectMgmt && 'Project Mgmt',
                            assessment.needsHelpdesk && 'Helpdesk',
                            assessment.needsPOS && 'POS',
                            assessment.needsEcommerce && 'E-Commerce'
                          ].filter(Boolean).map(m => (
                            <span key={m as string} className="text-[10px] bg-slate-100 px-2 py-1 rounded-md text-slate-600 border border-slate-200 font-medium uppercase tracking-wide">{m}</span>
                          ))}
                        </div>
                      </td>
                      <td className="text-right py-4 align-top font-bold text-base text-slate-700">{formatIDR(billingCycle === 'yearly' ? calculations.basePrice * 12 : calculations.basePrice)}</td>
                    </tr>
                    {Object.entries(selectedAddOns).map(([id, qty]) => {
                      const item = addOns.find(a => a.id === id);
                      if(!item || qty === 0) return null;
                      const isOneTime = item.unit.includes('one-time') || item.unit.includes('per');
                      const price = isOneTime ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                      return (
                        <tr key={id}>
                          <td className="py-4">
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{qty} x {item.unit}</div>
                          </td>
                          <td className="text-right py-4 align-top font-medium text-slate-700">{formatIDR(price)}</td>
                        </tr>
                      );
                    })}
                    {appliedDiscount && (
                      <tr className="text-green-600 bg-green-50/50">
                        <td className="py-4 pl-4 font-bold">Discount ({appliedDiscount.code})</td>
                        <td className="text-right py-4 pr-2 font-bold">- {formatIDR(calculations.discountAmount)}</td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-200">
                      <td className="py-6 font-bold text-right text-slate-900 text-lg pr-8">Total Estimation</td>
                      <td className="py-6 font-bold text-right text-primary-600 text-2xl">{formatIDR(calculations.totalFirstPayment)}</td>
                    </tr>
                  </tfoot>
                </table>

                <div className="text-center text-xs text-slate-400 mt-12 border-t pt-6">
                  This is a computer-generated quotation. Valid for 14 days.<br/>
                  Terms & Conditions Apply.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">Langkah Selanjutnya</h3>
                <div className="space-y-4">
                  <Button variant="primary" fullWidth onClick={handlePrint} className="h-12 shadow-lg shadow-primary-500/20">
                    <Download className="w-4 h-4 mr-2" /> Download PDF
                  </Button>
                  <Button variant="outline" fullWidth onClick={() => window.print()} className="h-12">
                    <Printer className="w-4 h-4 mr-2" /> Print Quote
                  </Button>
                  <Button variant="outline" fullWidth onClick={() => {
                    navigator.share({
                      title: 'BizOps Quotation',
                      text: `Check out this quotation for ${contactInfo.company}`,
                      url: window.location.href
                    }).catch(console.error);
                  }} className="h-12">
                    <Share2 className="w-4 h-4 mr-2" /> Share
                  </Button>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/50">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2 text-lg">Butuh Bantuan?</h4>
                <p className="text-sm text-blue-600 dark:text-blue-300 mb-6">Konsultan kami siap membantu menjelaskan detail penawaran ini.</p>
                <a href="tel:+622139702834" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold flex items-center justify-center transition-colors shadow-lg shadow-blue-500/30">
                  Call Sales Support <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <Button variant="ghost" fullWidth onClick={() => window.location.reload()} className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                Buat Simulasi Baru
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white selection:bg-primary-500/30">
      {currentStep === 'assessment' && renderAssessmentStep()}
      {currentStep === 'recommendation' && renderRecommendationStep()}
      {currentStep === 'customize' && renderCustomizeStep()}
      {currentStep === 'checkout' && renderCheckoutStep()}
      {currentStep === 'thankyou' && renderThankYouStep()}
    </div>
  );
};

export default PricingCalculator;
