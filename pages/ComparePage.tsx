
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { comparisonsData } from '../data/content';
import Button from '../components/Button';
import { X, Check, XCircle, CheckCircle, ArrowRight, Layers, Smartphone, Server } from 'lucide-react';
import SEO from '../components/SEO';

const ComparePage: React.FC = () => {
  const { competitorId } = useParams<{ competitorId: string }>();
  const data = competitorId ? comparisonsData[competitorId] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="Comparison Not Found" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Comparison Not Found</h1>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <SEO title={data.title} description={data.subtitle} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-slate-600 mb-6 shadow-sm">
            BizOps vs {data.competitorName}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">{data.subtitle}</h1>
          <p className="text-xl text-slate-600">{data.description}</p>
        </div>

        {/* LAYOUT 1: MATRIX (For Odoo) */}
        {data.type === 'matrix' && (
          <>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-16">
              <div className="grid grid-cols-1 md:grid-cols-4 bg-slate-900 text-white font-bold text-lg">
                <div className="p-6 md:col-span-1 hidden md:block">Aspek</div>
                <div className="p-6 text-slate-400 bg-slate-800/50">{data.headers[1]}</div>
                <div className="p-6 text-primary-400 bg-primary-900/20">{data.headers[2]}</div>
                <div className="p-6 text-slate-300 bg-slate-800/50 hidden md:block">{data.headers[3]}</div>
              </div>
              
              <div className="divide-y divide-slate-100">
                {data.rows.map((row: any, idx: number) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-4 p-6 items-center gap-4 hover:bg-slate-50 transition-colors">
                    <div className="font-bold text-slate-900 md:col-span-1">{row.feature}</div>
                    
                    {/* Them */}
                    <div className="text-slate-600 flex items-start gap-3">
                       <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                       <span className="text-sm">{row.them}</span>
                    </div>

                    {/* Us */}
                    <div className="text-slate-900 font-medium flex items-start gap-3 bg-primary-50 rounded-lg p-3">
                       <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                       <span className="text-sm">{row.us}</span>
                    </div>

                    {/* Impact */}
                    <div className="text-slate-500 text-sm italic border-l-2 border-slate-200 pl-4 md:border-none md:pl-0">
                       <span className="md:hidden font-bold not-italic mr-2">Impact:</span>
                       {row.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy Section (Two-Tier) */}
            {data.strategy && (
               <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
                  <div className="relative z-10 max-w-3xl">
                     <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Layers className="w-6 h-6 text-primary-400" />
                        {data.strategy.title}
                     </h2>
                     <p className="text-lg text-slate-300 mb-8">{data.strategy.scenario}</p>
                     <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-6">
                        <h3 className="font-bold text-primary-400 mb-2">The BizOps Solution:</h3>
                        <p className="leading-relaxed">{data.strategy.solution}</p>
                     </div>
                  </div>
                  {/* Decor */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
                     <Smartphone className="w-64 h-64 text-white" />
                  </div>
               </div>
            )}
          </>
        )}

        {/* LAYOUT 2: ANALYSIS CARDS (For Build vs Buy) */}
        {data.type === 'analysis' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {data.scenarios.map((scene: any, idx: number) => (
                 <div key={idx} className={`rounded-2xl p-8 border-2 ${scene.color} bg-white shadow-sm relative overflow-hidden`}>
                    <div className="flex items-center gap-3 mb-6">
                       <scene.icon className={`w-8 h-8 ${scene.iconColor}`} />
                       <h3 className="text-xl font-bold text-slate-900">{scene.name}</h3>
                    </div>

                    <div className="space-y-4 mb-8">
                       {scene.metrics.map((m: any, i: number) => (
                          <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                             <span className="text-sm text-slate-500">{m.label}</span>
                             <span className="font-bold text-slate-900">{m.val}</span>
                          </div>
                       ))}
                    </div>

                    <ul className="space-y-3">
                       {scene.points.map((pt: string, i: number) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-700">
                             <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${scene.iconColor.replace('text-', 'bg-')}`}></div>
                             {pt}
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
        )}

        {/* LAYOUT 3: COLUMNS (For SaaS Comparison) */}
        {data.type === 'columns' && (
           <div className="space-y-6 mb-16">
              {data.features.map((feat: any, idx: number) => (
                 <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
                       <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                    </div>
                    <div className="md:col-span-1">
                       <div className="text-xs font-bold text-slate-400 uppercase mb-2">{data.competitorName}</div>
                       <div className="text-red-500 font-bold mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> {feat.them}</div>
                       <p className="text-sm text-slate-600">{feat.themDesc}</p>
                    </div>
                    <div className="md:col-span-1 bg-primary-50 -m-4 p-4 rounded-xl">
                       <div className="text-xs font-bold text-primary-600 uppercase mb-2">BizOps</div>
                       <div className="text-slate-900 font-bold mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> {feat.us}</div>
                       <p className="text-sm text-slate-700">{feat.usDesc}</p>
                    </div>
                 </div>
              ))}
           </div>
        )}

        {/* Verdict & CTA */}
        <div className="max-w-4xl mx-auto text-center bg-white p-10 rounded-2xl border border-primary-100 shadow-lg">
           <h2 className="text-2xl font-bold text-slate-900 mb-4">The Verdict</h2>
           <p className="text-lg text-slate-600 mb-8 italic leading-relaxed">"{data.verdict}"</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo">
                 <Button size="lg" className="shadow-lg">Jadwalkan Demo & Migrasi</Button>
              </Link>
              <Link to="/resources/roi">
                 <Button variant="outline" size="lg">Hitung ROI</Button>
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
