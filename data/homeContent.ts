
import { 
  Users, DollarSign, Truck, TrendingUp, 
  Link as LinkIcon, ShieldCheck, Smartphone, 
  Code, Zap, Database, Layers, MessageSquare,
  BarChart, Clock, Globe, Briefcase, Puzzle, MonitorPlay
} from 'lucide-react';

// --- GLOBAL STATS ---
export const globalStats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "Rp 12T+", label: "Transaksi Terproses" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "30 Hari", label: "Rata-rata Go-Live" }
];

// --- HOMEPAGE: PROBLEMS ---
export const homeProblems = [
  {
    title: "Data Silo & Disconnected",
    subtitle: "Kebutaan Antar Divisi",
    desc: "Marketing jualan, Gudang kosong. Finance menagih, Proyek belum selesai. Ketika data terpisah di spreadsheet dan software berbeda, keputusan strategis menjadi tebak-tebakan berbahaya.",
    icon: LinkIcon, // Broken link metaphor
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    title: "Compliance Nightmare",
    subtitle: "Risiko Audit & Pajak",
    desc: "Peraturan PPh 21 berubah, e-Faktur error, dan data karyawan tersebar. Risiko denda pajak dan kebocoran data menghantui perusahaan yang masih mengandalkan proses manual.",
    icon: ShieldCheck,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Low User Adoption",
    subtitle: "Sistem Canggih yang Ditolak",
    desc: "Investasi ERP miliaran rupiah menjadi sia-sia karena tim lapangan enggan menggunakannya. UI yang rumit dan tidak mobile-friendly adalah pembunuh utama transformasi digital.",
    icon: Smartphone,
    color: "text-slate-500",
    bg: "bg-slate-50"
  }
];

// --- HOMEPAGE: UVP ---
export const homeUVP = [
  {
    title: "Hybrid Cloud Freedom",
    subtitle: "Kendali Penuh Infrastruktur",
    desc: "Satu-satunya solusi yang menawarkan fleksibilitas penuh: Cloud untuk kecepatan, atau On-Premise untuk kedaulatan data total. Migrasi kapan saja tanpa lock-in.",
    icon: Database
  },
  {
    title: "Consumer-Grade UX",
    subtitle: "Semudah Menggunakan Sosmed",
    desc: "Kami mendesain BizOps dengan prinsip 'Zero Training'. Antarmuka intuitif memastikan staf gudang hingga direksi bisa langsung produktif sejak hari pertama.",
    icon: Smartphone
  },
  {
    title: "Contextual Chat",
    subtitle: "Kolaborasi di Atas Data",
    desc: "Diskusi PO, Invoice, atau Cuti langsung di dalam dokumennya. Hentikan screenshot yang bertebaran di WhatsApp. Semua konteks tersimpan rapi.",
    icon: MessageSquare
  }
];

// --- HOMEPAGE: TECHNICAL VALIDATION ---
export const homeTechValidation = [
  {
    label: "Backend Core",
    value: "Frappe Framework",
    desc: "Enterprise Python Monolith",
    icon: Code
  },
  {
    label: "Mobile Native",
    value: "Flutter Engine",
    desc: "60 FPS iOS & Android",
    icon: Zap
  },
  {
    label: "Database",
    value: "PostgreSQL 15+",
    desc: "ACID Compliant & Robust",
    icon: Database
  },
  {
    label: "Infrastructure",
    value: "Docker Swarm/K8s",
    desc: "Auto-scaling Ready",
    icon: Layers
  }
];

// --- HOMEPAGE SOLUTIONS TABS ---
export const homeSolutions = [
  {
    id: 'people',
    label: 'HR & People',
    category: 'Human Capital',
    icon: Users,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    impact: "Otomatisasi payroll dan administrasi karyawan, fokuskan HR pada pengembangan talenta dan budaya kerja.",
    modules: [
      "GPS & Face Recognition Attendance",
      "Payroll Otomatis (BPJS & PPh 21)",
      "Employee Self-Service (Cuti/Reimburse)",
      "KPI & Performance Appraisal"
    ]
  },
  {
    id: 'finance',
    label: 'Finance & Accounting',
    category: 'Finance',
    icon: DollarSign,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    impact: "Real-time visibility terhadap cashflow. Tutup buku lebih cepat, kontrol budget lebih ketat.",
    modules: [
      "Multi-Currency Accounting",
      "Automated Bank Reconciliation",
      "Budgeting & Cost Control",
      "Asset Management & Depresiasi"
    ]
  },
  {
    id: 'ops',
    label: 'Supply Chain & Ops',
    category: 'Operations',
    icon: Truck,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    impact: "Optimalkan inventory level, tekan HPP, dan pastikan pengiriman tepat waktu ke pelanggan.",
    modules: [
      "Multi-Warehouse Management",
      "Procurement & Vendor Portal",
      "Production Planning (MRP)",
      "Serial & Batch Tracking"
    ]
  },
  {
    id: 'growth',
    label: 'Sales & CRM',
    category: 'Commercial',
    icon: TrendingUp,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    impact: "Percepat siklus penjualan dari lead hingga cash. Berdayakan tim sales dengan data di genggaman.",
    modules: [
      "Omnichannel CRM",
      "Sales Order & Invoicing",
      "Mobile Sales Force Automation",
      "Customer Support Ticketing"
    ]
  },
  {
    id: 'project',
    label: 'Project & Service',
    category: 'Services',
    icon: Briefcase,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    impact: "Kelola profitabilitas proyek secara real-time. Pantau budget vs aktual, timesheet tim, dan penagihan termin.",
    modules: [
      "Project Budgeting (RAB)",
      "Timesheet & Utilitas Tim",
      "Progress Billing (Termin)",
      "Job Costing & Profitability"
    ]
  }
];

// --- HOMEPAGE: PROCESS ---
export const homeProcess = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "Analisa mendalam alur kerja bisnis Anda untuk memetakan gap dan kebutuhan konfigurasi sistem.",
    icon: Briefcase
  },
  {
    step: "02",
    title: "Data Migration",
    desc: "Migrasi aman data historis dari Excel atau sistem lama ke database BizOps yang terstruktur.",
    icon: Database
  },
  {
    step: "03",
    title: "Training & UAT",
    desc: "Pelatihan role-based untuk setiap divisi dan User Acceptance Test untuk memastikan kesiapan.",
    icon: MonitorPlay
  },
  {
    step: "04",
    title: "Go-Live & Support",
    desc: "Peluncuran resmi dengan pendampingan intensif (Hypercare) untuk menjamin kelancaran transisi.",
    icon: RocketIcon // Defined below helper
  }
];

// Helper for icon consistency in map if needed, but we use Lucide icons usually passed as component or name.
// For simplicity in this file structure, we keep it data-centric.

// --- HOMEPAGE: INTEGRATIONS ---
export const homeIntegrations = [
  { name: "BCA KlikBisnis", cat: "Banking", icon: "BCA" },
  { name: "DJP e-Faktur", cat: "Taxation", icon: "DJP" },
  { name: "Tokopedia", cat: "Marketplace", icon: "TKP" },
  { name: "Shopee", cat: "Marketplace", icon: "SHP" },
  { name: "WooCommerce", cat: "E-Commerce", icon: "WOO" },
  { name: "Google Data Studio", cat: "Analytics", icon: "GDS" },
  { name: "WhatsApp Business", cat: "Communication", icon: "WA" },
  { name: "Fingerprint Machine", cat: "Hardware", icon: "FINGER" }
];

export const homeIndustriesData = {
  manufacturing: { title: "Manufaktur", description: "BOM, MRP, dan Shop Floor Control untuk pabrik.", icon: Puzzle },
  retail: { title: "Retail & Distribusi", description: "POS, Multi-Gudang, dan Manajemen Stok terpusat.", icon: Truck },
  services: { title: "Jasa & Agensi", description: "Project Costing, Timesheet, dan Penagihan.", icon: Briefcase },
  construction: { title: "Konstruksi", description: "RAB, Progress Fisik vs Biaya, dan Manajemen Subkon.", icon: HardHatIcon } // Placeholder icon name
};

export const homeRolesData = {
  ceo: { title: "CEO / Owner", subtitle: "Bird-eye view performa bisnis & cashflow.", icon: BarChart },
  finance: { title: "Finance Manager", subtitle: "Kontrol budget & laporan keuangan akurat.", icon: DollarSign },
  hr: { title: "HR Manager", subtitle: "Kelola talenta, payroll & kepatuhan.", icon: Users },
  ops: { title: "Ops Manager", subtitle: "Efisiensi rantai pasok & produksi.", icon: Truck },
  it: { title: "IT Manager", subtitle: "Keamanan data & integrasi sistem.", icon: Code }
};

// Icons Helpers (Mocking imports for data file if not strictly typed with React Components in usage file)
function RocketIcon() { return null; }
function HardHatIcon() { return null; }
