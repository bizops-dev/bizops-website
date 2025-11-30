import type { Meta, StoryObj } from '@storybook/react';
import Loading from '../components/Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Loading />
      <p className="text-sm text-slate-600">Loading content...</p>
    </div>
  ),
};

