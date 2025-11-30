import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
// @ts-ignore - jest-axe types not available for vitest
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';

// @ts-ignore - Extend Vitest matchers
expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('Button should have no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    // @ts-ignore - jest-axe matcher not in vitest types
    expect(results).toHaveNoViolations();
  });

  it('Card should have no accessibility violations', async () => {
    const { container } = render(
      <Card>
        <h2>Card Title</h2>
        <p>Card content</p>
      </Card>
    );
    const results = await axe(container);
    // @ts-ignore - jest-axe matcher not in vitest types
    expect(results).toHaveNoViolations();
  });

  it('Badge should have no accessibility violations', async () => {
    const { container } = render(<Badge>Label</Badge>);
    const results = await axe(container);
    // @ts-ignore - jest-axe matcher not in vitest types
    expect(results).toHaveNoViolations();
  });

  it('Form should have proper labels', async () => {
    const { container } = render(
      <form>
        <label htmlFor="test-input">Test Input</label>
        <input id="test-input" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
    const results = await axe(container);
    // @ts-ignore - jest-axe matcher not in vitest types
    expect(results).toHaveNoViolations();
  });
});
