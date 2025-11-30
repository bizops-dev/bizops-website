import type { Meta, StoryObj } from '@storybook/react';
import { Input, Select, TextArea, Checkbox } from '../components/Form';
import { Mail, Lock, User } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Form',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={<Mail className="w-5 h-5" />}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon={<Lock className="w-5 h-5" />}
      />
      <Input
        label="Username"
        placeholder="Enter your username"
        icon={<User className="w-5 h-5" />}
      />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error="Please enter a valid email address"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        error="Password must be at least 8 characters"
      />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Username"
        placeholder="Enter your username"
        helperText="Username must be unique and contain only letters and numbers"
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        helperText="We'll never share your email with anyone else"
      />
    </div>
  ),
};

export const SelectInput: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Select
        label="Country"
        options={[
          { value: 'us', label: 'United States' },
          { value: 'id', label: 'Indonesia' },
          { value: 'sg', label: 'Singapore' },
        ]}
      />
      <Select
        label="Plan"
        options={[
          { value: 'basic', label: 'Basic Plan' },
          { value: 'pro', label: 'Pro Plan' },
          { value: 'enterprise', label: 'Enterprise Plan' },
        ]}
      />
    </div>
  ),
};

export const TextAreaInput: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <TextArea
        label="Message"
        placeholder="Enter your message"
        rows={4}
      />
      <TextArea
        label="Description"
        placeholder="Enter description"
        rows={6}
        helperText="Maximum 500 characters"
      />
    </div>
  ),
};

export const CheckboxInput: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Checkbox
        label="I agree to the terms and conditions"
        name="terms"
      />
      <Checkbox
        label="Subscribe to newsletter"
        name="newsletter"
        defaultChecked
      />
      <Checkbox
        label="Enable notifications"
        name="notifications"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Disabled Input"
        placeholder="This input is disabled"
        disabled
      />
      <Select
        label="Disabled Select"
        options={[{ value: '1', label: 'Option 1' }]}
        disabled
      />
    </div>
  ),
};

