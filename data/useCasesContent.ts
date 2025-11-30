import { 
  Briefcase, 
  Settings, 
  Link as LinkIcon, 
  ShoppingCart, 
  Truck, 
  BarChart3, 
  LucideIcon,
  Hammer,
  Activity,
  Utensils,
  GraduationCap,
  Clock,
  Building,
  Wrench,
  Sprout,
  Landmark,
  HeartHandshake,
  Cpu,
  Smartphone,
  ClipboardList,
  RefreshCw,
  Users,
  Box,
  TrendingUp,
  Stethoscope,
  HardHat,
  QrCode,
  CalendarCheck,
  Beef,
  Factory,
  Network
} from 'lucide-react';

export interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  icon: LucideIcon;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  color: string; // tailwind color class e.g. "blue"
  category: "Finance & Accounting" | "Supply Chain Management" | "Human Resources" | "Sales & CRM" | "Manufacturing & Production" | "Project Management" | "Asset Management" | "Operations"; // Core Modules + Operations fallback
}

export const useCasesData: Record<string, UseCase> = {
  // --- 1. RETAIL & DISTRIBUTION (3 Cases) ---
  'complex-incentive': {
    id: 'complex-incentive',
    title: "Complex Incentive Scheme",
    subtitle: "Automating Multi-Tier Sales Commissions",
    industry: "Retail & Distribution",
    icon: Briefcase,
    color: "green",
    category: "Sales & CRM",
    challenge: "Klien memiliki skema komisi 5 lapis yang melibatkan margin produk, tenor pembayaran, target tim, dan performa individu. Perhitungan manual memakan waktu 1 minggu setiap bulan dan rawan error.",
    solution: "Kami membangun 'Commission Engine' kustom di atas modul Sales BizOps. Engine ini mengambil data real-time dari faktur dan pelunasan, lalu menghitung insentif setiap malam (batch processing).",
    results: [
      "Waktu perhitungan terpangkas dari 7 hari menjadi 15 menit.",
      "Akurasi perhitungan 100% (zero dispute dari sales team).",
      "Salesman bisa melihat estimasi komisi harian via Mobile App."
    ],
    techStack: ["Python Sales Script", "Redis Queue", "Flutter Mobile App"]
  },
  'sales-route-optimization': {
    id: 'sales-route-optimization',
    title: "Sales Route Optimization",
    subtitle: "AI-Powered Visit Planning",
    industry: "Retail & Distribution",
    icon: Smartphone,
    color: "indigo",
    category: "Sales & CRM", // Better fit than Operations
    challenge: "Distributor FMCG dengan 500+ salesman kanvas sering tidak efisien dalam kunjungan toko. Banyak toko tutup saat dikunjungi atau rute tumpang tindih antar salesman.",
    solution: "Aplikasi Sales Force Automation (SFA) dengan fitur Route Planning cerdas. Sistem merekomendasikan rute harian berdasarkan lokasi toko, riwayat pembelian, dan traffic real-time.",
    results: [
      "Jumlah kunjungan efektif naik 30% per hari.",
      "Biaya BBM armada turun 15%.",
      "Order taking langsung sync ke gudang pusat."
    ],
    techStack: ["Google Maps API", "SFA Mobile App", "Route Algorithm"]
  },
  'smart-replenishment': {
    id: 'smart-replenishment',
    title: "Auto Replenishment System",
    subtitle: "Preventing Stock-outs with AI",
    industry: "Retail & Distribution",
    icon: RefreshCw,
    color: "cyan",
    category: "Supply Chain Management",
    challenge: "Jaringan minimarket sering mengalami kekosongan stok barang laku (Pareto A) di rak, sementara barang lambat laku menumpuk di gudang toko.",
    solution: "Algoritma Auto-Replenishment yang menganalisis tren penjualan harian (Average Daily Sales) dan Lead Time pengiriman. Sistem otomatis membuat Purchase Order (PO) saran ke DC.",
    results: [
      "Lost sales akibat stock-out turun drastis.",
      "Inventory Turnover Ratio membaik 2x lipat.",
      "Pekerjaan admin toko untuk order manual hilang."
    ],
    techStack: ["Python Pandas", "Forecasting Engine", "Auto-PO Script"]
  },
  'mlm-commission-system': {
    id: 'mlm-commission-system',
    title: "MLM Commission System",
    subtitle: "Multi-Level Marketing Network Management",
    industry: "Retail & Distribution",
    icon: Network,
    color: "violet",
    category: "Sales & CRM",
    challenge: "Perusahaan MLM kesulitan menghitung bonus downline yang kompleks (Pairing Bonus, Sponsor Bonus, Reward Point) saat jaringan member mencapai ribuan. Excel sudah tidak mampu menangani logika hierarki.",
    solution: "Sistem Manajemen Jaringan MLM Terintegrasi. Member bisa melihat pohon jaringan (Genealogy Tree) dan bonus statement real-time. Perhitungan bonus otomatis setiap malam.",
    results: [
      "Perhitungan bonus 100% akurat dan transparan bagi member.",
      "Payout bonus bisa dilakukan massal (batch transfer).",
      "Rekrutmen member baru lebih cepat via referral link."
    ],
    techStack: ["Genealogy Tree Algo", "E-Wallet Integration", "Member Portal"]
  },
  
  // --- 2. MANUFACTURING (3 Cases) ---
  'specialized-manufacturing': {
    id: 'specialized-manufacturing',
    title: "Garment Waste Management",
    subtitle: "Auto-Calculation of Material Waste",
    industry: "Manufacturing",
    icon: Settings,
    color: "blue",
    category: "Manufacturing & Production",
    challenge: "Pabrik garmen kesulitan melacak sisa kain (waste) produksi. Stok kain di gudang sering tidak sesuai fisik karena pencatatan manual potongan pola yang rumit.",
    solution: "Modul 'Smart Cutting' yang terintegrasi dengan BOM (Bill of Materials). Sistem otomatis menghitung estimasi waste berdasarkan pola potong dan mengurangi stok gudang secara presisi.",
    results: [
      "Pengurangan waste material hingga 12% dalam 3 bulan.",
      "Stok opname menjadi lebih cepat dan akurat.",
      "HPP (Harga Pokok Produksi) menjadi lebih presisi."
    ],
    techStack: ["Custom DocType", "Client Script (JS)", "IoT Integration"]
  },
  'machine-maintenance-oee': {
    id: 'machine-maintenance-oee',
    title: "IoT Machine Monitoring",
    subtitle: "Real-time OEE Dashboard",
    industry: "Manufacturing",
    icon: Cpu,
    color: "rose",
    category: "Asset Management", // More specific than Operations
    challenge: "Manajer pabrik buta terhadap efektivitas mesin (OEE). Data downtime mesin baru dilaporkan di akhir shift secara manual, seringkali tidak akurat.",
    solution: "Pemasangan sensor IoT pada mesin produksi yang terhubung langsung ke BizOps Manufacturing. Status mesin (Running/Stop/Error) tercatat detik-per-detik.",
    results: [
      "OEE (Overall Equipment Effectiveness) naik 18%.",
      "Response time teknisi maintenance lebih cepat (auto-alert).",
      "Analisis penyebab downtime berbasis data akurat."
    ],
    techStack: ["MQTT Protocol", "IoT Gateway", "Real-time Chart"]
  },
  'subcontracting-portal': {
    id: 'subcontracting-portal',
    title: "Subcontracting Portal",
    subtitle: "Vendor Material Tracking",
    industry: "Manufacturing",
    icon: Factory,
    color: "slate",
    category: "Supply Chain Management",
    challenge: "Pabrik otomotif kesulitan melacak stok bahan baku yang dikirim ke vendor makloon (subkon). Sering terjadi selisih stok antara catatan pabrik dan vendor.",
    solution: "Vendor Portal khusus Subkon. Vendor input hasil produksi dan sisa bahan baku via portal. Sistem otomatis merekonsiliasi stok virtual di lokasi vendor.",
    results: [
      "Selisih stok bahan baku di vendor 0%.",
      "Tagihan jasa makloon otomatis tervalidasi hasil produksi.",
      "Transparansi progres produksi di sisi vendor."
    ],
    techStack: ["Vendor Portal", "Stock Reconciliation", "Barcode"]
  },

  // --- 3. SUPPLY CHAIN (2 Cases) ---
  'vendor-portal': {
    id: 'vendor-portal',
    title: "Exclusive Vendor Portal",
    subtitle: "Digital Procurement & Bidding System",
    industry: "Supply Chain",
    icon: LinkIcon,
    color: "amber",
    category: "Supply Chain Management",
    challenge: "Proses pengadaan barang melibatkan ratusan email dan telepon ke supplier. Transparansi harga dan riwayat penawaran sulit dilacak.",
    solution: "Web Portal berbasis React yang terhubung ke BizOps Backend. Vendor login untuk melihat RFQ (Request for Quotation), submit penawaran harga, dan upload invoice penagihan.",
    results: [
      "Cycle time pengadaan lebih cepat 40%.",
      "Vendor database terpusat dan terrating otomatis.",
      "Dokumentasi audit trail pengadaan yang lengkap."
    ],
    techStack: ["React.js Portal", "Rest API", "Socket.io Realtime"]
  },
  'demand-forecasting': {
    id: 'demand-forecasting',
    title: "AI Demand Forecasting",
    subtitle: "Predictive Inventory Planning",
    industry: "Supply Chain",
    icon: TrendingUp,
    color: "purple",
    category: "Supply Chain Management",
    challenge: "Distributor sering overstock barang seasonal setelah musim berakhir, menyebabkan kerugian dead stock yang besar.",
    solution: "Modul Forecasting berbasis Machine Learning yang mempelajari pola penjualan historis 3 tahun terakhir, tren musiman, dan event kalender.",
    results: [
      "Inventory holding cost turun 20%.",
      "Akurasi perencanaan pembelian meningkat.",
      "Kesiapan stok saat peak season terjamin."
    ],
    techStack: ["Python Scikit-Learn", "Historical Data Analysis", "Planner Dashboard"]
  },

  // --- 4. RETAIL (E-COMMERCE) (2 Cases) ---
  'pos-omnichannel': {
    id: 'pos-omnichannel',
    title: "Omnichannel POS Integration",
    subtitle: "Syncing Offline Stores & Marketplace",
    industry: "Retail",
    icon: ShoppingCart,
    color: "purple",
    category: "Sales & CRM",
    challenge: "Stok di toko fisik dan e-commerce (Tokopedia/Shopee) sering selisih (overselling). Staff harus update stok manual di banyak dashboard.",
    solution: "Middleware kustom yang menyinkronkan inventori BizOps dengan API Marketplace secara real-time (2-way sync). Transaksi POS toko langsung memotong stok online.",
    results: [
      "Zero overselling saat event Harbolnas.",
      "Efisiensi admin stok meningkat 80%.",
      "Laporan penjualan gabungan tersedia real-time."
    ],
    techStack: ["Node.js Middleware", "Marketplace API", "Webhook"]
  },
  'loyalty-membership': {
    id: 'loyalty-membership',
    title: "Unified Loyalty Program",
    subtitle: "Cross-Channel Point System",
    industry: "Retail",
    icon: HeartHandshake,
    color: "pink",
    category: "Sales & CRM",
    challenge: "Customer belanja di toko fisik tidak bisa redeem poin di website, dan sebaliknya. Data pelanggan terpecah-pecah.",
    solution: "Sistem Membership Terpusat. Poin belanja dari POS toko, Website, dan App masuk ke satu akun pelanggan. Redeem bisa dilakukan di channel mana saja.",
    results: [
      "Customer retention rate naik 25%.",
      "Database pelanggan menjadi aset berharga (Single ID).",
      "Program promo lebih terarah berdasarkan riwayat belanja."
    ],
    techStack: ["Loyalty Engine", "API Gateway", "Customer App"]
  },

  // --- 5. LOGISTICS (2 Cases) ---
  'fleet-telematics': {
    id: 'fleet-telematics',
    title: "Fleet Telematics Connector",
    subtitle: "GPS Data into ERP Asset Management",
    industry: "Logistics",
    icon: Truck,
    color: "red",
    category: "Asset Management",
    challenge: "Biaya maintenance truk membengkak karena jadwal servis sering terlewat. Data KM (kilometer) dicatat manual oleh supir dan sering dimanipulasi.",
    solution: "Integrasi API GPS Tracker langsung ke modul Asset BizOps. Maintenance schedule otomatis terbuat (trigger) saat KM mencapai batas servis.",
    results: [
      "Biaya breakdown maintenance turun 25%.",
      "Pencegahan fraud bahan bakar dan servis fiktif.",
      "Masa pakai armada meningkat signifikan."
    ],
    techStack: ["GPS API Integration", "Scheduled Job", "Mapbox Viz"]
  },
  'last-mile-tracking': {
    id: 'last-mile-tracking',
    title: "Last Mile Delivery App",
    subtitle: "Real-time Proof of Delivery",
    industry: "Logistics",
    icon: Box,
    color: "orange",
    category: "Supply Chain Management", // Better than Operations
    challenge: "Customer sering komplain barang belum sampai padahal status 'delivered'. Kurir sulit membuktikan pengiriman sukses karena bukti fisik hilang.",
    solution: "Mobile App untuk Kurir. Wajib foto penerima & tanda tangan digital saat serah terima barang. Koordinat GPS & Timestamp tercatat otomatis.",
    results: [
      "Komplain pengiriman palsu hilang 100%.",
      "Invoice penagihan ke customer bisa langsung terbit (real-time).",
      "Tracking resi transparan bagi customer."
    ],
    techStack: ["Flutter App", "Geotagging", "Digital Signature"]
  },

  // --- 6. CONSTRUCTION (2 Cases) ---
  'project-budget-control': {
    id: 'project-budget-control',
    title: "Project Budget Control",
    subtitle: "Real-time RAB vs Realization Tracking",
    industry: "Construction",
    icon: Hammer,
    color: "orange",
    category: "Project Management",
    challenge: "Kontraktor sering mengalami over-budget karena realisasi biaya material dan upah tukang baru ketahuan saat proyek selesai. Sulit memantau progress fisik vs biaya secara real-time.",
    solution: "Implementasi modul Project dengan fitur 'Budget Lock'. Setiap PR (Purchase Request) material otomatis divalidasi terhadap sisa budget RAB pos terkait. Peringatan dini jika mendekati limit.",
    results: [
      "Over-budget ditekan hingga di bawah 5%.",
      "Laporan Laba/Rugi per proyek tersedia harian.",
      "Kontrol material di site lebih ketat."
    ],
    techStack: ["Python Budget Validator", "Mobile Approval", "Project Dashboard"]
  },
  'daily-site-report': {
    id: 'daily-site-report',
    title: "Digital Site Report",
    subtitle: "Mandor Daily Progress Input",
    industry: "Construction",
    icon: HardHat,
    color: "yellow",
    category: "Project Management",
    challenge: "Laporan harian proyek (LHP) dari lapangan sering terlambat berhari-hari dan tulisan tangan sulit dibaca. Progress proyek di kantor pusat tidak update.",
    solution: "Aplikasi Lapangan untuk Mandor/Site Manager. Input progress fisik (%), jumlah pekerja, dan cuaca hari itu langsung dari HP. Foto progres wajib diupload.",
    results: [
      "Monitoring progress proyek real-time dari kantor pusat.",
      "Tagihan termin ke owner proyek lebih cepat cair.",
      "History kendala lapangan terekam rapi."
    ],
    techStack: ["Mobile Web App", "Image Compression", "Progress S-Curve"]
  },

  // --- 7. F&B (2 Cases) ---
  'central-kitchen': {
    id: 'central-kitchen',
    title: "Central Kitchen Management",
    subtitle: "Recipe Costing & Inter-Branch Transfer",
    industry: "Food & Beverage",
    icon: Utensils,
    color: "rose",
    category: "Manufacturing & Production", // Fits CK nature
    challenge: "Restoran chain dengan 20 outlet kesulitan menjaga konsistensi rasa dan HPP. Transfer bahan baku dari dapur pusat ke outlet sering selisih dan tidak tercatat.",
    solution: "Sistem Central Kitchen terintegrasi. Order bahan baku dari outlet otomatis memotong stok CK. HPP dihitung otomatis berdasarkan resep (BOM) dan yield loss.",
    results: [
      "Food cost turun 8% karena kontrol waste yang baik.",
      "Proses restock outlet otomatis dan paperless.",
      "Analisis menu terlaris dan paling profitabel akurat."
    ],
    techStack: ["Recipe Management", "Auto-Replenishment", "Kitchen Display"]
  },
  'qr-table-order': {
    id: 'qr-table-order',
    title: "QR Table Order",
    subtitle: "Self-Service Ordering System",
    industry: "Food & Beverage",
    icon: QrCode,
    color: "emerald",
    category: "Sales & CRM",
    challenge: "Kekurangan pelayan saat jam sibuk membuat pelanggan menunggu lama untuk pesan menu dan bayar. Potensi lost sales tinggi.",
    solution: "Sistem QR Code di setiap meja. Pelanggan scan, pilih menu, dan bayar langsung (e-wallet). Pesanan otomatis tercetak di printer dapur dan bar.",
    results: [
      "Omset naik 15% berkat kemudahan pesan tambah (add-on).",
      "Kebutuhan waiter berkurang 30%.",
      "Kesalahan catat pesanan menjadi 0."
    ],
    techStack: ["QR Menu Web", "Payment Gateway", "Kitchen Printer"]
  },

  // --- 8. HEALTHCARE (2 Cases) ---
  'pharmacy-inventory': {
    id: 'pharmacy-inventory',
    title: "Smart Pharmacy Inventory",
    subtitle: "Batch Tracking & Expiry Management",
    industry: "Healthcare",
    icon: Activity,
    color: "teal",
    category: "Supply Chain Management", // Inventory is SCM
    challenge: "Apotek rumah sakit sering mengalami kerugian akibat obat kadaluarsa (expired) yang tidak terpantau dan stok out-of-stock untuk obat vital.",
    solution: "Sistem inventori FEFO (First Expired First Out) ketat. Notifikasi otomatis 3 bulan sebelum ED. Integrasi resep dokter digital langsung memotong stok farmasi.",
    results: [
      "Kerugian akibat obat expired turun 90%.",
      "Waktu tunggu pasien di farmasi lebih cepat 50%.",
      "Audit BPOM menjadi sangat mudah dengan batch tracing."
    ],
    techStack: ["Batch Management", "Notification Engine", "HL7 Integration"]
  },
  'emr-integration': {
    id: 'emr-integration',
    title: "Clinic EMR System",
    subtitle: "Electronic Medical Records",
    industry: "Healthcare",
    icon: Stethoscope,
    color: "sky",
    category: "Operations",
    challenge: "Klinik pratama masih menggunakan rekam medis kertas yang sering hilang, sulit dibaca, dan memakan tempat penyimpanan arsip.",
    solution: "Modul Rekam Medis Elektronik (RME). Dokter input diagnosa (ICD-10) dan resep obat digital. Riwayat pasien tersimpan aman dan mudah dicari.",
    results: [
      "Efisiensi ruang arsip 100% (paperless).",
      "Pelaporan ke SatuSehat Kemenkes otomatis.",
      "Kontinuitas perawatan pasien lebih baik."
    ],
    techStack: ["ICD-10 Database", "SatuSehat API", "Secure Storage"]
  },

  // --- 9. PROFESSIONAL SERVICES (2 Cases) ---
  'consulting-timesheet': {
    id: 'consulting-timesheet',
    title: "Billable Hours Automation",
    subtitle: "Timesheet to Invoice Conversion",
    industry: "Services",
    icon: Clock,
    color: "indigo",
    category: "Human Resources", // Timesheet is HR/Project
    challenge: "Firma konsultan hukum kesulitan menagih klien secara akurat karena pencatatan jam kerja konsultan (timesheet) manual dan sering lupa.",
    solution: "Mobile Timesheet App yang mudah digunakan. Konsultan input jam kerja per project/klien. Di akhir bulan, sistem otomatis generate draft invoice berdasarkan rate card masing-masing konsultan.",
    results: [
      "Revenue leakage (jam tak tertagih) berkurang drastis.",
      "Proses billing bulanan selesai dalam 1 hari (sebelumnya 5 hari).",
      "Transparansi detail aktivitas ke klien meningkat."
    ],
    techStack: ["Mobile App", "Billing Engine", "Client Portal"]
  },
  'subscription-billing': {
    id: 'subscription-billing',
    title: "Subscription Management",
    subtitle: "Recurring Billing for Agencies",
    industry: "Services",
    icon: CalendarCheck,
    color: "violet",
    category: "Finance & Accounting",
    challenge: "Agensi digital marketing kewalahan mengelola ratusan invoice bulanan (retainer) dengan tanggal jatuh tempo berbeda-beda. Penagihan sering telat.",
    solution: "Modul Subscription Otomatis. Invoice retainer terbit dan terkirim via email otomatis setiap tanggal 1. Integrasi payment link untuk auto-debet.",
    results: [
      "Cashflow lebih stabil dan terprediksi.",
      "Tunggakan pembayaran klien turun 40%.",
      "Admin finance fokus ke analisis, bukan buat invoice."
    ],
    techStack: ["Recurring Invoice", "Email Automation", "Payment Gateway"]
  },

  // --- 10. REAL ESTATE (2 Cases) ---
  'tenant-management': {
    id: 'tenant-management',
    title: "Building Tenant Portal",
    subtitle: "Automated Utility Billing & Service Request",
    industry: "Real Estate",
    icon: Building,
    color: "cyan",
    category: "Asset Management", // Property is Asset
    challenge: "Pengelola gedung perkantoran kewalahan menangani tagihan listrik/air tenant yang bervariasi dan komplain kerusakan fasilitas yang via WhatsApp tidak terkelola.",
    solution: "Tenant Portal terintegrasi. Meteran IoT kirim data penggunaan langsung ke sistem billing. Tenant bisa lapor kerusakan, booking ruang meeting, dan bayar sewa via aplikasi.",
    results: [
      "Penagihan utility 100% otomatis dan akurat.",
      "SLA penanganan komplain tenant meningkat.",
      "Cashflow lebih lancar dengan payment gateway integration."
    ],
    techStack: ["IoT Metering", "Tenant App", "Helpdesk Module"]
  },
  'property-sales-booking': {
    id: 'property-sales-booking',
    title: "Property Unit Booking",
    subtitle: "Visual Unit Selection & Payment",
    industry: "Real Estate",
    icon: Landmark,
    color: "blue",
    category: "Sales & CRM",
    challenge: "Developer properti sering double-booking unit apartemen saat launching karena update status terjual manual antar sales marketing.",
    solution: "Sistem Booking Unit Real-time. Visual Siteplan interaktif menunjukkan status unit (Available, Booked, Sold). Booking fee mengunci unit otomatis.",
    results: [
      "Zero double-booking incident saat grand launching.",
      "Laporan penjualan unit real-time untuk manajemen.",
      "Proses PPJB dokumen lebih cepat."
    ],
    techStack: ["Interactive SVG Map", "Booking Engine", "Document Generator"]
  },

  // --- 11. EDUCATION (2 Cases) ---
  'school-academic': {
    id: 'school-academic',
    title: "Integrated Academic System",
    subtitle: "Student Lifecycle Management",
    industry: "Education",
    icon: GraduationCap,
    color: "sky",
    category: "Operations", // Academic is core ops
    challenge: "Sekolah internasional dengan 2000 siswa memiliki data terpisah antar departemen (Akademik, Keuangan, Perpustakaan). Orang tua sulit memantau perkembangan anak.",
    solution: "One-Stop Education ERP. Data siswa dari pendaftaran, nilai, absensi, hingga tagihan SPP terpusat. Parent Portal untuk akses raport dan status pembayaran.",
    results: [
      "Tunggakan SPP berkurang 30% berkat reminder otomatis.",
      "Guru hemat waktu administrasi 40%.",
      "Komunikasi sekolah dan orang tua lebih seamless."
    ],
    techStack: ["LMS Integration", "Parent Portal", "Finance Module"]
  },
  'asset-lending-library': {
    id: 'asset-lending-library',
    title: "Campus Asset Lending",
    subtitle: "Lab & Library Management",
    industry: "Education",
    icon: ClipboardList,
    color: "lime",
    category: "Asset Management",
    challenge: "Universitas sering kehilangan peralatan lab mahal dan buku perpustakaan karena pencatatan peminjaman mahasiswa masih manual di buku besar.",
    solution: "Sistem Peminjaman Aset Digital. Mahasiswa scan KTM (Kartu Tanda Mahasiswa) untuk pinjam barang. Notifikasi denda otomatis jika telat kembali.",
    results: [
      "Kehilangan aset kampus turun drastis.",
      "Tracking lokasi alat lab menjadi mudah.",
      "Pendapatan dari denda keterlambatan terkelola transparan."
    ],
    techStack: ["Barcode Scanner", "Fine Calculation", "Student Portal"]
  },

  // --- 12. AUTOMOTIVE (2 Cases) ---
  'workshop-management': {
    id: 'workshop-management',
    title: "Digital Workshop Flow",
    subtitle: "Job Order & Sparepart Tracking",
    industry: "Automotive",
    icon: Wrench,
    color: "slate",
    category: "Operations",
    challenge: "Bengkel resmi sering kehilangan sparepart dan mekanik bekerja tidak efisien karena antrian servis tidak teratur. Estimasi biaya ke customer sering meleset.",
    solution: "Sistem Manajemen Bengkel End-to-End. Booking servis online, tablet untuk mekanik (update status pengerjaan), dan pengambilan sparepart wajib scan barcode WO (Work Order).",
    results: [
      "Kapasitas servis harian naik 20%.",
      "Selisih stok sparepart menjadi 0%.",
      "Kepercayaan customer meningkat dengan transparansi progres."
    ],
    techStack: ["Tablet Interface", "Barcode Scanning", "Booking System"]
  },
  'showroom-crm': {
    id: 'showroom-crm',
    title: "Showroom CRM & Leads",
    subtitle: "Test Drive & Sales Tracking",
    industry: "Automotive",
    icon: Users,
    color: "red",
    category: "Sales & CRM",
    challenge: "Sales showroom mobil sering lupa follow-up calon pembeli potensial setelah test drive. Database prospek tidak terpusat.",
    solution: "CRM Khusus Otomotif. Jadwal test drive terintegrasi kalender. Reminder otomatis untuk follow-up H+1, H+3, H+7. Tracking status SPK.",
    results: [
      "Konversi test-drive ke penjualan naik 15%.",
      "Database prospek aman milik perusahaan, bukan sales pribadi.",
      "Manajemen unit display lebih teratur."
    ],
    techStack: ["CRM Pipeline", "Calendar Sync", "WhatsApp Integration"]
  },

  // --- 13. AGRICULTURE (2 Cases) ---
  'harvest-tracking': {
    id: 'harvest-tracking',
    title: "Precision Farming ERP",
    subtitle: "Crop Cycle & Yield Analysis",
    industry: "Agriculture",
    icon: Sprout,
    color: "lime",
    category: "Manufacturing & Production", // Farming is Production
    challenge: "Perusahaan sawit kesulitan memantau produktivitas per blok lahan dan mencegah pencurian hasil panen saat transportasi ke pabrik.",
    solution: "Aplikasi Panen Mobile. Mandor scan QR code blok dan catat hasil panen di lapangan (offline-first). Timbangan digital di pabrik terintegrasi validasi data pengiriman.",
    results: [
      "Yield per hektar terpetakan akurat untuk analisis pupuk.",
      "Kebocoran hasil panen saat transportasi hilang.",
      "Gaji pemanen dihitung otomatis berdasarkan performa."
    ],
    techStack: ["Offline-first App", "IoT Scale", "GIS Mapping"]
  },
  'livestock-management': {
    id: 'livestock-management',
    title: "Livestock Health Tracking",
    subtitle: "Cattle Lifecycle Management",
    industry: "Agriculture",
    icon: Beef,
    color: "amber",
    category: "Asset Management", // Livestock is Bio-Asset
    challenge: "Peternakan sapi potong dengan 1000 ekor sulit melacak riwayat kesehatan, vaksinasi, dan pertambahan bobot harian (ADG) tiap sapi secara manual.",
    solution: "Sistem Manajemen Ternak dengan RFID Ear Tag. Scan tag untuk input data timbang, sakit, atau kawin. Grafik pertumbuhan bobot otomatis terbentuk.",
    results: [
      "Deteksi dini sapi sakit lebih cepat.",
      "Seleksi bibit unggul berbasis data riil.",
      "Perencanaan pakan lebih efisien sesuai bobot."
    ],
    techStack: ["RFID Reader", "Growth Chart", "Health Log"]
  },
  
  // --- 14. NON-PROFIT (1 Case) ---
  'ngo-fund-tracking': {
    id: 'ngo-fund-tracking',
    title: "Transparent Fund Tracking",
    subtitle: "Donor Reporting & Program Allocation",
    industry: "Non-Profit",
    icon: HeartHandshake,
    color: "pink",
    category: "Finance & Accounting",
    challenge: "NGO internasional kesulitan membuat laporan pertanggungjawaban dana ke donor yang spesifik per program/negara. Dana operasional dan dana bantuan sering tercampur.",
    solution: "Sistem Akuntansi Dana (Fund Accounting). Setiap donasi ditagging ke 'Cost Center' program spesifik. Laporan penggunaan dana real-time tersedia untuk donor via portal.",
    results: [
      "Kepercayaan donor meningkat signifikan.",
      "Waktu pembuatan laporan audit tahunan berkurang 60%.",
      "Alokasi dana bantuan lebih tepat sasaran."
    ],
    techStack: ["Cost Center Mgmt", "Donor Portal", "Multi-currency"]
  }
};
