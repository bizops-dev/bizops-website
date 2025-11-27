import React, { useState, useMemo, useEffect } from 'react';
import { 
  Users, Package, Shield, Rocket, CheckCircle2, Send, ArrowRight, ArrowLeft, 
  Building2, Server, Database, Briefcase, Clock, Zap, HelpCircle, AlertCircle,
  FileText, Settings, TrendingUp, Globe
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
  const [currentStep, setCurrentStep] = useState<Step>('assessment');
  const [assessmentStep, setAssessmentStep] = useState(1); // 1-6 sub-steps
  
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

  // --- RENDER ASSESSMENT STEPS ---
  const renderAssessmentSubStep = () => {
    switch(assessmentStep) {
      case 1: // Company Profile
        return (
          <Card className="p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Profil Perusahaan</h3>
                <p className="text-sm text-slate-500">Informasi dasar tentang organisasi Anda</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Ukuran Perusahaan</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Startup (< 20)', 'SME (20-100)', 'Enterprise (> 100)'].map((size, idx) => (
                    <label key={size} className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${assessment.companySize === ['startup', 'sme', 'enterprise'][idx] ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="companySize" className="hidden" checked={assessment.companySize === ['startup', 'sme', 'enterprise'][idx]} onChange={() => updateAssessment('companySize', ['startup', 'sme', 'enterprise'][idx])} />
                      <div className="font-semibold text-sm">{size}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  Estimasi Jumlah User Sistem
                  <div className="group relative">
                    <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-slate-800 text-white text-xs rounded shadow-lg z-10">
                      User yang butuh akses penuh ke sistem (Admin, Finance, Manager)
                    </div>
                  </div>
                </label>
                <div className="flex items-center gap-4">
                  <input type="range" min="5" max="500" step="5" value={assessment.userCount} onChange={(e) => updateAssessment('userCount', parseInt(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                  <div className="w-20 text-center font-bold text-xl text-blue-600 bg-blue-50 p-2 rounded-lg border border-blue-200">{assessment.userCount}</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Industri Bisnis</label>
                <select className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium" value={assessment.industry} onChange={(e) => updateAssessment('industry', e.target.value)}>
                  <option value="">Pilih Industri...</option>
                  <option value="retail">Retail / Grosir / Distribusi</option>
                  <option value="manufacturing">Manufaktur / Pabrikasi</option>
                  <option value="services">Jasa / Konsultan / Agency</option>
                  <option value="fnb">F&B / Restoran / Hospitality</option>
                  <option value="construction">Konstruksi / Kontraktor</option>
                  <option value="healthcare">Healthcare / Klinik</option>
                  <option value="education">Pendidikan / Training</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Jumlah Lokasi / Cabang</label>
                <input type="number" min="1" max="100" value={assessment.locations} onChange={(e) => updateAssessment('locations', parseInt(e.target.value))} className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium" />
              </div>
            </div>
          </Card>
        );

      case 2: // Technical Requirements
        return (
          <Card className="p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <Server className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kebutuhan Teknis</h3>
                <p className="text-sm text-slate-500">Infrastruktur dan data requirements</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Preferensi Deployment</label>
                <div className="space-y-3">
                  {[
                    { id: 'cloud', name: 'Shared Cloud', desc: 'Hemat biaya, managed by BizOps' },
                    { id: 'dedicated', name: 'Dedicated VPS', desc: 'Performa tinggi, isolated resource' },
                    { id: 'onprem', name: 'On-Premise', desc: 'Server sendiri, kontrol penuh' }
                  ].map(opt => (
                    <label key={opt.id} className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${assessment.deployment === opt.id ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="deployment" className="mt-1 mr-3" checked={assessment.deployment === opt.id} onChange={() => updateAssessment('deployment', opt.id)} />
                      <div>
                        <div className="font-bold">{opt.name}</div>
                        <div className="text-sm text-slate-500">{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:border-purple-300 transition-all">
                  <input type="checkbox" checked={assessment.hasLegacySystem} onChange={(e) => updateAssessment('hasLegacySystem', e.target.checked)} className="mr-3 w-5 h-5 accent-purple-600" />
                  <div>
                    <div className="font-bold">Punya Sistem Lama (Legacy System)</div>
                    <div className="text-sm text-slate-500">Butuh migrasi data dari software existing</div>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Volume Data Transaksi</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'low', label: 'Rendah', desc: '< 1K/bulan' },
                    { id: 'medium', label: 'Sedang', desc: '1K-10K/bulan' },
                    { id: 'high', label: 'Tinggi', desc: '> 10K/bulan' }
                  ].map(vol => (
                    <label key={vol.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${assessment.dataVolume === vol.id ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="dataVolume" className="hidden" checked={assessment.dataVolume === vol.id} onChange={() => updateAssessment('dataVolume', vol.id)} />
                      <div className="font-bold text-sm">{vol.label}</div>
                      <div className="text-xs text-slate-500">{vol.desc}</div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );

      case 3: // Operational Needs
        return (
          <Card className="p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kebutuhan Operasional</h3>
                <p className="text-sm text-slate-500">Modul dan fitur yang dibutuhkan</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { key: 'needsManufacturing', label: 'Manufacturing & Production', desc: 'Bill of Materials, Work Order, Quality Control' },
                { key: 'needsMultiBranch', label: 'Multi-Branch / Multi-Company', desc: 'Konsolidasi data antar cabang/entitas' },
                { key: 'needsProjectMgmt', label: 'Project Management', desc: 'Task tracking, timesheet, project costing' },
                { key: 'needsAssetMgmt', label: 'Asset Management', desc: 'Fixed assets, depreciation, maintenance' }
              ].map(item => (
                <label key={item.key} className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${assessment[item.key as keyof AssessmentData] ? 'border-green-600 bg-green-50 dark:bg-green-900/20' : 'border-slate-200 dark:border-slate-700 hover:border-green-300'}`}>
                  <input type="checkbox" checked={!!assessment[item.key as keyof AssessmentData]} onChange={(e) => updateAssessment(item.key as keyof AssessmentData, e.target.checked)} className="mt-1 mr-3 w-5 h-5 accent-green-600" />
                  <div>
                    <div className="font-bold">{item.label}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </Card>
        );

      case 4: // Integration & Customization
        return (
          <Card className="p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Integrasi & Kustomisasi</h3>
                <p className="text-sm text-slate-500">Kebutuhan pengembangan tambahan</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  Jumlah API Integration yang Dibutuhkan
                  <div className="group relative">
                    <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-slate-800 text-white text-xs rounded shadow-lg z-10">
                      Contoh: Payment Gateway, Accounting Software, E-commerce Platform
                    </div>
                  </div>
                </label>
                <input type="number" min="0" max="20" value={assessment.apiIntegrations} onChange={(e) => updateAssessment('apiIntegrations', parseInt(e.target.value))} className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Jumlah Custom Report yang Dibutuhkan</label>
                <input type="number" min="0" max="50" value={assessment.customReports} onChange={(e) => updateAssessment('customReports', parseInt(e.target.value))} className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium" />
              </div>

              <div>
                <label className="flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-amber-300">
                  <input type="checkbox" checked={assessment.needsCustomModule} onChange={(e) => updateAssessment('needsCustomModule', e.target.checked)} className="mt-1 mr-3 w-5 h-5 accent-amber-600" />
                  <div>
                    <div className="font-bold">Butuh Custom Module Development</div>
                    <div className="text-sm text-slate-500">Fitur khusus yang tidak tersedia di modul standar</div>
                  </div>
                </label>
              </div>
            </div>
          </Card>
        );

      case 5: // Support & Timeline
        return (
          <Card className="p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Support & Timeline</h3>
                <p className="text-sm text-slate-500">Level dukungan dan jadwal implementasi</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Level Support yang Diinginkan</label>
                <div className="space-y-3">
                  {[
                    { id: 'standard', name: 'Standard', desc: 'Email support, response 48 jam' },
                    { id: 'priority', name: 'Priority', desc: 'Chat/WA support, response 12 jam' },
                    { id: 'premium', name: 'Premium 24/7', desc: 'Dedicated hotline, response 2 jam' }
                  ].map(opt => (
                    <label key={opt.id} className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${assessment.supportLevel === opt.id ? 'border-red-600 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="supportLevel" className="mt-1 mr-3" checked={assessment.supportLevel === opt.id} onChange={() => updateAssessment('supportLevel', opt.id)} />
                      <div>
                        <div className="font-bold">{opt.name}</div>
                        <div className="text-sm text-slate-500">{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Target Go-Live</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'urgent', label: 'Urgent', desc: '< 2 minggu' },
                    { id: '1month', label: '1 Bulan', desc: 'Standard' },
                    { id: '3months', label: '3 Bulan', desc: 'Planned' }
                  ].map(opt => (
                    <label key={opt.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${assessment.goLiveTimeline === opt.id ? 'border-red-600 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="goLiveTimeline" className="hidden" checked={assessment.goLiveTimeline === opt.id} onChange={() => updateAssessment('goLiveTimeline', opt.id)} />
                      <div className="font-bold text-sm">{opt.label}</div>
                      <div className="text-xs text-slate-500">{opt.desc}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Kebutuhan Training</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'basic', label: 'Basic', desc: 'Video tutorial' },
                    { id: 'moderate', label: 'Moderate', desc: '2-3 sesi' },
                    { id: 'extensive', label: 'Extensive', desc: '5+ sesi' }
                  ].map(opt => (
                    <label key={opt.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${assessment.trainingNeeds === opt.id ? 'border-red-600 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                      <input type="radio" name="trainingNeeds" className="hidden" checked={assessment.trainingNeeds === opt.id} onChange={() => updateAssessment('trainingNeeds', opt.id)} />
                      <div className="font-bold text-sm">{opt.label}</div>
                      <div className="text-xs text-slate-500">{opt.desc}</div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );

      case 6: // Summary Review
        return (
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Review Assessment</h3>
                <p className="text-sm text-slate-500">Pastikan informasi sudah benar sebelum lanjut</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Company Profile</div>
                  <div className="font-semibold">{assessment.userCount} Users • {assessment.industry || 'N/A'} • {assessment.locations} Lokasi</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Infrastructure</div>
                  <div className="font-semibold">{assessment.deployment || 'N/A'} • {assessment.hasLegacySystem ? 'Ada Legacy System' : 'No Legacy'}</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Operational Needs</div>
                  <div className="font-semibold text-sm">
                    {[
                      assessment.needsManufacturing && 'Manufacturing',
                      assessment.needsMultiBranch && 'Multi-Branch',
                      assessment.needsProjectMgmt && 'Project Mgmt',
                      assessment.needsAssetMgmt && 'Asset Mgmt'
                    ].filter(Boolean).join(', ') || 'Standard Modules'}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Integration</div>
                  <div className="font-semibold">{assessment.apiIntegrations} API • {assessment.customReports} Reports • {assessment.needsCustomModule ? 'Custom Module' : 'No Custom'}</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Support & Timeline</div>
                  <div className="font-semibold">{assessment.supportLevel} Support • Go-Live: {assessment.goLiveTimeline}</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Training</div>
                  <div className="font-semibold">{assessment.trainingNeeds}</div>
                </div>
              </div>
            </div>
          </Card>
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
      <div className="animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Assessment Kebutuhan ERP</h2>
          <p className="text-slate-600 dark:text-slate-400">Step {assessmentStep} of 6</p>
        </div>

        {/* Sub-step Progress */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between mb-2 text-xs">
            {['Profile', 'Technical', 'Operational', 'Integration', 'Support', 'Review'].map((label, idx) => (
              <span key={label} className={`font-medium ${assessmentStep === idx + 1 ? 'text-primary-600' : 'text-slate-400'}`}>{label}</span>
            ))}
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary-600 transition-all duration-300" style={{ width: `${(assessmentStep / 6) * 100}%` }} />
          </div>
        </div>

        {renderAssessmentSubStep()}

        {/* Navigation */}
        <div className="flex justify-between max-w-3xl mx-auto mt-8">
          <Button 
            variant="outline" 
            onClick={() => assessmentStep > 1 ? setAssessmentStep(assessmentStep - 1) : null}
            disabled={assessmentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Sebelumnya
          </Button>
          
          {assessmentStep < 6 ? (
            <Button 
              variant="primary" 
              onClick={() => setAssessmentStep(assessmentStep + 1)}
              disabled={!canProceed()}
            >
              Selanjutnya <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              variant="primary" 
              onClick={() => {
                setSelectedPlanId(recommendedPlanId);
                setCurrentStep('recommendation');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Lihat Rekomendasi <Rocket className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    );
  };

  // STEP 2: RECOMMENDATION (Simplified - same as before but with better scoring explanation)
  const renderRecommendationStep = () => {
    const recPlan = pricingPlans.find(p => p.id === recommendedPlanId);
    
    return (
      <div className="animate-fade-in max-w-6xl mx-auto">
        <div className="mb-8">
           <button onClick={() => setCurrentStep('assessment')} className="flex items-center text-slate-500 hover:text-primary-600 transition-colors mb-4">
             <ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Assessment
           </button>
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Rekomendasi: {recPlan?.name} Plan</h2>
           <p className="text-slate-600 dark:text-slate-400 mt-2">
             Berdasarkan analisa mendalam kebutuhan Anda, kami merekomendasikan paket ini karena:
           </p>
           <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-300">
             {assessment.userCount > 200 && <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Jumlah user ({assessment.userCount}) membutuhkan resource besar</li>}
             {assessment.deployment === 'onprem' && <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Deployment On-Premise hanya tersedia di Enterprise</li>}
             {assessment.needsManufacturing && <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Modul Manufacturing tersedia di paket ini</li>}
             {assessment.needsCustomModule && <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Custom module development membutuhkan akses penuh</li>}
             {assessment.hasLegacySystem && <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Data migration dari legacy system perlu support profesional</li>}
           </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map(plan => {
            const isRec = plan.id === recommendedPlanId;
            const isSelected = plan.id === selectedPlanId;
            
            return (
              <div 
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'border-primary-600 bg-white dark:bg-slate-800 shadow-xl scale-105 z-10' 
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-primary-300 opacity-80 hover:opacity-100'
                }`}
              >
                {isRec && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> BEST MATCH
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-slate-500 mb-4 min-h-[40px]">{plan.tagline}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {plan.priceMonthly === 0 ? 'Custom' : formatIDR(plan.priceMonthly)}
                  </span>
                  {plan.priceMonthly > 0 && <span className="text-xs text-slate-500">/bln</span>}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-primary-500' : 'text-slate-400'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={`w-full h-2 rounded-full mt-4 ${isSelected ? 'bg-primary-600' : 'bg-slate-200 dark:bg-slate-700'}`} />
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-10">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => {
              setCurrentStep('customize');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full md:w-auto px-12"
          >
            Lanjut Konfigurasi Service <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  };

  // STEP 3: CUSTOMIZE (Enhanced with categories)
  const renderCustomizeStep = () => (
    <div className="animate-fade-in max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="mb-2">
          <button onClick={() => setCurrentStep('recommendation')} className="flex items-center text-slate-500 hover:text-primary-600 transition-colors mb-2">
             <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
           </button>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Konfigurasi Services</h2>
          <p className="text-slate-600 dark:text-slate-400">Kami sudah auto-pilih service yang relevan. Sesuaikan jika perlu.</p>
        </div>

        {/* Billing Cycle */}
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" /> Siklus Pembayaran
          </h3>
          <div className="grid grid-cols-2 gap-4">
             <label className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${billingCycle === 'monthly' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                <input type="radio" name="billing" value="monthly" checked={billingCycle === 'monthly'} onChange={() => setBillingCycle('monthly')} className="hidden" />
                <div className="font-bold">Bulanan</div>
                <div className="text-sm text-slate-500">Fleksibel</div>
             </label>
             <label className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${billingCycle === 'yearly' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                <input type="radio" name="billing" value="yearly" checked={billingCycle === 'yearly'} onChange={() => setBillingCycle('yearly')} className="hidden" />
                <div className="font-bold">Tahunan</div>
                <div className="text-sm text-green-600 font-bold">Hemat 20%</div>
             </label>
          </div>
        </Card>

        {/* Add-ons by Category */}
        {['implementation', 'infrastructure', 'integration', 'support'].map(category => {
          const categoryAddons = addOns.filter(a => a.category === category && (selectedPlanId === 'enterprise' || a.availableFor.includes(selectedPlanId)));
          if (categoryAddons.length === 0) return null;

          const categoryIcons: { [key: string]: any } = {
            implementation: <Briefcase className="w-5 h-5 text-amber-600" />,
            infrastructure: <Database className="w-5 h-5 text-blue-600" />,
            integration: <Zap className="w-5 h-5 text-purple-600" />,
            support: <Users className="w-5 h-5 text-green-600" />
          };

          const categoryTitles: { [key: string]: string } = {
            implementation: 'Implementation Services',
            infrastructure: 'Infrastructure Add-ons',
            integration: 'Integration & Customization',
            support: 'Support Services'
          };

          return (
            <Card key={category} className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                {categoryIcons[category]} {categoryTitles[category]}
              </h3>
              <div className="space-y-4">
                {categoryAddons.map(addOn => {
                  const isSelected = (selectedAddOns[addOn.id] || 0) > 0;
                  const isOneTime = addOn.unit.includes('one-time') || addOn.unit.includes('per');
                  
                  return (
                    <div key={addOn.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${isSelected ? 'border-primary-400 bg-primary-50/50 dark:bg-primary-900/10' : 'border-slate-200 dark:border-slate-700'} ${addOn.recommended ? 'ring-2 ring-green-500/20' : ''}`}>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          {addOn.name}
                          {addOn.recommended && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase font-bold">Recommended</span>}
                        </div>
                        <div className="text-sm text-slate-500">{addOn.description}</div>
                        <div className="text-sm text-primary-600 font-semibold mt-1">
                          {formatIDR(addOn.price)} <span className="text-xs text-slate-400 font-normal">{addOn.unit}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 ml-4">
                        {isOneTime ? (
                           <label className="relative inline-flex items-center cursor-pointer">
                             <input 
                               type="checkbox" 
                               className="sr-only peer"
                               checked={isSelected}
                               onChange={(e) => {
                                 // For impl packs, make exclusive
                                 if(addOn.id.includes('impl')) {
                                   const newState = { ...selectedAddOns };
                                   Object.keys(newState).forEach(k => { if(k.includes('impl')) delete newState[k] });
                                   if(e.target.checked) newState[addOn.id] = 1;
                                   setSelectedAddOns(newState);
                                 } else {
                                   handleAddOnChange(addOn.id, e.target.checked ? 1 : 0);
                                 }
                               }}
                             />
                             <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                           </label>
                        ) : (
                          <input 
                            type="number" 
                            min="0" 
                            max="20" 
                            value={selectedAddOns[addOn.id] || 0} 
                            onChange={(e) => handleAddOnChange(addOn.id, parseInt(e.target.value) || 0)}
                            className="w-20 px-2 py-1 rounded border text-center"
                          />
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

      {/* Summary Sticky */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <Card className="bg-slate-900 text-white p-6 border-slate-700 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-amber-500" /> Estimasi Investasi
            </h3>

            <div className="space-y-3 text-sm mb-6 border-b border-slate-700 pb-6">
              <div className="flex justify-between">
                <span className="text-slate-400">Paket {selectedPlanData?.name}</span>
                <span className="font-semibold">{formatIDR(billingCycle === 'yearly' ? calculations.monthlyRecurring * 12 : calculations.monthlyRecurring)}</span>
              </div>
              
              {Object.entries(selectedAddOns).map(([id, qty]) => {
                const item = addOns.find(a => a.id === id);
                if(!item || qty === 0) return null;
                const isOneTime = item.unit.includes('one-time') || item.unit.includes('per');
                const price = isOneTime ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                
                return (
                  <div key={id} className="flex justify-between">
                    <span className="text-slate-400 text-xs">{item.name} ({qty}x)</span>
                    <span className="font-semibold text-sm">{formatIDR(price)}</span>
                  </div>
                )
              })}
            </div>

            <div className="mb-6">
               <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Total Pembayaran Awal</div>
               <div className="text-4xl font-bold text-white mb-2">{formatIDR(calculations.totalFirstPayment)}</div>
               <div className="text-xs text-slate-500">
                 {billingCycle === 'yearly' ? 'Langganan 12 bulan' : 'Langganan bulan pertama'} + Setup
               </div>
            </div>

            <Button variant="primary" fullWidth size="lg" onClick={() => setShowQuoteModal(true)}>
              <Send className="w-4 h-4 mr-2" /> Kirim Penawaran
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Progress Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="flex justify-between mb-2">
           <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 'assessment' ? 'text-primary-600' : 'text-slate-400'}`}>Assessment</span>
           <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 'recommendation' ? 'text-primary-600' : 'text-slate-400'}`}>Solution</span>
           <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 'customize' ? 'text-primary-600' : 'text-slate-400'}`}>Configure</span>
        </div>
        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary-600 transition-all duration-500 ease-out"
            style={{ 
              width: currentStep === 'assessment' ? '33%' : currentStep === 'recommendation' ? '66%' : '100%' 
            }}
          />
        </div>
      </div>

      {currentStep === 'assessment' && renderAssessmentStep()}
      {currentStep === 'recommendation' && renderRecommendationStep()}
      {currentStep === 'customize' && renderCustomizeStep()}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <Card className="max-w-md w-full shadow-2xl relative">
             <button onClick={() => setShowQuoteModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white text-2xl leading-none">&times;</button>
             <div className="text-center mb-6">
               <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Send className="w-8 h-8 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kirim Penawaran</h3>
               <p className="text-sm text-slate-500 mt-2">Kami akan mengirimkan detail estimasi lengkap ke email Anda dalam 5 menit.</p>
             </div>
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Penawaran terkirim! Cek email Anda.'); setShowQuoteModal(false); }}>
               <input type="text" placeholder="Nama Lengkap *" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" required />
               <input type="email" placeholder="Email Bisnis *" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" required />
               <input type="text" placeholder="Nama Perusahaan" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" />
               <input type="tel" placeholder="No. WhatsApp" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" />
               <Button variant="primary" fullWidth size="lg" type="submit">Kirim Sekarang</Button>
             </form>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;
