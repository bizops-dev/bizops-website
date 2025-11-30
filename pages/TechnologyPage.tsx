import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Badge from '../components/Badge';
import Button from '../components/Button';
import CardSlider from '../components/CardSlider';
import { Link } from 'react-router-dom';
import { 
  Server, Database, Globe, Cpu, Layers, ShieldCheck, 
  Zap, Box, Smartphone, Code, GitBranch, Terminal,
  Workflow, Network, Lock, HardDrive, Gauge, Key, Check,
  FileJson, Settings, Puzzle, Share2, Activity, Users, BookOpen, Headphones
} from 'lucide-react';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const TechnologyPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <SEO 
        title="Technology Stack | BizOps Architecture" 
        description="Deep dive into BizOps architecture: Frappe Framework, ERPNext Kernel, Python, and Enterprise Integration Patterns." 
      />

      {/* HERO */}
      <div className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1120]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <Container size="7xl" className="relative z-10 text-center">
          <Badge variant="outline-white" className="mb-8">Engineering & Architecture</Badge>
          <Typography variant="h1" as="h1" className="font-extrabold text-white tracking-tight leading-tight">Arsitektur Enterprise <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-400">Tanpa Kompromi.</span></Typography>
          <Typography variant="body-lg" className="text-slate-300">BizOps dibangun di atas pondasi teknologi yang telah teruji mengelola jutaan transaksi global. Perpaduan fleksibilitas Frappe Framework dan kematangan ERPNext.</Typography>
        </Container>
      </div>

      {/* 1. HIGH LEVEL STACK VISUALIZATION */}
      <Section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
         <Container size="6xl">
            <div className="text-center mb-16">
               <Typography variant="h2" as="h2">The Full Stack View</Typography>
               <Typography variant="body" className="text-slate-600 dark:text-slate-400">Lapisan teknologi terintegrasi untuk performa dan skalabilitas maksimal.</Typography>
            </div>

            <div className="grid gap-6 relative z-10">
               {/* Layer: Client */}
               <Grid cols={12} gap={6} className="items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-2">Presentation Layer</Badge>
                     <Typography variant="h3" as="h3">Client Apps</Typography>
                  </div>
                  <Grid cols={1} gap={4} className="md:col-span-9">
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-500" /> <Typography variant="caption" className="dark:text-slate-300">SPA Desk (Vue/React)</Typography>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-blue-500" /> <Typography variant="caption" className="dark:text-slate-300">Mobile App (Flutter)</Typography>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-500" /> <Typography variant="caption" className="dark:text-slate-300">Public Portal (Jinja)</Typography>
                     </div>
                  </Grid>
               </Grid>

               {/* Layer: Business Applications (NEW) */}
               <Grid cols={12} gap={6} className="items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 mb-2">Business Applications</Badge>
                     <Typography variant="h3" as="h3">Integrated Modules</Typography>
                  </div>
                  <Grid cols={1} gap={4} className="md:col-span-9">
                     {/* ERPNext */}
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                        <Box className="w-5 h-5 text-emerald-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">ERPNext</div>
                           <div className="text-xs text-slate-500">Finance & Supply Chain</div>
                        </div>
                     </div>
                     {/* Frappe HR */}
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                        <Users className="w-5 h-5 text-emerald-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">Frappe HR</div>
                           <div className="text-xs text-slate-500">Modern HRMS & Payroll</div>
                        </div>
                     </div>
                     {/* Frappe CRM */}
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                        <Share2 className="w-5 h-5 text-emerald-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">Frappe CRM</div>
                           <div className="text-xs text-slate-500">Sales & Pipeline</div>
                        </div>
                     </div>
                     {/* Frappe Insights */}
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                        <Activity className="w-5 h-5 text-emerald-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">Insights</div>
                           <div className="text-xs text-slate-500">Business Intelligence</div>
                        </div>
                     </div>
                     {/* LMS / Learning */}
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                        <BookOpen className="w-5 h-5 text-emerald-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">LMS</div>
                           <div className="text-xs text-slate-500">Learning Management</div>
                        </div>
                     </div>
                     {/* Helpdesk */}
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                        <Headphones className="w-5 h-5 text-emerald-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">Helpdesk</div>
                           <div className="text-xs text-slate-500">Customer Support</div>
                        </div>
                     </div>
                  </Grid>
               </Grid>

               {/* Layer: Application Logic (Frappe) */}
               <Grid cols={12} gap={6} className="items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary-500"></div>
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 mb-2">Application Core</Badge>
                     <Typography variant="h3" as="h3">Frappe Framework</Typography>
                  </div>
                  <Grid cols={1} gap={4} className="md:col-span-9">
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-primary-100 dark:border-primary-900/30">
                        <Code className="w-5 h-5 text-primary-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">Python Backend</div>
                           <div className="text-xs text-slate-500">Business Logic & Controller</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-primary-100 dark:border-primary-900/30">
                        <FileJson className="w-5 h-5 text-primary-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">Metadata Engine</div>
                           <div className="text-xs text-slate-500">DocType & Data Modeling</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-primary-100 dark:border-primary-900/30">
                        <Network className="w-5 h-5 text-primary-500" /> 
                        <div className="text-sm">
                           <div className="font-bold dark:text-white">REST & RPC API</div>
                           <div className="text-xs text-slate-500">Auto-generated Endpoints</div>
                        </div>
                     </div>
                  </Grid>
               </Grid>

               {/* Layer: Services */}
               <Grid cols={12} gap={6} className="items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-2">Infrastructure Services</Badge>
                     <Typography variant="h3" as="h3">Data & Processing</Typography>
                  </div>
                  <Grid cols={1} gap={4} className="md:col-span-9">
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Typography variant="caption" className="text-slate-500">Database</Typography>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Database className="w-4 h-4 text-purple-500"/> MariaDB</div>
                     </div>
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Typography variant="caption" className="text-slate-500">Caching</Typography>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Zap className="w-4 h-4 text-purple-500"/> Redis</div>
                     </div>
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Typography variant="caption" className="text-slate-500">Queue</Typography>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Layers className="w-4 h-4 text-purple-500"/> BullMQ / RQ</div>
                     </div>
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Typography variant="caption" className="text-slate-500">Realtime</Typography>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Activity className="w-4 h-4 text-purple-500"/> Node.js / Socket.io</div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </Container>
      </Section>

      {/* 2. DEEP DIVE: FRAPPE FRAMEWORK */}
      <Section>
         <Grid cols={2} gap={16} className="items-center">
            <div>
               <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-primary-600 dark:text-primary-400" />
               </div>
               <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">The Engine: Frappe Framework</Typography>
               <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400 leading-relaxed">Frappe adalah <i>Low-Code Framework</i> berbasis Python yang memungkinkan pengembangan aplikasi enterprise yang kompleks dengan kecepatan tinggi. Tidak seperti framework tradisional, Frappe bersifat <b>Metadata-Driven</b>.</Typography>
               
               <Stack direction="vertical" gap={6}>
                  <div className="flex gap-4">
                     <div className="mt-1"><FileJson className="w-5 h-5 text-primary-500" /></div>
                     <div>
                        <Typography variant="h4" as="h4">Metadata Driven (DocTypes)</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Struktur database, tampilan form, dan permission didefinisikan dalam JSON (DocTypes). Perubahan skema database terjadi otomatis tanpa migrasi manual yang rumit.</Typography>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="mt-1"><Settings className="w-5 h-5 text-primary-500" /></div>
                     <div>
                        <Typography variant="h4" as="h4">Low-Code Customization</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Kustomisasi alur kerja dengan <i>Server Scripts</i> (Python) dan <i>Client Scripts</i> (JS) langsung dari browser, tanpa perlu restart server atau redeploy.</Typography>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="mt-1"><Lock className="w-5 h-5 text-primary-500" /></div>
                     <div>
                        <Typography variant="h4" as="h4">Granular Permission System</Typography>
                        <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Sistem Role-Based Access Control (RBAC) yang mendalam hingga level field. Mendukung User Permissions untuk pembatasan data berbasis wilayah atau departemen.</Typography>
                     </div>
                  </div>
               </Stack>
            </div>
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl">
               <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-slate-500">sales_invoice.json (DocType)</span>
               </div>
               <pre className="text-xs text-blue-300 overflow-x-auto">
{`{
  "doctype": "DocType",
  "name": "Sales Invoice",
  "module": "Accounts",
  "fields": [
    {
      "fieldname": "customer",
      "fieldtype": "Link",
      "options": "Customer",
      "reqd": 1
    },
    {
      "fieldname": "items",
      "fieldtype": "Table",
      "options": "Sales Invoice Item"
    },
    {
      "fieldname": "grand_total",
      "fieldtype": "Currency",
      "read_only": 1
    }
  ],
  "permissions": [
    { "role": "Accounts User", "read": 1, "write": 1 },
    { "role": "Sales User", "read": 1, "write": 0 }
  ]
}`}
               </pre>
            </div>
         </Grid>
      </Section>

      {/* 3. BUSINESS KERNEL: ERPNEXT */}
      <Section dark className="bg-[#0f172a]">
         <Container size="7xl">
            <Grid cols={2} gap={16} className="items-center">
               <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
                  <Grid cols={2} gap={4} className="relative">
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                        <div className="text-blue-400 font-bold mb-2">Financial Kernel</div>
                        <Typography variant="body" className="text-slate-400">Double-entry ledger, multi-currency, cost centers, budgeting engine.</Typography>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors">
                        <div className="text-purple-400 font-bold mb-2">Supply Chain</div>
                        <Typography variant="body" className="text-slate-400">Stock ledger, serial/batch tracking, UOM conversion, auto-reorder.</Typography>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-pink-500 transition-colors">
                        <div className="text-pink-400 font-bold mb-2">HR & Payroll</div>
                        <Typography variant="body" className="text-slate-400">Payroll processing, tax rules, shift management, attendance linking.</Typography>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
                        <div className="text-emerald-400 font-bold mb-2">CRM & Selling</div>
                        <Typography variant="body" className="text-slate-400">Lead pipeline, opportunity scoring, quotation versioning.</Typography>
                     </div>
                  </Grid>
               </div>
               <div className="order-1 md:order-2">
                  <Badge variant="outline" className="mb-6 border-blue-500/30 text-blue-300 bg-blue-500/10">The Monolith Core</Badge>
                  <Typography variant="h2" as="h2" className="font-bold text-white">ERPNext: The Business Kernel</Typography>
                  <Typography variant="body-lg" className="text-slate-400 leading-relaxed">BizOps memanfaatkan kekuatan <b>ERPNext</b> sebagai inti logika bisnis. ERPNext adalah salah satu platform ERP paling komprehensif di dunia, mencakup ribuan fitur standar industri yang siap pakai.</Typography>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-0.5" />
                        <div>
                           <Typography variant="h4" as="h4">Unified Data Model</Typography>
                           <Typography variant="caption" className="text-slate-400">Satu sumber kebenaran. Data pelanggan di CRM adalah data yang sama di Akuntansi dan Pengiriman.</Typography>
                        </div>
                     </li>
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-0.5" />
                        <div>
                           <Typography variant="h4" as="h4">Global Compliance</Typography>
                           <Typography variant="caption" className="text-slate-400">Mendukung standar akuntansi dan perpajakan untuk berbagai negara.</Typography>
                        </div>
                     </li>
                  </ul>
               </div>
            </Grid>
         </Container>
      </Section>

      {/* 4. INTEGRATION & API */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
         <Container size="5xl">
            <div className="text-center mb-16">
               <Typography variant="h2" as="h2">Integration Architecture</Typography>
               <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">BizOps didesain dengan filosofi <b>API-First</b>. Setiap fitur yang Anda lihat di UI tersedia juga melalui API untuk integrasi pihak ketiga.</Typography>
            </div>

            <Grid cols={3} gap={8}>
               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                     <Share2 className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3">REST API Generik</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Otomatis tersedia CRUD API untuk setiap entitas data (DocType). Mendukung filter kompleks, sorting, dan pagination.</Typography>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded text-xs text-slate-600 dark:text-slate-400">
                     GET /api/resource/Invoice?filters=[["status","=","Overdue"]]
                  </div>
               </div>

               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                     <Workflow className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3">Webhooks & Events</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Trigger aksi ke sistem eksternal saat data berubah di BizOps (On Create, On Submit, On Cancel, dll). Real-time synchronization.</Typography>
               </div>

               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                     <Puzzle className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3">Virtual DocType</Typography>
                  <Typography variant="caption" className="text-slate-600 dark:text-slate-400">Tampilkan data dari database eksternal (Postgres, MongoDB) seolah-olah berada di dalam BizOps tanpa duplikasi data.</Typography>
               </div>
            </Grid>
         </Container>
      </Section>

      {/* 5. PERFORMANCE & SCALABILITY */}
      <Section dark className="bg-[#0f172a] border-t border-slate-800">
         <Container size="6xl">
            <Grid cols={2} gap={12} className="items-center">
               <div>
                  <Badge variant="outline" className="mb-6 border-emerald-500/30 text-emerald-300 bg-emerald-500/10">Performance Engineering</Badge>
                  <Typography variant="h2" as="h2" className="font-bold text-white">Didesain untuk Skala Enterprise.</Typography>
                  <Typography variant="body-lg" className="text-slate-400">Bagaimana kami menangani ribuan transaksi per menit tanpa mengorbankan responsivitas UI? Jawabannya ada pada arsitektur <i>asynchronous</i> kami.</Typography>
                  
                  <Stack direction="vertical" gap={6}>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-white">1</div>
                        <div>
                           <Typography variant="h4" as="h4">Background Workers</Typography>
                           <Typography variant="caption" className="text-slate-400">Tugas berat seperti generate laporan PDF, email bulk, dan posting akuntansi diproses di background (via Redis Queue/BullMQ) agar UI tetap responsif.</Typography>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-white">2</div>
                        <div>
                           <Typography variant="h4" as="h4">Intelligent Caching</Typography>
                           <Typography variant="caption" className="text-slate-400">Konfigurasi sistem, permission, dan metadata disimpan di Redis Cache untuk akses super cepat (sub-millisecond).</Typography>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-white">3</div>
                        <div>
                           <Typography variant="h4" as="h4">Socket.io Realtime</Typography>
                           <Typography variant="caption" className="text-slate-400">Update status dokumen, chat, dan notifikasi dikirim secara real-time ke browser client tanpa perlu refresh halaman.</Typography>
                        </div>
                     </div>
                  </Stack>
               </div>
               
               <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
                  <div className="absolute top-0 right-0 p-4">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse delay-75"></div>
                     </div>
                  </div>
                  <Stack direction="vertical" gap={8}>
                     <div>
                        <div className="flex justify-between text-sm text-slate-400 mb-2">
                           <span>Web Server (Gunicorn/Werkzeug)</span>
                           <span className="text-green-400">Active</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm text-slate-400 mb-2">
                           <span>Background Workers (Default/Short/Long)</span>
                           <span className="text-green-400">Processing</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full bg-purple-500 w-1/2"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm text-slate-400 mb-2">
                           <span>Socket.io Service</span>
                           <span className="text-green-400">Connected: 1,240</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full bg-emerald-500 w-full"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm text-slate-400 mb-2">
                           <span>Redis Cache Hit Rate</span>
                           <span className="text-green-400">98.5%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full bg-amber-500 w-[98%]"></div>
                        </div>
                     </div>
                  </Stack>
               </div>
            </Grid>
         </Container>
      </Section>

      {/* 6. FUTURE READY MODULES (RESTORED) */}
      <Section dark className="bg-[#0f172a]">
         <Container size="7xl">
            <div className="mb-16 text-center">
               <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-300 bg-blue-500/10">Scalability First</Badge>
               <Typography variant="h2" as="h2">Siap untuk Teknologi Masa Depan</Typography>
               <Typography variant="body-lg" className="text-slate-400">Arsitektur modular kami memungkinkan penambahan kemampuan baru tanpa mengganggu operasional inti.</Typography>
            </div>

            <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
               {/* AI Ready */}
               <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-colors group h-full">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <Typography variant="h3" as="h3">AI & ML Integration</Typography>
                  <Typography variant="caption" className="text-slate-400 leading-relaxed">Layer data terstruktur siap dikonsumsi oleh model Machine Learning untuk forecasting dan anomaly detection. Integrasi LLM untuk asisten cerdas.</Typography>
               </div>

               {/* IoT Ready */}
               <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors group h-full">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Network className="w-6 h-6 text-blue-400" />
                  </div>
                  <Typography variant="h3" as="h3">IoT Gateway Ready</Typography>
                  <Typography variant="caption" className="text-slate-400 leading-relaxed">Mendukung protokol MQTT dan Webhook untuk koneksi langsung dengan sensor mesin pabrik, timbangan digital, dan perangkat IoT lainnya.</Typography>
               </div>

               {/* High Security */}
               <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors group h-full">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <Typography variant="h3" as="h3">Enterprise Security</Typography>
                  <Typography variant="caption" className="text-slate-400 leading-relaxed">Role-Based Access Control (RBAC) granular, enkripsi data at-rest dan in-transit, serta audit log lengkap untuk compliance standar industri.</Typography>
               </div>
            </CardSlider>
         </Container>
      </Section>

      {/* 7. DEVOPS & INFRASTRUCTURE (RESTORED) */}
      <Section>
         <Container size="5xl" className="text-center">
            <Typography variant="h2" as="h2">Deployment Flexibility</Typography>
            
            <Grid cols={2} gap={8} className="text-left">
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                     <Box className="w-10 h-10 text-primary-600" />
                     <Typography variant="h3" as="h3">Containerized (Docker)</Typography>
                  </div>
                  <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">Seluruh aplikasi dibungkus dalam container standar, memastikan konsistensi dari development hingga production. Eliminasi masalah "it works on my machine".</Typography>
                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-500">
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Isolated Environments</li>
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Easy Versioning</li>
                  </ul>
               </div>

               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                     <HardDrive className="w-10 h-10 text-primary-600" />
                     <Typography variant="h3" as="h3">Platform Agnostic</Typography>
                  </div>
                  <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">Jalankan di mana saja. Dari server On-Premise fisik, Private Cloud, hingga Kubernetes Cluster di AWS/GCP/Azure. Anda memegang kendali penuh atas data.</Typography>
                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-500">
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> No Vendor Lock-in</li>
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Horizontal Scaling</li>
                  </ul>
               </div>
            </Grid>
         </Container>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
         <Container size="4xl" className="text-center">
            <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">Diskusikan Kebutuhan Teknis Anda</Typography>
            <Typography variant="body-lg" className="text-slate-600 dark:text-slate-400">Tim engineer kami siap menjelaskan lebih dalam tentang bagaimana arsitektur BizOps dapat beradaptasi dengan ekosistem IT perusahaan Anda.</Typography>
            <Stack direction="vertical" gap={4} className="justify-center">
               <Link to="/docs">
                  <Button size="lg" className="shadow-xl shadow-primary-500/20">Buka Dokumentasi Developer</Button>
               </Link>
               <Link to="/contact">
                  <Button variant="outline" size="lg">Konsultasi Arsitektur</Button>
               </Link>
            </Stack>
         </Container>
      </Section>

    </div>
  );
};

export default TechnologyPage;