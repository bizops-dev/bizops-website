
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items?: { label: string; path: string }[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const location = useLocation();
  
  // Default generation if no items provided
  const pathnames = location.pathname.split('/').filter((x) => x);
  const defaultItems = items || pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return {
      label: value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' '),
      path: to,
    };
  });

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bizops.id/"
      },
      ...defaultItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://bizops.id${item.path}`
      }))
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <nav aria-label="Breadcrumb" className={`flex mb-6 text-sm text-slate-500 animate-fade-in-up ${className}`}>
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="hover:text-primary-600 flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {defaultItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
              <Link 
                to={item.path} 
                className={`hover:text-primary-600 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1 ${index === defaultItems.length - 1 ? 'text-slate-900 font-bold pointer-events-none' : ''}`}
                aria-current={index === defaultItems.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
