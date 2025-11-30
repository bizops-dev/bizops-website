import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import CookieConsent from './components/CookieConsent';
import NPSModal from './components/NPSModal';
import SessionTracker from './components/SessionTracker';
import SEORoute from './components/SEORoute';
import ErrorBoundary from './components/ErrorBoundary';
import RouteErrorBoundary from './components/RouteErrorBoundary';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import OfflineFallback from './components/OfflineFallback';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { initializePWA, isOnline } from './utils/pwa';
import { initTracking } from './utils/tracking';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ModulePage = lazy(() => import('./pages/ModulePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogDetailPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'));
const ROIPage = lazy(() => import('./pages/ROIPage'));
const TimelineGeneratorPage = lazy(() => import('./pages/TimelineGeneratorPage'));
const AssessmentPage = lazy(() => import('./pages/AssessmentPage'));
const NeedsAnalysisPage = lazy(() => import('./pages/NeedsAnalysisPage'));
const DemoPage = lazy(() => import('./pages/DemoPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

// Restore existing pages
const PlatformPage = lazy(() => import('./pages/PlatformPage'));
const CapabilityPage = lazy(() => import('./pages/CapabilityPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const IndustryPage = lazy(() => import('./pages/IndustryPage'));
const RolePage = lazy(() => import('./pages/RolePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const PartnerApplyPage = lazy(() => import('./pages/PartnerApplyPage'));
const PartnerDirectoryPage = lazy(() => import('./pages/PartnerDirectoryPage'));
const StartupProgramPage = lazy(() => import('./pages/StartupProgramPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const WhyBizOpsPage = lazy(() => import('./pages/WhyBizOpsPage'));
const TrustPage = lazy(() => import('./pages/TrustPage'));
const MediaKitPage = lazy(() => import('./pages/MediaKitPage'));
const UseCasesPage = lazy(() => import('./pages/UseCasesPage'));
const UseCaseDetailPage = lazy(() => import('./pages/UseCaseDetailPage'));
const CustomerPage = lazy(() => import('./pages/CustomerPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const DocsPage = lazy(() => import('./pages/DocsPage'));
const StatusPage = lazy(() => import('./pages/StatusPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const MigrationPage = lazy(() => import('./pages/MigrationPage'));
const ComparisonsPage = lazy(() => import('./pages/ComparisonsPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const ProductTourPage = lazy(() => import('./pages/ProductTourPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'));
const SecurityReportPage = lazy(() => import('./pages/SecurityReportPage'));
const PricingCalculatorPage = lazy(() => import('./pages/PricingCalculatorPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const MaintenancePage = lazy(() => import('./pages/MaintenancePage'));
const AccessDeniedPage = lazy(() => import('./pages/AccessDeniedPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const ManagedServicesPage = lazy(() => import('./pages/ManagedServicesPage'));

function App() {
  const [isOffline, setIsOffline] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check initial online status
    if (typeof window !== 'undefined') {
      setIsOffline(!isOnline());
    }

    // Initialize PWA
    if (typeof window !== 'undefined') {
      initializePWA().catch((error) => {
        console.error('Failed to initialize PWA:', error);
      });
    }

    // Initialize tracking
    if (typeof window !== 'undefined') {
      initTracking();
    }

    setIsInitialized(true);

    // Listen for online/offline events
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    if (typeof window !== 'undefined') {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      }
    };
  }, []);

  // Show offline fallback if offline (only after initialization)
  if (isInitialized && isOffline) {
    return <OfflineFallback />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <ScrollToTop />
            <SessionTracker />
            <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <RouteErrorBoundary>
                <Routes>
                <Route path="/" element={<SEORoute component={HomePage} title="Home" />} />
                
                {/* Platform Routes */}
                <Route path="/platform" element={<SEORoute component={PlatformPage} title="Platform" />} />
                <Route path="/platform/modules/:moduleId" element={<SEORoute component={ModulePage} title="Module" />} />
                <Route path="/platform/capabilities/:moduleId" element={<SEORoute component={ModulePage} title="Capability" />} />
                <Route path="/platform/technologies/:moduleId" element={<SEORoute component={TechnologyPage} title="Technology" />} />
                <Route path="/tour" element={<SEORoute component={ProductTourPage} title="Product Tour" />} />

                {/* Solutions Routes */}
                <Route path="/solutions" element={<SEORoute component={SolutionsPage} title="Solutions" />} />
                <Route path="/solutions/:industryId" element={<SEORoute component={IndustryPage} title="Industry Solution" />} />
                <Route path="/role/:roleId" element={<SEORoute component={RolePage} title="Role Solution" />} />

                {/* Services Routes */}
                <Route path="/services" element={<SEORoute component={ServicesPage} title="Services" />} />
                <Route path="/services/managed-business-services" element={<SEORoute component={ManagedServicesPage} title="Enterprise Managed Services" />} />
                <Route path="/services/:serviceId" element={<SEORoute component={ServiceDetailPage} title="Service Detail" />} />

                {/* Company Routes */}
                <Route path="/partners" element={<SEORoute component={PartnersPage} title="Partners" />} />
                <Route path="/partners/directory" element={<SEORoute component={PartnerDirectoryPage} title="Partner Directory" />} />
                <Route path="/partners/apply" element={<SEORoute component={PartnerApplyPage} title="Apply Partner" />} />
                <Route path="/partners/startup" element={<SEORoute component={StartupProgramPage} title="Startup Program" />} />
                <Route path="/careers" element={<SEORoute component={CareersPage} title="Careers" />} />
                <Route path="/why-bizops" element={<SEORoute component={WhyBizOpsPage} title="Why BizOps" />} />
                <Route path="/trust" element={<SEORoute component={TrustPage} title="Trust & Security" />} />
                <Route path="/media-kit" element={<SEORoute component={MediaKitPage} title="Media Kit" />} />
                
                {/* Resources */}
                <Route path="/use-cases" element={<SEORoute component={UseCasesPage} title="Use Cases" />} />
                <Route path="/use-cases/:slug" element={<SEORoute component={UseCaseDetailPage} title="Use Case Detail" />} />
                <Route path="/customers" element={<SEORoute component={CustomerPage} title="Customer Stories" />} />
                <Route path="/events" element={<SEORoute component={EventsPage} title="Events" />} />
                <Route path="/events/:slug" element={<SEORoute component={EventDetailPage} title="Event Detail" />} />
                <Route path="/status" element={<SEORoute component={StatusPage} title="System Status" />} />
                <Route path="/download" element={<SEORoute component={DownloadPage} title="Download" />} />
                <Route path="/search" element={<SEORoute component={SearchPage} title="Search" />} />
                <Route path="/sitemap" element={<SEORoute component={SitemapPage} title="Sitemap" />} />
                <Route path="/pricing" element={<SEORoute component={PricingPage} title="Pricing" />} />
                
                {/* Knowledge Hub */}
                <Route path="/resources" element={<SEORoute component={ResourcesPage} title="Resources" />} />
                <Route path="/blog" element={<SEORoute component={BlogIndexPage} title="Blog" />} />
                <Route path="/blog/:slug" element={<SEORoute component={BlogPostPage} title="Blog Post" />} />
                <Route path="/glossary" element={<SEORoute component={GlossaryPage} title="Glossary" />} />
                <Route path="/roadmap" element={<SEORoute component={RoadmapPage} title="Product Roadmap" />} />
                
                {/* Documentation with Sub-routes */}
                <Route path="/docs" element={<SEORoute component={DocsPage} title="Documentation" />} />
                <Route path="/docs/:docId" element={<SEORoute component={DocsPage} title="Documentation" />} />
                
                {/* TOOLS (Canonical Routes) */}
                <Route path="/tools/assessment" element={<SEORoute component={AssessmentPage} title="Digital Maturity Assessment" />} />
                <Route path="/tools/needs-analysis" element={<SEORoute component={NeedsAnalysisPage} title="Needs Analysis" />} />
                <Route path="/tools/roi-calculator" element={<SEORoute component={ROIPage} title="ROI Calculator" />} />
                <Route path="/tools/pricing-calculator" element={<SEORoute component={PricingCalculatorPage} title="Pricing Calculator" />} />
                <Route path="/tools/comparison" element={<SEORoute component={ComparisonsPage} title="System Comparison" />} />
                <Route path="/tools/project-planner" element={<SEORoute component={TimelineGeneratorPage} title="Implementation Timeline" />} />
                <Route path="/tools/migration-center" element={<SEORoute component={MigrationPage} title="Migration Center" />} />
                
                {/* SHORTCUT ROUTES (Direct Access) */}
                <Route path="/assessment" element={<Navigate to="/tools/assessment" replace />} />
                <Route path="/needs-analysis" element={<Navigate to="/tools/needs-analysis" replace />} />
                <Route path="/roi-calculator" element={<Navigate to="/tools/roi-calculator" replace />} />
                <Route path="/pricing-calculator" element={<Navigate to="/tools/pricing-calculator" replace />} />
                
                {/* General Pages */}
                <Route path="/about" element={<SEORoute component={AboutPage} title="About Us" />} />
                <Route path="/contact" element={<SEORoute component={ContactPage} title="Contact" />} />
                <Route path="/demo" element={<SEORoute component={DemoPage} title="Request Demo" />} />
                <Route path="/login" element={<SEORoute component={LoginPage} title="Login" />} />

                {/* Legal */}
                <Route path="/legal" element={<Navigate to="/legal/privacy" replace />} />
                <Route path="/legal/:docId" element={<SEORoute component={LegalPage} title="Legal" />} />
                <Route path="/accessibility" element={<SEORoute component={AccessibilityPage} title="Accessibility" />} />
                <Route path="/security/report" element={<SEORoute component={SecurityReportPage} title="Report Vulnerability" />} />
                <Route path="/coming-soon" element={<SEORoute component={ComingSoonPage} title="Coming Soon" />} />
                <Route path="/maintenance" element={<SEORoute component={MaintenancePage} title="System Maintenance" />} />
                <Route path="/403" element={<SEORoute component={AccessDeniedPage} title="Access Denied" />} />
                <Route path="/500" element={<SEORoute component={ErrorPage} title="Error" props={{ isDemo: true }} />} />

                {/* 404 Fallback */}
                <Route path="*" element={<SEORoute component={NotFoundPage} title="404 Not Found" />} />
                </Routes>
              </RouteErrorBoundary>
            </Suspense>
          </main>
          <Footer />
          <CookieConsent />
          <NPSModal />
          <PWAInstallPrompt />
        </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
