
import React, { useState } from 'react';
import { Search, ArrowRight, FileText, Box, BookOpen, User, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import EmptyState from '../components/EmptyState';
import { Link } from 'react-router-dom';
import { searchMockData } from '../data/content';
import SEO from '../components/SEO';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredResults = searchMockData.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) || item.snippet.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'all' || item.category === filter;
    return matchesQuery && matchesFilter;
  });

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'product': return <Box className="w-4 h-4 text-blue-500" />;
      case 'docs': return <FileText className="w-4 h-4 text-orange-500" />;
      case 'blog': return <BookOpen className="w-4 h-4 text-green-500" />;
      case 'partner': return <User className="w-4 h-4 text-purple-500" />;
      default: return <HelpCircle className="w-4 h-4 text-slate-400" />;
    }
  };

  const getResultUrl = (item: typeof searchMockData[0]) => {
    // Map search results to actual URLs based on category and title
    if (item.category === 'product') {
      if (item.title.includes('Human Capital') || item.title.includes('HRIS')) return '/platform/hr';
      if (item.title.includes('Finance')) return '/platform/finance';
      if (item.title.includes('Operations')) return '/platform/operations';
      if (item.title.includes('Sales')) return '/platform/sales';
      if (item.title.includes('Supply Chain')) return '/platform/supply-chain';
      return '/platform';
    }
    if (item.category === 'docs') {
      if (item.title.includes('Integrasi') || item.title.includes('Payment')) return '/integrations';
      if (item.title.includes('Error') || item.title.includes('Budget')) return '/docs';
      return '/docs';
    }
    if (item.category === 'blog') {
      return '/blog';
    }
    if (item.category === 'partner') {
      return '/partners';
    }
    return '/';
  };

  return (
    <div className="pt-16 pb-24 bg-white min-h-[80vh]">
      <SEO title="Search Results" description="Global search across BizOps ecosystem." />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header */}
        <div className="mb-12 text-center">
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">Pencarian Global</h1>
           <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Coba cari 'Integrasi SAP', 'Lupa Password', atau 'Payroll'..." 
                className="w-full pl-14 pr-4 py-4 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none text-lg transition-all"
                autoFocus
                aria-label="Search query"
              />
              <Search className="absolute left-5 top-5 text-slate-400 w-6 h-6" aria-hidden="true" />
           </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="radiogroup" aria-label="Content type filter">
           {['all', 'product', 'docs', 'blog', 'partner'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                aria-pressed={filter === f}
              >
                 {f === 'all' ? 'Semua' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
           ))}
        </div>

        {/* Results */}
        <div className="space-y-6" role="region" aria-live="polite">
           {!query ? (
              <EmptyState
                type="empty"
                icon={Search}
                title="Mulai Pencarian"
                description="Ketikan kata kunci di atas untuk mencari di seluruh konten BizOps."
              />
           ) : filteredResults.length === 0 ? (
              <EmptyState
                type="no-results"
                icon={Search}
                title={`Tidak ditemukan hasil untuk "${query}"`}
                description="Coba gunakan kata kunci yang lebih umum atau periksa ejaan Anda."
                actionLabel="Buka Dokumentasi"
                onAction={() => window.location.href = '/docs'}
              />
           ) : (
              filteredResults.map((res, idx) => (
                 <Link 
                    key={idx} 
                    to={getResultUrl(res)}
                    className="block bg-white p-6 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all group cursor-pointer"
                 >
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                       {getIcon(res.category)}
                       <span>{res.path}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:underline decoration-primary-300 underline-offset-4">
                       {res.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                       {res.snippet}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                       <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded">
                          {res.tag}
                       </span>
                       <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </div>
                 </Link>
              ))
           )}
        </div>

      </div>
    </div>
  );
};

export default SearchPage;
