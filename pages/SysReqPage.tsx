
import React from 'react';
import { sysReqData } from '../data/content';
import { Server, Monitor, Globe, Check, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';

const SysReqPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="System Requirements | BizOps Documentation" description="Spesifikasi teknis hardware dan software untuk deployment BizOps Self-Hosted." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <Typography variant="h1" as="h1">Spesifikasi Teknis</Typography>
           <Typography variant="body-lg" className="text-slate-600">Panduan wajib bagi tim IT sebelum instalasi BizOps Self-Hosted.</Typography>
        </div>

        {/* Server Req */}
        <div className="mb-16">
           <Typography variant="h2" as="h2" className="font-bold text-slate-900"><div className="p-2 bg-slate-100 rounded-lg"><Server className="w-6 h-6 text-slate-600" /></div>
              Server Requirements (On-Premise)</Typography>
           <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-left">
                 <thead className="bg-slate-100 border-b border-slate-200">
                    <tr>
                       <th className="px-6 py-4 font-bold text-sm text-slate-600 uppercase">Komponen</th>
                       <th className="px-6 py-4 font-bold text-sm text-slate-600 uppercase">Spesifikasi Minimum</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-200">
                    {sysReqData.server.map((req, idx) => (
                       <tr key={idx} className="bg-white">
                          <td className="px-6 py-4 font-medium text-slate-900 w-1/3">{req.item}</td>
                          <td className="px-6 py-4 text-slate-600">{req.spec}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Client Req */}
        <div className="mb-16">
           <Typography variant="h2" as="h2" className="font-bold text-slate-900"><div className="p-2 bg-slate-100 rounded-lg"><Monitor className="w-6 h-6 text-slate-600" /></div>
              Client Requirements (End-User)</Typography>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sysReqData.client.map((req, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900">{req.item}</Typography>
                    <Typography variant="caption" className="text-slate-600 leading-relaxed">{req.spec}</Typography>
                    {req.note && (
                       <div className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded inline-flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {req.note}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>

        {/* Network */}
        <div className="mb-16">
           <Typography variant="h2" as="h2" className="font-bold text-slate-900"><div className="p-2 bg-slate-100 rounded-lg"><Globe className="w-6 h-6 text-slate-600" /></div>
              Network Configuration (Firewall)</Typography>
           <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="space-y-4">
                 {sysReqData.network.map((net, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                       <div className="bg-slate-100 px-3 py-1 rounded text-sm font-bold text-slate-700 min-w-[100px] text-center">
                          {net.port}
                       </div>
                       <div>
                          <div className="font-bold text-slate-900 text-sm mb-1">{net.dir}</div>
                          <Typography variant="caption" className="text-slate-600">{net.desc}</Typography>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="text-center">
           <Link to="/contact">
              <Button variant="outline">Hubungi IT Support</Button>
           </Link>
        </div>

      </div>
    </div>
  );
};

export default SysReqPage;
