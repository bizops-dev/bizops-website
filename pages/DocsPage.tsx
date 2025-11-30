import React, { useState } from 'react';
import { docsData } from '../data/content';
import Button from '../components/Button';
import { 
  Search, ChevronRight, Terminal, Copy, Check, 
  MessageSquare, ThumbsUp, Users, Book, Zap, 
  Layout, Code, Globe, Shield, Activity
} from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import CardSlider from '../components/CardSlider'; // Import CardSlider

const DocsPage: React.FC = () => {
  const [version, setVersion] = useState("v2.4 (Stable)");
  const [copied, setCopied] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('curl -X GET "https://api.bizops.id/v2/resource/Employee" -H "Authorization: Token xyz:123"');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
      <SEO title="Documentation & API Reference | BizOps Developer Hub" description="Panduan pengguna lengkap dan dokumentasi API teknis untuk integrasi BizOps ERP." />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#0B1120] overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-primary-300 text-xs font-bold uppercase tracking-wider mb-6"
          >
             <Book className="w-3 h-3" /> Knowledge Base
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight"
          >
            How can we help you?
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`relative max-w-2xl mx-auto group transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}
          >
             <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-colors"></div>
             <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center overflow-hidden">
                <Search className="w-6 h-6 text-slate-400 ml-5 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search guides, API docs, or troubleshooting..." 
                  className="w-full px-4 py-5 bg-transparent border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 focus:outline-none text-lg"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <div className="hidden sm:flex items-center gap-1 pr-5 text-xs font-medium text-slate-400 bg-transparent">
                   <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">⌘ K</span>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400"
          >
             <span className="text-slate-500">Popular topics:</span>
             <Link to="/docs/import-data" className="hover:text-white hover:underline decoration-primary-500 underline-offset-4 transition-all">Import Excel Data</Link>
             <Link to="/docs/setup-payroll" className="hover:text-white hover:underline decoration-primary-500 underline-offset-4 transition-all">Setup PPh 21 TER</Link>
             <Link to="/docs/api-keys" className="hover:text-white hover:underline decoration-primary-500 underline-offset-4 transition-all">Generate API Key</Link>
             <Link to="/docs/troubleshoot" className="hover:text-white hover:underline decoration-primary-500 underline-offset-4 transition-all">Connection Error 502</Link>
          </motion.div>
        </div>
      </section>

      <Container size="7xl" className="-mt-16 relative z-20 pb-24">
        
        {/* --- USER GUIDES --- */}
        <div className="mb-24">
           <div className="md:hidden">
              <CardSlider>
                 {docsData.categories.map((cat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="h-full w-[85vw] sm:w-[350px]"
                    >
                      <Card className="h-full hover:border-primary-500/50 dark:hover:border-primary-500/50 group bg-white dark:bg-slate-900/80 backdrop-blur-sm" hoverEffect>
                         <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary-500/30">
                            <cat.icon className="w-6 h-6" />
                         </div>
                         <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{cat.title}</Typography>
                         <Typography variant="caption" className="text-slate-500 dark:text-slate-400 leading-relaxed">{cat.desc}</Typography>
                         <div className="mt-auto flex items-center text-primary-600 dark:text-primary-400 text-sm font-bold group/link">
                            Explore Guides <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                         </div>
                      </Card>
                    </motion.div>
                 ))}
              </CardSlider>
           </div>

           <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docsData.categories.map((cat, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="h-full"
                 >
                   <Card className="h-full hover:border-primary-500/50 dark:hover:border-primary-500/50 group bg-white dark:bg-slate-900/80 backdrop-blur-sm" hoverEffect>
                      <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary-500/30">
                         <cat.icon className="w-6 h-6" />
                      </div>
                      <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{cat.title}</Typography>
                      <Typography variant="caption" className="text-slate-500 dark:text-slate-400 leading-relaxed">{cat.desc}</Typography>
                      <div className="mt-auto flex items-center text-primary-600 dark:text-primary-400 text-sm font-bold group/link">
                         Explore Guides <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                   </Card>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* --- DEVELOPER PORTAL --- */}
        <div className="bg-[#0f172a] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative mb-24 border border-slate-800 shadow-2xl">
           {/* Abstract Decoration */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-bold mb-6">
                    <Terminal className="w-3 h-3" /> DEVELOPER HUB
                 </div>
                 
                 <Typography variant="h2" as="h2">Build with BizOps API</Typography>
                 
                 <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                       <select 
                          value={version}
                          onChange={(e) => setVersion(e.target.value)}
                          className="appearance-none bg-slate-800 text-white border border-slate-700 rounded-lg pl-4 pr-10 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer hover:bg-slate-700 transition-colors"
                       >
                          <option>v2.4 (Stable)</option>
                          <option>v3.0 (Beta)</option>
                          <option>v1.0 (Legacy)</option>
                       </select>
                       <ChevronRight className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 rotate-90 pointer-events-none" />
                    </div>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    <Typography variant="caption" className="text-slate-400">All systems operational</Typography>
                 </div>

                 <Typography variant="body-lg" className="text-slate-400 leading-relaxed">Integrasikan BizOps dengan aplikasi pihak ketiga Anda. Dokumentasi lengkap untuk REST API, Webhooks, dan SDK tersedia.</Typography>
                 
                 <Stack direction="col" gap={3}>
                    <Link to="/docs/api">
                       <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 border-none font-bold">
                          Read API Docs
                       </Button>
                    </Link>
                    <Link to="/docs/changelog" className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-2 mt-2">
                       <Activity className="w-4 h-4" /> View Changelog
                    </Link>
                 </Stack>
              </div>

              {/* Code Preview */}
              <div className="lg:col-span-3">
                 <div className="bg-[#1e293b] rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-3 bg-[#0f172a] border-b border-slate-700">
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                       </div>
                       <div className="flex items-center gap-4">
                          <span className="text-xs text-slate-500">bash</span>
                          <button onClick={handleCopy} className="text-xs flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group">
                             {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 group-hover:text-blue-400" />}
                             {copied ? <span className="text-green-400">Copied!</span> : "Copy"}
                          </button>
                       </div>
                    </div>
                    <div className="p-6 text-sm leading-relaxed overflow-x-auto">
                       <div className="text-slate-300">
                          <span className="text-purple-400">curl</span> --request GET \<br/>
                          &nbsp;&nbsp;--url <span className="text-green-400">'https://api.bizops.id/v2/resource/Employee'</span> \<br/>
                          &nbsp;&nbsp;--header <span className="text-green-400">'Authorization: Token xyz:123'</span> \<br/>
                          &nbsp;&nbsp;--header <span className="text-green-400">'Content-Type: application/json'</span>
                       </div>
                       
                       <div className="mt-6 pt-6 border-t border-slate-700/50">
                          <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider">JSON Response</div>
                          <div className="text-blue-300">
                             {`{`} <br/>
                             &nbsp;&nbsp;<span className="text-purple-300">"status"</span>: <span className="text-green-300">"success"</span>,<br/>
                             &nbsp;&nbsp;<span className="text-purple-300">"data"</span>: [<br/>
                             &nbsp;&nbsp;&nbsp;&nbsp;{`{`} <span className="text-purple-300">"id"</span>: <span className="text-orange-300">1</span>, <span className="text-purple-300">"name"</span>: <span className="text-green-300">"Budi Santoso"</span> {`}`},<br/>
                             &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">...</span><br/>
                             &nbsp;&nbsp;]<br/>
                             {`}`}
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Authentication', 'Webhooks', 'Rate Limits', 'Errors'].map(item => (
                       <div key={item} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs font-medium text-slate-400 text-center cursor-pointer transition-colors">
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* --- COMMUNITY & SUPPORT --- */}
        <div>
           <div className="text-center mb-12">
             <Typography variant="h2" as="h2">Still need help?</Typography>
             <Typography variant="body" className="text-slate-600 dark:text-slate-400">Our support team and community are here for you.</Typography>
           </div>
           
           <div className="md:hidden">
              <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
                 <a href="https://discord.gg/bizops" target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="h-full flex flex-col items-center text-center hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300" hoverEffect>
                       <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                          <MessageSquare className="w-8 h-8" />
                       </div>
                       <Typography variant="h3" as="h3">Developer Community</Typography>
                       <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Join 2,000+ developers. Discuss API integration, share custom scripts, and get help.</Typography>
                       <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">Join Discord &rarr;</span>
                    </Card>
                 </a>
                 
                 <Link to="/roadmap" className="block h-full">
                    <Card className="h-full flex flex-col items-center text-center hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300" hoverEffect>
                       <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                          <Zap className="w-8 h-8" />
                       </div>
                       <Typography variant="h3" as="h3">Feature Requests</Typography>
                       <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Missing a feature? Submit a request or vote on our public roadmap.</Typography>
                       <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">View Roadmap &rarr;</span>
                    </Card>
                 </Link>
                 
                 <Link to="/contact" className="block h-full">
                    <Card className="h-full flex flex-col items-center text-center hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300" hoverEffect>
                       <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                          <Shield className="w-8 h-8" />
                       </div>
                       <Typography variant="h3" as="h3">Premium Support</Typography>
                       <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Priority support channel for Enterprise and Partner plans. 24/7 SLAs available.</Typography>
                       <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">Open Ticket &rarr;</span>
                    </Card>
                 </Link>
              </CardSlider>
           </div>

           <div className="hidden md:grid md:grid-cols-3 gap-6">
              <a href="https://discord.gg/bizops" target="_blank" rel="noopener noreferrer" className="block h-full">
                 <Card className="h-full flex flex-col items-center text-center hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300" hoverEffect>
                    <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                       <MessageSquare className="w-8 h-8" />
                    </div>
                    <Typography variant="h3" as="h3">Developer Community</Typography>
                    <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Join 2,000+ developers. Discuss API integration, share custom scripts, and get help.</Typography>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">Join Discord &rarr;</span>
                 </Card>
              </a>
              
              <Link to="/roadmap" className="block h-full">
                 <Card className="h-full flex flex-col items-center text-center hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300" hoverEffect>
                    <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                       <Zap className="w-8 h-8" />
                    </div>
                    <Typography variant="h3" as="h3">Feature Requests</Typography>
                    <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Missing a feature? Submit a request or vote on our public roadmap.</Typography>
                    <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">View Roadmap &rarr;</span>
                 </Card>
              </Link>
              
              <Link to="/contact" className="block h-full">
                 <Card className="h-full flex flex-col items-center text-center hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300" hoverEffect>
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                       <Shield className="w-8 h-8" />
                    </div>
                    <Typography variant="h3" as="h3">Premium Support</Typography>
                    <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Priority support channel for Enterprise and Partner plans. 24/7 SLAs available.</Typography>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">Open Ticket &rarr;</span>
                 </Card>
              </Link>
           </div>
        </div>

      </Container>
    </div>
  );
};

export default DocsPage;
