import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../components/Tabs';
import { Home, User, Settings } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  {
    id: 'tab1',
    label: 'Overview',
    content: <div className="p-4">This is the overview content.</div>,
  },
  {
    id: 'tab2',
    label: 'Details',
    content: <div className="p-4">This is the details content with more information.</div>,
  },
  {
    id: 'tab3',
    label: 'Settings',
    content: <div className="p-4">This is the settings content.</div>,
  },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
};

export const Pills: Story = {
  args: {
    tabs: sampleTabs,
    variant: 'pills',
  },
};

export const Underline: Story = {
  args: {
    tabs: sampleTabs,
    variant: 'underline',
  },
};

export const WithIcons: Story = {
  args: {
    tabs: [
      {
        id: 'home',
        label: 'Home',
        icon: <Home className="w-4 h-4" />,
        content: <div className="p-4">Home content</div>,
      },
      {
        id: 'profile',
        label: 'Profile',
        icon: <User className="w-4 h-4" />,
        content: <div className="p-4">Profile content</div>,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="w-4 h-4" />,
        content: <div className="p-4">Settings content</div>,
      },
    ],
    variant: 'pills',
  },
};

export const WithDisabled: Story = {
  args: {
    tabs: [
      ...sampleTabs,
      {
        id: 'disabled',
        label: 'Disabled Tab',
        content: <div>This should not be visible</div>,
        disabled: true,
      },
    ],
  },
};

