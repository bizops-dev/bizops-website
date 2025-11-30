import React, { useState, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  priority?: boolean; // For above-fold images
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

/**
 * OptimizedImage Component
 * 
 * Provides optimized image loading with:
 * - Lazy loading support
 * - Blur placeholder
 * - Smooth transition on load
 * - Error handling
 * 
 * Note: This component currently does not generate responsive srcsets or webp sources automatically
 * as we don't have an image optimization pipeline. It focuses on UX (loading states) and Performance (lazy loading).
 */
const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  objectFit = 'cover',
  priority = false,
  onLoad,
  onError,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
  }[objectFit];

  // Error state
  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-slate-100 dark:bg-slate-800 ${className}`}
        style={{ width, height, ...style }}
      >
        <div className="text-center p-4">
          <svg 
            className="w-8 h-8 mx-auto text-slate-400 dark:text-slate-600 mb-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height, ...style }}>
      {/* Blur placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse z-10" />
      )}

      <img
        src={src}
        alt={alt}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        className={`${objectFitClass} w-full h-full transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        // Add fetchpriority for LCP images
        // @ts-ignore - fetchPriority is standard but not yet in React types
        fetchpriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
