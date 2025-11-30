import { 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  Database, 
  ShieldAlert, 
  Users, 
  Banknote, 
  Zap,
  LayoutGrid,
  BarChart,
  GitMerge,
  MessageSquare,
  Factory,
  ShoppingCart,
  HardHat,
  Briefcase,
  Coffee,
  Activity,
  GraduationCap,
  Globe,
  Server,
  FileWarning,
  Unplug,
  MonitorX,
  FileX,
  UserX,
  Timer,
  Puzzle,
  Network,
  BookOpen,
  Presentation
} from 'lucide-react';

export const industries = [
  { id: 'manufacturing', label: 'Manufaktur & Pabrik', icon: Factory },
  { id: 'retail', label: 'Ritel & Distribusi', icon: ShoppingCart },
  { id: 'construction', label: 'Konstruksi & Proyek', icon: HardHat },
  { id: 'services', label: 'Jasa Profesional', icon: Briefcase },
  { id: 'fnb', label: 'F&B / Restoran', icon: Coffee },
  { id: 'healthcare', label: 'Kesehatan / RS', icon: Activity },
  { id: 'education', label: 'Pendidikan', icon: GraduationCap },
  { id: 'other', label: 'Lainnya', icon: Globe },
];

export const painPoints = [
  {
    id: 'manual_process',
    label: 'Proses Manual & Berulang',
    desc: 'Banyak waktu habis untuk admin & input data manual.',
    icon: Clock,
    weight: { efficiency: 5, automation: 5 }
  },
  {
    id: 'data_silo',
    label: 'Data Terpisah (Silo)',
    desc: 'Data tersebar di banyak spreadsheet/tools yang tidak terhubung.',
    icon: Database,
    weight: { integration: 5, analytics: 3 }
  },
  {
    id: 'slow_decision',
    label: 'Keputusan Lambat',
    desc: 'Sulit mendapatkan laporan real-time untuk keputusan cepat.',
    icon: AlertTriangle,
    weight: { analytics: 5, strategy: 4 }
  },
  {
    id: 'budget_leak',
    label: 'Kebocoran Biaya',
    desc: 'Sulit melacak pengeluaran operasional secara detail.',
    icon: Banknote,
    weight: { finance: 5, efficiency: 3 }
  },
  {
    id: 'team_misalignment',
    label: 'Miskomunikasi Tim',
    desc: 'Target dan KPI antar divisi sering tidak selaras.',
    icon: Users,
    weight: { collaboration: 5, strategy: 3 }
  },
  {
    id: 'compliance_risk',
    label: 'Resiko Kepatuhan',
    desc: 'Khawatir soal keamanan data atau audit process.',
    icon: ShieldAlert,
    weight: { security: 5, governance: 4 }
  }
];

export const goals = [
  {
    id: 'cost_reduction',
    label: 'Efisiensi Biaya (Cost Cut)',
    desc: 'Mengurangi overhead operasional.',
    icon: TrendingUp
  },
  {
    id: 'scalability',
    label: 'Skalabilitas Bisnis',
    desc: 'Siap untuk pertumbuhan tim/transaksi 2x-5x.',
    icon: Zap
  },
  {
    id: 'automation',
    label: 'Otomatisasi Penuh',
    desc: 'Menghilangkan pekerjaan manual (Auto-pilot).',
    icon: GitMerge
  },
  {
    id: 'data_driven',
    label: 'Budaya Berbasis Data',
    desc: 'Semua keputusan berdasarkan dashboard akurat.',
    icon: BarChart
  }
];

export const modules = [
  {
    id: 'process_mining',
    title: 'Process Mining & Automation',
    desc: 'Modul untuk memetakan dan mengotomatisasi alur kerja yang bottleneck.',
    relevance: ['manual_process', 'automation', 'scalability', 'manual', 'legacy', 'manufacturing', 'services', 'human_error', 'approval_bottleneck']
  },
  {
    id: 'unified_data',
    title: 'Unified Data Platform',
    desc: 'Integrasi satu pintu untuk semua sumber data (Single Source of Truth).',
    relevance: ['data_silo', 'slow_decision', 'data_driven', 'fragmented', 'custom', 'retail', 'fnb', 'integration_issue', 'fragmented_data', 'silo_dept']
  },
  {
    id: 'financial_ops',
    title: 'FinOps & Cost Control',
    desc: 'Monitoring budget real-time dan deteksi anomali pengeluaran.',
    relevance: ['budget_leak', 'cost_reduction', 'manual', 'fragmented', 'construction', 'manufacturing', 'maintenance_cost']
  },
  {
    id: 'okr_management',
    title: 'OKR & Performance Mgmt',
    desc: 'Penyelarasan strategi perusahaan dengan eksekusi tim harian.',
    relevance: ['team_misalignment', 'slow_decision', 'modern', 'custom', 'services', 'education', 'user_adoption']
  },
  {
    id: 'compliance_center',
    title: 'Governance & Compliance',
    desc: 'Otomatisasi audit log dan manajemen akses keamanan.',
    relevance: ['compliance_risk', 'legacy', 'modern', 'healthcare', 'finance', 'data_loss', 'security_concern']
  },
  {
    id: 'executive_dashboard',
    title: 'Executive Cockpit',
    desc: 'Dashboard C-Level untuk visibilitas 360 derajat.',
    relevance: ['slow_decision', 'data_driven', 'scalability', 'fragmented', 'legacy', 'retail', 'construction', 'reporting_nightmare', 'key_person']
  },
  {
    id: 'project_management',
    title: 'Project Management & RAB',
    desc: 'Kontrol budget proyek dan progres kurva-S.',
    relevance: ['construction', 'services', 'budget_leak', 'manual_process', 'field_coordination']
  },
  {
    id: 'inventory_wms',
    title: 'Advanced WMS & Inventory',
    desc: 'Manajemen stok gudang, batch tracking, dan serial number.',
    relevance: ['retail', 'manufacturing', 'fnb', 'data_silo', 'budget_leak', 'stock_mismatch']
  },
  {
    id: 'manufacturing_mrp',
    title: 'MRP & Production Planning',
    desc: 'Perencanaan bahan baku dan jadwal mesin produksi.',
    relevance: ['manufacturing', 'scalability', 'manual_process', 'production_delay']
  }
];

// NEW: Service Recommendations (Non-Software Solutions)
export const serviceSolutions = [
  {
    id: 'change_management',
    title: 'Change Management Consulting',
    desc: 'Pendampingan transformasi budaya & manajemen resistensi user.',
    icon: Users,
    relevance: ['resistance', 'user_adoption', 'key_person', 'team_misalignment', 'manual']
  },
  {
    id: 'sop_development',
    title: 'SOP Re-engineering',
    desc: 'Pemetaan ulang dan pembakuan SOP bisnis proses yang efektif.',
    icon: FileWarning,
    relevance: ['undefined_sop', 'complex_approval', 'silo_dept', 'manual_process', 'human_error']
  },
  {
    id: 'data_audit',
    title: 'Data Hygiene & Migration Audit',
    desc: 'Pembersihan dan standardisasi data sebelum migrasi sistem baru.',
    icon: Database,
    relevance: ['data_silo', 'fragmented_data', 'double_input', 'data_loss', 'legacy']
  },
  {
    id: 'tech_training',
    title: 'Digital Literacy Training',
    desc: 'Workshop intensif untuk meningkatkan skill digital tim operasional.',
    icon: GraduationCap,
    relevance: ['skill_gap', 'ux_issue', 'manual', 'resistance']
  }
];


export const techStackOptions = [
  { id: 'manual', label: 'Manual / Paper-based', desc: 'Dominan menggunakan kertas, Excel manual, dan chat apps.' },
  { id: 'fragmented', label: 'Fragmented SaaS', desc: 'Banyak aplikasi (HR, POS, Akunting) tapi tidak saling terhubung.' },
  { id: 'legacy', label: 'Legacy On-Premise', desc: 'Sistem ERP tua yang lambat, mahal, dan sulit diakses dari luar.' },
  { id: 'custom', label: 'In-house Custom App', desc: 'Aplikasi buatan sendiri yang mulai sulit dikembangkan/maintain.' },
  { id: 'modern', label: 'Modern Cloud Stack', desc: 'Sudah menggunakan cloud tools modern tapi butuh integrasi lebih baik.' }
];

export const holisticIssues = {
  people: [
    { id: 'resistance', label: 'Resistensi: Tim sulit diajak berubah ke cara baru', icon: Users },
    { id: 'skill_gap', label: 'Gap Skill: Tim kurang familiar dengan teknologi', icon: GraduationCap },
    { id: 'key_person', label: 'Key Person: Ketergantungan pada 1-2 orang kunci', icon: UserX },
    { id: 'user_adoption', label: 'Adopsi Rendah: Sistem ada tapi tidak dipakai', icon: MonitorX }
  ],
  process: [
    { id: 'silo_dept', label: 'Silo: Antar divisi jalan sendiri-sendiri', icon: Unplug },
    { id: 'complex_approval', label: 'Birokrasi: Approval terlalu berjenjang & lama', icon: GitMerge },
    { id: 'undefined_sop', label: 'SOP Cair: Aturan main sering berubah-ubah', icon: FileWarning },
    { id: 'reporting_nightmare', label: 'Rekap Laporan: Butuh waktu berhari-hari', icon: Timer }
  ],
  technology: {
    manual: [
      { id: 'human_error', label: 'Sering salah input / Human Error', icon: FileWarning },
      { id: 'data_loss', label: 'Dokumen fisik sering hilang / rusak', icon: FileX },
      { id: 'approval_bottleneck', label: 'Approval macet saat bos tidak di tempat', icon: UserX },
    ],
    fragmented: [
      { id: 'double_input', label: 'Input data yang sama berulang kali', icon: FileWarning },
      { id: 'fragmented_data', label: 'Bingung data mana yang benar (beda versi)', icon: Database },
      { id: 'integration_issue', label: 'Sulit menghubungkan antar aplikasi', icon: Unplug }
    ],
    legacy: [
      { id: 'maintenance_cost', label: 'Biaya maintenance / server mahal', icon: Banknote },
      { id: 'mobile_access', label: 'Tidak bisa diakses dari HP / Luar kantor', icon: MonitorX },
      { id: 'vendor_lock', label: 'Sangat bergantung pada vendor lama', icon: ShieldAlert }
    ],
    custom: [
      { id: 'dev_dependency', label: 'Tergantung pada 1-2 programmer kunci', icon: Users },
      { id: 'scalability_issue', label: 'Sistem melambat saat data makin banyak', icon: AlertTriangle },
      { id: 'feature_lag', label: 'Pengembangan fitur baru terlalu lama', icon: Clock },
    ],
    modern: [
      { id: 'data_utilization', label: 'Punya banyak data tapi belum jadi insight', icon: BarChart },
      { id: 'custom_workflow', label: 'Workflow default aplikasi tidak sesuai SOP', icon: GitMerge },
      { id: 'integration_complexity', label: 'Butuh integrasi custom yang kompleks', icon: Unplug }
    ]
  }
};

export const timelines = [
  { id: 'urgent', label: 'Urgent (< 1 Bulan)', desc: 'Butuh solusi Quick Win secepatnya.' },
  { id: 'normal', label: 'Normal (1-3 Bulan)', desc: 'Timeline implementasi standar.' },
  { id: 'strategic', label: 'Strategic (3-6+ Bulan)', desc: 'Perencanaan jangka panjang.' }
];

export const budgets = [
  { id: 'starter', label: '< 50 Juta', desc: 'Entry level / Pilot Project.' },
  { id: 'mid', label: '50 - 200 Juta', desc: 'Standard Implementation.' },
  { id: 'enterprise', label: '> 200 Juta', desc: 'Full Transformation.' }
];

export interface AnalysisResult {
  priorityScore: Record<string, number>; 
  recommendedModules: typeof modules;
  roadmap: string[];
}
