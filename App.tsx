
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Loading from './components/Loading';
import CookieConsent from './components/CookieConsent';
import NPSModal from './components/NPSModal';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { initMonitoring, initHeatmap } from './utils/monitoring';
import { initTelemetry, startSpan } from './utils/telemetry'; // Import OTel
import { reportWebVitals, logToConsole } from './utils/analytics';
import { ArrowRight, History, X } from 'lucide-react';

// Initialize Sentry / Monitoring
initMonitoring();
// Initialize Heatmap (Placeholder)
initHeatmap();
// Initialize OpenTelemetry
initTelemetry();

// Initialize Performance Auditing (Logs to console in Dev)
if (process.env.NODE_ENV !== 'production') {
  reportWebVitals(logToConsole);
}

// Session & Route Observer
const SessionTracker = () => {
  const location = useLocation();
  const [resumePath, setResumePath] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // 1. Track Route Change for Telemetry
    const span = startSpan(`route_change: ${location.pathname}`, {
      'router.path': location.pathname,
      'router.search': location.search,
      'component': 'react-router',
    });
    
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // End span
    setTimeout(() => {
      span.end();
    }, 500);

    // 2. Personalization: Save Last Visited Page
    // Ignore utility pages, home, and short visits
    const ignorePaths = ['/', '/login', '/search', '/thank-you', '/404'];
    if (!ignorePaths.includes(location.pathname)) {
      localStorage.setItem('bizops_last_visit', location.pathname);
    }

  }, [location]);

  useEffect(() => {
    // 3. Personalization: Check for Resume Opportunity on Homepage
    if (location.pathname === '/') {
      const lastVisit = localStorage.getItem('bizops_last_visit');
      if (lastVisit && lastVisit !== '/') {
        setResumePath(lastVisit);
        // Delay toast slightly for better UX
        const timer = setTimeout(() => setShowToast(true), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      setShowToast(false);
    }
  }, [location]);

  if (!showToast || !resumePath) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-8 md:bottom-20 z-40 animate-fade-in-up">
      <div className="bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-4 ring-4 ring-white/20 backdrop-blur-sm pr-2">
        <div className="flex items-center gap-2 text-sm">
          <History className="w-4 h-4 text-primary-400" />
          <span>Resume where you left off?</span>
        </div>
        <div className="flex items-center gap-2">
          <Link 
            to={resumePath} 
            onClick={() => setShowToast(false)}
            className="text-xs font-bold bg-white text-slate-900 px-3 py-1.5 rounded-full hover:bg-primary-50 transition-colors flex items-center gap-1"
          >
            Go <ArrowRight className="w-3 h-3" />
          </Link>
          <button 
            onClick={() => setShowToast(false)}
            className="p-1 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Route wrapper to handle generic SEO
interface SEORouteProps {
  component: React.ComponentType;
  title: string;
  desc?: string;
  noindex?: boolean;
}

const SEORoute: React.FC<SEORouteProps> = ({ component: Component, title, desc, noindex = false }) => {
  return (
    <>
      <SEO title={title} description={desc} noindex={noindex} />
      <Component />
    </>
  );
};

// Lazy Load Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const PlatformPage = lazy(() => import('./pages/PlatformPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const DemoPage = lazy(() => import('./pages/DemoPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const PartnerApplyPage = lazy(() => import('./pages/PartnerApplyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const IndustryPage = lazy(() => import('./pages/IndustryPage'));
const ModulePage = lazy(() => import('./pages/ModulePage'));
const RolePage = lazy(() => import('./pages/RolePage'));
const TrustPage = lazy(() => import('./pages/TrustPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ComparePage = lazy(() => import('./pages/ComparePage'));
const ComparisonsPage = lazy(() => import('./pages/ComparisonsPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'));
const ROIPage = lazy(() => import('./pages/ROIPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const CapabilityPage = lazy(() => import('./pages/CapabilityPage'));
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage'));
const CustomerPage = lazy(() => import('./pages/CustomerPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const DocsPage = lazy(() => import('./pages/DocsPage'));
const WhyBizOpsPage = lazy(() => import('./pages/WhyBizOpsPage'));
const StatusPage = lazy(() => import('./pages/StatusPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const MigrationPage = lazy(() => import('./pages/MigrationPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const ProductTourPage = lazy(() => import('./pages/ProductTourPage'));
const PreferencesPage = lazy(() => import('./pages/PreferencesPage'));
const SysReqPage = lazy(() => import('./pages/SysReqPage'));
const SecurityReportPage = lazy(() => import('./pages/SecurityReportPage'));
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'));
const MediaKitPage = lazy(() => import('./pages/MediaKitPage'));
const StartupProgramPage = lazy(() => import('./pages/StartupProgramPage'));
const CustomDevPage = lazy(() => import('./pages/CustomDevPage'));
const AutomationAIPage = lazy(() => import('./pages/AutomationAIPage'));
const MultiCompanyPage = lazy(() => import('./pages/MultiCompanyPage'));
const PortalsPage = lazy(() => import('./pages/PortalsPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          {/* Handles Telemetry & Personalization (Resume Session) */}
          <SessionTracker />
          
          {/* A11Y: Skip to Content Link */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-xl z-[100] font-bold outline-none ring-4 ring-white transition-transform"
          >
            Skip to main content
          </a>

          <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <main id="main-content" className="flex-grow relative outline-none" tabIndex={-1}>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  
                  {/* Core Pages */}
                  <Route path="/platform" element={<SEORoute component={PlatformPage} title="Platform" />} />
                  <Route path="/solutions" element={<SEORoute component={SolutionsPage} title="Solutions Overview" />} />
                  <Route path="/services" element={<SEORoute component={ServicesPage} title="Services Overview" />} />
                  
                  {/* Pages with Specific JSON-LD/SEO Handling (Direct Component) */}
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog/:slug" element={<BlogDetailPage />} />
                  <Route path="/events" element={<EventsPage />} />

                  <Route path="/partners" element={<SEORoute component={PartnersPage} title="Partners" />} />
                  <Route path="/partners/apply" element={<SEORoute component={PartnerApplyPage} title="Apply Partner" />} />
                  <Route path="/partners/startup" element={<SEORoute component={StartupProgramPage} title="Startup Program" />} />
                  <Route path="/about" element={<SEORoute component={AboutPage} title="About Us" />} />
                  <Route path="/blog" element={<SEORoute component={BlogPage} title="Blog" />} />
                  <Route path="/download" element={<SEORoute component={DownloadPage} title="Download App" />} />
                  <Route path="/demo" element={<SEORoute component={DemoPage} title="Book Demo" />} />
                  <Route path="/trust" element={<SEORoute component={TrustPage} title="Trust & Security" />} />
                  <Route path="/roadmap" element={<SEORoute component={RoadmapPage} title="Product Roadmap" />} />
                  
                  {/* Utility Pages (No Index) */}
                  <Route path="/login" element={<SEORoute component={LoginPage} title="Login" noindex={true} />} />
                  <Route path="/search" element={<SEORoute component={SearchPage} title="Global Search" noindex={true} />} />
                  <Route path="/thank-you" element={<SEORoute component={ThankYouPage} title="Thank You" noindex={true} />} />
                  <Route path="/unsubscribe" element={<SEORoute component={PreferencesPage} title="Email Preferences" noindex={true} />} />
                  
                  <Route path="/integrations" element={<SEORoute component={IntegrationsPage} title="Integrations" />} />
                  <Route path="/customers" element={<SEORoute component={CustomerPage} title="Customers" />} />
                  <Route path="/careers" element={<SEORoute component={CareersPage} title="Careers" />} />
                  <Route path="/contact" element={<SEORoute component={ContactPage} title="Contact Us" />} />
                  
                  {/* Resource & Utility Pages */}
                  <Route path="/docs" element={<SEORoute component={DocsPage} title="Documentation" />} />
                  <Route path="/why-bizops" element={<SEORoute component={WhyBizOpsPage} title="Why Choose BizOps?" />} />
                  <Route path="/status" element={<SEORoute component={StatusPage} title="System Status" />} />
                  <Route path="/glossary" element={<SEORoute component={GlossaryPage} title="Business Glossary" />} />
                  <Route path="/resources/migration" element={<SEORoute component={MigrationPage} title="Migration Center" />} />
                  <Route path="/resources/compare" element={<SEORoute component={ComparisonsPage} title="Comparison Guides" />} />

                  <Route path="/tour" element={<SEORoute component={ProductTourPage} title="Interactive Tour" />} />
                  <Route path="/docs/sysreq" element={<SEORoute component={SysReqPage} title="System Requirements" />} />
                  <Route path="/security/report" element={<SEORoute component={SecurityReportPage} title="Report Vulnerability" />} />
                  <Route path="/accessibility" element={<SEORoute component={AccessibilityPage} title="Accessibility" />} />
                  <Route path="/media-kit" element={<SEORoute component={MediaKitPage} title="Media Kit" />} />
                  <Route path="/sitemap" element={<SEORoute component={SitemapPage} title="Sitemap" />} />

                  {/* Dynamic Routes for Content */}
                  <Route path="/platform/:moduleId" element={<SEORoute component={ModulePage} title="Module Detail" />} />
                  <Route path="/platform/automation-ai" element={<SEORoute component={AutomationAIPage} title="Automation & AI" />} />
                  <Route path="/platform/multi-company" element={<SEORoute component={MultiCompanyPage} title="Multi-Company" />} />
                  <Route path="/platform/portals" element={<SEORoute component={PortalsPage} title="Self-Service Portals" />} />
                  <Route path="/platform/analytics" element={<SEORoute component={AnalyticsPage} title="Analytics & Reporting" />} />

                  <Route path="/solutions/:industryId" element={<SEORoute component={IndustryPage} title="Industry Solution" />} />
                  <Route path="/role/:roleId" element={<SEORoute component={RolePage} title="Role Dashboard" />} />
                  
                  <Route path="/services/custom-dev" element={<SEORoute component={CustomDevPage} title="Custom Development" />} />
                  <Route path="/services/:serviceId" element={<SEORoute component={ServiceDetailPage} title="Service Detail" />} />
                  
                  <Route path="/compare/:competitorId" element={<SEORoute component={ComparePage} title="Compare" />} />
                  <Route path="/capabilities/:capabilityId" element={<SEORoute component={CapabilityPage} title="Capability" />} />
                  
                  <Route path="/resources/roi" element={<SEORoute component={ROIPage} title="ROI Calculator" />} />
                  <Route path="/legal/:docId" element={<SEORoute component={LegalPage} title="Legal" />} />

                  {/* Fallback */}
                  <Route path="*" element={<SEORoute component={NotFoundPage} title="404 Not Found" noindex={true} />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <CookieConsent />
            <NPSModal />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
