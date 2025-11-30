import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { migrationData } from '../data/content';
import { migrationFaqs } from '../data/supportContent';
import Button from '../components/Button';
import { 
  ArrowRight, 
  HelpCircle, 
  FileText, 
  Upload, 
  CheckCircle, 
  Loader2, 
  ChevronDown, 
  Calendar,
  Building2,
  FileSpreadsheet,
  Database,
  ShieldCheck,
  RefreshCw,
  Zap,
  Check,
  Headphones,
  ArrowRightCircle,
  Info,
  Table,
  Download,
  Users,
  ShoppingCart,
  Briefcase,
  Layers,
  CreditCard
} from 'lucide-react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

// --- DATA DEFINITIONS FOR SAMPLES ---
// Ordered by Implementation Sequence
const sampleStructures = [
  {
    id: '1-coa',
    label: '1. Chart of Accounts',
    icon: FileText,
    desc: 'Pondasi sistem keuangan. Daftar akun GL untuk pelaporan.',
    columns: [
      { name: 'Code', req: true, desc: 'Kode akun unik (e.g. 110100)' },
      { name: 'Name', req: true, desc: 'Nama akun (e.g. Bank BCA IDR)' },
      { name: 'Type', req: true, desc: 'Asset, Liability, Equity, Income, Expense' },
      { name: 'Currency', req: false, desc: 'Mata uang (IDR/USD). Kosong = Company Default' },
      { name: 'Parent Account', req: false, desc: 'Kode akun induk untuk hierarki pelaporan' },
      { name: 'Allow Reconciliation', req: false, desc: 'TRUE/FALSE (Penting untuk Bank/Piutang)' },
    ]
  },
  {
    id: '2-partners',
    label: '2. Contacts (Partners)',
    icon: Users,
    desc: 'Database terpusat untuk Customer, Vendor, dan Partner.',
    columns: [
      { name: 'Name', req: true, desc: 'Nama Perusahaan atau Perorangan' },
      { name: 'Is Company', req: true, desc: 'TRUE (PT/CV) atau FALSE (Perorangan)' },
      { name: 'Type', req: true, desc: 'Customer, Vendor, atau Both' },
      { name: 'Tax ID (NPWP)', req: false, desc: 'Nomor NPWP 15/16 digit' },
      { name: 'Email', req: false, desc: 'Email untuk pengiriman invoice' },
      { name: 'Phone', req: true, desc: 'Nomor telepon aktif' },
      { name: 'Street Address', req: false, desc: 'Alamat lengkap' },
      { name: 'City', req: false, desc: 'Kota domisili' },
      { name: 'Payment Terms', req: false, desc: 'Termin pembayaran (e.g. Net 30)' },
    ]
  },
  {
    id: '3-products',
    label: '3. Products & Services',
    icon: ShoppingCart,
    desc: 'Master data barang jual, bahan baku, dan jasa.',
    columns: [
      { name: 'Internal Reference', req: true, desc: 'SKU / Kode unik internal' },
      { name: 'Name', req: true, desc: 'Nama produk lengkap' },
      { name: 'Product Type', req: true, desc: 'Storable (Stok), Service (Jasa), Consumable' },
      { name: 'Category', req: true, desc: 'Kategori produk untuk akuntansi' },
      { name: 'Sales Price', req: true, desc: 'Harga jual dasar' },
      { name: 'Cost', req: false, desc: 'Harga pokok (untuk metode Standard Cost)' },
      { name: 'Unit of Measure', req: true, desc: 'Satuan utama (Pcs, Kg, Liter)' },
      { name: 'Barcode', req: false, desc: 'EAN13 / UPC Code' },
    ]
  },
  {
    id: '4-hr',
    label: '4. HR: Employees',
    icon: Briefcase,
    desc: 'Data karyawan untuk struktur organisasi dan akses user.',
    columns: [
      { name: 'Name', req: true, desc: 'Nama lengkap karyawan' },
      { name: 'Work Email', req: true, desc: 'Email kantor (akan jadi username)' },
      { name: 'Department', req: true, desc: 'Departemen (e.g. Sales, IT)' },
      { name: 'Job Position', req: true, desc: 'Jabatan resmi' },
      { name: 'Manager Email', req: false, desc: 'Email atasan langsung (untuk approval)' },
      { name: 'Mobile', req: false, desc: 'Nomor HP karyawan' },
      { name: 'Join Date', req: false, desc: 'Tanggal bergabung (YYYY-MM-DD)' },
    ]
  },
  {
    id: '5-assets',
    label: '5. Fixed Assets',
    icon: Building2,
    desc: 'Daftar aset tetap untuk perhitungan penyusutan otomatis.',
    columns: [
      { name: 'Asset Name', req: true, desc: 'Nama aset (e.g. Laptop MacBook Pro)' },
      { name: 'Category', req: true, desc: 'Kategori aset (e.g. Elektronik)' },
      { name: 'Acquisition Date', req: true, desc: 'Tanggal pembelian (YYYY-MM-DD)' },
      { name: 'Gross Value', req: true, desc: 'Harga perolehan awal' },
      { name: 'Depreciation Method', req: true, desc: 'Linear / Degressive' },
      { name: 'Duration', req: true, desc: 'Masa manfaat (Bulan)' },
      { name: 'Salvage Value', req: false, desc: 'Nilai sisa di akhir masa manfaat' },
    ]
  },
  {
    id: '6-inv-balance',
    label: '6. Cut-off: Inventory',
    icon: Layers,
    desc: 'Saldo awal stok fisik per tanggal cut-off migrasi.',
    columns: [
      { name: 'Product SKU', req: true, desc: 'Harus sesuai dengan Master Product' },
      { name: 'Warehouse', req: true, desc: 'Lokasi gudang penyimpanan' },
      { name: 'Quantity', req: true, desc: 'Jumlah fisik hasil stock opname' },
      { name: 'Unit Value', req: true, desc: 'Nilai per unit (HPP) saat ini' },
      { name: 'Lot/Serial Number', req: false, desc: 'Jika produk menggunakan tracking' },
      { name: 'Expiry Date', req: false, desc: 'YYYY-MM-DD (Jika ada)' },
    ]
  },
  {
    id: '7-ar-ap',
    label: '7. Cut-off: AR / AP',
    icon: CreditCard,
    desc: 'Saldo awal Hutang & Piutang yang belum lunas (Outstanding).',
    columns: [
      { name: 'Partner Name', req: true, desc: 'Harus sesuai dengan Master Contact' },
      { name: 'Journal', req: true, desc: 'Customer Invoices (AR) / Vendor Bills (AP)' },
      { name: 'Invoice Number', req: true, desc: 'Nomor referensi faktur lama' },
      { name: 'Invoice Date', req: true, desc: 'Tanggal faktur asli' },
      { name: 'Due Date', req: true, desc: 'Tanggal jatuh tempo' },
      { name: 'Amount in Currency', req: true, desc: 'Total tagihan asli' },
      { name: 'Amount Due', req: true, desc: 'Sisa tagihan yang belum dibayar' },
      { name: 'Currency', req: true, desc: 'Mata uang transaksi' },
    ]
  }
];

const MigrationPage: React.FC = () => {
  const navigate = useNavigate();
  
  // --- STATE ---
  const [checkStatus, setCheckStatus] = useState<'idle' | 'checking' | 'ready' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSampleTab, setActiveSampleTab] = useState('1-coa');
  
  // --- HANDLERS ---
  const handleFileSimulate = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.csv';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        setFileName(file.name);
        setCheckStatus('checking');
        setProgress(0);
        
        // Simulate scanning progress
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setCheckStatus('ready');
              return 100;
            }
            return prev + 5;
          });
        }, 80);
      }
    };
    input.click();
  };

  const handleDownloadTemplate = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate download
    alert(`Downloading ${activeSampleTab}_template.xlsx...`);
  };

  const activeSample = sampleStructures.find(s => s.id === activeSampleTab) || sampleStructures[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans selection:bg-primary-500/30 flex flex-col">
      <SEO title="Migration Center" description="Pusat migrasi data enterprise BizOps. Panduan, tools validasi, dan layanan konsultasi migrasi." />

      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 dark:brightness-50 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 pt-32 pb-16 flex-grow">
        
        {/* 1. HERO SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
           <div className="text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-8 border border-slate-300/50 dark:border-slate-700/50 backdrop-blur-md"
              >
                 <Database className="w-3.5 h-3.5 text-primary-500" /> Migration Center
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight"
              >
                Pindahan Data <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 animate-gradient-x">Tanpa Drama.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12 font-light"
              >
                 Transisi sistem lama ke BizOps dengan metode terstruktur yang menjamin 
                 <span className="font-semibold text-slate-900 dark:text-white"> Integritas</span>, 
                 <span className="font-semibold text-slate-900 dark:text-white"> Keamanan</span>, dan 
                 <span className="font-semibold text-slate-900 dark:text-white"> Nol Data Hilang</span>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center gap-5"
              >
                 <Button 
                   size="lg" 
                   onClick={() => document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })} 
                   className="shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 text-base px-8 py-4 h-auto rounded-xl"
                 >
                    <Upload className="w-5 h-5 mr-2" /> Cek File Excel Anda
                 </Button>
                 <Button 
                   size="lg" 
                   variant="outline" 
                   onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
                   className="backdrop-blur-sm border-slate-300 dark:border-slate-700 text-base px-8 py-4 h-auto rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                 >
                    <Table className="w-5 h-5 mr-2" /> Lihat Format Data
                 </Button>
              </motion.div>
           </div>
        </div>

        {/* 2. VISUAL PROCESS FLOW */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
           <div className="relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { 
                     step: "01", 
                     title: "Mapping & Cleaning", 
                     desc: "Gunakan template standar kami untuk memetakan data lama Anda. Sistem otomatis akan mendeteksi anomali.", 
                     icon: FileSpreadsheet, 
                     color: "text-blue-500", 
                     bg: "bg-blue-500/10",
                     border: "group-hover:border-blue-500/50"
                   },
                   { 
                     step: "02", 
                     title: "Validation Sandbox", 
                     desc: "Upload ke lingkungan aman (Sandbox) untuk simulasi. Verifikasi saldo awal dan integritas relasi data.", 
                     icon: ShieldCheck, 
                     color: "text-purple-500", 
                     bg: "bg-purple-500/10",
                     border: "group-hover:border-purple-500/50"
                   },
                   { 
                     step: "03", 
                     title: "Switch & Go-Live", 
                     desc: "Setelah validasi 100% sukses, lakukan migrasi final dan sistem siap digunakan secara live.", 
                     icon: Zap, 
                     color: "text-emerald-500", 
                     bg: "bg-emerald-500/10",
                     border: "group-hover:border-emerald-500/50"
                   }
                 ].map((item, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.2 }}
                     className={`group relative bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${item.border}`}
                   >
                      <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-slate-100 dark:text-slate-800/50 -z-10 select-none">
                        {item.step}
                      </div>
                      <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm`}>
                         <item.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                         {item.desc}
                      </p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* 3. INTERACTIVE TOOL: DATA ANALYZER */}
        <div id="analyzer" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-32">
           <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 dark:opacity-40"></div>
              
              <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                 <div className="grid lg:grid-cols-2">
                    
                    {/* Left: Content */}
                    <div className="p-10 md:p-14 flex flex-col justify-center bg-slate-50 dark:bg-slate-900/50">
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                          <CheckCircle className="w-3 h-3" /> Free Validation Tool
                       </div>
                       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                          Cek Kesehatan Data Anda
                       </h2>
                       <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                          Algoritma kami akan memindai struktur file Excel Anda secara lokal untuk memastikan kompatibilitas sebelum proses upload sesungguhnya.
                       </p>
                       
                       <div className="space-y-4 mb-8">
                          {[
                            "Deteksi Header & Kolom Wajib",
                            "Validasi Format Tanggal & Angka",
                            "Cek Duplikasi Data Kunci",
                            "Analisis Konsistensi Tipe Data"
                          ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-3">
                               <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-500 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3 h-3" strokeWidth={3} />
                               </div>
                               <span className="text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                            </div>
                          ))}
                       </div>

                       <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800/30 flex gap-3">
                          <Info className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-amber-800 dark:text-amber-200">
                             Belum punya formatnya? <button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })} className="underline font-bold hover:text-amber-600">Lihat contoh format di bawah.</button>
                          </div>
                       </div>
                    </div>

                    {/* Right: Interactive Area */}
                    <div className="p-10 md:p-14 bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                       <div className="w-full max-w-md">
                          <div className={`
                             relative border-2 border-dashed rounded-3xl p-8 transition-all duration-300 text-center
                             ${checkStatus === 'checking' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : ''}
                             ${checkStatus === 'ready' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10' : ''}
                             ${checkStatus === 'idle' ? 'border-slate-300 dark:border-slate-700 hover:border-primary-500 hover:bg-white dark:hover:bg-slate-900' : ''}
                          `}>
                             
                             {checkStatus === 'idle' && (
                                <div className="py-6">
                                   <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                      <FileSpreadsheet className="w-10 h-10 text-slate-400" />
                                   </div>
                                   <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Upload Excel / CSV</h3>
                                   <p className="text-sm text-slate-500 mb-8">
                                      Drag file ke sini atau klik tombol di bawah
                                   </p>
                                   <Button onClick={handleFileSimulate} className="shadow-lg shadow-primary-500/20">
                                      <Upload className="w-4 h-4 mr-2" /> Pilih File dari Komputer
                                   </Button>
                                   <p className="text-xs text-slate-400 mt-6 flex items-center justify-center gap-1">
                                      <ShieldCheck className="w-3 h-3" /> Privasi Dijamin: Proses berjalan di browser Anda
                                   </p>
                                </div>
                             )}

                             {checkStatus === 'checking' && (
                                <div className="py-12">
                                   <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-6" />
                                   <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 animate-pulse">Menganalisis Struktur...</h3>
                                   <p className="text-sm text-slate-500 mb-6 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded inline-block">
                                      {fileName}
                                   </p>
                                   <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                      <motion.div 
                                         className="h-full bg-blue-500"
                                         initial={{ width: 0 }}
                                         animate={{ width: `${progress}%` }}
                                      />
                                   </div>
                                </div>
                             )}

                             {checkStatus === 'ready' && (
                                <div className="py-6 animate-in fade-in zoom-in duration-300">
                                   <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                      <CheckCircle className="w-10 h-10" />
                                   </div>
                                   <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Struktur File Valid!</h3>
                                   <p className="text-sm text-slate-500 mb-8">
                                      File Anda siap untuk diimpor. Tidak ditemukan error kritis.
                                   </p>
                                   <div className="flex gap-3 justify-center">
                                      <Button onClick={() => navigate('/contact')} className="bg-emerald-600 hover:bg-emerald-500 border-none shadow-lg shadow-emerald-500/20">
                                         Konsultasi Migrasi
                                      </Button>
                                      <Button variant="outline" onClick={() => {setCheckStatus('idle'); setFileName(null)}} className="bg-white dark:bg-transparent">
                                         <RefreshCw className="w-4 h-4" />
                                      </Button>
                                   </div>
                                </div>
                             )}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 4. NEW: SAMPLE DATA STRUCTURES */}
        <div id="templates" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-32">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Standar Format Data Migrasi</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                 Gunakan referensi kolom di bawah ini untuk mempersiapkan data Anda sebelum migrasi. Pastikan mengikuti urutan di bawah untuk kelancaran impor.
              </p>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
              {/* Sidebar Tabs */}
              <div className="w-full md:w-1/4 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-2 md:p-4">
                 <div className="space-y-1">
                    {sampleStructures.map(sample => (
                       <button
                          key={sample.id}
                          onClick={() => setActiveSampleTab(sample.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-all ${
                             activeSampleTab === sample.id 
                             ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-md ring-1 ring-slate-200 dark:ring-slate-700' 
                             : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                       >
                          <sample.icon className={`w-4 h-4 flex-shrink-0 ${activeSampleTab === sample.id ? 'text-primary-500' : 'text-slate-400'}`} />
                          <span className="truncate">{sample.label}</span>
                       </button>
                    ))}
                 </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 md:p-10 flex flex-col">
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                       <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                             <activeSample.icon className="w-6 h-6" />
                          </div>
                          {activeSample.label}
                       </h3>
                       <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                          {activeSample.desc}
                       </p>
                    </div>
                    <Button variant="outline" onClick={handleDownloadTemplate} className="gap-2 border-slate-300 dark:border-slate-700">
                       <Download className="w-4 h-4" /> Download Template
                    </Button>
                 </div>

                 {/* Visual Table */}
                 <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/50 flex-grow">
                    <div className="overflow-x-auto">
                       <table className="w-full text-sm text-left">
                          <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 dark:text-slate-400 font-bold">
                             <tr>
                                <th className="px-6 py-4">Column Header</th>
                                <th className="px-6 py-4">Wajib?</th>
                                <th className="px-6 py-4">Deskripsi / Format</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                             {activeSample.columns.map((col, idx) => (
                                <tr key={idx} className="hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                                   <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-semibold">
                                      {col.name}
                                   </td>
                                   <td className="px-6 py-4">
                                      {col.req ? (
                                         <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50">
                                            REQUIRED
                                         </span>
                                      ) : (
                                         <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                                            OPTIONAL
                                         </span>
                                      )}
                                   </td>
                                   <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                      {col.desc}
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
                 
                 <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/20 text-sm text-blue-700 dark:text-blue-300">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>
                       Tips: Data dengan tanda 'REQUIRED' harus diisi. Jika kosong, sistem akan menolak baris data tersebut saat impor.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* 5. INFORMATIONAL STRATEGIES (Replaces Downloads) */}
        <div id="strategies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-32">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Strategi Migrasi Berdasarkan Sumber Data</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                 Setiap sistem asal memiliki tantangannya sendiri. Berikut adalah pendekatan teknis yang kami rekomendasikan untuk memastikan transisi yang mulus.
              </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {migrationData.map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-2xl transition-all duration-300"
                 >
                    {/* Header */}
                    <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm">
                             <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                             <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{item.title}</h3>
                             <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">{item.desc}</p>
                          </div>
                       </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex-grow space-y-6">
                       <div className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                             <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 flex items-center justify-center">
                                <Info className="w-3.5 h-3.5" />
                             </div>
                          </div>
                          <div>
                             <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Tantangan Utama</h4>
                             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.challenge}
                             </p>
                          </div>
                       </div>

                       <div className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                             <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-500 flex items-center justify-center">
                                <Check className="w-3.5 h-3.5" strokeWidth={3} />
                             </div>
                          </div>
                          <div>
                             <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Solusi BizOps</h4>
                             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.solution}
                             </p>
                          </div>
                       </div>
                    </div>

                    <div className="px-8 pb-8 pt-0">
                       <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-6"></div>
                       <p className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                          Support migrasi penuh tersedia
                       </p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* 6. FAQ (Compact) */}
        <div className="max-w-3xl mx-auto px-4">
           <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pertanyaan Umum</h2>
           </div>
           <div className="space-y-3">
              {migrationFaqs.slice(0, 4).map((faq, idx) => (
                 <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <button 
                       onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                       className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                       <span className="font-semibold text-slate-900 dark:text-slate-200 text-sm md:text-base pr-4">{faq.q}</span>
                       <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary-500' : ''}`} />
                    </button>
                    <AnimatePresence>
                       {openFaq === idx && (
                          <motion.div 
                             initial={{ height: 0 }}
                             animate={{ height: 'auto' }}
                             exit={{ height: 0 }}
                             className="overflow-hidden"
                          >
                             <div className="p-5 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {faq.a}
                             </div>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>
              ))}
           </div>
        </div>

      </div>

      {/* 7. ULTIMATE CTA: CHOOSE PATH */}
      <div className="relative py-24 bg-slate-900 overflow-hidden z-20">
         {/* Top Separator */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
         
         {/* Decor */}
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap untuk Berpindah?</h2>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
               Setiap perusahaan memiliki kompleksitas data yang unik. Pilih pendekatan migrasi yang paling sesuai dengan sumber daya tim Anda.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {/* Self-Managed Option */}
               <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors text-left flex flex-col">
                  <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center mb-6">
                     <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Self-Managed</h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed flex-grow">
                     Cocok untuk tim dengan kemampuan teknis/IT internal. Gunakan dokumentasi lengkap dan tools otomatis kami.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle className="w-5 h-5 text-slate-500" /> Akses Full Dokumentasi API
                     </li>
                     <li className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle className="w-5 h-5 text-slate-500" /> Unlimited Sandbox Reset
                     </li>
                  </ul>
                  <Button 
                     onClick={() => navigate('/tools/project-planner')} 
                     variant="outline" 
                     className="w-full border-slate-600 text-white hover:bg-slate-700 hover:text-white justify-between group"
                  >
                     Buat Timeline Project <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
               </div>

               {/* Expert Assisted Option (Highlighted) */}
               <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/50 hover:border-blue-400 transition-colors text-left flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-bl-xl uppercase tracking-wider">Recommended</div>
                  
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                     <Headphones className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Expert Assisted</h3>
                  <p className="text-blue-100 mb-8 text-sm leading-relaxed flex-grow">
                     Tim Data Specialist kami akan menangani cleansing, mapping, dan validasi data Anda. Garansi 0% data hilang.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex gap-3 text-sm text-blue-100">
                        <CheckCircle className="w-5 h-5 text-blue-400" /> Dedikasi Data Engineer
                     </li>
                     <li className="flex gap-3 text-sm text-blue-100">
                        <CheckCircle className="w-5 h-5 text-blue-400" /> Garansi Integritas Data
                     </li>
                  </ul>
                  <Button 
                     onClick={() => navigate('/contact')} 
                     className="w-full bg-blue-500 hover:bg-blue-400 text-white border-none shadow-lg shadow-blue-500/25 justify-between group"
                  >
                     Konsultasi Migrasi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MigrationPage;
