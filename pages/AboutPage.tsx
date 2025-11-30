import React from 'react';
import { Building, Users, Heart, Search, Code, ShieldCheck, MapPin, FileCheck, User, Download, Sparkles, Target, Zap, Rocket, Wrench, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { aboutContent } from '../data/content';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import CardSlider from '../components/CardSlider';
import OptimizedImage from '../components/OptimizedImage';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';

const teamMembers = [
  {
    name: "Ilham Pambudi",
    role: "Product Owner",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    quote: "Building products that solve real problems, not just cool tech.",
    linkedin: "#"
  },
  {
    name: "Febby Kurniawan",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: "Clean code is the best documentation.",
    linkedin: "#"
  },
  {
    name: "Alief Ahmad Azies",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    quote: "Mobile-first experience is non-negotiable.",
    linkedin: "#"
  },
  {
    name: "M. Fadhlan Syafii",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400",
    quote: "Optimizing performance, one pixel at a time.",
    linkedin: "#"
  },
  {
    name: "Anita Nur Sari",
    role: "Quality Assurance",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    quote: "Quality is not an act, it is a habit.",
    linkedin: "#"
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors font-sans selection:bg-indigo-500/30">
      <SEO title="Tentang Kami - PT Divistant Teknologi Indonesia" description="Profil perusahaan, visi kedaulatan digital, dan tim praktisi di balik BizOps." />

      {/* --- HERO SECTION (Cinematic) --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-[#0B1120] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        {/* Animated Glow Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-xl"
          >
             <Rocket className="w-3 h-3" /> Engineering Sovereignty
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Bermitra dengan Praktisi yang <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300">Mengerti Masalah Lapangan.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
          >
            {aboutContent.hero.subheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a href="https://divistant.com/our-profile" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-slate-900 hover:bg-slate-100 border-none font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                Lihat Profil Lengkap Divistant <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- ORIGIN STORY TIMELINE (Refined) --- */}
      <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
         <Container size="7xl">
            <div className="text-center mb-16 md:mb-24">
               <Typography variant="h2" as="h2">Our Origin Story</Typography>
               <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Perjalanan kami bukan tentang membuat software, tapi tentang memecahkan kebuntuan operasional.</Typography>
            </div>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 md:pl-8 space-y-16 md:space-y-20">
               {aboutContent.timeline.map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ delay: idx * 0.2, duration: 0.6 }}
                   className="relative pl-8 md:pl-0 group"
                 >
                    {/* Marker */}
                    <div className={`absolute -left-[25px] md:-left-[41px] top-0 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 z-10 transition-colors duration-500 ${idx === 1 ? 'bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]' : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-400'}`}></div>
                    
                    <div className="md:grid md:grid-cols-5 md:gap-16">
                       <div className="md:col-span-1 mb-4 md:mb-0 pt-1">
                          <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${idx === 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>{item.year}</span>
                       </div>
                       <div className={`md:col-span-4 p-8 md:p-10 rounded-3xl border transition-all duration-500 hover:shadow-2xl ${idx === 1 ? 'bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/10 dark:to-slate-900 border-indigo-100 dark:border-indigo-900 shadow-lg' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}>
                          <Typography variant="h3" as="h3">{item.title}</Typography>
                          <Typography variant="body">{item.desc}</Typography>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </Container>
      </section>

      {/* --- CORE VALUES (Glassmorphism) --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
         {/* Background Shapes */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

         <Container size="7xl" className="relative z-10">
            <div className="text-center mb-16 md:mb-20">
               <Typography variant="h2" as="h2" className="font-extrabold leading-tight">Core Values: <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">The OS of Our Culture</span></Typography>
               <Typography variant="body-lg" className="text-slate-400">Prinsip-prinsip yang tertanam dalam setiap baris kode yang kami tulis.</Typography>
            </div>
            
            {/* Mobile View: Slider */}
            <div className="md:hidden">
               <CardSlider mobileItemWidth="w-[85vw] sm:w-[400px]">
                  {aboutContent.values.map((val, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="h-full group bg-slate-800/40 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-slate-700/50 hover:border-indigo-500/30 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:bg-slate-800/60 flex flex-col"
                    >
                       <div className="w-16 h-16 bg-slate-800/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-slate-700 group-hover:scale-110 transition-transform duration-300 group-hover:bg-slate-800">
                          {idx === 0 && <Wrench className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />}
                          {idx === 1 && <Search className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />}
                          {idx === 2 && <ShieldCheck className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />}
                       </div>
                       <Typography variant="h3" as="h3" className="font-bold text-white">{val.title}</Typography>
                       <Typography variant="body" className="text-slate-400 leading-relaxed">{val.manifesto}</Typography>
                       <div className={`mt-auto bg-slate-900/50 p-6 rounded-xl border-l-4 ${idx === 0 ? 'border-blue-500' : idx === 1 ? 'border-emerald-500' : 'border-amber-500'}`}>
                          <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-emerald-400' : 'text-amber-400'}`}>Bukti Nyata</span>
                          <Typography variant="caption" className="text-slate-300">{val.proof}</Typography>
                       </div>
                    </motion.div>
                  ))}
               </CardSlider>
            </div>

            {/* Desktop View: Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
               {aboutContent.values.map((val, idx) => (
                 <motion.div 
                   key={idx}
                   whileHover={{ y: -10 }}
                   className="h-full group bg-slate-800/40 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-slate-700/50 hover:border-indigo-500/30 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:bg-slate-800/60 flex flex-col"
                 >
                    <div className="w-16 h-16 bg-slate-800/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-slate-700 group-hover:scale-110 transition-transform duration-300 group-hover:bg-slate-800">
                       {idx === 0 && <Wrench className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />}
                       {idx === 1 && <Search className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />}
                       {idx === 2 && <ShieldCheck className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />}
                    </div>
                    <Typography variant="h3" as="h3" className="font-bold text-white">{val.title}</Typography>
                    <Typography variant="body" className="text-slate-400 leading-relaxed">{val.manifesto}</Typography>
                    <div className={`mt-auto bg-slate-900/50 p-6 rounded-xl border-l-4 ${idx === 0 ? 'border-blue-500' : idx === 1 ? 'border-emerald-500' : 'border-amber-500'}`}>
                       <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-emerald-400' : 'text-amber-400'}`}>Bukti Nyata</span>
                       <Typography variant="caption" className="text-slate-300">{val.proof}</Typography>
                    </div>
                 </motion.div>
               ))}
            </div>
         </Container>
      </section>

      {/* --- TASK FORCE TEAM (Modern Grid) --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
         <Container size="7xl">
            <div className="text-center mb-16 md:mb-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3" /> The Task Force
               </div>
               <Typography variant="h2" as="h2">Meet the Builders</Typography>
               <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Tim inti (Task Force) yang berdedikasi membangun fondasi teknologi BizOps. Kombinasi Product, Engineering, dan Quality Assurance.</Typography>
            </div>

            {/* Mobile View: Slider */}
            <div className="md:hidden">
               <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
                  {teamMembers.map((member, idx) => (
                     <motion.div 
                       key={idx} 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.1 }}
                       className="h-full group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800"
                     >
                        <div className="aspect-[3/4] overflow-hidden bg-slate-200 relative">
                           {/* Placeholder / Image */}
                           <OptimizedImage 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                           
                           {/* Overlay Content */}
                           <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                              <div className="text-white">
                                 <Typography variant="body" className="tracking-widest">{member.role}</Typography>
                                 <Typography variant="h3" as="h3" className="font-bold leading-tight">{member.name}</Typography>
                                 <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                    <Typography variant="body" className="text-slate-200 leading-relaxed">"{member.quote}"</Typography>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </CardSlider>
            </div>

            {/* Desktop View: Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
               {teamMembers.map((member, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="h-full group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800"
                  >
                     <div className="aspect-[3/4] overflow-hidden bg-slate-200 relative">
                        {/* Placeholder / Image */}
                        <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                        
                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                           <div className="text-white">
                              <Typography variant="body" className="tracking-widest">{member.role}</Typography>
                              <Typography variant="h3" as="h3" className="font-bold leading-tight">{member.name}</Typography>
                              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                 <Typography variant="body" className="text-slate-200 leading-relaxed">"{member.quote}"</Typography>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </Container>
      </section>

      {/* --- COMPANY INFO (Split Layout) --- */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
         <Container size="7xl">
            <Grid cols={2} gap={16} className="items-stretch">
               <div>
                  <Typography variant="h2" as="h2" className="font-extrabold text-slate-900 dark:text-white"><Building className="w-8 h-8 text-slate-400" /> Office & Legal Entity</Typography>
                  <div className="bg-slate-50 dark:bg-slate-800/30 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 space-y-10 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors duration-500 h-full">
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 dark:border-slate-700">
                           <FileCheck className="w-6 h-6 text-slate-500 dark:text-slate-300" />
                        </div>
                        <div>
                           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Legal Identity</div>
                           <div className="font-bold text-slate-900 dark:text-white text-xl mb-1">{aboutContent.entity.name}</div>
                           <div className="text-sm text-slate-600 dark:text-slate-400 flex flex-col gap-1">
                              <a href="https://divistant.com/media/legal" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 group">
                                 <CheckCircle2 className="w-3 h-3 text-green-500" /> NIB: [Tersedia] <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                              <a href="https://divistant.com/media/legal" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 group">
                                 <CheckCircle2 className="w-3 h-3 text-green-500" /> SK Kemenkumham: [Tersedia] <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 dark:border-slate-700">
                           <ShieldCheck className="w-6 h-6 text-slate-500 dark:text-slate-300" />
                        </div>
                        <div>
                           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Compliance</div>
                           <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{aboutContent.entity.compliance}</div>
                           <a href="https://divistant.com/media/legal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all group">
                              Lihat Dokumen Legal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                           </a>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700/50">
                        <div>
                           <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-bold">
                              <MapPin className="w-5 h-5 text-indigo-500" /> HQ (Jakarta)
                           </div>
                           <Typography variant="caption" className="text-slate-500 dark:text-slate-400 leading-relaxed">Eco-S Sahid Sudirman Residence<br/>
                              Jl. Jenderal Sudirman No.86,<br/>
                              Karet Tengsin, Tanah Abang,<br/>
                              Jakarta 10250.</Typography>
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-bold">
                              <Code className="w-5 h-5 text-purple-500" /> R&D (Yogyakarta)
                           </div>
                           <Typography variant="caption" className="text-slate-500 dark:text-slate-400 leading-relaxed">Jl. Ampel No.23, Demangan Baru,<br/>
                              Sleman, DIY 55281.</Typography>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col justify-center h-full">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl h-full flex flex-col justify-center">
                     <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
                     <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/20 rounded-full blur-[80px]"></div>
                     
                     <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                           <Target className="w-8 h-8 text-red-400" />
                        </div>
                        <Typography variant="h3" as="h3">Engineering First DNA</Typography>
                        <Typography variant="body-lg" className="text-slate-300 leading-relaxed">Kami bukan sekadar perusahaan penjualan. <strong className="text-white font-semibold">70% dari total tim kami</strong> adalah Product, Engineering, & QA. 
                           <br/><br/>
                           Ini memastikan fokus utama perusahaan adalah inovasi produk dan stabilitas sistem, bukan sekadar operasi marketing yang agresif. Kami berinvestasi pada kode, bukan hanya pada iklan.</Typography>
                        <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                           <div className="flex -space-x-4">
                              {[1,2,3,4].map(i => (
                                 <div key={i} className="w-12 h-12 rounded-full bg-slate-700 border-4 border-slate-800 flex items-center justify-center text-[10px] font-bold shadow-lg">
                                    <User className="w-5 h-5 text-slate-400" />
                                 </div>
                              ))}
                           </div>
                           <Link to="/careers" className="text-base font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group">
                              Join our growing team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </Grid>
         </Container>
      </section>

    </div>
  );
};

export default AboutPage;
