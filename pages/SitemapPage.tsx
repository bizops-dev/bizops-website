import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Layers, Briefcase, BookOpen, Shield, Users, Wrench, Globe, HelpCircle, Code, DollarSign, FileText } from 'lucide-react';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';

const SitemapPage: React.FC = () => {
  const sitemapData = [
    {
      title: "Main",
      icon: Globe,
      color: "text-indigo-600 bg-indigo-50",
      links: [
        { label: "Home", to: "/" },
        { label: "Product Tour", to: "/tour" },
        { label: "Pricing", to: "/pricing" },
        { label: "Login", to: "/login" },
        { label: "Request Demo", to: "/demo" },
        { label: "Global Search", to: "/search" },
      ]
    },
    {
      title: "Platform",
      icon: Layers,
      color: "text-blue-600 bg-blue-50",
      links: [
        { label: "Platform Overview", to: "/platform" },
        { label: "Human Capital Module", to: "/platform/modules/hr" },
        { label: "Finance Module", to: "/platform/modules/finance" },
        { label: "Operations Module", to: "/platform/modules/operations" },
        { label: "Capabilities", to: "/platform#capabilities" },
        { label: "Technology Stack", to: "/platform/technologies/architecture" },
        { label: "Integrations Library", to: "/platform/technologies/integration" },
        { label: "Download Apps", to: "/download" },
        { label: "System Status", to: "/status" },
      ]
    },
    {
      title: "Solutions",
      icon: Briefcase,
      color: "text-purple-600 bg-purple-50",
      links: [
        { label: "All Industries", to: "/solutions" },
        { label: "Manufacturing ERP", to: "/solutions/manufacturing" },
        { label: "Retail & Distribution", to: "/solutions/retail" },
        { label: "Construction & Engineering", to: "/solutions/construction" },
        { label: "Outsourcing Service", to: "/solutions/outsourcing" },
        { label: "Professional Services", to: "/solutions/consulting" },
        { label: "Enterprise / Holding", to: "/solutions/enterprise" },
        { label: "By Role Overview", to: "/solutions#role" },
        { label: "For CEO/Founders", to: "/role/ceo" },
        { label: "For CFO/Finance", to: "/role/finance" },
        { label: "For HR Managers", to: "/role/hr" },
        { label: "For IT Managers (CTO)", to: "/role/it" },
        { label: "For Ops Managers", to: "/role/ops" },
      ]
    },
    {
      title: "Services",
      icon: HelpCircle,
      color: "text-teal-600 bg-teal-50",
      links: [
        { label: "Professional Services Overview", to: "/services" },
        { label: "Strategic Consulting", to: "/services/consulting" },
        { label: "Implementation & Migration", to: "/services/implementation" },
        { label: "Custom Development", to: "/services/custom-dev" },
        { label: "Training & Adoption", to: "/services/training" },
        { label: "Managed Support (SLA)", to: "/services/support" },
      ]
    },
    {
      title: "Interactive Tools",
      icon: Wrench,
      color: "text-amber-600 bg-amber-50",
      links: [
        { label: "Digital Maturity Assessment", to: "/tools/assessment" },
        { label: "Needs Analysis Tool", to: "/tools/needs-analysis" },
        { label: "ROI Calculator", to: "/tools/roi-calculator" },
        { label: "Pricing Calculator", to: "/tools/pricing-calculator" },
        { label: "System Comparison", to: "/tools/comparison" },
        { label: "Implementation Timeline", to: "/tools/project-planner" },
        { label: "Migration Center", to: "/tools/migration-center" },
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      color: "text-orange-600 bg-orange-50",
      links: [
        { label: "Resource Center", to: "/resources" },
        { label: "Blog & Insights", to: "/blog" },
        { label: "Customer Stories", to: "/customers" },
        { label: "Use Cases", to: "/use-cases" },
        { label: "Events & Webinars", to: "/events" },
        { label: "Glossary", to: "/glossary" },
        { label: "Product Roadmap", to: "/roadmap" },
      ]
    },
    {
      title: "Developers & Docs",
      icon: Code,
      color: "text-slate-600 bg-slate-100",
      links: [
        { label: "Documentation Hub", to: "/docs" },
        { label: "API Reference", to: "/docs/api" },
        { label: "Integration Guides", to: "/docs/integrations" },
        { label: "Release Notes", to: "/docs/changelog" },
      ]
    },
    {
      title: "Company",
      icon: Users,
      color: "text-green-600 bg-green-50",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Why BizOps", to: "/why-bizops" },
        { label: "Careers", to: "/careers" },
        { label: "Partners Program", to: "/partners" },
        { label: "Partner Directory", to: "/partners/directory" },
        { label: "Apply for Partnership", to: "/partners/apply" },
        { label: "Startup Program", to: "/partners/startup" },
        { label: "Contact Us", to: "/contact" },
        { label: "Media Kit", to: "/media-kit" },
      ]
    },
    {
      title: "Legal & Trust",
      icon: Shield,
      color: "text-red-600 bg-red-50",
      links: [
        { label: "Trust Center", to: "/trust" },
        { label: "Privacy Policy", to: "/legal/privacy" },
        { label: "Privacy Center (DSAR)", to: "/legal/data-rights" },
        { label: "Terms of Service", to: "/legal/terms" },
        { label: "SLA", to: "/legal/sla" },
        { label: "Data Processing Agmt", to: "/legal/dpa" },
        { label: "AI Ethics", to: "/legal/ai-ethics" },
        { label: "Security Report", to: "/security/report" },
        { label: "Accessibility", to: "/accessibility" },
        { label: "Cookie Preferences", to: "/legal/cookies" },
      ]
    },
  ];

  return (
    <div className="pt-24 pb-24 bg-white dark:bg-slate-950 min-h-screen transition-colors">
      <SEO title="Sitemap" description="Complete overview of BizOps website structure." />
      
      <Container className="px-4 md:px-6 lg:px-8" size="7xl">
        <div className="text-center mb-16">
          <Typography variant="h1" as="h1">Sitemap</Typography>
          <Typography variant="body" className="text-slate-600 dark:text-slate-400">Jelajahi seluruh halaman dan fitur yang tersedia di ekosistem BizOps.</Typography>
        </div>

        <Grid cols={3} gap={8}>
          {sitemapData.map((section, idx) => (
            <div key={idx} className="border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 bg-white dark:bg-slate-900">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${section.color}`}>
                <section.icon className="w-5 h-5 py-16 md:py-24" />
              </div>
              <Typography variant="h2" as="h2" className="font-bold text-slate-900 dark:text-white">{section.title}</Typography>
              <ul className="space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link to={link.to} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default SitemapPage;
