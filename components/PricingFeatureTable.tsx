import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { featureComparison, FeatureCategory } from '../data/pricingData';
import Card from './Card';

const PricingFeatureTable: React.FC = () => {
  // Safety check for data
  const data = featureComparison || [];
  const initialCategory = data.length > 0 ? data[0].category : '';

  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    initialCategory
  ]);

  if (data.length === 0) {
    return null; // Or render loading state
  }

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

      {/* Desktop Accordion View */}
      <div className="hidden lg:block space-y-4">
        {/* Header Row */}
        <Card padding="none">
          <div className="grid grid-cols-4 gap-4 p-6 bg-slate-100 dark:bg-slate-800">
            <div className="font-bold text-slate-900 dark:text-white">Fitur</div>
            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white">Business</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">IDR 2.5 Jt/bln</div>
            </div>
            <div className="text-center bg-primary-50 dark:bg-primary-900/20 rounded-lg p-2">
              <div className="font-bold text-primary-600 dark:text-primary-400">Growth</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">IDR 7.5 Jt/bln</div>
              <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full mt-2">
                POPULAR
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-slate-900 dark:text-white">Enterprise</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Custom</div>
            </div>
          </div>
        </Card>

        {/* Categories */}
        {data.map((category) => (
          <Card key={category.category} padding="none">
            <button
              onClick={() => toggleCategory(category.category)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
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
                    className="grid grid-cols-4 gap-4 p-4 border-b border-slate-100 dark:border-slate-800/50 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <span>{feature.name}</span>
                        {feature.description && (
                          <span className="text-xs text-slate-500">({feature.description})</span>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center">{renderFeatureValue(feature.business)}</div>
                    <div className="flex justify-center bg-primary-50/30 dark:bg-primary-900/10 rounded">
                      {renderFeatureValue(feature.growth)}
                    </div>
                    <div className="flex justify-center">{renderFeatureValue(feature.enterprise)}</div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Mobile Accordion View */}
      <div className="lg:hidden space-y-4">
        {data.map((category) => (
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
            <span className="text-slate-500">-</span>
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

