
import React from 'react';
import { securityReportData } from '../data/content';
import { Shield, Lock, AlertTriangle, CheckCircle, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const SecurityReportPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="Report Vulnerability (VDP)" description="Laporkan celah keamanan BizOps secara bertanggung jawab." />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
              <Shield className="w-8 h-8" />
           </div>
           <h1 className="text-4xl font-bold text-slate-900 mb-4">Bantu Kami Menjaga BizOps Tetap Aman</h1>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kami menghargai kontribusi komunitas peneliti keamanan (security researchers) yang bertindak dengan itikad baik (Responsible Disclosure).
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> In Scope (Target Sah)</h3>
              <ul className="space-y-2">
                 {securityReportData.scope.in.map((item, idx) => (
                    <li key={idx} className="text-sm text-green-700 list-disc list-inside">{item}</li>
                 ))}
              </ul>
           </div>
           <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Out of Scope (Dilarang)</h3>
              <ul className="space-y-2">
                 {securityReportData.scope.out.map((item, idx) => (
                    <li key={idx} className="text-sm text-red-700 list-disc list-inside">{item}</li>
                 ))}
              </ul>
           </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
           <div className="bg-slate-900 text-white p-8">
              <h2 className="text-2xl font-bold flex items-center gap-3"><Lock className="w-6 h-6 text-amber-400" /> Secure Reporting Form</h2>
              <p className="text-slate-400 mt-2">Laporan Anda dienkripsi dan dikirim langsung ke tim CISO kami.</p>
           </div>
           <div className="p-8 md:p-12">
              <form className="space-y-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Judul Temuan</label>
                    <input type="text" placeholder="Ex: Stored XSS in Profile Page" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Severity (CVSS Estimation)</label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white">
                       <option>Low</option>
                       <option>Medium</option>
                       <option>High</option>
                       <option>Critical</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Proof of Concept (PoC)</label>
                    <textarea rows={6} placeholder="Jelaskan langkah-langkah reproduksi..." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none font-mono text-sm"></textarea>
                 </div>
                 <div className="flex items-center justify-between pt-4">
                    <p className="text-xs text-slate-500 flex items-center gap-1"><Mail className="w-3 h-3" /> Alternatif: security@bizops.id (PGP Key Available)</p>
                    <Button>Kirim Laporan</Button>
                 </div>
              </form>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SecurityReportPage;
