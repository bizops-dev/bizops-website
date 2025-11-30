import React, { useEffect, useRef, memo } from 'react';
import { X } from 'lucide-react';
import { useOnClickOutside } from '../hooks';

/**
 * Modal component with focus trap and accessibility
 * 
 * @example
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Modal Title"
 * >
 *   <p>Modal content</p>
 * </Modal>
 * ```
 */
type ModalProps = {
  /** Whether modal is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Modal content */
  children: React.ReactNode;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Additional CSS classes */
  className?: string;
  /** Show close button */
  showClose?: boolean;
};

const Modal: React.FC<ModalProps> = memo(({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  className = '',
  showClose = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Close on click outside
  useOnClickOutside(modalRef, onClose);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus trap and restoration
  useEffect(() => {
    if (isOpen) {
      // Store previous focus
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Focus modal
      const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore focus
      previousFocusRef.current?.focus();

      // Restore body scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={`${sizeClasses[size]} w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl transform transition-all ${className}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
          <h2
            id="modal-title"
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            {title}
          </h2>
          {showClose && (
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;

