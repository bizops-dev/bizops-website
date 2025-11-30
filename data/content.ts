import { 
  Activity, DollarSign, Server, Lightbulb, Video, 
  GraduationCap, Flag, Users, Package, Code, Wrench, 
  FileSpreadsheet, Cloud, Zap, Shield, Smartphone, Globe, BarChart
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
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2071&auto=format&fit=crop", // Accounting/Tax
    summary: "Aturan pajak baru seringkali membingungkan. Artikel investigatif ini membedah simulasi perhitungan TER harian vs bulanan, dampak langsung pada Cashflow karyawan, dan bagaimana algoritma BizOps mengotomatisasi kepatuhan ini 100%.",
    content: `
      <p class="lead text-xl text-slate-600 mb-8 font-light">Perubahan regulasi PPh 21 melalui PP 58/2023 membawa angin segar sekaligus tantangan administratif baru bagi departemen HR di seluruh Indonesia. Apa dampak sebenarnya bagi operasional harian Anda?</p>
      
      <p>Bagi banyak HR Manager, awal tahun 2024 dimulai dengan kesibukan luar biasa menyesuaikan sistem payroll. Pemerintah memperkenalkan skema <strong>Tarif Efektif Rata-rata (TER)</strong> yang diklaim menyederhanakan perhitungan. Namun, di lapangan, hal ini justru menimbulkan pertanyaan baru: <em>"Apakah take home pay karyawan akan berubah?"</em> dan <em>"Bagaimana dengan perhitungan masa pajak terakhir di Desember?"</em></p>

      <h2 id="latar-belakang" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Latar Belakang Perubahan Regulasi</h2>
      <p class="mb-6 text-slate-700">Sejak Januari 2024, pemerintah memberlakukan metode Tarif Efektif Rata-rata (TER) untuk pemotongan PPh 21 masa pajak selain masa pajak terakhir. Tujuannya adalah penyederhanaan administrasi pemotongan pajak bagi pemberi kerja. Sebelumnya, HR harus menghitung PPh 21 bulanan dengan merujuk pada tarif pasal 17 UU PPh yang berlapis-lapis dan memperhitungkan biaya jabatan serta iuran pensiun setiap bulannya secara rinci.</p>
      
      <p>Dengan TER, perhitungan bulanan (Januari - November) menjadi jauh lebih sederhana:</p>
      <blockquote class="text-xl font-medium text-slate-800 italic border-l-4 border-blue-500 pl-6 my-8">
         "Penghasilan Bruto Bulanan x Tarif TER (Kategori A/B/C) = PPh 21 Terutang"
      </blockquote>

      <h2 id="dampak-cashflow" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Dampak pada Cashflow Karyawan</h2>
      <p class="mb-6 text-slate-700">Meskipun total pajak setahun tetap sama (karena dihitung ulang di Desember menggunakan tarif Pasal 17), metode pemotongan bulanan TER dapat menyebabkan fluktuasi <em>take home pay</em> bulanan yang berbeda dibanding metode sebelumnya. HR perlu mengkomunikasikan hal ini agar tidak terjadi kesalahpahaman.</p>
      
      <figure class="my-10">
        <img src="https://images.unsplash.com/photo-1554224154-260327c0ce04?q=80&w=2070&auto=format&fit=crop" alt="Analisis Keuangan" class="w-full rounded-2xl shadow-lg mb-4" />
        <figcaption class="text-center text-sm text-slate-500 italic">Ilustrasi analisis dampak finansial pada payroll karyawan.</figcaption>
      </figure>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-xl my-10">
        <h3 class="font-bold text-blue-900 text-lg mb-4">Poin Kunci Strategis untuk HR</h3>
        <ul class="space-y-3 text-blue-800">
           <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <strong>TER Harian vs Bulanan:</strong> Pahami bedanya untuk tenaga kerja lepas vs pegawai tetap.</li>
           <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <strong>Rekonsiliasi Akhir Tahun:</strong> Beban administrasi bergeser ke masa pajak Desember, di mana kurang bayar/lebih bayar akan dihitung. Siapkan cashflow perusahaan.</li>
           <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <strong>Sosialisasi:</strong> Lakukan townhall meeting untuk menjelaskan kenapa gaji bersih mungkin berfluktuasi.</li>
        </ul>
      </div>

      <h2 id="solusi-bizops" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Solusi Otomatisasi BizOps</h2>
      <p class="mb-6 text-slate-700">Modul Human Capital kami telah diperbarui dengan algoritma TER terbaru. Sistem secara otomatis:</p>
      <ol class="list-decimal list-inside space-y-2 mb-8 text-slate-700 ml-4">
         <li>Mengkategorikan status PTKP karyawan (K/0, K/1, TK/0, dst) ke dalam Kategori TER A, B, atau C.</li>
         <li>Menghitung PPh 21 bulanan secara real-time saat proses payroll run.</li>
         <li><strong>Fitur Prediksi Desember:</strong> Memberikan estimasi kurang bayar di bulan Desember sejak awal tahun, sehingga karyawan bisa menabung atau perusahaan bisa mencadangkan dana.</li>
      </ol>
      
      <p class="text-slate-700">Jangan biarkan tim HR Anda terjebak dalam pekerjaan manual yang rentan kesalahan. Beralihlah ke sistem yang <em>compliance-ready</em>.</p>
    `
  },
  {
    slug: "tanda-bisnis-tumbuh-lewat-batas",
    title: "5 Tanda Bisnis Anda Sudah 'Tumbuh Kelewat Batas' untuk Excel: Kapan Harus Migrasi?",
    date: "10 September 2024",
    author: "Sarah Wijaya, Ops Lead",
    category: "Operational Efficiency",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Analytics/Chart
    summary: "Apakah spreadsheet stok Anda mulai lambat dibuka dan sering crash? Kenali titik kritis di mana proses manual mulai membunuh profitabilitas Anda.",
    content: `
      <p class="lead text-xl text-slate-600 mb-8 font-light">Excel adalah alat yang luar biasa untuk memulai bisnis. Fleksibel, murah, dan semua orang bisa menggunakannya. Namun, seiring pertumbuhan transaksi, ia bisa berubah dari sahabat menjadi musuh terbesar efisiensi Anda.</p>
      
      <p>Banyak perusahaan bertahan menggunakan spreadsheet "karena sudah terbiasa", padahal biaya tersembunyi dari inefisiensi tersebut jauh lebih mahal daripada langganan sistem ERP. Berikut adalah 5 tanda lampu merah yang tidak boleh Anda abaikan.</p>

      <h2 id="version-control" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">1. "Version Control Nightmare"</h2>
      <p class="mb-6 text-slate-700">Pernahkah Anda melihat file bernama <code>Laporan_Keuangan_Final_Revisi_V3_FIX_BANGET.xlsx</code>? Jika ya, Anda dalam masalah. Ketika banyak orang mengedit file yang sama, risiko duplikasi data atau tertimpanya data penting menjadi sangat tinggi. Anda tidak pernah yakin mana data yang benar-benar "final".</p>

      <h2 id="data-silo" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">2. Data Silo & Kebutaan Informasi</h2>
      <p class="mb-6 text-slate-700">Tim Sales punya file Excel pelanggan sendiri. Tim Gudang punya file stok sendiri. Tim Finance punya file tagihan sendiri.</p>
      <p class="mb-6 text-slate-700">Akibatnya? Tim Sales menjual barang yang sebenarnya sudah habis di gudang karena file stok belum di-update. Atau Finance menagih pelanggan yang sebenarnya sudah bayar lewat Sales.</p>

      <figure class="my-10">
         <img src="https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2070&auto=format&fit=crop" alt="Frustrated with paperwork" class="w-full rounded-2xl shadow-lg mb-4" />
         <figcaption class="text-center text-sm text-slate-500 italic">Proses manual seringkali berujung pada frustrasi tim dan kesalahan data.</figcaption>
      </figure>

      <h2 id="waktu-loading" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">3. Waktu Loading yang Tidak Masuk Akal</h2>
      <p class="mb-6 text-slate-700">Jika membuka file laporan stok mingguan membutuhkan waktu lebih dari 30 detik—atau lebih parah, membuat komputer <em>not responding</em>—itu tandanya volume data Anda sudah melampaui kapasitas pemrosesan spreadsheet standar untuk bisnis.</p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-xl my-10">
         <h3 class="font-bold text-amber-900 text-lg mb-2">Risiko Keamanan Data</h3>
         <p class="text-amber-800">File Excel mudah dicopy-paste ke flashdisk pribadi karyawan. Tanpa sistem ERP dengan <em>User Access Control</em> yang ketat, database pelanggan dan rahasia harga pokok Anda bisa bocor ke kompetitor dengan sangat mudah.</p>
      </div>

      <h2 id="kapan-migrasi" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Kapan Saatnya Beralih?</h2>
      <p class="mb-6 text-slate-700">Jika Anda mengalami setidaknya 2 dari tanda-tanda di atas, menunda migrasi sistem hanya akan memperbesar kerugian (opportunity cost). BizOps menyediakan <em>Migration Tools</em> yang memudahkan Anda mengimpor data master dari Excel langsung ke sistem ERP dalam hitungan menit.</p>
    `
  },
  {
    slug: "maverick-buying",
    title: "Menghentikan 'Maverick Buying': Menutup Kebocoran Anggaran Terbesar",
    date: "22 August 2024",
    author: "Finance Team",
    category: "Finance & Cost Control",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2071&auto=format&fit=crop", // Finance/Cost
    summary: "Pembelian liar di luar kontrak vendor resmi bisa memboroskan anggaran hingga 15%. Pelajari bagaimana fitur Budget Checking menutup celah ini.",
    content: `
      <p class="lead text-xl text-slate-600 mb-8 font-light">Dalam audit pengadaan, sering ditemukan fenomena <strong>"Maverick Buying"</strong>: pembelian barang atau jasa oleh karyawan yang dilakukan di luar prosedur standar atau kontrak vendor yang telah disepakati.</p>
      
      <p class="mb-6 text-slate-700">Contoh sederhananya: Manajer Marketing membeli jasa percetakan brosur ke vendor temannya dengan harga Rp 10.000/eks, padahal perusahaan sudah memiliki kontrak korporat dengan vendor percetakan resmi seharga Rp 7.500/eks.</p>

      <h2 id="mengapa-berbahaya" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Mengapa Ini Berbahaya?</h2>
      <ul class="list-disc list-inside space-y-3 mb-8 text-slate-700 ml-4">
         <li><strong>Pemborosan Biaya:</strong> Anda kehilangan diskon volume yang sudah dinegosiasikan.</li>
         <li><strong>Risiko Kualitas:</strong> Vendor liar tidak melalui proses kualifikasi standar perusahaan.</li>
         <li><strong>Fraud:</strong> Membuka celah untuk <em>kickback</em> atau mark-up harga.</li>
      </ul>

      <figure class="my-10">
         <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Audit Meeting" class="w-full rounded-2xl shadow-lg mb-4" />
      </figure>

      <h2 id="solusi-policy" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Solusi: Enforce Policy by System</h2>
      <p class="mb-6 text-slate-700">Kebijakan tertulis saja tidak cukup. Anda membutuhkan sistem yang "memaksa" kepatuhan (system-enforced compliance).</p>
      
      <p class="mb-6 text-slate-700">Di BizOps Procurement Module, Anda bisa mengaktifkan fitur <strong>Strict Budget Checking</strong> & <strong>Approved Vendor List</strong>. Sistem akan otomatis menolak Purchase Request (PR) jika:</p>
      <ul class="list-disc list-inside space-y-2 mb-8 text-slate-700 ml-4">
         <li>Vendor yang dipilih tidak ada dalam daftar rekanan (kecuali ada override approval dari Direktur).</li>
         <li>Harga satuan di atas harga kontrak (Price List Agreement).</li>
         <li>Budget departemen untuk pos tersebut sudah habis.</li>
      </ul>
    `
  },
  {
    slug: "on-premise-vs-cloud",
    title: "On-Premise vs Cloud ERP: Analisis TCO & Kepatuhan untuk Korporasi",
    date: "05 August 2024",
    author: "Rendra Gunawan, CTO BizOps",
    category: "Tech & Sovereignty",
    image: "https://images.unsplash.com/photo-1558494949-efc0257bb3af?q=80&w=2070&auto=format&fit=crop", // Server/Cloud
    summary: "Analisis mendalam mengenai Total Cost of Ownership (TCO) 5 tahunan. Kapan saatnya Anda harus memegang server sendiri demi keamanan?",
    content: `
      <p class="lead text-xl text-slate-600 mb-8 font-light">Perdebatan klasik di ruang rapat direksi IT: <em>"Apakah kita sewa Cloud atau beli Server sendiri?"</em> Jawaban singkatnya: Tergantung. Jawaban panjangnya: Mari kita bedah angkanya.</p>

      <h2 id="tco-analysis" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Total Cost of Ownership (TCO) 5 Tahun</h2>
      <p class="mb-6 text-slate-700">Banyak perusahaan terjebak melihat biaya di muka (CAPEX) vs biaya bulanan (OPEX). Padahal, TCO mencakup biaya tersembunyi.</p>

      <div class="overflow-x-auto my-8 rounded-xl border border-slate-200">
         <table class="w-full text-left border-collapse">
            <thead>
               <tr class="bg-slate-100 border-b border-slate-200">
                  <th class="p-4 font-bold text-slate-700">Komponen Biaya</th>
                  <th class="p-4 font-bold text-slate-700">On-Premise (Server Sendiri)</th>
                  <th class="p-4 font-bold text-slate-700">Cloud ERP (SaaS)</th>
               </tr>
            </thead>
            <tbody class="text-sm">
               <tr class="border-b border-slate-100">
                  <td class="p-4 font-medium text-slate-900">License/Subs</td>
                  <td class="p-4 text-slate-600">Beli Putus (Mahal di awal)</td>
                  <td class="p-4 text-slate-600">Bulanan/Tahunan (Murah di awal)</td>
               </tr>
               <tr class="border-b border-slate-100">
                  <td class="p-4 font-medium text-slate-900">Hardware</td>
                  <td class="p-4 text-slate-600">Server, AC, Genset, Ruang</td>
                  <td class="p-4 text-slate-600">0 (Termasuk di langganan)</td>
               </tr>
               <tr class="border-b border-slate-100">
                  <td class="p-4 font-medium text-slate-900">IT Staff</td>
                  <td class="p-4 text-slate-600">Wajib Tim SysAdmin & Security</td>
                  <td class="p-4 text-slate-600">Minimal (Dikelola Vendor)</td>
               </tr>
               <tr>
                  <td class="p-4 font-medium text-slate-900">Electricity</td>
                  <td class="p-4 text-slate-600">Tinggi (24/7 cooling)</td>
                  <td class="p-4 text-slate-600">0</td>
               </tr>
            </tbody>
         </table>
      </div>

      <h2 id="kapan-onpremise" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Kapan Harus On-Premise?</h2>
      <p class="mb-6 text-slate-700">Meskipun Cloud lebih efisien secara biaya untuk 80% bisnis, On-Premise adalah kewajiban jika:</p>
      <ul class="list-disc list-inside space-y-2 mb-8 text-slate-700 ml-4">
         <li><strong>Regulasi Ketat:</strong> Industri Pertahanan atau Perbankan tertentu yang melarang data keluar dari gedung.</li>
         <li><strong>Koneksi Internet Buruk:</strong> Lokasi operasional di area terpencil (tambang, perkebunan) tanpa VSAT stabil.</li>
         <li><strong>Kedaulatan Data Mutlak:</strong> Kebijakan perusahaan yang tidak mentolerir pihak ketiga memegang data.</li>
      </ul>

      <p class="text-slate-700">BizOps menawarkan fleksibilitas <strong>Hybrid Deployment</strong>. Anda bisa mulai dengan Cloud, dan jika regulasi mengharuskan, database bisa ditarik ke server lokal Anda kapan saja.</p>
    `
  },
  {
    slug: "mengapa-transformasi-digital-gagal",
    title: "Mengapa Transformasi Digital Gagal? (Dan Cara Menghindarinya)",
    date: "12 July 2024",
    author: "Andi Wijaya, CEO BizOps",
    category: "Leadership & Culture",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", // Leadership/Team
    summary: "Statistik menunjukkan 70% proyek transformasi gagal bukan karena software-nya, tapi karena resistensi manusia. Pelajari strategi Change Management.",
    content: `
      <p class="lead text-xl text-slate-600 mb-8 font-light">Sebuah studi dari McKinsey menyebutkan bahwa 70% inisiatif transformasi digital gagal mencapai tujuannya. Uang miliaran rupiah terbuang untuk software canggih yang akhirnya tidak dipakai oleh karyawan.</p>
      
      <p class="mb-6 text-slate-700">Kesalahan terbesarnya? Pemimpin seringkali menganggap transformasi digital adalah proyek IT. Padahal, ini adalah proyek <strong>Manusia (People Project)</strong>.</p>

      <h2 id="musuh-resistensi" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Musuh Utama: Resistensi Perubahan</h2>
      <p class="mb-6 text-slate-700">Saat Anda memperkenalkan ERP baru, karyawan tidak melihat "efisiensi". Mereka melihat:</p>
      <ul class="list-disc list-inside space-y-2 mb-8 text-slate-700 ml-4">
         <li>"Pekerjaan saya jadi lebih ribet harus input sistem."</li>
         <li>"Apakah saya akan digantikan oleh komputer?"</li>
         <li>"Saya sudah nyaman pakai Excel, kenapa harus ganti?"</li>
      </ul>

      <figure class="my-10">
         <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Team Collaboration" class="w-full rounded-2xl shadow-lg mb-4" />
         <figcaption class="text-center text-sm text-slate-500 italic">Kolaborasi dan komunikasi adalah kunci adopsi teknologi.</figcaption>
      </figure>

      <h2 id="strategi-early-win" class="text-2xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">Strategi "Early Win"</h2>
      <p class="mb-6 text-slate-700">Jangan mencoba mengubah segalanya sekaligus (Big Bang). Mulailah dengan kemenangan kecil yang langsung dirasakan manfaatnya oleh user.</p>
      
      <blockquote class="text-xl font-medium text-slate-800 italic border-l-4 border-amber-500 pl-6 my-8">
         "Contoh Early Win: Otomatisasi Reimburse. Dulu karyawan harus nempel bon di kertas dan tunggu 2 minggu cair. Dengan aplikasi, foto bon langsung cair 2 hari. Karyawan akan jatuh cinta pada sistem, baru kemudian perkenalkan fitur yang lebih kompleks."
      </blockquote>

      <p class="text-slate-700">Di BizOps, kami tidak hanya menjual lisensi. Kami mengirimkan konsultan implementasi yang mengerti psikologi perubahan untuk mendampingi tim Anda.</p>
    `
  }
];

export * from './homeContent';
export * from './platformContent';
export * from './solutionsContent';
export * from './resourcesContent';
export * from './companyContent';
export * from './supportContent';
export * from './servicesContent';
export * from './pricingData';
export * from './needsAnalysisData';
export * from './useCasesContent';
export * from './searchData';
export * from './legalContent';
