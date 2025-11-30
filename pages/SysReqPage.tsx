
import React from 'react';
import { sysReqData } from '../data/content';
import { Server, Monitor, Globe, Check, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const SysReqPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="System Requirements | BizOps Documentation" description="Spesifikasi teknis hardware dan software untuk deployment BizOps Self-Hosted." />
      
      <Container className="px-4 md:px-6 lg:px-8" size="7xl">
        <div className="text-center mb-16">
           <Typography variant="h1" as="h1">Spesifikasi Teknis</Typography>
           <Typography variant="body-lg" className="text-slate-600 dark:text-slate-300">Panduan wajib bagi tim IT sebelum instalasi BizOps Self-Hosted.</Typography>
        </div>

        {/* Server Req */}
        <div className="mb-16">
           <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white"><div className="p-2 bg-slate-100 rounded-lg"><Server className="w-6 h-6 text-slate-600 dark:text-slate-300" /></div>
              Server Requirements (On-Premise)</Typography>
           <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-left">
                 <thead className="bg-slate-100 border-b border-slate-200">
                    <tr>
                       <th className="px-6 py-4 font-bold text-sm text-slate-600 dark:text-slate-300 uppercase">Komponen</th>
                       <th className="px-6 py-4 font-bold text-sm text-slate-600 dark:text-slate-300 uppercase">Spesifikasi Minimum</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-200">
                    {sysReqData.server.map((req, idx) => (
                       <tr key={idx} className="bg-white">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-white w-1/3">{req.item}</td>
                          <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{req.spec}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Client Req */}
        <div className="mb-16">
           <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white"><div className="p-2 bg-slate-100 rounded-lg"><Monitor className="w-6 h-6 text-slate-600 dark:text-slate-300" /></div>
              Client Requirements (End-User)</Typography>
           <Grid cols={3} gap={6}>
              {sysReqData.client.map((req, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{req.item}</Typography>
                    <Typography variant="caption" className="text-slate-600 dark:text-slate-300 leading-relaxed">{req.spec}</Typography>
                    {req.note && (
                       <Stack direction="horizontal" gap={1} align="center" className="text-xs bg-amber-50 text-amber-700 dark:text-slate-200 px-2 py-1 rounded">
                          <AlertCircle className="w-3 h-3" /> {req.note}
                       </div>
                    )}
                 </div>
              ))}
           </Grid>
        </div>

        {/* Network */}
        <div className="mb-16">
           <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white"><div className="p-2 bg-slate-100 rounded-lg"><Globe className="w-6 h-6 text-slate-600 dark:text-slate-300" /></div>
              Network Configuration (Firewall)</Typography>
           <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <Stack direction="vertical" gap={4}>
                 {sysReqData.network.map((net, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                       <div className="bg-slate-100 px-3 py-1 rounded text-sm font-bold text-slate-700 dark:text-slate-200 min-w-[100px] text-center">
                          {net.port}
                       </div>
                       <div>
                          <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">{net.dir}</div>
                          <Typography variant="caption" className="text-slate-600 dark:text-slate-300">{net.desc}</Typography>
                       </div>
                    </div>
                 ))}
              </Stack>
           </div>
        </div>

        <div className="text-center">
           <Link to="/contact">
              <Button size="md" variant="outline">Hubungi IT Support</Button>
           </Link>
        </div>

      </Container>
    </div>
  );
};

export default SysReqPage;
