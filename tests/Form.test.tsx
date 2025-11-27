import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input, TextArea, Select, Checkbox } from '../components/Form';

describe('Form Components', () => {
  describe('Input', () => {
    it('renders input with label', () => {
      render(<Input label="Email" id="email" />);
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('shows error message when error prop is provided', () => {
      render(<Input label="Email" id="email" error="Email is required" />);
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    it('handles input change', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<Input label="Name" id="name" onChange={handleChange} />);
      const input = screen.getByLabelText('Name');
      
      await user.type(input, 'John');
      expect(handleChange).toHaveBeenCalled();
    });

    it('displays required indicator', () => {
      render(<Input label="Email" id="email" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('TextArea', () => {
    it('renders textarea with label', () => {
      render(<TextArea label="Message" id="message" />);
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
    });

    it('handles textarea change', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<TextArea label="Message" id="message" onChange={handleChange} />);
      const textarea = screen.getByLabelText('Message');
      
      await user.type(textarea, 'Hello');
      expect(handleChange).toHaveBeenCalled();
    });

    it('respects rows prop', () => {
      render(<TextArea label="Message" id="message" rows={5} />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toHaveAttribute('rows', '5');
    });
  });

  describe('Select', () => {
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];

    it('renders select with label and options', () => {
      render(<Select label="Choose" id="select" options={options} />);
      expect(screen.getByLabelText('Choose')).toBeInTheDocument();
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('handles select change', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<Select label="Choose" id="select" options={options} onChange={handleChange} />);
      const select = screen.getByLabelText('Choose');
      
      await user.selectOptions(select, '2');
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Checkbox', () => {
    it('renders checkbox with label', () => {
      render(<Checkbox label="Accept terms" id="terms" />);
      expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });

    it('handles checkbox toggle', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<Checkbox label="Subscribe" id="subscribe" onChange={handleChange} />);
      const checkbox = screen.getByLabelText('Subscribe');
      
      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
    });

    it('can be checked by default', () => {
      render(<Checkbox label="Subscribe" id="subscribe" checked />);
      const checkbox = screen.getByLabelText('Subscribe') as HTMLInputElement;
      expect(checkbox.checked).toBe(true);
    });
  });
});

