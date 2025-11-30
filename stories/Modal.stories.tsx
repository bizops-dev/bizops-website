import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithButton = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: () => <ModalWithButton title="Default Modal" children={<p>This is the modal content.</p>} />,
};

export const Small: Story = {
  render: () => (
    <ModalWithButton 
      title="Small Modal" 
      size="sm"
      children={<p>This is a small modal for quick confirmations.</p>}
    />
  ),
};

export const Large: Story = {
  render: () => (
    <ModalWithButton 
      title="Large Modal" 
      size="lg"
      children={
        <div className="space-y-4">
          <p>This is a large modal with more content.</p>
          <p>It can contain forms, images, or complex layouts.</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">Box 1</div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">Box 2</div>
          </div>
        </div>
      }
    />
  ),
};

export const WithForm: Story = {
  render: () => (
    <ModalWithButton 
      title="Confirm Action" 
      children={
        <div className="space-y-4">
          <p>Are you sure you want to proceed with this action?</p>
          <div className="flex gap-4 justify-end">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </div>
        </div>
      }
    />
  ),
};

