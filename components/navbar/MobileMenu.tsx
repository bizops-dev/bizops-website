import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Compass, Wrench, Code, GraduationCap, Headphones, Phone, MousePointer, Download } from 'lucide-react';
import Button from '../Button';
import { platformContent, solutionsContent, resourcesContent, companyContent, servicesItems } from '../../data/navData';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onDemoClick: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onDemoClick }) => {
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  
  const location = useLocation();

  React.useEffect(() => {
    setMobilePlatformOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
    setMobileCompanyOpen(false);
  }, [location]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-slate-900 z-40 overflow-y-auto border-t border-slate-100 dark:border-slate-800 animate-fade-in-up overscroll-contain">
      <div className="flex flex-col space-y-2 p-4 pb-20">
        {/* Mobile Platform Accordion */}
        <div>
          <button 
            onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
            className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
            aria-expanded={mobilePlatformOpen}
          >
            Platform
            <ChevronDown className={`w-4 h-4 transition-transform ${mobilePlatformOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobilePlatformOpen && (
            <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Core Modules</div>
              {platformContent.modules.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Capabilities</div>
              {platformContent.capabilities.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Technology</div>
              {platformContent.technology.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200 dark:border-slate-700"></div>
              <div className="space-y-2 pt-2">
                <Link to="/tour" onClick={onClose} className="flex items-center gap-2 py-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  <span className="w-6 h-6 bg-primary-50 dark:bg-primary-900/20 rounded flex items-center justify-center"><MousePointer className="w-3.5 h-3.5" /></span> Interactive Tour
                </Link>
                <Link to="/download" onClick={onClose} className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <span className="w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center"><Download className="w-3.5 h-3.5" /></span> Download Apps
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Solutions Accordion */}
        <div>
          <button 
            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
            aria-expanded={mobileSolutionsOpen}
          >
            Solutions
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileSolutionsOpen && (
            <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">By Industry</div>
              {solutionsContent.industry.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">By Role</div>
              {solutionsContent.role.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Services Accordion */}
        <div>
          <button 
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
            aria-expanded={mobileServicesOpen}
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
              {servicesItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/pricing" onClick={onClose} className="block py-3 text-base font-medium text-slate-700 dark:text-slate-200 border-b border-slate-50 dark:border-slate-800">
          Pricing
        </Link>

        {/* Mobile Resources Accordion */}
        <div>
          <button 
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
            aria-expanded={mobileResourcesOpen}
          >
            Resources
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileResourcesOpen && (
            <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Insights & News</div>
              {resourcesContent.insights.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Tools & Utilities</div>
              {resourcesContent.tools.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Support Center</div>
              {resourcesContent.support.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200 dark:border-slate-700"></div>
              <Link to="/resources" onClick={onClose} className="flex items-center gap-2 py-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
                View All Resources
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Company Accordion */}
        <div>
          <button 
            onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
            className="flex items-center justify-between w-full text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-50 dark:border-slate-800"
            aria-expanded={mobileCompanyOpen}
          >
            Company
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileCompanyOpen && (
            <div className="pl-4 py-2 space-y-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg mb-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Our Story</div>
              {companyContent.story.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Ecosystem</div>
              {companyContent.ecosystem.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose} className="block py-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200 dark:border-slate-700"></div>
              <Link to="/contact" onClick={onClose} className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span className="w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center"><Phone className="w-3.5 h-3.5" /></span> Contact Us
              </Link>
            </div>
          )}
        </div>

        <Link to="/login" onClick={onClose} className="text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-t border-slate-100 dark:border-slate-800 mt-2 block">
          Login
        </Link>
        <div className="pt-2 block">
          <Button fullWidth onClick={onDemoClick}>Book a Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

