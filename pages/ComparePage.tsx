
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { comparisonsData } from '../data/comparisonData';
import Button from '../components/Button';
import { X, Check, XCircle, CheckCircle, ArrowRight, Layers, Smartphone, Server } from 'lucide-react';
import SEO from '../components/SEO';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const ComparePage: React.FC = () => {
  const { competitorId } = useParams<{ competitorId: string }>();
  const data = competitorId ? comparisonsData[competitorId] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="Comparison Not Found" />
        <Typography variant="h1" as="h1">Comparison Not Found</Typography>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <SEO title={`BizOps vs ${data.name}`} description={data.description} />

      <Container size="7xl">
        {/* Hero */}
        <Container size="4xl" className="text-center mb-16">
          <div className="inline-block bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-slate-600 mb-6 shadow-sm">
            BizOps vs {data.name}
          </div>
          <Typography variant="h1" as="h1" className="font-bold text-slate-900 leading-tight">{data.verdict}</Typography>
          <Typography variant="body-xl" className="text-slate-600">{data.description}</Typography>
        </Container>

        {/* LAYOUT 1: MATRIX (For Odoo) */}
        {data.points && data.points.length > 0 && (
          <>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-16">
              <Grid cols={3} gap={6} className="bg-slate-900 text-white font-bold text-lg">
                <div className="p-6 md:col-span-1 hidden md:block">Aspek</div>
                <div className="p-6 text-slate-400 bg-slate-800/50">{data.name}</div>
                <div className="p-6 text-primary-400 bg-primary-900/20">BizOps</div>
              </Grid>
              
              <div className="divide-y divide-slate-100">
                {data.points.map((row: any, idx: number) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-4 p-6 items-center gap-4 hover:bg-slate-50 transition-colors">
                    <div className="font-bold text-slate-900 md:col-span-1">{row.feature}</div>
                    
                    {/* Them */}
                    <div className="text-slate-600 flex items-start gap-3">
                       <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                       <Typography variant="caption">{row.them}</Typography>
                    </div>

                    {/* Us */}
                    <div className="text-slate-900 font-medium flex items-start gap-3 bg-primary-50 rounded-lg p-3">
                       <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                       <Typography variant="caption">{row.us}</Typography>
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

            {/* Verdict Section */}
            {data.verdict && (
               <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
                  <div className="relative z-10 max-w-3xl">
                     <Typography variant="h2" as="h2" className="font-bold"><Layers className="w-6 h-6 text-primary-400" />
                        Verdict</Typography>
                     <Typography variant="body-lg" className="text-slate-300">{data.verdict}</Typography>
                     <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-6">
                        <Typography variant="h3" as="h3">Key Takeaways:</Typography>
                        <ul className="space-y-2 leading-relaxed">
                          {data.limitations?.map((lim: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-400">•</span>
                              <span>{lim}</span>
                            </li>
                          ))}
                        </ul>
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
        {false && (
           <Grid cols={2} gap={8} className="mb-16">
              {[].map((scene: any, idx: number) => (
                 <div key={idx} className={`rounded-2xl p-8 border-2 ${scene.color} bg-white shadow-sm relative overflow-hidden`}>
                    <Stack direction="row" gap={3} align="center" className="mb-6">
                       <scene.icon className={`w-8 h-8 ${scene.iconColor}`} />
                       <Typography variant="h3" as="h3" className="font-bold text-slate-900">{scene.name}</Typography>
                    </Stack>

                    <Stack direction="col" gap={4} className="mb-8">
                       {scene.metrics.map((m: any, i: number) => (
                          <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                             <Typography variant="caption" className="text-slate-500">{m.label}</Typography>
                             <span className="font-bold text-slate-900">{m.val}</span>
                          </div>
                       ))}
                    </Stack>

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
           </Grid>
        )}

        {/* LAYOUT 3: COLUMNS (For SaaS Comparison) */}
        {false && (
           <Stack direction="col" gap={6} className="mb-16">
              {[].map((feat: any, idx: number) => (
                 <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
                       <Typography variant="h3" as="h3" className="font-bold text-slate-900">{feat.title}</Typography>
                    </div>
                    <div className="md:col-span-1">
                       <div className="text-xs font-bold text-slate-400 uppercase mb-2">{data?.name || 'Competitor'}</div>
                       <div className="text-red-500 font-bold mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> {feat.them}</div>
                       <Typography variant="caption" className="text-slate-600">{feat.themDesc}</Typography>
                    </div>
                    <div className="md:col-span-1 bg-primary-50 -m-4 p-4 rounded-xl">
                       <div className="text-xs font-bold text-primary-600 uppercase mb-2">BizOps</div>
                       <div className="text-slate-900 font-bold mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> {feat.us}</div>
                       <Typography variant="caption" className="text-slate-700">{feat.usDesc}</Typography>
                    </div>
                 </div>
              ))}
           </Stack>
        )}

        {/* Verdict & CTA */}
        <Container size="4xl" className="text-center bg-white p-10 rounded-2xl border border-primary-100 shadow-lg">
           <Typography variant="h2" as="h2">The Verdict</Typography>
           <Typography variant="body-lg" className="text-slate-600 leading-relaxed">"{data.verdict}"</Typography>
           <Stack direction="col" gap={4} className="justify-center">
              <Link to="/demo">
                 <Button size="lg" className="shadow-lg">Jadwalkan Demo & Migrasi</Button>
              </Link>
              <Link to="/resources/roi">
                 <Button variant="outline" size="lg">Hitung ROI</Button>
              </Link>
           </Stack>
        </Container>
      </Container>
    </div>
  );
};

export default ComparePage;
