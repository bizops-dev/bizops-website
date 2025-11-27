import React, { useState, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  priority?: boolean; // For above-fold images
  sizes?: string; // Responsive sizes
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * OptimizedImage Component
 * 
 * Provides optimized image loading with:
 * - Lazy loading support
 * - WebP format with fallback
 * - Responsive sizes
 * - Blur placeholder
 * - Error handling
 * 
 * @example
 * <OptimizedImage 
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   width={1200}
 *   height={600}
 *   loading="lazy"
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
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
  sizes,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc: string): string => {
    // If already external URL, return as-is
    if (baseSrc.startsWith('http://') || baseSrc.startsWith('https://')) {
      return baseSrc;
    }

    // Generate multiple sizes
    const widths = [400, 800, 1200, 1600];
    const extension = baseSrc.split('.').pop();
    const basePath = baseSrc.replace(`.${extension}`, '');

    return widths
      .map((w) => `${basePath}-${w}.webp ${w}w`)
      .join(', ');
  };

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

  // Generate WebP source with PNG/JPG fallback
  const getWebPSrc = (originalSrc: string): string => {
    // If external URL, return as-is
    if (originalSrc.startsWith('http://') || originalSrc.startsWith('https://')) {
      return originalSrc;
    }

    // Convert extension to webp
    const extension = originalSrc.split('.').pop();
    return originalSrc.replace(`.${extension}`, '.webp');
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
        style={{ width, height }}
      >
        <div className="text-center p-4">
          <svg 
            className="w-12 h-12 mx-auto text-slate-400 dark:text-slate-600 mb-2" 
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
          <p className="text-xs text-slate-500 dark:text-slate-400">Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Blur placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
      )}

      {/* Picture element for WebP with fallback */}
      <picture>
        {/* WebP source for modern browsers */}
        <source 
          type="image/webp" 
          srcSet={generateSrcSet(src)}
          sizes={sizes}
        />
        
        {/* Fallback for browsers that don't support WebP */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          className={`${objectFitClass} w-full h-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          // Add fetchpriority for LCP images
          {...(priority && { fetchPriority: 'high' as any })}
        />
      </picture>

      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

