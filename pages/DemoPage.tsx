import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle, Shield, Lock, FileCheck, Calendar, Video, Zap } from 'lucide-react';
import { traceAction } from '../utils/telemetry';
import Section from '../components/Section';
import { Input, Select, Checkbox } from '../components/Form';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const DemoPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const fullName = formData.get('fullName') as string;
    const email = formData.get('workEmail') as string;
    const company = formData.get('companyName') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const consent = formData.get('consent') as string;

    // Enhanced validation with better error messages
    if (!fullName) {
      newErrors.fullName = "Nama lengkap wajib diisi.";
    } else if (fullName.length < 3) {
      newErrors.fullName = "Nama lengkap minimal 3 karakter.";
    } else if (fullName.length > 100) {
      newErrors.fullName = "Nama lengkap maksimal 100 karakter.";
    } else if (!/^[a-zA-Z\s.]+$/.test(fullName)) {
      newErrors.fullName = "Nama hanya boleh berisi huruf dan spasi.";
    }

    // Strict Email Regex with better error message
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      newErrors.workEmail = "Email bisnis wajib diisi.";
    } else if (!emailRegex.test(email)) {
      newErrors.workEmail = "Format email tidak valid (contoh: nama@perusahaan.com).";
    } else if (email.includes('gmail.com') || email.includes('yahoo.com') || email.includes('hotmail.com')) {
      newErrors.workEmail = "Gunakan email bisnis/perusahaan (bukan email pribadi).";
    }

    if (!company) {
      newErrors.companyName = "Nama perusahaan wajib diisi.";
    } else if (company.length < 3) {
      newErrors.companyName = "Nama perusahaan minimal 3 karakter.";
    } else if (company.length > 100) {
      newErrors.companyName = "Nama perusahaan maksimal 100 karakter.";
    }

    // Phone Regex (Allows +62 or 08, min 9 digits) with better validation
    const phoneRegex = /^(\+62|62|0)[0-9]{9,15}$/;
    const cleanPhone = whatsapp?.replace(/[\s-]/g, ''); // Remove spaces and dashes
    if (!whatsapp) {
      newErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.whatsapp = "Nomor WhatsApp tidak valid (contoh: 08123456789 atau +6281234567890).";
    }

    if (!consent) {
      newErrors.consent = "Anda harus menyetujui Kebijakan Privasi untuk melanjutkan.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (!validate(formData)) {
      return; // Stop submission if invalid
    }

    setFormState('submitting');

    const name = formData.get('fullName') as string;
    const company = formData.get('companyName') as string;
    const email = formData.get('workEmail') as string;
    const industry = formData.get('industry') as string;
    
    // Generate WhatsApp Link
    const phone = "622139702834"; // Sales Number
    const message = `Halo BizOps, saya ${name} dari ${company}. Saya tertarik untuk demo produk (Industri: ${industry}). Email saya: ${email}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    await traceAction('business.lead.submit', async () => {
      // Simulate API/Processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      setFormState('success');
    });
  };

  if (formState === 'success') {
    return (
      <Stack direction="vertical" gap={4} align="center" justify="center" className="min-h-screen bg-[#0B0F19] text-center px-4">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 ring-1 ring-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.3)] gap-4"
        >
          <CheckCircle className="w-10 h-10 text-emerald-500 dark:text-emerald-400 dark:text-emerald-300" aria-hidden="true" />
        </motion.div>
        <Typography variant="h2" as="h2">Mengalihkan ke WhatsApp...</Typography>
        <Typography variant="body-lg" className="text-slate-400 dark:text-slate-300">Jika WhatsApp tidak terbuka otomatis, silakan klik tombol di bawah ini. Tim kami akan segera merespons chat Anda.</Typography>
        <Button size="md" variant="primary" onClick={() => window.location.href = '/'}>Kembali ke Beranda</Button>
      </Stack>
    );
  }

  return (
    <div className="bg-[#0B0F19] min-h-screen font-sans selection:bg-primary-500/30 text-slate-200">
      <SEO 
        title="Book a Demo | BizOps Enterprise ERP" 
        description="Jadwalkan sesi konsultasi dan demo eksklusif dengan Solution Architect kami. Validasi kebutuhan operasional Anda sekarang." 
      />

      {/* --- HERO & FORM SECTION --- */}
      <div className="relative pt-28 pb-24 overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

         <Container size="7xl" className="relative z-10">
            <Grid cols={12} gap={12}>
              
              {/* Left: Value Proposition */}
              <Stack direction="vertical" gap={4} justify="center" className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Stack direction="horizontal" gap={2} align="center" className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <Video className="w-3 h-3" /> Live Walkthrough
                  </Stack>
                  <Typography variant="h1" as="h1" className="font-extrabold text-white leading-tight tracking-tight">Lihat BizOps <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">In Action.</span></Typography>
                  <Typography variant="body-lg" className="text-slate-400 dark:text-slate-300">Ini bukan sekadar demo fitur. Diskusikan arsitektur sistem yang tepat untuk masalah operasional spesifik perusahaan Anda dengan Solution Architect kami.</Typography>

                  <Stack direction="vertical" gap={8} className="mb-12">
                    {[
                      { icon: Calendar, title: 'Discovery Session (15m)', desc: "Kami akan membedah 'bottle-neck' operasional Anda saat ini." },
                      { icon: Video, title: 'Tailored Walkthrough (30m)', desc: 'Demo produk spesifik industri Anda. No generic features.' },
                      { icon: FileCheck, title: 'Architecture & Quote', desc: 'Rekomendasi topologi infrastruktur & estimasi investasi.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-5">
                        <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                          <item.icon className="w-6 h-6 text-primary-400" />
                        </Stack>
                        <div>
                          <Typography variant="h4" as="h4" className="font-bold text-white">{item.title}</Typography>
                          <Typography variant="caption" className="text-slate-400 dark:text-slate-300 leading-relaxed">{item.desc}</Typography>
                        </div>
                      </div>
                    ))}
                  </Stack>

                  <Grid cols={3} gap={4} className="border-t border-white/10 pt-8">
                    <Stack direction="vertical" gap={2}>
                       <Shield className="w-5 h-5 text-slate-500 dark:text-slate-400 dark:text-slate-300" />
                       <span className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase">ISO 27001<br/>Ready</span>
                    </Stack>
                    <Stack direction="vertical" gap={2}>
                       <Lock className="w-5 h-5 text-slate-500 dark:text-slate-400 dark:text-slate-300" />
                       <span className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase">TLS 1.3<br/>Encrypted</span>
                    </Stack>
                    <Stack direction="vertical" gap={2}>
                       <FileCheck className="w-5 h-5 text-slate-500 dark:text-slate-400 dark:text-slate-300" />
                       <span className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase">NDA<br/>Available</span>
                    </Stack>
                  </Grid>
                </motion.div>
              </Stack>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
                >
                  <div className="mb-8">
                    <Typography variant="h3" as="h3">Jadwalkan Sesi</Typography>
                    <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Isi detail di bawah untuk terhubung langsung dengan expert kami.</Typography>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <Grid cols={2} gap={6}>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        required 
                        label="Nama Lengkap" 
                        placeholder="John Doe" 
                        error={errors.fullName}
                        className="!bg-black/40 !border-white/10 focus:!border-primary-500 !text-white placeholder:!text-slate-600 dark:text-slate-300 [&:-webkit-autofill]:shadow-[0_0_0_100px_#1e293b_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        labelClassName="text-slate-300"
                      />
                      <Input 
                        id="workEmail" 
                        name="workEmail" 
                        required 
                        type="email" 
                        label="Email Kantor" 
                        placeholder="john@company.com" 
                        helperText="Gunakan email korporat untuk prioritas."
                        error={errors.workEmail}
                        className="!bg-black/40 !border-white/10 focus:!border-primary-500 !text-white placeholder:!text-slate-600 dark:text-slate-300 [&:-webkit-autofill]:shadow-[0_0_0_100px_#1e293b_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        labelClassName="text-slate-300"
                      />
                    </Grid>

                    <Input 
                      id="companyName" 
                      name="companyName" 
                      required 
                      label="Nama Perusahaan" 
                      error={errors.companyName}
                      className="!bg-black/40 !border-white/10 focus:!border-primary-500 !text-white [&:-webkit-autofill]:shadow-[0_0_0_100px_#1e293b_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                      labelClassName="text-slate-300"
                    />

                    <Grid cols={2} gap={6}>
                      <Input 
                        id="whatsapp" 
                        name="whatsapp"
                        required 
                        type="tel" 
                        label="WhatsApp" 
                        placeholder="+62..." 
                        helperText="Kami akan mengirimkan konfirmasi jadwal via WA."
                        error={errors.whatsapp}
                        className="!bg-black/40 !border-white/10 focus:!border-primary-500 !text-white placeholder:!text-slate-600 dark:text-slate-300 [&:-webkit-autofill]:shadow-[0_0_0_100px_#1e293b_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        labelClassName="text-slate-300"
                      />
                      <Select 
                        id="employeeCount" 
                        name="employeeCount" 
                        label="Jumlah Karyawan"
                        className="!bg-black/40 !border-white/10 focus:!border-primary-500 !text-white [&:-webkit-autofill]:shadow-[0_0_0_100px_#1e293b_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                        labelClassName="text-slate-300"
                        options={[
                          { value: "<50", label: "< 50 Karyawan" },
                          { value: "50-200", label: "50 - 200 Karyawan" },
                          { value: "200-1000", label: "200 - 1000 Karyawan" },
                          { value: ">1000", label: "> 1000 Karyawan" }
                        ]}
                      />
                    </Grid>
                    
                    <Select 
                      id="industry" 
                      name="industry" 
                      label="Industri Utama"
                      helperText="Membantu kami menyiapkan demo case study yang relevan."
                      className="!bg-black/40 !border-white/10 focus:!border-primary-500 !text-white [&:-webkit-autofill]:shadow-[0_0_0_100px_#1e293b_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                      labelClassName="text-slate-300"
                      options={[
                        { value: "Construction", label: "Konstruksi / Kontraktor" },
                        { value: "Professional Services", label: "Jasa Profesional / Outsourcing" },
                        { value: "Retail", label: "Retail / Distribusi" },
                        { value: "Manufacturing", label: "Manufaktur" },
                        { value: "Healthcare", label: "Healthcare / Rumah Sakit" },
                        { value: "Education", label: "Education / Sekolah" },
                        { value: "Others", label: "Lainnya" }
                      ]}
                    />

                    <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                       <span className="block text-sm font-bold text-white mb-4 flex items-center gap-2"><Zap className="w-4 h-4 text-amber-400 dark:text-amber-300" /> Kebutuhan Utama</span>
                       <Grid cols={1} gap={3}>
                          <Checkbox label="Integrasi HR & Payroll" name="feature_hr" labelClassName="text-slate-300 group-hover:text-white" />
                          <Checkbox label="Kontrol Proyek & Biaya" name="feature_project" labelClassName="text-slate-300 group-hover:text-white" />
                          <Checkbox label="Manajemen Inventori" name="feature_inv" labelClassName="text-slate-300 group-hover:text-white" />
                          <Checkbox label="Sales & CRM" name="feature_crm" labelClassName="text-slate-300 group-hover:text-white" />
                          <Checkbox label="Finance & Accounting" name="feature_finance" labelClassName="text-slate-300 group-hover:text-white" />
                          <Checkbox label="Minat Partner / OEM" name="feature_partner" labelClassName="text-slate-300 group-hover:text-white" />
                       </Grid>
                    </div>

                    {/* Compliance: Explicit Consent */}
                    <div className="pt-2">
                      <Checkbox 
                        name="consent" 
                        label={
                          <span className="text-sm text-slate-400 dark:text-slate-300">
                            Saya menyetujui <Link to="/legal/privacy" className="text-primary-400 hover:text-primary-300 font-medium" target="_blank">Kebijakan Privasi</Link> dan mengizinkan BizOps menghubungi saya.
                          </span>
                        }
                        required
                      />
                      {errors.consent && (
                        <Typography variant="body"><Shield className="w-3 h-3" /> {errors.consent}</Typography>
                      )}
                    </div>

                    <Button size="md" 
                      type="submit" 
                      fullWidth 
                      variant="primary"
                      className="h-14 text-lg font-bold shadow-xl shadow-primary-500/20 bg-primary-600 hover:bg-primary-500 text-white rounded-xl"
                      isLoading={formState === 'submitting'}
                    >
                      {formState === 'submitting' ? 'Memproses...' : 'Reservasi Sesi via WhatsApp'}
                    </Button>
                  </form>
                </motion.div>
              </div>

            </Grid>
         </Container>
      </div>
    </div>
  );
};

export default DemoPage;
