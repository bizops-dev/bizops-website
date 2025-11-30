import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogContent, blogPosts } from '../data/content';
import Button from '../components/Button';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import CardSlider from '../components/CardSlider'; // Import CardSlider
import { 
  Calendar, 
  ArrowRight, 
  Search, 
  X, 
  BookOpen, 
  TrendingUp,
  Clock,
  Filter,
  Layers,
  Hash
} from 'lucide-react';

// --- Spotlight Card Component ---
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(59, 130, 246, 0.1)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) => {
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
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
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

const BlogPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Extract unique categories and counts
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category))).sort()];
  
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return blogPosts.length;
    return blogPosts.filter(p => p.category === cat).length;
  };

  // Filter Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const featuredPost = blogPosts.find(p => p.slug === blogContent.featured.slug) || blogPosts[0];
  // If filtering, show all matches. If not filtering (All), exclude featured from grid to avoid duplicate
  const gridPosts = (selectedCategory === 'All' && !searchQuery) 
      ? filteredPosts.filter(p => p.slug !== featuredPost.slug) 
      : filteredPosts;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30">
      <SEO 
        title="Insights & Strategy | BizOps Blog" 
        description="Pusat pengetahuan utama untuk pemimpin bisnis Indonesia. Analisis mendalam tentang regulasi, strategi, dan teknologi enterprise." 
      />

      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#0B1120]">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-screen"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 mix-blend-screen"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md"
            >
               <TrendingUp className="w-4 h-4 text-blue-400" />
               <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Executive Insights</span>
            </motion.div>
            
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
            >
               Intelligence for <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 animate-gradient-x">
                  Future-Ready Leaders
               </span>
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
               Analisis mendalam, strategi transformasi, dan panduan teknis untuk mengakselerasi pertumbuhan bisnis Anda di era digital.
            </motion.p>
         </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen relative z-20 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            
            {/* FEATURED POST (Only on 'All' view) */}
            {!searchQuery && selectedCategory === 'All' && featuredPost && (
               <div className="mb-24">
                  <div className="flex items-center gap-2 mb-6">
                     <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                     <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Editor's Choice</span>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`} className="group relative block w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:-translate-y-1 duration-500">
                     <div className="absolute inset-0 bg-slate-900">
                        <img 
                           src={featuredPost.image} 
                           alt={featuredPost.title}
                           className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                     </div>
                     
                     <div className="relative p-8 md:p-16 lg:p-20 flex flex-col justify-end min-h-[500px] md:min-h-[600px]">
                        <div className="flex flex-wrap items-center gap-4 mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                           <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                              {featuredPost.category}
                           </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                           {featuredPost.title}
                        </h2>
                        
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                           {featuredPost.summary}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-8 text-sm text-slate-300 font-medium border-t border-white/10 pt-8">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                 {featuredPost.author.charAt(0)}
                              </div>
                              <span className="text-white">{featuredPost.author.split(',')[0]}</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-blue-400" /> {featuredPost.date}
                           </div>
                           <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-blue-400" /> 12 Min Read
                           </div>
                           <div className="ml-auto flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
                              Read Article <ArrowRight className="w-5 h-5 text-blue-500" />
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
            )}

            <div className="flex flex-col lg:flex-row gap-16">
               
               {/* --- LEFT SIDEBAR (Filter & Search) --- */}
               <div className="lg:w-72 flex-shrink-0">
                  <div className="sticky top-28 space-y-8">
                     
                     {/* Search */}
                     <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-500 blur-sm"></div>
                        <div className="relative bg-white dark:bg-slate-900 rounded-xl flex items-center border border-slate-200 dark:border-slate-800 group-focus-within:border-blue-500/50 transition-colors">
                           <Search className="absolute left-4 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                           <input 
                              type="text" 
                              placeholder="Search articles..." 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm font-medium"
                           />
                           {searchQuery && (
                              <button onClick={() => setSearchQuery('')} className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                 <X className="w-3.5 h-3.5" />
                              </button>
                           )}
                        </div>
                     </div>

                     {/* Categories */}
                     <div>
                        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2 px-2">
                           <Layers className="w-3.5 h-3.5" /> Topics
                        </h3>
                        <div className="space-y-1">
                           {categories.map((cat) => (
                              <button
                                 key={cat}
                                 onClick={() => setSelectedCategory(cat)}
                                 className={`
                                    w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex justify-between items-center group
                                    ${selectedCategory === cat 
                                       ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md ring-1 ring-slate-200 dark:ring-slate-800' 
                                       : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'}
                                 `}
                              >
                                 <span className="truncate pr-2">{cat}</span>
                                 <span className={`
                                    text-[10px] px-2 py-0.5 rounded-md flex-shrink-0 transition-colors font-bold
                                    ${selectedCategory === cat 
                                       ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                                       : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}
                                 `}>
                                    {getCategoryCount(cat)}
                                 </span>
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* Subscribe Mini Widget */}
                     <div className="bg-[#0B1120] rounded-2xl p-6 text-white relative overflow-hidden group border border-slate-800 hidden lg:block">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/30 transition-all"></div>
                        <h4 className="font-bold mb-2 relative z-10">Weekly Digest</h4>
                        <p className="text-slate-400 text-xs mb-4 relative z-10">Get strategic insights delivered to your inbox every Monday.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="relative z-10 space-y-2">
                           <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                           <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-500 border-none text-xs">Subscribe</Button>
                        </form>
                     </div>

                  </div>
               </div>

               {/* --- RIGHT CONTENT (Grid) --- */}
               <div className="flex-1">
                  
                  {/* Results Header */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                     <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {searchQuery ? `Search Results: "${searchQuery}"` : (selectedCategory === 'All' ? 'Latest Articles' : selectedCategory)}
                     </h2>
                     <span className="text-sm font-medium text-slate-500">
                        {gridPosts.length} Articles
                     </span>
                  </div>

                  {gridPosts.length > 0 ? (
                     <CardSlider desktopClassName="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {gridPosts.map((post, idx) => (
                           <motion.div
                              key={post.slug}
                              layout
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="h-full" // Ensure full height for slider consistency
                           >
                              <Link to={`/blog/${post.slug}`} className="h-full block">
                                 <SpotlightCard className="h-full rounded-[2rem] flex flex-col hover:shadow-2xl transition-all duration-300 group">
                                    <div className="aspect-[16/10] overflow-hidden border-b border-slate-100 dark:border-slate-800 relative">
                                       <img 
                                          src={post.image} 
                                          alt={post.title}
                                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                       />
                                       <div className="absolute top-4 left-4">
                                          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700 shadow-sm">
                                             {post.category}
                                          </span>
                                       </div>
                                    </div>
                                    
                                    <div className="p-8 flex flex-col flex-1">
                                       <div className="flex items-center gap-3 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min</span>
                                       </div>
                                       
                                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                          {post.title}
                                       </h3>
                                       
                                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                          {post.summary}
                                       </p>
                                       
                                       <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                                             <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] border border-slate-200 dark:border-slate-700">
                                                {post.author.charAt(0)}
                                             </div>
                                             {post.author.split(',')[0]}
                                          </div>
                                          <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                             <ArrowRight className="w-4 h-4" />
                                          </div>
                                       </div>
                                    </div>
                                 </SpotlightCard>
                              </Link>
                           </motion.div>
                        ))}
                     </CardSlider>
                  ) : (
                     <div className="py-20 text-center bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No articles found</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                           Try adjusting your search or category filter.
                        </p>
                        <button 
                           onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                           className="mt-4 text-blue-600 text-sm font-bold hover:underline"
                        >
                           Clear all filters
                        </button>
                     </div>
                  )}

                  {/* Mobile Newsletter (Visible only on small screens where sidebar widget is hidden) */}
                  <div className="mt-16 lg:hidden bg-[#0B1120] rounded-2xl p-8 text-white text-center border border-slate-800">
                     <h3 className="font-bold text-xl mb-2">Weekly Digest</h3>
                     <p className="text-slate-400 text-sm mb-6">Get strategic insights delivered to your inbox.</p>
                     <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 border-none font-bold">Subscribe Free</Button>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
};

export default BlogPage;
