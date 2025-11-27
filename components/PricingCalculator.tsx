import React, { useState, useMemo, useEffect } from 'react';
import { Users, Package, Shield, Rocket, CheckCircle2, Send, Printer, Plus, ArrowRight, ArrowLeft, Building2, Server, Database, Briefcase } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import { pricingPlans, addOns } from '../data/pricingData';

type Step = 'assessment' | 'recommendation' | 'customize';

const PricingCalculator: React.FC = () => {
  // State Steps
  const [currentStep, setCurrentStep] = useState<Step>('assessment');
  
  // State Assessment
  const [userCount, setUserCount] = useState(20);
  const [industry, setIndustry] = useState('');
  const [deployment, setDeployment] = useState(''); // cloud, dedicated, onprem
  const [needsMobileApp, setNeedsMobileApp] = useState(false);
  const [needsMultiBranch, setNeedsMultiBranch] = useState(false);
  const [needsCustom, setNeedsCustom] = useState(false);

  // State Selection
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>({});
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // --- LOGIC REKOMENDASI ---
  const recommendedPlanId = useMemo(() => {
    // 1. Enterprise Triggers
    if (deployment === 'onprem') return 'enterprise';
    if (needsCustom) return 'enterprise';
    if (userCount > 300) return 'enterprise';

    // 2. Growth Triggers
    if (
      userCount > 50 || 
      industry === 'manufacturing' || 
      deployment === 'dedicated' ||
      needsMultiBranch
    ) return 'growth';

    // 3. Default Business
    return 'business';
  }, [userCount, industry, deployment, needsCustom, needsMultiBranch]);

  // Set initial plan based on recommendation when step changes to recommendation
  useEffect(() => {
    if (currentStep === 'recommendation' && !selectedPlanId) {
      setSelectedPlanId(recommendedPlanId);
    }
  }, [currentStep, recommendedPlanId, selectedPlanId]);

  // --- CALCULATIONS ---
  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlanId);

  const calculations = useMemo(() => {
    if (!selectedPlanData) return { basePrice: 0, addOnsTotal: 0, total: 0, effectiveMonthly: 0 };

    // Base Price
    const basePrice = billingCycle === 'yearly' 
      ? selectedPlanData.priceYearly 
      : selectedPlanData.priceMonthly;

    // Add-ons Total (Recurring)
    const recurringAddOnsTotal = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (!addOn || addOn.unit.includes('one-time') || addOn.unit.includes('sesi') || addOn.unit.includes('hari')) return sum;
      return sum + (addOn.price * quantity);
    }, 0);

    // One-time Fees (Implementation, Training sessions, Onsite days)
    const oneTimeFees = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn && (addOn.unit.includes('one-time') || addOn.unit.includes('sesi') || addOn.unit.includes('hari'))) {
        return sum + (addOn.price * quantity);
      }
      return sum;
    }, 0);

    // Total Monthly Recurring
    const monthlyRecurring = basePrice + recurringAddOnsTotal;

    // Grand Total (First Payment)
    let totalFirstPayment = 0;
    if (billingCycle === 'yearly') {
      totalFirstPayment = (monthlyRecurring * 12) + oneTimeFees;
    } else {
      totalFirstPayment = monthlyRecurring + oneTimeFees;
    }

    // Average Monthly Cost (View purpose)
    const effectiveMonthly = monthlyRecurring + (oneTimeFees / (billingCycle === 'yearly' ? 12 : 24)); 

    return {
      basePrice,
      monthlyRecurring,
      oneTimeFees,
      totalFirstPayment,
      effectiveMonthly
    };
  }, [selectedPlanId, billingCycle, selectedAddOns, selectedPlanData]);

  // Helper Formatter
  const formatIDR = (amount: number) => {
    if (amount === 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
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

  // --- RENDER STEPS ---

  // STEP 1: ASSESSMENT
  const renderAssessmentStep = () => (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Analisa Kebutuhan ERP</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Jawab pertanyaan berikut agar kami dapat merekomendasikan arsitektur dan paket yang paling akurat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Basic Info */}
        <div className="space-y-6">
          <Card className="p-6 h-full">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-600" /> Profil Pengguna
            </h3>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Jumlah User Sistem (Admin/Staff)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={userCount}
                  onChange={(e) => setUserCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary-600"
                />
                <div className="w-16 text-center font-bold text-primary-600 bg-primary-50 dark:bg-primary-900/30 p-1 rounded border border-primary-100 dark:border-primary-800">
                  {userCount}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Industri Bisnis
              </label>
              <select 
                className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="">Pilih Industri...</option>
                <option value="retail">Retail / Grosir / Distribusi</option>
                <option value="manufacturing">Manufaktur / Pabrikasi</option>
                <option value="services">Jasa / Konsultan / Agency</option>
                <option value="fnb">F&B / Restoran</option>
                <option value="construction">Konstruksi / Kontraktor</option>
                <option value="other">Lainnya</option>
              </select>
            </div>
          </Card>
        </div>

        {/* Right Column: Tech Requirements */}
        <div className="space-y-6">
          <Card className="p-6 h-full">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-primary-600" /> Kebutuhan Teknis
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Preferensi Infrastruktur
              </label>
              <div className="grid grid-cols-1 gap-3">
                <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${deployment === 'cloud' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                  <input type="radio" name="deployment" value="cloud" checked={deployment === 'cloud'} onChange={() => setDeployment('cloud')} className="mr-3" />
                  <div>
                    <span className="font-semibold text-sm">Shared Cloud</span>
                    <p className="text-xs text-slate-500">Hemat, manage by BizOps</p>
                  </div>
                </label>
                <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${deployment === 'dedicated' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                  <input type="radio" name="deployment" value="dedicated" checked={deployment === 'dedicated'} onChange={() => setDeployment('dedicated')} className="mr-3" />
                  <div>
                    <span className="font-semibold text-sm">Dedicated Cloud (VPS)</span>
                    <p className="text-xs text-slate-500">Performa tinggi, private IP</p>
                  </div>
                </label>
                <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${deployment === 'onprem' ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-700'}`}>
                  <input type="radio" name="deployment" value="onprem" checked={deployment === 'onprem'} onChange={() => setDeployment('onprem')} className="mr-3" />
                  <div>
                    <span className="font-semibold text-sm">On-Premise / Private Server</span>
                    <p className="text-xs text-slate-500">Kontrol penuh, server sendiri</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Fitur Tambahan Krusial
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" checked={needsMultiBranch} onChange={(e) => setNeedsMultiBranch(e.target.checked)} className="mr-2 rounded accent-primary-600" />
                  <span className="text-sm">Multi-Branch / Multi-Company</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" checked={needsCustom} onChange={(e) => setNeedsCustom(e.target.checked)} className="mr-2 rounded accent-primary-600" />
                  <span className="text-sm">Custom Module Development (Butuh Coding)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" checked={needsMobileApp} onChange={(e) => setNeedsMobileApp(e.target.checked)} className="mr-2 rounded accent-primary-600" />
                  <span className="text-sm">Employee Mobile App (ESS)</span>
                </label>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="pt-8 text-center">
        <Button 
          variant="primary" 
          size="lg" 
          className="px-12"
          disabled={!industry || !deployment}
          onClick={() => {
            setSelectedPlanId(recommendedPlanId);
            setCurrentStep('recommendation');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Lihat Rekomendasi Solusi <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        {(!industry || !deployment) && (
          <p className="text-sm text-amber-600 mt-3 animate-pulse">
            *Mohon pilih Industri dan Infrastruktur terlebih dahulu.
          </p>
        )}
      </div>
    </div>
  );

  // STEP 2: RECOMMENDATION
  const renderRecommendationStep = () => {
    const recPlan = pricingPlans.find(p => p.id === recommendedPlanId);
    
    return (
      <div className="animate-fade-in max-w-6xl mx-auto">
        <div className="mb-8">
           <button 
             onClick={() => setCurrentStep('assessment')}
             className="flex items-center text-slate-500 hover:text-primary-600 transition-colors mb-4"
           >
             <ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Assessment
           </button>
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Solusi Terbaik: {recPlan?.name} Plan</h2>
           <p className="text-slate-600 dark:text-slate-400 mt-2">
             Kami merekomendasikan paket ini karena: 
             <span className="font-semibold text-slate-800 dark:text-slate-200">
               {industry === 'manufacturing' ? ' Industri Manufaktur butuh modul produksi kompleks.' : ''}
               {deployment === 'dedicated' ? ' Anda memilih dedicated server.' : ''}
               {deployment === 'onprem' ? ' Deployment On-Premise hanya tersedia di Enterprise.' : ''}
               {userCount > 50 && recommendedPlanId !== 'business' ? ' Jumlah user > 50 butuh resource lebih besar.' : ''}
               {recommendedPlanId === 'business' ? ' Kebutuhan Anda masih bisa diakomodir dengan efisien di paket Business.' : ''}
             </span>
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map(plan => {
            const isRec = plan.id === recommendedPlanId;
            const isSelected = plan.id === selectedPlanId;
            const isDisabled = plan.id === 'business' && (recommendedPlanId === 'enterprise' || industry === 'manufacturing'); // Prevent downgrade if hard requirement not met
            
            return (
              <div 
                key={plan.id}
                onClick={() => !isDisabled && setSelectedPlanId(plan.id)}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 ${
                  isDisabled ? 'opacity-50 cursor-not-allowed border-slate-100 bg-slate-50 grayscale' : 'cursor-pointer'
                } ${
                  isSelected 
                    ? 'border-primary-600 bg-white dark:bg-slate-800 shadow-xl scale-105 z-10' 
                    : !isDisabled ? 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-primary-300 opacity-80 hover:opacity-100' : ''
                }`}
              >
                {isRec && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> REKOMENDASI
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

  // STEP 3: CUSTOMIZE & SUMMARY
  const renderCustomizeStep = () => (
    <div className="animate-fade-in max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      {/* LEFT: Services & Addons */}
      <div className="lg:col-span-2 space-y-8">
        <div className="mb-2">
          <button 
             onClick={() => setCurrentStep('recommendation')}
             className="flex items-center text-slate-500 hover:text-primary-600 transition-colors mb-2"
           >
             <ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Pilih Paket
           </button>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Services & Add-ons</h2>
          <p className="text-slate-600 dark:text-slate-400">Optimalkan implementasi BizOps dengan layanan profesional kami.</p>
        </div>

        {/* 1. Infrastructure & Storage Addons */}
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" /> Infrastruktur Tambahan
          </h3>
          <div className="space-y-4">
            {addOns
              .filter(a => (a.id === 'extra-storage' || a.id === 'dedicated-ip') && (selectedPlanId === 'enterprise' || a.availableFor.includes(selectedPlanId)))
              .map(addOn => {
              const isSelected = (selectedAddOns[addOn.id] || 0) > 0;
              return (
                <div key={addOn.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${isSelected ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-700'}`}>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{addOn.name}</div>
                    <div className="text-sm text-slate-500">{addOn.description}</div>
                    <div className="text-sm text-primary-600 font-semibold mt-1">
                      {formatIDR(addOn.price)} <span className="text-xs text-slate-400 font-normal">{addOn.unit}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input 
                       type="number" 
                       min="0" 
                       max="10" 
                       value={selectedAddOns[addOn.id] || 0} 
                       onChange={(e) => handleAddOnChange(addOn.id, parseInt(e.target.value) || 0)}
                       className="w-20 px-2 py-1 rounded border text-center"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 2. Professional Services (Implementation & Training) */}
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-600" /> Layanan Profesional
          </h3>
          <div className="space-y-4">
            {/* Implementation Packs */}
            {addOns
              .filter(a => a.id.includes('impl') && a.availableFor.includes(selectedPlanId))
              .map(addOn => {
               const isSelected = (selectedAddOns[addOn.id] || 0) > 0;
               return (
                <div key={addOn.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${isSelected ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-900/10' : 'border-slate-200 dark:border-slate-700'}`}>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{addOn.name}</div>
                    <div className="text-sm text-slate-500">{addOn.description}</div>
                    <div className="text-sm text-amber-600 font-semibold mt-1">
                      {formatIDR(addOn.price)} <span className="text-xs text-slate-400 font-normal">One-time Fee</span>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                     <input 
                       type="checkbox" 
                       className="sr-only peer"
                       checked={isSelected}
                       onChange={(e) => {
                         // Exclusive selection for impl packs
                         const newState = { ...selectedAddOns };
                         // Reset other impl packs
                         Object.keys(newState).forEach(k => { if(k.includes('impl')) delete newState[k] });
                         if(e.target.checked) newState[addOn.id] = 1;
                         setSelectedAddOns(newState);
                       }}
                     />
                     <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                   </label>
                </div>
               )
            })}

            {/* Extra Training & Onsite */}
            {addOns
              .filter(a => (a.id === 'training-extra' || a.id === 'onsite-visit') && (selectedPlanId === 'enterprise' || a.availableFor.includes(selectedPlanId)))
              .map(addOn => {
              const isSelected = (selectedAddOns[addOn.id] || 0) > 0;
              return (
                <div key={addOn.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${isSelected ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-900/10' : 'border-slate-200 dark:border-slate-700'}`}>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{addOn.name}</div>
                    <div className="text-sm text-slate-500">{addOn.description}</div>
                    <div className="text-sm text-amber-600 font-semibold mt-1">
                      {formatIDR(addOn.price)} <span className="text-xs text-slate-400 font-normal">{addOn.unit}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <input 
                       type="number" 
                       min="0" 
                       max="20" 
                       value={selectedAddOns[addOn.id] || 0} 
                       onChange={(e) => handleAddOnChange(addOn.id, parseInt(e.target.value) || 0)}
                       className="w-20 px-2 py-1 rounded border text-center"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

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
      </div>

      {/* RIGHT: Summary Sticky */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <Card className="bg-slate-900 text-white p-6 border-slate-700 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-amber-500" /> Estimasi Investasi
            </h3>

            {/* Breakdown */}
            <div className="space-y-3 text-sm mb-6 border-b border-slate-700 pb-6">
              <div className="flex justify-between">
                <span className="text-slate-400">Paket {selectedPlanData?.name} ({billingCycle})</span>
                <span className="font-semibold">{formatIDR(billingCycle === 'yearly' ? calculations.monthlyRecurring * 12 : calculations.monthlyRecurring)}</span>
              </div>
              
              {Object.entries(selectedAddOns).map(([id, qty]) => {
                const item = addOns.find(a => a.id === id);
                if(!item || qty === 0) return null;
                const isOneTime = item.unit.includes('one-time') || item.unit.includes('sesi') || item.unit.includes('hari');
                const price = isOneTime ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                
                return (
                  <div key={id} className="flex justify-between">
                    <span className="text-slate-400">{item.name} ({qty}x)</span>
                    <span className="font-semibold">{formatIDR(price)}</span>
                  </div>
                )
              })}
            </div>

            {/* Total */}
            <div className="mb-6">
               <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Total Pembayaran Awal</div>
               <div className="text-4xl font-bold text-white mb-2">{formatIDR(calculations.totalFirstPayment)}</div>
               <div className="text-xs text-slate-500">
                 {billingCycle === 'yearly' ? 'Mencakup langganan 12 bulan' : 'Mencakup langganan bulan pertama'} + Biaya Setup One-time
               </div>
            </div>

            <Button variant="primary" fullWidth size="lg" onClick={() => setShowQuoteModal(true)}>
              Kirim Penawaran ke Email
            </Button>
            <p className="text-xs text-center text-slate-500 mt-4">
              Tim kami akan menghubungi Anda untuk konfirmasi detail teknis.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="flex justify-between mb-2">
           <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 'assessment' ? 'text-primary-600' : 'text-slate-400'}`}>1. Assessment</span>
           <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 'recommendation' ? 'text-primary-600' : 'text-slate-400'}`}>2. Solution</span>
           <span className={`text-xs font-bold uppercase tracking-wider ${currentStep === 'customize' ? 'text-primary-600' : 'text-slate-400'}`}>3. Quote</span>
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
             <button onClick={() => setShowQuoteModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">✕</button>
             <div className="text-center mb-6">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Send className="w-8 h-8 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kirim Penawaran?</h3>
               <p className="text-sm text-slate-500">Kami akan mengirimkan detail estimasi ini ke email Anda.</p>
             </div>
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Terkirim!'); setShowQuoteModal(false); }}>
               <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-3 rounded-lg border bg-slate-50" required />
               <input type="email" placeholder="Email Bisnis" className="w-full px-4 py-3 rounded-lg border bg-slate-50" required />
               <input type="text" placeholder="Nama Perusahaan" className="w-full px-4 py-3 rounded-lg border bg-slate-50" />
               <Button variant="primary" fullWidth size="lg" type="submit">Kirim Sekarang</Button>
             </form>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;
