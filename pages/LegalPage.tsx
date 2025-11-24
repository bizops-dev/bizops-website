
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { legalContent } from '../data/content';
import Button from '../components/Button';
import { Shield, FileText, Scale, Cookie, Save, Database, Download, Trash2, History, Lock, BrainCircuit, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const LegalPage: React.FC = () => {
  const { docId } = useParams<{ docId: string }>();
  const data = docId ? legalContent[docId] : null;

  // State for Cookie Preferences Logic
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  // State for Privacy Center (Data Rights)
  const [requestType, setRequestType] = useState<'export' | 'delete' | null>(null);
  const [email, setEmail] = useState('');
  const [requestStatus, setRequestStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    if (docId === 'cookies') {
      const stored = localStorage.getItem('bizops_cookie_consent');
      if (stored) {
        try {
          setPreferences(JSON.parse(stored));
        } catch (e) {}
      }
    }
    // Reset state when switching docs
    setRequestType(null);
    setRequestStatus('idle');
    setEmail('');
  }, [docId]);

  const handleSaveCookies = () => {
    const newPrefs = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('bizops_cookie_consent', JSON.stringify(newPrefs));
    setSaved(true);
    
    window.dispatchEvent(new CustomEvent('bizops_cookie_updated'));
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDataRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestStatus('loading');
    // Simulate API Call for DSAR
    setTimeout(() => {
      setRequestStatus('success');
      // Reset after 3s
      setTimeout(() => {
        setRequestStatus('idle');
        setRequestType(null);
        setEmail('');
      }, 3000);
    }, 1500);
  };

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Document Not Found</h1>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  const NavItem = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => {
     const isActive = docId === id;
     return (
        <Link to={`/legal/${id}`}>
           <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary-50 text-primary-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary-600' : 'text-slate-400'}`} />
              {label}
           </div>
        </Link>
     );
  }

  return (
    <div className="pt-16 pb-24 bg-white">
       <SEO title={data.title} description={data.subtitle} />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
             
             {/* Sidebar Nav */}
             <div className="lg:col-span-1">
                <div className="sticky top-24">
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Legal Framework</h3>
                   <nav className="space-y-1 mb-8">
                      <NavItem id="privacy" label="Privacy Policy" icon={Shield} />
                      <NavItem id="data-rights" label="Privacy Center (DSAR)" icon={Database} />
                      <NavItem id="dpa" label="Data Processing Agmt" icon={Lock} />
                      <NavItem id="ai-ethics" label="AI Ethics & Safety" icon={BrainCircuit} />
                      <NavItem id="terms" label="Terms of Service" icon={FileText} />
                      <NavItem id="sla" label="Service Level Agreement" icon={Scale} />
                      <NavItem id="cookies" label="Cookie Preferences" icon={Cookie} />
                   </nav>

                   {/* Emergency Contact */}
                   <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                      <div className="flex items-center gap-2 mb-2 text-red-700 font-bold text-xs uppercase tracking-wide">
                         <Phone className="w-4 h-4" /> Emergency Contact
                      </div>
                      <p className="text-xs text-red-600 mb-3">
                         Untuk insiden keamanan mendesak atau pelanggaran privasi.
                      </p>
                      <a href="mailto:legal-emergency@bizops.id" className="text-xs font-bold text-red-700 underline">
                         legal-emergency@bizops.id
                      </a>
                   </div>
                </div>
             </div>

             {/* Content */}
             <div className="lg:col-span-3">
                <div className="mb-8 pb-8 border-b border-slate-100">
                   <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">{data.title}</h1>
                   <p className="text-xl text-slate-600">{data.subtitle}</p>
                </div>
                
                {/* Render logic based on docId to support interactive dashboards */}
                
                {docId === 'data-rights' ? (
                   <div className="space-y-8 animate-fade-in-up">
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                         <h3 className="font-bold text-blue-900 text-lg mb-2">Data Subject Access Rights (DSAR)</h3>
                         <p className="text-blue-800 text-sm leading-relaxed">
                            Sesuai dengan UU PDP (Indonesia) dan GDPR (Eropa), Anda memiliki hak penuh untuk meminta salinan data digital Anda atau meminta penghapusan permanen ("Right to be Forgotten").
                         </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {/* Export Data Card */}
                         <div className="border border-slate-200 rounded-2xl p-6 hover:border-primary-200 transition-colors flex flex-col">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                               <Download className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-2">Export My Data</h4>
                            <p className="text-slate-600 text-sm mb-6 flex-grow">
                               Unduh salinan lengkap profil, riwayat aktivitas, dan log akses Anda dalam format JSON/CSV yang portabel.
                            </p>
                            <Button variant="outline" fullWidth onClick={() => setRequestType('export')} className="mt-auto">
                               Unduh Arsip Data
                            </Button>
                         </div>

                         {/* Delete Account Card */}
                         <div className="border border-slate-200 rounded-2xl p-6 hover:border-red-200 transition-colors flex flex-col">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                               <Trash2 className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-2">Delete Account</h4>
                            <p className="text-slate-600 text-sm mb-6 flex-grow">
                               Hapus permanen akun dan seluruh data pribadi Anda dari server kami. Tindakan ini tidak dapat dibatalkan.
                            </p>
                            <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 mt-auto" fullWidth onClick={() => setRequestType('delete')}>
                               Hapus Akun Permanen
                            </Button>
                         </div>
                      </div>

                      {/* Request Form Modal/Area */}
                      {requestType && (
                         <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 animate-fade-in-up scroll-mt-24" id="request-form">
                            <h3 className="font-bold text-slate-900 text-xl mb-4">
                               {requestType === 'export' ? 'Konfirmasi Export Data' : 'Konfirmasi Penghapusan Akun'}
                            </h3>
                            {requestStatus === 'success' ? (
                               <div className="flex items-center gap-4 text-green-800 bg-green-50 p-4 rounded-lg border border-green-200">
                                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><Shield className="w-5 h-5 text-green-600" /></div>
                                  <div>
                                     <div className="font-bold text-lg">Permintaan Diterima</div>
                                     <div className="text-sm mt-1">Nomor Tiket DSAR-#8821 telah dibuat. Cek email Anda untuk verifikasi identitas sebelum kami memproses permintaan ini.</div>
                                  </div>
                               </div>
                            ) : (
                               <form onSubmit={handleDataRequest} className="space-y-4 max-w-md">
                                  <p className="text-slate-600 text-sm">
                                     Untuk keamanan, kami perlu memverifikasi bahwa Anda adalah pemilik sah akun ini. Masukkan alamat email yang terdaftar.
                                  </p>
                                  <div>
                                     <label className="block text-sm font-medium text-slate-700 mb-1">Email Terdaftar</label>
                                     <input 
                                       type="email" 
                                       required 
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                       placeholder="nama@perusahaan.com"
                                     />
                                  </div>
                                  <div className="flex gap-3 pt-2">
                                     <Button type="submit" disabled={requestStatus === 'loading'} className={requestType === 'delete' ? 'bg-red-600 hover:bg-red-700 border-none text-white' : ''}>
                                        {requestStatus === 'loading' ? 'Memproses...' : 'Kirim Permintaan'}
                                     </Button>
                                     <Button type="button" variant="ghost" onClick={() => setRequestType(null)}>Batal</Button>
                                  </div>
                               </form>
                            )}
                         </div>
                      )}

                      {/* Request History (Mock) */}
                      <div className="pt-8 border-t border-slate-100">
                         <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <History className="w-4 h-4 text-slate-400" /> Riwayat Permintaan
                         </h4>
                         <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                            <table className="w-full text-sm text-left">
                               <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                                  <tr>
                                     <th className="px-4 py-3">Tanggal</th>
                                     <th className="px-4 py-3">Tipe</th>
                                     <th className="px-4 py-3">Status</th>
                                  </tr>
                               </thead>
                               <tbody className="text-slate-600">
                                  <tr>
                                     <td colSpan={3} className="px-4 py-8 text-center italic text-slate-400">
                                        Belum ada riwayat permintaan data.
                                     </td>
                                  </tr>
                               </tbody>
                            </table>
                         </div>
                      </div>
                   </div>
                ) : (
                   // Default Text Content Render for Privacy, Terms, etc.
                   <>
                      <div 
                        className="prose prose-slate prose-lg max-w-none text-slate-700"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      />

                      {/* Cookie Specific Dashboard */}
                      {docId === 'cookies' && (
                         <div className="mt-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Pengaturan Persetujuan</h3>
                            <div className="space-y-6">
                               
                               {/* Necessary */}
                               <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                                  <div className="mt-1"><Shield className="w-5 h-5 text-green-600" /></div>
                                  <div className="flex-grow">
                                     <div className="flex items-center gap-3 mb-1">
                                        <h4 className="font-bold text-slate-900">Strictly Necessary</h4>
                                        <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded border border-green-200">REQUIRED</span>
                                     </div>
                                     <p className="text-sm text-slate-600">Diperlukan untuk keamanan, login, dan fungsi dasar sistem.</p>
                                  </div>
                                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300 cursor-not-allowed">
                                     <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                                  </div>
                               </div>

                               {/* Analytics */}
                               <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                                  <div className="mt-1"><Cookie className="w-5 h-5 text-blue-600" /></div>
                                  <div className="flex-grow">
                                     <h4 className="font-bold text-slate-900 mb-1">Analytics & Performance</h4>
                                     <p className="text-sm text-slate-600">Membantu kami memahami statistik kunjungan secara anonim.</p>
                                  </div>
                                  <button 
                                    onClick={() => setPreferences(prev => ({...prev, analytics: !prev.analytics}))}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.analytics ? 'bg-primary-600' : 'bg-slate-300'}`}
                                    aria-pressed={preferences.analytics}
                                  >
                                     <span className={`${preferences.analytics ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                                  </button>
                               </div>

                               {/* Marketing */}
                               <div className="flex items-start gap-4">
                                  <div className="mt-1"><Cookie className="w-5 h-5 text-amber-600" /></div>
                                  <div className="flex-grow">
                                     <h4 className="font-bold text-slate-900 mb-1">Marketing & Targeting</h4>
                                     <p className="text-sm text-slate-600">Untuk personalisasi konten iklan yang relevan.</p>
                                  </div>
                                  <button 
                                    onClick={() => setPreferences(prev => ({...prev, marketing: !prev.marketing}))}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.marketing ? 'bg-primary-600' : 'bg-slate-300'}`}
                                    aria-pressed={preferences.marketing}
                                  >
                                     <span className={`${preferences.marketing ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                                  </button>
                               </div>

                               <div className="pt-6 mt-4">
                                  <Button onClick={handleSaveCookies} disabled={saved} className="flex items-center gap-2">
                                     {saved ? <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Disimpan</div> : <div className="flex items-center"><Save className="w-4 h-4 mr-1" /> Simpan Preferensi</div>}
                                  </Button>
                               </div>
                            </div>
                         </div>
                      )}
                   </>
                )}
                
                <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-500 italic">
                   Dokumen ini terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}.
                   Perubahan materiil akan dinotifikasikan via email admin.
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

// Simple Icon Component needed locally
const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

export default LegalPage;
