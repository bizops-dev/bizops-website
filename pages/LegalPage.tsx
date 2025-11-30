import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { legalContent } from '../data/content';
import Button from '../components/Button';
import { Shield, FileText, Scale, Cookie, Save, Database, Download, Trash2, History, Lock, BrainCircuit, Phone, Printer, Share2, ChevronRight, CheckCircle, Menu, X, List } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalPageProps {
  forcedDocId?: string;
}

// DRY Navigation Data
const LEGAL_LINKS = [
  { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  { id: 'data-rights', label: 'Privacy Center (DSAR)', icon: Database },
  { id: 'dpa', label: 'Data Processing Agmt', icon: Lock },
  { id: 'ai-ethics', label: 'AI Ethics & Safety', icon: BrainCircuit },
  { id: 'terms', label: 'Terms of Service', icon: FileText },
  { id: 'sla', label: 'Service Level Agreement', icon: Scale },
  { id: 'cookies', label: 'Cookie Preferences', icon: Cookie },
];

const LegalPage: React.FC<LegalPageProps> = ({ forcedDocId }) => {
  const { docId } = useParams<{ docId: string }>();
  const navigate = useNavigate();
  // Default to privacy if no ID
  const activeDocId = forcedDocId || docId || 'privacy';
  const data = legalContent[activeDocId];

  // Mobile Nav State
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileTOCOpen, setIsMobileTOCOpen] = useState(false); // New: Mobile TOC state

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

  // TOC State
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    // Parse Headings for TOC
    if (data?.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.content, 'text/html');
      const h2s = Array.from(doc.querySelectorAll('h2')).map((h2, index) => {
        const id = h2.id || `section-${index}`;
        // Add ID to original content if missing (handled in render usually, but good for TOC extraction)
        return { id, text: h2.textContent || '' };
      });
      setHeadings(h2s);
    }
  }, [data]);

  useEffect(() => {
    if (activeDocId === 'cookies') {
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
    setIsMobileNavOpen(false); // Close mobile nav on change
    setIsMobileTOCOpen(false); // Close mobile TOC on change
  }, [activeDocId]);

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
    setTimeout(() => {
      setRequestStatus('success');
      setTimeout(() => {
        setRequestStatus('idle');
        setRequestType(null);
        setEmail('');
      }, 3000);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Function to inject IDs into H2 tags for TOC linking
  const processContent = (html: string) => {
    if (!html) return '';
    // Simple regex replacement to add IDs to H2s if they don't have one
    let index = 0;
    return html.replace(/<h2(.*?)>(.*?)<\/h2>/g, (match, attrs, content) => {
       if (attrs.includes('id=')) return match;
       const id = `section-${index++}`;
       return `<h2 id="${id}"${attrs}>${content}</h2>`;
    });
  };

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50">
        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Document Not Found</h1>
        <p className="text-slate-500 mb-6">The legal document you are looking for does not exist.</p>
        <Link to="/legal/privacy"><Button>Go to Privacy Policy</Button></Link>
      </div>
    );
  }

  const NavItem = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => {
     const isActive = activeDocId === id;
     return (
        <Link to={`/legal/${id}`}>
           <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${isActive ? 'bg-white shadow-sm ring-1 ring-slate-200 text-primary-700 font-bold' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-primary-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              <span className="text-sm">{label}</span>
              {isActive && <ChevronRight className="w-4 h-4 ml-auto text-primary-400" />}
           </div>
        </Link>
     );
  }

  const currentDocLabel = LEGAL_LINKS.find(l => l.id === activeDocId)?.label || 'Select Document';

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen font-sans">
       <SEO title={data.title} description={data.subtitle} />
       
       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* MOBILE NAV CONTROLS */}
          <div className="lg:hidden mb-6 flex flex-col gap-3 relative z-30">
             {/* 1. Document Switcher */}
             <button 
                onClick={() => { setIsMobileNavOpen(!isMobileNavOpen); setIsMobileTOCOpen(false); }}
                className="w-full bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform"
             >
                <div className="flex items-center gap-3">
                   <div className="bg-primary-50 p-2 rounded-lg text-primary-600">
                      <Scale className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Current Document</div>
                      <div className="font-bold text-slate-900">{currentDocLabel}</div>
                   </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileNavOpen ? 'rotate-90' : ''}`} />
             </button>

             {/* 2. Mobile Table of Contents Toggle */}
             {headings.length > 0 && (
                <button 
                  onClick={() => { setIsMobileTOCOpen(!isMobileTOCOpen); setIsMobileNavOpen(false); }}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-center gap-2 shadow-sm text-sm font-medium text-slate-600 hover:text-primary-600 active:scale-[0.99] transition-all"
                >
                   <List className="w-4 h-4" /> 
                   {isMobileTOCOpen ? 'Hide Table of Contents' : 'Show Table of Contents'}
                </button>
             )}

             {/* Document Drawer */}
             <AnimatePresence>
                {isMobileNavOpen && (
                   <motion.div 
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden z-40"
                   >
                      <div className="max-h-[60vh] overflow-y-auto p-2">
                         {LEGAL_LINKS.map((link) => (
                            <Link 
                               key={link.id} 
                               to={`/legal/${link.id}`}
                               onClick={() => setIsMobileNavOpen(false)}
                               className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 last:mb-0 ${activeDocId === link.id ? 'bg-primary-50 text-primary-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                               <link.icon className={`w-4 h-4 ${activeDocId === link.id ? 'text-primary-600' : 'text-slate-400'}`} />
                               <span className="text-sm">{link.label}</span>
                               {activeDocId === link.id && <CheckCircle className="w-4 h-4 ml-auto text-primary-600" />}
                            </Link>
                         ))}
                      </div>
                   </motion.div>
                )}
             </AnimatePresence>

             {/* TOC Drawer */}
             <AnimatePresence>
                {isMobileTOCOpen && headings.length > 0 && (
                   <motion.div 
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="bg-slate-50 rounded-xl border border-slate-200 shadow-inner overflow-hidden"
                   >
                      <div className="p-4 max-h-[40vh] overflow-y-auto">
                         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Jump to Section</h4>
                         <ul className="space-y-2">
                            {headings.map((h) => (
                              <li key={h.id}>
                                 <a 
                                    href={`#${h.id}`} 
                                    onClick={() => setIsMobileTOCOpen(false)}
                                    className="block text-sm text-slate-600 hover:text-primary-600 py-1"
                                 >
                                    {h.text}
                                 </a>
                              </li>
                            ))}
                         </ul>
                      </div>
                   </motion.div>
                )}
             </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
             
             {/* LEFT SIDEBAR NAV (Desktop) */}
             <div className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-28 space-y-8">
                   <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Legal Center</h3>
                      <nav className="space-y-1">
                         {LEGAL_LINKS.map(link => (
                            <NavItem key={link.id} id={link.id} label={link.label} icon={link.icon} />
                         ))}
                      </nav>
                   </div>

                   {/* Emergency Contact */}
                   <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                      <div className="flex items-center gap-2 mb-2 text-red-700 font-bold text-xs uppercase tracking-wide">
                         <Phone className="w-4 h-4" /> Security Incident
                      </div>
                      <p className="text-xs text-red-600 mb-3 leading-relaxed">
                         Untuk pelaporan insiden keamanan kritis atau pelanggaran data.
                      </p>
                      <a href="mailto:security@bizops.id" className="text-xs font-bold text-red-700 hover:underline flex items-center gap-1">
                         security@bizops.id <ChevronRight className="w-3 h-3" />
                      </a>
                   </div>
                </div>
             </div>

             {/* MAIN CONTENT (7 Cols) */}
             <div className="lg:col-span-7">
                {/* Header Card */}
                <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 bg-slate-100 w-fit px-3 py-1 rounded-full">
                         <span>Legal</span>
                         <span className="text-slate-300">•</span>
                         <span>Last Updated: {data.updated}</span>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">{data.title}</h1>
                      <p className="text-lg text-slate-600 leading-relaxed">{data.subtitle}</p>
                   </div>
                   
                   <div className="absolute top-8 right-8 hidden sm:flex gap-2">
                      <button onClick={handlePrint} className="p-2 text-slate-400 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors" title="Print Document">
                         <Printer className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors" title="Share">
                         <Share2 className="w-5 h-5" />
                      </button>
                   </div>
                </div>
                
                {/* Document Body */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-12 min-h-[500px]">
                  
                   {/* SPECIAL INTERACTIVE UI: DATA RIGHTS */}
                   {activeDocId === 'data-rights' && (
                      <div className="space-y-8 animate-fade-in-up mb-12">
                         <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
                            <h3 className="font-bold text-blue-900 text-lg mb-2">Data Subject Access Rights (DSAR)</h3>
                            <p className="text-blue-800 text-sm leading-relaxed">
                               Sesuai dengan UU PDP (Indonesia) dan GDPR (Eropa), Anda memiliki hak penuh untuk meminta salinan data digital Anda atau meminta penghapusan permanen ("Right to be Forgotten").
                            </p>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button 
                              onClick={() => setRequestType('export')}
                              className={`text-left border rounded-2xl p-6 transition-all flex flex-col group ${requestType === 'export' ? 'border-primary-500 bg-primary-50/10 ring-1 ring-primary-500' : 'border-slate-200 hover:border-primary-300 hover:shadow-md'}`}
                            >
                               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                  <Download className="w-6 h-6" />
                               </div>
                               <h4 className="font-bold text-slate-900 text-lg mb-2">Export My Data</h4>
                               <p className="text-slate-600 text-sm flex-grow leading-relaxed">
                                  Unduh salinan lengkap profil, riwayat aktivitas, dan log akses Anda dalam format JSON/CSV.
                               </p>
                            </button>
                            <button 
                              onClick={() => setRequestType('delete')}
                              className={`text-left border rounded-2xl p-6 transition-all flex flex-col group ${requestType === 'delete' ? 'border-red-500 bg-red-50/10 ring-1 ring-red-500' : 'border-slate-200 hover:border-red-300 hover:shadow-md'}`}
                            >
                               <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                  <Trash2 className="w-6 h-6" />
                               </div>
                               <h4 className="font-bold text-slate-900 text-lg mb-2">Delete Account</h4>
                               <p className="text-slate-600 text-sm flex-grow leading-relaxed">
                                  Hapus permanen akun dan seluruh data pribadi Anda dari server kami.
                               </p>
                            </button>
                         </div>
                         {requestType && (
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 animate-fade-in-up scroll-mt-24 relative overflow-hidden" id="request-form">
                               {requestStatus === 'loading' && (
                                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-10">
                                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                                  </div>
                               )}
                               <h3 className="font-bold text-slate-900 text-xl mb-4">
                                  {requestType === 'export' ? 'Konfirmasi Export Data' : 'Konfirmasi Penghapusan Akun'}
                               </h3>
                               {requestStatus === 'success' ? (
                                  <div className="flex items-center gap-4 text-green-800 bg-green-50 p-4 rounded-xl border border-green-200">
                                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle className="w-5 h-5 text-green-600" /></div>
                                     <div>
                                        <div className="font-bold text-lg">Permintaan Diterima</div>
                                        <div className="text-sm mt-1">Nomor Tiket <strong>DSAR-#8821</strong> telah dibuat. Cek email Anda untuk verifikasi.</div>
                                     </div>
                                  </div>
                               ) : (
                                  <form onSubmit={handleDataRequest} className="space-y-4 max-w-md">
                                     <p className="text-slate-600 text-sm">
                                        Untuk keamanan, kami perlu memverifikasi kepemilikan akun. Masukkan email terdaftar Anda.
                                     </p>
                                     <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email Terdaftar</label>
                                        <input 
                                          type="email" 
                                          required 
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                                          placeholder="nama@perusahaan.com"
                                        />
                                     </div>
                                     <div className="flex gap-3 pt-2">
                                        <Button type="submit" className={requestType === 'delete' ? 'bg-red-600 hover:bg-red-700 shadow-red-500/20' : ''}>
                                           {requestType === 'delete' ? 'Kirim Permintaan Hapus' : 'Kirim Permintaan Export'}
                                        </Button>
                                        <Button type="button" variant="ghost" onClick={() => setRequestType(null)}>Batal</Button>
                                     </div>
                                  </form>
                               )}
                            </div>
                         )}
                      </div>
                   )}

                   {/* SPECIAL INTERACTIVE UI: COOKIES */}
                   {activeDocId === 'cookies' && (
                      <div className="mb-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
                         <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Pengaturan Preferensi</h3>
                            {saved && <span className="text-sm font-bold text-green-600 flex items-center gap-1 animate-fade-in"><CheckCircle className="w-4 h-4" /> Tersimpan</span>}
                         </div>
                         <div className="space-y-6">
                            <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                               <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Shield className="w-5 h-5 text-green-600" /></div>
                               <div className="flex-grow">
                                  <div className="flex items-center gap-3 mb-1">
                                     <h4 className="font-bold text-slate-900">Strictly Necessary</h4>
                                     <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded border border-green-200">REQUIRED</span>
                                  </div>
                                  <p className="text-sm text-slate-600 leading-relaxed">Wajib agar website berfungsi (login session, keamanan, load balancing).</p>
                               </div>
                               <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300 cursor-not-allowed opacity-50">
                                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                               </div>
                            </div>
                            <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                               <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Cookie className="w-5 h-5 text-blue-600" /></div>
                               <div className="flex-grow">
                                  <h4 className="font-bold text-slate-900 mb-1">Analytics & Performance</h4>
                                  <p className="text-sm text-slate-600 leading-relaxed">Membantu kami memahami statistik kunjungan (Google Analytics) secara anonim.</p>
                               </div>
                               <button 
                                 onClick={() => setPreferences(prev => ({...prev, analytics: !prev.analytics}))}
                                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.analytics ? 'bg-primary-600' : 'bg-slate-300'}`}
                               >
                                  <span className={`${preferences.analytics ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition shadow-sm`} />
                               </button>
                            </div>
                            <div className="flex items-start gap-4">
                               <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Share2 className="w-5 h-5 text-amber-600" /></div>
                               <div className="flex-grow">
                                  <h4 className="font-bold text-slate-900 mb-1">Marketing & Targeting</h4>
                                  <p className="text-sm text-slate-600 leading-relaxed">Untuk personalisasi konten iklan yang relevan (Meta Pixel, LinkedIn Insight).</p>
                               </div>
                               <button 
                                 onClick={() => setPreferences(prev => ({...prev, marketing: !prev.marketing}))}
                                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.marketing ? 'bg-primary-600' : 'bg-slate-300'}`}
                               >
                                  <span className={`${preferences.marketing ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition shadow-sm`} />
                               </button>
                            </div>
                            <div className="pt-6 mt-4 flex justify-end">
                               <Button onClick={handleSaveCookies} disabled={saved} size="lg" className="w-full sm:w-auto">
                                  {saved ? 'Preferensi Disimpan' : 'Simpan Perubahan'}
                               </Button>
                            </div>
                         </div>
                      </div>
                   )}

                   {/* MAIN TEXT CONTENT (Fixed Typography) */}
                   <style>{`
                      .legal-content h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e2e8f0; }
                      .legal-content h3 { font-size: 1.25rem; font-weight: 600; color: #1e293b; margin-top: 2rem; margin-bottom: 0.75rem; }
                      .legal-content p { font-size: 1rem; line-height: 1.75; color: #475569; margin-bottom: 1.5rem; }
                      .legal-content ul, .legal-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; list-style-type: disc; }
                      .legal-content li { color: #475569; margin-bottom: 0.5rem; padding-left: 0.5rem; }
                      .legal-content strong { color: #0f172a; font-weight: 600; }
                      .legal-content a { color: #2563EB; text-decoration: none; font-weight: 500; }
                      .legal-content a:hover { text-decoration: underline; }
                      .legal-content blockquote { border-left: 4px solid #3B82F6; background-color: #F8FAFC; padding: 1rem 1.5rem; margin-bottom: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; font-style: normal; color: #334155; }
                      
                      @media (max-width: 640px) {
                        .legal-content h2 { font-size: 1.25rem; margin-top: 2rem; }
                        .legal-content h3 { font-size: 1.1rem; }
                        .legal-content p, .legal-content li { font-size: 0.95rem; line-height: 1.6; }
                      }
                   `}</style>
                   
                   <div 
                     className="legal-content"
                     dangerouslySetInnerHTML={{ 
                       __html: DOMPurify.sanitize(processContent(data.content), {
                         ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'h2', 'h3', 'blockquote', 'div', 'code', 'span'],
                         ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'id', 'style']
                       }) 
                     }}
                   />

                   <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                      <p>© 2024 BizOps Inc. All rights reserved.</p>
                      <div className="flex gap-6">
                         <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-primary-600 transition-colors">Back to top</a>
                         <Link to="/contact" className="hover:text-primary-600 transition-colors">Contact Legal Team</Link>
                      </div>
                   </div>
                </div>
             </div>

             {/* RIGHT SIDEBAR (TOC) - Desktop Only */}
             <div className="lg:col-span-2 hidden lg:block">
                <div className="sticky top-28">
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">On this page</h4>
                   <ul className="space-y-1 text-sm border-l border-slate-200 pl-4">
                      {headings.length > 0 ? (
                        headings.map((h) => (
                          <li key={h.id}>
                             <a href={`#${h.id}`} className="block py-1 text-slate-500 hover:text-slate-900 hover:border-l-2 hover:border-transparent hover:border-primary-500 -ml-[17px] pl-4 transition-all line-clamp-1" title={h.text}>
                                {h.text}
                             </a>
                          </li>
                        ))
                      ) : (
                        <li className="text-slate-400 italic text-xs">No sections detected</li>
                      )}
                      {activeDocId === 'data-rights' && (
                        <li><a href="#request-form" className="block py-1 text-slate-500 hover:text-slate-900">Request Form</a></li>
                      )}
                   </ul>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};

export default LegalPage;