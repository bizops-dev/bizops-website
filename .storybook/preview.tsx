import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import { BrowserRouter } from 'react-router-dom';
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
    // Percy configuration
    percy: {
      // Skip Percy snapshots for specific stories
      skip: false,
      // Additional Percy options per story
      widths: [375, 768, 1280],
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
              <Story />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
