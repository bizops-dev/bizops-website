import React, { useState, memo } from 'react';

/**
 * Tabs component for organizing content
 * 
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
 *     { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
 *   ]}
 * />
 * ```
 */
type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type TabsProps = {
  /** Array of tab objects */
  tabs: Array<Tab>;
  /** Default active tab ID */
  defaultTab?: string;
  /** Controlled active tab */
  activeTab?: string;
  /** On tab change callback */
  onChange?: (tabId: string) => void;
  /** Tab style variant */
  variant?: 'default' | 'pills' | 'underline';
  /** Additional CSS classes */
  className?: string;
};

const Tabs: React.FC<TabsProps> = memo(({
  tabs,
  defaultTab,
  activeTab: controlledActiveTab,
  onChange,
  variant = 'default',
  className = '',
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab || tabs[0]?.id);
  
  // Use controlled or uncontrolled state
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  
  const handleTabClick = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const enabledTabs = tabs.filter(tab => !tab.disabled);
    const currentIndex = enabledTabs.findIndex(tab => tab.id === activeTab);
    
    let nextIndex = currentIndex;
    
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextIndex = (currentIndex + 1) % enabledTabs.length;
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      nextIndex = (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
    } else if (event.key === 'Home') {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === 'End') {
      event.preventDefault();
      nextIndex = enabledTabs.length - 1;
    }
    
    if (nextIndex !== currentIndex) {
      handleTabClick(enabledTabs[nextIndex].id);
    }
  };

  const variantStyles = {
    default: {
      list: 'border-b border-slate-200 dark:border-slate-800',
      button: (isActive: boolean) => `px-6 py-3 font-medium transition-colors border-b-2 ${
        isActive 
          ? 'border-primary-600 text-primary-600 dark:text-primary-400' 
          : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
      }`,
    },
    pills: {
      list: 'bg-slate-100 dark:bg-slate-800 rounded-lg p-1',
      button: (isActive: boolean) => `px-6 py-2 rounded-md font-medium transition-all ${
        isActive 
          ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-sm' 
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
      }`,
    },
    underline: {
      list: 'space-x-8',
      button: (isActive: boolean) => `pb-3 font-medium transition-colors border-b-2 ${
        isActive 
          ? 'border-primary-600 text-primary-600 dark:text-primary-400' 
          : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
      }`,
    },
  };

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={className}>
      {/* Tab List */}
      <div
        role="tablist"
        className={`flex ${variant === 'default' || variant === 'underline' ? '' : ''} ${variantStyles[variant].list}`}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`${variantStyles[variant].button(activeTab === tab.id)} disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-t-lg`}
          >
            {tab.icon && <span className="mr-2" aria-hidden="true">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className="py-6"
        >
          {activeTab === tab.id && tab.content}
        </div>
      ))}
    </div>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;

