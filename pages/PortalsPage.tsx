
import React from 'react';
import Button from '../components/Button';
import { Globe, ShoppingBag, Truck, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const PortalsPage: React.FC = () => {
  return (
    <Stack direction="vertical" gap={4}>
      <SEO title="B2B Customer & Vendor Portals | BizOps" description="Berikan akses mandiri kepada pelanggan dan supplier Anda. Cek tagihan, status pengiriman, dan bidding tender secara online 24/7." />

      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <Container className="px-4 md:px-6 lg:px-8" size="7xl">
          <Stack direction="horizontal" gap={4} className="p-3 bg-slate-800 rounded-2xl mb-6">
             <Globe className="w-8 h-8 text-primary-400" />
          </div>
          <Typography variant="h1" as="h1" className="font-bold leading-tight">Berhenti Menjadi Admin<br/>untuk Klien Anda.</Typography>
          <Typography variant="body-xl" className="text-slate-300">Bebaskan tim CS, Sales Admin, dan Purchasing Anda dari pertanyaan berulang via WhatsApp. Berikan akses portal mandiri 24/7 kepada mitra bisnis Anda untuk melihat data yang mereka butuhkan sendiri.</Typography>
        </Container>
      </section>

      {/* Portal Types */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
         <Container className="px-4 md:px-6 lg:px-8" size="7xl">
            <Grid cols={2} gap={12}>
               
               {/* Customer Portal */}
               <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg group">
                  <div className="bg-blue-600 p-8 text-white">
                     <ShoppingBag className="w-10 h-10 mb-4" />
                     <Typography variant="h3" as="h3">B2B Customer Portal</Typography>
                  </div>
                  <div className="p-8">
                     <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">Memberikan pengalaman layaknya e-commerce B2B kepada klien Anda.</Typography>
                     <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
                        <li className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                           Melihat katalog produk dengan harga khusus kontrak.
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                           Menginput order pembelian (Sales Order) mandiri.
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                           Download ulang Invoice PDF & lacak status pengiriman.
                        </li>
                     </ul>
                     <Button variant="outline" fullWidth>Lihat Demo Customer Portal</Button>
                  </div>
               </div>

               {/* Vendor Portal */}
               <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg group">
                  <div className="bg-amber-600 p-8 text-white">
                     <Truck className="w-10 h-10 mb-4" />
                     <Typography variant="h3" as="h3">Supplier / Vendor Portal</Typography>
                  </div>
                  <div className="p-8">
                     <Typography variant="body" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">Mendigitalisasi interaksi dengan supplier untuk transparansi pengadaan.</Typography>
                     <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
                        <li className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                           Melihat daftar RFQ (Request for Quotation) terbuka.
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                           Mengunggah penawaran harga (Bidding) secara kompetitif.
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                           Cek status pembayaran tagihan tanpa menelepon Finance.
                        </li>
                     </ul>
                     <Button variant="outline" fullWidth>Lihat Demo Vendor Portal</Button>
                  </div>
               </div>

            </Grid>
         </Container>
      </section>
    </Stack>
  );
};

export default PortalsPage;
