
import { Wrench, Code, GraduationCap, Headphones } from 'lucide-react';

// --- SERVICES DATA ---
export const servicesData: Record<string, any> = {
  'implementation': {
    title: "Implementation & Migration",
    subtitle: "Kami Memastikan Sistem Anda Berjalan, Bukan Sekadar Terinstall.",
    description: "Layanan implementasi profesional dengan metodologi 'Sprint'. Kami menangani migrasi data legacy, konfigurasi server, dan manajemen perubahan.",
    icon: Wrench,
    methodology: [
      { title: "Discovery & Blueprint", desc: "Audit proses As-Is vs To-Be dan identifikasi Gap Analysis." },
      { title: "Configuration & Migration", desc: "Setup infrastruktur dan pembersihan data legacy (Data Cleansing)." },
      { title: "UAT (User Acceptance Test)", desc: "Simulasi transaksi riil oleh Key Users sebelum Go-Live." },
      { title: "Hypercare", desc: "Pendampingan intensif 2 minggu pertama pasca peluncuran." }
    ],
    cta: "Konsultasi Paket Implementasi"
  },
  'custom-dev': {
    title: "Custom Development",
    subtitle: "Fitur Standar Tidak Cukup? Kami Bangunkan Untuk Anda.",
    description: "Layanan pengembangan modul kustom di atas BizOps. Buat fitur unik sesuai kebutuhan bisnis spesifik Anda tanpa merusak inti sistem.",
    icon: Code,
    methodology: [
      { title: "Upgrade-Safe Architecture", desc: "Kode kustom terisolasi sebagai App terpisah, tidak hilang saat update core." },
      { title: "Rapid Development", desc: "5x lebih cepat menggunakan Frappe Framework yang sudah matang." },
      { title: "Python & JS", desc: "Stack teknologi modern yang powerful dan mudah dipelihara." },
      { title: "API First", desc: "Modul kustom otomatis memiliki API endpoints." }
    ],
    cta: "Diskusikan Kebutuhan Kustom"
  },
  'training': {
    title: "Training & Academy",
    subtitle: "Investasi Terbesar Adalah Manusia, Bukan Software.",
    description: "Jasa pelatihan user dan admin untuk memastikan adopsi sistem maksimal. Pendekatan Role-Based Training.",
    icon: GraduationCap,
    methodology: [
      { title: "Role-Based Training", desc: "Materi spesifik per departemen, bukan training massal membosankan." },
      { title: "Train the Trainer", desc: "Mencetak Super User internal untuk keberlanjutan jangka panjang." },
      { title: "BizOps Academy LMS", desc: "Akses perpustakaan video tutorial 24/7." },
      { title: "On-Site Bootcamp", desc: "Sesi intensif tatap muka di lokasi pabrik/proyek." }
    ],
    cta: "Lihat Silabus Training"
  },
  'support': {
    title: "Support Plans (SLA)",
    subtitle: "Tenang, Kami Menjaga Sistem Anda 24/7.",
    description: "Paket dukungan teknis dan pemeliharaan sistem. Jaminan respon cepat dan perbaikan bug.",
    icon: Headphones,
    methodology: [
      { title: "Standard Support", desc: "Respon 1x24 jam via Email & Tiket Portal." },
      { title: "Priority Support", desc: "Respon < 4 jam via WhatsApp Business Priority Line." },
      { title: "Managed Service", desc: "Kami mengurus update OS, Database, dan Backup Server Anda." },
      { title: "Security Patching", desc: "Pembaruan keamanan rutin untuk menutup celah kerentanan." }
    ],
    cta: "Download Dokumen SLA"
  }
};

// --- COMPARISON DATA ---
export const comparisonsData: Record<string, any> = {
  'odoo': {
    title: "BizOps vs Odoo Enterprise",
    subtitle: "Alternatif Odoo dengan Pengalaman Mobile & Lokalisasi Indonesia yang Lebih Baik.",
    description: "BizOps hadir sebagai solusi presisi: Baik sebagai Pengganti Total yang lebih lincah, atau sebagai Pelengkap Mobile (Front-end) untuk backend Odoo Anda.",
    competitorName: "Odoo Enterprise",
    type: "matrix",
    headers: ["Aspek Perbandingan", "Odoo Enterprise (Global)", "BizOps (Indonesia Optimized)", "Implikasi Bisnis"],
    rows: [
      { feature: "Mobile User Experience", them: "Web Wrapper (HTML5 Hybrid). Terasa lambat di HP low-end.", us: "Native Flutter App. 60fps, akses hardware cepat.", impact: "Adopsi user lapangan jauh lebih tinggi." },
      { feature: "Offline Capability", them: "Terbatas / Butuh modul 3rd party mahal.", us: "Native Offline-First (SQLite Local DB).", impact: "Operasional jalan terus meski internet mati." },
      { feature: "Indonesian Compliance", them: "Butuh lokalisasi manual/komunitas.", us: "Built-in PPh 21 TER, BPJS & E-Faktur.", impact: "Bebas risiko denda pajak & hemat biaya konsultan." },
      { feature: "Integration Nature", them: "Monolithic Ecosystem.", us: "Modular & Middleware Ready.", impact: "Fleksibilitas arsitektur tanpa vendor lock-in." }
    ],
    strategy: {
      title: "The 'Better Together' Strategy (Two-Tier ERP)",
      scenario: "Sudah investasi mahal di Odoo/SAP untuk Back Office tapi Salesman komplain aplikasi lambat?",
      solution: "Gunakan BizOps sebagai Tier-2 (Front-end) khusus untuk Sales & Operasional Lapangan. Biarkan Odoo tetap menangani Accounting Pusat. Kami jembatani data via API real-time."
    },
    verdict: "Gunakan BizOps jika Anda butuh performa mobile lapangan yang tinggi dan kepatuhan pajak Indonesia tanpa ribet."
  },
  'local-saas': {
    title: "BizOps vs SaaS Lokal",
    subtitle: "Akhiri Fragmentasi Aplikasi. Satu Platform Terpadu untuk Semua.",
    description: "Mengapa perusahaan Anda harus membayar 3 vendor berbeda (Satu untuk HRIS, Satu untuk Akuntansi, Satu untuk CRM) dan pusing mengintegrasikannya?",
    competitorName: "Mekari / Jurnal / Accurate",
    type: "columns",
    features: [
      { 
         title: "Integration & Data Flow",
         them: "Silo (Data Terpisah)",
         us: "Unified (Satu Database)",
         themDesc: "HRIS tidak bicara dengan Accounting. Perlu ekspor-impor Excel manual. Rawan error.",
         usDesc: "Payroll disetujui -> Jurnal beban gaji & hutang pajak otomatis terbentuk detik itu juga."
      },
      { 
         title: "Deployment & Sovereignty",
         them: "Public Cloud Only",
         us: "Hybrid (Cloud / Self-Hosted)",
         themDesc: "Data wajib di server vendor. Tidak ada kontrol fisik. Risiko lock-in tinggi.",
         usDesc: "Bebas pilih. Gunakan Cloud kami atau Private Server Anda sendiri. Data 100% milik Anda."
      },
      { 
         title: "Customizability",
         them: "Kaku (As-is)",
         us: "Flexible Framework",
         themDesc: "Fitur 'Take it or leave it'. Roadmap fitur bergantung vendor.",
         usDesc: "Low-code framework memungkinkan penambahan field, flow, atau logika bisnis unik tanpa batas."
      }
    ],
    verdict: "Pilih BizOps jika bisnis Anda mulai kompleks dan butuh kustomisasi atau integrasi mendalam yang tidak bisa dilayani SaaS standar."
  },
  'custom-build': {
    title: "BizOps vs Custom Build",
    subtitle: "Jebakan 'Membangun Sendiri' (The Trap of In-House Development).",
    description: "Memiliki tim IT internal bukan berarti Anda harus membangun ERP dari nol. Fokuskan dev team Anda pada inovasi, bukan reinvention.",
    competitorName: "In-House Development",
    type: "analysis",
    scenarios: [
       {
          name: "Skenario A: Membangun Sendiri",
          color: "bg-red-50 border-red-200",
          iconColor: "text-red-500",
          metrics: [
             { label: "Time to Market", val: "12 - 18 Bulan" },
             { label: "Cost Risk", val: "> Rp 1.2 Milyar / thn" },
             { label: "Risk Factor", val: "High (Dev Turnover)" }
          ],
          points: [
             "Biaya gaji tim dev (PM, Backend, Frontend, QA) sangat mahal.",
             "Kode menjadi 'Ghost Code' saat Lead Dev resign.",
             "Fitur security & audit sering terabaikan."
          ]
       },
       {
          name: "Skenario B: Menggunakan BizOps",
          color: "bg-green-50 border-green-200",
          iconColor: "text-green-500",
          metrics: [
             { label: "Time to Market", val: "2 - 4 Minggu" },
             { label: "Cost Risk", val: "Fixed Subscription" },
             { label: "Risk Factor", val: "Low (Vendor Support)" }
          ],
          points: [
             "Hemat biaya 10x lipat dibanding gaji tim dev setahun.",
             "Security patch & update fitur ditangani profesional.",
             "Tetap fleksibel dengan custom app di atas framework kami."
          ]
       }
    ],
    verdict: "Jangan reinvent the wheel. Gunakan BizOps sebagai fondasi core, lalu kustomisasi 20% fitur unik bisnis Anda di atasnya."
  }
};

// --- FAQS ---
export const pricingFaqs = [
  {
    q: "Apakah ada biaya tersembunyi untuk implementasi?",
    a: "Untuk paket Business dan Growth (SaaS), tidak ada biaya implementasi wajib. Anda bisa setup mandiri (DIY). Namun, untuk Enterprise (Self-Hosted), biaya implementasi dihitung berdasarkan man-days consultant."
  },
  {
    q: "Bisakah saya upgrade dari Cloud ke Self-Hosted nanti?",
    a: "Ya, 100%. Kami menyediakan fitur 'Data Liberation'. Anda bisa memulai di Cloud kami, dan ketika tim IT Anda siap, kami bantu migrasi database ke server Anda."
  },
  {
    q: "Apakah data saya aman di Cloud BizOps?",
    a: "Sangat aman. Kami menggunakan enkripsi AES-256 untuk data-at-rest dan TLS 1.3 untuk data-in-transit. Server kami berlokasi di Jakarta (Google Cloud Platform Region Jakarta) sesuai regulasi PP 71."
  },
  {
    q: "Bagaimana dengan support purna jual?",
    a: "Setiap paket termasuk akses ke Knowledge Base. Paket Growth mendapat Priority WhatsApp Support. Paket Enterprise mendapat Dedicated Account Manager."
  }
];

// --- SEARCH MOCK DATA ---
export const searchMockData = [
  {
    title: "Cara Integrasi Payment Gateway Xendit",
    path: "Documentation > Integrations > Payment",
    snippet: "...panduan langkah demi langkah menghubungkan API Key Xendit ke dalam modul Sales BizOps untuk mengaktifkan pembayaran otomatis pada Invoice...",
    tag: "Developer Docs",
    category: "docs"
  },
  {
    title: "Human Capital (HRIS) Module",
    path: "Platform > Modules > HR",
    snippet: "Kelola payroll, PPh 21, dan absensi karyawan dalam satu platform terintegrasi.",
    tag: "Product",
    category: "product"
  },
  {
    title: "Mengatasi Error 'Budget Exceeded' pada Purchase Request",
    path: "Help Center > Finance > Procurement",
    snippet: "Error ini muncul karena fitur Budget Control aktif. Hubungi Finance Manager untuk revisi anggaran atau...",
    tag: "Troubleshooting",
    category: "docs"
  },
  {
    title: "5 Tanda Bisnis Anda Sudah 'Tumbuh Kelewat Batas' untuk Excel",
    path: "Blog > Operational Efficiency",
    snippet: "Apakah spreadsheet stok Anda mulai lambat dibuka dan sering crash? Kenali titik kritis di mana...",
    tag: "Blog",
    category: "blog"
  },
  {
    title: "Mitra Konsultan Pajak & Implementator",
    path: "Partners > Directory",
    snippet: "Temukan mitra tersertifikasi untuk membantu implementasi BizOps di perusahaan Anda.",
    tag: "Directory",
    category: "partner"
  }
];
