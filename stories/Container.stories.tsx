import type { Meta, StoryObj } from '@storybook/react';
import Container from '../components/Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Default Container</h2>
        <p>Max-width: 1280px (max-w-7xl)</p>
        <p>Padding: px-4 sm:px-6 lg:px-8</p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Small Container</h2>
        <p>Max-width: 896px (max-w-4xl)</p>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: (
      <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Large Container</h2>
        <p>Max-width: 1400px</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    noPadding: true,
    children: (
      <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Container without padding</h2>
        <p>No horizontal padding (useful for full-width content)</p>
      </div>
    ),
  },
};

