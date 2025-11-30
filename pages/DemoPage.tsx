import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle, Shield, Lock, FileCheck, Calendar, Video, Zap } from 'lucide-react';
import { traceAction } from '../utils/telemetry';
import Section from '../components/Section';
import { Input, Select, Checkbox } from '../components/Form';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

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

    if (!fullName || fullName.length < 3) {
      newErrors.fullName = "Nama lengkap minimal 3 karakter.";
    }

    // Strict Email Regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.workEmail = "Masukkan alamat email yang valid.";
    }

    if (!company || company.length < 3) {
      newErrors.companyName = "Nama perusahaan minimal 3 karakter.";
    }

    // Phone Regex (Allows +62 or 08, min 9 digits)
    const phoneRegex = /^(\+62|62|0)[0-9]{9,15}$/;
    if (!whatsapp || !phoneRegex.test(whatsapp)) {
      newErrors.whatsapp = "Nomor WhatsApp tidak valid (Min 10 digit).";
    }

    if (!consent) {
      newErrors.consent = "Anda wajib menyetujui Kebijakan Privasi.";
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
      <div className="min-h-screen bg-[#0B0F19] flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 ring-1 ring-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
        >
          <CheckCircle className="w-10 h-10 text-emerald-500" aria-hidden="true" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Mengalihkan ke WhatsApp...</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
          Jika WhatsApp tidak terbuka otomatis, silakan klik tombol di bawah ini. Tim kami akan segera merespons chat Anda.
        </p>
        <Button variant="primary" onClick={() => window.location.href = '/'}>Kembali ke Beranda</Button>
      </div>
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

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Left: Value Proposition */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <Video className="w-3 h-3" /> Live Walkthrough
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    Lihat BizOps <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">In Action.</span>
                  </h1>
                  <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                    Ini bukan sekadar demo fitur. Diskusikan arsitektur sistem yang tepat untuk masalah operasional spesifik perusahaan Anda dengan Solution Architect kami.
                  </p>

                  <div className="space-y-8 mb-12">
                    {[
                      { icon: Calendar, title: 'Discovery Session (15m)', desc: "Kami akan membedah 'bottle-neck' operasional Anda saat ini." },
                      { icon: Video, title: 'Tailored Walkthrough (30m)', desc: 'Demo produk spesifik industri Anda. No generic features.' },
                      { icon: FileCheck, title: 'Architecture & Quote', desc: 'Rekomendasi topologi infrastruktur & estimasi investasi.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                          <item.icon className="w-6 h-6 text-primary-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{item.title}</h4>
                          <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    <div className="flex flex-col gap-2">
                       <Shield className="w-5 h-5 text-slate-500" />
                       <span className="text-xs font-bold text-slate-400 uppercase">ISO 27001<br/>Ready</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Lock className="w-5 h-5 text-slate-500" />
                       <span className="text-xs font-bold text-slate-400 uppercase">TLS 1.3<br/>Encrypted</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <FileCheck className="w-5 h-5 text-slate-500" />
                       <span className="text-xs font-bold text-slate-400 uppercase">NDA<br/>Available</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Jadwalkan Sesi</h3>
                    <p className="text-slate-400 text-sm">Isi detail di bawah untuk terhubung langsung dengan expert kami.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        required 
                        label="Nama Lengkap" 
                        placeholder="John Doe" 
                        error={errors.fullName}
                        className="bg-black/40 border-white/10 focus:border-primary-500 text-white placeholder:text-slate-600"
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
                        className="bg-black/40 border-white/10 focus:border-primary-500 text-white placeholder:text-slate-600"
                      />
                    </div>

                    <Input 
                      id="companyName" 
                      name="companyName" 
                      required 
                      label="Nama Perusahaan" 
                      error={errors.companyName}
                      className="bg-black/40 border-white/10 focus:border-primary-500 text-white"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        id="whatsapp" 
                        name="whatsapp"
                        required 
                        type="tel" 
                        label="WhatsApp" 
                        placeholder="+62..." 
                        helperText="Kami akan mengirimkan konfirmasi jadwal via WA."
                        error={errors.whatsapp}
                        className="bg-black/40 border-white/10 focus:border-primary-500 text-white placeholder:text-slate-600"
                      />
                      <Select 
                        id="employeeCount" 
                        name="employeeCount" 
                        label="Jumlah Karyawan"
                        className="bg-black/40 border-white/10 focus:border-primary-500 text-white"
                        options={[
                          { value: "<50", label: "< 50 Karyawan" },
                          { value: "50-200", label: "50 - 200 Karyawan" },
                          { value: "200-1000", label: "200 - 1000 Karyawan" },
                          { value: ">1000", label: "> 1000 Karyawan" }
                        ]}
                      />
                    </div>
                    
                    <Select 
                      id="industry" 
                      name="industry" 
                      label="Industri Utama"
                      helperText="Membantu kami menyiapkan demo case study yang relevan."
                      className="bg-black/40 border-white/10 focus:border-primary-500 text-white"
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
                       <span className="block text-sm font-bold text-white mb-4 flex items-center gap-2"><Zap className="w-4 h-4 text-amber-400" /> Kebutuhan Utama</span>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Checkbox label="Integrasi HR & Payroll" name="feature_hr" />
                          <Checkbox label="Kontrol Proyek & Biaya" name="feature_project" />
                          <Checkbox label="Manajemen Inventori" name="feature_inv" />
                          <Checkbox label="Sales & CRM" name="feature_crm" />
                          <Checkbox label="Finance & Accounting" name="feature_finance" />
                          <Checkbox label="Minat Partner / OEM" name="feature_partner" />
                       </div>
                    </div>

                    {/* Compliance: Explicit Consent */}
                    <div className="pt-2">
                      <Checkbox 
                        name="consent" 
                        label={
                          <span className="text-sm text-slate-400">
                            Saya menyetujui <Link to="/legal/privacy" className="text-primary-400 hover:text-primary-300 font-medium" target="_blank">Kebijakan Privasi</Link> dan mengizinkan BizOps menghubungi saya.
                          </span>
                        }
                        required
                      />
                      {errors.consent && (
                        <p className="text-red-400 text-xs mt-2 flex items-center gap-1 pl-7" role="alert">
                          <Shield className="w-3 h-3" /> {errors.consent}
                        </p>
                      )}
                    </div>

                    <Button 
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

            </div>
         </div>
      </div>
    </div>
  );
};

export default DemoPage;
