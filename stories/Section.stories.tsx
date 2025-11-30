import type { Meta, StoryObj } from '@storybook/react';
import Section from '../components/Section';

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    dark: {
      control: 'boolean',
    },
    noPadding: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Section Title</h2>
        <p className="text-slate-600">This is a default section with standard padding and styling.</p>
      </div>
    ),
  },
};

export const Dark: Story = {
  args: {
    dark: true,
    children: (
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Dark Section</h2>
        <p className="text-slate-300">This is a dark section variant.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    noPadding: true,
    children: (
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">No Padding Section</h2>
        <p className="text-slate-600">Section without default padding.</p>
      </div>
    ),
  },
};

