
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { modulesData } from '../data/content';
import Button from '../components/Button';
import { Check, Smartphone, Link as LinkIcon, ArrowRight, ArrowDown } from 'lucide-react';
import SEO from '../components/SEO';

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const data: ModuleData | null = moduleId ? modulesData[moduleId] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="Module Not Found" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Module Not Found</h1>
        <Link to="/platform"><Button>Back to Platform</Button></Link>
      </div>
    );
  }

  const Icon = data.icon;

  // JSON-LD Structured Data for SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `BizOps ${data.title}`,
    "headline": data.subtitle,
    "description": data.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Android, iOS",
    "offering": {
      "@type": "Offer",
      "price": "2500000",
      "priceCurrency": "IDR",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "124"
    },
    "featureList": data.features.map((f) => f.title).join(", "),
    "publisher": {
      "@type": "Organization",
      "name": "PT Divistant Teknologi Indonesia"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title={data.metaTitle || data.title} 
        description={data.metaDesc || data.description} 
        structuredData={softwareSchema}
      />

      {/* 1. Hero Section (Split View) */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full mb-6 text-primary-700 font-medium text-sm">
                   <Icon className="w-4 h-4" />
                   {data.title}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">{data.subtitle}</h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{data.description}</p>
                <div className="flex gap-4">
                   <Link to="/demo">
                      <Button size="lg">{data.cta?.buttonLabel || 'Book Demo'}</Button>
                   </Link>
                </div>
              </div>

              {/* Visual Cue Placeholder */}
              <div className="relative">
                 <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 aspect-[4/3] flex gap-4 items-center justify-center shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    {/* Mock Split View: Mobile Left, Web Right */}
                    <div className="w-1/3 h-[90%] bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 text-xs shadow-xl border-4 border-slate-700">
                       Mobile App
                    </div>
                    <div className="w-2/3 h-full bg-white rounded-xl border border-slate-200 shadow-xl flex items-center justify-center text-slate-400 text-sm">
                       Web Dashboard Admin
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Key Features (Capabilities) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center leading-tight">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="mt-1 flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                   <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                   <p className="text-slate-600 leading-relaxed text-sm">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mobile Advantage */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative">
                  {/* Mockup Placeholder */}
                  <div className="bg-slate-800 rounded-[3rem] p-4 border-8 border-slate-700 max-w-sm mx-auto h-[500px] flex items-center justify-center shadow-2xl">
                     <div className="text-center">
                        <Smartphone className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                        <span className="text-slate-500 font-medium">Native Mobile Interface</span>
                     </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-2 text-primary-400 mb-6">
                     <Smartphone className="w-6 h-6" />
                     <span className="font-bold uppercase tracking-wider text-sm">The Mobile Advantage</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">{data.mobileAdvantage.title}</h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">{data.mobileAdvantage.desc}</p>
                  <Link to="/download">
                     <Button variant="outline" className="border-slate-600 text-white hover:bg-white hover:text-slate-900">Lihat Aplikasi Mobile</Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 4. End-to-End Connection */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-8">
               <div className="p-4 bg-primary-50 rounded-full">
                  <LinkIcon className="w-8 h-8 text-primary-600" />
               </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">The End-to-End Connection</h2>
            <p className="text-lg text-slate-500 mb-12">Bagaimana modul ini berbicara dengan bagian lain bisnis Anda.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {data.connections && data.connections.map((conn, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left relative overflow-hidden group hover:border-primary-200 transition-colors">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ArrowRight className="w-24 h-24 text-primary-600" />
                     </div>
                     <div className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        Connects with {conn.target}
                     </div>
                     <p className="text-slate-700 font-medium leading-relaxed">
                        "{conn.desc}"
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA Bottom */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{data.cta?.text || "Siap mengoptimalkan bisnis Anda?"}</h2>
            <Link to="/demo">
               <Button size="lg" className="shadow-lg shadow-primary-200">{data.cta?.buttonLabel || "Jadwalkan Demo Sekarang"}</Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ModulePage;
