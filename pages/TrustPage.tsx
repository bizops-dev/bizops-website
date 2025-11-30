import React from 'react';
import Button from '../components/Button';
import { Shield, Lock, Eye, Server, FileCheck, Database, Layers, Globe, CheckCircle, Clock, RefreshCw, AlertTriangle, Download, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import CardSlider from '../components/CardSlider';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const TrustPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors font-sans selection:bg-emerald-500/30">
      <SEO title="Trust Center | Security, Compliance & Privacy" description="Pusat transparansi keamanan BizOps. ISO 27001, Enkripsi AES-256, dan Kepatuhan GDPR/UU PDP." />
      
      {/* --- HERO SECTION (Trust Center Style) --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0B1120] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        {/* Animated Green Glow for Security Vibes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <Container size="5xl" className="relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8"
          >
             <Shield className="w-3 h-3" /> BizOps Trust Center
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Keamanan Data Anda Adalah <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Prioritas Absolut Kami.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
          >
            Kami membangun BizOps dengan filosofi "Security by Design". Transparansi penuh mengenai infrastruktur, enkripsi, dan kepatuhan regulasi kami ada di sini.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
             <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white border-none font-bold shadow-lg shadow-emerald-900/20 w-full sm:w-auto">
               Download Security Whitepaper <Download className="w-4 h-4 ml-2" />
             </Button>
             <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-white/10 w-full sm:w-auto">
               Laporkan Celah Keamanan <AlertTriangle className="w-4 h-4 ml-2" />
             </Button>
          </motion.div>
        </Container>
      </section>

      {/* --- LIVE SYSTEM STATUS BAR --- */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
         <Container size="7xl" className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Stack direction="row" gap={3} align="center">
               <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </div>
               <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">All Systems Operational</span>
            </Stack>
            <Stack direction="row" gap={6} align="center" className="text-xs text-slate-500 dark:text-slate-400">
               <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Uptime (30 Days): 99.99%</span>
               <span className="hidden sm:flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Last Updated: Just now</span>
               <Link to="/status" className="text-emerald-600 hover:underline">View History &rarr;</Link>
            </Stack>
         </Container>
      </div>

      <Container size="7xl" className="py-24 space-y-32">
        
        {/* --- COMPLIANCE BADGES --- */}
        <section>
           <div className="text-center mb-16">
              <Typography variant="h2" as="h2">Standar Kepatuhan Global</Typography>
              <Typography variant="body" className="text-slate-600 dark:text-slate-400">Kami diaudit secara berkala oleh pihak ketiga independen untuk memastikan standar keamanan tertinggi.</Typography>
           </div>
           
           <div className="md:hidden">
              <CardSlider mobileItemWidth="w-[60vw] sm:w-[250px]">
                 {/* ISO 27001 */}
                 <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Shield className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <Typography variant="h3" as="h3">ISO 27001</Typography>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400">Information Security Management</Typography>
                    <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wide">
                       Certified
                    </span>
                 </div>

                 {/* GDPR / UU PDP */}
                 <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Globe className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <Typography variant="h3" as="h3">GDPR & UU PDP</Typography>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400">Data Privacy Compliance</Typography>
                    <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wide">
                       Compliant
                    </span>
                 </div>

                 {/* PSE Kominfo */}
                 <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-red-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <FileCheck className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-red-500 transition-colors" />
                    </div>
                    <Typography variant="h3" as="h3">PSE Kominfo</Typography>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400">Terdaftar Resmi</Typography>
                    <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-[10px] font-bold uppercase tracking-wide">
                       Registered
                    </span>
                 </div>

                 {/* SOC 2 Type II */}
                 <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center opacity-75">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                       <Lock className="w-8 h-8 text-slate-400" />
                    </div>
                    <Typography variant="h3" as="h3">SOC 2 Type II</Typography>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400">Security Controls</Typography>
                    <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold uppercase tracking-wide">
                       In Progress
                    </span>
                 </div>
              </CardSlider>
           </div>

           <Grid cols={4} gap={8} className="hidden">
              {/* ISO 27001 */}
              <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors" />
                 </div>
                 <Typography variant="h3" as="h3">ISO 27001</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Information Security Management</Typography>
                 <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wide">
                    Certified
                 </span>
              </div>

              {/* GDPR / UU PDP */}
              <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors" />
                 </div>
                 <Typography variant="h3" as="h3">GDPR & UU PDP</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Data Privacy Compliance</Typography>
                 <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wide">
                    Compliant
                 </span>
              </div>

              {/* PSE Kominfo */}
              <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-red-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-red-500 transition-colors" />
                 </div>
                 <Typography variant="h3" as="h3">PSE Kominfo</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Terdaftar Resmi</Typography>
                 <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-[10px] font-bold uppercase tracking-wide">
                    Registered
                 </span>
              </div>

              {/* SOC 2 Type II */}
              <div className="h-full group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:shadow-xl transition-all flex flex-col items-center text-center opacity-75">
                 <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                    <Lock className="w-8 h-8 text-slate-400" />
                 </div>
                 <Typography variant="h3" as="h3">SOC 2 Type II</Typography>
                 <Typography variant="body" className="text-slate-500 dark:text-slate-400">Security Controls</Typography>
                 <span className="mt-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold uppercase tracking-wide">
                    In Progress
                 </span>
              </div>
           </Grid>
        </section>

        {/* --- SECURITY ARCHITECTURE --- */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                 <Layers className="w-3 h-3" /> Defense in Depth
              </div>
              <Typography variant="h2" as="h2">Arsitektur Keamanan Berlapis</Typography>
              <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed">Kami tidak hanya mengandalkan satu kunci pintu. Data Anda dilindungi oleh berbagai lapisan keamanan mulai dari fisik, jaringan, aplikasi, hingga level data itu sendiri.</Typography>
              
              <div className="lg:hidden">
                 <CardSlider mobileItemWidth="w-[85vw] sm:w-[400px]" breakpoint="lg">
                    <Stack direction="row" gap={4} className="p-4 border border-transparent hover:border-emerald-500/30 rounded-xl transition-colors">
                       <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 text-emerald-600">
                          <Database className="w-5 h-5" />
                       </div>
                       <div>
                          <Typography variant="h3" as="h3">Encryption at Rest & Transit</Typography>
                          <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Semua data database dienkripsi menggunakan AES-256. Komunikasi data menggunakan TLS 1.3 terbaru.</Typography>
                       </div>
                    </Stack>
                    <Stack direction="row" gap={4} className="p-4 border border-transparent hover:border-blue-500/30 rounded-xl transition-colors">
                       <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600">
                          <Server className="w-5 h-5" />
                       </div>
                       <div>
                          <Typography variant="h3" as="h3">Infrastructure Isolation</Typography>
                          <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Setiap tenant Enterprise berjalan di container terisolasi (Virtual Private Cloud). Data Anda tidak bercampur dengan klien lain.</Typography>
                       </div>
                    </Stack>
                    <Stack direction="row" gap={4} className="p-4 border border-transparent hover:border-amber-500/30 rounded-xl transition-colors">
                       <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-amber-600">
                          <Eye className="w-5 h-5" />
                       </div>
                       <div>
                          <Typography variant="h3" as="h3">24/7 Threat Monitoring</Typography>
                          <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Tim Security Operations Center (SOC) kami memantau anomali traffic dan upaya intrusi secara real-time.</Typography>
                       </div>
                    </Stack>
                 </CardSlider>
              </div>

              <Stack direction="col" gap={6} className="hidden lg:block">
                 <Stack direction="row" gap={4} className="p-4 border border-transparent hover:border-emerald-500/30 rounded-xl transition-colors">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 text-emerald-600">
                       <Database className="w-5 h-5" />
                    </div>
                    <div>
                       <Typography variant="h3" as="h3">Encryption at Rest & Transit</Typography>
                       <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Semua data database dienkripsi menggunakan AES-256. Komunikasi data menggunakan TLS 1.3 terbaru.</Typography>
                    </div>
                 </Stack>
                 <Stack direction="row" gap={4} className="p-4 border border-transparent hover:border-blue-500/30 rounded-xl transition-colors">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600">
                       <Server className="w-5 h-5" />
                    </div>
                    <div>
                       <Typography variant="h3" as="h3">Infrastructure Isolation</Typography>
                       <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Setiap tenant Enterprise berjalan di container terisolasi (Virtual Private Cloud). Data Anda tidak bercampur dengan klien lain.</Typography>
                    </div>
                 </Stack>
                 <Stack direction="row" gap={4} className="p-4 border border-transparent hover:border-amber-500/30 rounded-xl transition-colors">
                    <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-amber-600">
                       <Eye className="w-5 h-5" />
                    </div>
                    <div>
                       <Typography variant="h3" as="h3">24/7 Threat Monitoring</Typography>
                       <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Tim Security Operations Center (SOC) kami memantau anomali traffic dan upaya intrusi secara real-time.</Typography>
                    </div>
                 </Stack>
              </Stack>
           </div>

           <Container className="relative w-full">
               {/* Illustration Placeholder - Abstract Layered Shield */}
               <div className="aspect-square bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 relative overflow-hidden shadow-2xl border border-slate-800">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[80px] animate-pulse"></div>
                  
                  <Stack direction="col" gap={4} className="relative z-10 h-full justify-center">
                      <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center justify-between">
                         <Stack direction="row" gap={3} align="center" className="text-emerald-400 text-xs">
                            <Globe className="w-4 h-4" /> Cloudflare WAF
                         </Stack>
                         <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      </div>
                      <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center justify-between ml-4 sm:ml-8">
                         <Stack direction="row" gap={3} align="center" className="text-blue-400 text-xs">
                            <Server className="w-4 h-4" /> Load Balancer
                         </Stack>
                         <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                      </div>
                      <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center justify-between ml-8 sm:ml-16">
                         <Stack direction="row" gap={3} align="center" className="text-purple-400 text-xs">
                            <Lock className="w-4 h-4" /> App Server (Pod)
                         </Stack>
                         <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
                      </div>
                      <div className="bg-emerald-900/50 backdrop-blur border border-emerald-500/30 p-4 rounded-xl flex items-center justify-between ml-12 sm:ml-24 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                         <Stack direction="row" gap={3} align="center" className="text-white text-xs font-bold">
                            <Database className="w-4 h-4" /> Encrypted DB
                         </Stack>
                         <Stack direction="row" gap={1}>
                            <Lock className="w-3 h-3 text-emerald-400" />
                         </Stack>
                      </div>
                  </Stack>
               </div>
           </Container>
        </section>

        {/* --- TRANSPARENCY & DATA --- */}
        <section className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-200 dark:border-slate-800">
           <Container size="4xl">
               <Typography variant="h2" as="h2">Data Sub-processors</Typography>
               <Typography variant="body" className="text-slate-600 dark:text-slate-400">Daftar penyedia layanan pihak ketiga yang kami gunakan untuk memproses data. Kami meminimalkan jumlah pihak ketiga untuk mengurangi risiko.</Typography>

               <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                  <div className="overflow-x-auto">
                     <table className="w-full text-left text-sm min-w-[600px]">
                        <thead className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                           <tr>
                              <th className="p-4 font-bold text-slate-700 dark:text-slate-300">Provider</th>
                              <th className="p-4 font-bold text-slate-700 dark:text-slate-300">Purpose</th>
                              <th className="p-4 font-bold text-slate-700 dark:text-slate-300">Location</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                           <tr>
                              <td className="p-4 font-medium text-slate-900 dark:text-white">Google Cloud Platform</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">Cloud Infrastructure (Compute & Storage)</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">Jakarta (asia-southeast2)</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-medium text-slate-900 dark:text-white">Amazon Web Services (S3)</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">Encrypted Backup Storage</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">Singapore (ap-southeast-1)</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-medium text-slate-900 dark:text-white">Cloudflare</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">WAF, DDoS Protection, CDN</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">Global (Anycast)</td>
                           </tr>
                           <tr>
                              <td className="p-4 font-medium text-slate-900 dark:text-white">Sentry</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">Error Tracking (No PII Data)</td>
                              <td className="p-4 text-slate-600 dark:text-slate-400">USA</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
           </Container>
        </section>

        {/* --- CTA: ACCESS REPORTS --- */}
        <section className="text-center">
           <Typography variant="h2" as="h2">Butuh Dokumen Audit?</Typography>
           <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Akses laporan audit keamanan lengkap kami (Penetration Test Result & Compliance Certifications) melalui portal khusus klien Enterprise.</Typography>
           <Button size="lg" className="h-14 px-8 font-bold">
              Request Access to Trust Portal <ChevronRight className="w-4 h-4 ml-2" />
           </Button>
        </section>

      </Container>
    </div>
  );
};

export default TrustPage;
