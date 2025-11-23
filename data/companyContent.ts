
import { 
  Wrench, Search, ShieldCheck, Building, FileCheck, MapPin, 
  Code, GitMerge, Zap, BookOpen, Coffee, Monitor, Heart, Award, 
  Server, Smartphone, Layers, DollarSign, Repeat, Anchor, 
  MousePointerClick, Headphones, CheckCircle 
} from 'lucide-react';

// --- ABOUT PAGE CONTENT ---
export const aboutContent = {
  hero: {
    headline: "Dibangun oleh Praktisi, Untuk Menjawab Masalah Nyata di Lapangan.",
    subheadline: "BizOps lahir bukan dari spekulasi di ruang rapat dewan direksi yang dingin, melainkan dari observasi dan frustasi nyata di lantai pabrik yang panas, gudang distribusi yang sibuk, dan kantor HR yang kewalahan. Kami hadir untuk menutup celah tersebut dengan solusi yang presisi, adaptif, dan manusiawi."
  },
  timeline: [
    {
      year: "The Trigger",
      title: "Frustasi di Lapangan",
      desc: "PT Divistant Teknologi Indonesia bermula sebagai boutique software house. Kami melihat pola kegagalan yang sama berulang kali: Perusahaan Indonesia sering dipaksa mengubah cara kerja unik mereka demi menyesuaikan diri dengan logika software 'impor' yang kaku. Akibatnya fatal: Sistem menjadi 'monumen digital' yang tidak dipakai (Shelfware)."
    },
    {
      year: "The Philosophy",
      title: "Pendekatan Hybrid",
      desc: "Kami menolak kompromi. Kami menggabungkan kekuatan teknologi Open Source kelas dunia (Frappe Framework) dengan pemahaman mendalam tentang nuansa lokal—seperti perhitungan Pajak PPh 21/23, aturan BPJS, Faktur Pajak, hingga budaya kasbon. Lahirlah BizOps: Sistem yang beradaptasi dengan bisnis Anda, bukan sebaliknya."
    },
    {
      year: "The Mission",
      title: "Kedaulatan Digital",
      desc: "Misi kami melampaui sekadar penjualan lisensi. Misi kami adalah Kedaulatan Digital. Kami ingin setiap entitas bisnis di Indonesia memiliki kendali penuh atas data, proses, dan infrastruktur operasional mereka sendiri. Bebas dari ketergantungan buta pada vendor asing."
    }
  ],
  values: [
    {
      title: "Pragmatism Over Hype",
      manifesto: "Kami tidak mengejar tren teknologi kosmetik jika tidak memecahkan masalah riil. Kami bangga membangun solusi yang 'membosankan' tapi bekerja sempurna.",
      proof: "Fitur Offline Mode kami menyelamatkan operasional tambang batu bara di pedalaman Kalimantan saat koneksi satelit terputus."
    },
    {
      title: "Radical Transparency",
      manifesto: "Hubungan bisnis dibangun di atas kepercayaan. Tidak ada biaya tersembunyi (Hidden Fees), tidak ada kode rahasia (Black Box), dan tidak ada Vendor Lock-in.",
      proof: "Klien Self-Hosted mendapatkan akses penuh ke source code dan database. Anda bebas melakukan audit keamanan independen kapan saja."
    },
    {
      title: "Customer Sovereignty",
      manifesto: "Data adalah aset strategis Anda, bukan komoditas dagangan kami. Kami menolak model bisnis yang memonetisasi data pengguna untuk pihak ketiga.",
      proof: "Fitur One-Click Export memungkinkan Anda mengunduh seluruh data dalam format standar kapan saja. Tidak ada sandera data."
    }
  ],
  entity: {
    name: "PT Divistant Teknologi Indonesia",
    legal: "NIB: [Tersedia] | SK Kemenkumham: [Tersedia]",
    hq: "Jakarta Selatan (Sales & Ops) - Pusat operasional bisnis dan layanan klien.",
    rnd: "Yogyakarta/Bandung (R&D) - Pusat inovasi teknologi dan pengembangan produk.",
    compliance: "Terdaftar resmi sebagai Penyelenggara Sistem Elektronik (PSE) Lingkup Privat di Kominfo."
  }
};

// --- CAREERS PAGE CONTENT ---
export const careersContent = {
  hero: {
    headline: "Jangan Sekadar Menulis Kode. Bangun Peradaban Digital.",
    subheadline: "Kami mencari Problem Solvers, pemikir kritis, dan inovator. Di Divistant, Anda membangun sistem saraf pusat bagi ribuan bisnis di Indonesia. Pekerjaan Anda berdampak langsung pada efisiensi ekonomi riil."
  },
  culture: [
    {
      title: "Open Source DNA",
      desc: "Kami kontributor aktif komunitas Open Source global (Frappe/ERPNext). Kode yang Anda tulis mungkin diadopsi oleh ribuan developer global. Kami mendorong Anda melakukan commit upstream dan membangun reputasi internasional."
    },
    {
      title: "Remote-First, Async",
      desc: "Kami menilai Output, bukan jam duduk. Bekerjalah dari mana saja. Minimalkan meeting sinkronus yang mengganggu, utamakan Deep Work dan komunikasi tertulis yang terstruktur."
    },
    {
      title: "Continuous Learning",
      desc: "Anggaran tahunan khusus per karyawan untuk buku teknis, kursus premium (Udemy/Coursera), dan sertifikasi. Teknologi berubah cepat, kami tidak ingin Anda tertinggal."
    }
  ],
  benefits: [
    { title: "Competitive Salary", desc: "Gaji pokok kompetitif di atas rata-rata pasar, ditinjau tahunan berdasarkan performa & skill." },
    { title: "Device Ownership", desc: "MacBook Pro M-Series / Thinkpad X1 Carbon baru. Menjadi milik Anda sepenuhnya setelah 3 tahun." },
    { title: "Comprehensive Health", desc: "Asuransi kesehatan swasta rawat jalan/inap untuk keluarga inti + BPJS lengkap." },
    { title: "Project Bonus", desc: "Profit sharing proyek yang transparan. Kesuksesan implementasi klien adalah kesuksesan Anda." }
  ],
  hiring: [
    { step: "1", title: "Application Review", desc: "Kami membaca kode GitHub, portofolio desain, atau tulisan teknis Anda. Bukan sekadar memindai kata kunci di CV." },
    { step: "2", title: "Take-Home Challenge", desc: "Tugas praktis relevan dengan pekerjaan nyata (Refactoring/Design UI), bukan teka-teki algoritma yang tidak realistis." },
    { step: "3", title: "Technical Deep Dive", desc: "Diskusi kode dan arsitektur mendalam dengan Senior Engineer untuk menguji pemahaman konsep." },
    { step: "4", title: "Culture Fit Interview", desc: "Obrolan santai dengan Founder atau VP untuk memastikan keselarasan nilai dan visi." }
  ]
};

// --- JOBS DATA ---
export const jobsData = [
  {
    title: "Senior Python Backend Engineer",
    dept: "Engineering",
    loc: "Remote / Yogyakarta",
    type: "Full Time",
    tags: ["Frappe", "Django", "SQL Expert"],
    desc: "Bangun core system ERP yang scalable dan secure. Optimasi query database untuk jutaan transaksi."
  },
  {
    title: "Flutter Mobile Engineer",
    dept: "Engineering",
    loc: "Remote / Yogyakarta",
    type: "Full Time",
    tags: ["Android", "iOS", "Offline-First Arch"],
    desc: "Kembangkan aplikasi mobile native dengan performa 60 FPS dan sinkronisasi offline yang handal."
  },
  {
    title: "Solution Architect",
    dept: "Product",
    loc: "Jakarta",
    type: "Full Time",
    tags: ["ERP Implementation", "Business Analyst"],
    desc: "Terjemahkan kebutuhan bisnis klien menjadi solusi sistem yang elegan dan efisien."
  },
  {
    title: "Enterprise Sales Manager",
    dept: "Growth",
    loc: "Jakarta",
    type: "Full Time",
    tags: ["B2B", "Consultative Selling", "SaaS"],
    desc: "Buka pasar Enterprise dan BUMN dengan pendekatan konsultatif yang memberi nilai tambah."
  }
];

// --- PARTNER CONTENT ---
export const partnerContent = {
  shift: {
    old: {
      title: "The Old Way",
      subtitle: "Trading Time for Money (Linear Trap)",
      desc: "Sebagai konsultan tradisional, pendapatan Anda dibatasi secara linear oleh jam kerja manusia. Proyek selesai, pendapatan berhenti. Anda terjebak dalam siklus 'Feast or Famine' (kadang ramai proyek, kadang sepi). Lebih buruk lagi, layanan jasa semakin terkomoditisasi; klien mudah berpindah ke kompetitor yang lebih murah atau mulai menggantikan jasa administrasi dasar dengan AI. Tanpa diferensiasi teknologi, margin keuntungan Anda akan terus tergerus oleh perang harga."
    },
    new: {
      title: "The New Way",
      subtitle: "Asset-Based Revenue (Exponential Growth)",
      desc: "Konsultan masa depan tidak hanya menjual 'Saran', mereka menjual 'Sistem'. Dengan memiliki produk ERP sendiri, Anda menanamkan sistem ke dalam operasional harian klien. Hubungan transaksional berubah menjadi kemitraan strategis jangka panjang yang 'lengket'. Anda mendapatkan Passive Income bulanan dari lisensi software (SaaS), sambil tetap menjual jasa konsultasi premium Anda di atasnya. Ini adalah cara meningkatkan Customer Lifetime Value (CLV) hingga 10x lipat dan menciptakan valuasi bisnis yang jauh lebih tinggi."
    }
  },
  process: [
    {
      title: "Step 1: Total Brand Immersion",
      subtitle: "Re-Skinning & White-Glove Setup",
      desc: "Anda menyerahkan aset identitas visual lengkap (Logo, Warna, Domain). Tim engineer kami melakukan re-skinning total hingga ke level kode. Kami membangun ulang (re-build) APK (Android) dan IPA (iOS) Mobile Apps khusus untuk akun Developer Store Anda. Tidak ada jejak merek 'BizOps' yang terlihat oleh klien. Klien akan mengira Anda memiliki tim IT in-house yang besar.",
      icon: Layers
    },
    {
      title: "Step 2: Sovereign Pricing Strategy",
      subtitle: "Your Market, Your Rules",
      desc: "Kami memberikan Harga Dasar Partner (Wholesale Price) yang sangat rendah per user. Anda memiliki otoritas mutlak untuk menentukan Harga Jual Retail ke klien Anda. Jual mahal sebagai solusi eksklusif, atau bundle dengan jasa retainer. Selisih margin adalah 100% keuntungan bersih Anda.",
      icon: DollarSign
    },
    {
      title: "Step 3: Client Ownership & Support",
      subtitle: "First-Line Support",
      desc: "Di mata klien, Andalah pemilik sistem ini. Anda menangani First Level Support (pertanyaan penggunaan) dan penagihan (Billing). BizOps bertindak sebagai Invisible Infrastructure Partner yang menjaga uptime server 99.9%, security patching, dan update fitur di belakang layar.",
      icon: Headphones
    }
  ],
  benefits: [
    {
      title: "High Recurring Revenue (ARR/MRR)",
      desc: "Bangun arus kas yang sehat dan dapat diprediksi. Biaya langganan software klien menjadi 'gaji buta' bagi perusahaan Anda setiap bulan, menutup biaya operasional dasar (Opex) kantor Anda.",
      icon: Repeat
    },
    {
      title: "Unbeatable Client Retention",
      desc: "Klien jasa konsultasi yang menggunakan software operasional dari konsultannya memiliki tingkat retensi 3x-5x lebih lama. Data HR, Finance, dan Project mereka tersimpan di sistem 'milik' Anda, menciptakan Moat yang kuat.",
      icon: Anchor
    },
    {
      title: "Zero R&D & Maintenance Risk",
      desc: "Membangun ERP sekelas BizOps butuh tim 20 developer dan biaya miliaran. Dengan program ini, Anda 'menyewa' hasil riset kami secara instan. Fokuslah jualan dan melayani klien, biarkan kami yang coding.",
      icon: Code
    },
    {
      title: "Automatic Upsell Triggers",
      desc: "Software membuka pintu untuk jasa lain. Data dashboard klien menunjukkan rasio keuangan memburuk? Tawarkan jasa konsultasi cashflow. Stok berantakan? Tawarkan jasa audit stok opname.",
      icon: MousePointerClick
    }
  ],
  personas: [
    {
      title: "Business & Tax Consultants (KJA/KKP)",
      pain: "Lelah mengejar klien setiap bulan untuk minta data bukti potong/rekening koran yang masih manual.",
      solution: "Berikan klien BizOps Whitelabel. Klien input data operasional, Anda tinggal tarik laporan keuangan rapi dari backend kapan saja."
    },
    {
      title: "System Integrators & IT Hardware Vendors",
      pain: "Jago jualan hardware (CCTV/Server/Fingerprint) tapi margin tipis dan sifatnya putus beli (one-off).",
      solution: "Bundle jualan CCTV/Fingerprint Anda dengan software BizOps. Jual solusi keamanan fisik + digital berlangganan."
    },
    {
      title: "HR Agencies / Outsourcing Firms",
      pain: "Persaingan harga management fee outsourcing sangat ketat. Klien menuntut transparansi data lapangan.",
      solution: "Menangkan tender dengan menawarkan 'Portal Klien Digital' (BizOps Whitelabel) secara gratis atau bundle. USP mematikan bagi kompetitor."
    }
  ],
  onboarding: [
    {
      step: "01",
      title: "Review (1-2 Days)",
      desc: "Tim Channel Manager kami memverifikasi profil bisnis dan legalitas perusahaan Anda untuk memastikan kesesuaian visi dan menghindari konflik kepentingan."
    },
    {
      step: "02",
      title: "Discovery Call",
      desc: "Jika lolos seleksi awal, kami mengundang Anda untuk meeting daring eksklusif membahas skema harga grosir, demo Admin Console Partner, dan strategi Go-to-Market."
    },
    {
      step: "03",
      title: "Agreement & Training",
      desc: "Penandatanganan MoU Kemitraan (NDA & Reseller Agreement) dan sesi pelatihan intensif (Product Knowledge, Sales Script, & Admin Training) untuk tim Anda."
    },
    {
      step: "04",
      title: "Launch & Market",
      desc: "Kami menyerahkan akses sistem Whitelabel Anda yang sudah di-rebrand. Anda mendapatkan Marketing Kit lengkap. Anda siap berjualan dan mencetak profit."
    }
  ]
};

// --- WHY BIZOPS CONTENT ---
export const whyBizOpsContent = {
   hero: {
      headline: "Bukan Pesaing, Tapi Penyatuan (The Unified Layer).",
      sub: "BizOps tidak harus menggantikan sistem lama Anda jika Anda belum siap. Kami memposisikan diri sebagai 'Middleware Cerdas' yang menyatukan SAP di Finance, Mesin Absensi di Pintu, dan Spreadsheet di Gudang."
   },
   reasons: [
      { title: "Native Mobile Experience", desc: "UI/UX kelas konsumen memastikan adopsi tinggi dari karyawan lapangan. Tanpa adopsi, sistem hanyalah sampah digital." },
      { title: "Total Data Sovereignty", desc: "Opsi Self-Hosted memberikan kendali penuh atas aset data. Aman dari intipan, regulasi, dan kenaikan harga sepihak." },
      { title: "Seamless Integration", desc: "Tidak egois. Bisa berdiri sendiri sebagai ERP lengkap, atau terhubung ke SAP/Odoo/Jurnal sebagai pelengkap." },
      { title: "Build vs Buy Winner", desc: "Lebih murah & cepat 10x lipat daripada membangun tim dev sendiri, namun memberikan fleksibilitas setara custom." },
      { title: "Partner Friendly", desc: "Membuka peluang bisnis baru melalui program Whitelabel bagi konsultan & software house." }
   ]
};

// --- CUSTOMER STORIES ---
export const customerStories = [
  {
    client: "PT Bangun Persada",
    industry: "Construction & Engineering",
    logo: "BP",
    title: "Menghemat Rp 2,5 Milyar dari Efisiensi Material.",
    chaos: "Selisih material semen dan besi di 5 lokasi proyek mencapai 8% akibat pencurian internal dan admin lapangan yang lambat merekap data.",
    solution: "Implementasi modul Project Operations & Inventory dengan fitur Laporan Harian Digital berbasis foto Geo-tagging dan Approval Workflow material ketat.",
    desc: "Kami menghemat Rp 2,5 Milyar dari efisiensi material dalam 6 bulan pertama. Selisih stok turun drastis ke bawah 1%.",
    metrics: [
      { value: "0.8%", label: "Selisih Stok" },
      { value: "H+1", label: "Laporan P&L" },
      { value: "2.5M", label: "Cost Saved" }
    ]
  },
  {
    client: "Berkah Abadi Group",
    industry: "Retail & Distribution",
    logo: "BA",
    title: "Order Fulfillment Rate Naik dari 75% ke 98%.",
    chaos: "Salesman sering melakukan 'tembak' order fiktif demi insentif, sementara stok gudang fisik sering kosong karena data sistem tidak real-time.",
    solution: "Aplikasi Mobile Taking Order dengan validasi GPS Check-in, fitur Live Stock Availability, dan kunci Credit Limit otomatis.",
    desc: "Piutang macet turun 40%, dan Omzet naik 30% karena kami tidak lagi kehilangan penjualan akibat stok kosong semu.",
    metrics: [
      { value: "98%", label: "Fulfillment Rate" },
      { value: "40%", label: "Piutang Turun" },
      { value: "+30%", label: "Omzet Naik" }
    ]
  },
  {
    client: "GuardOne Security",
    industry: "Outsourcing Services",
    logo: "GO",
    title: "Perpanjangan Kontrak Klien Mencapai 100%.",
    chaos: "Klien sering komplain satpam jarang patroli, dan HR pusing menghitung lembur manual serta jadwal shift rotasi untuk 2.000 personil.",
    solution: "Modul HRIS dengan fitur Complex Rostering otomatis dan NFC Patrol Tracking yang mewajibkan scan titik patroli.",
    desc: "BizOps menjadi nilai jual utama kami saat tender. Klien puas dengan laporan patroli digital yang transparan.",
    metrics: [
      { value: "100%", label: "Client Retention" },
      { value: "2.000", label: "Personil Terkelola" },
      { value: "0", label: "Komplain Lembur" }
    ]
  }
];
