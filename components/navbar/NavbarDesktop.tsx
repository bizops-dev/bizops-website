import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import Button from '../Button';
import NotificationCenter from '../NotificationCenter';
import MegaMenu from './MegaMenu';
import { servicesItems } from '../../data/navData';

type NavbarDesktopProps = {
  onDemoClick: () => void;
};

const NavbarDesktop: React.FC<NavbarDesktopProps> = () => {

  return (
    <nav className="hidden lg:flex space-x-6 items-center h-full" aria-label="Main Navigation">
      {/* MENU 1: PLATFORM */}
      <div className="group h-full flex items-center">
        <Link to="/platform" className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 transition-colors py-2 px-1">
          Platform <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
        <MegaMenu type="platform" />
      </div>

      {/* MENU 2: SOLUTIONS */}
      <div className="group h-full flex items-center">
        <Link to="/solutions" className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 transition-colors py-2 px-1">
          Solutions <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
        <MegaMenu type="solutions" />
      </div>

      {/* MENU 3: SERVICES */}
      <div className="group relative h-full flex items-center">
        <Link to="/services" className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm flex items-center gap-1 transition-colors py-2 px-1">
          Services <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
        <div className="absolute top-full left-0 mt-0 w-80 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left p-2 z-50 translate-y-2 group-hover:translate-y-0">
          {servicesItems.map((item) => (
            <Link 
              key={item.to} 
              to={item.to} 
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all"
            >
              <item.icon className="w-4 h-4 text-slate-400 flex-shrink-0" /> {item.label}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/pricing" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-colors py-2 px-1">
        Pricing
      </Link>

      {/* MENU 4: RESOURCES */}
      <div className="group h-full flex items-center">
        <button className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 focus:outline-none transition-colors py-2 px-1">
          Resources <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </button>
        <MegaMenu type="resources" />
      </div>

      {/* MENU 5: COMPANY */}
      <div className="group h-full flex items-center">
        <button className="h-full flex items-center text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-sm gap-1 focus:outline-none transition-colors py-2 px-1">
          Company <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </button>
        <MegaMenu type="company" />
      </div>
    </nav>
  );
};

export const NavbarActions: React.FC<{ onDemoClick: () => void }> = ({ onDemoClick }) => {
  return (
    <div className="hidden lg:flex items-center gap-4 ml-4">
      <NotificationCenter />
      <Link to="/search" className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2" aria-label="Search">
        <Search className="w-5 h-5" />
      </Link>
      <Link to="/login" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors">
        Login
      </Link>
      <Button size="sm" className="shadow-md shadow-primary-100 dark:shadow-none" onClick={onDemoClick}>
        Book a Demo
      </Button>
    </div>
  );
};

export default NavbarDesktop;

