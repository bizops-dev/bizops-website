
import { 
  HardHat, ShoppingCart, UserCheck, Briefcase, Factory, 
  Building, TrendingUp, DollarSign, Users, Server, Package
} from 'lucide-react';

import type { IndustryData, RoleData } from '../types';

// --- INDUSTRIES DATA ---
export const industriesData: Record<string, IndustryData> = {
  'construction': {
    title: "Construction & Engineering",
    subtitle: "Built for The Field, Managed from The Office.",
    description: "Kelola proyek konstruksi kompleks dengan kurva-S real-time, manajemen subkon, dan kontrol material yang ketat. Hindari cost overrun dengan visibilitas penuh.",
    metaTitle: "ERP Konstruksi & Kontraktor Indonesia",
    metaDesc: "Software manajemen proyek konstruksi. Pantau RAB vs Realisasi, Timesheet tukang, dan Logistik material proyek.",
    icon: HardHat,
    challenges: [
        { title: "Cost Overrun", desc: "Biaya proyek sering bengkak karena material hilang atau pemborosan yang tidak terdeteksi dini." },
        { title: "Progress Blindness", desc: "Laporan lapangan terlambat berhari-hari, membuat keputusan manajemen selalu reaktif." },
        { title: "Subcon Management", desc: "Kesulitan melacak tagihan dan progres kerja sub-kontraktor yang tersebar." }
    ],
    solutions: [
        { title: "S-Curve Monitoring", desc: "Otomatisasi kurva-S dari laporan harian lapangan. Bandingkan rencana vs realisasi (RAB) instan." },
        { title: "Material Control", desc: "Persetujuan permintaan material bertingkat. Cegah pembelian jika melebihi budget item pekerjaan." },
        { title: "Field App", desc: "Pelaksana upload foto progres dan kendala cuaca langsung dari HP. GPS Tagged." }
    ],
    caseStudyTitle: "Efisiensi Material 15%",
    caseStudy: "PT Bangun Persada mengurangi selisih stok besi dan semen hingga 15% dalam 3 bulan pertama menggunakan modul Inventory & Project Control BizOps."
  },
  'retail': {
    title: "Retail & Distribution",
    subtitle: "Omnichannel Speed, Inventory Precision.",
    description: "Sinkronisasi stok di semua channel penjualan (Offline, Marketplace, Webstore). Percepat perputaran inventaris dan minimalkan dead stock.",
    metaTitle: "Software ERP Retail & Distribusi",
    metaDesc: "Kelola ribuan SKU, Multi-Gudang, dan Salesman Canvas. Integrasi Marketplace Tokopedia/Shopee.",
    icon: ShoppingCart,
    challenges: [
        { title: "Stockout & Overstock", desc: "Kehilangan penjualan karena stok kosong, atau modal mati karena stok menumpuk." },
        { title: "Fraud di Kasir", desc: "Kebocoran uang tunai atau manipulasi diskon oleh staf toko." },
        { title: "Data Terpisah", desc: "Stok marketplace dan toko fisik tidak sinkron, menyebabkan pembatalan pesanan." }
    ],
    solutions: [
        { title: "Centralized Inventory", desc: "Satu database stok untuk semua channel. Update real-time saat penjualan terjadi." },
        { title: "POS Terintegrasi", desc: "Kasir toko langsung terhubung ke akuntansi back-office. Cegah manipulasi harga." },
        { title: "Smart Replenishment", desc: "Sistem menyarankan re-order point otomatis berdasarkan tren penjualan historis." }
    ],
    caseStudyTitle: "Fulfillment Rate 99%",
    caseStudy: "Berkah Abadi Group meningkatkan order fulfillment rate dari 85% ke 99% dengan visibilitas stok real-time antar cabang."
  },
  'outsourcing': {
    title: "Outsourcing Service",
    subtitle: "Manage People at Scale.",
    description: "Kelola ribuan tenaga kerja (Satpam, Cleaning Service, SPG) di berbagai lokasi klien dengan absensi dan payroll yang akurat.",
    metaTitle: "Sistem HRIS Outsourcing & Jasa",
    metaDesc: "Aplikasi HR untuk perusahaan outsourcing. Absensi mobile, perhitungan lembur otomatis, dan penagihan ke klien.",
    icon: UserCheck,
    challenges: [
        { title: "Ghost Employee", desc: "Karyawan fiktif atau titip absen yang merugikan perusahaan." },
        { title: "Payroll Complexity", desc: "Menghitung lembur dan shift ribuan orang secara manual sangat rawan salah." },
        { title: "Client Billing", desc: "Lambat menagih ke klien karena rekap absensi belum selesai." }
    ],
    solutions: [
        { title: "Face Recognition Attendance", desc: "Absensi anti-palsu dengan liveness detection di lokasi klien." },
        { title: "Auto-Invoicing", desc: "Tagihan ke klien terbit otomatis berdasarkan data kehadiran yang valid." },
        { title: "Employee Self-Service", desc: "Karyawan cek slip gaji dan jadwal shift sendiri lewat HP, mengurangi beban admin." }
    ],
    caseStudyTitle: "Zero Payroll Error",
    caseStudy: "GuardOne Security menghilangkan kesalahan hitung gaji dan lembur untuk 2.000 personil satpam mereka."
  },
  'consulting': {
    title: "Professional Services",
    subtitle: "Billable Hours, Maximized.",
    description: "Untuk Konsultan, Law Firm, dan Agensi. Lacak profitabilitas setiap proyek dan klien. Pastikan tidak ada jam kerja yang tidak tertagih.",
    metaTitle: "ERP untuk Jasa Profesional & Konsultan",
    metaDesc: "Manajemen proyek, time tracking, dan project billing untuk perusahaan jasa profesional.",
    icon: Briefcase,
    challenges: [
        { title: "Revenue Leakage", desc: "Banyak jam kerja konsultan yang lupa dicatat dan tidak tertagih ke klien." },
        { title: "Project Blindspot", desc: "Tidak tahu mana proyek yang untung dan mana yang boncos secara real-time." },
        { title: "Resource Conflict", desc: "Rebutan staf ahli antar proyek menyebabkan deadline meleset." }
    ],
    solutions: [
        { title: "Digital Timesheet", desc: "Catat waktu kerja per task/proyek dengan mudah via mobile atau web." },
        { title: "Project P&L", desc: "Laporan laba rugi per proyek otomatis. Bandingkan revenue vs cost karyawan." },
        { title: "Resource Planning", desc: "Visualisasi beban kerja tim untuk alokasi resource yang lebih merata." }
    ],
    caseStudyTitle: "Profit Naik 20%",
    caseStudy: "Firma Konsultan Pajak terkemuka meningkatkan billable utilization rate mereka sebesar 20% dengan tracking waktu yang disiplin."
  },
  'manufacturing': {
    title: "Manufacturing",
    subtitle: "Streamline Production Flow.",
    description: "Rencanakan produksi (MRP), kelola Bill of Materials (BOM), dan pantau efisiensi mesin serta tenaga kerja pabrik.",
    metaTitle: "ERP Manufaktur & Pabrik",
    metaDesc: "Sistem produksi, MRP, dan inventory bahan baku untuk pabrik dan manufaktur.",
    icon: Factory,
    challenges: [
        { title: "Material Shortage", desc: "Produksi berhenti karena bahan baku habis mendadak." },
        { title: "High Waste", desc: "Pemborosan bahan baku yang tinggi karena tidak ada standar BOM yang ketat." },
        { title: "COGS Calculation", desc: "Kesulitan menghitung HPP per unit barang jadi secara akurat." }
    ],
    solutions: [
        { title: "Material Requirements Planning", desc: "Sistem menghitung kebutuhan bahan baku berdasarkan order penjualan dan stok." },
        { title: "Bill of Materials", desc: "Standarisasi resep produksi untuk kontrol pemakaian bahan baku." },
        { title: "Work Order Tracking", desc: "Pantau status produksi real-time di setiap stasiun kerja (Work Station)." }
    ],
    caseStudyTitle: "Waste Turun 10%",
    caseStudy: "Pabrik furniture ekspor berhasil menekan waste produksi kayu hingga 10% dengan kontrol BOM yang ketat."
  },
  'enterprise': {
    title: "Enterprise / Conglomerate",
    subtitle: "Unified Control, Diversified Business.",
    description: "Solusi multi-company untuk holding. Konsolidasi laporan keuangan antar anak perusahaan yang berbeda lini bisnis dalam satu platform.",
    metaTitle: "ERP Enterprise & Holding Company",
    metaDesc: "Konsolidasi laporan keuangan, inter-company transaction, dan shared service center.",
    icon: Building,
    challenges: [
        { title: "Fragmented Data", desc: "Setiap anak usaha pakai software beda, sulit konsolidasi laporan grup." },
        { title: "Slow Reporting", desc: "Laporan konsolidasi bulanan butuh waktu berminggu-minggu via Excel." },
        { title: "Governance Risk", desc: "Kurangnya standar kontrol dan audit trail di anak perusahaan." }
    ],
    solutions: [
        { title: "Multi-Company Structure", desc: "Satu instance untuk banyak PT. Konsolidasi finansial otomatis." },
        { title: "Inter-Company Transaction", desc: "Transaksi jual beli antar anak usaha terjurnal otomatis di kedua sisi." },
        { title: "Centralized Master Data", desc: "Standarisasi kode akun (COA), pelanggan, dan vendor di seluruh grup." }
    ],
    caseStudyTitle: "Closing Cepat H+3",
    caseStudy: "Holding company dengan 5 anak usaha kini bisa closing laporan keuangan konsolidasi pada H+3 setiap bulan."
  }
};

// --- ROLES DATA ---
export const rolesData: Record<string, RoleData> = {
  'ceo': {
    title: "CEO & Founders",
    subtitle: "The Captain's View",
    icon: TrendingUp,
    metaTitle: "Dashboard CEO & Business Intelligence",
    metaDesc: "Pantau kesehatan bisnis secara real-time. Cashflow, Profitabilitas, dan Sales Pipeline dalam satu layar.",
    heroHeadline: "Lead with Clarity, Not Guesswork.",
    heroSub: "Berhenti mengandalkan laporan Excel akhir bulan yang terlambat. Dapatkan denyut nadi bisnis Anda secara real-time.",
    cta: { btn: "Lihat Dashboard CEO", head: "Siap Mengambil Kendali Penuh?" },
    dashboardInsight: "Your Entire Business on One Screen",
    dashboardFeatures: ["Live Cashflow Status", "Sales Trend Analysis", "Top Expense Alert", "Profit & Loss DailyEstimate"],
    challenges: [
       { pain: "Blind Decision Making", context: "Membuat keputusan strategis hanya berdasarkan intuisi karena data belum siap.", gain: "Data-Driven Confidence", gainDesc: "Akses metrik kunci kapan saja dari HP. Putuskan ekspansi atau efisiensi dengan data valid." },
       { pain: "Operational Blackbox", context: "Tidak tahu apa yang sebenarnya terjadi di lapangan atau cabang.", gain: "Total Transparency", gainDesc: "Drill-down dari laporan global hingga ke level transaksi tunggal untuk audit." }
    ]
  },
  'finance': {
    title: "Finance (CFO)",
    subtitle: "Guardian of Value",
    icon: DollarSign,
    metaTitle: "Software Accounting & Finance Manager",
    metaDesc: "Otomatisasi jurnal, kontrol budget, dan manajemen cashflow untuk tim keuangan modern.",
    heroHeadline: "Stop Crunching Numbers. Start Analyzing Them.",
    heroSub: "Transformasi tim finance dari sekadar input data menjadi penasihat strategis perusahaan.",
    cta: { btn: "Demo Modul Finance", head: "Modernisasi Departemen Keuangan Anda" },
    dashboardInsight: "Real-time Financial Health Check",
    dashboardFeatures: ["Budget vs Actual", "Aging AP/AR", "Auto Bank Recon", "Cost Center Analysis"],
    challenges: [
       { pain: "Closing Nightmare", context: "Lembur berhari-hari setiap akhir bulan untuk rekap data dari divisi lain.", gain: "Continuous Closing", gainDesc: "Jurnal terbentuk otomatis saat transaksi terjadi. Closing akhir bulan tinggal validasi." },
       { pain: "Budget Leakage", context: "Pengeluaran operasional sering over-budget tanpa peringatan.", gain: "Hard Budget Control", gainDesc: "Sistem memblokir PO/PR secara otomatis jika budget pos tersebut sudah habis." }
    ]
  },
  'hr': {
    title: "HR Leaders",
    subtitle: "People Champion",
    icon: Users,
    metaTitle: "Aplikasi HRD & Payroll Manager",
    metaDesc: "Kelola administrasi karyawan, payroll, dan performa tim dengan efisien.",
    heroHeadline: "Put the 'Human' Back in Human Resources.",
    heroSub: "Kurangi beban administrasi klerikal hingga 70%. Fokus pada pengembangan talenta dan budaya perusahaan.",
    cta: { btn: "Demo HRIS", head: "Bangun Pengalaman Karyawan Terbaik" },
    dashboardInsight: "Workforce Analytics & Engagement",
    dashboardFeatures: ["Turnover Rate", "Attendance Heatmap", "Payroll Cost Analysis", "Employee NPS"],
    challenges: [
       { pain: "Payroll Panic", context: "Stres setiap tanggal cut-off gaji karena data absensi dan lembur berantakan.", gain: "One-Click Payroll", gainDesc: "Tarik data absensi, hitung PPh 21, dan generate file transfer bank dalam hitungan menit." },
       { pain: "Compliance Risk", context: "Takut salah hitung pajak atau denda keterlambatan BPJS.", gain: "Auto Compliance", gainDesc: "Sistem selalu diperbarui mengikuti regulasi tarif pajak dan BPJS terbaru." }
    ]
  },
  'it': {
    title: "IT Managers (CTO)",
    subtitle: "Technology Architect",
    icon: Server,
    metaTitle: "ERP Architecture & Security for IT Manager",
    metaDesc: "Platform ERP yang aman, scalable, dan developer-friendly. Self-hosted atau Cloud.",
    heroHeadline: "The Platform You Won't Hate to Maintain.",
    heroSub: "Dibangun dengan stack modern (Python/JS), API-first, dan container-ready. Bukan sistem legacy yang kaku.",
    cta: { btn: "Baca Dokumentasi Teknis", head: "Evaluasi Arsitektur Kami" },
    dashboardInsight: "System Health & Security",
    dashboardFeatures: ["API Usage Stats", "Error Logs Monitor", "User Access Audit", "Integration Status"],
    challenges: [
       { pain: "Shadow IT", context: "User menggunakan aplikasi liar karena sistem kantor tidak user-friendly.", gain: "Unified Ecosystem", gainDesc: "Satu platform modern yang disukai user, mengurangi kebutuhan aplikasi pihak ketiga." },
       { pain: "Maintenance Hell", context: "Menghabiskan waktu untuk patching server dan fix bug sistem legacy.", gain: "Low Maintenance", gainDesc: "Arsitektur Docker yang stabil dan update OTA (Over-The-Air) yang mulus." }
    ]
  },
  'ops': {
    title: "Ops Managers",
    subtitle: "Execution Excellence",
    icon: Package,
    metaTitle: "Operations Management & Supply Chain Software",
    metaDesc: "Kelola proyek, inventory, dan supply chain dengan visibilitas real-time. Kontrol biaya operasional dan pastikan on-time delivery.",
    heroHeadline: "Deliver on Time, Every Time.",
    heroSub: "Hilangkan blind spot operasional. Pantau progres proyek, kontrol stok gudang, dan kelola logistik dari satu dashboard terpusat.",
    cta: { btn: "Demo Modul Operations", head: "Tingkatkan Efisiensi Operasional Anda" },
    dashboardInsight: "Real-time Operations Command Center",
    dashboardFeatures: ["Project S-Curve Status", "Inventory Alert", "On-Time Delivery Rate", "Cost Variance Analysis"],
    challenges: [
       { pain: "Project Delays", context: "Proyek sering molor karena tidak ada visibilitas real-time terhadap progres dan kendala di lapangan.", gain: "Real-time Visibility", gainDesc: "Pantau kurva-S proyek dan terima laporan harian langsung dari lapangan via mobile app. Deteksi masalah sebelum jadi krisis." },
       { pain: "Stockout & Overstock", context: "Kehilangan penjualan karena stok kosong, atau modal mati karena stok menumpuk di gudang.", gain: "Smart Inventory Control", gainDesc: "Sistem menghitung re-order point otomatis berdasarkan tren penjualan. Cegah stockout tanpa overstock." }
    ]
  }
};
