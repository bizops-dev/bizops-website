
import React from 'react';
import Button from '../components/Button';
import { BarChart2, PieChart, FileBarChart, Calendar, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO title="Real-time Dashboard & Custom Report Builder | BizOps" description="Buat laporan bisnis kustom tanpa coding. Analisis data penjualan, stok, dan keuangan dengan fitur Drag-and-Drop Report Builder yang powerful." />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <Container size="7xl">
          <div className="inline-flex p-3 bg-slate-800 rounded-2xl mb-6">
             <BarChart2 className="w-8 h-8 text-primary-400" />
          </div>
          <Typography variant="h1" as="h1" className="font-bold leading-tight">Laporan Anda, Cara Anda.<br/>Tanpa Coding.</Typography>
          <Typography variant="body-xl" className="text-slate-300 leading-relaxed">Setiap bisnis punya cara unik melihat data. Jangan terpaku pada laporan standar yang kaku. Dengan <em>Report Builder</em>, Anda menjadi analis data bagi perusahaan Anda sendiri.</Typography>
          <Link to="/demo">
             <Button size="lg" variant="white">Coba Report Builder</Button>
          </Link>
        </Container>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
         <Container size="7xl">
            <Grid cols={3} gap={8}>
               
               <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                     <PieChart className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3">Real-time Dashboard</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Widget visual (Grafik Batang, Pie Chart, KPI Card, Heatmap) yang dapat dikustomisasi dan diperbarui detik demi detik. Pantau kesehatan bisnis dalam satu pandangan.</Typography>
               </div>

               <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6">
                     <Filter className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3">Drag-and-Drop Report Builder</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Antarmuka intuitif untuk membuat laporan tabular. Pilih kolom data yang diinginkan (misal: "Nama Sales", "Wilayah", "Total Omzet"), tarik ke kanvas, terapkan filter kompleks, dan lihat hasilnya seketika.</Typography>
               </div>

               <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
                     <Calendar className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3">Auto-Schedule Email</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">Buat laporan sekali, lalu jadwalkan pengiriman otomatis. "Kirim laporan Penjualan Mingguan ini ke Email Direksi setiap Senin pagi jam 08:00." Sistem akan menjalankannya secara disiplin.</Typography>
               </div>

            </Grid>
         </Container>
      </section>
    </div>
  );
};

export default AnalyticsPage;
