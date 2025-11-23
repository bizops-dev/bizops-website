
import React, { useState, useEffect } from 'react';
import { Smile, Meh, Frown, Check } from 'lucide-react';

interface QuickFeedbackProps {
  contextId: string; // Unique ID for the page/section
}

const QuickFeedback: React.FC<QuickFeedbackProps> = ({ contextId }) => {
  const [rating, setRating] = useState<'happy' | 'neutral' | 'sad' | null>(null);
  
  useEffect(() => {
    const saved = localStorage.getItem(`bizops_feedback_${contextId}`);
    if (saved) setRating(saved as any);
  }, [contextId]);

  const handleRate = (value: 'happy' | 'neutral' | 'sad') => {
    setRating(value);
    localStorage.setItem(`bizops_feedback_${contextId}`, value);
    // In a real app, fire analytics event here
  };

  if (rating) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full animate-fade-in-up w-fit mx-auto border border-green-100">
        <Check className="w-4 h-4" /> Terima kasih atas feedback Anda!
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-sm mx-auto">
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Apakah halaman ini membantu?</span>
      <div className="flex gap-4">
        <button 
          onClick={() => handleRate('sad')}
          className="p-2 rounded-full hover:bg-red-100 hover:text-red-600 text-slate-400 transition-colors"
          aria-label="Tidak membantu"
        >
          <Frown className="w-6 h-6" />
        </button>
        <button 
          onClick={() => handleRate('neutral')}
          className="p-2 rounded-full hover:bg-amber-100 hover:text-amber-600 text-slate-400 transition-colors"
          aria-label="Biasa saja"
        >
          <Meh className="w-6 h-6" />
        </button>
        <button 
          onClick={() => handleRate('happy')}
          className="p-2 rounded-full hover:bg-green-100 hover:text-green-600 text-slate-400 transition-colors"
          aria-label="Sangat membantu"
        >
          <Smile className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default QuickFeedback;
