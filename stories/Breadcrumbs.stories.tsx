import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const BreadcrumbsWrapper = (args: any) => (
  <BrowserRouter>
    <Breadcrumbs {...args} />
  </BrowserRouter>
);

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: BreadcrumbsWrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/products' },
      { label: 'Details', path: '/products/details' },
    ],
  },
};

export const ShortPath: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
    ],
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Platform', path: '/platform' },
      { label: 'Modules', path: '/platform/modules' },
      { label: 'Finance', path: '/platform/modules/finance' },
      { label: 'Reports', path: '/platform/modules/finance/reports' },
    ],
  },
};

export const SingleLevel: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
    ],
  },
};

