import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import { Settings, User, LogOut, Trash2 } from 'lucide-react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleItems = [
  { label: 'Profile', onClick: () => alert('Profile clicked'), icon: <User className="w-4 h-4" /> },
  { label: 'Settings', onClick: () => alert('Settings clicked'), icon: <Settings className="w-4 h-4" /> },
  { label: 'Logout', onClick: () => alert('Logout clicked'), icon: <LogOut className="w-4 h-4" /> },
];

export const Default: Story = {
  args: {
    label: 'Menu',
    items: sampleItems,
  },
};

export const WithCustomTrigger: Story = {
  args: {
    trigger: <Button variant="primary">Open Menu</Button>,
    items: sampleItems,
  },
};

export const PositionRight: Story = {
  args: {
    label: 'Right Aligned',
    items: sampleItems,
    position: 'right',
  },
};

export const WithDisabledItem: Story = {
  args: {
    label: 'Menu',
    items: [
      ...sampleItems,
      { label: 'Disabled Option', onClick: () => {}, disabled: true },
    ],
  },
};

export const WithDangerAction: Story = {
  args: {
    label: 'Actions',
    items: [
      { label: 'Edit', onClick: () => alert('Edit'), icon: <Settings className="w-4 h-4" /> },
      { label: 'Delete', onClick: () => alert('Delete'), icon: <Trash2 className="w-4 h-4" />, danger: true },
    ],
  },
};

