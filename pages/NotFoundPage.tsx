
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Home, FileText, HelpCircle, LogIn } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white relative overflow-hidden">
      <SEO title="404 Not Found" description="Halaman tidak ditemukan." />
      
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-slate-900 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
         <div className="text-[12rem] font-black text-slate-50 leading-none select-none">404</div>
         <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto -mt-20 mb-8 relative border-4 border-white shadow-xl">
            <span className="text-4xl">😵‍💫</span>
         </div>
         
         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Oops! Halaman Ini Sedang "Cuti Di Luar Tanggungan".
         </h1>
         <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Seperti karyawan yang butuh istirahat sejenak, halaman yang Anda cari sepertinya sedang tidak ada di tempat, telah dipindahkan, atau tautannya sudah kadaluarsa. Tapi jangan khawatir, data operasional Anda tetap aman.
         </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
               <Button size="lg" className="shadow-lg">Kembali ke Dashboard Utama</Button>
            </Link>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <Link to="/platform" className="p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition-all group">
               <Home className="w-5 h-5 text-slate-400 mb-2 group-hover:text-primary-600" />
               <div className="font-bold text-slate-900 text-sm">Produk</div>
               <div className="text-xs text-slate-500">Lihat solusi kami</div>
            </Link>
            <Link to="/blog" className="p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition-all group">
               <FileText className="w-5 h-5 text-slate-400 mb-2 group-hover:text-primary-600" />
               <div className="font-bold text-slate-900 text-sm">Blog</div>
               <div className="text-xs text-slate-500">Baca wawasan</div>
            </Link>
            <Link to="/contact" className="p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition-all group">
               <HelpCircle className="w-5 h-5 text-slate-400 mb-2 group-hover:text-primary-600" />
               <div className="font-bold text-slate-900 text-sm">Support</div>
               <div className="text-xs text-slate-500">Hubungi bantuan</div>
            </Link>
            <Link to="/login" className="p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition-all group">
               <LogIn className="w-5 h-5 text-slate-400 mb-2 group-hover:text-primary-600" />
               <div className="font-bold text-slate-900 text-sm">Login</div>
               <div className="text-xs text-slate-500">Masuk akun</div>
            </Link>
         </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
