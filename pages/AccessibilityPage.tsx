import React from 'react';
import { Eye, Keyboard, Volume2, ZoomIn, MessageSquare, CheckCircle, Accessibility } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Container from '../components/Container';
import Stack from '../components/Stack';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      desc: "Seluruh interaksi di situs ini dapat dilakukan hanya menggunakan keyboard (Tab, Enter, Arrow Keys) tanpa mouse."
    },
    {
      icon: Volume2,
      title: "Screen Reader Friendly",
      desc: "Kode semantik ARIA label yang lengkap memastikan kompatibilitas dengan NVDA, JAWS, dan VoiceOver."
    },
    {
      icon: Eye,
      title: "High Contrast",
      desc: "Rasio kontras warna teks dan background memenuhi standar WCAG AA (4.5:1) untuk keterbacaan maksimal."
    },
    {
      icon: ZoomIn,
      title: "Scalable Text",
      desc: "Layout responsif yang tetap rapi meskipun diperbesar hingga 200% pada browser Anda."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-20">
      <SEO title="Accessibility Statement" description="Komitmen BizOps terhadap inklusivitas digital." />

      {/* Hero Section */}
      <section className="bg-primary-50 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-primary-100 dark:border-slate-800">
        <Container size="4xl">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl mb-6">
             <Accessibility className="w-8 h-8" />
          </div>
          <Typography variant="h1" as="h1" className="font-extrabold text-slate-900 dark:text-white">Teknologi untuk <span className="text-primary-600">Semua Orang.</span></Typography>
          <Typography variant="body-xl" className="text-slate-600 dark:text-slate-300">BizOps berkomitmen membangun platform yang inklusif. Kami percaya bahwa hambatan fisik tidak boleh menjadi penghalang produktivitas bisnis.</Typography>
        </Container>
      </section>

      {/* Standards & Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Grid cols={4} gap={8}>
          {features.map((feat, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-primary-600">
                <feat.icon className="w-7 h-7" />
              </div>
              <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{feat.title}</Typography>
              <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</Typography>
            </div>
          ))}
        </Grid>

        <Stack direction="vertical" gap={12} className="mt-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 items-center shadow-xl">
           <div className="md:w-1/2">
              <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-2 block">Standar Kepatuhan</span>
              <Typography variant="h2" as="h2">WCAG 2.1 Level AA</Typography>
              <Typography variant="body" className="text-slate-600 dark:text-slate-300 leading-relaxed">Kami secara aktif mengaudit dan memperbarui antarmuka kami agar sesuai dengan pedoman Web Content Accessibility Guidelines (WCAG) yang diakui secara global.</Typography>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Perceivable
                 </div>
                 <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Operable
                 </div>
                 <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Understandable
                 </div>
                 <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Robust
                 </div>
              </div>
           </div>
           <div className="md:w-1/2 bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl w-full">
              <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white"><MessageSquare className="w-5 h-5" /> Laporkan Masalah</Typography>
              <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Menemukan bug aksesibilitas? Tim engineering kami memprioritaskan perbaikan isu ini.</Typography>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <input 
                    type="email" 
                    placeholder="Email Anda" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-500 outline-none"
                 />
                 <textarea 
                    placeholder="Deskripsikan masalah (cth: Tombol login tidak terbaca screen reader)" 
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                 ></textarea>
                 <Button fullWidth>Kirim Laporan</Button>
              </form>
           </div>
        </Stack>
      </section>
    </div>
  );
};

export default AccessibilityPage;
