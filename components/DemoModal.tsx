import React, { useState } from 'react';
import { X, Send, CheckCircle, Calendar, MessageSquare, Video, Shield, Users, Building2 } from 'lucide-react';
import Button from './Button';
import { Input, Select, TextArea } from './Form';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage'; // Imported OptimizedImage

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
    const email = (form.elements.namedItem('modalEmail') as HTMLInputElement).value;
    const phoneInput = (form.elements.namedItem('modalPhone') as HTMLInputElement).value;
    const company = (form.elements.namedItem('modalCompany') as HTMLInputElement).value;
    const employees = (form.elements.namedItem('modalEmployees') as HTMLSelectElement).value;
    const jobTitle = (form.elements.namedItem('modalJobTitle') as HTMLInputElement).value;
    const interest = (form.elements.namedItem('modalInterest') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('modalMessage') as HTMLTextAreaElement).value;

    const salesPhone = "622139702834"; // Sales Number
    
    // Construct a professional WhatsApp message
    const text = `*New Demo Request*\n\n` +
      `Halo Tim BizOps, saya ingin menjadwalkan demo produk.\n\n` +
      `*Detail Kontak:*\n` +
      `Nama: ${name}\n` +
      `Jabatan: ${jobTitle}\n` +
      `Perusahaan: ${company}\n` +
      `Email: ${email}\n` +
      `No HP: ${phoneInput}\n\n` +
      `*Profil Bisnis:*\n` +
      `Ukuran: ${employees} karyawan\n` +
      `Minat: ${interest}\n\n` +
      `*Catatan:*\n${message || '-'}\n\n` +
      `Mohon info ketersediaan jadwal. Terima kasih.`;

    const url = `https://wa.me/${salesPhone}?text=${encodeURIComponent(text)}`;

    // Simulate API call/Tracking then redirect
    setTimeout(() => {
      window.open(url, '_blank');
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white dark:bg-slate-950 rounded-2xl shadow-2xl w-full max-w-4xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[800px]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 bg-white/50 dark:bg-black/20 rounded-full z-10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT: INFO SIDEBAR */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:w-4/12 flex flex-col justify-between border-r border-slate-100 dark:border-slate-800 overflow-y-auto hidden md:flex">
               <div>
                  <div className="mb-8">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                        <Video className="w-3 h-3" /> Live Session
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
                        Experience the Future of ERP
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Lihat bagaimana BizOps dapat mengotomatisasi proses bisnis Anda dalam sesi demo privat.
                      </p>
                  </div>
                  
                  <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-green-500 ring-1 ring-slate-100 dark:ring-slate-700">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Tailored Walkthrough</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Demo disesuaikan dengan alur kerja spesifik industri Anda, bukan sekadar overview umum.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-blue-500 ring-1 ring-slate-100 dark:ring-slate-700">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Expert Consultation</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Diskusi teknis langsung dengan Solution Architect senior kami.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-purple-500 ring-1 ring-slate-100 dark:ring-slate-700">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">No Commitment</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Eksplorasi fitur tanpa tekanan. Kami fokus pada solusi, bukan hard-selling.</p>
                        </div>
                      </div>
                  </div>
               </div>

               <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex -space-x-3 mb-3">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-slate-900 bg-slate-200">
                           <OptimizedImage 
                              src={`https://i.pravatar.cc/100?img=${i+10}`} 
                              alt="User" 
                              className="w-full h-full rounded-full" 
                              width={32}
                              height={32}
                           />
                        </div>
                     ))}
                     <div className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
                        +2k
                     </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                     Bergabung dengan 2,000+ perusahaan yang telah modernisasi bisnis mereka.
                  </p>
               </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="p-6 md:p-8 md:w-8/12 bg-white dark:bg-slate-950 overflow-y-auto">
              <div className="mb-6">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white">Book Your Demo Slot</h3>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">Isi detail di bawah untuk terhubung langsung via WhatsApp.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <Input 
                     id="modalName" 
                     name="modalName" 
                     required 
                     label="Full Name" 
                     placeholder="John Doe" 
                     className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                   />
                   <Input 
                     id="modalJobTitle" 
                     name="modalJobTitle" 
                     required 
                     label="Job Title" 
                     placeholder="Ex: CEO, HR Manager" 
                     className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                   />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <Input 
                     id="modalEmail" 
                     name="modalEmail" 
                     type="email"
                     required 
                     label="Work Email" 
                     placeholder="name@company.com" 
                     className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                   />
                   <Input 
                     id="modalPhone" 
                     name="modalPhone" 
                     type="tel"
                     required 
                     label="Phone / WhatsApp" 
                     placeholder="+62 812..." 
                     className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                   />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <Input 
                     id="modalCompany" 
                     name="modalCompany" 
                     required 
                     label="Company Name" 
                     placeholder="Acme Corp" 
                     icon={<Building2 className="w-5 h-5" />}
                     className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                   />
                   <Select 
                     id="modalEmployees" 
                     name="modalEmployees"
                     label="Company Size"
                     required
                     icon={<Users className="w-5 h-5" />}
                     className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                     options={[
                       { value: "1-10", label: "1 - 10 Employees" },
                       { value: "11-50", label: "11 - 50 Employees" },
                       { value: "51-200", label: "51 - 200 Employees" },
                       { value: "201-500", label: "201 - 500 Employees" },
                       { value: "501-1000", label: "501 - 1000 Employees" },
                       { value: "1000+", label: "1000+ Employees" }
                     ]}
                   />
                </div>

                <Select 
                  id="modalInterest" 
                  name="modalInterest"
                  label="I am interested in..."
                  required
                  className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  options={[
                    { value: "General Overview", label: "General Platform Overview" },
                    { value: "HR & Payroll", label: "HR & Payroll Module" },
                    { value: "Finance & Accounting", label: "Finance & Accounting" },
                    { value: "Supply Chain", label: "Supply Chain & Operations" },
                    { value: "CRM & Sales", label: "CRM & Sales Pipeline" },
                    { value: "Custom Solution", label: "Custom Solution Discussion" }
                  ]}
                />

                <TextArea 
                   id="modalMessage" 
                   name="modalMessage"
                   label="Additional Requirements (Optional)"
                   placeholder="Ceritakan sedikit tentang tantangan bisnis Anda saat ini..."
                   rows={2}
                   className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 resize-none"
                />

                <div className="pt-2">
                   <Button fullWidth size="lg" type="submit" disabled={isLoading} className="shadow-lg shadow-green-500/20 bg-green-600 hover:bg-green-700 border-none text-white h-12 text-base">
                     {isLoading ? 'Redirecting...' : <span className="flex items-center gap-2"><Send className="w-5 h-5" /> Request Demo via WhatsApp</span>}
                   </Button>
                   <p className="text-[10px] text-center text-slate-400 mt-3">
                     Data Anda aman dan diproses sesuai Kebijakan Privasi BizOps.
                   </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
