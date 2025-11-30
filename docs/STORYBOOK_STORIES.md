# 📚 Storybook Stories Documentation

Complete list of all Storybook stories available for BizOps Website components.

---

## 📊 Stories Overview

**Total Stories:** 12  
**Components Covered:** 12  
**Status:** ✅ Complete

---

## 📖 Available Stories

### 1. Button (`stories/Button.stories.tsx`)
- **Variants:** 11 stories
- **Coverage:** All button variants, sizes, states
- **Stories:**
  - Primary
  - Secondary
  - Accent
  - Outline
  - Ghost
  - Link
  - Small
  - Large
  - Full Width
  - Loading
  - Disabled

### 2. Card (`stories/Card.stories.tsx`)
- **Variants:** 7 stories
- **Coverage:** All card variants and padding options
- **Stories:**
  - Default
  - Outline
  - Flat
  - Dark
  - With Hover Effect
  - Small Padding
  - Large Padding

### 3. Badge (`stories/Badge.stories.tsx`)
- **Variants:** 9 stories
- **Coverage:** All badge variants and sizes
- **Stories:**
  - Primary
  - Success
  - Warning
  - Danger
  - Neutral
  - Outline
  - Dark
  - Small
  - Medium
  - All Variants (showcase)

### 4. ErrorBoundary (`stories/ErrorBoundary.stories.tsx`)
- **Variants:** 3 stories
- **Coverage:** Error boundary scenarios
- **Stories:**
  - Without Error
  - With Error
  - Section Error Boundary Example

### 5. Loading (`stories/Loading.stories.tsx`)
- **Variants:** 2 stories
- **Coverage:** Loading states
- **Stories:**
  - Default
  - With Text

### 6. Section (`stories/Section.stories.tsx`)
- **Variants:** 4 stories
- **Coverage:** Section layouts
- **Stories:**
  - Default
  - Dark
  - No Padding

### 7. Form (`stories/Form.stories.tsx`)
- **Variants:** 7 stories
- **Coverage:** All form components
- **Stories:**
  - Text Input
  - With Error
  - With Helper Text
  - Select Input
  - TextArea Input
  - Checkbox Input
  - Disabled

### 8. Skeleton (`stories/Skeleton.stories.tsx`)
- **Variants:** 7 stories
- **Coverage:** Loading skeleton states
- **Stories:**
  - Default
  - Circle
  - Rectangle
  - Text
  - Card
  - Article
  - Profile

### 9. EmptyState (`stories/EmptyState.stories.tsx`)
- **Variants:** 6 stories
- **Coverage:** Empty state scenarios
- **Stories:**
  - No Data
  - No Results
  - Error
  - Empty
  - Custom Icon
  - Without Action

### 10. Breadcrumbs (`stories/Breadcrumbs.stories.tsx`)
- **Variants:** 4 stories
- **Coverage:** Navigation breadcrumbs
- **Stories:**
  - Default
  - Short Path
  - Long Path
  - Single Level

### 11. FAQAccordion (`stories/FAQAccordion.stories.tsx`)
- **Variants:** 3 stories
- **Coverage:** FAQ accordion component
- **Stories:**
  - Default
  - Single FAQ
  - Many FAQs

### 12. SEO (`stories/SEO.stories.tsx`)
- **Variants:** 3 stories
- **Coverage:** SEO component
- **Stories:**
  - Default
  - With Keywords
  - With Image

---

## 🚀 Usage

### Running Storybook

```bash
npm run storybook
```

Starts Storybook dev server at `http://localhost:6006`

### Building Storybook

```bash
npm run build-storybook
```

Builds static Storybook to `storybook-static/`

---

## 📝 Adding New Stories

To add a new story:

1. Create `stories/ComponentName.stories.tsx`
2. Follow the existing pattern:
   ```tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import Component from '../components/Component';

   const meta: Meta<typeof Component> = {
     title: 'Components/Component',
     component: Component,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       // props
     },
   };
   ```

3. Storybook will automatically pick it up

---

## 🎨 Story Organization

Stories are organized by:
- **Component Type:** All stories grouped by component
- **Variants:** Different visual/functional variants
- **States:** Loading, error, disabled, etc.
- **Use Cases:** Real-world scenarios

---

## ✅ Best Practices

1. **Documentation:** Use `tags: ['autodocs']` for auto-generated docs
2. **Controls:** Add `argTypes` for interactive controls
3. **Layouts:** Use appropriate `layout` parameter (centered, padded, fullscreen)
4. **Examples:** Show real-world usage patterns
5. **Accessibility:** Test with Storybook's a11y addon

---

**Last Updated:** 2025  
**Maintained by:** BizOps Development Team

