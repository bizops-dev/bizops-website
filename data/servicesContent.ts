import { Wrench, Code, GraduationCap, Headphones, Compass, Lightbulb, Settings, Building } from 'lucide-react';
import { ServiceData } from '../types';

// --- SERVICES DATA ---
export const servicesData: Record<string, ServiceData> = {
  'consulting': {
    title: "Strategic Consulting",
    subtitle: "Diagnosis Tepat Sebelum Obat. Hindari Salah Investasi.",
    description: "Banyak proyek transformasi digital gagal karena 'Technology First, Process Later'. Kami membalik paradigma itu. Kami mulai dengan diagnosis mendalam terhadap kesehatan proses bisnis Anda, baru merekomendasikan teknologi yang tepat.",
    icon: Compass,
    methodology: [
      { title: "Business Process Mapping", desc: "Memetakan flow operasional Anda saat ini (As-Is) untuk menemukan bottleneck tersembunyi." },
      { title: "Gap Analysis", desc: "Membandingkan kebutuhan bisnis vs kapabilitas sistem standar untuk menentukan strategi kustomisasi." },
      { title: "Technology Roadmap", desc: "Menyusun rencana jangka panjang (1-3 tahun) agar investasi teknologi Anda scalable." },
      { title: "Change Readiness Assessment", desc: "Mengukur kesiapan mental dan skill tim Anda menghadapi perubahan sistem baru." }
    ],
    benefits: [
      { title: "Risk Mitigation", desc: "Menghindari pembelian modul/lisensi mahal yang ternyata tidak dibutuhkan perusahaan." },
      { title: "Clear Direction", desc: "Anda mendapatkan peta jalan yang jelas, bukan sekadar janji-janji sales software." },
      { title: "Process Optimization", desc: "Seringkali kami menemukan efisiensi proses manual bahkan sebelum software diimplementasikan." }
    ],
    deliverables: [
      "Document Business Process Review (BPR)",
      "Digital Transformation Roadmap",
      "RFP (Request for Proposal) Support",
      "Budget & Timeline Estimation"
    ],
    cta: "Mulai Sesi Konsultasi"
  },
  'implementation': {
    title: "Implementation & Migration",
    subtitle: "Risiko Gagal Implementasi ERP Itu Nyata. Kami Menghilangkannya.",
    description: "Statistik industri menunjukkan 60% implementasi ERP gagal atau melebihi budget. Pendekatan 'BizOps Agile Sprint' kami dirancang untuk memitigasi risiko tersebut dengan deliverable bertahap yang terukur, transparan, dan fokus pada Business Continuity.",
    icon: Wrench,
    methodology: [
      { title: "Blueprint Audit (Week 1-2)", desc: "Kami tidak menebak. Kami memetakan proses As-Is vs To-Be secara detail untuk mengunci scope dan budget." },
      { title: "Data Cleansing & Migration", desc: "Migrasi data bukan sekadar copy-paste. Kami memvalidasi integritas data historis Anda sebelum masuk ke sistem baru." },
      { title: "Conference Room Pilot (CRP)", desc: "Simulasi end-to-end proses bisnis di ruang meeting sebelum satu baris kode pun di-deploy ke produksi." },
      { title: "Go-Live & Hypercare", desc: "Pendampingan standby 24/7 selama 14 hari pertama pasca peluncuran untuk memastikan operasional lancar." }
    ],
    benefits: [
      { title: "Fixed Cost Guarantee", desc: "Tidak ada biaya tersembunyi. Scope terkunci di awal, budget aman hingga akhir." },
      { title: "Zero Data Loss", desc: "Protokol migrasi ketat memastikan setiap transaksi historis berpindah dengan akurat." },
      { title: "Business Continuity", desc: "Strategi cut-over kami meminimalkan downtime operasional saat perpindahan sistem." }
    ],
    deliverables: [
      "Dokumen Business Blueprint (BBP)",
      "Sistem BizOps Production Ready",
      "Dokumen UAT Sign-off",
      "Panduan Migrasi Data"
    ],
    cta: "Jadwalkan Sesi Discovery Call"
  },
  'custom-dev': {
    title: "Custom Development",
    subtitle: "Fitur Unik adalah Competitive Advantage Anda. Jangan Dibuang.",
    description: "ERP 'Vanilla' seringkali memaksa Anda mengubah proses bisnis unik yang justru menjadi kekuatan perusahaan. Layanan Custom Development kami membangun jembatan antara standar industri dan keunikan operasional Anda, tanpa mengorbankan upgrade-ability sistem.",
    icon: Code,
    methodology: [
      { title: "Solution Architecture", desc: "Mendesain struktur database dan logika bisnis yang efisien dan scalable." },
      { title: "Clean Code Development", desc: "Menggunakan standar PEP-8 (Python) dan ESLint untuk kode yang mudah dibaca dan dipelihara developer lain." },
      { title: "Automated Testing", desc: "Setiap fitur kustom dilengkapi Unit Test untuk mencegah regresi saat update sistem utama." },
      { title: "Documentation", desc: "Dokumentasi teknis lengkap (API Docs & Schema) agar Anda tidak bergantung total pada kami (No Vendor Lock-in)." }
    ],
    benefits: [
      { title: "Upgrade-Safe", desc: "Arsitektur 'App' terpisah memastikan custom code Anda tidak hilang saat Core BizOps di-update." },
      { title: "High Performance", desc: "Optimasi query database tingkat lanjut untuk menangani jutaan record transaksi." },
      { title: "Seamless UI/UX", desc: "Tampilan fitur kustom menyatu sempurna dengan desain bawaan sistem, user tidak akan sadar itu kustom." }
    ],
    deliverables: [
      "Source Code (Git Repository)",
      "API Documentation (Swagger/Postman)",
      "Technical Design Document",
      "Automated Test Scripts"
    ],
    cta: "Konsultasi Teknis Gratis"
  },
  'managed-business-services': {
    title: "Enterprise Managed Services",
    subtitle: "Your Virtual Head Office. Fokus pada Inti Bisnis.",
    description: "Layanan pengelolaan operasional end-to-end yang didukung oleh jaringan konsultan ahli di bidang Finance, HR, Legal, dan IT. Kami tidak hanya menyediakan software, tapi juga SDM profesional untuk menjalankannya.",
    icon: Building,
    methodology: [
      { title: "Needs Assessment", desc: "Audit mendalam kebutuhan operasional non-core Anda." },
      { title: "Expert Matching", desc: "Menghubungkan Anda dengan Top Tier Partner (Konsultan Pajak, HR Firm, Legal) yang terverifikasi." },
      { title: "Integrated Workflow", desc: "Partner bekerja langsung di atas platform BizOps Anda untuk transparansi total." },
      { title: "Performance Review", desc: "Monitoring KPI operasional berkala oleh Account Manager BizOps." }
    ],
    benefits: [
      { title: "Cost Efficiency", desc: "Ubah Fixed Cost (Gaji Staff Ahli) menjadi Variable Cost sesuai kebutuhan." },
      { title: "Expertise on Demand", desc: "Akses ke CFO, CHRO, dan Legal Counsel berpengalaman tanpa harus merekrut full-time." },
      { title: "Compliance Guarantee", desc: "Operasional yang selalu patuh pada regulasi terbaru berkat pantauan ahli." }
    ],
    deliverables: [
      "Dedicated Account Manager",
      "Monthly Financial/HR/Ops Reports",
      "Quarterly Strategic Review",
      "Access to Expert Network"
    ],
    cta: "Konsultasi Kebutuhan"
  },
  'training': {
    title: "Training & Change Management",
    subtitle: "Investasi Terbesar Adalah Manusia, Bukan Software.",
    description: "Sistem tercanggih di dunia tidak akan berguna jika tim Anda menolak menggunakannya. Program kami bukan sekadar 'Training Cara Pakai', tapi 'Change Management' untuk mengubah mindset dan budaya kerja tim Anda menuju digitalisasi.",
    icon: GraduationCap,
    methodology: [
      { title: "Role-Based Curriculum", desc: "Materi Warehouse Admin berbeda dengan Finance Manager. Kami sesuaikan bahasa dan konteksnya." },
      { title: "Gamified Learning", desc: "Sesi interaktif dengan studi kasus nyata perusahaan Anda, bukan teori membosankan." },
      { title: "Super User Coaching", desc: "Kami melatih 'Champion' internal di perusahaan Anda untuk menjadi pusat bantuan tingkat pertama." },
      { title: "Certification", desc: "Ujian kompetensi di akhir sesi untuk memastikan user benar-benar siap dilepas." }
    ],
    benefits: [
      { title: "Faster ROI", desc: "User yang mahir bekerja lebih cepat, mengurangi kesalahan input, dan mempercepat balik modal investasi ERP." },
      { title: "Reduced Resistance", desc: "Pendekatan psikologis kami mengurangi resistensi karyawan senior terhadap teknologi baru." },
      { title: "Knowledge Retention", desc: "Akses seumur hidup ke BizOps Academy (Video Learning Portal) untuk re-training mandiri." }
    ],
    deliverables: [
      "Modul Training & Video Tutorial",
      "User Manual (PDF) per Departemen",
      "Sertifikat Kelulusan User",
      "Rekaman Sesi Zoom (jika online)"
    ],
    cta: "Lihat Silabus Training"
  },
  'support': {
    title: "Support & Managed Services",
    subtitle: "Tim IT Virtual Anda. Tenang, Kami yang Jaga Lembur.",
    description: "Jangan biarkan tim internal Anda habis waktu mengurus server down atau bug sistem. Fokuskan mereka pada inovasi bisnis, biarkan kami yang menangani 'kabel ruwet' dan pemeliharaan rutin infrastruktur ERP Anda dengan SLA yang ketat.",
    icon: Headphones,
    methodology: [
      { title: "Proactive Monitoring", desc: "Kami tahu server penuh sebelum Anda menyadarinya. Monitoring 24/7 terhadap CPU, RAM, dan Disk." },
      { title: "Ticket Management System", desc: "Portal tiket transparan. Anda bisa lacak status perbaikan bug secara real-time." },
      { title: "Regular Patching", desc: "Update keamanan rutin untuk melindungi data sensitif perusahaan dari serangan siber terbaru." },
      { title: "Quarterly Review", desc: "Evaluasi performa sistem setiap 3 bulan dan rekomendasi optimasi infrastruktur." }
    ],
    benefits: [
      { title: "Guaranteed SLA", desc: "Jaminan respon time (e.g., < 1 jam untuk isu kritis) atau kami berikan penalti refund kredit." },
      { title: "Data Security", desc: "Backup otomatis harian ke lokasi terpisah (Off-site DR) untuk jaminan keamanan data 100%." },
      { title: "Cost Efficiency", desc: "Lebih murah daripada menggaji satu orang Senior DevOps Engineer full-time." }
    ],
    deliverables: [
      "Akses Portal Tiket Prioritas",
      "Laporan Bulanan (Uptime & Issue)",
      "Dedicated Account Manager",
      "Backup Data Rutin"
    ],
    cta: "Pelajari Paket SLA"
  }
};
