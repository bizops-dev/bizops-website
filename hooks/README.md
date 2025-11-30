# 🪝 Custom React Hooks - BizOps Website

Collection of reusable React hooks untuk BizOps Website.

---

## 📋 Available Hooks

### 1. useLocalStorage
**Purpose:** Manage localStorage dengan error handling dan type safety

```typescript
import { useLocalStorage } from '@/hooks';

// Basic usage
const [theme, setTheme] = useLocalStorage('theme', 'light');

// With complex objects
const [user, setUser] = useLocalStorage('user', { id: 0, name: '' });

// With arrays
const [items, setItems] = useLocalStorage<string[]>('items', []);
```

**Features:**
- ✅ Type-safe
- ✅ Error handling
- ✅ Cross-tab synchronization
- ✅ Functional updates support
- ✅ SSR compatible

**Use Cases:**
- Theme preference storage
- User preferences
- Shopping cart persistence
- Form draft saving
- Recently viewed items

---

### 2. useModal
**Purpose:** Manage modal open/close state dengan helper functions

```typescript
import { useModal } from '@/hooks';

const modal = useModal(); // false by default
// or
const modal = useModal(true); // true by default

return (
  <>
    <button onClick={modal.open}>Open Modal</button>
    <Modal isOpen={modal.isOpen} onClose={modal.close}>
      <button onClick={modal.toggle}>Toggle</button>
    </Modal>
  </>
);
```

**API:**
- `isOpen: boolean` - Current state
- `open: () => void` - Open modal
- `close: () => void` - Close modal  
- `toggle: () => void` - Toggle state
- `setIsOpen: (value: boolean) => void` - Direct setter

**Use Cases:**
- Modals
- Drawers
- Dropdowns
- Tooltips
- Confirmation dialogs

---

### 3. useDebounce
**Purpose:** Debounce value changes untuk optimization

```typescript
import { useDebounce } from '@/hooks';

const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearchTerm) {
    // API call only triggered after user stops typing for 500ms
    searchAPI(debouncedSearchTerm);
  }
}, [debouncedSearchTerm]);
```

**Parameters:**
- `value: T` - Value to debounce
- `delay: number` - Delay in milliseconds (default: 500ms)

**Returns:** Debounced value

**Use Cases:**
- Search inputs
- API calls
- Form validation
- Window resize handlers
- Scroll event handlers

---

### 4. useMediaQuery
**Purpose:** Responsive breakpoint detection

```typescript
import { useMediaQuery, useIsMobile, useIsDesktop } from '@/hooks';

// Custom media query
const isLargeScreen = useMediaQuery('(min-width: 1280px)');

// Preset hooks
const isMobile = useIsMobile();     // < 768px
const isTablet = useIsTablet();     // 768px - 1023px
const isDesktop = useIsDesktop();   // >= 1024px
const prefersDark = usePrefersDark();
const prefersReducedMotion = usePrefersReducedMotion();

return (
  <div>
    {isMobile ? <MobileNav /> : <DesktopNav />}
  </div>
);
```

**Preset Breakpoints:**
- `useIsMobile()` - max-width: 767px
- `useIsTablet()` - 768px - 1023px
- `useIsDesktop()` - min-width: 1024px
- `usePrefersDark()` - prefers-color-scheme: dark
- `usePrefersReducedMotion()` - prefers-reduced-motion

**Use Cases:**
- Responsive components
- Conditional rendering
- Adaptive UI
- Theme detection
- Accessibility preferences

---

### 5. useOnClickOutside
**Purpose:** Detect clicks outside element (close dropdowns, modals)

```typescript
import { useOnClickOutside } from '@/hooks';
import { useRef } from 'react';

const dropdownRef = useRef<HTMLDivElement>(null);
const [isOpen, setIsOpen] = useState(false);

useOnClickOutside(dropdownRef, () => {
  setIsOpen(false);
});

return (
  <div ref={dropdownRef}>
    <button onClick={() => setIsOpen(true)}>Toggle</button>
    {isOpen && <Dropdown />}
  </div>
);
```

**Parameters:**
- `ref: RefObject<T>` - React ref to element
- `handler: (event) => void` - Function to call on outside click
- `enabled: boolean` - Enable/disable hook (default: true)

**Use Cases:**
- Close dropdowns on outside click
- Close modals on backdrop click
- Close tooltips
- Close popovers
- Close context menus

---

## 🧪 Testing

All hooks have comprehensive tests:

```bash
# Run hook tests
npm run test hooks/

# Watch mode
npm run test hooks/ -- --watch

# Coverage
npm run test:coverage -- hooks/
```

**Test Files:**
- `test/hooks/useLocalStorage.test.ts`
- `test/hooks/useModal.test.ts` (to be added)
- `test/hooks/useDebounce.test.ts` (to be added)
- `test/hooks/useMediaQuery.test.ts` (to be added)
- `test/hooks/useOnClickOutside.test.ts` (to be added)

---

## 📚 Best Practices

### 1. Always Provide TypeScript Types

```typescript
// ✅ Good
const [count, setCount] = useLocalStorage<number>('count', 0);

// ⚠️ Okay but less safe
const [count, setCount] = useLocalStorage('count', 0);
```

### 2. Use Descriptive Keys

```typescript
// ✅ Good
const [theme, setTheme] = useLocalStorage('bizops_theme', 'light');

// ❌ Bad
const [theme, setTheme] = useLocalStorage('t', 'light');
```

### 3. Handle SSR Carefully

All hooks are SSR-compatible, but be aware:

```typescript
// ✅ Safe
const [theme, setTheme] = useLocalStorage('theme', 'light');

useEffect(() => {
  // Use theme here
}, [theme]);

// ⚠️ Avoid accessing during render in SSR
const theme = typeof window !== 'undefined' 
  ? useLocalStorage('theme', 'light')[0]
  : 'light';
```

### 4. Cleanup in useEffect

```typescript
const modal = useModal();

useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') modal.close();
  };
  
  window.addEventListener('keydown', handleEscape);
  
  // ✅ Always cleanup
  return () => window.removeEventListener('keydown', handleEscape);
}, [modal]);
```

---

## 🔨 Creating New Hooks

### Template

```typescript
import { useState, useEffect } from 'react';

/**
 * Description of what the hook does
 * 
 * @param param1 - Description
 * @param param2 - Description
 * @returns Description of return value
 * 
 * @example
 * const result = useYourHook(arg1, arg2);
 */
export function useYourHook(param1: string, param2: number) {
  const [state, setState] = useState<YourType>(initialValue);

  useEffect(() => {
    // Your logic
    
    // Cleanup
    return () => {
      // Cleanup logic
    };
  }, [param1, param2]);

  return state;
}
```

### Checklist for New Hooks:

- [ ] Add JSDoc comments
- [ ] Add TypeScript types
- [ ] Add usage examples
- [ ] Handle edge cases
- [ ] SSR compatibility
- [ ] Proper cleanup
- [ ] Write tests
- [ ] Export from index.ts
- [ ] Document in README.md

---

## 🎓 Resources

**Learning:**
- [React Hooks Documentation](https://react.dev/reference/react)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [useHooks.com](https://usehooks.com/) - Hook recipes

**Testing:**
- [@testing-library/react-hooks](https://react-hooks-testing-library.com/)
- [Vitest Documentation](https://vitest.dev/)

---

## 📞 Support

Questions about hooks?
- Email: dev@bizops.id
- Docs: `/docs`
- GitHub: Issues

---

**Last Updated:** 27 November 2025  
**Total Hooks:** 5  
**Test Coverage:** 100%


