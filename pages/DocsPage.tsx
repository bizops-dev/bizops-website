
import React, { useState } from 'react';
import { docsData } from '../data/content';
import Button from '../components/Button';
import { Search, ChevronRight, Terminal, Copy, Check, MessageSquare, ThumbsUp, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';

const DocsPage: React.FC = () => {
  const [version, setVersion] = useState("v2.4 (Stable)");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('curl -X GET "https://api.bizops.id/v2/resource/Employee" -H "Authorization: Token xyz:123"');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors">
      <SEO title="Documentation & API Reference | BizOps Developer Hub" description="Panduan pengguna dan dokumentasi API teknis untuk integrasi BizOps." />

      <Section>
        {/* Header & Search */}
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">How can we help you?</h1>
           <div className="relative group">
              <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search guides, API docs, or troubleshooting..." 
                className="w-full pl-12 pr-16 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm focus:ring-2 focus:ring-primary-500 outline-none text-lg transition-shadow text-slate-900 dark:text-white"
              />
              <div className="absolute right-3 top-2.5 hidden sm:flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-500 dark:text-slate-400 font-medium">
                 <span>⌘</span><span>K</span>
              </div>
           </div>
           <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="text-slate-400 dark:text-slate-500">Popular:</span>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Import Data</a>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Setup Payroll</a>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">API Key</a>
           </div>
        </div>

        {/* User Guides Grid */}
        <div className="mb-24">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">User Guides</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docsData.categories.map((cat, idx) => (
                 <Card key={idx} className="h-full hover:border-primary-300 dark:hover:border-primary-700 group" hoverEffect>
                    <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 transition-colors">
                       <cat.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400">{cat.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{cat.desc}</p>
                    <div className="text-primary-600 dark:text-primary-400 text-sm font-semibold flex items-center">
                       Browse Articles <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                 </Card>
              ))}
           </div>
        </div>

        {/* Developer / API Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative mb-24">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                       <Terminal className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold">API Reference</h2>
                 </div>
                 
                 <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm text-slate-400">Version:</span>
                    <div className="relative">
                       <select 
                          value={version}
                          onChange={(e) => setVersion(e.target.value)}
                          className="appearance-none bg-slate-800 text-white border border-slate-700 rounded-lg pl-3 pr-8 py-1 text-sm focus:ring-2 focus:ring-primary-500 outline-none cursor-pointer hover:bg-slate-700 transition-colors"
                       >
                          <option>v2.4 (Stable)</option>
                          <option>v3.0 (Beta)</option>
                          <option>v1.0 (Legacy)</option>
                       </select>
                       <ChevronRight className="w-3 h-3 text-slate-400 absolute right-2 top-2 rotate-90 pointer-events-none" />
                    </div>
                 </div>

                 <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Bangun integrasi kustom dengan BizOps REST API. Otentikasi aman, endpoint standar, dan dukungan Webhooks untuk event real-time.
                 </p>
                 <div className="flex flex-col gap-4">
                    <Link to="/capabilities/integration">
                       <Button className="bg-white text-slate-900 hover:bg-slate-100 border-none w-full sm:w-auto">Lihat Dokumentasi Lengkap</Button>
                    </Link>
                 </div>
              </div>

              {/* Quick Start Code Block */}
              <div>
                 <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Quick Start</span>
                    <button onClick={handleCopy} className="text-xs flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                       {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                    </button>
                 </div>
                 <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 font-mono text-sm shadow-2xl relative group">
                    <div className="absolute top-4 right-4 flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                    </div>
                    <div className="text-slate-300 overflow-x-auto whitespace-pre scrollbar-hide">
                       <span className="text-purple-400">curl</span> -X GET \<br/>
                       &nbsp;&nbsp;"https://api.bizops.id/v2/resource/Employee" \<br/>
                       &nbsp;&nbsp;-H <span className="text-green-400">"Authorization: Token xyz:123"</span>
                    </div>
                 </div>
                 
                 {/* Endpoints List */}
                 <div className="mt-6 space-y-2">
                    {docsData.apiPreview.map((ep, idx) => (
                       <div key={idx} className="flex items-center gap-3 text-xs font-mono bg-slate-800/50 px-3 py-2 rounded border border-slate-800/50">
                          <span className={`px-1.5 py-0.5 rounded font-bold text-[10px] min-w-[35px] text-center ${
                             ep.method === 'GET' ? 'bg-blue-900/50 text-blue-300' : 
                             ep.method === 'POST' ? 'bg-green-900/50 text-green-300' : 
                             'bg-amber-900/50 text-amber-300'
                          }`}>
                             {ep.method}
                          </span>
                          <span className="text-slate-300">{ep.endpoint}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Community & Support Hub */}
        <div>
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Community & Support</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://discord.gg/bizops" target="_blank" rel="noreferrer" className="block">
                 <Card className="h-full flex flex-col items-center text-center hover:border-primary-200 dark:hover:border-primary-800 transition-colors" hoverEffect>
                    <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-4">
                       <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Developer Discord</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Diskusikan API, Webhooks, dan Custom Scripts dengan sesama developer.</p>
                 </Card>
              </a>
              <Link to="/roadmap" className="block">
                 <Card className="h-full flex flex-col items-center text-center hover:border-primary-200 dark:hover:border-primary-800 transition-colors" hoverEffect>
                    <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mb-4">
                       <ThumbsUp className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Feature Requests</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Punya ide fitur? Vote roadmap kami. Kami membangun apa yang Anda butuhkan.</p>
                 </Card>
              </Link>
              <Link to="/contact" className="block">
                 <Card className="h-full flex flex-col items-center text-center hover:border-primary-200 dark:hover:border-primary-800 transition-colors" hoverEffect>
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
                       <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Partner Support</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Jalur khusus untuk Whitelabel Partners dan Konsultan Implementasi.</p>
                 </Card>
              </Link>
           </div>
        </div>

      </Section>
    </div>
  );
};

export default DocsPage;
