
import { 
  HardHat, ShoppingCart, UserCheck, Briefcase, Factory, 
  Building, TrendingUp, DollarSign, Users, Server, Package,
  Activity, ShieldCheck, Smartphone, Database, Monitor, RefreshCw,
  FileText, Clock, PieChart, Cpu, Settings, List, Clipboard,
  Globe, ArrowLeftRight, CreditCard, Scan, LineChart, Layers
} from 'lucide-react';

import type { IndustryData, RoleData } from '../types';

// --- INDUSTRIES DATA ---
export const industriesData: Record<string, IndustryData> = {
  'construction': {
    title: "Construction & Engineering",
    subtitle: "Profit Maksimal di Setiap Proyek. Anti Boncos.",
    description: "Platform manajemen konstruksi end-to-end untuk Kontraktor & Developer. Kunci budget RAB, pantau progres Kurva-S real-time, dan amankan cashflow dari termin yang macet.",
    metaTitle: "Software ERP Konstruksi & Kontraktor (RAB & Proyek)",
    metaDesc: "Aplikasi manajemen proyek konstruksi terbaik. Fitur RAB vs Realisasi, Laporan Harian, Manajemen Subkon, dan Perhitungan PPh Final Jasa Konstruksi.",
    icon: HardHat,
    metrics: [
      { value: "100%", label: "Kontrol Budget (RAB)" },
      { value: "H+0", label: "Real-time Costing" },
      { value: "Auto", label: "Laporan Kurva-S" }
    ],
    challenges: [
        { title: "Budget 'Bocor Halus'", desc: "Material hilang di lapangan, sisa bahan tidak terdata, atau pembelian melebihi volume RAB tanpa approval." },
        { title: "Cashflow Macet", desc: "Tagihan termin ke Owner terlambat diajukan karena data opname fisik dari lapangan belum direkap admin." },
        { title: "Subkon Bermasalah", desc: "Sulit melacak DP Subkon, potongan retensi, dan progress kerja mandor yang tidak sesuai pembayaran." }
    ],
    solutions: [
        { title: "RAB Budget Lock", desc: "Sistem otomatis menolak Purchase Order (PO) jika harga atau volume melebihi sisa budget RAB yang ditetapkan.", icon: ShieldCheck },
        { title: "Mobile Opname", desc: "Pelaksana input progres fisik & foto via HP. Opname langsung jadi dasar tagihan termin ke Owner.", icon: Smartphone },
        { title: "Subkon & Retensi", desc: "Kelola SPK Subkon, pantau progress, dan hitung otomatis potongan retensi 5% serta PPh 4(2).", icon: Users }
    ],
    faqs: [
        { question: "Apakah support perhitungan PPh Final?", answer: "Ya, sistem otomatis menghitung PPh 4(2) Jasa Konstruksi untuk setiap termin tagihan (Baik ke Owner maupun dari Subkon)." },
        { question: "Bisa untuk proyek Multi-Years?", answer: "Sangat bisa. Sistem mendukung manajemen proyek jangka panjang dengan eskalasi harga dan tracking termin bertahap." },
        { question: "Bagaimana jika material sisa?", answer: "Tersedia fitur Material Transfer untuk memindahkan sisa stok ke proyek lain atau dikembalikan ke Gudang Utama." }
    ],
    caseStudyTitle: "Selamatkan Margin 12%",
    caseStudy: "PT Konstruksi Jaya Abadi berhasil mendeteksi kebocoran material senilai 2M dan meningkatkan margin proyek rata-rata sebesar 12% dengan fitur RAB Locking.",
    testimonial: {
        quote: "Dulu kami baru tahu rugi setelah proyek selesai. Sekarang, detik ini material keluar, detik itu juga saya tahu sisa budget proyek tinggal berapa.",
        author: "Ir. Budi Hartono",
        role: "Direktur Operasional",
        avatar: "https://ui-avatars.com/api/?name=Budi+Hartono&background=F59E0B&color=fff"
    }
  },
  'retail': {
    title: "Retail & Distribution",
    subtitle: "Stok Akurat. Kasir Cepat. Profit Meningkat.",
    description: "Solusi Omnichannel untuk Ritel Modern. Sinkronisasi stok Tokopedia/Shopee/TikTok real-time, cegah kecurangan kasir, dan percepat perputaran inventory.",
    metaTitle: "Software ERP Retail, POS & Distribusi (Omnichannel)",
    metaDesc: "Aplikasi Kasir (POS) dan Inventory untuk Ritel. Integrasi Marketplace, Laporan Stok Harian, dan Analisis Profit per Cabang.",
    icon: ShoppingCart,
    metrics: [
      { value: "100%", label: "Marketplace Sync" },
      { value: "0", label: "Selisih Kasir" },
      { value: "3x", label: "Lebih Cepat Opname" }
    ],
    challenges: [
        { title: "Stok 'Ghaib'", desc: "Barang di sistem ada, di rak kosong. Atau sebaliknya. Akibatnya sering tolak pesanan atau overselling di marketplace." },
        { title: "Kasir & Fraud", desc: "Potensi kecurangan kasir (diskon fiktif, uang tidak disetor) yang sulit dideteksi tanpa sistem yang ketat." },
        { title: "Dead Stock", desc: "Modal mandek di barang yang tidak laku (slow moving) karena salah prediksi pembelian." }
    ],
    solutions: [
        { title: "Omnichannel Hub", desc: "Satu stok untuk semua channel (Toko Fisik, Web, Marketplace). Potong stok otomatis saat ada penjualan dimanapun.", icon: Database },
        { title: "POS Anti-Fraud", desc: "Kunci harga jual dan diskon. Kasir tidak bisa ubah harga seenaknya. Wajib setoran (Cash Count) saat tutup shift.", icon: Monitor },
        { title: "Smart Reorder", desc: "Sistem memberitahu barang apa yang harus dibeli (Restock) berdasarkan tren penjualan terlaris.", icon: RefreshCw }
    ],
    faqs: [
        { question: "Bisa scan barcode barang?", answer: "Pasti. Mendukung semua jenis scanner barcode (USB/Bluetooth) dan cetak label harga/rak." },
        { question: "Bagaimana jika internet mati?", answer: "POS kami memiliki fitur Offline Mode. Kasir tetap bisa jualan, data akan sync otomatis saat online kembali." },
        { question: "Apakah support banyak cabang?", answer: "Ya, Anda bisa pantau omzet dan stok ribuan cabang secara real-time dari satu dashboard pusat." }
    ],
    caseStudyTitle: "Omzet Naik 30%",
    caseStudy: "Berkah Mart Group berhasil menghilangkan 'lost sales' akibat stok kosong dan meningkatkan omzet 30% berkat integrasi stok marketplace real-time.",
    testimonial: {
        quote: "Dulu stok opname itu mimpi buruk, harus tutup toko 2 hari. Sekarang sambil jualan pun bisa opname parsial via HP.",
        author: "Dewi Sartika",
        role: "Operational Manager",
        avatar: "https://ui-avatars.com/api/?name=Dewi+Sartika&background=10B981&color=fff"
    }
  },
  'outsourcing': {
    title: "Outsourcing Service",
    subtitle: "Kelola Ribuan Personil Tanpa Drama Payroll.",
    description: "Sistem HRIS & Payroll spesialis Outsourcing. Pastikan personil hadir di lokasi klien (Anti-Fake GPS), hitung lembur akurat, dan tagih ke klien tepat waktu.",
    metaTitle: "Sistem HRIS Outsourcing & Jasa Keamanan",
    metaDesc: "Software manajemen outsourcing. Absensi Face ID + Geofencing, Payroll ribuan karyawan, dan Invoicing otomatis ke klien.",
    icon: UserCheck,
    metrics: [
      { value: "0", label: "Ghost Employee" },
      { value: "H+1", label: "Invoice ke Klien" },
      { value: "100%", label: "Akurasi Lembur" }
    ],
    challenges: [
        { title: "Titip Absen / Fake GPS", desc: "Sulit memastikan personil (Satpam/Cleaning) benar-benar ada di lokasi klien atau hanya memalsukan lokasi." },
        { title: "Payroll Meleset", desc: "Hitung gaji, lembur, dan potongan ribuan karyawan dengan Excel sangat rawan salah dan memakan waktu lama." },
        { title: "Tagihan Telat", desc: "Cashflow terganggu karena invoice ke klien baru bisa dikirim setelah rekap absensi manual selesai (bisa 2 minggu)." }
    ],
    solutions: [
        { title: "Bio-Geo Attendance", desc: "Wajib Selfie (Liveness Detection) + Kunci Lokasi GPS. Tidak bisa titip absen atau pakai Fake GPS.", icon: Scan },
        { title: "Auto-Billing", desc: "Invoice tagihan ke klien ter-generate otomatis segera setelah periode cut-off absensi. Lampiran lengkap.", icon: FileText },
        { title: "Employee App", desc: "Karyawan cek jadwal shift, slip gaji, dan sisa cuti langsung dari HP sendiri. Kurangi tanya-tanya ke admin.", icon: Smartphone }
    ],
    faqs: [
        { question: "Apakah support pola shift rumit?", answer: "Sangat support. Sistem menangani pola shift 2-1, 5-2, long shift, dan pertukaran shift antar karyawan." },
        { question: "Bagaimana hitung BPJS?", answer: "Otomatis. Sistem menghitung potongan BPJS Kesehatan & Ketenagakerjaan sesuai aturan terbaru." },
        { question: "Klien bisa akses laporan?", answer: "Bisa. Tersedia Client Portal agar klien Anda bisa cek kehadiran tim outsourcing secara transparan." }
    ],
    caseStudyTitle: "Payroll Selesai 1 Hari",
    caseStudy: "PT Garda Utama memangkas waktu proses payroll 2.000 satpam dari 7 hari menjadi hanya 1 hari dengan tingkat kesalahan 0%.",
    testimonial: {
        quote: "Klien kami sangat puas karena transparansi absensi. Tagihan kami jadi prioritas bayar karena datanya selalu valid dan rapi.",
        author: "Bambang Pamungkas",
        role: "Direktur Utama",
        avatar: "https://ui-avatars.com/api/?name=Bambang+Pamungkas&background=3B82F6&color=fff"
    }
  },
  'consulting': {
    title: "Professional Services",
    subtitle: "Stop Revenue Leakage. Maksimalkan Billable Hours.",
    description: "ERP untuk Konsultan, Law Firm, dan Agency. Catat setiap menit kerja tim, pantau profitabilitas proyek real-time, dan pastikan tidak ada biaya yang tidak tertagih.",
    metaTitle: "ERP Jasa Profesional & Konsultan (Project Management)",
    metaDesc: "Manajemen proyek untuk konsultan. Timesheet, Project Costing, dan Billing Management untuk memaksimalkan margin.",
    icon: Briefcase,
    metrics: [
      { value: "98%", label: "Billable Capture" },
      { value: "Real-time", label: "Project Margin" },
      { value: "20%", label: "Utilisasi Naik" }
    ],
    challenges: [
        { title: "Jam Kerja 'Hilang'", desc: "Banyak pekerjaan tambahan (Scope Creep) yang tidak tercatat dan akhirnya gratisan. Revenue bocor." },
        { title: "Proyek Boncos", desc: "Biaya gaji tim melebihi nilai kontrak proyek, tapi baru disadari saat proyek sudah selesai." },
        { title: "Rebutan Resource", desc: "Project Manager berebut staff ahli (Senior) tanpa melihat beban kerja mereka yang sebenarnya." }
    ],
    solutions: [
        { title: "Mobile Timesheet", desc: "Tim input jam kerja semudah update status sosmed. Reminder otomatis jika lupa isi timesheet.", icon: Clock },
        { title: "Project P&L Live", desc: "Lihat laba/rugi proyek detik ini juga. Revenue (Termin) dikurangi Cost (Gaji + Expense) secara otomatis.", icon: PieChart },
        { title: "Resource Heatmap", desc: "Visualisasi siapa yang overload dan siapa yang idle. Alokasikan tim dengan lebih bijak.", icon: Users }
    ],
    faqs: [
        { question: "Bisa beda rate per level?", answer: "Ya. Rate Partner, Senior, dan Junior bisa diset berbeda untuk perhitungan billing ke klien." },
        { question: "Bagaimana dengan Reimbursment?", answer: "Expense claim (Taksi/Hotel) bisa langsung di-tag ke proyek tertentu untuk ditagihkan kembali ke klien." },
        { question: "Integrasi Kalender?", answer: "Ya, task dan deadline bisa sync dengan Google Calendar atau Outlook." }
    ],
    caseStudyTitle: "Profit Margin Naik 25%",
    caseStudy: "Firma Hukum SIP & Partners meningkatkan profitabilitas proyek sebesar 25% hanya dengan disiplin pencatatan timesheet digital.",
    testimonial: {
        quote: "Dulu kami sering under-charge klien. Sekarang setiap menit keahlian kami dihargai dengan layak. Sistem ini membayar dirinya sendiri.",
        author: "Sarah Wijaya",
        role: "Managing Partner",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Wijaya&background=8B5CF6&color=fff"
    }
  },
  'manufacturing': {
    title: "Manufacturing",
    subtitle: "Efisiensi Pabrik: Dari Bahan Baku Jadi Profit.",
    description: "Sistem Manufaktur Terintegrasi. Rencanakan produksi (MRP), kontrol resep (BOM), dan hitung HPP aktual secara presisi untuk menekan waste.",
    metaTitle: "Software ERP Manufaktur & Pabrik (MRP)",
    metaDesc: "Aplikasi produksi pabrik. Material Requirement Planning (MRP), Bill of Material (BOM), dan Perhitungan HPP Produksi.",
    icon: Factory,
    metrics: [
      { value: "100%", label: "Akurasi HPP" },
      { value: "-20%", label: "Waste Produksi" },
      { value: "JIT", label: "Material Planning" }
    ],
    challenges: [
        { title: "HPP 'Kira-kira'", desc: "Menghitung Harga Pokok Produksi hanya menebak-nebak, sehingga harga jual tidak kompetitif atau malah rugi." },
        { title: "Bahan Baku Telat", desc: "Produksi stop karena material habis. Purchasing telat order karena tidak ada warning dari gudang." },
        { title: "Waste Tinggi", desc: "Pemakaian bahan baku melebihi standar resep (BOM) tapi tidak terlacak di mana borosnya." }
    ],
    solutions: [
        { title: "Auto-MRP", desc: "Sistem menghitung kapan dan berapa banyak bahan baku harus dibeli berdasarkan jadwal produksi.", icon: Cpu },
        { title: "Strict BOM Control", desc: "Gudang hanya boleh mengeluarkan bahan baku sesuai takaran resep (Bill of Material). Kelebihan minta harus approval.", icon: List },
        { title: "Work Order Tracking", desc: "Pantau status barang di setiap stasiun kerja (Potong, Jahit, Packing) secara real-time via tablet.", icon: Clipboard }
    ],
    faqs: [
        { question: "Support Multi-Level BOM?", answer: "Ya, mendukung struktur produk kompleks (Barang Jadi -> Semi Finish -> Raw Material)." },
        { question: "Bagaimana hitung biaya overhead?", answer: "Biaya listrik, penyusutan mesin, dan TK langsung otomatis dibebankan ke unit cost produk." },
        { question: "Cocok untuk Job Order?", answer: "Sangat cocok untuk pabrik Make-to-Order (Custom) maupun Make-to-Stock (Mass Production)." }
    ],
    caseStudyTitle: "Hemat 500 Juta/Bulan",
    caseStudy: "Pabrik Furniture Ekspor 'Kayu Mas' menghemat 500 juta per bulan dengan menekan waste bahan baku dan penalti keterlambatan ekspor.",
    testimonial: {
        quote: "Sekarang saya bisa tawar-menawar harga dengan buyer luar negeri dengan PD, karena saya tahu persis HPP saya sampai ke perak.",
        author: "Robert Tan",
        role: "Owner / Factory Manager",
        avatar: "https://ui-avatars.com/api/?name=Robert+Tan&background=EC4899&color=fff"
    }
  },
  'enterprise': {
    title: "Enterprise / Conglomerate",
    subtitle: "Satu Komando untuk Seluruh Gurita Bisnis.",
    description: "ERP Multi-Company untuk Holding. Konsolidasi laporan keuangan belasan anak perusahaan dalam hitungan detik, bukan minggu.",
    metaTitle: "ERP Enterprise & Holding Company (Multi-Company)",
    metaDesc: "Sistem ERP untuk grup perusahaan. Konsolidasi laporan keuangan, transaksi antar-perusahaan (Interco), dan Shared Service.",
    icon: Building,
    metrics: [
      { value: "H+3", label: "Fast Closing" },
      { value: "1", label: "Single Database" },
      { value: "Auto", label: "Konsolidasi" }
    ],
    challenges: [
        { title: "Excel 'Neraka'", desc: "Tim finance lembur berminggu-minggu menggabungkan laporan Excel dari tiap anak usaha yang formatnya beda-beda." },
        { title: "Double Input", desc: "Transaksi jual-beli antar anak usaha (Intercompany) harus diinput ulang di kedua belah pihak. Rawan selisih." },
        { title: "Buta Data Cabang", desc: "Direksi holding sulit memantau kinerja harian anak usaha karena laporan selalu terlambat." }
    ],
    solutions: [
        { title: "Instant Consolidation", desc: "Laporan Laba Rugi & Neraca Konsolidasi tersedia kapan saja (Real-time). Eliminasi akun silang otomatis.", icon: Globe },
        { title: "Interco Automation", desc: "PT A buat Sales Invoice ke PT B, otomatis PT B menerima Purchase Invoice. Hemat waktu 50%.", icon: ArrowLeftRight },
        { title: "Standardized Master", desc: "Paksa standarisasi COA, Kode Barang, dan Vendor di seluruh grup untuk data yang bersih.", icon: Database }
    ],
    faqs: [
        { question: "Beda mata uang?", answer: "Bisa. Laporan anak usaha di Singapura (SGD) otomatis dikonversi ke IDR di level Holding." },
        { question: "Keamanan data antar PT?", answer: "User PT A tidak bisa intip data PT B, kecuali diberi akses khusus. Direksi bisa lihat semua." },
        { question: "Batas jumlah entity?", answer: "Unlimited. Sistem kami mampu menangani struktur holding bertingkat (Holding -> Sub-Holding -> OpCo)." }
    ],
    caseStudyTitle: "Closing H+3 (Dulu H+20)",
    caseStudy: "Nusantara Group (15 Anak Usaha) mempercepat proses closing bulanan dari tanggal 20 menjadi tanggal 3 setiap bulannya.",
    testimonial: {
        quote: "Visibilitas adalah kunci. Sekarang saya bisa bangun pagi, buka dashboard, dan tahu persis posisi cash seluruh grup perusahaan.",
        author: "Lina Suherman",
        role: "Group CFO",
        avatar: "https://ui-avatars.com/api/?name=Lina+Suherman&background=6366F1&color=fff"
    }
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
    heroHeadline: "Kendali Penuh di Ujung Jari. Tanpa Menebak.",
    heroSub: "Berhenti mengandalkan laporan Excel akhir bulan yang terlambat. Dapatkan denyut nadi bisnis Anda secara real-time untuk keputusan yang lebih cepat.",
    cta: { btn: "Lihat Dashboard CEO", head: "Siap Mengambil Kendali Penuh?" },
    dashboardInsight: "Helicopter View: Your Business Cockpit",
    dashboardFeatures: ["Live Cashflow Status", "Profit & Loss Daily Estimate", "Top Expense Alert", "Sales Trend Analysis"],
    challenges: [
       { pain: "Keputusan Buta", context: "Membuat keputusan strategis hanya berdasarkan intuisi atau data basi bulan lalu.", gain: "Data-Driven Confidence", gainDesc: "Akses metrik kunci kapan saja dari HP. Putuskan ekspansi atau efisiensi dengan data valid detik ini juga." },
       { pain: "Operasional Gelap", context: "Tidak tahu apa yang sebenarnya terjadi di lapangan, cabang, atau gudang.", gain: "Total Transparency", gainDesc: "Drill-down dari laporan global hingga ke level transaksi tunggal untuk audit instan." }
    ]
  },
  'finance': {
    title: "Finance (CFO)",
    subtitle: "Guardian of Value",
    icon: DollarSign,
    metaTitle: "Software Accounting & Finance Manager",
    metaDesc: "Otomatisasi jurnal, kontrol budget, dan manajemen cashflow untuk tim keuangan modern.",
    heroHeadline: "Bukan Sekadar Pembukuan. Ini Pusat Strategi.",
    heroSub: "Transformasi tim finance dari sekadar 'tukang input' menjadi penasihat strategis perusahaan yang menjaga profitabilitas.",
    cta: { btn: "Demo Modul Finance", head: "Modernisasi Departemen Keuangan Anda" },
    dashboardInsight: "Financial Health Command Center",
    dashboardFeatures: ["Budget vs Actual Real-time", "Automated Bank Reconciliation", "Aging AP/AR Monitoring", "Cost Center Analysis"],
    challenges: [
       { pain: "Closing Neraka", context: "Tim lembur berhari-hari setiap akhir bulan hanya untuk rekap data dari divisi lain yang berantakan.", gain: "Continuous Closing", gainDesc: "Jurnal terbentuk otomatis saat transaksi operasional terjadi. Closing akhir bulan tinggal validasi satu klik." },
       { pain: "Kebocoran Budget", context: "Pengeluaran operasional sering over-budget tanpa peringatan dini, menggerus laba.", gain: "Hard Budget Control", gainDesc: "Sistem memblokir PO/PR secara otomatis jika budget pos tersebut sudah habis. Zero leakage." }
    ]
  },
  'hr': {
    title: "HR Leaders",
    subtitle: "People Champion",
    icon: Users,
    metaTitle: "Aplikasi HRD & Payroll Manager",
    metaDesc: "Kelola administrasi karyawan, payroll, dan performa tim dengan efisien.",
    heroHeadline: "Administrasi Selesai Otomatis. Fokus ke Manusia.",
    heroSub: "Kurangi beban administrasi klerikal hingga 70%. Alihkan waktu Anda untuk pengembangan talenta dan membangun budaya juara.",
    cta: { btn: "Demo HRIS", head: "Bangun Pengalaman Karyawan Terbaik" },
    dashboardInsight: "Workforce Analytics & Engagement",
    dashboardFeatures: ["Real-time Turnover Rate", "Attendance Heatmap", "Payroll Cost Projection", "Employee NPS Score"],
    challenges: [
       { pain: "Drama Payroll", context: "Stres tinggi setiap tanggal cut-off gaji karena data absensi, lembur, dan pinjaman karyawan berantakan.", gain: "1-Click Payroll", gainDesc: "Tarik data absensi, hitung PPh 21 (TER), BPJS, dan generate file transfer bank dalam hitungan menit." },
       { pain: "Risiko Kepatuhan", context: "Takut salah hitung pajak atau denda keterlambatan BPJS yang bisa merugikan perusahaan.", gain: "Auto Compliance", gainDesc: "Sistem selalu diperbarui mengikuti regulasi tarif pajak PPh 21 dan BPJS Ketenagakerjaan terbaru." }
    ]
  },
  'it': {
    title: "IT Managers (CTO)",
    subtitle: "Technology Architect",
    icon: Server,
    metaTitle: "ERP Architecture & Security for IT Manager",
    metaDesc: "Platform ERP yang aman, scalable, dan developer-friendly. Self-hosted atau Cloud.",
    heroHeadline: "Platform Modern yang Developer-Friendly.",
    heroSub: "Dibangun dengan stack modern (Python/JS/Postgres), API-first, dan container-ready. Bukan sistem legacy 'kotak hitam' yang kaku.",
    cta: { btn: "Baca Dokumentasi Teknis", head: "Evaluasi Arsitektur Kami" },
    dashboardInsight: "System Health & Security Monitor",
    dashboardFeatures: ["API Performance Metrics", "Real-time Error Logs", "User Access Audit Trail", "Integration Status Health"],
    challenges: [
       { pain: "Shadow IT", context: "User menggunakan aplikasi liar (SaaS tak dikenal) karena sistem kantor sulit digunakan.", gain: "Unified Ecosystem", gainDesc: "Satu platform modern dengan UX setara aplikasi konsumen yang disukai user, mengurangi kebutuhan aplikasi pihak ketiga." },
       { pain: "Maintenance Hell", context: "Tim IT habis waktu hanya untuk patching server manual dan fix bug sistem legacy tua.", gain: "Low Maintenance", gainDesc: "Arsitektur Docker yang stabil, CI/CD ready, dan update OTA (Over-The-Air) yang mulus." }
    ]
  },
  'ops': {
    title: "Ops Managers",
    subtitle: "Execution Excellence",
    icon: Package,
    metaTitle: "Operations Management & Supply Chain Software",
    metaDesc: "Kelola proyek, inventory, dan supply chain dengan visibilitas real-time. Kontrol biaya operasional dan pastikan on-time delivery.",
    heroHeadline: "Eksekusi Sempurna. Tepat Waktu, Setiap Waktu.",
    heroSub: "Hilangkan blind spot operasional. Pantau progres proyek, kontrol stok gudang, dan kelola logistik dari satu dashboard terpusat.",
    cta: { btn: "Demo Modul Operations", head: "Tingkatkan Efisiensi Operasional Anda" },
    dashboardInsight: "Real-time Operations Command Center",
    dashboardFeatures: ["Live Project S-Curve", "Low Stock Alert", "On-Time Delivery Rate", "Cost Variance Analysis"],
    challenges: [
       { pain: "Proyek Molor", context: "Proyek sering terlambat karena tidak ada visibilitas real-time terhadap progres dan kendala lapangan.", gain: "Real-time Visibility", gainDesc: "Pantau kurva-S proyek dan terima laporan harian langsung dari lapangan via mobile app. Deteksi masalah sebelum jadi krisis." },
       { pain: "Stok Berantakan", context: "Sering kehilangan penjualan karena stok kosong, atau sebaliknya modal mati di barang tidak laku.", gain: "Smart Inventory Control", gainDesc: "Sistem menghitung re-order point otomatis berdasarkan tren penjualan historis. Cegah stockout tanpa overstock." }
    ]
  }
};
