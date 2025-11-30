import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCasesData } from '../data/useCasesContent';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Zap, 
  Target, 
  AlertTriangle, 
  Briefcase, 
  Quote,
  Building2,
  Users2,
  MapPin
} from 'lucide-react';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

// --- COLOR SYSTEM MAPPING (FIX FOR TAILWIND DYNAMIC CLASSES) ---
const COLOR_THEMES: Record<string, {
  primary: string; // Text color
  bgLight: string; // Light background
  bgDark: string; // Dark background
  gradientFrom: string;
  gradientTo: string;
  ring: string;
  border: string;
  iconBg: string;
}> = {
  blue: {
    primary: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-900/20',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-700',
    ring: 'ring-blue-500/50',
    border: 'border-blue-200 dark:border-blue-800',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30'
  },
  indigo: {
    primary: 'text-indigo-600 dark:text-indigo-400',
    bgLight: 'bg-indigo-50',
    bgDark: 'dark:bg-indigo-900/20',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-indigo-700',
    ring: 'ring-indigo-500/50',
    border: 'border-indigo-200 dark:border-indigo-800',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30'
  },
  violet: {
    primary: 'text-violet-600 dark:text-violet-400',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-900/20',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-violet-700',
    ring: 'ring-violet-500/50',
    border: 'border-violet-200 dark:border-violet-800',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30'
  },
  purple: {
    primary: 'text-purple-600 dark:text-purple-400',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-900/20',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-700',
    ring: 'ring-purple-500/50',
    border: 'border-purple-200 dark:border-purple-800',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30'
  },
  pink: {
    primary: 'text-pink-600 dark:text-pink-400',
    bgLight: 'bg-pink-50',
    bgDark: 'dark:bg-pink-900/20',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-700',
    ring: 'ring-pink-500/50',
    border: 'border-pink-200 dark:border-pink-800',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30'
  },
  rose: {
    primary: 'text-rose-600 dark:text-rose-400',
    bgLight: 'bg-rose-50',
    bgDark: 'dark:bg-rose-900/20',
    gradientFrom: 'from-rose-500',
    gradientTo: 'to-rose-700',
    ring: 'ring-rose-500/50',
    border: 'border-rose-200 dark:border-rose-800',
    iconBg: 'bg-rose-100 dark:bg-rose-900/30'
  },
  red: {
    primary: 'text-red-600 dark:text-red-400',
    bgLight: 'bg-red-50',
    bgDark: 'dark:bg-red-900/20',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-700',
    ring: 'ring-red-500/50',
    border: 'border-red-200 dark:border-red-800',
    iconBg: 'bg-red-100 dark:bg-red-900/30'
  },
  orange: {
    primary: 'text-orange-600 dark:text-orange-400',
    bgLight: 'bg-orange-50',
    bgDark: 'dark:bg-orange-900/20',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-orange-700',
    ring: 'ring-orange-500/50',
    border: 'border-orange-200 dark:border-orange-800',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30'
  },
  amber: {
    primary: 'text-amber-600 dark:text-amber-400',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-900/20',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-700',
    ring: 'ring-amber-500/50',
    border: 'border-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30'
  },
  yellow: {
    primary: 'text-yellow-600 dark:text-yellow-400',
    bgLight: 'bg-yellow-50',
    bgDark: 'dark:bg-yellow-900/20',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-yellow-700',
    ring: 'ring-yellow-500/50',
    border: 'border-yellow-200 dark:border-yellow-800',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30'
  },
  lime: {
    primary: 'text-lime-600 dark:text-lime-400',
    bgLight: 'bg-lime-50',
    bgDark: 'dark:bg-lime-900/20',
    gradientFrom: 'from-lime-500',
    gradientTo: 'to-lime-700',
    ring: 'ring-lime-500/50',
    border: 'border-lime-200 dark:border-lime-800',
    iconBg: 'bg-lime-100 dark:bg-lime-900/30'
  },
  green: {
    primary: 'text-green-600 dark:text-green-400',
    bgLight: 'bg-green-50',
    bgDark: 'dark:bg-green-900/20',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-700',
    ring: 'ring-green-500/50',
    border: 'border-green-200 dark:border-green-800',
    iconBg: 'bg-green-100 dark:bg-green-900/30'
  },
  emerald: {
    primary: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-900/20',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-700',
    ring: 'ring-emerald-500/50',
    border: 'border-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30'
  },
  teal: {
    primary: 'text-teal-600 dark:text-teal-400',
    bgLight: 'bg-teal-50',
    bgDark: 'dark:bg-teal-900/20',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-teal-700',
    ring: 'ring-teal-500/50',
    border: 'border-teal-200 dark:border-teal-800',
    iconBg: 'bg-teal-100 dark:bg-teal-900/30'
  },
  cyan: {
    primary: 'text-cyan-600 dark:text-cyan-400',
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-900/20',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-700',
    ring: 'ring-cyan-500/50',
    border: 'border-cyan-200 dark:border-cyan-800',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30'
  },
  sky: {
    primary: 'text-sky-600 dark:text-sky-400',
    bgLight: 'bg-sky-50',
    bgDark: 'dark:bg-sky-900/20',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-sky-700',
    ring: 'ring-sky-500/50',
    border: 'border-sky-200 dark:border-sky-800',
    iconBg: 'bg-sky-100 dark:bg-sky-900/30'
  },
  slate: {
    primary: 'text-slate-600 dark:text-slate-400',
    bgLight: 'bg-slate-50',
    bgDark: 'dark:bg-slate-800',
    gradientFrom: 'from-slate-500',
    gradientTo: 'to-slate-700',
    ring: 'ring-slate-500/50',
    border: 'border-slate-200 dark:border-slate-700',
    iconBg: 'bg-slate-100 dark:bg-slate-800'
  }
};

const MetricCard = ({ text, index, theme }: { text: string; index: number; theme: any }) => {
  const numberMatch = text.match(/(\d+%|\d+x|\d+)/);
  const number = numberMatch ? numberMatch[0] : null;
  const description = number ? text.replace(number, '').trim().replace(/^[.,]/, '') : text;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-8 rounded-3xl ${theme.bgLight} ${theme.bgDark} border ${theme.border} overflow-hidden group transition-all hover:shadow-lg`}
    >
      <div className="relative z-10">
        {number ? (
          <div className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} mb-3 tracking-tight`}>
            {number}
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-xl ${theme.iconBg} ${theme.primary} flex items-center justify-center mb-4`}>
             <CheckCircle2 className="w-6 h-6" />
          </div>
        )}
        <Typography variant="body-lg" className="text-slate-700 dark:text-slate-300 leading-relaxed">{description}</Typography>
      </div>
    </motion.div>
  );
};

const UseCaseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? useCasesData[slug] : null;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax effects
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  if (!data) {
    return (
      <Section className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-950">
        <SEO title="Use Case Not Found" noindex={true} />
        <Stack direction="row" gap={4} align="center" justify="center" className="w-24 h-24 bg-red-50 dark:bg-red-900/10 text-red-500 rounded-full mb-6 animate-pulse">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <Typography variant="h1" as="h1">Case Study Not Found</Typography>
        <Link to="/use-cases">
          <Button variant="outline" className="mt-8">Back to Library</Button>
        </Link>
      </Section>
    );
  }

  // Safe theme fallback
  const theme = COLOR_THEMES[data.color] || COLOR_THEMES['blue'];
  const Icon = data.icon;
  
  const relatedCases = Object.values(useCasesData)
    .filter(c => c.id !== data.id && (c.industry === data.industry || c.category === data.category))
    .slice(0, 3);

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30 selection:text-white">
      <SEO 
        title={`${data.title} - ${data.industry} Success Story | BizOps`} 
        description={data.subtitle} 
      />

      {/* --- 1. HERO SECTION --- */}
      <Stack direction="row" gap={4} align="center" justify="center" className="relative min-h-[90vh] overflow-hidden bg-[#0B1120]">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          {/* Dynamic Glow using Style for exact color control if needed, but classes for tailwind */}
          <div className={`absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen opacity-20 animate-pulse-slow ${theme.bgLight.replace('bg-', 'bg-')}`}></div> 
          {/* Fallback glow since bg-blue-50 isn't a glow color, let's use primary color derived from gradient */}
          <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br ${theme.gradientFrom} to-transparent opacity-10 rounded-full blur-[120px]`}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20"
        >
          {/* Top Meta */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-3 mb-10"
          >
            <Link to="/use-cases" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all text-sm font-medium backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Library
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block"></span>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 ${theme.primary} text-sm font-bold backdrop-blur-sm uppercase tracking-wide`}>
              <Briefcase className="w-3.5 h-3.5" /> {data.industry}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            {data.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            {data.subtitle}
          </motion.p>
          
          {/* Client Info Placeholder (To make it less empty) */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex justify-center gap-8 md:gap-16 border-t border-white/10 pt-8 max-w-2xl mx-auto"
          >
             <div className="text-center">
                <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">Location</div>
                <Stack direction="row" gap={2} align="center" justify="center" className="text-white font-medium">
             </div>
             <div className="text-center">
                <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">Company Size</div>
                <Stack direction="row" gap={2} align="center" justify="center" className="text-white font-medium">
             </div>
             <div className="text-center">
                <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">Industry</div>
                <Stack direction="row" gap={2} align="center" justify="center" className="text-white font-medium">
             </div>
          </motion.div>

        </motion.div>
      </div>

      {/* --- 2. MAIN CONTENT AREA --- */}
      <div className="relative z-20 bg-white dark:bg-slate-950 rounded-t-[3rem] -mt-20 shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen">
        <Container size="7xl" className="py-20 lg:py-24">
          
          <Grid cols={12} gap={12}>
            
            {/* LEFT CONTENT (Story) */}
            <Stack direction="col" gap={20} className="lg:col-span-7">
              
              {/* Challenge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Stack direction="row" gap={3} align="center" className="mb-6 text-red-500 font-bold uppercase tracking-widest text-sm">
                  <span className="w-8 h-px bg-red-500"></span> The Challenge
                </Stack>
                <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white leading-tight">Problem Statement</Typography>
                <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300">
                  <Typography variant="body-xl" className="leading-relaxed">{data.challenge}</Typography>
                  <Typography variant="body" className="text-slate-500">Hambatan ini berdampak signifikan pada efisiensi operasional dan potensi pertumbuhan pendapatan perusahaan dalam jangka panjang, sehingga membutuhkan intervensi strategis segera.</Typography>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`flex items-center gap-3 mb-6 ${theme.primary} font-bold uppercase tracking-widest text-sm`}>
                  <span className={`w-8 h-px bg-current opacity-50`}></span> The Solution
                </div>
                <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white leading-tight">BizOps Approach</Typography>
                
                <div className={`rounded-3xl p-8 border ${theme.border} ${theme.bgLight} ${theme.bgDark} mb-8`}>
                  <Stack direction="row" gap={6} align="start">
                    <div className={`p-4 rounded-2xl bg-white dark:bg-black/20 text-slate-900 dark:text-white shadow-sm shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <Typography variant="h3" as="h3">Custom Implementation</Typography>
                      <Typography variant="body" className="text-slate-700 dark:text-slate-300 leading-relaxed">{data.solution}</Typography>
                    </div>
                  </Stack>
                </div>

                <div className="relative pl-8 border-l-4 border-slate-200 dark:border-slate-800 italic text-xl font-medium text-slate-700 dark:text-slate-300 my-12">
                   <Quote className="absolute -top-4 -left-3 w-8 h-8 bg-white dark:bg-slate-950 text-slate-300 p-1" />
                   "Transformasi digital ini memungkinkan perusahaan untuk beralih dari proses manual yang rentan kesalahan menuju ekosistem terintegrasi yang akurat dan real-time."
                </div>
              </motion.div>
            </Stack>

            {/* RIGHT SIDEBAR (Sticky) */}
            <div className="lg:col-span-5 relative">
              <Stack direction="col" gap={8} className="sticky top-32">
                
                {/* Tech Stack Card */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <Typography variant="h3" as="h3" className="font-bold tracking-widest text-slate-400"><Code2 className="w-4 h-4" /> Tech Stack Used</Typography>
                  <Stack direction="row" gap={2}>
                    {data.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-300 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </Stack>
                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <Stack direction="row" gap={4} align="center" justify="between">
                       <Typography variant="caption" className="text-slate-500">Module Category</Typography>
                       <span className={`px-3 py-1 rounded-lg ${theme.bgLight} ${theme.bgDark} text-xs font-bold ${theme.primary} uppercase border ${theme.border}`}>
                          {data.category}
                       </span>
                    </Stack>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#0B1120] rounded-3xl p-8 text-white relative overflow-hidden group border border-slate-800">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500 to-indigo-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  
                  <Typography variant="h3" as="h3" className="font-bold">Hadapi Tantangan Serupa?</Typography>
                  <Typography variant="caption" className="text-slate-400 leading-relaxed">Jangan biarkan inefisiensi menghambat pertumbuhan bisnis Anda. Konsultasikan kebutuhan {data.industry} Anda sekarang.</Typography>
                  
                  <Link to="/contact" className="relative z-10 block">
                    <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 border-none font-bold h-12">
                      Mulai Konsultasi Gratis
                    </Button>
                  </Link>
                </div>

              </Stack>
            </div>

          </Grid>

          {/* --- 3. IMPACT SECTION (Metrics) --- */}
          <div className="mt-24 lg:mt-32 pt-12 border-t border-slate-100 dark:border-slate-800">
            <Container size="3xl" className="text-center mb-16">
              <span className={`inline-block px-3 py-1 rounded-full ${theme.bgLight} ${theme.bgDark} ${theme.primary} font-bold uppercase tracking-widest text-xs mb-4 border ${theme.border}`}>
                 Key Outcomes
              </span>
              <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Business Impact</Typography>
              <Typography variant="body-lg" className="text-slate-500 dark:text-slate-400">Hasil nyata yang terukur setelah implementasi sistem BizOps.</Typography>
            </Container>

            <Grid cols={3} gap={6}>
              {data.results.map((result, i) => (
                <MetricCard key={i} text={result} index={i} theme={theme} />
              ))}
            </Grid>
          </div>

        </Container>
      </div>

      {/* --- 4. RELATED CASES --- */}
      {relatedCases.length > 0 && (
        <div className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-24">
          <Container size="7xl">
            <Stack direction="row" gap={4} align="center" justify="between" className="mb-12">
              <Typography variant="h2" as="h2">More Success Stories</Typography>
              <Link to="/use-cases" className="text-primary-600 dark:text-primary-400 font-bold hover:underline flex items-center gap-1">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </Link>
            </Stack>
            
            <Grid cols={3} gap={8}>
              {relatedCases.map((item) => {
                 const itemTheme = COLOR_THEMES[item.color] || COLOR_THEMES['blue'];
                 return (
                  <Link key={item.id} to={`/use-cases/${item.id}`} className="group block">
                    <div className="aspect-[4/3] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden relative mb-4 shadow-sm group-hover:shadow-md transition-all">
                      <div className={`absolute inset-0 bg-gradient-to-br ${itemTheme.gradientFrom} to-transparent opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      <Stack direction="row" gap={4} align="center" justify="center" className="absolute inset-0">
                         <div className={`p-4 rounded-2xl ${itemTheme.bgLight} ${itemTheme.bgDark} ${itemTheme.primary} group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-8 h-8" />
                         </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                         <span className="text-xs font-bold bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500">
                            {item.industry}
                         </span>
                      </div>
                    </div>
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600">{item.title}</Typography>
                    <Typography variant="caption" className="text-slate-500 dark:text-slate-400">{item.subtitle}</Typography>
                  </Link>
                );
              })}
            </Grid>
          </Container>
        </div>
      )}
    </div>
  );
};

export default UseCaseDetailPage;
