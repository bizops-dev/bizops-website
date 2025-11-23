
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { X, MessageSquare, ThumbsUp } from 'lucide-react';

const NPSModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'rating' | 'comment' | 'thanks'>('rating');
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    // Check if already completed or dismissed recently
    const npsStatus = localStorage.getItem('bizops_nps_status');
    const sessionStart = sessionStorage.getItem('bizops_session_start');

    if (!sessionStart) {
      sessionStorage.setItem('bizops_session_start', Date.now().toString());
    }

    if (npsStatus === 'completed' || npsStatus === 'dismissed') {
      return;
    }

    // Trigger logic: Show after 15 seconds of engagement
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('bizops_nps_status', 'dismissed');
  };

  const handleRate = (score: number) => {
    setRating(score);
    setStep('comment');
    // In a real app, send score to analytics endpoint here
    console.log(`[NPS] Score recorded: ${score}`);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('thanks');
    localStorage.setItem('bizops_nps_status', 'completed');
    
    // Auto close after showing thanks
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[60] animate-fade-in-up max-w-sm w-full">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden ring-1 ring-black/5">
        
        {/* Header with Close */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary-600" /> Feedback
          </h3>
          <button onClick={handleDismiss} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {step === 'rating' && (
            <>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-4 leading-relaxed">
                Seberapa besar kemungkinan Anda merekomendasikan BizOps kepada rekan bisnis Anda?
              </p>
              <div className="grid grid-cols-11 gap-1 mb-4">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleRate(num)}
                    className={`aspect-square rounded flex items-center justify-center text-xs font-bold transition-all
                      ${num <= 6 ? 'hover:bg-red-100 hover:text-red-700 text-slate-500 bg-slate-50 dark:bg-slate-800' : 
                        num <= 8 ? 'hover:bg-amber-100 hover:text-amber-700 text-slate-500 bg-slate-50 dark:bg-slate-800' : 
                        'hover:bg-green-100 hover:text-green-700 text-slate-500 bg-slate-50 dark:bg-slate-800'}
                    `}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                <span>Tidak Mungkin</span>
                <span>Sangat Mungkin</span>
              </div>
            </>
          )}

          {step === 'comment' && (
            <form onSubmit={handleSubmitComment}>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-3">
                Apa alasan utama penilaian Anda?
              </p>
              <textarea 
                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-lg text-sm mb-4 focus:ring-2 focus:ring-primary-500 outline-none bg-white dark:bg-slate-950 text-slate-900 dark:text-white h-24 resize-none"
                placeholder="Ceritakan pengalaman Anda..."
                autoFocus
              ></textarea>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" type="button" onClick={() => setStep('rating')}>Back</Button>
                <Button size="sm" type="submit">Kirim Feedback</Button>
              </div>
            </form>
          )}

          {step === 'thanks' && (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Terima Kasih!</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">Masukan Anda membantu kami berkembang.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NPSModal;
