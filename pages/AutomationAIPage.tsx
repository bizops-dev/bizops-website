
import React from 'react';
import Button from '../components/Button';
import { Zap, GitMerge, BrainCircuit, ScanLine, ShieldAlert, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const AutomationAIPage: React.FC = () => {
  return (
    <Stack direction="col" gap={4}>
      <SEO title="Business Process Automation & AI Features | BizOps Engine" description="Otomatisasi alur kerja bisnis Anda. Fitur Low-Code Workflow Builder, OCR Scanner cerdas, dan AI Forecasting untuk operasional autopilot." />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <Container size="7xl">
          <Stack direction="row" gap={4} className="p-3 bg-slate-800 rounded-2xl mb-6">
             <Zap className="w-8 h-8 text-primary-400" />
          </div>
          <Typography variant="h1" as="h1" className="font-bold leading-tight">Biarkan Sistem yang Bekerja,<br/>Bukan Anda.</Typography>
          <Typography variant="body-xl" className="text-slate-300 leading-relaxed">Kurangi pekerjaan manual yang repetitif dan membosankan hingga 80%. BizOps dilengkapi dengan mesin Otomatisasi (<em>Workflow Builder</em>) dan Kecerdasan Buatan (<em>Applied AI</em>) yang praktis untuk membuat bisnis Anda berjalan secara autopilot.</Typography>
          <Link to="/demo">
             <Button size="lg" variant="white">Lihat Demo Otomatisasi</Button>
          </Link>
        </Container>
      </section>

      {/* Workflow Automation */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
         <Container size="7xl">
            <Grid cols={2} gap={16} className="items-center">
               <div>
                  <Typography variant="h2" as="h2">Workflow Automation (No-Code Logic)</Typography>
                  <Stack direction="col" gap={8}>
                     <Stack direction="row" gap={4}>
                        <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg h-fit">
                           <GitMerge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                           <Typography variant="h3" as="h3">Visual Builder</Typography>
                           <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Antarmuka <em>drag-and-drop</em> intuitif untuk membuat aturan logika "Jika X maka Y" tanpa perlu menulis satu baris kode pun.</Typography>
                        </div>
                     </Stack>
                     <Stack direction="row" gap={4}>
                        <div className="mt-1 p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg h-fit">
                           <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                           <Typography variant="h3" as="h3">Scenario Example</Typography>
                           <Typography variant="caption" className="text-slate-600 dark:text-slate-400">"Jika Stok Barang &lt; 10 unit, otomatis buat <em>Purchase Request</em> ke Vendor A, kirim email PO PDF ke vendor, dan kirim notifikasi WhatsApp ke Manajer Gudang."</Typography>
                        </div>
                     </Stack>
                     <Stack direction="row" gap={4}>
                        <div className="mt-1 p-2 bg-green-50 dark:bg-green-900/30 rounded-lg h-fit">
                           <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                           <Typography variant="h3" as="h3">Auto-Assignment</Typography>
                           <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Distribusi tugas otomatis berdasarkan aturan. Misal: "Setiap Lead baru yang berasal dari wilayah Jakarta Selatan otomatis di-<em>assign</em> ke Salesman Budi."</Typography>
                        </div>
                     </Stack>
                  </Stack>
               </div>
               {/* Visual Placeholder */}
               <Stack direction="row" gap={4} align="center" justify="center" className="bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 aspect-square relative shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg max-w-xs w-full relative z-10">
                     <Stack direction="row" gap={4} align="center" justify="between" className="mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
                        <Typography variant="caption" className="text-slate-500">Logic Flow</Typography>
                        <Stack direction="row" gap={1}>
                     </div>
                     <Stack direction="col" gap={3} className="text-xs">
                        <div className="p-2 bg-slate-50 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold">IF Stock &lt; 10</div>
                        <Stack direction="row" gap={4} justify="center">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-bold">THEN Create PR</div>
                        <Stack direction="row" gap={4} justify="center">
                        <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded border border-green-100 dark:border-green-800 text-green-700 dark:text-green-300 font-bold">THEN Email Vendor</div>
                     </Stack>
                  </div>
               </div>
            </Grid>
         </Container>
      </section>

      {/* Applied AI */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
         <Container size="7xl">
            <Typography variant="h2" as="h2">Applied AI Capabilities</Typography>
            <Grid cols={3} gap={8}>
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <BrainCircuit className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
                  <Typography variant="h3" as="h3">Smart Forecasting</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Algoritma prediktif yang menganalisis data penjualan historis 2 tahun terakhir dan tren musiman untuk merekomendasikan jumlah <em>restock</em> yang optimal bulan depan. Mencegah <em>Overstock</em> (uang mati) dan <em>Stockout</em> (hilang omzet).</Typography>
               </div>
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <ScanLine className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
                  <Typography variant="h3" as="h3">OCR Expense Scanner</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Karyawan cukup memfoto struk makan siang atau bensin. AI kami secara otomatis membaca dan mengekstrak nominal, tanggal, dan nama merchant untuk mengisi form Reimbursement. Akurasi pembacaan di atas 95%.</Typography>
               </div>
               <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <ShieldAlert className="w-12 h-12 text-amber-600 dark:text-amber-400 mb-6" />
                  <Typography variant="h3" as="h3">Anomaly Detection</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Sistem "satpam digital" yang mendeteksi pola transaksi mencurigakan secara dini, misal: pemberian diskon manual di luar kewajaran atau transaksi pembelian di jam yang tidak wajar.</Typography>
               </div>
            </Grid>
         </Container>
      </section>
    </div>
  );
};

export default AutomationAIPage;
