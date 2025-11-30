
import React from 'react';
import { integrationsData } from '../data/content';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Plug, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CardSlider from '../components/CardSlider'; // Import CardSlider

const IntegrationsPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <SEO title="Integrations Library" description="Pustaka konektor BizOps untuk SAP, Odoo, Bank, dan E-Commerce." />
      
      {/* Hero */}
      <Container size="7xl" className="mb-20 text-center">
        <div className="inline-flex p-3 bg-white rounded-xl shadow-sm mb-6 border border-slate-200">
           <Plug className="w-8 h-8 text-primary-600" />
        </div>
        <Typography variant="h1" as="h1">Ekosistem yang Saling Terhubung.</Typography>
        <Typography variant="body-xl" className="text-slate-600">Jangan buang waktu membangun integrasi dari nol. Gunakan pustaka konektor siap pakai (Plug-and-Play) kami untuk menghubungkan BizOps dengan aplikasi bisnis populer.</Typography>
      </Container>

      {/* Grid */}
      <Container size="7xl">
         <Grid cols={1} gap={12}>
            {integrationsData.map((cat: any, idx: number) => (
               <div key={idx} className="animate-fade-in-up">
                  <div className="flex items-end gap-4 mb-6 border-b border-slate-200 pb-4">
                      <Typography variant="h2" as="h2" className="font-bold text-slate-900">{cat.category}</Typography>
                      <Typography variant="body" className="text-slate-500">{cat.desc}</Typography>
                  </div>
                  
                  <CardSlider desktopClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {cat.apps.map((app: any, i: number) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-primary-300 hover:shadow-md transition-all group cursor-default h-full">
                           <div className="flex items-center justify-between mb-4">
                              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-xs font-bold text-slate-600 border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                                 {app.name.substring(0,2).toUpperCase()}
                              </div>
                              <div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-full border border-green-100">
                                 Verified
                              </div>
                           </div>
                           <Typography variant="h3" as="h3" className="font-bold text-slate-900 group-hover:text-primary-600">{app.name}</Typography>
                           <Typography variant="caption" className="text-slate-600 leading-snug">{app.desc}</Typography>
                        </div>
                     ))}
                  </CardSlider>
               </div>
            ))}
         </Grid>
         
         <div className="mt-24 text-center bg-white p-12 rounded-2xl border border-slate-200 shadow-sm">
            <Typography variant="h2" as="h2">Butuh Integrasi Khusus?</Typography>
            <Typography variant="body" className="text-slate-600">Gunakan REST API standar kami untuk menghubungkan sistem legacy atau aplikasi custom internal Anda. Dokumentasi lengkap tersedia.</Typography>
            <Stack direction="col" gap={4} className="justify-center">
               <Link to="/capabilities/integration">
                  <Button size="lg" variant="primary">Lihat Dokumentasi API</Button>
               </Link>
               <Link to="/contact">
                  <Button size="lg" variant="outline">Hubungi Tim Integrasi</Button>
               </Link>
            </Stack>
         </div>
      </Container>
    </div>
  );
};

export default IntegrationsPage;
