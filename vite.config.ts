import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Bundle analyzer - only in production builds
        visualizer({
          filename: './dist/stats.html',
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // React core
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'react-vendor';
              }
              
              // UI libraries
              if (id.includes('lucide-react')) {
                return 'ui-vendor';
              }
              
              // Animation library
              if (id.includes('framer-motion')) {
                return 'motion-vendor';
              }
              
              // Monitoring & Analytics
              if (id.includes('@sentry') || id.includes('@opentelemetry')) {
                return 'monitoring-vendor';
              }
              
              // Utilities
              if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('dompurify')) {
                return 'utils-vendor';
              }
              
              // Large data files
              if (id.includes('/data/') && id.includes('.ts')) {
                return 'data-vendor';
              }
              
              // Default: undefined (let Rollup decide)
              return undefined;
            },
            // Optimize chunk file names
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        chunkSizeWarningLimit: 1000,
        // Use hidden source maps in production for Sentry
        sourcemap: isProduction ? 'hidden' : true,
        minify: 'esbuild',
        cssMinify: true,
        // Enable tree shaking
        treeshake: {
          moduleSideEffects: false,
        },
        // Target modern browsers for smaller bundles
        target: 'es2022',
      },
    };
});
