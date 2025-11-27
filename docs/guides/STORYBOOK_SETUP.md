# 📚 Storybook Setup Guide - BizOps Website

Complete guide untuk Storybook component documentation dan development.

---

## 📊 Current Status

✅ **Configuration:** `.storybook/main.ts` & `preview.tsx`  
✅ **Stories:** Button, Card, Badge components  
✅ **Addons:** Links, Essentials, Interactions, A11y  
⏳ **Installation:** Need to install dependencies  
⏳ **Running:** Ready to run after install

---

## 🎯 What is Storybook?

Storybook adalah **UI component explorer** yang memungkinkan Anda:

- ✅ Develop components in isolation
- ✅ Document component API & variants
- ✅ Visual testing & regression detection
- ✅ Accessibility auditing (a11y addon)
- ✅ Interactive playground
- ✅ Team collaboration

**Perfect for:** Design systems, component libraries, UI development

---

## 🚀 Installation

### Step 1: Install Storybook Dependencies

```bash
npm install --save-dev @storybook/react-vite @storybook/react @storybook/addon-links @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-a11y storybook
```

### Step 2: Add Scripts to package.json

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

### Step 3: Run Storybook

```bash
npm run storybook
```

Storybook akan terbuka di: **http://localhost:6006**

---

## 📁 File Structure

```
bizops-website/
├── .storybook/
│   ├── main.ts           # Main configuration
│   └── preview.tsx       # Global decorators & parameters
├── components/
│   ├── Button.tsx
│   ├── Button.stories.tsx ✅
│   ├── Card.tsx
│   ├── Card.stories.tsx ✅
│   ├── Badge.tsx
│   └── Badge.stories.tsx ✅
└── package.json
```

---

## ✍️ Writing Stories

### Basic Story Template

```typescript
// ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from './ComponentName';

const meta = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    propName: {
      control: 'select',
      options: ['option1', 'option2'],
      description: 'Description of prop',
    },
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    propName: 'value',
  },
};
```

### Story Types

#### 1. Args Stories (Recommended)

```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};
```

**Benefits:**
- Interactive controls
- Auto-generated docs
- Reusable args

#### 2. Render Function Stories

```typescript
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};
```

**Use for:** Complex layouts, multiple components

#### 3. Play Function Stories (Advanced)

```typescript
export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await userEvent.click(button);
    await expect(button).toHaveTextContent('Clicked!');
  },
};
```

**Use for:** Interaction testing, user flows

---

## 🎨 Story Organization

### Naming Convention

```typescript
// ✅ Good
title: 'Components/Button'        // Category/Component
title: 'Forms/Input'              // Group by functionality
title: 'Layout/Header'            // Group by purpose

// ❌ Bad
title: 'Button'                   // No category
title: 'components/button'        // Inconsistent casing
```

### Story Hierarchy

```
Storybook Sidebar:
├── 📁 Components
│   ├── Button
│   ├── Card
│   └── Badge
├── 📁 Forms
│   ├── Input
│   ├── Select
│   └── Checkbox
└── 📁 Pages
    ├── HomePage
    └── LoginPage
```

---

## 🔧 Controls (ArgTypes)

### Control Types

```typescript
argTypes: {
  // Select dropdown
  variant: {
    control: 'select',
    options: ['primary', 'secondary'],
  },
  
  // Radio buttons
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },
  
  // Boolean toggle
  disabled: {
    control: 'boolean',
  },
  
  // Text input
  label: {
    control: 'text',
  },
  
  // Number slider
  count: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
  },
  
  // Color picker
  color: {
    control: 'color',
  },
  
  // Date picker
  date: {
    control: 'date',
  },
}
```

### Disabling Controls

```typescript
argTypes: {
  onClick: { 
    control: false, // Hide from controls
  },
  children: {
    control: false, // Complex props
  },
}
```

---

## 🎭 Decorators

### Global Decorators (in preview.tsx)

Already configured:
- MemoryRouter (for React Router)
- ThemeProvider (dark mode support)
- LanguageProvider (i18n)

### Story-Specific Decorators

```typescript
export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div className="dark bg-slate-950 p-8">
        <Story />
      </div>
    ),
  ],
};
```

---

## 📖 Documentation

### Autodocs

Enable for component:

```typescript
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // ✅ Enables auto-generated docs
} satisfies Meta<typeof Button>;
```

### Custom MDX Documentation

```mdx
<!-- Button.mdx -->
import { Canvas, Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

# Button Component

The Button component is used for...

## Usage

<Canvas of={ButtonStories.Primary} />

## Variants

<Canvas of={ButtonStories.AllVariants} />
```

### JSDoc Comments

```typescript
/**
 * Button component for user interactions
 * 
 * @example
 * <Button variant="primary">Click me</Button>
 */
const Button: React.FC<ButtonProps> = ({ ... }) => {
  // ...
};
```

**Shows in:** Storybook Docs tab

---

## 🎯 Addons

### 1. Controls (Built-in)

**Purpose:** Interactive component props

**Usage:** Automatic from argTypes

### 2. Actions

**Purpose:** Log event handlers

```typescript
export const WithAction: Story = {
  args: {
    onClick: action('clicked'),
  },
};
```

### 3. Viewport

**Purpose:** Test responsive designs

```typescript
parameters: {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
}
```

### 4. Backgrounds

**Purpose:** Test on different backgrounds

Already configured:
- Light (#ffffff)
- Dark (#020617)
- Gray (#f1f5f9)

### 5. Accessibility (a11y)

**Purpose:** Audit accessibility issues

**Already installed!** Check "Accessibility" tab

**Checks for:**
- Color contrast
- ARIA attributes
- Keyboard navigation
- Screen reader support

### 6. Interactions

**Purpose:** Simulate user interactions

```typescript
import { userEvent, within } from '@storybook/testing-library';

export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
```

---

## 🧪 Testing in Storybook

### Visual Testing

```bash
# Install
npm install --save-dev @storybook/test-runner

# Run tests
npm run test-storybook
```

### Interaction Testing

```typescript
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

export const ClickTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    // Simulate click
    await userEvent.click(button);
    
    // Assert result
    await expect(button).toHaveClass('active');
  },
};
```

---

## 🎨 Theming & Dark Mode

### Global Theme Toggle

Already configured in `.storybook/preview.tsx`:

```typescript
globalTypes: {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'sun', title: 'Light' },
        { value: 'dark', icon: 'moon', title: 'Dark' },
      ],
    },
  },
}
```

**Usage:** Click theme icon in Storybook toolbar

### Per-Story Dark Mode

```typescript
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
```

---

## 📦 Build & Deploy

### Build Static Storybook

```bash
npm run build-storybook
```

**Output:** `storybook-static/` directory

### Deploy Options

#### 1. Chromatic (Recommended)

```bash
npm install --save-dev chromatic
npx chromatic --project-token=<your-token>
```

**Benefits:**
- Visual regression testing
- Auto-deploy on push
- Shareable URLs

#### 2. Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel storybook-static
```

#### 3. Netlify

```bash
# netlify.toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"
```

#### 4. GitHub Pages

```yaml
# .github/workflows/storybook.yml
name: Deploy Storybook
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build-storybook
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

---

## 🎓 Best Practices

### 1. Story Coverage

Write stories for:
- ✅ All component variants
- ✅ All prop combinations
- ✅ Interactive states (hover, focus, disabled)
- ✅ Edge cases (empty, error states)
- ✅ Responsive variations

### 2. Naming Conventions

```typescript
// ✅ Good
export const Primary: Story = { ... }
export const Secondary: Story = { ... }
export const WithIcon: Story = { ... }
export const Loading: Story = { ... }

// ❌ Bad
export const Story1: Story = { ... }
export const test: Story = { ... }
export const Example: Story = { ... }
```

### 3. Args vs Render

```typescript
// ✅ Use args when possible (interactive controls)
export const Primary: Story = {
  args: { variant: 'primary' },
};

// ✅ Use render for complex layouts
export const AllVariants: Story = {
  render: () => <div>...</div>,
};
```

### 4. Documentation

```typescript
// ✅ Add descriptions
argTypes: {
  variant: {
    description: 'The visual style variant',
    control: 'select',
  },
}

// ✅ Add JSDoc comments
/**
 * Button component for user interactions
 */
const Button = ({ ... }) => { ... }
```

### 5. Accessibility

```typescript
// ✅ Test with a11y addon
export const AccessibleButton: Story = {
  args: {
    children: 'Click me',
    'aria-label': 'Primary action button',
  },
};
```

---

## 🚨 Common Issues

### Issue 1: TypeScript Errors

**Problem:** `Cannot find module '@storybook/react'`

**Solution:**
```bash
npm install --save-dev @types/node
```

### Issue 2: Tailwind Not Working

**Problem:** Styles not showing

**Solution:** Import CSS in `.storybook/preview.tsx`
```typescript
import '../index.css'; // ✅ Already added
```

### Issue 3: React Router Errors

**Problem:** `useNavigate()` hook errors

**Solution:** Use MemoryRouter decorator (already configured)

### Issue 4: Dark Mode Not Switching

**Problem:** Theme not changing

**Solution:** Use ThemeProvider decorator (already configured)

---

## 📚 Resources

**Official Docs:**
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Addons](https://storybook.js.org/docs/react/essentials/introduction)

**Video Tutorials:**
- [Storybook Crash Course](https://www.youtube.com/results?search_query=storybook+react+tutorial)
- [Advanced Storybook](https://www.learnstorybook.com/)

**Addons Directory:**
- [Storybook Addons](https://storybook.js.org/addons)

---

## ✅ Checklist

### Initial Setup:
- [x] Configuration files created
- [x] Stories for Button, Card, Badge
- [ ] Install dependencies
- [ ] Run Storybook
- [ ] Verify all stories work

### Documentation:
- [x] Autodocs enabled
- [x] ArgTypes documented
- [ ] Add component descriptions
- [ ] Add usage examples

### Stories to Create:
- [x] Button component
- [x] Card component
- [x] Badge component
- [ ] Form components (Input, Select, Checkbox, TextArea)
- [ ] Layout components (Section, Navbar, Footer)
- [ ] Utility components (Loading, Skeleton, EmptyState)

### Advanced:
- [ ] Add interaction tests
- [ ] Setup visual regression testing (Chromatic)
- [ ] Deploy Storybook to hosting
- [ ] Add to CI/CD pipeline

---

## 🎯 Next Steps

### 1. Install & Run (5 minutes)

```bash
npm install --save-dev @storybook/react-vite @storybook/react @storybook/addon-links @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-a11y storybook

npm run storybook
```

### 2. Create More Stories (30 minutes)

Priority components:
- Form components (Input, Select, Checkbox)
- Layout components (Section, Navbar)
- Utility components (Loading, Skeleton)

### 3. Deploy (10 minutes)

```bash
npm run build-storybook
# Upload storybook-static/ to hosting
```

---

**Last Updated:** 27 November 2025  
**Status:** ✅ Configuration Ready  
**Next:** `npm install` and `npm run storybook`

