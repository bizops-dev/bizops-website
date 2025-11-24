
import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Shield, Bell, XCircle } from 'lucide-react';
import SEO from '../components/SEO';

const PreferencesPage: React.FC = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="Email Preferences" description="Manage your email subscription settings." />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600">
              <Mail className="w-8 h-8" />
           </div>
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">Kendalikan Isi Inbox Anda</h1>
           <p className="text-slate-600">
              Kami ingin mengirimkan konten yang bermanfaat, bukan gangguan. Pilih topik apa yang relevan bagi Anda.
           </p>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
           
           <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Jenis Email</h3>
              <div className="space-y-6">
                 
                 {/* Explicit accessible checkbox structure */}
                 <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                       <input 
                          id="pref_updates" 
                          aria-describedby="pref_updates_desc"
                          name="pref_updates" 
                          type="checkbox" 
                          defaultChecked 
                          className="h-5 w-5 rounded border-slate-300 text-primary-600 focus:ring-primary-600" 
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                       <label htmlFor="pref_updates" className="font-bold text-slate-900 flex items-center gap-2 cursor-pointer">
                          <Shield className="w-4 h-4 text-green-600" aria-hidden="true" /> Product Updates & Alerts
                       </label>
                       <p id="pref_updates_desc" className="text-slate-500">Info fitur baru, jadwal maintenance, dan patch keamanan. (Disarankan)</p>
                    </div>
                 </div>
                 
                 <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                       <input 
                          id="pref_digest" 
                          aria-describedby="pref_digest_desc"
                          name="pref_digest" 
                          type="checkbox" 
                          defaultChecked 
                          className="h-5 w-5 rounded border-slate-300 text-primary-600 focus:ring-primary-600" 
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                       <label htmlFor="pref_digest" className="font-bold text-slate-900 flex items-center gap-2 cursor-pointer">
                          <Mail className="w-4 h-4 text-blue-600" aria-hidden="true" /> BizOps Digest
                       </label>
                       <p id="pref_digest_desc" className="text-slate-500">Artikel blog pilihan, tips manajemen, dan regulasi terbaru (Weekly).</p>
                    </div>
                 </div>

                 <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                       <input 
                          id="pref_promo" 
                          aria-describedby="pref_promo_desc"
                          name="pref_promo" 
                          type="checkbox" 
                          className="h-5 w-5 rounded border-slate-300 text-primary-600 focus:ring-primary-600" 
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                       <label htmlFor="pref_promo" className="font-bold text-slate-900 flex items-center gap-2 cursor-pointer">
                          <Bell className="w-4 h-4 text-amber-600" aria-hidden="true" /> Marketing Promo
                       </label>
                       <p id="pref_promo_desc" className="text-slate-500">Undangan webinar eksklusif dan penawaran diskon khusus.</p>
                    </div>
                 </div>

              </div>
           </div>

           <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Frekuensi Maksimal</h3>
              <div className="flex gap-6" role="radiogroup" aria-label="Email frequency">
                 <div className="flex items-center">
                    <input id="freq_daily" name="freq" type="radio" className="h-4 w-4 border-slate-300 text-primary-600 focus:ring-primary-600" />
                    <label htmlFor="freq_daily" className="ml-3 block text-sm font-medium leading-6 text-slate-900 cursor-pointer">Harian</label>
                 </div>
                 <div className="flex items-center">
                    <input id="freq_weekly" name="freq" type="radio" defaultChecked className="h-4 w-4 border-slate-300 text-primary-600 focus:ring-primary-600" />
                    <label htmlFor="freq_weekly" className="ml-3 block text-sm font-medium leading-6 text-slate-900 cursor-pointer">Mingguan</label>
                 </div>
                 <div className="flex items-center">
                    <input id="freq_monthly" name="freq" type="radio" className="h-4 w-4 border-slate-300 text-primary-600 focus:ring-primary-600" />
                    <label htmlFor="freq_monthly" className="ml-3 block text-sm font-medium leading-6 text-slate-900 cursor-pointer">Bulanan</label>
                 </div>
              </div>
           </div>

           <div className="flex justify-between items-center pt-4">
              <button type="button" className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1">
                 <XCircle className="w-4 h-4" /> Unsubscribe All
              </button>
              <Button type="submit" disabled={saved}>
                 {saved ? 'Tersimpan!' : 'Simpan Preferensi'}
              </Button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default PreferencesPage;
