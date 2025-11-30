import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    hoverEffect: {
      control: 'boolean',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p className="text-slate-600">This is a default card with some content inside.</p>
      </div>
    ),
  },
};

export const WithHover: Story = {
  args: {
    hoverEffect: true,
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Hoverable Card</h3>
        <p className="text-slate-600">Hover over this card to see the effect.</p>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-1">Small Padding</h3>
        <p className="text-slate-600">Card with small padding.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <div>
        <h3 className="text-xl font-bold mb-3">Large Padding</h3>
        <p className="text-slate-600">Card with large padding for more spacious content.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <img 
        src="https://via.placeholder.com/400x200" 
        alt="Placeholder" 
        className="w-full h-auto"
      />
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'border-2 border-primary-500',
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Custom Styled Card</h3>
        <p className="text-slate-600">This card has custom border styling.</p>
      </div>
    ),
  },
};


