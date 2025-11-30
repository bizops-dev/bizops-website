import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCasesData } from '../data/useCasesContent';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import Pagination from '../components/Pagination';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Filter, Search, X, Briefcase, Layers } from 'lucide-react';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER } from '../utils/animation';
import { StaggeredText } from '../components/ui/motion-text';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Stack from '../components/Stack';

// --- Reusing SpotlightCard Concept ---
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(14, 165, 233, 0.15)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const ITEMS_PER_PAGE = 6;

const UseCasesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cases = Object.values(useCasesData);

  // Extract unique industries and categories
  const industries = ['All', ...Array.from(new Set(cases.map(c => c.industry))).sort()];
  const categories = ['All', ...Array.from(new Set(cases.map(c => c.category))).sort()];

  // Filtering Logic
  const filteredCases = cases.filter(c => {
    const matchIndustry = selectedIndustry === 'All' || c.industry === selectedIndustry;
    const matchCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchIndustry && matchCategory && matchSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
  const paginatedCases = filteredCases.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedIndustry, selectedCategory, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('case-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Calculate counts for sidebar
  const getIndustryCount = (industry: string) => {
    let filtered = cases;
    // If a category is selected, count only within that category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(c => c.category === selectedCategory);
    }
    
    if (industry === 'All') return filtered.length;
    return filtered.filter(c => c.industry === industry).length;
  };

  const getCategoryCount = (category: string) => {
    let filtered = cases;
    // If an industry is selected, count only within that industry
    if (selectedIndustry !== 'All') {
      filtered = filtered.filter(c => c.industry === selectedIndustry);
    }

    if (category === 'All') return filtered.length;
    return filtered.filter(c => c.category === category).length;
  };

  const clearFilters = () => {
    setSelectedIndustry('All');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30">
      <SEO 
        title="Success Stories & Use Cases | BizOps" 
        description="Pelajari bagaimana BizOps menyelesaikan tantangan bisnis unik melalui custom development dan implementasi strategis." 
      />

      {/* Hero Section - Full Height & No Search Bar */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-[#0B1120] overflow-hidden border-b border-white/5 pt-20">
        {/* Abstract Background Mesh */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm mx-auto"
           >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <Typography variant="caption" className="text-blue-300">Case Studies Library</Typography>
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
           >
             Real Problems. <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 animate-gradient-x">
               Solved with Intelligence.
             </span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light"
           >
              Jelajahi koleksi implementasi strategis BizOps di berbagai industri. Temukan solusi yang relevan untuk tantangan bisnis Anda.
           </motion.p>
        </div>
      </div>

      {/* Main Content with Sidebar Layout */}
      <Section className="bg-slate-50 dark:bg-slate-950/50 pt-16 pb-32" id="case-grid">
         <Container size="7xl">
            <Stack direction="col" gap={12}>
               
               {/* Sidebar Filter (Desktop) */}
               <div className="hidden lg:block w-72 flex-shrink-0">
                  <div className="sticky top-28 space-y-10">
                     
                     {/* Filter by Category/Function */}
                     <div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-400 dark:text-slate-500 tracking-wider"><Layers className="w-3.5 h-3.5" /> Solution Type</Typography>
                        <div className="space-y-1">
                           {categories.map((cat) => (
                              <button
                                 key={cat}
                                 onClick={() => setSelectedCategory(cat)}
                                 className={`
                                    w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex justify-between items-center group
                                    ${selectedCategory === cat 
                                       ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-md ring-1 ring-slate-200 dark:ring-slate-700' 
                                       : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'}
                                 `}
                              >
                                 <span>{cat}</span>
                                 <span className={`
                                    text-xs px-2 py-0.5 rounded-md transition-colors
                                    ${selectedCategory === cat 
                                       ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                                       : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}
                                 `}>
                                    {getCategoryCount(cat)}
                                 </span>
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="w-full h-px bg-slate-200 dark:bg-slate-800"></div>

                     {/* Filter by Industry */}
                     <div>
                        <Typography variant="h3" as="h3" className="font-bold text-slate-400 dark:text-slate-500 tracking-wider"><Briefcase className="w-3.5 h-3.5" /> Industry</Typography>
                        <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                           {industries.map((ind) => (
                              <button
                                 key={ind}
                                 onClick={() => setSelectedIndustry(ind)}
                                 className={`
                                    w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex justify-between items-center group
                                    ${selectedIndustry === ind 
                                       ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-md ring-1 ring-slate-200 dark:ring-slate-700' 
                                       : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'}
                                 `}
                              >
                                 <span className="truncate pr-2">{ind}</span>
                                 <span className={`
                                    text-xs px-2 py-0.5 rounded-md flex-shrink-0 transition-colors
                                    ${selectedIndustry === ind 
                                       ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                                       : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}
                                 `}>
                                    {getIndustryCount(ind)}
                                 </span>
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* CTA Mini Sidebar */}
                     <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-6 text-white text-center shadow-xl border border-slate-700/50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-all duration-500"></div>
                        <Typography variant="h4" as="h4">Custom Solution?</Typography>
                        <Typography variant="caption" className="text-slate-400">Tim engineer kami siap membangun modul spesifik untuk bisnis Anda.</Typography>
                        <Link to="/contact" className="relative z-10">
                           <Button size="sm" className="w-full bg-white text-slate-900 hover:bg-slate-100 border-none font-bold">
                              Konsultasi Gratis
                           </Button>
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Mobile Filter (Horizontal Scroll - Two Rows) */}
               <div className="lg:hidden -mx-4 px-4 space-y-3 pb-4 sticky top-16 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-sm z-30 py-4 border-b border-slate-200 dark:border-slate-800">
                  {/* Category Pills */}
                  <div className="overflow-x-auto scrollbar-hide pb-1">
                     <div className="flex gap-2 w-max px-4">
                        {categories.map((cat) => (
                           <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={`
                                 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border
                                 ${selectedCategory === cat 
                                    ? 'bg-primary-600 text-white border-primary-600 shadow-md' 
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'}
                              `}
                           >
                              {cat}
                           </button>
                        ))}
                     </div>
                  </div>
                  {/* Industry Pills */}
                  <div className="overflow-x-auto scrollbar-hide">
                     <div className="flex gap-2 w-max px-4">
                        {industries.map((ind) => (
                           <button
                              key={ind}
                              onClick={() => setSelectedIndustry(ind)}
                              className={`
                                 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border
                                 ${selectedIndustry === ind 
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md' 
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'}
                           `}
                           >
                              {ind}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Grid Content */}
               <div className="flex-1 min-h-[600px]">
                  {/* Search Bar & Result Info Moved Here */}
                  <div className="mb-8 space-y-6">
                     {/* Search Bar */}
                     <div className="relative group max-w-lg">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-500 blur-sm"></div>
                        <div className="relative bg-white dark:bg-slate-900 rounded-xl flex items-center border border-slate-200 dark:border-slate-800 group-focus-within:border-blue-500/50 transition-colors">
                           <Search className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                           <input 
                              type="text" 
                              placeholder="Cari solusi atau masalah (e.g. Inventory)..." 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm font-medium"
                           />
                           {searchQuery && (
                              <button onClick={() => setSearchQuery('')} className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                 <X className="w-4 h-4" />
                              </button>
                           )}
                        </div>
                     </div>

                     <div className="flex justify-between items-center flex-wrap gap-4">
                        <Typography variant="caption" className="text-slate-500 dark:text-slate-400">Menampilkan <span className="font-bold text-slate-900 dark:text-white">{Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredCases.length)} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredCases.length)}</span> dari <span className="font-bold text-slate-900 dark:text-white">{filteredCases.length}</span> studi kasus</Typography>
                        
                        {/* Reset Filter Button */}
                        {(searchQuery || selectedIndustry !== 'All' || selectedCategory !== 'All') && (
                           <button 
                              onClick={clearFilters}
                              className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1.5 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg transition-colors hover:bg-red-100 dark:hover:bg-red-900/30"
                           >
                              <X className="w-3.5 h-3.5" /> Clear All Filters
                           </button>
                        )}
                     </div>
                  </div>

                  {filteredCases.length === 0 ? (
                     <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-[2rem] border border-dashed border-slate-300 dark:border-slate-700">
                        <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                           <Search className="w-10 h-10" />
                        </div>
                        <Typography variant="h3" as="h3">No Results Found</Typography>
                        <Typography variant="body" className="text-slate-500 dark:text-slate-400">We couldn't find any case studies matching your current filters. Try adjusting your search criteria.</Typography>
                        <Button variant="outline" onClick={clearFilters}>
                           Clear Filters
                        </Button>
                     </div>
                  ) : (
                     <>
                        <motion.div 
                          layout
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                           <AnimatePresence mode='popLayout'>
                              {paginatedCases.map((item) => (
                                 <motion.div 
                                    key={item.id} 
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                 >
                                    <Link to={`/use-cases/${item.id}`} className="block h-full">
                                       <SpotlightCard className="rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300 group border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                                          <div className="flex items-start justify-between mb-6">
                                             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 bg-${item.color}-50 dark:bg-${item.color}-900/20 ring-1 ring-${item.color}-100 dark:ring-${item.color}-900/50 shadow-sm`}>
                                                <item.icon className="w-7 h-7" />
                                             </div>
                                             <Stack direction="col" gap={2} className="items-end">
                                                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider border border-slate-200 dark:border-slate-700">
                                                   {item.industry}
                                                </span>
                                                <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2.5 py-0.5 rounded-full border border-primary-100 dark:border-primary-900/30">
                                                   {item.category}
                                                </span>
                                             </Stack>
                                          </div>
                                          
                                          <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 leading-tight">{item.title}</Typography>
                                          <Typography variant="body" className="text-slate-400 dark:text-slate-500 tracking-wide">{item.subtitle}</Typography>
                                          <div className="h-px w-10 bg-slate-200 dark:bg-slate-700 mb-4"></div>
                                          <Typography variant="body" className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.challenge}</Typography>

                                          <div className="flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300 pt-6 border-t border-slate-100 dark:border-slate-800">
                                             Read Full Story <ArrowRight className="w-4 h-4 ml-2 text-primary-500" />
                                          </div>
                                       </SpotlightCard>
                                    </Link>
                                 </motion.div>
                              ))}
                           </AnimatePresence>
                        </motion.div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                           <Pagination 
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={handlePageChange}
                           />
                        )}
                     </>
                  )}
               </div>
            </Stack>
         </Container>
      </Section>
    </div>
  );
};

export default UseCasesPage;
