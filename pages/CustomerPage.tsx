import React from 'react';
import { customerStories } from '../data/companyContent';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Quote, AlertTriangle, CheckCircle2, ArrowRight, TrendingUp, Building2, Users, BarChart3, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Section from '../components/Section';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

import CardSlider from '../components/CardSlider';

// --- Enhanced Spotlight Card ---
const StoryCard = ({ story, idx }: { story: any, idx: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col lg:flex-row">
         {/* LEFT: Impact & Metrics (Dark Side) */}
         <div className="lg:w-[400px] bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
               <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500 rounded-full blur-[80px]"></div>
               <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-500 rounded-full blur-[80px]"></div>
            </div>

            <div className="relative z-10">
               <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg mb-8">
                  {story.logo}
               </div>
               <Typography variant="h3" as="h3" className="font-bold">{story.client}</Typography>
               <Typography variant="body" className="text-slate-400 tracking-wider">{story.industry}</Typography>
               
               <Stack direction="col" gap={6} className="pt-8 border-t border-white/10">
                  {story.metrics.map((m: any, i: number) => (
                     <div key={i}>
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-1">{m.value}</div>
                        <div className="text-sm text-slate-400 font-medium">{m.label}</div>
                     </div>
                  ))}
               </Stack>
            </div>
         </div>

         {/* RIGHT: The Story (Light Side) */}
         <div className="flex-1 p-10 lg:p-14 flex flex-col">
            <div className="mb-8">
               <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white leading-tight">"{story.title}"</Typography>
               
               <div className="flex gap-4 mb-8">
                  <Quote className="w-10 h-10 text-blue-200 dark:text-blue-900 flex-shrink-0" />
                  <Typography variant="body-lg" className="text-slate-600 dark:text-slate-300 leading-relaxed">{story.desc}</Typography>
               </div>
            </div>

            {/* Transformation Grid */}
            <Grid cols={2} gap={6} className="mt-auto">
               <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-100 dark:border-red-900/20">
                  <div className="flex items-center gap-2 mb-2 text-red-700 dark:text-red-400 font-bold text-xs uppercase tracking-wider">
                     <AlertTriangle className="w-4 h-4" /> Before BizOps
                  </div>
                  <Typography variant="caption" className="text-slate-700 dark:text-slate-300 leading-relaxed">{story.chaos}</Typography>
               </div>
               <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-xl border border-green-100 dark:border-green-900/20">
                  <div className="flex items-center gap-2 mb-2 text-green-700 dark:text-green-400 font-bold text-xs uppercase tracking-wider">
                     <CheckCircle2 className="w-4 h-4" /> After BizOps
                  </div>
                  <Typography variant="caption" className="text-slate-700 dark:text-slate-300 leading-relaxed">{story.solution}</Typography>
               </div>
            </Grid>
         </div>
      </div>
    </motion.div>
  );
};

const CustomerPage: React.FC = () => {
  // Extract logos/names for the ticker
  const logos = customerStories.map(s => s.client);
  // Duplicate for infinite loop effect
  const infiniteLogos = [...logos, ...logos, ...logos, ...logos]; 

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30">
      <SEO title="Customer Success Stories | BizOps" description="Lihat bagaimana perusahaan terkemuka di Indonesia mentransformasi operasional mereka dengan BizOps." />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0B1120] overflow-hidden text-white">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
         
         <Container size="7xl" className="relative z-10 text-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md"
            >
               <ShieldCheck className="w-4 h-4 text-green-400" />
               <Typography variant="caption" className="text-white">Trusted by Leaders</Typography>
            </motion.div>

            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            >
               Powering the Engines of <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Modern Business.</span>
            </motion.h1>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 pt-12 border-t border-white/10"
            >
               {[
                  { val: "500+", label: "Enterprise Clients" },
                  { val: "Rp 2.5T", label: "Transaction Value" },
                  { val: "99.9%", label: "System Uptime" },
                  { val: "24/7", label: "Expert Support" }
               ].map((stat, i) => (
                  <div key={i} className="text-center">
                     <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.val}</div>
                     <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
               ))}
            </motion.div>
         </Container>
      </section>

      {/* --- STORIES LIST --- */}
      <div className="relative z-20 -mt-20">
         <Container size="7xl" className="pb-32">
            {/* Mobile Slider */}
            <div className="md:hidden">
               <CardSlider 
                  mobileItemWidth="w-[90vw] sm:w-[600px]"
               >
                  {customerStories.map((story, idx) => (
                     <StoryCard key={idx} story={story} idx={idx} />
                  ))}
               </CardSlider>
            </div>

            {/* Desktop Stack */}
            <Stack direction="col" gap={12} className="hidden md:block">
               {customerStories.map((story, idx) => (
                  <StoryCard key={idx} story={story} idx={idx} />
               ))}
            </Stack>
         </Container>
      </div>
      
      {/* --- INFINITE LOGO LOOP --- */}
      <div className="py-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden">
         <Container size="7xl" className="text-center mb-12">
            <Typography variant="caption" className="text-slate-500">Trusted by Industry Leaders</Typography>
         </Container>
         
         {/* Marquee Container */}
         <div className="relative flex overflow-x-hidden w-full group">
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10"></div>

            {/* Sliding Track */}
            <motion.div 
               className="flex items-center gap-16 lg:gap-24 whitespace-nowrap py-4"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 25 // Speed control (seconds)
               }}
            >
               {infiniteLogos.map((name, i) => (
                  <div key={i} className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
                     {/* Using text as placeholder, imagine these are SVG logos */}
                     <span className="text-2xl md:text-3xl font-black text-slate-400 hover:text-slate-900 dark:hover:text-white tracking-tight">
                        {name}
                     </span>
                  </div>
               ))}
            </motion.div>
         </div>
      </div>

      {/* --- CTA SECTION --- */}
      <section className="bg-[#0B1120] py-24 relative overflow-hidden text-white">
         <Container size="7xl" className="text-center relative z-10">
            <Typography variant="h2" as="h2">Join the Revolution</Typography>
            <Typography variant="body-xl" className="text-slate-400">Jangan biarkan inefisiensi menahan pertumbuhan Anda. Bergabunglah dengan ratusan perusahaan yang telah beralih ke BizOps.</Typography>
            <div className="flex justify-center gap-4">
               <Link to="/demo">
                  <Button size="lg" className="h-14 px-8 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold shadow-xl">
                     Start Transformation
                  </Button>
               </Link>
            </div>
         </Container>
      </section>
    </div>
  );
};

export default CustomerPage;
