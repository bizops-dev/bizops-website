import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Tooltip from '../../components/Tooltip';
import Tabs from '../../components/Tabs';
import Dropdown from '../../components/Dropdown';
import Typography from '../../components/Typography';
import Container from '../../components/Container';

/**
 * Accessibility Tests for All Components
 * Uses axe-core to detect WCAG violations
 */

describe('Button Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have aria-label for icon-only button', async () => {
    const { container } = render(
      <Button aria-label="Close menu">
        <span>×</span>
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Card Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Card>
        <h3>Card Title</h3>
        <p>Card content</p>
      </Card>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have proper role for clickable card', async () => {
    const { container } = render(
      <Card onClick={() => {}} aria-label="Product card">
        <h3>Product</h3>
      </Card>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Modal Accessibility', () => {
  it('should not have accessibility violations when open', async () => {
    const { container } = render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Tooltip Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Tooltip content="Helpful text">
        <button>Hover me</button>
      </Tooltip>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Tabs Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Tabs
        tabs={[
          { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
          { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
        ]}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Dropdown Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Dropdown
        label="Menu"
        items={[
          { label: 'Option 1', onClick: () => {} },
          { label: 'Option 2', onClick: () => {} },
        ]}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Typography Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Typography variant="h1" as="h1">
        Heading Text
      </Typography>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should use proper heading hierarchy', async () => {
    const { container } = render(
      <div>
        <Typography variant="h1" as="h1">Main Heading</Typography>
        <Typography variant="h2" as="h2">Sub Heading</Typography>
        <Typography variant="h3" as="h3">Section Heading</Typography>
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Container Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Container>
        <h1>Content</h1>
        <p>Some text</p>
      </Container>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

