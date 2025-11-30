# Component Documentation

Comprehensive documentation for all reusable components in BizOps Website.

## 📚 Table of Contents

- [Button](#button)
- [Card](#card)
- [Badge](#badge)
- [Form Components](#form-components)
- [Layout Components](#layout-components)
- [Motion Components](#motion-components)

---

## Button

**Location:** `components/Button.tsx`

### Description

Versatile button component with multiple variants, sizes, and states. Optimized with React.memo for performance.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button content |
| `variant` | `'primary' \| 'secondary' \| 'accent' \| 'white' \| 'outline' \| 'outline-white' \| 'ghost' \| 'link'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `onClick` | `MouseEventHandler` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `className` | `string` | `''` | Additional CSS classes |

### Variants

- **primary**: Main CTA button (blue background)
- **secondary**: Secondary action (dark background)
- **accent**: Special highlight (amber background)
- **white**: White background button
- **outline**: Outlined button
- **outline-white**: White outlined button
- **ghost**: Transparent button
- **link**: Text link style

### Sizes

- **sm**: Height 44px (h-11)
- **md**: Height 44px (h-11) - Default
- **lg**: Height 56px (h-14)

### Examples

```tsx
// Primary button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// Loading state
<Button variant="primary" isLoading={isSubmitting}>
  Submit
</Button>

// Full width
<Button variant="primary" fullWidth>
  Full Width Button
</Button>

// Outline variant
<Button variant="outline" size="lg">
  Large Outline
</Button>
```

### Accessibility

- ✅ Meets WCAG 2.1 AA touch target (44px minimum)
- ✅ Keyboard accessible
- ✅ Focus states visible
- ✅ ARIA labels supported via children

---

## Card

**Location:** `components/Card.tsx`

### Description

Container component for displaying content in a contained box. Supports hover effects and multiple variants.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Card content |
| `variant` | `'default' \| 'outline' \| 'flat' \| 'dark'` | `'default'` | Visual style variant |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Padding size |
| `hoverEffect` | `boolean` | `false` | Enable hover elevation |
| `onClick` | `() => void` | - | Click handler |
| `className` | `string` | `''` | Additional CSS classes |

### Variants

- **default**: White background with border
- **outline**: Transparent with border
- **flat**: Subtle background
- **dark**: Dark background

### Padding

- **none**: No padding
- **sm**: 16px (p-4)
- **md**: 24px → 32px responsive (p-6 md:p-8) - Default
- **lg**: 32px → 40px responsive (p-8 md:p-10)

### Examples

```tsx
// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>

// Card with hover effect
<Card hoverEffect onClick={handleClick}>
  <h3>Clickable Card</h3>
</Card>

// Outline variant
<Card variant="outline" padding="sm">
  <p>Minimal card</p>
</Card>
```

---

## Badge

**Location:** `components/Badge.tsx`

### Description

Small label component for status indicators, tags, and metadata.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Badge content |
| `variant` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'neutral' \| 'outline' \| 'dark' \| 'outline-white'` | `'neutral'` | Color variant |
| `size` | `'sm' \| 'md'` | `'sm'` | Badge size |
| `className` | `string` | `''` | Additional CSS classes |

### Variants

- **primary**: Blue badge
- **success**: Green badge
- **warning**: Amber badge
- **danger**: Red badge
- **neutral**: Gray badge (default)
- **outline**: Outlined badge
- **dark**: Dark badge
- **outline-white**: White outlined badge

### Examples

```tsx
// Status badge
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Error</Badge>

// Size variants
<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="md">Medium</Badge>
```

---

## Form Components

### Input

**Location:** `components/Form.tsx`

Text input with validation states and error messages.

### Select

**Location:** `components/Form.tsx`

Dropdown select with search support.

### TextArea

**Location:** `components/Form.tsx`

Multi-line text input.

### Checkbox

**Location:** `components/Form.tsx`

Checkbox input with label.

---

## Layout Components

### Section

**Location:** `components/Section.tsx`

Container component for page sections with consistent spacing.

### Loading

**Location:** `components/Loading.tsx`

Loading spinner component.

### Skeleton

**Location:** `components/Skeleton.tsx`

Skeleton loading placeholders.

---

## Motion Components

### StaggeredText

**Location:** `components/ui/motion-text.tsx`

Animated text with staggered word animation.

### BouncyButton

**Location:** `components/ui/motion-button.tsx`

Button with scale animation on hover/tap.

### InfiniteScrollLoop

**Location:** `components/ui/motion-scroll.tsx`

Infinite scrolling animation loop.

---

## Best Practices

1. **Always use semantic HTML** - Use proper heading hierarchy
2. **Accessibility first** - Ensure keyboard navigation and screen reader support
3. **Performance** - Components are memoized, avoid unnecessary re-renders
4. **Consistency** - Use design tokens from `design-tokens.ts`
5. **Type safety** - All components are fully typed

---

**Last Updated:** 2025  
**Maintained by:** BizOps Development Team

