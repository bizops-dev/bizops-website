
import { 
  Activity, DollarSign, Server, Lightbulb, Video, 
  GraduationCap, Flag, Users, Package, Code, Wrench, 
  FileSpreadsheet, Cloud 
} from 'lucide-react';

// --- BLOG CONTENT ---
export const blogContent = {
  featured: {
    title: "Revolusi PPh 21 TER (Tarif Efektif Rata-rata) 2024: Panduan Strategis & Teknis untuk HR Manager",
    summary: "Aturan pajak baru seringkali membingungkan. Artikel investigatif ini membedah simulasi perhitungan TER harian vs bulanan, dampak langsung pada Cashflow karyawan, dan bagaimana algoritma BizOps mengotomatisasi kepatuhan ini 100%.",
    meta: "Regulation & Compliance | 12 Min Read | Author: Senior Tax Consultant Partner",
    slug: "revolusi-pph-21-ter-2024"
  },
  pillars: [
    {
      category: "Operational Efficiency",
      title: "5 Tanda Bisnis Anda Sudah 'Tumbuh Kelewat Batas' untuk Excel: Kapan Harus Migrasi?",
      snippet: "Apakah spreadsheet stok Anda mulai lambat dibuka dan sering crash? Kenali titik kritis di mana proses manual mulai membunuh profitabilitas Anda.",
      icon: Activity,
      color: "bg-blue-50 text-blue-600",
      slug: "tanda-bisnis-tumbuh-lewat-batas"
    },
    {
      category: "Finance & Cost Control",
      title: "Menghentikan 'Maverick Buying': Menutup Kebocoran Anggaran Terbesar yang Tidak Anda Sadari",
      snippet: "Pembelian liar di luar kontrak vendor resmi bisa memboroskan anggaran hingga 15%. Pelajari bagaimana fitur Budget Checking menutup celah ini.",
      icon: DollarSign,
      color: "bg-green-50 text-green-600",
      slug: "maverick-buying"
    },
    {
      category: "Tech & Sovereignty",
      title: "On-Premise vs Cloud ERP: Analisis TCO & Kepatuhan untuk BUMN & Korporasi",
      snippet: "Analisis mendalam mengenai Total Cost of Ownership (TCO) 5 tahunan. Kapan saatnya Anda harus memegang server sendiri demi keamanan?",
      icon: Server,
      color: "bg-purple-50 text-purple-600",
      slug: "on-premise-vs-cloud"
    },
    {
      category: "Leadership & Culture",
      title: "Mengapa Transformasi Digital Gagal? (Dan Cara Menghindarinya)",
      snippet: "Statistik menunjukkan 70% proyek transformasi gagal bukan karena software-nya, tapi karena resistensi manusia. Pelajari strategi Change Management.",
      icon: Lightbulb,
      color: "bg-amber-50 text-amber-600",
      slug: "mengapa-transformasi-digital-gagal"
    }
  ]
};

// --- BLOG POSTS DETAILS ---
export const blogPosts = [
  {
    slug: "revolusi-pph-21-ter-2024",
    title: "Revolusi PPh 21 TER (Tarif Efektif Rata-rata) 2024: Panduan Strategis & Teknis untuk HR Manager",
    date: "15 October 2024",
    author: "Budi Santoso, Senior Tax Consultant",
    category: "Regulation & Compliance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    summary: "Aturan pajak baru seringkali membingungkan. Artikel investigatif ini membedah simulasi perhitungan TER harian vs bulanan, dampak langsung pada Cashflow karyawan, dan bagaimana algoritma BizOps mengotomatisasi kepatuhan ini 100%.",
    content: `
      <p class="lead text-xl text-slate-600 mb-8">Perubahan regulasi PPh 21 melalui PP 58/2023 membawa angin segar sekaligus tantangan administratif baru bagi departemen HR di seluruh Indonesia. Apa dampak sebenarnya bagi operasional harian Anda?</p>
      
      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Latar Belakang Perubahan</h2>
      <p class="mb-6 text-slate-700">Sejak Januari 2024, pemerintah memberlakukan metode Tarif Efektif Rata-rata (TER) untuk pemotongan PPh 21 masa pajak selain masa pajak terakhir. Tujuannya adalah penyederhanaan administrasi pemotongan pajak bagi pemberi kerja.</p>
      
      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Dampak pada Cashflow Karyawan</h2>
      <p class="mb-6 text-slate-700">Meskipun total pajak setahun tetap sama, metode pemotongan bulanan TER dapat menyebabkan fluktuasi take home pay bulanan yang berbeda dibanding metode sebelumnya. HR perlu mengkomunikasikan hal ini agar tidak terjadi kesalahpahaman.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="font-bold text-blue-900 mb-2">Poin Kunci Strategis</h3>
        <ul class="list-disc list-inside text-blue-800">
           <li>TER Harian vs Bulanan: Pahami bedanya untuk tenaga kerja lepas.</li>
           <li>Rekonsiliasi Akhir Tahun: Beban administrasi bergeser ke masa pajak Desember.</li>
           <li>Otomatisasi Sistem: Jangan mengandalkan Excel manual yang rawan human error.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Solusi BizOps</h2>
      <p class="mb-6 text-slate-700">Modul Human Capital kami telah diperbarui dengan algoritma TER terbaru. Sistem secara otomatis memilih tarif kategori A, B, atau C berdasarkan status PTKP karyawan, menghilangkan risiko kesalahan hitung manual.</p>
    `
  },
  {
    slug: "tanda-bisnis-tumbuh-lewat-batas",
    title: "5 Tanda Bisnis Anda Sudah 'Tumbuh Kelewat Batas' untuk Excel: Kapan Harus Migrasi?",
    date: "10 September 2024",
    author: "Sarah Wijaya, Ops Lead",
    category: "Operational Efficiency",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    summary: "Apakah spreadsheet stok Anda mulai lambat dibuka dan sering crash? Kenali titik kritis di mana proses manual mulai membunuh profitabilitas Anda.",
    content: `
      <p class="text-slate-700 mb-6">Excel adalah alat yang luar biasa untuk memulai bisnis. Namun, seiring pertumbuhan transaksi, ia bisa menjadi liabilitas terbesar Anda.</p>
      <h3 class="font-bold text-slate-900 text-xl mb-2">1. Version Control Nightmare</h3>
      <p class="text-slate-700 mb-6">Ketika Anda mulai melihat file bernama 'Laporan_Final_Revisi_V3_FIX_BANGET.xlsx', itu tandanya Anda butuh database terpusat.</p>
      <h3 class="font-bold text-slate-900 text-xl mb-2">2. Data Silo</h3>
      <p class="text-slate-700 mb-6">Tim Sales tidak tahu stok gudang karena file Excel stok dipegang orang gudang. Akibatnya? Janji palsu ke pelanggan.</p>
    `
  },
  {
    slug: "maverick-buying",
    title: "Menghentikan 'Maverick Buying'",
    date: "22 August 2024",
    author: "Finance Team",
    category: "Finance & Cost Control",
    image: "https://images.unsplash.com/photo-1554224154-260327c0ce04?auto=format&fit=crop&q=80",
    summary: "Pembelian liar di luar kontrak vendor resmi bisa memboroskan anggaran hingga 15%. Pelajari bagaimana fitur Budget Checking menutup celah ini.",
    content: "<p>Konten detail akan segera hadir.</p>"
  },
  {
    slug: "on-premise-vs-cloud",
    title: "On-Premise vs Cloud ERP",
    date: "05 August 2024",
    author: "CTO BizOps",
    category: "Tech & Sovereignty",
    image: "https://images.unsplash.com/photo-1558494949-efc0257bb3af?auto=format&fit=crop&q=80",
    summary: "Analisis mendalam mengenai Total Cost of Ownership (TCO) 5 tahunan. Kapan saatnya Anda harus memegang server sendiri demi keamanan?",
    content: "<p>Konten detail akan segera hadir.</p>"
  },
  {
    slug: "mengapa-transformasi-digital-gagal",
    title: "Mengapa Transformasi Digital Gagal?",
    date: "12 July 2024",
    author: "CEO BizOps",
    category: "Leadership & Culture",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    summary: "Statistik menunjukkan 70% proyek transformasi gagal bukan karena software-nya, tapi karena resistensi manusia.",
    content: "<p>Konten detail akan segera hadir.</p>"
  }
];

// --- EVENTS DATA ---
export const eventsData = {
  upcoming: [
    {
      title: "Tur Lengkap Ekosistem BizOps dalam 60 Menit",
      type: "Weekly Live Demo",
      date: "Setiap Kamis, 14:00 WIB",
      desc: "15 Menit HR & Payroll, 15 Menit Finance, 15 Menit Ops. Sesi tanya jawab langsung dengan Product Specialist.",
      icon: Video
    },
    {
      title: "Strategi Efisiensi Pajak Perusahaan di Era Core Tax System",
      type: "Special Webinar",
      date: "28 Oktober 2024, 10:00 WIB",
      desc: "Pelajari bagaimana integrasi data ERP memudahkan kepatuhan pajak dan persiapan menghadapi audit digital.",
      icon: GraduationCap
    }
  ],
  recordings: [
    { title: "Optimasi Supply Chain untuk Menghadapi Fluktuasi Harga", duration: "45 Min" },
    { title: "Membangun KPI Dashboard yang Efektif untuk CEO", duration: "50 Min" },
    { title: "Cara Membangun Budaya Kerja Remote yang Produktif", duration: "40 Min" }
  ]
};

// --- DOCS DATA ---
export const docsData = {
  categories: [
    { title: "Getting Started", desc: "Setup akun, impor data, konfigurasi awal.", icon: Flag },
    { title: "Human Capital", desc: "Panduan Payroll, PPh 21, Absensi.", icon: Users },
    { title: "Finance & Accounting", desc: "Jurnal, COA, Laporan Keuangan.", icon: DollarSign },
    { title: "Supply Chain", desc: "Stok Opname, Transfer Gudang.", icon: Package },
    { title: "API Reference", desc: "Endpoints, Auth, Webhooks.", icon: Code },
    { title: "Troubleshooting", desc: "Kode error dan solusi mandiri.", icon: Wrench }
  ],
  apiPreview: [
    { method: "GET", endpoint: "/api/resource/Employee", desc: "Ambil daftar karyawan aktif" },
    { method: "POST", endpoint: "/api/resource/SalesOrder", desc: "Buat pesanan penjualan baru" },
    { method: "PUT", endpoint: "/api/resource/Item/{id}", desc: "Update stok atau harga barang" }
  ]
};

// --- GLOSSARY DATA ---
export const glossaryData = [
  {
    char: "A",
    term: "Audit Trail (Jejak Audit)",
    def: "Rekaman kronologis digital yang memberikan bukti dokumenter tak terbantahkan tentang urutan aktivitas yang telah mempengaruhi operasi, prosedur, atau peristiwa tertentu dalam sistem ERP.",
    context: "Fitur ini adalah syarat mutlak untuk kepatuhan keamanan data (ISO 27001) dan pencegahan fraud internal."
  },
  {
    char: "K",
    term: "Kurva-S (S-Curve)",
    def: "Grafik yang menunjukkan kemajuan kumulatif proyek dibandingkan dengan waktu. Bentuk huruf 'S' merepresentasikan fase lambat di awal, cepat di tengah, dan melambat di akhir.",
    context: "Alat utama bagi Kontraktor untuk mendeteksi keterlambatan proyek (slippage) lebih dini."
  },
  {
    char: "P",
    term: "PPh 21 TER (Tarif Efektif Rata-rata)",
    def: "Metode baru perhitungan pemotongan pajak penghasilan pasal 21 bagi pegawai tetap yang berlaku mulai Januari 2024 (PP 58/2023), menggunakan tabel tarif praktis.",
    context: "Menyederhanakan administrasi bulanan namun membutuhkan ketelitian tinggi saat perhitungan ulang di masa pajak terakhir."
  },
  {
    char: "S",
    term: "Safety Stock (Stok Pengaman)",
    def: "Persediaan tambahan yang sengaja disimpan sebagai penyangga (buffer) untuk mencegah kehabisan stok akibat fluktuasi permintaan mendadak.",
    context: "Menjaga tingkat layanan pelanggan (Service Level) tetap tinggi tanpa menimbun stok berlebihan."
  }
];

// --- MIGRATION DATA ---
export const migrationData = [
  {
    id: "spreadsheet",
    title: "Migrasi dari Spreadsheet",
    icon: FileSpreadsheet,
    desc: "Excel / Google Sheets",
    challenge: "Data tidak terstandar, banyak duplikasi, format tanggal tidak konsisten.",
    solution: "Panduan teknik Data Cleansing cepat menggunakan rumus Excel, cara menstandarisasi kolom, dan penggunaan Bulk Import Tool.",
    asset: "Download Template Excel Master Data V2.xlsx"
  },
  {
    id: "saas",
    title: "Migrasi dari Software Akuntansi",
    icon: Cloud,
    desc: "Accurate / Jurnal / Zahir",
    challenge: "Memindahkan Saldo Awal Akuntansi (Opening Balance) agar neraca tetap balance.",
    solution: "Cara ekspor Daftar Akun (COA), Saldo Awal Piutang/Hutang, dan strategi menentukan tanggal Cut-off untuk meminimalkan gangguan.",
    asset: "Panduan Ekspor & Cut-Off Akuntansi.pdf"
  },
  {
    id: "legacy",
    title: "Migrasi dari Legacy ERP",
    icon: Server,
    desc: "Odoo / SAP / Custom App",
    challenge: "Struktur database relasional yang kompleks dan volume data besar.",
    solution: "Pemetaan struktur data objek-ke-objek. Strategi migrasi stok gudang (Stock Opname Total) dan migrasi nilai buku aset tetap.",
    asset: "Technical API Migration Guide.pdf"
  }
];

// --- ROADMAP DATA ---
export const roadmapData = [
  {
    status: "In Progress (Q4 2024)",
    items: [
      { title: "AI-Powered Stock Forecasting", desc: "Prediksi stok dead-stock dan reorder point menggunakan Machine Learning." },
      { title: "Enhanced WhatsApp Integration", desc: "Kirim Slip Gaji dan Invoice PDF via Official WA API." }
    ]
  },
  {
    status: "Next Up (Q1 2025)",
    items: [
      { title: "Vendor Portal 2.0", desc: "Self-service portal untuk vendor upload tagihan dan ikut tender." },
      { title: "Asset Depreciation Auto-Journal", desc: "Otomatisasi jurnal penyusutan aset tetap sesuai standar PSAK." }
    ]
  },
  {
    status: "Future Concepts (2025+)",
    items: [
      { title: "Voice Command Operation", desc: "Input laporan lapangan menggunakan perintah suara Bahasa Indonesia." },
      { title: "Multi-Currency Consolidation", desc: "Konsolidasi laporan keuangan holding multi-negara otomatis." }
    ]
  }
];
