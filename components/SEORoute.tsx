import React from 'react';
import SEO from './SEO';

interface SEORouteProps {
  component: React.ComponentType<any>;
  title: string;
  description?: string;
  noindex?: boolean;
  // Allow passing other SEO props or component props if needed
  [key: string]: any;
}

const SEORoute: React.FC<SEORouteProps> = ({ 
  component: Component, 
  title, 
  description, 
  noindex, 
  ...rest 
}) => {
  // Separate SEO props from potential component props if we were passing them through,
  // but based on App.tsx usage, we are just passing SEO props to this wrapper.
  // The Component is rendered without extra props here.
  
  return (
    <>
      <SEO title={title} description={description} noindex={noindex} {...rest} />
      <Component />
    </>
  );
};

export default SEORoute;

