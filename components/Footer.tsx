import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Instagram, Mail, MapPin, Phone, Moon, Sun, ChevronRight, ShieldCheck, Signal, ArrowUpRight, Lock, Bug } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

// --- SVG Assets for App Stores ---
const AppleIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" role="img" aria-label="Apple Logo"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.74 1.6.19 2.72.79 3.42 1.82-3.06 1.86-2.51 5.71.6 7.02-.62 1.58-1.53 3.14-2.79 4.13zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
);

const PlayStoreIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" role="img" aria-label="Google Play Logo"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.89l1.434 1.433 4.505-2.503a1 1 0 0 0 .003-1.737l-4.507-2.505-1.435 1.435zm-9.98 10.208l10.66-10.66 2.452 2.45-11.793 6.552a1 1 0 0 1-1.319-1.658zM4.52 1.088l11.795 6.553-2.454 2.45-10.66-10.66A1 1 0 0 1 4.52 1.088z" /></svg>
);

const FooterLink = ({ to, children, isExternal = false, icon: Icon }: { to: string, children: React.ReactNode, isExternal?: boolean, icon?: any }) => (
  <li>
    <Link 
      to={to} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-2 transition-colors text-[14px] py-1 text-slate-400 hover:text-white"
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-primary-400 transition-colors" />}
      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block truncate">{children}</span>
      {isExternal && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />}
    </Link>
  </li>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 transition-all duration-300 border border-slate-800 hover:border-white hover:-translate-y-1"
  >
    <Icon className="w-5 h-5" />
  </a>
);

// New Component for Collapsible Sections
const FooterLinkGroup = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-5 border-b border-slate-800/50 pb-5 md:border-none md:pb-0">
      <div 
        className="flex items-center justify-between cursor-pointer md:cursor-default group select-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white md:group-hover:text-slate-500 transition-colors">{title}</h3>
        <ChevronRight className={`w-4 h-4 text-slate-500 md:hidden transition-transform duration-300 ${isOpen ? 'rotate-90 text-primary-400' : ''}`} />
      </div>
      
      <div className={`space-y-2.5 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-0'}`}>
         {children}
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
    <footer className="bg-[#0B0F19] text-white border-t border-slate-900/50 font-sans relative z-10 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 xl:gap-12 mb-20">
          
          {/* BRAND COLUMN (Left) */}
          <div className="md:col-span-12 lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3 group w-fit focus:outline-none" aria-label="BizOps Home">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg shadow-white/5">
                <div className="w-5 h-5 bg-[#0B0F19] rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">BizOps</span>
            </Link>
            
            {/* Short Boilerplate */}
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-sm">
              Sistem operasi bisnis adaptif yang menyatukan HR, Finance, dan Operasional dalam satu platform aman terintegrasi.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-slate-400 text-[13px]">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Eco-S Sahid Sudirman Residence<br/>Jl. Jenderal Sudirman No.86, Jakarta 10250</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-[13px] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href="mailto:hello@bizops.id">hello@bizops.id</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-[13px] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-slate-500" />
                <a href="tel:+622139702834">+62 21 3970 2834</a>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Youtube} label="YouTube" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* LINKS COLUMNS (Middle) - Now using FooterLinkGroup for mobile accordion */}
          {/* Changed grid-cols-2 to grid-cols-1 for mobile stack */}
          <div className="md:col-span-7 lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 md:gap-y-8">
            
            {/* Platform */}
            <FooterLinkGroup title="Platform">
              <ul className="space-y-2.5">
                <FooterLink to="/platform">Overview</FooterLink>
                <FooterLink to="/platform/modules/hr">HR System</FooterLink>
                <FooterLink to="/platform/modules/finance">Finance</FooterLink>
                <FooterLink to="/platform/modules/operations">Operations</FooterLink>
                <FooterLink to="/platform/technologies/integration">Integrations</FooterLink>
                <FooterLink to="/pricing">Pricing</FooterLink>
                <FooterLink to="/roadmap">Roadmap</FooterLink>
              </ul>
            </FooterLinkGroup>

            {/* Company */}
            <FooterLinkGroup title="Company">
              <ul className="space-y-2.5">
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/customers">Customers</FooterLink>
                <FooterLink to="/partners">Partners</FooterLink>
                <FooterLink to="/careers">Careers</FooterLink>
                <FooterLink to="/media-kit">Media Kit</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/trust" icon={ShieldCheck}>Trust Center</FooterLink>
              </ul>
            </FooterLinkGroup>

            {/* Resources */}
            <FooterLinkGroup title="Resources">
              <ul className="space-y-2.5">
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/docs">Docs</FooterLink>
                <FooterLink to="/tools/roi-calculator">ROI Calc</FooterLink>
                <FooterLink to="/tools/assessment">Assessment</FooterLink>
                <FooterLink to="/status" icon={Signal}>Status</FooterLink>
              </ul>
            </FooterLinkGroup>

          </div>

          {/* NEWSLETTER & APP (Right) */}
          <div className="md:col-span-5 lg:col-span-3 space-y-8">
            
            {/* Newsletter */}
            <div className="space-y-4 bg-slate-900/50 p-5 rounded-xl border border-slate-800/50 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-white">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="relative">
                <input 
                  type="email" 
                  placeholder="Email kerja..." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-3 pr-10 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 transition-all"
                  required
                />
                <button 
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 p-1 bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white rounded-md transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Mobile Apps - Compact */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Mobile App</h3>
              <div className="flex flex-col gap-2.5">
                <a href="#" className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg p-2.5 pr-4 transition-all group">
                  <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center group-hover:scale-105 transition-transform">
                    <AppleIcon />
                  </div>
                  <div className="text-left">
                    <div className="text-[9px] uppercase font-bold text-slate-500">Download on the</div>
                    <div className="text-xs font-bold text-white leading-tight">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg p-2.5 pr-4 transition-all group">
                  <div className="w-8 h-8 bg-slate-800 text-white border border-slate-700 rounded flex items-center justify-center group-hover:scale-105 transition-transform">
                    <PlayStoreIcon />
                  </div>
                  <div className="text-left">
                    <div className="text-[9px] uppercase font-bold text-slate-500">Get it on</div>
                    <div className="text-xs font-bold text-white leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright & Language */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} PT Divistant Teknologi Indonesia.
            </div>
            
            {/* Lang/Theme Switcher Pill - Compact */}
            <div className="hidden md:flex items-center gap-0.5 bg-slate-900/80 p-0.5 rounded-full border border-slate-800">
              <button 
                onClick={toggleLanguage}
                className="px-2 py-1 text-[10px] font-bold rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                ID
              </button>
              <div className="w-px h-2.5 bg-slate-800"></div>
              <button 
                onClick={toggleTheme}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* Legal Links - Compact */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-slate-500">
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/legal/dpa" className="hover:text-white transition-colors flex items-center gap-1"><Lock className="w-3 h-3" /> DPA</Link>
            <Link to="/security/report" className="hover:text-white transition-colors flex items-center gap-1"><Bug className="w-3 h-3" /> Report Bug</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
