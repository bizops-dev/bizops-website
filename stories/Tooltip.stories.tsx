import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import { HelpCircle } from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <Button>Top</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <Button>Bottom</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <Button>Left</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <Button>Right</Button>,
  },
};

export const WithIcon: Story = {
  args: {
    content: 'Click for more information',
    children: (
      <button className="text-slate-400 hover:text-slate-600 transition-colors">
        <HelpCircle className="w-5 h-5" />
      </button>
    ),
  },
};

export const AllPositions: Story = {
  render: () => (
    <div className="flex gap-8 items-center justify-center p-20">
      <Tooltip content="Top tooltip" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

