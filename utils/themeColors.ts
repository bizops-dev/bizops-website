// Color themes for UI components (Badges, Cards, Highlights)
// Compatible with Tailwind CSS classes

export const COLOR_THEMES: Record<string, {
  primary: string; // Text color
  bgLight: string; // Light background
  bgDark: string; // Dark background
  gradientFrom: string;
  gradientTo: string;
  ring: string;
  border: string;
  iconBg: string;
}> = {
  blue: {
    primary: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-900/20',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-700',
    ring: 'ring-blue-500/50',
    border: 'border-blue-200 dark:border-blue-800',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30'
  },
  indigo: {
    primary: 'text-indigo-600 dark:text-indigo-400',
    bgLight: 'bg-indigo-50',
    bgDark: 'dark:bg-indigo-900/20',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-indigo-700',
    ring: 'ring-indigo-500/50',
    border: 'border-indigo-200 dark:border-indigo-800',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30'
  },
  violet: {
    primary: 'text-violet-600 dark:text-violet-400',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-900/20',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-violet-700',
    ring: 'ring-violet-500/50',
    border: 'border-violet-200 dark:border-violet-800',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30'
  },
  purple: {
    primary: 'text-purple-600 dark:text-purple-400',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-900/20',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-700',
    ring: 'ring-purple-500/50',
    border: 'border-purple-200 dark:border-purple-800',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30'
  },
  pink: {
    primary: 'text-pink-600 dark:text-pink-400',
    bgLight: 'bg-pink-50',
    bgDark: 'dark:bg-pink-900/20',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-700',
    ring: 'ring-pink-500/50',
    border: 'border-pink-200 dark:border-pink-800',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30'
  },
  rose: {
    primary: 'text-rose-600 dark:text-rose-400',
    bgLight: 'bg-rose-50',
    bgDark: 'dark:bg-rose-900/20',
    gradientFrom: 'from-rose-500',
    gradientTo: 'to-rose-700',
    ring: 'ring-rose-500/50',
    border: 'border-rose-200 dark:border-rose-800',
    iconBg: 'bg-rose-100 dark:bg-rose-900/30'
  },
  red: {
    primary: 'text-red-600 dark:text-red-400',
    bgLight: 'bg-red-50',
    bgDark: 'dark:bg-red-900/20',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-700',
    ring: 'ring-red-500/50',
    border: 'border-red-200 dark:border-red-800',
    iconBg: 'bg-red-100 dark:bg-red-900/30'
  },
  orange: {
    primary: 'text-orange-600 dark:text-orange-400',
    bgLight: 'bg-orange-50',
    bgDark: 'dark:bg-orange-900/20',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-orange-700',
    ring: 'ring-orange-500/50',
    border: 'border-orange-200 dark:border-orange-800',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30'
  },
  amber: {
    primary: 'text-amber-600 dark:text-amber-400',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-900/20',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-700',
    ring: 'ring-amber-500/50',
    border: 'border-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30'
  },
  yellow: {
    primary: 'text-yellow-600 dark:text-yellow-400',
    bgLight: 'bg-yellow-50',
    bgDark: 'dark:bg-yellow-900/20',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-yellow-700',
    ring: 'ring-yellow-500/50',
    border: 'border-yellow-200 dark:border-yellow-800',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30'
  },
  lime: {
    primary: 'text-lime-600 dark:text-lime-400',
    bgLight: 'bg-lime-50',
    bgDark: 'dark:bg-lime-900/20',
    gradientFrom: 'from-lime-500',
    gradientTo: 'to-lime-700',
    ring: 'ring-lime-500/50',
    border: 'border-lime-200 dark:border-lime-800',
    iconBg: 'bg-lime-100 dark:bg-lime-900/30'
  },
  green: {
    primary: 'text-green-600 dark:text-green-400',
    bgLight: 'bg-green-50',
    bgDark: 'dark:bg-green-900/20',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-700',
    ring: 'ring-green-500/50',
    border: 'border-green-200 dark:border-green-800',
    iconBg: 'bg-green-100 dark:bg-green-900/30'
  },
  emerald: {
    primary: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-900/20',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-700',
    ring: 'ring-emerald-500/50',
    border: 'border-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30'
  },
  teal: {
    primary: 'text-teal-600 dark:text-teal-400',
    bgLight: 'bg-teal-50',
    bgDark: 'dark:bg-teal-900/20',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-teal-700',
    ring: 'ring-teal-500/50',
    border: 'border-teal-200 dark:border-teal-800',
    iconBg: 'bg-teal-100 dark:bg-teal-900/30'
  },
  cyan: {
    primary: 'text-cyan-600 dark:text-cyan-400',
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-900/20',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-700',
    ring: 'ring-cyan-500/50',
    border: 'border-cyan-200 dark:border-cyan-800',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30'
  },
  sky: {
    primary: 'text-sky-600 dark:text-sky-400',
    bgLight: 'bg-sky-50',
    bgDark: 'dark:bg-sky-900/20',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-sky-700',
    ring: 'ring-sky-500/50',
    border: 'border-sky-200 dark:border-sky-800',
    iconBg: 'bg-sky-100 dark:bg-sky-900/30'
  },
  slate: {
    primary: 'text-slate-600 dark:text-slate-400',
    bgLight: 'bg-slate-50',
    bgDark: 'dark:bg-slate-800',
    gradientFrom: 'from-slate-500',
    gradientTo: 'to-slate-700',
    ring: 'ring-slate-500/50',
    border: 'border-slate-200 dark:border-slate-700',
    iconBg: 'bg-slate-100 dark:bg-slate-800'
  }
};

