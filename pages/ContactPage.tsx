import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, Shield, ArrowRight, Clock, Globe, Send } from 'lucide-react';
import Section from '../components/Section';
import { Input, Select, TextArea, Checkbox } from '../components/Form';
import { traceAction } from '../utils/telemetry';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

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
    if (!name || name.length < 2) newErrors.name = "Nama wajib diisi.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email tidak valid.";
    if (!message || message.length < 10) newErrors.message = "Pesan minimal 10 karakter.";
    if (!consent) newErrors.consent = "Wajib menyetujui kebijakan privasi.";

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
      <section className="relative bg-[#0F172A] pt-24 pb-32 lg:pt-48 lg:pb-64 text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
         
         {/* Abstract Glows */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
         </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="relative z-20 -mt-20 md:-mt-32 pb-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               {/* LEFT: CONTACT INFO (Bento Grid Style) */}
               <div className="lg:col-span-5 space-y-6">
                  
                  {/* Primary Contact Card */}
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
                     
                     <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Direct Channels</h2>
                        
                        <div className="space-y-8">
                           <a href="mailto:hello@bizops.id" className="flex items-start gap-5 group/item">
                              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-colors group-hover/item:bg-indigo-600 group-hover/item:text-white">
                                 <Mail className="w-6 h-6" />
                              </div>
                              <div>
                                 <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email Sales & Support</div>
                                 <div className="text-lg font-bold text-slate-900 dark:text-white group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">hello@bizops.id</div>
                                 <div className="text-xs text-slate-400 mt-1">Avg. response time: 2 hours</div>
                              </div>
                           </a>

                           <a href="tel:+622139702834" className="flex items-start gap-5 group/item">
                              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-colors group-hover/item:bg-emerald-600 group-hover/item:text-white">
                                 <Phone className="w-6 h-6" />
                              </div>
                              <div>
                                 <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Call Center</div>
                                 <div className="text-lg font-bold text-slate-900 dark:text-white group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors">+62 21 3970 2834</div>
                                 <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Mon-Fri, 09:00 - 17:00 WIB
                                 </div>
                              </div>
                           </a>
                        </div>
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
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                           <Globe className="w-5 h-5 text-blue-400" /> Our Offices
                        </h2>
                        
                        <div className="space-y-6">
                           <div className="pl-4 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                              <h3 className="font-bold text-white text-lg">Jakarta HQ</h3>
                              <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                                 Eco-S Sahid Sudirman Residence<br />
                                 Jl. Jenderal Sudirman No.86, Karet Tengsin<br />
                                 Tanah Abang, Jakarta 10250
                              </p>
                           </div>
                           <div className="pl-4 border-l-2 border-slate-700 hover:border-purple-500 transition-colors">
                              <h3 className="font-bold text-white text-lg">Yogyakarta R&D</h3>
                              <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                                 Jl. Ampel No.23, Demangan Baru<br />
                                 Caturtunggal, Kec. Depok, Sleman<br />
                                 DI Yogyakarta 55281
                              </p>
                           </div>
                        </div>
                        
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
                     <div className="bg-white dark:bg-slate-900 rounded-[1.3rem] p-6 h-full flex items-center justify-between gap-4">
                        <div>
                           <h3 className="font-bold text-slate-900 dark:text-white text-sm">Join Developer Community</h3>
                           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Chat with 500+ peers on Discord.</p>
                        </div>
                        <a href="https://discord.gg/bizops" target="_blank" rel="noopener noreferrer">
                           <Button size="sm" variant="secondary" className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-xl">
                              Join Now <MessageSquare className="w-3 h-3 ml-2" />
                           </Button>
                        </a>
                     </div>
                  </motion.div>

               </div>

               {/* RIGHT: FORM CARD */}
               <div className="lg:col-span-7">
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl h-full flex flex-col justify-center"
                  >
                     {isSent ? (
                       <div className="flex flex-col items-center justify-center text-center py-12">
                          <motion.div 
                             initial={{ scale: 0 }} animate={{ scale: 1 }}
                             className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-8 shadow-lg"
                          >
                             <CheckCircle className="w-12 h-12" />
                          </motion.div>
                          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Pesan Diterima!</h2>
                          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
                             Terima kasih telah menghubungi kami. Representative kami akan menghubungi Anda melalui email atau WhatsApp dalam waktu <strong>1x24 jam</strong>.
                          </p>
                          <Button variant="outline" onClick={() => setIsSent(false)}>Kirim Pesan Lain</Button>
                       </div>
                     ) : (
                       <>
                         <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Send a Message</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">
                               Isi formulir di bawah ini dan kami akan menghubungkan Anda dengan expert yang tepat.
                            </p>
                         </div>
                         
                         <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            </div>
                            
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
                                  <p className="text-red-500 text-xs mt-2 flex items-center gap-1 pl-7 font-medium" role="alert">
                                     <Shield className="w-3 h-3" /> {errors.consent}
                                  </p>
                               )}
                            </div>

                            <div className="pt-4 flex items-center justify-between gap-4 flex-wrap">
                               <p className="text-xs text-slate-400 max-w-xs">
                                  Situs ini dilindungi oleh reCAPTCHA dan Kebijakan Privasi Google berlaku.
                               </p>
                               <Button size="lg" type="submit" isLoading={isLoading} className="h-14 px-8 text-lg shadow-xl shadow-indigo-500/20 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto">
                                  {isLoading ? 'Mengirim...' : 'Kirim Pesan'} <Send className="w-4 h-4 ml-2" />
                               </Button>
                            </div>
                         </form>
                       </>
                     )}
                  </motion.div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
