// BizOps Pricing Model Data

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
    description: 'Biaya setara setengah gaji admin magang, automasi HR & Finance.',
    cta: 'Mulai Trial Gratis 14 Hari',
    features: [
      'Core HR (Payroll/Attendance)',
      'Finance (Expense/Invoice)',
      'Basic CRM',
      'Cloud Hosting (Shared)',
      'Email Support'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Untuk perusahaan berkembang',
    priceMonthly: 9000000,
    priceYearly: 7500000,
    currency: 'IDR',
    description: 'Solusi All-in-One lengkap tanpa biaya tambahan per user.',
    popular: true,
    cta: 'Konsultasi Paket Growth',
    features: [
      'Semua fitur Business',
      'Project Management',
      'Multi-Warehouse Inventory',
      'Asset Management',
      'Priority Chat Support',
      'Bantuan Implementasi Awal'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Untuk Korporat & BUMN',
    priceMonthly: 0, // Custom
    priceYearly: 0, // Custom
    currency: 'IDR',
    description: 'Deployment Self-Hosted dengan kontrol penuh data dan custom module.',
    cta: 'Ajukan Penawaran Kustom',
    features: [
      'On-Premise / Private Cloud',
      'Full Database Access',
      'Custom Apps & Logic',
      'Whitelabel Mobile App',
      'Dedicated Account Manager'
    ]
  }
];

export const featureComparison: FeatureCategory[] = [
  {
    category: 'Human Resources (HRIS)',
    features: [
      { name: 'Employee Database', business: true, growth: true, enterprise: true },
      { name: 'Attendance Management', business: true, growth: true, enterprise: true },
      { name: 'Leave Management', business: true, growth: true, enterprise: true },
      { name: 'Payroll Processing', business: true, growth: true, enterprise: true },
      { name: 'Tax Calculation (PPh 21)', business: true, growth: true, enterprise: true },
      { name: 'BPJS Integration', business: false, growth: true, enterprise: true },
      { name: 'Recruitment & ATS', business: false, growth: true, enterprise: true },
      { name: 'Performance Appraisal', business: false, growth: true, enterprise: true },
      { name: 'Training Management', business: false, growth: true, enterprise: true },
      { name: 'Employee Self Service', business: 'Basic', growth: 'Advanced', enterprise: 'Full Custom' },
    ]
  },
  {
    category: 'Finance & Accounting',
    features: [
      { name: 'General Ledger', business: true, growth: true, enterprise: true },
      { name: 'Accounts Payable/Receivable', business: true, growth: true, enterprise: true },
      { name: 'Expense Management', business: true, growth: true, enterprise: true },
      { name: 'Invoice & Billing', business: true, growth: true, enterprise: true },
      { name: 'Bank Reconciliation', business: true, growth: true, enterprise: true },
      { name: 'Multi-Currency', business: false, growth: true, enterprise: true },
      { name: 'Budget Management', business: false, growth: true, enterprise: true },
      { name: 'Fixed Assets', business: false, growth: true, enterprise: true },
      { name: 'Cost Center Allocation', business: false, growth: true, enterprise: true },
      { name: 'Financial Consolidation', business: false, growth: false, enterprise: true },
    ]
  },
  {
    category: 'Sales & CRM',
    features: [
      { name: 'Contact Management', business: true, growth: true, enterprise: true },
      { name: 'Lead Management', business: true, growth: true, enterprise: true },
      { name: 'Sales Pipeline', business: 'Basic', growth: true, enterprise: true },
      { name: 'Quotation & Sales Order', business: true, growth: true, enterprise: true },
      { name: 'Email Integration', business: true, growth: true, enterprise: true },
      { name: 'Sales Analytics', business: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
      { name: 'Marketing Automation', business: false, growth: true, enterprise: true },
      { name: 'Customer Portal', business: false, growth: true, enterprise: true },
      { name: 'Contract Management', business: false, growth: true, enterprise: true },
      { name: 'API Integration', business: false, growth: 'Limited', enterprise: 'Unlimited' },
    ]
  },
  {
    category: 'Inventory & Supply Chain',
    features: [
      { name: 'Product Catalog', business: true, growth: true, enterprise: true },
      { name: 'Stock Management', business: 'Single Location', growth: 'Multi-Warehouse', enterprise: 'Unlimited' },
      { name: 'Purchase Orders', business: true, growth: true, enterprise: true },
      { name: 'Goods Receipt', business: true, growth: true, enterprise: true },
      { name: 'Stock Transfer', business: false, growth: true, enterprise: true },
      { name: 'Barcode Scanning', business: false, growth: true, enterprise: true },
      { name: 'Batch & Serial Tracking', business: false, growth: true, enterprise: true },
      { name: 'Vendor Management', business: 'Basic', growth: 'Advanced', enterprise: 'Full' },
      { name: 'Reorder Point', business: false, growth: true, enterprise: true },
      { name: 'Inventory Valuation', business: 'FIFO', growth: 'FIFO/LIFO/Average', enterprise: 'All Methods' },
    ]
  },
  {
    category: 'Project Management',
    features: [
      { name: 'Project Planning', business: false, growth: true, enterprise: true },
      { name: 'Task Management', business: false, growth: true, enterprise: true },
      { name: 'Time Tracking', business: false, growth: true, enterprise: true },
      { name: 'Resource Allocation', business: false, growth: true, enterprise: true },
      { name: 'Gantt Chart', business: false, growth: true, enterprise: true },
      { name: 'Project Costing', business: false, growth: true, enterprise: true },
      { name: 'Milestone Tracking', business: false, growth: true, enterprise: true },
      { name: 'Document Management', business: false, growth: true, enterprise: true },
      { name: 'Project Templates', business: false, growth: 'Standard', enterprise: 'Custom' },
      { name: 'Multi-Project Dashboard', business: false, growth: true, enterprise: true },
    ]
  },
  {
    category: 'Reporting & Analytics',
    features: [
      { name: 'Standard Reports', business: '10 Reports', growth: '50+ Reports', enterprise: 'Unlimited' },
      { name: 'Custom Reports', business: false, growth: '5 Custom', enterprise: 'Unlimited' },
      { name: 'Dashboard', business: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
      { name: 'Data Export', business: 'Excel', growth: 'Excel/PDF/CSV', enterprise: 'All Formats' },
      { name: 'Scheduled Reports', business: false, growth: true, enterprise: true },
      { name: 'Real-time Analytics', business: false, growth: true, enterprise: true },
      { name: 'Business Intelligence', business: false, growth: 'Basic', enterprise: 'Advanced' },
      { name: 'Predictive Analytics', business: false, growth: false, enterprise: true },
      { name: 'API Data Access', business: false, growth: 'Read-only', enterprise: 'Full Access' },
      { name: 'Data Warehouse', business: false, growth: false, enterprise: true },
    ]
  },
  {
    category: 'Hosting & Infrastructure',
    features: [
      { name: 'Cloud Hosting', business: 'Shared', growth: 'Dedicated', enterprise: 'Private Cloud' },
      { name: 'Storage', business: '10 GB', growth: '50 GB', enterprise: 'Unlimited' },
      { name: 'Backup Frequency', business: 'Weekly', growth: 'Daily', enterprise: 'Real-time' },
      { name: 'Backup Retention', business: '30 days', growth: '90 days', enterprise: 'Custom' },
      { name: 'SSL Certificate', business: true, growth: true, enterprise: true },
      { name: 'Custom Domain', business: false, growth: true, enterprise: true },
      { name: 'CDN', business: false, growth: true, enterprise: true },
      { name: 'Load Balancing', business: false, growth: false, enterprise: true },
      { name: 'Disaster Recovery', business: false, growth: 'Basic', enterprise: 'Full DR Plan' },
      { name: 'On-Premise Option', business: false, growth: false, enterprise: true },
    ]
  },
  {
    category: 'Support & Services',
    features: [
      { name: 'Email Support', business: true, growth: true, enterprise: true },
      { name: 'Response Time', business: '48 hours', growth: '24 hours', enterprise: '4 hours' },
      { name: 'Chat Support', business: false, growth: true, enterprise: true },
      { name: 'Phone Support', business: false, growth: 'Business Hours', enterprise: '24/7' },
      { name: 'Dedicated Account Manager', business: false, growth: false, enterprise: true },
      { name: 'Implementation Support', business: 'Documentation', growth: '20 hours', enterprise: 'Full Custom' },
      { name: 'Training Sessions', business: '1 session', growth: '5 sessions', enterprise: 'Unlimited' },
      { name: 'Priority Bug Fixes', business: false, growth: true, enterprise: true },
      { name: 'SLA Guarantee', business: '99%', growth: '99.5%', enterprise: '99.9%' },
      { name: 'Onboarding Specialist', business: false, growth: true, enterprise: true },
    ]
  },
  {
    category: 'Security & Compliance',
    features: [
      { name: 'Role-Based Access Control', business: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
      { name: 'Two-Factor Authentication', business: true, growth: true, enterprise: true },
      { name: 'Audit Logs', business: '30 days', growth: '1 year', enterprise: 'Unlimited' },
      { name: 'Data Encryption', business: 'In Transit', growth: 'In Transit & At Rest', enterprise: 'Full Encryption' },
      { name: 'IP Whitelisting', business: false, growth: true, enterprise: true },
      { name: 'SSO/SAML', business: false, growth: false, enterprise: true },
      { name: 'Compliance Reports', business: false, growth: 'Quarterly', enterprise: 'On-demand' },
      { name: 'Data Residency', business: 'Indonesia', growth: 'Indonesia', enterprise: 'Custom Location' },
      { name: 'Penetration Testing', business: false, growth: 'Annual', enterprise: 'Quarterly' },
      { name: 'Custom Security Policies', business: false, growth: false, enterprise: true },
    ]
  },
  {
    category: 'Customization & Integration',
    features: [
      { name: 'Custom Fields', business: '10 fields', growth: '100 fields', enterprise: 'Unlimited' },
      { name: 'Workflow Automation', business: '5 workflows', growth: '50 workflows', enterprise: 'Unlimited' },
      { name: 'Custom Modules', business: false, growth: false, enterprise: true },
      { name: 'API Access', business: false, growth: 'Limited', enterprise: 'Full API' },
      { name: 'Webhooks', business: false, growth: '10 hooks', enterprise: 'Unlimited' },
      { name: 'Third-party Integrations', business: '3 apps', growth: '15 apps', enterprise: 'Unlimited' },
      { name: 'White-label Branding', business: false, growth: false, enterprise: true },
      { name: 'Mobile App Customization', business: false, growth: false, enterprise: true },
      { name: 'Source Code Access', business: false, growth: false, enterprise: true },
      { name: 'Development Sandbox', business: false, growth: false, enterprise: true },
    ]
  },
  {
    category: 'Users & Limits',
    features: [
      { name: 'Maximum Users', business: '50 users', growth: '200 users', enterprise: 'Unlimited' },
      { name: 'Concurrent Users', business: '20 users', growth: '100 users', enterprise: 'Unlimited' },
      { name: 'Guest/External Users', business: false, growth: '10 guests', enterprise: 'Unlimited' },
      { name: 'Mobile App Access', business: true, growth: true, enterprise: true },
      { name: 'Multi-Company', business: false, growth: '3 companies', enterprise: 'Unlimited' },
      { name: 'Multi-Branch', business: false, growth: '5 branches', enterprise: 'Unlimited' },
      { name: 'API Calls/Month', business: '1,000', growth: '10,000', enterprise: 'Unlimited' },
      { name: 'Email Notifications', business: '1,000/month', growth: '10,000/month', enterprise: 'Unlimited' },
      { name: 'SMS Notifications', business: false, growth: '500/month', enterprise: 'Custom' },
      { name: 'Document Storage', business: '10 GB', growth: '50 GB', enterprise: 'Unlimited' },
    ]
  }
];

export const addOns = [
  {
    id: 'extra-storage',
    name: 'Extra Storage',
    description: 'Additional storage beyond plan limits',
    price: 100000,
    unit: 'per 10GB/month',
    availableFor: ['business', 'growth']
  },
  {
    id: 'extra-users',
    name: 'Extra Users',
    description: 'Additional users beyond plan limits',
    price: 50000,
    unit: 'per user/month',
    availableFor: ['business', 'growth']
  },
  {
    id: 'implementation',
    name: 'Implementation Service',
    description: 'Professional implementation and data migration',
    price: 15000000,
    unit: 'one-time',
    availableFor: ['business', 'growth', 'enterprise']
  },
  {
    id: 'training',
    name: 'Additional Training',
    description: 'Extra training sessions for your team',
    price: 2500000,
    unit: 'per session',
    availableFor: ['business', 'growth', 'enterprise']
  },
  {
    id: 'customization',
    name: 'Custom Development',
    description: 'Custom features and integrations',
    price: 5000000,
    unit: 'per module',
    availableFor: ['growth', 'enterprise']
  }
];

