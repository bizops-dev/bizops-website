
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogContent, blogPosts } from '../data/content';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { SkeletonCard } from '../components/Skeleton';

const BlogPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Map content pillars to matching blog posts if available, otherwise fallback
  const featuredPost = blogPosts.find(p => p.slug === blogContent.featured.slug) || blogPosts[0];

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO title="Blog Bisnis & Strategi ERP Indonesia" description="Analisis mendalam tentang regulasi PPh 21, efisiensi operasional, dan transformasi digital." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Insights & Strategy</h1>
           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Pusat pengetahuan utama untuk pemimpin bisnis Indonesia. Analisis mendalam tentang kepatuhan regulasi, strategi keuangan, dan teknologi.
           </p>
        </div>

        {/* Featured Post - Optimized for LCP */}
        {isLoading ? (
          <div className="mb-16 bg-slate-100 dark:bg-slate-900 rounded-2xl aspect-[2/1] w-full animate-pulse"></div>
        ) : (
          <Link to={`/blog/${featuredPost.slug}`} className="block mb-16 relative rounded-2xl overflow-hidden bg-slate-900 text-white aspect-[2/1] md:aspect-[3/1] flex items-end p-8 md:p-12 shadow-2xl group cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
             {/* Optimized Image: Standard img tag with fetchPriority high for LCP boost */}
             <img 
               src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" 
               alt={featuredPost.title}
               className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
               // @ts-ignore - fetchPriority is valid in React 18+ but types might lag
               fetchPriority="high"
               loading="eager"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent z-10 pointer-events-none"></div>

             <div className="relative z-20 max-w-3xl">
                <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-wider">
                   <span className="bg-primary-600 px-2 py-1 rounded text-white">Featured Article</span>
                   <span className="text-slate-300">12 Min Read</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight group-hover:text-primary-400 transition-colors">
                   {featuredPost.title}
                </h2>
                <p className="text-slate-300 mb-8 text-lg line-clamp-2 md:line-clamp-none leading-relaxed">
                   {featuredPost.summary}
                </p>
                <div className="flex items-center gap-4">
                   <Button variant="primary" className="border-none pointer-events-none">Baca Selengkapnya</Button>
                   <span className="text-sm text-slate-400">By {featuredPost.author}</span>
                </div>
             </div>
          </Link>
        )}

        {/* Content Pillars (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           {isLoading ? (
             <>
               <SkeletonCard />
               <SkeletonCard />
               <SkeletonCard />
               <SkeletonCard />
             </>
           ) : (
             blogContent.pillars.map((post, idx) => (
                <Link to={`/blog/${post.slug}`} key={idx} className={`p-8 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 group bg-white dark:bg-slate-900`}>
                   <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-800`}>
                         <post.icon className={`w-6 h-6 text-primary-600`} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{post.category}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                      {post.title}
                   </h3>
                   <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {post.snippet}
                   </p>
                   <div className="flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform cursor-pointer">
                      Read Analysis <ArrowRight className="ml-2 w-4 h-4" />
                   </div>
                </Link>
             ))
           )}
        </div>

        {/* Newsletter */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           </div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Dapatkan "BizOps Digest"</h2>
              <p className="text-slate-300 mb-8 text-lg">
                 Jangan ketinggalan update regulasi penting. Bergabunglah dengan 15.000+ CEO dan HR Manager yang menerima intelijen bisnis setiap Senin pagi.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                 <input type="email" placeholder="Email Bisnis Kantor Anda" className="flex-1 px-6 py-4 rounded-xl text-slate-900 outline-none focus:ring-4 focus:ring-primary-500/50" />
                 <Button size="lg" className="bg-primary-600 hover:bg-primary-500 text-white border-none">Berlangganan Gratis</Button>
              </form>
              <p className="text-xs text-slate-500 mt-4">
                 No spam. Unsubscribe anytime. Kami menghargai inbox Anda.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
