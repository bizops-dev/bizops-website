import React, { useState } from 'react';
import { Search, ArrowRight, FileText, Box, BookOpen, User, HelpCircle, Layers, Wrench, Building } from 'lucide-react';
import Button from '../components/Button';
import EmptyState from '../components/EmptyState';
import { Link } from 'react-router-dom';
import { searchMockData } from '../data/content';
import SEO from '../components/SEO';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Stack from '../components/Stack';

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
      case 'product': return <Box className="w-4 h-4 text-blue-500 dark:text-blue-400 dark:text-blue-300" />;
      case 'solution': return <Layers className="w-4 h-4 text-indigo-500 dark:text-indigo-400 dark:text-indigo-300" />;
      case 'tool': return <Wrench className="w-4 h-4 text-amber-500 dark:text-amber-400 dark:text-amber-300" />;
      case 'docs': return <FileText className="w-4 h-4 text-orange-500 dark:text-orange-400 dark:text-orange-300" />;
      case 'blog': return <BookOpen className="w-4 h-4 text-green-500 dark:text-green-400 dark:text-green-300" />;
      case 'partner': return <User className="w-4 h-4 text-purple-500 dark:text-purple-400 dark:text-purple-300" />;
      case 'company': return <Building className="w-4 h-4 text-slate-500 dark:text-slate-400 dark:text-slate-300" />;
      default: return <HelpCircle className="w-4 h-4 text-slate-400 dark:text-slate-300" />;
    }
  };

  return (
    <div className="pt-24 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <SEO title="Search Results | BizOps" description="Cari modul, fitur, panduan, dan artikel di seluruh ekosistem BizOps." />
      
      <Container className="px-4 md:px-6 lg:px-8" size="7xl">
        
        {/* Search Header */}
        <div className="mb-12 text-center">
           <Typography variant="h1" as="h1">Pencarian Global</Typography>
           <Container size="2xl" className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari 'HRIS', 'Integrasi API', atau 'Harga'..." 
                className="w-full pl-14 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark: bg-slate-900 text-slate-900 dark:text-white text-white shadow-xl shadow-slate-200/20 dark:shadow-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 outline-none text-lg transition-all [&:-webkit-autofill]:shadow-[0_0_0_100px_#0f172a_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                autoFocus
                aria-label="Search query"
              />
              <Search className="absolute left-5 top-5 text-slate-400 dark:text-slate-300 w-6 h-6" aria-hidden="true" />
           </Container>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="radiogroup" aria-label="Content type filter">
           {['all', 'product', 'solution', 'tool', 'docs', 'blog', 'company'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === f 
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 dark:text-white border-slate-900 dark:border-white' 
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
                aria-pressed={filter === f}
              >
                 {f === 'all' ? 'Semua' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
           ))}
        </div>

        {/* Results */}
        <div className="space-y-4" role="region" aria-live="polite">
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
                actionLabel="Lihat Semua Fitur"
                onAction={() => window.location.href = '/platform'}
              />
           ) : (
              filteredResults.map((res, idx) => (
                 <Link 
                    key={idx} 
                    to={res.path} // Now using direct path from data
                    className="block bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all group cursor-pointer"
                 >
                    <Stack direction="horizontal" gap={2} align="center" className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-300 mb-2 uppercase tracking-wider font-bold">
                       {getIcon(res.category)}
                       <span>{res.category}</span>
                       <span className="text-slate-300 dark:text-slate-700 dark:text-slate-200">•</span>
                       <span>{res.tag}</span>
                    </Stack>
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{res.title}</Typography>
                    <Typography variant="caption" className="text-slate-600 dark:text-slate-400 dark:text-slate-300 leading-relaxed">{res.snippet}</Typography>
                 </Link>
              ))
           )}
        </div>

      </Container>
    </div>
  );
};

export default SearchPage;
