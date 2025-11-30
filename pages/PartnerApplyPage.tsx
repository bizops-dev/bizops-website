import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { CheckCircle, Shield, Briefcase, Building, Mail, Phone, Globe, User, Info, AlertCircle } from 'lucide-react';
import { partnerContent } from '../data/content';
import { Checkbox, Input, Select, TextArea } from '../components/Form';
import { traceAction } from '../utils/telemetry';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Container from '../components/Container';
import Stack from '../components/Stack';

const PartnerApplyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [consentError, setConsentError] = useState<string | null>(null);
  
  // Auto-fill from URL params
  const trackParam = searchParams.get('track'); // 'bootstrap' | 'scaleup'
  const programParam = searchParams.get('program'); // 'referral' | 'implementation'

  const [selectedProgram, setSelectedProgram] = useState<string>(programParam || (trackParam ? 'startup' : ''));

  useEffect(() => {
     if (programParam) setSelectedProgram(programParam);
     if (trackParam) setSelectedProgram('startup');
  }, [programParam, trackParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Enhanced validation
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const companyName = formData.get('companyName') as string;
    const phone = formData.get('phone') as string;
    const consent = formData.get('consent');

    // Basic validation
    if (!fullName || fullName.length < 3) {
      setConsentError("Nama lengkap minimal 3 karakter.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      setConsentError("Format email tidak valid.");
      return;
    }

    if (!companyName || companyName.length < 3) {
      setConsentError("Nama perusahaan minimal 3 karakter.");
      return;
    }

    const phoneRegex = /^(\+62|62|0)[0-9]{9,15}$/;
    const cleanPhone = phone?.replace(/[\s-]/g, '');
    if (!phone || !phoneRegex.test(cleanPhone)) {
      setConsentError("Nomor telepon tidak valid (contoh: 08123456789).");
      return;
    }

    if (!consent) {
      setConsentError("Anda harus menyetujui NDA & Kebijakan Privasi untuk melanjutkan.");
      return;
    }
    
    setConsentError(null);
    setFormState('submitting');
    
    // Simulate API call
    await traceAction('partner.apply.submit', async () => {
      setTimeout(() => {
        setFormState('success');
      }, 1500);
    });
  };

  if (formState === 'success') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center bg-slate-50 dark:bg-slate-900 gap-4" role="alert">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 dark:text-green-300 rounded-full flex items-center justify-center mb-8 animate-bounce shadow-lg gap-4">
          <CheckCircle className="w-12 h-12" aria-hidden="true" />
        </div>
        <Typography variant="h2" as="h2">Aplikasi Diterima!</Typography>
        <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">Terima kasih atas minat Anda bergabung dengan Ekosistem BizOps. Partner Manager kami sedang meninjau profil bisnis Anda dan akan menghubungi dalam <strong>1-2 hari kerja</strong>.</Typography>
        <Button size="lg" onClick={() => window.location.href = '/'}>Kembali ke Beranda</Button>
      </div>
    );
  }

  const getPageTitle = () => {
     if (trackParam === 'bootstrap') return 'Apply for Bootstrap Track';
     if (trackParam === 'scaleup') return 'Apply for Scale-Up Track';
     if (programParam === 'referral') return 'Become a Referral Partner';
     if (programParam === 'implementation') return 'Become an Implementation Partner';
     return 'Partner Application';
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors min-h-screen font-sans">
      <SEO title="Apply for Partner Program | BizOps" description="Bergabung dengan jaringan partner BizOps. Jadilah Referral Partner atau Implementation Partner resmi." />
      
      {/* Header Info */}
      <div className="bg-[#0B1120] text-white pt-32 pb-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
         {/* Abstract shapes */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

         <Container size="4xl" className="relative z-10">
            <Typography variant="h1" as="h1" className="font-bold tracking-tight">{getPageTitle()}</Typography>
            <Typography variant="body-lg" className="text-slate-400 dark:text-slate-300 leading-relaxed">{trackParam 
                  ? "Bergabung dengan ratusan founder lain yang telah mengakselerasi pertumbuhan mereka dengan BizOps." 
                  : "Bergabung dengan ekosistem partner kami untuk memperluas portofolio layanan dan meningkatkan revenue bisnis Anda."}</Typography>
         </Container>
      </div>

      <Section className="py-16 -mt-10 relative z-20">
         <Grid cols={12} gap={8}>
            
            {/* LEFT: FORM */}
            <div className="lg:col-span-8">
               <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
                  
                  {trackParam && (
                     <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-xl flex items-start gap-3">
                        <Info className="w-5 h-5 text-purple-600 dark:text-slate-300 mt-0.5 shrink-0" />
                        <div>
                           <Typography variant="h4" as="h4" className="font-bold dark:text-purple-300">Anda mendaftar untuk {trackParam === 'bootstrap' ? 'Bootstrap' : 'Scale-Up'} Track</Typography>
                           <Typography variant="body" className="dark:text-purple-400 dark:text-purple-300">Kami akan memprioritaskan aplikasi Anda sesuai kriteria program startup.</Typography>
                        </div>
                     </div>
                  )}

                  <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white"><Briefcase className="w-6 h-6 text-primary-600" /> Profil Bisnis</Typography>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                     
                     {/* Company Details */}
                     <Grid cols={2} gap={6}>
                        <Input label="Nama Perusahaan" name="company" placeholder="PT Teknologi Maju" required icon={<Building className="w-4 h-4" />} />
                        <Select 
                           label="Tipe Bisnis" 
                           name="businessType" 
                           defaultValue={trackParam ? 'startup' : ''}
                           options={[
                              { label: "IT Consultant / System Integrator", value: "si" },
                              { label: "Software House / Dev Shop", value: "devshop" },
                              { label: "Accounting Firm (KJA)", value: "kja" },
                              { label: "Startup (Product Company)", value: "startup" },
                              { label: "Freelancer / Individual", value: "individual" },
                           ]} 
                        />
                     </Grid>

                     <Grid cols={2} gap={6}>
                        <Input label="Website / LinkedIn" name="website" placeholder="https://" icon={<Globe className="w-4 h-4" />} />
                        <Input label="Lokasi (Kota)" name="city" placeholder="Jakarta Selatan" required />
                     </Grid>

                     <hr className="border-slate-100 dark:border-slate-800" />

                     {/* Contact Person */}
                     <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white"><User className="w-5 h-5 text-primary-600" /> Kontak PIC</Typography>
                     
                     <Grid cols={2} gap={6}>
                        <Input label="Nama Lengkap" name="picName" placeholder="John Doe" required />
                        <Input label="Jabatan" name="picRole" placeholder="CEO / Business Owner" required />
                     </Grid>

                     <Grid cols={2} gap={6}>
                        <Input label="Email Kerja" name="email" type="email" placeholder="john@company.com" required icon={<Mail className="w-4 h-4" />} />
                        <Input label="WhatsApp" name="phone" type="tel" placeholder="0812..." required icon={<Phone className="w-4 h-4" />} />
                     </Grid>

                     <hr className="border-slate-100 dark:border-slate-800" />

                     {/* Program Interest - Only show if not startup track (since startup track implies 'startup' program) */}
                     {!trackParam && (
                        <div>
                           <Typography variant="caption" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Program yang Diminati</Typography>
                           <Grid cols={2} gap={4}>
                              <label className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${selectedProgram === 'referral' ? 'bg-primary-50 border-primary-500 ring-1 ring-primary-500 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                                 <input 
                                    type="radio" name="program" value="referral" 
                                    className="mt-1" required 
                                    checked={selectedProgram === 'referral'}
                                    onChange={() => setSelectedProgram('referral')}
                                 />
                                 <div>
                                    <span className="block font-bold text-slate-900 dark:text-white text-sm">Referral Partner</span>
                                    <span className="block text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 mt-1">Komisi per deal. Tanpa teknis.</span>
                                 </div>
                              </label>
                              <label className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${selectedProgram === 'implementation' ? 'bg-primary-50 border-primary-500 ring-1 ring-primary-500 dark:bg-primary-900/20' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                                 <input 
                                    type="radio" name="program" value="implementation" 
                                    className="mt-1" required 
                                    checked={selectedProgram === 'implementation'}
                                    onChange={() => setSelectedProgram('implementation')}
                                 />
                                 <div>
                                    <span className="block font-bold text-slate-900 dark:text-white text-sm">Implementation Partner</span>
                                    <span className="block text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 mt-1">Margin besar + Jasa Setup & Training.</span>
                                 </div>
                              </label>
                           </Grid>
                        </div>
                     )}

                     {trackParam && <input type="hidden" name="program" value="startup_program" />}
                     {trackParam && <input type="hidden" name="track" value={trackParam} />}

                     <TextArea label="Ceritakan sedikit tentang bisnis & rencana Anda" name="message" rows={4} placeholder={trackParam ? "Startup kami bergerak di bidang X, saat ini dalam tahap Seed Funding..." : "Kami memiliki klien potensial di industri..."} />

                     {/* Compliance */}
                     <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <Checkbox 
                           name="consent"
                           label={
                              <span className="text-sm text-slate-600 dark:text-slate-400 dark:text-slate-300">
                                 Saya menyetujui NDA & <Link to="/legal/privacy" className="text-primary-600 hover:underline font-medium" target="_blank">Kebijakan Privasi</Link>. Saya mengerti bahwa tim BizOps akan melakukan verifikasi latar belakang bisnis.
                              </span>
                           }
                           required
                        />
                        {consentError && (
                           <Typography variant="body"><Shield className="w-4 h-4" /> {consentError}</Typography>
                        )}
                     </div>

                     <div className="pt-4">
                        <Button type="submit" fullWidth size="lg" isLoading={formState === 'submitting'} className="text-lg shadow-xl shadow-primary-500/20 rounded-xl font-bold">
                          {formState === 'submitting' ? 'Mengirim Data...' : 'Kirim Aplikasi'}
                        </Button>
                        <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300"><Shield className="w-3 h-3" /> Data Anda dienkripsi end-to-end. Kami tidak membagikan data partner.</Typography>
                     </div>
                  </form>
               </div>
            </div>

            {/* RIGHT: INFO SIDEBAR */}
            <Stack direction="vertical" gap={8} className="lg:col-span-4">
               
               {/* Process Timeline */}
               <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
                  <Typography variant="h3" as="h3">Next Steps</Typography>
                  
                  <Stack direction="vertical" gap={8} className="relative z-10">
                     <div className="flex gap-4 group">
                        <div className="flex flex-col items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center font-bold text-sm shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform gap-2">1</div>
                           <div className="w-0.5 h-full bg-slate-700 my-2"></div>
                        </div>
                        <div>
                           <Typography variant="h4" as="h4">Review (1-2 Hari)</Typography>
                           <Typography variant="body" className="text-slate-400 dark:text-slate-300 leading-relaxed">Tim Channel Manager memverifikasi legalitas & profil bisnis Anda.</Typography>
                        </div>
                     </div>
                     <div className="flex gap-4 group">
                        <div className="flex flex-col items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-sm text-slate-400 dark:text-slate-300 group-hover:border-primary-500 group-hover:text-primary-400 transition-colors gap-2">2</div>
                           <div className="w-0.5 h-full bg-slate-700 my-2"></div>
                        </div>
                        <div>
                           <Typography variant="h4" as="h4">Discovery Call</Typography>
                           <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300 leading-relaxed">Diskusi skema kerjasama, demo panel admin, dan strategi go-to-market.</Typography>
                        </div>
                     </div>
                     <div className="flex gap-4 group">
                        <div className="flex flex-col items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-sm text-slate-400 dark:text-slate-300 group-hover:border-primary-500 group-hover:text-primary-400 transition-colors gap-2">3</div>
                        </div>
                        <div>
                           <Typography variant="h4" as="h4">Onboarding</Typography>
                           <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300 leading-relaxed">Akses ke Partner Portal, Marketing Kit, dan Training Material.</Typography>
                        </div>
                     </div>
                  </Stack>
               </div>

               {/* Quick Contact */}
               <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
                  <Typography variant="h4" as="h4">Butuh Bantuan Cepat?</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300">Ingin diskusi informal sebelum mendaftar resmi? Hubungi tim kemitraan kami langsung.</Typography>
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                     <Mail className="w-4 h-4" /> partners@bizops.id
                  </Button>
               </div>
               
               {/* Testimonial Snippet */}
               <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl text-white shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                     <div className="flex gap-1 mb-3 text-amber-300">
                        {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                     </div>
                     <Typography variant="caption">"BizOps memberikan dukungan penuh untuk tim teknis kami. Bukan sekadar jualan lisensi, tapi transfer knowledge yang nyata."</Typography>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs gap-2">RS</div>
                        <div>
                           <div className="font-bold text-xs">Rudi Setiawan</div>
                           <div className="text-[10px] opacity-75">CTO, Mitra Solusi Digital</div>
                        </div>
                     </div>
                  </div>
               </div>

            </Stack>
         </Grid>
      </Section>
    </div>
  );
};

export default PartnerApplyPage;
