import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, Users, ShieldCheck, DollarSign, Laptop, 
  CheckCircle, ArrowRight, Briefcase, Handshake, Globe 
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider';
import Breadcrumbs from '../components/Breadcrumbs';
import OptimizedImage from '../components/OptimizedImage'; // Added OptimizedImage import
    import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER } from '../utils/animation';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const ManagedServicesPage: React.FC = () => {
  return (
    <div className="pt-16 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30">
      <SEO 
        title="Enterprise Managed Services | Virtual Head Office" 
        description="Layanan pengelolaan operasional bisnis end-to-end. Finance, HR, Legal, dan IT dikelola oleh jaringan ahli terbaik, terintegrasi dengan platform BizOps." 
      />

      {/* --- HERO SECTION --- */}
      <Section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white dark:bg-slate-900">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

         <Container size="7xl" className="relative z-10 md:px-6">
            <div className="mb-8">
              <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: 'Enterprise Managed Services', path: '/services/managed-business-services' }
              ]} />
            </div>

            <Stack direction="col" gap={16} className="items-center">
               <motion.div 
                 initial="hidden" 
                 animate="visible" 
                 variants={STAGGER_CONTAINER}
                 className="flex-1 text-center lg:text-left"
               >
                  <motion.div variants={FADE_UP_VARIANTS} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
                     <Building className="w-4 h-4 text-primary-500" />
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-300">New Offering</Typography>
                  </motion.div>
                  
                  <motion.h1 variants={FADE_UP_VARIANTS} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                     Your Virtual <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Head Office.</span>
                  </motion.h1>
                  
                  <motion.p variants={FADE_UP_VARIANTS} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                     Fokus pada inti bisnis Anda. Biarkan jaringan ahli kami menangani operasional pendukung—Finance, HR, Legal, hingga IT—dengan standar kelas dunia.
                  </motion.p>
                  
                  <motion.div variants={FADE_UP_VARIANTS} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                     <Button size="lg" className="h-14 px-8 rounded-2xl shadow-lg shadow-primary-500/20">
                        Konsultasi Gratis
                     </Button>
                     <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl">
                        Lihat Partner Kami
                     </Button>
                  </motion.div>
               </motion.div>

               {/* Hero Illustration */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 className="flex-1 relative hidden md:block"
               >
                  <Container className="relative w-full aspect-square">
                    {/* Central Hub */}
                    <Stack direction="row" gap={4} align="center" justify="center" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white dark:bg-slate-800 rounded-full shadow-2xl z-20 border-4 border-slate-50 dark:border-slate-700 overflow-hidden">
                        <OptimizedImage src="/logo-icon.svg" alt="BizOps" className="w-16 h-16 opacity-80" onError={() => {}} />
                    </div>
                     
                     {/* Orbiting Services */}
                     {[
                        { icon: DollarSign, bg: 'bg-green-100 dark:bg-green-900/30', text: 'Finance', color: 'text-green-600 dark:text-green-400', pos: 'top-0 left-1/2 -translate-x-1/2' },
                        { icon: Users, bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'HR & Talent', color: 'text-blue-600 dark:text-blue-400', pos: 'top-1/2 right-0 -translate-y-1/2' },
                        { icon: ShieldCheck, bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'Legal', color: 'text-purple-600 dark:text-purple-400', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
                        { icon: Laptop, bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'IT Managed', color: 'text-orange-600 dark:text-orange-400', pos: 'top-1/2 left-0 -translate-y-1/2' },
                     ].map((item, idx) => (
                        <div key={idx} className={`absolute ${item.pos} w-24 h-24 flex flex-col items-center justify-center gap-2 animate-float`} style={{ animationDelay: `${idx * 0.5}s` }}>
                           <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <item.icon className={`w-7 h-7 ${item.color}`} />
                           </div>
                           <Typography variant="caption" className="text-slate-600 dark:text-slate-300">{item.text}</Typography>
                        </div>
                     ))}

                     {/* Connecting Lines */}
                     <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none stroke-slate-200 dark:stroke-slate-700" style={{ transform: 'scale(0.8)' }}>
                        <circle cx="50%" cy="50%" r="48%" fill="none" strokeWidth="2" strokeDasharray="8 8" className="animate-spin-slow" />
                     </svg>
                  </Container>
               </motion.div>
            </Stack>
         </Container>
      </Section>

      {/* --- PROBLEM & SOLUTION --- */}
      <Section className="bg-slate-50 dark:bg-slate-950 py-20">
         <Container size="4xl" className="text-center mb-16">
            <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Business Operations is Distracting.</Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">CEO seharusnya fokus pada Strategi, Inovasi, dan Pertumbuhan. Bukan terjebak mengurus laporan pajak bulanan, rekrutmen staff admin, atau maintenance server.</Typography>
         </Container>

         {/* Mobile Slider (< md) */}
         <div className="md:hidden">
            <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
               {[
                  { title: "Finance & Tax", desc: "Virtual CFO, Bookkeeping, Tax Planning & Reporting.", icon: DollarSign, color: "text-green-500" },
                  { title: "HR & Payroll", desc: "Talent Acquisition, Payroll Processing, Compliance.", icon: Users, color: "text-blue-500" },
                  { title: "Legal & Corporate", desc: "Legal Drafting, Licensing, Corporate Secretary.", icon: ShieldCheck, color: "text-purple-500" },
                  { title: "IT & Security", desc: "Managed DevOps, Security Monitoring, Tech Support.", icon: Laptop, color: "text-orange-500" },
               ].map((service, idx) => (
                  <div key={idx} className="h-full">
                     <Stack direction="col" gap={4} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 h-full">
                        <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 ${service.color}`}>
                           <service.icon className="w-7 h-7" />
                        </div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{service.title}</Typography>
                        <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</Typography>
                     </div>
                  </div>
               ))}
            </CardSlider>
         </div>

         {/* Desktop Grid (>= md) */}
         <Container size="7xl" className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 md:px-6">
            {[
               { title: "Finance & Tax", desc: "Virtual CFO, Bookkeeping, Tax Planning & Reporting.", icon: DollarSign, color: "text-green-500" },
               { title: "HR & Payroll", desc: "Talent Acquisition, Payroll Processing, Compliance.", icon: Users, color: "text-blue-500" },
               { title: "Legal & Corporate", desc: "Legal Drafting, Licensing, Corporate Secretary.", icon: ShieldCheck, color: "text-purple-500" },
               { title: "IT & Security", desc: "Managed DevOps, Security Monitoring, Tech Support.", icon: Laptop, color: "text-orange-500" },
            ].map((service, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 ${service.color}`}>
                     <service.icon className="w-7 h-7" />
                  </div>
                  <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{service.title}</Typography>
                  <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</Typography>
               </div>
            ))}
         </Container>
      </Section>

      {/* --- PARTNER ECOSYSTEM --- */}
      <Section className="py-24 bg-white dark:bg-slate-900">
         <Container size="7xl">
            <Grid cols={2} gap={16} className="items-center">
               <div>
                  <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Powered by <br/>
                     <span className="text-primary-600">Vetted Expert Network</span></Typography>
                  <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Kami tidak bekerja sendirian. BizOps bermitra dengan firma konsultan top-tier yang telah melalui proses kurasi ketat. Anda mendapatkan kualitas Big 4 dengan fleksibilitas startup.</Typography>
                  
                  <ul className="space-y-4 mb-10">
                     {[
                        "Konsultan Pajak Bersertifikat (Brevet A/B/C)",
                        "HR Consultant & Headhunter Senior",
                        "Advokat & Notaris Terpercaya",
                        "Certified Ethical Hackers & DevOps"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                           <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                        </li>
                     ))}
                  </ul>
                  
                  <Button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-xl px-8 h-12">
                     Pelajari Standar Kualitas Kami
                  </Button>
               </div>
               
               <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-[2rem] transform rotate-3"></div>
                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-700">
                      <Grid cols={2} gap={6}>
                         {[
                            { name: "Global Tax Firm", type: "Tax Partner", logo: "Building" },
                            { name: "Elite Talents", type: "HR Partner", logo: "Users" },
                            { name: "CyberGuard", type: "Security Partner", logo: "Shield" },
                            { name: "Legal Corp", type: "Legal Partner", logo: "Briefcase" },
                         ].map((partner, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm text-center border border-slate-100 dark:border-slate-800">
                               <Stack direction="row" gap={4} align="center" justify="center" className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full mx-auto mb-3 text-slate-400">
                                  <Handshake className="w-6 h-6" />
                               </div>
                               <div className="font-bold text-slate-900 dark:text-white text-sm">{partner.name}</div>
                               <div className="text-xs text-slate-500">{partner.type}</div>
                            </div>
                         ))}
                      </Grid>
                      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
                         <Typography variant="caption" className="text-slate-500">Ingin bergabung sebagai partner ahli?</Typography>
                         <Link to="/partners" className="text-primary-600 font-bold hover:underline">
                            Daftar Partner Network →
                         </Link>
                      </div>
                  </div>
               </div>
            </Grid>
         </Container>
      </Section>

      {/* --- CTA --- */}
      <Section className="py-24 bg-slate-50 dark:bg-slate-950">
         <Container size="7xl" className="text-center">
            <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Siap Meng-upgrade Operasional Anda?</Typography>
            <Typography variant="body-xl" className="text-slate-600 dark:text-slate-400">Jadwalkan sesi konsultasi gratis untuk memetakan kebutuhan operasional bisnis Anda.</Typography>
            <Stack direction="col" gap={4} className="justify-center">
               <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-2xl shadow-xl shadow-primary-500/20">
                     Hubungi Kami
                  </Button>
               </Link>
               <Link to="/pricing">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-2xl bg-white dark:bg-slate-900">
                     Lihat Estimasi Biaya
                  </Button>
               </Link>
            </Stack>
         </Container>
      </Section>
    </div>
  );
};

export default ManagedServicesPage;

