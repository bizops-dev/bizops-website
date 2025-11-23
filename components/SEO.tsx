
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  noindex?: boolean;
  canonical?: string;
  structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80", // Default fallback image
  url,
  type = 'website',
  noindex = false,
  canonical,
  structuredData
}) => {
  const location = useLocation();
  const currentUrl = url || `https://bizops.id${location.pathname}`;
  const siteName = "BizOps - The Adaptive Business Operating System";
  const fullTitle = `${title} | BizOps`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create link tag
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // --- Standard Meta ---
    if (description) updateMeta('description', description);
    if (noindex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
    }

    // --- Canonical ---
    updateLink('canonical', canonical || currentUrl);

    // --- Open Graph ---
    updateMeta('og:site_name', siteName, 'property');
    updateMeta('og:title', fullTitle, 'property');
    if (description) updateMeta('og:description', description, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:image', image, 'property');

    // --- Twitter Card ---
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    if (description) updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // --- JSON-LD Structured Data ---
    let script: HTMLScriptElement | null = null;
    if (structuredData) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
      // Optionally reset title or critical tags if needed, 
      // but usually new page mount handles it.
    };
  }, [title, description, image, currentUrl, type, noindex, canonical, structuredData, fullTitle]);

  return null;
};

export default SEO;
