import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link to="/" className="flex items-center gap-2" aria-label="BizOps Homepage">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          BizOps
        </span>
      </Link>
    </div>
  );
};

export default NavbarLogo;

