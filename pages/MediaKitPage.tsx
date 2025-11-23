
import React from 'react';
import Button from '../components/Button';
import { Copy, Check, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const MediaKitPage: React.FC = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const boilerplate = {
    short: "BizOps adalah Business Operating System end-to-end yang membantu perusahaan Indonesia mendigitalisasi operasional dari hulu ke hilir. Menggabungkan kekuatan teknologi Enterprise berbasis Open Source dengan kepatuhan regulasi lokal, BizOps menawarkan solusi yang fleksibel, aman, dan berdaulat data di bawah naungan PT Divistant Teknologi Indonesia.",
    standard: "BizOps, dikembangkan oleh PT Divistant Teknologi Indonesia, adalah platform 'Business Operating System' yang dirancang untuk menjembatani kesenjangan antara software akuntansi lokal yang sederhana dan ERP global yang kompleks. Dengan filosofi 'Mobile-First' dan 'Data Sovereignty', BizOps menyediakan solusi terintegrasi untuk HR, Keuangan, Operasional Proyek, dan Rantai Pasok dalam satu ekosistem. BizOps memberdayakan perusahaan Indonesia untuk memiliki kendali penuh atas data mereka melalui opsi Self-Hosted, sambil tetap menikmati kemudahan penggunaan aplikasi mobile modern."
  };

  return (
    <div className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO title="Brand Assets, Logo & Press Resources | BizOps Media Kit" description="Unduh aset resmi BizOps. Logo High-Res, Panduan Brand, dan Boilerplate perusahaan." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Ceritakan Kisah Kami dengan Benar.</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Kami menyediakan aset resmi, panduan merek, dan informasi perusahaan yang terkurasi untuk memudahkan rekan media, partner strategis, dan event organizer dalam mempublikasikan tentang BizOps secara akurat dan konsisten.
          </p>
        </div>

        {/* Logos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Brand Assets (Logo Pack)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Primary Logo */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 flex flex-col items-center">
              <div className="flex-grow flex items-center justify-center w-full mb-8 min-h-[120px]">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-white rounded-sm transform rotate-45"></div>
                    </div>
                    <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        BizOps
                    </span>
                </div>
              </div>
              <div className="w-full text-center mb-4">
                 <p className="text-xs text-slate-500 dark:text-slate-400 italic">Usage: Opsi utama untuk dokumen resmi & header website.</p>
              </div>
              <div className="w-full flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-6">
                <span className="text-sm font-bold text-slate-900 dark:text-white">Logo Utama (Primary)</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8 text-xs">SVG</Button>
                  <Button size="sm" variant="outline" className="h-8 text-xs">PNG</Button>
                </div>
              </div>
            </div>

            {/* Dark Mode Logo (Inverse) */}
            <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-900 flex flex-col items-center">
               <div className="flex-grow flex items-center justify-center w-full mb-8 min-h-[120px]">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-slate-900 rounded-sm transform rotate-45"></div>
                    </div>
                    <span className="text-3xl font-bold tracking-tight text-white">
                        BizOps
                    </span>
                </div>
              </div>
              <div className="w-full text-center mb-4">
                 <p className="text-xs text-slate-400 italic">Usage: Untuk background gelap atau overlay foto/video.</p>
              </div>
              <div className="w-full flex justify-between items-center border-t border-slate-700 pt-6">
                <span className="text-sm font-bold text-white">Logo Monokrom (White)</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="white" className="h-8 text-xs">SVG</Button>
                  <Button size="sm" variant="white" className="h-8 text-xs">PNG</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
             <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Brand Guidelines (PDF)</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
                   Panduan komprehensif mengenai penggunaan logo (Do's and Don'ts), kode warna HEX/RGB/CMYK untuk konsistensi digital dan cetak, serta hierarki tipografi resmi.
                </p>
             </div>
             <Button variant="primary" className="shrink-0">Download Brand Book PDF</Button>
          </div>
        </div>

        {/* Company Boilerplate */}
        <div className="mb-16">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Company Boilerplate</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                       <FileText className="w-5 h-5 text-primary-600" /> Short Bio (50 Words)
                    </h3>
                    <button onClick={() => copyToClipboard(boilerplate.short, 'short')} className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1">
                       {copied === 'short' ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
                    </button>
                 </div>
                 <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 text-sm leading-relaxed border border-slate-100 dark:border-slate-700">
                    "{boilerplate.short}"
                 </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                       <FileText className="w-5 h-5 text-primary-600" /> Standard Bio (100 Words)
                    </h3>
                    <button onClick={() => copyToClipboard(boilerplate.standard, 'standard')} className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1">
                       {copied === 'standard' ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
                    </button>
                 </div>
                 <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 text-sm leading-relaxed border border-slate-100 dark:border-slate-700">
                    "{boilerplate.standard}"
                 </div>
              </div>

           </div>
        </div>

        {/* Colors */}
        <div className="mb-16">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Brand Colors</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="space-y-3">
                 <div className="h-24 bg-primary-600 rounded-xl shadow-sm"></div>
                 <div className="flex justify-between items-center">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white text-sm">Primary Blue</div>
                       <div className="text-xs text-slate-500 font-mono">#2563EB</div>
                    </div>
                    <button onClick={() => copyToClipboard('#2563EB', 'c1')} className="text-slate-400 hover:text-primary-600">
                       {copied === 'c1' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                 </div>
              </div>

              <div className="space-y-3">
                 <div className="h-24 bg-slate-900 rounded-xl shadow-sm"></div>
                 <div className="flex justify-between items-center">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white text-sm">Deep Slate</div>
                       <div className="text-xs text-slate-500 font-mono">#0F172A</div>
                    </div>
                    <button onClick={() => copyToClipboard('#0F172A', 'c2')} className="text-slate-400 hover:text-primary-600">
                       {copied === 'c2' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                 </div>
              </div>

              <div className="space-y-3">
                 <div className="h-24 bg-green-500 rounded-xl shadow-sm"></div>
                 <div className="flex justify-between items-center">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white text-sm">Success Green</div>
                       <div className="text-xs text-slate-500 font-mono">#22C55E</div>
                    </div>
                    <button onClick={() => copyToClipboard('#22C55E', 'c3')} className="text-slate-400 hover:text-primary-600">
                       {copied === 'c3' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                 </div>
              </div>

              <div className="space-y-3">
                 <div className="h-24 bg-amber-500 rounded-xl shadow-sm"></div>
                 <div className="flex justify-between items-center">
                    <div>
                       <div className="font-bold text-slate-900 dark:text-white text-sm">Accent Amber</div>
                       <div className="text-xs text-slate-500 font-mono">#F59E0B</div>
                    </div>
                    <button onClick={() => copyToClipboard('#F59E0B', 'c4')} className="text-slate-400 hover:text-primary-600">
                       {copied === 'c4' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};

export default MediaKitPage;
