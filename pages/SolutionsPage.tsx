import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData, rolesData } from '../data/content';
import Button from '../components/Button';
import Badge from '../components/Badge';
import CardSlider from '../components/CardSlider';
import { ArrowRight, LayoutGrid, Briefcase, Users, Check, TrendingUp, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Stack from '../components/Stack';

// Motion Components
import { StaggeredText } from '../components/ui/motion-text';
import { BouncyButton } from '../components/ui/motion-button';
import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS } from '../utils/animation';

const SolutionsPage: React.FC = () => {
  const industries = Object.entries(industriesData).map(([key, val]) => ({ id: key, ...(val as any) }));
  const roles = Object.entries(rolesData).map(([key, val]) => ({ id: key, ...(val as any) }));

  // Color mapping for industries to make them distinct
  const getColor = (id: string) => {
    const map: Record<string, string> = {
      'construction': 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 dark:text-amber-300',
      'retail': 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 dark:text-emerald-300',
      'outsourcing': 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:text-blue-300',
      'consulting': 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 dark:text-purple-300',
      'manufacturing': 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 dark:text-rose-300',
      'enterprise': 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
    };
    return map[id] || 'bg-slate-50 text-slate-600 dark:text-slate-300';
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <SEO title="Solutions Overview | Solusi ERP per Industri & Role" description="Solusi ERP yang dikontekstualisasikan untuk kebutuhan spesifik industri dan peran Anda. Konstruksi, Ritel, Manufaktur, dan lainnya." />
      
      {/* 1. HERO */}
      <div className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 border-b border-slate-900">
         {/* Abstract Background */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none"></div>
         
         <Container size="7xl" className="text-center relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
            >
               <Badge variant="outline-white" className="mb-8">Context-Aware ERP</Badge>
            </motion.div>
            
            <Typography variant="h1" as="h1" className="font-extrabold text-white tracking-tight leading-tight"><StaggeredText text="Stop Memaksa Bisnis Masuk ke" className="inline-flex justify-center mr-3 gap-4" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Kotak ERP Generik.</span></Typography>
            
            <motion.p 
               variants={FADE_UP_VARIANTS}
               initial="hidden"
               animate="visible"
               transition={{ delay: 0.3 }}
               className="text-lg md:text-xl text-slate-400 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
               Software ritel tidak akan bertahan sehari di proyek konstruksi. Kebanyakan ERP memaksa Anda mengubah cara kerja demi keterbatasan sistem. BizOps berbeda—kami berbicara bahasa industri Anda sejak hari pertama.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="flex flex-col sm:flex-row justify-center gap-4"
            >
               <Link to="/contact">
                  <BouncyButton className="h-14 px-8 text-lg bg-primary-600 text-white border-none shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:bg-primary-500 w-full sm:w-auto">
                     Audit Alur Kerja Gratis
                  </BouncyButton>
               </Link>
               <Link to="/demo">
                  <Button variant="outline-white" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                     Lihat Demo Industri
                  </Button>
               </Link>
            </motion.div>
         </Container>
      </div>

      <Section className="relative overflow-hidden bg-white dark:bg-slate-950 py-16 md:py-24">
        <Container className="px-4 md:px-6 lg:px-8" size="7xl">
           {/* Industry Section */}
           <Container size="3xl" className="text-center mb-12 md:mb-20">
              <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Solusi Spesifik Industri</Typography>
              <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Kami tidak percaya pada "Satu Ukuran untuk Semua". Lihat bagaimana BizOps menangani nuansa unik—dari perhitungan Kurva-S Konstruksi hingga manajemen expiry date Ritel.</Typography>
           </Container>
           
           <div className="mb-16 md:mb-32">
             <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
                {industries.map((ind) => (
                   <Link key={ind.id} to={`/solutions/${ind.id}`} className="group h-full block">
                      <motion.div 
                         variants={FADE_UP_VARIANTS}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden gap-4"
                      >
                         <div className={`w-16 h-16 ${getColor(ind.id)} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/5 shrink-0`}>
                            <ind.icon className="w-8 h-8" />
                         </div>
                         <div className="flex-grow flex flex-col gap-4">
                            <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{ind.title}</Typography>
                            <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">{ind.description}</Typography>
                         </div>
                         <div className="flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm mt-auto group-hover:gap-2 transition-all pt-4 shrink-0">
                            Pelajari Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
                         </div>
                      </motion.div>
                   </Link>
                ))}
             </CardSlider>
           </div>

           {/* Social Proof Interstitial */}
           <div className="mb-16 md:mb-32 text-center">
              <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Dipercaya Pemimpin Industri</Typography>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:opacity-100">
                 {['HEXAGON', 'KARYA BETON', 'TRANS LOGISTIC', 'MEGA FINANCE', 'AGRO CORP'].map(brand => (
                    <span key={brand} className="text-xl font-black text-slate-800 dark:text-slate-200 tracking-tighter">{brand}</span>
                 ))}
              </div>
           </div>

           {/* Roles Section */}
           <div className="relative rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
               {/* Background Decor */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
               
               <div className="relative z-10 px-6 py-12 md:p-24">
                  <Container size="3xl" className="text-center mb-12 md:mb-16">
                     <Badge variant="outline" className="mb-4 bg-white dark:bg-slate-800">Role-Based Experience</Badge>
                     <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Satu Platform, Beda Perspektif.</Typography>
                     <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">CEO butuh Big Picture. CFO butuh Audit Trail. Manajer Lapangan butuh Kecepatan. BizOps memberikan dashboard yang dipersonalisasi untuk KPI spesifik mereka.</Typography>
                  </Container>

                  <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-6" mobileItemWidth="w-[85vw] sm:w-[250px]">
                     {roles.map((role) => (
                        <Link key={role.id} to={`/role/${role.id}`} className="group h-full block">
                           <motion.div 
                              variants={FADE_UP_VARIANTS}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all text-center h-full flex flex-col items-center group-hover:-translate-y-1 gap-4"
                           >
                              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 dark:text-slate-300 mb-4 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all shadow-sm shrink-0 gap-4">
                                 <role.icon className="w-7 h-7" />
                              </div>
                              <div className="flex-grow flex flex-col justify-center w-full gap-4">
                                 <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{role.title}</Typography>
                                 <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">{role.subtitle}</Typography>
                              </div>
                           </motion.div>
                        </Link>
                     ))}
                  </CardSlider>
               </div>
           </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>
         <Container size="7xl" className="text-center relative z-10">
            <Typography variant="h2" as="h2" className="font-bold text-white leading-tight">Bisnis Anda Unik? <br/>Konsultan Kami Paham.</Typography>
            <Typography variant="body-xl" className="text-slate-400 dark:text-slate-300">Jangan buang waktu menebak. Diskusikan kompleksitas alur bisnis Anda dengan spesialis industri kami (Bukan sekadar sales).</Typography>
            <Stack direction="vertical" gap={4} className="justify-center">
               <Link to="/contact">
                  <BouncyButton className="h-16 px-10 text-xl shadow-xl shadow-white/5 bg-white hover:bg-slate-200 text-slate-900 dark:text-white border-none transition-all hover:scale-105">
                     Jadwalkan Audit Gratis
                  </BouncyButton>
               </Link>
            </Stack>
         </Container>
      </section>
    </div>
  );
};

export default SolutionsPage;
