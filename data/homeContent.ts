
import { 
  Users, DollarSign, Truck, TrendingUp, 
  Link as LinkIcon, ShieldCheck, Smartphone, 
  Code, Zap, Database, Layers, MessageSquare 
} from 'lucide-react';

// --- GLOBAL STATS ---
export const globalStats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "12.5M", label: "Transactions / Mo" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "24/7", label: "Local Support" }
];

// --- HOMEPAGE: PROBLEMS ---
export const homeProblems = [
  {
    title: "Disconnected Data Streams",
    subtitle: "Kebutaan Data Antar Divisi",
    desc: "Apakah data progres fisik proyek Anda terputus dari departemen Keuangan? Seringkali, manajer proyek menggunakan spreadsheet sementara Finance menggunakan software akuntansi yang berbeda. Akibatnya, cost overrun baru terdeteksi di akhir bulan saat semuanya sudah terlambat. BizOps menghapus jeda informasi ini; setiap aktivitas operasional langsung tercermin dalam laporan keuangan.",
    icon: LinkIcon, // Broken link metaphor
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    title: "Compliance & Sovereignty Risk",
    subtitle: "Risiko Kepatuhan pada Public Cloud",
    desc: "Menggantungkan data sensitif perusahaan—seperti payroll direksi atau strategi harga—pada infrastruktur SaaS publik membawa risiko inheren. Bagi industri teregulasi seperti Perbankan, BUMN, atau Pertambangan, kedaulatan data adalah harga mati. Kami menawarkan infrastruktur mandiri yang memitigasi risiko kebocoran.",
    icon: ShieldCheck,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "User Adoption Failure",
    subtitle: "Resistensi Adopsi Teknologi",
    desc: "Sistem ERP secanggih apa pun akan gagal jika karyawan lapangan enggan menggunakannya. Kebanyakan sistem Enterprise memaksakan tampilan desktop yang rumit ke layar ponsel yang kecil. BizOps mengubah paradigma ini dengan UI/UX mobile-first yang intuitif.",
    icon: Smartphone,
    color: "text-slate-500",
    bg: "bg-slate-50"
  }
];

// --- HOMEPAGE: UVP ---
export const homeUVP = [
  {
    title: "Data Anda, Infrastruktur Anda, Aturan Anda",
    subtitle: "Hybrid Deployment Freedom",
    desc: "Kami memahami bahwa setiap perusahaan memiliki profil risiko TI yang unik. Pilih BizOps Cloud untuk deployment instan, atau Self-Hosted untuk instalasi di Private Cloud/On-Premise dengan akses penuh ke database dan kontrol keamanan fisik.",
    icon: Database
  },
  {
    title: "UX Sekelas Aplikasi Konsumen",
    subtitle: "Enterprise Power, Consumer Simplicity",
    desc: "Kami memisahkan kompleksitas logika bisnis di backend dengan antarmuka frontend Mobile App Native yang ringan. Fitur seperti Offline Mode, Scan QR, dan One-Tap Approval memastikan adopsi pengguna yang tinggi tanpa pelatihan intensif.",
    icon: Smartphone
  },
  {
    title: "Mengubah Data Menjadi Percakapan",
    subtitle: "Contextual Collaboration (Raven)",
    desc: "Berhenti menyebar diskusi pekerjaan di aplikasi chat pihak ketiga. BizOps menghadirkan Contextual Chat yang menempel langsung pada dokumen kerja (PO, Task). Riwayat percakapan tersimpan selamanya sebagai bagian dari Audit Trail.",
    icon: MessageSquare
  }
];

// --- HOMEPAGE: TECHNICAL VALIDATION ---
export const homeTechValidation = [
  {
    label: "Backend Core",
    value: "Frappe/Python",
    desc: "Robust Open Source Framework",
    icon: Code
  },
  {
    label: "Frontend",
    value: "Flutter Native",
    desc: "60 FPS Performance on iOS/Android",
    icon: Zap
  },
  {
    label: "Database",
    value: "PostgreSQL",
    desc: "Enterprise Grade SQL DB",
    icon: Database
  },
  {
    label: "Container",
    value: "Docker/K8s",
    desc: "Scalable Micro-Architecture",
    icon: Layers
  }
];

// --- HOMEPAGE SOLUTIONS TABS ---
export const homeSolutions = [
  {
    id: 'people',
    label: 'People & Culture',
    category: 'Human Capital',
    icon: Users,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    impact: "Mengubah fungsi HR dari sekadar administrasi menjadi mitra strategis bisnis dengan data performa yang real-time.",
    modules: [
      "Smart GPS & Face Attendance",
      "Payroll Otomatis Terintegrasi PPh 21",
      "Talent Academy (LMS)",
      "Employee Engagement"
    ]
  },
  {
    id: 'finance',
    label: 'Finance & Control',
    category: 'Finance',
    icon: DollarSign,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    impact: "Menutup celah kebocoran anggaran dengan persetujuan bertingkat dan visibilitas pengeluaran sebelum uang keluar.",
    modules: [
      "Expense Management",
      "Purchase Request Approval",
      "Asset Lifecycle Tracking",
      "Real-time Accounting"
    ]
  },
  {
    id: 'ops',
    label: 'Ops & Supply Chain',
    category: 'Operations',
    icon: Truck,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    impact: "Memastikan setiap proyek dan order dikirim tepat waktu, dengan margin keuntungan yang terjaga melalui kontrol stok yang presisi.",
    modules: [
      "Project S-Curve Monitoring",
      "Multi-Warehouse Inventory",
      "Timesheet Costing",
      "Work Order Management"
    ]
  },
  {
    id: 'growth',
    label: 'Growth & CX',
    category: 'Customer Experience',
    icon: TrendingUp,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    impact: "Mempercepat siklus penjualan (sales cycle) dengan memberdayakan tim sales untuk bekerja sepenuhnya dari genggaman tangan mereka.",
    modules: [
      "Mobile CRM",
      "Instant Quotation",
      "Contextual Collaboration (Chat)",
      "Helpdesk Support"
    ]
  }
];

// --- HOMEPAGE: PROCESS ---
export const homeProcess = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "Kami membedah proses bisnis 'As-Is' vs 'To-Be'. Tidak ada asumsi, hanya data.",
  },
  {
    step: "02",
    title: "Data Migration",
    desc: "Pembersihan data legacy (Excel/System Lama) ke struktur database baru yang rapi.",
  },
  {
    step: "03",
    title: "Role-Based Training",
    desc: "Pelatihan spesifik per divisi. Simulasi transaksi riil sebelum Go-Live.",
  },
  {
    step: "04",
    title: "Go-Live & Hypercare",
    desc: "Pendampingan intensif 14 hari pertama pasca peluncuran untuk kelancaran adopsi.",
  }
];

// --- HOMEPAGE: INTEGRATIONS ---
export const homeIntegrations = [
  { name: "BCA KlikBisnis", cat: "Bank", icon: "BCA" },
  { name: "DJP e-Faktur", cat: "Tax", icon: "DJP" },
  { name: "Tokopedia", cat: "Sales Channel", icon: "TKP" },
  { name: "Shopee", cat: "Sales Channel", icon: "SHP" },
  { name: "Mekari Jurnal", cat: "Accounting", icon: "JNL" },
  { name: "Google Data Studio", cat: "Analytics", icon: "GDS" },
  { name: "WhatsApp API", cat: "Notification", icon: "WA" },
  { name: "Slack / Teams", cat: "Collab", icon: "SLK" }
];
