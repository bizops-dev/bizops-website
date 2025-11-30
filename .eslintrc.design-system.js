/**
 * ESLint Rules for Design System Enforcement
 * 
 * These rules help enforce consistent usage of design tokens and components
 * Add these rules to your main .eslintrc.cjs file
 */

module.exports = {
  rules: {
    // Prevent hardcoded hex colors (use Tailwind classes instead)
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'Literal[value=/#[0-9A-Fa-f]{3,6}/]',
        message: 'Avoid hardcoded hex colors. Use Tailwind color classes (e.g., bg-primary-600) or design tokens instead.',
      },
    ],
    
    // Prevent common anti-patterns
    'no-restricted-properties': [
      'warn',
      {
        object: 'className',
        property: 'includes',
        message: 'Avoid dynamic className manipulation. Use conditional classes or clsx/twMerge instead.',
      },
    ],
  },
  
  // Custom warnings for common issues
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        // Warn about potential typography inconsistencies
        'no-warning-comments': [
          'warn',
          {
            terms: ['TODO', 'FIXME', 'XXX', 'HACK'],
            location: 'anywhere',
          },
        ],
      },
    },
  ],
};

/**
 * RECOMMENDED PATTERNS:
 * 
 * ✅ GOOD:
 * - <Typography variant="h1">Title</Typography>
 * - <Button variant="primary">Click</Button>
 * - <Card variant="default" padding="md">Content</Card>
 * - className="bg-primary-600 text-white"
 * - className={gradients.primary}
 * 
 * ❌ BAD:
 * - <h1 className="text-4xl font-bold">Title</h1>
 * - <button className="bg-blue-600">Click</button>
 * - <div className="p-6 rounded-xl border">Content</div>
 * - style={{ backgroundColor: '#2563EB' }}
 * - className="bg-[#2563EB]"
 */

