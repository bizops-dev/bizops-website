import React from 'react';
import { 
  Check, ArrowRight, Layers, Smartphone, 
  Server, Share2, MessageSquare, ShieldCheck, Zap, Database, Globe,
  Users, DollarSign, Briefcase, TrendingUp, Layout, GitBranch
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Badge from '../components/Badge';
import Card from '../components/Card';
import CardSlider from '../components/CardSlider';
import { modulesData, capabilitiesData, integrationsData } from '../data/content';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Stack from '../components/Stack';
import Container from '../components/Container';

const PlatformPage: React.FC = () => {
  
  // Helper to convert objects to arrays
  const modules = Object.entries(modulesData).map(([key, val]) => ({ id: key, ...val }));
  const capabilities = Object.entries(capabilitiesData).map(([key, val]) => ({ id: key, ...val }));

  // Default color fallback
  const getColor = (id: string) => {
    const map: Record<string, string> = {
      'hr': 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
      'finance': 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      'operations': 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      'sales': 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      'supply-chain': 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      'governance': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    };
    return map[id] || 'bg-slate-50 text-slate-600';
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
      <SEO 
        title="BizOps Platform | Modul Lengkap ERP Terintegrasi" 
        description="Eksplorasi modul lengkap BizOps: HRIS, Akuntansi, CRM, Inventory, dan Project Management dalam satu platform terintegrasi." 
      />

      {/* 1. HERO SECTION */}
      <div className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent dark:from-primary-900/20 pointer-events-none"></div>

        <Container size="7xl" className="relative z-10 text-center">
          <Badge variant="outline" className="mb-8">The Operating System for Business</Badge>
          <Typography variant="h1" as="h1" className="font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">Satu Platform, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Kendali Tanpa Batas.</span></Typography>
          <Typography variant="body-xl" className="text-slate-600 dark:text-slate-400">BizOps bukan sekadar kumpulan aplikasi. Ini adalah infrastruktur digital yang menyatukan setiap aspek operasional—dari absensi staf lapangan hingga laporan keuangan di meja direksi.</Typography>
          <Stack direction="vertical" gap={4} className="justify-center">
             <Link to="/demo" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 w-full">Lihat Demo Platform</Button>
             </Link>
             <Link to="/docs" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg bg-white/50 backdrop-blur-sm w-full">Baca Dokumentasi Teknis</Button>
             </Link>
          </Stack>

          {/* Abstract Connection Visual */}
          <Container size="4xl" className="mt-20 relative h-24 hidden md:flex justify-center items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent absolute top-1/2 left-0"></div>
             <div className="z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-sm"><Users className="w-6 h-6 text-pink-500"/></div>
             <div className="z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-sm"><DollarSign className="w-6 h-6 text-emerald-500"/></div>
             <div className="z-10 bg-white dark:bg-slate-900 border-4 border-primary-100 dark:border-primary-900/50 p-4 rounded-2xl shadow-lg transform scale-125"><Layers className="w-8 h-8 text-primary-600"/></div>
             <div className="z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-sm"><Briefcase className="w-6 h-6 text-blue-500"/></div>
             <div className="z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-sm"><TrendingUp className="w-6 h-6 text-amber-500"/></div>
          </Container>
        </Container>
      </div>

      {/* 2. CORE CAPABILITIES (Why Platform?) */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
         <Container size="3xl" className="text-center mb-12">
            <Typography variant="h2" as="h2">Fondasi Teknologi Modern</Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Kami membangun BizOps di atas pilar teknologi yang fleksibel, aman, dan siap untuk skala enterprise.</Typography>
         </Container>

         <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6" mobileItemWidth="w-[85vw] sm:w-[350px]">
            {capabilities.map((cap) => {
               // Updated Link to New Path Structure
               const linkUrl = `/platform/capabilities/${cap.id}`;
               
               return (
                  <Link key={cap.id} to={linkUrl} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 block h-full">
                     <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-6">
                        <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 transition-colors">
                           <cap.icon className="w-8 h-8" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">
                           <ArrowRight className="w-5 h-5" />
                        </div>
                     </Stack>
                     <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{cap.title}</Typography>
                     <Typography variant="caption" className="text-slate-600 dark:text-slate-400 leading-relaxed">{cap.description}</Typography>
                     <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                        <ul className="space-y-3">
                           {cap.features.slice(0, 3).map((feat: any, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                 <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                                 <span>{feat.title}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </Link>
               );
            })}
         </CardSlider>
      </Section>

      {/* 2.5. LOW CODE REVOLUTION (NEW) */}
      <Section>
         <Grid cols={2} gap={16} className="items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[3rem] transform -rotate-3"></div>
               <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-slate-800 shadow-2xl">
                  {/* Visual Representation of Low Code Builder */}
                  <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-6 border-b border-slate-700 pb-4">
                     <Stack direction="horizontal" gap={3} align="center">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <Typography variant="caption" className="text-slate-400">App Builder Studio</Typography>
                     </Stack>
                     <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase">Drag & Drop Mode</div>
                  </Stack>
                  
                  <Stack direction="vertical" gap={4}>
                     {/* Form Builder Simulation */}
                     <Stack direction="horizontal" gap={4}>
                        <Stack direction="vertical" gap={3} className="w-1/3">
                           <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 text-xs text-slate-400 cursor-grab active:cursor-grabbing hover:border-blue-500 transition-colors flex items-center">📝 Text Field</div>
                           <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 text-xs text-slate-400 cursor-grab active:cursor-grabbing hover:border-blue-500 transition-colors flex items-center">📅 Date Picker</div>
                           <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 text-xs text-slate-400 cursor-grab active:cursor-grabbing hover:border-blue-500 transition-colors flex items-center">✅ Checkbox</div>
                           <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 text-xs text-slate-400 cursor-grab active:cursor-grabbing hover:border-blue-500 transition-colors flex items-center">📊 Dropdown</div>
                        </Stack>
                        <Stack direction="vertical" gap={4} align="center" justify="center" className="w-2/3 bg-slate-950 rounded-xl border border-slate-800 border-dashed p-4 text-center">
                           <div className="w-full bg-slate-900 rounded-lg p-3 mb-3 text-left">
                              <div className="text-[10px] text-blue-400 mb-1">Field Label</div>
                              <div className="h-6 bg-slate-800 rounded w-full"></div>
                           </div>
                           <div className="w-full bg-slate-900 rounded-lg p-3 text-left">
                              <div className="text-[10px] text-blue-400 mb-1">Options</div>
                              <div className="h-6 bg-slate-800 rounded w-full"></div>
                           </div>
                           <div className="mt-4 text-xs text-slate-500">Preview Form Layout</div>
                        </Stack>
                     </Stack>
                  </Stack>
                  
                  {/* Floating Badge */}
                  <Stack direction="horizontal" gap={3} align="center" className="absolute -bottom-6 -right-6 bg-white dark:bg-blue-600 text-slate-900 dark: dark:text-white p-4 rounded-2xl shadow-xl">
                     <div className="bg-blue-100 dark:bg-white/20 p-2 rounded-lg"><Zap className="w-5 h-5 text-blue-600 dark:text-white" /></div>
                     <div>
                        <div className="text-xs opacity-80">Development Time</div>
                        <div className="text-sm font-bold">10x Faster</div>
                     </div>
                  </Stack>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <Badge className="mb-6 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">The Citizen Developer Era</Badge>
               <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Buat Aplikasi Enterprise <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Tanpa Koding.</span></Typography>
               <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed">Berdayakan tim operasional Anda untuk menjadi <b>Citizen Developer</b>. Dengan BizOps Studio, siapa pun bisa membuat form digital, workflow approval, dan laporan kustom hanya dengan drag-and-drop.</Typography>
               
               <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                     <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 mt-1">
                        <Layout className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                     </Stack>
                     <div>
                        <Typography variant="h4" as="h4">Visual Form Builder</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Desain form input data kompleks dengan validasi logic, perhitungan otomatis, dan relasi antar data tanpa menulis satu baris kode pun.</Typography>
                     </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 mt-1">
                        <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                     </Stack>
                     <div>
                        <Typography variant="h4" as="h4">Workflow Automation</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Atur alur persetujuan (approval) bertingkat, notifikasi email/WA otomatis, dan trigger aksi berdasarkan perubahan status dokumen.</Typography>
                     </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/20 mt-1">
                        <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                     </Stack>
                     <div>
                        <Typography variant="h4" as="h4">Instant Mobile App</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Setiap aplikasi yang Anda buat otomatis tersedia di mobile app (iOS/Android) dengan dukungan offline mode untuk pekerja lapangan.</Typography>
                     </div>
                  </li>
               </ul>
            </div>
         </Grid>
      </Section>

      {/* 3. MODULES GRID */}
      <Section>
        <Container size="3xl" className="text-center mb-12">
           <Badge variant="outline" className="mb-4">Comprehensive Suite</Badge>
           <Typography variant="h2" as="h2">Modul yang Saling Terhubung</Typography>
           <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Input data di satu modul, update otomatis di modul lainnya. Hilangkan duplikasi dan rekonsiliasi manual.</Typography>
        </Container>

        <CardSlider desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6" mobileItemWidth="w-[85vw] sm:w-[350px]">
          {modules.map((mod) => (
            <Link 
              key={mod.id} 
              // Updated Link to New Path Structure
              to={`/platform/modules/${mod.id}`}
              className="group h-full block"
            >
              <Card className="h-full hover:border-primary-500 transition-all flex flex-col p-8 bg-white dark:bg-slate-900/50 shadow-lg hover:shadow-xl transition-shadow" hoverEffect>
                <Stack direction="horizontal" gap={4} align="start" justify="between" className="mb-8">
                   <div className={`w-16 h-16 ${getColor(mod.id)} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                     <mod.icon className="w-8 h-8" />
                   </div>
                   <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-primary-500 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                </Stack>
                
                <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600">{mod.title}</Typography>
                <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{mod.subtitle}</Typography>
                
                <Stack direction="horizontal" gap={2} className="mt-auto">
                   {mod.features.slice(0, 3).map((f: any, idx: number) => (
                      <span key={idx} className="text-xs font-bold px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-sm transition-all border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600">
                         {f.title}
                      </span>
                   ))}
                </Stack>
              </Card>
            </Link>
          ))}
        </CardSlider>
      </Section>

      {/* 4. INTEGRATION ECOSYSTEM */}
      <Section dark className="relative overflow-hidden">
         {/* Abstract Lines */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
         
         <div className="relative z-10">
            <Grid cols={2} gap={16} className="items-center mb-12">
               <div>
                  <Typography variant="h2" as="h2" className="font-bold text-white leading-tight">API-First Ecosystem. <br />
                     <span className="text-primary-400">Bukan Pulau Terisolasi.</span></Typography>
                  <Typography variant="body-lg" className="text-slate-400 leading-relaxed">BizOps dirancang untuk hidup berdampingan dengan tools favorit Anda. Hubungkan dengan Bank, Marketplace, IoT, dan software legacy Anda melalui REST API standar kami.</Typography>
                  <Link to="/platform/technologies/integration">
                     <Button variant="white" size="lg">Jelajahi Library Integrasi</Button>
                  </Link>
               </div>
               
               {/* Integration Grid Visualization */}
               <Grid cols={1} gap={4}>
                  {integrationsData.map((cat, idx) => (
                     <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-slate-600 transition-colors group">
                        <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-4">
                           <div className="text-sm font-bold text-primary-400 uppercase tracking-wider">{cat.category}</div>
                           <Share2 className="w-4 h-4 text-slate-600 group-hover:text-primary-400 transition-colors"/>
                        </Stack>
                        <ul className="space-y-3">
                           {cat.apps.slice(0, 2).map((app, i) => (
                              <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                                 <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                                 <span className="group-hover:translate-x-1 transition-transform">{app.name}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </Grid>
            </Grid>
         </div>
      </Section>

      {/* 5. TECH STACK */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

         <Container size="5xl" className="text-center relative z-10">
            <Badge variant="outline" className="mb-6 bg-white dark:bg-slate-900">Engineering Excellence</Badge>
            <Typography variant="h2" as="h2">Dibangun dengan Teknologi Enterprise-Grade</Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Stack teknologi modern yang menjamin performa tinggi, keamanan standar perbankan, dan skalabilitas tanpa batas.</Typography>
            
            <Stack direction="horizontal" gap={6} justify="center" className="mb-12">
               {[
                  { name: 'Python', icon: 'PY', desc: 'Backend Logic' },
                  { name: 'React', icon: 'RC', desc: 'Frontend UI' },
                  { name: 'PostgreSQL', icon: 'PG', desc: 'Database' },
                  { name: 'Redis', icon: 'RD', desc: 'High-Speed Cache' },
                  { name: 'Docker', icon: 'DK', desc: 'Containerization' },
                  { name: 'Flutter', icon: 'FL', desc: 'Native Mobile' }
               ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-3 group cursor-default p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 w-28 md:w-32">
                     <Stack direction="horizontal" gap={4} align="center" justify="center" className="h-14 w-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm font-black text-sm text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-primary-500 group-hover:text-primary-600 transition-colors">
                        {tech.icon}
                     </Stack>
                     <div>
                        <div className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary-600 transition-colors">{tech.name}</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5">{tech.desc}</div>
                     </div>
                  </div>
               ))}
            </Stack>

            {/* Frappe Partner Badge */}
            <Stack direction="horizontal" gap={4} align="center" className="p-4 pr-6 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm mb-12 hover:border-primary-500 transition-colors cursor-default">
               <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                  <Check className="w-5 h-5 text-primary-600" />
               </Stack>
               <div className="text-left">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Official Partner</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Frappe Technologies</div>
               </div>
            </Stack>

            <Stack direction="horizontal" gap={4} justify="center">
               <Link to="/platform/technologies/architecture">
                  <Button variant="outline" className="border-slate-300 text-slate-600 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-white">
                     Pelajari Tech Stack Lengkap
                  </Button>
               </Link>
            </Stack>
         </Container>
      </Section>

      {/* 6. CTA */}
      <Section className="py-24 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 -z-10"></div>
         <Container size="4xl" className="text-center">
            <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white leading-tight">Siap untuk Upgrade <br/> <span className="text-primary-600">Sistem Operasi Bisnis</span> Anda?</Typography>
            <Typography variant="body-xl" className="text-slate-600 dark:text-slate-400">Jadwalkan demo 30 menit untuk melihat bagaimana platform ini bekerja secara real-time. Tanpa komitmen.</Typography>
            <Stack direction="vertical" gap={4} className="justify-center">
               <Link to="/demo">
                  <Button size="lg" className="h-16 px-10 text-xl shadow-xl shadow-primary-500/20 hover:scale-105 transition-transform">Jadwalkan Demo Sekarang</Button>
               </Link>
               <Link to="/contact">
                  <Button variant="outline" size="lg" className="h-16 px-10 text-xl bg-white dark:bg-transparent">Hubungi Sales</Button>
               </Link>
            </Stack>
         </Container>
      </Section>
    </div>
  );
};

export default PlatformPage;