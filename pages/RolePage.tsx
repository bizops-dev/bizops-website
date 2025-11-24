
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { rolesData } from '../data/content';
import Button from '../components/Button';
import { Activity, ArrowRight, TrendingUp, AlertTriangle, CheckCircle, BarChart2 } from 'lucide-react';
import SEO from '../components/SEO';

const RolePage: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const data = roleId ? rolesData[roleId] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="Role Not Found" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Role Not Found</h1>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="flex flex-col">
      <SEO title={data.metaTitle} description={data.metaDesc} />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex p-3 bg-slate-800 rounded-2xl mb-6 animate-fade-in-up">
              <Icon className="w-8 h-8 text-primary-400" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">{data.heroHeadline}</h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">{data.heroSub}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/demo">
               <Button size="lg" className="bg-primary-600 text-white border-none hover:bg-primary-700 shadow-lg shadow-primary-500/30">
                 {data.cta?.btn || "Jadwalkan Demo"}
               </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-xl overflow-hidden relative">
               <div className="text-center mb-12 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium mb-4 shadow-sm">
                     <BarChart2 className="w-4 h-4" />
                     {data.title} Dashboard Preview
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 max-w-2xl mx-auto leading-tight">
                    "{data.dashboardInsight}"
                  </h2>
                  
                  {/* Dashboard Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {data.dashboardFeatures.map((feat: string, idx: number) => (
                        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center h-24 text-center">
                            <Activity className="w-6 h-6 text-primary-600 mb-2 opacity-80" />
                            <span className="font-semibold text-slate-800 text-sm leading-tight">{feat}</span>
                        </div>
                      ))}
                  </div>
               </div>
               
               {/* Abstract UI Representation */}
               <div className="mt-12 bg-white rounded-t-xl border-t border-x border-slate-200 shadow-2xl max-w-5xl mx-auto h-[400px] relative overflow-hidden group">
                  <div className="absolute top-0 w-full h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-8 grid grid-cols-3 gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="col-span-2 space-y-4">
                        <div className="h-40 bg-primary-50 rounded-lg w-full border border-primary-100 relative overflow-hidden">
                           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-100 rounded-b-lg"></div>
                        </div>
                        <div className="h-40 bg-slate-50 rounded-lg w-full border border-slate-100"></div>
                     </div>
                     <div className="col-span-1 space-y-4">
                        <div className="h-20 bg-slate-50 rounded-lg w-full border border-slate-100"></div>
                        <div className="h-20 bg-slate-50 rounded-lg w-full border border-slate-100"></div>
                        <div className="h-40 bg-slate-50 rounded-lg w-full border border-slate-100"></div>
                     </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="bg-slate-900/80 text-white px-6 py-3 rounded-full backdrop-blur-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        Interactive Live Data
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Pain vs Gain Transformation */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16 leading-tight">Why Leaders Choose BizOps</h2>
            
            <div className="space-y-12">
               {data.challenges?.map((item: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-2xl p-0 shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
                     {/* Pain Side */}
                     <div className="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-red-50/10">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="p-2 bg-red-100 rounded-lg">
                              <AlertTriangle className="w-5 h-5 text-red-600" />
                           </div>
                           <span className="text-red-600 font-bold uppercase tracking-wider text-xs">The Pain</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">"{item.pain}"</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                           {item.context}
                        </p>
                     </div>

                     {/* Gain Side */}
                     <div className="md:w-1/2 p-8 md:p-12 bg-green-50/10">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="p-2 bg-green-100 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                           </div>
                           <span className="text-green-600 font-bold uppercase tracking-wider text-xs">The Gain</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.gain}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                           {item.gainDesc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Specific CTA */}
      <section className="py-24 bg-white border-t border-slate-100 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">{data.cta?.head}</h2>
            <Link to="/demo">
               <Button size="lg" className="shadow-xl shadow-primary-200">
                  {data.cta?.btn} <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default RolePage;
