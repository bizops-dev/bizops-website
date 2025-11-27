
import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle, Shield, Lock, FileCheck } from 'lucide-react';
import { traceAction } from '../utils/telemetry';
import Section from '../components/Section';
import Card from '../components/Card';
import { Input, Select, Checkbox } from '../components/Form';
import { Link } from 'react-router-dom';

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
      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle className="w-8 h-8" aria-hidden="true" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Mengalihkan ke WhatsApp...</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          Jika WhatsApp tidak terbuka otomatis, silakan klik tombol di bawah ini. Tim kami akan segera merespons chat Anda.
        </p>
        <Button onClick={() => window.location.href = '/'}>Kembali ke Beranda</Button>
      </Section>
    );
  }

  return (
    <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Form */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Validasi Solusi untuk Bisnis Anda</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Ini bukan sekadar demo fitur. Diskusikan arsitektur sistem yang tepat untuk masalah operasional spesifik perusahaan Anda dengan Solution Architect kami.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  id="fullName" 
                  name="fullName" 
                  required 
                  label="Nama Lengkap" 
                  placeholder="John Doe" 
                  error={errors.fullName}
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
                />
              </div>

              <Input 
                id="companyName" 
                name="companyName" 
                required 
                label="Nama Perusahaan" 
                error={errors.companyName}
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
                />
                <Select 
                  id="employeeCount" 
                  name="employeeCount" 
                  label="Jumlah Karyawan"
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
                options={[
                  { value: "Construction", label: "Konstruksi / Kontraktor" },
                  { value: "Professional Services", label: "Jasa Profesional / Outsourcing" },
                  { value: "Retail", label: "Retail / Distribusi" },
                  { value: "Manufacturing", label: "Manufaktur" },
                  { value: "Others", label: "Lainnya" }
                ]}
              />

              <div>
                 <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Kebutuhan Utama (Checklist)</span>
                 <div className="space-y-3">
                    <Checkbox label="Integrasi HR & Payroll" name="feature_hr" />
                    <Checkbox label="Kontrol Proyek & Biaya" name="feature_project" />
                    <Checkbox label="Manajemen Inventori & Gudang" name="feature_inv" />
                    <Checkbox label="Minat Partner / Whitelabel" name="feature_partner" />
                 </div>
              </div>

              {/* Compliance: Explicit Consent */}
              <div className="pt-2">
                <Checkbox 
                  name="consent" 
                  label={
                    <span>
                      Saya menyetujui <Link to="/legal/privacy" className="text-primary-600 hover:underline font-medium" target="_blank">Kebijakan Privasi</Link> dan mengizinkan BizOps menghubungi saya via WhatsApp/Email.
                    </span>
                  }
                  required
                />
                {errors.consent && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1" role="alert">
                    <Shield className="w-3 h-3" /> {errors.consent}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                fullWidth 
                size="lg" 
                isLoading={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Memproses...' : 'Reservasi Sesi via WhatsApp'}
              </Button>
            </form>
          </div>

          {/* Right: Trust & Process */}
          <div className="space-y-8">
             <Card variant="flat" padding="lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">What to Expect</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold flex-shrink-0">1</div>
                     <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">Discovery Session (15m)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Kami akan membedah 'bottle-neck' operasional Anda saat ini (Excel/Manual Process).</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold flex-shrink-0">2</div>
                     <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">Tailored Walkthrough (30m)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Demo produk spesifik industri Anda. Kami tidak akan membuang waktu membahas fitur yang tidak relevan.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold flex-shrink-0">3</div>
                     <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">Architecture & Quote</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Rekomendasi topologi infrastruktur (Cloud vs Self-hosted) dan estimasi investasi yang transparan.</p>
                     </div>
                  </div>
                </div>
             </Card>
             
             {/* Trust Badges */}
             <div className="grid grid-cols-3 gap-4">
                <Card variant="outline" className="p-4 text-center flex flex-col items-center justify-center">
                   <Shield className="w-6 h-6 text-slate-400 mb-2" aria-hidden="true" />
                   <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">ISO 27001 Ready</span>
                </Card>
                <Card variant="outline" className="p-4 text-center flex flex-col items-center justify-center">
                   <Lock className="w-6 h-6 text-slate-400 mb-2" aria-hidden="true" />
                   <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">TLS 1.3 Encrypted</span>
                </Card>
                <Card variant="outline" className="p-4 text-center flex flex-col items-center justify-center">
                   <FileCheck className="w-6 h-6 text-slate-400 mb-2" aria-hidden="true" />
                   <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">NDA Available</span>
                </Card>
             </div>
          </div>

        </div>
    </Section>
  );
};

export default DemoPage;
