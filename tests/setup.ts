import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { toHaveNoViolations } from 'vitest-axe/matchers';

// Extend Vitest's expect method with jest-dom matchers
expect.extend(matchers);

// Extend Vitest's expect method with axe matchers
expect.extend(toHaveNoViolations);

// Cleanup after each test case
afterEach(() => {
  cleanup();
});
