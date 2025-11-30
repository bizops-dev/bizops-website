import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonText, SkeletonCard } from '../components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-full" />,
};

export const Circle: Story = {
  render: () => <Skeleton className="h-16 w-16 rounded-full" />,
};

export const Rectangle: Story = {
  render: () => <Skeleton className="h-32 w-full rounded-lg" />,
};

export const Text: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <SkeletonText lines={3} />
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <div className="max-w-md">
      <SkeletonCard />
    </div>
  ),
};

export const Article: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <Skeleton className="h-8 w-3/4 rounded" />
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-5/6 rounded" />
      <Skeleton className="h-64 w-full rounded-lg" />
      <SkeletonText lines={4} />
    </div>
  ),
};

export const Profile: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-1/3 rounded" />
        <Skeleton className="h-3 w-1/2 rounded" />
      </div>
    </div>
  ),
};

