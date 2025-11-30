export interface LegalDoc {
  title: string;
  subtitle: string;
  updated: string;
  content: string; // HTML string
}

export const legalContent: Record<string, LegalDoc> = {
  privacy: {
    title: "Kebijakan Privasi",
    subtitle: "Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
    updated: "2024-01-01",
    content: `
      <h2>1. Pendahuluan</h2>
      <p>BizOps ("kami") menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan situs web kami, perangkat lunak Enterprise Resource Planning (ERP), dan layanan terkait ("Layanan").</p>
      <p>Dengan menggunakan Layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini. Kebijakan ini disusun berdasarkan Undang-Undang Perlindungan Data Pribadi (UU PDP) Indonesia dan prinsip-prinsip General Data Protection Regulation (GDPR).</p>

      <h2>2. Data yang Kami Kumpulkan</h2>
      <p>Kami mengumpulkan beberapa jenis informasi untuk berbagai tujuan guna menyediakan dan meningkatkan Layanan kami kepada Anda:</p>
      <ul>
        <li><strong>Data Identitas:</strong> Nama lengkap, alamat email, nomor telepon, dan jabatan.</li>
        <li><strong>Data Bisnis:</strong> Nama perusahaan, NPWP, struktur organisasi, dan data operasional yang Anda input ke dalam sistem ERP.</li>
        <li><strong>Data Teknis:</strong> Alamat IP, jenis browser, versi sistem operasi, dan log aktivitas sistem.</li>
        <li><strong>Data Transaksi:</strong> Riwayat pembayaran, faktur, dan detail lisensi langganan.</li>
      </ul>

      <h2>3. Penggunaan Data</h2>
      <p>Kami menggunakan data yang dikumpulkan untuk:</p>
      <ul>
        <li>Menyediakan, mengoperasikan, dan memelihara Layanan ERP kami.</li>
        <li>Memproses transaksi dan mengelola akun pelanggan Anda.</li>
        <li>Mengirimkan notifikasi teknis, pembaruan keamanan, dan dukungan administratif.</li>
        <li>Mendeteksi dan mencegah penipuan atau penyalahgunaan layanan.</li>
        <li>Analisis statistik untuk pengembangan produk (data dianonimkan).</li>
      </ul>

      <h2>4. Keamanan Data</h2>
      <p>Keamanan data Anda adalah prioritas utama kami. Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang ketat, termasuk:</p>
      <ul>
        <li>Enkripsi data saat transit (SSL/TLS) dan saat istirahat (AES-256).</li>
        <li>Kontrol akses berbasis peran (RBAC) yang ketat.</li>
        <li>Audit keamanan berkala dan sertifikasi ISO 27001 (dalam proses).</li>
      </ul>
      <p>Namun, perlu diingat bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman.</p>

      <h2>5. Berbagi Data dengan Pihak Ketiga</h2>
      <p>Kami tidak menjual data Anda kepada pihak ketiga. Kami hanya membagikan data kepada:</p>
      <ul>
        <li><strong>Sub-prosesor:</strong> Penyedia layanan cloud (misal: AWS, Google Cloud) yang membantu infrastruktur kami.</li>
        <li><strong>Mitra Integrasi:</strong> Pihak ketiga yang Anda pilih untuk diintegrasikan (misal: Payment Gateway, E-commerce), hanya atas instruksi Anda.</li>
        <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau panggilan pengadilan yang sah.</li>
      </ul>

      <h2>6. Hak Anda</h2>
      <p>Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda. Silakan kunjungi halaman <a href="/legal/data-rights">Privacy Center</a> kami untuk mengajukan permintaan terkait hak subjek data (DSAR).</p>

      <h2>7. Hubungi Kami</h2>
      <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi Data Protection Officer (DPO) kami di: <a href="mailto:privacy@bizops.id">privacy@bizops.id</a>.</p>
    `
  },
  "data-rights": {
    title: "Privacy Center (DSAR)",
    subtitle: "Kelola hak privasi dan kontrol penuh atas data Anda.",
    updated: "2024-01-01",
    content: "Content rendered via Component" 
  },
  dpa: {
    title: "Data Processing Agreement",
    subtitle: "Perjanjian pemrosesan data untuk pelanggan Enterprise.",
    updated: "2024-01-01",
    content: `
      <h2>1. Definisi</h2>
      <p>Perjanjian Pemrosesan Data ("DPA") ini merupakan bagian integral dari Ketentuan Layanan BizOps. Dalam DPA ini, Pelanggan bertindak sebagai "Pengendali Data" dan BizOps bertindak sebagai "Pemroses Data".</p>

      <h2>2. Lingkup Pemrosesan</h2>
      <p>BizOps akan memproses Data Pribadi hanya atas nama dan sesuai dengan instruksi tertulis dari Pelanggan, kecuali dipersyaratkan lain oleh hukum yang berlaku. Sifat dan tujuan pemrosesan adalah untuk menyediakan Layanan ERP SaaS sesuai perjanjian utama.</p>

      <h2>3. Kewajiban BizOps</h2>
      <ul>
        <li><strong>Kerahasiaan:</strong> Memastikan bahwa personel yang berwenang untuk memproses data pribadi telah berkomitmen pada kerahasiaan.</li>
        <li><strong>Keamanan:</strong> Mengambil semua langkah yang diperlukan sesuai dengan Pasal 32 GDPR (Keamanan Pemrosesan) dan regulasi lokal terkait enkripsi dan ketahanan sistem.</li>
        <li><strong>Sub-pemrosesan:</strong> Tidak melibatkan sub-pemroses lain tanpa izin umum atau spesifik tertulis dari Pelanggan. Daftar sub-pemroses saat ini tersedia di halaman <a href="/trust">Trust Center</a>.</li>
        <li><strong>Bantuan:</strong> Membantu Pelanggan dalam menanggapi permintaan pelaksanaan hak subjek data.</li>
      </ul>

      <h2>4. Audit dan Inspeksi</h2>
      <p>BizOps akan menyediakan informasi yang diperlukan untuk menunjukkan kepatuhan terhadap kewajiban dalam DPA ini dan memungkinkan audit yang dilakukan oleh Pelanggan atau auditor yang ditunjuk Pelanggan (dengan pemberitahuan wajar dan biaya ditanggung Pelanggan).</p>

      <h2>5. Transfer Data Internasional</h2>
      <p>Jika data diproses di luar yurisdiksi asal (misal: transfer data dari EU ke Indonesia), BizOps menjamin perlindungan yang setara melalui Standard Contractual Clauses (SCC) atau mekanisme legal lainnya yang valid.</p>

      <h2>6. Penghapusan Data</h2>
      <p>Setelah penghentian layanan, BizOps akan, atas pilihan Pelanggan, menghapus atau mengembalikan semua Data Pribadi kepada Pelanggan, kecuali hukum mewajibkan penyimpanan data tersebut.</p>
    `
  },
  "ai-ethics": {
    title: "AI Ethics & Safety",
    subtitle: "Komitmen kami terhadap pengembangan Artificial Intelligence yang bertanggung jawab.",
    updated: "2024-02-15",
    content: `
      <h2>1. Prinsip AI BizOps</h2>
      <p>BizOps mengintegrasikan kecerdasan buatan (AI) untuk meningkatkan efisiensi bisnis. Kami berkomitmen pada prinsip-prinsip berikut:</p>
      <ul>
        <li><strong>Transparansi:</strong> Pengguna harus mengetahui kapan mereka berinteraksi dengan AI dan bagaimana keputusan AI dibuat (Explainable AI).</li>
        <li><strong>Keadilan (Fairness):</strong> Kami secara aktif menguji model kami untuk meminimalkan bias algoritmik terkait gender, ras, atau status sosial ekonomi.</li>
        <li><strong>Privasi & Keamanan:</strong> Data pelanggan tidak digunakan untuk melatih model AI publik/umum tanpa persetujuan eksplisit. Data Anda tetap milik Anda.</li>
        <li><strong>Kontrol Manusia:</strong> AI bertindak sebagai asisten (co-pilot), bukan pengambil keputusan akhir. Keputusan kritis bisnis selalu memerlukan validasi manusia.</li>
      </ul>

      <h2>2. Penggunaan Generative AI</h2>
      <p>Fitur BizOps Copilot menggunakan teknologi Large Language Model (LLM). Harap diperhatikan:</p>
      <ul>
        <li>Jangan memasukkan informasi rahasia pribadi (PII) sensitif ke dalam prompt chat AI kecuali fitur tersebut ditandai sebagai 'Secure Context'.</li>
        <li>Output dari Generative AI mungkin mengandung ketidakakuratan (halusinasi). Selalu verifikasi fakta dan angka yang dihasilkan.</li>
      </ul>

      <h2>3. Keamanan Data Pelatihan</h2>
      <p>BizOps tidak membagikan data operasional mentah Anda kepada penyedia model AI pihak ketiga (seperti OpenAI atau Anthropic) untuk tujuan pelatihan model dasar mereka (Zero Data Retention policy pada API).</p>
    `
  },
  terms: {
    title: "Terms of Service",
    subtitle: "Syarat dan ketentuan penggunaan platform BizOps.",
    updated: "2023-12-01",
    content: `
      <h2>1. Penerimaan Ketentuan</h2>
      <p>Dengan mendaftar atau menggunakan layanan BizOps, Anda menyetujui untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak setuju, Anda tidak diizinkan menggunakan layanan kami.</p>

      <h2>2. Lisensi Penggunaan</h2>
      <p>Kami memberikan lisensi terbatas, non-eksklusif, dan tidak dapat dipindahtangankan untuk mengakses dan menggunakan platform BizOps untuk tujuan bisnis internal Anda selama masa berlangganan aktif.</p>

      <h2>3. Kewajiban Pengguna</h2>
      <p>Anda bertanggung jawab untuk:</p>
      <ul>
        <li>Menjaga kerahasiaan kredensial akun Anda.</li>
        <li>Semua aktivitas yang terjadi di bawah akun Anda.</li>
        <li>Memastikan data yang Anda input tidak melanggar hukum atau hak kekayaan intelektual pihak lain.</li>
        <li>Tidak melakukan reverse engineering atau mencoba meretas sistem kami.</li>
      </ul>

      <h2>4. Pembayaran dan Biaya</h2>
      <p>Layanan ditagih di muka secara bulanan atau tahunan. Semua pembayaran bersifat non-refundable kecuali dinyatakan lain dalam SLA. Keterlambatan pembayaran dapat mengakibatkan penangguhan akun sementara.</p>

      <h2>5. Batasan Tanggung Jawab</h2>
      <p>Sejauh diizinkan oleh hukum, BizOps tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial (termasuk kehilangan keuntungan atau data) yang timbul dari penggunaan layanan.</p>

      <h2>6. Penghentian Layanan</h2>
      <p>Kami berhak menangguhkan atau menghentikan akses Anda jika terjadi pelanggaran terhadap ketentuan ini. Anda dapat membatalkan langganan kapan saja melalui dashboard admin, efektif pada akhir periode penagihan berjalan.</p>
    `
  },
  sla: {
    title: "Service Level Agreement (SLA)",
    subtitle: "Jaminan ketersediaan layanan dan dukungan teknis.",
    updated: "2024-01-01",
    content: `
      <h2>1. Jaminan Uptime</h2>
      <p>BizOps menjamin ketersediaan layanan (uptime) sebesar <strong>99.9%</strong> setiap bulannya. Ketersediaan dihitung tidak termasuk pemeliharaan terjadwal yang telah diberitahukan sebelumnya.</p>

      <h2>2. Kompensasi Layanan (SLA Credit)</h2>
      <p>Jika kami gagal memenuhi jaminan uptime, Anda berhak mendapatkan kredit layanan sebagai berikut:</p>
      <ul>
        <li><strong>Uptime 99.0% - 99.89%:</strong> Kredit 10% dari biaya bulanan.</li>
        <li><strong>Uptime 95.0% - 98.99%:</strong> Kredit 25% dari biaya bulanan.</li>
        <li><strong>Uptime < 95.0%:</strong> Kredit 50% dari biaya bulanan.</li>
      </ul>
      <p>Klaim kredit harus diajukan dalam waktu 30 hari setelah akhir bulan terjadinya insiden.</p>

      <h2>3. Waktu Respon Dukungan</h2>
      <p>Target waktu respon awal untuk tiket dukungan bergantung pada paket langganan Anda:</p>
      <ul>
        <li><strong>Standard:</strong> < 24 jam (Jam Kerja).</li>
        <li><strong>Pro/Enterprise:</strong> < 4 jam (Jam Kerja) untuk isu Kritis.</li>
      </ul>
      <p>Isu Kritis didefinisikan sebagai kegagalan sistem total yang menghambat operasi bisnis utama tanpa solusi alternatif.</p>

      <h2>4. Pemeliharaan Terjadwal</h2>
      <p>Kami melakukan pemeliharaan rutin pada akhir pekan di luar jam kerja bisnis standar (WIB). Pemberitahuan akan dikirimkan minimal 48 jam sebelum pemeliharaan yang berpotensi menyebabkan downtime.</p>
    `
  },
  cookies: {
    title: "Cookie Preferences",
    subtitle: "Atur bagaimana kami menggunakan cookie pada browser Anda.",
    updated: "2024-01-01",
    content: `
      <h2>Apa itu Cookie?</h2>
      <p>Cookie adalah file teks kecil yang disimpan di perangkat Anda saat mengunjungi situs web. Cookie membantu kami mengingat preferensi Anda, meningkatkan pengalaman pengguna, dan menganalisis trafik situs.</p>
      
      <h2>Jenis Cookie yang Kami Gunakan</h2>
      <ul>
        <li><strong>Strictly Necessary:</strong> Wajib agar website berfungsi (misal: login session). Tidak bisa dimatikan.</li>
        <li><strong>Analytics:</strong> Membantu kami memahami halaman mana yang populer. Data bersifat anonim.</li>
        <li><strong>Marketing:</strong> Digunakan untuk menargetkan iklan yang relevan bagi Anda.</li>
      </ul>

      <p>Anda dapat mengubah preferensi cookie Anda kapan saja menggunakan panel kendali di bawah ini.</p>
    `
  },
  accessibility: {
    title: "Accessibility Statement",
    subtitle: "Komitmen kami untuk membuat BizOps dapat diakses oleh semua orang.",
    updated: "2024-03-01",
    content: `
      <h2>Komitmen Aksesibilitas</h2>
      <p>BizOps berkomitmen untuk memastikan bahwa platform dan situs web kami dapat diakses oleh penyandang disabilitas. Kami terus berupaya meningkatkan pengalaman pengguna bagi semua orang dan menerapkan standar aksesibilitas yang relevan.</p>
      
      <h2>Standar Kepatuhan</h2>
      <p>Situs web ini dirancang agar sesuai dengan <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. Standar ini menjabarkan cara membuat konten web lebih mudah diakses oleh orang dengan berbagai disabilitas, termasuk gangguan penglihatan, pendengaran, kognitif, dan motorik.</p>
      
      <h2>Fitur Aksesibilitas</h2>
      <ul>
        <li><strong>Navigasi Keyboard:</strong> Seluruh situs dapat dinavigasi menggunakan keyboard (Tab, Enter, Esc).</li>
        <li><strong>Pembaca Layar:</strong> Kompatibilitas dengan screen reader populer seperti NVDA, JAWS, dan VoiceOver melalui penggunaan label ARIA yang tepat.</li>
        <li><strong>Kontras Warna:</strong> Kami memastikan rasio kontras teks dan latar belakang memenuhi standar minimum 4.5:1 untuk keterbacaan optimal.</li>
        <li><strong>Teks Alternatif (Alt Text):</strong> Gambar informatif dilengkapi dengan deskripsi teks alternatif.</li>
        <li><strong>Zooming:</strong> Tata letak responsif hingga perbesaran browser 200% tanpa kehilangan konten.</li>
      </ul>
      
      <h2>Umpan Balik</h2>
      <p>Kami menyadari bahwa mungkin masih ada bagian dari situs web kami yang belum sepenuhnya dapat diakses. Jika Anda mengalami kesulitan mengakses konten apa pun di BizOps, silakan hubungi kami:</p>
      <ul>
        <li>Email: <a href="mailto:accessibility@bizops.id">accessibility@bizops.id</a></li>
        <li>Telepon: +62 21 3970 2834</li>
      </ul>
      <p>Kami berupaya menanggapi umpan balik aksesibilitas dalam waktu 2 hari kerja.</p>
    `
  },
  "security-report": {
    title: "Vulnerability Disclosure Policy",
    subtitle: "Laporkan kerentanan keamanan secara bertanggung jawab.",
    updated: "2024-01-15",
    content: `
      <h2>Filosofi Keamanan Kami</h2>
      <p>BizOps memprioritaskan keamanan data pelanggan di atas segalanya. Kami menghargai peran komunitas peneliti keamanan independen dalam membantu kami menjaga standar keamanan tertinggi melalui pelaporan kerentanan yang bertanggung jawab (Responsible Disclosure).</p>
      
      <h2>Ruang Lingkup (Scope)</h2>
      <p>Target berikut berada <strong>DALAM RUANG LINGKUP</strong> program ini:</p>
      <ul>
        <li>*.bizops.id (Aplikasi Web & API)</li>
        <li>BizOps Mobile App (Android & iOS)</li>
      </ul>
      <p>Target berikut berada <strong>DI LUAR RUANG LINGKUP</strong>:</p>
      <ul>
        <li>Serangan DDoS atau gangguan layanan fisik.</li>
        <li>Social Engineering (Phishing) terhadap karyawan atau pelanggan.</li>
        <li>Situs web pihak ketiga yang terintegrasi (misal: payment gateway).</li>
      </ul>
      
      <h2>Cara Melaporkan</h2>
      <p>Jika Anda menemukan kerentanan keamanan, harap laporkan segera melalui formulir terenkripsi di halaman ini atau kirim email ke <a href="mailto:security@bizops.id">security@bizops.id</a>. Harap sertakan:</p>
      <ul>
        <li>Deskripsi kerentanan dan dampaknya.</li>
        <li>Langkah-langkah reproduksi (Proof of Concept).</li>
        <li>Versi browser/aplikasi yang digunakan.</li>
      </ul>
      
      <h2>Aturan Main (Rules of Engagement)</h2>
      <ul>
        <li>Jangan mengakses, memodifikasi, atau menghapus data milik pengguna lain.</li>
        <li>Berikan kami waktu yang wajar (minimal 30 hari) untuk memperbaiki masalah sebelum mempublikasikannya.</li>
        <li>Bertindaklah dengan itikad baik untuk tidak merusak layanan kami.</li>
      </ul>
      
      <h2>Apresiasi (Hall of Fame)</h2>
      <p>Sebagai tanda terima kasih, kami mencantumkan nama peneliti yang telah berkontribusi secara signifikan dalam mengamankan platform kami di halaman <a href="/trust/hall-of-fame">Security Hall of Fame</a> kami. (Catatan: Saat ini kami tidak menawarkan bounty tunai publik).</p>
    `
  }
};
