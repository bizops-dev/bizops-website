
import React from 'react';
import { statusData } from '../data/content';
import Button from '../components/Button';
import { CheckCircle, AlertTriangle, Clock, Server, Activity, Database, Cloud } from 'lucide-react';
import SEO from '../components/SEO';

const StatusPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO title="System Status | BizOps Service Health" description="Real-time status monitoring for BizOps API, Dashboard, and Cloud Services." />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Hero */}
        <div className="mb-12 flex flex-col items-center text-center">
           <div className="relative mb-6">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center animate-pulse">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                 </div>
              </div>
           </div>
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">{statusData.currentStatus}</h1>
           <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {statusData.lastUpdated}</span>
              <span className="flex items-center gap-1"><Activity className="w-4 h-4" /> API Latency: {statusData.apiResponseTime}</span>
           </div>
        </div>

        {/* System Components */}
        <div className="space-y-8">
           
           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                 <h2 className="font-bold text-slate-900 flex items-center gap-2"><Server className="w-5 h-5 text-slate-500" /> Core Services</h2>
                 <span className="text-xs font-bold uppercase text-green-600 bg-green-100 px-2 py-1 rounded">Operational</span>
              </div>
              <div className="divide-y divide-slate-100">
                 {statusData.systems.map((sys, idx) => (
                    <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                       <div>
                          <h3 className="font-bold text-slate-900">{sys.name}</h3>
                          <p className="text-sm text-slate-500">{sys.desc}</p>
                       </div>
                       <div className="flex items-center gap-4 min-w-[150px] justify-end">
                          <span className="text-sm font-medium text-green-600 flex items-center gap-2">
                             <CheckCircle className="w-4 h-4" /> {sys.status}
                          </span>
                          <span className="text-xs text-slate-400 border border-slate-200 px-2 py-1 rounded">{sys.uptime}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                 <h2 className="font-bold text-slate-900 flex items-center gap-2"><Cloud className="w-5 h-5 text-slate-500" /> Third-Party Dependencies</h2>
              </div>
              <div className="divide-y divide-slate-100">
                 {statusData.thirdParty.map((sys, idx) => (
                    <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                       <div>
                          <h3 className="font-bold text-slate-900">{sys.name}</h3>
                          <p className="text-sm text-slate-500">{sys.desc}</p>
                       </div>
                       <div className="flex items-center gap-4 min-w-[150px] justify-end">
                          <span className="text-sm font-medium text-green-600 flex items-center gap-2">
                             <CheckCircle className="w-4 h-4" /> {sys.status}
                          </span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

        </div>

        {/* Incident History */}
        <div className="mt-16">
           <h2 className="text-xl font-bold text-slate-900 mb-6">Incident History</h2>
           <div className="space-y-6">
              {statusData.incidents.map((inc, idx) => (
                 <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                       <h3 className="font-bold text-slate-900 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-amber-500" /> {inc.title}
                       </h3>
                       <span className="text-sm text-slate-500">{inc.date}</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed mb-4">{inc.desc}</p>
                    <div className="flex gap-4 text-xs font-medium">
                       <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Status: {inc.status}</span>
                       <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded">Time to Resolve: {inc.duration}</span>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default StatusPage;
