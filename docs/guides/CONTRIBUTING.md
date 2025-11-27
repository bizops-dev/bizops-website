# 🤝 Contributing to BizOps Website

Thank you for your interest in contributing to the BizOps website! This document provides guidelines and instructions for contributing to this project.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

---

## 📖 Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive environment for all contributors.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git**
- A code editor (VS Code recommended)

### Initial Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bizops-website.git
   cd bizops-website
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/bizops/bizops-website.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create `.env` file**
   ```bash
   # Copy the template
   cp .env.example .env
   
   # Fill in your values
   # See ENV_SETUP.md for detailed instructions
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Visit** http://localhost:3000

---

## 🔄 Development Workflow

### 1. Create a Feature Branch

```bash
# Ensure you're on main and up-to-date
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the coding standards (see below)
- Add tests for new features
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run tests
npm run test

# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
# See commit message guidelines below
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

---

## 💻 Coding Standards

### TypeScript

- ✅ **Use TypeScript** for all new files
- ✅ **Strict mode** is enabled - no `any` types
- ✅ **Type everything** explicitly
- ✅ **Use interfaces** for objects, types for unions
- ❌ **Avoid `@ts-ignore`** - fix the underlying issue

**Example:**
```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = (id: string): User => {
  // ...
};

// ❌ Bad
const getUser = (id: any): any => {
  // ...
};
```

### React Components

- ✅ **Functional components** with hooks
- ✅ **TypeScript** with proper props typing
- ✅ **Named exports** for components
- ✅ **Props interface** before component
- ❌ **No class components** for new code

**Example:**
```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={variant}>
      {label}
    </button>
  );
};

export default Button;
```

### File Naming

- **Components:** PascalCase (e.g., `Button.tsx`, `Navbar.tsx`)
- **Utilities:** camelCase (e.g., `analytics.ts`, `monitoring.ts`)
- **Contexts:** PascalCase (e.g., `ThemeContext.tsx`)
- **Pages:** PascalCase (e.g., `HomePage.tsx`)
- **Tests:** Match source file with `.test.` suffix (e.g., `Button.test.tsx`)

### CSS/Styling

- ✅ **Tailwind CSS** for all styling
- ✅ **Use design tokens** from `design-tokens.ts`
- ✅ **Responsive first** (mobile → desktop)
- ✅ **Dark mode support** (use `dark:` prefix)
- ❌ **No inline styles** unless absolutely necessary
- ❌ **No custom CSS** unless for complex animations

**Example:**
```tsx
// ✅ Good
<button className="h-11 px-5 bg-primary-600 text-white rounded-lg hover:bg-primary-500 dark:bg-primary-700">
  Click me
</button>

// ❌ Bad
<button style={{ height: '44px', backgroundColor: '#2563EB' }}>
  Click me
</button>
```

### Imports

- ✅ **Absolute imports** using `@/` alias
- ✅ **Group imports:** React → Third-party → Local
- ✅ **Sort alphabetically** within groups

**Example:**
```typescript
// ✅ Good
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import Button from '@/components/Button';
import { useTheme } from '@/contexts/ThemeContext';
import { logEvent } from '@/utils/analytics';

// ❌ Bad
import { logEvent } from '@/utils/analytics';
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
```

---

## 🧪 Testing Guidelines

### Test Coverage Requirements

- **Minimum:** 70% coverage for new code
- **Critical components:** 90%+ coverage
- **Utility functions:** 100% coverage

### What to Test

1. **Component rendering**
2. **User interactions** (click, type, etc.)
3. **Edge cases** and error handling
4. **Accessibility** features
5. **Integration** between components

### Test Structure

```typescript
describe('ComponentName', () => {
  describe('Feature Group', () => {
    it('does something specific', () => {
      // Arrange
      const props = { ... };
      
      // Act
      render(<Component {...props} />);
      
      // Assert
      expect(screen.getByText('...')).toBeInTheDocument();
    });
  });
});
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test Button.test.tsx

# Run tests with UI
npm run test:ui
```

---

## 📝 Commit Messages

We follow **Conventional Commits** specification.

### Format

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes

### Examples

```bash
# Feature
git commit -m "feat(navbar): add mobile menu animation"

# Bug fix
git commit -m "fix(button): resolve focus state on safari"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Multiple changes
git commit -m "feat(homepage): add testimonials section

- Add Testimonials component
- Integrate with CMS data
- Add responsive layout
- Add tests

Closes #123"
```

### Scope Guidelines

- **component name** for component changes (e.g., `button`, `navbar`)
- **page name** for page changes (e.g., `homepage`, `pricing`)
- **utility name** for utility changes (e.g., `analytics`, `monitoring`)
- Leave empty for project-wide changes

---

## 🔄 Pull Request Process

### Before Creating PR

- [ ] All tests passing
- [ ] Code formatted (`npm run format`)
- [ ] No linter errors (`npm run lint`)
- [ ] Type check passing (`npm run type-check`)
- [ ] Documentation updated
- [ ] Self-review completed

### PR Title

Follow same format as commit messages:
```
feat(navbar): add mobile menu animation
```

### PR Description Template

```markdown
## What does this PR do?
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How to Test
Step-by-step instructions to test changes

## Screenshots (if applicable)
Before/After screenshots

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console warnings
- [ ] Accessibility checked
- [ ] Mobile responsive
- [ ] Dark mode tested

## Related Issues
Closes #123
```

### Review Process

1. **Automated checks** must pass (CI/CD)
2. **At least 1 approval** from maintainer
3. **Address feedback** promptly
4. **Resolve conflicts** if any
5. **Squash and merge** (maintainer will do this)

---

## 📁 Project Structure

```
bizops-website/
├── .github/
│   └── workflows/        # CI/CD workflows
├── components/           # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
├── contexts/            # React contexts
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── data/                # Content data
│   ├── content.ts
│   └── ...
├── pages/               # Page components
│   ├── HomePage.tsx
│   └── ...
├── test/                # Test files
│   ├── Button.test.tsx
│   └── integration/
├── utils/               # Utility functions
│   ├── analytics.ts
│   └── ...
├── design-tokens.ts     # Design system tokens
├── types.ts             # TypeScript types
├── index.css            # Global styles
├── index.tsx            # Entry point
└── App.tsx              # Main app component
```

### Adding New Files

- **Component:** Add to `components/`
- **Page:** Add to `pages/`
- **Utility:** Add to `utils/`
- **Test:** Add to `test/` (mirror structure)
- **Documentation:** Add to root with `.md` extension

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Quality Checks
npm run test             # Run tests
npm run test:ui          # Run tests with UI
npm run test:coverage    # Run tests with coverage
npm run type-check       # TypeScript type check
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
```

---

## 🐛 Reporting Bugs

### Before Submitting

1. **Search existing issues** to avoid duplicates
2. **Use latest version** of code
3. **Check documentation** for known issues

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- OS: [e.g., macOS, Windows, Linux]
- Browser: [e.g., Chrome 120, Safari 17]
- Node version: [e.g., 18.19.0]

## Additional Context
Any other relevant information
```

---

## 💡 Feature Requests

### Suggesting Features

1. **Check existing issues/PRs** for similar ideas
2. **Provide clear use case** and rationale
3. **Describe expected behavior**
4. **Add mockups** if possible

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Problem it Solves
What user pain point does this address?

## Proposed Solution
How would you implement this?

## Alternatives Considered
Other approaches you've thought about

## Additional Context
Mockups, examples, etc.
```

---

## 🎓 Learning Resources

### Project-Specific

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Design system documentation
- [ENV_SETUP.md](./ENV_SETUP.md) - Environment variable setup
- [SECURITY_HEADERS.md](./SECURITY_HEADERS.md) - Security configuration

### External Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

---

## 📞 Getting Help

- **Questions:** Open a [GitHub Discussion](https://github.com/bizops/bizops-website/discussions)
- **Bugs:** Open a [GitHub Issue](https://github.com/bizops/bizops-website/issues)
- **Chat:** Join our [Discord/Slack]
- **Email:** dev@bizops.id

---

## 🏆 Recognition

Contributors are recognized in:
- GitHub contributors page
- CHANGELOG.md file
- README.md (for significant contributions)

Thank you for contributing to BizOps! 🎉

---

**Last Updated:** 27 November 2025  
**Version:** 1.0

