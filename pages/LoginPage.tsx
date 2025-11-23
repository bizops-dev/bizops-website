
import React from 'react';
import Button from '../components/Button';
import { Cloud, Server, Users } from 'lucide-react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Login Portal Gateway</h1>
        <p className="text-slate-600">Pilih tipe akun Anda untuk melanjutkan ke workspace yang sesuai.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        
        {/* Cloud Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-center">
           <div className="w-16 h-16 bg-blue-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8" aria-hidden="true" />
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2">BizOps Cloud</h3>
           <p className="text-sm text-slate-500 mb-6">Untuk pengguna paket Business & Growth (SaaS).</p>
           <div className="space-y-4">
              <label htmlFor="cloud-domain" className="sr-only">Company Domain</label>
              <input id="cloud-domain" type="text" placeholder="your-company.bizops.id" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-primary-500 outline-none" />
              <Button fullWidth>Lanjut ke Workspace</Button>
           </div>
        </div>

        {/* Partner Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-center">
           <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" aria-hidden="true" />
           </div>
           <h3 className="text-xl font-bold text-slate-900 mb-2">Partner Console</h3>
           <p className="text-sm text-slate-500 mb-6">Untuk Konsultan, Reseller, dan Admin Whitelabel.</p>
           <Button fullWidth variant="outline">Masuk Partner Portal</Button>
        </div>

        {/* Enterprise Card */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 hover:shadow-xl transition-shadow text-center text-white">
           <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Server className="w-8 h-8" aria-hidden="true" />
           </div>
           <h3 className="text-xl font-bold mb-2">Enterprise Self-Hosted</h3>
           <p className="text-sm text-slate-400 mb-6">Akses melalui jaringan internal private cloud Anda.</p>
           <div className="bg-slate-800 p-4 rounded-lg text-xs text-slate-400 break-all">
              https://erp.your-intranet.com
           </div>
           <p className="text-xs text-slate-500 mt-4">Lupa URL? Hubungi IT Admin perusahaan Anda.</p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
