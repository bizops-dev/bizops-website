
import React from 'react';
import Button from '../components/Button';
import { Shield, Lock, Eye, Server, FileCheck, Database, Layers, Globe, CheckCircle, Clock, RefreshCw, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TrustPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24">
      <SEO title="Security & Trust Center" description="Enterprise Security, Encryption & ISO Compliance" />
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-xl mb-6 shadow-sm border border-green-100">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Keamanan Tanpa Kompromi.
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Kami memahami bahwa data adalah darah perusahaan Anda. BizOps dibangun dengan benteng pertahanan berlapis (Defense in Depth) untuk memenuhi standar keamanan perbankan dan regulasi pemerintah.
        </p>
      </section>

      {/* Compliance Badges (New) */}
      <section className="mb-20">
         <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl font-black text-slate-900 mb-2">ISO</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">27001:2013</div>
                  <p className="text-xs text-slate-400 mt-2">Information Security Management</p>
               </div>
               <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl font-black text-slate-900 mb-2">SOC 2</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Type II</div>
                  <p className="text-xs text-slate-400 mt-2">Security, Availability & Integrity</p>
               </div>
               <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl font-black text-slate-900 mb-2">GDPR</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Ready</div>
                  <p className="text-xs text-slate-400 mt-2">European Data Protection Standard</p>
               </div>
               <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl font-black text-slate-900 mb-2">PSE</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Kominfo</div>
                  <p className="text-xs text-slate-400 mt-2">Terdaftar Resmi (PB-UMKU)</p>
               </div>
            </div>
         </div>
      </section>

      {/* Security Layers (Shield Diagram Concept) */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Defense in Depth Architecture</h2>
              <p className="text-slate-400">Tiga lapisan keamanan yang saling melindungi.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 -translate-y-1/2"></div>
              
              {/* Layer 1 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-2 transition-transform">
                 <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-6 border-4 border-slate-800 mx-auto">
                    <Globe className="w-6 h-6 text-blue-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-center text-blue-400">Layer 1: Network</h3>
                 <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>Cloudflare WAF & DDoS Protection</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>IP Whitelisting / VPN Access</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>TLS 1.3 (HTTPS) Encryption</li>
                 </ul>
              </div>

              {/* Layer 2 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-2 transition-transform">
                 <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center mb-6 border-4 border-slate-800 mx-auto">
                    <Database className="w-6 h-6 text-green-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-center text-green-400">Layer 2: Data</h3>
                 <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>AES-256 Data At Rest Encryption</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>Offsite Immutable Backups</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>Field-Level Access Control</li>
                 </ul>
              </div>

              {/* Layer 3 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-2 transition-transform">
                 <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center mb-6 border-4 border-slate-800 mx-auto">
                    <Lock className="w-6 h-6 text-amber-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-center text-amber-400">Layer 3: App Logic</h3>
                 <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>2FA (Two-Factor Auth) Enforcement</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>Rate Limiting (Anti-Brute Force)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>Auto-Sanitization (Anti-SQLi/XSS)</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                 <FileCheck className="w-10 h-10 text-primary-600 mb-6" />
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Immutable Forensic Logs</h3>
                 <p className="text-slate-600 leading-relaxed">
                    Sistem mencatat "Siapa, Apa, Kapan" untuk setiap perubahan data. Log ini bersifat WORM (Write Once Read Many), artinya sekali tertulis, tidak bisa dimanipulasi atau dihapus untuk menutupi jejak fraud, bahkan oleh Super Admin.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                 <Server className="w-10 h-10 text-primary-600 mb-6" />
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Data Sovereignty (Kedaulatan Data)</h3>
                 <p className="text-slate-600 leading-relaxed">
                    Opsi deployment mandiri (Self-Hosted) memastikan data karyawan dan keuangan tidak pernah meninggalkan infrastruktur fisik yang Anda kendalikan. Solusi definitif untuk regulasi lokalisasi data (PP 71/2019).
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Disaster Recovery (New) */}
      <section className="py-24 bg-white border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center leading-tight">Business Continuity & Disaster Recovery</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     Kami siap menghadapi skenario terburuk. Infrastruktur kami dirancang dengan redundansi multi-zone untuk memastikan operasional bisnis Anda tetap berjalan meskipun terjadi bencana alam atau kegagalan pusat data utama.
                  </p>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 font-bold text-lg">15m</div>
                        <div>
                           <h4 className="font-bold text-slate-900">RPO (Recovery Point Objective)</h4>
                           <p className="text-sm text-slate-500">Maksimal kehilangan data transaksi adalah 15 menit terakhir (Backup interval).</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 font-bold text-lg">4h</div>
                        <div>
                           <h4 className="font-bold text-slate-900">RTO (Recovery Time Objective)</h4>
                           <p className="text-sm text-slate-500">Target waktu sistem kembali online setelah deklarasi bencana major.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                     <AlertTriangle className="w-5 h-5 text-amber-500" /> Emergency Protocol
                  </h3>
                  <ul className="space-y-4 text-sm text-slate-600">
                     <li className="flex gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span><strong>Redundansi Geografis:</strong> Database direplikasi secara real-time ke Availability Zone sekunder (misal: Jakarta → Singapore).</span>
                     </li>
                     <li className="flex gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span><strong>Automated Failover:</strong> Load Balancer otomatis mengalihkan trafik jika server utama tidak merespons dalam 30 detik.</span>
                     </li>
                     <li className="flex gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span><strong>Drill Test Tahunan:</strong> Kami melakukan simulasi pemulihan bencana setidaknya 1x setahun untuk memvalidasi prosedur.</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-6 leading-tight">Butuh Dokumen Audit?</h2>
            <p className="text-slate-400 mb-8">
               Unduh Security Whitepaper dan laporan audit kepatuhan kami untuk tim IT Security Anda.
            </p>
            <Link to="/demo">
               <Button variant="white" size="lg">Request Audit Report</Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default TrustPage;
