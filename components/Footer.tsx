
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Instagram, Mail, MapPin, Globe, Moon, Sun, ChevronDown, ArrowRight, ShieldCheck, Signal, Cookie, FileText, Lock, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

// --- SVG Assets for Official Badges ---
const AppleIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" role="img" aria-label="Apple Logo"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.74 1.6.19 2.72.79 3.42 1.82-3.06 1.86-2.51 5.71.6 7.02-.62 1.58-1.53 3.14-2.79 4.13zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
);

const PlayStoreIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" role="img" aria-label="Google Play Logo"><path d="M3.6,1.6v20.8c0,0.4,0.2,0.8,0.6,1l11.2-11.6L4.2,0.6C3.9,0.8,3.6,1.2,3.6,1.6z M16.7,13.1L19.9,15l-3.2,1.8L16.7,13.1z M16.7,10.9L19.9,9l-3.2-1.8L16.7,10.9z M5.8,23l10.3-10.3l-3.2-1.8L5.8,23z M5.8,1L16.1,11.3l-3.2,1.8L5.8,1z M18.7,6.6L21.9,8.4c0.8,0.5,0.8,1.3,0,1.7l-3.2,1.8L18.7,6.6z"/></svg>
);

// --- Helper Component: Responsive Footer Section (Accordion) ---
const FooterSection = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 lg:border-none last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 lg:py-0 lg:mb-6 text-left group focus:outline-none lg:cursor-default"
        aria-expanded={isOpen}
      >
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 group-hover:text-primary-400 lg:group-hover:text-slate-100 transition-colors">
          {title}
        </h4>
        <ChevronDown className={`w-4 h-4 text-slate-500 lg:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100 lg:pb-0'} overflow-hidden transition-all duration-300 ease-in-out lg:overflow-visible`}>
        <ul className="space-y-3 text-sm text-slate-400">
          {children}
        </ul>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Anda telah terdaftar di newsletter kami.");
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 lg:pt-24 pb-12 border-t border-slate-900 font-sans relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP GRID AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 mb-16 lg:mb-24">
          
          {/* Column 1: Brand & Identity (Span 4 columns) */}
          <div className="lg:col-span-4 space-y-8">
             <Link to="/" className="flex items-center gap-3 group w-fit focus:outline-none rounded-lg" aria-label="BizOps Home">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg shadow-white/10">
                  <div className="w-5 h-5 bg-slate-950 rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  BizOps
                </span>
             </Link>
             <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
               The Adaptive Business Operating System. Menyatukan HR, Finance, dan Operasional dalam satu ekosistem terintegrasi yang aman dan sesuai regulasi Indonesia.
             </p>
             
             {/* Contact Info */}
             <div className="space-y-4 text-sm text-slate-400 pt-2">
                <div className="flex items-start gap-3 group">
                   <MapPin className="w-5 h-5 text-slate-600 group-hover:text-primary-500 transition-colors shrink-0 mt-0.5" aria-hidden="true" />
                   <span className="group-hover:text-slate-300 transition-colors">
                     South Quarter, Tower C, Level 22<br/>
                     Jl. R.A. Kartini Kav 8, Cilandak<br/>
                     Jakarta Selatan, 12430.
                   </span>
                </div>
                <div className="flex items-center gap-3 group">
                   <Mail className="w-5 h-5 text-slate-600 group-hover:text-primary-500 transition-colors shrink-0" aria-hidden="true" />
                   <a href="mailto:hello@bizops.id" className="hover:text-white hover:underline transition-colors focus:outline-none">hello@bizops.id</a>
                </div>
             </div>

             {/* Social Links */}
             <div className="flex gap-4 pt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all border border-slate-800 hover:border-primary-500" aria-label="LinkedIn">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all border border-slate-800 hover:border-sky-400" aria-label="Twitter">
                 <Twitter className="w-5 h-5" />
               </a>
               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all border border-slate-800 hover:border-red-500" aria-label="YouTube">
                 <Youtube className="w-5 h-5" />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all border border-slate-800 hover:border-pink-500" aria-label="Instagram">
                 <Instagram className="w-5 h-5" />
               </a>
             </div>
          </div>

          {/* Navigation Columns (Span 8 columns total) */}
          <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 gap-x-8 xl:gap-x-12">
            
            {/* Column 2: Platform */}
            <FooterSection title="Platform">
              <li><Link to="/platform" className="hover:text-primary-400 transition-colors block w-fit">Platform Overview</Link></li>
              <li><Link to="/platform/hr" className="hover:text-primary-400 transition-colors block w-fit">Human Capital</Link></li>
              <li><Link to="/platform/finance" className="hover:text-primary-400 transition-colors block w-fit">Finance & Control</Link></li>
              <li><Link to="/platform/operations" className="hover:text-primary-400 transition-colors block w-fit">Operations & Projects</Link></li>
              <li><Link to="/pricing" className="hover:text-primary-400 transition-colors block w-fit">Pricing & Plans</Link></li>
              <li><Link to="/integrations" className="hover:text-primary-400 transition-colors block w-fit">Integrations Library</Link></li>
              <li><Link to="/roadmap" className="hover:text-primary-400 transition-colors block w-fit">Product Roadmap</Link></li>
              <li><Link to="/status" className="hover:text-primary-400 transition-colors block w-fit flex items-center gap-2"><Signal className="w-3 h-3 text-green-500" /> System Status</Link></li>
            </FooterSection>

            {/* Column 3: Company */}
            <FooterSection title="Company">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors block w-fit">About Us</Link></li>
              <li><Link to="/customers" className="hover:text-primary-400 transition-colors block w-fit">Customer Stories</Link></li>
              <li><Link to="/careers" className="hover:text-primary-400 transition-colors block w-fit">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-primary-400 transition-colors block w-fit">Partner Program</Link></li>
              <li><Link to="/partners/startup" className="hover:text-primary-400 transition-colors block w-fit text-amber-400 font-medium">Startup Program</Link></li>
              <li><Link to="/media-kit" className="hover:text-primary-400 transition-colors block w-fit">Media Kit</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors block w-fit">Contact Sales</Link></li>
              <li><Link to="/trust" className="hover:text-primary-400 transition-colors block w-fit flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> Trust Center</Link></li>
            </FooterSection>

            {/* Column 4: Resources & Action */}
            <div className="flex flex-col gap-10 lg:py-0 py-6 border-t border-slate-800 lg:border-none">
              <div className="space-y-4">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 lg:text-slate-500">Resources</h4>
                 <ul className="space-y-3 text-sm text-slate-400">
                    <li><Link to="/blog" className="hover:text-primary-400 transition-colors block w-fit">Blog & Insights</Link></li>
                    <li><Link to="/docs" className="hover:text-primary-400 transition-colors block w-fit">Documentation</Link></li>
                    <li><Link to="/resources/roi" className="hover:text-primary-400 transition-colors block w-fit">ROI Calculator</Link></li>
                    <li><Link to="/security/report" className="hover:text-primary-400 transition-colors block w-fit flex items-center gap-2"><AlertCircle className="w-3 h-3" /> Report Vulnerability</Link></li>
                 </ul>
              </div>

              {/* Newsletter */}
              <div className="pt-2">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4 flex items-center gap-2">
                    Stay Updated
                 </h4>
                 <form onSubmit={handleSubscribe} className="relative group">
                    <label htmlFor="footer-email" className="sr-only">Email address</label>
                    <input 
                      id="footer-email"
                      type="email" 
                      placeholder="Email kerja Anda..." 
                      className="w-full bg-slate-900 border border-slate-800 text-white text-sm rounded-lg py-3 pl-4 pr-12 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 group-hover:border-slate-700"
                      required
                    />
                    <button 
                      type="submit" 
                      className="absolute right-1.5 top-1.5 p-1.5 bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white rounded-md transition-colors"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                 </form>
              </div>

              {/* Download Apps */}
              <div>
                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Get the App</h4>
                 <div className="flex flex-row gap-3 flex-wrap">
                   
                   {/* App Store */}
                   <Link to="/download" className="flex items-center gap-3 bg-black hover:bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 transition-all group focus:ring-2 focus:ring-primary-500 shadow-lg hover:shadow-primary-900/20 hover:-translate-y-0.5 min-h-[48px]">
                      <div className="text-white pb-1">
                        <AppleIcon />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[9px] uppercase text-slate-400 leading-none mb-1 font-medium tracking-wider">Download on the</span>
                         <span className="text-sm font-bold text-white leading-none font-sans">App Store</span>
                      </div>
                   </Link>

                   {/* Google Play */}
                   <Link to="/download" className="flex items-center gap-3 bg-black hover:bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 transition-all group focus:ring-2 focus:ring-primary-500 shadow-lg hover:shadow-primary-900/20 hover:-translate-y-0.5 min-h-[48px]">
                      <div className="text-white">
                         <PlayStoreIcon />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[9px] uppercase text-slate-400 leading-none mb-1 font-medium tracking-wider">GET IT ON</span>
                         <span className="text-sm font-bold text-white leading-none font-sans">Google Play</span>
                      </div>
                   </Link>

                 </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-900 flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="text-slate-500 text-xs text-center lg:text-left order-2 lg:order-1">
             &copy; {new Date().getFullYear()} PT Divistant Teknologi Indonesia. All rights reserved.
          </div>
          
          {/* Compliance Links - Enterprise Requirement */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-slate-500 font-medium order-1 lg:order-2">
             <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link to="/legal/dpa" className="hover:text-white transition-colors flex items-center gap-1"><Lock className="w-3 h-3" /> DPA</Link>
             <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
             <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
             <button 
               onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
               className="hover:text-white transition-colors flex items-center gap-1"
             >
               <Cookie className="w-3 h-3" /> Cookie Settings
             </button>
          </nav>
          
          {/* Controls */}
          <div className="flex gap-3 order-3">
             <button 
               onClick={toggleLanguage}
               className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 hover:border-slate-600 transition-colors bg-slate-900/50"
               aria-label={`Switch to ${language === 'id' ? 'English' : 'Indonesian'}`}
             >
                <Globe className="w-3 h-3" /> {language === 'id' ? 'ID' : 'EN'}
             </button>
             <button 
               onClick={toggleTheme}
               className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 hover:border-slate-600 transition-colors bg-slate-900/50"
               aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
             >
                {theme === 'light' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />} 
                {theme === 'light' ? 'Dark' : 'Light'}
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
