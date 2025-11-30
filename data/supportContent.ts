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
