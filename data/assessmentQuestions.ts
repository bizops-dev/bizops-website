import { Zap, BarChart, Users, Database, Shield, Layers, Target, Heart, Cpu, Briefcase } from 'lucide-react';

export interface Option {
  label: string;
  score: number;
  value: string;
}

export interface Question {
  id: string;
  category: 'strategy' | 'customer' | 'operations' | 'technology' | 'people';
  question: string;
  options: Option[];
}

export interface MaturityLevel {
  level: string;
  title: string;
  description: string;
  minScore: number;
  maxScore: number;
  color: string;
}

// Mengacu pada CMMI & TM Forum Digital Maturity Model
export const maturityLevels: MaturityLevel[] = [
  {
    level: 'Level 1',
    title: 'Ad-Hoc / Initiating',
    description: 'Inisiatif digital masih sporadis, tidak terkoordinasi, dan sangat reaktif. Belum ada strategi formal.',
    minScore: 0,
    maxScore: 1.5,
    color: 'bg-red-500',
  },
  {
    level: 'Level 2',
    title: 'Opportunistic / Emerging',
    description: 'Mulai ada kesadaran digital di beberapa departemen (silos). Teknologi digunakan tapi belum terintegrasi.',
    minScore: 1.51,
    maxScore: 2.5,
    color: 'bg-orange-500',
  },
  {
    level: 'Level 3',
    title: 'Repeatable / Functional',
    description: 'Strategi digital mulai didefinisikan. Proses inti sudah terstandarisasi dan didukung sistem. Data mulai digunakan untuk laporan.',
    minScore: 2.51,
    maxScore: 3.5,
    color: 'bg-yellow-500',
  },
  {
    level: 'Level 4',
    title: 'Managed / Integrated',
    description: 'Integrasi lintas fungsi berjalan mulus. Pengambilan keputusan berbasis data real-time (Data-Driven). Budaya inovasi mulai terbentuk.',
    minScore: 3.51,
    maxScore: 4.5,
    color: 'bg-blue-500',
  },
  {
    level: 'Level 5',
    title: 'Optimized / Disruptive',
    description: 'Digital adalah DNA perusahaan. Adaptasi pasar sangat cepat (Agile), menggunakan AI/ML secara ekstensif, dan menjadi pemimpin pasar.',
    minScore: 4.51,
    maxScore: 5,
    color: 'bg-green-500',
  },
];

export const assessmentQuestions: Question[] = [
  // --- STRATEGY & LEADERSHIP ---
  {
    id: 's1',
    category: 'strategy',
    question: 'Sejauh mana Visi Digital didefinisikan dalam strategi perusahaan?',
    options: [
      { label: 'Tidak ada strategi digital formal.', score: 1, value: 'none' },
      { label: 'Ada inisiatif digital terpisah di level departemen.', score: 2, value: 'departmental' },
      { label: 'Visi digital ada tapi belum tersosialisasi menyeluruh.', score: 3, value: 'defined_unsocialized' },
      { label: 'Visi digital jelas dan menjadi bagian dari rencana bisnis korporat.', score: 4, value: 'integrated_strategy' },
      { label: 'Digital adalah inti dari model bisnis (Digital First).', score: 5, value: 'digital_core' },
    ],
  },
  {
    id: 's2',
    category: 'strategy',
    question: 'Bagaimana dukungan manajemen (C-Level) terhadap transformasi?',
    options: [
      { label: 'Skeptis atau melihatnya hanya sebagai biaya IT.', score: 1, value: 'skeptical' },
      { label: 'Mendukung secara lisan tapi minim alokasi budget.', score: 2, value: 'verbal_support' },
      { label: 'Ada sponsor eksekutif khusus untuk proyek digital tertentu.', score: 3, value: 'project_sponsor' },
      { label: 'Manajemen aktif mendorong dan berinvestasi pada inovasi.', score: 4, value: 'active_investment' },
      { label: 'CEO memimpin langsung agenda transformasi digital.', score: 5, value: 'ceo_led' },
    ],
  },
  {
    id: 's3',
    category: 'strategy',
    question: 'Bagaimana pendekatan anggaran (budgeting) untuk inisiatif digital?',
    options: [
      { label: 'Tidak ada anggaran khusus.', score: 1, value: 'no_budget' },
      { label: 'Anggaran IT tradisional (Capex/Opex ketat).', score: 2, value: 'traditional_it' },
      { label: 'Anggaran per proyek (Project-based funding).', score: 3, value: 'project_based' },
      { label: 'Anggaran inovasi terpisah yang fleksibel.', score: 4, value: 'innovation_fund' },
      { label: 'Venture funding model (pendanaan bertahap berbasis value).', score: 5, value: 'venture_model' },
    ],
  },

  // --- CUSTOMER EXPERIENCE ---
  {
    id: 'c1',
    category: 'customer',
    question: 'Seberapa baik Anda memahami perjalanan pelanggan (Customer Journey)?',
    options: [
      { label: 'Kami tidak memetakan journey pelanggan.', score: 1, value: 'none' },
      { label: 'Pemahaman parsial berdasarkan asumsi sales/marketing.', score: 2, value: 'assumption' },
      { label: 'Punya data feedback pelanggan tapi belum dianalisis rutin.', score: 3, value: 'data_collected' },
      { label: 'Journey dipetakan jelas dan diukur kepuasannya (NPS/CSAT).', score: 4, value: 'mapped_measured' },
      { label: 'Personalisasi pengalaman pelanggan secara real-time berbasis data.', score: 5, value: 'personalized' },
    ],
  },
  {
    id: 'c2',
    category: 'customer',
    question: 'Bagaimana interaksi layanan pelanggan (Omnichannel)?',
    options: [
      { label: 'Single channel (misal: hanya telepon atau toko fisik).', score: 1, value: 'single' },
      { label: 'Multi-channel tapi tidak terhubung (data terpisah).', score: 2, value: 'multichannel_silo' },
      { label: 'Data pelanggan terintegrasi di beberapa titik sentuh utama.', score: 3, value: 'partial_integration' },
      { label: 'Omnichannel seamless (pindah channel tanpa ulang konteks).', score: 4, value: 'omnichannel' },
      { label: 'Proaktif memprediksi kebutuhan pelanggan sebelum mereka bertanya.', score: 5, value: 'proactive_ai' },
    ],
  },
  {
    id: 'c3',
    category: 'customer',
    question: 'Bagaimana Anda menggunakan insight pelanggan untuk inovasi produk?',
    options: [
      { label: 'Produk dibuat berdasarkan intuisi internal saja.', score: 1, value: 'intuition' },
      { label: 'Menggunakan feedback reaktif (komplain pelanggan).', score: 2, value: 'reactive_feedback' },
      { label: 'Riset pasar berkala (tahunan).', score: 3, value: 'periodic_research' },
      { label: 'Co-creation dengan pelanggan dan analisis perilaku digital.', score: 4, value: 'co_creation' },
      { label: 'Real-time feedback loop yang langsung mengubah roadmap produk.', score: 5, value: 'realtime_loop' },
    ],
  },

  // --- OPERATIONS & PROCESS ---
  {
    id: 'o1',
    category: 'operations',
    question: 'Tingkat otomatisasi proses bisnis operasional?',
    options: [
      { label: 'Dominan manual dan berbasis kertas.', score: 1, value: 'manual' },
      { label: 'Digitalisasi dasar (spreadsheet/email).', score: 2, value: 'basic_digital' },
      { label: 'Sistem terpisah untuk fungsi utama (HR/Finance/Sales).', score: 3, value: 'functional_silos' },
      { label: 'Proses End-to-End terintegrasi dan otomatis.', score: 4, value: 'integrated_auto' },
      { label: 'Operasional otonom dengan intervensi manusia minimal.', score: 5, value: 'autonomous' },
    ],
  },
  {
    id: 'o2',
    category: 'operations',
    question: 'Agilitas dalam merespon perubahan pasar?',
    options: [
      { label: 'Sangat lambat, birokrasi kaku.', score: 1, value: 'rigid' },
      { label: 'Reaktif, berubah hanya jika ada krisis.', score: 2, value: 'reactive' },
      { label: 'Mencoba agile di tim IT, tapi bisnis masih waterfall.', score: 3, value: 'it_agile' },
      { label: 'Metodologi Agile diterapkan lintas fungsi bisnis.', score: 4, value: 'biz_agile' },
      { label: 'Organisasi dapat pivot strategi dalam hitungan minggu.', score: 5, value: 'fully_adaptive' },
    ],
  },
  {
    id: 'o3',
    category: 'operations',
    question: 'Bagaimana pengelolaan rantai pasok (Supply Chain)?',
    options: [
      { label: 'Manual, visibilitas stok rendah.', score: 1, value: 'manual_sc' },
      { label: 'Terkomputerisasi tapi offline/batch processing.', score: 2, value: 'offline_sc' },
      { label: 'Terintegrasi internal (ERP), tapi belum konek ke supplier.', score: 3, value: 'internal_erp' },
      { label: 'Kolaborasi real-time dengan supplier dan logistik.', score: 4, value: 'collaborative_sc' },
      { label: 'Smart Supply Chain (AI forecasting & auto-replenishment).', score: 5, value: 'smart_sc' },
    ],
  },
  {
    id: 'o4',
    category: 'operations',
    question: 'Standarisasi SOP (Standard Operating Procedure)?',
    options: [
      { label: 'SOP lisan atau tidak terdokumentasi.', score: 1, value: 'oral' },
      { label: 'SOP tertulis tapi jarang diupdate/dipatuhi.', score: 2, value: 'outdated_docs' },
      { label: 'SOP terstandar ISO/SNI dan diaudit berkala.', score: 3, value: 'standardized' },
      { label: 'SOP tertanam dalam sistem (workflow enforcement).', score: 4, value: 'system_enforced' },
      { label: 'SOP dinamis yang beradaptasi otomatis (Process Mining).', score: 5, value: 'dynamic_process' },
    ],
  },

  // --- TECHNOLOGY & DATA ---
  {
    id: 't1',
    category: 'technology',
    question: 'Arsitektur teknologi dan infrastruktur?',
    options: [
      { label: 'Legacy system tua, sulit diubah.', score: 1, value: 'legacy' },
      { label: 'Campuran legacy dan aplikasi baru yang tidak bicara.', score: 2, value: 'mixed_silo' },
      { label: 'Mulai migrasi ke Cloud untuk beberapa aplikasi.', score: 3, value: 'cloud_start' },
      { label: 'Cloud-native dengan API-first architecture.', score: 4, value: 'cloud_native' },
      { label: 'Microservices event-driven yang sangat scalable.', score: 5, value: 'microservices' },
    ],
  },
  {
    id: 't2',
    category: 'technology',
    question: 'Pemanfaatan Data untuk keputusan (Data Maturity)?',
    options: [
      { label: 'Data tersebar, kualitas rendah, sering duplikat.', score: 1, value: 'chaotic' },
      { label: 'Laporan deskriptif manual (Apa yang terjadi?).', score: 2, value: 'descriptive' },
      { label: 'Dashboard diagnostik (Mengapa itu terjadi?).', score: 3, value: 'diagnostic' },
      { label: 'Analitik prediktif (Apa yang akan terjadi?).', score: 4, value: 'predictive' },
      { label: 'Analitik preskriptif otomatis (Apa yang harus dilakukan?).', score: 5, value: 'prescriptive' },
    ],
  },
  {
    id: 't3',
    category: 'technology',
    question: 'Keamanan Siber (Cybersecurity)?',
    options: [
      { label: 'Tidak ada protokol keamanan khusus (hanya antivirus).', score: 1, value: 'basic' },
      { label: 'Keamanan perimeter dasar (Firewall).', score: 2, value: 'perimeter' },
      { label: 'Kepatuhan standar industri (ISO/GDPR) diterapkan.', score: 3, value: 'compliant' },
      { label: 'Keamanan proaktif dengan monitoring 24/7.', score: 4, value: 'proactive' },
      { label: 'Zero Trust Architecture & AI Threat Detection.', score: 5, value: 'zero_trust' },
    ],
  },
  {
    id: 't4',
    category: 'technology',
    question: 'Integrasi sistem antar departemen?',
    options: [
      { label: 'Tidak ada integrasi (Input ulang manual).', score: 1, value: 'manual_input' },
      { label: 'Transfer file manual (Export/Import Excel).', score: 2, value: 'file_transfer' },
      { label: 'Point-to-point integration (custom script).', score: 3, value: 'point_to_point' },
      { label: 'Enterprise Service Bus / Middleware terpusat.', score: 4, value: 'middleware' },
      { label: 'API Ecosystem yang terbuka dan seamless.', score: 5, value: 'api_ecosystem' },
    ],
  },

  // --- PEOPLE & CULTURE ---
  {
    id: 'p1',
    category: 'people',
    question: 'Keterampilan digital karyawan (Digital Skills)?',
    options: [
      { label: 'Rendah, sangat bergantung pada staf IT untuk hal teknis.', score: 1, value: 'low' },
      { label: 'Ada pelatihan dasar penggunaan software kantor.', score: 2, value: 'basic_training' },
      { label: 'Talenta digital direkrut untuk peran spesifik.', score: 3, value: 'specialist_hired' },
      { label: 'Upskilling rutin untuk seluruh karyawan.', score: 4, value: 'continuous_learning' },
      { label: 'Digital literacy tinggi di semua level organisasi.', score: 5, value: 'high_literacy' },
    ],
  },
  {
    id: 'p2',
    category: 'people',
    question: 'Budaya inovasi dan kolaborasi?',
    options: [
      { label: 'Hierarkis, silo ketat, takut gagal.', score: 1, value: 'silo_fear' },
      { label: 'Kolaborasi hanya terjadi jika dipaksa atasan.', score: 2, value: 'forced_collab' },
      { label: 'Ada tim inovasi khusus, sisanya BAU (Business As Usual).', score: 3, value: 'innovation_lab' },
      { label: 'Budaya terbuka, kolaborasi lintas divisi didorong.', score: 4, value: 'open_collab' },
      { label: 'Eksperimen didukung, kegagalan dianggap pembelajaran.', score: 5, value: 'fail_fast' },
    ],
  },
  {
    id: 'p3',
    category: 'people',
    question: 'Manajemen Perubahan (Change Management)?',
    options: [
      { label: 'Perubahan dipaksakan tanpa komunikasi jelas.', score: 1, value: 'forced' },
      { label: 'Komunikasi satu arah dari manajemen.', score: 2, value: 'one_way' },
      { label: 'Ada sosialisasi dan training saat implementasi.', score: 3, value: 'socialization' },
      { label: 'Change Agent ditunjuk di setiap departemen.', score: 4, value: 'change_agents' },
      { label: 'Perubahan adalah norma, karyawan proaktif beradaptasi.', score: 5, value: 'adaptive_culture' },
    ],
  },
];

export const recommendations = {
  strategy: {
    low: {
      title: 'Definisikan Visi & Roadmap',
      modules: ['Strategic Planning', 'OKR Management'],
      advice: 'Mulailah dengan workshop manajemen untuk menyepakati visi digital. Jangan beli tools sebelum tahu tujuannya.',
    },
    medium: {
      title: 'Penyelarasan Strategis',
      modules: ['Project Portfolio Management', 'Budgeting'],
      advice: 'Pastikan inisiatif departemen selaras dengan tujuan korporat. Alokasikan budget khusus untuk inovasi.',
    },
    high: {
      title: 'Ekosistem Digital',
      modules: ['Innovation Lab', 'Ecosystem Platform'],
      advice: 'Fokus pada membangun model bisnis baru berbasis platform dan kemitraan ekosistem.',
    },
  },
  customer: {
    low: {
      title: 'Kenali Pelanggan Anda',
      modules: ['CRM Basics', 'Survey Tools'],
      advice: 'Mulai kumpulkan database pelanggan secara terpusat. Petakan customer journey sederhana.',
    },
    medium: {
      title: 'Customer 360',
      modules: ['Omnichannel CRM', 'Customer Service Desk'],
      advice: 'Integrasikan data dari sales, marketing, dan support untuk satu pandangan utuh pelanggan.',
    },
    high: {
      title: 'Hyper-Personalization',
      modules: ['CDP (Customer Data Platform)', 'AI Recommendation'],
      advice: 'Gunakan AI untuk memberikan pengalaman personal unik bagi setiap pelanggan secara real-time.',
    },
  },
  operations: {
    low: {
      title: 'Digitasi Dokumen',
      modules: ['Document Management', 'Digital Signature'],
      advice: 'Eliminasi penggunaan kertas. Pindahkan semua pencatatan ke format digital yang bisa dilacak.',
    },
    medium: {
      title: 'Otomasi Proses',
      modules: ['BPA (Business Process Automation)', 'ERP Core'],
      advice: 'Hubungkan alur kerja antar departemen. Otomatisasi tugas repetitif administrasi.',
    },
    high: {
      title: 'Intelligent Operations',
      modules: ['RPA (Robotic Process Automation)', 'Smart Supply Chain'],
      advice: 'Terapkan robot software (RPA) dan sensor IoT untuk efisiensi operasional tingkat tinggi.',
    },
  },
  technology: {
    low: {
      title: 'Migrasi ke Cloud',
      modules: ['Cloud Infrastructure', 'SaaS Productivity'],
      advice: 'Tinggalkan server fisik on-premise yang sulit di-maintain. Beralih ke solusi SaaS.',
    },
    medium: {
      title: 'Integrasi & API',
      modules: ['API Management', 'Data Warehouse'],
      advice: 'Bangun jembatan antar aplikasi. Pastikan data mengalir lancar tanpa input manual ulang.',
    },
    high: {
      title: 'Future-Ready Tech',
      modules: ['AI/ML Engine', 'Edge Computing'],
      advice: 'Investasi pada arsitektur microservices dan kecerdasan buatan untuk skalabilitas tak terbatas.',
    },
  },
  people: {
    low: {
      title: 'Literasi Digital',
      modules: ['LMS (Learning Management System)', 'Knowledge Base'],
      advice: 'Wajibkan pelatihan dasar digital. Sediakan pusat pengetahuan yang mudah diakses karyawan.',
    },
    medium: {
      title: 'Budaya Kolaborasi',
      modules: ['Team Collaboration', 'Employee Engagement'],
      advice: 'Gunakan tools kolaborasi modern (seperti Slack/Teams yang terintegrasi). Dorong cross-functional team.',
    },
    high: {
      title: 'Organisasi Agile',
      modules: ['Talent Management', 'Agile Performance'],
      advice: 'Ubah struktur organisasi menjadi squad/tribe yang otonom. Rekrut talenta digital terbaik.',
    },
  },
};
