// BizOps Pricing Model Data (Ultimate Version)

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
  recommendedFor: string[];
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

export interface ServiceAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  availableFor: string[];
  category: 'infrastructure' | 'implementation' | 'support' | 'integration';
  recommended?: boolean;
  tooltip?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'business',
    name: 'Business',
    tagline: 'Untuk Startups & SME',
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
    ],
    recommendedFor: ['Startup', 'SME', 'Single Location', 'Simple Workflow']
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
    ],
    recommendedFor: ['Multi-Branch', 'Manufacturing', 'Complex Workflow', 'API Integration']
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
    ],
    recommendedFor: ['Enterprise', 'BUMN', 'High Security', 'Custom Development', 'On-Premise']
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

export const addOns: ServiceAddon[] = [
  // Infrastructure
  {
    id: 'extra-storage',
    name: 'Extra Storage',
    description: 'Tambahan penyimpanan SSD untuk dokumen & attachment',
    price: 100000,
    unit: 'per 10GB/bulan',
    availableFor: ['business', 'growth'],
    category: 'infrastructure',
    tooltip: 'Ideal jika Anda menyimpan banyak lampiran file (PDF/Gambar) transaksi.'
  },
  {
    id: 'dedicated-ip',
    name: 'Dedicated IP Address',
    description: 'Alamat IP statis untuk whitelisting & enhanced security',
    price: 250000,
    unit: 'per bulan',
    availableFor: ['growth', 'enterprise'],
    category: 'infrastructure',
    tooltip: 'Wajib untuk integrasi API tertentu (Bank/Payment) yang membutuhkan IP Whitelist.'
  },
  
  // Implementation Services
  {
    id: 'impl-express',
    name: 'Express Implementation (2 Minggu)',
    description: 'Fast-track setup: Database config, master data template, 1x training',
    price: 5000000,
    unit: 'one-time',
    availableFor: ['business'],
    category: 'implementation',
    tooltip: 'Paket kilat untuk bisnis kecil yang data master-nya sudah rapi (Excel ready).'
  },
  {
    id: 'impl-standard',
    name: 'Standard Implementation (1 Bulan)',
    description: 'Setup database, input master data, workflow basic, 3x training online',
    price: 10000000,
    unit: 'one-time',
    availableFor: ['business', 'growth'],
    category: 'implementation',
    recommended: true,
    tooltip: 'Pilihan paling populer. Mencakup setup end-to-end standar.'
  },
  {
    id: 'impl-pro',
    name: 'Professional Implementation (2 Bulan)',
    description: 'Full setup, data migration (clean), custom workflow, 6x training, 1x onsite',
    price: 25000000,
    unit: 'one-time',
    availableFor: ['growth', 'enterprise'],
    category: 'implementation',
    tooltip: 'Untuk perusahaan yang butuh pendampingan intensif & migrasi data kompleks.'
  },
  {
    id: 'data-migration',
    name: 'Data Migration Service',
    description: 'Migrasi data dari sistem lama (cleaning, mapping, validation)',
    price: 8000000,
    unit: 'per sistem',
    availableFor: ['business', 'growth', 'enterprise'],
    category: 'implementation',
    tooltip: 'Layanan pemindahan data historis (Saldo Awal, Stok, Hutang/Piutang) dari software lama.'
  },
  
  // Support Services
  {
    id: 'training-extra',
    name: 'Extra Training Session',
    description: 'Sesi training tambahan per modul (2 jam, online)',
    price: 1500000,
    unit: 'per sesi',
    availableFor: ['business', 'growth', 'enterprise'],
    category: 'support',
    tooltip: 'Jika staff Anda butuh bimbingan ulang atau ada karyawan baru.'
  },
  {
    id: 'onsite-visit',
    name: 'On-site Visit',
    description: 'Kunjungan tim teknis ke lokasi (Jadetabek, 1 hari)',
    price: 3500000,
    unit: 'per hari',
    availableFor: ['growth', 'enterprise'],
    category: 'support',
    tooltip: 'Kunjungan fisik untuk troubleshooting jaringan/hardware atau training tatap muka.'
  },
  {
    id: 'dedicated-support',
    name: 'Dedicated Support 24/7',
    description: 'Akses prioritas support via hotline dengan SLA 2 jam',
    price: 2500000,
    unit: 'per bulan',
    availableFor: ['enterprise'],
    category: 'support',
    tooltip: 'Jaminan respon cepat untuk bisnis operasional 24 jam.'
  },
  
  // Integration Services
  {
    id: 'api-integration',
    name: 'API Integration (Per Endpoint)',
    description: 'Integrasi ke sistem eksternal via REST API',
    price: 5000000,
    unit: 'per integrasi',
    availableFor: ['growth', 'enterprise'],
    category: 'integration',
    tooltip: 'Menghubungkan ERP dengan Webstore, Marketplace, CRM lain, atau Logistics.'
  },
  {
    id: 'custom-report',
    name: 'Custom Report Development',
    description: 'Pembuatan laporan kustom sesuai kebutuhan bisnis',
    price: 2000000,
    unit: 'per report',
    availableFor: ['growth', 'enterprise'],
    category: 'integration',
    tooltip: 'Desain ulang format Invoice, PO, atau Laporan Management khusus.'
  }
];

export const pricingFaqs = [
  {
    q: "Apakah biaya berlangganan sudah termasuk hosting?",
    a: "Ya, untuk paket Business dan Growth, biaya berlangganan sudah termasuk biaya cloud hosting (AWS/Google Cloud) yang dikelola sepenuhnya oleh BizOps. Anda tidak perlu memikirkan biaya server terpisah."
  },
  {
    q: "Apakah ada biaya implementasi di awal?",
    a: "Biaya implementasi bersifat opsional namun sangat disarankan untuk memastikan sistem berjalan lancar. Kami menyediakan paket implementasi mulai dari Rp 5 Juta (Express) hingga Rp 25 Juta (Professional). Untuk user yang tech-savvy, Anda bisa melakukan setup mandiri dengan panduan dokumentasi kami secara gratis."
  },
  {
    q: "Bagaimana jika saya ingin upgrade paket di tengah jalan?",
    a: "Anda bisa melakukan upgrade kapan saja. Sistem akan secara otomatis menghitung selisih biaya pro-rata untuk sisa masa berlangganan Anda. Data Anda akan tetap aman dan tidak ada downtime saat upgrade."
  },
  {
    q: "Apakah data saya aman?",
    a: "Sangat aman. Kami menggunakan enkripsi SSL 256-bit untuk seluruh transmisi data. Database Anda di-backup secara otomatis setiap hari ke lokasi server terpisah (Disaster Recovery). Untuk paket Enterprise, Anda bahkan bisa memilih untuk host data di server Anda sendiri (On-Premise)."
  },
  {
    q: "Apakah saya bisa membatalkan langganan kapan saja?",
    a: "Untuk paket bulanan, Anda bisa berhenti berlangganan kapan saja sebelum tanggal tagihan berikutnya. Untuk paket tahunan, pembatalan di tengah periode tidak mendapatkan pengembalian dana (refund), namun layanan akan tetap aktif hingga akhir periode berlangganan."
  }
];
