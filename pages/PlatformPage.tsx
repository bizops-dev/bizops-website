
import React from 'react';
import { Check, Users, DollarSign, Briefcase, TrendingUp, Package, BarChart, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import CardSlider from '../components/CardSlider';
import SEO from '../components/SEO';

const PlatformPage: React.FC = () => {
  const modules = [
    {
      id: 'hr',
      icon: Users,
      color: 'blue',
      title: 'Human Capital (HCM)',
      desc: 'Dari onboarding digital via Academy (LMS) hingga perhitungan PPh 21 yang kompleks. Smart Attendance menggunakan Geo-fencing & Face Recognition.',
      features: ['Payroll Otomatis', 'Employee Self-Service']
    },
    {
      id: 'finance',
      icon: DollarSign,
      color: 'green',
      title: 'Finance & Procurement',
      desc: 'Mengintegrasikan Purchase Request (PR) dari lapangan langsung ke meja persetujuan Finance. Laporan Neraca dan Laba Rugi terbentuk otomatis.',
      features: ['Multi-level Approval', 'Real-time Accounting']
    },
    {
      id: 'operations',
      icon: Briefcase,
      color: 'purple',
      title: 'Operations & Projects',
      desc: 'Memantau kurva-S proyek secara real-time. Daily Field Report memungkinkan pelaporan kendala lapangan langsung dari HP.',
      features: ['Project Costing', 'Timesheet Geo-tagging']
    },
    {
      id: 'sales',
      icon: TrendingUp,
      color: 'amber',
      title: 'Commercial & Growth',
      desc: 'CRM mobile-first. Salesman dapat membuat Quotation resmi di hadapan klien, cek stok real-time, dan konversi menjadi Sales Order.',
      features: ['Mobile CRM', 'Instant Quotation']
    },
    {
      id: 'supply-chain',
      icon: Package,
      color: 'red',
      title: 'Supply Chain',
      desc: 'Kelola inventaris di multi-gudang. Fitur Asset Tracking dengan QR Code memudahkan audit aset fisik dan melacak riwayat pemeliharaannya.',
      features: ['QR Stock Opname', 'Multi-Warehouse']
    },
    {
      id: 'governance',
      icon: BarChart,
      color: 'slate',
      title: 'Governance & Insight',
      desc: 'Immutable Audit Trail mencatat setiap perubahan data. Dashboard BI menyajikan data mentah menjadi wawasan visual untuk C-Level.',
      features: ['Audit Logs Forensik', 'BI Dashboard']
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    amber: 'bg-amber-50 text-amber-600',
    red: 'bg-red-50 text-red-600',
    slate: 'bg-slate-100 text-slate-600'
  };

  // JSON-LD Structured Data for Platform Suite
  const platformSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BizOps Enterprise Suite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud, Web, Android, iOS",
    "description": "Satu platform ERP yang dirancang untuk menskalakan bisnis dari 50 hingga 5.000+ karyawan. Menghubungkan HR, Finance, dan Ops.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "540"
    },
    "offers": {
      "@type": "Offer",
      "price": "2500000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PT Divistant Teknologi Indonesia"
    }
  };

  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <SEO 
        title="BizOps Platform | Modul Lengkap ERP Terintegrasi" 
        description="Eksplorasi modul lengkap BizOps: HRIS, Akuntansi, CRM, Inventory, dan Project Management dalam satu platform terintegrasi." 
        structuredData={platformSchema}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Satu Platform, Kendali Penuh.
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
          Dirancang untuk menskalakan bisnis dari 50 hingga 5.000+ karyawan. Kami menghubungkan titik-titik operasional yang terpisah menjadi satu garis lurus efisiensi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link to="/demo">
              <Button size="lg" className="shadow-lg">Lihat Demo Platform</Button>
           </Link>
           <Link to="/docs">
              <Button variant="outline" size="lg">Baca Dokumentasi</Button>
           </Link>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CardSlider desktopClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <Link 
              key={mod.id} 
              to={`/platform/${mod.id}`}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group block h-full"
            >
              <div className="flex flex-col h-full">
                <div className={`w-14 h-14 ${colorMap[mod.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <mod.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors flex items-center justify-between">
                  {mod.title}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  {mod.desc}
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mt-auto">
                   {mod.features.map(f => (
                      <li key={f} className="flex gap-2 items-center">
                         <Check className="w-4 h-4 text-green-500" /> {f}
                      </li>
                   ))}
                </ul>
              </div>
            </Link>
          ))}
        </CardSlider>
      </section>

      {/* Tech Architecture */}
      <section className="mt-24 py-16 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 leading-tight">Arsitektur Terbuka yang Siap Tumbuh</h2>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-inner border border-slate-200 inline-block">
               <div className="flex flex-col md:flex-row items-center gap-8 justify-center text-slate-800">
                  <div className="p-4 bg-white shadow-sm border border-slate-200 rounded-lg text-sm font-semibold flex flex-col gap-1">
                    <span className="text-slate-500 text-xs uppercase">Database</span>
                    PostgreSQL
                  </div>
                  <div className="hidden md:block h-px w-12 bg-slate-300"></div>
                  <div className="p-4 bg-primary-50 border border-primary-200 shadow-sm rounded-lg text-sm font-semibold text-primary-700 flex flex-col gap-1">
                    <span className="text-primary-400 text-xs uppercase">Backend</span>
                    BizOps Core Engine
                  </div>
                  <div className="hidden md:block h-px w-12 bg-slate-300"></div>
                   <div className="flex flex-col gap-2">
                      <div className="p-2 bg-white border border-slate-200 shadow-sm rounded text-xs font-medium">Mobile App (Flutter)</div>
                      <div className="p-2 bg-white border border-slate-200 shadow-sm rounded text-xs font-medium">Web Dashboard (React)</div>
                      <div className="p-2 bg-white border border-slate-200 shadow-sm rounded text-xs font-medium">REST API</div>
                   </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default PlatformPage;
