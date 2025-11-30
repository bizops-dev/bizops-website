/**
 * Utility functions for generating JSON-LD Structured Data
 * @see https://schema.org/
 */

type BreadcrumbItem = {
  label: string;
  path: string;
};

/**
 * Generate BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (items: Array<BreadcrumbItem>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://bizops.id${item.path}`
    }))
  };
};

/**
 * Generate Organization schema
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BizOps",
    "alternateName": "BizOps Indonesia",
    "url": "https://bizops.id",
    "logo": "https://bizops.id/logo.png",
    "description": "Platform ERP Indonesia yang menyatukan HR, Finance, Operations, Sales, dan Supply Chain dalam satu sistem terintegrasi.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Jakarta"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bizops",
      "https://twitter.com/bizops_id"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "sales@bizops.id",
      "availableLanguage": ["Indonesian", "English"]
    }
  };
};

/**
 * Generate Article schema for blog posts
 */
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  image: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "BizOps",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizops.id/logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
};

/**
 * Generate Product schema for pricing
 */
export const generateProductSchema = (product: {
  name: string;
  description: string;
  price: string;
  currency: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": "https://schema.org/InStock",
      "url": "https://bizops.id/pricing"
    }
  };
};

/**
 * Generate FAQPage schema
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate SoftwareApplication schema
 */
export const generateSoftwareSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BizOps",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "2500000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "120"
    }
  };
};

