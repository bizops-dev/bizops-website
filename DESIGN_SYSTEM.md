# Design System Documentation - BizOps Website

## 🎨 Design Tokens

Semua design tokens terpusat di `design-tokens.ts` untuk maintainability dan consistency.

### Spacing Scale
- **xs**: 8px (0.5rem) - Small gaps, tight spacing
- **sm**: 12px (0.75rem) - Small elements
- **md**: 16px (1rem) - Default spacing
- **lg**: 24px (1.5rem) - Medium gaps
- **xl**: 32px (2rem) - Large gaps
- **2xl**: 48px (3rem) - Extra large gaps
- **3xl**: 64px (4rem) - Section spacing
- **4xl**: 96px (6rem) - Hero spacing

**Usage Guidelines:**
- Use `gap-4` (16px) for small grids
- Use `gap-6` (24px) or `gap-8` (32px) for medium grids
- Use `gap-12` (48px) for large grids

### Border Radius
- **sm**: 8px - Small elements (badges, small buttons)
- **md**: 12px - Buttons, inputs (default)
- **lg**: 16px - Cards (default)
- **xl**: 24px - Large cards
- **2xl**: 32px - Hero sections
- **full**: 9999px - Pills, badges

**Usage Guidelines:**
- Buttons: `rounded-lg` (12px)
- Cards: `rounded-xl` (16px) or `rounded-2xl` (24px)
- Hero sections: `rounded-2xl` (32px)
- Badges: `rounded-full`

### Typography Scale

#### Headings
- **h1**: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`
  - Mobile: 36px, Desktop: 48px, Large: 60px
  - Usage: Page titles, hero headings
  
- **h2**: `text-3xl md:text-4xl lg:text-5xl font-bold leading-tight`
  - Mobile: 30px, Desktop: 36px, Large: 48px
  - Usage: Section titles
  
- **h3**: `text-2xl md:text-3xl font-bold leading-tight`
  - Mobile: 24px, Desktop: 30px
  - Usage: Subsection titles
  
- **h4**: `text-xl md:text-2xl font-semibold leading-tight`
  - Mobile: 20px, Desktop: 24px
  - Usage: Card titles, feature titles

#### Body Text
- **body**: `text-base md:text-lg leading-relaxed`
  - Mobile: 16px, Desktop: 18px
  - Usage: Paragraphs, descriptions
  
- **bodySmall**: `text-sm md:text-base leading-relaxed`
  - Mobile: 14px, Desktop: 16px
  - Usage: Secondary text
  
- **small**: `text-sm leading-normal`
  - 14px
  - Usage: Labels, captions
  
- **tiny**: `text-xs leading-normal`
  - 12px
  - Usage: Helper text, metadata

### Colors

#### Primary (Blue)
- **50-950**: Full scale available
- **600**: Main primary color (#2563EB)
- Usage: CTAs, links, focus states

#### Accent (Amber)
- **500**: #F59E0B
- Usage: Highlights, warnings, special CTAs

#### Semantic Colors
- **Success**: Green (green-50 to green-950)
- **Warning**: Amber (amber-50 to amber-950)
- **Danger**: Red (red-50 to red-950)
- **Neutral**: Slate (slate-50 to slate-950)

### Shadows
- **sm**: `shadow-sm` - Subtle elevation (cards)
- **md**: `shadow-md` - Medium elevation (hover states)
- **lg**: `shadow-lg` - High elevation (modals, dropdowns)
- **xl**: `shadow-xl` - Very high elevation (hero elements)
- **2xl**: `shadow-2xl` - Maximum elevation

### Transitions
- **fast**: 150ms - Micro interactions
- **normal**: 200ms - Buttons, links (default)
- **slow**: 300ms - Cards, modals
- **slower**: 500ms - Page transitions

## 🧩 Components

### Button
**Variants:**
- `primary`: Main CTA (1 per page/section)
- `secondary`: Secondary action
- `accent`: Special highlight
- `outline`: Tertiary action
- `ghost`: Subtle action
- `link`: Text link style

**Sizes:**
- `sm`: h-9 (36px) - Small buttons
- `md`: h-11 (44px) - Default (meets touch target)
- `lg`: h-14 (56px) - Large CTAs

**Focus State:** `focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`

### Card
**Variants:**
- `default`: White background with border
- `outline`: Transparent with border
- `flat`: Subtle background
- `dark`: Dark background

**Padding:**
- `none`: No padding
- `sm`: p-4 (16px)
- `md`: p-6 md:p-8 (24px → 32px) - Default
- `lg`: p-8 md:p-10 (32px → 40px)

**Hover Effect:** `hover:shadow-xl hover:-translate-y-2`

### Form Components
**Input/Select Height:** `h-11` (44px) - Meets touch target minimum

**Focus State:** `focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500`

### Section
**Padding Variants:**
- Default: `py-16 md:py-24 lg:py-32` (64px → 96px → 128px)
- Compact: `py-12 md:py-16` (48px → 64px)
- Spacious: `py-24 md:py-32 lg:py-40` (96px → 128px → 160px)

## 📱 Responsive Breakpoints

- **sm**: 640px - Tablet
- **md**: 768px - Desktop
- **lg**: 1024px - Large desktop
- **xl**: 1280px - Extra large

**Strategy:**
- Mobile-first: Default styles for mobile
- Tablet: `sm:` prefix (≥ 640px)
- Desktop: `md:` prefix (≥ 768px)
- Large: `lg:` prefix (≥ 1024px)

## ♿ Accessibility

### Touch Targets
- **Minimum**: 44x44px (Apple guideline)
- **Recommended**: 48x48px (Material guideline)
- All interactive elements meet this requirement

### Color Contrast
- **Text on background**: Minimum 4.5:1 (WCAG AA)
- **Large text**: Minimum 3:1 (WCAG AA)
- All color combinations tested and compliant

### Focus States
- All interactive elements have visible focus indicators
- Focus ring: `ring-2 ring-primary-500 ring-offset-2`
- Keyboard navigation fully supported

## 🎯 Usage Guidelines

### When to Use Each Component

**Button Variants:**
- Use `primary` for the main action on a page/section
- Use `secondary` for alternative actions
- Use `outline` for less important actions
- Use `ghost` for subtle actions in cards
- Use `link` for text-style links

**Spacing:**
- Use consistent spacing scale (4px increments)
- Group related items with smaller gaps (gap-2, gap-4)
- Separate sections with larger gaps (gap-8, gap-12)

**Typography:**
- Use heading hierarchy (h1 → h6) for semantic structure
- Don't skip heading levels
- Use body text for paragraphs (16-18px)

**Shadows:**
- Use shadows to create depth hierarchy
- Cards: `shadow-sm` or `shadow-md`
- Hover states: `shadow-lg` or `shadow-xl`
- Modals: `shadow-xl` or `shadow-2xl`

## 📚 Best Practices

1. **Consistency**: Always use design tokens instead of magic numbers
2. **Accessibility**: Test color contrast and touch targets
3. **Responsive**: Test on multiple screen sizes
4. **Performance**: Use `will-change` sparingly for animations
5. **Semantic HTML**: Use proper heading hierarchy and semantic elements

