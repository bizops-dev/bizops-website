import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'bodySmall', 'small', 'tiny'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'white', 'success', 'warning', 'danger'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    as: 'h1',
    children: 'This is a Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    as: 'h2',
    children: 'This is a Heading 2',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is body text with proper line height and sizing for readability.',
  },
};

export const Muted: Story = {
  args: {
    variant: 'body',
    color: 'muted',
    children: 'This is muted text for secondary information.',
  },
};

export const Primary: Story = {
  args: {
    variant: 'body',
    color: 'primary',
    children: 'This is primary colored text for emphasis.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1" as="h1">Heading 1</Typography>
      <Typography variant="h2" as="h2">Heading 2</Typography>
      <Typography variant="h3" as="h3">Heading 3</Typography>
      <Typography variant="h4" as="h4">Heading 4</Typography>
      <Typography variant="h5" as="h5">Heading 5</Typography>
      <Typography variant="h6" as="h6">Heading 6</Typography>
      <Typography variant="body">Body text</Typography>
      <Typography variant="bodySmall">Body small text</Typography>
      <Typography variant="small">Small text</Typography>
      <Typography variant="tiny">Tiny text</Typography>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="body" color="default">Default color</Typography>
      <Typography variant="body" color="muted">Muted color</Typography>
      <Typography variant="body" color="primary">Primary color</Typography>
      <Typography variant="body" color="success">Success color</Typography>
      <Typography variant="body" color="warning">Warning color</Typography>
      <Typography variant="body" color="danger">Danger color</Typography>
    </div>
  ),
};

