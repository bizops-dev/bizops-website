import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { blogPosts } from '../data/content';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Clock, 
  Tag, 
  ArrowRight,
  BookOpen,
  Linkedin,
  Twitter,
  Facebook,
  Menu,
  Rocket
} from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import Typography from '../components/Typography';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const containerRef = useRef(null);
  
  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Table of Contents State
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    if (post?.content) {
      // Extract h2 headings using regex
      const regex = /<h2 id="([^"]+)"[^>]*>(.*?)<\/h2>/g;
      const extractedHeadings = [];
      let match;
      while ((match = regex.exec(post.content)) !== null) {
        extractedHeadings.push({ id: match[1], text: match[2].replace(/<[^>]*>?/gm, '') });
      }
      setHeadings(extractedHeadings);
    }
  }, [post]);

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-slate-950">
        <Typography variant="h1" as="h1">Article Not Found</Typography>
        <Link to="/blog"><Button variant="primary">Back to Insights</Button></Link>
      </div>
    );
  }

  // Related Posts Logic
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
  
  if (relatedPosts.length < 3) {
     const otherPosts = blogPosts
        .filter(p => p.slug !== post.slug && !relatedPosts.find(rp => rp.slug === p.slug))
        .slice(0, 3 - relatedPosts.length);
     relatedPosts.push(...otherPosts);
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": { "@type": "Person", "name": post.author },
    "publisher": { "@type": "Organization", "name": "BizOps", "logo": { "@type": "ImageObject", "url": "https://bizops.id/logo.png" } },
    "datePublished": post.date,
    "description": post.summary
  };

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-950 min-h-screen selection:bg-blue-500/30">
      <SEO 
        title={post.title} 
        description={post.summary} 
        image={post.image}
        type="article"
        structuredData={blogSchema}
      />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
         <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
            <OptimizedImage src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80" />
         </motion.div>

         <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl">
               <div className="flex flex-wrap items-center gap-3 mb-8">
                  <Link to="/blog" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-white/20">
                     <ArrowLeft className="w-4 h-4" /> Back to Blog
                  </Link>
                  <span className="text-blue-300 font-bold uppercase tracking-widest text-xs px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-md">
                     {post.category}
                  </span>
               </div>
               
               <Typography variant="h1" as="h1" className="font-bold text-white leading-[1.1] font-sans tracking-tight">{post.title}</Typography>

               <div className="flex flex-wrap items-center gap-8 text-white/90 text-sm font-sans font-medium">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg border border-white/20">
                        {post.author.charAt(0)}
                     </div>
                     <div>
                        <span className="block text-white font-bold">{post.author.split(',')[0]}</span>
                        <span className="text-white/60 text-xs">Author</span>
                     </div>
                  </div>
                  <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
                  <div className="flex flex-col">
                     <span className="flex items-center gap-2 text-white"><Calendar className="w-3 h-3" /> {post.date}</span>
                     <span className="text-white/60 text-xs">Published</span>
                  </div>
                  <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
                  <div className="flex flex-col">
                     <span className="flex items-center gap-2 text-white"><Clock className="w-3 h-3" /> 12 Min Read</span>
                     <span className="text-white/60 text-xs">Time</span>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>

      {/* --- CONTENT BODY --- */}
      <div className="relative z-30 bg-white dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
               
               {/* LEFT: MAIN ARTICLE (8 cols) */}
               <div className="lg:col-span-8">
                  {/* Summary Lead (Drop Cap) */}
                  <div className="font-sans text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-200 mb-12 font-light first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-bold first-letter:text-slate-900 dark:first-letter:text-white first-letter:leading-[0.8]">
                     {post.summary}
                  </div>

                  <hr className="border-slate-100 dark:border-slate-800 mb-12" />

                  {/* Article Content */}
                  <article 
                     className="prose prose-lg prose-slate dark:prose-invert max-w-none
                     prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
                     prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-8
                     prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                     prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:my-12
                     prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900/50 prose-blockquote:py-8 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:font-sans prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:text-slate-800 dark:prose-blockquote:text-slate-200
                     prose-li:text-slate-600 dark:prose-li:text-slate-300"
                     dangerouslySetInnerHTML={{ 
                        __html: DOMPurify.sanitize(post.content, {
                           ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'h2', 'h3', 'blockquote', 'img', 'figure', 'figcaption', 'div'],
                           ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class', 'id']
                        })
                     }}
                  />

                  {/* Tags & Share */}
                  <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 font-sans">
                     <div className="flex flex-wrap gap-2">
                        {['Strategy', 'Enterprise', 'Management'].map(tag => (
                           <span key={tag} className="px-4 py-2 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-default">
                              <Tag className="w-3 h-3" /> {tag}
                           </span>
                        ))}
                     </div>
                     <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Share</span>
                        <div className="flex gap-2">
                           <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"><Linkedin className="w-5 h-5" /></button>
                           <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors"><Twitter className="w-5 h-5" /></button>
                           <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"><Facebook className="w-5 h-5" /></button>
                           <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors"><Share2 className="w-5 h-5" /></button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* RIGHT: STICKY SIDEBAR (4 cols) */}
               <div className="lg:col-span-4 relative font-sans hidden lg:block">
                  <div className="sticky top-32 space-y-12">
                     
                     {/* 1. Table of Contents */}
                     {headings.length > 0 && (
                        <div>
                           <Typography variant="h3" as="h3" className="font-bold tracking-widest text-slate-400"><Menu className="w-4 h-4" /> On this page</Typography>
                           <ul className="space-y-1 border-l border-slate-200 dark:border-slate-800">
                              {headings.map((heading) => (
                                 <li key={heading.id}>
                                    <a 
                                       href={`#${heading.id}`}
                                       className={`block pl-4 py-2 text-sm transition-colors border-l-2 -ml-[2px] ${
                                          activeId === heading.id 
                                             ? 'border-blue-600 text-blue-600 font-bold' 
                                             : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                                       }`}
                                    >
                                       {heading.text}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {/* 2. Author Profile */}
                     <div>
                        <Typography variant="h3" as="h3">Author</Typography>
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5">
                              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                                 <span className="text-xl font-bold text-blue-600">{post.author.charAt(0)}</span>
                              </div>
                           </div>
                           <div>
                              <div className="font-bold text-slate-900 dark:text-white">{post.author.split(',')[0]}</div>
                              <div className="text-xs text-blue-600 font-bold uppercase tracking-wide">{post.author.split(',')[1] || 'Contributor'}</div>
                           </div>
                        </div>
                        <Typography variant="caption" className="text-slate-500">Experienced consultant specializing in ERP implementation and business process re-engineering.</Typography>
                        <button className="text-sm font-bold text-blue-600 hover:underline">View Profile</button>
                     </div>

                     {/* 3. Newsletter Widget */}
                     <div className="p-8 rounded-[2rem] bg-[#0B1120] text-white relative overflow-hidden border border-slate-800 group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[50px] group-hover:bg-blue-600/30 transition-all"></div>
                        <div className="relative z-10">
                           <BookOpen className="w-8 h-8 text-blue-400 mb-4" />
                           <Typography variant="h3" as="h3">Weekly Intelligence</Typography>
                           <p className="text-slate-400 text-sm mb-6">Strategic insights for leaders.</p>
                           <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                           <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-500 border-none rounded-xl font-bold">Subscribe</Button>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* --- READ NEXT --- */}
      <div className="bg-slate-50 dark:bg-slate-900 py-24 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
               <div>
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">Keep Reading</span>
                  <Typography variant="h2" as="h2">Related Articles</Typography>
               </div>
               <Link to="/blog" className="hidden md:flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors">
                  View All <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {relatedPosts.map((rp, idx) => (
                  <Link key={idx} to={`/blog/${rp.slug}`} className="group block h-full">
                     <div className="bg-white dark:bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="aspect-[16/10] overflow-hidden relative">
                           <OptimizedImage 
                              src={rp.image} 
                              alt={rp.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                           />
                           <div className="absolute top-4 left-4">
                              <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700 shadow-sm">
                                 {rp.category}
                              </span>
                           </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                           <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white leading-tight">{rp.title}</Typography>
                           <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-grow">
                              {rp.summary}
                           </p>
                           <div className="flex items-center text-sm font-bold text-blue-600 group-hover:translate-x-2 transition-transform mt-auto">
                              Read Article <ArrowRight className="w-4 h-4 ml-2" />
                           </div>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>

      {/* --- CTA SECTION (Custom Implementation to fix color issues) --- */}
      <section className="relative overflow-hidden bg-[#0B1120] text-white py-24 lg:py-32">
         {/* Abstract Glows */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
               
               {/* Left: Copy */}
               <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
                     <Rocket className="w-4 h-4 text-blue-400" />
                     <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Start Your Journey</span>
                  </div>
                  <Typography variant="h2" as="h2" className="font-bold tracking-tight leading-[1.1] text-white">Turn Insights into <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Actionable Growth.</span></Typography>
                  <Typography variant="body-xl" className="text-slate-400">Implement the strategies you just read about. BizOps provides the engine to scale your operations effortlessly.</Typography>
                  
                  {/* Trust Signals */}
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                     <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-slate-700"></div>
                        ))}
                     </div>
                     <span>Trusted by 500+ Enterprises</span>
                  </div>
               </div>

               {/* Right: Actions */}
               <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                  <Link to="/demo" className="w-full sm:w-auto">
                     <Button size="lg" className="w-full bg-white text-slate-900 hover:bg-blue-50 border-none h-16 px-10 text-lg font-bold shadow-2xl shadow-blue-900/20 rounded-2xl transition-transform hover:-translate-y-1">
                        Book a Live Demo
                     </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                     <Button size="lg" variant="outline" className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 h-16 px-10 text-lg font-bold backdrop-blur-sm rounded-2xl">
                        Talk to Expert
                     </Button>
                  </Link>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
