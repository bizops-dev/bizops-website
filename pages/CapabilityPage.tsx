
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { capabilitiesData } from '../data/content';
import Button from '../components/Button';
import { Check, Server, Smartphone, Share2, MessageSquare, Layers, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Typography from '../components/Typography';

const CapabilityPage: React.FC = () => {
  const { capabilityId } = useParams<{ capabilityId: string }>();
  const data = capabilityId ? capabilitiesData[capabilityId] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="Page Not Found" />
        <Typography variant="h1" as="h1">Capability Not Found</Typography>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="flex flex-col">
      <SEO title={`${data.title} | BizOps Technical Specs`} description={data.description} />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex p-4 bg-slate-800 rounded-2xl mb-6 shadow-lg border border-slate-700">
               <Icon className="w-10 h-10 text-primary-400" />
            </div>
            <Typography variant="h1" as="h1" className="font-bold leading-tight">{data.subtitle}</Typography>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">{data.description}</p>
            <Link to="/demo">
               <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Download Technical Sheet</Button>
            </Link>
         </div>
      </section>

      {/* Technical Features */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Typography variant="h2" as="h2">Technical Specifications</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {data.features.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-6 p-8 border border-slate-200 rounded-2xl bg-white hover:border-primary-200 hover:shadow-lg transition-all">
                     <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center border border-primary-100">
                           <Check className="w-6 h-6" />
                        </div>
                     </div>
                     <div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900">{item.title}</Typography>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Extra Section (e.g. Sizing Guide Table) */}
      {data.extraSection && (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Typography variant="h2" as="h2" className="font-bold text-slate-900 leading-tight">{data.extraSection.title}</Typography>
              
              {data.extraSection.type === 'table' && (
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead className="bg-slate-900 text-white">
                             <tr>
                                {data.extraSection.headers.map((h: string, i: number) => (
                                   <th key={i} className="px-6 py-4 font-bold text-sm uppercase tracking-wider">{h}</th>
                                ))}
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                             {data.extraSection.rows.map((row: string[], i: number) => (
                                <tr key={i} className="hover:bg-slate-50">
                                   {row.map((cell, j) => (
                                      <td key={j} className="px-6 py-4 text-slate-700 whitespace-nowrap">{cell}</td>
                                   ))}
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              )}
           </div>
        </section>
      )}

      {/* Specific CTA */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <Typography variant="h2" as="h2">Need Deeper Technical Review?</Typography>
            <p className="text-slate-600 mb-8">
               Jadwalkan sesi deep-dive dengan Solution Architect kami untuk membahas topologi dan integrasi spesifik di perusahaan Anda.
            </p>
            <Link to="/contact">
               <Button variant="outline" size="lg">Hubungi Tim Engineering <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default CapabilityPage;
