# 🧪 Testing Guide - BizOps Website

Comprehensive guide for testing the BizOps website.

---

## 📚 Table of Contents

1. [Testing Stack](#testing-stack)
2. [Running Tests](#running-tests)
3. [Accessibility Testing](#accessibility-testing)
4. [Visual Regression Testing](#visual-regression-testing)
5. [Component Testing](#component-testing)
6. [E2E Testing](#e2e-testing)
7. [CI/CD Integration](#cicd-integration)

---

## 🛠️ Testing Stack

### **Unit & Component Tests:**
- **Vitest** - Fast unit test framework
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Custom matchers

### **Accessibility Tests:**
- **axe-core** - Automated accessibility testing
- **vitest-axe** - Axe integration for Vitest
- **@axe-core/react** - Runtime accessibility checks

### **Visual Regression Tests:**
- **Percy** - Visual testing platform
- **Storybook** - Component documentation & testing

### **Code Coverage:**
- **V8** - Native code coverage
- **Istanbul** - Coverage reporting

---

## 🚀 Running Tests

### **All Tests:**
```bash
npm run test
```

### **Watch Mode:**
```bash
npm run test -- --watch
```

### **UI Mode (Interactive):**
```bash
npm run test:ui
```

### **Coverage Report:**
```bash
npm run test:coverage
```

### **Accessibility Tests Only:**
```bash
npm run test:a11y
```

### **CI Mode:**
```bash
npm run test:ci
```

---

## ♿ Accessibility Testing

### **Automated A11y Tests**

We use **axe-core** to automatically detect WCAG violations.

**Run A11y Tests:**
```bash
npm run test:a11y
```

**Test Coverage:**
- ✅ All new components (Button, Card, Modal, Tooltip, Tabs, Dropdown)
- ✅ Typography hierarchy
- ✅ Color contrast
- ✅ Keyboard navigation
- ✅ ARIA attributes
- ✅ Focus management

**Example Test:**
```tsx
import { axe } from 'vitest-axe';
import { render } from '@testing-library/react';
import Button from '../components/Button';

it('should not have accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### **Manual A11y Checklist:**

- [ ] Keyboard navigation works (Tab, Enter, Space, Arrow keys)
- [ ] Screen reader announces content correctly
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Headings follow hierarchy (h1 → h2 → h3)
- [ ] Skip-to-content link works

### **Tools for Manual Testing:**

1. **Browser Extensions:**
   - axe DevTools (Chrome/Firefox)
   - WAVE (Web Accessibility Evaluation Tool)
   - Lighthouse (Chrome DevTools)

2. **Screen Readers:**
   - NVDA (Windows) - Free
   - JAWS (Windows) - Paid
   - VoiceOver (macOS) - Built-in
   - TalkBack (Android) - Built-in

3. **Keyboard Testing:**
   - Test all interactions without mouse
   - Ensure logical tab order
   - Check focus visibility

---

## 👁️ Visual Regression Testing

### **Setup Percy**

1. **Sign up for Percy:**
   - Go to https://percy.io
   - Create account and project
   - Get your `PERCY_TOKEN`

2. **Add to .env:**
   ```bash
   PERCY_TOKEN=your_percy_token_here
   ```

3. **Build Storybook:**
   ```bash
   npm run build-storybook
   ```

4. **Run Percy:**
   ```bash
   npm run percy:storybook
   ```

### **Percy Configuration**

Percy is configured in `.percy.yml`:

```yaml
version: 2
storybook:
  widths:
    - 375   # Mobile
    - 768   # Tablet
    - 1280  # Desktop
    - 1920  # Large Desktop
```

### **What Percy Tests:**

- ✅ Component visual consistency
- ✅ Responsive layouts (4 breakpoints)
- ✅ Dark mode variations
- ✅ Hover/focus states
- ✅ Animation start/end states

### **Percy Workflow:**

1. **Baseline:** First run creates baseline snapshots
2. **Compare:** Subsequent runs compare against baseline
3. **Review:** Review diffs in Percy dashboard
4. **Approve:** Approve changes to update baseline

---

## 🧩 Component Testing

### **Test Structure:**

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

### **Testing Best Practices:**

1. **Test User Behavior, Not Implementation:**
   ```tsx
   // ❌ BAD: Testing implementation details
   expect(component.state.isOpen).toBe(true);
   
   // ✅ GOOD: Testing user-visible behavior
   expect(screen.getByRole('dialog')).toBeVisible();
   ```

2. **Use Semantic Queries:**
   ```tsx
   // ✅ Prefer these (in order):
   screen.getByRole('button', { name: /submit/i })
   screen.getByLabelText('Email')
   screen.getByPlaceholderText('Enter email')
   screen.getByText('Welcome')
   
   // ❌ Avoid these:
   screen.getByTestId('submit-button')
   screen.getByClassName('btn-primary')
   ```

3. **Test Accessibility:**
   ```tsx
   it('has proper ARIA attributes', () => {
     render(<Button aria-label="Close menu">×</Button>);
     expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close menu');
   });
   ```

---

## 🔄 CI/CD Integration

### **GitHub Actions Example:**

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm run test:ci
        
      - name: Run accessibility tests
        run: npm run test:a11y
        
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
```

### **Percy CI Integration:**

```yaml
  percy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build Storybook
        run: npm run build-storybook
        
      - name: Percy Test
        run: npm run percy:storybook
        env:
          PERCY_TOKEN: ${{ secrets.PERCY_TOKEN }}
```

---

## 📊 Coverage Goals

### **Current Coverage:**

| Category | Target | Current |
|----------|--------|---------|
| Statements | 80% | TBD |
| Branches | 75% | TBD |
| Functions | 80% | TBD |
| Lines | 80% | TBD |

### **Coverage Reports:**

After running `npm run test:coverage`, open:
- **HTML Report:** `coverage/index.html`
- **JSON Report:** `coverage/coverage-final.json`

---

## 🎯 Test Checklist

### **Before Committing:**

- [ ] All unit tests pass (`npm run test`)
- [ ] No accessibility violations (`npm run test:a11y`)
- [ ] Coverage meets minimum threshold
- [ ] Linter passes (`npm run lint`)
- [ ] Type check passes (`npm run type-check`)

### **Before Deploying:**

- [ ] All CI tests pass
- [ ] Percy visual tests approved
- [ ] Lighthouse score > 90
- [ ] Manual smoke test on staging
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing (iOS, Android)

---

## 🐛 Debugging Tests

### **Debug in VS Code:**

1. Add breakpoint in test file
2. Run "Debug Test" from VS Code
3. Inspect variables and step through code

### **Debug with Vitest UI:**

```bash
npm run test:ui
```

Opens interactive UI to:
- Run individual tests
- See test output
- Inspect DOM snapshots
- View coverage

### **Common Issues:**

**Issue:** Test fails with "not wrapped in act(...)"
```tsx
// ❌ BAD:
fireEvent.click(button);
expect(screen.getByText('Loading')).toBeInTheDocument();

// ✅ GOOD:
await waitFor(() => {
  expect(screen.getByText('Loading')).toBeInTheDocument();
});
```

**Issue:** Async test timeout
```tsx
// Increase timeout for slow tests
it('loads data', async () => {
  // test code
}, 10000); // 10 second timeout
```

---

## 📚 Resources

### **Documentation:**
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [axe-core](https://github.com/dequelabs/axe-core)
- [Percy](https://docs.percy.io/)

### **Guides:**
- [Testing Library Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

---

## 🎉 Summary

**Testing Stack:**
- ✅ Vitest for unit tests
- ✅ axe-core for accessibility
- ✅ Percy for visual regression
- ✅ React Testing Library for components

**Commands:**
```bash
npm run test              # Run all tests
npm run test:a11y         # Accessibility tests
npm run test:coverage     # Coverage report
npm run percy:storybook   # Visual tests
```

**Coverage:** Aiming for 80%+ across all metrics

**CI/CD:** Automated testing on every commit

---

**Happy Testing!** 🧪✨

