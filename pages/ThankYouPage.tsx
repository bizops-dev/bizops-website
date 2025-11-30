
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle, Download, Video, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const ThankYouPage: React.FC = () => {
  return (
    <Stack direction="vertical" gap={4} align="center" justify="center" className="min-h-[80vh] py-16 px-4 bg-slate-50">
      <SEO title="Terima Kasih | Permintaan Diterima" description="Konfirmasi pengiriman formulir BizOps." />
      
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200 max-w-2xl w-full text-center">
        <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-8 animate-bounce">
           <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <Typography variant="h1" as="h1">Terima Kasih! Langkah Pertama Transformasi Dimulai.</Typography>
        <Typography variant="body-lg" className="text-slate-600 leading-relaxed">Tim Solution Architect kami telah menerima data permintaan Anda. Kami sedang menganalisis profil bisnis Anda dan akan menghubungi Anda via WhatsApp atau Email dalam waktu maksimal <strong>24 Jam Kerja</strong> (Senin-Jumat) untuk menjadwalkan sesi.</Typography>
        
        <div className="h-px bg-slate-100 w-full my-8"></div>
        
        <Typography variant="h3" as="h3">Sambil Menunggu, Para Pemimpin Bisnis Biasanya:</Typography>
        
        <Grid cols={3} gap={4} className="text-left">
           <a href="#" className="p-4 rounded-xl border border-slate-200 hover:border-primary-200 hover:bg-primary-50 transition-all group">
              <Download className="w-5 h-5 text-slate-400 mb-2 group-hover:text-primary-600" />
              <div className="font-bold text-slate-900 text-sm mb-1">Download E-Book</div>
              <div className="text-xs text-slate-500">Panduan Efisiensi Pajak 2024</div>
           </a>
           <Link to="/customers" className="p-4 rounded-xl border border-slate-200 hover:border-primary-200 hover:bg-primary-50 transition-all group">
              <Video className="w-5 h-5 text-slate-400 mb-2 group-hover:text-primary-600" />
              <div className="font-bold text-slate-900 text-sm mb-1">Tonton Kisah Sukses</div>
              <div className="text-xs text-slate-500">Hemat 2 Milyar/Tahun</div>
           </Link>
           <a href="#" className="p-4 rounded-xl border border-slate-200 hover:border-primary-200 hover:bg-primary-50 transition-all group">
              <Linkedin className="w-5 h-5 text-slate-400 mb-2 group-hover:text-primary-600" />
              <div className="font-bold text-slate-900 text-sm mb-1">Follow LinkedIn</div>
              <div className="text-xs text-slate-500">Update industri harian</div>
           </a>
        </Grid>

        <div className="mt-10">
           <Link to="/">
              <Button variant="ghost">Kembali ke Beranda</Button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
