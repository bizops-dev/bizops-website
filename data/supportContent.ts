
import { Server } from 'lucide-react';

// --- STATUS PAGE DATA ---
export const statusData = {
  currentStatus: "All Systems Operational",
  lastUpdated: "Updated automatically 1 minute ago",
  apiResponseTime: "45ms",
  systems: [
    { name: "Web Dashboard Access", status: "Operational", uptime: "100%", desc: "Akses admin panel via browser." },
    { name: "Mobile App API Gateway", status: "Operational", uptime: "99.99%", desc: "Sinkronisasi data aplikasi Android/iOS." },
    { name: "Database Cluster (Jakarta)", status: "Operational", uptime: "100%", desc: "Primary PostgreSQL Node." },
    { name: "Background Jobs (Worker)", status: "Operational", uptime: "100%", desc: "Proses antrian email, PDF generation." }
  ],
  thirdParty: [
    { name: "Email Delivery (SendGrid)", status: "Operational", desc: "Pengiriman notifikasi email transaksional." },
    { name: "Cloud Storage (AWS S3)", status: "Operational", desc: "Penyimpanan file lampiran dan backup." },
    { name: "WhatsApp Gateway", status: "Operational", desc: "Koneksi ke Meta Business API." }
  ],
  incidents: [
    { 
      date: "15 Agustus 2024", 
      title: "Degradasi Performa Pengiriman Email", 
      status: "Resolved", 
      duration: "22 Menit",
      desc: "Beberapa pengguna melaporkan keterlambatan penerimaan email OTP hingga 5 menit. Gangguan sementara pada penyedia SMTP pihak ketiga. Trafik dialihkan ke backup."
    }
  ]
};

// --- SYS REQ DATA ---
export const sysReqData = {
  server: [
    { item: "Operating System", spec: "Linux Ubuntu 22.04 LTS (Recommended), Debian 11, CentOS 8 Stream. (Windows Server not natively supported).", required: true },
    { item: "Database", spec: "PostgreSQL 14+", required: true },
    { item: "Caching", spec: "Redis 6+", required: true },
    { item: "Runtime", spec: "Python 3.10+, Node.js 18+, Yarn/NPM", required: true },
    { item: "Web Server", spec: "Nginx or HAProxy (Reverse Proxy)", required: true },
    { item: "Hardware (Min)", spec: "2 vCPU, 4GB RAM, 40GB SSD (For < 50 Users)", required: true }
  ],
  client: [
    { item: "Web Browser", spec: "Google Chrome (Latest 3 versions), Mozilla Firefox, Safari, Microsoft Edge.", note: "IE11 not supported" },
    { item: "Mobile Android", spec: "Android 10 (Q) or newer. Min 3GB RAM.", note: "Camera min 8MP + Autofocus required for OCR" },
    { item: "Mobile iOS", spec: "iOS 15 or newer. Compatible with iPhone & iPad.", note: "" }
  ],
  network: [
    { port: "80/443", dir: "Outbound", desc: "Access to license.bizops.id and package repositories (github, pypi)" },
    { port: "587/465", dir: "Outbound", desc: "SMTP Email Delivery" }
  ]
};

// --- SECURITY REPORT DATA ---
export const securityReportData = {
  scope: {
    in: ["app.bizops.id (Core App)", "api.bizops.id (API)", "BizOps Mobile App (Android/iOS)"],
    out: ["DDoS Attacks", "Social Engineering (Phishing)", "Physical Security of Offices", "Spamming"]
  }
};

// --- MIGRATION FAQS ---
export const migrationFaqs = [
  {
    q: "Format file apa yang didukung untuk impor data?",
    a: "BizOps mendukung format standar .CSV (Comma Separated Values) dan .XLSX (Microsoft Excel). Kami menyediakan template standar yang bisa Anda unduh di dashboard migrasi untuk meminimalisir error pemetaan kolom."
  },
  {
    q: "Bagaimana dengan saldo awal (Opening Balance) akuntansi?",
    a: "Anda dapat mengimpor saldo awal akun (COA), piutang (AR), dan hutang (AP) per tanggal cut-off. Sistem akan otomatis membuat jurnal pembuka. Kami menyarankan melakukan cut-off di akhir bulan."
  },
  {
    q: "Apakah data saya aman saat proses upload?",
    a: "Ya. File yang Anda unggah diproses melalui koneksi terenkripsi (TLS 1.3) dan segera dihapus dari server sementara setelah proses impor ke database selesai. Kami tidak menyimpan file mentah Anda."
  },
  {
    q: "Bisakah saya membatalkan impor jika ada kesalahan?",
    a: "Untuk impor master data (Produk/Pelanggan), kami menyediakan fitur 'Rollback' dalam 1 jam pertama. Namun, untuk data transaksi, kami sarankan melakukan backup database sebelum impor massal."
  }
];

// --- LEGAL CONTENT ---
export const legalContent: Record<string, any> = {
  'privacy': {
    title: "Privacy Policy & Data Compliance",
    subtitle: "Kebijakan Privasi, Perlindungan Data Pribadi (PDP), dan Hak Pengguna",
    content: `
      <h3>1. Komitmen Privasi & Kepatuhan (Privacy Commitment)</h3>
      <p>Di PT Divistant Teknologi Indonesia ("BizOps"), privasi Anda bukan sekadar kepatuhan hukum, tetapi hak fundamental. Kebijakan ini disusun berdasarkan <strong>UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP)</strong> dan selaras dengan standar global <strong>GDPR</strong>.</p>

      <h3>2. Peran Kami: Processor vs Controller</h3>
      <p>Untuk memastikan transparansi peran:</p>
      <ul>
        <li><strong>Data Controller:</strong> Anda (Klien/Perusahaan) adalah pengendali penuh atas data operasional yang diinput (Data Karyawan, Keuangan, Pelanggan). Anda yang menentukan tujuan pemrosesan data tersebut.</li>
        <li><strong>Data Processor:</strong> BizOps bertindak sebagai pemroses data. Kami hanya memproses data tersebut sesuai instruksi sistem Anda untuk menyediakan layanan ERP.</li>
      </ul>

      <h3>3. Data yang Kami Kumpulkan</h3>
      <ul>
        <li><strong>Data Identitas:</strong> Nama, alamat email kantor, nomor telepon (untuk 2FA/OTP).</li>
        <li><strong>Data Teknis:</strong> Alamat IP, jenis perangkat, log akses sistem (untuk keamanan & audit trail ISO 27001).</li>
        <li><strong>Cookies:</strong> Cookies esensial untuk manajemen sesi dan cookies analitik (opsional) untuk peningkatan layanan.</li>
      </ul>

      <h3>4. Hak Subjek Data (Data Subject Rights)</h3>
      <p>Sesuai regulasi UU PDP dan GDPR, Anda memiliki hak penuh atas data pribadi Anda:</p>
      <ul>
        <li><strong>Hak Akses & Portabilitas (Data Portability):</strong> Anda berhak meminta salinan data Anda dalam format terstruktur (JSON/CSV).</li>
        <li><strong>Hak Perbaikan (Rectification):</strong> Anda dapat mengubah data profil yang tidak akurat kapan saja melalui dashboard pengaturan.</li>
        <li><strong>Hak Penghapusan (Right to be Forgotten):</strong> Anda berhak meminta penghapusan akun dan data permanen, kecuali data yang wajib disimpan untuk kepatuhan pajak/hukum (Retensi Data).</li>
        <li><strong>Hak Membatasi Pemrosesan:</strong> Anda dapat meminta pembatasan penggunaan data tertentu jika terjadi sengketa akurasi.</li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
         <h4 class="font-bold text-blue-900 mb-2">Pusat Kontrol Privasi (Privacy Center)</h4>
         <p class="text-sm text-blue-800 mb-4">
            Kami telah menyediakan dashboard mandiri bagi Anda untuk mengelola hak privasi Anda secara digital, termasuk permintaan ekspor data dan penghapusan akun.
         </p>
         <a href="/#/legal/data-rights" class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Buka Privacy Center
         </a>
      </div>

      <h3>5. Penyimpanan & Keamanan Data</h3>
      <p>Data Anda disimpan di pusat data Tier-3 yang berlokasi di <strong>Jakarta, Indonesia</strong> (untuk BizOps Cloud), mematuhi PP No. 71 Tahun 2019. Kami menerapkan enkripsi AES-256 untuk data tersimpan (at rest) dan TLS 1.3 untuk data terkirim (in transit).</p>

      <h3>6. Transfer Data Internasional</h3>
      <p>Kami tidak mentransfer data Anda ke luar yurisdiksi Indonesia kecuali untuk layanan pendukung esensial (misal: CDN global) yang telah memiliki Standard Contractual Clauses (SCC) yang setara dengan standar perlindungan data Indonesia.</p>

      <h3>7. Hubungi Kami</h3>
      <p>Jika Anda memiliki pertanyaan mengenai praktik privasi ini, silakan hubungi Data Protection Officer kami di <a href="mailto:dpo@bizops.id" class="text-primary-600 hover:underline">dpo@bizops.id</a>.</p>
    `
  },
  'data-rights': {
    title: "Privacy Center (Data Rights)",
    subtitle: "Kontrol Penuh atas Data Digital Anda (DSAR Dashboard)",
    content: "Dashboard interaktif ini memungkinkan Anda menggunakan hak subjek data sesuai UU PDP." 
  },
  'dpa': {
    title: "Data Processing Agreement (DPA)",
    subtitle: "Perjanjian Pemrosesan Data untuk Enterprise",
    content: `
      <h3>1. Definisi & Lingkup</h3>
      <p>Dokumen ini mengatur hubungan antara Pelanggan (sebagai Pengendali Data) dan BizOps (sebagai Pemroses Data). Perjanjian ini mengikat secara hukum sesuai dengan kontrak berlangganan Enterprise Anda.</p>
      
      <h3>2. Sub-Processor Resmi</h3>
      <p>BizOps menggunakan sub-processor pihak ketiga berikut untuk menunjang layanan. Seluruh sub-processor telah diaudit kepatuhannya:</p>
      <ul>
        <li><strong>Google Cloud Platform (Jakarta Region):</strong> Infrastruktur Server & Database.</li>
        <li><strong>SendGrid (Twilio):</strong> Layanan pengiriman email transaksional (SMTP).</li>
        <li><strong>Sentry:</strong> Monitoring error dan kinerja aplikasi.</li>
      </ul>
      
      <h3>3. Lokalisasi Data</h3>
      <p>Kami menjamin seluruh data utama (Core Data) tetap berada di wilayah kedaulatan Republik Indonesia sesuai PP 71/2019.</p>
    `
  },
  'ai-ethics': {
    title: "AI Ethics & Transparency Policy",
    subtitle: "Kode Etik Penggunaan Kecerdasan Buatan",
    content: `
      <h3>1. Human-in-the-Loop</h3>
      <p>Fitur AI di BizOps (seperti <em>Demand Forecasting</em> atau <em>OCR Expense</em>) dirancang sebagai sistem pendukung keputusan (Decision Support System), bukan pengambil keputusan otomatis. Keputusan final seperti 'Approve PO' atau 'Pecat Karyawan' tetap membutuhkan tindakan manusia.</p>
      
      <h3>2. Transparansi Algoritma</h3>
      <p>Kami berkomitmen untuk menjelaskan faktor-faktor yang mempengaruhi output AI (Explainable AI). Misalnya, jika sistem merekomendasikan restock, kami menampilkan data historis yang mendasarinya.</p>
      
      <h3>3. Non-Diskriminasi</h3>
      <p>Kami secara rutin mengaudit model AI kami untuk memastikan tidak ada bias sistematis, terutama pada modul HR (Screening Kandidat).</p>
    `
  },
  'terms': {
    title: "Terms of Service",
    subtitle: "Syarat & Ketentuan Penggunaan Layanan",
    content: `
      <h3>1. Penerimaan Syarat</h3>
      <p>Dengan mengakses atau menggunakan layanan BizOps, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju, Anda tidak boleh menggunakan layanan kami.</p>
      
      <h3>2. Lisensi Penggunaan</h3>
      <p>Kami memberikan Anda lisensi terbatas, non-eksklusif, dan tidak dapat dipindahtangankan untuk menggunakan layanan kami sesuai dengan paket langganan Anda.</p>
      
      <h3>3. Pembatasan</h3>
      <p>Anda tidak diperbolehkan untuk merekayasa balik, mendekompilasi, atau membongkar komponen apa pun dari layanan kami, atau menggunakan layanan untuk tujuan ilegal.</p>
    `
  },
  'sla': {
    title: "Service Level Agreement (SLA)",
    subtitle: "Jaminan Tingkat Layanan & Kompensasi",
    content: `
      <h3>1. Jaminan Uptime 99.9%</h3>
      <p>Kami menjamin ketersediaan layanan sebesar 99.9% setiap bulan kalender. Ini berarti toleransi downtime maksimal adalah sekitar 43 menit per bulan.</p>
      
      <h3>2. Kredit Layanan (Service Credits)</h3>
      <p>Jika kami gagal memenuhi jaminan uptime, Anda berhak atas kompensasi berupa potongan tagihan bulan berikutnya:</p>
      <ul>
         <li><strong>Uptime 99.0% - 99.9%:</strong> Kredit 10%</li>
         <li><strong>Uptime 95.0% - 99.0%:</strong> Kredit 25%</li>
         <li><strong>Uptime < 95.0%:</strong> Kredit 50%</li>
      </ul>
      
      <h3>3. Pemeliharaan Terjadwal</h3>
      <p>Pemeliharaan rutin yang telah diberitahukan setidaknya 24 jam sebelumnya tidak dihitung sebagai downtime dalam perhitungan SLA ini.</p>
    `
  },
  'cookies': {
    title: "Cookie Preferences",
    subtitle: "Pengaturan & Kebijakan Cookies",
    content: `
      <h3>1. Apa itu Cookies?</h3>
      <p>Cookies adalah file teks kecil yang disimpan di perangkat Anda saat mengunjungi website kami. Cookies membantu kami mengenali Anda, mengingat preferensi Anda, dan mengamankan akses Anda.</p>
      
      <h3>2. Bagaimana Kami Menggunakan Cookies</h3>
      <p>Kami menggunakan cookies untuk tujuan berikut:</p>
      <ul>
         <li><strong>Esensial:</strong> Diperlukan agar website berfungsi (misal: login, keamanan).</li>
         <li><strong>Analitik:</strong> Membantu kami memahami bagaimana website digunakan untuk peningkatan performa.</li>
         <li><strong>Pemasaran:</strong> Digunakan untuk menyajikan konten yang relevan bagi Anda.</li>
      </ul>
      
      <h3>3. Kendali Anda</h3>
      <p>Anda dapat mengubah pengaturan cookies Anda kapan saja melalui panel di bawah ini. Penolakan cookies tertentu mungkin mempengaruhi pengalaman penggunaan website.</p>
    `
  }
};
