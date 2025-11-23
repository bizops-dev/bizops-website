
import React from 'react';
import { Eye, Keyboard, Type, MousePointer } from 'lucide-react';
import SEO from '../components/SEO';

const AccessibilityPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="Accessibility Statement" description="Komitmen BizOps terhadap inklusivitas digital dan WCAG 2.1." />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-slate-900 mb-6">Teknologi untuk Semua Orang, Tanpa Kecuali.</h1>
           <p className="text-xl text-slate-600 leading-relaxed">
              Kami percaya bahwa produktivitas adalah hak asasi setiap pekerja. BizOps berkomitmen memenuhi standar WCAG 2.1 Level AA.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                 <Eye className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 mb-2">Screen Reader Friendly</h3>
                 <p className="text-sm text-slate-600">Struktur HTML semantik dengan ARIA labels yang optimal untuk NVDA, JAWS, dan VoiceOver.</p>
              </div>
           </div>
           
           <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                 <Keyboard className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 mb-2">Keyboard Navigation</h3>
                 <p className="text-sm text-slate-600">Seluruh fungsi aplikasi dapat dioperasikan tanpa mouse (Tab, Enter, Esc).</p>
              </div>
           </div>

           <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                 <Type className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 mb-2">Dynamic Type & Contrast</h3>
                 <p className="text-sm text-slate-600">Mendukung mode Kontras Tinggi dan ukuran font yang mengikuti pengaturan OS.</p>
              </div>
           </div>

           <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                 <MousePointer className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 mb-2">Clear Focus Indicator</h3>
                 <p className="text-sm text-slate-600">Penanda visual tebal pada elemen yang sedang aktif/dipilih.</p>
              </div>
           </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 text-center">
           <h3 className="font-bold text-primary-900 mb-2">Temukan Masalah Aksesibilitas?</h3>
           <p className="text-sm text-primary-800 mb-4">
              Laporkan hambatan yang Anda temui agar kami bisa memperbaikinya di rilis berikutnya.
           </p>
           <a href="mailto:a11y@bizops.id" className="text-primary-700 font-bold hover:underline">a11y@bizops.id</a>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
