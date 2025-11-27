import { useState, useCallback } from 'react';

/**
 * Custom hook for managing modal state
 * 
 * @param initialState - Initial open/closed state (default: false)
 * @returns Object with modal state and control functions
 * 
 * @example
 * const modal = useModal();
 * 
 * <button onClick={modal.open}>Open Modal</button>
 * <Modal isOpen={modal.isOpen} onClose={modal.close}>
 *   <button onClick={modal.toggle}>Toggle</button>
 * </Modal>
 */
export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
    setIsOpen,
  };
}
