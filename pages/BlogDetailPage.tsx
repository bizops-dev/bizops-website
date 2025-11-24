
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/content';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import { Calendar, User, ArrowLeft, Share2, Clock, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import QuickFeedback from '../components/QuickFeedback';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">Article Not Found</h1>
        <Link to="/blog"><Button>Back to Blog</Button></Link>
      </div>
    );
  }

  // Structured Data for Blog Post
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "BizOps",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizops.id/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.summary,
    "articleBody": post.content.replace(/<[^>]*>?/gm, '').substring(0, 200) + "..."
  };

  return (
    <div className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO 
        title={post.title} 
        description={post.summary} 
        image={post.image}
        type="article"
        structuredData={blogSchema}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-4">
           <Breadcrumbs items={[
             { label: "Blog", path: "/blog" }, 
             { label: post.category, path: "/blog" },
             { label: post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title, path: "#" }
           ]} />
        </div>

        {/* Breadcrumb Back Link */}
        <div className="mb-8">
           <Link to="/blog" className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 flex items-center gap-2 text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
           </Link>
        </div>

        {/* Header */}
        <header className="mb-12 text-center">
           <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold uppercase tracking-wide">
                 {post.category}
              </span>
           </div>
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
           </h1>
           <div className="flex items-center justify-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                 <User className="w-4 h-4" /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                 <Clock className="w-4 h-4" /> 12 Min Read
              </div>
           </div>
        </header>

        {/* Hero Image with LCP Optimization */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl aspect-[21/9] bg-slate-100 dark:bg-slate-900">
           <img 
             src={post.image} 
             alt={`Illustration for ${post.title}`} 
             className="w-full h-full object-cover"
             width="1200"
             height="630"
             // @ts-ignore
             fetchPriority="high"
             loading="eager" 
           />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
           <div 
             className="prose prose-lg prose-slate dark:prose-invert max-w-none"
             dangerouslySetInnerHTML={{ __html: post.content }}
           />
           
           <div className="mt-16 mb-12">
             <QuickFeedback contextId={`blog-${slug}`} />
           </div>

           {/* Share */}
           <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div className="flex gap-2">
                 {['Management', 'Strategy', 'Enterprise'].map(tag => (
                    <span key={tag} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                       <Tag className="w-3 h-3" /> {tag}
                    </span>
                 ))}
              </div>
              <button 
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                aria-label="Share this article"
              >
                 <Share2 className="w-4 h-4" /> Share Article
              </button>
           </div>
        </div>
      </article>

      {/* Related / CTA */}
      <section className="mt-24 bg-slate-50 dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Ready to Implement These Strategies?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
               Don't let insights just be insights. Transform your operations with BizOps ERP today.
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/demo">
                  <Button size="lg">Book a Demo</Button>
               </Link>
               <Link to="/newsletter">
                  <Button size="lg" variant="outline">Subscribe to Newsletter</Button>
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
