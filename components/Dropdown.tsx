import React, { useState, useRef, memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOnClickOutside } from '../hooks';

/**
 * Dropdown component for menus and selections
 * 
 * @example
 * ```tsx
 * <Dropdown
 *   trigger={<Button>Open Menu</Button>}
 *   items={[
 *     { label: 'Option 1', onClick: () => {} },
 *     { label: 'Option 2', onClick: () => {} },
 *   ]}
 * />
 * ```
 */
type DropdownItem = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
};

type DropdownProps = {
  /** Trigger element (button, link, etc.) */
  trigger?: React.ReactElement;
  /** Trigger label (if no custom trigger) */
  label?: string;
  /** Dropdown items */
  items: Array<DropdownItem>;
  /** Dropdown position */
  position?: 'left' | 'right' | 'center';
  /** Additional CSS classes */
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = memo(({
  trigger,
  label,
  items,
  position = 'left',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = useRef(`dropdown-${Math.random().toString(36).substr(2, 9)}`);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled) {
      item.onClick();
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const enabledItems = items.filter(item => !item.disabled);
    
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % enabledItems.length;
      const nextButton = dropdownRef.current?.querySelectorAll('[role="menuitem"]')[nextIndex] as HTMLElement;
      nextButton?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (index - 1 + enabledItems.length) % enabledItems.length;
      const prevButton = dropdownRef.current?.querySelectorAll('[role="menuitem"]')[prevIndex] as HTMLElement;
      prevButton?.focus();
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  const defaultTrigger = (
    <button
      onClick={handleToggle}
      aria-expanded={isOpen}
      aria-controls={dropdownId.current}
      aria-haspopup="true"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
    >
      {label || 'Menu'}
      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
    </button>
  );

  const triggerElement = trigger 
    ? React.cloneElement(trigger, {
        onClick: handleToggle,
        'aria-expanded': isOpen,
        'aria-controls': dropdownId.current,
        'aria-haspopup': 'true',
      })
    : defaultTrigger;

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {triggerElement}

      {isOpen && (
        <div
          id={dropdownId.current}
          role="menu"
          aria-orientation="vertical"
          className={`absolute ${positionClasses[position]} mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl z-50 py-1 animate-fade-in`}
        >
          {items.map((item, index) => (
            <button
              key={index}
              role="menuitem"
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-800 ${
                item.disabled
                  ? 'opacity-50 cursor-not-allowed'
                  : item.danger
                  ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.icon && <span aria-hidden="true">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;

