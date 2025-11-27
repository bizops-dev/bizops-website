// BizOps Pricing Model Data (Business Focused)

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  currency: string;
  description: string;
  popular?: boolean;
  cta: string;
  features: string[];
}

export interface FeatureCategory {
  category: string;
  features: {
    name: string;
    business: boolean | string;
    growth: boolean | string;
    enterprise: boolean | string;
    description?: string;
  }[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'business',
    name: 'Business',
    tagline: 'Untuk Startups / SME',
    priceMonthly: 3000000,
    priceYearly: 2500000,
    currency: 'IDR',
    description: 'Cloud ERP lengkap untuk operasional bisnis sehari-hari.',
    cta: 'Mulai Trial Gratis 14 Hari',
    features: [
      'Core ERP (HR, Finance, Sales, Purchasing)',
      'Recommended up to 50 Users',
      'Shared Cloud Infrastructure',
      'Standard Support (Email)',
      'No Hidden Fees'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Untuk perusahaan berkembang',
    priceMonthly: 9000000,
    priceYearly: 7500000,
    currency: 'IDR',
    description: 'Performa dedicated & fitur lengkap untuk scaling up.',
    popular: true,
    cta: 'Konsultasi Paket Growth',
    features: [
      'All ERP Modules (Manufacturing, Assets, Projects)',
      'Recommended up to 200 Users',
      'Dedicated VPS Resource',
      'Priority Support (Chat/WA)',
      'Advanced Reporting'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Untuk Korporat & BUMN',
    priceMonthly: 0, // Custom
    priceYearly: 0, // Custom
    currency: 'IDR',
    description: 'Kebebasan penuh kustomisasi, integrasi & infrastruktur.',
    cta: 'Ajukan Penawaran Kustom',
    features: [
      'Unlimited Users Capacity',
      'Private Cloud / On-Premise',
      'Custom Module Installation',
      'Full Database Access',
      'Dedicated Account Manager'
    ]
  }
];

export const featureComparison: FeatureCategory[] = [
  {
    category: 'Core ERP Features',
    features: [
      { name: 'Accounting & Finance', business: true, growth: true, enterprise: true, description: 'GL, AP/AR, Banking, Tax' },
      { name: 'HR & Payroll', business: true, growth: true, enterprise: true, description: 'Employee, Payroll, Leave' },
      { name: 'Sales & CRM', business: true, growth: true, enterprise: true, description: 'Leads, Quotation, Invoice' },
      { name: 'Procurement & Inventory', business: true, growth: true, enterprise: true, description: 'PO, Stock, Multi-warehouse' },
      { name: 'Asset Management', business: false, growth: true, enterprise: true, description: 'Depreciation, Tracking' },
      { name: 'Manufacturing', business: false, growth: true, enterprise: true, description: 'BOM, Production Planning' },
      { name: 'Project Management', business: false, growth: true, enterprise: true, description: 'Tasks, Timesheets, Billing' },
      { name: 'Quality Control', business: false, growth: true, enterprise: true, description: 'Inspections & Goals' },
      { name: 'Helpdesk / Support', business: false, growth: true, enterprise: true, description: 'Ticketing System' },
      { name: 'Website Builder', business: false, growth: true, enterprise: true, description: 'Company Profile / Portal' },
    ]
  },
  {
    category: 'Employee Mobile App (ESS)',
    features: [
      { name: 'Mobile Attendance (GPS)', business: true, growth: true, enterprise: true, description: 'Check-in/out via App' },
      { name: 'Leave & Expense Request', business: true, growth: true, enterprise: true, description: 'Self-service submission' },
      { name: 'Payslip Download', business: true, growth: true, enterprise: true, description: 'PDF Payslip access' },
      { name: 'Approval Workflow', business: 'Standard', growth: 'Advanced Multi-level', enterprise: 'Custom Logic' },
      { name: 'Team Dashboard', business: false, growth: true, enterprise: true, description: 'Manager view' },
      { name: 'Shift Scheduling', business: false, growth: true, enterprise: true, description: 'Roster & swap request' },
      { name: 'Overtime Request', business: false, growth: true, enterprise: true, description: 'Calculated overtime' },
      { name: 'Company Announcement', business: false, growth: true, enterprise: true, description: 'Broadcast news' },
      { name: 'Whitelabel App', business: false, growth: false, enterprise: true, description: 'Custom Logo & Branding' },
      { name: 'Custom App Features', business: false, growth: false, enterprise: true, description: 'Bespoke development' },
    ]
  },
  {
    category: 'Infrastructure & Performance',
    features: [
      { name: 'Deployment Type', business: 'Shared Cloud', growth: 'Dedicated Cloud', enterprise: 'Private / On-Prem' },
      { name: 'Computing Power', business: 'Standard', growth: 'High Performance', enterprise: 'Custom / Unlimited' },
      { name: 'Storage (SSD)', business: '20 GB', growth: '80 GB', enterprise: 'Custom / Scalable' },
      { name: 'Database Access', business: false, growth: 'Read-Only (Add-on)', enterprise: 'Full Access' },
      { name: 'Background Jobs', business: 'Shared Queue', growth: 'Dedicated Queue', enterprise: 'Custom Configuration' },
      { name: 'Backup Frequency', business: 'Daily', growth: 'Daily + On-demand', enterprise: 'Real-time / Custom' },
      { name: 'Server Location', business: 'Jakarta', growth: 'Jakarta', enterprise: 'Any Region / On-Prem' },
    ]
  },
  {
    category: 'Customization Capabilities',
    features: [
      { name: 'Custom Fields & Forms', business: 'Yes', growth: 'Yes', enterprise: 'Yes' },
      { name: 'Print Format Builder', business: 'Yes', growth: 'Yes', enterprise: 'Yes' },
      { name: 'Scripting / Logic', business: 'Restricted', growth: 'Safe Mode', enterprise: 'Full Access' },
      { name: 'Install Custom Modules', business: false, growth: false, enterprise: true, description: 'Add-on modules' },
      { name: 'API Integration', business: 'Standard API', growth: 'Full API Access', enterprise: 'Custom Endpoints' },
      { name: 'Workflow Builder', business: 'Basic', growth: 'Advanced', enterprise: 'Unlimited' },
      { name: 'Webhooks', business: '5 Hooks', growth: '20 Hooks', enterprise: 'Unlimited' },
      { name: 'Module Configuration', business: true, growth: true, enterprise: true },
    ]
  },
  {
    category: 'Support & Implementation',
    features: [
      { name: 'Support Channel', business: 'Email / Ticket', growth: 'WhatsApp / Chat', enterprise: 'Dedicated Team' },
      { name: 'Response Time (SLA)', business: '48 Hours', growth: '12 Hours', enterprise: '4 Hours / Custom' },
      { name: 'Implementation', business: 'Self-Service / Guide', growth: 'Assisted Setup', enterprise: 'Full Turnkey' },
      { name: 'Training', business: 'Video Tutorials', growth: '2x Online Session', enterprise: 'On-site Training' },
      { name: 'Bug Fix Priority', business: 'Standard', growth: 'High', enterprise: 'Critical' },
      { name: 'Consultation', business: false, growth: 'Monthly Review', enterprise: 'Weekly / On-demand' },
      { name: 'Data Migration', business: 'Excel Import', growth: 'Excel Import + Assist', enterprise: 'Custom Migration' },
    ]
  }
];

export const addOns = [
  {
    id: 'extra-storage',
    name: 'Extra Storage',
    description: 'Tambahan penyimpanan SSD',
    price: 100000,
    unit: 'per 10GB/bulan',
    availableFor: ['business', 'growth']
  },
  {
    id: 'dedicated-ip',
    name: 'Dedicated IP Address',
    description: 'Alamat IP statis khusus untuk keamanan',
    price: 250000,
    unit: 'per bulan',
    availableFor: ['growth']
  },
  {
    id: 'impl-standard',
    name: 'Implementation Pack (Standard)',
    description: 'Setup database, input master data template, training online 2 sesi',
    price: 7500000,
    unit: 'one-time',
    availableFor: ['business']
  },
  {
    id: 'impl-pro',
    name: 'Implementation Pack (Professional)',
    description: 'Setup, migrasi data (clean), workflow config, training 5 sesi',
    price: 15000000,
    unit: 'one-time',
    availableFor: ['growth']
  },
  {
    id: 'training-extra',
    name: 'Extra Online Training',
    description: 'Sesi training tambahan per modul (2 jam)',
    price: 1500000,
    unit: 'per sesi',
    availableFor: ['business', 'growth', 'enterprise']
  },
  {
    id: 'onsite-visit',
    name: 'On-site Visit / Support',
    description: 'Kunjungan tim teknis ke lokasi (Jadetabek)',
    price: 3500000,
    unit: 'per hari',
    availableFor: ['growth', 'enterprise']
  }
];
