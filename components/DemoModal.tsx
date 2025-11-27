
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import Button from './Button';
import { Input, Select } from './Form';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('modalName') as HTMLInputElement).value;
    const company = (form.elements.namedItem('modalCompany') as HTMLInputElement).value;
    const interest = (form.elements.namedItem('modalInterest') as HTMLSelectElement).value;

    const phone = "622139702834"; // Sales Number
    const text = `Halo BizOps, saya ${name} dari ${company}. Saya tertarik demo tentang ${interest}. Mohon info jadwal available.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setIsLoading(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-800 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Jadwalkan Demo Spesifik Industri</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            Diskusikan kebutuhan unik perusahaan Anda dengan Solution Architect kami. Langsung via WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input id="modalName" name="modalName" required placeholder="Nama Lengkap" />
            <Input id="modalCompany" name="modalCompany" required placeholder="Nama Perusahaan" />
            <Select 
              id="modalInterest" 
              name="modalInterest"
              options={[
                { value: "General Overview", label: "General Overview" },
                { value: "HR & Payroll", label: "HR & Payroll" },
                { value: "Finance & Accounting", label: "Finance & Accounting" },
                { value: "Supply Chain", label: "Supply Chain & Ops" },
                { value: "Whitelabel Partner", label: "Whitelabel Partner" }
              ]}
            />
            <Button fullWidth type="submit" disabled={isLoading} className="flex items-center justify-center gap-2">
              {isLoading ? 'Redirecting...' : <><Send className="w-4 h-4" /> Hubungi Solution Architect</>}
            </Button>
          </form>
          <p className="text-xs text-center text-slate-400 mt-4">
            By submitting, you agree to receive a response via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
