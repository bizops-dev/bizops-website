import React, { useState, useMemo } from 'react';
import { Users, Package, Shield, Rocket, CheckCircle2, Send, Printer, Plus } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import { pricingPlans, addOns } from '../data/pricingData';

const PricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>({});
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlan);

  const calculations = useMemo(() => {
    if (!selectedPlanData) return { basePrice: 0, addOnsTotal: 0, discount: 0, total: 0, effectiveMonthly: 0 };

    // Base plan price
    const basePrice = billingCycle === 'yearly' 
      ? selectedPlanData.priceYearly 
      : selectedPlanData.priceMonthly;

    // Add-ons total (monthly)
    const addOnsTotal = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (!addOn) return sum;
      // For one-time items, we'll prorate over 12 months if yearly
      if (addOn.unit.includes('one-time') && billingCycle === 'yearly') {
        return sum + (addOn.price * quantity / 12);
      }
      return sum + (addOn.price * quantity);
    }, 0);

    // Monthly subtotal
    const monthlySubtotal = basePrice + addOnsTotal;

    // Yearly calculation
    const yearlyTotal = billingCycle === 'yearly' ? monthlySubtotal * 12 : 0;
    const discount = 0; // Already included in yearly price
    
    const effectiveMonthly = billingCycle === 'yearly' ? monthlySubtotal : monthlySubtotal;
    const total = billingCycle === 'yearly' ? yearlyTotal : monthlySubtotal;

    return {
      basePrice,
      addOnsTotal,
      discount,
      total,
      effectiveMonthly,
      monthlySubtotal
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
    if (amount === 0) return 'Custom';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would send email
    alert('Quote functionality would send email to customer');
    setShowQuoteModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">BizOps Pricing Calculator</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Hitung biaya berlangganan sesuai kebutuhan bisnis Anda
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Plan Selection */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Pilih Paket</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {pricingPlans.map(plan => (
                <label
                  key={plan.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                  } ${plan.popular ? 'ring-2 ring-primary-500/20' : ''}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mb-2"
                  />
                  {plan.popular && (
                    <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                      POPULAR
                    </div>
                  )}
                  <div className="font-semibold text-lg">{plan.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{plan.tagline}</div>
                  <div className="text-primary-600 font-bold">
                    {plan.priceYearly === 0 ? 'Custom' : formatIDR(plan.priceYearly)}
                    {plan.priceYearly > 0 && <span className="text-xs text-slate-500">/bulan</span>}
                  </div>
                </label>
              ))}
            </div>

            {/* Features List */}
            {selectedPlanData && (
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">Fitur Termasuk:</h4>
                <ul className="space-y-2">
                  {selectedPlanData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          {/* Add-ons */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Plus className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Tambahan (Opsional)</h3>
            </div>
            <div className="space-y-4">
              {addOns
                .filter(addOn => 
                  selectedPlan === 'enterprise' || addOn.availableFor.includes(selectedPlan)
                )
                .map(addOn => (
                  <div
                    key={addOn.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-300 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{addOn.name}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{addOn.description}</div>
                      <div className="text-sm text-primary-600 mt-1">
                        {formatIDR(addOn.price)} {addOn.unit}
                      </div>
                    </div>
                    <div className="ml-4">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={selectedAddOns[addOn.id] || 0}
                        onChange={(e) => handleAddOnChange(addOn.id, parseInt(e.target.value) || 0)}
                        className="w-20 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-center focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </Card>

          {/* Billing Cycle */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Siklus Pembayaran</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
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
                  className="mb-2"
                />
                <div className="font-semibold">Bulanan</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Bayar per bulan, fleksibel
                </div>
              </label>
              <label
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
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
                  className="mb-2"
                />
                <div className="font-semibold">Tahunan</div>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Hemat 20% 🎉
                </div>
              </label>
            </div>
          </Card>
        </div>

        {/* Summary Panel - Sticky */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-bold mb-6 text-center">Ringkasan Harga</h3>

              {/* Cost Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Paket {selectedPlanData?.name}
                  </span>
                  <span className="font-semibold">{formatIDR(calculations.basePrice)}</span>
                </div>

                {Object.entries(selectedAddOns).map(([addOnId, quantity]) => {
                  const addOn = addOns.find(a => a.id === addOnId);
                  if (!addOn || quantity === 0) return null;
                  return (
                    <div key={addOnId} className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">
                        {addOn.name} ({quantity}x)
                      </span>
                      <span className="font-semibold">
                        {formatIDR(addOn.price * quantity)}
                      </span>
                    </div>
                  );
                })}

                <div className="border-t border-slate-300 dark:border-slate-600 pt-3 mt-3">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Subtotal per Bulan</span>
                    <span>{formatIDR(calculations.monthlySubtotal)}</span>
                  </div>
                </div>

                {billingCycle === 'yearly' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">× 12 bulan</span>
                      <span className="font-semibold">{formatIDR(calculations.total)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                      <span>Hemat (vs bulanan)</span>
                      <span>
                        {formatIDR((calculations.monthlySubtotal * 0.25 / 0.8) * 12)}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Total Price */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {billingCycle === 'yearly' ? 'Biaya per Bulan' : 'Total per Bulan'}
                  </div>
                  <div className="text-5xl font-bold text-primary-600 mb-2">
                    {formatIDR(calculations.effectiveMonthly)}
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="mt-3 text-xs text-slate-500">
                      Total tahunan: {formatIDR(calculations.total)}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="primary" size="lg" fullWidth>
                  <Rocket className="w-5 h-5 mr-2" />
                  Mulai Sekarang
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setShowQuoteModal(true)}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => window.print()}
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-slate-300 dark:border-slate-600">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Trial gratis 14 hari</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Migrasi data gratis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Tidak perlu kartu kredit</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Kirim Penawaran</h3>
            <form onSubmit={handleSendQuote}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nama *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Nama Perusahaan</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button type="submit" variant="primary" fullWidth>
                  Kirim Penawaran
                </Button>
                <Button
                  type="button"
                  variant="outline"
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
