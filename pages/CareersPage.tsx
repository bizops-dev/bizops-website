import React from 'react';
import { careersContent } from '../data/content';
import Button from '../components/Button';
import OptimizedImage from '../components/OptimizedImage';
import CardSlider from '../components/CardSlider';
import { Heart, Coffee, Zap, MapPin, Clock, GitMerge, BookOpen, Monitor, Award, CheckCircle, ArrowRight, ExternalLink, Globe, Code, Smile } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Typography from '../components/Typography';

const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors font-sans">
      <SEO title="Karir di BizOps (Divistant) | Build The Future of ERP" description="Bergabunglah dengan tim engineering BizOps yang berada di bawah naungan Divistant. Budaya Remote-First, Open Source, dan Inovasi tanpa batas." />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#0F172A] pt-32 pb-24 lg:pt-48 lg:pb-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
             <Globe className="w-3 h-3" /> Part of Divistant Ecosystem
          </div>
          <Typography variant="h1" as="h1" className="font-extrabold leading-tight tracking-tight">Build Software that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Runs The World.</span></Typography>
          <Typography variant="body-xl" className="text-slate-300">BizOps adalah produk unggulan dari Divistant. Kami mencari engineer, desainer, dan pemikir kreatif yang ingin mendefinisikan ulang bagaimana perusahaan beroperasi di era digital.</Typography>
          <div className="flex justify-center">
             <a href="https://divistant.com/career" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-10 text-lg font-bold bg-white text-slate-900 hover:bg-slate-100 border-none shadow-xl hover:shadow-indigo-500/20 transition-all rounded-full">
                   View Open Roles <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
             </a>
          </div>
        </div>
      </div>

      {/* --- PHOTO GRID (CULTURE SNAPSHOT) --- */}
      <div className="bg-[#0F172A] pb-24 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80 opacity-80 hover:opacity-100 transition-opacity duration-500">
               <div className="bg-slate-800 rounded-3xl overflow-hidden relative group">
                  <OptimizedImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaboration" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               </div>
               <div className="bg-slate-800 rounded-3xl overflow-hidden relative group md:mt-12">
                  <OptimizedImage src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Office vibe" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               </div>
               <div className="bg-slate-800 rounded-3xl overflow-hidden relative group md:-mt-8">
                  <OptimizedImage src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Meeting" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               </div>
               <div className="bg-slate-800 rounded-3xl overflow-hidden relative group md:mt-4">
                  <OptimizedImage src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" alt="Code review" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               </div>
            </div>
         </div>
      </div>

      {/* --- ENGINEERING CULTURE --- */}
      <Section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <Typography variant="h2" as="h2">Engineering First Culture</Typography>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Di BizOps (Divistant), engineer bukan sekadar "tukang coding". Anda adalah arsitek solusi.
               </p>
            </div>

            <div className="md:hidden">
               <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group h-full">
                     <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <GitMerge className="w-7 h-7" />
                     </div>
                     <Typography variant="h3" as="h3">Open Source DNA</Typography>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        Kami berkontribusi aktif pada ekosistem Open Source (Frappe/ERPNext). Kode Anda tidak hanya dipakai klien, tapi juga komunitas global.
                     </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-purple-500/50 transition-colors group h-full">
                     <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="w-7 h-7" />
                     </div>
                     <Typography variant="h3" as="h3">Autonomy & Speed</Typography>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        Minim birokrasi. Kami menerapkan CI/CD ketat dan deployment otomatis. Ship features, get feedback, iterate fast.
                     </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-colors group h-full">
                     <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-7 h-7" />
                     </div>
                     <Typography variant="h3" as="h3">Continuous Learning</Typography>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        Budget khusus untuk buku, course, dan sertifikasi. Sesi sharing mingguan ("Tech Talk") untuk membahas teknologi terbaru.
                     </p>
                  </div>
               </CardSlider>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-8">
               <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group h-full">
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <GitMerge className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Open Source DNA</Typography>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                     Kami berkontribusi aktif pada ekosistem Open Source (Frappe/ERPNext). Kode Anda tidak hanya dipakai klien, tapi juga komunitas global.
                  </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-purple-500/50 transition-colors group h-full">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Zap className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Autonomy & Speed</Typography>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                     Minim birokrasi. Kami menerapkan CI/CD ketat dan deployment otomatis. Ship features, get feedback, iterate fast.
                  </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-colors group h-full">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <BookOpen className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3">Continuous Learning</Typography>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                     Budget khusus untuk buku, course, dan sertifikasi. Sesi sharing mingguan ("Tech Talk") untuk membahas teknologi terbaru.
                  </p>
               </div>
            </div>
         </div>
      </Section>

      {/* --- BENEFITS / PERKS --- */}
      <Section className="py-24 bg-slate-50 dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Typography variant="h2" as="h2">The Total Rewards</Typography>
            <div className="md:hidden">
               <CardSlider mobileItemWidth="w-[85vw] sm:w-[400px]">
                  <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                     <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-500 flex-shrink-0">
                        <Coffee className="w-6 h-6" />
                     </div>
                     <div>
                        <Typography variant="h3" as="h3">Remote-First & Flexible</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Kerja dari mana saja. Kami mengukur output, bukan jam duduk di kursi. WFA (Work From Anywhere) policy.</Typography>
                     </div>
                  </div>
                  <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                     <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-500 flex-shrink-0">
                        <Monitor className="w-6 h-6" />
                     </div>
                     <div>
                        <Typography variant="h3" as="h3">Top-Tier Gear</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">MacBook Pro M-Series untuk seluruh engineer dan desainer. Monitor 4K dan aksesori ergonomis disediakan.</Typography>
                     </div>
                  </div>
                  <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                     <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-500 flex-shrink-0">
                        <Heart className="w-6 h-6" />
                     </div>
                     <div>
                        <Typography variant="h3" as="h3">Comprehensive Health</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Asuransi kesehatan lengkap (BPJS + Swasta) untuk Anda dan keluarga inti. Termasuk kacamata dan dental.</Typography>
                     </div>
                  </div>
                  <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                     <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-500 flex-shrink-0">
                        <Award className="w-6 h-6" />
                     </div>
                     <div>
                        <Typography variant="h3" as="h3">Performance Bonus</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Bonus proyek dan THR. Opsi kepemilikan saham (ESOP) untuk karyawan kunci yang berkontribusi jangka panjang.</Typography>
                     </div>
                  </div>
               </CardSlider>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-6">
               <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-500 flex-shrink-0">
                     <Coffee className="w-6 h-6" />
                  </div>
                  <div>
                     <Typography variant="h3" as="h3">Remote-First & Flexible</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Kerja dari mana saja. Kami mengukur output, bukan jam duduk di kursi. WFA (Work From Anywhere) policy.</Typography>
                  </div>
               </div>
               <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-500 flex-shrink-0">
                     <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                     <Typography variant="h3" as="h3">Top-Tier Gear</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400">MacBook Pro M-Series untuk seluruh engineer dan desainer. Monitor 4K dan aksesori ergonomis disediakan.</Typography>
                  </div>
               </div>
               <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-500 flex-shrink-0">
                     <Heart className="w-6 h-6" />
                  </div>
                  <div>
                     <Typography variant="h3" as="h3">Comprehensive Health</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Asuransi kesehatan lengkap (BPJS + Swasta) untuk Anda dan keluarga inti. Termasuk kacamata dan dental.</Typography>
                  </div>
               </div>
               <div className="flex gap-5 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-500 flex-shrink-0">
                     <Award className="w-6 h-6" />
                  </div>
                  <div>
                     <Typography variant="h3" as="h3">Performance Bonus</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Bonus proyek dan THR. Opsi kepemilikan saham (ESOP) untuk karyawan kunci yang berkontribusi jangka panjang.</Typography>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* --- OPEN POSITIONS CTA --- */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         {/* Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Typography variant="h2" as="h2">Ready to Join Us?</Typography>
            <Typography variant="body-xl" className="text-slate-300">Seluruh proses rekrutmen BizOps dikelola secara terpusat melalui portal karir Divistant. Cek posisi yang tersedia dan lamar sekarang.</Typography>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href="https://divistant.com/career" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-16 px-12 text-lg font-bold bg-white text-slate-900 hover:bg-slate-100 border-none shadow-2xl hover:shadow-white/20 transition-all rounded-2xl w-full sm:w-auto">
                     Explore Careers at Divistant <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
               </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800 flex justify-center items-center gap-2 text-slate-500 text-sm">
               <CheckCircle className="w-4 h-4" /> 
               <span>Kami membalas setiap lamaran dalam 3-5 hari kerja.</span>
            </div>
         </div>
      </section>

    </div>
  );
};

export default CareersPage;
