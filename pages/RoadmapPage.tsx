import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapData } from '../data/content';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { 
  Plus, 
  ThumbsUp, 
  MessageSquare, 
  Rocket, 
  Clock, 
  Map, 
  CheckCircle2, 
  Timer, 
  Sparkles,
  Send,
  Loader2,
  Lightbulb,
  Search,
  Filter,
  X
} from 'lucide-react';
import Typography from '../components/Typography';

const RoadmapPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [userVoted, setUserVoted] = useState<Record<string, boolean>>({});
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract all unique tags for filter
  const allTags = ['All', ...Array.from(new Set(roadmapData.flatMap(col => col.items.map(item => item.tag))))];

  const handleVote = (id: string) => {
    if (userVoted[id]) return; 

    setVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    setUserVoted(prev => ({ ...prev, [id]: true }));
  };

  const handleFeatureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        setShowRequestForm(false);
      }, 2000);
    }, 1500);
  };

  const getStatusIcon = (id: string) => {
    switch (id) {
      case 'now': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'next': return <Timer className="w-5 h-5 text-blue-500" />;
      case 'later': return <Sparkles className="w-5 h-5 text-purple-500" />;
      default: return <Clock className="w-5 h-5 text-slate-500" />;
    }
  };

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'border-t-emerald-500';
      case 'blue': return 'border-t-blue-500';
      case 'purple': return 'border-t-purple-500';
      default: return 'border-t-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans selection:bg-primary-500/30">
      <SEO title="Product Roadmap" description="Peta jalan pengembangan fitur BizOps yang transparan." />

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 dark:brightness-50 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 pt-24 pb-24">
        
        {/* COMPACT HERO */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
           <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="max-w-2xl">
                 <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest text-xs mb-3">
                    <Map className="w-4 h-4" /> Public Roadmap
                 </div>
                 <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                   Apa yang Sedang Kami Bangun?
                 </h1>
                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Transparansi adalah kunci. Pantau progres fitur BizOps dan ikut serta dalam menentukan prioritas kami selanjutnya.
                 </p>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                 {/* Mobile Filter Toggle */}
                 <button 
                    onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                    className="md:hidden flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-sm"
                 >
                    <Filter className="w-4 h-4" /> Filter
                 </button>

                 <Button 
                   onClick={() => setShowRequestForm(true)} 
                   className="flex-1 md:flex-none shadow-lg shadow-primary-500/20 whitespace-nowrap"
                 >
                    <Plus className="w-4 h-4 mr-2" /> Request Fitur
                 </Button>
              </div>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              
              {/* SIDEBAR FILTER (Desktop Sticky) */}
              <div className="hidden md:block w-64 flex-shrink-0">
                 <div className="sticky top-28 space-y-8">
                    <div>
                       <Typography variant="h3" as="h3">Filter by Category</Typography>
                       <div className="space-y-1">
                          {allTags.map(tag => (
                             <button
                                key={tag}
                                onClick={() => setActiveFilter(tag)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-between group ${
                                   activeFilter === tag 
                                      ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm border border-slate-200 dark:border-slate-700' 
                                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                }`}
                             >
                                {tag}
                                {activeFilter === tag && (
                                   <motion.div layoutId="sidebar-active" className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                )}
                             </button>
                          ))}
                       </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                       <div className="relative z-10">
                          <Rocket className="w-8 h-8 text-blue-400 mb-4" />
                          <Typography variant="h3" as="h3">Punya Ide Liar?</Typography>
                          <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                             Jangan ragu sampaikan kebutuhan unik bisnis Anda.
                          </p>
                          <button 
                             onClick={() => setShowRequestForm(true)}
                             className="text-xs font-bold bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 rounded-lg w-full"
                          >
                             Submit Request
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

              {/* MOBILE FILTER MODAL */}
              <AnimatePresence>
                 {mobileFilterOpen && (
                    <div className="fixed inset-0 z-40 md:hidden bg-slate-950/50 backdrop-blur-sm" onClick={() => setMobileFilterOpen(false)}>
                       <motion.div 
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "100%" }}
                          className="absolute bottom-0 left-0 w-full bg-white dark:bg-slate-900 rounded-t-2xl p-6 border-t border-slate-200 dark:border-slate-800"
                          onClick={e => e.stopPropagation()}
                       >
                          <div className="flex justify-between items-center mb-6">
                             <Typography variant="h3" as="h3">Filter Categories</Typography>
                             <button onClick={() => setMobileFilterOpen(false)}><X className="w-5 h-5" /></button>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-6">
                             {allTags.map(tag => (
                                <button
                                   key={tag}
                                   onClick={() => { setActiveFilter(tag); setMobileFilterOpen(false); }}
                                   className={`px-4 py-2 rounded-full text-sm font-medium border ${
                                      activeFilter === tag 
                                         ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent' 
                                         : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                                   }`}
                                >
                                   {tag}
                                </button>
                             ))}
                          </div>
                       </motion.div>
                    </div>
                 )}
              </AnimatePresence>

              {/* MAIN CONTENT - KANBAN */}
              <div className="flex-1 min-w-0">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roadmapData.map((column, idx) => (
                       <div key={idx} className="flex flex-col h-full bg-slate-100/50 dark:bg-slate-900/30 rounded-2xl p-2 border border-slate-200/50 dark:border-slate-800/50">
                          {/* Column Header */}
                          <div className={`
                             mb-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border-t-4
                             ${getStatusColor(column.color)}
                          `}>
                             <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-slate-900 dark:text-white">{column.status}</h3>
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                   {column.items.length}
                                </span>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                <Clock className="w-3 h-3" /> {column.period}
                             </div>
                          </div>

                          {/* Items List */}
                          <div className="flex-1 space-y-3">
                             <AnimatePresence mode='popLayout'>
                                {column.items
                                   .filter(item => activeFilter === 'All' || item.tag === activeFilter)
                                   .map((item) => (
                                   <motion.div 
                                      key={item.id}
                                      layout
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.95 }}
                                      className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 shadow-sm hover:shadow-md transition-all relative"
                                   >
                                      <div className="mb-3">
                                         <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded-md mb-2">
                                            {item.tag}
                                         </span>
                                         <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {item.title}
                                         </h4>
                                      </div>
                                      
                                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4 min-h-[3em]">
                                         {item.desc}
                                      </p>

                                      <div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-800">
                                         <button 
                                            onClick={() => handleVote(item.id)}
                                            className={`
                                               flex items-center gap-1.5 text-xs font-semibold transition-all px-2 py-1 -ml-2 rounded-lg
                                               ${userVoted[item.id] 
                                                  ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' 
                                                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'}
                                            `}
                                         >
                                            <ThumbsUp className={`w-3.5 h-3.5 ${userVoted[item.id] ? 'fill-current' : ''}`} />
                                            <span>{12 + (votes[item.id] || 0)}</span>
                                         </button>
                                         <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                            <item.icon className="w-3 h-3" />
                                         </div>
                                      </div>
                                   </motion.div>
                                ))}
                             </AnimatePresence>
                             
                             {/* Empty State */}
                             {column.items.filter(item => activeFilter === 'All' || item.tag === activeFilter).length === 0 && (
                                <motion.div 
                                   initial={{ opacity: 0 }} 
                                   animate={{ opacity: 1 }}
                                   className="h-32 flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/50"
                                >
                                   <Sparkles className="w-6 h-6 text-slate-300 mb-2" />
                                   <p className="text-xs text-slate-400">Tidak ada item.</p>
                                   <button 
                                      onClick={() => setShowRequestForm(true)}
                                      className="mt-2 text-[10px] font-bold text-primary-600 hover:underline"
                                   >
                                      + Request fitur ini
                                   </button>
                                </motion.div>
                             )}
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>

        {/* MODAL REQUEST FEATURE */}
        <AnimatePresence>
          {showRequestForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col"
               >
                  <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary-500" /> Request Fitur
                     </h3>
                     <button 
                        onClick={() => setShowRequestForm(false)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                     >
                        <X className="w-5 h-5" />
                     </button>
                  </div>

                  <div className="p-6">
                     {!formSuccess ? (
                       <form onSubmit={handleFeatureSubmit} className="space-y-4">
                          <div>
                             <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5">Judul Fitur</label>
                             <input 
                                required
                                autoFocus
                                type="text" 
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-slate-400" 
                                placeholder="Contoh: Integrasi Marketplace" 
                             />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5">Deskripsi & Manfaat</label>
                             <textarea 
                                required
                                rows={4} 
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none placeholder:text-slate-400" 
                                placeholder="Jelaskan masalah yang ingin diselesaikan..." 
                             />
                          </div>
                          <div className="pt-2">
                             <Button 
                                fullWidth 
                                type="submit" 
                                disabled={isSubmitting}
                                className="shadow-lg shadow-primary-500/20"
                             >
                                {isSubmitting ? (
                                   <>
                                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Mengirim...
                                   </>
                                ) : (
                                   <>
                                      <Send className="w-4 h-4 mr-2" /> Kirim Request
                                   </>
                                )}
                             </Button>
                          </div>
                       </form>
                     ) : (
                       <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-8"
                       >
                          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                             <CheckCircle2 className="w-8 h-8" />
                          </div>
                          <Typography variant="h3" as="h3">Request Terkirim!</Typography>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                             Terima kasih atas masukan Anda. Tim produk kami akan segera mereview ide ini.
                          </p>
                       </motion.div>
                     )}
                  </div>
               </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default RoadmapPage;
