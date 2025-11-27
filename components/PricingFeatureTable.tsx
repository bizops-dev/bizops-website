import React, { useState } from 'react';
import { Check, X, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { featureComparison, FeatureCategory } from '../data/pricingData';
import Card from './Card';

const PricingFeatureTable: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    featureComparison[0]?.category || ''
  ]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex justify-center">
          <X className="w-5 h-5 text-slate-300 dark:text-slate-700" />
        </div>
      );
    }
    // String value
    return (
      <div className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
        {value}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Perbandingan Fitur Detail
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Lihat semua fitur yang tersedia di setiap paket
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="text-left py-4 px-6 font-bold text-slate-900 dark:text-white sticky left-0 bg-slate-100 dark:bg-slate-800 z-10">
                Fitur
              </th>
              <th className="text-center py-4 px-6 font-bold text-slate-900 dark:text-white">
                <div className="text-lg">Business</div>
                <div className="text-sm font-normal text-slate-600 dark:text-slate-400 mt-1">
                  IDR 2.5 Jt/bln
                </div>
              </th>
              <th className="text-center py-4 px-6 font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20">
                <div className="text-lg">Growth</div>
                <div className="text-sm font-normal text-slate-600 dark:text-slate-400 mt-1">
                  IDR 7.5 Jt/bln
                </div>
                <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full mt-2">
                  POPULAR
                </div>
              </th>
              <th className="text-center py-4 px-6 font-bold text-slate-900 dark:text-white">
                <div className="text-lg">Enterprise</div>
                <div className="text-sm font-normal text-slate-600 dark:text-slate-400 mt-1">
                  Custom
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {featureComparison.map((category, catIdx) => (
              <React.Fragment key={category.category}>
                {/* Category Header */}
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-t-2 border-slate-200 dark:border-slate-700">
                  <td colSpan={4} className="py-3 px-6 font-bold text-slate-900 dark:text-white sticky left-0 bg-slate-50 dark:bg-slate-900/50">
                    {category.category}
                  </td>
                </tr>
                {/* Features */}
                {category.features.map((feature, idx) => (
                  <tr
                    key={`${catIdx}-${idx}`}
                    className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors"
                  >
                    <td className="py-4 px-6 text-slate-700 dark:text-slate-300 sticky left-0 bg-white dark:bg-slate-950">
                      <div className="flex items-center gap-2">
                        <span>{feature.name}</span>
                        {feature.description && (
                          <span className="text-xs text-slate-500 dark:text-slate-500">
                            ({feature.description})
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">{renderFeatureValue(feature.business)}</td>
                    <td className="py-4 px-6 bg-primary-50/30 dark:bg-primary-900/10">
                      {renderFeatureValue(feature.growth)}
                    </td>
                    <td className="py-4 px-6">{renderFeatureValue(feature.enterprise)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Accordion View */}
      <div className="lg:hidden space-y-4">
        {featureComparison.map((category) => (
          <Card key={category.category} padding="none">
            <button
              onClick={() => toggleCategory(category.category)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <h3 className="font-bold text-slate-900 dark:text-white">
                {category.category}
              </h3>
              {expandedCategories.includes(category.category) ? (
                <ChevronUp className="w-5 h-5 text-slate-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500" />
              )}
            </button>

            {expandedCategories.includes(category.category) && (
              <div className="border-t border-slate-200 dark:border-slate-800">
                {category.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-b border-slate-100 dark:border-slate-800/50 last:border-b-0"
                  >
                    <div className="font-medium text-slate-900 dark:text-white mb-3">
                      {feature.name}
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          Business
                        </div>
                        {renderFeatureValue(feature.business)}
                      </div>
                      <div>
                        <div className="text-xs text-primary-600 dark:text-primary-400 mb-1 font-semibold">
                          Growth
                        </div>
                        {renderFeatureValue(feature.growth)}
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          Enterprise
                        </div>
                        {renderFeatureValue(feature.enterprise)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Legend */}
      <Card className="mt-8">
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-slate-700 dark:text-slate-300">Included</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-5 h-5 text-slate-300" />
            <span className="text-slate-700 dark:text-slate-300">Not Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="w-5 h-5 text-slate-500" />
            <span className="text-slate-700 dark:text-slate-300">
              Custom text indicates feature level or limit
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingFeatureTable;

