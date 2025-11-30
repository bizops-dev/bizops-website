import { useEffect, RefObject } from 'react';

/**
 * Custom hook to detect clicks outside of a specific element
 * Useful for closing dropdowns, modals, tooltips, etc.
 * 
 * @param ref - React ref object pointing to the element
 * @param handler - Function to call when click outside is detected
 * @param enabled - Whether the hook is enabled (default: true)
 * 
 * @example
 * const dropdownRef = useRef<HTMLDivElement>(null);
 * useOnClickOutside(dropdownRef, () => setIsOpen(false));
 * 
 * return (
 *   <div ref={dropdownRef}>
 *     <Dropdown />
 *   </div>
 * );
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    // Add event listeners
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
}


