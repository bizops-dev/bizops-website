
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { capabilitiesData } from '../data/content';
import Button from '../components/Button';
import { Check, Server, Smartphone, Share2, MessageSquare, Layers, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const CapabilityPage: React.FC = () => {
  const { capabilityId } = useParams<{ capabilityId: string }>();
  const data = capabilityId ? capabilitiesData[capabilityId] : null;

  if (!data) {
    return (
      <Stack direction="vertical" gap={4} align="center" justify="center" className="min-h-[60vh] text-center px-4">
        <SEO title="Page Not Found" />
        <Typography variant="h1" as="h1">Capability Not Found</Typography>
        <Link to="/"><Button>Back Home</Button></Link>
      </Stack>
    );
  }

  const Icon = data.icon;

  return (
    <Stack direction="vertical" gap={4}>
      <SEO title={`${data.title} | BizOps Technical Specs`} description={data.description} />

      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
         <Container size="7xl" className="text-center">
            <Stack direction="horizontal" gap={4} className="p-4 bg-slate-800 rounded-2xl mb-6 shadow-lg border border-slate-700">
               <Icon className="w-10 h-10 text-primary-400" />
            </Stack>
            <Typography variant="h1" as="h1" className="font-bold leading-tight">{data.subtitle}</Typography>
            <Typography variant="body-xl" className="text-slate-300 leading-relaxed">{data.description}</Typography>
            <Link to="/demo">
               <Button size="lg" className="bg-white text-slate-900 dark:text-white hover:bg-slate-100">Download Technical Sheet</Button>
            </Link>
         </Container>
      </section>

      {/* Technical Features */}
      <section className="py-24 bg-white">
         <Container className="px-4 md:px-6 lg:px-8" size="7xl">
            <Typography variant="h2" as="h2">Technical Specifications</Typography>
            <Grid cols={2} gap={8}>
               {data.features.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-6 p-8 border border-slate-200 rounded-2xl bg-white hover:border-primary-200 hover:shadow-lg transition-all">
                     <Stack direction="horizontal" gap={4} className="mt-1">
                        <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl border border-primary-100">
                           <Check className="w-6 h-6" />
                        </Stack>
                     </Stack>
                     <div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{item.title}</Typography>
                        <Typography variant="body" className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</Typography>
                     </div>
                  </div>
               ))}
            </Grid>
         </Container>
      </section>

      {/* Extra Section (e.g. Sizing Guide Table) */}
      {data.extraSection && (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
           <Container className="px-4 md:px-6 lg:px-8" size="7xl">
              <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white leading-tight">{data.extraSection.title}</Typography>
              
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
                                      <td key={j} className="px-6 py-4 text-slate-700 dark:text-slate-200 whitespace-nowrap">{cell}</td>
                                   ))}
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              )}
           </Container>
        </section>
      )}

      {/* Specific CTA */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
         <Container className="px-4 md:px-6 lg:px-8" size="7xl">
            <Typography variant="h2" as="h2">Need Deeper Technical Review?</Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-300">Jadwalkan sesi deep-dive dengan Solution Architect kami untuk membahas topologi dan integrasi spesifik di perusahaan Anda.</Typography>
            <Link to="/contact">
               <Button variant="outline" size="lg">Hubungi Tim Engineering <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
         </Container>
      </section>
    </Stack>
  );
};

export default CapabilityPage;
