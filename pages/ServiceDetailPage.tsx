import React, { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/content';
import { ServiceData } from '../types';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CardSlider from '../components/CardSlider'; // Imported CardSlider
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  ArrowLeft, AlertCircle, CheckCircle2, ShieldCheck, 
  Zap, Layers, PackageCheck, ArrowRight, Sparkles, FileText, Check
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

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const data = serviceId ? (servicesData[serviceId] as ServiceData) : null;

  if (!data) {
    return (
      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <SEO title="Service Not Found" noindex={true} />
        <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <Typography variant="h1" as="h1">Service Not Found</Typography>
        <Typography variant="body" className="text-slate-600 dark:text-slate-400">Maaf, layanan yang Anda cari tidak ditemukan atau telah dipindahkan.</Typography>
        <Link to="/services">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Layanan
          </Button>
        </Link>
      </Section>
    );
  }

  const Icon = data.icon;

  return (
    <div className="pt-16 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30">
      <SEO 
        title={data.title} 
        description={data.subtitle}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.title,
          "description": data.description,
          "provider": {
             "@type": "Organization",
             "name": "BizOps"
          },
          "serviceType": "Enterprise Resource Planning",
          "areaServed": "Indonesia"
        }}
      />

      {/* --- HERO SECTION --- */}
      <Section className="relative pt-20 pb-32 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-slate-950/80 dark:to-slate-950 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        <Container size="7xl" className="relative z-10">
           <div className="mb-8">
              <Breadcrumbs items={[
                { label: 'Services', path: '/services' },
                { label: data.title, path: `/services/${serviceId}` }
              ]} />
           </div>

           <Grid cols={2} gap={16} className="items-start">
              {/* Left Column: Title & Desc */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={STAGGER_CONTAINER}
              >
                 <motion.div 
                   variants={FADE_UP_VARIANTS}
                   className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8"
                 >
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
                    <Typography variant="caption" className="text-slate-600 dark:text-slate-300">Enterprise Service</Typography>
                 </motion.div>

                 <motion.h1 
                   variants={FADE_UP_VARIANTS}
                   className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                 >
                   <span className="text-primary-600 dark:text-primary-400">{data.title}</span><br />
                   <span className="text-slate-400 dark:text-slate-500 text-3xl md:text-4xl font-medium block mt-2">{data.subtitle}</span>
                 </motion.h1>

                 <motion.p 
                   variants={FADE_UP_VARIANTS}
                   className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 border-l-4 border-primary-500 pl-6"
                 >
                   {data.description}
                 </motion.p>

                 <motion.div variants={FADE_UP_VARIANTS} className="flex flex-wrap gap-4">
                    <Link to="/contact">
                       <Button size="lg" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold px-8 h-14 rounded-full shadow-xl shadow-primary-500/10 hover:shadow-primary-500/20">
                          {data.cta}
                       </Button>
                    </Link>
                    {data.deliverables && (
                       <a href="#deliverables">
                          <Button variant="outline" size="lg" className="h-14 rounded-full px-8 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                             View Deliverables
                          </Button>
                       </a>
                    )}
                 </motion.div>
              </motion.div>

              {/* Right Column: Why Choose Us (Floating Card) */}
              <motion.div 
                variants={FADE_UP_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="relative mt-12 lg:mt-0"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl transform rotate-3"></div>
                 <SpotlightCard className="rounded-[2.5rem] p-10 shadow-2xl relative z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-white/20">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/30">
                          <Icon className="w-7 h-7" />
                       </div>
                       <Typography variant="h3" as="h3">Why BizOps?</Typography>
                    </div>
                    
                    <Stack direction="col" gap={6}>
                       {data.benefits?.map((benefit, idx) => (
                          <div key={idx} className="group flex gap-4">
                             <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 border border-green-200 dark:border-green-800/50">
                                <Check className="w-3.5 h-3.5" />
                             </div>
                             <div>
                                <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600">{benefit.title}</Typography>
                                <Typography variant="caption" className="text-slate-500 dark:text-slate-400 leading-relaxed">{benefit.desc}</Typography>
                             </div>
                          </div>
                       ))}
                    </Stack>

                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50 flex items-center gap-2 text-sm text-slate-400 font-medium">
                       <ShieldCheck className="w-4 h-4 text-primary-500" />
                       Guaranteed Results & SLA
                    </div>
                 </SpotlightCard>
              </motion.div>
           </Grid>
        </Container>
      </Section>

      {/* --- METHODOLOGY (Timeline Style) --- */}
      <Section className="bg-white dark:bg-slate-950 relative z-20">
         <Container size="7xl">
            <Stack direction="col" gap={6} className="md:items-end justify-between mb-16">
               <div>
                  <Typography variant="h2" as="h2">Our Methodology</Typography>
                  <Typography variant="h3" as="h3">Execution Roadmap</Typography>
               </div>
               <Typography variant="body" className="text-slate-500 dark:text-slate-400">Langkah-langkah terstruktur untuk memastikan keberhasilan proyek Anda dari awal hingga akhir.</Typography>
            </Stack>

            <div className="relative">
               {/* Vertical Line for Desktop */}
               <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

               <CardSlider desktopClassName="md:block md:space-y-12" mobileItemWidth="w-[85vw] sm:w-[350px]">
                  {data.methodology.map((item, idx) => {
                     const isEven = idx % 2 === 0;
                     return (
                        <motion.div 
                           key={idx}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: idx * 0.1 }}
                           className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} h-full`}
                        >
                           {/* Content Side */}
                           <div className={`flex-1 w-full ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'} h-full`}>
                              <SpotlightCard className="p-8 rounded-2xl hover:border-primary-200 dark:hover:border-primary-800 transition-colors h-full flex flex-col">
                                 <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white"><span className="text-primary-500 mr-2 md:hidden">Step {idx + 1}:</span>
                                    {item.title}</Typography>
                                 <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</Typography>
                              </SpotlightCard>
                           </div>

                           {/* Center Marker */}
                           <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center z-10 hidden md:flex">
                              <Typography variant="body-lg" className="text-slate-400">{idx + 1}</Typography>
                           </div>

                           {/* Empty Side for Balance */}
                           <div className="flex-1 hidden md:block"></div>
                        </motion.div>
                     );
                  })}
               </CardSlider>
            </div>
         </Container>
      </Section>

      {/* --- DELIVERABLES (Grid) --- */}
      {data.deliverables && (
        <Section id="deliverables" className="bg-slate-50 dark:bg-slate-900/50">
           <Container size="5xl">
              <div className="text-center mb-16">
                 <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Tangible Deliverables</Typography>
                 <Typography variant="body" className="text-slate-600 dark:text-slate-400">Aset konkret yang akan menjadi milik perusahaan Anda selamanya.</Typography>
              </div>
              
              <CardSlider desktopClassName="md:grid md:grid-cols-2 md:gap-6" mobileItemWidth="w-[85vw] sm:w-[350px]">
                 {data.deliverables.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-900 transition-all duration-300 group h-full"
                    >
                       <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <FileText className="w-6 h-6" />
                       </div>
                       <span className="font-bold text-slate-900 dark:text-white text-lg">{item}</span>
                    </motion.div>
                 ))}
              </CardSlider>
           </Container>
        </Section>
      )}

      {/* --- CTA SECTION (Consistent with ServicesPage) --- */}
      <Section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={SPRING_TRANSITION}
           className="relative rounded-[2.5rem] bg-slate-900 dark:bg-black overflow-hidden px-6 py-20 md:px-20 text-center shadow-2xl shadow-slate-900/10"
        >
           {/* Sophisticated Background */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
           
           <Container size="3xl" className="relative z-10">
             <Typography variant="h2" as="h2" className="font-bold text-white tracking-tight">Start Your <span className="text-primary-400">{data.title}</span> Journey.</Typography>
             <Typography variant="body-lg" className="text-slate-400">Diskusikan kebutuhan spesifik Anda dengan tim ahli kami. Kami siap memberikan asesmen awal.</Typography>
             <Stack direction="col" gap={4} className="items-center justify-center">
               <Link to="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 h-14 rounded-full border-none shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                     Book Free Consultation
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

export default ServiceDetailPage;