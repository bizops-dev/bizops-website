import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, MousePointer, Download, Phone, Search } from 'lucide-react';
import { platformTabs, platformContent, solutionsTabs, solutionsContent, resourcesTabs, resourcesContent, companyTabs, companyContent, servicesItems } from '../../data/navData';

type MegaMenuProps = {
  type: 'platform' | 'solutions' | 'resources' | 'company';
  onClose?: () => void;
};

const MegaMenu: React.FC<MegaMenuProps> = ({ type, onClose }) => {
  const getTabs = () => {
    switch (type) {
      case 'platform': return platformTabs;
      case 'solutions': return solutionsTabs;
      case 'resources': return resourcesTabs;
      case 'company': return companyTabs;
      default: return [];
    }
  };

  const getContent = () => {
    switch (type) {
      case 'platform': return platformContent;
      case 'solutions': return solutionsContent;
      case 'resources': return resourcesContent;
      case 'company': return companyContent;
      default: return {};
    }
  };

  const getDefaultTab = () => {
    switch (type) {
      case 'platform': return 'modules';
      case 'solutions': return 'industry';
      case 'resources': return 'insights';
      case 'company': return 'story';
      default: return '';
    }
  };

  const tabs = getTabs();
  const content = getContent();
  const [activeTab, setActiveTab] = useState(getDefaultTab());

  const activeContent = content[activeTab];

  return (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar (Tabs) */}
        <div className={`${type === 'platform' ? 'w-64' : 'w-60'} bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 py-6 flex-shrink-0 rounded-bl-xl`}>
          <div className="px-4 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
            {type === 'platform' && 'Platform Overview'}
            {type === 'solutions' && 'Find Solutions'}
            {type === 'resources' && 'Resource Hub'}
            {type === 'company' && 'Who We Are'}
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onMouseEnter={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 flex items-center justify-between text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary-600' : 'text-slate-400'}`} />
                {tab.label}
              </div>
              {activeTab === tab.id && <ChevronRight className="w-3 h-3 text-primary-600" />}
            </button>
          ))}
          
          {/* Additional Links */}
          {type === 'platform' && (
            <div className="mt-6 px-4">
              <Link to="/tour" className="flex items-center gap-2 p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-bold hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors mb-2">
                <MousePointer className="w-4 h-4" /> Interactive Tour
              </Link>
              <Link to="/download" className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <Download className="w-4 h-4" /> Download Apps
              </Link>
            </div>
          )}
          
          {type === 'company' && (
            <div className="mt-6 px-4">
              <Link to="/contact" className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary-200 transition-all shadow-sm group/btn">
                <div className="w-6 h-6 rounded-md bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover/btn:bg-primary-100 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                Contact Us
              </Link>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 min-h-[350px]">
          {activeContent && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {activeContent.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {activeContent.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {activeContent.items.map((item, idx) => {
                  const bgColor = item.bg || 'bg-slate-100 dark:bg-slate-800 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 shadow-sm';
                  const iconColor = item.color || 'text-slate-600 dark:text-slate-300';
                  
                  return (
                    <Link 
                      key={idx} 
                      to={item.to} 
                      onClick={onClose}
                      className="group/item flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className={`mt-1 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${bgColor}`}>
                        <item.icon className={`w-5 h-5 ${iconColor}`} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-primary-600 transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <Link 
                  to={
                    type === 'platform' ? '/platform' : 
                    type === 'solutions' ? '/solutions' : 
                    type === 'resources' ? '/resources' : 
                    type === 'company' ? '/about' : '#'
                  } 
                  onClick={onClose}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                >
                  View all {type} features <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

