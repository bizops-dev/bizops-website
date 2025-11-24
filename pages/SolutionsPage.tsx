import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData, rolesData } from '../data/content';
import Button from '../components/Button';
import { ArrowRight, LayoutGrid, Briefcase, Users } from 'lucide-react';
import SEO from '../components/SEO';

const SolutionsPage: React.FC = () => {
  const industries = Object.entries(industriesData).map(([key, val]) => ({ id: key, ...(val as any) }));
  const roles = Object.entries(rolesData).map(([key, val]) => ({ id: key, ...(val as any) }));

  return (
    <div className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO title="Solutions Overview" description="Industry-specific and Role-based ERP solutions tailored for your business context." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
           <div className="inline-flex items-center justify-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl mb-6 text-primary-600 dark:text-primary-400">
              <LayoutGrid className="w-8 h-8" />
           </div>
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Tailored for Your Context.</h1>
           <p className="text-xl text-slate-600 dark:text-slate-400">
              Because the operational needs of a Construction firm are vastly different from a Retail chain. Explore solutions built specifically for your industry and role.
           </p>
        </div>

        {/* Industries Section */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                 <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">By Industry</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                 <Link key={ind.id} to={`/solutions/${ind.id}`} className="group">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all h-full flex flex-col">
                       <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                          <ind.icon className="w-6 h-6" />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{ind.title}</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                          {ind.description}
                       </p>
                       <div className="text-primary-600 dark:text-primary-400 text-sm font-bold flex items-center gap-2">
                          Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </div>

        {/* Roles Section */}
        <div>
           <div className="flex items-center gap-3 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg">
                 <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">By Role</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                 <Link key={role.id} to={`/role/${role.id}`} className="group">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all h-full flex items-center gap-6">
                       <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:border-primary-100 dark:group-hover:border-primary-900 transition-colors shrink-0">
                          <role.icon className="w-7 h-7" />
                       </div>
                       <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{role.title}</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">{role.subtitle}</p>
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default SolutionsPage;