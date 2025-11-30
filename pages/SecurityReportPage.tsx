import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Shield, Lock, AlertTriangle, CheckCircle, FileText, Terminal, Copy } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import Typography from '../components/Typography';
import Grid from '../components/Grid';
import Container from '../components/Container';
import Stack from '../components/Stack';

const SecurityReportPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2

mQINBF... (Truncated for display) ...
...BizOps Security Team <security@bizops.id>...
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pgpKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scopeIn = [
    "*.bizops.id (Web & API)",
    "BizOps Android App (Play Store)",
    "BizOps iOS App (TestFlight/AppStore)",
    "Authentication Services (SSO)"
  ];

  const scopeOut = [
    "DDoS / Flooding Attacks",
    "Social Engineering / Phishing",
    "Physical Security of Data Centers",
    "Third-party integrations (e.g. Midtrans sandbox)"
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen pt-20 text-slate-300 font-sans selection:bg-green-900 selection:text-green-100">
      <SEO title="Vulnerability Disclosure Program" description="Laporkan celah keamanan BizOps secara bertanggung jawab." />

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <Container size="5xl" className="text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-700/50 text-green-400 dark:text-green-300 text-xs mb-6"
          >
            <Terminal className="w-3 h-3" /> VULNERABILITY DISCLOSURE PROGRAM
          </motion.div>
          <Typography variant="h1" as="h1" className="font-bold text-white tracking-tight">See Something, <span className="text-green-500 dark:text-green-400 dark:text-green-300">Say Something.</span></Typography>
          <Typography variant="body-xl" className="text-slate-400 dark:text-slate-300">Keamanan adalah prioritas #1 kami. Kami mengundang peneliti keamanan untuk membantu melindungi ekosistem BizOps melalui pengungkapan yang bertanggung jawab.</Typography>
        </Container>
      </section>

      {/* Scope Table */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <Grid cols={2} gap={12}>
          {/* In Scope */}
          <div className="bg-slate-900/50 border border-green-900/30 rounded-2xl p-8 hover:border-green-700/50 transition-colors">
            <Typography variant="h3" as="h3" className="font-bold text-white"><div className="p-2 bg-green-900/30 rounded-lg text-green-400 dark:text-green-300"><CheckCircle className="w-5 h-5" /></div>
              In Scope</Typography>
            <ul className="space-y-4">
              {scopeIn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-green-500 dark:text-green-400 dark:text-green-300 mt-1">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Out of Scope */}
          <div className="bg-slate-900/50 border border-red-900/30 rounded-2xl p-8 hover:border-red-700/50 transition-colors">
            <Typography variant="h3" as="h3" className="font-bold text-white"><div className="p-2 bg-red-900/30 rounded-lg text-red-400 dark:text-red-300"><AlertTriangle className="w-5 h-5" /></div>
              Out of Scope</Typography>
            <ul className="space-y-4">
              {scopeOut.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 dark:text-slate-300 text-sm">
                  <span className="text-red-500 dark:text-red-400 dark:text-red-300 mt-1">×</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </section>

      {/* Report Form & PGP */}
      <section className="py-12 px-4 max-w-4xl mx-auto pb-32">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
          <Typography variant="h2" as="h2">Cara Melaporkan</Typography>
          
          <Stack direction="vertical" gap={8}>
            <div>
              <Typography variant="h4" as="h4">Via Email Terenkripsi</Typography>
              <Typography variant="caption" className="text-slate-400 dark:text-slate-300">Kirim detail temuan Anda (PoC, Impact) ke <a href="mailto:security@bizops.id" className="text-green-400 dark:text-green-300 hover:underline">security@bizops.id</a>. Gunakan PGP Key kami untuk informasi sensitif.</Typography>
              
              <div className="relative bg-black rounded-xl p-4 border border-slate-800 text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 overflow-x-auto">
                <button 
                  onClick={handleCopy}
                  className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors"
                  title="Copy PGP Key"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-green-400 dark:text-green-300" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre>{pgpKey}</pre>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <Typography variant="h4" as="h4">Laporan Cepat (Tanpa Enkripsi)</Typography>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Grid cols={2} gap={4}>
                  <input type="text" placeholder="Nama / Alias Peneliti" className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none" />
                  <input type="email" placeholder="Email Kontak" className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none" />
                </Grid>
                <textarea rows={4} placeholder="Deskripsi Kerentanan Singkat..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none"></textarea>
                <Button className="bg-green-600 hover:bg-green-700 text-white border-none w-full md:w-auto">
                  Submit Report
                </Button>
              </form>
            </div>
          </Stack>
        </div>
      </section>
    </div>
  );
};

export default SecurityReportPage;
