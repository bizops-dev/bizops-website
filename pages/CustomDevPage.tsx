import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Code, Layers, Zap, Settings, Briefcase, Link as LinkIcon, 
  ShieldCheck, CheckCircle2, ArrowRight, Sparkles, FileText, Check, Database, Server, Package, GitBranch, FileCode, Terminal
} from 'lucide-react';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER, SPRING_TRANSITION } from '../utils/animation';
import { StaggeredText } from '../components/ui/motion-text';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Stack from '../components/Stack';
import Container from '../components/Container';

// --- COMPONENT: SPOTLIGHT CARD (Reused for consistency) ---
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(14, 165, 233, 0.15)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const CustomDevPage: React.FC = () => {
  // Data Mockup to match ServiceData structure
  const pageData = {
    title: "Custom Development",
    subtitle: "Build Your Secret Sauce.",
    description: "Jangan korbankan keunikan bisnis Anda demi menyesuaikan diri dengan software kaku. Kami mengembangkan modul kustom yang presisi di atas framework BizOps yang kokoh, aman, dan scalable.",
    cta: "Consult Your Needs",
    benefits: [
      { title: "Upgrade-Safe Architecture", desc: "Kode kustom terisolasi sebagai App terpisah. Aman saat update core." },
      { title: "Rapid Development", desc: "5x lebih cepat menggunakan Low-Code Framework yang sudah matang." },
      { title: "Seamless Integration", desc: "Langsung terhubung dengan modul standar (Accounting, HR) tanpa API ribet." }
    ],
    // Use Cases mapping to Methodology Timeline
    useCases: [
      { 
        id: "complex-incentive",
        title: "Complex Incentive Scheme", 
        desc: "Perhitungan komisi sales bertingkat yang sangat spesifik berdasarkan kombinasi margin produk, tenor pembayaran, dan pencapaian target tim, yang dihitung otomatis setiap malam.",
        icon: Briefcase
      },
      { 
        id: "specialized-manufacturing",
        title: "Specialized Manufacturing", 
        desc: "Modul perhitungan waste produksi garmen secara otomatis berdasarkan pola potong kain dan jenis bahan, terintegrasi langsung dengan stok gudang kain.",
        icon: Settings
      },
      { 
        id: "vendor-portal",
        title: "Exclusive Vendor Portal", 
        desc: "Portal lelang tertutup khusus supplier di mana mereka bisa login, melihat kebutuhan pengadaan, dan mengajukan penawaran harga secara digital.",
        icon: LinkIcon
      }
    ],
    // Deliverables instead of Tech Stack
    deliverables: [
      { title: "Source Code Repository", desc: "Akses penuh ke Git repository (Private). Anda memiliki hak penuh atas kode kustom.", icon: GitBranch },
      { title: "Technical Documentation", desc: "Dokumen arsitektur, skema database, dan panduan API (Swagger) untuk developer.", icon: FileCode },
      { title: "Automated Test Scripts", desc: "Unit test yang berjalan otomatis untuk memastikan fitur tidak rusak saat update.", icon: Terminal },
      { title: "User Manual & Guide", desc: "Panduan penggunaan fitur kustom dalam format PDF/Video untuk end-user.", icon: FileText },
      { title: "Deployment Scripts", desc: "CI/CD pipeline configuration untuk deployment otomatis yang aman.", icon: Server },
      { title: "Warranty & Support", desc: "Garansi bug fixing 3 bulan pasca Go-Live untuk modul yang dikembangkan.", icon: ShieldCheck }
    ]
  };

  return (
    <div className="pt-16 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30">
      <SEO title="Custom ERP Development | BizOps" description="Layanan pengembangan modul kustom di atas BizOps. Solusi tailor-made untuk kebutuhan bisnis unik." />

      {/* --- HERO SECTION --- */}
      <Section className="relative pt-20 pb-32 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-slate-950/80 dark:to-slate-950 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        <Container size="7xl" className="relative z-10">
           <div className="mb-8">
              <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: pageData.title, path: '/services/custom-dev' }]} />
           </div>

           <Grid cols={2} gap={16} className="items-start">
              {/* Left Column */}
              <motion.div initial="hidden" animate="visible" variants={STAGGER_CONTAINER}>
                 <motion.div variants={FADE_UP_VARIANTS} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
                    <Code className="w-3 h-3 text-blue-500" />
                    <Typography variant="caption" className="text-slate-600 dark:text-slate-300">Tailor-Made Solutions</Typography>
                 </motion.div>

                 <motion.h1 variants={FADE_UP_VARIANTS} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                   <span className="text-blue-600 dark:text-blue-400">{pageData.title}</span><br />
                   <span className="text-slate-400 dark:text-slate-500 text-3xl md:text-4xl font-medium block mt-2">{pageData.subtitle}</span>
                 </motion.h1>

                 <motion.p variants={FADE_UP_VARIANTS} className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 border-l-4 border-blue-500 pl-6">
                   {pageData.description}
                 </motion.p>

                 <motion.div variants={FADE_UP_VARIANTS} className="flex flex-wrap gap-4">
                    <Link to="/contact">
                       <Button size="lg" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold px-8 h-14 rounded-full shadow-xl">
                          {pageData.cta}
                       </Button>
                    </Link>
                    <Link to="/use-cases">
                       <Button variant="outline" size="lg" className="h-14 rounded-full px-8 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                          View Use Cases
                       </Button>
                    </Link>
                 </motion.div>
              </motion.div>

              {/* Right Column: Why Choose (Floating Card) */}
              <motion.div variants={FADE_UP_VARIANTS} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="relative hidden lg:block">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl transform rotate-3"></div>
                 <SpotlightCard className="rounded-[2.5rem] p-10 shadow-2xl relative z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-white/20">
                    <Stack direction="horizontal" gap={4} align="center" className="mb-8">
                       <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-14 h-14 rounded-2xl bg-blue-500 text-white shadow-lg">
                          <Code className="w-7 h-7" />
                       </div>
                       <Typography variant="h3" as="h3">Why Go Custom?</Typography>
                    </Stack>
                    
                    <Stack direction="vertical" gap={6}>
                       {pageData.benefits.map((benefit, idx) => (
                          <div key={idx} className="group flex gap-4">
                             <Stack direction="horizontal" gap={4} align="center" justify="center" className="mt-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200 dark:border-blue-800/50">
                                <Check className="w-3.5 h-3.5" />
                             </div>
                             <div>
                                <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white">{benefit.title}</Typography>
                                <Typography variant="caption" className="text-slate-500 dark:text-slate-400 leading-relaxed">{benefit.desc}</Typography>
                             </div>
                          </div>
                       ))}
                    </Stack>
                 </SpotlightCard>
              </motion.div>
           </Grid>
        </Container>
      </Section>

      {/* --- USE CASES (Timeline Style) --- */}
      <Section className="bg-white dark:bg-slate-950 relative z-20">
         <Container size="7xl">
            <Stack direction="vertical" gap={6} className="md:items-end justify-between mb-16">
               <div>
                  <Typography variant="h2" as="h2">Real World Impact</Typography>
                  <Typography variant="h3" as="h3">Solved by Custom Dev</Typography>
               </div>
               <Link to="/use-cases">
                 <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 gap-2">
                    See All Case Studies <ArrowRight className="w-4 h-4" />
                 </Button>
               </Link>
            </Stack>

            <div className="relative">
               {/* Vertical Line */}
               <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

               <Stack direction="vertical" gap={12}>
                  {pageData.useCases.map((item, idx) => {
                     const isEven = idx % 2 === 0;
                     return (
                        <motion.div 
                           key={idx}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: idx * 0.1 }}
                           className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                           {/* Content Side */}
                           <div className={`flex-1 w-full ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                              <Link to={`/use-cases/${item.id}`} className="block group">
                                <SpotlightCard className="p-8 rounded-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                                  <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white"><span className="text-blue-500 mr-2 md:hidden">Case {idx + 1}:</span>
                                      {item.title}</Typography>
                                  <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</Typography>
                                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 justify-end md:justify-start">
                                     Read Full Story <ArrowRight className="w-4 h-4" />
                                  </span>
                                </SpotlightCard>
                              </Link>
                           </div>

                           {/* Center Marker */}
                           <Stack direction="horizontal" gap={4} align="center" justify="center" className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 z-10 hidden">
                              <item.icon className="w-6 h-6 text-slate-400" />
                           </div>

                           {/* Empty Side for Balance */}
                           <Stack direction="horizontal" gap={4} className="hidden md:block">
                        </motion.div>
                     );
                  })}
               </Stack>
            </div>
         </Container>
      </Section>

      {/* --- DELIVERABLES (Previously Tech Stack) --- */}
      <Section id="deliverables" className="bg-slate-50 dark:bg-slate-900/50">
           <Container size="5xl">
              <div className="text-center mb-16">
                 <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Key Deliverables</Typography>
                 <Typography variant="body" className="text-slate-600 dark:text-slate-400">Output konkrit yang akan Anda terima dari proyek custom development ini.</Typography>
              </div>
              
              <Grid cols={2} gap={6}>
                 {pageData.deliverables.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 group"
                    >
                       <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors mt-1">
                          <item.icon className="w-6 h-6" />
                       </div>
                       <div>
                          <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white">{item.title}</Typography>
                          <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</Typography>
                       </div>
                    </motion.div>
                 ))}
              </Grid>
           </Container>
      </Section>

      {/* --- CTA SECTION --- */}
      <Section className="py-24 bg-white dark:bg-slate-950">
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={SPRING_TRANSITION}
           className="relative rounded-[2.5rem] bg-slate-900 dark:bg-black overflow-hidden px-6 py-20 md:px-20 text-center shadow-2xl shadow-slate-900/10"
        >
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
           
           <Container size="3xl" className="relative z-10">
             <Typography variant="h2" as="h2" className="font-bold text-white tracking-tight">Ready to Build <span className="text-blue-400">Unique Features?</span></Typography>
             <Typography variant="body-lg" className="text-slate-400">Diskusikan kebutuhan teknis Anda dengan Solution Architect kami. Konsultasi awal gratis.</Typography>
             <Stack direction="vertical" gap={4} className="items-center justify-center">
               <Link to="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 h-14 rounded-full border-none shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                     Start Custom Project
                  </Button>
               </Link>
               <a href="https://wa.me/6281234567890">
                  <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 h-14 rounded-full">
                     Chat via WhatsApp
                  </Button>
               </a>
             </Stack>
           </Container>
        </motion.div>
      </Section>
    </div>
  );
};

export default CustomDevPage;