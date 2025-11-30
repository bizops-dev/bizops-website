import type { Meta, StoryObj } from '@storybook/react';
import FAQAccordion from '../components/FAQAccordion';

const meta: Meta<typeof FAQAccordion> = {
  title: 'Components/FAQAccordion',
  component: FAQAccordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFAQs = [
  {
    q: 'What is BizOps?',
    a: 'BizOps is an adaptive business operating system that helps companies manage their operations efficiently.',
  },
  {
    q: 'How do I get started?',
    a: 'You can start by booking a demo or signing up for a free trial. Our team will guide you through the setup process.',
  },
  {
    q: 'What features are included?',
    a: 'BizOps includes modules for HR, Finance, Operations, Sales, Supply Chain, and Governance. All modules are seamlessly integrated.',
  },
  {
    q: 'Is there a mobile app?',
    a: 'Yes, BizOps has native mobile apps for both iOS and Android, perfect for field work and on-the-go access.',
  },
  {
    q: 'Can I customize the system?',
    a: 'Yes, BizOps is built on a low-code platform that allows extensive customization without writing code.',
  },
];

export const Default: Story = {
  args: {
    faqs: sampleFAQs,
  },
};

export const SingleFAQ: Story = {
  args: {
    faqs: [sampleFAQs[0]],
  },
};

export const ManyFAQs: Story = {
  args: {
    faqs: [
      ...sampleFAQs,
      {
        q: 'What is the pricing model?',
        a: 'BizOps uses a flat pricing model based on resources, making costs predictable and scalable.',
      },
      {
        q: 'Do you offer training?',
        a: 'Yes, we offer comprehensive training programs and have an academy for ongoing learning.',
      },
      {
        q: 'Is my data secure?',
        a: 'Absolutely. BizOps is ISO 27001 certified and uses enterprise-grade security measures.',
      },
    ],
  },
};

