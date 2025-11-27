import React, { useState, useMemo, useEffect } from 'react';
import { 
  Users, Package, Shield, Rocket, CheckCircle2, Send, ArrowRight, ArrowLeft, 
  Building2, Server, Database, Briefcase, Clock, Zap, HelpCircle, AlertCircle,
  FileText, Settings, TrendingUp, Globe, Check, Info, Factory, Store, UserCheck, 
  HardHat, GraduationCap, Stethoscope, MoreHorizontal, Cloud, HardDrive, LayoutGrid
} from 'lucide-react';
import Button from './Button';
import Card from './Card';
import { pricingPlans, addOns } from '../data/pricingData';

type Step = 'assessment' | 'recommendation' | 'customize' | 'summary';

interface AssessmentData {
  // Company Profile
  userCount: number;
  industry: string;
  companySize: string;
  locations: number;
  
  // Technical Requirements
  deployment: string;
  hasLegacySystem: boolean;
  dataVolume: string;
  
  // Operational Needs
  needsManufacturing: boolean;
  needsMultiBranch: boolean;
  needsProjectMgmt: boolean;
  needsAssetMgmt: boolean;
  
  // Integration & Customization
  apiIntegrations: number;
  customReports: number;
  needsCustomModule: boolean;
  
  // Support & Timeline
  supportLevel: string;
  goLiveTimeline: string;
  trainingNeeds: string;
}

const PricingCalculator: React.FC = () => {
  // Define icon aliases at the top to avoid ReferenceErrors
  const CalendarIcon = Clock;

  const [currentStep, setCurrentStep] = useState<Step>('assessment');
  const [assessmentStep, setAssessmentStep] = useState(1); // 1-6 sub-steps
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Assessment Data
  const [assessment, setAssessment] = useState<AssessmentData>({
    userCount: 20,
    industry: '',
    companySize: '',
    locations: 1,
    deployment: '',
    hasLegacySystem: false,
    dataVolume: 'low',
    needsManufacturing: false,
    needsMultiBranch: false,
    needsProjectMgmt: false,
    needsAssetMgmt: false,
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
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Helper untuk transisi halus
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
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 300);
  };

  // --- WEIGHTED SCORING ALGORITHM ---
  const recommendedPlanId = useMemo(() => {
    let score = 0;
    
    // User Count Scoring
    if (assessment.userCount > 200) score += 30;
    else if (assessment.userCount > 50) score += 15;
    
    // Industry Complexity
    if (assessment.industry === 'manufacturing') score += 20;
    if (assessment.industry === 'construction') score += 15;
    
    // Infrastructure
    if (assessment.deployment === 'onprem') score += 40;
    if (assessment.deployment === 'dedicated') score += 20;
    
    // Operational Complexity
    if (assessment.needsManufacturing) score += 20;
    if (assessment.needsMultiBranch) score += 10;
    if (assessment.locations > 3) score += 15;
    
    // Customization Needs
    if (assessment.needsCustomModule) score += 30;
    if (assessment.apiIntegrations > 2) score += 15;
    
    // Data Volume
    if (assessment.dataVolume === 'high') score += 10;
    
    // Support Level
    if (assessment.supportLevel === 'premium') score += 10;
    
    // Decision Logic
    if (score >= 50) return 'enterprise';
    if (score >= 20) return 'growth';
    return 'business';
  }, [assessment]);

  // Auto-recommend add-ons based on assessment
  useEffect(() => {
    if (currentStep === 'customize') {
      const recommended: { [key: string]: number } = {};
      
      // Auto-add implementation based on timeline
      if (assessment.goLiveTimeline === 'urgent') {
        recommended['impl-express'] = 1;
      } else if (assessment.goLiveTimeline === '1month') {
        recommended['impl-standard'] = 1;
      } else if (assessment.goLiveTimeline === '3months') {
        recommended['impl-pro'] = 1;
      }
      
      // Auto-add data migration if has legacy system
      if (assessment.hasLegacySystem) {
        recommended['data-migration'] = 1;
      }
      
      // Auto-add API integrations
      if (assessment.apiIntegrations > 0) {
        recommended['api-integration'] = assessment.apiIntegrations;
      }
      
      // Auto-add custom reports
      if (assessment.customReports > 0) {
        recommended['custom-report'] = assessment.customReports;
      }
      
      // Auto-add training based on needs
      if (assessment.trainingNeeds === 'extensive') {
        recommended['training-extra'] = 5;
      } else if (assessment.trainingNeeds === 'moderate') {
        recommended['training-extra'] = 2;
      }
      
      setSelectedAddOns(recommended);
    }
  }, [currentStep, assessment]);

  useEffect(() => {
    if (currentStep === 'recommendation' && !selectedPlanId) {
      setSelectedPlanId(recommendedPlanId);
    }
  }, [currentStep, recommendedPlanId, selectedPlanId]);

  // --- CALCULATIONS ---
  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlanId);

  const calculations = useMemo(() => {
    if (!selectedPlanData) return { basePrice: 0, monthlyRecurring: 0, oneTimeFees: 0, totalFirstPayment: 0, effectiveMonthly: 0 };

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
    const totalFirstPayment = billingCycle === 'yearly' ? (monthlyRecurring * 12) + oneTimeFees : monthlyRecurring + oneTimeFees;
    const effectiveMonthly = monthlyRecurring + (oneTimeFees / (billingCycle === 'yearly' ? 12 : 24));

    return { basePrice, monthlyRecurring, oneTimeFees, totalFirstPayment, effectiveMonthly };
  }, [selectedPlanId, billingCycle, selectedAddOns, selectedPlanData]);

  const formatIDR = (amount: number) => {
    if (amount === 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
  };

  const handleAddOnChange = (addOnId: string, quantity: number) => {
    setSelectedAddOns(prev => {
      if (quantity === 0) {
        const newAddOns = { ...prev };
        delete newAddOns[addOnId];
        return newAddOns;
      }
      return { ...prev, [addOnId]: quantity };
    });
  };

  const updateAssessment = (field: keyof AssessmentData, value: any) => {
    setAssessment(prev => ({ ...prev, [field]: value }));
  };

  // --- UI COMPONENTS ---
  const SelectableCard = ({ 
    selected, 
    onClick, 
    title, 
    description, 
    icon: Icon 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    title: string; 
    description?: string; 
    icon?: any 
  }) => (
    <div 
      onClick={onClick}
      className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group h-full flex flex-col items-center text-center justify-center hover:shadow-lg ${
        selected 
          ? 'border-primary-600 bg-primary-50/50 dark:bg-primary-900/20 shadow-md ring-1 ring-primary-500/20' 
          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-300'
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 text-primary-600 animate-in fade-in zoom-in duration-200">
          <CheckCircle2 className="w-5 h-5 fill-primary-100" />
        </div>
      )}
      {Icon && (
        <div className={`mb-3 p-3 rounded-xl transition-colors ${selected ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400 group-hover:text-primary-600 group-hover:bg-primary-50'}`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h4 className={`font-bold text-base mb-1 ${selected ? 'text-primary-900 dark:text-primary-100' : 'text-slate-900 dark:text-white'}`}>{title}</h4>
      {description && <p className="text-xs text-slate-500 leading-relaxed">{description}</p>}
    </div>
  );

  const StepIndicator = () => (
    <div className="max-w-xl mx-auto mb-10">
       <div className="flex justify-between mb-3 px-2">
         {['Profile', 'Technical', 'Operational', 'Integration', 'Support', 'Review'].map((label, idx) => {
           const isActive = assessmentStep === idx + 1;
           const isPast = assessmentStep > idx + 1;
           return (
             <div key={label} className={`flex flex-col items-center ${isActive ? 'scale-110' : ''} transition-transform`}>
               <div className={`w-2 h-2 rounded-full mb-1 ${isActive ? 'bg-primary-600' : isPast ? 'bg-primary-300' : 'bg-slate-300'}`} />
               <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-primary-600' : isPast ? 'text-slate-500' : 'text-slate-300'}`}>
                 {isActive ? label : ''}
               </span>
             </div>
           );
         })}
       </div>
       <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
            style={{ width: `${(assessmentStep / 6) * 100}%` }} 
          />
       </div>
    </div>
  );

  // --- RENDER ASSESSMENT STEPS ---
  const renderAssessmentSubStep = () => {
    const fadeClass = `transition-opacity duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`;

    switch(assessmentStep) {
      case 1: // Company Profile
        return (
          <div className={fadeClass}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Profil Perusahaan</h3>
              <p className="text-slate-500">Mari mulai dengan mengenal skala bisnis Anda</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* User Count */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <label className="block text-sm font-bold mb-6 text-slate-900 dark:text-white flex justify-between items-center">
                  <span>Estimasi Jumlah System User</span>
                  <span className="text-primary-600 font-extrabold text-2xl bg-primary-50 dark:bg-primary-900/30 px-4 py-1 rounded-lg border border-primary-100 dark:border-primary-800">
                    {assessment.userCount}
                  </span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  step="5" 
                  value={assessment.userCount} 
                  onChange={(e) => updateAssessment('userCount', parseInt(e.target.value))} 
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary-600 hover:accent-primary-500 transition-all" 
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>5 Users</span>
                  <span>250 Users</span>
                  <span>500+ Users</span>
                </div>
              </div>

              {/* Company Size Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectableCard 
                  selected={assessment.companySize === 'startup'} 
                  onClick={() => updateAssessment('companySize', 'startup')}
                  title="Startup / Small"
                  description="< 20 Karyawan"
                  icon={Rocket}
                />
                <SelectableCard 
                  selected={assessment.companySize === 'sme'} 
                  onClick={() => updateAssessment('companySize', 'sme')}
                  title="Mid-Market / SME"
                  description="20 - 100 Karyawan"
                  icon={Building2}
                />
                <SelectableCard 
                  selected={assessment.companySize === 'enterprise'} 
                  onClick={() => updateAssessment('companySize', 'enterprise')}
                  title="Enterprise"
                  description="> 100 Karyawan"
                  icon={Globe}
                />
              </div>

              {/* Industry Grid */}
              <div className="space-y-3">
                 <label className="text-sm font-bold text-slate-900 dark:text-white ml-1">Industri Bisnis</label>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { id: 'retail', name: 'Retail / Grosir', icon: Store },
                      { id: 'manufacturing', name: 'Manufaktur', icon: Factory },
                      { id: 'services', name: 'Jasa / Agency', icon: UserCheck },
                      { id: 'construction', name: 'Konstruksi', icon: HardHat },
                      { id: 'education', name: 'Pendidikan', icon: GraduationCap },
                      { id: 'healthcare', name: 'Kesehatan', icon: Stethoscope },
                      { id: 'fnb', name: 'F&B', icon: Info },
                      { id: 'other', name: 'Lainnya', icon: MoreHorizontal },
                    ].map(ind => (
                      <SelectableCard
                        key={ind.id}
                        selected={assessment.industry === ind.id}
                        onClick={() => updateAssessment('industry', ind.id)}
                        title={ind.name}
                        icon={ind.icon}
                      />
                    ))}
                 </div>
              </div>
            </div>
          </div>
        );

      case 2: // Technical Requirements
        return (
          <div className={fadeClass}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Preferensi Teknis</h3>
              <p className="text-slate-500">Tentukan bagaimana sistem akan dijalankan</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-48">
                 <SelectableCard 
                    selected={assessment.deployment === 'cloud'} 
                    onClick={() => updateAssessment('deployment', 'cloud')}
                    title="Shared Cloud"
                    description="Paling hemat, maintenance dikelola penuh oleh BizOps."
                    icon={Cloud}
                  />
                  <SelectableCard 
                    selected={assessment.deployment === 'dedicated'} 
                    onClick={() => updateAssessment('deployment', 'dedicated')}
                    title="Dedicated Cloud"
                    description="Performa tinggi dengan resource eksklusif (VPS)."
                    icon={Server}
                  />
                  <SelectableCard 
                    selected={assessment.deployment === 'onprem'} 
                    onClick={() => updateAssessment('deployment', 'onprem')}
                    title="On-Premise"
                    description="Deploy di server kantor Anda sendiri. Kontrol penuh."
                    icon={HardDrive}
                  />
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-4">
                     <div className={`p-3 rounded-xl transition-colors ${assessment.hasLegacySystem ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-500'}`}>
                       <Database className="w-6 h-6" />
                     </div>
                     <div>
                       <div className="font-bold text-slate-900 dark:text-white text-lg">Migrasi Data Lama?</div>
                       <div className="text-sm text-slate-500">Aktifkan jika Anda perlu memindahkan data dari sistem sebelumnya.</div>
                     </div>
                  </div>
                  <div className={`w-14 h-8 flex items-center bg-slate-300 rounded-full p-1 duration-300 ease-in-out ${assessment.hasLegacySystem ? 'bg-amber-500' : ''}`}>
                    <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${assessment.hasLegacySystem ? 'translate-x-6' : ''}`} />
                  </div>
                  <input type="checkbox" className="hidden" checked={assessment.hasLegacySystem} onChange={(e) => updateAssessment('hasLegacySystem', e.target.checked)} />
                </label>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300 text-center">Volume Transaksi Bulanan</label>
                <div className="flex justify-center gap-2">
                  {['low', 'medium', 'high'].map(vol => (
                    <button
                      key={vol}
                      onClick={() => updateAssessment('dataVolume', vol)}
                      className={`px-6 py-3 rounded-lg border-2 text-sm font-semibold transition-all ${assessment.dataVolume === vol ? 'border-primary-600 bg-primary-600 text-white shadow-lg' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}
                    >
                      {vol === 'low' ? '< 1,000' : vol === 'medium' ? '1k - 10k' : '> 10k'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Operational Needs
        return (
          <div className={fadeClass}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Kebutuhan Operasional</h3>
              <p className="text-slate-500">Pilih modul krusial yang Anda butuhkan</p>
            </div>
            
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: 'needsManufacturing', label: 'Manufacturing', desc: 'Produksi, BOM, Work Order', icon: Factory },
                { key: 'needsMultiBranch', label: 'Multi-Branch', desc: 'Banyak Cabang / Gudang', icon: Building2 },
                { key: 'needsProjectMgmt', label: 'Project Mgmt', desc: 'Proyek, Timesheet, Costing', icon: Briefcase },
                { key: 'needsAssetMgmt', label: 'Asset Mgmt', desc: 'Tracking Aset Tetap & Depresiasi', icon: LayoutGrid }
              ].map(item => (
                <div 
                  key={item.key}
                  onClick={() => updateAssessment(item.key as keyof AssessmentData, !assessment[item.key as keyof AssessmentData])}
                  className={`flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${assessment[item.key as keyof AssessmentData] ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'}`}
                >
                  <div className={`p-3 rounded-xl mr-4 ${assessment[item.key as keyof AssessmentData] ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 dark:text-white text-lg mb-1">{item.label}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${assessment[item.key as keyof AssessmentData] ? 'border-green-500 bg-green-500' : 'border-slate-300'}`}>
                    {assessment[item.key as keyof AssessmentData] && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4: // Integration
        return (
          <div className={fadeClass}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Integrasi & Kustomisasi</h3>
              <p className="text-slate-500">Seberapa kompleks ekosistem sistem Anda?</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-8 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div>
                <label className="text-sm font-bold text-slate-900 dark:text-white mb-4 block flex justify-between">
                  <span>Jumlah Integrasi API (Pihak ke-3)</span>
                  <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-lg font-bold">{assessment.apiIntegrations}</span>
                </label>
                <input 
                  type="range" min="0" max="10" step="1" 
                  value={assessment.apiIntegrations} 
                  onChange={(e) => updateAssessment('apiIntegrations', parseInt(e.target.value))} 
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" 
                />
                <p className="text-xs text-slate-400 mt-2">Contoh: Payment Gateway, Marketplace, Tax System.</p>
              </div>
              
              <hr className="border-slate-100 dark:border-slate-700" />

              <div>
                <label className="text-sm font-bold text-slate-900 dark:text-white mb-4 block flex justify-between">
                  <span>Kebutuhan Custom Report</span>
                  <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-lg font-bold">{assessment.customReports}</span>
                </label>
                <input 
                  type="range" min="0" max="20" step="1" 
                  value={assessment.customReports} 
                  onChange={(e) => updateAssessment('customReports', parseInt(e.target.value))} 
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" 
                />
              </div>

              <hr className="border-slate-100 dark:border-slate-700" />

              <label className="flex items-center justify-between cursor-pointer group">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Butuh Custom Module?</div>
                    <div className="text-sm text-slate-500">Untuk logika bisnis yang sangat unik/spesifik.</div>
                  </div>
                  <div className={`w-12 h-7 flex items-center bg-slate-200 rounded-full p-1 duration-300 ease-in-out ${assessment.needsCustomModule ? 'bg-purple-600' : ''}`}>
                    <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${assessment.needsCustomModule ? 'translate-x-5' : ''}`} />
                  </div>
                  <input type="checkbox" className="hidden" checked={assessment.needsCustomModule} onChange={(e) => updateAssessment('needsCustomModule', e.target.checked)} />
              </label>
            </div>
          </div>
        );

      case 5: // Support & Timeline
        return (
           <div className={fadeClass}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Timeline & Support</h3>
              <p className="text-slate-500">Kapan Anda berencana Go-Live?</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'urgent', label: 'ASAP / Urgent', desc: '< 1 Bulan', icon: Zap },
                    { id: '1month', label: 'Standard', desc: '1 - 2 Bulan', icon: Clock },
                    { id: '3months', label: 'Planned', desc: '3+ Bulan', icon: CalendarIcon }
                  ].map(time => (
                    <SelectableCard
                      key={time.id}
                      selected={assessment.goLiveTimeline === time.id}
                      onClick={() => updateAssessment('goLiveTimeline', time.id)}
                      title={time.label}
                      description={time.desc}
                      icon={time.icon}
                    />
                  ))}
               </div>

               <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-center">Level Support yang Diharapkan</h4>
                  <div className="flex justify-center gap-4">
                     {['standard', 'priority', 'premium'].map(lvl => (
                       <button
                         key={lvl}
                         onClick={() => updateAssessment('supportLevel', lvl)}
                         className={`px-6 py-3 rounded-xl border-2 text-sm font-bold capitalize transition-all ${assessment.supportLevel === lvl ? 'border-red-500 bg-red-50 text-red-600' : 'border-slate-200 bg-white text-slate-500 hover:border-red-200'}`}
                       >
                         {lvl} Support
                       </button>
                     ))}
                  </div>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    {assessment.supportLevel === 'standard' && 'Email Only, respon dalam 48 jam.'}
                    {assessment.supportLevel === 'priority' && 'Chat & Email, respon dalam 12 jam.'}
                    {assessment.supportLevel === 'premium' && 'Dedicated Hotline 24/7, respon < 2 jam.'}
                  </p>
               </div>
            </div>
           </div>
        );

      case 6: // Review
        return (
          <div className={fadeClass}>
             <div className="text-center mb-8">
               <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 animate-bounce-slow">
                 <CheckCircle2 className="w-8 h-8 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Review Assessment</h3>
               <p className="text-slate-500">Analisa selesai! Silakan periksa kembali data Anda.</p>
             </div>

             <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                   <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                     <Building2 className="w-4 h-4 text-primary-500" /> Profil Bisnis
                   </h5>
                   <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                     <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><span>User System</span> <span className="font-semibold">{assessment.userCount}</span></li>
                     <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><span>Industri</span> <span className="font-semibold capitalize">{assessment.industry}</span></li>
                     <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><span>Skala</span> <span className="font-semibold capitalize">{assessment.companySize}</span></li>
                     <li className="flex justify-between"><span>Lokasi</span> <span className="font-semibold">{assessment.locations} Cabang</span></li>
                   </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                   <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                     <Settings className="w-4 h-4 text-primary-500" /> Teknis & Ops
                   </h5>
                   <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                     <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><span>Deployment</span> <span className="font-semibold capitalize">{assessment.deployment}</span></li>
                     <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><span>Legacy Data</span> <span className="font-semibold">{assessment.hasLegacySystem ? 'Ya' : 'Tidak'}</span></li>
                     <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><span>Integrasi</span> <span className="font-semibold">{assessment.apiIntegrations} API</span></li>
                     <li className="flex justify-between"><span>Go-Live</span> <span className="font-semibold capitalize">{assessment.goLiveTimeline}</span></li>
                   </ul>
                </div>
             </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderAssessmentStep = () => {
    const canProceed = () => {
      switch(assessmentStep) {
        case 1: return assessment.industry && assessment.companySize;
        case 2: return assessment.deployment;
        case 3: return true;
        case 4: return true;
        case 5: return true;
        case 6: return true;
        default: return false;
      }
    };

    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <StepIndicator />
        
        {renderAssessmentSubStep()}

        {/* Floating Navigation Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 shadow-lg z-50 animate-slide-up">
           <div className="max-w-3xl mx-auto flex justify-between items-center">
              <Button 
                variant="ghost" 
                onClick={() => changeStep('prev')}
                disabled={assessmentStep === 1 || isTransitioning}
                className="text-slate-500 hover:text-slate-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
              </Button>
              
              {assessmentStep < 6 ? (
                <Button 
                  variant="primary" 
                  onClick={() => changeStep('next')}
                  disabled={!canProceed() || isTransitioning}
                  className="px-8 rounded-full shadow-primary-500/25 shadow-lg"
                >
                  Selanjutnya <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  variant="primary" 
                  onClick={() => changeStep('jump', 'recommendation')}
                  className="px-8 rounded-full shadow-primary-500/25 shadow-lg bg-green-600 hover:bg-green-500"
                >
                  Lihat Hasil Analisa <Rocket className="w-4 h-4 ml-2" />
                </Button>
              )}
           </div>
        </div>
        <div className="h-20" /> {/* Spacer for fixed bottom bar */}
      </div>
    );
  };

  const renderRecommendationStep = () => {
     const recPlan = pricingPlans.find(p => p.id === recommendedPlanId);
     return (
       <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="max-w-4xl mx-auto text-center mb-12">
             <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce-slow">
               🎉 Analisa Selesai
             </div>
             <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Solusi Terbaik: {recPlan?.name} Plan</h2>
             <p className="text-lg text-slate-600 dark:text-slate-400">
               Berdasarkan profil bisnis dan kebutuhan teknis Anda, paket ini memberikan value terbaik.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingPlans.map(plan => {
              const isRec = plan.id === recommendedPlanId;
              const isSelected = plan.id === selectedPlanId;
              
              return (
                <div 
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`relative group rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'border-primary-600 bg-white dark:bg-slate-800 shadow-2xl scale-105 z-10' 
                      : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-primary-200 grayscale-[0.5] hover:grayscale-0'
                  }`}
                >
                  {isRec && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> BEST MATCH
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                    <div className="text-primary-600 font-bold text-3xl mt-2">
                       {plan.priceMonthly === 0 ? 'Custom' : formatIDR(plan.priceMonthly)}
                       <span className="text-xs text-slate-400 font-normal ml-1">/mo</span>
                    </div>
                  </div>

                  <hr className="border-slate-100 dark:border-slate-700 mb-6" />

                  <ul className="space-y-4 mb-8">
                    {plan.features.slice(0, 6).map((f, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-green-500' : 'text-slate-300'}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={isSelected ? 'primary' : 'outline'} 
                    fullWidth 
                    className={isSelected ? 'shadow-lg shadow-primary-500/30' : ''}
                  >
                    {isSelected ? 'Terpilih' : 'Pilih Paket Ini'}
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
             <Button 
               variant="primary" 
               size="lg" 
               onClick={() => changeStep('jump', 'customize')}
               className="px-12 h-14 text-lg rounded-full shadow-xl shadow-primary-600/20"
             >
               Lanjut ke Konfigurasi <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
          </div>
       </div>
     );
  };

  const renderCustomizeStep = () => {
     return (
        <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
           {/* Top Navigation Bar */}
           <div className="flex items-center justify-between mb-8">
              <button 
                 onClick={() => changeStep('jump', 'recommendation')}
                 className="flex items-center text-slate-500 hover:text-slate-900 font-medium transition-colors"
              >
                 <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Paket
              </button>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white hidden md:block">Konfigurasi Akhir</h2>
              <div className="w-24" /> {/* Spacer */}
           </div>

           <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column: Addons */}
              <div className="lg:col-span-8 space-y-8">
                 {/* Billing Toggle */}
                 <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-slate-800 rounded-xl">
                          <Shield className="w-6 h-6 text-green-400" />
                       </div>
                       <div>
                          <div className="font-bold text-lg">Pilih Siklus Pembayaran</div>
                          <div className="text-slate-400 text-sm">Hemat hingga 20% dengan pembayaran tahunan</div>
                       </div>
                    </div>
                    <div className="flex bg-slate-800 p-1 rounded-xl">
                       <button 
                         onClick={() => setBillingCycle('monthly')}
                         className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow' : 'text-slate-400 hover:text-white'}`}
                       >
                         Bulanan
                       </button>
                       <button 
                         onClick={() => setBillingCycle('yearly')}
                         className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-green-500 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                       >
                         Tahunan <span className="text-[10px] bg-white/20 px-1.5 rounded">SAVE 20%</span>
                       </button>
                    </div>
                 </div>

                 {/* Addon Categories */}
                 {['implementation', 'infrastructure', 'support'].map(category => {
                    const categoryAddons = addOns.filter(a => a.category === category && (selectedPlanId === 'enterprise' || a.availableFor.includes(selectedPlanId)));
                    if (categoryAddons.length === 0) return null;

                    const config: any = {
                       implementation: { title: 'Implementasi & Setup', icon: Rocket, color: 'text-amber-500', bg: 'bg-amber-100' },
                       infrastructure: { title: 'Infrastruktur', icon: Server, color: 'text-blue-500', bg: 'bg-blue-100' },
                       support: { title: 'Dukungan Teknis', icon: Users, color: 'text-green-500', bg: 'bg-green-100' },
                    };

                    const CategoryIcon = config[category].icon;

                    return (
                       <Card key={category} className="overflow-hidden border-0 shadow-lg">
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
                             <div className={`p-2 rounded-lg ${config[category].bg}`}>
                                <CategoryIcon className={`w-5 h-5 ${config[category].color}`} />
                             </div>
                             <h3 className="font-bold text-lg text-slate-900 dark:text-white">{config[category].title}</h3>
                          </div>
                          <div className="divide-y divide-slate-100 dark:divide-slate-700">
                             {categoryAddons.map(addOn => {
                                const isSelected = (selectedAddOns[addOn.id] || 0) > 0;
                                return (
                                   <div key={addOn.id} className={`p-5 transition-colors flex items-center justify-between ${isSelected ? 'bg-primary-50/30' : 'hover:bg-slate-50'}`}>
                                      <div className="flex-1 pr-4">
                                         <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-slate-900 dark:text-white">{addOn.name}</span>
                                            {addOn.recommended && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Recommended</span>}
                                         </div>
                                         <p className="text-sm text-slate-500 mb-2">{addOn.description}</p>
                                         <div className="text-primary-600 font-bold text-sm">
                                            {formatIDR(addOn.price)} <span className="text-slate-400 font-normal text-xs">{addOn.unit}</span>
                                         </div>
                                      </div>
                                      
                                      {/* Control */}
                                      <div>
                                         {addOn.unit.includes('one-time') || addOn.unit.includes('per bulan') ? (
                                            <button 
                                              onClick={() => {
                                                if(addOn.id.includes('impl')) {
                                                  const newState = { ...selectedAddOns };
                                                  Object.keys(newState).forEach(k => { if(k.includes('impl')) delete newState[k] });
                                                  if(!isSelected) newState[addOn.id] = 1;
                                                  setSelectedAddOns(newState);
                                                } else {
                                                  handleAddOnChange(addOn.id, isSelected ? 0 : 1);
                                                }
                                              }}
                                              className={`w-12 h-7 rounded-full transition-colors relative ${isSelected ? 'bg-primary-600' : 'bg-slate-200'}`}
                                            >
                                               <div className={`w-5 h-5 bg-white rounded-full shadow absolute top-1 transition-all ${isSelected ? 'left-6' : 'left-1'}`} />
                                            </button>
                                         ) : (
                                            <div className="flex items-center bg-white border border-slate-200 rounded-lg h-9">
                                               <button onClick={() => handleAddOnChange(addOn.id, Math.max(0, (selectedAddOns[addOn.id] || 0) - 1))} className="w-8 h-full flex items-center justify-center hover:bg-slate-50 text-slate-500">-</button>
                                               <input className="w-10 text-center text-sm font-bold border-x border-slate-200 h-full" value={selectedAddOns[addOn.id] || 0} readOnly />
                                               <button onClick={() => handleAddOnChange(addOn.id, (selectedAddOns[addOn.id] || 0) + 1)} className="w-8 h-full flex items-center justify-center hover:bg-slate-50 text-slate-500">+</button>
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
              </div>

              {/* Right Column: Sticky Summary */}
              <div className="lg:col-span-4">
                 <div className="sticky top-24 space-y-6">
                    <Card className="bg-white dark:bg-slate-800 shadow-xl border-0 ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden">
                       <div className="bg-slate-900 p-6 text-white">
                          <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Estimasi Total</div>
                          <div className="text-4xl font-bold mb-2">{formatIDR(calculations.totalFirstPayment)}</div>
                          <p className="text-xs text-slate-400">Total pembayaran awal (termasuk setup fee)</p>
                       </div>
                       
                       <div className="p-6 space-y-4">
                          <div className="flex justify-between items-center text-sm font-medium pb-4 border-b border-slate-100 dark:border-slate-700">
                             <span className="text-slate-600 dark:text-slate-300">Paket {selectedPlanData?.name} ({billingCycle})</span>
                             <span>{formatIDR(billingCycle === 'yearly' ? calculations.monthlyRecurring * 12 : calculations.monthlyRecurring)}</span>
                          </div>
                          
                          <div className="space-y-2">
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
                       
                       <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-700">
                          <Button variant="primary" fullWidth size="lg" onClick={() => setShowQuoteModal(true)} className="shadow-lg shadow-primary-600/20">
                             Kirim Penawaran
                          </Button>
                          <p className="text-[10px] text-center text-slate-400 mt-3">
                             Penawaran resmi akan dikirim ke email Anda. <br/>Tidak ada komitmen pembayaran saat ini.
                          </p>
                       </div>
                    </Card>
                 </div>
              </div>
           </div>
        </div>
     );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-900">
      {currentStep === 'assessment' && renderAssessmentStep()}
      {currentStep === 'recommendation' && renderRecommendationStep()}
      {currentStep === 'customize' && renderCustomizeStep()}
      
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in zoom-in duration-200">
          <Card className="max-w-md w-full shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 to-purple-500" />
             <button onClick={() => setShowQuoteModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white text-2xl leading-none transition-colors">&times;</button>
             
             <div className="text-center mb-8 pt-4">
               <div className="w-20 h-20 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                 <Send className="w-10 h-10 text-primary-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Email Penawaran</h3>
               <p className="text-sm text-slate-500 mt-2 px-6">Detail spesifikasi teknis dan rincian harga akan dikirimkan ke inbox Anda.</p>
             </div>
             
             <form className="space-y-4 px-2" onSubmit={(e) => { e.preventDefault(); alert('Penawaran terkirim! Cek email Anda.'); setShowQuoteModal(false); }}>
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="Nama Depan" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" required />
                 <input type="text" placeholder="Nama Belakang" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
               </div>
               <input type="email" placeholder="Email Bisnis *" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" required />
               <input type="text" placeholder="Nama Perusahaan" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
               <input type="tel" placeholder="No. WhatsApp (Optional)" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
               
               <div className="pt-4">
                 <Button variant="primary" fullWidth size="lg" type="submit" className="h-12 text-lg shadow-lg shadow-primary-500/20">
                   Kirim Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
               </div>
             </form>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;
