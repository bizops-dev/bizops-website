import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, Shield, ArrowRight, Clock, Globe, Send } from 'lucide-react';
import Section from '../components/Section';
import { Input, Select, TextArea, Checkbox } from '../components/Form';
import { traceAction } from '../utils/telemetry';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Container from '../components/Container';
import Stack from '../components/Stack';

const ContactPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const consent = formData.get('consent');

    const newErrors: Record<string, string> = {};
    
    // Enhanced validation with better error messages
    if (!name) {
      newErrors.name = "Nama wajib diisi.";
    } else if (name.length < 2) {
      newErrors.name = "Nama minimal 2 karakter.";
    } else if (name.length > 100) {
      newErrors.name = "Nama maksimal 100 karakter.";
    }
    
    if (!email) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Format email tidak valid (contoh: nama@perusahaan.com).";
    }
    
    if (!message) {
      newErrors.message = "Pesan wajib diisi.";
    } else if (message.length < 10) {
      newErrors.message = `Pesan minimal 10 karakter (saat ini: ${message.length} karakter).`;
    } else if (message.length > 1000) {
      newErrors.message = "Pesan maksimal 1000 karakter.";
    }
    
    if (!consent) {
      newErrors.consent = "Anda harus menyetujui kebijakan privasi untuk melanjutkan.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      await traceAction('contact.submit', async () => {
         await new Promise(resolve => setTimeout(resolve, 1500));
         setIsLoading(false);
         setIsSent(true);
      });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors font-sans selection:bg-indigo-500/30">
      <SEO 
        title="Contact BizOps | Enterprise Support & Sales" 
        description="Hubungi tim BizOps untuk konsultasi implementasi ERP, bantuan teknis, atau pertanyaan umum. Kantor di Jakarta & Yogyakarta." 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 pt-24 pb-32 lg:pt-48 lg:pb-64 text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
         
         {/* Abstract Glows */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

         <Container size="7xl" className="relative z-10 text-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md"
            >
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               We are Online
            </motion.div>
            
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1, duration: 0.8 }}
               className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight"
            >
               Let's Start a <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 animate-gradient-x">Conversation.</span>
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
               Apakah Anda startup yang sedang berkembang atau enterprise yang mapan, tim kami siap membantu merancang solusi operasional terbaik.
            </motion.p>
         </Container>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="relative z-20 -mt-20 md:-mt-32 pb-24 px-4 sm:px-6 lg:px-8">
         <Container size="7xl">
            <Grid cols={12} gap={8}>
               
               {/* LEFT: CONTACT INFO (Bento Grid Style) */}
               <Stack direction="vertical" gap={6} className="lg:col-span-5">
                  
                  {/* Primary Contact Card */}
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
                     
                     <div className="relative z-10">
                        <Typography variant="h2" as="h2">Direct Channels</Typography>
                        
                        <Stack direction="vertical" gap={8}>
                           <a href="mailto:hello@bizops.id" className="flex items-start gap-5 group/item">
                              <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400 transition-colors group-hover/item:bg-indigo-600 group-hover/item:text-white">
                                 <Mail className="w-6 h-6" />
                              </Stack>
                              <div>
                                 <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email Sales & Support</div>
                                 <div className="text-lg font-bold text-slate-900 dark:text-white group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">hello@bizops.id</div>
                                 <div className="text-xs text-slate-400 mt-1">Avg. response time: 2 hours</div>
                              </div>
                           </a>

                           <a href="tel:+622139702834" className="flex items-start gap-5 group/item">
                              <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 transition-colors group-hover/item:bg-emerald-600 group-hover/item:text-white">
                                 <Phone className="w-6 h-6" />
                              </Stack>
                              <div>
                                 <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Call Center</div>
                                 <div className="text-lg font-bold text-slate-900 dark:text-white group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors">+62 21 3970 2834</div>
                                 <Stack direction="horizontal" gap={1} align="center" className="text-xs text-slate-400 mt-1">
                                    <Clock className="w-3 h-3" /> Mon-Fri, 09:00 - 17:00 WIB
                                 </Stack>
                              </div>
                           </a>
                        </Stack>
                     </div>
                  </motion.div>

                  {/* Office Locations */}
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden"
                  >
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                     <div className="relative z-10">
                        <Typography variant="h2" as="h2" className="font-bold"><Globe className="w-5 h-5 text-blue-400" /> Our Offices</Typography>
                        
                        <Stack direction="vertical" gap={6}>
                           <div className="pl-4 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                              <Typography variant="h3" as="h3">Jakarta HQ</Typography>
                              <Typography variant="caption" className="text-slate-400 leading-relaxed">Eco-S Sahid Sudirman Residence<br />
                                 Jl. Jenderal Sudirman No.86, Karet Tengsin<br />
                                 Tanah Abang, Jakarta 10250</Typography>
                           </div>
                           <div className="pl-4 border-l-2 border-slate-700 hover:border-purple-500 transition-colors">
                              <Typography variant="h3" as="h3">Yogyakarta R&D</Typography>
                              <Typography variant="caption" className="text-slate-400 leading-relaxed">Jl. Ampel No.23, Demangan Baru<br />
                                 Caturtunggal, Kec. Depok, Sleman<br />
                                 DI Yogyakarta 55281</Typography>
                           </div>
                        </Stack>
                        
                        <div className="mt-8 pt-6 border-t border-slate-800">
                           <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm font-medium text-slate-300 hover:text-white group">
                              <span>View on Google Maps</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                           </a>
                        </div>
                     </div>
                  </motion.div>

                  {/* Community Card */}
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-gradient-to-r from-indigo-600 to-violet-600 p-1 rounded-3xl shadow-xl"
                  >
                     <Stack direction="horizontal" gap={4} align="center" justify="between" className="bg-white dark:bg-slate-900 rounded-[1.3rem] p-6 h-full">
                        <div>
                           <Typography variant="h3" as="h3">Join Developer Community</Typography>
                           <Typography variant="body" className="text-slate-500 dark:text-slate-400">Chat with 500+ peers on Discord.</Typography>
                        </div>
                        <a href="https://discord.gg/bizops" target="_blank" rel="noopener noreferrer">
                           <Button size="sm" variant="secondary" className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-xl">
                              Join Now <MessageSquare className="w-3 h-3 ml-2" />
                           </Button>
                        </a>
                     </Stack>
                  </motion.div>

               </Stack>

               {/* RIGHT: FORM CARD */}
               <div className="lg:col-span-7">
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl h-full flex flex-col justify-center"
                  >
                     {isSent ? (
                       <Stack direction="vertical" gap={4} align="center" justify="center" className="text-center py-12">
                          <motion.div 
                             initial={{ scale: 0 }} animate={{ scale: 1 }}
                             className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-8 shadow-lg"
                          >
                             <CheckCircle className="w-12 h-12" />
                          </motion.div>
                          <Typography variant="h2" as="h2">Pesan Diterima!</Typography>
                          <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed">Terima kasih telah menghubungi kami. Representative kami akan menghubungi Anda melalui email atau WhatsApp dalam waktu <strong>1x24 jam</strong>.</Typography>
                          <Button variant="outline" onClick={() => setIsSent(false)}>Kirim Pesan Lain</Button>
                       </Stack>
                     ) : (
                       <>
                         <div className="mb-10">
                            <Typography variant="h2" as="h2">Send a Message</Typography>
                            <Typography variant="body-lg" className="text-slate-500 dark:text-slate-400">Isi formulir di bawah ini dan kami akan menghubungkan Anda dengan expert yang tepat.</Typography>
                         </div>
                         
                         <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                            <Grid cols={2} gap={8}>
                               <Input 
                                 id="name" name="name" label="Nama Lengkap" placeholder="Ex: Budi Santoso" 
                                 error={errors.name} 
                                 className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 h-12"
                               />
                               <Input 
                                 id="email" name="email" type="email" label="Email Bisnis" placeholder="budi@perusahaan.com" 
                                 error={errors.email} 
                                 className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 h-12"
                               />
                            </Grid>
                            
                            <Select 
                               id="topic" 
                               name="topic"
                               label="Topik Diskusi"
                               className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 h-12"
                               options={[
                                  { value: "sales", label: "Penjualan & Demo Produk" },
                                  { value: "partnership", label: "Partnership & Reseller Program" },
                                  { value: "support", label: "Bantuan Teknis / Support" },
                                  { value: "media", label: "Media Inquiry / Public Relations" },
                                  { value: "investor", label: "Investor Relations" },
                                  { value: "other", label: "Lainnya" }
                               ]}
                            />
                            
                            <TextArea 
                               id="message" 
                               name="message" 
                               label="Pesan Anda" 
                               placeholder="Ceritakan tentang kebutuhan bisnis Anda, tantangan yang dihadapi, atau pertanyaan spesifik..."
                               rows={6}
                               error={errors.message}
                               className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                            />
                            
                            {/* Compliance Checkbox */}
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-800/50">
                               <Checkbox 
                                  name="consent" 
                                  label={<span className="text-sm text-slate-600 dark:text-slate-400">Saya menyetujui pemrosesan data pribadi sesuai <Link to="/legal/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Kebijakan Privasi</Link>.</span>}
                                  required
                               />
                               {errors.consent && (
                                  <Typography variant="body"><Shield className="w-3 h-3" /> {errors.consent}</Typography>
                               )}
                            </div>

                            <Stack direction="horizontal" gap={4} align="center" justify="between" className="pt-4">
                               <Typography variant="body" className="text-slate-400">Situs ini dilindungi oleh reCAPTCHA dan Kebijakan Privasi Google berlaku.</Typography>
                               <Button size="lg" type="submit" isLoading={isLoading} className="h-14 px-8 text-lg shadow-xl shadow-indigo-500/20 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto">
                                  {isLoading ? 'Mengirim...' : 'Kirim Pesan'} <Send className="w-4 h-4 ml-2" />
                               </Button>
                            </Stack>
                         </form>
                       </>
                     )}
                  </motion.div>
               </div>

            </Grid>
         </Container>
      </section>
    </div>
  );
};

export default ContactPage;
