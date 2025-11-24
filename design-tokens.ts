/**
 * Design Tokens - Centralized design system values
 * Used to maintain consistency across the application
 */

export const designTokens = {
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
    '4xl': '6rem',  // 96px
  },
  borderRadius: {
    sm: '0.5rem',   // 8px - small elements
    md: '0.75rem',  // 12px - buttons, inputs
    lg: '1rem',     // 16px - cards
    xl: '1.5rem',   // 24px - large cards
    '2xl': '2rem',  // 32px - hero sections
    full: '9999px', // full - badges, pills
  },
  typography: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
    },
    lineHeight: {
      tight: '1.25',      // Headings
      normal: '1.5',      // Default
      relaxed: '1.625',   // Body text
      loose: '2',         // Large paragraphs
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  transitions: {
    fast: 'duration-150',    // 150ms - micro interactions
    normal: 'duration-200',   // 200ms - buttons, links
    slow: 'duration-300',     // 300ms - cards, modals
    slower: 'duration-500',   // 500ms - page transitions
  },
  shadows: {
    sm: 'shadow-sm',      // Subtle elevation (cards)
    md: 'shadow-md',      // Medium elevation (hover states)
    lg: 'shadow-lg',      // High elevation (modals, dropdowns)
    xl: 'shadow-xl',      // Very high elevation (hero elements)
    '2xl': 'shadow-2xl',  // Maximum elevation
  },
  colors: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',  // Main primary
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
      950: '#172554',
    },
    accent: {
      500: '#F59E0B',
    },
  },
  breakpoints: {
    sm: '640px',   // Tablet
    md: '768px',   // Desktop
    lg: '1024px',  // Large desktop
    xl: '1280px',  // Extra large
  },
  touchTarget: {
    min: '44px',   // Minimum touch target (Apple)
    recommended: '48px', // Recommended (Material)
  },
} as const;

// Typography scale classes for easy use
export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl font-bold leading-tight',
  h4: 'text-xl md:text-2xl font-semibold leading-tight',
  h5: 'text-lg md:text-xl font-semibold',
  h6: 'text-base md:text-lg font-semibold',
  body: 'text-base md:text-lg leading-relaxed',
  bodySmall: 'text-sm md:text-base leading-relaxed',
  small: 'text-sm leading-normal',
  tiny: 'text-xs leading-normal',
} as const;

// Focus styles for consistency
export const focusStyles = {
  default: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  button: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  input: 'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500',
  link: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded',
} as const;

// Section padding variants
export const sectionPadding = {
  default: 'py-16 md:py-24 lg:py-32',
  compact: 'py-12 md:py-16',
  spacious: 'py-24 md:py-32 lg:py-40',
} as const;

