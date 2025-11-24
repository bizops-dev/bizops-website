
import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle, ClipboardList, Briefcase, TrendingUp, Shield } from 'lucide-react';
import { partnerContent } from '../data/content';
import { Checkbox } from '../components/Form';
import { traceAction } from '../utils/telemetry';
import { Link } from 'react-router-dom';

const PartnerApplyPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [consentError, setConsentError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const consent = formData.get('consent');

    if (!consent) {
      setConsentError("Wajib menyetujui NDA & Kebijakan Privasi.");
      return;
    }
    setConsentError(null);

    setFormState('submitting');
    
    await traceAction('partner.apply.submit', async () => {
      setTimeout(() => {
        setFormState('success');
      }, 1500);
    });
  };

  if (formState === 'success') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center bg-slate-50" role="alert">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-fade-in-up">
          <CheckCircle className="w-10 h-10" aria-hidden="true" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">Aplikasi Anda Diterima!</h2>
        <p className="text-slate-600 max-w-lg mx-auto mb-8 text-lg">
          Terima kasih atas minat Anda bergabung dengan Ekosistem BizOps. Partner Manager kami sedang meninjau profil bisnis Anda dan akan menghubungi dalam 1-2 hari kerja.
        </p>
        <Button onClick={() => window.location.href = '/'}>Kembali ke Beranda</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ubah Jasa Konsultasi Menjadi Bisnis Produk Berbasis Aset.</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
               Langkah pertama menuju transformasi model bisnis Anda. Isi data di bawah untuk mendapatkan Partner Kit (Proposal Margin, Brosur Whitelabel tanpa logo kami, dan Akses Demo Partner Console) serta jadwal Business Review dengan tim kami.
            </p>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               
               {/* Left: Form */}
               <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                     <div className="bg-slate-50 border-b border-slate-100 px-8 py-4">
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Partner Qualification Form</div>
                     </div>
                     <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        
                        {/* Section 1 */}
                        <div>
                           <div className="flex items-center gap-3 mb-6">
                              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                 <Briefcase className="w-4 h-4" aria-hidden="true" />
                              </div>
                              <h3 className="text-lg font-bold text-slate-900">1. Company Profile</h3>
                           </div>
                           <div className="grid grid-cols-1 gap-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">Nama PT / CV</label>
                                    <input id="companyName" required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
                                 </div>
                                 <div>
                                    <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website Perusahaan</label>
                                    <input id="website" type="url" placeholder="https://" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
                                 </div>
                              </div>
                              <div>
                                 <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Alamat Domisili</label>
                                 <input id="address" required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
                              </div>
                              <div>
                                 <label htmlFor="linkedin" className="block text-sm font-medium text-slate-700 mb-1">LinkedIn URL (Pendiri/Direktur)</label>
                                 <input id="linkedin" type="url" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
                              </div>
                           </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-t border-slate-100 pt-8">
                           <div className="flex items-center gap-3 mb-6">
                              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                 <ClipboardList className="w-4 h-4" aria-hidden="true" />
                              </div>
                              <h3 className="text-lg font-bold text-slate-900">2. Capability Assessment</h3>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1">Jenis Bisnis Utama</label>
                                 <select id="businessType" className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white">
                                    <option>Konsultan Bisnis / Pajak</option>
                                    <option>Software House / IT Vendor</option>
                                    <option>HR Agency / Outsourcing</option>
                                    <option>System Integrator (Hardware)</option>
                                 </select>
                              </div>
                              <div>
                                 <label htmlFor="clientIndustry" className="block text-sm font-medium text-slate-700 mb-1">Industri Klien Fokus Anda</label>
                                 <input id="clientIndustry" type="text" placeholder="Ex: Retail, F&B, Konstruksi..." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
                              </div>
                              <div>
                                 <label htmlFor="salesTeam" className="block text-sm font-medium text-slate-700 mb-1">Jumlah Tim Sales B2B</label>
                                 <select id="salesTeam" className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white">
                                    <option>1 - 2 Orang</option>
                                    <option>3 - 5 Orang</option>
                                    <option>5+ Orang</option>
                                 </select>
                              </div>
                              <div>
                                 <label htmlFor="recSoftware" className="block text-sm font-medium text-slate-700 mb-1">Software yg sering direkomendasikan</label>
                                 <input id="recSoftware" type="text" placeholder="Ex: Accurate, Jurnal, SAP..." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
                              </div>
                           </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-t border-slate-100 pt-8">
                           <div className="flex items-center gap-3 mb-6">
                              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                 <TrendingUp className="w-4 h-4" aria-hidden="true" />
                              </div>
                              <h3 className="text-lg font-bold text-slate-900">3. Business Goals</h3>
                           </div>
                           <div className="space-y-6">
                              <div>
                                 <label htmlFor="target" className="block text-sm font-medium text-slate-700 mb-1">Target Akuisisi Klien (12 Bulan)</label>
                                 <select id="target" className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white">
                                    <option>5 - 10 Klien</option>
                                    <option>10 - 20 Klien</option>
                                    <option>20+ Klien</option>
                                 </select>
                              </div>
                              <div>
                                 <span className="block text-sm font-medium text-slate-700 mb-3" id="model-group">Model Partnership</span>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="radiogroup" aria-labelledby="model-group">
                                    <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                                       <input type="radio" name="model" className="w-5 h-5 text-primary-600" />
                                       <div>
                                          <div className="font-bold text-slate-900">Whitelabel (Full Brand)</div>
                                          <div className="text-xs text-slate-500">Brand Anda sendiri, margin 100%.</div>
                                       </div>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                                       <input type="radio" name="model" className="w-5 h-5 text-primary-600" />
                                       <div>
                                          <div className="font-bold text-slate-900">Co-Branding (Reseller)</div>
                                          <div className="text-xs text-slate-500">Jual BizOps, komisi bagi hasil.</div>
                                       </div>
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Compliance */}
                        <div className="pt-4">
                           <Checkbox 
                              name="consent"
                              label={<span>Saya menyetujui NDA & <Link to="/legal/privacy" className="text-primary-600 hover:underline font-medium" target="_blank">Kebijakan Privasi</Link> program kemitraan ini.</span>}
                              required
                           />
                           {consentError && (
                              <p className="text-red-500 text-xs mt-1 flex items-center gap-1" role="alert">
                                 <Shield className="w-3 h-3" /> {consentError}
                              </p>
                           )}
                        </div>

                        <div className="pt-2">
                           <Button type="submit" fullWidth size="lg" disabled={formState === 'submitting'} className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg">
                             {formState === 'submitting' ? 'Mengirim Data...' : 'Ajukan Akses Partner'}
                           </Button>
                        </div>
                     </form>
                  </div>
               </div>

               {/* Right: Onboarding Flow */}
               <div className="lg:col-span-1">
                  <div className="sticky top-24">
                     <h3 className="text-xl font-bold text-slate-900 mb-6">What Happens Next?</h3>
                     <div className="relative border-l-2 border-slate-200 ml-3 space-y-10 pl-8 py-2">
                        {partnerContent.onboarding.map((step, idx) => (
                           <div key={idx} className="relative">
                              <span className="absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-slate-300 text-xs font-bold text-slate-500">
                                 {idx + 1}
                              </span>
                              <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                 {step.desc}
                              </p>
                           </div>
                        ))}
                     </div>

                     <div className="mt-10 bg-amber-50 p-6 rounded-xl border border-amber-100">
                        <h4 className="font-bold text-amber-900 mb-2">Need Quick Answers?</h4>
                        <p className="text-sm text-amber-800 mb-4">
                           Ingin diskusi informal sebelum mendaftar? Hubungi Channel Manager kami.
                        </p>
                        <a href="#" className="text-sm font-bold text-amber-700 hover:underline">Chat via WhatsApp Business &rarr;</a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default PartnerApplyPage;
