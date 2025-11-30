import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'flat', 'dark'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    hoverEffect: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-slate-600">This is a default card with standard padding and styling.</p>
      </div>
    ),
    variant: 'default',
    padding: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Outline Card</h3>
        <p className="text-slate-600">Card with outline variant.</p>
      </div>
    ),
    variant: 'outline',
  },
};

export const Flat: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Flat Card</h3>
        <p className="text-slate-600">Card with flat background.</p>
      </div>
    ),
    variant: 'flat',
  },
};

export const Dark: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Dark Card</h3>
        <p className="text-slate-300">Card with dark background.</p>
      </div>
    ),
    variant: 'dark',
  },
};

export const WithHoverEffect: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Hover Card</h3>
        <p className="text-slate-600">Hover over this card to see the effect.</p>
      </div>
    ),
    hoverEffect: true,
  },
};

export const SmallPadding: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Small Padding</h3>
        <p className="text-slate-600">Card with small padding.</p>
      </div>
    ),
    padding: 'sm',
  },
};

export const LargePadding: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Large Padding</h3>
        <p className="text-slate-600">Card with large padding.</p>
      </div>
    ),
    padding: 'lg',
  },
};

