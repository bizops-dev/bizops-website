import type { Meta, StoryObj } from '@storybook/react';
import SEO from '../components/SEO';

const meta: Meta<typeof SEO> = {
  title: 'Components/SEO',
  component: SEO,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'BizOps | The Adaptive Business Operating System',
    description: 'Transform your business operations with BizOps - an integrated ERP platform.',
  },
};

export const WithKeywords: Story = {
  args: {
    title: 'BizOps Platform - Enterprise ERP Solution',
    description: 'Complete ERP solution for modern businesses. Manage HR, Finance, Operations, and more.',
    keywords: 'ERP, Business Operations, Enterprise Software, HR Management, Finance Software',
  },
};

export const WithImage: Story = {
  args: {
    title: 'BizOps - Product Tour',
    description: 'Explore BizOps platform features and capabilities.',
    image: 'https://bizops.id/og-image.jpg',
  },
};

