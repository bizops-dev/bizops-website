import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, History, X } from 'lucide-react';

const SessionTracker: React.FC = () => {
  const location = useLocation();
  const [resumePath, setResumePath] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // 1. Scroll to top on route change
    window.scrollTo(0, 0);

    // 2. Personalization: Save Last Visited Page
    // Ignore utility pages, home, and short visits
    const ignorePaths = ['/', '/login', '/search', '/thank-you', '/404'];
    if (!ignorePaths.includes(location.pathname)) {
      localStorage.setItem('bizops_last_visit', location.pathname);
    }

  }, [location]);

  useEffect(() => {
    // 3. Personalization: Check for Resume Opportunity on Homepage
    let timer: ReturnType<typeof setTimeout>;

    if (location.pathname === '/') {
      const lastVisit = localStorage.getItem('bizops_last_visit');
      if (lastVisit && lastVisit !== '/') {
        setResumePath(lastVisit);
        // Delay toast slightly for better UX
        timer = setTimeout(() => setShowToast(true), 2000);
      }
    } else {
      setShowToast(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [location]);

  if (!showToast || !resumePath) return null;

  return (
    <div className="fixed bottom-32 left-4 md:left-8 md:bottom-24 z-40 animate-fade-in-up max-w-[calc(100vw-2rem)] md:max-w-sm">
      <div className="bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-4 ring-4 ring-white/20 backdrop-blur-sm pr-2">
        <div className="flex items-center gap-2 text-sm">
          <History className="w-4 h-4 text-primary-400" />
          <span>Lanjutkan sesi terakhir Anda?</span>
        </div>
        <div className="flex items-center gap-2">
          <Link 
            to={resumePath} 
            onClick={() => setShowToast(false)}
            className="text-xs font-bold bg-white text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors flex items-center gap-1"
          >
            Lanjut <ArrowRight className="w-3 h-3" />
          </Link>
          <button 
            onClick={() => setShowToast(false)}
            className="p-1 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionTracker;

