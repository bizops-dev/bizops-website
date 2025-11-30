import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from '../components/EmptyState';
import { Inbox, Search, AlertCircle, FileX } from 'lucide-react';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['no-data', 'no-results', 'error', 'empty'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoData: Story = {
  args: {
    type: 'no-data',
    title: 'No data available',
    description: 'There is no data to display at this time. Please check back later or create new data.',
  },
};

export const NoResults: Story = {
  args: {
    type: 'no-results',
    title: 'No results found',
    description: 'We couldn\'t find any results matching your search criteria. Try adjusting your filters.',
    actionLabel: 'Clear Filters',
    onAction: () => alert('Filters cleared'),
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Something went wrong',
    description: 'We encountered an error while loading this data. Please try again or contact support if the problem persists.',
    actionLabel: 'Try Again',
    onAction: () => alert('Retrying...'),
  },
};

export const Empty: Story = {
  args: {
    type: 'empty',
    title: 'Empty list',
    description: 'This list is currently empty. Add your first item to get started.',
    actionLabel: 'Add Item',
    onAction: () => alert('Adding item...'),
  },
};

export const CustomIcon: Story = {
  args: {
    title: 'Custom empty state',
    description: 'This empty state uses a custom icon instead of the default.',
    icon: Inbox,
    actionLabel: 'Get Started',
    onAction: () => alert('Getting started...'),
  },
};

export const WithoutAction: Story = {
  args: {
    type: 'no-data',
    title: 'No data available',
    description: 'There is no data to display. No action button is shown.',
  },
};

