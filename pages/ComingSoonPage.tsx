import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-950">
      <SEO title="Coming Soon" />
      
      <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-8">
        <Construction className="w-12 h-12 text-primary-600 dark:text-primary-400" />
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Sedang Dalam Pengembangan
      </h1>
      
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
        Halaman yang Anda tuju sedang disiapkan oleh tim kami. 
        Kami sedang menyusun konten terbaik untuk membantu transformasi bisnis Anda.
      </p>
      
      <div className="flex gap-4">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Button>
        </Link>
        <Link to="/contact">
          <Button>Hubungi Kami</Button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonPage;

