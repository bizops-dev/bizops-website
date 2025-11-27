import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import '../index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <div className="p-4">
            <Story />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview;
