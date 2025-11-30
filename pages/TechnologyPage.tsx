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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline-white" className="mb-8">Engineering & Architecture</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Arsitektur Enterprise <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-400">Tanpa Kompromi.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            BizOps dibangun di atas pondasi teknologi yang telah teruji mengelola jutaan transaksi global. Perpaduan fleksibilitas Frappe Framework dan kematangan ERPNext.
          </p>
        </div>
      </div>

      {/* 1. HIGH LEVEL STACK VISUALIZATION */}
      <Section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">The Full Stack View</h2>
               <p className="text-slate-600 dark:text-slate-400">Lapisan teknologi terintegrasi untuk performa dan skalabilitas maksimal.</p>
            </div>

            <div className="grid gap-6 relative z-10">
               {/* Layer: Client */}
               <div className="grid md:grid-cols-12 gap-6 items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-2">Presentation Layer</Badge>
                     <h3 className="font-bold text-slate-900 dark:text-white">Client Apps</h3>
                  </div>
                  <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-500" /> <span className="text-sm font-medium dark:text-slate-300">SPA Desk (Vue/React)</span>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-blue-500" /> <span className="text-sm font-medium dark:text-slate-300">Mobile App (Flutter)</span>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-500" /> <span className="text-sm font-medium dark:text-slate-300">Public Portal (Jinja)</span>
                     </div>
                  </div>
               </div>

               {/* Layer: Business Applications (NEW) */}
               <div className="grid md:grid-cols-12 gap-6 items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 mb-2">Business Applications</Badge>
                     <h3 className="font-bold text-slate-900 dark:text-white">Integrated Modules</h3>
                  </div>
                  <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  </div>
               </div>

               {/* Layer: Application Logic (Frappe) */}
               <div className="grid md:grid-cols-12 gap-6 items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary-500"></div>
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 mb-2">Application Core</Badge>
                     <h3 className="font-bold text-slate-900 dark:text-white">Frappe Framework</h3>
                  </div>
                  <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  </div>
               </div>

               {/* Layer: Services */}
               <div className="grid md:grid-cols-12 gap-6 items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="md:col-span-3 flex flex-col items-start">
                     <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-2">Infrastructure Services</Badge>
                     <h3 className="font-bold text-slate-900 dark:text-white">Data & Processing</h3>
                  </div>
                  <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-4 gap-4">
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <span className="text-xs text-slate-500 uppercase font-bold mb-1">Database</span>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Database className="w-4 h-4 text-purple-500"/> MariaDB</div>
                     </div>
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <span className="text-xs text-slate-500 uppercase font-bold mb-1">Caching</span>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Zap className="w-4 h-4 text-purple-500"/> Redis</div>
                     </div>
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <span className="text-xs text-slate-500 uppercase font-bold mb-1">Queue</span>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Layers className="w-4 h-4 text-purple-500"/> BullMQ / RQ</div>
                     </div>
                     <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <span className="text-xs text-slate-500 uppercase font-bold mb-1">Realtime</span>
                        <div className="flex items-center gap-2 font-bold dark:text-white"><Activity className="w-4 h-4 text-purple-500"/> Node.js / Socket.io</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* 2. DEEP DIVE: FRAPPE FRAMEWORK */}
      <Section>
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-primary-600 dark:text-primary-400" />
               </div>
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  The Engine: Frappe Framework
               </h2>
               <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Frappe adalah <i>Low-Code Framework</i> berbasis Python yang memungkinkan pengembangan aplikasi enterprise yang kompleks dengan kecepatan tinggi. Tidak seperti framework tradisional, Frappe bersifat <b>Metadata-Driven</b>.
               </p>
               
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="mt-1"><FileJson className="w-5 h-5 text-primary-500" /></div>
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Metadata Driven (DocTypes)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                           Struktur database, tampilan form, dan permission didefinisikan dalam JSON (DocTypes). Perubahan skema database terjadi otomatis tanpa migrasi manual yang rumit.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="mt-1"><Settings className="w-5 h-5 text-primary-500" /></div>
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Low-Code Customization</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                           Kustomisasi alur kerja dengan <i>Server Scripts</i> (Python) dan <i>Client Scripts</i> (JS) langsung dari browser, tanpa perlu restart server atau redeploy.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="mt-1"><Lock className="w-5 h-5 text-primary-500" /></div>
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Granular Permission System</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                           Sistem Role-Based Access Control (RBAC) yang mendalam hingga level field. Mendukung User Permissions untuk pembatasan data berbasis wilayah atau departemen.
                        </p>
                     </div>
                  </div>
               </div>
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
         </div>
      </Section>

      {/* 3. BUSINESS KERNEL: ERPNEXT */}
      <Section dark className="bg-[#0f172a]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
                  <div className="relative grid grid-cols-2 gap-4">
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                        <div className="text-blue-400 font-bold mb-2">Financial Kernel</div>
                        <p className="text-xs text-slate-400">Double-entry ledger, multi-currency, cost centers, budgeting engine.</p>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors">
                        <div className="text-purple-400 font-bold mb-2">Supply Chain</div>
                        <p className="text-xs text-slate-400">Stock ledger, serial/batch tracking, UOM conversion, auto-reorder.</p>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-pink-500 transition-colors">
                        <div className="text-pink-400 font-bold mb-2">HR & Payroll</div>
                        <p className="text-xs text-slate-400">Payroll processing, tax rules, shift management, attendance linking.</p>
                     </div>
                     <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
                        <div className="text-emerald-400 font-bold mb-2">CRM & Selling</div>
                        <p className="text-xs text-slate-400">Lead pipeline, opportunity scoring, quotation versioning.</p>
                     </div>
                  </div>
               </div>
               <div className="order-1 md:order-2">
                  <Badge variant="outline" className="mb-6 border-blue-500/30 text-blue-300 bg-blue-500/10">The Monolith Core</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                     ERPNext: The Business Kernel
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     BizOps memanfaatkan kekuatan <b>ERPNext</b> sebagai inti logika bisnis. ERPNext adalah salah satu platform ERP paling komprehensif di dunia, mencakup ribuan fitur standar industri yang siap pakai.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-0.5" />
                        <div>
                           <h4 className="text-white font-bold">Unified Data Model</h4>
                           <p className="text-sm text-slate-400">Satu sumber kebenaran. Data pelanggan di CRM adalah data yang sama di Akuntansi dan Pengiriman.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-0.5" />
                        <div>
                           <h4 className="text-white font-bold">Global Compliance</h4>
                           <p className="text-sm text-slate-400">Mendukung standar akuntansi dan perpajakan untuk berbagai negara.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </Section>

      {/* 4. INTEGRATION & API */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Integration Architecture</h2>
               <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  BizOps didesain dengan filosofi <b>API-First</b>. Setiap fitur yang Anda lihat di UI tersedia juga melalui API untuk integrasi pihak ketiga.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                     <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">REST API Generik</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                     Otomatis tersedia CRUD API untuk setiap entitas data (DocType). Mendukung filter kompleks, sorting, dan pagination.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded text-xs text-slate-600 dark:text-slate-400">
                     GET /api/resource/Invoice?filters=[["status","=","Overdue"]]
                  </div>
               </div>

               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                     <Workflow className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Webhooks & Events</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                     Trigger aksi ke sistem eksternal saat data berubah di BizOps (On Create, On Submit, On Cancel, dll). Real-time synchronization.
                  </p>
               </div>

               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                     <Puzzle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Virtual DocType</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                     Tampilkan data dari database eksternal (Postgres, MongoDB) seolah-olah berada di dalam BizOps tanpa duplikasi data.
                  </p>
               </div>
            </div>
         </div>
      </Section>

      {/* 5. PERFORMANCE & SCALABILITY */}
      <Section dark className="bg-[#0f172a] border-t border-slate-800">
         <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <Badge variant="outline" className="mb-6 border-emerald-500/30 text-emerald-300 bg-emerald-500/10">Performance Engineering</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                     Didesain untuk Skala Enterprise.
                  </h2>
                  <p className="text-slate-400 text-lg mb-8">
                     Bagaimana kami menangani ribuan transaksi per menit tanpa mengorbankan responsivitas UI? Jawabannya ada pada arsitektur <i>asynchronous</i> kami.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-white">1</div>
                        <div>
                           <h4 className="text-white font-bold mb-1">Background Workers</h4>
                           <p className="text-sm text-slate-400">Tugas berat seperti generate laporan PDF, email bulk, dan posting akuntansi diproses di background (via Redis Queue/BullMQ) agar UI tetap responsif.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-white">2</div>
                        <div>
                           <h4 className="text-white font-bold mb-1">Intelligent Caching</h4>
                           <p className="text-sm text-slate-400">Konfigurasi sistem, permission, dan metadata disimpan di Redis Cache untuk akses super cepat (sub-millisecond).</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-white">3</div>
                        <div>
                           <h4 className="text-white font-bold mb-1">Socket.io Realtime</h4>
                           <p className="text-sm text-slate-400">Update status dokumen, chat, dan notifikasi dikirim secara real-time ke browser client tanpa perlu refresh halaman.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
                  <div className="absolute top-0 right-0 p-4">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse delay-75"></div>
                     </div>
                  </div>
                  <div className="space-y-8">
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
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* 6. FUTURE READY MODULES (RESTORED) */}
      <Section dark className="bg-[#0f172a]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
               <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-300 bg-blue-500/10">Scalability First</Badge>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap untuk Teknologi Masa Depan</h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Arsitektur modular kami memungkinkan penambahan kemampuan baru tanpa mengganggu operasional inti.
               </p>
            </div>

            <CardSlider desktopClassName="md:grid md:grid-cols-3 gap-8" mobileItemWidth="w-[85vw] sm:w-[350px]">
               {/* AI Ready */}
               <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-colors group h-full">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI & ML Integration</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     Layer data terstruktur siap dikonsumsi oleh model Machine Learning untuk forecasting dan anomaly detection. Integrasi LLM untuk asisten cerdas.
                  </p>
               </div>

               {/* IoT Ready */}
               <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors group h-full">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Network className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">IoT Gateway Ready</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     Mendukung protokol MQTT dan Webhook untuk koneksi langsung dengan sensor mesin pabrik, timbangan digital, dan perangkat IoT lainnya.
                  </p>
               </div>

               {/* High Security */}
               <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors group h-full">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     Role-Based Access Control (RBAC) granular, enkripsi data at-rest dan in-transit, serta audit log lengkap untuk compliance standar industri.
                  </p>
               </div>
            </CardSlider>
         </div>
      </Section>

      {/* 7. DEVOPS & INFRASTRUCTURE (RESTORED) */}
      <Section>
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Deployment Flexibility</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                     <Box className="w-10 h-10 text-primary-600" />
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white">Containerized (Docker)</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                     Seluruh aplikasi dibungkus dalam container standar, memastikan konsistensi dari development hingga production. Eliminasi masalah "it works on my machine".
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-500">
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Isolated Environments</li>
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Easy Versioning</li>
                  </ul>
               </div>

               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                     <HardDrive className="w-10 h-10 text-primary-600" />
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white">Platform Agnostic</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                     Jalankan di mana saja. Dari server On-Premise fisik, Private Cloud, hingga Kubernetes Cluster di AWS/GCP/Azure. Anda memegang kendali penuh atas data.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-500">
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> No Vendor Lock-in</li>
                     <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/> Horizontal Scaling</li>
                  </ul>
               </div>
            </div>
         </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
               Diskusikan Kebutuhan Teknis Anda
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
               Tim engineer kami siap menjelaskan lebih dalam tentang bagaimana arsitektur BizOps dapat beradaptasi dengan ekosistem IT perusahaan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/docs">
                  <Button size="lg" className="shadow-xl shadow-primary-500/20">Buka Dokumentasi Developer</Button>
               </Link>
               <Link to="/contact">
                  <Button variant="outline" size="lg">Konsultasi Arsitektur</Button>
               </Link>
            </div>
         </div>
      </Section>

    </div>
  );
};

export default TechnologyPage;