# 📁 Project Structure

Struktur folder yang terorganisir untuk BizOps Website.

## Root Level
```
/
├── App.tsx                 # Main app component
├── index.tsx               # Entry point
├── index.html              # HTML template
├── README.md               # Main readme
├── DESIGN_SYSTEM.md        # Design system (frequently used)
└── package.json            # Dependencies
```

## Source Code
```
/
├── components/             # React components
├── pages/                  # Page components
├── contexts/               # React contexts
├── hooks/                  # Custom hooks
├── utils/                  # Utility functions
├── data/                   # Static data/content
└── types.ts                # TypeScript types
```

## Documentation
```
docs/
├── guides/                 # Setup & development guides
│   ├── QUICK_START.md
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   └── ...
├── reports/                # Implementation reports
│   ├── FINAL_STATUS.md
│   └── ...
└── archive/                # Old/deprecated files
```

## Tests
```
tests/
├── *.test.tsx              # Component tests
├── *.test.ts               # Unit tests
├── hooks/                  # Hook tests
├── integration/            # Integration tests
└── setup.ts                # Test setup
```

## Configuration
```
/
├── .storybook/             # Storybook config
├── public/                 # Static assets
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
├── vitest.config.ts        # Vitest config
└── tailwind.config.js      # Tailwind config
```

## ✅ Improvements Made

**Before:**
- 20+ .md files scattered in root ❌
- Unclear organization ❌
- Hard to find documentation ❌

**After:**
- Documentation organized in `docs/` ✅
- Clear folder structure ✅
- Easy navigation ✅
- Tests renamed to `tests/` ✅


