import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '../data/content';
import Button from '../components/Button';
import Badge from '../components/Badge';
import CardSlider from '../components/CardSlider'; // Imported CardSlider
import OptimizedImage from '../components/OptimizedImage'; // Imported OptimizedImage
import { HelpCircle, ChevronRight, Check, Quote, ArrowRight, AlertTriangle, PlayCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

// Motion Components
import { StaggeredText } from '../components/ui/motion-text';
import { BouncyButton } from '../components/ui/motion-button';
import { CounterUp } from '../components/ui/motion-scroll';
import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER } from '../utils/animation';

// Generic Components
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <Typography variant="body-lg" className="text-slate-900 dark:text-white group-hover:text-primary-600">{question}</Typography>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30'}`}>
           <ChevronRight className="w-5 h-5" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{answer}</Typography>
      </div>
    </div>
  );
};

const IndustryPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const data = industryId ? industriesData[industryId] : null;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-slate-950">
        <SEO title="Solution Not Found" />
        <Typography variant="h1" as="h1">Industry Solution Not Found</Typography>
        <Typography variant="body" className="text-slate-600 dark:text-slate-400">The solution you are looking for does not exist or has been moved.</Typography>
        <Link to="/solutions"><Button>Back to Solutions</Button></Link>
      </div>
    );
  }

  const Icon = data.icon || HelpCircle;

  // JSON-LD Structured Data
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `BizOps for ${data.title}`,
    "description": data.description,
    "brand": {
      "@type": "Brand",
      "name": "BizOps"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85"
    }
  };

  return (
    <Stack direction="col" gap={4} className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <SEO 
        title={data.metaTitle} 
        description={data.metaDesc} 
        structuredData={industrySchema}
      />

      {/* 1. HERO SECTION - Premium Upgrade */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-40 overflow-hidden bg-[#0B1120] border-b border-white/5">
         {/* Premium Background Effects */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

         <Container size="7xl" className="relative z-10 text-center">
            
            {/* Icon - Moved to Top as Visual Anchor */}
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ type: "spring", stiffness: 200, damping: 15 }}
               className="relative inline-flex items-center justify-center p-5 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl mb-8 shadow-2xl group"
            >
               <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <Icon className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10" />
            </motion.div>

            {/* Context Label */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center mb-8"
            >
               <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-primary-300 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
                  <span>Industry Solution</span>
                  <span className="text-slate-500 mx-1">/</span>
                  <span className="text-white">{data.title}</span>
               </div>
            </motion.div>
            
            <Typography variant="h1" as="h1" className="font-extrabold text-white tracking-tight leading-[1.1] font-sans"><span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
                 {data.subtitle}
               </span></Typography>
            
            <motion.p 
               variants={FADE_UP_VARIANTS}
               initial="hidden"
               animate="visible"
               transition={{ delay: 0.4 }}
               className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
               {data.description}
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
               <Link to="/demo" className="w-full sm:w-auto">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                    <button className="relative h-14 px-8 bg-slate-950 rounded-lg leading-none flex items-center justify-center divide-x divide-slate-600 w-full">
                      <span className="flex items-center space-x-3">
                        <span className="text-white font-bold text-lg pr-4">Lihat Demo Live</span>
                      </span>
                      <span className="pl-4 text-primary-400 group-hover:text-primary-300 transition duration-200">
                        <PlayCircle className="w-6 h-6" />
                      </span>
                    </button>
                  </div>
               </Link>
               <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="ghost" size="lg" className="h-14 px-8 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 w-full">
                     Konsultasi Ahli <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
               </Link>
            </motion.div>
         </Container>
      </section>

      {/* 2. METRICS (Impact) - Upgraded Design */}
      {data.metrics && (
         <section className="relative -mt-16 z-20 pb-16">
            <Container size="7xl">
               <CardSlider desktopClassName="md:grid md:grid-cols-3 md:gap-6" mobileItemWidth="w-[85vw] sm:w-[350px]">
                  {data.metrics.map((metric, idx) => {
                     const numericValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''));
                     const prefix = metric.value.match(/^[^0-9]*/) ? metric.value.match(/^[^0-9]*/)![0] : '';
                     const suffix = metric.value.match(/[^0-9]*$/) ? metric.value.match(/[^0-9]*$/)![0] : '';
                     const isNumber = !isNaN(numericValue);

                     return (
                       <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-slate-700/50 shadow-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full"
                       >
                          {/* Top Highlight Line */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          <div className="flex-grow flex flex-col items-center justify-center w-full relative z-10">
                             {isNumber ? (
                               <div>
                                 <CounterUp to={numericValue} label={metric.label} prefix={prefix} suffix={suffix} />
                               </div>
                             ) : (
                               <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                                  {metric.value}
                               </div>
                             )}
                             {!isNumber && <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-2">{metric.label}</div>}
                          </div>
                       </motion.div>
                     );
                  })}
               </CardSlider>
            </Container>
         </section>
      )}

      {/* 3. CHALLENGES (Pain Points) - Modernized UI */}
      <Section className="relative border-t border-white/5 py-16 md:py-24 overflow-hidden">
         {/* Enhanced Background */}
         <div className="absolute inset-0 bg-[#0B1120]"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-[#0B1120] to-transparent pointer-events-none"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
         
         <Container size="3xl" className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(220,38,38,0.15)] backdrop-blur-md">
              <AlertTriangle className="w-3 h-3" /> Operational Risks
            </div>
            <Typography variant="h2" as="h2" className="font-bold text-white tracking-tight leading-tight">Mengapa Bisnis {data.title} Sering <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.2)]">Stuck?</span></Typography>
            <Typography variant="body-lg" className="text-slate-400">Kenali gejala inefisiensi yang diam-diam menggerogoti margin keuntungan Anda.</Typography>
         </Container>

         <CardSlider desktopClassName="md:grid md:grid-cols-3 md:gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
            {data.challenges.map((challenge, idx) => (
               <motion.div 
                  key={idx}
                  variants={FADE_UP_VARIANTS}
                  className="bg-gradient-to-b from-[#1E293B]/60 to-[#0F172A]/60 p-8 rounded-3xl border border-white/5 hover:border-red-500/40 shadow-lg hover:shadow-red-900/10 transition-all duration-500 group relative overflow-hidden hover:-translate-y-1 h-full flex flex-col backdrop-blur-sm"
               >
                  {/* Enhanced Card Background Effects */}
                  <div className="absolute top-0 right-0 w-56 h-56 bg-red-600/5 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-red-600/10 transition-colors duration-500 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-600/5 rounded-full blur-[50px] -ml-10 -mb-10 group-hover:bg-orange-600/10 transition-colors duration-500 pointer-events-none"></div>
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-2xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] relative z-10 shrink-0">
                     <span className="font-bold text-xl">0{idx + 1}</span>
                  </div>
                  
                  <div className="flex-grow relative z-10 flex flex-col">
                     <Typography variant="h3" as="h3" className="font-bold text-white">{challenge.title}</Typography>
                     <Typography variant="caption" className="text-slate-400 leading-relaxed group-hover:text-slate-300">{challenge.desc}</Typography>
                  </div>
               </motion.div>
            ))}
         </CardSlider>
      </Section>

      {/* 4. SOLUTIONS (Bento Grid) - High Contrast */}
      <Section className="relative overflow-hidden bg-white dark:bg-slate-950 py-16 md:py-24">
         {/* Background Decoration */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none"></div>

         <Container size="3xl" className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Check className="w-3 h-3" /> The Solution
            </div>
            <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white tracking-tight">Solusi Terintegrasi</Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Modul dan fitur yang dirancang khusus untuk menjawab tantangan di atas.</Typography>
         </Container>

         <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
            {data.solutions.map((sol, idx) => {
               const SolIcon = sol.icon || Check;
               return (
                  <motion.div 
                     key={idx}
                     variants={FADE_UP_VARIANTS}
                     className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col"
                  >
                     {/* Dot Pattern Overlay */}
                     <div className="absolute inset-0 bg-[radial-gradient(#3b82f680_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                     <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                     
                     <div className="relative z-10 w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-slate-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-primary-500/30 shrink-0">
                        <SolIcon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
                     </div>
                     
                     <div className="flex-grow flex flex-col">
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{sol.title}</Typography>
                        <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{sol.desc}</Typography>
                     </div>
                  </motion.div>
               );
            })}
         </CardSlider>
         
         <div className="mt-16 text-center relative z-10">
            <Link to="/platform">
               <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 h-14 text-lg w-full sm:w-auto">Lihat Semua Modul Platform</Button>
            </Link>
         </div>
      </Section>

      {/* 5. CASE STUDY */}
      <Section dark className="relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary-900/20 to-transparent pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
         
         <Grid cols={2} gap={16} className="items-center relative z-10">
            <div>
               <Badge variant="outline-white" className="mb-6">Success Story</Badge>
               <Typography variant="h2" as="h2" className="font-bold text-white">{data.caseStudyTitle}</Typography>
               <Typography variant="body-lg" className="text-slate-300 leading-relaxed">"{data.caseStudy}"</Typography>
               <Stack direction="col" gap={4}>
                  <Link to="/customers">
                     <Button variant="white" className="group">
                        Baca Studi Kasus Lengkap <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </Link>
               </Stack>
            </div>
            
            {/* Visual Abstract */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-10 rounded-3xl relative"
            >
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/30 rounded-full blur-xl animate-pulse-slow"></div>
               <Quote className="w-12 h-12 text-primary-400 mb-6 opacity-50" />
               <Typography variant="body-xl" className="leading-relaxed">"{data.testimonial?.quote || "BizOps memberikan visibilitas yang kami cari selama ini. Keputusan bisnis jadi lebih cepat dan akurat."}"</Typography>
               <Stack direction="row" gap={4} align="center">
                  <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden ring-2 ring-primary-500/50">
                     <OptimizedImage 
                        src={data.testimonial?.avatar || "https://ui-avatars.com/api/?name=User&background=random"} 
                        alt="User" 
                        className="w-full h-full object-cover" 
                        width={56}
                        height={56}
                     />
                  </div>
                  <div>
                     <div className="font-bold text-white text-lg">{data.testimonial?.author || "Happy Client"}</div>
                     <div className="text-sm text-primary-300">{data.testimonial?.role || "Director"}</div>
                  </div>
               </Stack>
            </motion.div>
         </Grid>
      </Section>

      {/* 6. FAQ */}
      {data.faqs && (
         <Section className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <Container size="7xl">
               <div className="text-center mb-12">
                  <Typography variant="h2" as="h2">Pertanyaan Umum</Typography>
                  <Typography variant="body" className="text-slate-600 dark:text-slate-400">Hal yang sering ditanyakan oleh pelaku industri {data.title}.</Typography>
               </div>
               <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-2 sm:p-8">
                  {data.faqs.map((faq, i) => (
                     <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </Container>
         </Section>
      )}

      {/* 7. CTA (Final Push - Premium Style) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-[#020617]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <Container size="5xl" className="relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium mb-8 backdrop-blur-sm"
           >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
             </span>
             Market Leader Choice
           </motion.div>

           <Typography variant="h2" as="h2" className="font-bold text-white leading-tight tracking-tight font-sans">Siap Mendominasi Pasar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-cyan-300">{data.title}</span>?</Typography>
           
           <Typography variant="body-xl" className="text-slate-400">Jangan biarkan software generik memperlambat Anda. Bergabung dengan pemimpin industri yang menggunakan BizOps.</Typography>

           <Stack direction="col" gap={5} className="justify-center items-center">
              <Link to="/demo" className="w-full sm:w-auto">
                 <BouncyButton className="h-16 px-12 text-lg bg-white text-slate-900 border-none shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-slate-200 hover:scale-105 transition-all duration-300 font-bold flex items-center justify-center gap-2 w-full sm:w-auto">
                    Mulai Free Trial <ArrowRight className="w-5 h-5" />
                 </BouncyButton>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                 <Button variant="outline-white" size="lg" className="h-16 px-10 text-lg border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md w-full sm:w-auto">
                    Hubungi Sales
                 </Button>
              </Link>
           </Stack>
           
           <Typography variant="caption" className="text-slate-500">*Free trial 14 hari. Full akses ke semua modul.</Typography>
        </Container>
      </section>
    </Stack>
  );
};

export default IndustryPage;
