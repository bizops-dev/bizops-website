// BizOps Pricing Model Data (Frappe Ecosystem + Custom ESS)

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
    description: 'Cloud ERP berbasis Frappe dengan modul standar essensial.',
    cta: 'Mulai Trial Gratis 14 Hari',
    features: [
      'Core Modules (HR, Buying, Selling, Accounting)',
      'Custom ESS (Basic Access)',
      'Shared Cloud Infrastructure',
      'Standard Support (Email)',
      'No Custom Apps'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Untuk perusahaan berkembang',
    priceMonthly: 9000000,
    priceYearly: 7500000,
    currency: 'IDR',
    description: 'Dedicated resources & modul lengkap untuk scaling up.',
    popular: true,
    cta: 'Konsultasi Paket Growth',
    features: [
      'All Frappe Modules (Manufacturing, Assets, Projects)',
      'Custom ESS (Advanced Features)',
      'Dedicated VPS Resource',
      'Priority Support (Chat/WA)',
      'Server Access (Limited)'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Untuk Korporat & BUMN',
    priceMonthly: 0, // Custom
    priceYearly: 0, // Custom
    currency: 'IDR',
    description: 'Kebebasan penuh kustomisasi Frappe & infrastruktur.',
    cta: 'Ajukan Penawaran Kustom',
    features: [
      'Private Cloud / On-Premise',
      'Install Custom Frappe Apps',
      'Full Database & Server Access (Root)',
      'White-label Custom ESS App',
      'Dedicated Account Manager'
    ]
  }
];

export const featureComparison: FeatureCategory[] = [
  {
    category: 'Core Modules (Frappe Based)',
    features: [
      { name: 'Accounting & Finance', business: true, growth: true, enterprise: true, description: 'General Ledger, AP/AR, Banking, Tax' },
      { name: 'HR & Payroll', business: true, growth: true, enterprise: true, description: 'Employee, Attendance, Payroll, Leave' },
      { name: 'Buying & Selling', business: true, growth: true, enterprise: true, description: 'CRM, Quotation, PO, Invoicing' },
      { name: 'Inventory Management', business: true, growth: true, enterprise: true, description: 'Stock, Serial/Batch, Multi-warehouse' },
      { name: 'Asset Management', business: false, growth: true, enterprise: true, description: 'Depreciation, Maintenance, Movement' },
      { name: 'Manufacturing', business: false, growth: true, enterprise: true, description: 'BOM, Work Order, Production Plan' },
      { name: 'Project Management', business: false, growth: true, enterprise: true, description: 'Tasks, Timesheets, Costing' },
      { name: 'Quality Control', business: false, growth: true, enterprise: true, description: 'Inspection, Goals' },
      { name: 'Helpdesk / Support', business: false, growth: true, enterprise: true, description: 'Tickets, SLA, Issues' },
      { name: 'Website & Portal', business: false, growth: true, enterprise: true, description: 'Web Builder, Customer Portal' },
    ]
  },
  {
    category: 'Custom ESS (BizOps Exclusive)',
    features: [
      { name: 'Mobile Attendance (GPS)', business: true, growth: true, enterprise: true, description: 'Check-in/out via Mobile App' },
      { name: 'Leave & Expense Request', business: true, growth: true, enterprise: true, description: 'Self-service submission' },
      { name: 'Payslip View', business: true, growth: true, enterprise: true, description: 'Download payslip PDF' },
      { name: 'Approval Workflow', business: 'Standard', growth: 'Advanced Multi-level', enterprise: 'Custom Logic' },
      { name: 'Team Dashboard', business: false, growth: true, enterprise: true, description: 'Manager view for team stats' },
      { name: 'Shift Scheduling', business: false, growth: true, enterprise: true, description: 'Shift roster & swap request' },
      { name: 'Overtime Request', business: false, growth: true, enterprise: true, description: 'Overtime calculation integration' },
      { name: 'Company Announcement', business: false, growth: true, enterprise: true, description: 'News feed & broadcast' },
      { name: 'Whitelabel App', business: false, growth: false, enterprise: true, description: 'Custom Logo & App Name' },
      { name: 'Custom ESS Features', business: false, growth: false, enterprise: true, description: 'Bespoke development' },
    ]
  },
  {
    category: 'Infrastructure & Performance',
    features: [
      { name: 'Server Type', business: 'Shared Cloud', growth: 'Dedicated VPS', enterprise: 'Private / On-Prem' },
      { name: 'CPU Allocation', business: 'Shared vCPU', growth: '2 vCPU Dedicated', enterprise: 'Custom (4+ vCPU)' },
      { name: 'RAM Allocation', business: 'Shared Memory', growth: '4 GB Dedicated', enterprise: 'Custom (8GB+)' },
      { name: 'Storage (SSD)', business: '20 GB', growth: '80 GB', enterprise: 'Custom / Scalable' },
      { name: 'Database Access', business: false, growth: 'Read-Replica (Add-on)', enterprise: 'Full Access (Root)' },
      { name: 'Server Access (SSH)', business: false, growth: false, enterprise: true },
      { name: 'Background Workers', business: 'Shared Queue', growth: 'Dedicated Queue', enterprise: 'Custom Configuration' },
      { name: 'Backup Frequency', business: 'Daily', growth: 'Daily + On-demand', enterprise: 'Real-time / Custom' },
      { name: 'Redis Cache', business: 'Shared', growth: 'Dedicated Instance', enterprise: 'Dedicated Cluster' },
      { name: 'Data Location', business: 'Jakarta Region', growth: 'Jakarta Region', enterprise: 'Any Region / On-Prem' },
    ]
  },
  {
    category: 'Customization & Extensibility',
    features: [
      { name: 'Frappe Custom Fields', business: 'Yes', growth: 'Yes', enterprise: 'Yes' },
      { name: 'Print Format Builder', business: 'Yes', growth: 'Yes', enterprise: 'Yes' },
      { name: 'Server Scripts', business: 'Restricted', growth: 'Allowed (Safe Mode)', enterprise: 'Full Access' },
      { name: 'Client Scripts', business: 'Yes', growth: 'Yes', enterprise: 'Yes' },
      { name: 'Install Custom Apps', business: false, growth: false, enterprise: true, description: 'Install 3rd party Frappe Apps' },
      { name: 'Custom API Endpoints', business: false, growth: false, enterprise: true },
      { name: 'Workflow Builder', business: 'Basic', growth: 'Advanced', enterprise: 'Unlimited' },
      { name: 'Webhooks', business: '5 Hooks', growth: '20 Hooks', enterprise: 'Unlimited' },
      { name: 'Module Hiding/Disabling', business: true, growth: true, enterprise: true },
      { name: 'Source Code Access', business: false, growth: false, enterprise: true, description: 'For Custom Apps only' },
    ]
  },
  {
    category: 'Support & Services',
    features: [
      { name: 'Support Channel', business: 'Email / Ticket', growth: 'WhatsApp / Chat', enterprise: 'Dedicated Channel' },
      { name: 'Response Time (SLA)', business: '48 Hours', growth: '12 Hours', enterprise: '4 Hours / Custom' },
      { name: 'Implementation', business: 'Self-Service / Docs', growth: 'Assisted Setup', enterprise: 'Full Turnkey' },
      { name: 'Training', business: 'Video Tutorials', growth: '2x Online Session', enterprise: 'On-site Training' },
      { name: 'Version Upgrade', business: 'Auto (Latest)', growth: 'Scheduled', enterprise: 'On-demand / LTS' },
      { name: 'Bug Fix Priority', business: 'Standard', growth: 'High', enterprise: 'Critical' },
      { name: 'Consultation', business: false, growth: 'Monthly Review', enterprise: 'Weekly / On-demand' },
      { name: 'Data Migration', business: 'Excel Import', growth: 'Excel Import + Assist', enterprise: 'Custom Scripting' },
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
    id: 'extra-user-ess',
    name: 'Extra ESS User',
    description: 'Akses karyawan hanya untuk ESS (Mobile App)',
    price: 15000,
    unit: 'per user/bulan',
    availableFor: ['business', 'growth', 'enterprise']
  },
  {
    id: 'extra-user-system',
    name: 'Extra System User',
    description: 'Akses full ke Dashboard/Desk (Admin/Staff)',
    price: 75000,
    unit: 'per user/bulan',
    availableFor: ['business', 'growth']
  },
  {
    id: 'dedicated-ip',
    name: 'Dedicated IP Address',
    description: 'Alamat IP statis khusus untuk whitelist',
    price: 250000,
    unit: 'per bulan',
    availableFor: ['growth']
  },
  {
    id: 'implementation-pack',
    name: 'Implementation Pack',
    description: 'Jasa setup, konfigurasi, dan training awal',
    price: 15000000,
    unit: 'one-time',
    availableFor: ['business', 'growth']
  }
];
