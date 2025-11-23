
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '../data/content';
import Button from '../components/Button';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const IndustryPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const data = industryId ? industriesData[industryId] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="Solution Not Found" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Industry Solution Not Found</h1>
        <p className="text-slate-600 mb-6">The solution you are looking for does not exist or has been moved.</p>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  const Icon = data.icon;

  // JSON-LD Structured Data for Product/Service
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `BizOps for ${data.title}`,
    "description": data.description,
    "brand": {
      "@type": "Brand",
      "name": "BizOps"
    },
    "logo": "https://bizops.id/logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Client"
      },
      "reviewBody": data.caseStudy
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title={data.metaTitle || data.title} 
        description={data.metaDesc || data.description} 
        structuredData={industrySchema}
      />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
              <Icon className="w-8 h-8 text-primary-400" />
            </div>
            <span className="text-primary-400 font-bold tracking-wide uppercase text-sm bg-primary-900/50 px-3 py-1 rounded-full border border-primary-800">Industry Solution</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl leading-tight">{data.subtitle}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">{data.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/demo">
               <Button size="lg" variant="white">Jadwalkan Demo</Button>
            </Link>
            <Link to="/contact">
               <Button variant="outline-white" size="lg">Hubungi Sales</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges (Pain Points) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Industry Challenge</h2>
            <p className="text-lg text-slate-600">Pain points umum yang menghambat pertumbuhan perusahaan {data.title}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.challenges.map((item: any, idx: number) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                <div className="mb-6 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">"{item.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions (Deep Dive Features) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 text-center">
             <h2 className="text-3xl font-bold text-slate-900">The BizOps Solution</h2>
             <p className="text-slate-600 mt-4">Bagaimana kami menyelesaikan masalah tersebut secara sistematis.</p>
           </div>
           
           <div className="space-y-20">
              {data.solutions.map((item: any, idx: number) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                   {/* Text Content */}
                   <div className="flex-1">
                      <div className="inline-flex items-center gap-2 mb-4">
                         <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">0{idx + 1}</div>
                         <div className="h-px w-12 bg-primary-200"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                   </div>
                   
                   {/* Visual Placeholder */}
                   <div className="flex-1 w-full">
                      <div className="bg-white p-2 rounded-3xl shadow-xl border border-slate-200 transform hover:scale-[1.02] transition-transform duration-500">
                          <div className="bg-slate-100 rounded-2xl aspect-[16/10] flex items-center justify-center relative overflow-hidden group">
                              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>
                              <div className="relative z-10 text-center p-8">
                                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto mb-4 flex items-center justify-center text-slate-400">
                                      <Icon className="w-8 h-8" />
                                  </div>
                                  <span className="text-slate-500 font-semibold block mb-2">{item.title}</span>
                                  <span className="text-xs text-slate-400 uppercase tracking-widest">Interface Preview</span>
                              </div>
                              {/* Decorative Lines */}
                              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                          </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Case Scenario (Story) */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4">
            <div className="bg-primary-50 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary-100">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <CheckCircle className="w-32 h-32 text-primary-600" />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                            <CheckCircle className="w-6 h-6 text-primary-600" />
                        </div>
                        <span className="text-primary-800 font-bold uppercase tracking-wide text-sm">Real World Scenario</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-snug">
                        "{data.caseStudyTitle || "Success Story"}"
                    </h2>
                    
                    <div className="prose prose-lg text-slate-700">
                        <p className="italic leading-relaxed">
                           "{data.caseStudy}"
                        </p>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-primary-200 flex flex-col sm:flex-row gap-4">
                        <Link to="/demo">
                           <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white border-none shadow-lg shadow-primary-500/30">
                              Lihat Demo {data.title}
                           </Button>
                        </Link>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default IndustryPage;
