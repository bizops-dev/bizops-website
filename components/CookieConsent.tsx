import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Shield, Cookie, X, Settings } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Default preferences
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent is already stored
    const consent = localStorage.getItem('bizops_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const parsed = JSON.parse(consent);
        setPreferences(parsed);
      } catch (e) {
        console.error("Error parsing cookie consent", e);
      }
    }

    // Listen for reopen event from Footer
    const handleOpenSettings = () => {
      setShowBanner(false);
      setShowSettings(true);
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
  }, []);

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('bizops_cookie_consent', JSON.stringify({
      ...prefs,
      timestamp: new Date().toISOString()
    }));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    
    // Apply logic based on consent (Mock implementation)
    if (prefs.analytics) console.log("[BizOps] Analytics Cookies Enabled");
    if (prefs.marketing) console.log("[BizOps] Marketing Cookies Enabled");
  };

  const handleAcceptAll = () => {
    const allGranted = { necessary: true, analytics: true, marketing: true };
    saveConsent(allGranted);
  };

  const handleRejectAll = () => {
    const allRejected = { necessary: true, analytics: false, marketing: false };
    saveConsent(allRejected);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 sticky top-0 backdrop-blur-md z-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary-600" /> Cookie Preferences
              </h3>
              <button 
                onClick={() => setShowSettings(false)} 
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Close Settings"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6 flex-grow">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Kami menggunakan cookies untuk meningkatkan pengalaman browsing, menyajikan konten yang dipersonalisasi, dan menganalisis trafik situs kami. Sesuai dengan <strong>UU PDP</strong> dan <strong>GDPR</strong>, Anda memiliki kendali penuh atas data yang dikumpulkan.
              </p>

              {/* Necessary */}
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 opacity-75">
                 <div className="mt-1"><Shield className="w-5 h-5 text-green-600" /></div>
                 <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                       <h4 className="font-bold text-slate-900 dark:text-white text-sm">Strictly Necessary</h4>
                       <span className="text-[10px] font-bold text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded border border-green-200 dark:border-green-800">REQUIRED</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Wajib untuk fungsi dasar situs seperti keamanan, manajemen sesi login, dan preferensi bahasa. Tidak dapat dimatikan.</p>
                 </div>
                 <div>
                    <input type="checkbox" checked disabled className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800" />
                 </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-900 transition-colors">
                 <div className="mt-1"><Cookie className="w-5 h-5 text-blue-600" /></div>
                 <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                       <h4 className="font-bold text-slate-900 dark:text-white text-sm">Analytics & Performance</h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Membantu kami memahami bagaimana pengunjung berinteraksi dengan situs web (misal: halaman populer, waktu kunjungan). Data dikumpulkan secara anonim.</p>
                 </div>
                 <div>
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics} 
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                      className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 cursor-pointer border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" 
                    />
                 </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-900 transition-colors">
                 <div className="mt-1"><Cookie className="w-5 h-5 text-amber-600" /></div>
                 <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                       <h4 className="font-bold text-slate-900 dark:text-white text-sm">Marketing & Targeting</h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Digunakan untuk menampilkan iklan yang relevan bagi Anda di platform lain dan mengukur efektivitas kampanye.</p>
                 </div>
                 <div>
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing} 
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                      className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 cursor-pointer border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" 
                    />
                 </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 bg-slate-50 dark:bg-slate-900/50 rounded-b-2xl">
               <Button variant="ghost" onClick={() => setShowSettings(false)}>Batal</Button>
               <Button onClick={() => saveConsent(preferences)} className="shadow-lg">Simpan Preferensi</Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Banner */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[90] animate-fade-in-up">
          <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4 ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-4">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-600">
                     <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Privasi & Data</h3>
               </div>
               <button onClick={() => setShowBanner(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                  <X className="w-5 h-5" />
               </button>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
               BizOps menghormati privasi Anda. Kami menggunakan cookies untuk keamanan dan analisis. Anda dapat mengatur preferensi Anda sesuai <strong>UU PDP</strong>.
            </p>

            <div className="flex flex-col gap-2">
               <Button size="sm" fullWidth onClick={handleAcceptAll} className="shadow-md">Terima Semua</Button>
               <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={() => setShowSettings(true)} className="text-xs">Atur</Button>
                  <Button variant="ghost" size="sm" onClick={handleRejectAll} className="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Tolak</Button>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;