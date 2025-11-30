# 🔄 Refactoring Guide - Using New Components

Guide untuk refactoring halaman existing menggunakan komponen baru dari Phase 1-4.

---

## 📚 Available New Components

### **Layout Components:**
```tsx
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';
```

### **Interactive Components:**
```tsx
import Modal from '../components/Modal';
import Tooltip from '../components/Tooltip';
import Tabs from '../components/Tabs';
import Dropdown from '../components/Dropdown';
```

### **Design Tokens:**
```tsx
import { gradients } from '../design-tokens';
```

---

## 🎯 Refactoring Patterns

### **Pattern 1: Replace Custom Headings with Typography**

**❌ Before:**
```tsx
<h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
  Page Title
</h1>
```

**✅ After:**
```tsx
<Typography variant="h1" as="h1">
  Page Title
</Typography>
```

---

### **Pattern 2: Replace max-w-7xl with Container**

**❌ Before:**
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold">Section Title</h2>
  <p className="text-slate-600">Content</p>
</div>
```

**✅ After:**
```tsx
<Container>
  <Typography variant="h2" as="h2">Section Title</Typography>
  <Typography variant="body" color="muted">Content</Typography>
</Container>
```

---

### **Pattern 3: Replace Custom Grid with Grid Component**

**❌ Before:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

**✅ After:**
```tsx
<Grid cols={3} gap={6}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

---

### **Pattern 4: Replace Flex with Stack**

**❌ Before:**
```tsx
<div className="flex flex-col gap-4">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</div>
```

**✅ After:**
```tsx
<Stack direction="vertical" gap={4}>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Stack>
```

**❌ Before:**
```tsx
<div className="flex items-center justify-between gap-4">
  <span>Label</span>
  <Button>Action</Button>
</div>
```

**✅ After:**
```tsx
<Stack direction="horizontal" align="center" justify="between" gap={4}>
  <span>Label</span>
  <Button>Action</Button>
</Stack>
```

---

### **Pattern 5: Replace Hardcoded Gradients**

**❌ Before:**
```tsx
<div className="bg-gradient-to-r from-primary-600 to-primary-500">
  Content
</div>
```

**✅ After:**
```tsx
import { gradients } from '../design-tokens';

<div className={gradients.primary}>
  Content
</div>
```

---

### **Pattern 6: Replace Custom Tabs**

**❌ Before:**
```tsx
const [activeTab, setActiveTab] = useState('tab1');

<div className="border-b border-slate-200">
  <button 
    onClick={() => setActiveTab('tab1')}
    className={activeTab === 'tab1' ? 'border-b-2 border-primary-600' : ''}
  >
    Tab 1
  </button>
  <button 
    onClick={() => setActiveTab('tab2')}
    className={activeTab === 'tab2' ? 'border-b-2 border-primary-600' : ''}
  >
    Tab 2
  </button>
</div>

{activeTab === 'tab1' && <div>Content 1</div>}
{activeTab === 'tab2' && <div>Content 2</div>}
```

**✅ After:**
```tsx
<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
/>
```

---

## 📝 Refactoring Checklist

### **For Each Page:**

- [ ] **Import new components**
  ```tsx
  import Typography from '../components/Typography';
  import Container from '../components/Container';
  import Grid from '../components/Grid';
  import Stack from '../components/Stack';
  import { gradients } from '../design-tokens';
  ```

- [ ] **Replace headings (h1-h6)**
  - Find: `<h1 className="...">` → Replace: `<Typography variant="h1" as="h1">`
  - Find: `<h2 className="...">` → Replace: `<Typography variant="h2" as="h2">`
  - etc.

- [ ] **Replace max-width containers**
  - Find: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
  - Replace: `<Container>`

- [ ] **Replace grid layouts**
  - Find: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
  - Replace: `<Grid cols={3} gap={6}>`

- [ ] **Replace flex layouts**
  - Find: `flex flex-col gap-4`
  - Replace: `<Stack direction="vertical" gap={4}>`
  - Find: `flex items-center gap-4`
  - Replace: `<Stack direction="horizontal" align="center" gap={4}>`

- [ ] **Replace hardcoded gradients**
  - Find: `bg-gradient-to-r from-primary-600 to-primary-500`
  - Replace: `{gradients.primary}`

- [ ] **Replace custom tabs**
  - Replace with `<Tabs>` component

- [ ] **Add ARIA labels to buttons**
  - Icon-only buttons need `aria-label`

- [ ] **Test responsiveness**
  - Mobile (375px)
  - Tablet (768px)
  - Desktop (1280px)

- [ ] **Test dark mode**
  - Ensure colors work in both modes

- [ ] **Run accessibility tests**
  ```bash
  npm run test:a11y
  ```

---

## 🔍 Example: HomePage Hero Section Refactoring

### **Before:**
```tsx
<div className="relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white">
      Satu Sistem Kendali untuk
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
        Seluruh Operasional Bisnis
      </span>
    </h1>
    
    <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
      Platform terintegrasi untuk HR, Finance, dan Supply Chain
    </p>
    
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary">Mulai Gratis</Button>
      <Button variant="outline">Lihat Demo</Button>
    </div>
  </div>
</div>
```

### **After:**
```tsx
<div className="relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
  <Container className="text-center">
    <Typography variant="h1" as="h1" align="center">
      Satu Sistem Kendali untuk
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
        Seluruh Operasional Bisnis
      </span>
    </Typography>
    
    <Typography variant="body" color="muted" align="center" className="mt-6 max-w-3xl mx-auto">
      Platform terintegrasi untuk HR, Finance, dan Supply Chain
    </Typography>
    
    <Stack direction="horizontal" gap={4} justify="center" className="mt-10">
      <Button variant="primary">Mulai Gratis</Button>
      <Button variant="outline">Lihat Demo</Button>
    </Stack>
  </Container>
</div>
```

---

## 🚀 Refactoring Priority

### **High Priority (Core Pages):**
1. ✅ HomePage - Main landing page
2. ✅ AboutPage - Company info
3. ✅ PricingPage - Pricing tables
4. ✅ PlatformPage - Product overview
5. ✅ ContactPage - Contact form

### **Medium Priority (Feature Pages):**
6. ⏳ ServicesPage - Service listings
7. ⏳ ModulePage - Module details
8. ⏳ IndustryPage - Industry solutions
9. ⏳ RolePage - Role-based solutions
10. ⏳ TechnologyPage - Tech stack

### **Low Priority (Content Pages):**
11. ⏳ BlogPage - Blog listings
12. ⏳ ResourcesPage - Resources
13. ⏳ LegalPage - Legal documents
14. ⏳ FAQPage - FAQs

---

## 🛠️ Automated Refactoring Script

For bulk refactoring, you can use find-and-replace with regex:

### **VS Code Find & Replace:**

1. **Replace h1 tags:**
   - Find: `<h1 className="([^"]*)">(.*?)</h1>`
   - Replace: `<Typography variant="h1" as="h1">$2</Typography>`

2. **Replace max-w-7xl containers:**
   - Find: `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`
   - Replace: `<Container>`

3. **Replace grid layouts:**
   - Find: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`
   - Replace: `<Grid cols={3} gap={6}>`

**Note:** Always review changes manually after bulk refactoring!

---

## ⚠️ Common Pitfalls

### **1. Forgetting to Import:**
```tsx
// ❌ BAD: Missing import
<Typography variant="h1">Title</Typography>

// ✅ GOOD: Import at top
import Typography from '../components/Typography';
<Typography variant="h1">Title</Typography>
```

### **2. Wrong Variant:**
```tsx
// ❌ BAD: Using h1 variant with h2 element
<Typography variant="h1" as="h2">Title</Typography>

// ✅ GOOD: Matching variant and element
<Typography variant="h2" as="h2">Title</Typography>
```

### **3. Nesting Containers:**
```tsx
// ❌ BAD: Nested containers
<Container>
  <Container>
    Content
  </Container>
</Container>

// ✅ GOOD: Single container
<Container>
  Content
</Container>
```

### **4. Missing className:**
```tsx
// ❌ BAD: Losing custom classes
<div className="max-w-7xl mx-auto px-4 bg-slate-50">
  Content
</div>

// ✅ GOOD: Preserve custom classes
<Container className="bg-slate-50">
  Content
</Container>
```

---

## 📊 Progress Tracking

| Page | Status | Components Used | Notes |
|------|--------|----------------|-------|
| HomePage | ⏳ In Progress | Typography, Container, Grid, Stack | Large file (800+ lines) |
| AboutPage | ⏳ Pending | - | - |
| PricingPage | ⏳ Pending | - | - |
| PlatformPage | ⏳ Pending | - | - |
| ContactPage | ⏳ Pending | - | - |
| ServicesPage | ⏳ Pending | - | - |
| ModulePage | ⏳ Pending | - | - |

**Target:** Refactor all high-priority pages (5 pages)

**Estimated Time:** 2-3 hours for all pages

---

## ✅ Testing After Refactoring

After refactoring each page:

1. **Visual Check:**
   ```bash
   npm run dev
   ```
   - Check layout on mobile, tablet, desktop
   - Check dark mode
   - Check animations

2. **Accessibility Check:**
   ```bash
   npm run test:a11y
   ```

3. **Build Check:**
   ```bash
   npm run build
   ```

4. **Lint Check:**
   ```bash
   npm run lint
   ```

---

## 🎉 Benefits of Refactoring

### **Before Refactoring:**
- ❌ Inconsistent text sizes
- ❌ Hardcoded colors
- ❌ Repeated layout code
- ❌ Poor accessibility
- ❌ Hard to maintain

### **After Refactoring:**
- ✅ Consistent typography
- ✅ Design token usage
- ✅ Reusable components
- ✅ Better accessibility
- ✅ Easy to maintain
- ✅ Smaller bundle size (reused code)

---

## 📚 Resources

- [Typography Component Docs](../components/Typography.tsx)
- [Container Component Docs](../components/Container.tsx)
- [Grid Component Docs](../components/Grid.tsx)
- [Stack Component Docs](../components/Stack.tsx)
- [Design Tokens](../design-tokens.ts)
- [Storybook](http://localhost:6006) - Run `npm run storybook`

---

**Happy Refactoring!** 🔄✨

