import { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  children?: Array<NavItem>;
  icon?: LucideIcon;
  description?: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Array<string>;
  cta: string;
  popular?: boolean;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Metric = {
  value: string;
  label: string;
};

export type Challenge = {
  title: string;
  desc: string;
};

export type Solution = {
  title: string;
  desc: string;
};

export type IndustryData = {
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  icon: LucideIcon;
  challenges: Array<Challenge>;
  solutions: Array<Solution>;
  caseStudyTitle: string;
  caseStudy: string;
};

export type RoleData = {
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  icon: LucideIcon;
  challenges: Array<Challenge>;
  solutions: Array<Solution>;
  caseStudyTitle: string;
  caseStudy: string;
};

export type ModuleFeature = {
  title: string;
  desc: string;
};

export type ModuleConnection = {
  target: string;
  desc: string;
};

export type ModuleData = {
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  icon: LucideIcon;
  features: Array<ModuleFeature>;
  mobileAdvantage?: {
    title: string;
    desc: string;
  };
  connections?: Array<ModuleConnection>;
  cta?: {
    text: string;
    buttonLabel: string;
  };
};
