import React, { useState, useMemo } from 'react';
import { Users, Server, Database, Shield, Rocket, CheckCircle2, Send, Printer } from 'lucide-react';
import Button from './Button';
import Card from './Card';

interface Module {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pricePerUser: number;
}

const MODULES: Module[] = [
  { id: 'hrms', name: 'HRIS & Payroll', description: 'Human Resource Management System', basePrice: 50, pricePerUser: 5 },
  { id: 'finance', name: 'Finance & Accounting', description: 'Financial Management & Reporting', basePrice: 80, pricePerUser: 8 },
  { id: 'supply', name: 'Supply Chain', description: 'Inventory & Procurement', basePrice: 70, pricePerUser: 7 },
  { id: 'crm', name: 'Sales & CRM', description: 'Customer Relationship Management', basePrice: 60, pricePerUser: 6 },
  { id: 'project', name: 'Project Management', description: 'Task & Project Tracking', basePrice: 40, pricePerUser: 4 },
  { id: 'analytics', name: 'Business Intelligence', description: 'Analytics & Reporting', basePrice: 90, pricePerUser: 9 },
];

const HOSTING_OPTIONS = [
  { id: 'cloud', name: 'Cloud Hosting', price: 100, description: 'Secure cloud infrastructure' },
  { id: 'onpremise', name: 'On-Premise', price: 0, description: 'Self-hosted solution' },
  { id: 'hybrid', name: 'Hybrid Cloud', price: 150, description: 'Best of both worlds' },
];

const SUPPORT_PACKAGES = [
  { id: 'basic', name: 'Basic Support', price: 0, description: 'Email support, 48h response' },
  { id: 'standard', name: 'Standard Support', price: 200, description: 'Priority email & phone, 24h response' },
  { id: 'premium', name: 'Premium Support', price: 500, description: 'Dedicated account manager, 4h response' },
  { id: 'enterprise', name: 'Enterprise Support', price: 1000, description: '24/7 support with SLA guarantee' },
];

const IMPLEMENTATION_OPTIONS = [
  { id: 'self', name: 'Self Implementation', hours: 0, pricePerHour: 0, description: 'DIY with documentation' },
  { id: 'starter', name: 'Starter Pack', hours: 40, pricePerHour: 150, description: 'Basic setup & training' },
  { id: 'business', name: 'Business Pack', hours: 80, pricePerHour: 150, description: 'Full implementation & training' },
  { id: 'enterprise', name: 'Enterprise Pack', hours: 160, pricePerHour: 150, description: 'Custom implementation & migration' },
];

const PricingCalculator: React.FC = () => {
  const [users, setUsers] = useState(10);
  const [selectedModules, setSelectedModules] = useState<string[]>(['hrms', 'finance']);
  const [hosting, setHosting] = useState('cloud');
  const [storage, setStorage] = useState(50);
  const [support, setSupport] = useState('basic');
  const [implementation, setImplementation] = useState('starter');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const calculations = useMemo(() => {
    // Calculate modules cost
    const modulesCost = MODULES
      .filter(m => selectedModules.includes(m.id))
      .reduce((sum, m) => sum + m.basePrice + (m.pricePerUser * users), 0);

    // Hosting cost
    const hostingCost = HOSTING_OPTIONS.find(h => h.id === hosting)?.price || 0;

    // Storage cost (additional beyond 50GB)
    const storageCost = storage > 50 ? (storage - 50) * 0.5 : 0;

    // Support cost
    const supportCost = SUPPORT_PACKAGES.find(s => s.id === support)?.price || 0;

    // Implementation (one-time)
    const implOption = IMPLEMENTATION_OPTIONS.find(i => i.id === implementation);
    const implementationCost = (implOption?.hours || 0) * (implOption?.pricePerHour || 0);

    // Monthly subscription
    const monthlyTotal = modulesCost + hostingCost + storageCost + supportCost;

    // Yearly discount (20% off)
    const yearlyDiscount = billingCycle === 'yearly' ? monthlyTotal * 0.2 : 0;
    const yearlyTotal = billingCycle === 'yearly' ? monthlyTotal * 12 - yearlyDiscount : 0;

    return {
      modulesCost,
      hostingCost,
      storageCost,
      supportCost,
      monthlyTotal,
      yearlyTotal,
      yearlyDiscount,
      implementationCost,
      effectiveMonthly: billingCycle === 'yearly' ? yearlyTotal / 12 : monthlyTotal,
    };
  }, [users, selectedModules, hosting, storage, support, implementation, billingCycle]);

  const toggleModule = (moduleId: string) => {
    setSelectedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleSendQuote = () => {
    // In real implementation, this would send email
    alert('Quote functionality would send email to customer');
    setShowQuoteModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">BizOps Pricing Calculator</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Configure your perfect solution and get instant pricing
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Number of Users */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Number of Users</h3>
            </div>
            <input
              type="range"
              min="1"
              max="500"
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">1 user</span>
              <span className="text-2xl font-bold text-primary-600">{users} users</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">500+ users</span>
            </div>
          </Card>

          {/* Modules Selection */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Select Modules</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {MODULES.map(module => (
                <label
                  key={module.id}
                  className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedModules.includes(module.id)
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedModules.includes(module.id)}
                    onChange={() => toggleModule(module.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{module.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{module.description}</div>
                    <div className="text-sm text-primary-600 mt-1">
                      ${module.basePrice} + ${module.pricePerUser}/user/month
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </Card>

          {/* Hosting Type */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Hosting Type</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {HOSTING_OPTIONS.map(option => (
                <label
                  key={option.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    hosting === option.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="hosting"
                    value={option.id}
                    checked={hosting === option.id}
                    onChange={(e) => setHosting(e.target.value)}
                    className="mb-2"
                  />
                  <div className="font-semibold">{option.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{option.description}</div>
                  <div className="text-primary-600 font-bold">
                    {option.price === 0 ? 'Free' : `$${option.price}/month`}
                  </div>
                </label>
              ))}
            </div>
          </Card>

          {/* Storage */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Storage (GB)</h3>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={storage}
              onChange={(e) => setStorage(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">10 GB</span>
              <span className="text-xl font-bold text-primary-600">{storage} GB</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">500 GB</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">First 50GB included, $0.50/GB/month for additional storage</p>
          </Card>

          {/* Support Package */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Support Package</h3>
            </div>
            <div className="space-y-3">
              {SUPPORT_PACKAGES.map(pkg => (
                <label
                  key={pkg.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    support === pkg.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="support"
                    value={pkg.id}
                    checked={support === pkg.id}
                    onChange={(e) => setSupport(e.target.value)}
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{pkg.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{pkg.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-600 font-bold">
                      {pkg.price === 0 ? 'Free' : `$${pkg.price}/month`}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </Card>

          {/* Implementation Service */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Implementation Service</h3>
            </div>
            <div className="space-y-3">
              {IMPLEMENTATION_OPTIONS.map(option => (
                <label
                  key={option.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    implementation === option.id
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="implementation"
                    value={option.id}
                    checked={implementation === option.id}
                    onChange={(e) => setImplementation(e.target.value)}
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{option.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{option.description}</div>
                    <div className="text-xs text-slate-500 mt-1">
                      {option.hours > 0 ? `${option.hours} hours × $${option.pricePerHour}/hour` : 'Free'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-600 font-bold">
                      {option.hours === 0 ? 'Free' : `$${option.hours * option.pricePerHour}`}
                    </div>
                    <div className="text-xs text-slate-500">one-time</div>
                  </div>
                </label>
              ))}
            </div>
          </Card>
        </div>

        {/* Summary Panel - Sticky */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-bold mb-6 text-center">Pricing Summary</h3>

              {/* Billing Cycle Toggle */}
              <div className="flex gap-2 mb-6 bg-white dark:bg-slate-800 p-1 rounded-lg">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-primary-600 text-white'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
                    billingCycle === 'yearly'
                      ? 'bg-primary-600 text-white'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Yearly
                  <span className="text-xs block text-green-600 dark:text-green-400">Save 20%</span>
                </button>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Modules ({users} users)</span>
                  <span className="font-semibold">${calculations.modulesCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Hosting</span>
                  <span className="font-semibold">${calculations.hostingCost.toFixed(2)}</span>
                </div>
                {calculations.storageCost > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Extra Storage</span>
                    <span className="font-semibold">${calculations.storageCost.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Support</span>
                  <span className="font-semibold">${calculations.supportCost.toFixed(2)}</span>
                </div>

                <div className="border-t border-slate-300 dark:border-slate-600 pt-3 mt-3">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Monthly Subtotal</span>
                    <span>${calculations.monthlyTotal.toFixed(2)}</span>
                  </div>
                </div>

                {billingCycle === 'yearly' && (
                  <>
                    <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                      <span>Yearly Discount (20%)</span>
                      <span>-${calculations.yearlyDiscount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Yearly Total</span>
                      <span>${calculations.yearlyTotal.toFixed(2)}</span>
                    </div>
                  </>
                )}

                {calculations.implementationCost > 0 && (
                  <div className="border-t border-slate-300 dark:border-slate-600 pt-3 mt-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Implementation (one-time)</span>
                      <span className="font-semibold text-amber-600">${calculations.implementationCost.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Total Price */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {billingCycle === 'yearly' ? 'Effective Monthly Cost' : 'Monthly Cost'}
                  </div>
                  <div className="text-5xl font-bold text-primary-600 mb-2">
                    ${calculations.effectiveMonthly.toFixed(2)}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    per month
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="mt-3 text-xs text-slate-500">
                      Billed annually: ${calculations.yearlyTotal.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="primary" size="lg" fullWidth>
                  Get Started
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setShowQuoteModal(true)}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Quote
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
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Free data migration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>No credit card required for trial</span>
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
            <h3 className="text-2xl font-bold mb-4">Send Quote</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleSendQuote(); }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button type="submit" variant="primary" fullWidth>
                  Send Quote
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowQuoteModal(false)}
                >
                  Cancel
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

