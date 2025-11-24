
import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, Shield } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Input, Select, TextArea, Checkbox } from '../components/Form';
import { traceAction } from '../utils/telemetry';
import { Link } from 'react-router-dom';

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
    if (!consent) newErrors.consent = "Wajib menyetujui kebijakan privasi untuk melanjutkan.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      
      // Analytics Tracking
      await traceAction('contact.submit', async () => {
         // Simulate API call
         await new Promise(resolve => setTimeout(resolve, 1500));
         setIsLoading(false);
         setIsSent(true);
      });
    }
  };

  return (
    <Section className="bg-white dark:bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           {/* Info */}
           <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Hubungi Tim BizOps</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                 Ada pertanyaan teknis, kemitraan, atau sekadar ingin menyapa? Tim kami siap membantu Anda.
              </p>
              
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                       <Mail className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 dark:text-white mb-1">General Inquiry</h3>
                       <a href="mailto:hello@bizops.id" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">hello@bizops.id</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                       <Phone className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 dark:text-white mb-1">WhatsApp Support</h3>
                       <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">+62 812-3456-7890 (Mon-Fri, 09:00 - 17:00)</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                       <MapPin className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 dark:text-white mb-1">Headquarters</h3>
                       <p className="text-slate-600 dark:text-slate-400">
                          South Quarter Tower C, Level 22<br />
                          Jl. R.A. Kartini Kav 8, Cilandak<br />
                          Jakarta Selatan 12430
                       </p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                       <MessageSquare className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 dark:text-white mb-1">Join Community</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                          Diskusi dengan 500+ developer dan pengguna lain.
                       </p>
                       <a href="https://discord.gg/bizops" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline">
                          Open Discord Server &rarr;
                       </a>
                    </div>
                 </div>
              </div>
           </div>

           {/* Form */}
           <Card variant="flat" padding="lg">
              {isSent ? (
                <div className="text-center py-12">
                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pesan Terkirim!</h3>
                   <p className="text-slate-600 dark:text-slate-400 mb-6">Terima kasih telah menghubungi kami. Tim kami akan membalas dalam 24 jam.</p>
                   <Button variant="outline" onClick={() => setIsSent(false)}>Kirim Pesan Lain</Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Kirim Pesan</h2>
                  <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input id="name" name="name" label="Nama" error={errors.name} />
                        <Input id="email" name="email" type="email" label="Email" error={errors.email} />
                     </div>
                     <Select 
                        id="topic" 
                        name="topic"
                        label="Topik"
                        options={[
                           { value: "general", label: "Pertanyaan Umum" },
                           { value: "support", label: "Support Teknis" },
                           { value: "media", label: "Media / Press" },
                           { value: "investor", label: "Investor Relations" }
                        ]}
                     />
                     <TextArea 
                        id="message" 
                        name="message" 
                        label="Pesan" 
                        placeholder="Ceritakan kebutuhan Anda..."
                        error={errors.message}
                     />
                     
                     {/* Compliance Checkbox */}
                     <div>
                        <Checkbox 
                           name="consent" 
                           label={<span>Saya setuju data saya diproses sesuai <Link to="/legal/privacy" className="text-primary-600 hover:underline" target="_blank">Kebijakan Privasi</Link>.</span>}
                           required
                        />
                        {errors.consent && (
                           <p className="text-red-500 text-xs mt-1 flex items-center gap-1" role="alert">
                              <Shield className="w-3 h-3" /> {errors.consent}
                           </p>
                        )}
                     </div>

                     <Button fullWidth type="submit" isLoading={isLoading}>
                        {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                     </Button>
                  </form>
                </>
              )}
           </Card>
        </div>
    </Section>
  );
};

export default ContactPage;
