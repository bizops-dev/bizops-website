import React, { useState, useMemo } from 'react';
import { Users, Package, Shield, Rocket, CheckCircle2, Send, Printer, Plus, Info, AlertTriangle } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import { pricingPlans, addOns } from '../data/pricingData';

const PricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [userCount, setUserCount] = useState(50);
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>({});
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlan);

  const PLAN_USER_RECOMMENDATION: { [key: string]: number } = {
    business: 50,
    growth: 200,
    enterprise: 999999,
  };

  const calculations = useMemo(() => {
    if (!selectedPlanData) return { basePrice: 0, addOnsTotal: 0, discount: 0, total: 0, effectiveMonthly: 0 };

    // 1. Base Plan Price
    const basePrice = billingCycle === 'yearly' 
      ? selectedPlanData.priceYearly 
      : selectedPlanData.priceMonthly;

    // 2. Extra User Cost -> REMOVED (User count is just for recommendation now)

    // 3. Other Add-ons Cost
    const otherAddOnsTotal = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (!addOn) return sum;
      
      // One-time logic handled below
      if (addOn.unit.includes('one-time')) {
         return sum; 
      }
      return sum + (addOn.price * quantity);
    }, 0);

    // One-time fees calculation
    const oneTimeFees = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn && addOn.unit.includes('one-time')) {
        return sum + (addOn.price * quantity);
      }
      return sum;
    }, 0);

    // Monthly Recurring Total
    const monthlyRecurring = basePrice + otherAddOnsTotal;

    // Total Calculation
    let total = 0;
    if (billingCycle === 'yearly') {
      total = (monthlyRecurring * 12) + oneTimeFees;
    } else {
      total = monthlyRecurring + oneTimeFees; // First month payment incl one-time
    }

    const effectiveMonthly = monthlyRecurring + (oneTimeFees / (billingCycle === 'yearly' ? 12 : 1));

    return {
      basePrice,
      otherAddOnsTotal,
      oneTimeFees,
      monthlyRecurring,
      total,
      effectiveMonthly
    };
  }, [selectedPlan, billingCycle, selectedAddOns, selectedPlanData]);

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

  const formatIDR = (amount: number) => {
    if (amount === 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Simulasi pengiriman penawaran berhasil!');
    setShowQuoteModal(false);
  };

  // Logic for Recommendation Warning
  const isOverCapacity = userCount > (PLAN_USER_RECOMMENDATION[selectedPlan] || 0);
  const recommendedPlan = Object.entries(PLAN_USER_RECOMMENDATION).find(([_, limit]) => userCount <= limit)?.[0] || 'enterprise';

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Kalkulator Harga BizOps</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Sesuaikan paket dengan kebutuhan bisnis Anda
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 1. Pilih Paket */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Package className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Pilih Paket Utama</h3>
                <p className="text-sm text-slate-500">Pilih base plan sesuai skala bisnis</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {pricingPlans.map(plan => (
                <label
                  key={plan.id}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 shadow-md'
                      : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                  } ${plan.priceYearly === 0 ? 'opacity-80' : ''}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mb-3 accent-primary-600 w-5 h-5"
                  />
                  
                  <div className="font-bold text-lg text-slate-900 dark:text-white">{plan.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-3 h-8 line-clamp-2">{plan.tagline}</div>
                  
                  <div className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                    {plan.priceYearly === 0 ? 'Custom' : formatIDR(plan.priceYearly)}
                    {plan.priceYearly > 0 && <span className="text-xs font-normal text-slate-500">/bln</span>}
                  </div>

                  {plan.id !== 'enterprise' && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/50 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Recom. up to {PLAN_USER_RECOMMENDATION[plan.id]} Users
                    </div>
                  )}
                </label>
              ))}
            </div>
          </Card>

          {/* 2. Estimasi Jumlah User */}
          {selectedPlan !== 'enterprise' && (
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. Estimasi Jumlah User</h3>
                  <p className="text-sm text-slate-500">Tidak mempengaruhi harga, hanya untuk rekomendasi spesifikasi.</p>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-slate-900 dark:text-white flex justify-between">
                  <span>Total System Users</span>
                  <span className="text-primary-600 font-bold">{userCount} User</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={userCount}
                  onChange={(e) => setUserCount(parseInt(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-primary-600 ${
                    isOverCapacity ? 'bg-amber-200 dark:bg-amber-900' : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1</span>
                  <span>500+</span>
                </div>
                
                {isOverCapacity ? (
                  <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800 text-sm text-amber-800 dark:text-amber-200 flex items-start gap-3 animate-pulse-soft">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-600" />
                    <div>
                      <strong>Perhatian: Kapasitas Berlebih</strong>
                      <p className="mt-1 text-amber-700 dark:text-amber-300">
                        Paket <strong>{selectedPlanData?.name}</strong> direkomendasikan maksimal untuk {PLAN_USER_RECOMMENDATION[selectedPlan]} users. 
                        Dengan {userCount} users, performa mungkin tidak optimal.
                      </p>
                      <p className="mt-2 font-medium">
                        Rekomendasi kami: Upgrade ke paket <strong>{recommendedPlan === 'enterprise' ? 'Enterprise' : 'Growth'}</strong>.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 text-sm text-green-800 dark:text-green-200 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" />
                    <div>
                      <strong>Spesifikasi Optimal</strong>
                      <p className="text-green-700 dark:text-green-300">
                        Paket {selectedPlanData?.name} sangat cukup untuk menangani beban {userCount} users dengan lancar.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* 3. Add-ons */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Plus className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. Tambahan (Opsional)</h3>
                <p className="text-sm text-slate-500">Layanan tambahan sesuai kebutuhan</p>
              </div>
            </div>

            <div className="space-y-4">
              {addOns
                .filter(addOn => 
                  selectedPlan === 'enterprise' || addOn.availableFor.includes(selectedPlan)
                )
                .map(addOn => (
                  <div
                    key={addOn.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-300 transition-colors bg-slate-50/50 dark:bg-slate-800/50"
                  >
                    <div className="flex-1 mb-3 sm:mb-0">
                      <div className="font-bold text-slate-900 dark:text-white">{addOn.name}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{addOn.description}</div>
                      <div className="text-sm text-primary-600 font-semibold mt-1">
                        {formatIDR(addOn.price)} <span className="text-xs font-normal text-slate-500">{addOn.unit}</span>
                      </div>
                    </div>
                    <div className="ml-0 sm:ml-4 flex items-center gap-3">
                      {addOn.unit.includes('one-time') || addOn.id === 'dedicated-ip' ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {selectedAddOns[addOn.id] ? 'Ya' : 'Tidak'}
                          </span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={!!selectedAddOns[addOn.id]}
                              onChange={(e) => handleAddOnChange(addOn.id, e.target.checked ? 1 : 0)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                          </label>
                        </div>
                      ) : (
                        <input
                          type="number"
                          min="0"
                          max="100"
                          placeholder="0"
                          value={selectedAddOns[addOn.id] || ''}
                          onChange={(e) => handleAddOnChange(addOn.id, parseInt(e.target.value) || 0)}
                          className="w-20 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-center focus:ring-2 focus:ring-primary-500"
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </Card>

          {/* 4. Billing Cycle */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">4. Siklus Pembayaran</h3>
                <p className="text-sm text-slate-500">Pilih opsi pembayaran hemat</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <label
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  billingCycle === 'monthly'
                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                }`}
              >
                <input
                  type="radio"
                  name="billing"
                  value="monthly"
                  checked={billingCycle === 'monthly'}
                  onChange={(e) => setBillingCycle(e.target.value as 'monthly')}
                  className="w-5 h-5 accent-primary-600"
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Bulanan</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Bayar fleksibel per bulan</div>
                </div>
              </label>
              <label
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  billingCycle === 'yearly'
                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                }`}
              >
                <input
                  type="radio"
                  name="billing"
                  value="yearly"
                  checked={billingCycle === 'yearly'}
                  onChange={(e) => setBillingCycle(e.target.value as 'yearly')}
                  className="w-5 h-5 accent-primary-600"
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Tahunan
                    <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Hemat 20%</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Bayar di muka untuk 1 tahun</div>
                </div>
              </label>
            </div>
          </Card>
        </div>

        {/* Summary Panel - Sticky */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-primary-100 dark:border-primary-900 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white relative z-10">Ringkasan Biaya</h3>

              {selectedPlan === 'enterprise' ? (
                <div className="text-center py-8">
                  <Rocket className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Paket Enterprise</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Biaya disesuaikan dengan kompleksitas server, jumlah user, dan kustomisasi.
                  </p>
                  <Button variant="primary" fullWidth size="lg" onClick={() => setShowQuoteModal(true)}>
                    Hubungi Sales
                  </Button>
                </div>
              ) : (
                <>
                  {/* Cost Breakdown */}
                  <div className="space-y-3 mb-6 relative z-10">
                    <div className="flex justify-between text-sm items-center pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">
                        Paket {selectedPlanData?.name}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{formatIDR(calculations.basePrice)}</span>
                    </div>

                    {Object.entries(selectedAddOns).map(([addOnId, quantity]) => {
                      const addOn = addOns.find(a => a.id === addOnId);
                      if (!addOn || quantity === 0) return null;
                      if (addOn.unit.includes('one-time')) return null; // Separate one-time
                      return (
                        <div key={addOnId} className="flex justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">
                            {addOn.name} ({quantity}x)
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {formatIDR(addOn.price * quantity)}
                          </span>
                        </div>
                      );
                    })}

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-3 mt-3">
                      <div className="flex justify-between text-sm font-bold text-slate-900 dark:text-white">
                        <span>Tagihan Rutin ({billingCycle === 'yearly' ? 'Tahunan' : 'Bulanan'})</span>
                        <span>{formatIDR(billingCycle === 'yearly' ? calculations.monthlyRecurring * 12 : calculations.monthlyRecurring)}</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <div className="flex justify-end text-xs text-green-600 font-medium mt-1">
                          Hemat {formatIDR((calculations.monthlyRecurring / 0.8 * 0.2) * 12)} /tahun
                        </div>
                      )}
                    </div>

                    {calculations.oneTimeFees > 0 && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg mt-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-amber-800 dark:text-amber-200 font-medium">Biaya Setup (One-time)</span>
                          <span className="font-bold text-amber-900 dark:text-amber-100">{formatIDR(calculations.oneTimeFees)}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Total Price Display */}
                  <div className="bg-slate-900 dark:bg-black rounded-xl p-6 mb-6 text-white relative overflow-hidden">
                    <div className="relative z-10 text-center">
                      <div className="text-sm text-slate-300 mb-1">
                        Total Estimasi Pembayaran Awal
                      </div>
                      <div className="text-4xl font-bold mb-2 text-white">
                        {formatIDR(calculations.total)}
                      </div>
                      <div className="text-xs text-slate-400">
                        {billingCycle === 'yearly' ? 'Termasuk langganan 12 bulan' : 'Langganan bulan pertama'} + Biaya Setup
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 relative z-10">
                    <Button variant="primary" size="lg" fullWidth onClick={() => setShowQuoteModal(true)}>
                      <Rocket className="w-5 h-5 mr-2" />
                      Ajukan Penawaran
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => setShowQuoteModal(true)}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => window.print()}
                      >
                        <Printer className="w-4 h-4 mr-2" />
                        Cetak
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {/* Trust Footer */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-center relative z-10">
                <p className="text-xs text-slate-500 mb-2">Harga belum termasuk PPN 11%</p>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Secure</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Guarantee</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <Card className="max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Kirim Penawaran</h3>
            <p className="text-sm text-slate-500 mb-6">Kami akan mengirimkan detail estimasi harga ini ke email Anda.</p>
            
            <form onSubmit={handleSendQuote}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Email Bisnis *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="budi@perusahaan.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Nama Perusahaan</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="PT Maju Mundur"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="08123456789"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <Button type="submit" variant="primary" fullWidth size="lg">
                  Kirim Sekarang
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setShowQuoteModal(false)}
                >
                  Batal
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
