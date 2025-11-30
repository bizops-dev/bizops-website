# Custom Hooks Documentation

Collection of reusable React hooks for BizOps Website.

## 📚 Available Hooks

### useLocalStorage

Persistent state management using localStorage with cross-tab synchronization.

```tsx
const [value, setValue] = useLocalStorage('key', initialValue);
```

**Features:**
- Type-safe
- SSR compatible
- Cross-tab sync
- Error handling

**Example:**
```tsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

---

### useModal

State management for modal/dialog components.

```tsx
const modal = useModal();
```

**API:**
- `modal.isOpen` - Boolean state
- `modal.open()` - Open modal
- `modal.close()` - Close modal
- `modal.toggle()` - Toggle state

**Example:**
```tsx
const modal = useModal();

<button onClick={modal.open}>Open</button>
{modal.isOpen && <Modal onClose={modal.close}>Content</Modal>}
```

---

### useDebounce

Debounce a value to reduce frequent updates.

```tsx
const debouncedValue = useDebounce(value, delay);
```

**Example:**
```tsx
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 300);

useEffect(() => {
  // Only fires after 300ms of no typing
  performSearch(debouncedSearch);
}, [debouncedSearch]);
```

---

### useMediaQuery

Responsive breakpoint detection.

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');
```

**Example:**
```tsx
const isDesktop = useMediaQuery('(min-width: 1024px)');
if (isDesktop) {
  // Desktop layout
}
```

---

### useOnClickOutside

Detect clicks outside an element.

```tsx
const ref = useRef(null);
useOnClickOutside(ref, () => {
  // Handle outside click
});
```

**Example:**
```tsx
const dropdownRef = useRef(null);
useOnClickOutside(dropdownRef, () => setIsOpen(false));
```

---

### useScrollPosition

Track scroll position.

```tsx
const scrollY = useScrollPosition();
```

**Example:**
```tsx
const scrollY = useScrollPosition();
const isScrolled = scrollY > 100;
```

---

### useErrorHandler

Error handling with automatic reporting.

```tsx
const handleError = useErrorHandler();

try {
  await riskyOperation();
} catch (error) {
  handleError(error, { component: 'MyComponent' });
}
```

**Features:**
- Automatic Sentry reporting
- Analytics tracking
- Context logging

---

### useAsyncErrorHandler

Async operations with retry logic.

```tsx
const { executeWithRetry, handleError } = useAsyncErrorHandler();

const result = await executeWithRetry(
  () => fetchData(),
  {
    maxRetries: 3,
    retryDelay: 1000,
    onRetry: (attempt) => console.log(`Retry ${attempt}`),
  }
);
```

---

## Best Practices

1. **Reusability** - Extract common logic to hooks
2. **Type Safety** - All hooks are fully typed
3. **Performance** - Use memoization when needed
4. **Error Handling** - Always handle errors in async hooks

---

**Last Updated:** 2025
