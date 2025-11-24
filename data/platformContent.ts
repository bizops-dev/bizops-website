
import { 
  Users, DollarSign, Briefcase, TrendingUp, Package, BarChart, 
  Smartphone, Server, Share2, MessageSquare, Layers 
} from 'lucide-react';

import type { ModuleData } from '../types';

// --- MODULES DATA ---
export const modulesData: Record<string, ModuleData> = {
  'hr': {
    title: "Human Capital Management (HRIS)",
    subtitle: "Empower Your People, Automate The Admin.",
    description: "Transformasi peran HR dari penjaga administrasi menjadi arsitek budaya perusahaan. Kelola seluruh siklus hidup karyawan—mulai dari onboarding, penggajian, hingga manajemen performa—dalam satu platform terintegrasi yang menghilangkan duplikasi data.",
    metaTitle: "HRIS, Payroll & Employee Engagement Software",
    metaDesc: "Sistem HR end-to-end dengan GPS Attendance presisi, PPh 21 Payroll otomatis, dan LMS terintegrasi. Solusi strategis untuk administrasi SDM yang efisien.",
    icon: Users,
    features: [
      { title: "Smart Attendance System", desc: "Kombinasi Geofencing Radius & Liveness Face Recognition untuk kehadiran anti-fraud. Mendukung Complex Rostering untuk pola shift rotasi industri." },
      { title: "Indonesian Payroll Automation", desc: "Perhitungan PPh 21 (TER/Gross Up), BPJS, dan File Transfer Bank otomatis. Ucapkan selamat tinggal pada spreadsheet manual." },
      { title: "Talent Academy (LMS)", desc: "Percepat Time-to-Productivity karyawan baru dengan onboarding digital. Akses video SOP dan kuis kepatuhan langsung dari aplikasi." },
      { title: "Employee Engagement", desc: "Bangun budaya apresiasi dengan sistem Reward Point instan dan survei 'denyut nadi' (Pulse Survey) untuk deteksi isu retensi dini." }
    ],
    mobileAdvantage: {
      title: "HR Service di Saku Karyawan (ESS)",
      desc: "Aplikasi Employee Self-Service (ESS) memberdayakan karyawan untuk melayani kebutuhan administrasi mereka sendiri. Mereka dapat mengajukan cuti, mengoreksi absensi, klaim plafon medis, hingga mengunduh Slip Gaji digital terenkripsi secara mandiri."
    },
    connections: [
      { target: "Operations", desc: "Data jam kerja dari Attendance langsung ditarik ke Project Costing untuk hitung HPP Tenaga Kerja presisi." },
      { target: "Finance", desc: "Rekap gaji final otomatis menjurnal ke General Ledger sebagai beban gaji dan hutang pajak." }
    ],
    cta: {
      text: "Lihat bagaimana BizOps merapikan administrasi HR Anda dalam 15 menit.",
      buttonLabel: "Demo Modul HR"
    }
  },
  'finance': {
    title: "Finance & Procurement",
    subtitle: "Total Control Over Every Penny.",
    description: "Hilangkan kebocoran anggaran operasional (Budget Leakage) dengan sistem persetujuan pengadaan bertingkat dan transparansi arus kas real-time. Integrasikan pembelian, aset, dan akuntansi dalam satu alur kerja.",
    metaTitle: "Accounting, Procurement & Asset Management",
    metaDesc: "Kontrol arus kas total, manajemen aset fisik, dan digitalisasi pengadaan barang (Procurement). Laporan keuangan real-time tanpa menunggu tutup buku.",
    icon: DollarSign,
    features: [
      { title: "Procurement & Purchase Request", desc: "Digitalisasi rantai pasok internal. Sistem otomatis memblokir pengajuan PR jika melebihi sisa anggaran departemen (Budget Control), mencegah Maverick Buying." },
      { title: "Expense Management", desc: "Proses klaim biaya operasional semudah memotret struk. Teknologi OCR otomatis membaca nominal. Status persetujuan transparan di aplikasi." },
      { title: "Real-Time Accounting", desc: "Setiap transaksi operasional (Sales, Gudang, Expense) otomatis membentuk jurnal akuntansi. Laporan Laba Rugi dan Neraca tersedia on-demand kapan saja." },
      { title: "Asset Lifecycle Management", desc: "Lacak lokasi dan pemegang aset fisik dengan QR Code. Perhitungan penyusutan aset otomatis setiap bulan." }
    ],
    mobileAdvantage: {
      title: "Persetujuan Keuangan Tanpa Hambatan",
      desc: "Direktur Keuangan seringkali menjadi bottleneck karena mobilitas. Dengan BizOps, setujui PO bernilai besar atau Reimbursement mendesak langsung dari notifikasi HP di sela-sela rapat."
    },
    connections: [
      { target: "Sales", desc: "Tagihan (Invoice) otomatis terbentuk saat Delivery Note dibuat, mempercepat AR turnover." },
      { target: "Supply Chain", desc: "Nilai persediaan di Neraca selalu sinkron real-time dengan fisik stok di Gudang." }
    ],
    cta: {
      text: "Dapatkan visibilitas keuangan penuh yang Anda butuhkan.",
      buttonLabel: "Demo Modul Finance"
    }
  },
  'operations': {
    title: "Operations & Projects",
    subtitle: "Deliver Projects On Time, On Budget.",
    description: "Visibilitas penuh dari kantor pusat ke lapangan. Pantau progres fisik, realisasi penggunaan material, dan efisiensi jam kerja tim dalam satu dashboard terpusat.",
    metaTitle: "Project Management, Timesheet & Field Report",
    metaDesc: "Pantau progres kurva-S proyek, kontrol RAB, dan produktivitas tim lapangan. Solusi Timesheet terintegrasi untuk perusahaan jasa konstruksi.",
    icon: Briefcase,
    features: [
      { title: "Project Budgeting (RAB vs Actual)", desc: "Kendalikan margin keuntungan. Sistem memberikan peringatan dini (Early Warning) jika realisasi biaya mendekati batas anggaran RAB sebelum kerugian terjadi." },
      { title: "Task Management & Geo-Tagged Timesheet", desc: "Tim mencatat waktu kerja via aplikasi mobile dengan GPS tagging. Data ini menjadi dasar perhitungan biaya tenaga kerja per proyek yang presisi." },
      { title: "Daily Field Report", desc: "Pelaksana lapangan menginput cuaca, volume kerja, dan kendala beserta foto bukti. Data dikompilasi otomatis menjadi Kurva-S progres proyek." },
      { title: "Contextual Collaboration (Raven)", desc: "Fitur chat yang menempel pada Task/Project. Diskusikan kendala teknis langsung pada tugas terkait untuk jejak audit komunikasi yang jelas." }
    ],
    mobileAdvantage: {
      title: "Update Progres Langsung dari Site",
      desc: "BizOps Mobile didesain untuk kondisi lapangan. Upload foto progres, update status tugas, dan catat material langsung di lokasi. Mendukung Offline Mode untuk area terpencil."
    },
    connections: [
      { target: "Procurement", desc: "Material request lapangan langsung memotong stok gudang proyek atau memicu PR ke pusat." },
      { target: "HR", desc: "Data Timesheet proyek tervalidasi menjadi dasar perhitungan upah lembur otomatis." }
    ],
    cta: {
      text: "Tingkatkan profitabilitas dan ketepatan waktu proyek Anda.",
      buttonLabel: "Demo Modul Ops"
    }
  },
  'sales': {
    title: "Sales & Growth (Commercial)",
    subtitle: "Close Deals Faster from Anywhere.",
    description: "Berikan tim sales Anda alat yang mereka butuhkan untuk berjualan, bukan sekadar alat untuk melapor. Akselerasi siklus penjualan dari prospek menjadi pembayaran.",
    metaTitle: "Mobile CRM, Quotation & Sales Force Automation",
    metaDesc: "Berdayakan tim sales dengan aplikasi Mobile CRM lengkap. Buat Quotation instan, cek stok real-time, dan kelola pipeline penjualan dari mana saja.",
    icon: TrendingUp,
    features: [
      { title: "Mobile CRM & Opportunity", desc: "Database pelanggan 360 derajat. Catat riwayat interaksi, jadwalkan follow-up, dan pantau pergerakan deals dalam sales pipeline agar tidak ada peluang hilang." },
      { title: "Instant Quotation Generator", desc: "Buat penawaran harga (Quotation) PDF resmi lengkap dengan tanda tangan digital langsung dari HP saat tatap muka dengan klien. Kirim via WhatsApp detik itu juga." },
      { title: "Sales Target & Commission", desc: "Transparansi memotivasi kinerja. Salesman dapat memantau pencapaian target dan estimasi komisi mereka secara real-time." },
      { title: "Omnichannel Customer Helpdesk", desc: "Tiket komplain dari berbagai saluran tercatat sistematis. Terhubung dengan riwayat penjualan sehingga agen tahu produk apa yang dibeli pelanggan." }
    ],
    mobileAdvantage: {
      title: "Kantor Salesman adalah Jalanan",
      desc: "Fitur Sales Visit Check-in memvalidasi lokasi GPS kunjungan. Fitur Live Stock Check memungkinkan sales melihat ketersediaan barang real-time sebelum janji ke pelanggan."
    },
    connections: [
      { target: "Inventory", desc: "Sistem otomatis melakukan reservasi stok (soft booking) saat Sales Order dibuat." },
      { target: "Finance", desc: "Sales Order yang disetujui otomatis memicu pembuatan Tagihan (Invoice) dan mencatat Piutang." }
    ],
    cta: {
      text: "Akselerasi pertumbuhan omzet penjualan Anda.",
      buttonLabel: "Demo Modul Sales"
    }
  },
  'supply-chain': {
    title: "Supply Chain & Inventory",
    subtitle: "Inventory Accuracy You Can Trust.",
    description: "Kelola ribuan SKU di berbagai lokasi gudang dengan presisi tinggi. Minimalkan kerugian akibat dead stock, barang hilang, atau selisih stok yang tidak terdeteksi.",
    metaTitle: "Multi-Warehouse Inventory & Stock Management",
    metaDesc: "Sistem manajemen stok multi-gudang dengan Stock Opname QR Code. Lacak pergerakan barang, batch number, dan expiry date secara akurat.",
    icon: Package,
    features: [
      { title: "Multi-Warehouse Management", desc: "Sentralisasi data stok dari Gudang Pusat, Cabang, hingga stok di mobil Salesman (Canvas). Transfer antar gudang tercatat rapi." },
      { title: "QR/Barcode Stock Opname", desc: "Percepat audit stok fisik hingga 50%. Gunakan kamera HP untuk scan barang. Sistem otomatis menghitung selisih dan membuat jurnal penyesuaian." },
      { title: "Traceability (Batch & Serial)", desc: "Lacak riwayat pergerakan setiap unit. Krusial untuk industri makanan (Expiry Date) dan elektronik (Serial Number untuk garansi)." },
      { title: "Light Manufacturing (Work Order)", desc: "Kelola proses produksi/perakitan. Konversi bahan baku menjadi barang jadi melalui Work Order berdasarkan Bill of Materials (Resep)." }
    ],
    mobileAdvantage: {
      title: "Manajemen Gudang Tanpa Kertas",
      desc: "Staf gudang menerima perintah pengiriman (Pick List) atau penerimaan barang (Goods Receipt) langsung di aplikasi. Konfirmasi barang via scan mengurangi kesalahan input."
    },
    connections: [
      { target: "Sales", desc: "Memberikan data Available-to-Promise (ATP) yang akurat ke tim sales." },
      { target: "Finance", desc: "Nilai HPP terhitung otomatis (FIFO/Avg) setiap barang keluar, menghasilkan laporan margin presisi." }
    ],
    cta: {
      text: "Rapikan manajemen stok dan gudang Anda sekarang.",
      buttonLabel: "Demo Modul Inventory"
    }
  },
  'governance': {
    title: "Governance & Insight",
    subtitle: "Data-Driven Decisions, Ironclad Compliance.",
    description: "Solusi bagi pemimpin yang membutuhkan pandangan helikopter (Helicopter View) atas bisnis dan kepastian bahwa seluruh operasional berjalan sesuai koridor aturan perusahaan.",
    metaTitle: "BI Dashboard, Audit Trail & GCG Compliance",
    metaDesc: "Dashboard manajemen untuk keputusan strategis berbasis data. Fitur audit trail lengkap dan keamanan akses untuk kepatuhan GCG.",
    icon: BarChart,
    features: [
      { title: "Executive BI Dashboard", desc: "Transformasi data mentah menjadi wawasan visual. Pantau P&L harian, Tren Penjualan, dan Cashflow dalam satu layar interaktif dengan kemampuan drill-down." },
      { title: "Immutable Audit Trail", desc: "Sistem merekam jejak digital lengkap (User, Timestamp, Old/New Value) untuk setiap perubahan data. Log terkunci read-only untuk audit forensik." },
      { title: "Role-Based Access Control", desc: "Pengaturan hak akses granular hingga level field. Tentukan siapa yang boleh melihat, mengedit, atau menyetujui data. Prinsip Least Privilege." },
      { title: "Dynamic Approval Workflow", desc: "Desain alur persetujuan dokumen dinamis sesuai SOP. Terapkan aturan kondisional (misal: Pengeluaran > 5 Juta butuh Direktur)." }
    ],
    mobileAdvantage: {
      title: "Kedaulatan Data & Analisis Tanpa Batas",
      desc: "Berbeda dengan SaaS biasa, deployment Self-Hosted BizOps memberikan akses langsung ke Database mentah. Tim Data Analyst Anda dapat menghubungkan BI Tools eksternal (Tableau/PowerBI) untuk analisis kustom."
    },
    connections: [
      { target: "All Modules", desc: "Governance adalah 'Muara' dari seluruh aliran data HR, Finance, Sales, dan Ops." },
      { target: "Decision", desc: "Memastikan data yang masuk valid, aman, dan disajikan kembali menjadi wawasan strategis." }
    ],
    cta: {
      text: "Ambil Kendali Penuh Atas Arah Bisnis Anda.",
      buttonLabel: "Lihat Dashboard Demo"
    }
  }
};

// --- CAPABILITIES DATA ---
export const capabilitiesData: Record<string, any> = {
  'mobile': {
    title: "Native Mobile Experience",
    subtitle: "Bukan Sekadar Web yang Dikecilkan. Ini Mobile Native Sesungguhnya.",
    description: "Banyak vendor ERP mengambil jalan pintas dengan membungkus website responsif menjadi aplikasi (Web Wrapper/PWA). BizOps Mobile dibangun dari nol secara Native (Flutter Engine) untuk performa 60 FPS yang mulus dan pengalaman offline-first yang handal di lapangan.",
    icon: Smartphone,
    features: [
      { title: "Offline-First Architecture", desc: "Data operasional kritis (Katalog, Tugas, Laporan) disimpan dalam database lokal (SQLite). Sync otomatis saat sinyal kembali." },
      { title: "Deep Hardware Integration", desc: "Akses kamera level rendah untuk scan barcode milidetik dan login biometrik (FaceID/Fingerprint) yang aman." },
      { title: "Precise Geolocation (Anti-Mock)", desc: "Mengakses data raw GNSS untuk mendeteksi Fake GPS. Memblokir absensi jika terdeteksi injeksi lokasi palsu." },
      { title: "Battery Optimization", desc: "Mendukung Dark Mode native yang hemat baterai AMOLED hingga 30% untuk penggunaan durasi panjang di lapangan." }
    ]
  },
  'self-hosted': {
    title: "Self-Hosted Deployment",
    subtitle: "Infrastruktur Anda, Kendali Penuh Anda.",
    description: "BizOps dirancang agnostik terhadap infrastruktur. Jalankan di Bare Metal Server kantor, Private Cloud (AWS/GCP), atau Hybrid. Kebebasan topologi sesuai standar keamanan TI perusahaan Anda.",
    icon: Server,
    features: [
      { title: "Docker Containerization", desc: "Image Docker resmi yang terisolasi dan production-ready. Deployment < 15 menit dan mudah di-rollback." },
      { title: "Kubernetes (K8s) Ready", desc: "Kompatibel penuh untuk orkestrasi tingkat lanjut: High Availability (HA), Self-healing pods, dan Auto-scaling." },
      { title: "Bare Metal Performance", desc: "Opsi instalasi langsung di OS Linux (Ubuntu/Debian) untuk performa I/O database maksimal tanpa overhead virtualisasi." },
      { title: "Automated Offsite Backups", desc: "Skrip backup otomatis (Database & Files) yang terenkripsi dan diupload ke S3-compatible storage pilihan Anda." }
    ],
    extraSection: {
      title: "Server Requirements Sizing Guide",
      type: "table",
      headers: ["Scale", "Users", "Spec Recommendation", "Topology"],
      rows: [
        ["Small", "< 50", "2 vCPU, 4GB RAM", "Single Node (All-in-One)"],
        ["Medium", "50 - 200", "4 vCPU, 8GB RAM", "Single Node + Redis Cache"],
        ["Enterprise", "> 500", "8 vCPU, 16GB RAM, DB Dedicated", "Multi-tier (LB + App + DB)"]
      ]
    }
  },
  'integration': {
    title: "Integration Architecture",
    subtitle: "API-First: Terhubung Secara Native dengan Dunia Luar.",
    description: "BizOps bukan pulau terisolasi. Setiap data (DocType) dan fungsi memiliki API Endpoint yang terbuka. Hubungkan dengan sistem legacy, IoT, atau aplikasi pihak ketiga tanpa batasan.",
    icon: Share2,
    features: [
      { title: "RESTful API Standard", desc: "Akses CRUD JSON untuk ribuan objek data. Mendukung filter kompleks, sorting, dan pagination bawaan." },
      { title: "Webhooks (Event-Driven)", desc: "Notifikasi real-time ke sistem lain saat event terjadi (misal: 'Saat PO dibuat -> Kirim data ke WMS Gudang')." },
      { title: "Server Script Injection", desc: "Sisipkan logika Python kustom di sisi server untuk manipulasi data payload sebelum disimpan atau setelah diambil." },
      { title: "OAuth 2.0 & Token Auth", desc: "Standar keamanan industri untuk otentikasi integrasi pihak ketiga yang aman (SSO Ready)." }
    ]
  },
  'collaboration': {
    title: "Contextual Collaboration",
    subtitle: "Hentikan 'Ping-Pong' Chat di WhatsApp yang Membingungkan.",
    description: "Masalah terbesar komunikasi kerja adalah hilangnya konteks. BizOps menyatukan percakapan dengan data. Diskusikan pekerjaan tepat di tempat pekerjaan itu berada (Dokumen Transaksi).",
    icon: MessageSquare,
    features: [
      { title: "Document-Based Chat (Raven)", desc: "Setiap dokumen (Invoice, Task, Project) memiliki panel chat terdedikasi. Diskusi menempel selamanya pada konteksnya." },
      { title: "Smart Mentions & Notifications", desc: "Gunakan @User atau @Role untuk memanggil rekan kerja. Notifikasi push instan memastikan respon cepat." },
      { title: "Audit Trail of Communication", desc: "Percakapan bisnis menjadi bagian dari sejarah dokumen. Bukti pendukung keputusan yang tidak bisa dihapus sembarangan." },
      { title: "Integrated File Sharing", desc: "Drag-and-drop file pendukung langsung ke kolom chat. Sentralisasi dokumen agar tidak tercecer di chat pribadi." }
    ]
  },
  'whitelabel': {
    title: "Whitelabel Platform",
    subtitle: "Sistem Kami, Identitas Brand Anda.",
    description: "Kami menyediakan infrastruktur 'Invisible Engine'. Kemampuan re-skinning total memastikan klien hanya melihat brand perusahaan Anda, bukan BizOps. Transformasi identitas platform secara menyeluruh.",
    icon: Layers,
    features: [
      { title: "Web Dashboard Re-Skinning", desc: "Ganti logo, favicon, login background, dan skema warna CSS global sesuai Brand Guidelines korporat Anda." },
      { title: "Mobile App Re-Build Service", desc: "Kami mengkompilasi ulang (re-build) APK/IPA dengan Package ID unik dan App Icon milik Anda. Terpisah dari app publik." },
      { title: "Custom Domain & SSL", desc: "Akses sistem melalui domain Anda sendiri (erp.perusahaankita.com) dengan sertifikat SSL otomatis." },
      { title: "Branded SMTP & Reports", desc: "Email notifikasi dan PDF (Invoice/Slip Gaji) dikirim menggunakan server email dan kop surat perusahaan Anda." }
    ]
  }
};

// --- INTEGRATION LIBRARY ---
export const integrationsData = [
  { 
    category: "ERP & Accounting Sync", 
    desc: "Sinkronisasi jurnal dan data master.",
    apps: [
      { name: "SAP Connector", desc: "Sinkronisasi dua arah Jurnal GL & Material Master. Cocok untuk anak perusahaan." },
      { name: "Odoo Connector", desc: "Sync Stok & Sales Order real-time untuk ritel." },
      { name: "Jurnal.id / Accurate", desc: "Ekspor data transaksi harian ke software akuntansi lokal." }
    ] 
  },
  { 
    category: "Communication & Notification", 
    desc: "Notifikasi real-time ke kanal tim.",
    apps: [
      { name: "WAHA (WhatsApp API)", desc: "Kirim OTP, Slip Gaji, dan Approval PO via WhatsApp pribadi." },
      { name: "Slack / Teams", desc: "Bot notifikasi status proyek ke channel tim." },
      { name: "Telegram Bot", desc: "Alternatif notifikasi ringan dan gratis." }
    ] 
  },
  { 
    category: "Banking & Payment", 
    desc: "Rekonsiliasi dan pembayaran otomatis.",
    apps: [
      { name: "KlikBCA / Mandiri MCM", desc: "Baca file MT940/CSV mutasi bank untuk rekonsiliasi otomatis." },
      { name: "Xendit / Midtrans", desc: "Payment Link otomatis pada Invoice. Status lunas realtime." }
    ] 
  },
  { 
    category: "E-Commerce Omnichannel", 
    desc: "Tarik pesanan marketplace otomatis.",
    apps: [
      { name: "Tokopedia / Shopee", desc: "Tarik Sales Order & potong stok inventory di semua channel." },
      { name: "TikTok Shop", desc: "Integrasi pesanan social commerce." }
    ] 
  },
  { 
    category: "Hardware & IoT", 
    desc: "Koneksi ke perangkat fisik.",
    apps: [
      { name: "ZKTeco / Hikvision", desc: "Tarik log absensi mentah via ADMS Protocol." },
      { name: "Jembatan Timbang", desc: "Baca berat truk langsung ke form Goods Receipt." }
    ] 
  }
];
