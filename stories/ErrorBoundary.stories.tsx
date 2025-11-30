import type { Meta, StoryObj } from '@storybook/react';
import ErrorBoundary from '../components/ErrorBoundary';
import { SectionErrorBoundary } from '../components/ErrorBoundary';

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error for Storybook');
  }
  return <div>No error</div>;
};

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutError: Story = {
  render: () => (
    <ErrorBoundary>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Normal Content</h1>
        <p>This content renders normally without any errors.</p>
      </div>
    </ErrorBoundary>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorBoundary>
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>
  ),
};

export const SectionErrorBoundaryExample: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <div className="p-4 bg-white rounded-lg border">
        <h2 className="font-bold mb-2">Normal Section</h2>
        <p>This section works fine.</p>
      </div>
      
      <SectionErrorBoundary>
        <ThrowError shouldThrow={true} />
      </SectionErrorBoundary>
      
      <div className="p-4 bg-white rounded-lg border">
        <h2 className="font-bold mb-2">Another Normal Section</h2>
        <p>This section also works fine, even though the one above has an error.</p>
      </div>
    </div>
  ),
};

