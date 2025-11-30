import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import NotificationCenter from '../NotificationCenter';
import MobileMenu from './MobileMenu';

type NavbarMobileProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onDemoClick: () => void;
};

const NavbarMobile: React.FC<NavbarMobileProps> = ({ isOpen, onToggle, onClose, onDemoClick }) => {
  return (
    <>
      <div className="lg:hidden flex items-center gap-4">
        <NotificationCenter />
        <Link to="/search" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-2" aria-label="Search">
          <Search className="w-6 h-6" />
        </Link>
        <button
          onClick={onToggle}
          className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 focus:outline-none p-2"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      <MobileMenu isOpen={isOpen} onClose={onClose} onDemoClick={onDemoClick} />
    </>
  );
};

export default NavbarMobile;

