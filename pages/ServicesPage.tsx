import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/content';
import { ServiceData } from '../types';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowRight, Compass, Settings, Users, Activity, Sparkles, MoveRight, Layers, Zap, Trophy, Globe, Clock } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER, SPRING_TRANSITION } from '../utils/animation';
import { StaggeredText } from '../components/ui/motion-text';

// --- COMPONENT: SPOTLIGHT CARD ---
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

// --- MAIN PAGE ---
const ServicesPage: React.FC = () => {
  const serviceOrder = ['consulting', 'implementation', 'custom-dev', 'training', 'support'];
  
  const services = serviceOrder
    .filter(key => servicesData[key]) 
    .map(key => ({ 
      id: key, 
      ...(servicesData[key] as ServiceData) 
    }));

  return (
    <div className="pt-16 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30">
      <SEO 
        title="Professional Services" 
        description="Partner Transformasi Digital End-to-End: Consulting, Implementasi, hingga Managed Support." 
      />
      
      {/* --- HERO SECTION --- */}
      <Section className="relative pt-20 pb-20 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-slate-950/80 dark:to-slate-950 pointer-events-none"></div>
        
        {/* Hero Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-500/10 rounded-[100%] blur-[100px] pointer-events-none animate-pulse-slow"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
           <div className="flex justify-center mb-8">
              <Breadcrumbs />
           </div>
           
           <motion.div 
             variants={FADE_UP_VARIANTS}
             initial="hidden"
             animate="visible"
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 mx-auto"
           >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Accepting New Enterprise Partners</span>
           </motion.div>

           <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8">
             <span className="block text-slate-400 dark:text-slate-500 text-3xl md:text-4xl font-medium mb-2 tracking-normal">Engineering Business Success</span>
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary-800 to-slate-900 dark:from-white dark:via-primary-200 dark:to-white">
               <StaggeredText text="Beyond Software." />
             </span>
           </h1>
           
           <motion.p 
             variants={FADE_UP_VARIANTS}
             initial="hidden"
             animate="visible"
             transition={{ delay: 0.2 }}
             className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
           >
              Kami bukan sekadar implementator. Kami adalah arsitek proses bisnis yang memastikan teknologi bekerja untuk profitabilitas Anda.
           </motion.p>

           {/* Stats Bar */}
           <motion.div 
             variants={FADE_UP_VARIANTS}
             initial="hidden"
             animate="visible"
             transition={{ delay: 0.4 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-8"
           >
              {[
                { label: 'Success Rate', val: '99%', icon: Trophy },
                { label: 'Enterprises', val: '50+', icon: Layers },
                { label: 'User Adoption', val: '4.8/5', icon: Users },
                { label: 'Uptime SLA', val: '99.9%', icon: Clock },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                   <div className="flex items-center justify-center gap-2 mb-1 text-slate-900 dark:text-white font-bold text-2xl md:text-3xl">
                      <stat.icon className="w-5 h-5 text-primary-500" />
                      {stat.val}
                   </div>
                   <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
           </motion.div>
        </div>
      </Section>

      {/* --- ENGAGEMENT MODEL (JOURNEY) --- */}
      <Section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-2">How We Work</h2>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">The Transformation Arc</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-md text-right md:text-left text-sm leading-relaxed">
                 Metodologi standar global yang menjamin transparansi dan hasil terukur di setiap fase proyek.
              </p>
           </div>

           <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-slate-200 dark:bg-slate-800 z-0"></div>
              
              <motion.div 
                variants={STAGGER_CONTAINER}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                 {[
                    { step: '01', title: 'Consult', desc: 'Audit & Roadmap', icon: Compass, color: 'text-blue-500' },
                    { step: '02', title: 'Build', desc: 'Deploy & Config', icon: Layers, color: 'text-indigo-500' },
                    { step: '03', title: 'Enable', desc: 'Train & Adopt', icon: Users, color: 'text-purple-500' },
                    { step: '04', title: 'Sustain', desc: 'Support & Scale', icon: Activity, color: 'text-emerald-500' },
                 ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      variants={FADE_UP_VARIANTS}
                      className="relative z-10"
                    >
                       <SpotlightCard className="rounded-2xl p-6 text-center md:text-left h-full hover:-translate-y-1 transition-transform duration-300">
                           <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-4 shadow-sm mx-auto md:mx-0 ${item.color}`}>
                              <item.icon className="w-6 h-6" />
                           </div>
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex flex-col md:flex-row items-center md:items-start gap-2">
                              {item.title}
                              <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">{item.step}</span>
                           </h4>
                           <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                       </SpotlightCard>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </div>
      </Section>

      {/* --- SERVICES BENTO GRID --- */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Capability Matrix</h2>
             <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
          </div>

          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(380px,auto)]"
          >
             {services.map((service, index) => {
                const isFeatured = index === 0;
                
                // Render Featured Card (Different Style)
                if (isFeatured) {
                   return (
                      <motion.div 
                        key={service.id}
                        variants={FADE_UP_VARIANTS}
                        className="md:col-span-2 lg:col-span-2 relative group flex flex-col p-10 rounded-[2.5rem] overflow-hidden bg-[#0F172A] text-white shadow-2xl shadow-slate-900/20 ring-1 ring-white/10 hover:shadow-primary-900/20 transition-all duration-500"
                      >
                         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary-500/30 transition-colors duration-700"></div>
                         
                         <div className="relative z-10 flex flex-col md:flex-row gap-8 h-full">
                            <div className="flex-1">
                               <div className="flex items-center gap-3 mb-6">
                                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                                     <service.icon className="w-6 h-6 text-white" />
                                  </div>
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/20 text-primary-200 text-xs font-bold uppercase tracking-wider border border-primary-500/30">
                                     <Sparkles className="w-3 h-3" /> Recommended Start
                                  </span>
                               </div>
                               
                               <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                               <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                                  {service.description}
                               </p>

                               <div className="mt-auto">
                                  <Link to={`/services/${service.id}`}>
                                    <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none font-bold px-8">
                                       Explore Strategy
                                    </Button>
                                  </Link>
                               </div>
                            </div>
                            
                            {/* Decorative List for Featured */}
                            <div className="flex-1 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">What we analyze</h4>
                               <ul className="space-y-4">
                                  {service.methodology.map((item, i) => (
                                     <li key={i} className="flex items-start gap-3 text-slate-200">
                                        <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                           <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                                        </div>
                                        <div>
                                           <span className="font-bold block text-sm">{item.title}</span>
                                           <span className="text-xs text-slate-400">{item.desc}</span>
                                        </div>
                                     </li>
                                  ))}
                               </ul>
                            </div>
                         </div>
                      </motion.div>
                   );
                }

                // Render Standard Card (Spotlight)
                return (
                  <motion.div key={service.id} variants={FADE_UP_VARIANTS} className="h-full">
                     <SpotlightCard className="rounded-[2rem] p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 mb-8 border border-slate-100 dark:border-slate-700">
                           <service.icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                           {service.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                           {service.description}
                        </p>

                        <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto">
                           <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              View Service <MoveRight className="w-4 h-4" />
                           </Link>
                        </div>
                     </SpotlightCard>
                  </motion.div>
                );
             })}
          </motion.div>
        </div>
      </Section>

      {/* --- CTA SECTION --- */}
      <Section className="py-24 bg-white dark:bg-slate-950">
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={SPRING_TRANSITION}
           className="relative rounded-[2.5rem] bg-slate-900 dark:bg-black overflow-hidden px-6 py-24 text-center shadow-2xl shadow-slate-900/10 border border-slate-800"
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none"></div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
               Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Scale Up?</span>
             </h2>
             <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed max-w-xl mx-auto">
                Tanpa komitmen jangka panjang. Mulai dengan Discovery Call gratis untuk memvalidasi kebutuhan Anda.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link to="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 h-14 rounded-full border-none shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                     Start Transformation
                  </Button>
               </Link>
             </div>
           </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default ServicesPage;