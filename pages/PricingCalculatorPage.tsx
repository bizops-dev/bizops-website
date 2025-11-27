import React from 'react';
import PricingCalculator from '../components/PricingCalculator';
import SEO from '../components/SEO';

const PricingCalculatorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Pricing Calculator | BizOps"
        description="Calculate your BizOps subscription cost. Configure modules, users, hosting, and get instant pricing for your business needs."
        keywords="pricing calculator, erp pricing, bizops cost, subscription calculator, erp cost estimator"
        canonicalUrl="/pricing-calculator"
      />
      <PricingCalculator />
    </>
  );
};

export default PricingCalculatorPage;

