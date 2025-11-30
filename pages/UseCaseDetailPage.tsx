import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCasesData } from '../data/useCasesContent';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COLOR_THEMES } from '../utils/themeColors'; // Imported themes
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
          <div className={`text-5xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} mb-3 tracking-tight`}>
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
      <Section className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-950 gap-4 py-16 md:py-24">
        <SEO title="Use Case Not Found" noindex={true} />
        <div className="w-24 h-24 bg-red-50 dark:bg-red-900/10 text-red-500 dark:text-red-400 dark:text-red-300 rounded-full flex items-center justify-center mb-6 animate-pulse gap-4">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <Typography variant="h1" as="h1">Case Study Not Found</Typography>
        <Link to="/use-cases">
          <Button size="md" variant="outline" className="mt-8">Back to Library</Button>
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
    <div ref={containerRef} className="bg-white dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30 selection: text-slate-900 dark:text-white">
      <SEO 
        title={`${data.title} - ${data.industry} Success Story | BizOps`} 
        description={data.subtitle} 
      />

      {/* --- 1. HERO SECTION --- */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B1120] gap-4">
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
            <Link to="/use-cases" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-slate-900 dark:text-white transition-all text-sm font-medium backdrop-blur-sm">
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
            className="text-xl md:text-2xl text-slate-400 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-12"
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
                <div className="text-slate-500 dark:text-slate-400 dark:text-slate-300 text-xs uppercase tracking-widest mb-2">Location</div>
                <div className="text-white font-medium flex items-center justify-center gap-2"><MapPin className="w-4 h-4" /> Indonesia</div>
             </div>
             <div className="text-center">
                <div className="text-slate-500 dark:text-slate-400 dark:text-slate-300 text-xs uppercase tracking-widest mb-2">Company Size</div>
                <div className="text-white font-medium flex items-center justify-center gap-2"><Users2 className="w-4 h-4" /> Enterprise</div>
             </div>
             <div className="text-center">
                <div className="text-slate-500 dark:text-slate-400 dark:text-slate-300 text-xs uppercase tracking-widest mb-2">Industry</div>
                <div className="text-white font-medium flex items-center justify-center gap-2"><Building2 className="w-4 h-4" /> {data.industry}</div>
             </div>
          </motion.div>

        </motion.div>
      </div>

      {/* --- 2. MAIN CONTENT AREA --- */}
      <div className="relative z-20 bg-white dark:bg-slate-950 rounded-t-[3rem] -mt-20 shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen">
        <Container size="7xl" className="py-20 lg:py-24">
          
          <Grid cols={12} gap={12}>
            
            {/* LEFT CONTENT (Story) */}
            <Stack direction="vertical" gap={20} className="lg:col-span-7">
              
              {/* Challenge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-3 mb-6 text-red-500 dark:text-red-400 dark:text-red-300 font-bold uppercase tracking-widest text-sm">
                  <span className="w-8 h-px bg-red-500"></span> The Challenge
                </div>
                <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white leading-tight">Problem Statement</Typography>
                <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300">
                  <Typography variant="body-xl" className="leading-relaxed">{data.challenge}</Typography>
                  <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Hambatan ini berdampak signifikan pada efisiensi operasional dan potensi pertumbuhan pendapatan perusahaan dalam jangka panjang, sehingga membutuhkan intervensi strategis segera.</Typography>
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
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-white dark:bg-black/20 text-slate-900 dark:text-white shadow-sm shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <Typography variant="h3" as="h3">Custom Implementation</Typography>
                      <Typography variant="body" className="text-slate-700 dark:text-slate-300 leading-relaxed">{data.solution}</Typography>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-4 border-slate-200 dark:border-slate-800 italic text-xl font-medium text-slate-700 dark:text-slate-300 my-12">
                   <Quote className="absolute -top-4 -left-3 w-8 h-8 bg-white dark:bg-slate-950 text-slate-300 p-1" />
                   "Transformasi digital ini memungkinkan perusahaan untuk beralih dari proses manual yang rentan kesalahan menuju ekosistem terintegrasi yang akurat dan real-time."
                </div>
              </motion.div>
            </Stack>

            {/* RIGHT SIDEBAR (Sticky) */}
            <div className="lg:col-span-5 relative">
              <Stack direction="vertical" gap={8} className="sticky top-32">
                
                {/* Tech Stack Card */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <Typography variant="h3" as="h3" className="font-bold tracking-widest text-slate-400 dark:text-slate-300"><Code2 className="w-4 h-4" /> Tech Stack Used</Typography>
                  <div className="flex flex-wrap gap-2">
                    {data.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-slate-300 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between gap-4">
                       <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Module Category</Typography>
                       <span className={`px-3 py-1 rounded-lg ${theme.bgLight} ${theme.bgDark} text-xs font-bold ${theme.primary} uppercase border ${theme.border}`}>
                          {data.category}
                       </span>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#0B1120] rounded-3xl p-8 text-white relative overflow-hidden group border border-slate-800">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500 to-indigo-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  
                  <Typography variant="h3" as="h3" className="font-bold">Hadapi Tantangan Serupa?</Typography>
                  <Typography variant="caption" className="text-slate-400 dark:text-slate-300 leading-relaxed">Jangan biarkan inefisiensi menghambat pertumbuhan bisnis Anda. Konsultasikan kebutuhan {data.industry} Anda sekarang.</Typography>
                  
                  <Link to="/contact" className="relative z-10 block">
                    <Button size="md" className="w-full bg-white text-slate-900 dark:text-white hover:bg-slate-100 border-none font-bold h-12">
                      Mulai Konsultasi Gratis
                    </Button>
                  </Link>
                </div>

              </Stack>
            </div>

          </Grid>

          {/* --- 3. IMPACT SECTION (Metrics) --- */}
          <div className="mt-24 lg:mt-32 pt-12 border-t border-slate-100 dark:border-slate-800">
            <Container noPadding size="3xl" className="text-center mb-16">
              <span className={`inline-block px-3 py-1 rounded-full ${theme.bgLight} ${theme.bgDark} ${theme.primary} font-bold uppercase tracking-widest text-xs mb-4 border ${theme.border}`}>
                 Key Outcomes
              </span>
              <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Business Impact</Typography>
              <Typography variant="body-lg" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Hasil nyata yang terukur setelah implementasi sistem BizOps.</Typography>
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
          <Container className="px-4 md:px-6 lg:px-8" size="7xl">
            <div className="flex items-center justify-between mb-12 gap-4">
              <Typography variant="h2" as="h2">More Success Stories</Typography>
              <Link to="/use-cases" className="text-primary-600 dark:text-primary-400 font-bold hover:underline flex items-center gap-1">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <Grid cols={3} gap={8}>
              {relatedCases.map((item) => {
                 const itemTheme = COLOR_THEMES[item.color] || COLOR_THEMES['blue'];
                 return (
                  <Link key={item.id} to={`/use-cases/${item.id}`} className="group block">
                    <div className="aspect-[4/3] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden relative mb-4 shadow-sm group-hover:shadow-md transition-all">
                      <div className={`absolute inset-0 bg-gradient-to-br ${itemTheme.gradientFrom} to-transparent opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      <div className="absolute inset-0 flex items-center justify-center gap-4">
                         <div className={`p-4 rounded-2xl ${itemTheme.bgLight} ${itemTheme.bgDark} ${itemTheme.primary} group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-8 h-8" />
                         </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                         <span className="text-xs font-bold bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 dark:text-slate-300">
                            {item.industry}
                         </span>
                      </div>
                    </div>
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600">{item.title}</Typography>
                    <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">{item.subtitle}</Typography>
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
