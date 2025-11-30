import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../data/content';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Calendar, Clock, MapPin, CheckCircle, User, 
  ArrowLeft, Share2, Video, GraduationCap, Package
} from 'lucide-react';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = eventsData.upcoming.find(e => e.slug === slug);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 text-center gap-4">
        <Typography variant="h1" as="h1">Event Tidak Ditemukan</Typography>
        <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Maaf, event yang Anda cari tidak tersedia atau sudah berakhir.</Typography>
        <Link to="/events">
          <Button>Kembali ke Events</Button>
        </Link>
      </div>
    );
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const Icon = event.icon || Calendar;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30">
      <SEO 
        title={`${event.title} - BizOps Events`}
        description={event.desc}
        image={event.image}
        type="website"
      />

      {/* Hero Section */}
      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 bg-[#0B1120] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <OptimizedImage src={event.image} alt="" className="w-full h-full object-cover blur-sm mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
        </div>
        
        <Container size="7xl" className="relative z-10">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Events', path: '/events' },
              { label: event.title, path: `/events/${event.slug}` }
            ]} className="text-slate-400 dark:text-slate-300" />
          </div>

          <Grid cols={2} gap={12} className="items-end">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Icon className="w-3 h-3" /> {event.type}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
              >
                {event.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                {event.desc}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6 mt-8 text-sm font-medium text-slate-300"
              >
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <Calendar className="w-4 h-4 text-primary-400" />
                  {event.formattedDate}
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <Clock className="w-4 h-4 text-primary-400" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  {event.location}
                </div>
              </motion.div>
            </div>
          </Grid>
        </Container>
      </div>

      {/* Content Section */}
      <Container size="7xl" className="-mt-10 relative z-20 pb-24">
        <Grid cols={3} gap={8}>
          
          {/* Main Info */}
          <Stack direction="vertical" gap={8} className="lg:col-span-2">
            {/* About Event */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800">
              <Typography variant="h2" as="h2">Tentang Event Ini</Typography>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                <Typography variant="body">Bergabunglah bersama kami dalam sesi eksklusif ini untuk mendalami strategi dan praktik terbaik dalam mengoptimalkan operasional bisnis Anda. Sesi ini dirancang khusus untuk para pemimpin bisnis, manajer operasional, dan profesional yang ingin meningkatkan efisiensi melalui teknologi.</Typography>
                <Typography variant="h3" as="h3">Apa yang Akan Anda Pelajari:</Typography>
                <ul className="space-y-3 list-none pl-0">
                  {event.benefits?.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 dark:text-green-300 flex-shrink-0 mt-0.5 gap-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Agenda */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800">
              <Typography variant="h2" as="h2">Agenda Sesi</Typography>
              <Stack direction="vertical" gap={6}>
                {event.agenda?.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-16 flex-shrink-0 pt-1 gap-4">
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400 dark:text-slate-300 group-hover:text-primary-500 transition-colors">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 pb-6 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0 gap-4">
                      <Typography variant="h4" as="h4" className="font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{item.activity}</Typography>
                    </div>
                  </div>
                ))}
              </Stack>
            </div>

            {/* Speakers */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800">
              <Typography variant="h2" as="h2">Pembicara</Typography>
              <Grid cols={2} gap={6}>
                {event.speakers?.map((speaker, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <OptimizedImage 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary-500/20" 
                      width={64}
                      height={64}
                    />
                    <div>
                      <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white">{speaker.name}</Typography>
                      <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">{speaker.role}</Typography>
                    </div>
                  </div>
                ))}
              </Grid>
            </div>
          </Stack>

          {/* Sidebar Registration */}
          <div className="lg:col-span-1">
            <Stack direction="vertical" gap={6} className="sticky top-24">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-indigo-500"></div>
                
                {!isSuccess ? (
                  <>
                    <Typography variant="h3" as="h3">Amankan Kursi Anda</Typography>
                    <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Slot terbatas. Pendaftaran gratis untuk profesional bisnis.</Typography>

                    <form onSubmit={handleRegister} className="space-y-4">
                      <div>
                        <Typography variant="caption" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">Nama Lengkap</Typography>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Typography variant="caption" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">Email Kantor</Typography>
                        <input 
                          required
                          type="email" 
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Typography variant="caption" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">Perusahaan</Typography>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                          value={formState.company}
                          onChange={(e) => setFormState({...formState, company: e.target.value})}
                        />
                      </div>
                      <div>
                        <Typography variant="caption" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">Jabatan</Typography>
                        <input 
                          required
                          type="text" 
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                          value={formState.jobTitle}
                          onChange={(e) => setFormState({...formState, jobTitle: e.target.value})}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full h-12 text-lg shadow-lg shadow-primary-500/20"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Memproses...' : 'Daftar Sekarang - Gratis'}
                      </Button>
                      
                      <Typography variant="body" className="text-slate-400 dark:text-slate-300">Dengan mendaftar, Anda menyetujui Kebijakan Privasi kami.</Typography>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 dark:text-green-300 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce gap-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <Typography variant="h3" as="h3">Pendaftaran Berhasil!</Typography>
                    <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Terima kasih, {formState.name}.<br/>
                      Tiket akses dan detail event telah dikirim ke <strong>{formState.email}</strong>.</Typography>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6 text-sm text-left">
                      <Typography variant="body" className="text-slate-900 dark:text-white">Selanjutnya:</Typography>
                      <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 dark:text-slate-300 space-y-1">
                        <li>Cek inbox/spam folder Anda</li>
                        <li>Tambahkan ke kalender Anda</li>
                        <li>Siapkan pertanyaan untuk sesi Q&A</li>
                      </ul>
                    </div>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="w-full">
                      Daftar Event Lain
                    </Button>
                  </div>
                )}
              </div>

              <div className="bg-slate-100 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800 text-center">
                 <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Bagikan Event Ini</Typography>
                 <div className="flex justify-center gap-2">
                    {['LinkedIn', 'Twitter', 'WhatsApp', 'Email'].map((social) => (
                       <button key={social} className="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:border-primary-500 transition-all">
                          {social}
                       </button>
                    ))}
                 </div>
              </div>
            </Stack>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default EventDetailPage;

