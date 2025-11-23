
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/content';
import Button from '../components/Button';
import { ArrowRight, Briefcase, Headphones, Wrench, Code, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  const services = Object.entries(servicesData).map(([key, val]) => ({ id: key, ...(val as any) }));

  return (
    <div className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO title="Professional Services" description="Implementation, Custom Development, Training, and Support services to ensure your ERP success." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
           <div className="inline-flex items-center justify-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl mb-6 text-primary-600 dark:text-primary-400">
              <Briefcase className="w-8 h-8" />
           </div>
           <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Pastikan Kesuksesan Implementasi ERP Anda.</h1>
           <p className="text-xl text-slate-600 dark:text-slate-400">
              Kami tidak sekadar menjual lisensi lalu menghilang. Tim ahli kami mendampingi setiap tahap transformasi digital untuk memastikan sistem benar-benar diadopsi dan memberi hasil.
           </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           {services.map((service) => (
              <div key={service.id} className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group flex flex-col">
                 <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                       <service.icon className="w-8 h-8" />
                    </div>
                    <Link to={`/services/${service.id}`}>
                       <div className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-slate-400 hover:text-primary-600 transition-colors">
                          <ArrowRight className="w-5 h-5" />
                       </div>
                    </Link>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                    {service.description}
                 </p>

                 <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What We Do</h4>
                    <ul className="space-y-3">
                       {service.methodology.slice(0, 3).map((item: any, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></div>
                             {item.title}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
           ))}
        </div>

        {/* CTA */}
        <div className="bg-primary-600 rounded-3xl p-12 text-center text-white">
           <h2 className="text-3xl font-bold mb-4">Butuh Paket Layanan Kustom?</h2>
           <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Setiap perusahaan memiliki tantangan unik. Mari diskusikan strategi implementasi yang paling sesuai dengan anggaran dan lini masa Anda.
           </p>
           <Link to="/contact">
              <Button className="bg-white text-primary-700 hover:bg-primary-50 border-none font-bold">
                 Hubungi Ahli Kami
              </Button>
           </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
